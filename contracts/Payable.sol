// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract Payable {
    address payable public owner;

    constructor() payable {
        owner = payable(msg.sender);
    }

    modifier onlyOwner() {
    require(msg.sender == owner, "You are not the owner");
    _;
}

    function deposit() public payable {}

    function withdrawAll() public  {
        uint amount = address(this).balance;
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send ether");
    }

    function withdrawAllOptimized() public onlyOwner {
        uint amount = address(this).balance;
        require(amount > 0, "No Balance available");
        payable(owner).transfer(amount);
    }

    function withdraw(uint256 amount) public {
        require(amount <= address(this).balance, "Insufficient balance in contract");
        payable(msg.sender).transfer(amount);
    }

    function transfer(address payable _to, uint _amount) public {
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed to send ether");
    } 

    function transferOptimized(address payable _to, uint _amount) public {
        require(address(this).balance >= _amount, "Insufficient balance in contract");
        _to.transfer(_amount);
    }

    function checkBalance() public view returns (uint256) {
        return address(this).balance;
    }
}