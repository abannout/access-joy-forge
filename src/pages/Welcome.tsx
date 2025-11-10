import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import studentsIllustration from "@/assets/students-illustration.png";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-gradient-to-br from-[#FFB5B5] via-[#FFB5D5] to-[#FFB5E5]">
      {/* White blob shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="w-full max-w-md space-y-8 animate-in slide-in-from-bottom duration-500 z-10">
        {/* Logo/Illustration at top */}
        <div className="flex justify-center">
          <img 
            src={studentsIllustration} 
            alt="TH Connect Students" 
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* White card with content */}
        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-[#FF6B35]">
              Willkommen bei TH Connect
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Deine zentrale Plattform für alles rund um dein Studium an der Technischen Hochschule. Vernetze dich mit Kommilitonen und erhalte wichtige Informationen.
            </p>
          </div>

          <Button 
            onClick={() => navigate("/account-type")}
            className="w-full h-12 text-base font-semibold bg-[#D5006D] hover:bg-[#B00058] text-white rounded-2xl"
            size="lg"
          >
            Let's connect!
          </Button>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-white/40"></div>
        <div className="w-2 h-2 rounded-full bg-[#D5006D]"></div>
        <div className="w-2 h-2 rounded-full bg-white/40"></div>
      </div>
    </div>
  );
};

export default Welcome;
