import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlobBackground from "@/components/BlobBackground";
import { ArrowLeft, ChevronLeft, ChevronRight, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const locations = [
  "Mensa Deutz/Süd",
  "Mensa Gummersbach",
  "Mensa Südstadt"
];

const mensaMenus = {
  "Mensa Deutz/Süd": [
    { name: "Schmorgurken", category: "Vegetarisch", price: "3.50€" },
    { name: "Rindergulasch mit Reis", category: "Fleisch", price: "4.20€" },
    { name: "Gefüllter Spay mit Käse", category: "Vegetarisch", price: "3.80€" },
    { name: "Paprika Hack", category: "Fleisch", price: "4.00€" },
    { name: "Königsberger Klopse mit Nudeln", category: "Klassiker", price: "4.50€" }
  ],
  "Mensa Gummersbach": [
    { name: "Käsespätzle", category: "Vegetarisch", price: "3.60€" },
    { name: "Hähnchenbrust mit Reis", category: "Fleisch", price: "4.30€" },
    { name: "Gemüsecurry", category: "Vegan", price: "3.90€" },
    { name: "Schnitzel mit Pommes", category: "Klassiker", price: "4.80€" }
  ],
  "Mensa Südstadt": [
    { name: "Pasta Carbonara", category: "Klassiker", price: "3.70€" },
    { name: "Linseneintopf", category: "Vegan", price: "3.40€" },
    { name: "Putenschnitzel", category: "Fleisch", price: "4.40€" },
    { name: "Veggie Burger", category: "Vegetarisch", price: "4.10€" }
  ]
};

const Mensa = () => {
  const navigate = useNavigate();
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  
  const currentLocation = locations[currentLocationIndex];
  const currentMenu = mensaMenus[currentLocation];

  const handlePrevLocation = () => {
    setCurrentLocationIndex((prev) => (prev - 1 + locations.length) % locations.length);
  };

  const handleNextLocation = () => {
    setCurrentLocationIndex((prev) => (prev + 1) % locations.length);
  };

  return (
    <div className="min-h-screen relative pb-safe">
      <BlobBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gradient-to-b from-primary/95 to-primary/80 backdrop-blur-sm text-white">
        <div className="flex items-center justify-between p-4 px-6">
          <button 
            onClick={() => navigate("/home")}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-bold">MENSA-SERVICE</h1>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Bell className="h-6 w-6" />
          </button>
        </div>

        {/* User Info */}
        <div className="px-6 pb-4">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-12 w-12 border-2 border-white/30">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Student" />
              <AvatarFallback className="bg-white text-primary">S</AvatarFallback>
            </Avatar>
            <p className="text-base font-medium">Hallo, Student</p>
          </div>

          {/* Location Selector */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 flex items-center justify-between">
            <button
              onClick={handlePrevLocation}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-lg">🏫</span>
              <span className="text-sm font-medium">{currentLocation}</span>
            </div>

            <button
              onClick={handleNextLocation}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Items */}
      <main className="px-6 pt-6 pb-8 space-y-3">
        {currentMenu.map((item, index) => (
          <Card 
            key={index}
            onClick={() => navigate("/mensa-detail", { state: { item } })}
            className="p-4 bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.category}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary">{item.price}</p>
              </div>
            </div>
          </Card>
        ))}

        {/* Special Card */}
        <Card className="p-4 bg-gradient-to-br from-primary/70 to-primary/50 border-none text-white shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-full">
              <span className="text-2xl">🍽️</span>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">Tagesgericht</h3>
              <p className="text-xs opacity-90">Jeden Tag ein neues Angebot!</p>
            </div>
          </div>
        </Card>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-sm border-t border-white/10 px-6 py-3 pb-safe">
        <div className="flex items-center justify-around">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate("/home")}
            className="flex flex-col items-center gap-1 text-white/70 hover:text-white hover:bg-white/10"
          >
            <span className="text-lg">🏠</span>
            <span className="text-xs">Home</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="flex flex-col items-center gap-1 text-white hover:bg-white/10"
          >
            <span className="text-lg">🍽️</span>
            <span className="text-xs">Mensa</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="flex flex-col items-center gap-1 text-white/70 hover:text-white hover:bg-white/10"
          >
            <span className="text-lg">📅</span>
            <span className="text-xs">Plan</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="flex flex-col items-center gap-1 text-white/70 hover:text-white hover:bg-white/10"
          >
            <span className="text-lg">👤</span>
            <span className="text-xs">Profil</span>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Mensa;
