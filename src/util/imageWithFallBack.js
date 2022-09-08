import React, { useState } from "react";
import { StyledFallBackImage } from "styled-components/fallback-image";

export const ImageWithFallback = ({ src, alt, fallback }) => {
  const [source, setSource] = useState(src);
  return (
    <StyledFallBackImage
      src={source}
      alt={alt}
      onError={() => setSource(fallback)}
    />
  );
};
