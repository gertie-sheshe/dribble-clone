import React from "react";
import styled from "styled-components";
import Button from "@dribble/ui/Button";
import Image from "next/image";
import Logo from "@dribble/assets/dribbble.jpeg";

function MobileNavigation() {
  return (
    <NavigationContainer>
      <Button>Menu</Button>
      <Image src={Logo} width={88} height={78} alt="Dribble Logo" />
      <Button>Sign In</Button>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export default MobileNavigation;
