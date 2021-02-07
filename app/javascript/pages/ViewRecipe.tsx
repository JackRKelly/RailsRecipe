import * as React from "react";
import { useEffect, useState } from "react";
import { Recipe, RouteParameter } from "../../models/recipe";
import {
  Content,
  Page,
  Section,
  SectionHeader,
  SectionText,
} from "../components/Styled";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { toast } from "react-toastify";
import ReactTooltip from "react-tooltip";
import * as moment from "moment";

const ImageBanner = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const spinner = keyframes`
  from{
    transform:rotate(0deg)
  }
  to{
    transform:rotate(360deg)
  }
`;

const LoadingSpinner = styled.div`
  border: 0.2rem solid var(--gray);
  width: 2rem;
  height: 2rem;
  border-top-color: var(--secondary);
  border-radius: 50%;
  animation: ${spinner} 1s linear 0s infinite;
`;

const StyledSVG = styled.svg`
  height: 0.75em;
  width: 0.75em;
`;

const ActionBase = styled.a`
  padding: 0 5px;
  cursor: pointer;
`;

const CopyToClipboard = styled(ActionBase)`
  padding-left: 15px;
`;
const DeleteRecipe = styled(ActionBase)``;

const IngredientListItem = styled.li`
  margin-bottom: 5px;
`;

const InstructionListItem = styled.li`
  margin-bottom: 10px;
`;

export const RecipeView: React.FC = () => {
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
      {recipe ? (
        <>
          <ReactTooltip />
          <ImageBanner src={recipe.image} alt={recipe.name} />
          <Section>
            <Content id="recipe">
              <SectionHeader>
                {recipe.name}
                <CopyToClipboard
                  data-tip="Copy recipe to clipboard"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(window.location.href)
                      .then(() => {
                        toast.success("Recipe link copied to clipboard.");
                      })
                      .catch((err) => {
                        toast.error(err);
                      });
                  }}
                >
                  <StyledSVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
                  </StyledSVG>
                </CopyToClipboard>
                <DeleteRecipe
                  data-tip="Delete this recipe"
                  onClick={() => {
                    const token = document
                      .querySelector('meta[name="csrf-token"]')
                      .getAttribute("content");

                    fetch(`/api/v1/recipes/destroy/${id}`, {
                      method: "DELETE",
                      headers: {
                        "X-CSRF-Token": token,
                      },
                      credentials: "same-origin",
                    }).then(() => {
                      location.href = `/recipes`;
                    });
                  }}
                >
                  <StyledSVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z" />
                  </StyledSVG>
                </DeleteRecipe>
              </SectionHeader>
              <SectionText>
                Posted {moment(recipe.created_at).fromNow()}
              </SectionText>
              <div className="recipe">
                <p>Ingredients:</p>
                <ul>
                  {recipe.ingredients.map((item, index) => (
                    <IngredientListItem key={index}>{item}</IngredientListItem>
                  ))}
                </ul>
                <p>Instructions:</p>
                <ol>
                  {recipe.instructions.map((step, index) => (
                    <InstructionListItem key={index}>
                      {step}
                    </InstructionListItem>
                  ))}
                </ol>
              </div>
            </Content>
          </Section>
        </>
      ) : (
        <LoadingWrapper>
          <LoadingSpinner />
        </LoadingWrapper>
      )}
    </Page>
  );
};
