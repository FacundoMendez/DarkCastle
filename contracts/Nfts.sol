// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract DarkCastleNfts is ERC721Enumerable {

    // Delegated
    address private _delegatedMinter;
    address private _owner;


    // Nfts Info
    mapping(uint => uint[]) nftDna;
    string _baseTokensURI;
    uint nftsCount = 1;


    // Events
    event baseURIChanged(string);
    event newDelegated(address);


    // Constructor
    constructor () ERC721("DK Nfts", "DKN") {

        _owner = msg.sender;

    }


    // Main Logic
    function setDelegatedMinter(address _newDelegated) public onlyOwner {
        require(_newDelegated != _delegatedMinter, "Already the delegated address");

        _delegatedMinter = _newDelegated;

        emit newDelegated(_newDelegated);
    }


    function mint(uint[] memory _nftDna) onlyDelegated external returns(uint) {

        uint _nftId = nftsCount;
        nftDna[_nftId] = _nftDna;
        nftsCount ++;

        super._mint(msg.sender, _nftId);

        return(_nftId);

    }


    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, nftDna[tokenId], ".json")) : "";
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
    modifier onlyOwner {
        require(msg.sender == _owner, "Not the owner");

        _;
    }


    modifier onlyDelegated {
        require(msg.sender == _delegatedMinter, "Not a delegated Minter");

        _;
    }

    modifier onlyOwnerOf(uint _tokenId) {
        require(ownerOf(_tokenId) == msg.sender, "Not the Nft Owner");

        _;
    }

}   