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
    <div className="flex flex-col items-center justify-center w-full">
      {" "}
      <div className=" h-[5rem]  flex items-center justify-center text-xl font-semibold ">
        Meal Plan For The Week
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:[grid-template-rows:repeat(7,1fr)] gap-3 px-4 w-full max-w-screen-lg mx-auto mb-8">
        {days.map((d) =>
          slots.map((s) => (
            <div
              key={`${d}-${s}`}
              className=" flex items-center justify-center rounded-lg border-1 border-sky-500   w-full h-full"
            >
              {mealPlan[d][s] === null ? (
                <p>{`${d} ${s}`}</p>
              ) : (
                <div className="grid grid-cols-3 w-full">
                  <div className="w-full col-span-2 rounded-lg p-2 w-full">
                    <img
                      className=" rounded-lg  col-span-2 h-full"
                      src={mealPlan[d][s].strMealThumb}
                    />
                  </div>

                  <div className="grid grid-rows-2">
                    {" "}
                    <Link
                      to={`/recipe/${mealPlan[d][s].idMeal}`}
                      className="  justify-self-center self-center 2 flex text-center justify-center items-center text-sm h-[80%] w-[80%] flex px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 cursor-pointer active:bg-white active:text-sky-600 active:border-solid active:outline-1"
                    >
                      Start Cooking
                    </Link>
                    <button
                      onClick={() => removeMealPlan(d, s)}
                      className=" justify-self-center self-center flex text-center justify-center items-center text-sm h-[80%] w-[80%] px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 cursor-pointer active:bg-white active:text-sky-600 active:border-solid active:outline-1"
                    >
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
