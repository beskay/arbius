// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./BaseTest.sol";

/**
 * @notice Isolated tests for VeStaking.sol, without involvement of engine contract
 * @dev Can be run with `forge test --mc VeStakingTest`
 */
contract VeStakingTest is BaseTest {
    function setUp() public {
        // set time
        vm.warp((1704067200 / WEEK) * WEEK); // Thu Dec 28 2023 00:00:00 GMT+0000

        deployContracts();

        // mint and approve AIUS
        mintTestAius();
        approveTestAiusToEscrow();
    }

    /* settings and restricted functions */

    function testConstructorAndSettings() public {
        assertEq(veStaking.owner(), address(this), "owner != this");
        assertEq(
            address(veStaking.rewardsToken()),
            address(AIUS),
            "rewardsToken != AIUS"
        );
        assertEq(
            address(veStaking.votingEscrow()),
            address(votingEscrow),
            "votingEscrow != votingEscrow"
        );
        assertEq(
            veStaking.rewardsDuration(),
            1 weeks,
            "rewardsDuration != 1 weeks"
        );
    }

    function testOnlyOwner() public {
        vm.prank(alice);
        vm.expectRevert(abi.encodePacked("Ownable: caller is not the owner"));
        veStaking.setRewardsDuration(2 weeks);

        vm.prank(alice);
        vm.expectRevert(abi.encodePacked("Ownable: caller is not the owner"));
        veStaking.recoverERC20(address(mockToken), 10 ether);

        vm.prank(alice);
        vm.expectRevert(abi.encodePacked("Ownable: caller is not the owner"));
        veStaking.setBalance(1, 10 ether);

        vm.prank(alice);
        vm.expectRevert(abi.encodePacked("Ownable: caller is not the owner"));
        veStaking.setEmergency(true);

        vm.prank(alice);
        vm.expectRevert(abi.encodePacked("Ownable: caller is not the owner"));
        veStaking.setEngine(address(this));

        vm.prank(alice);
        vm.expectRevert(abi.encodePacked("Ownable: caller is not the owner"));
        veStaking.recoverERC20(address(mockToken), 100 ether);
    }

    function testOnlyVotingEscrow() public {
        vm.prank(alice);
        vm.expectRevert(
            abi.encodePacked("Caller is not VotingEscrow contract")
        );
        veStaking._stake(1, 100 ether);

        vm.prank(alice);
        vm.expectRevert(
            abi.encodePacked("Caller is not VotingEscrow contract")
        );
        veStaking._withdraw(100 ether);

        vm.prank(alice);
        vm.expectRevert(
            abi.encodePacked("Caller is not VotingEscrow contract")
        );
        veStaking._updateBalance(1, 100 ether);
    }

    function testRecoverERC20() public {
        mockToken.mint(address(this), 100 ether);
        mockToken.transfer(address(veStaking), 100 ether);

        veStaking.recoverERC20(address(mockToken), 100 ether);
        assertEq(
            mockToken.balanceOf(address(this)),
            100 ether,
            "!balanceOf(this)"
        );
    }

    function testSetRewardsDuration() public {
        // call notifyRewardAmount to start rewardsDuration
        veStaking.notifyRewardAmount(0);
        assertEq(veStaking.rewardsDuration(), 1 weeks, "!rewardsDuration");

        uint256 initialPeriodFinish = veStaking.periodFinish();
        assertEq(
            initialPeriodFinish,
            block.timestamp + 1 weeks,
            "!periodFinish"
        );

        // fast forward to end of rewards period
        vm.warp(initialPeriodFinish + 1);

        // set rewardsDuration to 2 weeks
        veStaking.setRewardsDuration(2 weeks);

        // rewardsDuration should be updated
        assertEq(veStaking.rewardsDuration(), 2 weeks, "!rewardsDuration");

        // call notifyRewardAmount to start new rewards period
        veStaking.notifyRewardAmount(0);

        // periodFinish should be updated to `initialPeriodFinish + 2 weeks`
        assertEq(
            veStaking.periodFinish(),
            initialPeriodFinish + 2 weeks,
            "!periodFinish"
        );
    }

    function testSetRewardsDurationBeforePeriodFinish() public {
        // call notifyRewardAmount to start rewardsDuration
        veStaking.notifyRewardAmount(0);
        assertEq(veStaking.rewardsDuration(), 1 weeks, "!rewardsDuration");

        uint256 initialPeriodFinish = veStaking.periodFinish();
        assertEq(
            initialPeriodFinish,
            block.timestamp + 1 weeks,
            "!periodFinish"
        );

        // should fail, previous rewards period must be complete before changing the duration
        vm.expectRevert();
        veStaking.setRewardsDuration(2 weeks);
    }

    function testRestrictedNotifyRewardAmount() public {
        vm.prank(alice);
        vm.expectRevert(abi.encodePacked("Caller is not engine contract or owner"));
        veStaking.notifyRewardAmount(0);

        // owner should be able to call to manually add rewards
        veStaking.notifyRewardAmount(0);

        // for testing: engine address is now alice
        veStaking.setEngine(alice);

        // alice should be able to call notifyRewardAmount
        vm.prank(alice);
        veStaking.notifyRewardAmount(0);
    }

    function testSetBalance() public {
        // set balance of NFT to 200 AIUS
        veStaking.setBalance(1, 200 ether);

        // balance of NFT and totalsupply should be updated
        assertEq(veStaking.balanceOf(1), 200 ether, "!balanceOfNFT");
        assertEq(veStaking.totalSupply(), 200 ether, "!totalSupply");

        // alice stakes 100 AIUS
        vm.prank(alice);
        votingEscrow.create_lock(100 ether, 1 weeks);
         
        // balance of NFT and totalsupply should be updated
        assertEq(veStaking.balanceOf(1), 200 ether + 958904109588902400, "!balanceOfNFT");
        assertEq(veStaking.totalSupply(), 200 ether + 958904109588902400, "!totalSupply");

        // set balance of NFT back to 200 AIUS
        veStaking.setBalance(1, 200 ether);

        // balance of NFT and totalsupply should be updated
        assertEq(veStaking.balanceOf(1), 200 ether, "!balanceOfNFT");
        assertEq(veStaking.totalSupply(), 200 ether, "!totalSupply");
    }

    function test_RevertSetBalance() public {
        veStaking.notifyRewardAmount(0);

        // function should revert if rewards have started
        vm.expectRevert(abi.encodePacked("Cannot set balance after rewards have started"));
        veStaking.setBalance(1, 100 ether);
    }

    function testEmergency() public {
        vm.prank(alice);
        votingEscrow.create_lock(100 ether, 1 weeks);

        // add rewards to veStaking
        AIUS.transfer(address(veStaking), 1000 ether);
        veStaking.notifyRewardAmount(1000 ether);

        skip(8 days);

        // now, for some reason there are not enough rewards in the contract to pay out
        // we simulate this by calling recoverERC20
        veStaking.recoverERC20(address(AIUS), 800 ether);
        assertEq(AIUS.balanceOf(address(veStaking)), 200 ether, "!balanceOf(veStaking)");

        // alice tries to withdraw, this should fail
        vm.prank(alice);
        vm.expectRevert(abi.encodePacked("ERC20: transfer amount exceeds balance"));
        votingEscrow.withdraw(1);

        // set emergency to true
        veStaking.setEmergency(true);
        assertEq(veStaking.emergency(), true, "!emergency");

        // now alice can withdraw 
        vm.prank(alice);
        votingEscrow.withdraw(1);

        // rewards are forfeited
        assertEq(veStaking.earned(1), 0, "!earned");

        assertEq(AIUS.balanceOf(address(veStaking)), 200 ether, "!balanceOf(veStaking)");
    }

    /* reward logic */

    function testLastTimeRewardApplicable() public {
        assertEq(
            veStaking.lastTimeRewardApplicable(),
            0,
            "!lastTimeRewardApplicable"
        );

        // call notifyRewardAmount so rewardDuration starts
        veStaking.notifyRewardAmount(0);

        assertEq(
            veStaking.lastTimeRewardApplicable(),
            block.timestamp,
            "!lastTimeRewardApplicable"
        );

        skip(8 days);

        assertEq(
            veStaking.lastTimeRewardApplicable(),
            veStaking.periodFinish(),
            "!lastTimeRewardApplicable"
        );
    }

    function testPeriodFinish() public {
        // call notifyRewardAmount so rewardDuration starts
        veStaking.notifyRewardAmount(0);

        uint256 initialPeriodFinish = veStaking.periodFinish();
        assertEq(
            initialPeriodFinish,
            block.timestamp + 1 weeks,
            "!initialPeriodFinish"
        );

        skip(3 days);

        // call notifyRewardAmount again
        veStaking.notifyRewardAmount(0);

        // periodFinish should not have changed
        assertEq(
            veStaking.periodFinish(),
            initialPeriodFinish,
            "!initialPeriodFinish"
        );

        skip(5 days);

        // call notifyRewardAmount again
        veStaking.notifyRewardAmount(0);

        uint256 newPeriodFinish = veStaking.periodFinish();
        // periodFinish should have been updated to `initialPeriodFinish + 1 weeks`
        assertEq(
            newPeriodFinish,
            initialPeriodFinish + 1 weeks,
            "!newPeriodFinish"
        );

        vm.warp(newPeriodFinish + 1);

        // periodFinish should be the same until notifyRewardAmount is called again
        assertEq(veStaking.periodFinish(), newPeriodFinish, "!newPeriodFinish");

        // call notifyRewardAmount again
        veStaking.notifyRewardAmount(0);

        // periodFinish should have been updated to `newPeriodFinish + 1 weeks`
        assertEq(
            veStaking.periodFinish(),
            newPeriodFinish + 1 weeks,
            "!finalPeriodFinish"
        );
    }

    function testFuzz_AlignedDurations(uint256 time) public {
        // bind time to skip to be between 1 week and 10 years
        time = bound(time, 1 weeks, 10 * YEAR);

        // periodFinish should be aligned with end time of locks / gauge voting period
        veStaking.notifyRewardAmount(0);
        votingEscrow.create_lock(100 ether, 1 weeks);

        (, uint256 end) = votingEscrow.locked(1);

        assertEq(veStaking.periodFinish(), end, "!durations");

        // skip random time forward
        skip(time);

        veStaking.notifyRewardAmount(0);
        votingEscrow.create_lock(100 ether, 1 weeks);

        (, end) = votingEscrow.locked(2);

        assertEq(veStaking.periodFinish(), end, "!durations");
    }

    function testFuzz_NotifyRewardAmount(uint256 reward) public {
        // bind reward to be between 1 and 4999 AIUS
        reward = bound(reward, 1 ether, 4999 ether);

        // transfering exact reward should work
        AIUS.transfer(address(veStaking), reward);
        veStaking.notifyRewardAmount(reward);

        // transfering too much reward should work
        AIUS.transfer(address(veStaking), reward);
        veStaking.notifyRewardAmount(reward - 0.001 ether);
    }

    function testFuzz_RevertNotifyRewardAmount(uint256 reward) public {
        // bind reward to be between 1 and 9999 AIUS
        reward = bound(reward, 1 ether, 9999 ether);

        // transfering too little reward should revert
        AIUS.transfer(address(veStaking), reward - 0.001 ether);
        vm.expectRevert("Provided reward too high");
        veStaking.notifyRewardAmount(reward);
    }

    function testRewardPerToken() public {
        uint256 rewardToAdd = 10 ether;

        // add rewards to veStaking
        AIUS.transfer(address(veStaking), rewardToAdd);
        veStaking.notifyRewardAmount(rewardToAdd);

        votingEscrow.create_lock(100 ether, MAX_LOCK_TIME);

        // rewardPerToken should increase over time
        skip(1);
        uint256 rewardPerToken = veStaking.rewardPerToken();
        assertGt(rewardPerToken, 0, "!rewardPerToken");

        skip(1 days);
        uint256 newRewardPerToken = veStaking.rewardPerToken();
        assertGt(newRewardPerToken, rewardPerToken, "!rewardPerToken");

        skip(7 days);
        uint256 finalRewardPerToken = veStaking.rewardPerToken();
        assertGt(finalRewardPerToken, newRewardPerToken, "!rewardPerToken");

        // get veStaking balance
        uint256 veStakingBalance = veStaking.balanceOf(1);

        // finalRewardPerToken should be (rewardToAdd * 1e18) / veStakingBalance, with 1e18 = multiplier needed for division
        // 0.001% error allowed, this should be relatively accurate
        assertApproxEqRel(
            finalRewardPerToken,
            (rewardToAdd * 1e18) / veStakingBalance,
            1e13,
            "!rewardPerToken"
        );
    }

    function testRewardsTokenBalanceShouldRollOver() public {
        votingEscrow.create_lock(100 ether, MAX_LOCK_TIME);

        // send rewards to veStaking
        AIUS.transfer(address(veStaking), 10 ether);
        veStaking.notifyRewardAmount(10 ether);
        uint256 initialRewardRate = veStaking.rewardRate();
        assertEq(
            initialRewardRate,
            10 ether / veStaking.rewardsDuration(),
            "!rewardRate"
        );

        skip(1 weeks);

        uint256 earnedFirst = veStaking.earned(1);

        // send more rewards to veStaking
        AIUS.transfer(address(veStaking), 10 ether);
        veStaking.notifyRewardAmount(10 ether);

        skip(1 weeks);

        uint256 earnedSecond = veStaking.earned(1);

        // 0.001% error due to rounding
        assertApproxEqRel(earnedFirst * 2, earnedSecond, 1e13, "!earned");
    }

    function testEarned() public {
        // 1 AIUS per day in rewards
        uint256 rewardsToDistribute = 7 ether;

        vm.prank(alice);
        votingEscrow.create_lock(100 ether, MAX_LOCK_TIME);

        // add rewards to veStaking
        AIUS.transfer(address(veStaking), rewardsToDistribute);
        veStaking.notifyRewardAmount(rewardsToDistribute);

        skip(1 days);

        // 0.1% error allowed due to rounding
        assertApproxEqRel(
            veStaking.earned(1),
            rewardsToDistribute / 7,
            1e15,
            "!earned"
        );

        // skip to half of rewards duration (84 hours - 1 day = 60 hours)
        skip(60 hours);

        // alice should have earned half of the rewards
        assertApproxEqRel(
            veStaking.earned(1),
            rewardsToDistribute / 2,
            1e15,
            "!earned"
        );

        // now bob stakes as well
        vm.prank(bob);
        votingEscrow.create_lock(100 ether, MAX_LOCK_TIME);

        // add more rewards to veStaking
        AIUS.transfer(address(veStaking), rewardsToDistribute);
        veStaking.notifyRewardAmount(rewardsToDistribute);

        // get remaining rewards
        uint256 remainingRewards = veStaking.getRewardForDuration();
        assertApproxEqRel(
            remainingRewards,
            rewardsToDistribute * 2 - rewardsToDistribute / 2,
            1e15,
            "!remainingRewards"
        );

        // skip to end of rewards duration
        skip(84 hours);

        // alice should have earned `rewardsToDistribute / 2` + `remainingRewards / 2`
        assertApproxEqRel(
            veStaking.earned(1),
            rewardsToDistribute / 2 + remainingRewards / 2,
            2e15,
            "!earned"
        );
        // bob should have earned `remainingRewards / 2`
        assertApproxEqRel(
            veStaking.earned(2),
            remainingRewards / 2,
            3e15,
            "!earned"
        );
    }

    function testNotEarned() public {
        // add rewards to veStaking
        AIUS.transfer(address(veStaking), 7 ether);
        veStaking.notifyRewardAmount(7 ether);

        // fast forward 1 week
        skip(1 weeks);

        // now create a lock
        votingEscrow.create_lock(100 ether, MAX_LOCK_TIME);

        // since rewardsDuration has passed before creating the lock, no rewards should be earned
        assertEq(veStaking.earned(1), 0, "!earned");

        // at this point unclaimed rewards can be distributed in the next period by calling
        // `notifyRewardAmount(uint256 amountOfUnclaimedRewards)`
    }

    function testGetReward() public {
        // send rewards to veStaking
        AIUS.transfer(address(veStaking), 10 ether);
        veStaking.notifyRewardAmount(10 ether);

        votingEscrow.create_lock(100 ether, MAX_LOCK_TIME);

        skip(7 days);
        veStaking.getReward(1);

        // rewards should be transferred out after rewardsDuration has passed (except some rounding error)
        assertApproxEqAbs(
            AIUS.balanceOf(address(veStaking)),
            0,
            1e6,
            "!balanceOf(veStaking)"
        );
    }

    function testRewardRateShouldIncrease() public {
        veStaking.notifyRewardAmount(0);
        assertEq(veStaking.rewardRate(), 0, "!rewardRate");

        // send rewards to veStaking
        AIUS.transfer(address(veStaking), 10 ether);
        veStaking.notifyRewardAmount(10 ether);
        uint256 initialRewardRate = veStaking.rewardRate();
        assertEq(
            initialRewardRate,
            10 ether / veStaking.rewardsDuration(),
            "!rewardRate"
        );

        skip(3 days);

        // send more rewards to veStaking
        AIUS.transfer(address(veStaking), 10 ether);
        veStaking.notifyRewardAmount(10 ether);

        // rewardRate should have increased
        assertGt(veStaking.rewardRate(), initialRewardRate, "!rewardRate");
    }

    function testGetRewardForDuration() public {
        // add rewards to veStaking
        AIUS.transfer(address(veStaking), 10 ether);
        veStaking.notifyRewardAmount(10 ether);

        // 0.1% error allowed due to rounding
        assertApproxEqRel(
            veStaking.getRewardForDuration(),
            10 ether,
            1e15,
            "!getRewardForDuration"
        );

        // skip to half of rewards duration
        skip(84 hours);
        assertApproxEqRel(
            veStaking.getRewardForDuration(),
            5 ether,
            1e15,
            "!getRewardForDuration"
        );

        // add more rewards to veStaking
        AIUS.transfer(address(veStaking), 10 ether);
        veStaking.notifyRewardAmount(10 ether);
        assertApproxEqRel(
            veStaking.getRewardForDuration(),
            15 ether,
            1e15,
            "!getRewardForDuration"
        );

        // skip to end of rewards duration
        skip(84 hours);

        // 0.1% error allowed due to rounding
        assertApproxEqRel(
            veStaking.getRewardForDuration(),
            0,
            1e15,
            "!getRewardForDuration"
        );
    }

    /* user related tests: staking, increasing amount, increasing duration */

    function testFuzz_Stake(uint256 amount) public {
        // bind amount to be between 1 and 999 AIUS
        amount = bound(amount, 1 ether, 999 ether);

        // get balance of voting escrow before
        uint256 veBalanceBefore = AIUS.balanceOf(address(votingEscrow));

        vm.prank(alice);
        votingEscrow.create_lock(amount, 2 weeks);

        // get balance of voting escrow after
        uint256 veBalanceAfter = AIUS.balanceOf(address(votingEscrow));
        assertEq(veBalanceAfter, veBalanceBefore + amount, "!veBalance");

        uint256 escrowBalance = votingEscrow.balanceOfNFT(1);
        uint256 stakingBalance = veStaking.balanceOf(1);

        assertEq(
            escrowBalance,
            stakingBalance,
            "escrowBalance != stakingBalance"
        );
    }

    function testIncreaseAmount() public {
        vm.prank(alice);
        votingEscrow.create_lock(100 ether, YEAR);

        uint256 escrowBalance = votingEscrow.balanceOfNFT(1);
        uint256 stakingBalance = veStaking.balanceOf(1);

        assertEq(
            escrowBalance,
            stakingBalance,
            "escrowBalance != stakingBalance"
        );

        // fast forward
        skip(4 weeks);
        // get balance of NFT
        escrowBalance = votingEscrow.balanceOfNFT(1);

        // alice decides to increase her locked amount
        vm.prank(alice);
        votingEscrow.increase_amount(1, 50 ether);

        uint256 newEscrowBalance = votingEscrow.balanceOfNFT(1); // get balance of NFT after increase
        uint256 diff = newEscrowBalance - escrowBalance; // get difference
        uint256 newStakingBalance = veStaking.balanceOf(1); // get new staking balance

        // staking balance should have increased by `diff`
        assertEq(newStakingBalance, stakingBalance + diff, "!stakingBalance");
    }

    function testIncreaseLockDuration() public {
        vm.prank(alice);
        votingEscrow.create_lock(100 ether, YEAR);

        uint256 escrowBalance = votingEscrow.balanceOfNFT(1);
        uint256 stakingBalance = veStaking.balanceOf(1);

        assertEq(
            escrowBalance,
            stakingBalance,
            "escrowBalance != stakingBalance"
        );

        // fast forward
        skip(4 weeks);
        // get balance of NFT
        escrowBalance = votingEscrow.balanceOfNFT(1);

        // alice decides to increase her locked amount
        vm.prank(alice);
        votingEscrow.increase_unlock_time(1, MAX_LOCK_TIME);

        uint256 newEscrowBalance = votingEscrow.balanceOfNFT(1); // get balance of NFT after increase
        uint256 newStakingBalance = veStaking.balanceOf(1); // get new staking balance

        // staking balance should be updated
        assertEq(
            newEscrowBalance,
            newStakingBalance,
            "newEscrowBalance != newStakingBalance"
        );
    }

    function testIncreaseLockDurationLong() public {
        // alice locks for max lock duration
        vm.prank(alice);
        votingEscrow.create_lock(100 ether, MAX_LOCK_TIME);

        uint256 escrowBalance = votingEscrow.balanceOfNFT(1);
        uint256 stakingBalance = veStaking.balanceOf(1);

        assertEq(
            escrowBalance,
            stakingBalance,
            "escrowBalance != stakingBalance"
        );

        // fast forward to almost her unlock time
        skip(MAX_LOCK_TIME - 1 weeks);
        // get balance of NFT
        escrowBalance = votingEscrow.balanceOfNFT(1);

        // alice decides to increase her lock duration again to the max amount
        vm.prank(alice);
        votingEscrow.increase_unlock_time(1, MAX_LOCK_TIME);

        uint256 newEscrowBalance = votingEscrow.balanceOfNFT(1); // get balance of NFT after increase
        uint256 newStakingBalance = veStaking.balanceOf(1); // get new staking balance

        // staking balance should be updated
        assertEq(
            newEscrowBalance,
            newStakingBalance,
            "newEscrowBalance != newStakingBalance"
        );
    }

    function testIncreaseLockDurationShort() public {
        // alice locks for max lock duration
        vm.prank(alice);
        votingEscrow.create_lock(100 ether, MAX_LOCK_TIME);

        uint256 escrowBalance = votingEscrow.balanceOfNFT(1);
        uint256 stakingBalance = veStaking.balanceOf(1);

        assertEq(
            escrowBalance,
            stakingBalance,
            "escrowBalance != stakingBalance"
        );

        // fast forward to almost her unlock time
        skip(MAX_LOCK_TIME - 1 weeks);
        // get balance of NFT
        escrowBalance = votingEscrow.balanceOfNFT(1);

        // alice decides to increase her lock duration for 2 weeks
        vm.prank(alice);
        votingEscrow.increase_unlock_time(1, 2 weeks);

        uint256 newEscrowBalance = votingEscrow.balanceOfNFT(1); // get balance of NFT after increase
        uint256 newStakingBalance = veStaking.balanceOf(1); // get new staking balance

        // staking balance should be updated
        assertEq(
            newEscrowBalance,
            newStakingBalance,
            "newEscrowBalance != newStakingBalance"
        );
    }

    /* other */

    function testMigrateToV2() public {
        // add rewards to veStaking
        AIUS.transfer(address(veStaking), 10 ether);
        veStaking.notifyRewardAmount(10 ether);

        // alice stakes 100 AIUS
        vm.prank(alice);
        votingEscrow.create_lock(10 ether, YEAR);

        // bob stakes 50 AIUS
        vm.prank(bob);
        votingEscrow.create_lock(520 ether, 1 weeks);

        uint256 balanceAlice = veStaking.balanceOf(1);
        uint256 balanceBob = veStaking.balanceOf(2);

        skip(1 weeks);

        // migrate to new contract
        VeStaking veStakingV2 = new VeStaking(address(AIUS), address(votingEscrow));
        veStakingV2.setBalance(1, balanceAlice);
        veStakingV2.setBalance(2, balanceBob);

        // update vestaking contract
        votingEscrow.setVeStaking(address(veStakingV2));
        // here we would also need to update the engine contract, but we don't have it in this test

        // balance of NFTs should be updated
        assertEq(veStakingV2.balanceOf(1), balanceAlice, "!balanceOfNFT");
        assertEq(veStakingV2.balanceOf(2), balanceBob, "!balanceOfNFT");


        // add rewards to veStakingV2
        AIUS.transfer(address(veStakingV2), 10 ether);
        veStakingV2.notifyRewardAmount(10 ether);
                
        skip(1 weeks);

        // alice and bob should accrue rewards normally
        assertEq(veStakingV2.earned(1), veStaking.earned(1), "!earned");
        assertEq(veStakingV2.earned(2), veStaking.earned(2), "!earned");

        // alice claims rewards, bob can withdraw his locked amount
        vm.prank(alice);
        veStakingV2.getReward(1);
        vm.prank(bob);
        votingEscrow.withdraw(2);

        // bobs balance should be zero in veStakingV2
        assertEq(veStakingV2.balanceOf(2), 0, "!balanceOfNFT");

        // earned should both be zero
        assertEq(veStakingV2.earned(1), 0, "!earned");
        assertEq(veStakingV2.earned(2), 0, "!earned");
    }
}
