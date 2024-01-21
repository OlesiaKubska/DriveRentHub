import styled from "styled-components";

export const HeartIconButton = styled.button`
 position: absolute;
 top: 10px;
 right: 10px;
 font-size: 20px;
 width: 18px;
 height: 18px;
 background-color: transparent;
`;

export const HeartSvg = styled.svg`
 width: 100%;
 height: 100%;
 fill: ${(props) =>
  props.$isFavorite ? props.theme.colors.accent : "transparent"};
 stroke: ${(props) =>
  props.$isFavorite ? props.theme.colors.accent : props.theme.colors.white};
 stroke-width: 1px;

 &:hover,
 &:focus {
  fill: ${(props) => props.theme.colors.accent};
  stroke: ${(props) => props.theme.colors.accent};
 }
`;
