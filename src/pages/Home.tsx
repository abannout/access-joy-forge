import { Bell, Search, MessageCircle, Utensils, Users, Megaphone, Settings, Bookmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Home = () => {
  return (
    <div className="min-h-screen relative pb-safe bg-gradient-to-br from-[#FFB5B5] via-[#FFB5D5] to-[#FFB5E5]">
      
      {/* Header */}
      <header className="pt-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <Avatar className="h-14 w-14 border-2 border-white/30">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kim" />
              <AvatarFallback className="bg-primary text-primary-foreground">K</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-lg font-semibold text-white mb-1">Hallo, Kim.</p>
              <div className="flex items-center gap-2">
                <Bookmark className="h-4 w-4 text-white" />
                <div className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden max-w-[120px]">
                  <div className="h-full w-3/4 bg-gradient-to-r from-[#D5006D] to-[#FF4081] rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Bell className="h-6 w-6 text-white" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pt-6 pb-8 space-y-4">
        {/* Upcoming Cards */}
        <div className="space-y-3">
          {/* Next Course Card */}
          <Card className="p-5 bg-white/80 backdrop-blur-md border-none shadow-lg rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-md">
                <svg className="h-6 w-6 text-[#FF6B6B]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#D5006D] mb-1">Nächster Kurs</h3>
                <p className="text-[#FF6B35] font-medium text-sm">Datenbanken 10:00 Uhr</p>
                <p className="text-[#FF6B35] text-sm">Raum 1.101</p>
              </div>
            </div>
          </Card>

          {/* Next Exam Card */}
          <Card className="p-5 bg-white/80 backdrop-blur-md border-none shadow-lg rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-md">
                <svg className="h-6 w-6 text-[#FF6B6B]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#D5006D] mb-1">Nächste Prüfung</h3>
                <p className="text-[#FF6B35] font-medium text-sm">Softwaretechnik 2</p>
                <p className="text-[#FF6B35] text-sm">in 12 Tagen</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Raumfinder */}
          <button className="p-6 bg-white/70 backdrop-blur-md rounded-3xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            <div className="flex flex-col items-center gap-2">
              <Search className="h-10 w-10 text-white" />
              <span className="text-sm font-semibold text-[#FF6B35]">Raumfinder</span>
            </div>
          </button>

          {/* Assistent */}
          <button className="p-6 bg-white/70 backdrop-blur-md rounded-3xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            <div className="flex flex-col items-center gap-2">
              <MessageCircle className="h-10 w-10 text-white" />
              <span className="text-sm font-semibold text-[#FF6B35]">Assistent</span>
            </div>
          </button>

          {/* Mensa-Service */}
          <button 
            onClick={() => window.location.href = '/mensa'}
            className="p-6 bg-white/70 backdrop-blur-md rounded-3xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <div className="flex flex-col items-center gap-2">
              <Utensils className="h-10 w-10 text-white" />
              <span className="text-sm font-semibold text-[#FF6B35]">Mensa-Service</span>
            </div>
          </button>

          {/* Community */}
          <button className="p-6 bg-white/70 backdrop-blur-md rounded-3xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            <div className="flex flex-col items-center gap-2">
              <Users className="h-10 w-10 text-white" />
              <span className="text-sm font-semibold text-[#FF6B35]">Community</span>
            </div>
          </button>

          {/* Feedback */}
          <button className="p-6 bg-white/70 backdrop-blur-md rounded-3xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            <div className="flex flex-col items-center gap-2">
              <Megaphone className="h-10 w-10 text-white" />
              <span className="text-sm font-semibold text-[#FF6B35]">Feedback</span>
            </div>
          </button>

          {/* Einstellungen */}
          <button className="p-6 bg-white/70 backdrop-blur-md rounded-3xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            <div className="flex flex-col items-center gap-2">
              <Settings className="h-10 w-10 text-white" />
              <span className="text-sm font-semibold text-[#FF6B35]">Einstellungen</span>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
