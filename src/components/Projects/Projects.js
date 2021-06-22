import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../data/data';

const Projects = () => (
  <Section>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag,index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source}>CODE</ExternalLinks>
            <ExternalLinks href={visit}>LIVE DEMO</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>  
  </Section>
);

export default Projects;