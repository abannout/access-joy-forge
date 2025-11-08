import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Welcome from "./pages/Welcome";
import AccountType from "./pages/AccountType";
import LoginStudent from "./pages/LoginStudent";
import LoginInstructor from "./pages/LoginInstructor";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/account-type" element={<AccountType />} />
          <Route path="/login/student" element={<LoginStudent />} />
          <Route path="/login/instructor" element={<LoginInstructor />} />
          <Route path="/home" element={<Home />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
