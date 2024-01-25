import{h as v,u as i,P as c,j as o,a as y,b as g,t as C,r as z,i as B}from"./index-Whr-GgWI.js";const b=e=>e.adverts.adverts,F=e=>e.filters,M=(e,t)=>b(e).find(n=>n.id===t),R=e=>e.favorites.favorites,P=e=>{const t=e.replace(/[^0-9.-]+/g,"");return t?parseFloat(t):null},oe=v([b,F],(e,t)=>Array.isArray(e)?e.filter(n=>{const a=P(n.rentalPrice),r=t.price===null||t.price===""||a!==null&&a>=t.price,h=(!t.mileage.min||n.mileage>=t.mileage.min)&&(!t.mileage.max||n.mileage<=t.mileage.max);return(!t.brand||n.make===t.brand)&&r&&h}):(console.error("adverts is not an array:",e),[])),S="/DriveRentHub/assets/car-g-CJjgUd.jpg",I=i.div`
 position: relative;
 width: 100%;
 height: 200px;
`,A=i.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 min-height: 320px;
 border-radius: 8px;
 overflow: hidden;

 &:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: box-shadow ${e=>e.theme.animation.cubicBezier};
 }
`,E=i.img`
 width: 100%;
 height: 200px;
 object-fit: cover;
 border-radius: 12px;
`,T=i.div`
 padding: 14px 4px 4px 4px;
 flex: 1;

 div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
 }
`,q=i.h3`
 color: ${e=>e.theme.colors.dark};
 font-size: 16px;
`,f=i.span`
 color: ${e=>e.theme.colors.primary};
`,D=i.h3`
 color: ${e=>e.theme.colors.dark};
 font-size: 16px;
`,p=i.p`
 color: ${e=>e.theme.colors.gray};
 font-size: 12px;
 margin-bottom: 4px;
`,L=i.button`
 background-color: ${e=>e.theme.colors.primary};
 color: ${e=>e.theme.colors.white};
 border: none;
 font-size: ${e=>e.theme.fontSizes.medium};
 padding: 10px 20px;
 border-radius: 12px;
 width: 100%;
 margin-top: 28px;
 transition: background-color ${e=>e.theme.animation.cubicBezier};

 &:hover {
  background-color: ${e=>e.theme.colors.accent};
 }
`,k=({src:e,alt:t,...n})=>{const a=r=>{r.target.src=S};return o.jsx(E,{src:e,alt:t,onError:a,...n})};k.propTypes={src:c.string.isRequired,alt:c.string.isRequired};const H=i.button`
 position: absolute;
 top: 10px;
 right: 10px;
 font-size: 20px;
 width: 18px;
 height: 18px;
 background-color: transparent;
`,N=i.svg`
 width: 100%;
 height: 100%;
 fill: ${e=>e.$isFavorite?e.theme.colors.accent:"transparent"};
 stroke: ${e=>e.$isFavorite?e.theme.colors.accent:e.theme.colors.white};
 stroke-width: 1px;

 &:hover,
 &:focus {
  fill: ${e=>e.theme.colors.accent};
  stroke: ${e=>e.theme.colors.accent};
 }
`,j="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-outline'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.7778'%20d='M24%208l-16%2016M8%208l16%2016'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-chevron-down'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%23fff'%20style='stroke:%20var(--color1,%20%23fff)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='3.2'%20d='M8%2012l8%208%208-8'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-heart'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.6667'%20d='M27.787%206.147c-0.681-0.681-1.49-1.222-2.38-1.591s-1.844-0.559-2.807-0.559c-0.963%200-1.917%200.19-2.807%200.559s-1.698%200.909-2.38%201.591l-1.413%201.413-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811%200.773-5.187%202.148c-1.376%201.376-2.148%203.241-2.148%205.187s0.773%203.811%202.148%205.187l11.787%2011.787%2011.787-11.787c0.681-0.681%201.222-1.49%201.591-2.38s0.559-1.844%200.559-2.807c0-0.963-0.19-1.917-0.559-2.807s-0.909-1.699-1.591-2.38z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-chevron'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='3.2'%20d='M8%2012l8%208%208-8'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",w=({advertId:e})=>{const t=y(),a=g(R).includes(e),r=()=>{t(C(e))};return o.jsx(H,{onClick:r,children:o.jsx(N,{$isFavorite:a,children:o.jsx("use",{href:`${j}#icon-heart`})})})};w.propTypes={advertId:c.number.isRequired};const O=({advert:e,onOpenModal:t})=>o.jsxs(A,{children:[o.jsxs(I,{children:[o.jsx(k,{src:e.img,alt:`${e.make} ${e.model}`}),o.jsx(w,{advertId:e.id})]}),o.jsxs(T,{children:[o.jsxs("div",{children:[o.jsxs(q,{children:[`${e.make}`," ",o.jsx(f,{children:`${e.model}`}),", ",`${e.year}`]}),o.jsx(D,{children:`${e.rentalPrice}`})]}),o.jsx(p,{children:`${e.address.split(", ").slice(-2).join(" | ")} | ${e.rentalCompany} | Premium`}),o.jsx(p,{children:`${e.type} | ${e.model} | ${e.id} | ${e.functionalities[0]}`}),o.jsx(L,{onClick:()=>t(e.id),children:"Learn more"})]})]});O.propTypes={advert:c.object.isRequired,onOpenModal:c.func.isRequired};const U=i.div`
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
`,G=i.div`
 background: white;
 width: auto;
 max-width: 541px;
 height: auto;
 /* max-height: 752px; */
 border-radius: 12px;
 box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
 z-index: 11;
 position: relative;
