import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlobBackground from "@/components/BlobBackground";
import Logo from "@/components/Logo";

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative">
      <BlobBackground />
      <div className="animate-in fade-in duration-700">
        <Logo size="lg" />
      </div>
    </div>
  );
};

export default Start;
