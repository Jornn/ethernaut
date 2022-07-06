import { expect } from "chai";
import { ethers } from "hardhat";
// import { GatekeeperTwo } from "../typechain/GateKeeperTwo";

describe.only("GateKeeperSolution", function () {
  it("Should pass all three gates and return true", async function () {
    const GateKeeperTwo = await ethers.getContractFactory("GatekeeperTwo");
    const gateKeeperTwo = await GateKeeperTwo.deploy();
    await gateKeeperTwo.deployed();

    const GateKeeperSolution = await ethers.getContractFactory(
      "GateKeeperSolution"
    );

    const gateKeeperSolution = await GateKeeperSolution.deploy(
      gateKeeperTwo.address
    );
    await gateKeeperSolution.deployed();
  });
});
