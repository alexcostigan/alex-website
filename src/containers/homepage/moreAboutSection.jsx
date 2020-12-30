import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

import experienceImg from "../../assets/illustrations/svg.svg";

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const ExperienceImg = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;
  
  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;
const MTitle = styled.h2`
  color: #000;
  font-size: 50px;
  font-weight: 800;
  margin: 5px 0;
  font-family: 'Amatic SC';
  @media screen and (max-width: 480px) {
    margin-top: 1.5em;
  }
`;
const Title = styled.h2`
  color: #000;
  font-size: 35px;
  font-weight: 800;
  margin: 5px 0;
  font-family: 'Amatic SC';

  @media screen and (max-width: 480px) {
    margin-top: 1.5em;
  }

`;

const Details = styled.p`
  color: #7a7a7a;
  font-size: 21px;
  text-align: center;
  font-family: 'Patrick Hand';
  max-width: 55%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
      <MTitle>Experience</MTitle>
      <DescriptionContainer>
        <Title>React Developer: The Co-Operative Bank</Title>
        <Details>Jan 2020 - Present</Details>
        <Title>Software Developer - Training: Code Nation</Title>
        <Details>Feb 2020 - May 2020</Details>
        <Title>Cyber Technologist - Training: Code Nation</Title>
        <Details>Jul 2019 - Dec 2019</Details>
        <ExperienceImg src={experienceImg} />
      </DescriptionContainer>
    </MoreAboutContainer>
  );
}
