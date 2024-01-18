import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
 padding: 10px 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

export const NavLink = styled(Link)`
 color: ${({ theme }) => theme.colors.dark};
 margin: 0 10px;
 font-size: ${({ theme }) => theme.fontSizes.medium};

 &:hover {
  text-decoration: underline;
 }
`;
