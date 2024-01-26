import styled from "styled-components";

export const LogoStyled = styled.img`
 width: 54px;
 height: 54px;

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  width: 84px;
  height: 84px;
 }
`;
