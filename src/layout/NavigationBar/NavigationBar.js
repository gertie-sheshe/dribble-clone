import React from "react";
import Section from "@dribble/layout/Section";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import { useMediaQuery } from "@dribble/hooks/useMediaQuery";

import { devices } from "@dribble/theme/theme";

function NavigationBar() {
  const isDesktop = useMediaQuery(`(min-width: ${devices.lg})`);

  return (
    <Section>
      {isDesktop ? <DesktopNavigation /> : <MobileNavigation />}
    </Section>
  );
}

export default NavigationBar;
