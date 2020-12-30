import React from 'react'
import styled from 'styled-components'
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiRedux } from "react-icons/si";
const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : 'rgba(58, 38, 122, 0.7)')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

    }
`

const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 60px;
    line-height: 1.1;
    font-weight: 600;
    font-family: 'Jura';
    color: ${({ lightText }) => (lightText ? '#3a267a' : '#010606')};

    @media screen and (max-width) {
        font-size: 32px;
    }

`

const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 25px;
    font-family: 'Patrick Hand';
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#3a267a')};
`


const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headline: 'ABOUT ME',
  description: 'I am a motivated individual who always wants to learn something new, which I believe is very important for this industry. I’ve had a passion for tech since a young age and only in the last year have I made it in to a career rather than just a hobby. I love this industry and I love all things technology related, I am constantly trying to better myself by keeping up to date with new technologies, whether thats watching videos, reading articles or attending events.',
  imgStart: false,
  img: require('../../assets/illustrations/svg1.svg'),
  alt: 'img',
  dark: true,
  primary: true,
  darkText: false
}

const Skills = styled.div`
  color: #3a267a;
  font-size: 80px;
  transition: all 200ms ease-in-out;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`;


export function AboutMe({lightBg, id, img, imgStart, topLine, lightText, headline, darkText, description, alt}) {

  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
            </TextWrapper>
          </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          <Skills><FaReact /></Skills>
          <Skills> <FaCss3 /> </Skills>
          <Skills><SiJavascript /></Skills>
          <Skills><SiRedux /></Skills>
          <Skills><FaHtml5 /></Skills>
          <Skills><SiTypescript /></Skills>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>  
  );
}
