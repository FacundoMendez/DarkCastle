// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract SecurityStones {
    using SafeMath for uint;

    // Utils
    address private _ownersAddress;
    address private _liquidityAddress;
    address private _owner;
    address private _delegated;

    uint public securityStonePrice;
    uint public stonesBought = 0;
    uint private _ownersFee;

    ERC20 private _currencyToken;

    mapping (address => uint) internal balances;


    // Events
    event newCurrencyToken(address);
    event newSecurityStonePrice(uint);
    event newSecurityStonesDelegated(address);
    event stonesBough(uint);
    event newOwnersFee(uint);


    // Constructor
    constructor() {
        
        _owner = msg.sender;

    }


    // Functions
    function setCurrencyToken(address _tokenAddress) public onlyOwner {
        _currencyToken = ERC20(_tokenAddress);

        emit newCurrencyToken(_tokenAddress);
    }

    function setsecurityStonePrice(uint _newPrice) public onlyOwner {
        securityStonePrice = _newPrice;

        emit newSecurityStonePrice(_newPrice);
    }

    function setsecurityStonesDelegated(address _newDelegated) public onlyOwner {
        _delegated = _newDelegated;

        emit newSecurityStonesDelegated(_newDelegated);
    }

    function setOwnersFee(uint _newFee) public onlyOwner {
        _ownersFee = _newFee;

        emit newOwnersFee(_newFee);
    }

    function balanceOf(address _target) public view returns (uint) {
        return balances[_target];
    }

    function useStone(address _target) public onlyDelegated returns(bool) {
        require(balanceOf(_target) > 0, "Not enough Fusion Stones");

        balances[_target]--;
        return true;
    }

    function buyStone(uint _amount) public {
        require(_amount > 0, "Amount must be greater than 0");
        require(_currencyToken.balanceOf(msg.sender) >= _amount.mul(securityStonePrice), "Not enough Balance");
        require(_currencyToken.allowance(msg.sender, address(this)) >= _amount.mul(securityStonePrice), "Not enough allowance");

        _currencyToken.transferFrom(msg.sender, address(this), _amount.mul(securityStonePrice));
        _currencyToken.transfer(_ownersAddress, _amount.mul(securityStonePrice).mul(_ownersFee).div(100));
        _currencyToken.transfer(_ownersAddress, _currencyToken.balanceOf(address(this)));

        stonesBought = stonesBought.add(_amount);
        balances[msg.sender] += _amount;

        emit stonesBough(_amount);
    }


    // Modifiers
    modifier onlyOwner {
        require(msg.sender == _owner, "Not the Owner");

        _;
    }

    modifier onlyDelegated {
        require(msg.sender == _delegated, "Not the delegated");

        _;
    }

}