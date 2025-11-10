import { useNavigate } from "react-router-dom";

const AccountType = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-gradient-to-br from-[#FFB5B5] via-[#FFB5D5] to-[#FFB5E5]">
      {/* White blob shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="w-full max-w-md space-y-8 animate-in slide-in-from-bottom duration-500 z-10">
        <h2 className="text-3xl font-bold text-center text-[#FF6B35]">
          Ich bin...
        </h2>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/login/student")}
            className="w-full bg-white rounded-[2rem] shadow-xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col items-center gap-3 group"
          >
            <span className="text-xl font-semibold text-[#D5006D]">
              Studierende/r
            </span>
          </button>

          <button
            onClick={() => navigate("/login/instructor")}
            className="w-full bg-white rounded-[2rem] shadow-xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col items-center gap-3 group"
          >
            <span className="text-xl font-semibold text-[#D5006D]">
              Dozent:in
            </span>
          </button>
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

export default AccountType;
