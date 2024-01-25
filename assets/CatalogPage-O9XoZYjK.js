import{u,P as j,a as O,b as m,j as s,s as F,c as Q,d as q,e as P,r as f,f as U,g as H,p as D}from"./index-Whr-GgWI.js";import{g as E,C as R,A as N,B as W,M as G}from"./CarList.styled-UQ0wAi8n.js";import{G as V,S as Y,H as K}from"./Section-1JNHVgHP.js";const J=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],X=u.div`
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
`,Z=u.form`
 display: flex;
 flex-direction: column;

 @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
  flex-direction: row;
  gap: 18px;
 }
`,w=u.p`
 margin: 0;
 margin-bottom: ${e=>e.theme.spacing(1)};
 font-size: ${e=>e.theme.fontSizes.small};
 color: ${e=>e.theme.colors.dark};
`,ee=u.select`
 display: flex;
 padding: 14px 18px 14px 18px;
 justify-content: center;
 align-items: center;
 border: none;
 border-radius: 14px;
 font-size: ${e=>e.theme.fontSizes.medium};
 color: ${e=>e.theme.colors.dark};
 background: ${e=>e.theme.colors.light};
`,te=u.select`
 display: flex;
 width: 126px;
 padding: 14px 18px;
 align-items: flex-start;
 border-radius: 14px;
 border: none;
 font-size: ${e=>e.theme.fontSizes.medium};
 color: ${e=>e.theme.colors.dark};
 background: ${e=>e.theme.colors.light};
`,ne=u.input`
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
`,re=u.input`
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
`,ae=u.button`
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
`,C=()=>{const e=O(),t=m(o=>o.filters),a=o=>{e(F(o.target.value))},r=o=>{e(Q(o.target.value))},n=o=>{const{name:c,value:x}=o.target;e(q({...t.mileage,[c]:x.replace(/\D/g,"")}))},i=o=>{o.preventDefault(),e(P(t))};return s.jsx(X,{children:s.jsxs(Z,{onSubmit:i,children:[s.jsxs("div",{children:[s.jsx(w,{children:"Car brand"}),s.jsxs(ee,{value:t.brand,onChange:a,children:[s.jsx("option",{value:"",children:"Enter the text"}),J.map(o=>s.jsx("option",{value:o,children:o},o))]})]}),s.jsxs("div",{children:[s.jsx(w,{children:"Price/ 1 hour"}),s.jsxs(te,{value:t.price,onChange:r,children:[s.jsx("option",{value:"",children:"To $"}),s.jsx("option",{value:"30",children:"30"}),s.jsx("option",{value:"40",children:"40"}),s.jsx("option",{value:"50",children:"50"}),s.jsx("option",{value:"60",children:"60"}),s.jsx("option",{value:"70",children:"70"}),s.jsx("option",{value:"80",children:"80"})]})]}),s.jsxs("div",{children:[s.jsx(w,{children:"Car mileage / km"}),s.jsx(ne,{type:"text",name:"from",value:t.mileage.min,onChange:n,placeholder:"From"}),s.jsx(re,{type:"text",name:"to",value:t.mileage.max,onChange:n,placeholder:"To"})]}),s.jsx(ae,{type:"submit",children:"Search"})]})})};C.propTypes={onFilterChange:j.func.isRequired,onSearch:j.func.isRequired};const ie=()=>{const[e,t]=f.useState(!1),[a,r]=f.useState(null),n=O(),i=m(E),o=m(d=>d.filters),[c,x]=f.useState(1);f.useEffect(()=>{n(U({page:c,limit:12,filters:o}))},[n,c,o]);const L=()=>{x(d=>d+1)},z=d=>{r(d),t(!0)},A=()=>{t(!1),r(null)};return s.jsxs("div",{children:[s.jsx(R,{children:i.map(d=>s.jsx(N,{advert:d,onOpenModal:z},d.id))}),s.jsx(W,{onClick:L,children:"Load more"}),s.jsx(G,{isOpen:e,onClose:A,advertId:a})]})},oe=u.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 50px;
 background-color: ${e=>e.theme.colors.mainBackground};
