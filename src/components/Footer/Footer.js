import React from "react";
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaWhatsapp, FaMailBulk } from "react-icons/fa";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            <FaWhatsapp size="3rem" />
          </LinkTitle>
          <LinkItem href="tel:044--954-9885">044-954-9885</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            <FaMailBulk size="3rem" />
          </LinkTitle>
          <LinkItem href="mailto:sunjus.dev@gmail.com">
            sunjus.dev@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>An enthusiasm for creating @2021 sunjus</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/sunjus">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/sunjus">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://studio.youtube.com/channel/UCe5RitlSugA1LSC1SlFcXZQ">
            <AiFillYoutube size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
