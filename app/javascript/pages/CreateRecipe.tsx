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

import styled from "styled-components";
import { breakpoint } from "../util";

const CreateForm = styled.form``;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5em 1.5em;
  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const InputWrapper = styled.div``;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5em;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  border-radius: 4px;
  font-size: 1em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  padding: 0.5em;
`;

const IterableInput = styled(Input)``;

const IterableLabel = styled(Label)`
  margin-bottom: 0;
`;

const IterableAction = styled.div`
  position: absolute;
  right: 10px;
  opacity: 0;
  pointer-events: none;
  z-index: 5;
  top: 50%;
  transform: translateY(-50%);
  transition: all ease-in-out 200ms;
  cursor: pointer;
`;

const IterableButton = styled.button`
  border: none;
  background-color: var(--primary);
  color: var(--white);
  cursor: pointer;
  border-radius: 4px;
  padding: 0.5em 0.5em;
  font-size: 0.8em;
`;

const IterableSVG = styled.svg`
  display: block;
`;

const IterableInputWrapper = styled.div`
  margin-bottom: 1em;
  position: relative;
  &:hover ${IterableAction} {
    opacity: 1;
    pointer-events: all;
  }
`;

const IterableLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const CreateButton = styled(IterableButton)`
  font-size: 1em;
  margin-top: 0.5em;
`;

export const CreateRecipe: React.FC = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [instructions, setinstructions] = useState([""]);
  const [ingredients, setIngredients] = useState([""]);

  return (
    <Page>
      <Section>
        <Content id="recipe">
          <SectionHeader>Create Recipe</SectionHeader>
          <SectionText>Fill out the form below to create a recipe.</SectionText>
          <CreateForm
            onSubmit={(e) => {
              e.preventDefault();

              const token = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");

              fetch("/api/v1/recipes/create", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "X-CSRF-Token": token,
                },
                credentials: "same-origin",
                body: JSON.stringify({
                  name,
                  image: image.length === 0 ? undefined : image,
                  instructions,
                  ingredients,
                }),
              }).then((res) => {
                if (res.status === 200) {
                  res.json().then((recipe: Recipe) => {
                    location.href = `/recipe/view/${recipe.id}`;
                  });
                }
              });
            }}
          >
            <InputGrid>
              <InputWrapper>
                <Label>Name</Label>
                <Input
                  required
                  placeholder="Grilled Cheese"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Image</Label>
                <Input
                  required
                  placeholder="https://google.com/img/grilledcheese.jpg"
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <IterableLabelWrapper>
                  <IterableLabel>Ingredients</IterableLabel>
                  <IterableButton
                    type="button"
                    onClick={() => {
                      setIngredients((old) => [...old, ""]);
                    }}
                  >
                    Add new ingredient
                  </IterableButton>
                </IterableLabelWrapper>

                {ingredients.map((ingredient, index) => (
                  <IterableInputWrapper key={index}>
                    <IterableInput
                      required
                      key={`ingredient-${index}`}
                      placeholder="Cheese"
                      value={ingredient}
                      onChange={(e) => {
                        setIngredients((old) => {
                          let array = Array.from(old);

                          array[index] = e.target.value;

                          return array;
                        });
                      }}
                    />
                    <IterableAction
                      onClick={() => {
                        if (!(ingredients.length <= 1)) {
                          setIngredients((old) => {
                            let array = Array.from(old);

                            array.splice(index, 1);

                            return array;
                          });
                        } else {
                          alert("Must have 1 ingredient.");
                        }
                      }}
                    >
                      <IterableSVG
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                      </IterableSVG>
                    </IterableAction>
                  </IterableInputWrapper>
                ))}
              </InputWrapper>
              <InputWrapper>
                <IterableLabelWrapper>
                  <IterableLabel>Instructions</IterableLabel>
                  <IterableButton
                    type="button"
                    onClick={() => {
                      setinstructions((old) => [...old, ""]);
                    }}
                  >
                    Add new instruction
                  </IterableButton>
                </IterableLabelWrapper>

                {instructions.map((step, index) => (
                  <IterableInputWrapper key={index}>
                    <IterableInput
                      required
                      key={`instructions-${index}`}
                      placeholder="Melt Cheese"
                      value={step}
                      onChange={(e) => {
                        setinstructions((old) => {
                          let array = Array.from(old);

                          array[index] = e.target.value;

                          return array;
                        });
                      }}
                    />
                    <IterableAction
                      onClick={() => {
                        if (!(instructions.length <= 1)) {
                          setinstructions((old) => {
                            let array = Array.from(old);

                            array.splice(index, 1);

                            return array;
                          });
                        } else {
                          alert("Must have 1 instruction.");
                        }
                      }}
                    >
                      <IterableSVG
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                      </IterableSVG>
                    </IterableAction>
                  </IterableInputWrapper>
                ))}
              </InputWrapper>
            </InputGrid>
            <CreateButton type="submit">Create Recipe</CreateButton>
          </CreateForm>
        </Content>
      </Section>
    </Page>
  );
};
