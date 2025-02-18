(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687],{1735:(e,t,a)=>{Promise.resolve().then(a.bind(a,3086))},5565:(e,t,a)=>{"use strict";a.d(t,{default:()=>l.a});var r=a(4146),l=a.n(r)},4146:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return d},getImageProps:function(){return s}});let r=a(306),l=a(666),n=a(7970),i=r._(a(5514));function s(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let d=n.Image},3086:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});var r=a(5155),l=a(2115);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let d=(0,l.forwardRef)((e,t)=>{let{color:a="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:d,className:o="",children:c,iconNode:m,...u}=e;return(0,l.createElement)("svg",{ref:t,...s,width:r,height:r,stroke:a,strokeWidth:d?24*Number(n)/Number(r):n,className:i("lucide",o),...u},[...m.map(e=>{let[t,a]=e;return(0,l.createElement)(t,a)}),...Array.isArray(c)?c:[c]])}),o=(e,t)=>{let a=(0,l.forwardRef)((a,r)=>{let{className:s,...o}=a;return(0,l.createElement)(d,{ref:r,iconNode:t,className:i("lucide-".concat(n(e)),s),...o})});return a.displayName="".concat(e),a},c=o("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),m=o("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]),u=o("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),x=o("CircleArrowDown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);var f=a(5565);let h=["Full Stack Developer","Front End Developer","Back End Developer"],g=e=>{let{icon:t,label:a,value:l,description:n}=e;return(0,r.jsxs)("div",{className:"flex flex-col items-center p-6 dark:bg-gray-800 w-48 h-40 sm:w-56 sm:h-56 rounded-lg shadow-md",children:[(0,r.jsx)(t,{className:"w-8 h-8 text-blue-500 mb-2"}),(0,r.jsx)("dt",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:a}),(0,r.jsx)("dd",{className:"mt-1 text-3xl font-semibold text-gray-900 dark:text-white",children:l}),(0,r.jsx)("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:n})]})},p=e=>{let{children:t,href:a,variant:l="primary",...n}=e;return(0,r.jsx)("a",{href:a,className:"".concat("inline-flex items-center px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"," ").concat("primary"===l?"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500":"bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500"),...n,children:t})},b=()=>{let[e,t]=(0,l.useState)(0),[a,n]=(0,l.useState)(""),[i,s]=(0,l.useState)(!1),[d,o]=(0,l.useState)(0),b=i?50:100;return(0,l.useEffect)(()=>{let a=setTimeout(()=>{let a=h[e];i?d>0?(n(e=>e.slice(0,-1)),o(e=>e-1)):(s(!1),t(e=>(e+1)%h.length)):d<a.length?(n(e=>e+a[d]),o(e=>e+1)):setTimeout(()=>s(!0),1e3)},b);return()=>clearTimeout(a)},[d,i]),(0,r.jsxs)("div",{className:"relative min-h-screen dark:from-gray-900 dark:to-blue-900",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] dark:bg-grid-slate-400/[0.05]"}),(0,r.jsxs)("div",{className:"absolute inset-0 flex items-center justify-center",children:[(0,r.jsx)("div",{className:"w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob"}),(0,r.jsx)("div",{className:"w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"}),(0,r.jsx)("div",{className:"w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"})]}),(0,r.jsxs)("div",{className:"relative container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen text-center",children:[(0,r.jsxs)("div",{className:"flex items-center mb-8 animate-fade-in",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{className:"text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2",children:["Hi, I'm"," ",(0,r.jsx)("span",{className:"text-blue-600 dark:text-blue-400",children:"Santhosh"})]}),(0,r.jsxs)("h2",{className:"text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300",children:[a,(0,r.jsx)("span",{className:"animate-blink",children:"|"})]})]}),(0,r.jsx)(f.default,{src:"/images/hero.png",alt:"Hero",width:"120",height:"120",className:"w-44 h-44 rounded-full ml-6 sm:ml-8 sm:w-52 sm:h-52"})]}),(0,r.jsx)("p",{className:"max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 animate-fade-in animation-delay-600",children:"I specialize in frontend development with React and Next and backend development with Node and Express. Passionate about building scalable, responsive web applications and creating intuitive user experiences."}),(0,r.jsxs)("div",{className:"flex flex-wrap justify-center gap-8 mb-10 animate-fade-in animation-delay-900",children:[(0,r.jsx)(g,{icon:c,label:"Projects Completed",value:"3+",description:"Many more to come"}),(0,r.jsx)(g,{icon:m,label:"Years of Experience",value:"7+",description:"Constantly learning & growing"}),(0,r.jsx)(g,{icon:u,label:"Location",value:"Bengaluru",description:"Karnataka, India"})]}),(0,r.jsx)("div",{className:"flex flex-wrap justify-center gap-4 mb-12 animate-fade-in animation-delay-1200",children:(0,r.jsxs)(p,{href:"/Resume.pdf",download:!0,children:[(0,r.jsx)(x,{className:"w-5 h-5 mr-2"}),"Download Resume"]})})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[970,441,517,358],()=>t(1735)),_N_E=e.O()}]);