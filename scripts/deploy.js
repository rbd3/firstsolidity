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

     // Deploy VoteSystem
     const VotingSystem = await ethers.getContractFactory("VotingSystem");
     const VotingSystem1 = await VotingSystem.deploy();
     await VotingSystem1.waitForDeployment();
     const VotingSystemAddress = await Enumd.getAddress();
     console.log("voting system");

     const createProposal = await VotingSystem1.createProposal("proposal for new features");
     await createProposal.wait();
     console.log("Status created:", await VotingSystem1.getStatus(1));

     // Retrieve and log the proposal information for the first proposal
    const proposalInfo1 = await VotingSystem1.getProposal(1);
    console.log("Proposal Description:", proposalInfo1.description);
    console.log("Up Votes:", proposalInfo1.upVotes.toString());
    console.log("Down Votes:", proposalInfo1.downVotes.toString());
    console.log("Status:", proposalInfo1.status);

    // Step 3: Start voting on the proposal
const startVotingTx = await VotingSystem1.startVoting(1);
await startVotingTx.wait();
// Retrieve and log the proposal information for the first proposal
const proposalInfo = await VotingSystem1.getProposal(1);
console.log("Proposal Description:", proposalInfo.description);
console.log("Up Votes:", proposalInfo.upVotes.toString());
console.log("Down Votes:", proposalInfo.downVotes.toString());
console.log("Status:", proposalInfo.status);

// Step 4: Cast votes (3 upvotes and 2 downvotes)
await VotingSystem1.vote(1, true); // Upvote
await VotingSystem1.vote(1, true); // Upvote
await VotingSystem1.vote(1, true); // Upvote
await VotingSystem1.vote(1, false); // Downvote
await VotingSystem1.vote(1, false); // Downvote
await VotingSystem1.vote(1, false); // Downvote
await VotingSystem1.vote(1, false); // Downvote
// Retrieve and log the proposal information for the first proposal
const proposalInfo2 = await VotingSystem1.getProposal(1);
console.log("Proposal Description:", proposalInfo2.description);
console.log("Up Votes:", proposalInfo2.upVotes.toString());
console.log("Down Votes:", proposalInfo2.downVotes.toString());
console.log("Status:", proposalInfo2.status);

// Step 5: Finalize the voting
const finalizeVotingTx = await VotingSystem1.finalizeVoting(1);
await finalizeVotingTx.wait();

// Check final status (should be 'Accepted' since upVotes > downVotes)
const proposalInfo3 = await VotingSystem1.getProposal(1);
console.log("Final Status (Accepted or Rejected):", proposalInfo3.status.toString()); // Expected: 2 (Accepted)

// Retrieve and log the voting percentages for the first proposal
const { upVotePercentage, downVotePercentage } = await VotingSystem1.getVotingPercentage(1);
console.log("Upvote Percentage:", upVotePercentage.toString() + "%");
console.log("Downvote Percentage:", downVotePercentage.toString() + "%");

// Deploy Payable
const Payable = await ethers.getContractFactory("Payable");
const Payables = await Payable.deploy();
await Payables.waitForDeployment();
const Payablesadress = await Payables.getAddress();
console.log("Initial Balance:", await Payables.checkBalance());

const depot = await Payables.deposit({
    value: ethers.parseEther("20.0"), // Sending 1 Ether
});
await depot.wait();
// Fetch balance
const balanceInWei = await Payables.checkBalance();

// Format to Ether for readability
console.log("Balance after deposit:", ethers.formatEther(balanceInWei), "ETH");

//const withdraw = await Payables.withdrawAll();
// Fetch balance
//const balancewith = await Payables.checkBalance();

// Format to Ether for readability
//console.log("Balance after withdraw:", ethers.formatEther(balancewith), "ETH");
try {
    const withdraw = await Payables.withdraw(ethers.parseEther("10.0"));
    await withdraw.wait();

    // Fetch balance
    const balanceAfterWithdraw = await Payables.checkBalance();

    // Format to Ether for readability
    console.log("Balance after withdrawal:", ethers.formatEther(balanceAfterWithdraw), "ETH");
} catch (error) {
    // Check for revert reason in error.data or error.error.message
    if (error.data && error.data.message) {
        console.log(error.data.message); // Outputs: Insufficient balance in contract
    } else if (error.error && error.error.message) {
        console.log(error.error.message); // Outputs: Insufficient balance in contract
    } else if (error.reason) {
        console.log(error.reason); // Fallback for standard revert reasons
    } else {
        console.error("An unexpected error occurred:", error);
    }
}

// Get signers (accounts)
const [owner, recipient] = await ethers.getSigners();

 // Transfer 2 Ether to the recipient
 const transferTx = await Payables.transferOptimized(recipient.address, ethers.parseEther("2.0"));
 await transferTx.wait();
 console.log("Transferred 2 ETH to recipient:", recipient.address);

  // Check balances
  const contractBalance = await Payables.checkBalance();
  const recipientBalance = await ethers.provider.getBalance(recipient.address);

  console.log("Contract Balance:", ethers.formatEther(contractBalance), "ETH");
  console.log("Recipient Balance:", ethers.formatEther(recipientBalance), "ETH");

 // Deploy Bar contract
 const Bar = await ethers.getContractFactory("Bar");
 const bar = await Bar.deploy();
 await bar.waitForDeployment();
 const barAddress = await bar.getAddress();

 console.log("Bar contract deployed at:", barAddress);

 // Get the deployed Bar contract
 const fooAddress = await bar.foo();
 console.log("Foo contract deployed by Bar at:", fooAddress);

 console.log("Testing tryCatchNewContract with invalid address (0x0)...");
 const tx4 = await bar.tryCatchNewContract(ethers.ZeroAddress); // Invalid address
 const receipt4 = await tx4.wait();
 console.log("Events emitted:");
 receipt4.logs.forEach((log) => console.log(log));


}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
