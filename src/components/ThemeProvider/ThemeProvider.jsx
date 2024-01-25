import { createContext, useState } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { lightTheme, darkTheme } from "../../styles/theme";

export const ThemeContext = createContext({
 theme: lightTheme,
 toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
 const [themeName, setThemeName] = useState("light");

 const toggleTheme = () => {
  setThemeName(themeName === "light" ? "dark" : "light");
 };

 const theme = themeName === "light" ? lightTheme : darkTheme;

 return (
  <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
   <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
  </ThemeContext.Provider>
 );
};

ThemeProvider.propTypes = {
 children: PropTypes.node.isRequired,
};
