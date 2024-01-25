import{u as s,L as j,j as o,N as O,R as c,r as w,T as P,P as g}from"./index-Whr-GgWI.js";const S=s.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 box-shadow: 0 4px 0 rgba(0, 0, 0, 0.5);
 background-color: ${({theme:e})=>e.colors.headerBackground};
`,m=s(j)`
 color: ${({theme:e})=>e.colors.accent};
 margin: 0 10px;
 font-size: ${({theme:e})=>e.fontSizes.small};
 transition: color ${e=>e.theme.animation.cubicBezier};

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
  font-size: ${({theme:e})=>e.fontSizes.medium};
 }

 &:hover {
  text-decoration: underline;
  color: ${({theme:e})=>e.colors.primary};
 }
`,z="/DriveRentHub/assets/Logo-HDcmCbjh.png",N=s.img`
 width: 84px;
 height: 84px;
`,C=()=>o.jsx("div",{children:o.jsx(O,{to:"/home",children:o.jsx(N,{src:z,alt:"logo"})})});var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},p=c.createContext&&c.createContext(v),E=["attr","size","title"];function k(e,t){if(e==null)return{};var r=$(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function $(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?h(Object(r),!0).forEach(function(n){L(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function L(e,t,r){return t=T(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e){var t=_(e,"string");return typeof t=="symbol"?t:String(t)}function _(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b(e){return e&&e.map((t,r)=>c.createElement(t.tag,d({key:r},t.attr),b(t.child)))}function x(e){return t=>c.createElement(B,u({attr:d({},e.attr)},t),b(e.child))}function B(e){var t=r=>{var{attr:n,size:i,title:a}=e,y=k(e,E),f=i||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),c.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,y,{className:l,style:d(d({color:e.color||r.color},r.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),a&&c.createElement("title",null,a),e.children)};return p!==void 0?c.createElement(p.Consumer,null,r=>t(r)):t(v)}function D(e){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function H(e){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const I=s.button`
 background: transparent;
 padding: 6px 14px;
`,R=s.span`
 font-size: 22px;
 color: ${({theme:e})=>e.colors.accent};

 &:hover {
  color: ${e=>e.theme.colors.primary};
 }
`,W=()=>{const{themeName:e,toggleTheme:t}=w.useContext(P);return o.jsx(I,{onClick:t,children:o.jsx(R,{children:e==="light"?o.jsx(D,{}):o.jsx(H,{})})})},K=()=>o.jsxs(S,{children:[o.jsx(C,{}),o.jsx(W,{}),o.jsx(m,{to:"/",children:"Home"}),o.jsxs("div",{children:[o.jsx(m,{to:"/catalog",children:"Catalog"}),o.jsx(m,{to:"/favorites",children:"Favorites"})]})]}),F=s.div`
 padding: 30px;
`,M=({className:e,children:t})=>o.jsx("section",{className:e,children:o.jsx(F,{children:t})});M.propTypes={className:g.string,children:g.node.isRequired};export{x as G,K as H,M as S};
