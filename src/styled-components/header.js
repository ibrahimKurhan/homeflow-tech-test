import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  ${({ theme }) => css`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spaceM};
    background-color: ${theme.silver};
    margin-bottom: 40px;
    @media (min-width: ${theme.size.desktop}) {
      flex-direction: row;
      display: flex;
      margin-bottom: 40px;
    }
  `}
`;

export const StyledH1 = styled.h1``;

export const StyledNumber = styled.h1`
  ${({ theme }) => css`
    color: ${theme.yellow};
    width: 5px;
  `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledFavoritesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
