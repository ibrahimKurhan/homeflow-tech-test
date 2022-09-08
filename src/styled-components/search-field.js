import styled, { css } from "styled-components";

export const StyledInputField = styled.input`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
    font-size: inherit;
    width: 300px;
    height: 30px;
  `}
`;

export const StyledSearchFieldContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spaceXXS};
    margin-bottom: 20px;
    @media (min-width: ${theme.size.desktop}) {
      margin: 0;
    }
  `}
`;

export const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
