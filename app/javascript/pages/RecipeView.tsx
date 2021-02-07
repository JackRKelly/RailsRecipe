import * as React from "react";
import { useEffect, useState } from "react";
import { Recipe, RouteParameter } from "../../models/recipe";
import { Content, Page, Section, SectionHeader } from "../components/Styled";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { toast } from "react-toastify";

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

const CopyToClipboard = styled.a`
  padding-left: 10px;
  cursor: pointer;
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
          <ImageBanner src={recipe?.image} alt={recipe?.name} />
          <Section>
            <Content id="recipe">
              <SectionHeader>
                {recipe.name}
                <CopyToClipboard
                  onClick={() => {
                    navigator.clipboard
                      .writeText(window.location.href)
                      .then(() => {
                        toast.success("Recipe link copied to clipboard.");
                      })
                      .catch((err) => {
                        toast.error("Recipe link copied to clipboard.");
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
        </>
      ) : (
        <LoadingWrapper>
          <LoadingSpinner />
        </LoadingWrapper>
      )}
    </Page>
  );
};
