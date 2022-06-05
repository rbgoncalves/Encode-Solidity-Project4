//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RealMonkeyCollection is ERC721URIStorage, Ownable {
    event NftMinted(address indexed to, uint256 tokenId, string tokenURI);

    constructor() public ERC721("Real Monkey Collection", "RMC") {}

    function mintNft(address to, uint256 tokenId, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);

        emit NftMinted(to, tokenId, tokenURI);

        return tokenId;
    }
}