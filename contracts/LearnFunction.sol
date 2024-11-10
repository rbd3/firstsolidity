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

    function dowhile2() public returns (uint256[] memory) {
        uint256 number = 0;
        delete data;

        while (number < 20) {
            number ++;
            data.push(number);
            
        }
        return data;
    }

    function remove(uint _index) public {
        require(_index < data.length, "Index out of boud");

        for (uint i = _index; i < data.length - 1; i++) {
            data[i] = data[i + 1];
        }
        data.pop();
    } 

    function test(uint _index) external {
        data = [1,2,7,200,30,20,40];

        remove(_index);
    }

// time compexity O(2^n) space complexity O(n) due to the depth of the recursion stack.
    function fibonnacci(uint256 _number) public pure returns (uint256) {
        //uint256 fibo;
        //fibo(0) = 0;
        //fibo(1) = 1;
        if (_number == 0) {
            return 0;
        } else if (_number == 1){
            return 1;
        } else {
            return fibonnacci(_number - 1) + fibonnacci(_number - 2);
        }
        
    }

    //fibonacci using iteration
    // time complexity O(n) space complexity O(1)
    function fibo(uint256 _number) public pure returns (uint256) {
        uint256 a = 0;
        uint256 b = 1;
        uint256 fibo;

        if (_number == 0) {
            return 0;
        } else if (_number == 1) {
            return 1;
        }

        for (uint i = 2; i < _number; i++) {
            fibo = a + b;
            a = b;
            b = fibo;
        }
        return fibo;
    }
}