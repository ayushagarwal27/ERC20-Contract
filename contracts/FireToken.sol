// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract FireToken is ERC20 {
   uint constant _initial_supply = 100 * (10**18);

    constructor() ERC20("Fire", "FR") {
        _mint(msg.sender, _initial_supply);
    }
}
