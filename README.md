# Voting System Smart Contract

  [![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blue&?style=plastic&logo=appveyor)](https://opensource.org/license/MIT)


## Table Of Content

- [Description](#description)
- [Features](#features)
- [Requirements](#requirements)
- [Setup and Installation](#setup-and-installation)
- [Contract Details](#contract-details)
- [Usage](#usage)
- [Testing](#testing)
- [Security](#security)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)


## Description

This repository contains the Ethereum smart contract code for a simple voting system. It allows users to vote on a set of predefined options, using the Ethereum blockchain to ensure transparency and immutability of the votes.



## Features

- **Decentralized Voting**: Users can vote on options stored directly on the Ethereum blockchain.
- **Transparent Results**: All votes are visible and verifiable by anyone on the blockchain.
- **Prevention of Double Voting**: The contract ensures that no address can vote more than once.


## Requirements

To deploy and interact with this smart contract, you will need the following:
- [Node.js](https://nodejs.org/) (recommended version 14 or higher)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)
- [Ethers.js](https://docs.ethers.io/v5/)

## Setup and Installation

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/blockchaincyberpunk1/voting-system-dapp.git
   ```
2. **Install dependencies**:
    ```
    npm install
    ```
3. **Create a .env file**:
Populate the .env file with your Infura API key and your wallet's private key:
    ```
    INFURA_API_KEY=your_infura_api_key
    PRIVATE_KEY=your_private_key
    REPORT_GAS=true
    GAS_REPORT_FILE=./gas-report.txt
    COINMARKETCAP_API_KEY=your_coinmarketcap_api_key_here
    ```
4. **Compile the Contract**:
    ```
    npx hardhat compile
    ```
5. **Deploy the Contract**:
To deploy the contract to the Ethereum test network (e.g., Rinkeby or Sepolia), first set up your .env file with the necessary API keys and wallet private key.
    ```
    npx hardhat run scripts/deploy.js --network sepolia
    ```
Replace sepolia with your preferred network.


## Contract Details

Contract Address: 0x49d9A91Cf0B6af5349b7288Fa90187DcDd945819
ABI: Located in artifacts/contracts/Voting.sol/Voting.json


## Usage

After deploying your contract, you can interact with it through Ethers.js scripts or integrate it into a frontend application.

## Testing
 
To run the test cases:

```
npx hardhat test
```

## Security

This contract has not been audited. Use at your own risk or consider conducting a security audit before a production release.

## Contribution
 
Contributions are welcome. Please fork the repository, create a new branch for your contributions, and submit a pull request.


## Contact

Feel free to reach out to me on my email:
thepolyglot8@gmail.com


## License

[![License](https://img.shields.io/static/v1?label=Licence&message=MIT&color=blue)](https://opensource.org/license/MIT)


