import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
  Through consistent daily practice, I’ve managed to develop a skill set that covers both ends of the spectrum, 
  from the front-end to the backend. Currently, my stronger side is front-end development.
  </SectionText>
  <List>
    <ListItem>
      <picture>
        <DiReact size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
        I build interactive and responsive user interface using modern web-technologies and tools such as React.js, Typescript and Sass.
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiFirebase size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
        I use javascript on the server-side by utilizing its run-time node.js. Also, I have experience in interacting with the NoSQL database MongoDB.
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiZend size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          I have experience with tools like Figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  <SectionDivider colorAlt />
</Section>
);

export default Technologies;
