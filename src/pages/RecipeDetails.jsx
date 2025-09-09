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
    <div className="flex flex-col justify-center items-center ">
      <div className=" grid grid-cols-2 px-6 py-4 mt-4 border-[1.75px] border-sky-500 text-sm ml-8 mr-8 w-[780px]">
        {" "}
        <div className="pr-3">
          {" "}
          <h1 className="text-xl font-bold">Recipe Details</h1>
          <img src={obj.strMealThumb} className="w-[400px]" />
        </div>
        <div className="pl-3">
          {" "}
          <h1 className=" text-xl  font-bold">{obj.strMeal}</h1>
          <h2 className="font-bold">Ingredients:</h2>
          <ul>
            {ingredientAmountArray.map((each) => (
              <li key={each.ingredient}>
                <strong>{each.ingredient}:</strong> {each.measurement}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 pt-4  ">
          {" "}
          <p className="text-xl font-semibold">Cooking Instructions: </p>
          <p>{obj.strInstructions}</p>
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
