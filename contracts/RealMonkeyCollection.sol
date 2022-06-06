//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RealMonkeyCollection is ERC721, Ownable {
    event NftMinted(address indexed to, uint256 tokenId, string tokenURI);

    constructor() ERC721("Real Monkey Collection", "RMC") {}

    function mintNft(address to, uint256 tokenId)
        public
        onlyOwner
        returns (uint256)
    {
        
        _mint(to, tokenId);

        emit NftMinted(to, tokenId, tokenURI(tokenId));

        return tokenId;
    }

     function _baseURI() internal pure override returns (string memory) {
        return "/metadata/";
    }

}