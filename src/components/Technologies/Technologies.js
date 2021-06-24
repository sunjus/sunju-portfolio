import React from "react";
import { DiFirebase, DiReact, DiZend, DiSass, DiNodejs } from "react-icons/di";
import { SiTypescript, SiJest, SiMongodb } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  ListIcon,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Through consistent daily practice, I’ve managed to develop a skill set
      that covers both ends of the spectrum, from the front-end to the backend.
      Currently, my stronger side is front-end development.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListIcon src="/images/frontend.png" />
          <ListParagraph>
            I build interactive and responsive user interface using modern
            web-technologies and tools such as React.js, Typescript and Sass.
          </ListParagraph>
          <picture>
            <DiReact size="4rem" />
            <DiSass size="3.5rem" />
            <SiTypescript size="3rem" />
            <SiJest size="3rem" />
          </picture>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListIcon src="/images/backend.png" />
          <ListParagraph>
            I use javascript on the server-side by utilizing its run-time
            node.js. Also, I have experience in interacting with the NoSQL
            database MongoDB.
          </ListParagraph>
          <picture>
            <DiFirebase size="4rem" />
            <DiNodejs size="4rem" />
            <SiMongodb size="4rem" />
          </picture>
        </ListContainer>
      </ListItem>
      {/*<ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          I have experience with tools like Figma
        </ListParagraph>
      </ListContainer>
      </ListItem>*/}
    </List>
  </Section>
);

export default Technologies;
