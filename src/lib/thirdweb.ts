
import { createThirdwebClient } from "thirdweb";

// Create the client with minimal configuration
export const client = createThirdwebClient({
  chainId: 1, // Ethereum mainnet
  clientId: "your-client-id", // Remove env var dependency for now
});
