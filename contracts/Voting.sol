// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

/// @title A simple voting contract for the Ethereum blockchain
/// @dev This contract allows for simple voting on a list of options
contract Voting is Ownable {
    /// @notice Defines a voting option with a name and a count of votes
    struct Option {
        string name;
        uint256 voteCount;
    }

    /// @notice Array of options available for voting
    Option[] public options;

    /// @notice Mapping to track whether an address has voted or not
    mapping(address => bool) public hasVoted;

    /// @notice Event emitted when a vote is casted
    /// @param voter The address of the voter
    /// @param optionIndex The index of the option voted for
    event VoteCasted(address indexed voter, uint256 indexed optionIndex);

    /// @notice Creates a new voting contract with given options
    /// @param _optionNames An array of names for the options to be voted on
    constructor(string[] memory _optionNames) Ownable(msg.sender) {
        for (uint256 i = 0; i < _optionNames.length; i++) {
            options.push(Option({ name: _optionNames[i], voteCount: 0 }));
        }
    }

    /// @notice Casts a vote for one of the options
    /// @param _optionIndex The index of the option to vote for
    /// @dev Requires the sender not to have voted before and the option index to be valid
    function vote(uint256 _optionIndex) public {
        require(!hasVoted[msg.sender], "You have already voted.");
        require(_optionIndex < options.length, "Invalid option index.");

        options[_optionIndex].voteCount++;
        hasVoted[msg.sender] = true;

        emit VoteCasted(msg.sender, _optionIndex);
    }

    /// @notice Returns the number of options available for voting
    /// @return uint256 The number of options
    function getOptionCount() public view returns (uint256) {
        return options.length;
    }

    /// @notice Retrieves the details of a voting option by index
    /// @param _optionIndex The index of the option to retrieve
    /// @return name The name of the option
    /// @return voteCount The number of votes the option has received
    /// @dev Requires the option index to be valid
    function getOption(uint256 _optionIndex) public view returns (string memory name, uint256 voteCount) {
        require(_optionIndex < options.length, "Invalid option index.");
        return (options[_optionIndex].name, options[_optionIndex].voteCount);
    }
}
