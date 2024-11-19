import dotenv from 'dotenv';
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

console.log( process.env.ALCHEMY_TESTNET_URL, )

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.ALCHEMY_TESTNET_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
};

export default config;
