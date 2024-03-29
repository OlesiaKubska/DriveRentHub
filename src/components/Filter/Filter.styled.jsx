import styled from "styled-components";

export const FormContainer = styled.div`
 display: flex;
 align-items: center;
 background-color: ${(props) => props.theme.colors.mainBackground};
 margin: 10px;
`;

export const Form = styled.form`
 display: flex;
 flex-direction: column;

 @media (min-width: ${(props) => props.theme.breakpoint.tablet}) {
  flex-direction: row;
  gap: 14px;
 }
`;

export const Label = styled.p`
 margin: 0;
 margin-bottom: ${(props) => props.theme.spacing(1)};
 font-size: ${(props) => props.theme.fontSizes.small};
 color: ${(props) => props.theme.colors.dark};
`;

export const SelectBrand = styled.select`
 display: flex;
 padding: 14px 18px 14px 18px;
 justify-content: center;
 align-items: center;
 border: none;
 border-radius: 14px;
 font-size: ${(props) => props.theme.fontSizes.small};
 color: ${(props) => props.theme.colors.dark};
 background: ${(props) => props.theme.colors.light};

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  font-size: ${(props) => props.theme.fontSizes.medium};
 }

 &:focus {
  outline: none;
 }
`;

export const SelectPrice = styled.select`
 display: flex;
 width: 120px;
 padding: 14px 18px;
 align-items: flex-start;
 border-radius: 14px;
 border: none;
 font-size: ${(props) => props.theme.fontSizes.small};
 color: ${(props) => props.theme.colors.dark};
 background: ${(props) => props.theme.colors.light};

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  font-size: ${(props) => props.theme.fontSizes.medium};
 }

 &:focus {
  outline: none;
 }
`;

export const InputFrom = styled.input`
 border: none;
 width: 70px;
 padding: 14px 46px 14px 24px;
 align-items: center;
 border-radius: 14px;
 border-right: 1px solid rgba(138, 138, 137, 0.2);
 background: ${(props) => props.theme.colors.light};
 font-size: ${(props) => props.theme.fontSizes.small};
 color: ${(props) => props.theme.colors.dark};

 @media (min-width: ${(props) => props.theme.breakpoint.tablet}) {
  border-radius: 14px 0px 0px 14px;
 }

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  font-size: ${(props) => props.theme.fontSizes.medium};
 }

 &:focus {
  outline: none;
 }
`;

export const InputTo = styled.input`
 border: none;
 width: 70px;
 padding: 14px 46px 14px 24px;
 align-items: center;
 border-radius: 14px;
 border-right: 1px solid rgba(138, 138, 137, 0.2);
 background: ${(props) => props.theme.colors.light};
 font-size: ${(props) => props.theme.fontSizes.small};
 color: ${(props) => props.theme.colors.dark};

 @media (min-width: ${(props) => props.theme.breakpoint.tablet}) {
  border-radius: 0px 14px 14px 0px;
 }

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  font-size: ${(props) => props.theme.fontSizes.medium};
 }

 &:focus {
  outline: none;
 }
`;

export const Button = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-shrink: 0;
 padding: 14px 44px;
 width: 136px;
 height: 48px;
 background-color: ${(props) => props.theme.colors.primary};
 color: ${(props) => props.theme.colors.white};
 border-radius: 12px;
 font-size: ${(props) => props.theme.fontSizes.small};
 margin-top: 20px;
 transition: background-color ${(props) => props.theme.animation.cubicBezier};

 @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  font-size: ${(props) => props.theme.fontSizes.medium};
 }

 &:hover {
  background-color: ${(props) => props.theme.colors.accent};
 }
`;
