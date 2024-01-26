import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export const HeartIconButton = styled.button`
 position: absolute;
 top: 10px;
 right: 10px;
 font-size: 20px;
 width: 18px;
 height: 18px;
 background-color: transparent;
`;

export const StyledFaHeart = styled(FaHeart)`
 width: 100%;
 height: 100%;
 color: ${(props) => props.theme.colors.accent};
`;

export const StyledFaRegHeart = styled(FaRegHeart)`
 width: 100%;
 height: 100%;
 color: ${(props) => props.theme.colors.white};
 transition: color ${(props) => props.theme.animation.cubicBezier};

 &:hover,
 &:focus {
  color: ${(props) => props.theme.colors.accent};
 }
`;
