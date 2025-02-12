
import { createRoot } from 'react-dom/client';
import { ThirdwebProvider } from "thirdweb/react";
import App from './App.tsx';
import './index.css';
import { supportedWallets, client } from './lib/thirdweb';

createRoot(document.getElementById("root")!).render(
  <ThirdwebProvider 
    clientId={import.meta.env.VITE_THIRDWEB_CLIENT_ID || "your-client-id"}
    supportedWallets={supportedWallets}
  >
    <App />
  </ThirdwebProvider>
);
