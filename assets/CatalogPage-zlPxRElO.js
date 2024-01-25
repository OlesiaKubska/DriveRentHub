import{u as n,P as h,a as k,b as g,j as t,s as w,c as S,d as z,e as M,r as x,f as B,g as F}from"./index-JMgtZHdL.js";import{g as P,s as A,M as E,C as u,a as I,b as L,A as R,B as D}from"./CarList.styled-TCTvFIXE.js";import{S as T,H}from"./Section-kvpbySgd.js";const q=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],N=n.div`
 display: flex;
 align-items: center;
 background-color: ${e=>e.theme.colors.mainBackground};
 margin: 10px;

 @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
  /* width: 859px;
  height: 74px; */
 }

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  /* margin: 150px; */
 }
`,O=n.form`
 display: flex;
 flex-direction: column;

 @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
  flex-direction: row;
  gap: 18px;
 }
`,b=n.p`
 margin: 0;
 margin-bottom: ${e=>e.theme.spacing(1)};
 font-size: ${e=>e.theme.fontSizes.small};
 color: ${e=>e.theme.colors.dark};
`,G=n.select`
 display: flex;
 padding: 14px 18px 14px 18px;
 justify-content: center;
 align-items: center;
 border: none;
 border-radius: 14px;
 font-size: ${e=>e.theme.fontSizes.medium};
 color: ${e=>e.theme.colors.dark};
 background: ${e=>e.theme.colors.light};
`,U=n.select`
 display: flex;
 width: 126px;
 padding: 14px 18px;
 align-items: flex-start;
 border-radius: 14px;
 border: none;
 font-size: ${e=>e.theme.fontSizes.medium};
 color: ${e=>e.theme.colors.dark};
 background: ${e=>e.theme.colors.light};
`,K=n.input`
 border: none;
 width: 100px;
 padding: 14px 46px 14px 24px;
 align-items: center;
 border-radius: 14px;
 border-right: 1px solid rgba(138, 138, 137, 0.2);
 background: ${e=>e.theme.colors.light};
 font-size: ${e=>e.theme.fontSizes.medium};
 color: ${e=>e.theme.colors.dark};

 @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
  border-radius: 14px 0px 0px 14px;
 }
`,V=n.input`
 border: none;
 width: 100px;
 padding: 14px 46px 14px 24px;
 align-items: center;
 border-radius: 14px;
 border-right: 1px solid rgba(138, 138, 137, 0.2);
 background: ${e=>e.theme.colors.light};
 font-size: ${e=>e.theme.fontSizes.medium};
 color: ${e=>e.theme.colors.dark};

 @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
  border-radius: 0px 14px 14px 0px;
 }
`,W=n.button`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-shrink: 0;
 padding: 14px 44px;
 width: 136px;
 height: 48px;
 background-color: ${e=>e.theme.colors.primary};
 color: ${e=>e.theme.colors.white};
 border-radius: 12px;
 font-size: ${e=>e.theme.fontSizes.medium};
 margin-top: 20px;
 transition: background-color ${e=>e.theme.animation.cubicBezier};

 &:hover {
  background-color: ${e=>e.theme.colors.accent};
 }
`,$=()=>{const e=k(),i=g(r=>r.filters),p=r=>{e(w(r.target.value))},d=r=>{e(S(r.target.value))},o=r=>{const{name:s,value:a}=r.target;e(z({...i.mileage,[s]:a.replace(/\D/g,"")}))},m=r=>{r.preventDefault(),e(M(i))};return t.jsx(N,{children:t.jsxs(O,{onSubmit:m,children:[t.jsxs("div",{children:[t.jsx(b,{children:"Car brand"}),t.jsxs(G,{value:i.brand,onChange:p,children:[t.jsx("option",{value:"",children:"Enter the text"}),q.map(r=>t.jsx("option",{value:r,children:r},r))]})]}),t.jsxs("div",{children:[t.jsx(b,{children:"Price/ 1 hour"}),t.jsxs(U,{value:i.price,onChange:d,children:[t.jsx("option",{value:"",children:"To $"}),t.jsx("option",{value:"30",children:"30"}),t.jsx("option",{value:"40",children:"40"}),t.jsx("option",{value:"50",children:"50"}),t.jsx("option",{value:"60",children:"60"}),t.jsx("option",{value:"70",children:"70"}),t.jsx("option",{value:"80",children:"80"})]})]}),t.jsxs("div",{children:[t.jsx(b,{children:"Car mileage / km"}),t.jsx(K,{type:"text",name:"from",value:i.mileage.min,onChange:o,placeholder:"From"}),t.jsx(V,{type:"text",name:"to",value:i.mileage.max,onChange:o,placeholder:"To"})]}),t.jsx(W,{type:"submit",children:"Search"})]})})};$.propTypes={onFilterChange:h.func.isRequired,onSearch:h.func.isRequired};const J=n.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 10;
 overflow: auto;
 background: rgba(18, 20, 23, 0.5);
`,Q=n.div`
 background: white;
 width: auto;
 max-width: 541px;
 height: auto;
 /* max-height: 752px; */
 border-radius: 12px;
 box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
 z-index: 11;
 position: relative;
`,X=n.button`
 background: transparent;
 border: none;
 position: absolute;
 top: 16px;
 right: 16px;
 width: 18px;
 height: 18px;
