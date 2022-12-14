import { useContext } from "react";
import { FaBookmark } from "react-icons/fa";
import { ImageWithFallback } from "util/imageWithFallBack";
import { DEFAULT_PROPERTY_IMAGE_URL } from "constants";
import {
  StyledButton,
  StyledWrapper,
  StyledParagraph,
} from "styled-components/property-card";
import { BASE_URL } from "constants";
import { BUTTON_TITLE } from "constants";
import { ThemeContext } from "styled-components";

const PropertyCard = ({ property, saveProperty }) => {
  const themeContext = useContext(ThemeContext);
  const { photos, display_address, price, property_id, selected } = property;
  const color = selected ? themeContext.red : themeContext.yellow;
  const imageUrl = `${BASE_URL}/${photos[0]}`;
  const handleClick = () => saveProperty(property_id);

  return (
    <StyledWrapper>
      <ImageWithFallback
        src={imageUrl}
        alt={display_address}
        fallback={DEFAULT_PROPERTY_IMAGE_URL}
      />
      <StyledParagraph>{price}</StyledParagraph>
      <StyledParagraph>{display_address}</StyledParagraph>
      <StyledButton onClick={handleClick} title={BUTTON_TITLE}>
        <FaBookmark color={color} size={themeContext.buttonSize} />
      </StyledButton>
    </StyledWrapper>
  );
};

export default PropertyCard;
