import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "pages/app";
import { ThemeProvider } from "styled-components";
import { theme } from "styled-components/theme";
import GlobalProvider from "providers/global-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </GlobalProvider>
  </React.StrictMode>
);
