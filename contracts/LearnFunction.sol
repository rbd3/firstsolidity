// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract LearnFunction {
    // Contract code will go here
    uint256 public hey = 35;
    //uint256 hey;
    uint256[] data;

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

    function ifElse(uint256 _num) public pure returns (string memory) {
        if (_num == 5) {
            return "Number is 5";
        } else if (_num < 5) {
            return "Number is less than 5";
        } else {
            return "Number is higher than 5";
        }

        // short hand if else
        // return _num == 5 ? "Number is 5" : "Number is not 5";
    }

    function ForLoop() public returns (uint256[] memory) {
        delete data;

        for (uint256 i = 0; i < 10; i++) {
            data.push(i);
        }

        return data;
    }

    // View function to retrieve the array after ForLoop runs
    function getData() public view returns (uint256[] memory) {
        return data;
    }

    function dowhileLoop() public returns (uint256[] memory) {
        uint256 i = 0;
        delete data;

        do {
            data.push(i);
            i++;
        } while (i < 5);
        return data;
    }

    function whileLoop() public returns (uint256[] memory) {
        uint256 i = 0;
        delete data;

        while (i < 8) {
            data.push(i);
            i++;
        }
        return data;
    }
}