import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
