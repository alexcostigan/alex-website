import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import { DownArrow } from "../../components/downArrow";
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

const MotivationalText = styled.h1`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 55%;
  transform: translateX(-50%);
`;

const Content = styled.div`
   z-index: 3;
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
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    position: relative;
    right: -50%;
    top: -50%;
`

export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
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
            <MotivationalText>Alex Costigan - <br />
            I Like to ... 
            <Typical
                steps={['Building things', 1000, 'Creating things', 1000, 'Designing things', 1000]}
                loop={Infinity}
                wrapper='b'
                styles={{color: "white"}}
            />
            </MotivationalText>
            <ImgWrap>
                <Img src={Image} />
            </ImgWrap>
            <Marginer direction="vertical" margin="2em" />
        </Content>
        <DownArrowContainer onClick={scrollToNextSection}>
              <DownArrow />
        </DownArrowContainer>
      </TopContainer>
    </Element>
  );
}
