import { expect } from "chai";
import { ethers } from "hardhat";
import NaughtCoinArtifact from "../artifacts/contracts/NaughtCoin.sol/NaughtCoin.json";
import { deployContract } from "ethereum-waffle";
// const { deployContract } = waffle;

describe("NaughtCoin", function () {
  it("Token balance should be 0", async function () {
    const [owner] = await ethers.getSigners();

    const naughtCoin = await deployContract(owner, NaughtCoinArtifact, [
      owner.address,
    ]);

    // const NaughtCoin = await ethers.getContractFactory("NaughtCoin");
    // const naughtCoin = await NaughtCoin.deploy(owner.address);

    // await naughtCoin.deployed();

    const CrackNaughtCoin = await ethers.getContractFactory("CrackNaughtCoin");
    const crackNaughtCoin = await CrackNaughtCoin.deploy(naughtCoin.address);

    await crackNaughtCoin.deployed();
    const amount = await naughtCoin.balanceOf(owner.address);

    await naughtCoin.approve(crackNaughtCoin.address, amount);

    console.log("balance", await naughtCoin.balanceOf(owner.address));

    console.log(
      "allowance",
      await naughtCoin.allowance(owner.address, crackNaughtCoin.address)
    );

    await crackNaughtCoin.crack();

    expect(await naughtCoin.balanceOf(owner.address)).to.equal(0);
  });
});
