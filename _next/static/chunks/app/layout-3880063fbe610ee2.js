(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1665:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,5795,23)),Promise.resolve().then(r.t.bind(r,9497,23)),Promise.resolve().then(r.t.bind(r,347,23)),Promise.resolve().then(r.bind(r,246))},8173:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let n=r(306),o=r(5155),l=n._(r(2115)),a=r(180),u=r(1394),i=r(4116),s=r(4445),c=r(5353),f=r(2170),d=r(9544);function p(e,t,r){"undefined"!=typeof window&&(async()=>e.prefetch(t,r))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}r(2363);let m=l.default.forwardRef(function(e,t){let r,n;let{href:a,as:m,children:b,prefetch:y=null,passHref:g,replace:x,shallow:v,scroll:j,onClick:_,onMouseEnter:w,onTouchStart:P,legacyBehavior:k=!1,...M}=e;r=b,k&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let E=l.default.useContext(u.AppRouterContext),O=!1!==y,C=null===y?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:N,as:S}=l.default.useMemo(()=>{let e=h(a);return{href:e,as:m?h(m):e}},[a,m]),I=l.default.useRef(N),T=l.default.useRef(S);k&&(n=l.default.Children.only(r));let A=k?n&&"object"==typeof n&&n.ref:t,[R,L,U]=(0,i.useIntersection)({rootMargin:"200px"}),F=l.default.useCallback(e=>{(T.current!==S||I.current!==N)&&(U(),T.current=S,I.current=N),R(e)},[S,N,U,R]),B=(0,c.useMergedRef)(F,A);l.default.useEffect(()=>{E&&L&&O&&p(E,N,{kind:C})},[S,N,L,O,E,C]);let K={ref:B,onClick(e){k||"function"!=typeof _||_(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),E&&!e.defaultPrevented&&function(e,t,r,n,o,a,u){let{nodeName:i}=e.currentTarget;"A"===i.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),l.default.startTransition(()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,E,N,S,x,v,j)},onMouseEnter(e){k||"function"!=typeof w||w(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),E&&O&&p(E,N,{kind:C})},onTouchStart:function(e){k||"function"!=typeof P||P(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),E&&O&&p(E,N,{kind:C})}};return(0,f.isAbsoluteUrl)(S)?K.href=S:k&&!g&&("a"!==n.type||"href"in n.props)||(K.href=(0,d.addBasePath)(S)),k?l.default.cloneElement(n,K):(0,o.jsx)("a",{...M,...K,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(2115),o=r(8571),l="function"==typeof IntersectionObserver,a=new Map,u=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,s=i||!l,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(l){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),a.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=l(e,n),o.current=l(t,n))}:e||t,[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return l},formatWithValidation:function(){return u},urlObjectKeys:function(){return a}});let n=r(9955)._(r(4156)),o=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,l=e.protocol||"",a=e.pathname||"",u=e.hash||"",i=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),i&&"object"==typeof i&&(i=String(n.urlQueryToSearchParams(i)));let c=e.search||i&&"?"+i||"";return l&&!l.endsWith(":")&&(l+=":"),e.slashes||(!l||o.test(l))&&!1!==s?(s="//"+(s||""),a&&"/"!==a[0]&&(a="/"+a)):s||(s=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),""+l+s+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+u}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return l(e)}},4156:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function l(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return l},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return g},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return b},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return i},getLocationOrigin:function(){return a},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return s},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return x}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),l=0;l<n;l++)o[l]=arguments[l];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function u(){let{href:e}=window.location,t=a();return e.substring(t.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n)throw Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class g extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}},246:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var n=r(5155),o=r(8173),l=r.n(o),a=r(6658),u=r(2115);let i=[{name:"Hero",path:"/hero"},{name:"Skills",path:"/skills"},{name:"Projects",path:"/projects"},{name:"Contact",path:"/contact"}];function s(){let e=(0,a.usePathname)(),[t,r]=(0,u.useState)(!1);return(0,n.jsx)("nav",{className:"w-full bg-gradient-to-br from-gray-900 to-blue-900 p-4 shadow-md",children:(0,n.jsxs)("div",{className:"max-w-6xl mx-auto flex justify-between items-center",children:[(0,n.jsx)(l(),{href:"/",className:"text-white text-xl font-bold hover:opacity-80",children:"My Portfolio"}),(0,n.jsx)("button",{onClick:()=>{r(!t)},className:"lg:hidden text-white focus:outline-none",children:t?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:"2",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:"2",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})}),(0,n.jsx)("ul",{className:"hidden lg:flex space-x-6",children:i.map(t=>(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:t.path,className:"text-white text-lg ".concat(e===t.path?"font-bold border-b-2 border-white":"hover:opacity-80"),children:t.name})},t.path))}),t&&(0,n.jsx)("div",{className:"lg:hidden absolute top-16 left-0 right-0 bg-gradient-to-br from-gray-900 to-blue-900 p-4 shadow-md z-10",children:(0,n.jsx)("ul",{className:"flex flex-col space-y-4",children:i.map(t=>(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:t.path,className:"text-white text-lg ".concat(e===t.path?"font-bold border-b-2 border-white":"hover:opacity-80"),onClick:()=>r(!1),children:t.name})},t.path))})})]})})}},347:()=>{},5795:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},9497:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}}},e=>{var t=t=>e(e.s=t);e.O(0,[830,441,517,358],()=>t(1665)),_N_E=e.O()}]);