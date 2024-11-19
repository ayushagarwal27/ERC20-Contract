const {ethers} = require('hardhat')

async function main(){
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const weiAmount = (await ethers.provider.getBalance(deployer)).toString();

    console.log("Account balance:",weiAmount);

    const Token = await  ethers.getContractFactory("FireToken");
    const token = await Token.deploy();
    const address = await token.getAddress()
    console.log("Token address:",(address));
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });