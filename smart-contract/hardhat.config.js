require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    rinkeby: {
      url: "https://eth-goerli.g.alchemy.com/v2/lNonRBP1J7z0BvbOecleQkALL56kIACc",
      accounts: [
        "4a6d1219d6453299573c80911622ded0374b7caa76a5f6f6155d6e50a94d8356",
      ],
    },
  },
};
