(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1922:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={ESCAPE_REGEX:function(){return i},htmlEscapeAttributeString:function(){return c},htmlEscapeJsonString:function(){return o}};for(var n in r)Object.defineProperty(t,n,{enumerable:!0,get:r[n]});let a={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},i=/[&><\u2028\u2029]/g,s={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},l=/[&"'<>]/g;function o(e){return e.replace(i,e=>a[e])}function c(e){return e.replace(l,e=>s[e])}},2593:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={default:function(){return v},handleClientScriptLoad:function(){return x},initScriptLoader:function(){return b}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i=r(3623),s=r(6388),l=r(5155),o=i._(r(7650)),c=s._(r(2115)),d=r(5368),f=r(3584),u=r(8356),p=r(1922),g=new Map,m=new Set,h=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:a=null,dangerouslySetInnerHTML:i,children:s="",strategy:l="afterInteractive",onError:c,stylesheets:d}=e,u=r||t;if(u&&m.has(u))return;if(g.has(t)){m.add(u),g.get(t).then(n,c);return}let p=()=>{a&&a(),m.add(u)},h=document.createElement("script"),x=new Promise((e,t)=>{h.addEventListener("load",function(t){e(),n&&n.call(this,t),p()}),h.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});i?(h.innerHTML=i.__html||"",p()):s?(h.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):"",p()):t&&(h.src=t,g.set(t,x)),(0,f.setAttributesFromProps)(h,e),"worker"===l&&h.setAttribute("type","text/partytown"),h.setAttribute("data-nscript",l),d&&(e=>{if(o.default.preinit)return e.forEach(e=>{o.default.preinit(e,{as:"style"})});{let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}})(d),document.body.appendChild(h)};function x(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}):h(e)}function b(e){e.forEach(x),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");m.add(t)})}function y(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:a=null,strategy:i="afterInteractive",onError:s,stylesheets:f,...g}=e,{updateScripts:x,scripts:b,getIsSsr:y,appDir:v,nonce:w}=(0,c.useContext)(d.HeadManagerContext);w=g.nonce||w;let j=(0,c.useRef)(!1);(0,c.useEffect)(()=>{let e=t||r;j.current||(a&&e&&m.has(e)&&a(),j.current=!0)},[a,t,r]);let k=(0,c.useRef)(!1);if((0,c.useEffect)(()=>{if(!k.current){if("afterInteractive"===i)h(e);else"lazyOnload"===i&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}));k.current=!0}},[e,i]),("beforeInteractive"===i||"worker"===i)&&(x?(b[i]=(b[i]||[]).concat([{id:t,src:r,onLoad:n,onReady:a,onError:s,...g,nonce:w}]),x(b)):y&&y()?m.add(t||r):y&&!y()&&h({...e,nonce:w})),v){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===i)if(!r)return g.dangerouslySetInnerHTML&&(g.children=g.dangerouslySetInnerHTML.__html,delete g.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,p.htmlEscapeJsonString)(JSON.stringify([0,{...g,id:t}]))})`}});else return o.default.preload(r,g.integrity?{as:"script",integrity:g.integrity,nonce:w,crossOrigin:g.crossOrigin}:{as:"script",nonce:w,crossOrigin:g.crossOrigin}),(0,l.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,p.htmlEscapeJsonString)(JSON.stringify([r,{...g,id:t}]))})`}});"afterInteractive"===i&&r&&o.default.preload(r,g.integrity?{as:"script",integrity:g.integrity,nonce:w,crossOrigin:g.crossOrigin}:{as:"script",nonce:w,crossOrigin:g.crossOrigin})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let v=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4841:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(5155),a=r(9277);let i="#003882";function s(){return(0,n.jsxs)("div",{className:"fixed bottom-0 left-0 right-0 z-[200] block min-[550px]:hidden",children:[(0,n.jsx)("style",{children:`
        /* Faster, more aggressive wiggle */
        @keyframes heroPhoneWiggle {
          0%, 100% { transform: rotate(0deg);   }
          10%      { transform: rotate(-22deg); }
          20%      { transform: rotate(18deg);  }
          30%      { transform: rotate(-14deg); }
          40%      { transform: rotate(12deg);  }
          50%      { transform: rotate(-9deg);  }
          60%      { transform: rotate(7deg);   }
          70%      { transform: rotate(-5deg);  }
          80%      { transform: rotate(3deg);   }
          90%      { transform: rotate(-2deg);  }
        }
        .hero-phone {
          animation: heroPhoneWiggle 1s ease-in-out infinite;
          transform-origin: center;
        }

        /* Faster, larger ripple with double pulse */
        @keyframes heroRingRipple {
          0%   { transform: scale(1);    opacity: 0.95; }
          50%  {                         opacity: 0.35; }
          100% { transform: scale(2.1);  opacity: 0;    }
        }
        .hero-ring {
          animation: heroRingRipple 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          border: 2px solid #003882 !important;
          background: transparent !important;
          border-radius: 9999px !important;
        }

        /* Second ring with offset for extra "ping" effect */
        .hero-ring-2 {
          animation: heroRingRipple 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          animation-delay: 0.4s;
          border: 2px solid #003882 !important;
          background: transparent !important;
          border-radius: 9999px !important;
        }
      `}),(0,n.jsxs)("a",{href:`tel:${a.Dc.phoneRaw}`,"aria-label":`Call ${a.Dc.phone}`,className:"relative flex items-center justify-center gap-3 w-full px-4 py-3 active:opacity-95 transition-opacity",style:{background:"#CBD5E1"},children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-[15px] leading-tight tracking-wide text-[#1a1a1a]",style:{fontWeight:900},children:"Call US & Get Unpublished Train Deals"}),(0,n.jsx)("p",{className:"text-[26px] leading-tight tracking-wider mt-0.5",style:{color:i,fontWeight:900},children:a.Dc.phone})]}),(0,n.jsxs)("span",{className:"relative flex-shrink-0 flex items-center justify-center w-12 h-12",children:[(0,n.jsx)("span",{className:"absolute inset-0 rounded-full",style:{border:`2px solid ${i}`}}),(0,n.jsx)("span",{className:"hero-ring absolute inset-0",style:{border:`2px solid ${i}`,borderRadius:"9999px"}}),(0,n.jsx)("span",{className:"hero-ring-2 absolute inset-0",style:{border:`2px solid ${i}`,borderRadius:"9999px"}}),(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",className:"hero-phone relative z-10","aria-hidden":"true",children:(0,n.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",fill:i,stroke:i,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]})}},5233:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6872,23)),Promise.resolve().then(r.bind(r,6002)),Promise.resolve().then(r.t.bind(r,2593,23))},6002:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var n=r(5155),a=r(2115);function i(){let[e,t]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{let e=()=>t(!0);if("complete"!==document.readyState)return window.addEventListener("load",e,{once:!0}),()=>window.removeEventListener("load",e);e()},[]),!e)return null;let i=r(4841).A,s=r(6477).A;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{}),(0,n.jsx)(s,{})]})}},6477:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n=r(5155),a=r(5772),i=r(6369),s=r(5796),l=r(2115),o=r(9277);let c="#003882",d="#4cc9f0",f="#0a1f3d";function u(){let[e,t]=(0,l.useState)(!1),r=(0,l.useRef)(null),u=()=>{r.current&&(clearTimeout(r.current),r.current=null)},p=()=>{u(),r.current=setTimeout(()=>t(!1),150)},g=()=>{u(),t(!0)};return(0,l.useEffect)(()=>()=>u(),[]),(0,n.jsxs)("div",{className:"fixed bottom-6 right-6 z-[900] hidden min-[550px]:block",children:[(0,n.jsxs)("div",{"aria-hidden":!e,onMouseEnter:g,onMouseLeave:p,className:`
          absolute bottom-full right-0 mb-3 rounded-2xl overflow-hidden
          transition-all duration-300 ease-out origin-bottom-right
          ${e?"opacity-100 translate-y-0 scale-100 pointer-events-auto":"opacity-0 translate-y-2 scale-95 pointer-events-none"}
        `,style:{width:"340px",background:"#ffffff",border:`1.5px solid ${d}66`,boxShadow:"0 20px 48px -12px rgba(10, 31, 61, 0.28)"},children:[(0,n.jsx)("div",{className:"px-4 py-3",style:{background:`linear-gradient(135deg, ${c} 0%, #002244 100%)`},children:(0,n.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,n.jsx)("span",{className:"flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0",style:{background:"rgba(255,255,255,0.2)",border:"1px solid rgba(255,255,255,0.35)"},children:(0,n.jsx)(i.A,{size:16,strokeWidth:0,fill:"#ffffff",style:{color:"#ffffff"},className:"call-ring"})}),(0,n.jsxs)("div",{className:"min-w-0",children:[(0,n.jsx)("p",{className:"text-[10px] uppercase tracking-[0.14em]",style:{color:"rgba(255,255,255,0.8)",fontWeight:900},children:"24/7 Live Support"}),(0,n.jsx)("p",{className:"text-[14px] leading-tight",style:{color:"#ffffff",fontWeight:900},children:"Need Assistance?"})]})]})}),(0,n.jsxs)("div",{className:"px-4 py-3.5",children:[(0,n.jsx)("p",{className:"text-[13px] leading-snug mb-3",style:{color:f,fontWeight:900},children:"Talk to our Train agent — we're here to help with Train bookings, route changes, cancellations, and refunds."}),(0,n.jsxs)("a",{href:`tel:${o.Dc.phoneRaw}`,"aria-label":`Call ${o.Dc.phone}`,className:"group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl mb-2 transition-colors duration-300 hover:opacity-95",style:{background:c,boxShadow:`0 10px 24px -8px ${c}88`},children:[(0,n.jsxs)("div",{className:"flex items-center gap-2.5 min-w-0",children:[(0,n.jsx)(i.A,{size:16,strokeWidth:0,fill:"#ffffff",style:{color:"#ffffff"},className:"call-ring"}),(0,n.jsx)("span",{className:"text-[15px] whitespace-nowrap",style:{color:"#ffffff",fontWeight:900},children:o.Dc.phone})]}),(0,n.jsx)("span",{className:"text-[11px] uppercase tracking-[0.1em] transition-transform group-hover:translate-x-0.5",style:{color:"rgba(255,255,255,0.85)",fontWeight:900},children:"Call →"})]}),(0,n.jsxs)("a",{href:`mailto:${o.Dc.email}`,"aria-label":"Email us",className:"w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg transition-colors",style:{background:`${d}22`,color:f,fontWeight:900,fontSize:"12px",border:`1px solid ${d}66`},children:[(0,n.jsx)(s.A,{size:13,strokeWidth:3}),"Email Us"]})]})]}),(0,n.jsxs)("button",{type:"button","aria-label":"Open help","aria-expanded":e,onClick:()=>t(e=>!e),onMouseEnter:g,onMouseLeave:p,onFocus:g,onBlur:p,className:"relative flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95",style:{width:"80px",height:"80px",background:"transparent",border:"none",padding:0,cursor:"pointer"},children:[(0,n.jsx)("span",{"aria-hidden":"true",className:"absolute inset-0 rounded-full animate-ping",style:{background:`${c}22`,animationDuration:"2.5s"}}),(0,n.jsx)("span",{"aria-hidden":"true",className:"relative w-full h-full flex items-center justify-center cta-help-ring",children:(0,n.jsx)(a.default,{src:"images/cta-icon.png",alt:"",width:144,height:144,className:"w-full h-full object-contain drop-shadow-[0_10px_24px_rgba(216,17,89,0.35)]",priority:!0,quality:95})}),(0,n.jsx)("span",{"aria-hidden":"true",className:"absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center cta-help-bell",style:{background:c,border:"2px solid #ffffff",boxShadow:"0 4px 12px rgba(216,17,89,0.5)"},children:(0,n.jsx)(i.A,{size:13,strokeWidth:0,fill:"#ffffff",style:{color:"#ffffff"},className:"call-ring"})})]}),(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:`
            /* PNG wobble on the floating trigger */
            @keyframes helpRing {
              0%, 60%, 100% { transform: rotate(0deg); }
              65% { transform: rotate(-14deg); }
              70% { transform: rotate(12deg); }
              75% { transform: rotate(-10deg); }
              80% { transform: rotate(8deg); }
              85% { transform: rotate(-6deg); }
              90% { transform: rotate(4deg); }
              95% { transform: rotate(-2deg); }
            }
            .cta-help-ring {
              animation: helpRing 1.8s ease-in-out infinite;
              transform-origin: center;
              will-change: transform;
              display: inline-flex;
            }

            /* Bell badge bounce */
            @keyframes helpBell {
              0%, 60%, 100% { transform: scale(1); }
              65% { transform: scale(1.18); }
              70% { transform: scale(1); }
              75% { transform: scale(1.12); }
              80% { transform: scale(1); }
            }
            .cta-help-bell {
              animation: helpBell 1.8s ease-in-out infinite;
              transform-origin: center;
              will-change: transform;
            }

            /* Call icon ringing — applies to every .call-ring */
            @keyframes callRing {
              0%, 60%, 100% { transform: rotate(0deg); }
              65% { transform: rotate(-18deg); }
              70% { transform: rotate(16deg); }
              75% { transform: rotate(-12deg); }
              80% { transform: rotate(10deg); }
              85% { transform: rotate(-7deg); }
              90% { transform: rotate(5deg); }
              95% { transform: rotate(-2deg); }
            }
            .call-ring {
              animation: callRing 1.8s ease-in-out infinite;
              transform-origin: center;
              will-change: transform;
              display: inline-block;
            }

            @media (prefers-reduced-motion: reduce) {
              .cta-help-ring, .cta-help-bell, .call-ring {
                animation: none !important;
              }
            }
          `}})]})}},6872:()=>{},8356:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={cancelIdleCallback:function(){return i},requestIdleCallback:function(){return a}};for(var n in r)Object.defineProperty(t,n,{enumerable:!0,get:r[n]});let a="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},i="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9277:(e,t,r)=>{"use strict";r.d(t,{Dc:()=>a,Kq:()=>n,qt:()=>i});let n={name:"usticketcenter.com",domain:"usticketcenter.com",email:"info@trainhello.online",phone:"+1 (888) 892-3463",phoneRaw:"18888923463",address:"5809 Valley View Dr, Alexandria, VA 22310, USA",operatedBy:"Aeroflytickets INC",year:new Date().getFullYear()},a={phone:n.phone,phoneRaw:n.phoneRaw,email:n.email,address:n.address,supportHours:"24/7 Train Customer Support"},i={name:n.name,tagline:"Your Journey. Our Support.",logo:"logo/logomain.png",favicon:"/favicon.ico"};n.name,n.name,n.name}},e=>{e.O(0,[513,817,441,413,358],()=>e(e.s=5233)),_N_E=e.O()}]);