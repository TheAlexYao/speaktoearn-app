
import { createThirdwebClient } from "thirdweb";
import { createWallet } from "thirdweb/wallets";
import { Chain } from "thirdweb/chains";

// Define Celo Alfajores chain
export const celoAlfajores: Chain = {
  id: 44787,
  name: "Celo Alfajores",
  chain: "CELO",
  shortName: "CELO",
  nativeCurrency: {
    name: "CELO",
    symbol: "CELO",
    decimals: 18,
  },
  rpc: "https://alfajores-forno.celo-testnet.org",
  testnet: true,
  blockExplorers: [
    {
      name: "CeloScan",
      url: "https://alfajores.celoscan.io"
    }
  ],
};

// Create the client
export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID || "your-client-id",
});

// Define supported wallets with correct wallet IDs
export const supportedWallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("walletconnect"),
];

// Export chain configuration
export const chainConfig = celoAlfajores;
