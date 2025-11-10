import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Bell, Users, MapPin, Utensils, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const locations = [
  "Mensa Deutz/Süd",
  "Mensa Gummersbach",
  "Mensa Südstadt"
];

const mensaMenus = {
  "Mensa Deutz/Süd": [
    { name: "Gemüsesuppe", category: "Vegetarisch", price: "3.50€" },
    { name: "Schnitzel mit Pommes", category: "Fleisch", price: "4.20€" },
    { name: "Hähnchen-Curry mit Reis", category: "Fleisch", price: "3.80€" },
    { name: "Veggie Bowl", category: "Vegan", price: "4.00€" }
  ],
  "Mensa Gummersbach": [
    { name: "Gemüsesuppe", category: "Vegetarisch", price: "3.60€" },
    { name: "Schnitzel mit Pommes", category: "Fleisch", price: "4.30€" },
    { name: "Hähnchen-Curry mit Reis", category: "Fleisch", price: "3.90€" },
    { name: "Veggie Bowl", category: "Vegan", price: "4.80€" }
  ],
  "Mensa Südstadt": [
    { name: "Gemüsesuppe", category: "Vegetarisch", price: "3.70€" },
    { name: "Schnitzel mit Pommes", category: "Fleisch", price: "3.40€" },
    { name: "Hähnchen-Curry mit Reis", category: "Fleisch", price: "4.40€" },
    { name: "Veggie Bowl", category: "Vegan", price: "4.10€" }
  ]
};

