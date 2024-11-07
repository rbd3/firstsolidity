// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract MyContract {
    string public greet = "Hello, World! now I aded more text";
    address public owner;
    uint256 public gasLimit;
    uint256 public gasprice;
    uint256 public number;
    uint256 public timestamp;
    bytes public callData;
    bytes4 public Firstfour;
    address public constant adrr = 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707;

    constructor(){
        owner = msg.sender;
        gasLimit = block.gaslimit;
        gasprice = tx.gasprice;
        number = block.number;
        timestamp = block.timestamp;
        callData = msg.data;
        Firstfour = msg.sig;
    }
}