import React from "react";
import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const data = useLoaderData();
  const obj = data["meals"][0];
  const ingredientAmountArray = Array.from({ length: 20 }, (_, idx) => {
    const i = idx + 1;
    const ing = obj[`strIngredient${i}`]?.trim();
    const mea = obj[`strMeasure${i}`]?.trim();

    if (!ing) return null;
    return { ingredient: ing, measurement: mea || "" };
  }).filter(Boolean);
  return (
    <div className="flex flex-col items-center">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-4 mt-4
                  w-full max-w-screen-lg mx-auto text-sm
                  border-[1.75px] border-sky-500"
      >
        <div className="pr-0 md:pr-3">
          <h1 className="text-xl font-bold">Recipe Details</h1>
          <img
            src={obj.strMealThumb}
            alt={obj.strMeal}
            className="mt-2 w-full aspect-[4/3] object-cover rounded"
          />
        </div>

        <div className="pl-0 md:pl-3">
          <h1 className="text-xl font-bold">{obj.strMeal}</h1>
          <h2 className="mt-2 font-bold">Ingredients:</h2>
          <ul className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
            {ingredientAmountArray.map((each) => (
              <li key={each.ingredient}>
                <strong>{each.ingredient}:</strong> {each.measurement}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 md:col-span-2">
          <p className="text-xl font-semibold">Cooking Instructions:</p>
          <p className="mt-1 whitespace-pre-line leading-relaxed">
            {obj.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

export async function detailsLoader({ params }) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );
  if (!res.ok) {
    throw Response.json(
      {
        message: "Failed to Load Recipe",
      },
      {
        status: res.status,
      }
    );
  }
  const data = await res.json();
  return data;
}
