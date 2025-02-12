
import { createThirdwebClient } from "thirdweb";

// Create the client with minimal configuration
export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
});
