import React from "react";

const RecipeCard = ({ meal, children }) => {
  return (
    <div>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} />
      <div>{children}</div>
    </div>
  );
};

export default RecipeCard;
