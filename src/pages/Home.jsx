import React from "react";
import { useEffect } from "react";
import { Form, useOutletContext, useRouteLoaderData } from "react-router-dom";

import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const recipes = useRouteLoaderData("root");

  const {
    addFavorite,
    removeFavorite,
    addMealPlan,
    isFavorite,
    mealPlan,
    searchList,
    setSearchList,
  } = useOutletContext();
  useEffect(() => {
    if (recipes["meals"].length > 0) {
      setSearchList(recipes["meals"]);
    }
  }, [recipes["meals"]]);
  console.log(mealPlan);
  return (
    <div className="flex-col justify-items-center m-4 ">
      <h1 className="text-4xl font-semibold">Home</h1>{" "}
      <h2 className="text-2xl font-semibold">Choose Your Main Ingredient</h2>
      <Form method="get">
        <input name="i" placeholder="Searching..." id="i" />
        <button
          type="submit"
          className="  px-4 py-2 rounded bg-sky-500 text-white hover:bg-sky-600 cursor-pointer active:bg-white active:text-sky-600 active:border-solid active:outline-1"
        >
          Search
        </button>
      </Form>
      <div className="grid grid-cols-2 gap-8 m-8">
        {searchList.map((meal) => {
          return (
            <RecipeCard
              key={meal.idMeal}
              meal={meal}
              variant="home"
              addMealPlan={addMealPlan}
              isFavorite={isFavorite}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            ></RecipeCard>
          );
        })}
      </div>
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
