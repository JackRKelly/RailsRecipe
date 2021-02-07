import * as React from "react";
import { useEffect, useState } from "react";
import { Recipe, RouteParameter } from "../../models/recipe";
import {
  Content,
  CreateButton,
  CreateForm,
  Input,
  InputGrid,
  InputWrapper,
  IterableAction,
  IterableButton,
  IterableInput,
  IterableInputWrapper,
  IterableLabel,
  IterableLabelWrapper,
  IterableSVG,
  Label,
  Page,
  Section,
  SectionHeader,
  SectionText,
} from "../components/Styled";
import { toast } from "react-toastify";
import ReactTooltip from "react-tooltip";

export const EditRecipe: React.FC = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [instructions, setinstructions] = useState([""]);
  const [ingredients, setIngredients] = useState([""]);

  return (
    <Page>
      <Section>
        <Content id="recipe">
          <ReactTooltip />
          <SectionHeader>Edit Recipe</SectionHeader>
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
                      data-tip="Remove this ingredient"
                      onClick={() => {
                        if (!(ingredients.length <= 1)) {
                          setIngredients((old) => {
                            let array = Array.from(old);

                            array.splice(index, 1);

                            return array;
                          });
                        } else {
                          toast.error("Must have at least 1 ingredient.");
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
                      data-tip="Remove this instruction"
                      onClick={() => {
                        if (!(instructions.length <= 1)) {
                          setinstructions((old) => {
                            let array = Array.from(old);

                            array.splice(index, 1);

                            return array;
                          });
                        } else {
                          toast.error("Must have at least 1 instruction.");
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
