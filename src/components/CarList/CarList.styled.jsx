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

// export const Card = styled.div`
//  display: flex;
//  flex-direction: column;
//  justify-content: space-between;
//  min-height: 320px;
//  border-radius: 8px;
//  overflow: hidden;

//  &:hover {
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//   transition: box-shadow ${(props) => props.theme.animation.cubicBezier};
//  }
// `;

// export const CarImage = styled.img`
//  width: 100%;
//  height: 200px;
//  object-fit: cover;
//  border-radius: 12px;
// `;

// export const CardContent = styled.div`
//  padding: 14px 4px 4px 4px;
//  flex: 1;

//  div {
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 8px;
//  }
// `;

// export const CarTitle = styled.h3`
//  color: ${(props) => props.theme.colors.dark};
//  font-size: 16px;
// `;

// export const ModelName = styled.span`
//  color: ${(props) => props.theme.colors.primary};
// `;

// export const Span = styled.h3`
//  color: ${(props) => props.theme.colors.dark};
//  font-size: 16px;
// `;

// export const CarDetails = styled.p`
//  color: ${(props) => props.theme.colors.gray};
//  font-size: 12px;
//  margin-bottom: 4px;
// `;

// export const LearnMoreButton = styled.button`
//  background-color: ${(props) => props.theme.colors.primary};
//  color: ${(props) => props.theme.colors.white};
//  border: none;
//  font-size: ${(props) => props.theme.fontSizes.medium};
//  padding: 10px 20px;
//  border-radius: 12px;
//  width: 100%;
//  margin-top: 28px;
//  transition: background-color ${(props) => props.theme.animation.cubicBezier};

//  &:hover {
//   background-color: ${(props) => props.theme.colors.accent};
//  }
// `;

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
