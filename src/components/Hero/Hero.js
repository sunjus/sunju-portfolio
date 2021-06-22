import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome to <br />
        My Personal Portfolio.
      </SectionTitle>
      <SectionText>
        I am a Front-end Web Developer specialized in React. <br />
        I love building clean and intuitive interfaces, conversations about design and delivering features
        that help simplify a user's experience.
      </SectionText>
      <Button href='#about' /*onClick={() => window.location = 'https://google.com'}*/>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;