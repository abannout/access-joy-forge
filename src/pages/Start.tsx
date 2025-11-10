import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import studentsIllustration from "@/assets/students-illustration.png";

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-gradient-to-br from-[#FFB5B5] via-[#FFB5D5] to-[#FFB5E5]">
      {/* White blob shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="animate-in fade-in duration-700 flex flex-col items-center gap-8 z-10">
        <img 
          src={studentsIllustration} 
          alt="TH Connect Students" 
          className="w-48 h-48 object-contain"
        />
        <h1 className="text-4xl font-bold text-[#FF6B35]">TH Connect</h1>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-[#D5006D]"></div>
        <div className="w-2 h-2 rounded-full bg-white/40"></div>
        <div className="w-2 h-2 rounded-full bg-white/40"></div>
      </div>
    </div>
  );
};

export default Start;
