import styled from "styled-components";

export const StyledButton = styled.button`
 background: transparent;
 padding: 6px 14px;
`;

export const StyledIcon = styled.span`
 font-size: 22px;
 color: ${({ theme }) => theme.colors.accent};

 &:hover {
  color: ${(props) => props.theme.colors.primary};
 }
`;
