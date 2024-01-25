import styled from "styled-components";
import { Section } from "../../components/Section/Section";

import imgHomeDesk1x from "../../assets/images/background/Bg-desktop.png";
import imgHomeDesk2x from "../../assets/images/background/Bg-desktop@2x.png";
import imgHomeMob1x from "../../assets/images/background/Bg-mobile.jpg";
import imgHomeTabl1x from "../../assets/images/background/Bg-tablet.jpg";

export const HomeSection = styled(Section)`
 background-position: center;
 background-image: -webkit-image-set(url(${imgHomeMob1x}) 1x);
 background-size: cover;
 background-repeat: no-repeat;
 width: 100%;
 min-height: 100vh;

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  background-image: -webkit-image-set(url(${imgHomeTabl1x}) 1x);
 }

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  background-image: -webkit-image-set(
   url(${imgHomeDesk1x}) 1x,
   url(${imgHomeDesk2x}) 2x
  );
 }
`;

export const Container = styled.div`
 margin-top: 60px;
 margin-bottom: 60px;
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: center;
 background-color: ${({ theme }) => theme.colors.homeBackground};

 h2 {
  color: ${({ theme }) => theme.colors.accent};
  font-size: 18px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
   font-size: 24px;
  }
 }
`;

export const Heading = styled.h1`
 color: ${({ theme }) => theme.colors.accent};
 font-size: 20px;
 margin-top: 50px;

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  font-size: 24px;
 }
`;

export const Description = styled.ul`
 color: ${({ theme }) => theme.colors.dark};
 font-size: 14px;
 text-align: start;
 margin-bottom: 50px;

 li {
  list-style-type: square;
  margin-bottom: 16px;
 }

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  font-size: 24px;
 }
`;
