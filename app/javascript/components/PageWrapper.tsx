import styled from "styled-components";

const PageWrapper = styled.main`
  padding-top: 45px;
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
`;

export default PageWrapper;
