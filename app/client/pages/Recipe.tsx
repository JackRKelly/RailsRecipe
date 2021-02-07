import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Recipe } from "../../models/recipe";
import {
  Content,
  Page,
  Section,
  SectionHeader,
  SectionText,
} from "../components/Styled";

const RecipeCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 1.5em 1.5em;
`;

const RecipeCard = styled.a`
  background-color: var(--white);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  padding: 1em;
  border-radius: 4px;
  text-decoration: none;
`;

const RecipeThumbnail = styled.img`
  width: 100%;
  max-height: 230px;
  object-fit: cover;
  border-radius: 3px;
`;

const RecipeHeader = styled.h3`
  margin-top: 0;
  color: var(--primary);
  text-align: center;
  margin-bottom: 0.5em;
`;

const RecipeDescription = styled.p`
  color: var(--gray);
  text-align: center;
  margin-top: 0;
`;

const RecipeHeaderDescription = styled.p`
  color: var(--gray);
  font-size: 1.5em;
  text-align: center;
`;

const RecipeHeaderLink = styled.a`
  text-decoration: none;
  color: var(--primary);
`;

const RecipeApp: React.FC = () => {
  let [recipeList, setRecipeList] = useState<Array<Recipe>>();

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

  return (
    <Page>
      <Section>
        <Content>
          <SectionHeader>Recently Posted Recipes</SectionHeader>
          <SectionText>
            Contribute by{" "}
            <RecipeHeaderLink href="/recipe/create">
              creating a recipe
            </RecipeHeaderLink>
          </SectionText>
          <RecipeCardWrapper>
            {recipeList?.map((recipe, index) => (
              <RecipeCard href={`/recipe/view/${recipe.id}`} key={index}>
                <div className="recipe-card">
                  <RecipeHeader>{recipe.name}</RecipeHeader>
                  <RecipeDescription>
                    {recipe.ingredients.length} Ingredient
                    {recipe.ingredients.length > 1 ? "s" : ""},{" "}
                    {recipe.instructions.length} Step
                    {recipe.instructions.length > 1 ? "s" : ""}
                  </RecipeDescription>

                  <RecipeThumbnail src={recipe.image} />
                </div>
              </RecipeCard>
            ))}
          </RecipeCardWrapper>
        </Content>
      </Section>
    </Page>
  );
};

export default RecipeApp;
