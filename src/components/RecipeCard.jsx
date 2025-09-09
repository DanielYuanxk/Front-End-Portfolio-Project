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
      <h2>{meal.strMeal}</h2>
      <div className="min-w-0 min-h-0 grid place-items-center">
        <img className="block w-full object-contain" src={meal.strMealThumb} />
      </div>
      <br />

      <div
        style={{
          border: "1px solid #ccc",
          padding: 8,
          marginBottom: 12,
        }}
      >
        <Link to={`/recipe/${meal.idMeal}`}>Start Cooking</Link>
        <br />
        <label>
          Day:
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
      </div>
      <fieldset style={{ marginTop: 8 }}>
        <legend>Slot</legend>
        {slots.map((s) => {
          return (
            <label key={s} style={{ marginRight: 12 }}>
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
      <button onClick={() => addMealPlan(meal, day, slot)}>Add to Plan</button>
      {variant === "home" && (
        <button
          onClick={() =>
            isFavorite(meal) ? removeFavorite(meal) : addFavorite(meal)
          }
        >
          {isFavorite(meal) ? "Remove from favorite" : "Add to favorite"}
        </button>
      )}

      <div>{children}</div>
    </div>
  );
};

export default RecipeCard;
