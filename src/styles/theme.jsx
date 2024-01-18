export const theme = Object.freeze({
 colors: {
  accent: "#0B44CD",
  white: "#fff",
  gray: "rgba(18, 20, 23, 0.50)",
  dark: "#121417",
  primary: "#3470FF",
  mainBackground: "#fff",
 },

 // Breakpoints
 breakpoint: {
  mobile: "320px",
  tablet: "768px",
  desktop: "1440px",
 },

 fontSizes: {
  small: "14px",
  medium: "18px",
  large: "22px",
  xl: "30px",
 },

 spacing: (value) => `${4 * value}px`,

 shadows: {
  small: "0 5px 7px -1px rgba(51, 51, 51, 0.23)",
  regular: "0px 4px 10px 4px #9e9e9e",
  medium: "0 9px 47px 11px rgba(51, 51, 51, 0.18);",
 },

 animation: {
  cubicBezier: "0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)",
 },
});

// @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
//   color: ${({theme}) => theme.color.dark};
// }
// @media screen and (min-width: ${({theme}) => theme.breakpoint.tablet}) {
//   color: ${({theme}) => theme.color.dark};
// }
//  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
//   color: ${({theme}) => theme.color.dark};
//  }