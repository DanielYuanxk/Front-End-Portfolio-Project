import React from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const { favorite, removeFavorite } = useOutletContext();
  if (favorite.length > 0) {
    return (
      <div>
        {favorite.map((each) => (
          <RecipeCard meal={each} key={each.idMeal}>
            <button onClick={() => removeFavorite(each)}>
              Remove from Favorites
            </button>
          </RecipeCard>
        ))}
      </div>
    );
  } else {
    return <h2>Nothing yet</h2>;
  }
};

export default Favorites;
