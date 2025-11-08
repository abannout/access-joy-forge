import studentsIllustration from "@/assets/students-illustration.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const Logo = ({ size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-32 h-32",
    lg: "w-40 h-40"
  };

  const textSizeClasses = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-4xl"
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-full" />
        <img 
          src={studentsIllustration} 
          alt="TH Connect" 
          className="relative w-full h-full object-contain p-2"
        />
      </div>
      <h1 className={`${textSizeClasses[size]} font-bold text-primary tracking-tight`}>
        TH Connect
      </h1>
    </div>
  );
};

export default Logo;
