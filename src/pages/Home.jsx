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
      <h1 className="text-4xl font-semibold">Home</h1>
      <Form method="get">
        <label>
          <h2 className="text-2xl font-semibold">Search for something</h2>
        </label>
        <input name="i" placeholder="Searching..." id="i" />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Search
        </button>
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
