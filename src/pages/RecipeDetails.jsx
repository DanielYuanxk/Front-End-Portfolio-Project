import React from "react";
import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1>Recipe Details</h1>
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
