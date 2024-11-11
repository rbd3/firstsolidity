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
    
    const forl = await learnFunction.ForLoop();
    await forl.wait();

    // Retrieve and log the populated data
    const result = await learnFunction.getData();
    console.log("Array data value:", result);

    const dowhil = await learnFunction.dowhileLoop();
    await dowhil.wait();

    // Retrieve and log the populated data
    const resultdo = await learnFunction.getData();
    console.log("dowhile value:", resultdo);

    const whil = await learnFunction.whileLoop();
    await whil.wait();

    // Retrieve and log the populated data
    const resultwhil = await learnFunction.getData();
    console.log("d1owhile value:", resultwhil);

    const whil2 = await learnFunction.dowhile2();
    await whil2.wait();

    // Retrieve and log the populated data
    const resultwhil2 = await learnFunction.getData();
    console.log("d1owhile2 value:", resultwhil2);

    const removet = await learnFunction.test(4);
    await removet.wait();

    // Retrieve and log the populated data
    const resulremove = await learnFunction.getData();
    console.log("resulremove value:", resulremove);

    //fibonacci
    console.log("Fibonnacci value from :", await learnFunction.fibonnacci(11));
    //console.log("Fibonnacci value optimize :", await learnFunction.fibonnacci(22));

    // Deploy Enum
    const Enum = await ethers.getContractFactory("Enum");
    const Enumd = await Enum.deploy();
    await Enumd.waitForDeployment();
    const EnumAddress = await Enumd.getAddress();
    console.log("Initial Status:", await Enumd.get());
   
   // const setstatus = await Enumd.set(Enum.Status.Accepted);
   const setstatus = await Enumd.set(2);
    await setstatus.wait();
    console.log("Status Updated:", await Enumd.get());

    const cancelstatus = await Enumd.cancel();
    await cancelstatus.wait();
    console.log("Status Cancel:", await Enumd.get());

    const ressetstatus = await Enumd.resset();
    await ressetstatus.wait();
    console.log("Status resset:", await Enumd.get());


}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
