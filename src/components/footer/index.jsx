import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
  position: relative;
`;

const MotivationalText = styled.h1`
  font-size: 25px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
`;

const MotivationalText2 = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
`;

const AccessibilityContainer = styled.div`
  width: 80%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  &:hover {
    color: #adadad;
  }
`;

const Link = styled.a`
  color: #fff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 14px;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    color: #adadad;
  }
`;

const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
`;

export function Footer(props) {
  return (
    <FooterContainer>
      <Marginer direction="vertical" margin="5em" />
      <Marginer direction="vertical" margin="1em" />
      <MotivationalText>Contact me:</MotivationalText>
      <MotivationalText2>alexcostigan118@hotmail.com</MotivationalText2>
      <Marginer direction="vertical" margin="1em" />
      <Marginer direction="vertical" margin="5em" />
      <AccessibilityContainer>
        <PrivacyContainer>
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
          <Link>Contact</Link>
        </PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <a href="https://twitter.com/codingWithAlex" target= "_blank" >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </SocialIcon>
          <SocialIcon>
          <a href= "https://www.linkedin.com/in/alex-costigan/" target= "_blank" >
            <FontAwesomeIcon 
            icon={faLinkedin}
            
            /> </a>
          </SocialIcon>
          <SocialIcon>
          <a href="https://github.com/alexcostigan" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          </SocialIcon>
        </SocialContainer>
      </AccessibilityContainer>
      <RightsReserved>&copy; 2020 Alex Costigan All rights reserved</RightsReserved>
    </FooterContainer>
  );
}
