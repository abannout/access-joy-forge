import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BlobBackground from "@/components/BlobBackground";
import { ArrowLeft, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

const MensaDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const foodItem = location.state?.item || { name: "Gericht", category: "Kategorie", price: "0.00€" };
  
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      user: "Anna M.",
      rating: 5,
      comment: "Sehr lecker! Kann ich nur empfehlen.",
      date: "Vor 2 Tagen"
    },
    {
      id: 2,
      user: "Max K.",
      rating: 4,
      comment: "Gut gewürzt, könnte aber größer sein.",
      date: "Vor 5 Tagen"
    },
    {
      id: 3,
      user: "Lisa W.",
      rating: 3,
      comment: "Okay, aber nichts Besonderes.",
      date: "Vor 1 Woche"
    }
  ]);

  const foodDetails = {
    ingredients: "Reis, Gemüse, Gewürze, Öl",
    allergens: "Kann Spuren von Gluten enthalten",
    calories: "450 kcal",
    protein: "12g",
    carbs: "65g",
    fat: "15g"
  };

  const handleSubmitReview = () => {
    if (rating === 0) {
      toast({
        title: "Bewertung erforderlich",
        description: "Bitte wählen Sie eine Bewertung aus",
        variant: "destructive",
      });
      return;
    }

    const newReview: Review = {
      id: reviews.length + 1,
      user: "Du",
      rating: rating,
      comment: comment || "Keine Kommentar",
      date: "Gerade eben"
    };

    setReviews([newReview, ...reviews]);

    toast({
      title: "Bewertung abgegeben!",
      description: "Vielen Dank für Ihre Bewertung",
    });
    
    setRating(0);
    setComment("");
  };

  const handleSkip = () => {
    navigate("/mensa");
  };

  return (
    <div className="min-h-screen relative pb-safe bg-gradient-to-br from-[#FFB5B5] via-[#FFB5D5] to-[#FFB5E5]">
      
      {/* Header */}
      <header className="pt-4 px-6 pb-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate("/mensa")}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
          <h1 className="text-lg font-bold text-white">Mensa-Service</h1>
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
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">{foodItem.name}</h2>
          <p className="text-sm text-white/80">{foodItem.category}</p>
          <p className="text-2xl font-bold text-white">{foodItem.price}</p>
        </div>

        {/* Food Details */}
        <Card className="bg-white backdrop-blur-md border-none shadow-lg rounded-3xl p-5 space-y-3">
          <h3 className="text-lg font-semibold text-[#D5006D]">Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Kalorien:</span>
              <span className="font-medium text-foreground">{foodDetails.calories}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Eiweiß:</span>
              <span className="font-medium text-foreground">{foodDetails.protein}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Kohlenhydrate:</span>
              <span className="font-medium text-foreground">{foodDetails.carbs}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Fett:</span>
              <span className="font-medium text-foreground">{foodDetails.fat}</span>
            </div>
          </div>
          <div className="pt-2 border-t border-gray-200">
            <p className="text-xs text-muted-foreground mb-1">Zutaten:</p>
            <p className="text-sm text-foreground">{foodDetails.ingredients}</p>
          </div>
          <div className="pt-2 border-t border-gray-200">
            <p className="text-xs text-muted-foreground mb-1">Allergene:</p>
            <p className="text-sm text-foreground">{foodDetails.allergens}</p>
          </div>
        </Card>

        {/* Rating Section */}
        <div className="bg-white backdrop-blur-md rounded-3xl p-6 space-y-4 shadow-lg">
          <div>
            <h3 className="text-lg font-semibold text-[#D5006D] mb-3">Bewertung</h3>
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
            className="flex-1 h-12 text-base bg-white border-[#D5006D] text-[#D5006D] hover:bg-white/90 rounded-3xl"
          >
            Überspringen
          </Button>
          <Button
            onClick={handleSubmitReview}
            className="flex-1 h-12 text-base bg-[#D5006D] hover:bg-[#B00058] text-white rounded-3xl"
          >
            Bewertung abgeben
          </Button>
        </div>

        {/* Reviews Section */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-white">
            Bewertungen ({reviews.length})
          </h3>
          
          {reviews.map((review) => (
            <Card key={review.id} className="bg-white backdrop-blur-md border-none shadow-lg rounded-3xl p-4 space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.user}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating
                          ? "fill-primary text-primary"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              {review.comment && (
                <p className="text-sm text-foreground pl-13">{review.comment}</p>
              )}
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MensaDetail;
