import React from "react";
import Section from "@dribble/layout/Section";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

function NavigationBar() {
  return (
    <Section>
      <MobileNavigation />
    </Section>
  );
}

export default NavigationBar;
