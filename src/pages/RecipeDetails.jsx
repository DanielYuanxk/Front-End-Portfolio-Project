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
    <div>
      <h1>Recipe Details</h1>
      <h1>{obj.strMeal}</h1>
      <img src={obj.strMealThumb} />
      <h2>Ingredients:</h2>
      <ul>
        {ingredientAmountArray.map((each) => (
          <li key={each.ingredient}>
            <strong>{each.ingredient}:</strong> {each.measurement}
          </li>
        ))}
      </ul>
      <p>{obj.strInstructions}</p>
      <div style={{ height: "40em" }}></div>
      <br />
      <p>{JSON.stringify(ingredientAmountArray)}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
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
