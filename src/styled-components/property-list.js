import styled, { css } from "styled-components";

export const StyledNotFoundMessage = styled.h1`
  padding: 20px;
`;

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.extraLoose};
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    @media (min-width: ${theme.size.tablet}) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: auto;
      justify-content: center;
    }
    @media (min-width: ${theme.size.desktop}) {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: auto;
      justify-content: center;
    }
  `};
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 0 30px 30px;
  width: 200px;
`;
