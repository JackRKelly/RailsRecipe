import * as React from "react";
import {
  Content,
  Page,
  Section,
  SectionHeader,
  SectionText,
} from "../components/Styled";

const Home: React.FC = () => {
  return (
    <Page>
      <Section>
        <Content>
          <SectionHeader>Hello</SectionHeader>
          <SectionText>
            Recipe app built with ruby on rails and react typescript
          </SectionText>
        </Content>
      </Section>
    </Page>
  );
};

export default Home;
