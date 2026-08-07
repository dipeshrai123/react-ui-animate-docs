"use strict";(self.webpackChunkreact_ui_animate_docs=self.webpackChunkreact_ui_animate_docs||[]).push([[2634],{4857:(e,n,t)=>{t.r(n),t.d(n,{default:()=>pe});var i=t(6540),s=t(53),o=t(9408),a=t(5489),r=t(8432),l=t(4586),c=t(8478),d=t(9879),p=t(3),h=t(8027),u=t(54),m=t(4848);const f=26,x=140,g=16,b=.12;function y(){const e=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const n=e.current;if(!n)return;const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=n.getContext("2d"),s=n.parentElement;let o,a=0,r=0,l=Math.min(window.devicePixelRatio||1,2),c=[],d=!0;const p={x:-9999,y:-9999,active:!1},h=()=>{a=s.clientWidth,r=s.clientHeight,n.width=a*l,n.height=r*l,n.style.width=`${a}px`,n.style.height=`${r}px`,i.setTransform(l,0,0,l,0,0),(()=>{c=[];const e=Math.ceil(a/f)+1,n=Math.ceil(r/f)+1;for(let t=0;t<n;t++)for(let n=0;n<e;n++)c.push({baseX:n*f,baseY:t*f,ox:0,oy:0,scale:1})})()},u=.9*r,m=()=>{if(d){i.clearRect(0,0,a,r);for(const e of c){let n=0,t=0,s=1;if(p.active){const i=e.baseX-p.x,o=e.baseY-p.y,a=Math.hypot(i,o);if(a<x){const e=1-a/x,r=e*e,l=Math.atan2(o,i);n=Math.cos(l)*g*r,t=Math.sin(l)*g*r,s=1+1.6*r}}e.ox+=(n-e.ox)*b,e.oy+=(t-e.oy)*b,e.scale+=(s-e.scale)*b;const o=e.baseX+e.ox,a=e.baseY+e.oy,l=.16*(a>u?Math.max(0,1-(a-u)/(r-u)):1);l<=.002||(i.beginPath(),i.fillStyle=`rgba(255, 255, 255, ${l})`,i.arc(o,a,1*e.scale,0,2*Math.PI),i.fill())}o=requestAnimationFrame(m)}},y=e=>{const{x:t,y:i}=((e,t)=>{const i=n.getBoundingClientRect();return{x:e-i.left,y:t-i.top}})(e.clientX,e.clientY);p.x=t,p.y=i,p.active=!0},w=()=>{p.active=!1};let v;const k=()=>{clearTimeout(v),v=setTimeout(h,150)},j=()=>{document.hidden?(d=!1,cancelAnimationFrame(o)):d||(d=!0,o=requestAnimationFrame(m))};return h(),t?(m(),d=!1,()=>cancelAnimationFrame(o)):(o=requestAnimationFrame(m),s.addEventListener("pointermove",y),s.addEventListener("pointerleave",w),window.addEventListener("resize",k),document.addEventListener("visibilitychange",j),()=>{d=!1,cancelAnimationFrame(o),clearTimeout(v),s.removeEventListener("pointermove",y),s.removeEventListener("pointerleave",w),window.removeEventListener("resize",k),document.removeEventListener("visibilitychange",j)})}),[]),(0,m.jsx)("canvas",{ref:e,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}})}var w=t(5965);const v=w.A.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 22px;
  background: #0c0d12;
  border: 1px solid #262a35;
  box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.7),
    0 1px 0 rgba(255, 255, 255, 0.04) inset;
`,k=w.A.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 13px 16px;
  border-bottom: 1px solid #21242e;
  background: rgba(14, 15, 20, 0.6);
  backdrop-filter: blur(6px);
`,j=w.A.div`
  display: flex;
  gap: 6px;
`,S=w.A.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #262a35;
`,T=w.A.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
`,A=w.A.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6);
  animation: heroShowcasePulse 2s ease-out infinite;

  @keyframes heroShowcasePulse {
    0% {
      box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5);
    }
    70% {
      box-shadow: 0 0 0 7px rgba(52, 211, 153, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
    }
  }
