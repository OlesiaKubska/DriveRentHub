import { GiCarKey } from "react-icons/gi";
import styled from "styled-components";

export const ScrollTopIcon = styled(GiCarKey)`
 height: 50px;
 width: 50px;
 fill: ${(props) => props.theme.colors.primary};
 opacity: 0.6;
 border-radius: 50%;
 transition: all 0.3s ease-in-out;

 &:hover {
  opacity: 0.8;
  fill: ${(props) => props.theme.colors.accent};
 }
`;
