const { ethers } = require("hardhat");

async function main() {
    const MyContract = await ethers.getContractFactory("MyContract"); // Load the contract
    const myContract = await MyContract.deploy();                     // Deploy the contract

    // Wait for the contract to finish deploying and retrieve the address
    await myContract.waitForDeployment();

    // Retrieve the address from `getAddress()` if `address` is undefined
    const contractAddress = await myContract.getAddress(); 

    console.log("MyContract deployed to:", contractAddress); // Display the contract address
    console.log("Greet message:", await myContract.greet()); // Call the greet function and log the message
    console.log("GasLimit is: ", await myContract.gasLimit());
    console.log("GasPrice is: ", await myContract.gasprice());
    console.log("number is: ", await myContract.number());
    console.log("timestamp is: ", await myContract.timestamp());
    console.log("calldata is: ", await myContract.callData());
    console.log("firstfour is: ", await myContract.Firstfour());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
