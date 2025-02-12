
import { createThirdwebClient, THIRDWEB_API_KEY } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import {
  metamaskWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
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
  metamaskWallet(),
  walletConnect(),
  localWallet(),
  embeddedWallet({
    auth: {
      options: ["email", "google", "apple"],
    },
  }),
];
