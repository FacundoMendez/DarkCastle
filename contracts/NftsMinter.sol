// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Nfts.sol";
import "./Lands.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./FusionStones.sol";
import "./SecurityStones.sol";

contract nftsMinterDelegator {
    using SafeMath for uint;


    // Constructor
    constructor(address ownersAddress, address liquidityAddress) {
        _owner = msg.sender;
        _ownersAddress = ownersAddress;
        _liquidityAddress = liquidityAddress;
    }


    // Nft Rarities
    enum Rarities{ COMMON, RARE, EPIC, MITHIC }
    Rarities nftRaritie;


    // Custom Token
    ERC20 currencyToken;
    DarkCastleNfts nfts;
    DarkCastleLands lands;
    FusionStones fusionStones;
    SecurityStones securityStones;


    // Utils
    uint public maxNftsAmount = 10000;
    address private _owner;
    bool private _paused = false;
    uint public baseCombinationSuccessRate;
    uint[] private raritiesValues = [0, 1, 10, 100, 1000];

    uint public maxLandsAmount = 1000;


    // Private Sales
    uint private firstPrivateSaleNftsAmountLeft = 1000;
    uint private firstLandsPrivateSaleNftsAmountLeft = 10;
    uint private secondPrivateSaleNftsAmountLeft = 2000;
    uint private secondLandsPrivateSaleNftsAmountLeft = 20;

    bool public firstPrivateSaleOngoing = false;
    bool public secondPrivateSaleOngoing = false;
    bool public publicSaleOngoing = false;

    uint public firstPrivateSaleStartTime;
    uint public firstPrivateSaleDuration;
    uint public secondPrivateSaleStartTime;
    uint public secondPrivateSaleDuration;

    // Prices
    uint[] public publicSaleERCPrices = [100, 500, 2500, 10000]; // In tokens. Without Decimals.
    uint[] public firstPrivateSalePrices = [0.0001 ether, 0.0001 ether, 0.0001 ether, 0.0001 ether];// [0.1 ether, 0.25 ether, 0.5 ether, 1 ether]; // In wei.
    uint[] public secondPrivateSalePrices = [0.3 ether, 0.75 ether, 1.5 ether, 3 ether]; // In wei.

    uint public publicLandsSaleERCPrices = 5000; // In tokens. Without Decimals.
    uint public firstLandsPrivateSalePrices = 3 ether; // In wei.
    uint public secondLandsPrivateSalePrices = 9 ether; // In wei.


    // Fees
    uint private _ownersFee = 20;
    address private _ownersAddress;
    address private _liquidityAddress;


    // Events
    event firstPrivateSaleStarted(uint);
    event secondPrivateSaleStarted(uint);
    event publicSaleStarted(uint);
    event newCurrencyToken(address);
    event newFusionStonesAddress(address);
    event newSecurityStonesAddress(address);
    event newBaseCombinationSuccessRate(uint);
    event newNftsContract(address);


    // Functions
    function setNftsContract(address _newContractAddress) public onlyOwner {
        nfts = DarkCastleNfts(_newContractAddress);

        emit newNftsContract(_newContractAddress);
    }

    function mintCommon() public notPaused payable returns(uint) {
        bool _continue = _checkBalance(0);
        require(_continue, "Error");

        uint[] memory _newNftDna = new uint[](4);

        _newNftDna[0] = 1; // Rareness
        _newNftDna[1] = _getNftType(); // Type
        _newNftDna[2] = _getNftStars(); // Stars
        _newNftDna[3] = raritiesValues[1]; // Rareness Value

        uint _newNftId = nfts.mint(_newNftDna, msg.sender);
        return _newNftId;
    }

    function mintRare() public notPaused payable returns(uint) {
        bool _continue = _checkBalance(1);
        require(_continue, "Error");

        uint[] memory _newNftDna = new uint[](4);

        _newNftDna[0] = 2; // Rareness
        _newNftDna[1] = _getNftType(); // Type
        _newNftDna[2] = _getNftStars(); // Stars
        _newNftDna[3] = raritiesValues[2]; // Rareness Value

        uint _newNftId = nfts.mint(_newNftDna, msg.sender);
        return _newNftId;
    }

    function mintEpic() public notPaused payable returns(uint) {
        bool _continue = _checkBalance(2);
        require(_continue, "Error");

        uint[] memory _newNftDna = new uint[](4);

        _newNftDna[0] = 3; // Rareness
        _newNftDna[1] = _getNftType(); // Type
        _newNftDna[2] = _getNftStars(); // Stars
        _newNftDna[3] = raritiesValues[3]; // Rareness Value

        uint _newNftId = nfts.mint(_newNftDna, msg.sender);
        return _newNftId;
    }

    function mintMithic() public notPaused payable returns(uint) {
        bool _continue = _checkBalance(3);
        require(_continue, "Error");

        uint[] memory _newNftDna = new uint[](4);

        _newNftDna[0] = 4; // Rareness
        _newNftDna[1] = _getNftType(); // Type
        _newNftDna[2] = _getNftStars(); // Stars
        _newNftDna[3] = raritiesValues[4]; // Rareness Value

        uint _newNftId = nfts.mint(_newNftDna, msg.sender);
        return _newNftId;
    }

    function mintLand() public notPaused payable returns(uint) {
        bool _continue = _checkBalanceLands();
        require(_continue, "Error");

        uint[] memory _newNftDna = new uint[](1);

        uint _rareness = _getLandRarity();

        _newNftDna[0] = _rareness; // Rareness

        uint _newNftId = lands.mint(_newNftDna, msg.sender);
        return _newNftId;
    }

    function combineNfts(bool _secured, uint _nftIdOne, uint _nftIdTwo, uint _nftIdThree) public notPaused returns(uint, bool) {
        require(fusionStones.balanceOf(msg.sender) > 0, "Not enough Fusion Stones");
        if (_secured) {
            require(securityStones.balanceOf(msg.sender) > 0, "Not enough Security Stones");
        }
        require(nfts.ownerOf(_nftIdOne) == msg.sender && nfts.ownerOf(_nftIdTwo) == msg.sender && nfts.ownerOf(_nftIdThree) == msg.sender, "Not the owner of the nfts");

        fusionStones.useStone(msg.sender);
        if (_secured) {
            securityStones.useStone(msg.sender);
        }

        uint _successRate = _secured ? 100 : baseCombinationSuccessRate;
        uint _successNumber = uint(keccak256(abi.encodePacked(block.timestamp,block.difficulty, msg.sender, maxNftsAmount, firstPrivateSaleNftsAmountLeft, secondPrivateSaleNftsAmountLeft, nfts.balanceOf(msg.sender), currencyToken.balanceOf(msg.sender)))) % 100;

        if(_successNumber < _successRate) {
            
            uint[] memory _newNftDna = new uint[](3);
            uint rarityValue = _getNftRarity(_nftIdOne, _nftIdTwo, _nftIdThree);

            if (rarityValue >= raritiesValues[4]) {
                _newNftDna[0] = 4;
            } else if (rarityValue >= raritiesValues[3]) {
                _newNftDna[0] = 3;
            } else if (rarityValue >= raritiesValues[2]) {
                _newNftDna[0] = 2;
            } else {
                _newNftDna[0] = 1;
            }

            _newNftDna[1] = _getNftType();
            _newNftDna[2] = _getNftStars();
            _newNftDna[3] = rarityValue;

            nfts.delegatedBurn(_nftIdOne);
            nfts.delegatedBurn(_nftIdTwo);
            nfts.delegatedBurn(_nftIdThree);

            uint _newNftId = nfts.mint(_newNftDna, msg.sender);
            return (_newNftId, true);

        } else {

            nfts.delegatedBurn(_nftIdOne);
            return(0, false);

        }
        
    }

    function modifySalesPrices(uint _sale, uint[] memory _newPrices) public onlyOwner {
        if(_sale == 0) {
            firstPrivateSalePrices = _newPrices;
        } else if (_sale == 1) {
            secondPrivateSalePrices = _newPrices;
        } else if (_sale == 2) {
            publicSaleERCPrices = _newPrices;
        } else {
            revert("Not a valid sale.");
        }
    }

    function startFirstPrivateSale(uint _duration) public onlyOwner {
        require(firstPrivateSaleStartTime == 0);

        firstPrivateSaleDuration = _duration;
        firstPrivateSaleStartTime = block.timestamp;
        firstPrivateSaleOngoing = true;

        emit firstPrivateSaleStarted(_duration);
    }

    function startSecondPrivateSale(uint _duration) public onlyOwner {
        require(firstPrivateSaleDuration + firstPrivateSaleStartTime < block.timestamp && firstPrivateSaleStartTime != 0 && secondPrivateSaleStartTime == 0, "Not ready to start second Sale.");

        secondPrivateSaleDuration = _duration;
        secondPrivateSaleStartTime = block.timestamp;
        secondPrivateSaleOngoing = true;
        firstPrivateSaleOngoing = false;

        emit secondPrivateSaleStarted(_duration);
    }

    function startPublicSale() public onlyOwner {
        require(secondPrivateSaleDuration + secondPrivateSaleStartTime < block.timestamp && secondPrivateSaleStartTime != 0);

        secondPrivateSaleOngoing = false;
        publicSaleOngoing = true;

        emit publicSaleStarted(block.timestamp);
    }

    function setCurrencyToken(address _newCurrencyToken) public onlyOwner {
        require(_newCurrencyToken != address(0), "Can not create to address 0");

        currencyToken = ERC20(_newCurrencyToken);
        emit newCurrencyToken(_newCurrencyToken);
    }

    function setBaseCombinationSuccessRate(uint _newValue) public onlyOwner {
        baseCombinationSuccessRate = _newValue;

        emit newBaseCombinationSuccessRate(_newValue);
    }

    function setFusionStones(address _newAddress) public onlyOwner {
        require(_newAddress != address(0), "Can not create to address 0");

        fusionStones = FusionStones(_newAddress);
        emit newFusionStonesAddress(_newAddress);
    }

    function setSecurityStones(address _newAddress) public onlyOwner {
        require(_newAddress != address(0), "Can not create to address 0");

        securityStones = SecurityStones(_newAddress);
        emit newSecurityStonesAddress(_newAddress);
    }

    function _checkBalance(uint _raritie) internal returns(bool) {
        require(firstPrivateSaleOngoing && firstPrivateSaleNftsAmountLeft > 0 || secondPrivateSaleOngoing && secondPrivateSaleNftsAmountLeft > 0 || publicSaleOngoing && maxNftsAmount > 0, "No ongoing sales.");

        if (firstPrivateSaleOngoing) {

            require(msg.value >= firstPrivateSalePrices[_raritie], "Not Enough Ether Balance.");

            firstPrivateSaleNftsAmountLeft --;
            maxNftsAmount --;

            uint _ownersFeeAmount = firstPrivateSalePrices[_raritie].mul(_ownersFee).div(100);

            payable(_ownersAddress).transfer(_ownersFeeAmount);
            payable(_liquidityAddress).transfer(payable(address(this)).balance);
            
        } else if(secondPrivateSaleOngoing) {

            require(msg.value >= secondPrivateSalePrices[_raritie], "Not Enough Ether Balance.");

            secondPrivateSaleNftsAmountLeft --;
            maxNftsAmount --;

            uint _ownersFeeAmount = secondPrivateSalePrices[_raritie].mul(_ownersFee).div(100);
            
            payable(_ownersAddress).transfer(_ownersFeeAmount);
            payable(_liquidityAddress).transfer(payable(address(this)).balance);

        } else {

            require(currencyToken.balanceOf(msg.sender) >= publicSaleERCPrices[_raritie] * 10 ** 18, "Not Enough ERC20 Balance.");
            require(currencyToken.allowance(msg.sender, address(this)) >= publicSaleERCPrices[_raritie] * 10 ** 18, "Not enough allowance.");
            currencyToken.transferFrom(msg.sender, address(this), publicSaleERCPrices[_raritie] * 10 ** 18);

            maxNftsAmount --;

            uint _ownersFeeAmount = publicSaleERCPrices[_raritie].mul(10 ** 18).mul(_ownersFee).div(100);
            
            currencyToken.transfer(_ownersAddress, _ownersFeeAmount);
            currencyToken.transfer(_liquidityAddress, currencyToken.balanceOf(address(this)));

        }

        return true;

    } 

    function _checkBalanceLands() internal returns(bool) {
        require(firstPrivateSaleOngoing && firstPrivateSaleNftsAmountLeft > 0 || secondPrivateSaleOngoing && secondPrivateSaleNftsAmountLeft > 0 || publicSaleOngoing && maxLandsAmount > 0, "No ongoing sales.");

        if (firstPrivateSaleOngoing) {

            require(msg.value >= firstLandsPrivateSalePrices, "Not Enough Ether Balance.");

            firstPrivateSaleNftsAmountLeft --;
            maxLandsAmount --;

            uint _ownersFeeAmount = firstLandsPrivateSalePrices.mul(_ownersFee).div(100);

            payable(_ownersAddress).transfer(_ownersFeeAmount);
            payable(_liquidityAddress).transfer(payable(address(this)).balance);
            
        } else if(secondPrivateSaleOngoing) {

            require(msg.value >= secondLandsPrivateSalePrices, "Not Enough Ether Balance.");

            secondPrivateSaleNftsAmountLeft --;
            maxLandsAmount --;

            uint _ownersFeeAmount = secondLandsPrivateSalePrices.mul(_ownersFee).div(100);
            
            payable(_ownersAddress).transfer(_ownersFeeAmount);
            payable(_liquidityAddress).transfer(payable(address(this)).balance);

        } else {

            require(currencyToken.balanceOf(msg.sender) >= publicLandsSaleERCPrices * 10 ** 18, "Not Enough ERC20 Balance.");
            require(currencyToken.allowance(msg.sender, address(this)) >= publicLandsSaleERCPrices * 10 ** 18, "Not enough allowance.");
            currencyToken.transferFrom(msg.sender, address(this), publicLandsSaleERCPrices * 10 ** 18);

            maxLandsAmount --;

            uint _ownersFeeAmount = publicLandsSaleERCPrices.mul(10 ** 18).mul(_ownersFee).div(100);
            
            currencyToken.transfer(_ownersAddress, _ownersFeeAmount);
            currencyToken.transfer(_liquidityAddress, currencyToken.balanceOf(address(this)));

        }

        return true;

    } 

    function _getNftType() internal view returns(uint) {
        return uint(keccak256(abi.encodePacked(block.timestamp,block.difficulty, msg.sender, maxNftsAmount, firstPrivateSaleNftsAmountLeft, secondPrivateSaleNftsAmountLeft))) % 3 + 1;
    }

    function _getNftStars() internal view returns(uint) {
        return uint(keccak256(abi.encodePacked(block.timestamp,block.difficulty, msg.sender))) % 3 + 1;
    }

    function _getNftRarity(uint _nftIdOne, uint _nftIdTwo, uint _nftIdThree) internal view returns(uint) {
        uint _rarity = 0;

        _rarity = nfts.getTokenDna(_nftIdOne)[3] + nfts.getTokenDna(_nftIdTwo)[3] + nfts.getTokenDna(_nftIdThree)[3] + 1;

        return _rarity;
    }

    function _getLandRarity() internal view returns (uint) {
        uint _rareness = uint(keccak256(abi.encodePacked(block.timestamp,block.difficulty, msg.sender, maxNftsAmount, firstPrivateSaleNftsAmountLeft, secondPrivateSaleNftsAmountLeft, firstLandsPrivateSaleNftsAmountLeft, secondLandsPrivateSaleNftsAmountLeft, maxLandsAmount))) % 100;
        if (_rareness < 60) {
            return(1);
        } else if (_rareness < 90) {
            return(2);
        } else if (_rareness < 99) {
            return(3);
        } else {
            return(4);
        }
    }

    receive() external payable {} // For donations.

    function donate() external payable {}  // thank you.

    // This allows the devs to receive kind donations.
    function withdraw() external onlyOwner {
        (bool sent, ) = payable(_owner).call{value: payable(address(this)).balance}("");
        require(sent, "Failed to withdraw");
    }



    // Modifiers
    modifier onlyOwner {
        require(msg.sender == _owner, "Not the Owner");

        _;
    }

    modifier notPaused {
        require(_paused == false, "Contract Paused");

        _;
    }

}