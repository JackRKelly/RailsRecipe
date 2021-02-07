import { createGlobalStyle } from "styled-components";
import { breakpoint, color } from "../util";

export const GlobalStyle = createGlobalStyle`
 :root {
    --white: ${color.white};
    --primary:  ${color.primary};
    --secondary: ${color.secondary};
    --black: ${color.black};
    --gray: ${color.gray};
  }

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  font-family: "Montserrat", sans-serif;
  color: var(--black);
  background-color: var(--white);
  @media (min-width: ${breakpoint.laptopL}) {
    font-size: 22px;
  }
  @media (max-width: ${breakpoint.laptopL}) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoint.laptop}) {
    font-size: 18px;
  }
  @media (max-width: ${breakpoint.mobileL}) {
    font-size: 16px;
  }
}
`;
