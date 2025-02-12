
import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb";

// Define Celo Alfajores testnet
export const celoAlfajores = defineChain({
  id: 44787,
  name: "Celo Alfajores",
  rpc: ["https://44787.rpc.thirdweb.com"],
  nativeCurrency: {
    name: "Celo",
    symbol: "CELO",
    decimals: 18,
  },
  blockExplorers: {
    default: {
      name: "CeloScan",
      url: "https://alfajores.celoscan.io",
    },
  },
  testnet: true,
});

// Create the client with minimal configuration and Celo chain
export const client = createThirdwebClient({
  clientId: process.env.THIRDWEB_CLIENT_ID as string,
  chain: celoAlfajores,
});
