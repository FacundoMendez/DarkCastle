// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract DarkCastleVault {

    // General
    address private _owner;
    address private _delegatedAccess;

    ERC20 private _tokenAddress;

    bool paused;
    
    uint public maxTxAmount;


    // Events
    event newMaxTxAmount(uint);
    event newTokenAddress(address);
    event newDelegatedAddress(address);
    event requestedFunds(uint);
    event pausedTriggered(bool);


    // Constructor
    constructor () {

        _owner = msg.sender;

    }


    receive() payable external {}


    // Withdraw any Ether.
    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(payable(address(this)).balance);
    }


    // Sets a new Token
    function setTokenAddress( address __tokenAddress ) public onlyOwner {
        require(__tokenAddress != address(0) && __tokenAddress != address(_tokenAddress), "Invalid Address");

        _tokenAddress = ERC20(__tokenAddress);
        emit newTokenAddress(__tokenAddress);
    }


    // Set a new Delegated
    function setDelegatedAddress( address __delegatedAddress ) public onlyOwner {
        require(__delegatedAddress != address(0) && __delegatedAddress != _delegatedAccess, "Invalid Address");
        
        _delegatedAccess = __delegatedAddress;
        emit newDelegatedAddress(__delegatedAddress);
    }


    // Set a new Max Tx Amount
    function setMaxTxAmount( uint _newMax ) public onlyOwner {
        maxTxAmount = _newMax;

        emit newMaxTxAmount(_newMax);
    }


    // Ask for Funds
    function requestFunds (uint _amount, address _to) public onlyDelegated {
        require(_amount <= maxTxAmount, "Over the Maximum amount of tokens requested.");
        require(!paused, "Funds Requests Are Paused");

        _tokenAddress.transfer(_to, _amount);
        emit requestedFunds(_amount);
    }


    // Toggle Pause
    function togglePause() public onlyOwner {
        if (paused) {
            paused = false;
        } else {
            paused = true;
        }

        emit pausedTriggered(paused);
    }


    // Get Balance
    function getContractBalance() public view returns(uint) {
        return _tokenAddress.balanceOf(address(this));
    }


    // Modifiers
    modifier onlyOwner {
        require(msg.sender == _owner, "Not the Owner");

        _;
    }


    modifier onlyDelegated {
        require(msg.sender == _delegatedAccess, "Not the Delegated Address");

        _;
    }

}