const Web3 = require('web3');
const express = require('express');
const app = express();
const port = 3000;

// Connect to a local Ethereum node or a remote node
const web3 = new Web3('https://mainnet.infura.io/v3/062ad22dfbea48caa283da9d10357945'); // Update the URL accordingly

// Set your contract address and ABI
const contractAddress = '0xfFd03de98961FC48baDcf17e52441e1AE883f15B';
const contractABI = [
    // Define your contract ABI here
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Staking DApp is running`);
});
