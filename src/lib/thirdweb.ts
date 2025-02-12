
import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb";
import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";

// Define Celo Alfajores testnet
export const celoAlfajores = defineChain(44787);

// Create the client with minimal configuration and Celo chain
export const client = createThirdwebClient({
  clientId: process.env.THIRDWEB_CLIENT_ID as string,
});

// Configure available wallets
export const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];
