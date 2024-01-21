import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { LogoStyled } from "./Logo.styled";

export const Logo = () => {
 return (
  <div>
   <NavLink to="/home">
    <LogoStyled src={logo} alt="logo" />
   </NavLink>
  </div>
 );
};
