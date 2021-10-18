async function main() {
  const Staking = await ethers.getContractFactory("StakingRewards");

  // Start deployment, returning a promise that resolves to a contract object
  const staking = await Staking.deploy(
    "0xab26FCab599362aBbdF94fcA8541b2D8b247D207",
    "0xCaf39E8cB0085a3410b1a02592d74E506865D939"
  );
  console.log("Staking Contract deployed to address:", staking.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
