import { Navbar, NavLink } from "./Header.styled";
import { Logo } from "../Logo/Logo";

const Header = () => {
 return (
  <Navbar>
   <Logo />
   <NavLink to="/">Home</NavLink>
   <div>
    <NavLink to="/catalog">Catalog</NavLink>
    <NavLink to="/favorites">Favorites</NavLink>
   </div>
  </Navbar>
 );
};

export default Header;
