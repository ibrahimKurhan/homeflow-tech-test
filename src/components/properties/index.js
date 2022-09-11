import { useContext, Fragment } from "react";
import { StyledNotFoundMessage } from "styled-components/property-list";
import PropertyCard from "components/properties/property-card";
import { NOT_FOUND } from "constants";
import { StyledContainer } from "styled-components/property-list";
import { PropertiesContext } from "providers/global-provider";

const PropertyList = () => {
  const { filteredProperties, saveProperty } = useContext(PropertiesContext);
  const NotFoundText = filteredProperties?.length === 0 && (
    <StyledNotFoundMessage>{NOT_FOUND}</StyledNotFoundMessage>
  );

  return (
    <Fragment>
      <StyledContainer>
        {filteredProperties?.map((property) => (
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

export default PropertyList;
