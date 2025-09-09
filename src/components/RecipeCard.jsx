import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const RecipeCard = ({
  meal,
  children,
  variant,
  addMealPlan,
  isFavorite,
  addFavorite,
  removeFavorite,
}) => {
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
  const [day, setDay] = useState("Monday");
  const [slot, setSlot] = useState("breakfast");
  return (
    <div className="w-full h-full min-w-0 min-h-0 ">
      <div className="min-w-0 min-h-0 grid place-items-center">
        <img className="block w-full object-contain" src={meal.strMealThumb} />
      </div>
      <h2 className="text-xl font-bold">{meal.strMeal}</h2>
      <br />

      <div className="grid grid-cols-2 gap-5">
        {" "}
        <Link
          to={`/recipe/${meal.idMeal}`}
          className="px-4 py-2 rounded bg-sky-500 text-white hover:bg-sky-600 cursor-pointer active:bg-white active:text-sky-600 active:border-solid active:outline-1"
        >
          Start Cooking
        </Link>
        {variant === "home" && (
          <button
            className="px-4 py-2 rounded bg-sky-500 text-white hover:bg-sky-600 cursor-pointer active:bg-white active:text-sky-600 active:border-solid active:outline-1"
            onClick={() =>
              isFavorite(meal) ? removeFavorite(meal) : addFavorite(meal)
            }
          >
            {isFavorite(meal) ? (
              <div>
                {" "}
                Favorite{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-red-400 inline"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </div>
            ) : (
              <div>
                {" "}
                Favorite{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-white inline"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </div>
            )}
          </button>
        )}
        {variant === "favorite" && (
          <button
            onClick={() => removeFavorite(meal)}
            className="px-4 py-2 rounded bg-sky-500 text-white hover:bg-sky-600 cursor-pointer active:bg-white active:text-sky-600 active:border-solid active:outline-1"
          >
            Remove Item
          </button>
        )}
      </div>

      <div className="mt-3">
        {" "}
        <label>
          <p>Choose Day:</p>
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="border-1 border-sky-500 "
          >
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="mt-3">
        <p>Choose Time</p>
        {slots.map((s) => {
          return (
            <label key={s} className="mr-8">
              <input
                type="radio"
                name={`slot-${meal.idMeal}`}
                value={s}
                checked={s === slot}
                onChange={(e) => {
                  setSlot(e.target.value);
                }}
              />
              {s}
            </label>
          );
        })}
      </fieldset>
      <div className="mt-3 grid grid-cols-2 gap-5">
        {" "}
        <button
          className="px-4 py-2 rounded bg-sky-500 text-white hover:bg-sky-600 cursor-pointer active:bg-white active:text-sky-600 active:border-solid active:outline-1"
          onClick={() => addMealPlan(meal, day, slot)}
        >
          Add to Plan
        </button>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default RecipeCard;
