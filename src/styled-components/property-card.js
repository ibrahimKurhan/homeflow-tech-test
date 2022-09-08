import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
`;

export const StyledWrapper = styled.div`
  ${({ theme }) => css`
    padding-bottom: ${theme.spaceM};
  `}
`;

export const StyledParagraph = styled.p``;
