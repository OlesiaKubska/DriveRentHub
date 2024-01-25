import{h,u as i,P as c,j as t,a as p,b as x,t as g}from"./index-JMgtZHdL.js";const u=e=>e.adverts,b=e=>e.filters,l=e=>u(e).adverts,S=(e,o)=>l(e).find(r=>r.id===o),k=e=>e.favorites.favorites,P=h([l,b],(e,o)=>Array.isArray(e)?e.filter(r=>{const s=(!o.price.min||r.rentalPrice>=o.price.min)&&(!o.price.max||r.rentalPrice<=o.price.max),n=(!o.mileage.min||r.mileage>=o.mileage.min)&&(!o.mileage.max||r.mileage<=o.mileage.max);return(!o.brand||r.make===o.brand)&&s&&n}):(console.error("adverts is not an array:",e),[])),$="/DriveRentHub/assets/car-g-CJjgUd.jpg",f=i.div`
 position: relative;
 width: 100%;
 height: 200px;
`,w=i.div`
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
`,v=i.img`
 width: 100%;
 height: 200px;
 object-fit: cover;
 border-radius: 12px;
`,j=i.div`
 padding: 14px 4px 4px 4px;
 flex: 1;

 div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
 }
`,y=i.h3`
 color: ${e=>e.theme.colors.dark};
 font-size: 16px;
`,C=i.span`
 color: ${e=>e.theme.colors.primary};
`,z=i.h3`
 color: ${e=>e.theme.colors.dark};
 font-size: 16px;
`,a=i.p`
 color: ${e=>e.theme.colors.gray};
 font-size: 12px;
 margin-bottom: 4px;
`,B=i.button`
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
`,d=({src:e,alt:o,...r})=>{const s=n=>{n.target.src=$};return t.jsx(v,{src:e,alt:o,onError:s,...r})};d.propTypes={src:c.string.isRequired,alt:c.string.isRequired};const A=i.button`
 position: absolute;
 top: 10px;
 right: 10px;
 font-size: 20px;
 width: 18px;
 height: 18px;
 background-color: transparent;
`,F=i.svg`
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
`,M="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-outline'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.7778'%20d='M24%208l-16%2016M8%208l16%2016'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-chevron-down'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%23fff'%20style='stroke:%20var(--color1,%20%23fff)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='3.2'%20d='M8%2012l8%208%208-8'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-heart'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.6667'%20d='M27.787%206.147c-0.681-0.681-1.49-1.222-2.38-1.591s-1.844-0.559-2.807-0.559c-0.963%200-1.917%200.19-2.807%200.559s-1.698%200.909-2.38%201.591l-1.413%201.413-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811%200.773-5.187%202.148c-1.376%201.376-2.148%203.241-2.148%205.187s0.773%203.811%202.148%205.187l11.787%2011.787%2011.787-11.787c0.681-0.681%201.222-1.49%201.591-2.38s0.559-1.844%200.559-2.807c0-0.963-0.19-1.917-0.559-2.807s-0.909-1.699-1.591-2.38z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-chevron'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='3.2'%20d='M8%2012l8%208%208-8'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",m=({advertId:e})=>{const o=p(),s=x(k).includes(e),n=()=>{o(g(e))};return t.jsx(A,{onClick:n,children:t.jsx(F,{$isFavorite:s,children:t.jsx("use",{href:`${M}#icon-heart`})})})};m.propTypes={advertId:c.number.isRequired};const I=({advert:e,onOpenModal:o})=>t.jsxs(w,{children:[t.jsxs(f,{children:[t.jsx(d,{src:e.img,alt:`${e.make} ${e.model}`}),t.jsx(m,{advertId:e.id})]}),t.jsxs(j,{children:[t.jsxs("div",{children:[t.jsxs(y,{children:[`${e.make}`," ",t.jsx(C,{children:`${e.model}`}),", ",`${e.year}`]}),t.jsx(z,{children:`${e.rentalPrice}`})]}),t.jsx(a,{children:`${e.address.split(", ").slice(-2).join(" | ")} | ${e.rentalCompany} | Premium`}),t.jsx(a,{children:`${e.type} | ${e.model} | ${e.id} | ${e.functionalities[0]}`}),t.jsx(B,{onClick:()=>o(e.id),children:"Learn more"})]})]});I.propTypes={advert:c.object.isRequired,onOpenModal:c.func.isRequired};const T=i.div`
 display: grid;
 gap: 20px;
 margin-bottom: 20px;

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
  grid-template-columns: repeat(3, 1fr);
 }

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  grid-template-columns: repeat(4, 1fr);
 }
`,q=i.button`
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
`;export{I as A,q as B,a as C,C as M,P as a,T as b,k as c,l as d,S as g,M as s};
