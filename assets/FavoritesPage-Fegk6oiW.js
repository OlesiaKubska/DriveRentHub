import{u as v,b as o,f as r,j as s}from"./index-YQZ0h6uX.js";import{a as x,b as f,C as m,A as j,M}from"./CarList.styled-JiL5-QIw.js";import{S as A,H as S}from"./Section-8ODJpJQy.js";const h=v.div`
 margin-top: 20px;
`,b=()=>{const d=o(x),n=o(f),[l,t]=r.useState(!1),[i,a]=r.useState(null),c=n.filter(e=>d.includes(e.id)),p=e=>{a(e),t(!0)},u=()=>{t(!1),a(null)};return s.jsxs(A,{children:[s.jsx(S,{}),s.jsx(h,{children:s.jsx(m,{children:c.map(e=>s.jsx(j,{advert:e,onOpenModal:p},e.id))})}),s.jsx(M,{isOpen:l,onClose:u,advertId:i})]})};export{b as default};
