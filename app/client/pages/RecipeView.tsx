import * as React from "react";
import { useEffect, useState } from "react";
import { Recipe, RouteParameter } from "../../models/recipe";
import { Content, Page, Section, SectionHeader } from "../components/Styled";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ImageBanner = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const RecipeView: React.FC = () => {
  let [recipe, setRecipe] = useState<Recipe>();

  let { id } = useParams<RouteParameter>();

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

  return (
    <Page>
      <ImageBanner src={recipe?.image} alt={recipe?.name} />
      <Section>
        <Content id="recipe">
          <SectionHeader>
            {recipe ? recipe.name : `Loading Recipe #${id}`}
          </SectionHeader>
          <div className="recipe">
            <p>Ingredients</p>
            <ul>
              {recipe?.ingredients?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>instructions</p>
            <ol>
              {recipe?.instructions?.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </Content>
      </Section>
    </Page>
  );
};

export default RecipeView;
