/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ArbSys",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArbSys__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IVotesUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVotesUpgradeable__factory>;
    getContractFactory(
      name: "IERC5267Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC5267Upgradeable__factory>;
    getContractFactory(
      name: "IERC5805Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC5805Upgradeable__factory>;
    getContractFactory(
      name: "IERC6372Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC6372Upgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "ERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Upgradeable__factory>;
    getContractFactory(
      name: "ERC20PermitUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PermitUpgradeable__factory>;
    getContractFactory(
      name: "ERC20VotesUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20VotesUpgradeable__factory>;
    getContractFactory(
      name: "IERC20MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC20PermitUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20PermitUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "EIP712Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712Upgradeable__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "GovernorCompatibilityBravo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorCompatibilityBravo__factory>;
    getContractFactory(
      name: "IGovernorCompatibilityBravo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernorCompatibilityBravo__factory>;
    getContractFactory(
      name: "GovernorSettings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorSettings__factory>;
    getContractFactory(
      name: "GovernorTimelockControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorTimelockControl__factory>;
    getContractFactory(
      name: "IGovernorTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernorTimelock__factory>;
    getContractFactory(
      name: "Governor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Governor__factory>;
    getContractFactory(
      name: "IGovernor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernor__factory>;
    getContractFactory(
      name: "TimelockController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockController__factory>;
    getContractFactory(
      name: "IVotes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVotes__factory>;
    getContractFactory(
      name: "IERC5267",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC5267__factory>;
    getContractFactory(
      name: "IERC5805",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC5805__factory>;
    getContractFactory(
      name: "IERC6372",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC6372__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "ERC20Votes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Votes__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "EIP712",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ShortStrings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShortStrings__factory>;
    getContractFactory(
      name: "DoubleEndedQueue",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DoubleEndedQueue__factory>;
    getContractFactory(
      name: "IUniswapV2Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router01__factory>;
    getContractFactory(
      name: "IUniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router02__factory>;
    getContractFactory(
      name: "BaseTokenV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseTokenV1__factory>;
    getContractFactory(
      name: "EngineUtilsV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EngineUtilsV1__factory>;
    getContractFactory(
      name: "EngineV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EngineV1__factory>;
    getContractFactory(
      name: "BulkClaimSolution",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BulkClaimSolution__factory>;
    getContractFactory(
      name: "BulkSubmitTask",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BulkSubmitTask__factory>;
    getContractFactory(
      name: "ClaimSolution",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClaimSolution__factory>;
    getContractFactory(
      name: "FinishContestationVote",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FinishContestationVote__factory>;
    getContractFactory(
      name: "IsMiner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IsMiner__factory>;
    getContractFactory(
      name: "LookupContestationValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LookupContestationValidator__factory>;
    getContractFactory(
      name: "LookupModelAddress",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LookupModelAddress__factory>;
    getContractFactory(
      name: "LookupSolutionCID",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LookupSolutionCID__factory>;
    getContractFactory(
      name: "LookupTaskCID",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LookupTaskCID__factory>;
    getContractFactory(
      name: "LookupValidatorStakedBalance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LookupValidatorStakedBalance__factory>;
    getContractFactory(
      name: "RegisterModel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RegisterModel__factory>;
    getContractFactory(
      name: "SubmitContestation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SubmitContestation__factory>;
    getContractFactory(
      name: "SubmitSolution",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SubmitSolution__factory>;
    getContractFactory(
      name: "SubmitTask",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SubmitTask__factory>;
    getContractFactory(
      name: "VoteOnContestation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VoteOnContestation__factory>;
    getContractFactory(
      name: "VeGovernorVotes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VeGovernorVotes__factory>;
    getContractFactory(
      name: "VeGovernorVotesQuorumFraction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VeGovernorVotesQuorumFraction__factory>;
    getContractFactory(
      name: "GovernorV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorV1__factory>;
    getContractFactory(
      name: "IArbius",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IArbius__factory>;
    getContractFactory(
      name: "IArbToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IArbToken__factory>;
    getContractFactory(
      name: "IBaseToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBaseToken__factory>;
    getContractFactory(
      name: "ArbitrumEnabledToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArbitrumEnabledToken__factory>;
    getContractFactory(
      name: "ICustomToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICustomToken__factory>;
    getContractFactory(
      name: "L1MintableToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1MintableToken__factory>;
    getContractFactory(
      name: "L1ReverseToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1ReverseToken__factory>;
    getContractFactory(
      name: "IERC20Minimal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Minimal__factory>;
    getContractFactory(
      name: "IERC721Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Permit__factory>;
    getContractFactory(
      name: "IMulticall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMulticall__factory>;
    getContractFactory(
      name: "INonfungiblePositionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INonfungiblePositionManager__factory>;
    getContractFactory(
      name: "IPeripheryImmutableState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryImmutableState__factory>;
    getContractFactory(
      name: "IPeripheryPayments",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryPayments__factory>;
    getContractFactory(
      name: "IPoolInitializer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolInitializer__factory>;
    getContractFactory(
      name: "IStakingRewards",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakingRewards__factory>;
    getContractFactory(
      name: "IUniswapV2Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router01__factory>;
    getContractFactory(
      name: "IUniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router02__factory>;
    getContractFactory(
      name: "IUniswapV3Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Factory__factory>;
    getContractFactory(
      name: "IUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Pool__factory>;
    getContractFactory(
      name: "IUniswapV3Staker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Staker__factory>;
    getContractFactory(
      name: "IVeNFTRender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVeNFTRender__factory>;
    getContractFactory(
      name: "IVeStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVeStaking__factory>;
    getContractFactory(
      name: "IVoter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVoter__factory>;
    getContractFactory(
      name: "IVotingEscrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVotingEscrow__factory>;
    getContractFactory(
      name: "IUniswapV3PoolActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDerivedState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDerivedState__factory>;
    getContractFactory(
      name: "IUniswapV3PoolEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolEvents__factory>;
    getContractFactory(
      name: "IUniswapV3PoolImmutables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolImmutables__factory>;
    getContractFactory(
      name: "IUniswapV3PoolOwnerActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolOwnerActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolState__factory>;
    getContractFactory(
      name: "IL1CustomGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IL1CustomGateway__factory>;
    getContractFactory(
      name: "IL2GatewayRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IL2GatewayRouter__factory>;
    getContractFactory(
      name: "L1Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1Token__factory>;
    getContractFactory(
      name: "AmicaModelToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AmicaModelToken__factory>;
    getContractFactory(
      name: "ModelTokenSwapReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ModelTokenSwapReceiver__factory>;
    getContractFactory(
      name: "ModelTokenV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ModelTokenV1__factory>;
    getContractFactory(
      name: "OneToOneConvert",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OneToOneConvert__factory>;
    getContractFactory(
      name: "StakingRewards",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakingRewards__factory>;
    getContractFactory(
      name: "TestnetToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestnetToken__factory>;
    getContractFactory(
      name: "TimelockV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockV1__factory>;
    getContractFactory(
      name: "V2_EngineV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.V2_EngineV1__factory>;
    getContractFactory(
      name: "V2_EngineV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.V2_EngineV2__factory>;
    getContractFactory(
      name: "V2_EngineV3_Withdraw",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.V2_EngineV3_Withdraw__factory>;
    getContractFactory(
      name: "V2_EngineV3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.V2_EngineV3__factory>;
    getContractFactory(
      name: "V2_EngineV4_1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.V2_EngineV4_1__factory>;
    getContractFactory(
      name: "V2_EngineV4",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.V2_EngineV4__factory>;
    getContractFactory(
      name: "V2_EngineV5",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.V2_EngineV5__factory>;
    getContractFactory(
      name: "VeNFTRender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VeNFTRender__factory>;
    getContractFactory(
      name: "VeStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VeStaking__factory>;
    getContractFactory(
      name: "Voter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Voter__factory>;
    getContractFactory(
      name: "VotingEscrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VotingEscrow__factory>;

    getContractAt(
      name: "ArbSys",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArbSys>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IVotesUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVotesUpgradeable>;
    getContractAt(
      name: "IERC5267Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC5267Upgradeable>;
    getContractAt(
      name: "IERC5805Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC5805Upgradeable>;
    getContractAt(
      name: "IERC6372Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC6372Upgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "ERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Upgradeable>;
    getContractAt(
      name: "ERC20PermitUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20PermitUpgradeable>;
    getContractAt(
      name: "ERC20VotesUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20VotesUpgradeable>;
    getContractAt(
      name: "IERC20MetadataUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20MetadataUpgradeable>;
    getContractAt(
      name: "IERC20PermitUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20PermitUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "EIP712Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712Upgradeable>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "GovernorCompatibilityBravo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorCompatibilityBravo>;
    getContractAt(
      name: "IGovernorCompatibilityBravo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernorCompatibilityBravo>;
    getContractAt(
      name: "GovernorSettings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorSettings>;
    getContractAt(
      name: "GovernorTimelockControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorTimelockControl>;
    getContractAt(
      name: "IGovernorTimelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernorTimelock>;
    getContractAt(
      name: "Governor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Governor>;
    getContractAt(
      name: "IGovernor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernor>;
    getContractAt(
      name: "TimelockController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimelockController>;
    getContractAt(
      name: "IVotes",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVotes>;
    getContractAt(
      name: "IERC5267",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC5267>;
    getContractAt(
      name: "IERC5805",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC5805>;
    getContractAt(
      name: "IERC6372",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC6372>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "ERC20Votes",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Votes>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "EIP712",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ShortStrings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShortStrings>;
    getContractAt(
      name: "DoubleEndedQueue",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DoubleEndedQueue>;
    getContractAt(
      name: "IUniswapV2Router01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router01>;
    getContractAt(
      name: "IUniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router02>;
    getContractAt(
      name: "BaseTokenV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseTokenV1>;
    getContractAt(
      name: "EngineUtilsV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EngineUtilsV1>;
    getContractAt(
      name: "EngineV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EngineV1>;
    getContractAt(
      name: "BulkClaimSolution",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BulkClaimSolution>;
    getContractAt(
      name: "BulkSubmitTask",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BulkSubmitTask>;
    getContractAt(
      name: "ClaimSolution",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClaimSolution>;
    getContractAt(
      name: "FinishContestationVote",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FinishContestationVote>;
    getContractAt(
      name: "IsMiner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IsMiner>;
    getContractAt(
      name: "LookupContestationValidator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LookupContestationValidator>;
    getContractAt(
      name: "LookupModelAddress",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LookupModelAddress>;
    getContractAt(
      name: "LookupSolutionCID",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LookupSolutionCID>;
    getContractAt(
      name: "LookupTaskCID",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LookupTaskCID>;
    getContractAt(
      name: "LookupValidatorStakedBalance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LookupValidatorStakedBalance>;
    getContractAt(
      name: "RegisterModel",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RegisterModel>;
    getContractAt(
      name: "SubmitContestation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SubmitContestation>;
    getContractAt(
      name: "SubmitSolution",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SubmitSolution>;
    getContractAt(
      name: "SubmitTask",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SubmitTask>;
    getContractAt(
      name: "VoteOnContestation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VoteOnContestation>;
    getContractAt(
      name: "VeGovernorVotes",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VeGovernorVotes>;
    getContractAt(
      name: "VeGovernorVotesQuorumFraction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VeGovernorVotesQuorumFraction>;
    getContractAt(
      name: "GovernorV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorV1>;
    getContractAt(
      name: "IArbius",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IArbius>;
    getContractAt(
      name: "IArbToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IArbToken>;
    getContractAt(
      name: "IBaseToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBaseToken>;
    getContractAt(
      name: "ArbitrumEnabledToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArbitrumEnabledToken>;
    getContractAt(
      name: "ICustomToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICustomToken>;
    getContractAt(
      name: "L1MintableToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.L1MintableToken>;
    getContractAt(
      name: "L1ReverseToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.L1ReverseToken>;
    getContractAt(
      name: "IERC20Minimal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Minimal>;
    getContractAt(
      name: "IERC721Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Permit>;
    getContractAt(
      name: "IMulticall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMulticall>;
    getContractAt(
      name: "INonfungiblePositionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INonfungiblePositionManager>;
    getContractAt(
      name: "IPeripheryImmutableState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryImmutableState>;
    getContractAt(
      name: "IPeripheryPayments",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryPayments>;
    getContractAt(
      name: "IPoolInitializer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolInitializer>;
    getContractAt(
      name: "IStakingRewards",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakingRewards>;
    getContractAt(
      name: "IUniswapV2Router01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router01>;
    getContractAt(
      name: "IUniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router02>;
    getContractAt(
      name: "IUniswapV3Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Factory>;
    getContractAt(
      name: "IUniswapV3Pool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Pool>;
    getContractAt(
      name: "IUniswapV3Staker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Staker>;
    getContractAt(
      name: "IVeNFTRender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVeNFTRender>;
    getContractAt(
      name: "IVeStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVeStaking>;
    getContractAt(
      name: "IVoter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVoter>;
    getContractAt(
      name: "IVotingEscrow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVotingEscrow>;
    getContractAt(
      name: "IUniswapV3PoolActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolActions>;
    getContractAt(
      name: "IUniswapV3PoolDerivedState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDerivedState>;
    getContractAt(
      name: "IUniswapV3PoolEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolEvents>;
    getContractAt(
      name: "IUniswapV3PoolImmutables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolImmutables>;
    getContractAt(
      name: "IUniswapV3PoolOwnerActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolOwnerActions>;
    getContractAt(
      name: "IUniswapV3PoolState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolState>;
    getContractAt(
      name: "IL1CustomGateway",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IL1CustomGateway>;
    getContractAt(
      name: "IL2GatewayRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IL2GatewayRouter>;
    getContractAt(
      name: "L1Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.L1Token>;
    getContractAt(
      name: "AmicaModelToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AmicaModelToken>;
    getContractAt(
      name: "ModelTokenSwapReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ModelTokenSwapReceiver>;
    getContractAt(
      name: "ModelTokenV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ModelTokenV1>;
    getContractAt(
      name: "OneToOneConvert",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OneToOneConvert>;
    getContractAt(
      name: "StakingRewards",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakingRewards>;
    getContractAt(
      name: "TestnetToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestnetToken>;
    getContractAt(
      name: "TimelockV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimelockV1>;
    getContractAt(
      name: "V2_EngineV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.V2_EngineV1>;
    getContractAt(
      name: "V2_EngineV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.V2_EngineV2>;
    getContractAt(
      name: "V2_EngineV3_Withdraw",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.V2_EngineV3_Withdraw>;
    getContractAt(
      name: "V2_EngineV3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.V2_EngineV3>;
    getContractAt(
      name: "V2_EngineV4_1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.V2_EngineV4_1>;
    getContractAt(
      name: "V2_EngineV4",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.V2_EngineV4>;
    getContractAt(
      name: "V2_EngineV5",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.V2_EngineV5>;
    getContractAt(
      name: "VeNFTRender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VeNFTRender>;
    getContractAt(
      name: "VeStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VeStaking>;
    getContractAt(
      name: "Voter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Voter>;
    getContractAt(
      name: "VotingEscrow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VotingEscrow>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
