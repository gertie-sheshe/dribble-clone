import styled from "styled-components";
import Section from "@dribble/layout/Section";

export const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.pink.light};
`;

export const HeroSection = styled(Section)`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Description = styled.p`
  margin: 16px 0px;
  line-height: 1.75rem;
`;

export const TitleSection = styled.div`
  margin-top: 20px;
`;

export const ImageSection = styled.div``;
