// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./Vault.sol";
import "./Lands.sol";

contract DarkCastle {
    using SafeMath for uint;

    // Utils
    address private _owner;
    ERC20 _gameCurrency;
    DarkCastleVault _vault;
    DarkCastleLands _lands;
    DarkCastleNfts _nfts;


    // Game
    uint[] private _baseWinChances = [60, 30, 15];
    uint[] private _baseRewardsMul = [160, 320, 660];
    uint[] private _baseLandsWinMul = [5, 10, 15];
    uint[] private _baseStarsWinMul = [0, 1, 2];
    uint[] private _landsRarityCappacity = [1, 3, 5, 8, 12];
    uint private _affinityWinChance = 2;

    uint private _baseRewards = 250;
    uint private _affinityChange = 2;
    uint private _withdrawalCooldown = 10 days;
    uint private _earlyWithdrawDailyFee = 2;
    uint private _maxWithdrawAmount = 100000;
    uint private _enemiesAmount = 3;

    mapping (address => uint) public accumulatedBalance;
    mapping (address => uint) public lastWithdrawal;
    mapping (address => uint) public addressLand;
    mapping (address => bool) public landEquiped;
    mapping (address => uint) public lastFight;


    // Constructor
    constructor() {

        _owner = msg.sender;

    }


    // Events
    event newBaseWinChances(uint[]);
    event newBaseRewardsMul(uint[]);
    event newLandsRarityCapacity(uint[]);
    event newBaseRewards(uint);
    event newAffinityChange(uint);
    event newWithdrawalCooldown(uint);
    event newEarlyWithdrawFee(uint);
    event newMaxWithdrawAmount(uint);
    event newEnemiesAmount(uint);
    event newGameLands(address);
    event newGameNfts(address);
    event newGameCurrency(address);
    event newGameVault(address);
    event newBaseStarsWinMul(uint[]);
    event newAffinityWinChance(uint);

    event withdrawnBalance(uint, address);


    // Admin Setter Functions
    function setBaseWinChances(uint[] memory _newBaseWinChances) public onlyOwner {
        _baseWinChances = _newBaseWinChances;

        emit newBaseWinChances(_newBaseWinChances);
    }

    function setBaseRewardsMul(uint[] memory _newBaseRewardsMul) public onlyOwner {
        _baseRewardsMul = _newBaseRewardsMul;

        emit newBaseRewardsMul(_newBaseRewardsMul);
    }

    function setBaseRewardsMul(uint _newBaseRewards) public onlyOwner {
        _baseRewards = _newBaseRewards;

        emit newBaseRewards(_newBaseRewards);
    }

    function setAffinityChange(uint _newAffinityChange) public onlyOwner {
        _affinityChange = _newAffinityChange;

        emit newAffinityChange(_newAffinityChange);
    }

    function setWithdrawalCooldown(uint _newCooldown) public onlyOwner {
        _withdrawalCooldown = _newCooldown;

        emit newWithdrawalCooldown(_newCooldown);
    }

    function setEarlyWithdrawFee(uint _newFee) public onlyOwner {
        _earlyWithdrawDailyFee = _newFee;

        emit newEarlyWithdrawFee(_newFee);
    }

    function setMaxWithdrawAmount(uint _newMaxAmount) public onlyOwner {
        _maxWithdrawAmount = _newMaxAmount;

        emit newMaxWithdrawAmount(_newMaxAmount);
    }

    function setGameCurrencyContract(address _newGameCurrency) public onlyOwner {
        _gameCurrency = ERC20(_newGameCurrency);

        emit newGameCurrency(_newGameCurrency);
    }

    function setGameVaultContract(address _newVault) public onlyOwner {
        _vault = DarkCastleVault(_newVault);

        emit newGameVault(_newVault);
    }

    function setEnemiesAmount(uint _newAmount) public onlyOwner {
        _enemiesAmount = _newAmount;

        emit newEnemiesAmount(_newAmount);
    }

    function setGameLandsContract(address _newGameLands) public onlyOwner {
        _lands = DarkCastleLands(_newGameLands);

        emit newGameLands(_newGameLands);
    }

    function setGameNftsContracts(address _newGameNfts) public onlyOwner {
        _nfts = _newGameNfts;

        emit newGameNfts(_newGameNfts);
    }

    function setLandsRarityCapacity(uint[] memory _newCapacity) public onlyOwner {
        _landsRarityCappacity = _newCapacity;

        emit newLandsRarityCapacity(_newCapacity);
    }

    function setBaseStartsWinMultiplier(uint[] memory _newCapacity) public onlyOwner {
        _baseStarsWinMul = _newCapacity;

        emit newBaseStarsWinMul(_newCapacity);
    }

    function setBaseLandsWinMul(uint[] memory _newCapacity) public onlyOwner {
        _baseLandsWinMul = _newCapacity;

        emit newBaseLandsWinMul(_newCapacity);
    }

    function setAffinityWinChance(uint _newCapacity) public onlyOwner {
        _affinityWinChance = _newCapacity;

        emit newAffinityWinChance(_newCapacity);
    }


    // Game Functions
    function getDailyEnemies() public view returns(uint[] memory) {
        uint[] memory _enemies = new uint[](3);
        uint _enemies[0] = uint(keccak256(abi.encodePacked( block.timestamp.sub(block.timestamp % 1 days).div(1 days), msg.sender ))) % _enemiesAmount;
        uint _enemies[1] = uint(keccak256(abi.encodePacked( block.timestamp.sub(block.timestamp % 1 days).div(1 days), msg.sender, _enemieOne, _owner ))) % _enemiesAmount;
        uint _enemies[2] = uint(keccak256(abi.encodePacked( block.timestamp.sub(block.timestamp % 1 days).div(1 days), msg.sender, _enemieOne, _enemieTwo, _owner, address(_gameCurrency), address(_vault)))) % _enemiesAmount;

        return(_enemies);
    }

    function getAddressSettedLand() public view returns(uint) {
        return addressLand[msg.sender];
    }

    function setAddressLand(uint _landId) public {
        require(_lands.ownerOf(_landId) == msg.sender);
        require(_lands.getApproved(_landId) == address(this), "Need to approve the land First");

        if (landEquiped[msg.sender]) {
            landEquiped[msg.sender] = false;
            _lands.transfer(msg.sender, addressLand[msg.sender]);
        }

        _lands.transferFrom(msg.sender, address(this), _landId);
        addressLand[msg.sender] = _landId;
        landEquiped[msg.sender] = true;
    }

    function withdrawLand() public {
        require(landEquiped[msg.sender], "No land equiped");

        landEquiped[msg.sender] = false;
        _lands.transfer(msg.sender, addressLand[msg.sender]);
    }

    function _getWinchance(uint[] memory nftIds, uint _boss) internal view returns (uint) {
        uint _winChance = _baseWinChances[_boss] + _baseLandsWinMul[_lands.getTokenDna(addressLand[msg.sender])[0]];
        uint _bosses = getDailyEnemies()[_boss];

        for (uint i = 0; i < nftIds.length) {
            _baseWinChance += _baseStarsWinMul[_nfts.getTokenDna(addressLand[msg.sender])[2]];
        
            if(_nfts.getTokenDna(addressLand[msg.sender])[1] - 1 == _bosses) {
                _baseWinChance += _affinityWinChance;
            } else if (_nfts.getTokenDna(addressLand[msg.sender])[1] + 1 == _bosses) {
                _baseWinChance -= _affinityWinChance;
            }
        }    
    }

    function fight(uint _boss, uint[] memory nftIds) public  onlyOwnerOfNfts(nftIds) {
        require(nftIds.length > 0, "No nfts Specified");
        require(_boss < _enemiesCount, "Invalid Boss");
        require(lastFight[msg.sender] < (block.timestamp - block.timestamp % 1 days) / 1 days, "Only once a day");

        _enemies = getDailyEnemies();
        _selectedEnemie = _enemies[_boss];
        _winchance = getWinchance(nftIds, _boss);

        if(uint(keccak256(abi.encodePacked(block.timestamp,block.difficulty, msg.sender, _enemiesCount, accumulatedBalance[msg.sender], lastWithdrawal[msg.sender], addressLand[msg.sender], lastFight[msg.sender]))) % 100 < _winchance) {
            P
        } else {
            // Lose
        }

    }


    // Economy Functions
    function withdrawUserBalance() public {
        require(accumulatedBalance[msg.sender] > 0, "No Balance to Withdraw");
        require(accumulatedBalance[msg.sender] <= _vault.maxTxAmount, "Surpases the Max Tx Amount");
        require(_gameCurrency.balanceOf(address(_vault)) >= accumulatedBalance[msg.sender], "Not enough tokens in vault");

        uint _fee = lastWithdrawal[msg.sender].add(10 days) < block.timestamp ? 0 : (block.timestamp.sub(lastWithdrawal).sub((block.timestamp - lastWithdrawal) % 1 days).div(1 days).mul(_earlyWithdrawDailyFee);
        uint _totalAmount = accumulatedBalance[msg.sender].mul(100.sub(_fee)).div(100);

        _vault.requestFunds(_totalAmount, msg.sender);
        emit withdrawnBalance(_totalAmount, msg.sender);
    }


    // Other Functions
    receive() external payable {}
    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(payable(address(this)).balance);
    }


    // Modifiers
    modifier onlyOwner {
        require(msg.sender == _owner, "Not the owner");

        _;
    }

    modifier onlyOwnerOfNfts(uint[] memory _nftIds) {
        for(uint i = 0; i<_nftIds.length: i++) {
            require(_nfts.ownerOf(_nftIds[i]) == msg.sender, "Not the owner of the nfts");
        }

        _;
    }

}