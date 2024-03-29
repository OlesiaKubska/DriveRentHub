import styled from "styled-components";

export const CardImageContainer = styled.div`
 position: relative;
 width: 274px;
 height: 274px;

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  width: 320px;
  height: 320px;
 }
`;

export const CardItem = styled.li`
 width: 274px;
 height: 426px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 min-height: 320px;
 border-radius: 8px;
 overflow: hidden;

 &:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};
 }

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  width: 320px;
  height: 426px;
 }
`;

export const CarImage = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
 border-radius: 12px;
`;

export const CardContent = styled.div`
 height: 100%;
 padding: 14px 4px 4px 4px;
 flex: 1;

 div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
 }
`;

export const CarTitle = styled.h3`
 color: ${({ theme }) => theme.colors.dark};
 font-size: 16px;
`;

export const ModelName = styled.span`
 color: ${({ theme }) => theme.colors.primary};
`;

export const Span = styled.h3`
 color: ${({ theme }) => theme.colors.dark};
 font-size: 16px;
`;

export const CarDetails = styled.p`
 color: ${({ theme }) => theme.colors.gray};
 font-size: 12px;
 margin-bottom: 4px;

 span:not(:last-child)::after {
  content: "|";
  margin: 0 8px;
  color: ${({ theme }) => theme.colors.gray};
 }
`;

export const LearnMoreButton = styled.button`
 background-color: ${({ theme }) => theme.colors.primary};
 color: ${({ theme }) => theme.colors.white};
 border: none;
 font-size: ${({ theme }) => theme.fontSizes.medium};
 padding: 10px 20px;
 border-radius: 12px;
 width: 100%;
 margin-top: 28px;
 transition: background-color ${({ theme }) => theme.animation.cubicBezier};

 &:hover {
  background-color: ${({ theme }) => theme.colors.accent};
 }
`;
