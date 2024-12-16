// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract NFTCount {
    uint256 public numberOfNFT;

    function addNFT() public {
        numberOfNFT += 1;
    }

    function deleteNFT() public {
        numberOfNFT -= 1;
    }

    function getNFT() public view returns(uint256) {
        return numberOfNFT;
    }
}