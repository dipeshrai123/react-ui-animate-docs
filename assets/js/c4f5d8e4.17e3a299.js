"use strict";(self.webpackChunkreact_ui_animate_docs=self.webpackChunkreact_ui_animate_docs||[]).push([[2634],{769:(e,t,i)=>{i.r(t),i.d(t,{AnimatedCard:()=>o});var n=i(6540),s=i(4900),r=i(4848);function o({children:e}){const t=(0,n.useRef)(null),[i,o]=(0,s.h)({rotateX:0,rotateY:0,scale:1});return(0,s.fD)(t,(({offset:e})=>{if(!t.current)return;const{width:i,height:n}=t.current.getBoundingClientRect(),r=e.x-i/2,a=e.y-n/2;o((0,s.ek)({rotateX:-a/20,rotateY:r/20,scale:1.1}))})),(0,r.jsx)(s.i0.div,{onMouseLeave:()=>o((0,s.ek)({rotateX:0,rotateY:0,scale:1})),ref:t,style:{perspective:"600px",scale:i.scale,rotateX:i.rotateX,rotateY:i.rotateY},children:e})}},4098:(e,t,i)=>{i.r(t),i.d(t,{Cursor:()=>b,Draggable:()=>D,Dropdown:()=>Y,LinkedInReact:()=>j,MountUnmount:()=>P,Scroll:()=>B,Sequence:()=>M,Slider:()=>L,Toast:()=>u});var n=i(6540),s=i(4900),r=i(8027),o=i(9879),a=i(1351),l=i(4848);const c={success:(0,l.jsx)(r.A7C,{size:24}),info:(0,l.jsx)(r.__w,{size:24}),warning:(0,l.jsx)(o.Qly,{size:28}),error:(0,l.jsx)(o.Qly,{size:28})},d=({id:e,text:t,type:i,onEnd:r})=>{const[o,d]=(0,n.useState)(!0),x=(0,n.useRef)();return(0,n.useLayoutEffect)((()=>(x.current=setTimeout((()=>{d(!1)}),4e3),()=>{clearTimeout(x.current)})),[]),(0,l.jsx)(s.CZ,{state:o,from:{height:0,opacity:0},enter:(0,s.ek)({height:60,opacity:1},{damping:12}),exit:(0,s.fY)({height:0,opacity:0},{easing:s.GS.inOut(s.GS.ease),onComplete:()=>r(e)}),children:({height:e,opacity:n})=>(0,l.jsxs)(s.i0.div,{className:`toast ${i}`,style:{position:"relative",width:320,borderRadius:8,height:e,opacity:n,scale:n.to([0,1],[.5,1]),overflow:"hidden",boxShadow:"0px 4px 8px rgba(0,0,0,0.2)"},children:[(0,l.jsx)("div",{children:c[i]}),(0,l.jsx)("div",{style:{color:"var(--ifm-text-color)",flex:1},children:t}),(0,l.jsx)("div",{onClick:()=>{x.current&&(clearTimeout(x.current),d(!1))},style:{paddingRight:8,color:"#999",cursor:"pointer"},children:(0,l.jsx)(a.$8F,{size:20})})]})})};let x=0;const h=[{text:"Successful message",type:"success"},{text:"Informational message",type:"info"},{text:"Warning message",type:"warning"},{text:"Error message",type:"error"}];function u(){const[e,t]=(0,n.useState)([]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{onClick:()=>{const e=Math.floor(Math.random()*h.length),{text:i,type:n}=h[e];t((e=>[...e,{id:x++,text:i,type:n}]))},className:"btn",children:"Toast Me"}),(0,l.jsx)("div",{style:{position:"fixed",right:10,bottom:10,display:"flex",flexDirection:"column",gap:10,zIndex:1e3},children:e.map((({id:e,text:i,type:n})=>(0,l.jsx)(d,{id:e,onEnd:e=>t((t=>t.filter((t=>t.id!==e)))),text:i,type:n},e)))})]})}var p=i(9197),f=i(7909);function g({index:e,icon:t,reaction:i,onSelectReaction:r}){const[o,a]=(0,n.useState)(!1),[c,d]=(0,s.h)(0),[x,h]=(0,s.h)(0),u=(0,s.JO)(o,{exit:(0,s.fY)(0,{duration:100})});return(0,n.useLayoutEffect)((()=>{d((0,s.kB)([(0,s.yA)(100*e),(0,s.ek)(1,{damping:14,stiffness:300})]))}),[e]),(0,l.jsxs)(s.i0.div,{onMouseEnter:()=>{a(!0),h((0,s.ek)(1))},onMouseLeave:()=>{a(!1),h((0,s.ek)(0))},onClick:()=>r(i),style:{position:"relative",opacity:c,translateY:c.to([0,1],[20,0])},children:[(0,l.jsx)(s.i0.div,{style:{width:30,height:30,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",scale:x.to([0,1],[1,1.6]),translateY:x.to([0,1],[0,-6])},children:t}),u(((e,t)=>t&&(0,l.jsx)(s.i0.div,{style:{position:"absolute",fontSize:12,left:"50%",top:-50,textAlign:"center",transform:"translateX(-50%)",fontWeight:"normal",backgroundColor:"black",color:"white",padding:"4px 8px",borderRadius:10,opacity:e},children:i})))]})}function m({children:e,reactions:t,onSelect:i}){const[r,o]=(0,n.useState)(!1),a=(0,s.JO)(r,{exit:(0,s.fY)(0,{duration:100})});return(0,l.jsxs)("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"center",fontWeight:"bold",cursor:"pointer",width:80,padding:"10px 0",position:"relative"},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[e,a(((e,n)=>n&&(0,l.jsx)(s.i0.div,{style:{position:"absolute",left:"-20%",bottom:"100%",padding:10,backgroundColor:"#fff",boxShadow:"0px 8px 16px rgba(0,0,0,0.12)",border:"1px solid #f1f1f1",borderRadius:10,display:"flex",alignItems:"center",gap:8,opacity:e,zIndex:10},children:Object.entries(t).map((([e,t],n)=>(0,l.jsx)(g,{index:n,icon:t,reaction:e,onSelectReaction:i},e)))})))]})}function j(){return(0,l.jsx)("div",{style:{margin:100},children:(0,l.jsx)(m,{reactions:{Like:(0,l.jsx)(o.tC7,{size:24,color:"#378fe9"}),Celebrate:(0,l.jsx)(p.ENb,{size:24,color:"#6dae4f"}),Support:(0,l.jsx)(r._oH,{size:24,color:"#bba9d1"}),Love:(0,l.jsx)(r.Mbv,{size:20,color:"#df704c"}),Insightful:(0,l.jsx)(f.n$Q,{size:26,color:"#f5bb5c"}),Funny:(0,l.jsx)(r.wsu,{size:24,color:"#79deed"})},onSelect:e=>alert(e),children:(0,l.jsxs)("div",{className:"like-button",children:[(0,l.jsx)(o.tC7,{size:18})," ",(0,l.jsx)("span",{children:"Like"})]})})})}const y=({containerRef:e})=>{const[t,i]=(0,s.h)({x:0,y:0,width:8,height:8});return(0,s.fD)(e,(({event:t})=>{const n=e.current.getBoundingClientRect(),r=document.elementFromPoint(t.clientX,t.clientY);let o,a,l,c;if(r?.closest(".target")){const{left:e,top:t,width:i,height:s}=r.getBoundingClientRect();o=e-n.left,a=t-n.top,l=i,c=s}else o=t.clientX-n.left-4,a=t.clientY-n.top-4,l=8,c=8;i((0,s.ek)({x:o,y:a,width:l,height:c}))})),(0,l.jsx)(s.i0.div,{style:{userSelect:"none",pointerEvents:"none",width:t.width,height:t.height,border:"2px solid #3399ff",position:"absolute",left:t.x,top:t.y,borderRadius:4}})};function b(){const e=(0,n.useRef)(null);return(0,l.jsxs)("div",{ref:e,className:"ctr",children:[(0,l.jsx)("div",{className:"target",children:"Target Button"}),(0,l.jsx)(y,{containerRef:e})]})}var v=i(5965),C=i(6512);const w=v.A.div`
  margin: 40px;
`,k=(0,v.A)(s.i0.div)`
  position: relative;
  display: inline-block;
`,A=(0,v.A)(s.i0.ul)`
  background-color: white;
  border: 1px solid #e1e1e1;
  display: inline-block;
  width: 180px;
  border-radius: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  padding-left: 0px;
`,S=v.A.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 8px;

  &.item {
    padding: 8px 10px;
    cursor: pointer;
    user-select: none;
    color: #000;

    &.danger {
      color: red;
    }

    &:hover {
      background-color: #f1f1f1;
    }
  }

  &.separator {
    border-top: 1px solid #e1e1e1;
    margin-top: 4px;
    margin-bottom: 4px;
  }
`,R=v.A.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
`,N=v.A.div`
  display: inline-block;
`,_=({items:e,children:t})=>{const[i,r]=(0,n.useState)(!1),o=(0,n.useRef)(null);return(0,s.jz)(o,(()=>{i&&r(!1)})),(0,l.jsxs)(k,{ref:o,children:[(0,l.jsx)(N,{onClick:e=>{e.preventDefault(),e.stopPropagation(),r((e=>!e))},children:t}),(0,l.jsx)(s.CZ,{state:i,enter:(0,s.fY)(1,{duration:250,easing:s.GS.elastic(1)}),exit:(0,s.fY)(0,{duration:250,easing:s.GS.elastic(1)}),children:t=>(0,l.jsx)(A,{style:{opacity:t,translateY:t.to([0,1],[-10,8]),scale:t.to([0,1],[.8,1])},children:e.map((({title:e,icon:t,onClick:i,danger:n,isSeparator:s},r)=>s?(0,l.jsx)(S,{className:"separator"},r):(0,l.jsxs)(S,{className:n?"item danger":"item",onClick:i,children:[t&&(0,l.jsx)(R,{children:t}),e]},r)))})})]})};function Y(){return(0,l.jsx)(w,{children:(0,l.jsx)(_,{items:[{title:"About",icon:(0,l.jsx)(r.__w,{})},{title:"Profile",icon:(0,l.jsx)(r.x$1,{})},{title:"Settings",icon:(0,l.jsx)(C.hyW,{})},{isSeparator:!0},{title:"Logout",danger:!0,icon:(0,l.jsx)(a.dRg,{})}],children:(0,l.jsx)("button",{className:"btn",type:"button",children:"Toggle"})})})}function L(){const e=(0,n.useRef)(null),t=(0,n.useRef)(null),i=(0,n.useRef)(0),[r,o]=(0,s.h)(0),[a,c]=(0,s.h)(0),[d,x]=(0,s.h)(0),[h,u]=(0,s.h)(0);return(0,s.i3)(e,(({movement:e,down:n,velocity:r})=>{c((0,s.ek)(n?1:0)),u(r.x);const a=(0,s.qE)(i.current+e.x,0,190);n?(o(a),x((0,s.ek)(a))):i.current=a,t.current&&(t.current.innerHTML=`${Number((0,s.to)(a,[0,190],[0,100])).toFixed(0)}%`)})),(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:100,width:"100%",height:"100%"},children:(0,l.jsxs)("div",{style:{width:200,height:100,position:"relative"},children:[(0,l.jsx)(s.i0.div,{ref:t,style:{width:60,height:60,borderRadius:"50%",border:"5px solid #b55ae6",position:"absolute",left:d,translateX:-20,top:0,display:"flex",alignItems:"center",justifyContent:"center",translateY:a.to([0,1],[80,20]),scale:a,opacity:a,rotate:h.to([-2,2],[30,-30]),color:"#666"}}),(0,l.jsxs)("div",{style:{position:"relative",height:20,marginTop:100},children:[(0,l.jsx)(s.i0.div,{ref:e,style:{width:20,height:20,borderRadius:"50%",border:"5px solid #3399ff",backgroundColor:"#fff",cursor:"grab",position:"absolute",top:0,left:r,zIndex:2,scale:a.to([0,1],[1,1.3]),userSelect:"none"}}),(0,l.jsx)("div",{style:{width:200,height:4,backgroundColor:"#e1e1e1",position:"absolute",bottom:8,left:0,userSelect:"none"}})]})]})})}const z=(0,v.A)(s.i0.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,I=(0,v.A)(s.i0.div)`
  width: 200px;
  height: 40px;
  background-color: #3399ff;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;function M(){const[e,t]=(0,s.h)({container:0,one:0,two:0,three:0});return(0,n.useEffect)((()=>{t((0,s.J7)((0,s.kB)([(0,s.fY)({container:1},{easing:s.GS.inOut(s.GS.ease)}),(0,s.fY)({one:1},{easing:s.GS.inOut(s.GS.ease)}),(0,s.fY)({two:1},{easing:s.GS.inOut(s.GS.ease)}),(0,s.fY)({three:1},{easing:s.GS.inOut(s.GS.ease)}),(0,s.yA)(1e3),(0,s.fY)({container:0,one:0,two:0,three:0},{easing:s.GS.inOut(s.GS.ease)})])))}),[]),(0,l.jsxs)(z,{style:{opacity:e.container},children:[(0,l.jsx)(I,{style:{opacity:e.one,scale:e.one.to([0,1],[.8,1]),translateY:e.one.to([0,1],[20,0])}}),(0,l.jsx)(I,{style:{opacity:e.two,scale:e.two.to([0,1],[.8,1]),translateY:e.two.to([0,1],[20,0])}}),(0,l.jsx)(I,{style:{opacity:e.three,scale:e.three.to([0,1],[.8,1]),translateY:e.three.to([0,1],[20,0])}})]})}const G=(0,v.A)(s.i0.div)`
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
`;function D(){const e=(0,n.useRef)(null),[t,i]=(0,s.h)(1),[r,o]=(0,s.h)({x:0,y:0});return(0,s.i3)(e,(({down:e,movement:{x:t,y:n}})=>{o(e?{x:t,y:n}:(0,s.ek)({x:0,y:0},{damping:10})),i((0,s.ek)(e?1.5:1))})),(0,l.jsx)(G,{ref:e,style:{translateX:r.x,translateY:r.y,scale:t},children:"Drag Me \ud83e\udd1a"})}const T=v.A.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
`,E=(0,v.A)(s.i0.div)`
  width: 100px;
  height: 100px;
  background-color: #0069d9;
  border-radius: 8px;
`;function B(){const e=(0,n.useRef)(null),{scrollYProgress:t}=(0,s.Ll)(window,{target:e,offset:["start end","start start"],toDescriptor:e=>(0,s.ek)(e,{damping:10})});return(0,l.jsx)(T,{ref:e,children:(0,l.jsx)(E,{style:{scale:t.to([0,1],[1,2]),backgroundColor:t.to([0,1],["#0069d9","#ff5733"])}})})}const O=v.A.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,X=(0,v.A)(s.i0.div)`
  width: 100px;
  height: 40px;
  background-color: #0069d9;
  border-radius: 8px;
  margin-bottom: 4px;
`;function P(){const[e,t]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{if(!e)return;const i=setTimeout((()=>{t(!1)}),3e3);return()=>{clearInterval(i)}}),[e]),(0,l.jsxs)(O,{children:[(0,l.jsx)(X,{style:{backgroundColor:"#e1e1e1"}}),(0,l.jsx)(s.CZ,{state:e,enter:(0,s.ek)(1,{damping:10}),exit:(0,s.ek)(0,{onComplete:()=>setTimeout((()=>t(!0)),1e3)}),children:e=>(0,l.jsx)(X,{style:{opacity:e,height:e.to([0,1],[0,80])}})}),(0,l.jsx)(X,{style:{backgroundColor:"#e1e1e1"}})]})}},6630:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});i(6540);var n=i(53),s=i(8442),r=i(5489),o=i(4586),a=i(9879),l=i(8478);const c={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",installation:"installation_A13E",copy:"copy_AhLy",features:"features_cAfv",featureList:"featureList_i_0T",featureCard:"featureCard_Jbd_",communityLinks:"communityLinks_LCOs"};var d=i(4848);function x({title:e,children:t}){return(0,d.jsxs)("div",{className:"home-card",children:[t,(0,d.jsx)("div",{className:"home-card-title",children:e})]})}function h(){return(0,d.jsxs)("div",{className:c?.communityLinks,children:[(0,d.jsxs)("a",{href:"https://discord.gg/qPqsD8pv",target:"_blank",rel:"noopener noreferrer",children:[(0,d.jsx)("svg",{fill:"white",stroke:"white",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30",height:"30",viewBox:"0 0 50 50",children:(0,d.jsx)("path",{d:"M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"})}),"Join Discord"]}),(0,d.jsxs)("a",{href:"https://github.com/dipeshrai123/react-ui-animate-docs",target:"_blank",rel:"noopener noreferrer",children:[(0,d.jsx)("svg",{fill:"white",stroke:"white",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30",height:"30",viewBox:"0 0 30 30",children:(0,d.jsx)("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"})}),(0,d.jsx)("span",{children:"GitHub"})]})]})}function u(){const{siteConfig:e}=(0,o.A)();return(0,d.jsx)("header",{className:(0,n.A)("hero hero--primary",c.heroBanner),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h1",{className:"hero__title",children:e.title}),(0,d.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,d.jsxs)("div",{className:c.installation,children:["npm i react-ui-animate"," ",(0,d.jsx)(a.kn0,{onClick:()=>navigator.clipboard.writeText("npm i react-ui-animate"),className:c.copy})]}),(0,d.jsx)("div",{className:c.buttons,children:(0,d.jsx)(l.A,{children:()=>{const{AnimatedCard:e}=i(769);return(0,d.jsx)(e,{children:(0,d.jsx)(r.A,{className:"button button--secondary button--lg",to:"/docs/getting-started",children:"Get Started"})})}})}),(0,d.jsx)(h,{})]})})}function p(){const{siteConfig:e}=(0,o.A)();return(0,d.jsxs)(s.A,{title:`Hello from ${e.title}`,description:"React Library for Gestures and Animation",children:[(0,d.jsx)(u,{}),(0,d.jsx)(l.A,{children:()=>{const{AnimatedCard:e}=i(769);return(0,d.jsxs)("section",{className:c?.features,children:[(0,d.jsx)("h2",{children:"Why React UI Animate?"}),(0,d.jsxs)("div",{className:c?.featureList,children:[(0,d.jsx)(e,{children:(0,d.jsxs)("div",{className:c?.featureCard,children:[(0,d.jsx)("h3",{children:"\u26a1 Simple API"}),(0,d.jsx)("p",{children:"Designed to be minimal & intuitive for React developers."})]})}),(0,d.jsx)(e,{children:(0,d.jsxs)("div",{className:c?.featureCard,children:[(0,d.jsx)("h3",{children:"\ud83c\udfa8 High Performance"}),(0,d.jsx)("p",{children:"Optimized for smooth animations with minimal overhead."})]})}),(0,d.jsx)(e,{children:(0,d.jsxs)("div",{className:c?.featureCard,children:[(0,d.jsx)("h3",{children:"\ud83d\udd25 Interactive Gestures"}),(0,d.jsx)("p",{children:"Drag, scroll, and more\u2014handled with ease."})]})})]})]})}}),(0,d.jsxs)("section",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"20vh"},children:[(0,d.jsx)("h2",{style:{textAlign:"center"},children:"Powerful animation examples"}),(0,d.jsx)("div",{style:{maxWidth:500,textAlign:"center"},children:"Create smooth, high-performance animations with React UI Animate's easy-to-use API\u2014from simple transforms to advanced interactive gestures."}),(0,d.jsxs)("div",{className:"homecards-container",children:[(0,d.jsx)(x,{title:"Sequence",children:(0,d.jsx)(l.A,{children:()=>{const{Sequence:e}=i(4098);return(0,d.jsx)(e,{})}})}),(0,d.jsx)(x,{title:"Draggable",children:(0,d.jsx)(l.A,{children:()=>{const{Draggable:e}=i(4098);return(0,d.jsx)(e,{})}})}),(0,d.jsx)(x,{title:"Scroll",children:(0,d.jsx)(l.A,{children:()=>{const{Scroll:e}=i(4098);return(0,d.jsx)(e,{})}})}),(0,d.jsx)(x,{title:"Mouse Move",children:(0,d.jsx)(l.A,{children:()=>{const{Cursor:e}=i(4098);return(0,d.jsx)(e,{})}})}),(0,d.jsx)(x,{title:"Unmount Animation",children:(0,d.jsx)(l.A,{children:()=>{const{MountUnmount:e}=i(4098);return(0,d.jsx)(e,{})}})}),(0,d.jsx)(x,{title:"LinkedIn Reaction",children:(0,d.jsx)(l.A,{children:()=>{const{LinkedInReact:e}=i(4098);return(0,d.jsx)(e,{})}})})]})]})]})}}}]);