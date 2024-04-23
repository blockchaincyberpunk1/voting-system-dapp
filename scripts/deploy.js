// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
    // Define actual voting options
    const optionNames = [
        "Ethereum Improvement",
        "Layer-2 Scaling",
        "Protocol Upgrade"
    ];

    // Get the ContractFactory and signers
    const Voting = await ethers.getContractFactory("Voting");
    const [deployer] = await ethers.getSigners();

    // Deploy the contract with specific options
    const voting = await Voting.deploy(optionNames);

    // Wait for the contract to be deployed
    await voting.deployed();

    console.log("Voting contract deployed to:", voting.address);
    console.log("Deployed by:", deployer.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
