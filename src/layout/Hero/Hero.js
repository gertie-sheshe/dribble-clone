import React from "react";
import Image from "next/image";

import HeroIcon from "@dribble/assets/hero.svg";
import {
  HeroContainer,
  TitleSection,
  ImageSection,
  Description,
  HeroSection,
} from "./HeroStyles";
import { H1 } from "@dribble/theme/typography";
import Button from "@dribble/ui/Button";

function Hero() {
  return (
    <HeroContainer>
      <HeroSection>
        <ImageSection>
          <Image src={HeroIcon} alt="hero" width={300} height={300} />
        </ImageSection>
        <TitleSection>
          <H1>Explore the world’s leading design portfolios</H1>
          <Description>
            Millions of designers and agencies around the world showcase their
            portfolio work on Dribbble - the home to the world’s best design and
            creative professionals.
          </Description>
          <Button variant="primary">Sign Up</Button>
        </TitleSection>
      </HeroSection>
    </HeroContainer>
  );
}

export default Hero;
