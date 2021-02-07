import { createGlobalStyle } from "styled-components";
import { breakpoint, color } from "../util";

const GlobalStyle = createGlobalStyle`
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

nav {
  background-color: var(--white);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 300;
  ul {
    max-width: 1920px;
    @media (min-width: 800px) {
      width: 80%;
    }
    @media (max-width: 800px) {
      width: 85%;
    }
    @media (max-width: 500px) {
      width: 90%;
    }
    margin: auto;
    display: flex;
    font-weight: bold;
    flex-direction: row;
    font-size: 20px;
    justify-content: space-between;
    padding: 10px 0;
    li {
      display: inline-block;
      ul {
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        li {
          display: inline-block;
          position: relative;
          a {
            text-decoration: none;
            color: var(--primary);
            padding: 16px 10px;
            margin: 0 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
`;

export default GlobalStyle;
