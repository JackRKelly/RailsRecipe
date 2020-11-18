import * as React from "react";
import { useEffect, useState } from "react";
import { IRecipe } from "../../models/recipe";

const Home: React.FC = () => {
  let [recipeList, setRecipeList] = useState<Array<IRecipe>>();

  useEffect(() => {
    fetch("/api/v1/recipes/index")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((jsonResponse) => {
        setRecipeList(jsonResponse);
      });
  }, []);

  useEffect(() => {
    console.log(recipeList);
  }, [recipeList]);

  return (
    <div className="home">
      <h1>Recently Posted Recipes</h1>
      {recipeList?.map((recipe, index) => (
        <a href={`/view/${recipe.id}`} key={index}>
          <div className="recipe-card">
            <h1>{recipe.name}</h1>
            <img src={recipe.image} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Home;
