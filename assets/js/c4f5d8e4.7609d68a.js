"use strict";(self.webpackChunkreact_ui_animate_docs=self.webpackChunkreact_ui_animate_docs||[]).push([[2634],{4475:(e,t,n)=>{n.r(t),n.d(t,{Cursor:()=>o,Draggable:()=>b,Interaction:()=>R,MountUnmount:()=>_,Scroll:()=>C,Sequence:()=>g});var i=n(6540),a=n(54),r=n(4848);const s=({containerRef:e,label:t,buttonRef:n})=>{const[i,s]=(0,a.h)({x:0,y:0});return(0,a.fD)(e,(({event:t})=>{if(!n.current)return;const i=e.current.getBoundingClientRect(),r=n.current.getBoundingClientRect(),o=t.clientX-i.left,l=t.clientY-i.top,c=o-(r.left-i.left+r.width/2),d=l-(r.top-i.top+r.height/2),u=Math.sqrt(c*c+d*d);if(u<120&&u>0){const e=.4*(1-u/120),t=c*e,n=d*e;s((0,a.ek)({x:t,y:n}))}else s((0,a.ek)({x:0,y:0}))})),(0,r.jsx)(a.i0.div,{ref:n,className:"magnetic-button",style:{translateX:i.x,translateY:i.y},children:t})};function o(){const e=(0,i.useRef)(null),t=(0,i.useRef)(null);return(0,r.jsx)("div",{ref:e,className:"ctr",children:(0,r.jsx)("div",{className:"magnetic-buttons-container",children:(0,r.jsx)(s,{containerRef:e,label:"Hover Me",buttonRef:t})})})}var l=n(5965);const c=(0,l.A)(a.i0.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`,d=(0,l.A)(a.i0.div)`
  width: 100%;
  max-width: 260px;
  height: 64px;
  border-radius: 16px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
`,u=l.A.div`
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1;
`,h=l.A.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,x=l.A.div`
  font-size: 15px;
  font-weight: 600;
  font-family: 'Outfit', sans-serif;
  letter-spacing: 0.3px;
`,f=l.A.div`
  font-size: 12px;
  opacity: 0.85;
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
`,p=(0,l.A)(a.i0.div)`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.3);
`,m=(0,l.A)(a.i0.div)`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
`;function g(){const[e,t]=(0,a.h)({container:0,one:0,two:0,three:0});(0,i.useEffect)((()=>{t((0,a.J7)((0,a.kB)([(0,a.fY)({container:1},{duration:300,easing:a.GS.ease}),(0,a.fY)({one:1},{duration:400,easing:a.GS.out(a.GS.ease)}),(0,a.fY)({two:1},{duration:400,easing:a.GS.out(a.GS.ease)}),(0,a.fY)({three:1},{duration:400,easing:a.GS.out(a.GS.ease)}),(0,a.yA)(1500),(0,a.fY)({three:0},{duration:300,easing:a.GS.in(a.GS.ease)}),(0,a.yA)(100),(0,a.fY)({two:0},{duration:300,easing:a.GS.in(a.GS.ease)}),(0,a.yA)(100),(0,a.fY)({one:0},{duration:300,easing:a.GS.in(a.GS.ease)}),(0,a.yA)(100),(0,a.fY)({container:0},{duration:300,easing:a.GS.in(a.GS.ease)}),(0,a.yA)(500)])))}),[]);return(0,r.jsx)(c,{style:{opacity:e.container},children:[{number:1,title:"Initialize",subtitle:"Setup animation",gradient:"linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)"},{number:2,title:"Animate",subtitle:"Apply effects",gradient:"linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)"},{number:3,title:"Complete",subtitle:"Final result",gradient:"linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"}].map(((t,n)=>{const i=e[0===n?"one":1===n?"two":"three"];return(0,r.jsxs)(d,{style:{opacity:i,scale:i.to([0,1],[.8,1]),translateX:i.to([0,1],[-40,0]),rotateZ:i.to([0,1],[-5,0]),background:t.gradient},children:[(0,r.jsxs)(u,{children:[(0,r.jsx)(p,{style:{opacity:i,scale:i.to([0,1],[.5,1]),rotateZ:i.to([0,1],[-180,0])},children:t.number}),(0,r.jsxs)(h,{children:[(0,r.jsx)(x,{children:t.title}),(0,r.jsx)(f,{children:t.subtitle})]})]}),(0,r.jsx)(m,{style:{left:i.to([0,1],["-100%","200%"]),opacity:i.to([.3,.6,.3],[0,.5,0])}})]},n)}))})}const j=(0,l.A)(a.i0.div)`
  width: 160px;
  height: 100px;
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  user-select: none;
  cursor: grab;
  z-index: 10;
  touch-action: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;function b(){const e=(0,i.useRef)(null),[t,n]=(0,a.h)(1),[s,o]=(0,a.h)({x:0,y:0});return(0,a.i3)(e,(({down:e,movement:{x:t,y:i}})=>{o(e?{x:t,y:i}:(0,a.ek)({x:0,y:0},{damping:10})),n((0,a.ek)(e?1.5:1))})),(0,r.jsx)(j,{ref:e,style:{translateX:s.x,translateY:s.y,scale:t},children:"Drag Me"})}const y=l.A.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
`,v=(0,l.A)(a.i0.div)`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 50px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;function C(){const e=(0,i.useRef)(null),{scrollYProgress:t}=(0,a.Ll)(window,{target:e,offset:["start end","start start"],toDescriptor:e=>(0,a.ek)(e,{damping:10})});return(0,r.jsx)(y,{ref:e,children:(0,r.jsx)(v,{style:{scale:t.to([0,1],[1,2]),background:t.to([0,1],["linear-gradient(135deg, #10b981 0%, #059669 100%)","linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"])}})})}const k=l.A.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,w=(0,l.A)(a.i0.div)`
  width: 100px;
  height: 40px;
  background-color: var(--ifm-color-emphasis-200);
  border-radius: 12px;
`,Y=(0,l.A)(a.i0.div)`
  width: 100px;
  border-radius: 12px;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;function _(){const[e,t]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{if(!e)return;const n=setTimeout((()=>{t(!1)}),3e3);return()=>{clearInterval(n)}}),[e]),(0,i.useEffect)((()=>{if(!e){const e=setTimeout((()=>t(!0)),1e3);return()=>clearTimeout(e)}}),[e]),(0,r.jsxs)(k,{children:[(0,r.jsx)(w,{}),(0,r.jsx)(a.Cq,{children:e&&(0,r.jsx)(Y,{style:{opacity:0,height:0,scale:.4},animate:{opacity:(0,a.ek)(1),height:(0,a.ek)(80),scale:1},exit:{opacity:(0,a.fY)(0),height:(0,a.ek)(0)}})}),(0,r.jsx)(w,{})]})}const A=l.A.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`,N=(0,l.A)(a.i0.div)`
  width: 280px;
  height: 180px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  cursor: pointer;
`,S=l.A.div`
  font-size: 20px;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
  color: #1a1a1a;
  text-align: center;
`,I=l.A.div`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Outfit', sans-serif;
  color: #666;
  text-align: center;
`;function R(){return(0,r.jsx)(A,{children:(0,r.jsxs)(N,{hover:{scale:(0,a.ek)(1.05),rotateZ:(0,a.ek)(2),boxShadow:(0,a.ek)("0 30px 80px rgba(0, 0, 0, 0.4)")},press:{scale:(0,a.ek)(.98)},children:[(0,r.jsx)(S,{children:"Hover Me"}),(0,r.jsx)(I,{children:"See smooth animations in action"})]})})}},6630:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i=n(6540),a=n(53),r=n(8442),s=n(5489),o=n(4586),l=n(1176),c=n(8478),d=n(54);const u={heroBanner:"heroBanner_qdFl",orb1:"orb1_Qutb",orb2:"orb2_eON8",orb3:"orb3_MvgV",heroPattern:"heroPattern_AzbZ",heroGradient:"heroGradient_B8kv",heroContent:"heroContent_mKPX",badge:"badge__JoJ",badgeText:"badgeText_ZjSw",badgeDot:"badgeDot_JQyg",buttons:"buttons_AeoN",primaryButton:"primaryButton_r1SK",secondaryButton:"secondaryButton_uRtX",learnMoreButton:"learnMoreButton_CmkF",buttonIcon:"buttonIcon_HoGy",buttonIconRight:"buttonIconRight_rNRI",installText:"installText_uEYr",inlineCode:"inlineCode_lnqM",copiedText:"copiedText_vl8S",communityLinks:"communityLinks_LCOs",communityLink:"communityLink_lygW",features:"features_cAfv",featuresHeader:"featuresHeader_o1hO",featureList:"featureList_i_0T",featureCard:"featureCard_Jbd_",featureIcon:"featureIcon_qaBM",quickStart:"quickStart_s7sE",quickStartContent:"quickStartContent_paOH",installCommand:"installCommand_Rf1g",installCommandInner:"installCommandInner_w0gh",installCode:"installCode_OxmA",copyInstallButton:"copyInstallButton_IF20",copyIcon:"copyIcon_PFCT",copiedMessage:"copiedMessage_oc2C",examples:"examples_V0Sb",examplesHeader:"examplesHeader_RnvV"};var h=n(4848);function x({title:e,children:t}){return(0,h.jsxs)(d.i0.div,{className:"home-card",children:[(0,h.jsx)("div",{className:"home-card-content",children:t}),(0,h.jsx)("div",{className:"home-card-title",children:e})]})}function f({children:e,to:t,className:n,delay:a=0}){const[r,o]=(0,d.h)(0),[l,c]=(0,d.h)(10),[u,x]=(0,d.h)(.9);return i.useEffect((()=>{setTimeout((()=>{o((0,d.fY)(1,{duration:600})),c((0,d.ek)(0)),x((0,d.ek)(1))}),a)}),[a]),(0,h.jsx)(d.i0.div,{style:{opacity:r,translateY:l,scale:u},hover:{scale:(0,d.ek)(1.05),translateY:(0,d.ek)(-2)},press:{scale:(0,d.ek)(.95)},children:(0,h.jsx)(s.A,{className:n,to:t,children:e})})}function p({children:e}){return(0,h.jsx)(d.i0.div,{style:{opacity:0,translateY:30},view:{opacity:1,translateY:0},children:e})}function m(){return(0,h.jsxs)("div",{className:u?.communityLinks,children:[(0,h.jsxs)(d.i0.a,{href:"https://discord.gg/qPqsD8pv",target:"_blank",rel:"noopener noreferrer",className:u.communityLink,hover:{translateY:(0,d.ek)(-2),scale:(0,d.ek)(1.02)},children:[(0,h.jsx)("svg",{fill:"white",stroke:"white",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30",height:"30",viewBox:"0 0 50 50",children:(0,h.jsx)("path",{d:"M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"})}),(0,h.jsx)("span",{children:"Join Discord"})]}),(0,h.jsxs)(d.i0.a,{href:"https://github.com/dipeshrai123/react-ui-animate",target:"_blank",rel:"noopener noreferrer",className:u.communityLink,hover:{translateY:(0,d.ek)(-2),scale:(0,d.ek)(1.02)},children:[(0,h.jsx)("svg",{fill:"white",stroke:"white",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30",height:"30",viewBox:"0 0 30 30",children:(0,h.jsx)("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"})}),(0,h.jsx)("span",{children:"GitHub"})]})]})}function g(){const{siteConfig:e}=(0,o.A)(),[t,n]=i.useState(!1),r=(0,i.useRef)(null),s=(0,i.useRef)(null),c=(0,i.useRef)(null),[x,p]=((0,i.useRef)(null),(0,d.h)(0)),[g,j]=(0,d.h)(-10),[b,y]=(0,d.h)(0),[v,C]=(0,d.h)(20),[k,w]=(0,d.h)(0),[Y,_]=(0,d.h)(20),[A,N]=(0,d.h)(0),[S,I]=(0,d.h)(20),[R,B]=(0,d.h)(1),[G,M]=(0,d.h)(1),[T,q]=(0,d.h)(0),[P,J]=(0,d.h)(0),[L,D]=(0,d.h)(0),[z,H]=(0,d.h)(0),[O,E]=(0,d.h)(0),[X,Z]=(0,d.h)(0),[$,F]=(0,d.h)(0),U=(0,i.useRef)(null);(0,i.useEffect)((()=>{p((0,d.fY)(1,{duration:600})),j((0,d.ek)(0)),setTimeout((()=>{y((0,d.fY)(1,{duration:800})),C((0,d.ek)(0))}),100),setTimeout((()=>{w((0,d.fY)(1,{duration:800})),_((0,d.ek)(0))}),200),setTimeout((()=>{N((0,d.fY)(1,{duration:600})),I((0,d.ek)(0))}),600),B((0,d.J7)((0,d.kB)([(0,d.fY)(1.2,{duration:1200}),(0,d.fY)(1,{duration:1200})]),-1)),M((0,d.J7)((0,d.kB)([(0,d.fY)(.6,{duration:1200}),(0,d.fY)(1,{duration:1200})]),-1)),q((0,d.J7)((0,d.kB)([(0,d.fY)(100,{duration:8e3}),(0,d.fY)(0,{duration:8e3})]),-1)),J((0,d.J7)((0,d.kB)([(0,d.fY)(30,{duration:4e3}),(0,d.fY)(0,{duration:4e3})]),-1)),D((0,d.J7)((0,d.kB)([(0,d.fY)(20,{duration:5e3}),(0,d.fY)(0,{duration:5e3})]),-1)),H((0,d.J7)((0,d.kB)([(0,d.fY)(-25,{duration:4500}),(0,d.fY)(0,{duration:4500})]),-1)),E((0,d.J7)((0,d.kB)([(0,d.fY)(-15,{duration:5500}),(0,d.fY)(0,{duration:5500})]),-1)),Z((0,d.J7)((0,d.kB)([(0,d.fY)(20,{duration:6e3}),(0,d.fY)(0,{duration:6e3})]),-1)),F((0,d.J7)((0,d.kB)([(0,d.fY)(-25,{duration:4800}),(0,d.fY)(0,{duration:4800})]),-1))}),[]);return(0,h.jsxs)(d.i0.header,{ref:U,className:(0,a.A)("hero hero--primary",u.heroBanner),style:{backgroundPosition:T.to((e=>`${e}% 50%`))},children:[(0,h.jsx)(d.i0.div,{className:u.orb1,style:{translateX:P.to((e=>`${e}px`)),translateY:L.to((e=>`${e}px`))}}),(0,h.jsx)(d.i0.div,{className:u.orb2,style:{translateX:z.to((e=>`${e}px`)),translateY:O.to((e=>`${e}px`))}}),(0,h.jsx)(d.i0.div,{className:u.orb3,style:{translateX:X.to((e=>`${e}px`)),translateY:$.to((e=>`${e}px`))}}),(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:u.heroContent,children:[(0,h.jsx)(d.i0.div,{ref:r,style:{opacity:x,translateY:g},children:(0,h.jsxs)("div",{className:u.badge,children:[(0,h.jsx)("span",{className:u.badgeText,children:"v5.2.0"}),(0,h.jsx)(d.i0.span,{className:u.badgeDot,style:{scale:R,opacity:G}}),(0,h.jsx)("span",{children:"Latest"})]})}),(0,h.jsx)(d.i0.h1,{ref:s,className:"hero__title",children:e.title}),(0,h.jsx)(d.i0.p,{ref:c,className:"hero__subtitle",style:{opacity:k,translateY:Y},children:"Create smooth, performant animations and interactive gestures in React with a simple, declarative API. Perfect for beginners and power users alike."}),(0,h.jsx)("div",{className:u.buttons,children:(0,h.jsxs)(f,{to:"/docs/getting-started",className:u.primaryButton,delay:400,children:["Get Started",(0,h.jsx)(l.a1M,{className:u.buttonIconRight})]})}),(0,h.jsx)(m,{})]})}),(0,h.jsx)("div",{className:u.heroGradient}),(0,h.jsx)("div",{className:u.heroPattern})]})}function j(){return(0,h.jsxs)("section",{className:u.features,children:[(0,h.jsx)(p,{delay:0,children:(0,h.jsxs)("div",{className:u.featuresHeader,children:[(0,h.jsx)("h2",{children:"Why Choose React UI Animate?"}),(0,h.jsx)("p",{children:"Everything you need to create beautiful, performant animations in your React applications"})]})}),(0,h.jsx)("div",{className:u.featureList,children:[{icon:"\u26a1",title:"Simple & Intuitive",description:"Declarative API that feels natural. Animate with props, not complex configurations."},{icon:"\ud83c\udfa8",title:"High Performance",description:"Optimized animations that run at 60fps. No re-renders, pure performance."},{icon:"\ud83d\udd25",title:"Interactive Gestures",description:"Drag, scroll, hover, press\u2014handle all user interactions with ease."},{icon:"\u2728",title:"TypeScript Ready",description:"Full TypeScript support with excellent autocomplete and type safety."}].map(((e,t)=>(0,h.jsx)(b,{feature:e,index:t},t)))})]})}function b({feature:e}){return(0,h.jsxs)(d.i0.div,{className:u.featureCard,style:{opacity:0,translateY:30,scale:.95},animate:{opacity:1,translateY:0,scale:1},hover:{scale:(0,d.ek)(1.02),translateY:(0,d.ek)(-4)},children:[(0,h.jsx)("div",{className:u.featureIcon,children:e.icon}),(0,h.jsx)("h3",{children:e.title}),(0,h.jsx)("p",{children:e.description})]})}function y(){const[e,t]=i.useState(!1);return(0,h.jsx)("section",{className:u.quickStart,children:(0,h.jsx)(p,{delay:0,children:(0,h.jsxs)("div",{className:u.quickStartContent,children:[(0,h.jsx)("h2",{children:"Ready to Get Started?"}),(0,h.jsx)("p",{children:"Install React UI Animate in seconds and start building beautiful animations"}),(0,h.jsxs)(d.i0.div,{className:u.installCommand,hover:{translateY:(0,d.ek)(-2),scale:(0,d.ek)(1.01)},children:[(0,h.jsxs)("div",{className:u.installCommandInner,children:[(0,h.jsx)("code",{className:u.installCode,children:"npm i react-ui-animate@5.2.0"}),(0,h.jsx)(d.i0.button,{onClick:()=>{navigator.clipboard.writeText("npm i react-ui-animate@5.2.0"),t(!0),setTimeout((()=>t(!1)),2e3)},className:u.copyInstallButton,"aria-label":"Copy installation command",hover:{scale:(0,d.ek)(1.1)},press:{scale:(0,d.ek)(.95)},children:e?(0,h.jsx)(l.mU9,{className:u.copyIcon}):(0,h.jsx)(l.kn0,{className:u.copyIcon})})]}),e&&(0,h.jsx)("span",{className:u.copiedMessage,children:"Copied to clipboard!"})]}),(0,h.jsxs)(f,{to:"/docs/getting-started",className:u.learnMoreButton,delay:200,children:["View Documentation",(0,h.jsx)(l.a1M,{className:u.buttonIconRight})]})]})})})}function v(){const{siteConfig:e}=(0,o.A)();return(0,h.jsxs)(r.A,{title:`${e.title} - Smooth React Animations Made Simple`,description:"Create smooth, performant animations and interactive gestures in React with a simple, declarative API. Perfect for beginners and power users alike.",children:[(0,h.jsx)(g,{}),(0,h.jsx)(j,{}),(0,h.jsx)(y,{}),(0,h.jsxs)("section",{className:u.examples,children:[(0,h.jsx)(p,{delay:0,children:(0,h.jsxs)("div",{className:u.examplesHeader,children:[(0,h.jsx)("h2",{children:"See It In Action"}),(0,h.jsx)("p",{children:"Explore interactive examples showcasing the power and simplicity of React UI Animate"})]})}),(0,h.jsxs)("div",{className:"homecards-container",children:[(0,h.jsx)(x,{title:"Sequence Animations",children:(0,h.jsx)(c.A,{children:()=>{const{Sequence:e}=n(4475);return(0,h.jsx)(e,{})}})}),(0,h.jsx)(x,{title:"Draggable Elements",children:(0,h.jsx)(c.A,{children:()=>{const{Draggable:e}=n(4475);return(0,h.jsx)(e,{})}})}),(0,h.jsx)(x,{title:"Scroll Progress",children:(0,h.jsx)(c.A,{children:()=>{const{Scroll:e}=n(4475);return(0,h.jsx)(e,{})}})}),(0,h.jsx)(x,{title:"Magnetic Cursor",children:(0,h.jsx)(c.A,{children:()=>{const{Cursor:e}=n(4475);return(0,h.jsx)(e,{})}})}),(0,h.jsx)(x,{title:"Presence & Exit",children:(0,h.jsx)(c.A,{children:()=>{const{MountUnmount:e}=n(4475);return(0,h.jsx)(e,{})}})}),(0,h.jsx)(x,{title:"Interactive Card",children:(0,h.jsx)(c.A,{children:()=>{const{Interaction:e}=n(4475);return(0,h.jsx)(e,{})}})})]})]})]})}}}]);