(()=>{var e={};e.id=2404,e.ids=[2404],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},78893:e=>{"use strict";e.exports=require("buffer")},84770:e=>{"use strict";e.exports=require("crypto")},17702:e=>{"use strict";e.exports=require("events")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},98216:e=>{"use strict";e.exports=require("net")},68621:e=>{"use strict";e.exports=require("punycode")},76162:e=>{"use strict";e.exports=require("stream")},82452:e=>{"use strict";e.exports=require("tls")},17360:e=>{"use strict";e.exports=require("url")},71568:e=>{"use strict";e.exports=require("zlib")},22763:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>d,routeModule:()=>p,tree:()=>m}),r(13332),r(32029),r(68666);var s=r(23191),i=r(88716),a=r(37922),n=r.n(a),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let m=["",{children:["jci-members",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,13332)),"/Users/mikko.oksanen/Desktop/Content AI Oy/Cursor/lyyli-ai/src/app/jci-members/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,32029)),"/Users/mikko.oksanen/Desktop/Content AI Oy/Cursor/lyyli-ai/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,68666)),"/Users/mikko.oksanen/Desktop/Content AI Oy/Cursor/lyyli-ai/src/app/not-found.tsx"]}],d=["/Users/mikko.oksanen/Desktop/Content AI Oy/Cursor/lyyli-ai/src/app/jci-members/page.tsx"],c="/jci-members/page",u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/jci-members/page",pathname:"/jci-members",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:m}})},98593:(e,t,r)=>{Promise.resolve().then(r.bind(r,73678))},73678:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(10326),i=r(17577),a=r(35835),n=r(90434),o=r(78937);let l=()=>{let{language:e}=(0,a.useLanguage)();return(0,i.useEffect)(()=>{let e=document.createElement("script");return e.src="https://js-eu1.hsforms.net/forms/embed/146205702.js",e.defer=!0,document.body.appendChild(e),()=>{document.body.contains(e)&&document.body.removeChild(e)}},[]),(0,i.useEffect)(()=>{let e=document.createElement("style");return e.innerHTML=`
      /* Hide HubSpot branding */
      .hubspot-link__container {
        display: none !important;
      }
      
      /* Hide any powered by text */
      a.submitted-message__powered-by {
        display: none !important;
      }
      
      /* Adjust form width and spacing */
      .hs-form .hs-form-field {
        max-width: 100% !important;
      }
      
      .hs-form .legal-consent-container {
        max-width: 100% !important;
      }
      
      /* Make form container wider */
      .hs-form-iframe, .hs-form-frame {
        width: 100% !important;
        max-width: 600px !important;
        margin: 0 auto !important;
      }
      
      /* Improve mobile form styles */
      @media (max-width: 768px) {
        .hs-form .hs-form-field input, 
        .hs-form .hs-form-field select,
        .hs-form .hs-form-field textarea {
          min-height: 44px !important;
          font-size: 16px !important;
        }
        
        .hs-form .hs-button {
          min-height: 44px !important;
          width: 100% !important;
          font-size: 16px !important;
        }
      }
    `,document.head.appendChild(e),()=>{document.head.contains(e)&&document.head.removeChild(e)}},[]),(0,s.jsxs)("div",{className:"min-h-screen flex flex-col",children:[s.jsx("header",{className:"py-4 md:py-6 px-4 md:px-6 w-full",children:s.jsx("div",{className:"container mx-auto",children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[s.jsx(n.default,{href:"/full",className:"flex items-center","aria-label":"Lyyli home page",children:s.jsx("img",{src:"/lovable-uploads/39c9c229-44c8-40ee-9e43-016269635def.png",alt:"Lyyli.ai",className:"h-10 w-auto"})}),s.jsx("div",{children:s.jsx(o.W,{})})]})})}),s.jsx("main",{className:"flex-grow flex flex-col items-center justify-center py-8 px-4 md:py-16 bg-gradient-to-b from-white to-accent/20",children:(0,s.jsxs)("div",{className:"max-w-2xl w-full mx-auto text-center animate-fade-in",children:[(0,s.jsxs)("div",{className:"mb-8",children:[s.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary",children:"fi"===e?"Tervetuloa JCI j\xe4senet!":"Welcome JCI Members!"}),s.jsx("p",{className:"text-base sm:text-lg md:text-xl mb-6 text-foreground/80 px-2",children:"fi"===e?"Haluaisimme kutsua sinut testaamaan uutta teko\xe4lyll\xe4 toimivaa sis\xe4ll\xf6nhallintaj\xe4rjestelm\xe4\xe4mme. J\xe4t\xe4 yhteystietosi alla olevaan lomakkeeseen, niin otamme sinuun yhteytt\xe4 pian.":"We would like to invite you to test our new AI-powered content management platform. Please leave your contact information in the form below and we will get in touch with you soon."})]}),s.jsx("div",{className:"hs-form-frame","data-region":"eu1","data-form-id":"1bb10d50-0764-4b5c-93e2-63e788096b52","data-portal-id":"146205702","aria-label":"fi"===e?"JCI j\xe4senten lomake":"JCI members form"})]})}),s.jsx("footer",{className:"py-6 md:py-8 px-4 text-center text-sm text-foreground/70",children:s.jsx("div",{className:"container mx-auto",children:(0,s.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Lyyli. ","fi"===e?"Kaikki oikeudet pid\xe4tet\xe4\xe4n.":"All rights reserved."]})})})]})}},13332:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(19510),i=r(90484);function a(){return s.jsx(i.Z,{})}},90484:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(68570).createProxy)(String.raw`/Users/mikko.oksanen/Desktop/Content AI Oy/Cursor/lyyli-ai/src/pages/JCIMembers.tsx#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[7686,2098],()=>r(22763));module.exports=s})();