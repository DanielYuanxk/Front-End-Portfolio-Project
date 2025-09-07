import React from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const MealPlan = () => {
  const { mealPlan, removeMealPlan } = useOutletContext();
  if (mealPlan.length > 0) {
    return (
      <div>
        {mealPlan.map((each) => (
          <RecipeCard meal={each} key={each.idMeal}>
            <button onClick={() => removeMealPlan(each)}>
              Remove Meal Plan
            </button>
          </RecipeCard>
        ))}
      </div>
    );
  } else {
    return <h2>Nothing yet</h2>;
  }
};

export default MealPlan;
