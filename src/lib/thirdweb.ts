
import { createThirdwebClient } from "thirdweb";
import { createWallet } from "thirdweb/wallets";
import { celoAlfajores } from "@thirdweb-dev/chains";

// Create the client
export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID || "your-client-id",
});

// Define supported wallets with correct wallet IDs
export const supportedWallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("wallet-connect"),
];

// Export chain configuration
export const chainConfig = celoAlfajores;
