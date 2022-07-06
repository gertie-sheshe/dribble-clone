import React from "react";
import Image from "next/image";
import Logo from "@dribble/assets/dribbble.jpeg";
import MenuIcon from "@dribble/assets/menu_icon.svg";

import { MobileNavigationContainer, Link } from "./NavigationStyles";

function MobileNavigation() {
  return (
    <MobileNavigationContainer>
      <Image src={MenuIcon} width={30} height={30} alt="Menu Icon" />
      <Image src={Logo} width={88} height={78} alt="Dribble Logo" />
      <Link>Sign In</Link>
    </MobileNavigationContainer>
  );
}

export default MobileNavigation;
