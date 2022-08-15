const hre = require("hardhat");

async function main() {
  const PourNFT = await hre.ethers.getContractFactory("PourNFT");
  const pourNFT = await PourNFT.deploy();

  await pourNFT.deployed();

  console.log("PourNFT deployed to:", pourNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) =>  {
    console.error(error);
    process.exit(1);
});
