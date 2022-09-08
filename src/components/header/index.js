import { useContext } from "react";
import SearchBox from "components/search";
import { PropertiesContext } from "providers/global-provider";
import {
  StyledHeader,
  StyledH1,
  StyledNumber,
  StyledLink,
  StyledFavoritesContainer,
} from "styled-components/header";
import { HEADER_TITLE, FAVORITES } from "constants";

const Header = () => {
  const { savedProperties } = useContext(PropertiesContext);
  const numberOfSavedProperties = savedProperties.length;
  return (
    <StyledHeader>
      <StyledLink to="/" exact>
        <StyledH1>{HEADER_TITLE}</StyledH1>
      </StyledLink>
      <SearchBox />
      <StyledLink to="/favorites" exact>
        <StyledFavoritesContainer>
          <StyledH1>{FAVORITES}</StyledH1>
          <StyledNumber>{numberOfSavedProperties}</StyledNumber>
        </StyledFavoritesContainer>
      </StyledLink>
    </StyledHeader>
  );
};
export default Header;
