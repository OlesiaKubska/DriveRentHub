import{k as y,u as t,P as a,j as o,a as w,b as u,t as v,f as C,l as z}from"./index-0Fky9f--.js";import{d as B,e as F,f as S}from"./Section-WZF-wg2v.js";const b=e=>e.adverts.adverts,ie=e=>e.adverts.pagination,R=e=>e.filters,I=(e,r)=>b(e).find(i=>i.id===r),P=e=>e.favorites.favorites,T=e=>{const r=e.replace(/[^0-9.-]+/g,"");return r?parseFloat(r):null},se=y([b,R],(e,r)=>Array.isArray(e)?e.filter(i=>{const c=T(i.rentalPrice),n=r.price===null||r.price===""||c!==null&&c>=r.price,m=(!r.mileage.min||i.mileage>=r.mileage.min)&&(!r.mileage.max||i.mileage<=r.mileage.max);return(!r.brand||i.make===r.brand)&&n&&m}):(console.error("adverts is not an array:",e),[])),E="/DriveRentHub/assets/car-g-CJjgUd.jpg",A=t.div`
 position: relative;
 width: 274px;
 height: 274px;

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  width: 320px;
  height: 320px;
 }
`,M=t.li`
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
  transition: box-shadow ${({theme:e})=>e.animation.cubicBezier};
 }

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  width: 320px;
  height: 426px;
 }
`,H=t.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
 border-radius: 12px;
`,q=t.div`
 height: 100%;
 padding: 14px 4px 4px 4px;
 flex: 1;

 div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
 }
`,D=t.h3`
 color: ${({theme:e})=>e.colors.dark};
 font-size: 16px;
`,j=t.span`
 color: ${({theme:e})=>e.colors.primary};
`,L=t.h3`
 color: ${({theme:e})=>e.colors.dark};
 font-size: 16px;
`,p=t.p`
 color: ${({theme:e})=>e.colors.gray};
 font-size: 12px;
 margin-bottom: 4px;

 span:not(:last-child)::after {
  content: "|";
  margin: 0 8px;
  color: ${({theme:e})=>e.colors.gray};
 }
`,N=t.button`
 background-color: ${({theme:e})=>e.colors.primary};
 color: ${({theme:e})=>e.colors.white};
 border: none;
 font-size: ${({theme:e})=>e.fontSizes.medium};
 padding: 10px 20px;
 border-radius: 12px;
 width: 100%;
 margin-top: 28px;
 transition: background-color ${({theme:e})=>e.animation.cubicBezier};

 &:hover {
  background-color: ${({theme:e})=>e.colors.accent};
 }
`,$=({src:e,alt:r,...i})=>{const c=n=>{n.target.src=E};return o.jsx(H,{src:e,alt:r,onError:c,...i})};$.propTypes={src:a.string.isRequired,alt:a.string.isRequired};const O=t.button`
 position: absolute;
 top: 10px;
 right: 10px;
 font-size: 20px;
 width: 18px;
 height: 18px;
 background-color: transparent;
`,U=t(B)`
 width: 100%;
 height: 100%;
 color: ${e=>e.theme.colors.accent};
`,J=t(F)`
 width: 100%;
 height: 100%;
 color: ${e=>e.theme.colors.white};
 transition: color ${e=>e.theme.animation.cubicBezier};

 &:hover,
 &:focus {
  color: ${e=>e.theme.colors.accent};
 }
`,f=({advertId:e})=>{const r=w(),c=u(P).includes(e),n=()=>{r(v(e))};return o.jsx(O,{onClick:n,children:c?o.jsx(U,{}):o.jsx(J,{})})};f.propTypes={advertId:a.number.isRequired};const W=({advert:e,onOpenModal:r})=>o.jsxs(M,{children:[o.jsxs(A,{children:[o.jsx($,{src:e.img,alt:`${e.make} ${e.model}`}),o.jsx(f,{advertId:e.id})]}),o.jsxs(q,{children:[o.jsxs("div",{children:[o.jsxs(D,{children:[`${e.make}`," ",o.jsx(j,{children:`${e.model}`}),", ",`${e.year}`]}),o.jsx(L,{children:`${e.rentalPrice}`})]}),o.jsxs(p,{children:[o.jsx("span",{children:`${e.address.split(", ").slice(-2).join(" | ")}`}),o.jsx("span",{children:`${e.rentalCompany}`}),o.jsx("span",{children:"Premium"})]}),o.jsxs(p,{children:[o.jsx("span",{children:`${e.type}`}),o.jsx("span",{children:`${e.model}`}),o.jsx("span",{children:`${e.id}`}),o.jsx("span",{children:`${e.functionalities[0]}`})]}),o.jsx(N,{onClick:()=>r(e.id),children:"Learn more"})]})]});W.propTypes={advert:a.object.isRequired,onOpenModal:a.func.isRequired};const Y=t.div`
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
 background: ${e=>e.theme.colors.modalBackground2};
`,G=t.div`
 background: ${e=>e.theme.colors.mainBackground};
 width: auto;
 max-width: 541px;
 border-radius: 12px;
 box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
 z-index: 11;
 position: relative;
