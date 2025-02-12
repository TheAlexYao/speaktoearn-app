
import { createThirdwebClient } from "thirdweb";
import { createWallet } from "thirdweb/wallets";
import { celo } from "thirdweb/chains";

// Create the client
export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID || "your-client-id",
});

// Define supported wallets
export const supportedWallets = [
  createWallet("metamask"),
  createWallet("coinbase"),
  createWallet("walletConnect"),
];

// Export chain configuration
export const chainConfig = celo;
