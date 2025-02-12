
import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { createWallet } from "thirdweb/wallets";

// Define Celo Alfajores testnet
export const celoAlfajores = defineChain({
  id: 44787,
  rpc: ["https://alfajores-forno.celo-testnet.org"],
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "CELO",
  },
  shortName: "alfajores",
  slug: "celo-alfajores",
  testnet: true,
  chain: "Celo",
  name: "Celo Alfajores Testnet",
  chainId: 44787,
});

// Create the client with minimal configuration and Celo chain
export const client = createThirdwebClient({
  clientId: "6ecdb315f1c7e82268b27830744bc374",
});

// Configure available wallets
export const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];