const Mensa = () => {
  const navigate = useNavigate();
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [isCapacityDialogOpen, setIsCapacityDialogOpen] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [peopleCount, setPeopleCount] = useState<Record<string, number>>({
    "Mensa Deutz/Süd": 23,
    "Mensa Gummersbach": 15,
    "Mensa Südstadt": 31
  });

  useEffect(() => {
    if (!carouselApi) return;

    carouselApi.on("select", () => {
      setCurrentLocationIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);
  
  const currentLocation = locations[currentLocationIndex];
  const currentMenu = mensaMenus[currentLocation];
  const currentCount = peopleCount[currentLocation];

  const handlePrevLocation = () => {
    setCurrentLocationIndex((prev) => (prev - 1 + locations.length) % locations.length);
  };

  const handleNextLocation = () => {
    setCurrentLocationIndex((prev) => (prev + 1) % locations.length);
  };

  const handleEatingNow = () => {
    setPeopleCount(prev => ({
      ...prev,
      [currentLocation]: prev[currentLocation] + 1
    }));
    setIsCapacityDialogOpen(false);
  };

  const getCapacityStatus = (count: number) => {
    if (count < 20) return { text: "Viel Platz", color: "text-green-600" };
    if (count < 40) return { text: "Mittlere Auslastung", color: "text-orange-600" };
    return { text: "Sehr voll", color: "text-red-600" };
  };

  const capacityStatus = getCapacityStatus(currentCount);

  return (
    <div className="min-h-screen relative pb-20 bg-gradient-to-br from-[#FFB5B5] via-[#FFB5D5] to-[#FFB5E5]">
      
      {/* Header */}
      <header className="pt-4 px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <Avatar className="h-14 w-14 border-2 border-white/30">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kim" />
              <AvatarFallback className="bg-white text-primary">K</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-bold text-white">Mensa-Service</h1>
              <p className="text-sm text-white/90">Speiseplan & Bewertungen</p>
            </div>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Bell className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Mensa Standorte Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white">
            <Utensils className="h-5 w-5" />
            <h2 className="text-base font-semibold">Mensa Standorte</h2>
          </div>

          {/* Location Carousel with Glass Effect */}
          <Carousel 
            setApi={setCarouselApi}
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {locations.map((location, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white/20 backdrop-blur-md rounded-3xl p-4 border border-white/30 shadow-lg">
                    <div className="flex items-center justify-center gap-2 text-white">
                      <MapPin className="h-5 w-5" />
                      <span className="text-base font-semibold">{location.replace("Mensa ", "")}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30" />
            <CarouselNext className="right-0 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30" />
          </Carousel>
        </div>
      </header>

      {/* Menu Items */}
      <main className="px-6 space-y-3">
        {currentMenu.map((item, index) => (
          <Card 
            key={index}
            onClick={() => navigate("/mensa-detail", { state: { item } })}
            className="p-4 bg-white backdrop-blur-md border-none shadow-md hover:shadow-lg transition-all cursor-pointer rounded-3xl"
          >
            <div className="text-center">
              <h3 className="font-semibold text-[#D5006D]">{item.name}</h3>
            </div>
          </Card>
        ))}

        {/* Capacity Button with Glass Effect */}
        <button
          onClick={() => setIsCapacityDialogOpen(true)}
          className="w-full bg-[#D5006D] backdrop-blur-md border border-white/20 text-white hover:bg-[#B00058] transition-all shadow-lg rounded-3xl p-4 font-semibold"
        >
          Mensa-Auslastung ansehen
        </button>

        {/* Review Section */}
        <Card className="bg-white backdrop-blur-md border-none shadow-lg rounded-3xl p-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#D5006D] flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[#D5006D] mb-1">Bewertung:</h3>
              <p className="text-sm text-[#D5006D]">"Schnitzel heute sehr knusprig!"</p>
            </div>
          </div>
        </Card>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-white/20 px-6 py-3 pb-safe shadow-lg">
        <div className="flex items-center justify-around">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate("/home")}
            className="flex flex-col items-center gap-1 text-[#FFB5D5] hover:text-[#D5006D] hover:bg-transparent"
          >
            <span className="text-2xl">🏠</span>
            <span className="text-xs font-medium">HOME</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="flex flex-col items-center gap-1 text-[#FFB5D5] hover:text-[#D5006D] hover:bg-transparent"
          >
            <span className="text-2xl">🔍</span>
            <span className="text-xs font-medium">RAUMFINDER</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="flex flex-col items-center gap-1 text-[#D5006D] hover:bg-transparent"
          >
            <span className="text-2xl">🍽️</span>
            <span className="text-xs font-medium">MENSA-SERVICE</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="flex flex-col items-center gap-1 text-[#FFB5D5] hover:text-[#D5006D] hover:bg-transparent"
          >
            <span className="text-2xl">👥</span>
            <span className="text-xs font-medium">COMMUNITY</span>
          </Button>

          <Button 
            variant="ghost" 
            size="sm"
            className="flex flex-col items-center gap-1 text-[#FFB5D5] hover:text-[#D5006D] hover:bg-transparent"
          >
            <span className="text-2xl">🤖</span>
            <span className="text-xs font-medium">ASSISTENT</span>
          </Button>
        </div>
      </nav>

      {/* Capacity Dialog */}
      <Dialog open={isCapacityDialogOpen} onOpenChange={setIsCapacityDialogOpen}>
        <DialogContent className="sm:max-w-md mx-4 rounded-2xl bg-gradient-to-br from-background to-muted border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-center text-primary font-bold text-lg">
              Aktuelle Auslastung der Mensa
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="text-center space-y-2">
              <p className={`text-2xl font-bold ${capacityStatus.color}`}>
                {capacityStatus.text}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {currentCount} Personen essen gerade hier
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                • Hinweis: Die Anzahl der Personen in der Mensa kann abweichen.
                <br />
                Es werden nur diejenigen Personen gezählt, die unsere App nutzen
                und auf „Ich esse jetzt" geklickt haben.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                onClick={handleEatingNow}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                Ich esse jetzt
              </Button>
              <Button
                onClick={() => setIsCapacityDialogOpen(false)}
                variant="outline"
                className="flex-1 border-primary/30 text-foreground hover:bg-muted"
              >
                Ich esse später
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Mensa;
