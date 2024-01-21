import styled from "styled-components";

export const CardGrid = styled.div`
 display: grid;
 gap: 20px;
 margin-bottom: 20px;

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  grid-template-columns: repeat(3, 1fr);
 }

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  grid-template-columns: repeat(4, 1fr);
 }
`;

export const Button = styled.button`
 color: ${(props) => props.theme.colors.primary};
 border: none;
 width: 100%;
 font-size: ${(props) => props.theme.fontSizes.medium};
 margin-top: 50px;
 font-weight: 500;
 transition: color ${(props) => props.theme.animation.cubicBezier};

 &:hover {
  color: ${(props) => props.theme.colors.accent};
 }
`;
