import React from "react";
import { SectionContainer } from "./SectionStyles";

function Section({ className, children }) {
  return <SectionContainer className={className}>{children}</SectionContainer>;
}

export default Section;
