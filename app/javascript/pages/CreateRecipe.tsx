import * as React from "react";
import { useEffect, useState } from "react";
import { IRecipe, IRouteParameter } from "../../models/recipe";
import {
  Content,
  Page,
  Section,
  SectionHeader,
  SectionText,
} from "../components/Styled";

import styled from "styled-components";

const RecipeView: React.FC = () => {
  let [recipe, setRecipe] = useState<IRecipe>();

  useEffect(() => {
    console.log(recipe);
  }, [recipe]);

  return (
    <Page>
      <Section>
        <Content id="recipe">
          <SectionHeader>Create Recipe</SectionHeader>
          <SectionText>Fill out the form below to create a recipe.</SectionText>
        </Content>
      </Section>
    </Page>
  );
};

export default RecipeView;
