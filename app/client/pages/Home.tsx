import * as React from "react";
import {
  Content,
  Page,
  Section,
  SectionHeader,
  SectionText,
} from "../components/Styled";

export const Home: React.FC = () => {
  return (
    <Page>
      <Section>
        <Content>
          <SectionHeader>Rails Recipe</SectionHeader>
          <SectionText>
            Recipe app built with ruby on rails and react typescript
          </SectionText>
        </Content>
      </Section>
    </Page>
  );
};
