import{u as d,a as M,b as w,j as s,s as L,c as F,d as A,e as I,r as Q,f as v,g as U,i as q,h as H,p as N}from"./index-YQZ0h6uX.js";import{g as $,s as R,C as D,A as W,B as V,M as G}from"./CarList.styled-JiL5-QIw.js";import{G as Y,S as K,H as J}from"./Section-8ODJpJQy.js";const X=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],Z=d.div`
 display: flex;
 align-items: center;
 background-color: ${e=>e.theme.colors.mainBackground};
 margin: 10px;
`,ee=d.form`
 display: flex;
 flex-direction: column;

 @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
  flex-direction: row;
  gap: 14px;
 }
`,O=d.p`
 margin: 0;
 margin-bottom: ${e=>e.theme.spacing(1)};
 font-size: ${e=>e.theme.fontSizes.small};
 color: ${e=>e.theme.colors.dark};
`,te=d.select`
 display: flex;
 padding: 14px 18px 14px 18px;
 justify-content: center;
 align-items: center;
 border: none;
 border-radius: 14px;
 font-size: ${e=>e.theme.fontSizes.small};
 color: ${e=>e.theme.colors.dark};
 background: ${e=>e.theme.colors.light};

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  font-size: ${e=>e.theme.fontSizes.medium};
 }

 &:focus {
  outline: none;
 }
`,ne=d.select`
 display: flex;
 width: 120px;
 padding: 14px 18px;
 align-items: flex-start;
 border-radius: 14px;
 border: none;
 font-size: ${e=>e.theme.fontSizes.small};
 color: ${e=>e.theme.colors.dark};
 background: ${e=>e.theme.colors.light};

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  font-size: ${e=>e.theme.fontSizes.medium};
 }

 &:focus {
  outline: none;
 }
`,re=d.input`
 border: none;
 width: 70px;
 padding: 14px 46px 14px 24px;
 align-items: center;
 border-radius: 14px;
 border-right: 1px solid rgba(138, 138, 137, 0.2);
 background: ${e=>e.theme.colors.light};
 font-size: ${e=>e.theme.fontSizes.small};
 color: ${e=>e.theme.colors.dark};

 @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
  border-radius: 14px 0px 0px 14px;
 }

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  font-size: ${e=>e.theme.fontSizes.medium};
 }

 &:focus {
  outline: none;
 }
`,ae=d.input`
 border: none;
 width: 70px;
 padding: 14px 46px 14px 24px;
 align-items: center;
 border-radius: 14px;
 border-right: 1px solid rgba(138, 138, 137, 0.2);
 background: ${e=>e.theme.colors.light};
 font-size: ${e=>e.theme.fontSizes.small};
 color: ${e=>e.theme.colors.dark};

 @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
  border-radius: 0px 14px 14px 0px;
 }

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  font-size: ${e=>e.theme.fontSizes.medium};
 }

 &:focus {
  outline: none;
 }
`,b=d.button`
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
 font-size: ${e=>e.theme.fontSizes.small};
 margin-top: 20px;
 transition: background-color ${e=>e.theme.animation.cubicBezier};

 @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  font-size: ${e=>e.theme.fontSizes.medium};
 }

 &:hover {
  background-color: ${e=>e.theme.colors.accent};
 }
`,oe=()=>{const e=M(),t=w(l=>l.filters),a=l=>{e(L(l.target.value))},r=l=>{const m=l.target.value;e(F(m))},n=l=>{const{name:m,value:h}=l.target;!isNaN(h)&&h.trim()!==""&&e(A({...t.mileage,[m]:h}))},o=[];for(let l=10;l<=500;l+=10)o.push(l);const i=()=>{e(I(t))},c=()=>{e(Q())},y=l=>{l.preventDefault(),e(I(t))};return s.jsx(Z,{children:s.jsxs(ee,{onSubmit:y,children:[s.jsxs("div",{children:[s.jsx(O,{children:"Car brand"}),s.jsxs(te,{value:t.brand,onChange:a,children:[s.jsx("option",{value:"",children:"Enter the text"}),X.map(l=>s.jsx("option",{value:l,children:l},l))]})]}),s.jsxs("div",{children:[s.jsx(O,{children:"Price/ 1 hour"}),s.jsxs(ne,{value:t.price,onChange:r,children:[s.jsx("option",{value:"",children:"To $"}),o.map(l=>s.jsxs("option",{value:l,children:["$",l]},l))]})]}),s.jsxs("div",{children:[s.jsx(O,{children:"Car mileage / km"}),s.jsx(re,{type:"text",name:"from",value:t.mileage.min,onChange:n,placeholder:"From"}),s.jsx(ae,{type:"text",name:"to",value:t.mileage.max,onChange:n,placeholder:"To"})]}),s.jsx(b,{type:"button",onClick:i,children:"Search"}),s.jsx(b,{type:"button",onClick:c,children:"Reset Filters"})]})})},ie=()=>{const[e,t]=v.useState(!1),[a,r]=v.useState(null),n=M(),o=w($),i=w(R);v.useEffect(()=>{n(U({page:i.currentPage,limit:i.itemsPerPage}))},[i.currentPage,n,i.itemsPerPage,i.totalItems]);const c=()=>{i.currentPage<i.totalPages&&n(q())},y=h=>{r(h),t(!0)},l=()=>{t(!1),r(null)},m=i.currentPage<i.totalPages;return s.jsxs("div",{children:[s.jsx(D,{children:o.map(h=>s.jsx(W,{advert:h,onOpenModal:y},h.id))}),m&&s.jsx(V,{onClick:c,children:"Load more"}),s.jsx(G,{isOpen:e,onClose:l,advertId:a})]})},se=d.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 50px;
 background-color: ${e=>e.theme.colors.mainBackground};
