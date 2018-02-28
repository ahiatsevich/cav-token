var HDWalletProvider = require("truffle-hdwallet-provider");
function getWallet(){
    return require('fs').readFileSync("./secrets.json", "utf8").trim();
}

module.exports = {
    networks: {
        main: {
            network_id: 1,
            provider: new HDWalletProvider(getWallet(), "password", 'https://mainnet.infura.io/'),
            gas: 4700000,
            gasPrice: 1000000000
        },
        rinkeby:{
            network_id:4,
            provider: new HDWalletProvider(getWallet(), "password", 'https://rinkeby.infura.io/'),
            gas: 4700000,
            gasPrice: 100000000000
        },
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        }
    },
    solc: {
      optimizer: {
       enabled: true,
       runs: 200
     }
   }
};