`,C=w.A.div`
  position: relative;
  flex: 1;
  min-height: 360px;
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 24px 24px;
`,D=w.A.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 320px;
  transform: translate(-50%, -50%);
  background: radial-gradient(closest-side, rgba(59, 130, 246, 0.22), transparent);
  pointer-events: none;
`,N=(0,w.A)(u.i0.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 128px;
  height: 128px;
  margin: -64px 0 0 -64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 26px;
  cursor: grab;
  user-select: none;
  touch-action: none;
  color: #ffffff;
  background: linear-gradient(155deg, #4f8ef7 0%, #3b6fe0 100%);
  border: 1px solid #2f5bc4;
  box-shadow: 0 18px 40px -12px rgba(59, 130, 246, 0.55);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  z-index: 3;

  &:active {
    cursor: grabbing;
  }
`,I=w.A.div`
  position: absolute;
`,z=(0,w.A)(u.i0.div)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 14px;
  background: #14161d;
  border: 1px solid #262a35;
  box-shadow: 0 14px 30px -14px rgba(0, 0, 0, 0.6);
  z-index: 2;
`,L=w.A.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 9px;
  font-size: 15px;
`,_=w.A.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`,E=w.A.div`
  font-size: 12.5px;
  font-weight: 600;
  color: #e5e7eb;
  line-height: 1.3;
`,R=w.A.div`
  font-size: 11px;
  color: #6b7280;
  line-height: 1.3;
`,P=(0,w.A)(u.i0.div)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border-radius: 999px;
  background: #14161d;
  border: 1px solid #262a35;
  color: #9ca3af;
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: -0.01em;
  z-index: 2;
`,Y=w.A.div`
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  font-family: var(--site-mono);
  font-size: 11.5px;
  color: #4b5563;
  white-space: nowrap;
  z-index: 2;
`;function B(e){const[n,t]=(0,u.h)(0),[s,o]=(0,u.h)(14);return(0,i.useEffect)((()=>{const n=setTimeout((()=>{t((0,u.fY)(1,{duration:500})),o((0,u.ek)(0,{damping:20}))}),e);return()=>clearTimeout(n)}),[e,t,o]),{opacity:n,translateY:s}}function M(){const e=B(650);return(0,m.jsx)(I,{className:"heroFloatSlow",style:{top:"13%",left:"8%"},children:(0,m.jsxs)(z,{style:{rotate:"-6deg",opacity:e.opacity,translateY:e.translateY},children:[(0,m.jsx)(L,{style:{background:"#1c2333",color:"#93c5fd"},children:(0,m.jsx)(p.zd,{"aria-hidden":"true"})}),(0,m.jsxs)(_,{children:[(0,m.jsx)(E,{children:"Deploy complete"}),(0,m.jsx)(R,{children:"Enter \u2192 hold \u2192 exit"})]})]})})}function F(){const e=B(760),[n,t]=(0,i.useState)(!0),[s,o]=(0,u.h)(1);return(0,m.jsx)(I,{className:"heroFloatSlow heroFloatDelay",style:{bottom:"15%",left:"12%"},children:(0,m.jsxs)(z,{as:"button",onClick:()=>{t((e=>!e)),o((0,u.ek)(1.3,{damping:7,stiffness:300})),setTimeout((()=>o((0,u.ek)(1,{damping:14}))),90)},style:{rotate:"5deg",border:"none",cursor:"pointer",font:"inherit",textAlign:"left",opacity:e.opacity,translateY:e.translateY},children:[(0,m.jsx)(L,{style:{background:"#2a1520",color:n?"#f43f5e":"#6b7280"},children:(0,m.jsx)(u.i0.div,{style:{scale:s,display:"inline-flex"},children:(0,m.jsx)(d.OGi,{"aria-hidden":"true"})})}),(0,m.jsxs)(_,{children:[(0,m.jsx)(E,{children:"2,048 likes"}),(0,m.jsx)(R,{children:"Press feedback"})]})]})})}function $(){const e=(0,i.useRef)(null),n=B(560),[t,s]=(0,u.h)(.8),[o,a]=(0,i.useState)(!1),{x:r,y:l}=(0,u.i3)(e,{bounds:{left:0,right:0,top:0,bottom:0},onStart:()=>{a(!0),s((0,u.ek)(1.08))},onEnd:()=>{a(!1),s((0,u.ek)(1))}});return(0,i.useEffect)((()=>{const e=setTimeout((()=>s((0,u.ek)(1,{damping:20}))),560);return()=>clearTimeout(e)}),[s]),(0,m.jsxs)(N,{ref:e,style:{translateX:r,translateY:l,scale:t,opacity:n.opacity},children:[(0,m.jsx)(p.PfQ,{size:20,"aria-hidden":"true"}),(0,m.jsx)("span",{children:o?"spring physics":"drag me"})]})}const H=[{icon:p.FrA,label:"60 FPS",top:"12%",right:"7%",delay:900},{icon:p.z1n,label:"Spring-driven",bottom:"13%",right:"9%",delay:980}];function G({icon:e,label:n,delay:t,...i}){const s=B(t);return(0,m.jsx)(I,{className:"heroFloatSlow",style:i,children:(0,m.jsxs)(P,{style:{opacity:s.opacity,translateY:s.translateY},children:[(0,m.jsx)(e,{"aria-hidden":"true"}),n]})})}function O(){return(0,m.jsxs)(v,{children:[(0,m.jsxs)(k,{children:[(0,m.jsxs)(j,{"aria-hidden":"true",children:[(0,m.jsx)(S,{}),(0,m.jsx)(S,{}),(0,m.jsx)(S,{})]}),(0,m.jsxs)(T,{children:[(0,m.jsx)(A,{"aria-hidden":"true"}),"Live - built with react-ui-animate"]})]}),(0,m.jsxs)(C,{children:[(0,m.jsx)(D,{"aria-hidden":"true"}),(0,m.jsx)(M,{}),(0,m.jsx)(F,{}),(0,m.jsx)($,{}),H.map((e=>(0,m.jsx)(G,{...e},e.label))),(0,m.jsx)(Y,{children:"drag the card \xb7 it springs right back"})]})]})}const q={hero:"hero_aEcG",heroFade:"heroFade_Cvlm",heroGlow:"heroGlow_CLW8",heroContainer:"heroContainer_i2aB",heroLayout:"heroLayout_anMo",heroCopy:"heroCopy_zvrZ",heroVisual:"heroVisual_DvAS",badge:"badge__JoJ",badgeDot:"badgeDot_JQyg",badgeLabel:"badgeLabel_oYDW",badgeArrow:"badgeArrow_vxMo",heroTitle:"heroTitle_qg2I",heroTitleAccent:"heroTitleAccent_D_mc",heroLede:"heroLede_tbCg",heroActions:"heroActions_Z2kl",buttonLink:"buttonLink_cbyh",button:"button_JGCe",buttonContent:"buttonContent_SSd9",buttonShine:"buttonShine_z4Oh",install:"install_xqa7",buttonPrimary:"buttonPrimary_gUGD",buttonGhost:"buttonGhost_PcW8",buttonIcon:"buttonIcon_HoGy",buttonIconLeft:"buttonIconLeft_cAft",installCard:"installCard_TOlU",installTabs:"installTabs_aa5M",installTab:"installTab__WaR",installTabActive:"installTabActive_QPRE",installCommandRow:"installCommandRow_e86y",installPrompt:"installPrompt_jzbo",installCode:"installCode_OxmA",installCopyBtn:"installCopyBtn_mwhb",installCopyIcon:"installCopyIcon_fi81",installCopyPop:"installCopyPop_anVh",trustRow:"trustRow_kLvy",trustItem:"trustItem_skl2",section:"section_Q9Zo",sectionAlt:"sectionAlt_Oc16",sectionHeader:"sectionHeader_Gahl",showcaseDocsLink:"showcaseDocsLink_O9U9",eyebrow:"eyebrow_kY3W",sectionTitle:"sectionTitle_Ut5p",sectionLede:"sectionLede_zXD3",featureGrid:"featureGrid_hfN5",featureCard:"featureCard_Jbd_",featureIcon:"featureIcon_qaBM",featureTitle:"featureTitle_cv5G",featureDescription:"featureDescription_dZoZ",showcaseWrap:"showcaseWrap_GlUc",showcaseDocsIcon:"showcaseDocsIcon_w5Gd",showcaseFrame:"showcaseFrame_KaKp",showcaseNav:"showcaseNav_KwYE",showcaseNavIndicator:"showcaseNavIndicator_RWyy",showcaseNavItem:"showcaseNavItem_MnwN",showcaseNavItemActive:"showcaseNavItemActive_DQmL",showcaseNavIcon:"showcaseNavIcon_KpXN",showcaseNavCopy:"showcaseNavCopy_qM7u",showcaseNavTitle:"showcaseNavTitle_yyY9",showcaseNavDesc:"showcaseNavDesc_aGEA",showcaseStage:"showcaseStage_GQKi",showcaseStageHead:"showcaseStageHead_Aeyq",showcaseStageTitle:"showcaseStageTitle_kuKi",showcaseStageDesc:"showcaseStageDesc_HdlY",showcaseToolbar:"showcaseToolbar_gzel",showcaseToolbarBtn:"showcaseToolbarBtn_HWfJ",showcaseToolbarBtnActive:"showcaseToolbarBtnActive_gWSi",showcaseCanvas:"showcaseCanvas_Lksh",showcaseIn:"showcaseIn_dZVq",showcaseCode:"showcaseCode_WQtT",showcaseCodeWrap:"showcaseCodeWrap_rF5q",showcaseFallback:"showcaseFallback_FJUB",cta:"cta__fRr",ctaTitle:"ctaTitle_arch",ctaLede:"ctaLede_MF4k",ctaActions:"ctaActions_U5Ze",ctaLinks:"ctaLinks_iPGx",ctaLink:"ctaLink_s8zR",ctaLinkIcon:"ctaLinkIcon_eGOm"},W="https://github.com/dipeshrai123/react-ui-animate",U="https://www.npmjs.com/package/react-ui-animate",V="https://discord.gg/qPqsD8pv",X=[{id:"npm",label:"npm",command:"npm i react-ui-animate"},{id:"pnpm",label:"pnpm",command:"pnpm add react-ui-animate"},{id:"yarn",label:"yarn",command:"yarn add react-ui-animate"},{id:"bun",label:"bun",command:"bun add react-ui-animate"}];function Q({children:e,delay:n=0,y:t=14,className:s}){const[o,a]=(0,u.h)(0),[r,l]=(0,u.h)(t);return(0,i.useEffect)((()=>{const e=setTimeout((()=>{a((0,u.fY)(1,{duration:500})),l((0,u.ek)(0,{damping:20}))}),n);return()=>clearTimeout(e)}),[n,a,l]),(0,m.jsx)(u.i0.div,{className:s,style:{opacity:o,translateY:r},children:e})}const K=u.GS.bezier(.16,1,.3,1);function Z({word:e,index:n,active:t,accent:s,stagger:o,duration:a}){const[r,l]=(0,u.h)("100%"),[c,d]=(0,u.h)(0);return(0,i.useEffect)((()=>{t&&(l((0,u.CI)(n,(0,u.fY)("0%",{duration:a,easing:K}),{each:o})),d((0,u.CI)(n,(0,u.fY)(1,{duration:.6*a}),{each:o})))}),[t,n,o,a,l,d]),(0,m.jsx)("span",{style:{display:"inline-block",overflow:"hidden",paddingBottom:"0.15em"},children:(0,m.jsx)(u.i0.span,{className:s?q.heroTitleAccent:void 0,style:{display:"inline-block",translateY:r,opacity:c},children:e})})}function J({text:e,delay:n=0,indexOffset:t=0,accent:s=!1,stagger:o=90,duration:a=900}){const[r,l]=(0,i.useState)(!1);(0,i.useEffect)((()=>{const e=setTimeout((()=>l(!0)),n);return()=>clearTimeout(e)}),[n]);const c=e.split(" ");return(0,m.jsx)(m.Fragment,{children:c.map(((e,n)=>(0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)(Z,{word:e,index:t+n,active:r,accent:s,stagger:o,duration:a}),n<c.length-1?" ":""]},n)))})}function ee({children:e,className:n,y:t=24}){return(0,m.jsx)(u.i0.div,{className:n,style:{opacity:0,translateY:t},view:{opacity:(0,u.fY)(1,{duration:600}),translateY:(0,u.ek)(0,{damping:20})},viewOptions:{threshold:.15,once:!0},children:e})}function ne({children:e,to:n,href:t,variant:i="primary",icon:o,iconPosition:r="right"}){const[l,c]=(0,u.h)(1),[d,p]=(0,u.h)(0),[h,f]=(0,u.h)(0),x=(0,s.A)(q.button,"primary"===i?q.buttonPrimary:q.buttonGhost),g=o?(0,m.jsx)(u.i0.span,{className:"right"===r?q.buttonIcon:q.buttonIconLeft,style:"right"===r?{translateX:h}:{scale:h.to([0,4],[1,1.1])},children:(0,m.jsx)(o,{"aria-hidden":"true"})}):null,b=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{className:q.buttonShine,"aria-hidden":"true"}),(0,m.jsxs)("span",{className:q.buttonContent,children:["left"===r&&g,e,"right"===r&&g]})]}),y={onMouseEnter:()=>{c((0,u.ek)(1.025,{damping:15,stiffness:260})),p((0,u.ek)(-2,{damping:15,stiffness:260})),f((0,u.ek)(4,{damping:14,stiffness:320}))},onMouseLeave:()=>{c((0,u.ek)(1,{damping:16})),p((0,u.ek)(0,{damping:16})),f((0,u.ek)(0,{damping:14,stiffness:320}))},onPointerDown:()=>{c((0,u.ek)(.96,{damping:14,stiffness:420}))},onPointerUp:()=>{c((0,u.ek)(1,{damping:14,stiffness:320}))}};return t?(0,m.jsx)(u.i0.a,{className:x,href:t,target:"_blank",rel:"noopener noreferrer",style:{scale:l,translateY:d},...y,children:b}):(0,m.jsx)(u.i0.div,{className:q.buttonLink,style:{scale:l,translateY:d},...y,children:(0,m.jsx)(a.A,{to:n,className:x,children:b})})}function te(){const[e,n]=(0,i.useState)(0),[t,o]=(0,i.useState)(!1),a=X[e];return(0,m.jsxs)("div",{className:q.installCard,children:[(0,m.jsx)("div",{className:q.installTabs,role:"tablist","aria-label":"Package manager",children:X.map(((t,i)=>(0,m.jsx)("button",{type:"button",role:"tab","aria-selected":i===e,className:(0,s.A)(q.installTab,i===e&&q.installTabActive),onClick:()=>n(i),children:t.label},t.id)))}),(0,m.jsxs)("div",{className:q.installCommandRow,children:[(0,m.jsx)("span",{className:q.installPrompt,children:"$"}),(0,m.jsx)("code",{className:q.installCode,children:a.command}),(0,m.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(a.command).then((()=>{o(!0),setTimeout((()=>o(!1)),2e3)})).catch((()=>{}))},className:q.installCopyBtn,"aria-label":"Copy install command",children:t?(0,m.jsx)(d.mU9,{className:q.installCopyIcon}):(0,m.jsx)(d.kn0,{className:q.installCopyIcon})})]})]})}const ie=[{icon:p.est,label:"2.1kb gzipped"},{icon:p.PjK,label:"100% TypeScript"},{icon:h.rMV,label:"React 18 & 19"},{icon:h.hL4,label:"MIT licensed"}];function se(){return(0,m.jsxs)("header",{className:q.hero,children:[(0,m.jsx)(y,{}),(0,m.jsx)("div",{className:q.heroGlow,"aria-hidden":"true"}),(0,m.jsx)("div",{className:q.heroFade,"aria-hidden":"true"}),(0,m.jsx)("div",{className:(0,s.A)("container",q.heroContainer),children:(0,m.jsxs)("div",{className:q.heroLayout,children:[(0,m.jsxs)("div",{className:q.heroCopy,children:[(0,m.jsx)(Q,{delay:0,children:(0,m.jsxs)(a.A,{to:"/docs/getting-started",className:q.badge,children:[(0,m.jsx)("span",{className:q.badgeDot}),(0,m.jsx)("span",{className:q.badgeLabel,children:"React UI Animate 6.0"}),(0,m.jsx)(d.a1M,{className:q.badgeArrow})]})}),(0,m.jsxs)("h1",{className:q.heroTitle,children:[(0,m.jsx)(J,{text:"Fluid motion,",delay:80,indexOffset:0}),(0,m.jsx)("br",{}),(0,m.jsx)(J,{text:"built for React.",delay:80,indexOffset:2,accent:!0})]}),(0,m.jsx)("p",{className:q.heroLede,children:(0,m.jsx)(J,{text:"A lightweight, declarative library for springs, gestures, and exit animations. Silky 60fps motion with an API you'll actually enjoy writing.",delay:520,stagger:28,duration:650})}),(0,m.jsx)(Q,{delay:240,children:(0,m.jsxs)("div",{className:q.heroActions,children:[(0,m.jsx)(ne,{to:"/docs/getting-started",variant:"primary",icon:d.a1M,children:"Get Started"}),(0,m.jsx)(ne,{href:W,variant:"ghost",icon:h.hL4,iconPosition:"left",children:"Star on GitHub"})]})}),(0,m.jsx)(Q,{delay:320,children:(0,m.jsx)(te,{})}),(0,m.jsx)(Q,{delay:400,className:q.trustRow,children:ie.map((({icon:e,label:n})=>(0,m.jsxs)("span",{className:q.trustItem,children:[(0,m.jsx)(e,{"aria-hidden":"true"}),n]},n)))})]}),(0,m.jsx)("div",{className:q.heroVisual,children:(0,m.jsx)(O,{})})]})})]})}const oe=[{icon:p.Bpe,title:"Declarative API",description:"Animate with props like animate, hover, press, and view. No imperative timelines or boilerplate."},{icon:p.FrA,title:"60fps Performance",description:"Values update outside React\u2019s render cycle, so motion stays smooth without triggering re-renders."},{icon:p.PfQ,title:"Gestures Built-in",description:"First-class hooks for drag, move, scroll, and wheel let you craft rich, tactile interactions."},{icon:p.s_k,title:"Unmount & Exit",description:"Animate components as they leave the DOM. Built for modals, tooltips, and dropdowns."},{icon:p.PjK,title:"TypeScript First",description:"Fully typed components, hooks, and utilities with autocomplete that guides you as you build."},{icon:p.est,title:"Tiny & Tree-shakeable",description:"Import only what you use. Side-effect free and optimized for modern bundlers."}];function ae({feature:e}){const n=e.icon;return(0,m.jsxs)(u.i0.div,{className:q.featureCard,style:{opacity:0,translateY:20},view:{opacity:(0,u.fY)(1,{duration:500}),translateY:(0,u.ek)(0,{damping:20})},viewOptions:{threshold:.1,once:!0},hover:{scale:(0,u.ek)(1.02)},children:[(0,m.jsx)("span",{className:q.featureIcon,children:(0,m.jsx)(n,{})}),(0,m.jsx)("h3",{className:q.featureTitle,children:e.title}),(0,m.jsx)("p",{className:q.featureDescription,children:e.description})]})}function re(){return(0,m.jsx)("section",{className:q.section,children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)(ee,{className:q.sectionHeader,children:[(0,m.jsx)("span",{className:q.eyebrow,children:"Why React UI Animate"}),(0,m.jsx)("h2",{className:q.sectionTitle,children:"A focused toolkit for motion"}),(0,m.jsx)("p",{className:q.sectionLede,children:"Powerful enough for complex interactions, simple enough to learn in an afternoon."})]}),(0,m.jsx)("div",{className:q.featureGrid,children:oe.map((e=>(0,m.jsx)(ae,{feature:e},e.title)))})]})})}const le=[{key:"DragDemo",title:"Drag & spring",description:"Grab, release, and watch it spring back into place.",code:'import React, { useRef, useState } from \'react\';\nimport styled from \'@emotion/styled\';\nimport { animate, useValue, useDrag, withSpring } from \'react-ui-animate\';\n\nconst Stage = styled.div`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n`;\n\nconst Card = styled(animate.div)`\n  width: 148px;\n  height: 148px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  border-radius: 30px;\n  cursor: grab;\n  user-select: none;\n  touch-action: none;\n  color: #ffffff;\n  background: #3b82f6;\n  border: 1px solid #2563eb;\n  font-size: 15px;\n  font-weight: 600;\n\n  &:active {\n    cursor: grabbing;\n  }\n`;\n\nconst Caption = styled.div`\n  font-family: var(--site-mono);\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  color: #6b7280;\n`;\n\nexport function DragDemo() {\n  const ref = useRef<HTMLDivElement>(null);\n  const [scale, setScale] = useValue(1);\n  const [grabbing, setGrabbing] = useState(false);\n\n  const { x, y } = useDrag(ref, {\n    bounds: { left: 0, right: 0, top: 0, bottom: 0 },\n    onStart: () => {\n      setGrabbing(true);\n      setScale(withSpring(1.1));\n    },\n    onEnd: () => {\n      setGrabbing(false);\n      setScale(withSpring(1));\n    },\n  });\n\n  return (\n    <Stage>\n      <Card ref={ref} style={{ translateX: x, translateY: y, scale }}>\n        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">\n          <path\n            d="M12 3v18M3 12h18"\n            stroke="currentColor"\n            strokeWidth="2"\n            strokeLinecap="round"\n          />\n        </svg>\n        <span>{grabbing ? \'spring physics\' : \'drag me\'}</span>\n      </Card>\n      <Caption>Drag the card. It springs right back.</Caption>\n    </Stage>\n  );\n}\n',icon:p.PfQ},{key:"ToastDemo",title:"Toast",description:"Enter, hold, then exit with Unmount.",code:"import React, { useCallback, useState } from 'react';\nimport styled from '@emotion/styled';\nimport { FiCheck, FiX } from 'react-icons/fi';\nimport {\n  animate,\n  Unmount,\n  withSequence,\n  withSpring,\n  withTiming,\n} from 'react-ui-animate';\n\nconst MESSAGES = [\n  { title: 'Changes saved', detail: 'Your draft was synced' },\n  { title: 'Invite sent', detail: 'Alex will get an email shortly' },\n  { title: 'Deploy complete', detail: 'Production is live on v6.0.0-next.1' },\n];\n\nconst Stage = styled.div`\n  position: relative;\n  width: 100%;\n  max-width: 360px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 16px;\n`;\n\nconst Trigger = styled.button`\n  align-self: center;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  color: #e5e7eb;\n  cursor: pointer;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n  transition: background 0.15s ease, border-color 0.15s ease;\n\n  &:hover {\n    background: #1f222b;\n    border-color: #3a3f4a;\n  }\n`;\n\nconst Tray = styled.div`\n  position: relative;\n  min-height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 8px;\n  padding: 12px;\n  border-radius: 12px;\n  border: 1px solid #2a2e38;\n  background: #12141a;\n`;\n\nconst ToastCard = styled(animate.div)`\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 10px;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n`;\n\nconst Body = styled.div`\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 14px 14px 16px;\n`;\n\nconst Icon = styled.div`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n  margin-top: 1px;\n  border-radius: 8px;\n  background: #143528;\n  color: #34d399;\n`;\n\nconst Copy = styled.div`\n  flex: 1;\n  min-width: 0;\n  padding-top: 1px;\n`;\n\nconst Title = styled.div`\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  line-height: 1.3;\n  color: #e5e7eb;\n`;\n\nconst Detail = styled.div`\n  margin-top: 3px;\n  font-size: 14px;\n  line-height: 1.45;\n  color: #9ca3af;\n`;\n\nconst Dismiss = styled.button`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  flex-shrink: 0;\n  margin: -2px -2px 0 0;\n  padding: 0;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: #6b7280;\n  cursor: pointer;\n  transition: background 0.15s ease, color 0.15s ease;\n\n  &:hover {\n    background: #1f222b;\n    color: #d1d5db;\n  }\n`;\n\nconst Track = styled.div`\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 2px;\n  background: #1f222b;\n`;\n\nconst Progress = styled(animate.div)`\n  height: 100%;\n  background: #60a5fa;\n  transform-origin: left center;\n`;\n\nconst EmptyHint = styled.div`\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  font-size: 14px;\n  letter-spacing: -0.01em;\n  color: #6b7280;\n  opacity: ${(p: { $visible: boolean }) => (p.$visible ? 1 : 0)};\n  transition: opacity 0.2s ease;\n`;\n\nlet uid = 0;\n\ntype ToastItem = {\n  id: number;\n  title: string;\n  detail: string;\n};\n\nfunction Toast({\n  item,\n  onEnd,\n}: {\n  item: ToastItem;\n  onEnd: (id: number) => void;\n}) {\n  return (\n    <ToastCard\n      style={{ height: 0, opacity: 0, scale: 0.97, y: -6 }}\n      animate={{\n        height: withSpring(76, { damping: 18, stiffness: 220 }),\n        opacity: withSpring(1, { damping: 18 }),\n        scale: withSpring(1, { damping: 18 }),\n        y: withSpring(0, { damping: 18 }),\n      }}\n      unmount={{\n        height: withSpring(0, { damping: 18 }),\n        opacity: withTiming(0, { duration: 160 }),\n        scale: withSpring(0.97, { damping: 18 }),\n        y: withTiming(-4, { duration: 160 }),\n      }}\n    >\n      <Body>\n        <Icon aria-hidden=\"true\">\n          <FiCheck size={14} strokeWidth={2.5} />\n        </Icon>\n        <Copy>\n          <Title>{item.title}</Title>\n          <Detail>{item.detail}</Detail>\n        </Copy>\n        <Dismiss\n          type=\"button\"\n          aria-label=\"Dismiss\"\n          onClick={() => onEnd(item.id)}\n        >\n          <FiX size={14} strokeWidth={2} />\n        </Dismiss>\n      </Body>\n      <Track>\n        <Progress\n          style={{ width: '0%' }}\n          animate={{\n            width: withSequence([\n              withTiming('0%', { duration: 0 }),\n              withTiming('100%', {\n                duration: 3200,\n                onComplete: () => onEnd(item.id),\n              }),\n            ]),\n          }}\n        />\n      </Track>\n    </ToastCard>\n  );\n}\n\nexport function ToastDemo() {\n  const [toasts, setToasts] = useState<ToastItem[]>([]);\n\n  const remove = useCallback((id: number) => {\n    setToasts((prev) => prev.filter((t) => t.id !== id));\n  }, []);\n\n  const add = () => {\n    const message = MESSAGES[uid % MESSAGES.length];\n    setToasts((prev) => [\n      ...prev.slice(-2),\n      { id: uid++, title: message.title, detail: message.detail },\n    ]);\n  };\n\n  return (\n    <Stage>\n      <Trigger type=\"button\" onClick={add}>\n        Show notification\n      </Trigger>\n      <Tray>\n        <EmptyHint $visible={toasts.length === 0}>\n          Notifications appear here\n        </EmptyHint>\n        <Unmount>\n          {toasts.map((item) => (\n            <Toast key={item.id} item={item} onEnd={remove} />\n          ))}\n        </Unmount>\n      </Tray>\n    </Stage>\n  );\n}\n",icon:p.zd},{key:"ModalDemo",title:"Modal",description:"Scale-in dialog with outside-click dismiss.",code:"import React, { useRef, useState } from 'react';\nimport styled from '@emotion/styled';\nimport { MdClose } from 'react-icons/md';\nimport {\n  animate,\n  Unmount,\n  useOutsideClick,\n  withSpring,\n  withTiming,\n} from 'react-ui-animate';\n\nconst Stage = styled.div`\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  border-radius: 12px;\n`;\n\nconst Trigger = styled.button`\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 500;\n  color: #e5e7eb;\n  cursor: pointer;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n`;\n\nconst Backdrop = styled(animate.div)`\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #08090d;\n`;\n\nconst Dialog = styled(animate.div)`\n  position: relative;\n  width: 88%;\n  max-width: 320px;\n  padding: 22px 20px 20px;\n  border-radius: 12px;\n  background: #15171e;\n  border: 1px solid #2a2e38;\n  font-family: inherit;\n`;\n\nconst CloseBtn = styled.button`\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  color: #9ca3af;\n  cursor: pointer;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n`;\n\nconst DialogTitle = styled.h3`\n  margin: 0 0 8px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  color: #e5e7eb;\n`;\n\nconst DialogText = styled.p`\n  margin: 0 0 20px;\n  font-size: 14px;\n  line-height: 1.55;\n  color: #9ca3af;\n`;\n\nconst Actions = styled.div`\n  display: flex;\n  gap: 8px;\n`;\n\nconst Ghost = styled.button`\n  flex: 1;\n  padding: 10px 0;\n  border-radius: 9px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  color: #e5e7eb;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n`;\n\nconst Solid = styled.button`\n  flex: 1;\n  padding: 10px 0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  color: #eff6ff;\n  background: #1e3a5f;\n  border: 1px solid #3b5a80;\n`;\n\nfunction Dialog_({ onClose }: { onClose: () => void }) {\n  const ref = useRef(null);\n  useOutsideClick(ref, onClose);\n\n  return (\n    <Backdrop\n      style={{ opacity: 0 }}\n      animate={{ opacity: withTiming(1, { duration: 200 }) }}\n      unmount={{ opacity: withTiming(0, { duration: 180 }) }}\n    >\n      <Dialog\n        ref={ref}\n        style={{ opacity: 0, scale: 0.86, translateY: 16 }}\n        animate={{\n          opacity: withTiming(1, { duration: 180 }),\n          scale: withSpring(1, { damping: 18, stiffness: 240 }),\n          translateY: withSpring(0, { damping: 18, stiffness: 240 }),\n        }}\n        unmount={{\n          opacity: withTiming(0, { duration: 160 }),\n          scale: withSpring(0.86, { damping: 18, stiffness: 240 }),\n          translateY: withSpring(16, { damping: 18, stiffness: 240 }),\n        }}\n      >\n        <CloseBtn onClick={onClose} aria-label=\"Close\">\n          <MdClose />\n        </CloseBtn>\n        <DialogTitle>Delete project?</DialogTitle>\n        <DialogText>\n          This will permanently remove the project and all of its files. This\n          action can&apos;t be undone.\n        </DialogText>\n        <Actions>\n          <Ghost onClick={onClose}>Cancel</Ghost>\n          <Solid onClick={onClose}>Confirm</Solid>\n        </Actions>\n      </Dialog>\n    </Backdrop>\n  );\n}\n\nexport function ModalDemo() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <Stage>\n      <Trigger onClick={() => setOpen(true)}>Open dialog</Trigger>\n      <Unmount>\n        {open && <Dialog_ key=\"dialog\" onClose={() => setOpen(false)} />}\n      </Unmount>\n    </Stage>\n  );\n}\n",icon:p.mkN},{key:"AccordionDemo",title:"Accordion",description:"Height spring for expanding panels.",code:"import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';\nimport styled from '@emotion/styled';\nimport { FiChevronDown } from 'react-icons/fi';\nimport { animate, useValue, withSpring } from 'react-ui-animate';\n\nconst Stage = styled.div`\n  width: 100%;\n  max-width: 360px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n`;\n\nconst Eyebrow = styled.div`\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  color: #6b7280;\n  text-align: center;\n`;\n\nconst List = styled.div`\n  overflow: hidden;\n  border-radius: 12px;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n`;\n\nconst Item = styled.div<{ $last: boolean; $open: boolean }>`\n  border-bottom: ${(p) => (p.$last ? 'none' : '1px solid #2a2e38')};\n  background: ${(p) => (p.$open ? '#15171e' : 'transparent')};\n`;\n\nconst Header = styled.button`\n  width: 100%;\n  display: grid;\n  grid-template-columns: 24px minmax(0, 1fr) 24px;\n  align-items: center;\n  column-gap: 10px;\n  padding: 14px 14px;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  text-align: left;\n  font-family: inherit;\n`;\n\nconst Index = styled.span<{ $open: boolean }>`\n  font-size: 13px;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 0.02em;\n  color: ${(p) => (p.$open ? '#60a5fa' : '#6b7280')};\n  transition: color 0.15s ease;\n`;\n\nconst Question = styled.span<{ $open: boolean }>`\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  line-height: 1.35;\n  color: ${(p) => (p.$open ? '#e5e7eb' : '#d1d5db')};\n  transition: color 0.15s ease;\n`;\n\n/* animate.div wraps a custom component rather than a DOM tag string, so\n   emotion can't auto-filter $-prefixed transient props here. Pass the\n   open state through the style prop instead of a styled prop. */\nconst Chevron = styled(animate.div)`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.15s ease;\n`;\n\nconst Panel = styled(animate.div)`\n  overflow: hidden;\n`;\n\nconst Answer = styled.div`\n  display: grid;\n  grid-template-columns: 24px minmax(0, 1fr) 24px;\n  column-gap: 10px;\n  padding: 0 14px 14px;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.01em;\n  color: #9ca3af;\n\n  span {\n    grid-column: 2;\n  }\n`;\n\nconst FAQ = [\n  {\n    q: 'Is it production ready?',\n    a: 'Yes. It ships with TypeScript types, works in React 18+, and is tree-shakeable.',\n  },\n  {\n    q: 'Does it support gestures?',\n    a: 'Drag, move, scroll, and wheel are built in as hooks you can drop onto any element.',\n  },\n  {\n    q: 'How big is the bundle?',\n    a: 'Small by default. You only pay for the modifiers and gestures you import.',\n  },\n];\n\nfunction AccordionItem({\n  index,\n  q,\n  a,\n  open,\n  last,\n  onToggle,\n}: {\n  index: number;\n  q: string;\n  a: string;\n  open: boolean;\n  last: boolean;\n  onToggle: () => void;\n}) {\n  const contentRef = useRef<HTMLDivElement>(null);\n  const [progress, setProgress] = useValue(0);\n  const [height, setHeight] = useValue(0);\n  const contentHeight = useRef(0);\n\n  useLayoutEffect(() => {\n    const el = contentRef.current;\n    if (!el) return;\n\n    const measure = () => {\n      contentHeight.current = el.scrollHeight;\n    };\n\n    measure();\n\n    const observer = new ResizeObserver(measure);\n    observer.observe(el);\n    return () => observer.disconnect();\n  }, [a]);\n\n  useEffect(() => {\n    setProgress(withSpring(open ? 1 : 0, { damping: 22, stiffness: 260 }));\n    setHeight(\n      withSpring(open ? contentHeight.current : 0, {\n        damping: 22,\n        stiffness: 260,\n      })\n    );\n  }, [open, setProgress, setHeight]);\n\n  return (\n    <Item $last={last} $open={open}>\n      <Header type=\"button\" onClick={onToggle} aria-expanded={open}>\n        <Index $open={open}>{String(index + 1).padStart(2, '0')}</Index>\n        <Question $open={open}>{q}</Question>\n        <Chevron\n          style={{\n            rotateZ: progress.to([0, 1], [0, 180]),\n            color: open ? '#60a5fa' : '#6b7280',\n          }}\n        >\n          <FiChevronDown size={16} strokeWidth={2.25} />\n        </Chevron>\n      </Header>\n      <Panel style={{ height, opacity: progress }}>\n        <Answer ref={contentRef}>\n          <span>{a}</span>\n        </Answer>\n      </Panel>\n    </Item>\n  );\n}\n\nexport function AccordionDemo() {\n  const [active, setActive] = useState(0);\n\n  return (\n    <Stage>\n      <Eyebrow>Frequently asked</Eyebrow>\n      <List>\n        {FAQ.map((item, i) => (\n          <AccordionItem\n            key={item.q}\n            index={i}\n            q={item.q}\n            a={item.a}\n            open={active === i}\n            last={i === FAQ.length - 1}\n            onToggle={() => setActive((cur) => (cur === i ? -1 : i))}\n          />\n        ))}\n      </List>\n    </Stage>\n  );\n}\n",icon:p.fK4},{key:"TabsDemo",title:"Tabs",description:"Sliding indicator that follows the active tab.",code:"import React, { useState } from 'react';\nimport styled from '@emotion/styled';\nimport {\n  animate,\n  FlipGroup,\n  useValue,\n  withSequence,\n  withSpring,\n  withTiming,\n} from 'react-ui-animate';\n\nconst Stage = styled.div`\n  width: 100%;\n  max-width: 360px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n`;\n\nconst TabBar = styled.div`\n  display: flex;\n  padding: 5px;\n  border-radius: 12px;\n  background: #15171e;\n  border: 1px solid #2a2e38;\n`;\n\nconst Tab = styled.button<{ active: boolean }>`\n  position: relative;\n  z-index: 1;\n  flex: 1;\n  padding: 10px 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: ${(p) => (p.active ? '#ffffff' : '#9ca3af')};\n  transition: color 0.2s ease;\n`;\n\nconst Panel = styled(animate.div)`\n  min-height: 108px;\n  padding: 16px 18px;\n  border-radius: 12px;\n  background: #15171e;\n  border: 1px solid #2a2e38;\n`;\n\nconst PanelTitle = styled.div`\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  color: #e5e7eb;\n  margin-bottom: 6px;\n`;\n\nconst PanelText = styled.div`\n  font-size: 14px;\n  line-height: 1.55;\n  color: #9ca3af;\n`;\n\nconst TABS = [\n  {\n    label: 'Overview',\n    title: 'Declarative motion',\n    text: 'Animate with simple props instead of hand-writing timelines.',\n  },\n  {\n    label: 'Gestures',\n    title: 'Built-in gestures',\n    text: 'Drag, move, scroll, and wheel hooks for tactile interactions.',\n  },\n  {\n    label: 'Unmount',\n    title: 'Exit animations',\n    text: 'Animate elements out as they leave the DOM, e.g. modals and toasts.',\n  },\n];\n\nexport function TabsDemo() {\n  const [active, setActive] = useState(0);\n  const [enter, setEnter] = useValue(1);\n  const current = TABS[active];\n\n  const select = (index: number) => {\n    if (index === active) return;\n    setActive(index);\n    setEnter(\n      withSequence([\n        withTiming(0, { duration: 0 }),\n        withSpring(1, { damping: 22, stiffness: 280 }),\n      ])\n    );\n  };\n\n  return (\n    <Stage>\n      <FlipGroup>\n        <TabBar>\n          {TABS.map((t, i) => (\n            <Tab\n              key={t.label}\n              type=\"button\"\n              active={active === i}\n              onClick={() => select(i)}\n            >\n              {active === i && (\n                <animate.div\n                  flipId=\"home-tabs-indicator\"\n                  flipOptions={withSpring({ stiffness: 420, damping: 34 })}\n                  style={{\n                    position: 'absolute',\n                    inset: 0,\n                    borderRadius: 7,\n                    backgroundColor: '#1f222b',\n                    zIndex: -1,\n                  }}\n                />\n              )}\n              {t.label}\n            </Tab>\n          ))}\n        </TabBar>\n      </FlipGroup>\n\n      <Panel\n        style={{\n          opacity: enter,\n          translateY: enter.to([0, 1], [6, 0]),\n        }}\n      >\n        <PanelTitle>{current.title}</PanelTitle>\n        <PanelText>{current.text}</PanelText>\n      </Panel>\n    </Stage>\n  );\n}\n",icon:p.Dw7},{key:"LikeButtonDemo",title:"Like button",description:"Press feedback with a spring pop.",code:"import React, { useEffect, useState } from 'react';\nimport styled from '@emotion/styled';\nimport { MdFavorite } from 'react-icons/md';\nimport { animate, useValue, withSequence, withSpring, withTiming } from 'react-ui-animate';\n\nconst Stage = styled.div`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  font-family: inherit;\n`;\n\nconst Button = styled.button`\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  cursor: pointer;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n`;\n\nconst Heart = styled(animate.div)`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 38px;\n`;\n\nconst Particle = styled(animate.div)`\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 7px;\n  height: 7px;\n  margin: -3.5px 0 0 -3.5px;\n  border-radius: 50%;\n  background: #f43f5e;\n  pointer-events: none;\n`;\n\nconst Count = styled.div`\n  font-size: 15px;\n  font-weight: 600;\n  color: #9ca3af;\n`;\n\nconst PARTICLES = 6;\n\nconst DOTS = Array.from({ length: PARTICLES }, (_, i) => {\n  const angle = (i / PARTICLES) * Math.PI * 2;\n  const dist = 42;\n  return { angle, dx: Math.cos(angle) * dist, dy: Math.sin(angle) * dist };\n});\n\nfunction Burst() {\n  return (\n    <>\n      {DOTS.map((d) => (\n        <ParticleDot key={d.angle} dx={d.dx} dy={d.dy} />\n      ))}\n    </>\n  );\n}\n\nfunction ParticleDot({ dx, dy }: { dx: number; dy: number }) {\n  const [x, setX] = useValue(0);\n  const [y, setY] = useValue(0);\n  const [o, setO] = useValue(1);\n  const [s, setS] = useValue(1);\n\n  useEffect(() => {\n    setX(withSpring(dx, { damping: 14, stiffness: 200 }));\n    setY(withSpring(dy, { damping: 14, stiffness: 200 }));\n    setO(withTiming(0, { duration: 600 }));\n    setS(withTiming(0, { duration: 600 }));\n  }, [dx, dy, setO, setS, setX, setY]);\n\n  return (\n    <Particle style={{ translateX: x, translateY: y, opacity: o, scale: s }} />\n  );\n}\n\nexport function LikeButtonDemo() {\n  const [liked, setLiked] = useState(false);\n  const [count, setCount] = useState(128);\n  const [bursts, setBursts] = useState<number[]>([]);\n  const [scale, setScale] = useValue(1);\n  const [color, setColor] = useValue(0);\n\n  const toggle = () => {\n    const next = !liked;\n    setLiked(next);\n    setCount((c) => c + (next ? 1 : -1));\n    setColor(withTiming(next ? 1 : 0, { duration: 220 }));\n\n    if (next) {\n      setScale(\n        withSequence([\n          withSpring(1.35, { damping: 6, stiffness: 320 }),\n          withSpring(1, { damping: 14 }),\n        ])\n      );\n      const id = Date.now();\n      setBursts((b) => [...b, id]);\n      setTimeout(() => setBursts((b) => b.filter((x) => x !== id)), 700);\n    } else {\n      setScale(withSpring(1, { damping: 14 }));\n    }\n  };\n\n  return (\n    <Stage>\n      <Button onClick={toggle} aria-pressed={liked}>\n        {bursts.map((id) => (\n          <Burst key={id} />\n        ))}\n        <Heart\n          style={{\n            scale,\n            color: color.to([0, 1], ['#6b7280', '#f43f5e']),\n          }}\n        >\n          <MdFavorite />\n        </Heart>\n      </Button>\n      <Count>\n        {count.toLocaleString()} {count === 1 ? 'like' : 'likes'}\n      </Count>\n    </Stage>\n  );\n}\n",icon:p.icx},{key:"SwipeListDemo",title:"Swipe to delete",description:"Drag with snap-back and dismiss.",code:"import React, { useCallback, useEffect, useRef, useState } from 'react';\nimport styled from '@emotion/styled';\nimport { FiTrash2 } from 'react-icons/fi';\nimport {\n  animate,\n  Unmount,\n  Gesture,\n  useGesture,\n  useValue,\n  withSpring,\n  withStagger,\n  withTiming,\n} from 'react-ui-animate';\n\nconst Stage = styled.div`\n  width: 100%;\n  max-width: 360px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n`;\n\nconst Hint = styled.div`\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  color: #6b7280;\n  text-align: center;\n`;\n\nconst List = styled.div`\n  display: flex;\n  flex-direction: column;\n  min-height: 220px;\n`;\n\nconst RowWrap = styled(animate.div)`\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 10px;\n`;\n\nconst DeleteBg = styled.div`\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  padding-right: 18px;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: #ffffff;\n  background: #dc2626;\n`;\n\nconst Fore = styled(animate.div)`\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 14px 0 16px;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n  border-radius: 10px;\n  cursor: grab;\n  user-select: none;\n  touch-action: pan-y;\n\n  &:active {\n    cursor: grabbing;\n  }\n`;\n\nconst Avatar = styled.div<{ $color: string }>`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n  border-radius: 9px;\n  background: ${(p) => p.$color};\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: #ffffff;\n`;\n\nconst Meta = styled.div`\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n`;\n\nconst Name = styled.div`\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  line-height: 1.3;\n  color: #e5e7eb;\n`;\n\nconst Detail = styled.div`\n  font-size: 14px;\n  line-height: 1.35;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n`;\n\nconst Time = styled.div`\n  flex-shrink: 0;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n`;\n\nconst ROW_H = 64;\nconst THRESHOLD = 88;\n\ntype ItemData = {\n  id: number;\n  order: number;\n  name: string;\n  detail: string;\n  time: string;\n  color: string;\n  initials: string;\n};\n\nconst SEED: Omit<ItemData, 'id' | 'order'>[] = [\n  {\n    name: 'Olivia Hart',\n    detail: 'Sent you design.fig',\n    time: '2m',\n    color: '#3b82f6',\n    initials: 'OH',\n  },\n  {\n    name: 'Liam Chen',\n    detail: 'Liked your update',\n    time: '1h',\n    color: '#10b981',\n    initials: 'LC',\n  },\n  {\n    name: 'Ava Patel',\n    detail: 'Commented on Draft',\n    time: '3h',\n    color: '#f59e0b',\n    initials: 'AP',\n  },\n];\n\nlet nextId = 1;\n\nfunction createItems(): ItemData[] {\n  return SEED.map((item, order) => ({ ...item, id: nextId++, order }));\n}\n\nfunction Row({\n  item,\n  onDelete,\n}: {\n  item: ItemData;\n  onDelete: (id: number) => void;\n}) {\n  const ref = useRef<HTMLDivElement>(null);\n  const [tx, setTx] = useValue(0);\n  const deleting = useRef(false);\n\n  useGesture(\n    ref,\n    Gesture.Pan()\n      .onChange(({ movement }) => {\n        if (deleting.current) return;\n        setTx(Math.min(0, movement.x));\n      })\n      .onEnd(({ movement }) => {\n        if (deleting.current) return;\n        const nx = Math.min(0, movement.x);\n        if (nx < -THRESHOLD) {\n          deleting.current = true;\n          setTx(\n            withTiming(-320, {\n              duration: 180,\n              onComplete: () => onDelete(item.id),\n            })\n          );\n        } else {\n          setTx(withSpring(0, { damping: 20, stiffness: 280 }));\n        }\n      })\n  );\n\n  return (\n    <RowWrap\n      style={{ height: 0, opacity: 0, scale: 0.98, marginBottom: 0 }}\n      animate={{\n        height: withStagger(\n          item.order,\n          withSpring(ROW_H, { damping: 22, stiffness: 260 }),\n          { each: 55 }\n        ),\n        marginBottom: withStagger(\n          item.order,\n          withSpring(8, { damping: 22, stiffness: 260 }),\n          { each: 55 }\n        ),\n        opacity: withStagger(item.order, withTiming(1, { duration: 200 }), {\n          each: 55,\n        }),\n        scale: withStagger(\n          item.order,\n          withSpring(1, { damping: 22, stiffness: 260 }),\n          { each: 55 }\n        ),\n      }}\n      unmount={{\n        height: withSpring(0, { damping: 22, stiffness: 280 }),\n        marginBottom: withSpring(0, { damping: 22, stiffness: 280 }),\n        opacity: withTiming(0, { duration: 160 }),\n        scale: withTiming(0.98, { duration: 160 }),\n      }}\n    >\n      <DeleteBg>\n        <FiTrash2 size={14} strokeWidth={2.25} />\n        Delete\n      </DeleteBg>\n      <Fore ref={ref} style={{ translateX: tx }}>\n        <Avatar $color={item.color}>{item.initials}</Avatar>\n        <Meta>\n          <Name>{item.name}</Name>\n          <Detail>{item.detail}</Detail>\n        </Meta>\n        <Time>{item.time}</Time>\n      </Fore>\n    </RowWrap>\n  );\n}\n\nexport function SwipeListDemo() {\n  const [items, setItems] = useState<ItemData[]>(() => createItems());\n  const shouldRestore = useRef(false);\n  const restoreTimer = useRef<ReturnType<typeof setTimeout> | null>(null);\n\n  const remove = useCallback((id: number) => {\n    setItems((prev) => {\n      const next = prev.filter((item) => item.id !== id);\n      shouldRestore.current = next.length === 0;\n      return next;\n    });\n  }, []);\n\n  const handleExitComplete = useCallback(() => {\n    if (!shouldRestore.current) return;\n    shouldRestore.current = false;\n\n    if (restoreTimer.current) clearTimeout(restoreTimer.current);\n    restoreTimer.current = setTimeout(() => {\n      setItems(createItems());\n    }, 420);\n  }, []);\n\n  useEffect(() => {\n    return () => {\n      if (restoreTimer.current) clearTimeout(restoreTimer.current);\n    };\n  }, []);\n\n  return (\n    <Stage>\n      <Hint>Swipe left on a row to delete</Hint>\n      <List>\n        <Unmount onExitComplete={handleExitComplete}>\n          {items.map((item) => (\n            <Row key={item.id} item={item} onDelete={remove} />\n          ))}\n        </Unmount>\n      </List>\n    </Stage>\n  );\n}\n",icon:p.IXo}];function ce(){const[e,n]=i.useState(0),[o,l]=(0,i.useState)(!1),[h,u]=(0,i.useState)(!1),[f,x]=(0,i.useState)(!1),[g,b]=(0,i.useState)(0),[y,w]=(0,i.useState)(null),v=(0,i.useRef)(null),k=(0,i.useRef)([]),j=le[e],S=(0,i.useMemo)((()=>j.code.replace(/\n{3,}/g,"\n\n").trim()),[j.code]),T=(0,i.useCallback)((()=>{navigator.clipboard.writeText(S).catch((()=>{})),x(!0),setTimeout((()=>x(!1)),1500)}),[S]),A=(0,i.useCallback)((()=>{b((e=>e+1))}),[]),C=(0,i.useCallback)((()=>{const n=k.current[e];n&&w({top:n.offsetTop,left:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}),[e]);return(0,i.useLayoutEffect)((()=>{C()}),[C]),(0,i.useEffect)((()=>{const e=v.current;if(!e||"undefined"==typeof ResizeObserver)return;const n=new ResizeObserver((()=>C()));return n.observe(e),()=>n.disconnect()}),[C]),(0,m.jsx)("section",{className:(0,s.A)(q.section,q.sectionAlt),children:(0,m.jsxs)("div",{className:(0,s.A)("container",q.showcaseWrap),children:[(0,m.jsxs)(ee,{className:q.sectionHeader,children:[(0,m.jsx)("span",{className:q.eyebrow,children:"Live demos"}),(0,m.jsx)("h2",{className:q.sectionTitle,children:"Examples"}),(0,m.jsx)("p",{className:q.sectionLede,children:"Interactive patterns built with React UI Animate. Real source, not a mockup."}),(0,m.jsxs)(a.A,{to:"/docs/getting-started",className:q.showcaseDocsLink,children:["Read the docs",(0,m.jsx)(d.a1M,{className:q.showcaseDocsIcon})]})]}),(0,m.jsxs)(ee,{className:q.showcaseFrame,children:[(0,m.jsxs)("nav",{className:q.showcaseNav,"aria-label":"Examples",ref:v,children:[y&&(0,m.jsx)("span",{className:q.showcaseNavIndicator,"aria-hidden":"true",style:{transform:`translate(${y.left}px, ${y.top}px)`,width:y.width,height:y.height}}),le.map(((t,i)=>{const o=i===e,a=t.icon;return(0,m.jsxs)("button",{type:"button",ref:e=>k.current[i]=e,className:(0,s.A)(q.showcaseNavItem,o&&q.showcaseNavItemActive),onClick:()=>(e=>{n(e),l(!1)})(i),"aria-current":o?"true":void 0,children:[(0,m.jsx)("span",{className:q.showcaseNavIcon,children:(0,m.jsx)(a,{"aria-hidden":"true"})}),(0,m.jsxs)("span",{className:q.showcaseNavCopy,children:[(0,m.jsx)("span",{className:q.showcaseNavTitle,children:t.title}),(0,m.jsx)("span",{className:q.showcaseNavDesc,children:t.description})]})]},t.key)}))]}),(0,m.jsxs)("div",{className:q.showcaseStage,children:[(0,m.jsxs)("div",{className:q.showcaseStageHead,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:q.showcaseStageTitle,children:j.title}),(0,m.jsx)("div",{className:q.showcaseStageDesc,children:j.description})]}),(0,m.jsxs)("div",{className:q.showcaseToolbar,children:[(0,m.jsx)("button",{type:"button",className:q.showcaseToolbarBtn,title:"Reset demo","aria-label":"Reset demo",onClick:A,disabled:o,children:(0,m.jsx)(p.cO3,{"aria-hidden":"true"})}),(0,m.jsxs)("button",{type:"button",className:q.showcaseToolbarBtn,title:o?"Show preview":"Show code","aria-label":o?"Show preview":"Show code","aria-pressed":o,onClick:()=>l((e=>!e)),children:[o?(0,m.jsx)(p.Vap,{"aria-hidden":"true"}):(0,m.jsx)(p.PjK,{"aria-hidden":"true"}),(0,m.jsx)("span",{children:o?"Preview":"Code"})]}),o&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("button",{type:"button",className:(0,s.A)(q.showcaseToolbarBtn,h&&q.showcaseToolbarBtnActive),title:"Toggle word wrap","aria-label":"Toggle word wrap","aria-pressed":h,onClick:()=>u((e=>!e)),children:(0,m.jsx)(p.qm6,{"aria-hidden":"true"})}),(0,m.jsx)("button",{type:"button",className:q.showcaseToolbarBtn,title:f?"Copied":"Copy code","aria-label":"Copy code",onClick:T,children:f?(0,m.jsx)(p.YrT,{"aria-hidden":"true"}):(0,m.jsx)(p.nxz,{"aria-hidden":"true"})})]})]})]}),o?(0,m.jsx)("div",{className:(0,s.A)(q.showcaseCode,h&&q.showcaseCodeWrap),children:(0,m.jsx)(r.A,{language:"tsx",children:S})}):(0,m.jsx)("div",{className:q.showcaseCanvas,children:(0,m.jsx)(c.A,{fallback:(0,m.jsx)("div",{className:q.showcaseFallback,"aria-hidden":"true"}),children:()=>{const e=t(9928)[j.key];return(0,m.jsx)(e,{})}})},`${j.key}-${g}`)]})]})]})})}function de(){return(0,m.jsx)("section",{className:q.section,children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)(ee,{className:q.cta,children:[(0,m.jsx)("h2",{className:q.ctaTitle,children:"Start animating in minutes"}),(0,m.jsx)("p",{className:q.ctaLede,children:"Install React UI Animate and ship your first animation today."}),(0,m.jsx)("div",{className:q.ctaActions,children:(0,m.jsx)(ne,{to:"/docs/getting-started",variant:"primary",icon:d.a1M,children:"Read the Docs"})}),(0,m.jsxs)("div",{className:q.ctaLinks,children:[(0,m.jsxs)("a",{className:q.ctaLink,href:U,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsx)(h.JyX,{className:q.ctaLinkIcon}),"npm"]}),(0,m.jsxs)("a",{className:q.ctaLink,href:W,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsx)(h.hL4,{className:q.ctaLinkIcon}),"GitHub"]}),(0,m.jsxs)("a",{className:q.ctaLink,href:V,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsx)(h.O4U,{className:q.ctaLinkIcon}),"Discord"]})]})]})})})}function pe(){const{siteConfig:e}=(0,l.A)();return(0,i.useEffect)((()=>{const{body:e}=document;e.classList.add("nav-overlay");const n=()=>{e.classList.toggle("nav-scrolled",window.scrollY>16)};return n(),window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n),e.classList.remove("nav-overlay","nav-scrolled")}}),[]),(0,m.jsxs)(o.A,{title:`${e.title} \xb7 Fluid motion for React`,description:"A lightweight, declarative animation and gesture library for React. Build springs, sequences, drag interactions, and exit animations with a natural API.",children:[(0,m.jsx)(se,{}),(0,m.jsxs)("main",{children:[(0,m.jsx)(re,{}),(0,m.jsx)(ce,{}),(0,m.jsx)(de,{})]})]})}},9928:(e,n,t)=>{t.r(n),t.d(n,{AccordionDemo:()=>Q,DragDemo:()=>Re,LikeButtonDemo:()=>ue,ModalDemo:()=>Y,SwipeListDemo:()=>ze,TabsDemo:()=>se,ToastDemo:()=>S});var i=t(6540),s=t(5965),o=t(3),a=t(54),r=t(4848);const l=[{title:"Changes saved",detail:"Your draft was synced"},{title:"Invite sent",detail:"Alex will get an email shortly"},{title:"Deploy complete",detail:"Production is live on v6.0.0-next.1"}],c=s.A.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
`,d=s.A.button`
  align-self: center;
  padding: 10px 16px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #e5e7eb;
  cursor: pointer;
  background: #1a1d24;
  border: 1px solid #2a2e38;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: #1f222b;
    border-color: #3a3f4a;
  }
`,p=s.A.div`
  position: relative;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #2a2e38;
  background: #12141a;
`,h=(0,s.A)(a.i0.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`,u=s.A.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 14px 14px 16px;
`,m=s.A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  margin-top: 1px;
  border-radius: 8px;
  background: #143528;
  color: #34d399;
`,f=s.A.div`
  flex: 1;
  min-width: 0;
  padding-top: 1px;
`,x=s.A.div`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.3;
  color: #e5e7eb;
`,g=s.A.div`
  margin-top: 3px;
  font-size: 14px;
  line-height: 1.45;
  color: #9ca3af;
`,b=s.A.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin: -2px -2px 0 0;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: #1f222b;
    color: #d1d5db;
  }
