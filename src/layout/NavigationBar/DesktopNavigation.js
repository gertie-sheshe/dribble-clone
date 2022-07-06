import React from "react";
import Image from "next/image";
import Logo from "@dribble/assets/dribbble.jpeg";
import { menu } from "@dribble/lib";

import {
  DesktopNavigationContainer,
  LogoSection,
  NavSection,
  NavActions,
  ShareButton,
  SignInLink,
  List,
  Link,
  ListItem,
} from "./NavigationStyles";

function DesktopNavigation() {
  if (!menu.length) {
    return null;
  }
  return (
    <DesktopNavigationContainer>
      <LogoSection>
        <Image src={Logo} width={88} height={78} alt="Dribble Logo" />
      </LogoSection>
      <NavSection>
        <List>
          {menu.map((menu) => (
            <ListItem key={menu.title}>
              <Link href={menu.href}>{menu.title}</Link>
            </ListItem>
          ))}
        </List>
        <NavActions>
          <SignInLink href="">Sign In</SignInLink>
          <ShareButton variant="primary">Share My Work</ShareButton>
        </NavActions>
      </NavSection>
    </DesktopNavigationContainer>
  );
}

export default DesktopNavigation;
