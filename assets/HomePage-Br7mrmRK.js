import{u as o,j as t}from"./index-Whr-GgWI.js";import{S as n,H as r}from"./Section-1JNHVgHP.js";const s=o.footer`
 text-align: start;
 display: flex;
 flex-direction: column;
 align-items: center;
 box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.5);
 background-color: rgba(255, 255, 255, 0.9);
 width: 100%;
 padding-top: 10px;
 padding-bottom: 10px;
`,a=o.div`
 text-align: start;
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 100%;

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
  flex-direction: row;
  justify-content: space-between;
 }
`,c=o.div`
 margin-top: 10px;
 margin-bottom: 10px;
 @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
 }
`,i=o.p`
 color: ${({theme:e})=>e.colors.dark};
 margin-bottom: 0;
`,l=o.div`
 display: flex;
 justify-content: center;

 a {
  margin: 0 10px;
  color: ${({theme:e})=>e.colors.accent};
  text-decoration: none;

  &:hover {
   text-decoration: underline;
   color: ${({theme:e})=>e.colors.primary};
  }
 }
`,d=o.p`
 color: ${({theme:e})=>e.colors.accent};
 margin-bottom: 0;
`,x=()=>t.jsxs(s,{children:[t.jsxs(a,{children:[t.jsxs(l,{children:[t.jsx("a",{href:"https://facebook.com",children:"Facebook"}),t.jsx("a",{href:"https://twitter.com",children:"Twitter"}),t.jsx("a",{href:"https://instagram.com",children:"Instagram"})]}),t.jsxs(c,{children:[t.jsx(i,{children:"Email: info@drivehub.com"}),t.jsx(i,{children:"Phone: +38095678901"}),t.jsx(i,{children:"Address: 123 Peremogy St, Kiev, Ukraine"})]})]}),t.jsx("div",{children:t.jsx(d,{children:"© 2024 DriveHub. All rights reserved."})})]}),m="/DriveRentHub/assets/Bg-desktop-rmnv9Gz4.png",p="/DriveRentHub/assets/Bg-desktop@2x-nMrvbBix.png",g="/DriveRentHub/assets/Bg-mobile-Ip7DieYz.jpg",b="/DriveRentHub/assets/Bg-tablet-y3sx_8rN.jpg",h=o(n)`
 background-position: center;
 background-image: -webkit-image-set(url(${g}) 1x);
 background-size: cover;
 background-repeat: no-repeat;
 width: 100%;
 min-height: 100vh;

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
  background-image: -webkit-image-set(url(${b}) 1x);
 }

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  background-image: -webkit-image-set(
   url(${m}) 1x,
   url(${p}) 2x
  );
 }
`,u=o.div`
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
`,f=o.h1`
 color: ${({theme:e})=>e.colors.accent};
 font-size: 20px;
 margin-top: 50px;

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
  font-size: 24px;
 }
`,k=o.ul`
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
`,$=()=>t.jsxs(h,{children:[t.jsx(r,{}),t.jsxs(u,{children:[t.jsx(f,{children:"Welcom to DriveRentHub!"}),t.jsx("h2",{children:"Your Trusted Car Rental Partner in Ukraine"}),t.jsxs(k,{children:[t.jsx("li",{children:"Wide Range of Vehicles"}),t.jsx("li",{children:"Flexibility for Any Journey"}),t.jsx("li",{children:"Comfort and Quality"}),t.jsx("li",{children:"Affordable Solutions for Everyone"})]})]}),t.jsx(x,{})]});export{$ as default};