`,K=t.button`
 background: transparent;
 border: none;
 position: absolute;
 top: 16px;
 right: 16px;
 width: 18px;
 height: 18px;
`,Q=t(S)`
 width: 100%;
 height: 100%;
 fill: ${e=>e.theme.colors.dark};
 transition: fill ${e=>e.theme.animation.cubicBezier};

 &:hover,
 &:focus {
  fill: ${e=>e.theme.colors.accent};
 }
`,V=t.div`
 padding: 30px;
`,X=t.img`
 margin-top: 10px;
 width: 100%;
 object-fit: cover;
 border-radius: 12px;
 max-height: 280px;
 margin-bottom: 10px;
`,Z=t.h3`
 color: ${e=>e.theme.colors.dark};
 font-size: 18px;
`,_=t.p`
 color: ${e=>e.theme.colors.dark};
 font-size: 14px;
 margin-top: 10px;
`,g=t.h4`
 color: ${e=>e.theme.colors.dark};
 font-size: 14px;
 margin-bottom: 8px;
`,ee=t.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-template-rows: auto auto;
 font-size: 12px;
`,x=t.p`
 border-radius: 35px;
 padding: 7px 14px;
 justify-content: center;
 align-items: center;
 background: ${e=>e.theme.colors.modalBackground};
 margin: 0;
 color: ${e=>e.theme.colors.dark};

 &:nth-child(2) {
  grid-column: 2 / 4;
 }
`,oe=t.a`
 background-color: ${e=>e.theme.colors.primary};
 color: ${e=>e.theme.colors.white};
 font-size: 14px;
 border: none;
 font-size: ${e=>e.theme.fontSizes.medium};
 padding: 10px 20px;
 border-radius: 12px;
 margin-top: 10px;
 margin-left: 30px;
 margin-bottom: 30px;
 max-width: 25%;
 display: block;
 transition: background-color ${e=>e.theme.animation.cubicBezier};

 &:hover {
  background-color: ${e=>e.theme.colors.accent};
 }
`,te=({isOpen:e,onClose:r,advertId:i})=>{const c=document.querySelector("#modal-root"),n=u(s=>I(s,i));if(C.useEffect(()=>{const s=l=>{document.body.style.overflow=l?"hidden":"auto"},d=l=>{l.code==="Escape"&&r()};return e&&(s(!0),window.addEventListener("keydown",d)),()=>{s(!1),window.removeEventListener("keydown",d)}},[e,r]),!e||!n)return null;const m=n.rentalConditions.split(`
`),h=({text:s})=>{const d=s.split(/(\d+)/).map((l,k)=>/\d+/.test(l)?o.jsx("span",{style:{color:"#3470FF"},children:l},k):l);return o.jsx(o.Fragment,{children:d})};return z.createPortal(o.jsx(Y,{onClick:r,children:o.jsxs(G,{onClick:s=>s.stopPropagation(),children:[o.jsx(K,{onClick:r,children:o.jsx(Q,{})}),o.jsxs(V,{children:[o.jsx(X,{src:n.img,alt:`${n.make} ${n.model}`}),o.jsxs(Z,{children:[n.make," ",o.jsx(j,{children:n.model}),","," ",n.year]}),o.jsxs(p,{children:[n.address.split(", ").slice(-2).join(" | ")," |"," ",`Id: ${n.id}`," | ",`Year: ${n.year}`," |"," ",`Type: ${n.type}`]}),o.jsxs(p,{children:[`Fuel Consumption: ${n.fuelConsumption}`," |"," ",`Engine Size: ${n.engineSize}`]}),o.jsx(_,{children:n.description}),o.jsx(g,{children:"Accessories and functionalities:"}),o.jsx(p,{children:n.accessories.join(" | ")}),o.jsx(p,{children:n.functionalities.join(" | ")}),o.jsx(g,{children:"Rental Conditions:"}),o.jsxs(ee,{children:[m.map((s,d)=>o.jsx(x,{children:o.jsx(h,{text:s})},d)),o.jsx(x,{children:o.jsx(h,{text:`Mileage: ${n.mileage.toLocaleString("en-US")}`})}),o.jsx(x,{children:o.jsx(h,{text:`Price: ${n.rentalPrice}`})})]}),o.jsx(oe,{href:"tel:+38095678901",children:"Rental car"})]})]})}),c)};te.propTypes={onClose:a.func.isRequired,isOpen:a.bool,advertId:a.number,text:a.string};const ae=t.ul`
 display: grid;
 gap: 20px;
 margin-bottom: 20px;

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
  grid-template-columns: repeat(3, 1fr);
 }

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  grid-template-columns: repeat(4, 1fr);
 }
`,ce=t.button`
 color: ${e=>e.theme.colors.primary};
 border: none;
 width: 100%;
 font-size: ${e=>e.theme.fontSizes.medium};
 margin-top: 50px;
 font-weight: 500;
 transition: color ${e=>e.theme.animation.cubicBezier};

 &:hover {
  color: ${e=>e.theme.colors.accent};
 }
`;export{W as A,ce as B,ae as C,te as M,P as a,b,se as g,ie as s};
