import styled from "styled-components";
import { devices } from "./theme";

const { md, lg } = devices;

export const H1 = styled.h1`
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  font-size: ${({ theme }) => theme.typography.h1.fontSize.sm};

  @media (min-width: ${md}) {
    font-size: ${({ theme }) => theme.typography.h1.fontSize.md};
  }

  @media (min-width: ${lg}) {
    font-size: ${({ theme }) => theme.typography.h1.fontSize.lg};
  }
`;
