const { ethers } = require("hardhat");

async function main() {
    // Deploy MyContract
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();
    await myContract.waitForDeployment();
    const myContractAddress = await myContract.getAddress();

    console.log("MyContract deployed to:", myContractAddress);
    console.log("Greet message from MyContract:", await myContract.greet());

    // Deploy LearnFunction
    const LearnFunction = await ethers.getContractFactory("LearnFunction");
    const learnFunction = await LearnFunction.deploy();
    await learnFunction.waitForDeployment();
    const learnFunctionAddress = await learnFunction.getAddress();

    console.log("LearnFunction deployed to:", learnFunctionAddress);
    console.log("Initial hey value from LearnFunction:", await learnFunction.getInfo());
    console.log("hey value from updated:", await learnFunction.updateInfo(402));

    const tx = await learnFunction.updateInfo(100); // Sets `hey` to 100
    await tx.wait();
    //console.log("hey value from updated:", await learnFunction.getInfo());
    const heyValue = await learnFunction.getInfo();
    console.log("hey value from updated:", heyValue.toString());  // Logs only the value as a string
    console.log("Sum value from updated:", await learnFunction.get(2, 3));
    console.log("Product value from updated:", await learnFunction.getProduct(2, 3));
    console.log("value :", await learnFunction.ifElse(5));

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
