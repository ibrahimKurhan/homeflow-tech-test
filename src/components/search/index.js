import { useContext, Fragment } from "react";
import {
  StyledInputField,
  StyledSearchFieldContainer,
  StyledButton,
} from "styled-components/search-field";
import { SearchIcon, CloseIcon } from "components/shared/icons";
import { PLACEHOLDER } from "constants";
import { PropertiesContext } from "providers/global-provider";

const SearchBox = () => {
  const { searchTerm, setSearchTerm } = useContext(PropertiesContext);

  return (
    <Fragment>
      <StyledSearchFieldContainer>
        <StyledInputField
          placeholder={PLACEHOLDER}
          onChange={({ target }) => setSearchTerm(target.value)}
          value={searchTerm}
        />
        {searchTerm.length === 0 ? (
          <SearchIcon />
        ) : (
          <StyledButton onClick={() => setSearchTerm("")}>
            <CloseIcon />
          </StyledButton>
        )}
      </StyledSearchFieldContainer>
    </Fragment>
  );
};

export default SearchBox;
