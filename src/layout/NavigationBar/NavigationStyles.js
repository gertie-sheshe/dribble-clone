import styled from "styled-components";
import Button from "@dribble/ui/Button";

export const MobileNavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
`;

export const DesktopNavigationContainer = styled.nav`
  display: flex;
`;

export const ListItem = styled.li`
  padding: 0px 16px;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`;

export const NavSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoSection = styled.div``;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 600;
`;

export const SignInLink = styled(Link)`
  font-weight: 500;
  margin-right: 20px;
`;

export const ShareButton = styled(Button)`
  font-weight: 600;
`;
