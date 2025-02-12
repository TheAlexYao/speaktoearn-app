
import { createThirdwebClient } from "thirdweb";

// Create the client with minimal configuration
export const client = createThirdwebClient({
  clientId: process.env.THIRDWEB_CLIENT_ID as string,
});

