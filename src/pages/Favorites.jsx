import React from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const { favorite, removeFavorite, addMealPlan, isFavorite, mealPlan } =
    useOutletContext();

  if (favorite.length > 0) {
    return (
      <div className="w-full max-w-screen-lg mx-auto px-4 py-4">
        <div className="font-bold text-3xl text-center py-10">
          Your Favorite Meals
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2 *:min-w-0">
          {favorite.map((each) => (
            <RecipeCard
              key={each.idMeal}
              meal={each}
              variant="favorite"
              addMealPlan={addMealPlan}
              removeFavorite={removeFavorite}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div className="text-xl font-bold">Add some Favorites</div>
      </div>
    );
  }
};

export default Favorites;
