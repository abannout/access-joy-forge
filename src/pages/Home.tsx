import BlobBackground from "@/components/BlobBackground";
import { Bell, Search, MessageCircle, Utensils, Users, Megaphone, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Home = () => {
  return (
    <div className="min-h-screen relative pb-safe">
      <BlobBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-sm border-b border-primary/10">
        <div className="flex items-center justify-between p-4 px-6">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-primary/30">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kim" />
              <AvatarFallback className="bg-primary text-primary-foreground">K</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold text-foreground">Hallo, Kim</p>
            </div>
          </div>
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
            <Bell className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pt-6 pb-8 space-y-6">
        {/* Upcoming Cards */}
        <div className="space-y-3">
          {/* Next Course Card */}
          <Card className="p-4 bg-gradient-to-br from-primary/80 to-primary/60 border-none text-white shadow-lg">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-1">Nächsten Kurs</h3>
                <p className="text-sm font-medium">Datenbanken 18:00 Uhr</p>
                <p className="text-xs opacity-90">Raum 3.103</p>
              </div>
            </div>
          </Card>

          {/* Next Exam Card */}
          <Card className="p-4 bg-gradient-to-br from-primary/70 to-primary/50 border-none text-white shadow-lg">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-1">Nächste Prüfung</h3>
                <p className="text-sm font-medium">IM Prüfung 2</p>
                <p className="text-xs opacity-90">34 12 Tagen</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Raumfinder */}
          <button className="p-6 bg-gradient-to-br from-primary/60 to-primary/50 rounded-2xl text-white shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            <div className="flex flex-col items-center gap-2">
              <Search className="h-8 w-8" />
              <span className="text-sm font-medium">Raumfinder</span>
            </div>
          </button>

          {/* Assistent */}
          <button className="p-6 bg-gradient-to-br from-primary/60 to-primary/50 rounded-2xl text-white shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            <div className="flex flex-col items-center gap-2">
              <MessageCircle className="h-8 w-8" />
              <span className="text-sm font-medium">Assistent</span>
            </div>
          </button>

          {/* Mensa/Essen */}
          <button 
            onClick={() => window.location.href = '/mensa'}
            className="p-6 bg-gradient-to-br from-primary/55 to-primary/45 rounded-2xl text-white shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <div className="flex flex-col items-center gap-2">
              <Utensils className="h-8 w-8" />
              <span className="text-sm font-medium">Mensa/Essen</span>
            </div>
          </button>

          {/* Community */}
          <button className="p-6 bg-gradient-to-br from-primary/55 to-primary/45 rounded-2xl text-white shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            <div className="flex flex-col items-center gap-2">
              <Users className="h-8 w-8" />
              <span className="text-sm font-medium">Community</span>
            </div>
          </button>

          {/* Feedback */}
          <button className="p-6 bg-gradient-to-br from-primary/50 to-primary/40 rounded-2xl text-white shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            <div className="flex flex-col items-center gap-2">
              <Megaphone className="h-8 w-8" />
              <span className="text-sm font-medium">Feedback</span>
            </div>
          </button>

          {/* Einstellungen */}
          <button className="p-6 bg-gradient-to-br from-primary/50 to-primary/40 rounded-2xl text-white shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            <div className="flex flex-col items-center gap-2">
              <Settings className="h-8 w-8" />
              <span className="text-sm font-medium">Einstellungen</span>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
