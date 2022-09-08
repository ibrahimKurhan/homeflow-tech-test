import { propertiesEndpoint } from "config/endpoints";

export const getPropertiesList = async () => {
  const response = await fetch(propertiesEndpoint);
  const properties = await response.json();
  return properties;
};
