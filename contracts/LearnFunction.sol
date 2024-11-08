// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract LearnFunction {
    // Contract code will go here
    uint256 public hey = 35;
    //uint256 hey;

    function getInfo() public view returns (uint256) {
        return hey;
    }

    function updateInfo(uint256 _newInfo) public returns (uint256) {
        hey = _newInfo;
        return hey;
    }
    function get(uint256 _a, uint256 _b) public pure returns (uint256) {
        uint256 sum = _a + _b;
        return sum;
    }
    function getProduct(uint256 _a, uint256 _b) public pure returns (uint256) {
        uint256 product = _a * _b;
        return product;
    }
}