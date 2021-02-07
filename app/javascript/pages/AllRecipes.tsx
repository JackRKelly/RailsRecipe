import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Recipe } from "../../models/recipe";
import * as moment from "moment";
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

const RecipeDescriptionNoMargin = styled(RecipeDescription)`
  margin: 0;
`;

const RecipeHeaderLink = styled.a`
  text-decoration: none;
  color: var(--primary);
`;

export const AllRecipes: React.FC = () => {
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
          {recipeList?.length === 0 ? (
            <SectionText>No recipes found.</SectionText>
          ) : (
            <RecipeCardWrapper>
              {recipeList?.map((recipe, index) => (
                <RecipeCard href={`/recipe/view/${recipe.id}`} key={index}>
                  <div className="recipe-card">
                    <RecipeHeader>{recipe.name}</RecipeHeader>
                    <RecipeDescriptionNoMargin>
                      <b>{recipe.ingredients.length}</b> Ingredient
                      {recipe.ingredients.length > 1 ? "s" : ""},{" "}
                      <b>{recipe.instructions.length}</b> Step
                      {recipe.instructions.length > 1 ? "s" : ""}
                    </RecipeDescriptionNoMargin>
                    <RecipeDescription>
                      Posted {moment(recipe.created_at).fromNow()}
                    </RecipeDescription>
                    <RecipeThumbnail src={recipe.image} />
                  </div>
                </RecipeCard>
              ))}
            </RecipeCardWrapper>
          )}
        </Content>
      </Section>
    </Page>
  );
};
