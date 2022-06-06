import { ethers } from "ethers";
import "dotenv/config";
import * as rmcJson from "../artifacts/contracts/RealMonkeyCollection.sol/RealMonkeyCollection.json";

async function main() {
  const signer = await connectToBlockchain();

  const rmcFactory = new ethers.ContractFactory(
    rmcJson.abi,
    rmcJson.bytecode,
    signer
  );
  console.log("Deploying contract...");

  const contract = await rmcFactory.deploy();

  console.log("waiting...");

  await contract.deployed();

  console.log("RealMonkeyCollection ERC721 deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// ###############################

async function connectToBlockchain() {
  const wallet = new ethers.Wallet(
    process.env.PRIVATE_KEY as ethers.utils.BytesLike
  );

  console.log(`Using address ${wallet.address}`);

  const provider = ethers.providers.getDefaultProvider("rinkeby", {
    etherscan: process.env.ETHERSCAN_API_KEY,
  });

  const signer = await wallet.connect(provider);
  const balanceBN = await signer.getBalance();
  const balance = Number(ethers.utils.formatEther(balanceBN));

  console.log(`Wallet balance: ${balance}`);

  if (balance < 0.01) {
    throw new Error("Not enough ether");
  }

  return signer;
}
