import { useState, useEffect } from "react";

export interface Meal {
  id: number;
  name: string;
  notes: string[];
  prices: {
    students?: number;
    employees?: number;
    others?: number;
    pupils?: number;
  };
  category: string;
}

export interface MensaLocation {
  id: number;
  name: string;
  displayName: string;
}

export const mensaLocations: MensaLocation[] = [
  { id: 387, name: "Köln, Mensa Deutz", displayName: "Deutz" },
  { id: 390, name: "Gummersbach, Mensa Gummersbach", displayName: "Gummersbach" },
  { id: 383, name: "Köln, Mensa Südstadt", displayName: "Südstadt" },
];

const BASE_URL = "https://openmensa.org/api/v2";

const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

export const useMensaMeals = (canteenId: number) => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null);
      setIsClosed(false);

      // Using a specific date for testing (when mensa is open)
      const today = "2025-11-25";

      try {
        const response = await fetch(
          `${BASE_URL}/canteens/${canteenId}/days/${today}/meals`
        );

        if (response.status === 404) {
          setIsClosed(true);
          setMeals([]);
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch meals");
        }

        const data: Meal[] = await response.json();
        setMeals(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setMeals([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, [canteenId]);

  return { meals, isLoading, error, isClosed };
};

export const formatPrice = (price: number | undefined): string => {
  if (price === undefined) return "N/A";
  return `${price.toFixed(2)}€`;
};
