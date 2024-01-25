import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { StyledButton, StyledIcon } from "./ThemeToggleButton.styled";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
 const { themeName, toggleTheme } = useContext(ThemeContext);

 return (
  <StyledButton onClick={toggleTheme}>
   <StyledIcon>{themeName === "light" ? <FaMoon /> : <FaSun />}</StyledIcon>
  </StyledButton>
 );
};

export default ThemeToggleButton;
