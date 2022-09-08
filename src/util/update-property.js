export const updateSelectedProperty = (properties, selectedProperty) => {
  const updateSelectProperty = properties.map((property) =>
    property.property_id === selectedProperty.property_id
      ? {
          ...property,
          selected: true,
        }
      : property
  );
  return updateSelectProperty;
};

export const updateDeselectedProperty = (properties, propertyExist) => {
  const updateDeselectProperty = properties.map((property) =>
    property.property_id === propertyExist.property_id
      ? {
          ...property,
          selected: false,
        }
      : property
  );
  return updateDeselectProperty;
};
