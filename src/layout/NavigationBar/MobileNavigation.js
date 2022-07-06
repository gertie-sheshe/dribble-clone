import React from "react";
import Image from "next/image";
import Logo from "@dribble/assets/dribbble.jpeg";
import MenuIcon from "@dribble/assets/menu_icon.svg";

import { NavigationContainer, Link } from "./NavigationStyles";

function MobileNavigation() {
  return (
    <NavigationContainer>
      <Image src={MenuIcon} width={30} height={30} alt="Menu Icon" />
      <Image src={Logo} width={88} height={78} alt="Dribble Logo" />
      <Link>Sign In</Link>
    </NavigationContainer>
  );
}

export default MobileNavigation;
