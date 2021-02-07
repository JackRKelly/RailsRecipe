import styled from "styled-components";
import { breakpoint } from "../util";

export const Content = styled.div`
  margin: auto;
  max-width: 1800px;
  width: 80%;
  @media (max-width: 800px) {
    width: 85%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const SectionHeader = styled.h2`
  margin: 0 auto 0.5em;
  font-size: 2.25em;
  max-width: 1200px;
  text-align: center;
  line-height: 1;
  color: var(--black);
  @media (max-width: ${breakpoint.mobileL}) {
    font-size: 2em;
  }
`;

export const SectionText = styled.p`
  margin: 0 auto 1em;
  font-size: 1.15em;
  max-width: 1200px;
  text-align: center;
  color: var(--gray);
`;

export const Section = styled.section`
  padding: 2em 0;
`;

export const Page = styled.main`
  padding-top: 43px;
`;

export const CreateForm = styled.form``;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5em 1.5em;
  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const InputWrapper = styled.div``;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5em;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  border-radius: 4px;
  font-size: 1em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  padding: 0.5em;
`;

export const IterableInput = styled(Input)``;

export const IterableLabel = styled(Label)`
  margin-bottom: 0;
`;

export const IterableAction = styled.div`
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

export const IterableButton = styled.button`
  border: none;
  background-color: var(--primary);
  color: var(--white);
  cursor: pointer;
  border-radius: 4px;
  padding: 0.5em 0.5em;
  font-size: 0.8em;
`;

export const IterableSVG = styled.svg`
  display: block;
`;

export const IterableInputWrapper = styled.div`
  margin-bottom: 1em;
  position: relative;
  &:hover ${IterableAction} {
    opacity: 1;
    pointer-events: all;
  }
`;

export const IterableLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const CreateButton = styled(IterableButton)`
  font-size: 1em;
  margin-top: 0.5em;
`;
