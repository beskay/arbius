// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IVotingEscrow} from "contracts/interfaces/IVotingEscrow.sol";
import {IVoter} from "contracts/interfaces/IVoter.sol";

import "forge-std/Test.sol";
import "forge-std/console2.sol";

contract Voter is IVoter, Ownable, Test {
    address public immutable votingEscrow; // the ve token that governs these contracts

    uint internal constant DURATION = 7 days; // voting duration per epoch

    uint public totalWeight; // total voting weight
    mapping(bytes32 => uint256) public weights; // model => weight

    bytes32[] public models; // all models viable for incentives
    mapping(bytes32 => bool) public isGauge; // model => isGauge
    mapping(uint => mapping(bytes32 => uint256)) public votes; // nft => model => votes
    mapping(uint => bytes32[]) public modelVote; // nft => models
    mapping(uint => uint) public usedWeights; // nft => total voting weight of user
    mapping(uint => uint) public lastVoted; // nft => timestamp of last vote, to ensure one vote per epoch
    mapping(bytes32 => bool) public isWhitelisted;
    mapping(bytes32 => bool) public isAlive;

    event GaugeCreated(address creator, bytes32 indexed model);
    event GaugeKilled(bytes32 indexed model);
    event GaugeRevived(bytes32 indexed model);
    event Voted(address indexed voter, uint tokenId, uint256 weight);
    event Abstained(uint tokenId, uint256 weight);
    event Whitelisted(address indexed whitelister, bytes32 indexed model);

    constructor(address _votingEscrow) Ownable() {
        votingEscrow = _votingEscrow;
    }

    // todo: test that this aligns correctly with rewardsDuration in veStaking (it should)
    modifier onlyNewEpoch(uint _tokenId) {
        // ensure new epoch since last vote
        require(
            (block.timestamp / DURATION) * DURATION > lastVoted[_tokenId],
            "TOKEN_ALREADY_VOTED_THIS_EPOCH"
        );
        _;
    }

    /// @notice Called by users to reset voting state.
    /// @param _tokenId Id of veNFT you are reseting.
    function reset(uint _tokenId) external onlyNewEpoch(_tokenId) {
        require(
            IVotingEscrow(votingEscrow).isApprovedOrOwner(msg.sender, _tokenId)
        );
        lastVoted[_tokenId] = block.timestamp;
        _reset(_tokenId);
        IVotingEscrow(votingEscrow).abstain(_tokenId);
    }

    function _reset(uint _tokenId) internal {
        bytes32[] storage _modelVote = modelVote[_tokenId];
        uint _modelVoteCnt = _modelVote.length;
        uint256 _totalWeight = 0;

        for (uint i = 0; i < _modelVoteCnt; i++) {
            bytes32 _model = _modelVote[i];
            uint256 _votes = votes[_tokenId][_model];

            if (_votes != 0) {
                weights[_model] -= _votes;
                votes[_tokenId][_model] -= _votes;
                if (_votes > 0) {
                    _totalWeight += _votes;
                } else {
                    _totalWeight -= _votes;
                }
                emit Abstained(_tokenId, _votes);
            }
        }
        totalWeight -= uint256(_totalWeight);
        usedWeights[_tokenId] = 0;
        delete modelVote[_tokenId];
    }

    /// @notice Called by users to update voting balances in voting rewards contracts.
    /// @param _tokenId Id of veNFT whose balance you wish to update.
    function poke(uint _tokenId) external {
        bytes32[] memory _modelVote = modelVote[_tokenId];
        uint _modelCnt = _modelVote.length;
        uint256[] memory _weights = new uint256[](_modelCnt);

        for (uint i = 0; i < _modelCnt; i++) {
            _weights[i] = votes[_tokenId][_modelVote[i]];
        }

        _vote(_tokenId, _modelVote, _weights);
    }

    /// @notice Called by users to vote for models. Votes distributed proportionally based on weights.
    /// @dev Weights are distributed proportional to the sum of the weights in the array.
    /// @param tokenId      Id of veNFT you are voting with.
    /// @param _modelVote   Array of models you are voting for.
    /// @param _weights     Weights of models.
    function vote(
        uint tokenId,
        bytes32[] calldata _modelVote,
        uint256[] calldata _weights
    ) external onlyNewEpoch(tokenId) {
        require(
            IVotingEscrow(votingEscrow).isApprovedOrOwner(msg.sender, tokenId)
        );
        require(_modelVote.length == _weights.length);
        lastVoted[tokenId] = block.timestamp;
        _vote(tokenId, _modelVote, _weights);
    }

    function _vote(
        uint _tokenId,
        bytes32[] memory _modelVote,
        uint256[] memory _weights
    ) internal {
        _reset(_tokenId);
        uint _modelCnt = _modelVote.length;
        uint256 _weight = IVotingEscrow(votingEscrow).balanceOfNFT(_tokenId);
        uint256 _totalVoteWeight = 0;
        uint256 _totalWeight = 0;
        uint256 _usedWeight = 0;

        for (uint i = 0; i < _modelCnt; i++) {
            _totalVoteWeight += _weights[i];
        }

        for (uint i = 0; i < _modelCnt; i++) {
            bytes32 _model = _modelVote[i];

            if (isGauge[_model] && isAlive[_model]) {
                uint256 _modelWeight = (_weights[i] * _weight) /
                    _totalVoteWeight;
                require(votes[_tokenId][_model] == 0);
                require(_modelWeight != 0);

                modelVote[_tokenId].push(_model);

                weights[_model] += _modelWeight;
                votes[_tokenId][_model] += _modelWeight;

                _usedWeight += _modelWeight;
                _totalWeight += _modelWeight;

                emit Voted(msg.sender, _tokenId, _modelWeight);
            }
        }
        if (_usedWeight > 0) IVotingEscrow(votingEscrow).voting(_tokenId);
        totalWeight += uint256(_totalWeight);
        usedWeights[_tokenId] = uint256(_usedWeight);
    }

    function whitelist(bytes32 _model) external onlyOwner {
        require(!isWhitelisted[_model], "whitelisted");
        isWhitelisted[_model] = true;
        emit Whitelisted(msg.sender, _model);
    }

    /// @notice Create a new gauge for a model.
    /// @dev Governor can create a new gauge for a non-whitelisted model
    function createGauge(bytes32 _model) external {
        require(isGauge[_model] == false, "exists");

        // only owner can create a gauge for a non-whitelisted model
        if (msg.sender != owner()) {
            require(isWhitelisted[_model], "!whitelisted");
        }

        isAlive[_model] = true;
        isGauge[_model] = true;
        models.push(_model);
        emit GaugeCreated(msg.sender, _model);
    }

    /// @notice Kills a gauge. It can not receive any more votes.
    /// @dev Throws if not called by owner/governance.
    ///      Throws if gauge already killed.
    function killGauge(bytes32 _model) external onlyOwner {
        require(isAlive[_model], "gauge already dead");
        isAlive[_model] = false;
        emit GaugeKilled(_model);
    }

    /// @notice Revives a killed gauge
    /// @dev Throws if not called by owner/governance.
    ///      Throws if gauge is not killed or does not exist.
    /// @param _model Model to revive
    function reviveGauge(bytes32 _model) external onlyOwner {
        require(isGauge[_model], "not a gauge");
        require(!isAlive[_model], "gauge already alive");
        isAlive[_model] = true;
        emit GaugeRevived(_model);
    }

    function length() external view returns (uint) {
        return models.length;
    }
}