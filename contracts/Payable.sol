// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract Payable {
    address payable public owner;

    constructor() payable {
        owner = payable(msg.sender);
    }

    function deposit() public payable {}

    function withdraw() public {
        uint amount = address(this).balance;
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send ether");
    }

    function transfer(address payable _to, uint _amount) public {
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed to send ether");
    } 

    function checkBalance() public view returns (uint256) {
        return address(this).balance;
    }
}