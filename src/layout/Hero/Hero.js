import React from "react";
import Image from "next/image";

import HeroIcon from "@dribble/assets/hero.svg";
import { HeroContainer } from "./HeroStyles";
import { H1 } from "@dribble/theme/typography";

function Hero() {
  return (
    <HeroContainer>
      <H1>Explore the world’s leading design portfolios</H1>
      <Image src={HeroIcon} alt="hero" width={200} height={200} />
    </HeroContainer>
  );
}

export default Hero;