`,y=s.A.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: #1f222b;
`,w=(0,s.A)(a.i0.div)`
  height: 100%;
  background: #60a5fa;
  transform-origin: left center;
`,v=s.A.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: #6b7280;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.2s ease;
`;let k=0;function j({item:e,onEnd:n}){return(0,r.jsxs)(h,{style:{height:0,opacity:0,scale:.97,y:-6},animate:{height:(0,a.ek)(76,{damping:18,stiffness:220}),opacity:(0,a.ek)(1,{damping:18}),scale:(0,a.ek)(1,{damping:18}),y:(0,a.ek)(0,{damping:18})},unmount:{height:(0,a.ek)(0,{damping:18}),opacity:(0,a.fY)(0,{duration:160}),scale:(0,a.ek)(.97,{damping:18}),y:(0,a.fY)(-4,{duration:160})},children:[(0,r.jsxs)(u,{children:[(0,r.jsx)(m,{"aria-hidden":"true",children:(0,r.jsx)(o.YrT,{size:14,strokeWidth:2.5})}),(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:e.title}),(0,r.jsx)(g,{children:e.detail})]}),(0,r.jsx)(b,{type:"button","aria-label":"Dismiss",onClick:()=>n(e.id),children:(0,r.jsx)(o.yGN,{size:14,strokeWidth:2})})]}),(0,r.jsx)(y,{children:(0,r.jsx)(w,{style:{width:"0%"},animate:{width:(0,a.kB)([(0,a.fY)("0%",{duration:0}),(0,a.fY)("100%",{duration:3200,onComplete:()=>n(e.id)})])}})})]})}function S(){const[e,n]=(0,i.useState)([]),t=(0,i.useCallback)((e=>{n((n=>n.filter((n=>n.id!==e))))}),[]);return(0,r.jsxs)(c,{children:[(0,r.jsx)(d,{type:"button",onClick:()=>{const e=l[k%l.length];n((n=>[...n.slice(-2),{id:k++,title:e.title,detail:e.detail}]))},children:"Show notification"}),(0,r.jsxs)(p,{children:[(0,r.jsx)(v,{$visible:0===e.length,children:"Notifications appear here"}),(0,r.jsx)(a.zC,{children:e.map((e=>(0,r.jsx)(j,{item:e,onEnd:t},e.id)))})]})]})}var T=t(9879);const A=s.A.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
`,C=s.A.button`
  padding: 10px 16px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: #e5e7eb;
  cursor: pointer;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`,D=(0,s.A)(a.i0.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #08090d;
`,N=(0,s.A)(a.i0.div)`
  position: relative;
  width: 88%;
  max-width: 320px;
  padding: 22px 20px 20px;
  border-radius: 12px;
  background: #15171e;
  border: 1px solid #2a2e38;
  font-family: inherit;
`,I=s.A.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  color: #9ca3af;
  cursor: pointer;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`,z=s.A.h3`
  margin: 0 0 8px;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: #e5e7eb;
`,L=s.A.p`
  margin: 0 0 20px;
  font-size: 14px;
  line-height: 1.55;
  color: #9ca3af;
`,_=s.A.div`
  display: flex;
  gap: 8px;
`,E=s.A.button`
  flex: 1;
  padding: 10px 0;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #e5e7eb;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`,R=s.A.button`
  flex: 1;
  padding: 10px 0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #eff6ff;
  background: #1e3a5f;
  border: 1px solid #3b5a80;
`;function P({onClose:e}){const n=(0,i.useRef)(null);return(0,a.jz)(n,e),(0,r.jsx)(D,{style:{opacity:0},animate:{opacity:(0,a.fY)(1,{duration:200})},unmount:{opacity:(0,a.fY)(0,{duration:180})},children:(0,r.jsxs)(N,{ref:n,style:{opacity:0,scale:.86,translateY:16},animate:{opacity:(0,a.fY)(1,{duration:180}),scale:(0,a.ek)(1,{damping:18,stiffness:240}),translateY:(0,a.ek)(0,{damping:18,stiffness:240})},unmount:{opacity:(0,a.fY)(0,{duration:160}),scale:(0,a.ek)(.86,{damping:18,stiffness:240}),translateY:(0,a.ek)(16,{damping:18,stiffness:240})},children:[(0,r.jsx)(I,{onClick:e,"aria-label":"Close",children:(0,r.jsx)(T.m6K,{})}),(0,r.jsx)(z,{children:"Delete project?"}),(0,r.jsx)(L,{children:"This will permanently remove the project and all of its files. This action can't be undone."}),(0,r.jsxs)(_,{children:[(0,r.jsx)(E,{onClick:e,children:"Cancel"}),(0,r.jsx)(R,{onClick:e,children:"Confirm"})]})]})})}function Y(){const[e,n]=(0,i.useState)(!1);return(0,r.jsxs)(A,{children:[(0,r.jsx)(C,{onClick:()=>n(!0),children:"Open dialog"}),(0,r.jsx)(a.zC,{children:e&&(0,r.jsx)(P,{onClose:()=>n(!1)},"dialog")})]})}const B=s.A.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,M=s.A.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #6b7280;
  text-align: center;
`,F=s.A.div`
  overflow: hidden;
  border-radius: 12px;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`,$=s.A.div`
  border-bottom: ${e=>e.$last?"none":"1px solid #2a2e38"};
  background: ${e=>e.$open?"#15171e":"transparent"};
`,H=s.A.button`
  width: 100%;
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr) 24px;
  align-items: center;
  column-gap: 10px;
  padding: 14px 14px;
  cursor: pointer;
  background: transparent;
  border: none;
  text-align: left;
  font-family: inherit;
