import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  const [favorite, setFavorite] = useState([]);
  const [mealPlan, setMealPlan] = useState([]);

  const addFavorite = (meal) => {
    setFavorite((prev) =>
      prev.some((u) => u.idMeal === meal.idMeal) ? prev : [...prev, meal]
    );
  };
  const isFavorite = (meal) => {
    return favorite.some((u) => u.idMeal === meal.idMeal) ? true : false;
  };
  const addMealPlan = (meal) => {
    setMealPlan((prev) => [...prev, meal]);
  };
  const removeFavorite = (meal) => {
    setFavorite((prev) => prev.filter((each) => each.idMeal != meal.idMeal));
  };
  const removeMealPlan = (meal) => {
    setMealPlan((prev) => prev.filter((each) => each.idMeal != meal.idMeal));
  };

  return (
    <div>
      <NavBar />
      <main>
        {" "}
        <Outlet
          context={{
            isFavorite,
            addFavorite,
            addMealPlan,
            removeFavorite,
            removeMealPlan,
            favorite,
            mealPlan,
          }}
        />
      </main>
    </div>
  );
};

export async function mealLoader({ request }) {
  const url = new URL(request.url);
  const i = url.searchParams.get("i") ?? "";
  if (!i) return { meals: [], query: "" };
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${i}`,
    {
      signal: request.signal,
    }
  );
  if (!res.ok) {
    throw Response.json(
      { message: "Failed to load meals" },
      {
        status: res.status,
      }
    );
  }
  const data = await res.json();
  return data;
}

export default AppLayout;
