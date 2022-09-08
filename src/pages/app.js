import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "components/header";
import Home from "pages/home";
import FavoriteProperties from "pages/favorite-properties";
import { StyledWrapper } from "styled-components/app";

const App = () => {
  return (
    <StyledWrapper>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoriteProperties />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </StyledWrapper>
  );
};

export default App;
