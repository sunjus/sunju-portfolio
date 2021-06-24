import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome to <br />A creative, adventurous, and curious Front-End
        Developer's Portfolio.
      </SectionTitle>
      <SectionText>
        I am Sunju, a Front-end Web Developer specialized in React. <br />I love
        building clean and intuitive interfaces, conversations about design and
        delivering features that help simplify a user's experience.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
