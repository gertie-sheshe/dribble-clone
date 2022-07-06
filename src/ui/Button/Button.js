import React from "react";
import { Button as BaseButton } from "./ButtonStyles";

function Button({ children, onClick, variant, className }) {
  return (
    <BaseButton className={className} variant={variant} onClick={onClick}>
      {children}
    </BaseButton>
  );
}

export default Button;
