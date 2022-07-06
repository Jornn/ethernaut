import { expect } from "chai";
import { ethers } from "hardhat";
import { GatekeeperTwo } from "../typechain";

describe.only("GateKeeperSolution", function () {
  it("Should return the new greeting once it's changed", async function () {
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

    expect(await gateKeeperSolution.callEnter("0xFFFFFFFFFFFFFFFF")).to.equal(
      true
    );
  });
});
