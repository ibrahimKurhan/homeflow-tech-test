import { useContext } from "react";
import { PropertiesContext } from "providers/global-provider";
import { LOADING } from "constants";
import { StyleLoader } from "styled-components/app";
import PropertyList from "components/properties";

const Home = () => {
  const { isLoading } = useContext(PropertiesContext);
  return (
    <div>
      {isLoading ? <StyleLoader>{LOADING}</StyleLoader> : <PropertyList />}
    </div>
  );
};

export default Home;
