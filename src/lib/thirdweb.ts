
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
  clientId: "6ecdb315f1c7e82268b27830744bc374",
  secretKey: "",  // We don't need a secret key for client-side operations
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
