// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "forge-std/console2.sol";

import "./utils/MockERC20.sol";
import "contracts/ve/VotingEscrow.sol";
import "contracts/ve/VeNFTRender.sol";
import "contracts/ve/VeStaking.sol";
import "contracts/ve/Voter.sol";

/**
 * @dev Base test contract used for testing VeStaking.sol and VotingEscrow.sol
 * @dev Deploys ve-contracts without involvement of engine_v4
 */
contract BaseTest is Test {
    MockERC20 public AIUS;
    MockERC20 public mockToken;
    VotingEscrow public votingEscrow;
    VeStaking public veStaking;
    Voter public voter;
    VeNFTRender public veNFTRender;

    // time
    uint256 public constant WEEK = 7 days;
    uint256 public constant MONTH = 30 days;
    uint256 public constant YEAR = 365 days;
    uint256 public constant MAX_LOCK_TIME = 2 * YEAR;

    // test addresses
    address alice = makeAddr("alice");
    address bob = makeAddr("bob");
    address charlie = makeAddr("charlie");
    address dave = makeAddr("dave");

    function deployContracts() public {
        // deploy and initialize AIUS
        AIUS = new MockERC20("Arbius", "AIUS");
        // deploy mock token
        mockToken = new MockERC20("MockToken", "MTK");

        // deploy NFT render contract
        veNFTRender = new VeNFTRender();

        // deploy VotingEscrow contract
        votingEscrow = new VotingEscrow(
            address(AIUS),
            address(veNFTRender),
            address(0)
        );

        // deploy VeStaking contract
        veStaking = new VeStaking(address(AIUS), address(votingEscrow));
        // set veStaking in escrow
        votingEscrow.setVeStaking(address(veStaking));

        // deploy Voter contract
        voter = new Voter(address(votingEscrow));
        // set voter in escrow
        votingEscrow.setVoter(address(voter));
    }

    function mintTestAius() public {
        AIUS.mint(address(this), 10000 ether);
        AIUS.mint(alice, 1000 ether);
        AIUS.mint(bob, 1000 ether);
        AIUS.mint(charlie, 1000 ether);
        AIUS.mint(dave, 1000 ether);
    }

    function approveTestAiusToEscrow() public {
        AIUS.approve(address(votingEscrow), 1000 ether);

        vm.prank(alice);
        AIUS.approve(address(votingEscrow), 1000 ether);
        vm.prank(bob);
        AIUS.approve(address(votingEscrow), 1000 ether);
        vm.prank(charlie);
        AIUS.approve(address(votingEscrow), 1000 ether);
        vm.prank(dave);
        AIUS.approve(address(votingEscrow), 1000 ether);
    }
}
