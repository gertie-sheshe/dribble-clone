import React from "react";
import Button from "@dribble/ui/Button";
import Image from "next/image";
import Logo from "@dribble/assets/dribbble.jpeg";
import { NavigationContainer } from "./NavigationStyles";

function MobileNavigation() {
  return (
    <NavigationContainer>
      <Button>Menu</Button>
      <Image src={Logo} width={88} height={78} alt="Dribble Logo" />
      <Button>Sign In</Button>
    </NavigationContainer>
  );
}

export default MobileNavigation;