`;var _={},v={linear:function(e,t,a,r){var n=a-t;return n*e/r+t},easeInQuad:function(e,t,a,r){var n=a-t;return n*(e/=r)*e+t},easeOutQuad:function(e,t,a,r){var n=a-t;return-n*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,a,r){var n=a-t;return n*(e/=r)*e*e+t},easeOutCubic:function(e,t,a,r){var n=a-t;return n*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,a,r){var n=a-t;return n*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,a,r){var n=a-t;return-n*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,a,r){var n=a-t;return n*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,a,r){var n=a-t;return n*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,a,r){var n=a-t;return-n*Math.cos(e/r*(Math.PI/2))+n+t},easeOutSine:function(e,t,a,r){var n=a-t;return n*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,a,r){var n=a-t;return-n/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,a,r){var n=a-t;return e==0?t:n*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(e,t,a,r){var n=a-t;return e==r?t+n:n*(-Math.pow(2,-10*e/r)+1)+t},easeInOutExpo:function(e,t,a,r){var n=a-t;return e===0?t:e===r?t+n:(e/=r/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,a,r){var n=a-t;return-n*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(e,t,a,r){var n=a-t;return n*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,a,r){var n=a-t,i,o,c;return c=1.70158,o=0,i=n,e===0?t:(e/=r)===1?t+n:(o||(o=r*.3),i<Math.abs(n)?(i=n,c=o/4):c=o/(2*Math.PI)*Math.asin(n/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*r-c)*(2*Math.PI)/o))+t)},easeOutElastic:function(e,t,a,r){var n=a-t,i,o,c;return c=1.70158,o=0,i=n,e===0?t:(e/=r)===1?t+n:(o||(o=r*.3),i<Math.abs(n)?(i=n,c=o/4):c=o/(2*Math.PI)*Math.asin(n/i),i*Math.pow(2,-10*e)*Math.sin((e*r-c)*(2*Math.PI)/o)+n+t)},easeInOutElastic:function(e,t,a,r){var n=a-t,i,o,c;return c=1.70158,o=0,i=n,e===0?t:(e/=r/2)===2?t+n:(o||(o=r*(.3*1.5)),i<Math.abs(n)?(i=n,c=o/4):c=o/(2*Math.PI)*Math.asin(n/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*r-c)*(2*Math.PI)/o))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*r-c)*(2*Math.PI)/o)*.5+n+t)},easeInBack:function(e,t,a,r,n){var i=a-t;return n===void 0&&(n=1.70158),i*(e/=r)*e*((n+1)*e-n)+t},easeOutBack:function(e,t,a,r,n){var i=a-t;return n===void 0&&(n=1.70158),i*((e=e/r-1)*e*((n+1)*e+n)+1)+t},easeInOutBack:function(e,t,a,r,n){var i=a-t;return n===void 0&&(n=1.70158),(e/=r/2)<1?i/2*(e*e*(((n*=1.525)+1)*e-n))+t:i/2*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)+t},easeInBounce:function(e,t,a,r){var n=a-t,i;return i=v.easeOutBounce(r-e,0,n,r),n-i+t},easeOutBounce:function(e,t,a,r){var n=a-t;return(e/=r)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,a,r){var n=a-t,i;return e<r/2?(i=v.easeInBounce(e*2,0,n,r),i*.5+t):(i=v.easeOutBounce(e*2-r,0,n,r),i*.5+n*.5+t)}},se=v,l=typeof window<"u"?window:{screen:{},navigator:{}},p=(l.matchMedia||function(){return{matches:!1}}).bind(l),$=!1,ce={get passive(){return $=!0}},T=function(){};l.addEventListener&&l.addEventListener("p",T,ce);l.removeEventListener&&l.removeEventListener("p",T,!1);var le=$,S="ontouchstart"in l,ue="TouchEvent"in l,de=S||ue&&p("(any-pointer: coarse)").matches;(l.navigator.maxTouchPoints||0)>0;var B=l.navigator.userAgent||"",he=p("(pointer: coarse)").matches&&/iPad|Macintosh/.test(B)&&Math.min(l.screen.width||0,l.screen.height||0)>=768;(p("(pointer: coarse)").matches||!p("(pointer: fine)").matches&&S)&&/Windows.*Firefox/.test(B);p("(any-pointer: fine)").matches||p("(any-hover: hover)").matches;const pe=Object.freeze(Object.defineProperty({__proto__:null,supportsPassiveEvents:le},Symbol.toStringTag,{value:"Module"})),fe=H(pe);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var M=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;function ge(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function xe(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(i){n[i]=i}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var we=xe()?Object.assign:function(e,t){for(var a,r=ge(e),n,i=1;i<arguments.length;i++){a=Object(arguments[i]);for(var o in a)ve.call(a,o)&&(r[o]=a[o]);if(M){n=M(a);for(var c=0;c<n.length;c++)me.call(a,n[c])&&(r[n[c]]=a[n[c]])}}return r};Object.defineProperty(_,"__esModule",{value:!0});var ye=function(){function e(t,a){for(var r=0;r<a.length;r++){var n=a[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),Oe=f,y=g(Oe),Se=D,h=g(Se),Ie=se,je=g(Ie),b=fe,Me=we,k=g(Me);function g(e){return e&&e.__esModule?e:{default:e}}function be(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ke(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Pe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var I=function(e){Pe(t,e);function t(a){be(this,t);var r=ke(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a));return r.state={show:!1},r.data={startValue:0,currentTime:0,startTime:null,rafId:null},r.handleClick=r.handleClick.bind(r),r.handleScroll=r.handleScroll.bind(r),r.scrollStep=r.scrollStep.bind(r),r.stopScrolling=r.stopScrolling.bind(r),r}return ye(t,[{key:"shouldComponentUpdate",value:function(r,n){return n.show!==this.state.show}},{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("wheel",this.stopScrolling,b.supportsPassiveEvents?{passive:!0}:!1),window.addEventListener("touchstart",this.stopScrolling,b.supportsPassiveEvents?{passive:!0}:!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("wheel",this.stopScrolling,!1),window.removeEventListener("touchstart",this.stopScrolling,!1)}},{key:"notifyOnShow",value:function(){this.props.onShow&&typeof this.props.onShow=="function"&&this.props.onShow()}},{key:"notifyOnHide",value:function(){this.props.onHide&&typeof this.props.onHide=="function"&&this.props.onHide()}},{key:"handleScroll",value:function(){window.pageYOffset>this.props.showUnder?this.state.show||(this.setState({show:!0}),this.notifyOnShow()):this.state.show&&(this.setState({show:!1}),this.notifyOnHide())}},{key:"handleClick",value:function(){this.stopScrolling(),this.data.startValue=window.pageYOffset,this.data.currentTime=0,this.data.startTime=null,this.data.rafId=window.requestAnimationFrame(this.scrollStep)}},{key:"scrollStep",value:function(r){this.data.startTime||(this.data.startTime=r),this.data.currentTime=r-this.data.startTime;var n=je.default[this.props.easing](this.data.currentTime,this.data.startValue,this.props.topPosition,this.props.duration);window.pageYOffset<=this.props.topPosition?this.stopScrolling():(window.scrollTo(window.pageYOffset,n),this.data.rafId=window.requestAnimationFrame(this.scrollStep))}},{key:"stopScrolling",value:function(){window.cancelAnimationFrame(this.data.rafId)}},{key:"render",value:function(){var r=this.props.style,n=y.default.createElement("div",{style:r,onClick:this.handleClick},this.props.children),i=(0,k.default)({},t.defaultProps.style);return i=(0,k.default)(i,r),i.opacity=this.state.show?1:0,i.visibility=this.state.show?"visible":"hidden",i.transitionProperty="opacity, visibility",y.default.cloneElement(n,{style:i})}}]),t}(y.default.Component),Ee=_.default=I;I.defaultProps={duration:250,easing:"easeOutCubic",style:{position:"fixed",bottom:50,right:30,cursor:"pointer",transitionDuration:"0.2s",transitionTimingFunction:"linear",transitionDelay:"0s"},topPosition:0};I.propTypes={topPosition:h.default.number,showUnder:h.default.number.isRequired,easing:h.default.oneOf(["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]),duration:h.default.number,style:h.default.object,onShow:h.default.func,onHide:h.default.func};function Ce(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M285.628 42.475c-39.602 0-73 28.513-73 65 0 18.43 8.528 34.82 22.066 46.533l8.473-16.67c-7.876-8.202-12.54-18.667-12.54-29.863 0-25.37 23.91-47 55-47s55 21.63 55 47c0 17.403-11.253 33.046-28.356 41.154l-7.482 21.556c1.9-.462 3.774-.986 5.613-1.58l9.158 16.013c-10.326 7.263-20.32 16.266-31.034 27.472l81.35 179.392c50.265 2.318 98.764-24.335 123.754-68.01L385.8 158.635c-20.166 4.027-36.39 9.054-50.875 16.598l-8.09-14.144c19.057-11.615 31.793-31.09 31.793-53.613 0-36.487-33.398-65-73-65zm-122.666 5.947c-2.66.03-5.454.47-8.152 1.348-6.17 2.004-11.39 6.134-13.66 10.59l-.288.57-64.904 92.297c-2.135 4.452-2.382 10.947-.457 16.97 1.97 6.157 6.045 11.305 10.202 13.422l143.682 73.16c4.072 2.075 10.59 2.405 16.648.427 5.945-1.94 10.996-5.885 13.403-10.492l25.36-74.26c.05 0 .1.003.15.004l6.327-18.23c-.086.008-.175.01-.26.018l4.905-14.365.29-.568c2.27-4.456 2.54-11.12.55-17.282-1.99-6.162-6.1-11.355-10.434-13.562l-32.078-16.333c-6.543 8.178-8.55 19.868-.346 30.87l2.11 3.532 10.288 5.4-8.256 16.214-.146-.07-8.118 15.97c.045.023.09.043.135.065l-6.303 12.376-101.59-51.728 18.606-36.538 4.082-8.02 30.854 15.712c1.556-9.81 4.922-19.248 10.335-28.404L172.103 50.31c-2.514-1.28-5.72-1.925-9.14-1.888zm217.928 131.38l24.082 43.82-71.864 39.49-19.748-35.93-4.334-7.887 71.864-39.492zm-7.106 24.444L333.472 226.4l6.742 12.27 40.312-22.154-6.742-12.27zM114.5 218.482L93.63 259.475l69.508 35.392 20.873-40.992-69.51-35.393zm297.214 17.41l24.08 43.817-71.863 39.49-19.745-35.93-4.334-7.887 71.864-39.492zm-7.106 24.442l-40.314 22.154 6.744 12.27 40.313-22.154-6.742-12.27zM99.72 282.774h-.002L18.372 442.53l6.123 18.83 77.264-151.737 16.038 8.168-77.262 151.735 22.375-7.275 12.968-4.217-6.986-21.556 21.496-6.97L83.392 408l21.52-6.998-5.37-16.504 41.17-80.852-40.992-20.873z"},child:[]}]})(e)}const _e=u(Ce)`
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
`;function $e(){return s.jsx(Ee,{showUnder:600,children:s.jsx(_e,{})})}const ze=()=>{const e=O(),t=m(E),a=n=>{e(P(n))},r=()=>{};return s.jsxs(Y,{children:[s.jsx(K,{}),s.jsx($e,{}),s.jsxs(oe,{children:[s.jsx(C,{onFilterChange:a,onSearch:r}),s.jsx(ie,{filters:t})]})]})};export{ze as default};
