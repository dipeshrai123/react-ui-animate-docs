"use strict";(self.webpackChunkreact_ui_animate_docs=self.webpackChunkreact_ui_animate_docs||[]).push([[2634],{3499:(e,t,n)=>{n.r(t),n.d(t,{Cursor:()=>a,Draggable:()=>u,Interaction:()=>b,MountUnmount:()=>C,Scroll:()=>g,Sequence:()=>h});var r=n(6540),i=n(4900),s=n(4848);const o=({containerRef:e})=>{const[t,n]=(0,i.h)({x:0,y:0,width:8,height:8});return(0,i.fD)(e,(({event:t})=>{const r=e.current.getBoundingClientRect(),s=document.elementFromPoint(t.clientX,t.clientY);let o,a,c,l;if(s?.closest(".target")){const{left:e,top:t,width:n,height:i}=s.getBoundingClientRect();o=e-r.left,a=t-r.top,c=n,l=i}else o=t.clientX-r.left-4,a=t.clientY-r.top-4,c=8,l=8;n((0,i.ek)({x:o,y:a,width:c,height:l}))})),(0,s.jsx)(i.i0.div,{style:{userSelect:"none",pointerEvents:"none",width:t.width,height:t.height,border:"2px solid #3399ff",position:"absolute",left:t.x,top:t.y,borderRadius:4}})};function a(){const e=(0,r.useRef)(null);return(0,s.jsxs)("div",{ref:e,className:"ctr",children:[(0,s.jsx)("div",{className:"target",children:"Target Button"}),(0,s.jsx)(o,{containerRef:e})]})}var c=n(5965);const l=(0,c.A)(i.i0.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,d=(0,c.A)(i.i0.div)`
  width: 200px;
  height: 40px;
  background-color: #3399ff;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;function h(){const[e,t]=(0,i.h)({container:0,one:0,two:0,three:0});return(0,r.useEffect)((()=>{t((0,i.J7)((0,i.kB)([(0,i.fY)({container:1},{easing:i.GS.inOut(i.GS.ease)}),(0,i.fY)({one:1},{easing:i.GS.inOut(i.GS.ease)}),(0,i.fY)({two:1},{easing:i.GS.inOut(i.GS.ease)}),(0,i.fY)({three:1},{easing:i.GS.inOut(i.GS.ease)}),(0,i.yA)(1e3),(0,i.fY)({container:0,one:0,two:0,three:0},{easing:i.GS.inOut(i.GS.ease)})])))}),[]),(0,s.jsxs)(l,{style:{opacity:e.container},children:[(0,s.jsx)(d,{style:{opacity:e.one,scale:e.one.to([0,1],[.8,1]),translateY:e.one.to([0,1],[20,0])}}),(0,s.jsx)(d,{style:{opacity:e.two,scale:e.two.to([0,1],[.8,1]),translateY:e.two.to([0,1],[20,0])}}),(0,s.jsx)(d,{style:{opacity:e.three,scale:e.three.to([0,1],[.8,1]),translateY:e.three.to([0,1],[20,0])}})]})}const x=(0,c.A)(i.i0.div)`
  width: 160px;
  height: 100px;
  background-color: white;
  border-radius: 8px;
  color: #3399ff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  user-select: none;
  cursor: grab;
  transition: box-shadow 0.2s ease;
  z-index: 10;
`;function u(){const e=(0,r.useRef)(null),[t,n]=(0,i.h)(1),[o,a]=(0,i.h)({x:0,y:0});return(0,i.i3)(e,(({down:e,movement:{x:t,y:r}})=>{a(e?{x:t,y:r}:(0,i.ek)({x:0,y:0},{damping:10})),n((0,i.ek)(e?1.5:1))})),(0,s.jsx)(x,{ref:e,style:{translateX:o.x,translateY:o.y,scale:t},children:"Drag Me \ud83e\udd1a"})}const f=c.A.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
`,p=(0,c.A)(i.i0.div)`
  width: 100px;
  height: 100px;
  background-color: #0069d9;
  border-radius: 8px;
`;function g(){const e=(0,r.useRef)(null),{scrollYProgress:t}=(0,i.Ll)(window,{target:e,offset:["start end","start start"],toDescriptor:e=>(0,i.ek)(e,{damping:10})});return(0,s.jsx)(f,{ref:e,children:(0,s.jsx)(p,{style:{scale:t.to([0,1],[1,2]),backgroundColor:t.to([0,1],["#0069d9","#ff5733"])}})})}const m=c.A.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,j=(0,c.A)(i.i0.div)`
  width: 100px;
  height: 40px;
  background-color: #0069d9;
  border-radius: 8px;
  margin-bottom: 4px;
`;function C(){const[e,t]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{if(!e)return;const n=setTimeout((()=>{t(!1)}),3e3);return()=>{clearInterval(n)}}),[e]),(0,s.jsxs)(m,{children:[(0,s.jsx)(j,{style:{backgroundColor:"#e1e1e1"}}),(0,s.jsx)(i.CZ,{state:e,enter:(0,i.ek)(1,{damping:10}),exit:(0,i.ek)(0,{onComplete:()=>setTimeout((()=>t(!0)),1e3)}),children:e=>(0,s.jsx)(j,{style:{opacity:e,height:e.to([0,1],[0,80])}})}),(0,s.jsx)(j,{style:{backgroundColor:"#e1e1e1"}})]})}function v({children:e}){const t=(0,r.useRef)(null),[n,o]=(0,i.h)({rotateX:0,rotateY:0,scale:1});return(0,i.fD)(t,(({offset:e})=>{if(!t.current)return;const{width:n,height:r}=t.current.getBoundingClientRect(),s=e.x-n/2,a=e.y-r/2;o((0,i.ek)({rotateX:-a/8,rotateY:s/8,scale:1.1}))})),(0,s.jsx)(i.i0.div,{onMouseLeave:()=>o((0,i.ek)({rotateX:0,rotateY:0,scale:1})),ref:t,style:{perspective:"600px",scale:n.scale,rotateX:n.rotateX,rotateY:n.rotateY},children:e})}const w=c.A.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
`,y=(0,c.A)(i.i0.div)`
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;function b(){return(0,s.jsx)(w,{children:(0,s.jsx)(v,{children:(0,s.jsx)(y,{})})})}},6630:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(6540);var r=n(53),i=n(8442),s=n(5489),o=n(4586),a=n(1176),c=n(8478);const l={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",installation:"installation_A13E",copy:"copy_AhLy",features:"features_cAfv",featureList:"featureList_i_0T",featureCard:"featureCard_Jbd_",communityLinks:"communityLinks_LCOs"};var d=n(4848);function h({title:e,children:t}){return(0,d.jsxs)("div",{className:"home-card",children:[t,(0,d.jsx)("div",{className:"home-card-title",children:e})]})}function x(){return(0,d.jsxs)("div",{className:l?.communityLinks,children:[(0,d.jsxs)("a",{href:"https://discord.gg/qPqsD8pv",target:"_blank",rel:"noopener noreferrer",children:[(0,d.jsx)("svg",{fill:"white",stroke:"white",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30",height:"30",viewBox:"0 0 50 50",children:(0,d.jsx)("path",{d:"M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"})}),"Join Discord"]}),(0,d.jsxs)("a",{href:"https://github.com/dipeshrai123/react-ui-animate-docs",target:"_blank",rel:"noopener noreferrer",children:[(0,d.jsx)("svg",{fill:"white",stroke:"white",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30",height:"30",viewBox:"0 0 30 30",children:(0,d.jsx)("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"})}),(0,d.jsx)("span",{children:"GitHub"})]})]})}function u(){const{siteConfig:e}=(0,o.A)();return(0,d.jsx)("header",{className:(0,r.A)("hero hero--primary",l.heroBanner),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h1",{className:"hero__title",children:e.title}),(0,d.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,d.jsxs)("div",{className:l.installation,children:["npm i react-ui-animate"," ",(0,d.jsx)(a.kn0,{onClick:()=>navigator.clipboard.writeText("npm i react-ui-animate"),className:l.copy})]}),(0,d.jsx)("div",{className:l.buttons,children:(0,d.jsx)(s.A,{className:"button button--secondary button--lg",to:"/docs/getting-started",children:"Get Started"})}),(0,d.jsx)(x,{})]})})}function f(){const{siteConfig:e}=(0,o.A)();return(0,d.jsxs)(i.A,{title:`Hello from ${e.title}`,description:"React Library for Gestures and Animation",children:[(0,d.jsx)(u,{}),(0,d.jsxs)("section",{className:l?.features,children:[(0,d.jsx)("h2",{children:"Why React UI Animate?"}),(0,d.jsxs)("div",{className:l?.featureList,children:[(0,d.jsxs)("div",{className:l?.featureCard,children:[(0,d.jsx)("h3",{children:"\u26a1 Simple API"}),(0,d.jsx)("p",{children:"Designed to be minimal & intuitive for React developers."})]}),(0,d.jsxs)("div",{className:l?.featureCard,children:[(0,d.jsx)("h3",{children:"\ud83c\udfa8 High Performance"}),(0,d.jsx)("p",{children:"Optimized for smooth animations with minimal overhead."})]}),(0,d.jsxs)("div",{className:l?.featureCard,children:[(0,d.jsx)("h3",{children:"\ud83d\udd25 Interactive Gestures"}),(0,d.jsx)("p",{children:"Drag, scroll, and more\u2014handled with ease."})]})]})]}),(0,d.jsxs)("section",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"20vh"},children:[(0,d.jsx)("h2",{style:{textAlign:"center"},children:"Powerful animation examples"}),(0,d.jsx)("div",{style:{maxWidth:500,textAlign:"center"},children:"Create smooth, high-performance animations with React UI Animate's easy-to-use API\u2014from simple transforms to advanced interactive gestures."}),(0,d.jsxs)("div",{className:"homecards-container",children:[(0,d.jsx)(h,{title:"Sequence",children:(0,d.jsx)(c.A,{children:()=>{const{Sequence:e}=n(3499);return(0,d.jsx)(e,{})}})}),(0,d.jsx)(h,{title:"Draggable",children:(0,d.jsx)(c.A,{children:()=>{const{Draggable:e}=n(3499);return(0,d.jsx)(e,{})}})}),(0,d.jsx)(h,{title:"Scroll",children:(0,d.jsx)(c.A,{children:()=>{const{Scroll:e}=n(3499);return(0,d.jsx)(e,{})}})}),(0,d.jsx)(h,{title:"Mouse Move",children:(0,d.jsx)(c.A,{children:()=>{const{Cursor:e}=n(3499);return(0,d.jsx)(e,{})}})}),(0,d.jsx)(h,{title:"Unmount Animation",children:(0,d.jsx)(c.A,{children:()=>{const{MountUnmount:e}=n(3499);return(0,d.jsx)(e,{})}})}),(0,d.jsx)(h,{title:"Interaction",children:(0,d.jsx)(c.A,{children:()=>{const{Interaction:e}=n(3499);return(0,d.jsx)(e,{})}})})]})]})]})}}}]);