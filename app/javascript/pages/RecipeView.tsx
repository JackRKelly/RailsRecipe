import * as React from "react";
import { useEffect, useState } from "react";
import { IRecipe, IRouteParameter } from "../../models/recipe";
import PageWrapper from "../components/PageWrapper";
import { H1 } from "../components/Text";
import { useParams } from "react-router-dom";

const RecipeView: React.FC = () => {
  let [recipe, setRecipe] = useState<IRecipe>();

  let { id } = useParams<IRouteParameter>();

  useEffect(() => {
    fetch(`/api/v1/recipes/show/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((jsonResponse) => {
        setRecipe(jsonResponse);
      });
  }, []);

  useEffect(() => {
    console.log(recipe);
  }, [recipe]);

  return (
    <PageWrapper id="recipe">
      <H1>Viewing Recipe {recipe ? recipe.name : `#${id}`}</H1>
      <div className="recipe">
        <p>Ingredients</p>
        <ul>
          {recipe?.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>Instructions</p>
        <ol>
          {recipe?.instruction?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        <img src={recipe?.image} alt={recipe?.name} />
      </div>
    </PageWrapper>
  );
};

export default RecipeView;
