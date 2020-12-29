import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { MoreAboutSection } from "./moreAboutSection";
import { ReviewsSection, homeObjOne } from "./reviewsSection";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage(props) {
  return (
    <PageContainer>
      <TopSection />
      <ReviewsSection {...homeObjOne}/>
      <ServicesSection />
      <Marginer direction="vertical" margin="2em" />
      <MoreAboutSection />
      <Marginer direction="vertical" margin="8em" />
      <Footer />
    </PageContainer>
  );
}
