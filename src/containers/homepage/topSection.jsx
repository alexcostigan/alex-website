import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import Video from '../../components/video/video.mp4'
import Image from '../../assets/illustrations/main.svg'
import Typical from 'react-typical'

const TopContainer = styled.div`
  background: #3a267a;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

`

const BackgroundFilter = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const MText = styled.h1`
    margin-top: 24px;
    color: #fff;
    font-size: 80px;
    text-align: center;
    max-width: 600px;
    font-family: 'Indie Flower';
    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    @media screen and (max-width: 480px) {
        font-size: 50px;
    }
`;

const Text = styled.h1`
    margin-top: 24px;
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    text-align: center;
    max-width: 600px;
    font-family: 'Amatic SC';
    @media screen and (max-width: 768px) {
        font-size: 50px;
    }

    @media screen and (max-width: 480px) {
        font-size: 40px;
    }
`;


const Content = styled.div`
  z-index: 2;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

const Img = styled.img`
    width: 80%;
    display: flex;
    justify-content: center;
    padding-right: 0;
    /* position: relative;
    right: -80%;
    top: -50%; */

    @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
  }
`

export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("aboutMe", { smooth: true, duration: 1500 });
  };

  return (
    <Element name="topSection">
      <TopContainer>
        <BackgroundFilter>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </BackgroundFilter>
        <Content>
          <Marginer direction="vertical" margin="8em" />
            <Marginer direction="vertical" margin="4em" />
            <MText>ALEX COSTIGAN<Text>Software Developer</Text></MText>
            <Text>I Like to ... 
            <Typical
                steps={['Build things', 1000, 'Create things', 1000, 'Design things', 1000]}
                loop={Infinity}
                wrapper='b'
                styles={{color: "white"}}
            />
            </Text>
            <ImgWrap>
                <Img src={Image} small/>
            </ImgWrap>
            <Marginer direction="vertical" margin="2em" />
        </Content>
      </TopContainer>
    </Element>
  );
}
