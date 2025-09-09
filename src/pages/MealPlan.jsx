import React from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

const MealPlan = () => {
  const { mealPlan, removeMealPlan } = useOutletContext();
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const slots = ["breakfast", "lunch", "dinner"];
  return (
    <div>
      {" "}
      <h2>Nothing yet</h2>
      <div className=" grid grid-cols-3 grid-rows-7 px-4 w-[800px] h-[1200px] m-8">
        {days.map((d) =>
          slots.map((s) => (
            <div
              key={`${d}-${s}`}
              className="flex border-solid outline-1 justify-center items-center  w-full h-full"
            >
              {mealPlan[d][s] === null ? (
                <p>empty</p>
              ) : (
                <div className="flex h-[calc(1200px/7)]">
                  <img
                    className=" object-contain "
                    src={mealPlan[d][s].strMealThumb}
                  />
                  <div>
                    {" "}
                    <Link to={`/recipe/${mealPlan[d][s].idMeal}`}>
                      Start Cooking
                    </Link>
                    <button onClick={() => removeMealPlan(d, s)}>
                      Remove Meal
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MealPlan;
