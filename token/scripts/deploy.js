const hre = require("hardhat");

async function main() {
  const Nft = await hre.ethers.getContractFactory("NFT");
  const nft = await Nft.deploy();
  await nft.deployed();
  console.log("Nft deployed to:", nft.address);

  const existingnft = await hre.ethers.getContractAt("NFT", nft.address);
  await existingnft.Mint(nft.address);
  console.log("Minting is complete to: "+nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
