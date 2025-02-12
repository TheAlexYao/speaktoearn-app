
import { createThirdwebClient } from "thirdweb";
import { createWallet } from "thirdweb/wallets";

// Create the client
export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID || "your-client-id",
});

// Define supported wallets with correct wallet IDs
export const supportedWallets = [
  createWallet("metamask"),
  createWallet("coinbase"),
  createWallet("walletConnect"),
];
