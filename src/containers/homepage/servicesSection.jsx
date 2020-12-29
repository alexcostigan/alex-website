import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";
import { DownArrow } from "../../components/downArrow";
import Image from '../../assets/illustrations/svg2.svg'
import Image1 from '../../assets/illustrations/svg3.svg'
import Image2 from '../../assets/illustrations/svg4.svg'
import Image3 from '../../assets/illustrations/svg5.svg'


const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 55%;
  transform: translateX(-50%);
`;


export function ServicesSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };
  return (
    <>
    <ServicesContainer name="servicesSection">
      <SectionTitle>Portfolio</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="CodePen Clone"
        description="Here I recreated CodePen where I used Code Mirror to make an real time editor"
        link={
          <a href= "https://github.com/alexcostigan/codepen-clone" target= "_blank" style={{textDecoration: "none", color: "white"}}>GitHub</a>
        }
        demo={
          <a href= "https://alexcostigan.github.io/codepen-clone/" target= "_blank" style={{textDecoration: "none", color: "white"}} >Live Demo</a>
        }
        imgUrl={Image}
      /> 
      <OurSerivce
        title="Cocktail Shaker"
        description=" Here I used the Cocktail API to create an app where you press a button and you get a random cocktail and it's ingredients."
        link={
          <a href= "https://github.com/alexcostigan/cocktail-app" target= "_blank" style={{textDecoration: "none", color: "white"}}>GitHub</a>
        }
        demo={
          <a href= "https://alexcostigan.github.io/cocktail-app/" target= "_blank" style={{textDecoration: "none", color: "white"}} >Live Demo</a>
        }
        imgUrl={Image1}
        isReversed
      />
      <OurSerivce
        title="Project"
        description="Project Description"
        link={
          <a href= "" target= "_blank" style={{textDecoration: "none", color: "white"}}>GitHub</a>
        }
        demo={
          <a href= "" target= "_blank" style={{textDecoration: "none", color: "white"}} >Live Demo</a>
        }
        imgUrl={Image2}
      />
       <OurSerivce
        title="Project"
        description="Project Description"
        link={
          <a href= "" target= "_blank" style={{textDecoration: "none", color: "white"}}>GitHub</a>
        }
        demo={
          <a href= "" target= "_blank" style={{textDecoration: "none", color: "white"}} >Live Demo</a>
        }
        imgUrl={Image3}
      />
    </ServicesContainer>
    </>
  );
}
