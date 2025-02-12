
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThirdwebProvider } from "thirdweb/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ConnectWallet from "./pages/ConnectWallet";
import Tasks from "./pages/Tasks";
import TaskDetail from "./pages/TaskDetail";
import EvaluationResult from "./pages/EvaluationResult";
import Earn from "./pages/Earn";
import Profile from "./pages/Profile";
import Alerts from "./pages/Alerts";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import { client } from "@/lib/thirdweb";

const App = () => (
  <ThirdwebProvider client={client}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/task/:taskId" element={<TaskDetail />} />
          <Route path="/evaluation" element={<EvaluationResult />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </ThirdwebProvider>
);

export default App;
