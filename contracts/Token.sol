// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract DarkCastleToken is ERC20 {
    using SafeMath for uint;

    // Metadata
    string private _name = "Dark Castle Token";
    string private _symbol = "DCT";
    uint private _totalSupply = 1000000000 * 10 ** 18;


    // Fees
    uint8 public ownersSellFee;
    uint8 public liquiditySellFee;


    // Owmers Vesting
    address private _owner;
    uint8 private _vestingDuration;
    uint private _periodVestingAmount;
    uint8 private _vestingCount;
    uint private _lastVestingClaim;


    // Addresses
    address private _ownersFeesAddress;
    address private _liquidityAddress;

    address private _ownersTokensAddress;
    address private _p2eTokensAddress;
    address private _salesTokensAddress;
    address private _airdropTokensAddress;
    address private _advisorsTokensAddress;


    // Others
    mapping (address => bool) private _exludedFromFees;
    mapping (address => bool) private _automatedMarketMakerPairs;


    // Events
    event ownersTokensVested(uint);


    // Constructor
    constructor ( uint8 _ownersSellFee, uint8 _liquiditySellFee, address __ownersAddress, address __liquidityAddress, address __ownersTokensAddress, address __p2eTokensAddress, address __salesTokensAddress, uint __vestingDuration ) ERC20(_name, _symbol) {

        _owner = msg.sender;

        ownersSellFee = _ownersSellFee;
        liquiditySellFee = _liquiditySellFee;

        _ownersFeesAddress = __ownersAddress;
        _liquidityAddress = __liquidityAddress;

        _ownersTokensAddress = __ownersTokensAddress;
        _p2eTokensAddress = __p2eTokensAddress;
        _salesTokensAddress = __salesTokensAddress;


        _mint(address(this), _totalSupply.mul(25).div(1000)); // Owners Vesting
        _mint(_p2eTokensAddress, _totalSupply.mul(90).div(100));
        _mint(_salesTokensAddress, _totalSupply.mul(5).div(100));
        _mint(_airdropTokensAddress, _totalSupply.mul(1).div(1000));
        _mint(_advisorsTokensAddress, _totalSupply.mul(24).div(1000));


        _vestingDuration = __vestingDuration;
        _periodVestingAmount = _totalSupply.mul(25).div(1000).div(_vestingDuration);
        _vestingCount = 0;
        _lastVestingClaim = block.timestamp;

    }


    function claimOwnersVesting() public onlyOwner {
        require(_vestingCount < _vestingDuration, "Owners Vesting Finished");
        require(block.timestamp > _lastVestingClaim + 4 weeks, "Have to Wait 1 Month");
        require(balanceOf(address(this)) > 0, "No tokens to vest");

        _vestingCount ++;
        _lastVestingClaim = block.timestamp;

        if(balanceOf(address(this)) > _periodVestingAmount) {
            transfer(_ownersTokensAddress, _periodVestingAmount);
        } else {
            transfer(_ownersTokensAddress, balanceOf(address(this)));
        }

        emit ownersTokensVested(_vestingCount);
    }


    // automatedMarketMakerPairs
    function _setAutomatedMarketMakerPair(address pair, bool value) private {
        require(_automatedMarketMakerPairs[pair] != value, "The People Token: Automated market maker pair is already set to that value");
        _automatedMarketMakerPairs[pair] = value;
    }


    // _transfer
    function _transfer(address _sender, address _receiver, uint _amount) internal override {

        require(balanceOf(_sender) >= _amount, "Not Enough Balance");

        if (_exludedFromFees[_sender]) {

            super._transfer(_sender, _receiver, _amount);
        
        } else {

            if (_automatedMarketMakerPairs[_receiver]) {

                uint _ownersFee = _amount.mul(ownersSellFee).div(100);
                uint _liquidityFee = _amount.mul(liquiditySellFee).div(100);

                // Fees Reflected
                super._transfer(_sender, _ownersFeesAddress, _amount);
                super._transfer(_sender, _liquidityAddress, _amount);

                _amount -= (_ownersFee + _liquidityFee);

                

            }

            super._transfer(_sender, _receiver, _amount);

        }

    }

    receive() payable external {}


    // Withdraw any Ether.
    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(payable(address(this)).balance);
    }


    modifier onlyOwner {
        require(msg.sender == _owner, "Not the Owner");

        _;
    }

}