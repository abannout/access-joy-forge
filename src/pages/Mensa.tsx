import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, MapPin, Utensils, MessageCircle, Loader2 } from "lucide-react";
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
import { useMensaMeals, mensaLocations } from "@/hooks/useMensaMeals";
import { MealCard } from "@/components/MealCard";

const Mensa = () => {
  const navigate = useNavigate();
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [isCapacityDialogOpen, setIsCapacityDialogOpen] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [peopleCount, setPeopleCount] = useState<Record<number, number>>({
    387: 23,
    390: 15,
    383: 31
  });

  const reviews = [
    "Schnitzel heute sehr knusprig!",
    "Die Gemüsesuppe ist wirklich lecker!",
    "Perfekte Portion, bin satt geworden!",
    "Freundliches Personal heute!",
    "Curry war richtig gut gewürzt!"
  ];

  const currentLocation = mensaLocations[currentLocationIndex];
  const { meals, isLoading, error, isClosed } = useMensaMeals(currentLocation.id);
  const currentCount = peopleCount[currentLocation.id];

  useEffect(() => {
    if (!carouselApi) return;

    carouselApi.on("select", () => {
      setCurrentLocationIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const handleEatingNow = () => {
    setPeopleCount(prev => ({
      ...prev,
      [currentLocation.id]: prev[currentLocation.id] + 1
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
              {mensaLocations.map((location, index) => (
                <CarouselItem key={location.id}>
                  <div className="bg-white/20 backdrop-blur-md rounded-3xl p-4 border border-white/30 shadow-lg">
                    <div className="flex items-center justify-center gap-2 text-white">
                      <MapPin className="h-5 w-5" />
                      <span className="text-base font-semibold">{location.displayName}</span>
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
        {isLoading && (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        )}

        {error && (
          <Card className="p-4 bg-white/90 backdrop-blur-md border-none shadow-md rounded-3xl">
            <p className="text-center text-red-500">Fehler beim Laden: {error}</p>
          </Card>
        )}

        {isClosed && (
          <Card className="p-4 bg-white/90 backdrop-blur-md border-none shadow-md rounded-3xl">
            <p className="text-center text-[#D5006D] font-semibold">
              Die Mensa ist heute geschlossen.
            </p>
          </Card>
        )}

        {!isLoading && !error && !isClosed && meals.length === 0 && (
          <Card className="p-4 bg-white/90 backdrop-blur-md border-none shadow-md rounded-3xl">
            <p className="text-center text-[#D5006D]">
              Keine Gerichte für heute verfügbar.
            </p>
          </Card>
        )}

        {!isLoading && !error && !isClosed && meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}

        {/* Capacity Button with Glass Effect */}
        <button
          onClick={() => !isClosed && setIsCapacityDialogOpen(true)}
          disabled={isClosed}
          className={`w-full backdrop-blur-md border border-white/20 text-white transition-all shadow-lg rounded-3xl p-4 font-semibold ${
            isClosed 
              ? 'bg-gray-400 cursor-not-allowed opacity-70' 
              : 'bg-[#D5006D] hover:bg-[#B00058]'
          }`}
        >
          {isClosed ? 'Mensa geschlossen' : 'Mensa-Auslastung ansehen'}
        </button>

        {/* Review Section - Auto-rotating */}
        <Card className="bg-white backdrop-blur-md border-none shadow-lg rounded-3xl p-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#D5006D] flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-[#D5006D]">Bewertung:</h3>
                <div className="flex gap-1">
                  {reviews.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentReviewIndex 
                          ? 'w-6 bg-[#D5006D]' 
                          : 'w-1.5 bg-[#D5006D]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-[#D5006D]">"{reviews[currentReviewIndex]}"</p>
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
