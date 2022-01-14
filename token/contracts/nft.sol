// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address public owner;
    constructor() ERC721("SampleNFT","MT_Nft") {
        owner = msg.sender;
    }

    modifier onlyOwner (){
        require(msg.sender  == owner,"Only owner can perform this task");
        _;
    }

    function Mint(address player) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        return newItemId;
    }
    function getBaseURI() public pure returns (string memory) {
        return "http://localhost:3000/nft";
    } 
}