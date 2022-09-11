import { useContext, Fragment } from "react";
import { StyledNotFoundMessage } from "styled-components/property-list";
import PropertyCard from "components/properties/property-card";
import { NO_FAVORITE_PLACES } from "constants";
import {
  StyledContainer,
  StyledLinkContainer,
} from "styled-components/property-list";
import { PropertiesContext } from "providers/global-provider";
import { StyledLink } from "styled-components/header";
import { BACK_TO_HOME_PAGE } from "constants";
const FavoriteProperties = () => {
  const { filteredSavedProperties, saveProperty } =
    useContext(PropertiesContext);

  const NotFoundText = filteredSavedProperties?.length === 0 && (
    <StyledNotFoundMessage>{NO_FAVORITE_PLACES}</StyledNotFoundMessage>
  );

  return (
    <Fragment>
      <StyledLinkContainer>
        <StyledLink to="/" exact>
          {BACK_TO_HOME_PAGE}
        </StyledLink>
      </StyledLinkContainer>
      <StyledContainer>
        {filteredSavedProperties?.map((property) => (
          <PropertyCard
            key={property.property_id}
            property={property}
            saveProperty={saveProperty}
          />
        ))}
      </StyledContainer>
      {NotFoundText}
    </Fragment>
  );
};

export default FavoriteProperties;
