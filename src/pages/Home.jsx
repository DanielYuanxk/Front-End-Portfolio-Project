import React from "react";
import { Form, useOutletContext, useRouteLoaderData } from "react-router-dom";

import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const recipes = useRouteLoaderData("root");
  const { addFavorite, removeFavorite, addMealPlan, isFavorite, mealPlan } =
    useOutletContext();
  console.log(mealPlan);
  return (
    <div>
      <h1>Home</h1>
      <Form method="get">
        <label>
          <p>Search for something</p>
        </label>
        <input name="i" placeholder="Searching..." id="i" />
        <button type="submit">Search</button>
      </Form>
      <div>
        {recipes["meals"].map((meal) => {
          return (
            <RecipeCard
              key={meal.idMeal}
              meal={meal}
              variant="home"
              addMealPlan={addMealPlan}
            >
              <button
                onClick={() =>
                  isFavorite(meal) ? removeFavorite(meal) : addFavorite(meal)
                }
              >
                {isFavorite(meal) ? "Remove from favorite" : "Add to favorite"}
              </button>
            </RecipeCard>
          );
        })}
      </div>

      <pre>{JSON.stringify(recipes, null, 2)}</pre>
    </div>
  );
};

export default Home;

// function handleConfirmAdd(meal) {
//   if (!meal) return;
//   setMealPlan((prev) => ({
//     ...prev,
//     [day]: { ...prev[day], [slot]: meal },
//   }));
// }
