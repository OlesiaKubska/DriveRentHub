import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 box-shadow: 0 4px 0 rgba(0, 0, 0, 0.5);
 background-color: ${({ theme }) => theme.colors.headerBackground};
`;

export const NavLink = styled(Link)`
 color: ${({ theme }) => theme.colors.accent};
 margin: 0 10px;
 font-size: ${({ theme }) => theme.fontSizes.small};
 transition: color ${(props) => props.theme.animation.cubicBezier};

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  font-size: ${({ theme }) => theme.fontSizes.medium};
 }

 &:hover {
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};
 }
`;
