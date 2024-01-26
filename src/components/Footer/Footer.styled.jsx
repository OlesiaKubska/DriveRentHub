import styled from "styled-components";

export const FooterContainer = styled.footer`
 text-align: start;
 display: flex;
 flex-direction: column;
 align-items: center;
 box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.5);
 background-color: ${({ theme }) => theme.colors.headerBackground};
 width: 100%;
 padding-top: 10px;
 padding-bottom: 10px;
`;

export const FooterBox = styled.div`
 text-align: start;
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 100%;

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  flex-direction: row;
  justify-content: space-between;
 }
`;

export const TextBox = styled.div`
 margin-top: 10px;
 margin-bottom: 10px;
 @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
 }
`;

export const FooterText = styled.p`
 color: ${({ theme }) => theme.colors.dark};
 margin-bottom: 0;
`;

export const SocialLinks = styled.div`
 display: flex;
 justify-content: center;

 a {
  margin: 0 10px;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  transition: color ${(props) => props.theme.animation.cubicBezier};

  &:hover {
   text-decoration: underline;
   color: ${({ theme }) => theme.colors.primary};
  }
 }
`;

export const FooterCopy = styled.p`
 color: ${({ theme }) => theme.colors.accent};
 margin-bottom: 0;
`;

export const Icon = styled.span`
 font-size: 22px;
`;
