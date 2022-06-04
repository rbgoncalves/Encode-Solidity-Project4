//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RealMonkeyCollection is ERC721URIStorage, Ownable {

    constructor() public ERC721("Real Monkey Collection", "RMC") {}

    function mintNft(address to, uint256 id, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _mint(to, id);
        _setTokenURI(id, tokenURI);

        return id;
    }
}