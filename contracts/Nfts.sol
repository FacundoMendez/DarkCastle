// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "./ILayerZeroUserApplication.sol";

contract DarkCastleNfts is ERC721Enumerable, NonblockingReceiver {

    // LayerZero
    uint gasForDestinationLzReceive = 350000;


    // Delegated
    address private _delegatedMinter;
    address private _owner;


    // Nfts Info
    mapping(uint => uint[]) public nftDna;
    string _baseTokensURI;
    uint nftsCount = 1;


    // Events
    event baseURIChanged(string);
    event newDelegated(address);


    // Constructor
    constructor (address _layerZeroEndpoint) ERC721("DK Nfts", "DKN") {

        _owner = msg.sender;
        endpoint = ILayerZeroEndpoint(_layerZeroEndpoint);

    }

    function donate() external payable {}  // thank you

    // This allows the devs to receive kind donations
    function withdraw() external onlyOwner {
        (bool sent, ) = payable(_owner).call{value: payable(address(this)).balance}("");
        require(sent, "Failed to withdraw");
    }


    // Helper
    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len;
        while (_i != 0) {
            k = k-1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }


    // Main Logic
    function setDelegatedMinter(address _newDelegated) public onlyOwner {
        require(_newDelegated != _delegatedMinter, "Already the delegated address");

        _delegatedMinter = _newDelegated;

        emit newDelegated(_newDelegated);
    }


    function mint(uint[] memory _nftDna, address _minter) onlyDelegated external returns(uint) {

        uint _nftId = nftsCount;
        nftDna[_nftId] = _nftDna;
        nftsCount ++;

        super._mint(_minter, _nftId);

        return(_nftId);

    }


    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, uint2str(nftDna[tokenId][0]), uint2str(nftDna[tokenId][1]), uint2str(nftDna[tokenId][2]), ".json")) : "";
    }


    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokensURI;
    }


    function setBaseURI(string memory _newURI) public onlyOwner {
        _baseTokensURI = _newURI;

        emit baseURIChanged(_newURI);
    }

    function burn(uint _tokenId) public onlyOwnerOf(_tokenId) {
        super._burn(_tokenId);
    }

    function delegatedBurn(uint _tokenId) public onlyDelegated {
        super._burn(_tokenId);
    }

    function getTokenDna(uint _tokenId) public view returns(uint[] memory) {
        return(nftDna[_tokenId]);
    }


    // Modifiers
    modifier onlyDelegated {
        require(msg.sender == _delegatedMinter, "Not a delegated Minter");

        _;
    }

    modifier onlyOwnerOf(uint _tokenId) {
        require(ownerOf(_tokenId) == msg.sender, "Not the Nft Owner");

        _;
    }


    // LayerZero

    // This function transfers the nft from your address on the 
    // source chain to the same address on the destination chain
    function traverseChains(uint16 _chainId, uint tokenId) public payable {
        require(msg.sender == ownerOf(tokenId), "You must own the token to traverse");
        require(trustedRemoteLookup[_chainId].length > 0, "This chain is currently unavailable for travel");

        // burn NFT, eliminating it from circulation on src chain
        _burn(tokenId);

        // abi.encode() the payload with the values to send
        bytes memory payload = abi.encode(msg.sender, nftDna[tokenId][0], nftDna[tokenId][1], nftDna[tokenId][2], nftDna[tokenId][3]);

        // encode adapterParams to specify more gas for the destination
        uint16 version = 1;
        bytes memory adapterParams = abi.encodePacked(version, gasForDestinationLzReceive);

        // get the fees we need to pay to LayerZero + Relayer to cover message delivery
        // you will be refunded for extra gas paid
        (uint messageFee, ) = endpoint.estimateFees(_chainId, address(this), payload, false, adapterParams);
        
        require(msg.value >= messageFee, "msg.value not enough to cover messageFee. Send gas for message fees");

        endpoint.send{value: msg.value}(
            _chainId,                           // destination chainId
            trustedRemoteLookup[_chainId],      // destination address of nft contract
            payload,                            // abi.encoded()'ed bytes
            payable(msg.sender),                // refund address
            address(0x0),                       // 'zroPaymentAddress' unused for this
            adapterParams                       // txParameters 
        );
    }  


    function _LzReceive(uint16 _srcChainId, bytes memory _srcAddress, uint64 _nonce, bytes memory _payload) override internal {
        // decode
        (address toAddr, uint _rareness, uint _type, uint _stars, uint _rarenessValue) = abi.decode(_payload, (address, uint, uint, uint, uint));


        // mint the tokens back into existence on destination chain
        uint _nftId = nftsCount;
        nftDna[_nftId] = [_rareness, _type, _stars, _rarenessValue];
        nftsCount ++;

        super._mint(toAddr, _nftId);
    }  

}   