`,J=i.button`
 background: transparent;
 border: none;
 position: absolute;
 top: 16px;
 right: 16px;
 width: 18px;
 height: 18px;
`,W=i.svg`
 width: 100%;
 height: 100%;
 stroke: ${e=>e.theme.colors.dark};

 &:hover,
 &:focus {
  stroke: ${e=>e.theme.colors.accent};
 }
`,K=i.div`
 padding: 30px;
`,Q=i.img`
 margin-top: 20px;
 width: 100%;
 object-fit: cover;
 border-radius: 12px;
 height: auto;
 margin-bottom: 10px;
`,V=i.h3`
 color: ${e=>e.theme.colors.dark};
 font-size: 18px;
`,X=i.p`
 color: ${e=>e.theme.colors.dark};
 font-size: 14px;
 margin-top: 10px;
`,u=i.h4`
 color: ${e=>e.theme.colors.dark};
 font-size: 14px;
 margin-bottom: 8px;
`,Y=i.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-template-rows: auto auto;
 font-size: 12px;
`,x=i.p`
 border-radius: 35px;
 padding: 7px 14px;
 justify-content: center;
 align-items: center;
 background: #f9f9f9;
 margin: 0;

 &:nth-child(2) {
  grid-column: 2 / 4;
 }
`,Z=i.a`
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
`,_=({isOpen:e,onClose:t,advertId:n})=>{const a=document.querySelector("#modal-root"),r=g(s=>M(s,n));if(z.useEffect(()=>{const s=l=>{document.body.style.overflow=l?"hidden":"auto"},d=l=>{l.code==="Escape"&&t()};return e&&(s(!0),window.addEventListener("keydown",d)),()=>{s(!1),window.removeEventListener("keydown",d)}},[e,t]),!e||!r)return null;const h=r.rentalConditions.split(`
`),m=({text:s})=>{const d=s.split(/(\d+)/).map((l,$)=>/\d+/.test(l)?o.jsx("span",{style:{color:"#3470FF"},children:l},$):l);return o.jsx(o.Fragment,{children:d})};return B.createPortal(o.jsx(U,{onClick:t,children:o.jsxs(G,{onClick:s=>s.stopPropagation(),children:[o.jsx(J,{onClick:t,children:o.jsx(W,{children:o.jsx("use",{href:`${j}#icon-outline`})})}),o.jsxs(K,{children:[o.jsx(Q,{src:r.img,alt:`${r.make} ${r.model}`}),o.jsxs(V,{children:[r.make," ",o.jsx(f,{children:r.model}),","," ",r.year]}),o.jsxs(p,{children:[r.address.split(", ").slice(-2).join(" | ")," |"," ",r.rentalCompany," | Premium"]}),o.jsxs(p,{children:[r.type," | ",r.model," | ",r.id," |"," ",r.functionalities[0]]}),o.jsx(X,{children:r.description}),o.jsx(u,{children:"Accessories and functionalities:"}),o.jsx(p,{children:r.accessories.join(" | ")}),o.jsx(p,{children:r.functionalities.join(" | ")}),o.jsx(u,{children:"Rental Conditions:"}),o.jsxs(Y,{children:[h.map((s,d)=>o.jsx(x,{children:o.jsx(m,{text:s})},d)),o.jsx(x,{children:o.jsx(m,{text:`Mileage: ${r.mileage.toLocaleString("en-US")}`})}),o.jsx(x,{children:o.jsx(m,{text:`Price: ${r.rentalPrice}`})})]})]}),o.jsx(Z,{href:"tel:+38095678901",children:"Rental car"})]})}),a)};_.propTypes={onClose:c.func.isRequired,isOpen:c.bool,advertId:c.number,text:c.string};const te=i.div`
 display: grid;
 gap: 20px;
 margin-bottom: 20px;

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
  grid-template-columns: repeat(3, 1fr);
 }

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  grid-template-columns: repeat(4, 1fr);
 }
`,re=i.button`
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
`;export{O as A,re as B,te as C,_ as M,R as a,oe as g,b as s};
