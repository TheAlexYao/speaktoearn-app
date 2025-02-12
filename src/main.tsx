
import { createRoot } from 'react-dom/client';
import { ThirdwebProvider } from "thirdweb/react";
import App from './App.tsx';
import './index.css';
import { supportedWallets, chainConfig } from './lib/thirdweb';

createRoot(document.getElementById("root")!).render(
  <ThirdwebProvider 
    activeChain={chainConfig}
  >
    <App />
  </ThirdwebProvider>
);
