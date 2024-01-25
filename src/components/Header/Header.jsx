import { Navbar, NavLink } from "./Header.styled";
import { Logo } from "../Logo/Logo";
import ThemeToggleButton from "../ThemeProvider/ThemeToggleButton";

const Header = () => {
 return (
  <Navbar>
   <Logo />
   <ThemeToggleButton />
   <NavLink to="/">Home</NavLink>
   <div>
    <NavLink to="/catalog">Catalog</NavLink>
    <NavLink to="/favorites">Favorites</NavLink>
   </div>
  </Navbar>
 );
};

export default Header;
