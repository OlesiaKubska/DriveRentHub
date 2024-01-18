import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.jsx";
import { theme } from "./styles/theme.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <ThemeProvider theme={theme}>
   <GlobalStyles />
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </ThemeProvider>
 </React.StrictMode>
);
