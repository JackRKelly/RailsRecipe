import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationWrapper = styled.nav`
  background-color: var(--white);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 300;
`;

const SublistWrapper = styled.ul`
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
`;

const Sublist = styled.li`
  display: inline-block;
`;

const LinkList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const LinkListItem = styled.li`
  display: inline-block;
  position: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  padding: 16px 10px;
  margin: 0 5px;
  cursor: pointer;
`;

const FirstLink = styled(StyledLink)`
  padding-left: 0;
  margin-left: 0;
`;

const LastLink = styled(StyledLink)`
  padding-right: 0;
  margin-right: 0;
`;

export const Navigation = () => {
  return (
    <NavigationWrapper id="navigation">
      <SublistWrapper>
        <Sublist>
          <LinkList>
            <LinkListItem>
              <FirstLink to="/" className="first">
                RailsRecipe
              </FirstLink>
            </LinkListItem>
          </LinkList>
        </Sublist>
        <Sublist>
          <LinkList>
            <LinkListItem>
              <StyledLink to="/">Home</StyledLink>
            </LinkListItem>
            <LinkListItem>
              <LastLink to="/recipes">Recipes</LastLink>
            </LinkListItem>
          </LinkList>
        </Sublist>
      </SublistWrapper>
    </NavigationWrapper>
  );
};
