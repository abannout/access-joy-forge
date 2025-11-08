import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlobBackground from "@/components/BlobBackground";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const LoginStudent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Bitte fülle alle Felder aus");
      return;
    }

    // Demo login
    toast.success("Anmeldung erfolgreich!");
    // In production, navigate to dashboard
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 py-16 relative">
      <BlobBackground />
      
      <Logo size="md" />

      <div className="w-full max-w-sm space-y-6 animate-in slide-in-from-bottom duration-500">
        <h2 className="text-xl font-semibold text-center text-primary">
          Anmeldung für Studierende
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm text-foreground">
              E-Mail
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="z.B. Max.Mustermann@th-koeln.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-white/60 backdrop-blur-sm border-primary/30 focus:border-primary rounded-2xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm text-foreground">
              Passwort
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Dein Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 bg-white/60 backdrop-blur-sm border-primary/30 focus:border-primary rounded-2xl"
            />
          </div>

          <Button 
            type="submit"
            className="w-full h-12 text-base font-medium"
            size="lg"
          >
            Anmelden
          </Button>
        </form>

        <button
          onClick={() => navigate("/account-type")}
          className="w-full text-center text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Zurück zur Auswahl
        </button>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default LoginStudent;
