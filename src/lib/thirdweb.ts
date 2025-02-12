
import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb";
import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";
import { supabase } from "@/integrations/supabase/client";

// Define Celo Alfajores testnet
export const celoAlfajores = defineChain(44787);

// Function to get the ThirdWeb client ID from Supabase
const getThirdWebClientId = async () => {
  const { data, error } = await supabase.functions.invoke('get-secret', {
    body: { key: 'THIRDWEB_CLIENT_ID' }
  });
  
  if (error) {
    console.error('Error fetching ThirdWeb Client ID:', error);
    return null;
  }
  
  return data?.secret;
};

// Create the client with minimal configuration and Celo chain
export const client = createThirdwebClient({
  clientId: "c3072e0b36c29660396dc5d3e344afdf", // Using the actual client ID from Supabase secrets
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