`,G=s.A.span`
  font-size: 13px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
  color: ${e=>e.$open?"#60a5fa":"#6b7280"};
  transition: color 0.15s ease;
`,O=s.A.span`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.35;
  color: ${e=>e.$open?"#e5e7eb":"#d1d5db"};
  transition: color 0.15s ease;
`,q=(0,s.A)(a.i0.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.15s ease;
`,W=(0,s.A)(a.i0.div)`
  overflow: hidden;
`,U=s.A.div`
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr) 24px;
  column-gap: 10px;
  padding: 0 14px 14px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #9ca3af;

  span {
    grid-column: 2;
  }
`,V=[{q:"Is it production ready?",a:"Yes. It ships with TypeScript types, works in React 18+, and is tree-shakeable."},{q:"Does it support gestures?",a:"Drag, move, scroll, and wheel are built in as hooks you can drop onto any element."},{q:"How big is the bundle?",a:"Small by default. You only pay for the modifiers and gestures you import."}];function X({index:e,q:n,a:t,open:s,last:l,onToggle:c}){const d=(0,i.useRef)(null),[p,h]=(0,a.h)(0),[u,m]=(0,a.h)(0),f=(0,i.useRef)(0);return(0,i.useLayoutEffect)((()=>{const e=d.current;if(!e)return;const n=()=>{f.current=e.scrollHeight};n();const t=new ResizeObserver(n);return t.observe(e),()=>t.disconnect()}),[t]),(0,i.useEffect)((()=>{h((0,a.ek)(s?1:0,{damping:22,stiffness:260})),m((0,a.ek)(s?f.current:0,{damping:22,stiffness:260}))}),[s,h,m]),(0,r.jsxs)($,{$last:l,$open:s,children:[(0,r.jsxs)(H,{type:"button",onClick:c,"aria-expanded":s,children:[(0,r.jsx)(G,{$open:s,children:String(e+1).padStart(2,"0")}),(0,r.jsx)(O,{$open:s,children:n}),(0,r.jsx)(q,{style:{rotateZ:p.to([0,1],[0,180]),color:s?"#60a5fa":"#6b7280"},children:(0,r.jsx)(o.fK4,{size:16,strokeWidth:2.25})})]}),(0,r.jsx)(W,{style:{height:u,opacity:p},children:(0,r.jsx)(U,{ref:d,children:(0,r.jsx)("span",{children:t})})})]})}function Q(){const[e,n]=(0,i.useState)(0);return(0,r.jsxs)(B,{children:[(0,r.jsx)(M,{children:"Frequently asked"}),(0,r.jsx)(F,{children:V.map(((t,i)=>(0,r.jsx)(X,{index:i,q:t.q,a:t.a,open:e===i,last:i===V.length-1,onToggle:()=>n((e=>e===i?-1:i))},t.q)))})]})}const K=s.A.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Z=s.A.div`
  display: flex;
  padding: 5px;
  border-radius: 12px;
  background: #15171e;
  border: 1px solid #2a2e38;
`,J=s.A.button`
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 10px 0;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${e=>e.active?"#ffffff":"#9ca3af"};
  transition: color 0.2s ease;
`,ee=(0,s.A)(a.i0.div)`
  min-height: 108px;
  padding: 16px 18px;
  border-radius: 12px;
  background: #15171e;
  border: 1px solid #2a2e38;
`,ne=s.A.div`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: #e5e7eb;
  margin-bottom: 6px;
`,te=s.A.div`
  font-size: 14px;
  line-height: 1.55;
  color: #9ca3af;
`,ie=[{label:"Overview",title:"Declarative motion",text:"Animate with simple props instead of hand-writing timelines."},{label:"Gestures",title:"Built-in gestures",text:"Drag, move, scroll, and wheel hooks for tactile interactions."},{label:"Unmount",title:"Exit animations",text:"Animate elements out as they leave the DOM, e.g. modals and toasts."}];function se(){const[e,n]=(0,i.useState)(0),[t,s]=(0,a.h)(1),o=ie[e];return(0,r.jsxs)(K,{children:[(0,r.jsx)(a.$b,{children:(0,r.jsx)(Z,{children:ie.map(((t,i)=>(0,r.jsxs)(J,{type:"button",active:e===i,onClick:()=>{var t;(t=i)!==e&&(n(t),s((0,a.kB)([(0,a.fY)(0,{duration:0}),(0,a.ek)(1,{damping:22,stiffness:280})])))},children:[e===i&&(0,r.jsx)(a.i0.div,{flipId:"home-tabs-indicator",flipOptions:(0,a.ek)({stiffness:420,damping:34}),style:{position:"absolute",inset:0,borderRadius:7,backgroundColor:"#1f222b",zIndex:-1}}),t.label]},t.label)))})}),(0,r.jsxs)(ee,{style:{opacity:t,translateY:t.to([0,1],[6,0])},children:[(0,r.jsx)(ne,{children:o.title}),(0,r.jsx)(te,{children:o.text})]})]})}const oe=s.A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-family: inherit;
`,ae=s.A.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  cursor: pointer;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`,re=(0,s.A)(a.i0.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
`,le=(0,s.A)(a.i0.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 7px;
  height: 7px;
  margin: -3.5px 0 0 -3.5px;
  border-radius: 50%;
  background: #f43f5e;
  pointer-events: none;
`,ce=s.A.div`
  font-size: 15px;
  font-weight: 600;
  color: #9ca3af;
`,de=Array.from({length:6},((e,n)=>{const t=n/6*Math.PI*2;return{angle:t,dx:42*Math.cos(t),dy:42*Math.sin(t)}}));function pe(){return(0,r.jsx)(r.Fragment,{children:de.map((e=>(0,r.jsx)(he,{dx:e.dx,dy:e.dy},e.angle)))})}function he({dx:e,dy:n}){const[t,s]=(0,a.h)(0),[o,l]=(0,a.h)(0),[c,d]=(0,a.h)(1),[p,h]=(0,a.h)(1);return(0,i.useEffect)((()=>{s((0,a.ek)(e,{damping:14,stiffness:200})),l((0,a.ek)(n,{damping:14,stiffness:200})),d((0,a.fY)(0,{duration:600})),h((0,a.fY)(0,{duration:600}))}),[e,n,d,h,s,l]),(0,r.jsx)(le,{style:{translateX:t,translateY:o,opacity:c,scale:p}})}function ue(){const[e,n]=(0,i.useState)(!1),[t,s]=(0,i.useState)(128),[o,l]=(0,i.useState)([]),[c,d]=(0,a.h)(1),[p,h]=(0,a.h)(0);return(0,r.jsxs)(oe,{children:[(0,r.jsxs)(ae,{onClick:()=>{const t=!e;if(n(t),s((e=>e+(t?1:-1))),h((0,a.fY)(t?1:0,{duration:220})),t){d((0,a.kB)([(0,a.ek)(1.35,{damping:6,stiffness:320}),(0,a.ek)(1,{damping:14})]));const e=Date.now();l((n=>[...n,e])),setTimeout((()=>l((n=>n.filter((n=>n!==e))))),700)}else d((0,a.ek)(1,{damping:14}))},"aria-pressed":e,children:[o.map((e=>(0,r.jsx)(pe,{},e))),(0,r.jsx)(re,{style:{scale:c,color:p.to([0,1],["#6b7280","#f43f5e"])},children:(0,r.jsx)(T.OGi,{})})]}),(0,r.jsxs)(ce,{children:[t.toLocaleString()," ",1===t?"like":"likes"]})]})}const me=s.A.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,fe=s.A.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #6b7280;
  text-align: center;
`,xe=s.A.div`
  display: flex;
  flex-direction: column;
  min-height: 220px;
`,ge=(0,s.A)(a.i0.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
`,be=s.A.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding-right: 18px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #ffffff;
  background: #dc2626;
`,ye=(0,s.A)(a.i0.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 14px 0 16px;
  background: #1a1d24;
  border: 1px solid #2a2e38;
  border-radius: 10px;
  cursor: grab;
  user-select: none;
  touch-action: pan-y;

  &:active {
    cursor: grabbing;
  }
`,we=s.A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 9px;
  background: ${e=>e.$color};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ffffff;
`,ve=s.A.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ke=s.A.div`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.3;
  color: #e5e7eb;
`,je=s.A.div`
  font-size: 14px;
  line-height: 1.35;
  color: #9ca3af;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Se=s.A.div`
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 500;
  color: #6b7280;
`,Te=64,Ae=88,Ce=[{name:"Olivia Hart",detail:"Sent you design.fig",time:"2m",color:"#3b82f6",initials:"OH"},{name:"Liam Chen",detail:"Liked your update",time:"1h",color:"#10b981",initials:"LC"},{name:"Ava Patel",detail:"Commented on Draft",time:"3h",color:"#f59e0b",initials:"AP"}];let De=1;function Ne(){return Ce.map(((e,n)=>({...e,id:De++,order:n})))}function Ie({item:e,onDelete:n}){const t=(0,i.useRef)(null),[s,l]=(0,a.h)(0),c=(0,i.useRef)(!1);return(0,a.NH)(t,a.q6.Pan().onChange((({movement:e})=>{c.current||l(Math.min(0,e.x))})).onEnd((({movement:t})=>{if(c.current)return;Math.min(0,t.x)<-Ae?(c.current=!0,l((0,a.fY)(-320,{duration:180,onComplete:()=>n(e.id)}))):l((0,a.ek)(0,{damping:20,stiffness:280}))}))),(0,r.jsxs)(ge,{style:{height:0,opacity:0,scale:.98,marginBottom:0},animate:{height:(0,a.CI)(e.order,(0,a.ek)(Te,{damping:22,stiffness:260}),{each:55}),marginBottom:(0,a.CI)(e.order,(0,a.ek)(8,{damping:22,stiffness:260}),{each:55}),opacity:(0,a.CI)(e.order,(0,a.fY)(1,{duration:200}),{each:55}),scale:(0,a.CI)(e.order,(0,a.ek)(1,{damping:22,stiffness:260}),{each:55})},unmount:{height:(0,a.ek)(0,{damping:22,stiffness:280}),marginBottom:(0,a.ek)(0,{damping:22,stiffness:280}),opacity:(0,a.fY)(0,{duration:160}),scale:(0,a.fY)(.98,{duration:160})},children:[(0,r.jsxs)(be,{children:[(0,r.jsx)(o.IXo,{size:14,strokeWidth:2.25}),"Delete"]}),(0,r.jsxs)(ye,{ref:t,style:{translateX:s},children:[(0,r.jsx)(we,{$color:e.color,children:e.initials}),(0,r.jsxs)(ve,{children:[(0,r.jsx)(ke,{children:e.name}),(0,r.jsx)(je,{children:e.detail})]}),(0,r.jsx)(Se,{children:e.time})]})]})}function ze(){const[e,n]=(0,i.useState)((()=>Ne())),t=(0,i.useRef)(!1),s=(0,i.useRef)(null),o=(0,i.useCallback)((e=>{n((n=>{const i=n.filter((n=>n.id!==e));return t.current=0===i.length,i}))}),[]),l=(0,i.useCallback)((()=>{t.current&&(t.current=!1,s.current&&clearTimeout(s.current),s.current=setTimeout((()=>{n(Ne())}),420))}),[]);return(0,i.useEffect)((()=>()=>{s.current&&clearTimeout(s.current)}),[]),(0,r.jsxs)(me,{children:[(0,r.jsx)(fe,{children:"Swipe left on a row to delete"}),(0,r.jsx)(xe,{children:(0,r.jsx)(a.zC,{onExitComplete:l,children:e.map((e=>(0,r.jsx)(Ie,{item:e,onDelete:o},e.id)))})})]})}const Le=s.A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,_e=(0,s.A)(a.i0.div)`
  width: 148px;
  height: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 30px;
  cursor: grab;
  user-select: none;
  touch-action: none;
  color: #ffffff;
  background: #3b82f6;
  border: 1px solid #2563eb;
  font-size: 15px;
  font-weight: 600;

  &:active {
    cursor: grabbing;
  }
`,Ee=s.A.div`
  font-family: var(--site-mono);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #6b7280;
`;function Re(){const e=(0,i.useRef)(null),[n,t]=(0,a.h)(1),[s,o]=(0,i.useState)(!1),{x:l,y:c}=(0,a.i3)(e,{bounds:{left:0,right:0,top:0,bottom:0},onStart:()=>{o(!0),t((0,a.ek)(1.1))},onEnd:()=>{o(!1),t((0,a.ek)(1))}});return(0,r.jsxs)(Le,{children:[(0,r.jsxs)(_e,{ref:e,style:{translateX:l,translateY:c,scale:n},children:[(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:(0,r.jsx)("path",{d:"M12 3v18M3 12h18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),(0,r.jsx)("span",{children:s?"spring physics":"drag me"})]}),(0,r.jsx)(Ee,{children:"Drag the card. It springs right back."})]})}}}]);