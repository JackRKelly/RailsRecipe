import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IRecipe } from "../../models/recipe";
import { Content, Page, Section, SectionHeader } from "../components/Styled";

const RecipeCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 64px 32px;
`;

const RecipeCard = styled.div`
  background-color: var(--white);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  padding: 1em;
  border-radius: 4px;
`;

const RecipeThumbnail = styled.img`
  width: 100%;
`;

const RecipeHeader = styled.h3`
  margin-top: 0;
`;

const Recipe: React.FC = () => {
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
    <Page>
      <Section>
        <Content>
          <SectionHeader>Recently Posted Recipes</SectionHeader>

          <RecipeCardWrapper>
            {recipeList?.map((recipe, index) => (
              <RecipeCard key={index}>
                <a href={`/recipe/view/${recipe.id}`}>
                  <div className="recipe-card">
                    <RecipeHeader>{recipe.name}</RecipeHeader>
                    <RecipeThumbnail src={recipe.image} />
                  </div>
                </a>
              </RecipeCard>
            ))}
          </RecipeCardWrapper>
        </Content>
      </Section>
    </Page>
  );
};

export default Recipe;
