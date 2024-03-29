import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const ModalBackdrop = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 10;
 overflow: auto;
 background: ${(props) => props.theme.colors.modalBackground2};
`;

export const ModalContainer = styled.div`
 background: ${(props) => props.theme.colors.mainBackground};
 width: auto;
 max-width: 541px;
 border-radius: 12px;
 box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
 z-index: 11;
 position: relative;
`;

export const CloseButton = styled.button`
 background: transparent;
 border: none;
 position: absolute;
 top: 16px;
 right: 16px;
 width: 18px;
 height: 18px;
`;

export const StyledFaTimes = styled(FaTimes)`
 width: 100%;
 height: 100%;
 fill: ${(props) => props.theme.colors.dark};
 transition: fill ${(props) => props.theme.animation.cubicBezier};

 &:hover,
 &:focus {
  fill: ${(props) => props.theme.colors.accent};
 }
`;

export const InfoBox = styled.div`
 padding: 30px;
`;

export const CarImage = styled.img`
 margin-top: 10px;
 width: 100%;
 object-fit: cover;
 border-radius: 12px;
 max-height: 280px;
 margin-bottom: 10px;
`;

export const CarTitle = styled.h3`
 color: ${(props) => props.theme.colors.dark};
 font-size: 18px;
`;

export const Description = styled.p`
 color: ${(props) => props.theme.colors.dark};
 font-size: 14px;
 margin-top: 10px;
`;

export const Title = styled.h4`
 color: ${(props) => props.theme.colors.dark};
 font-size: 14px;
 margin-bottom: 8px;
`;

export const RentalBox = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-template-rows: auto auto;
 font-size: 12px;
`;

export const Condition = styled.p`
 border-radius: 35px;
 padding: 7px 14px;
 justify-content: center;
 align-items: center;
 background: ${(props) => props.theme.colors.modalBackground};
 margin: 0;
 color: ${(props) => props.theme.colors.dark};

 &:nth-child(2) {
  grid-column: 2 / 4;
 }
`;

export const RentalCarButton = styled.a`
 background-color: ${(props) => props.theme.colors.primary};
 color: ${(props) => props.theme.colors.white};
 font-size: 14px;
 border: none;
 font-size: ${(props) => props.theme.fontSizes.medium};
 padding: 10px 20px;
 border-radius: 12px;
 margin-top: 10px;
 margin-left: 30px;
 margin-bottom: 30px;
 max-width: 25%;
 display: block;
 transition: background-color ${(props) => props.theme.animation.cubicBezier};

 &:hover {
  background-color: ${(props) => props.theme.colors.accent};
 }
`;