`;var _={},g={linear:function(e,t,a,r){var n=a-t;return n*e/r+t},easeInQuad:function(e,t,a,r){var n=a-t;return n*(e/=r)*e+t},easeOutQuad:function(e,t,a,r){var n=a-t;return-n*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,a,r){var n=a-t;return n*(e/=r)*e*e+t},easeOutCubic:function(e,t,a,r){var n=a-t;return n*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,a,r){var n=a-t;return n*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,a,r){var n=a-t;return-n*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,a,r){var n=a-t;return n*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,a,r){var n=a-t;return n*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,a,r){var n=a-t;return-n*Math.cos(e/r*(Math.PI/2))+n+t},easeOutSine:function(e,t,a,r){var n=a-t;return n*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,a,r){var n=a-t;return-n/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,a,r){var n=a-t;return e==0?t:n*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(e,t,a,r){var n=a-t;return e==r?t+n:n*(-Math.pow(2,-10*e/r)+1)+t},easeInOutExpo:function(e,t,a,r){var n=a-t;return e===0?t:e===r?t+n:(e/=r/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,a,r){var n=a-t;return-n*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(e,t,a,r){var n=a-t;return n*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,a,r){var n=a-t,o,i,c;return c=1.70158,i=0,o=n,e===0?t:(e/=r)===1?t+n:(i||(i=r*.3),o<Math.abs(n)?(o=n,c=i/4):c=i/(2*Math.PI)*Math.asin(n/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-c)*(2*Math.PI)/i))+t)},easeOutElastic:function(e,t,a,r){var n=a-t,o,i,c;return c=1.70158,i=0,o=n,e===0?t:(e/=r)===1?t+n:(i||(i=r*.3),o<Math.abs(n)?(o=n,c=i/4):c=i/(2*Math.PI)*Math.asin(n/o),o*Math.pow(2,-10*e)*Math.sin((e*r-c)*(2*Math.PI)/i)+n+t)},easeInOutElastic:function(e,t,a,r){var n=a-t,o,i,c;return c=1.70158,i=0,o=n,e===0?t:(e/=r/2)===2?t+n:(i||(i=r*(.3*1.5)),o<Math.abs(n)?(o=n,c=i/4):c=i/(2*Math.PI)*Math.asin(n/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-c)*(2*Math.PI)/i))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*r-c)*(2*Math.PI)/i)*.5+n+t)},easeInBack:function(e,t,a,r,n){var o=a-t;return n===void 0&&(n=1.70158),o*(e/=r)*e*((n+1)*e-n)+t},easeOutBack:function(e,t,a,r,n){var o=a-t;return n===void 0&&(n=1.70158),o*((e=e/r-1)*e*((n+1)*e+n)+1)+t},easeInOutBack:function(e,t,a,r,n){var o=a-t;return n===void 0&&(n=1.70158),(e/=r/2)<1?o/2*(e*e*(((n*=1.525)+1)*e-n))+t:o/2*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)+t},easeInBounce:function(e,t,a,r){var n=a-t,o;return o=g.easeOutBounce(r-e,0,n,r),n-o+t},easeOutBounce:function(e,t,a,r){var n=a-t;return(e/=r)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,a,r){var n=a-t,o;return e<r/2?(o=g.easeInBounce(e*2,0,n,r),o*.5+t):(o=g.easeOutBounce(e*2-r,0,n,r),o*.5+n*.5+t)}},ce=g,u=typeof window<"u"?window:{screen:{},navigator:{}},f=(u.matchMedia||function(){return{matches:!1}}).bind(u),z=!1,le={get passive(){return z=!0}},B=function(){};u.addEventListener&&u.addEventListener("p",B,le);u.removeEventListener&&u.removeEventListener("p",B,!1);var ue=z,j="ontouchstart"in u,de="TouchEvent"in u,he=j||de&&f("(any-pointer: coarse)").matches;(u.navigator.maxTouchPoints||0)>0;var T=u.navigator.userAgent||"",pe=f("(pointer: coarse)").matches&&/iPad|Macintosh/.test(T)&&Math.min(u.screen.width||0,u.screen.height||0)>=768;(f("(pointer: coarse)").matches||!f("(pointer: fine)").matches&&j)&&/Windows.*Firefox/.test(T);f("(any-pointer: fine)").matches||f("(any-hover: hover)").matches;const fe=Object.freeze(Object.defineProperty({__proto__:null,supportsPassiveEvents:ue},Symbol.toStringTag,{value:"Module"})),me=H(fe);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var P=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;function we(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function xe(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(o){n[o]=o}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var ye=xe()?Object.assign:function(e,t){for(var a,r=we(e),n,o=1;o<arguments.length;o++){a=Object(arguments[o]);for(var i in a)ve.call(a,i)&&(r[i]=a[i]);if(P){n=P(a);for(var c=0;c<n.length;c++)ge.call(a,n[c])&&(r[n[c]]=a[n[c]])}}return r};Object.defineProperty(_,"__esModule",{value:!0});var Oe=function(){function e(t,a){for(var r=0;r<a.length;r++){var n=a[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),Se=v,S=x(Se),Ie=N,p=x(Ie),Me=ce,je=x(Me),C=me,ke=ye,E=x(ke);function x(e){return e&&e.__esModule?e:{default:e}}function be(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Ce(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var k=function(e){Ce(t,e);function t(a){be(this,t);var r=Pe(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a));return r.state={show:!1},r.data={startValue:0,currentTime:0,startTime:null,rafId:null},r.handleClick=r.handleClick.bind(r),r.handleScroll=r.handleScroll.bind(r),r.scrollStep=r.scrollStep.bind(r),r.stopScrolling=r.stopScrolling.bind(r),r}return Oe(t,[{key:"shouldComponentUpdate",value:function(r,n){return n.show!==this.state.show}},{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("wheel",this.stopScrolling,C.supportsPassiveEvents?{passive:!0}:!1),window.addEventListener("touchstart",this.stopScrolling,C.supportsPassiveEvents?{passive:!0}:!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("wheel",this.stopScrolling,!1),window.removeEventListener("touchstart",this.stopScrolling,!1)}},{key:"notifyOnShow",value:function(){this.props.onShow&&typeof this.props.onShow=="function"&&this.props.onShow()}},{key:"notifyOnHide",value:function(){this.props.onHide&&typeof this.props.onHide=="function"&&this.props.onHide()}},{key:"handleScroll",value:function(){window.pageYOffset>this.props.showUnder?this.state.show||(this.setState({show:!0}),this.notifyOnShow()):this.state.show&&(this.setState({show:!1}),this.notifyOnHide())}},{key:"handleClick",value:function(){this.stopScrolling(),this.data.startValue=window.pageYOffset,this.data.currentTime=0,this.data.startTime=null,this.data.rafId=window.requestAnimationFrame(this.scrollStep)}},{key:"scrollStep",value:function(r){this.data.startTime||(this.data.startTime=r),this.data.currentTime=r-this.data.startTime;var n=je.default[this.props.easing](this.data.currentTime,this.data.startValue,this.props.topPosition,this.props.duration);window.pageYOffset<=this.props.topPosition?this.stopScrolling():(window.scrollTo(window.pageYOffset,n),this.data.rafId=window.requestAnimationFrame(this.scrollStep))}},{key:"stopScrolling",value:function(){window.cancelAnimationFrame(this.data.rafId)}},{key:"render",value:function(){var r=this.props.style,n=S.default.createElement("div",{style:r,onClick:this.handleClick},this.props.children),o=(0,E.default)({},t.defaultProps.style);return o=(0,E.default)(o,r),o.opacity=this.state.show?1:0,o.visibility=this.state.show?"visible":"hidden",o.transitionProperty="opacity, visibility",S.default.cloneElement(n,{style:o})}}]),t}(S.default.Component),Ee=_.default=k;k.defaultProps={duration:250,easing:"easeOutCubic",style:{position:"fixed",bottom:50,right:30,cursor:"pointer",transitionDuration:"0.2s",transitionTimingFunction:"linear",transitionDelay:"0s"},topPosition:0};k.propTypes={topPosition:p.default.number,showUnder:p.default.number.isRequired,easing:p.default.oneOf(["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]),duration:p.default.number,style:p.default.object,onShow:p.default.func,onHide:p.default.func};function $e(e){return Y({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M285.628 42.475c-39.602 0-73 28.513-73 65 0 18.43 8.528 34.82 22.066 46.533l8.473-16.67c-7.876-8.202-12.54-18.667-12.54-29.863 0-25.37 23.91-47 55-47s55 21.63 55 47c0 17.403-11.253 33.046-28.356 41.154l-7.482 21.556c1.9-.462 3.774-.986 5.613-1.58l9.158 16.013c-10.326 7.263-20.32 16.266-31.034 27.472l81.35 179.392c50.265 2.318 98.764-24.335 123.754-68.01L385.8 158.635c-20.166 4.027-36.39 9.054-50.875 16.598l-8.09-14.144c19.057-11.615 31.793-31.09 31.793-53.613 0-36.487-33.398-65-73-65zm-122.666 5.947c-2.66.03-5.454.47-8.152 1.348-6.17 2.004-11.39 6.134-13.66 10.59l-.288.57-64.904 92.297c-2.135 4.452-2.382 10.947-.457 16.97 1.97 6.157 6.045 11.305 10.202 13.422l143.682 73.16c4.072 2.075 10.59 2.405 16.648.427 5.945-1.94 10.996-5.885 13.403-10.492l25.36-74.26c.05 0 .1.003.15.004l6.327-18.23c-.086.008-.175.01-.26.018l4.905-14.365.29-.568c2.27-4.456 2.54-11.12.55-17.282-1.99-6.162-6.1-11.355-10.434-13.562l-32.078-16.333c-6.543 8.178-8.55 19.868-.346 30.87l2.11 3.532 10.288 5.4-8.256 16.214-.146-.07-8.118 15.97c.045.023.09.043.135.065l-6.303 12.376-101.59-51.728 18.606-36.538 4.082-8.02 30.854 15.712c1.556-9.81 4.922-19.248 10.335-28.404L172.103 50.31c-2.514-1.28-5.72-1.925-9.14-1.888zm217.928 131.38l24.082 43.82-71.864 39.49-19.748-35.93-4.334-7.887 71.864-39.492zm-7.106 24.444L333.472 226.4l6.742 12.27 40.312-22.154-6.742-12.27zM114.5 218.482L93.63 259.475l69.508 35.392 20.873-40.992-69.51-35.393zm297.214 17.41l24.08 43.817-71.863 39.49-19.745-35.93-4.334-7.887 71.864-39.492zm-7.106 24.442l-40.314 22.154 6.744 12.27 40.313-22.154-6.742-12.27zM99.72 282.774h-.002L18.372 442.53l6.123 18.83 77.264-151.737 16.038 8.168-77.262 151.735 22.375-7.275 12.968-4.217-6.986-21.556 21.496-6.97L83.392 408l21.52-6.998-5.37-16.504 41.17-80.852-40.992-20.873z"},child:[]}]})(e)}const _e=d($e)`
 height: 50px;
 width: 50px;
 fill: ${e=>e.theme.colors.primary};
 opacity: 0.6;
 border-radius: 50%;
 transition: all 0.3s ease-in-out;

 &:hover {
  opacity: 0.8;
  fill: ${e=>e.theme.colors.accent};
 }
`;function ze(){return s.jsx(Ee,{showUnder:600,children:s.jsx(_e,{})})}const Fe=()=>{const e=M(),t=w($),a=n=>{e(I(n))},r=()=>{};return s.jsxs(K,{children:[s.jsx(J,{}),s.jsx(ze,{}),s.jsxs(se,{children:[s.jsx(oe,{onFilterChange:a,onSearch:r}),s.jsx(ie,{filters:t})]})]})};export{Fe as default};
