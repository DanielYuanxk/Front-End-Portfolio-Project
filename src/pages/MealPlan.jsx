import React from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

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
      <div className=" grid grid-cols-3 auto-rows-7 px-4 w-[800px] h-[1200px] m-8">
        {days.map((d) =>
          slots.map((s) => (
            <div
              key={`${d}-${s}`}
              className="flex border-solid outline-1 justify-center items-center  w-full h-full"
            >
              empty
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MealPlan;
