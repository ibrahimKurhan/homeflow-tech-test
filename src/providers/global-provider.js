import React, { createContext, useState, useEffect } from "react";
import { getPropertiesList } from "data/properties";
import useLocalStorage from "hooks/useLocalStorage";
import {
  updateDeselectedProperty,
  updateSelectedProperty,
} from "util/update-property";

export const PropertiesContext = createContext();

const GlobalProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [savedProperties, setSavedProperties] = useLocalStorage(
    "savedProperties",
    []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchPropertyData = async () => {
      const json = await getPropertiesList();
      setProperties(json.result.properties.elements);
      setIsLoading(false);
    };
    fetchPropertyData();
  }, []);

  const filteredProperties = properties.filter((property) =>
    property.short_description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSavedProperties = savedProperties.filter((property) =>
    property.short_description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const saveProperty = (propertyId) => {
    const selectedProperty = filteredProperties.find(
      ({ property_id }) => property_id === propertyId
    );
    const propertyExist = savedProperties.find(
      ({ property_id }) => property_id === selectedProperty.property_id
    );
    if (propertyExist) {
      const filteredProperty = savedProperties.filter(
        ({ property_id }) => property_id !== propertyExist.property_id
      );

      const updateDeselectProperty = updateDeselectedProperty(
        properties,
        propertyExist
      );
      setProperties(updateDeselectProperty);
      setSavedProperties(filteredProperty);
    } else {
      const updateSelectedPropertyObject = {
        ...selectedProperty,
        selected: true,
      };

      const updateSelectProperty = updateSelectedProperty(
        properties,
        selectedProperty
      );

      setProperties(updateSelectProperty);
      setSavedProperties([...savedProperties, updateSelectedPropertyObject]);
    }
  };

  return (
    <PropertiesContext.Provider
      value={{
        isLoading,
        filteredProperties,
        saveProperty,
        setSearchTerm,
        properties,
        searchTerm,
        savedProperties,
        filteredSavedProperties,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default GlobalProvider;
