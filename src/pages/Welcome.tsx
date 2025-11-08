import { useNavigate } from "react-router-dom";
import BlobBackground from "@/components/BlobBackground";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 py-16 relative">
      <BlobBackground />
      
      <div className="flex-1 flex items-center">
        <Logo size="lg" />
      </div>

      <div className="w-full max-w-sm space-y-6 animate-in slide-in-from-bottom duration-500">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">
            Willkommen bei TH Connect
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Deine zentrale Plattform für alles rund um dein Studium an der Technischen Hochschule. Vernetze dich mit Kommilitonen und erhalte wichtige Informationen.
          </p>
        </div>

        <Button 
          onClick={() => navigate("/account-type")}
          className="w-full h-12 text-base font-medium"
          size="lg"
        >
          Let's connect!
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
