
import { createRoot } from 'react-dom/client';
import { ThirdwebProvider, metamaskWallet } from "thirdweb/react";
import App from './App.tsx';
import './index.css';
import { client } from './lib/thirdweb';

createRoot(document.getElementById("root")!).render(
  <ThirdwebProvider 
    config={{
      client,
      wallets: [metamaskWallet()]
    }}
  >
    <App />
  </ThirdwebProvider>
);
