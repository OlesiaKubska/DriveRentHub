import{u as o,j as t}from"./index-YQZ0h6uX.js";import{F as r,a as s,b as a,S as c,H as l}from"./Section-8ODJpJQy.js";const d=o.footer`
 text-align: start;
 display: flex;
 flex-direction: column;
 align-items: center;
 box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.5);
 background-color: ${({theme:e})=>e.colors.headerBackground};
 width: 100%;
 padding-top: 10px;
 padding-bottom: 10px;
`,x=o.div`
 text-align: start;
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 100%;

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
  flex-direction: row;
  justify-content: space-between;
 }
`,m=o.div`
 margin-top: 10px;
 margin-bottom: 10px;
 @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
 }
`,n=o.p`
 color: ${({theme:e})=>e.colors.dark};
 margin-bottom: 0;
`,p=o.div`
 display: flex;
 justify-content: center;

 a {
  margin: 0 10px;
  color: ${({theme:e})=>e.colors.accent};
  text-decoration: none;
  transition: color ${e=>e.theme.animation.cubicBezier};

  &:hover {
   text-decoration: underline;
   color: ${({theme:e})=>e.colors.primary};
  }
 }
`,g=o.p`
 color: ${({theme:e})=>e.colors.accent};
 margin-bottom: 0;
`,i=o.span`
 font-size: 22px;
`,h=()=>t.jsxs(d,{children:[t.jsxs(x,{children:[t.jsxs(p,{children:[t.jsx("a",{href:"https://facebook.com",children:t.jsx(i,{children:t.jsx(r,{})})}),t.jsx("a",{href:"https://telegram.com",children:t.jsx(i,{children:t.jsx(s,{})})}),t.jsx("a",{href:"https://instagram.com",children:t.jsx(i,{children:t.jsx(a,{})})})]}),t.jsxs(m,{children:[t.jsx(n,{children:"Email: info@drivehub.com"}),t.jsx(n,{children:"Phone: +38095678901"}),t.jsx(n,{children:"Address: 123 Peremogy St, Kiev, Ukraine"})]})]}),t.jsx("div",{children:t.jsx(g,{children:"© 2024 DriveHub. All rights reserved."})})]}),b="/DriveRentHub/assets/Bg-desktop-rmnv9Gz4.png",u="/DriveRentHub/assets/Bg-desktop@2x-nMrvbBix.png",j="/DriveRentHub/assets/Bg-mobile-Ip7DieYz.jpg",f="/DriveRentHub/assets/Bg-tablet-y3sx_8rN.jpg",k=o(c)`
 background-position: center;
 background-image: -webkit-image-set(url(${j}) 1x);
 background-size: cover;
 background-repeat: no-repeat;
 width: 100%;
 min-height: 100vh;

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
  background-image: -webkit-image-set(url(${f}) 1x);
 }

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  background-image: -webkit-image-set(
   url(${b}) 1x,
   url(${u}) 2x
  );
 }
`,$=o.div`
 margin-top: 60px;
 margin-bottom: 60px;
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: center;
 background-color: ${({theme:e})=>e.colors.homeBackground};

 h2 {
  color: ${({theme:e})=>e.colors.accent};
  font-size: 18px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
   font-size: 24px;
  }
 }
`,v=o.h1`
 color: ${({theme:e})=>e.colors.accent};
 font-size: 20px;
 margin-top: 50px;

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
  font-size: 24px;
 }
`,y=o.ul`
 color: ${({theme:e})=>e.colors.dark};
 font-size: 14px;
 text-align: start;
 margin-bottom: 50px;

 li {
  list-style-type: square;
  margin-bottom: 16px;
 }

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
  font-size: 24px;
 }
`,F=()=>t.jsxs(k,{children:[t.jsx(l,{}),t.jsxs($,{children:[t.jsx(v,{children:"Welcom to DriveRentHub!"}),t.jsx("h2",{children:"Your Trusted Car Rental Partner in Ukraine"}),t.jsxs(y,{children:[t.jsx("li",{children:"Wide Range of Vehicles"}),t.jsx("li",{children:"Flexibility for Any Journey"}),t.jsx("li",{children:"Comfort and Quality"}),t.jsx("li",{children:"Affordable Solutions for Everyone"})]})]}),t.jsx(h,{})]});export{F as default};
