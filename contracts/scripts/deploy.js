const hre = require("hardhat");

async function main() {
  console.log("Deploying OrderTracking contract...");

  // Contract parameters
  const platformFeeBps = 100; // 1% platform fee
  const minOrderValue = hre.ethers.parseEther("0.001"); // 0.001 ETH minimum

  // Get the contract factory
  const OrderTracking = await hre.ethers.getContractFactory("OrderTracking");

  // Deploy the contract
  const orderTracking = await OrderTracking.deploy(
    platformFeeBps,
    minOrderValue
  );

  await orderTracking.waitForDeployment();

  const address = await orderTracking.getAddress();
  console.log("OrderTracking deployed to:", address);
  console.log(
    "Platform Fee:",
    platformFeeBps,
    "bps (",
    platformFeeBps / 100,
    "%)"
  );
  console.log(
    "Minimum Order Value:",
    hre.ethers.formatEther(minOrderValue),
    "ETH"
  );

  // Verify contract on Etherscan (if on a testnet/mainnet)
  if (process.env.ETHERSCAN_API_KEY && hre.network.name !== "hardhat") {
    console.log("Waiting for block confirmations...");
    await orderTracking.deploymentTransaction().wait(6);

    console.log("Verifying contract on Etherscan...");
    try {
      await hre.run("verify:verify", {
        address: address,
        constructorArguments: [platformFeeBps, minOrderValue],
      });
      console.log("Contract verified successfully!");
    } catch (error) {
      console.log("Verification failed:", error.message);
    }
  }

  console.log("\n=== Deployment Summary ===");
  console.log("Contract Address:", address);
  console.log("Network:", hre.network.name);
  console.log("Platform Fee:", platformFeeBps, "basis points");
  console.log("Min Order Value:", hre.ethers.formatEther(minOrderValue), "ETH");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
