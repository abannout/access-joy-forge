import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Meal, formatPrice } from "@/hooks/useMensaMeals";

interface MealCardProps {
  meal: Meal;
}

const getCategoryColor = (category: string): string => {
  const lowerCategory = category.toLowerCase();
  if (lowerCategory.includes("vegan")) return "bg-green-500";
  if (lowerCategory.includes("vegetar")) return "bg-emerald-500";
  if (lowerCategory.includes("fleisch") || lowerCategory.includes("meat")) return "bg-orange-500";
  if (lowerCategory.includes("fisch") || lowerCategory.includes("fish")) return "bg-blue-500";
  return "bg-[#D5006D]";
};

const getNoteColor = (note: string): string => {
  const lowerNote = note.toLowerCase();
  if (lowerNote.includes("vegan")) return "bg-green-100 text-green-800";
  if (lowerNote.includes("vegetar") || lowerNote.includes("ovo-lacto")) return "bg-emerald-100 text-emerald-800";
  if (lowerNote.includes("vital") || lowerNote.includes("fit")) return "bg-purple-100 text-purple-800";
  return "bg-gray-100 text-gray-700";
};

export const MealCard = ({ meal }: MealCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/mensa-detail", {
      state: {
        item: {
          id: meal.id,
          name: meal.name,
          category: meal.category,
          price: formatPrice(meal.prices.students),
          notes: meal.notes,
          prices: meal.prices,
        },
      },
    });
  };

  return (
    <Card
      onClick={handleClick}
      className="p-4 bg-white backdrop-blur-md border-none shadow-md hover:shadow-lg transition-all cursor-pointer rounded-3xl"
    >
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-[#D5006D] text-sm leading-tight flex-1">
            {meal.name}
          </h3>
          <span className="text-sm font-bold text-[#D5006D] whitespace-nowrap">
            {formatPrice(meal.prices.students)}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-1">
          <Badge 
            variant="secondary" 
            className={`${getCategoryColor(meal.category)} text-white text-xs`}
          >
            {meal.category}
          </Badge>
          {meal.notes.slice(0, 2).map((note, index) => (
            <Badge
              key={index}
              variant="outline"
              className={`${getNoteColor(note)} text-xs border-none`}
            >
              {note}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
