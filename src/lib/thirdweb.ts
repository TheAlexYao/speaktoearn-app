
import { createThirdwebClient, defaultClientConfig } from "thirdweb";

// Create the client with minimal configuration
export const client = createThirdwebClient({
  ...defaultClientConfig,
  chainId: 1, // Ethereum mainnet
  clientId: "your-client-id", // Remove env var dependency for now
});
