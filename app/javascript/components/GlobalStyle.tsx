import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  #root {
    display: flex;
    justify-content: center;
  }
}

nav {
  background-color: white;
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
    text-transform: uppercase;
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
            color: black;
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
