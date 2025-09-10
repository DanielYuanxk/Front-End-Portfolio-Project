import React from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const { favorite, removeFavorite, addMealPlan, isFavorite, mealPlan } =
    useOutletContext();
  console.log(mealPlan);
  if (favorite.length > 0) {
    return (
      <div>
        <div className="font-bold text-3xl flex items-center justify-center h-[10rem]">
          Your Favorite Meals
        </div>
        <div className="grid grid-cols-2 gap-8 m-8">
          {favorite.map((each) => (
            <RecipeCard
              meal={each}
              key={each.idMeal}
              addMealPlan={addMealPlan}
              variant="favorite"
              removeFavorite={removeFavorite}
            ></RecipeCard>
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
