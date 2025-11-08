import { useNavigate } from "react-router-dom";
import BlobBackground from "@/components/BlobBackground";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import studentsIllustration from "@/assets/students-illustration.png";
import instructorIllustration from "@/assets/instructor-illustration.png";

const AccountType = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 py-16 relative">
      <BlobBackground />
      
      <Logo size="md" />

      <div className="w-full max-w-sm space-y-6 animate-in slide-in-from-bottom duration-500">
        <h2 className="text-2xl font-semibold text-center text-foreground">
          Ich bin...
        </h2>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/login/student")}
            className="w-full p-6 bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center gap-3 group"
          >
            <img 
              src={studentsIllustration} 
              alt="Studierende" 
              className="w-24 h-24 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-lg font-medium text-primary">
              Studierende:r
            </span>
          </button>

          <button
            onClick={() => navigate("/login/instructor")}
            className="w-full p-6 bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center gap-3 group"
          >
            <img 
              src={instructorIllustration} 
              alt="Dozent" 
              className="w-24 h-24 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-lg font-medium text-primary">
              Dozent:in
            </span>
          </button>
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
};

export default AccountType;
