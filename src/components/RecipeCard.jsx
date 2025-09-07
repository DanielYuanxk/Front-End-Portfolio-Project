import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal, children }) => {
  return (
    <div>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} />
      <br />
      <Link to={`/recipe/${meal.idMeal}`}>Start Cooking</Link>
      <div>{children}</div>
    </div>
  );
};

export default RecipeCard;
