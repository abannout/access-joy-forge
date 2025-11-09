import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BlobBackground from "@/components/BlobBackground";
import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const MensaDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const foodItem = location.state?.item || { name: "Gericht", category: "Kategorie", price: "0.00€" };
  
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmitReview = () => {
    if (rating === 0) {
      toast({
        title: "Bewertung erforderlich",
        description: "Bitte wählen Sie eine Bewertung aus",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Bewertung abgegeben!",
      description: "Vielen Dank für Ihre Bewertung",
    });
    
    navigate("/mensa");
  };

  const handleSkip = () => {
    navigate("/mensa");
  };

  return (
    <div className="min-h-screen relative pb-safe">
      <BlobBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gradient-to-b from-primary/95 to-primary/80 backdrop-blur-sm text-white">
        <div className="flex items-center justify-between p-4 px-6">
          <button 
            onClick={() => navigate("/mensa")}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-bold">MENSA-SERVICE</h1>
          <div className="w-10"></div>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 pt-8 pb-8 space-y-6">
        {/* Food Image */}
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-200 to-orange-100 shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop"
              alt={foodItem.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Food Info */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-foreground">{foodItem.name}</h2>
          <p className="text-sm text-muted-foreground">Das ist ein Angebot!</p>
        </div>

        {/* Rating Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 space-y-4 shadow-md">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Bewertung</h3>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`h-10 w-10 ${
                      star <= (hoveredRating || rating)
                        ? "fill-primary text-primary"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Comment Section */}
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Kommentar (optional)
            </label>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Gib deinen Kommentar ein (optional)"
              className="min-h-[100px] bg-white border-gray-200"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleSkip}
            variant="outline"
            className="flex-1 h-12 text-base"
          >
            Überspringen
          </Button>
          <Button
            onClick={handleSubmitReview}
            className="flex-1 h-12 text-base bg-primary hover:bg-primary/90"
          >
            Bewertung abgeben
          </Button>
        </div>
      </main>
    </div>
  );
};

export default MensaDetail;
