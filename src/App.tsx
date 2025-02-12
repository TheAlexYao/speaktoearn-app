
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ConnectWallet from "./pages/ConnectWallet";
import Tasks from "./pages/Tasks";
import TaskDetail from "./pages/TaskDetail";
import EvaluationResult from "./pages/EvaluationResult";
import Earn from "./pages/Earn";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/task/:taskId" element={<TaskDetail />} />
          <Route path="/evaluation" element={<EvaluationResult />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
