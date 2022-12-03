require('@nomiclabs/hardhat-waffle');
require('hardhat-abi-exporter');

// Replace this private key with your Mumbai wallet private key
const MUMBAI_PRIVATE_KEY = '1da8cd43728e610cd6f35f1eeb962288de12485c82218c7e517e4212e9cb4368';

// Replace this with your Datahub api key
const DATAHUB_API_KEY = 'https://polygon-mumbai.infura.io/v3/feab18df1beb4b638a02af1017b87417';

module.exports = {
  solidity: '0.8.17',
  abiExporter: {
    path: './abi/',
    clear: true,
  },
  networks: {
    mumbai: {
      url: `${DATAHUB_API_KEY}`,
      accounts: [`0x${MUMBAI_PRIVATE_KEY}`],
    },
  },
};