
import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import {
  createWallet,
  injectedWallet,
  smartWallet,
} from "thirdweb/wallets";

// Define Celo Alfajores testnet
export const celoAlfajores = defineChain({
  id: 44787,
});

// Create the client with minimal configuration and Celo chain
export const client = createThirdwebClient({
  clientId: "6ecdb315f1c7e82268b27830744bc374",
});

// Configure available wallets
export const wallets = [
  injectedWallet(),
  createWallet("com.walletconnect.modal"),
  smartWallet(),
];
