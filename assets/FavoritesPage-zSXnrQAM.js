import{u as o,b as l,f as c,j as e,L as h}from"./index-dOsWlDDE.js";import{a as u,b as f,C as j,A as m,M as g}from"./CarList.styled-PDfoLEgS.js";import{S as M,H as A,c as S}from"./Section-Htt2lwo5.js";const y=o.div`
 margin-top: 20px;
`,C=o.span`
 font-size: 22px;
 color: ${({theme:t})=>t.colors.accent};

 &:hover {
  color: ${t=>t.theme.colors.primary};
 }
`,O=o.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 20px;
 text-align: center;
 margin-top: 30px;
`,L=()=>{const t=l(u),d=l(f),[i,a]=c.useState(!1),[p,r]=c.useState(null),n=d.filter(s=>t.includes(s.id)),x=s=>{r(s),a(!0)},v=()=>{a(!1),r(null)};return e.jsxs(M,{children:[e.jsx(A,{}),e.jsx(y,{children:n.length===0?e.jsxs(O,{children:[e.jsx("h2",{children:"Your favorite adverts will be displayed here."}),e.jsx("p",{children:"Please click on the plus sign and select adverts from the catalog."}),e.jsx(h,{to:"/catalog",children:e.jsx(C,{children:e.jsx(S,{})})})]}):e.jsx(j,{children:n.map(s=>e.jsx(m,{advert:s,onOpenModal:x},s.id))})}),e.jsx(g,{isOpen:i,onClose:v,advertId:p})]})};export{L as default};
