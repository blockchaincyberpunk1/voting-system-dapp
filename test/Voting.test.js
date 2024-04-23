const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Voting Contract", function () {
  let Voting;
  let voting;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    Voting = await ethers.getContractFactory("Voting");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    const optionNames = ["Option 1", "Option 2", "Option 3"];
    voting = await Voting.deploy(optionNames);
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await voting.owner()).to.equal(owner.address);
    });

    it("Should assign all options with initial zero votes", async function () {
      const option = await voting.getOption(0);
      expect(option.name).to.equal("Option 1");
      expect(option.voteCount.toString()).to.equal("0"); // Correctly handle BigNumber for comparison
    });
  });

  describe("Voting process", function () {
    it("Should allow a voter to vote", async function () {
      await voting.connect(addr1).vote(1);
      let option = await voting.getOption(1);
      expect(option.voteCount).to.equal(1);
    });

    it("Should prevent a voter from voting more than once", async function () {
      await voting.connect(addr1).vote(1);
      await expect(voting.connect(addr1).vote(1)).to.be.revertedWith(
        "You have already voted."
      );
    });

    it("Should fail for an invalid option index", async function () {
      await expect(voting.connect(addr1).vote(5)).to.be.revertedWith(
        "Invalid option index."
      );
    });

    it("Should emit a VoteCasted event when a vote is cast", async function () {
      await expect(voting.connect(addr1).vote(0))
        .to.emit(voting, "VoteCasted")
        .withArgs(addr1.address, 0);
    });
  });

  describe("Accessing votes", function () {
    it("Should return the correct counts of votes", async function () {
      await voting.connect(addr1).vote(0);
      await voting.connect(addr2).vote(0);
      let option = await voting.getOption(0);
      expect(option.voteCount).to.equal(2);
    });

    it("Should revert when accessing a non-existent option index", async function () {
      await expect(voting.getOption(10)).to.be.revertedWith(
        "Invalid option index."
      );
    });
  });

  describe("Edge Cases", function () {
    it("Should handle boundary option index correctly", async function () {
      // Voting on the first index
      await voting.connect(addr1).vote(0);
      let option = await voting.getOption(0);
      expect(option.voteCount).to.equal(1);

      // Voting on the last index (index 2 in this case)
      await voting.connect(addr2).vote(2);
      option = await voting.getOption(2);
      expect(option.voteCount).to.equal(1);
    });
  });
});
