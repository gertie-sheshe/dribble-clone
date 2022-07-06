import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  padding: 10px 16px;
  border-radius: 8px;
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary.main
      : props.theme.colors.primary.dark};
  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.pink.main
      : props.theme.colors.primary.main};
  border: ${(props) =>
    props.variant === "primary"
      ? "transparent"
      : `1px solid ${props.theme.colors.pink.main}`};
`;
