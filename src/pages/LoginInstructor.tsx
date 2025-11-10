import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import instructorIllustration from "@/assets/instructor-illustration.png";

const LoginInstructor = () => {
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
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-gradient-to-br from-[#FFB5B5] via-[#FFB5D5] to-[#FFB5E5]">
      {/* White blob shapes - larger and more visible */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-white rounded-full translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="w-full max-w-md space-y-4 animate-in slide-in-from-bottom duration-500 z-10">
        {/* Logo/Illustration with TH Connect text */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="bg-white rounded-3xl p-4 shadow-md">
            <img 
              src={instructorIllustration} 
              alt="TH Connect Instructor" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#FF6B35]">TH Connect</h1>
        </div>

        {/* White card with form */}
        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 space-y-6">
          <h2 className="text-xl font-bold text-center text-[#FF6B35]">
            Anmeldung für Dozent
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-gray-700 font-medium">
                E-Mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="z.B. peter.professor@th-koeln.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-gray-50 border-gray-200 focus:border-[#D5006D] focus:ring-[#D5006D] rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm text-gray-700 font-medium">
                Passwort
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Dein Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-gray-50 border-gray-200 focus:border-[#D5006D] focus:ring-[#D5006D] rounded-xl"
              />
            </div>

            <Button 
              type="submit"
              className="w-full h-12 text-base font-semibold bg-[#D5006D] hover:bg-[#B00058] text-white rounded-2xl mt-6"
              size="lg"
            >
              Anmelden
            </Button>
          </form>

          <div className="text-center text-sm text-gray-600">
            Noch kein Konto?{" "}
            <button
              onClick={() => navigate("/account-type")}
              className="text-[#D5006D] font-semibold underline hover:text-[#B00058]"
            >
              Jetzt Anmelden
            </button>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-white/40"></div>
        <div className="w-2 h-2 rounded-full bg-white/40"></div>
        <div className="w-2 h-2 rounded-full bg-[#D5006D]"></div>
      </div>
    </div>
  );
};

export default LoginInstructor;