`,Y=n.svg`
 width: 100%;
 height: 100%;
 stroke: ${e=>e.theme.colors.dark};

 &:hover,
 &:focus {
  stroke: ${e=>e.theme.colors.accent};
 }
`,Z=n.div`
 padding: 30px;
`,_=n.img`
 margin-top: 20px;
 width: 100%;
 object-fit: cover;
 border-radius: 12px;
 height: auto;
 margin-bottom: 10px;
`,ee=n.h3`
 color: ${e=>e.theme.colors.dark};
 font-size: 18px;
`,te=n.p`
 color: ${e=>e.theme.colors.dark};
 font-size: 14px;
 margin-top: 10px;
`,v=n.h4`
 color: ${e=>e.theme.colors.dark};
 font-size: 14px;
 margin-bottom: 8px;
`,oe=n.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-template-rows: auto auto;
 font-size: 12px;
`,j=n.p`
 border-radius: 35px;
 padding: 7px 14px;
 justify-content: center;
 align-items: center;
 background: #f9f9f9;
 margin: 0;

 &:nth-child(2) {
  grid-column: 2 / 4;
 }
`,ne=n.a`
 background-color: ${e=>e.theme.colors.primary};
 color: ${e=>e.theme.colors.white};
 font-size: 14px;
 border: none;
 font-size: ${e=>e.theme.fontSizes.medium};
 padding: 10px 20px;
 border-radius: 12px;
 margin-left: 30px;
 margin-bottom: 30px;
 max-width: 20%;
 display: block;
 transition: background-color ${e=>e.theme.animation.cubicBezier};

 &:hover {
  background-color: ${e=>e.theme.colors.accent};
 }
`,C=({isOpen:e,onClose:i,advertId:p})=>{const d=document.querySelector("#modal-root"),o=g(s=>P(s,p));if(x.useEffect(()=>{const s=l=>{document.body.style.overflow=l?"hidden":"auto"},a=l=>{l.code==="Escape"&&i()};return e&&(s(!0),window.addEventListener("keydown",a)),()=>{s(!1),window.removeEventListener("keydown",a)}},[e,i]),!e||!o)return null;const m=o.rentalConditions.split(`
`),r=({text:s})=>{const a=s.split(/(\d+)/).map((l,f)=>/\d+/.test(l)?t.jsx("span",{style:{color:"#3470FF"},children:l},f):l);return t.jsx(t.Fragment,{children:a})};return B.createPortal(t.jsx(J,{onClick:i,children:t.jsxs(Q,{onClick:s=>s.stopPropagation(),children:[t.jsx(X,{onClick:i,children:t.jsx(Y,{children:t.jsx("use",{href:`${A}#icon-outline`})})}),t.jsxs(Z,{children:[t.jsx(_,{src:o.img,alt:`${o.make} ${o.model}`}),t.jsxs(ee,{children:[o.make," ",t.jsx(E,{children:o.model}),","," ",o.year]}),t.jsxs(u,{children:[o.address.split(", ").slice(-2).join(" | ")," |"," ",o.rentalCompany," | Premium"]}),t.jsxs(u,{children:[o.type," | ",o.model," | ",o.id," |"," ",o.functionalities[0]]}),t.jsx(te,{children:o.description}),t.jsx(v,{children:"Accessories and functionalities:"}),t.jsx(u,{children:o.accessories.join(" | ")}),t.jsx(u,{children:o.functionalities.join(" | ")}),t.jsx(v,{children:"Rental Conditions:"}),t.jsxs(oe,{children:[m.map((s,a)=>t.jsx(j,{children:t.jsx(r,{text:s})},a)),t.jsx(j,{children:t.jsx(r,{text:`Mileage: ${o.mileage.toLocaleString("en-US")}`})}),t.jsx(j,{children:t.jsx(r,{text:`Price: ${o.rentalPrice}`})})]})]}),t.jsx(ne,{href:"tel:+38095678901",children:"Rental car"})]})}),d)};C.propTypes={onClose:h.func.isRequired,isOpen:h.bool,advertId:h.number,text:h.string};const re=()=>{const[e,i]=x.useState(!1),[p,d]=x.useState(null),o=k(),m=g(I),r=g(c=>c.filters),[s,a]=x.useState(1);x.useEffect(()=>{o(F({page:s,limit:12,filters:r}))},[o,s,r]);const l=()=>{a(c=>c+1)},f=c=>{d(c),i(!0)},y=()=>{i(!1),d(null)};return t.jsxs("div",{children:[t.jsx(L,{children:m.map(c=>t.jsx(R,{advert:c,onOpenModal:f},c.id))}),t.jsx(D,{onClick:l,children:"Load more"}),t.jsx(C,{isOpen:e,onClose:y,advertId:p})]})},ie=n.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 50px;
 background-color: ${e=>e.theme.colors.mainBackground};
`,de=()=>{const[e,i]=x.useState({brand:"",price:{min:null,max:null},mileage:{min:null,max:null}}),p=o=>{i(o)},d=()=>{};return t.jsxs(T,{children:[t.jsx(H,{}),t.jsxs(ie,{children:[t.jsx($,{onFilterChange:p,onSearch:d}),t.jsx(re,{filters:e})]})]})};export{de as default};
