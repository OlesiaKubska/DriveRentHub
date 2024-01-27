import styled from "styled-components";

export const Box = styled.div`
 margin-top: 20px;
`;

export const StyledIcon = styled.span`
 font-size: 22px;
 color: ${({ theme }) => theme.colors.accent};

 &:hover {
  color: ${(props) => props.theme.colors.primary};
 }
`;

export const FavoritesBox = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 20px;
 text-align: center;
 margin-top: 30px;
`;
