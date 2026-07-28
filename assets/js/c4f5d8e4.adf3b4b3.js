"use strict";(self.webpackChunkreact_ui_animate_docs=self.webpackChunkreact_ui_animate_docs||[]).push([[2634],{5232:(n,e,t)=>{t.r(e),t.d(e,{default:()=>M});var i=t(6540),s=t(53),a=t(9408),o=t(5489),r=t(8432),l=t(4586),c=t(8478),d=t(9879),p=t(3),h=t(8027),m=t(712),u=t(54),f=t(4848);const g=["255, 255, 255"];function x(){const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(!e)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const t=e.getContext("2d"),i=e.parentElement;let s,a=[],o=0,r=0,l=Math.min(window.devicePixelRatio||1,2),c=!0;const d=(n,e)=>Math.random()*(e-n)+n,p=()=>({x:d(0,o),y:d(0,r),r:d(.7,1.8),vx:d(-.08,.08),vy:d(-.1,-.02),color:g[Math.floor(Math.random()*g.length)],baseAlpha:d(.18,.42),twinkleSpeed:d(8e-4,.002),twinklePhase:d(0,2*Math.PI)}),h=()=>{o=i.clientWidth,r=i.clientHeight,e.width=o*l,e.height=r*l,e.style.width=`${o}px`,e.style.height=`${r}px`,t.setTransform(l,0,0,l,0,0);const n=Math.min(60,Math.max(24,Math.round(o*r/22e3)));a=Array.from({length:n},p)},m=n=>{if(c){t.clearRect(0,0,o,r);for(const e of a){e.x+=e.vx,e.y+=e.vy,e.x<-10&&(e.x=o+10),e.x>o+10&&(e.x=-10),e.y<-10&&(e.y=r+10,e.x=d(0,o));const i=.5+.5*Math.sin(n*e.twinkleSpeed+e.twinklePhase),s=e.baseAlpha*(.4+.6*i),a=t.createRadialGradient(e.x,e.y,0,e.x,e.y,1.8*e.r);a.addColorStop(0,`rgba(${e.color}, ${s})`),a.addColorStop(1,`rgba(${e.color}, 0)`),t.beginPath(),t.fillStyle=a,t.arc(e.x,e.y,1.8*e.r,0,2*Math.PI),t.fill(),t.beginPath(),t.fillStyle=`rgba(${e.color}, ${.9*s})`,t.arc(e.x,e.y,e.r,0,2*Math.PI),t.fill()}s=requestAnimationFrame(m)}},u=()=>{document.hidden?(c=!1,cancelAnimationFrame(s)):c||(c=!0,s=requestAnimationFrame(m))};let f;const x=()=>{clearTimeout(f),f=setTimeout(h,150)};return h(),s=requestAnimationFrame(m),window.addEventListener("resize",x),document.addEventListener("visibilitychange",u),()=>{c=!1,cancelAnimationFrame(s),clearTimeout(f),window.removeEventListener("resize",x),document.removeEventListener("visibilitychange",u)}}),[]),(0,f.jsx)("canvas",{ref:n,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}})}const b={hero:"hero_aEcG",heroFade:"heroFade_Cvlm",heroGrid:"heroGrid_ibpR",heroContainer:"heroContainer_i2aB",heroCopy:"heroCopy_zvrZ",badge:"badge__JoJ",badgeDot:"badgeDot_JQyg",badgeLabel:"badgeLabel_oYDW",badgeArrow:"badgeArrow_vxMo",heroTitle:"heroTitle_qg2I",heroTitleAccent:"heroTitleAccent_D_mc",heroLede:"heroLede_tbCg",heroActions:"heroActions_Z2kl",buttonLink:"buttonLink_cbyh",button:"button_JGCe",buttonContent:"buttonContent_SSd9",buttonShine:"buttonShine_z4Oh",install:"install_xqa7",buttonPrimary:"buttonPrimary_gUGD",buttonGhost:"buttonGhost_PcW8",buttonIcon:"buttonIcon_HoGy",buttonIconLeft:"buttonIconLeft_cAft",installCard:"installCard_TOlU",installTabs:"installTabs_aa5M",installTab:"installTab__WaR",installTabActive:"installTabActive_QPRE",installCommandRow:"installCommandRow_e86y",installPrompt:"installPrompt_jzbo",installCode:"installCode_OxmA",installCopyBtn:"installCopyBtn_mwhb",installCopyIcon:"installCopyIcon_fi81",installCopyPop:"installCopyPop_anVh",techRow:"techRow_n9Me",techIcon:"techIcon_wOK7",section:"section_Q9Zo",sectionAlt:"sectionAlt_Oc16",sectionHeader:"sectionHeader_Gahl",showcaseDocsLink:"showcaseDocsLink_O9U9",eyebrow:"eyebrow_kY3W",sectionTitle:"sectionTitle_Ut5p",sectionLede:"sectionLede_zXD3",featureGrid:"featureGrid_hfN5",featureCard:"featureCard_Jbd_",featureIcon:"featureIcon_qaBM",featureTitle:"featureTitle_cv5G",featureDescription:"featureDescription_dZoZ",showcaseWrap:"showcaseWrap_GlUc",showcaseDocsIcon:"showcaseDocsIcon_w5Gd",showcaseFrame:"showcaseFrame_KaKp",showcaseNav:"showcaseNav_KwYE",showcaseNavItem:"showcaseNavItem_MnwN",showcaseNavItemActive:"showcaseNavItemActive_DQmL",showcaseNavIndex:"showcaseNavIndex_Zr2v",showcaseNavCopy:"showcaseNavCopy_qM7u",showcaseNavTitle:"showcaseNavTitle_yyY9",showcaseNavDesc:"showcaseNavDesc_aGEA",showcaseStage:"showcaseStage_GQKi",showcaseStageHead:"showcaseStageHead_Aeyq",showcaseStageTitle:"showcaseStageTitle_kuKi",showcaseStageDesc:"showcaseStageDesc_HdlY",showcaseToolbar:"showcaseToolbar_gzel",showcaseToolbarBtn:"showcaseToolbarBtn_HWfJ",showcaseToolbarBtnActive:"showcaseToolbarBtnActive_gWSi",showcaseCanvas:"showcaseCanvas_Lksh",showcaseIn:"showcaseIn_dZVq",showcaseCode:"showcaseCode_WQtT",showcaseCodeWrap:"showcaseCodeWrap_rF5q",showcaseFallback:"showcaseFallback_FJUB",cta:"cta__fRr",ctaTitle:"ctaTitle_arch",ctaLede:"ctaLede_MF4k",ctaActions:"ctaActions_U5Ze",ctaLinks:"ctaLinks_iPGx",ctaLink:"ctaLink_s8zR",ctaLinkIcon:"ctaLinkIcon_eGOm"},y="https://github.com/dipeshrai123/react-ui-animate",w="https://www.npmjs.com/package/react-ui-animate",v="https://discord.gg/qPqsD8pv",k=[{id:"npm",label:"npm",command:"npm i react-ui-animate"},{id:"pnpm",label:"pnpm",command:"pnpm add react-ui-animate"},{id:"yarn",label:"yarn",command:"yarn add react-ui-animate"},{id:"bun",label:"bun",command:"bun add react-ui-animate"}];function j({children:n,delay:e=0,y:t=14,className:s}){const[a,o]=(0,u.h)(0),[r,l]=(0,u.h)(t);return(0,i.useEffect)((()=>{const n=setTimeout((()=>{o((0,u.fY)(1,{duration:500})),l((0,u.ek)(0,{damping:20}))}),e);return()=>clearTimeout(n)}),[e,o,l]),(0,f.jsx)(u.i0.div,{className:s,style:{opacity:a,translateY:r},children:n})}const S=u.GS.bezier(.16,1,.3,1);function T({word:n,index:e,active:t,accent:s,stagger:a,duration:o}){const[r,l]=(0,u.h)("100%"),[c,d]=(0,u.h)(0);return(0,i.useEffect)((()=>{t&&(l((0,u.CI)(e,(0,u.fY)("0%",{duration:o,easing:S}),{each:a})),d((0,u.CI)(e,(0,u.fY)(1,{duration:.6*o}),{each:a})))}),[t,e,a,o,l,d]),(0,f.jsx)("span",{style:{display:"inline-block",overflow:"hidden",paddingBottom:"0.15em"},children:(0,f.jsx)(u.i0.span,{className:s?b.heroTitleAccent:void 0,style:{display:"inline-block",translateY:r,opacity:c},children:n})})}function C({text:n,delay:e=0,indexOffset:t=0,accent:s=!1,stagger:a=90,duration:o=900}){const[r,l]=(0,i.useState)(!1);(0,i.useEffect)((()=>{const n=setTimeout((()=>l(!0)),e);return()=>clearTimeout(n)}),[e]);const c=n.split(" ");return(0,f.jsx)(f.Fragment,{children:c.map(((n,e)=>(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(T,{word:n,index:t+e,active:r,accent:s,stagger:a,duration:o}),e<c.length-1?" ":""]},e)))})}function A({children:n,className:e,y:t=24}){return(0,f.jsx)(u.i0.div,{className:e,style:{opacity:0,translateY:t},view:{opacity:(0,u.fY)(1,{duration:600}),translateY:(0,u.ek)(0,{damping:20})},viewOptions:{threshold:.15,once:!0},children:n})}function D({children:n,to:e,href:t,variant:i="primary"}){const a=(0,s.A)(b.button,"primary"===i?b.buttonPrimary:b.buttonGhost);return t?(0,f.jsxs)("a",{className:a,href:t,target:"_blank",rel:"noopener noreferrer",children:[(0,f.jsx)("span",{className:b.buttonShine,"aria-hidden":"true"}),(0,f.jsx)("span",{className:b.buttonContent,children:n})]}):(0,f.jsxs)(o.A,{to:e,className:(0,s.A)(b.buttonLink,a),children:[(0,f.jsx)("span",{className:b.buttonShine,"aria-hidden":"true"}),(0,f.jsx)("span",{className:b.buttonContent,children:n})]})}function N(){const[n,e]=(0,i.useState)(0),[t,a]=(0,i.useState)(!1),o=k[n];return(0,f.jsxs)("div",{className:b.installCard,children:[(0,f.jsx)("div",{className:b.installTabs,role:"tablist","aria-label":"Package manager",children:k.map(((t,i)=>(0,f.jsx)("button",{type:"button",role:"tab","aria-selected":i===n,className:(0,s.A)(b.installTab,i===n&&b.installTabActive),onClick:()=>e(i),children:t.label},t.id)))}),(0,f.jsxs)("div",{className:b.installCommandRow,children:[(0,f.jsx)("span",{className:b.installPrompt,children:"$"}),(0,f.jsx)("code",{className:b.installCode,children:o.command}),(0,f.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(o.command).then((()=>{a(!0),setTimeout((()=>a(!1)),2e3)})).catch((()=>{}))},className:b.installCopyBtn,"aria-label":"Copy install command",children:t?(0,f.jsx)(d.mU9,{className:b.installCopyIcon}):(0,f.jsx)(d.kn0,{className:b.installCopyIcon})})]})]})}const I=[{icon:h.rMV,label:"React"},{icon:m.cyb,label:"TypeScript"},{icon:p.FrA,label:"60fps performance"},{icon:p.est,label:"Zero dependencies"}];function _(){return(0,f.jsxs)("header",{className:b.hero,children:[(0,f.jsx)("div",{className:b.heroGrid,"aria-hidden":"true"}),(0,f.jsx)(x,{}),(0,f.jsx)("div",{className:b.heroFade,"aria-hidden":"true"}),(0,f.jsx)("div",{className:(0,s.A)("container",b.heroContainer),children:(0,f.jsxs)("div",{className:b.heroCopy,children:[(0,f.jsx)(j,{delay:0,children:(0,f.jsxs)(o.A,{to:"/docs/getting-started",className:b.badge,children:[(0,f.jsx)("span",{className:b.badgeDot}),(0,f.jsx)("span",{className:b.badgeLabel,children:"React UI Animate 5.3"}),(0,f.jsx)(d.a1M,{className:b.badgeArrow})]})}),(0,f.jsxs)("h1",{className:b.heroTitle,children:[(0,f.jsx)(C,{text:"Fluid motion,",delay:80,indexOffset:0}),(0,f.jsx)("br",{}),(0,f.jsx)(C,{text:"built for React.",delay:80,indexOffset:2,accent:!0})]}),(0,f.jsx)("p",{className:b.heroLede,children:(0,f.jsx)(C,{text:"A lightweight, declarative library for springs, gestures, and exit animations. Silky 60fps motion with an API you'll actually enjoy writing.",delay:520,stagger:28,duration:650})}),(0,f.jsx)(j,{delay:240,children:(0,f.jsxs)("div",{className:b.heroActions,children:[(0,f.jsxs)(D,{to:"/docs/getting-started",variant:"primary",children:["Get Started",(0,f.jsx)(d.a1M,{className:b.buttonIcon})]}),(0,f.jsxs)(D,{href:y,variant:"ghost",children:[(0,f.jsx)(h.hL4,{className:b.buttonIconLeft}),"Star on GitHub"]})]})}),(0,f.jsx)(j,{delay:320,children:(0,f.jsx)(N,{})}),(0,f.jsx)(j,{delay:400,className:b.techRow,children:I.map((({icon:n,label:e})=>(0,f.jsx)("span",{className:b.techIcon,title:e,children:(0,f.jsx)(n,{"aria-hidden":"true"})},e)))})]})})]})}const L=[{icon:p.Bpe,title:"Declarative API",description:"Animate with props like animate, hover, press, and view. No imperative timelines or boilerplate."},{icon:p.FrA,title:"60fps Performance",description:"Values update outside React\u2019s render cycle, so motion stays smooth without triggering re-renders."},{icon:p.PfQ,title:"Gestures Built-in",description:"First-class hooks for drag, move, scroll, and wheel let you craft rich, tactile interactions."},{icon:p.s_k,title:"Unmount & Exit",description:"Animate components as they leave the DOM. Built for modals, tooltips, and dropdowns."},{icon:p.PjK,title:"TypeScript First",description:"Fully typed components, hooks, and utilities with autocomplete that guides you as you build."},{icon:p.est,title:"Tiny & Tree-shakeable",description:"Import only what you use. Side-effect free and optimized for modern bundlers."}];function R({feature:n}){const e=n.icon;return(0,f.jsxs)(u.i0.div,{className:b.featureCard,style:{opacity:0,translateY:20},view:{opacity:(0,u.fY)(1,{duration:500}),translateY:(0,u.ek)(0,{damping:20})},viewOptions:{threshold:.1,once:!0},hover:{scale:(0,u.ek)(1.02)},children:[(0,f.jsx)("span",{className:b.featureIcon,children:(0,f.jsx)(e,{})}),(0,f.jsx)("h3",{className:b.featureTitle,children:n.title}),(0,f.jsx)("p",{className:b.featureDescription,children:n.description})]})}function z(){return(0,f.jsx)("section",{className:b.section,children:(0,f.jsxs)("div",{className:"container",children:[(0,f.jsxs)(A,{className:b.sectionHeader,children:[(0,f.jsx)("span",{className:b.eyebrow,children:"Why React UI Animate"}),(0,f.jsx)("h2",{className:b.sectionTitle,children:"A focused toolkit for motion"}),(0,f.jsx)("p",{className:b.sectionLede,children:"Powerful enough for complex interactions, simple enough to learn in an afternoon."})]}),(0,f.jsx)("div",{className:b.featureGrid,children:L.map((n=>(0,f.jsx)(R,{feature:n},n.title)))})]})})}const E=[{key:"DragDemo",title:"Drag & spring",description:"Grab, release, and watch it spring back into place.",code:'import React, { useRef, useState } from \'react\';\nimport styled from \'@emotion/styled\';\nimport { animate, useValue, useDrag, withSpring } from \'react-ui-animate\';\n\nconst Stage = styled.div`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n`;\n\nconst Card = styled(animate.div)`\n  width: 148px;\n  height: 148px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  border-radius: 30px;\n  cursor: grab;\n  user-select: none;\n  touch-action: none;\n  color: #ffffff;\n  background: #3b82f6;\n  border: 1px solid #2563eb;\n  font-size: 15px;\n  font-weight: 600;\n\n  &:active {\n    cursor: grabbing;\n  }\n`;\n\nconst Caption = styled.div`\n  font-family: var(--site-mono);\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  color: #6b7280;\n`;\n\nexport function DragDemo() {\n  const ref = useRef<HTMLDivElement>(null);\n  const [scale, setScale] = useValue(1);\n  const [grabbing, setGrabbing] = useState(false);\n\n  const { x, y } = useDrag(ref, {\n    bounds: { left: 0, right: 0, top: 0, bottom: 0 },\n    onStart: () => {\n      setGrabbing(true);\n      setScale(withSpring(1.1));\n    },\n    onEnd: () => {\n      setGrabbing(false);\n      setScale(withSpring(1));\n    },\n  });\n\n  return (\n    <Stage>\n      <Card ref={ref} style={{ translateX: x, translateY: y, scale }}>\n        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">\n          <path\n            d="M12 3v18M3 12h18"\n            stroke="currentColor"\n            strokeWidth="2"\n            strokeLinecap="round"\n          />\n        </svg>\n        <span>{grabbing ? \'spring physics\' : \'drag me\'}</span>\n      </Card>\n      <Caption>Drag the card. It springs right back.</Caption>\n    </Stage>\n  );\n}\n'},{key:"ToastDemo",title:"Toast",description:"Enter, hold, then exit with Unmount.",code:"import React, { useCallback, useState } from 'react';\nimport styled from '@emotion/styled';\nimport { FiCheck, FiX } from 'react-icons/fi';\nimport {\n  animate,\n  Unmount,\n  withSequence,\n  withSpring,\n  withTiming,\n} from 'react-ui-animate';\n\nconst MESSAGES = [\n  { title: 'Changes saved', detail: 'Your draft was synced' },\n  { title: 'Invite sent', detail: 'Alex will get an email shortly' },\n  { title: 'Deploy complete', detail: 'Production is live on v6.0.0-next.1' },\n];\n\nconst Stage = styled.div`\n  position: relative;\n  width: 100%;\n  max-width: 360px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 16px;\n`;\n\nconst Trigger = styled.button`\n  align-self: center;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  color: #e5e7eb;\n  cursor: pointer;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n  transition: background 0.15s ease, border-color 0.15s ease;\n\n  &:hover {\n    background: #1f222b;\n    border-color: #3a3f4a;\n  }\n`;\n\nconst Tray = styled.div`\n  position: relative;\n  min-height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 8px;\n  padding: 12px;\n  border-radius: 12px;\n  border: 1px solid #2a2e38;\n  background: #12141a;\n`;\n\nconst ToastCard = styled(animate.div)`\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 10px;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n`;\n\nconst Body = styled.div`\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 14px 14px 16px;\n`;\n\nconst Icon = styled.div`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n  margin-top: 1px;\n  border-radius: 8px;\n  background: #143528;\n  color: #34d399;\n`;\n\nconst Copy = styled.div`\n  flex: 1;\n  min-width: 0;\n  padding-top: 1px;\n`;\n\nconst Title = styled.div`\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  line-height: 1.3;\n  color: #e5e7eb;\n`;\n\nconst Detail = styled.div`\n  margin-top: 3px;\n  font-size: 14px;\n  line-height: 1.45;\n  color: #9ca3af;\n`;\n\nconst Dismiss = styled.button`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  flex-shrink: 0;\n  margin: -2px -2px 0 0;\n  padding: 0;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: #6b7280;\n  cursor: pointer;\n  transition: background 0.15s ease, color 0.15s ease;\n\n  &:hover {\n    background: #1f222b;\n    color: #d1d5db;\n  }\n`;\n\nconst Track = styled.div`\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 2px;\n  background: #1f222b;\n`;\n\nconst Progress = styled(animate.div)`\n  height: 100%;\n  background: #60a5fa;\n  transform-origin: left center;\n`;\n\nconst EmptyHint = styled.div`\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  font-size: 14px;\n  letter-spacing: -0.01em;\n  color: #6b7280;\n  opacity: ${(p: { $visible: boolean }) => (p.$visible ? 1 : 0)};\n  transition: opacity 0.2s ease;\n`;\n\nlet uid = 0;\n\ntype ToastItem = {\n  id: number;\n  title: string;\n  detail: string;\n};\n\nfunction Toast({\n  item,\n  onEnd,\n}: {\n  item: ToastItem;\n  onEnd: (id: number) => void;\n}) {\n  return (\n    <ToastCard\n      style={{ height: 0, opacity: 0, scale: 0.97, y: -6 }}\n      animate={{\n        height: withSpring(76, { damping: 18, stiffness: 220 }),\n        opacity: withSpring(1, { damping: 18 }),\n        scale: withSpring(1, { damping: 18 }),\n        y: withSpring(0, { damping: 18 }),\n      }}\n      unmount={{\n        height: withSpring(0, { damping: 18 }),\n        opacity: withTiming(0, { duration: 160 }),\n        scale: withSpring(0.97, { damping: 18 }),\n        y: withTiming(-4, { duration: 160 }),\n      }}\n    >\n      <Body>\n        <Icon aria-hidden=\"true\">\n          <FiCheck size={14} strokeWidth={2.5} />\n        </Icon>\n        <Copy>\n          <Title>{item.title}</Title>\n          <Detail>{item.detail}</Detail>\n        </Copy>\n        <Dismiss\n          type=\"button\"\n          aria-label=\"Dismiss\"\n          onClick={() => onEnd(item.id)}\n        >\n          <FiX size={14} strokeWidth={2} />\n        </Dismiss>\n      </Body>\n      <Track>\n        <Progress\n          style={{ width: '0%' }}\n          animate={{\n            width: withSequence([\n              withTiming('0%', { duration: 0 }),\n              withTiming('100%', {\n                duration: 3200,\n                onComplete: () => onEnd(item.id),\n              }),\n            ]),\n          }}\n        />\n      </Track>\n    </ToastCard>\n  );\n}\n\nexport function ToastDemo() {\n  const [toasts, setToasts] = useState<ToastItem[]>([]);\n\n  const remove = useCallback((id: number) => {\n    setToasts((prev) => prev.filter((t) => t.id !== id));\n  }, []);\n\n  const add = () => {\n    const message = MESSAGES[uid % MESSAGES.length];\n    setToasts((prev) => [\n      ...prev.slice(-2),\n      { id: uid++, title: message.title, detail: message.detail },\n    ]);\n  };\n\n  return (\n    <Stage>\n      <Trigger type=\"button\" onClick={add}>\n        Show notification\n      </Trigger>\n      <Tray>\n        <EmptyHint $visible={toasts.length === 0}>\n          Notifications appear here\n        </EmptyHint>\n        <Unmount>\n          {toasts.map((item) => (\n            <Toast key={item.id} item={item} onEnd={remove} />\n          ))}\n        </Unmount>\n      </Tray>\n    </Stage>\n  );\n}\n"},{key:"ModalDemo",title:"Modal",description:"Scale-in dialog with outside-click dismiss.",code:"import React, { useRef, useState } from 'react';\nimport styled from '@emotion/styled';\nimport { MdClose } from 'react-icons/md';\nimport {\n  animate,\n  Unmount,\n  useOutsideClick,\n  withSpring,\n  withTiming,\n} from 'react-ui-animate';\n\nconst Stage = styled.div`\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  border-radius: 12px;\n`;\n\nconst Trigger = styled.button`\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 500;\n  color: #e5e7eb;\n  cursor: pointer;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n`;\n\nconst Backdrop = styled(animate.div)`\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #08090d;\n`;\n\nconst Dialog = styled(animate.div)`\n  position: relative;\n  width: 88%;\n  max-width: 320px;\n  padding: 22px 20px 20px;\n  border-radius: 12px;\n  background: #15171e;\n  border: 1px solid #2a2e38;\n  font-family: inherit;\n`;\n\nconst CloseBtn = styled.button`\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  color: #9ca3af;\n  cursor: pointer;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n`;\n\nconst DialogTitle = styled.h3`\n  margin: 0 0 8px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  color: #e5e7eb;\n`;\n\nconst DialogText = styled.p`\n  margin: 0 0 20px;\n  font-size: 14px;\n  line-height: 1.55;\n  color: #9ca3af;\n`;\n\nconst Actions = styled.div`\n  display: flex;\n  gap: 8px;\n`;\n\nconst Ghost = styled.button`\n  flex: 1;\n  padding: 10px 0;\n  border-radius: 9px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  color: #e5e7eb;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n`;\n\nconst Solid = styled.button`\n  flex: 1;\n  padding: 10px 0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  color: #eff6ff;\n  background: #1e3a5f;\n  border: 1px solid #3b5a80;\n`;\n\nfunction Dialog_({ onClose }: { onClose: () => void }) {\n  const ref = useRef(null);\n  useOutsideClick(ref, onClose);\n\n  return (\n    <Backdrop\n      style={{ opacity: 0 }}\n      animate={{ opacity: withTiming(1, { duration: 200 }) }}\n      unmount={{ opacity: withTiming(0, { duration: 180 }) }}\n    >\n      <Dialog\n        ref={ref}\n        style={{ opacity: 0, scale: 0.86, translateY: 16 }}\n        animate={{\n          opacity: withTiming(1, { duration: 180 }),\n          scale: withSpring(1, { damping: 18, stiffness: 240 }),\n          translateY: withSpring(0, { damping: 18, stiffness: 240 }),\n        }}\n        unmount={{\n          opacity: withTiming(0, { duration: 160 }),\n          scale: withSpring(0.86, { damping: 18, stiffness: 240 }),\n          translateY: withSpring(16, { damping: 18, stiffness: 240 }),\n        }}\n      >\n        <CloseBtn onClick={onClose} aria-label=\"Close\">\n          <MdClose />\n        </CloseBtn>\n        <DialogTitle>Delete project?</DialogTitle>\n        <DialogText>\n          This will permanently remove the project and all of its files. This\n          action can&apos;t be undone.\n        </DialogText>\n        <Actions>\n          <Ghost onClick={onClose}>Cancel</Ghost>\n          <Solid onClick={onClose}>Confirm</Solid>\n        </Actions>\n      </Dialog>\n    </Backdrop>\n  );\n}\n\nexport function ModalDemo() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <Stage>\n      <Trigger onClick={() => setOpen(true)}>Open dialog</Trigger>\n      <Unmount>\n        {open && <Dialog_ key=\"dialog\" onClose={() => setOpen(false)} />}\n      </Unmount>\n    </Stage>\n  );\n}\n"},{key:"AccordionDemo",title:"Accordion",description:"Height spring for expanding panels.",code:"import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';\nimport styled from '@emotion/styled';\nimport { FiChevronDown } from 'react-icons/fi';\nimport { animate, useValue, withSpring } from 'react-ui-animate';\n\nconst Stage = styled.div`\n  width: 100%;\n  max-width: 360px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n`;\n\nconst Eyebrow = styled.div`\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  color: #6b7280;\n  text-align: center;\n`;\n\nconst List = styled.div`\n  overflow: hidden;\n  border-radius: 12px;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n`;\n\nconst Item = styled.div<{ $last: boolean; $open: boolean }>`\n  border-bottom: ${(p) => (p.$last ? 'none' : '1px solid #2a2e38')};\n  background: ${(p) => (p.$open ? '#15171e' : 'transparent')};\n`;\n\nconst Header = styled.button`\n  width: 100%;\n  display: grid;\n  grid-template-columns: 24px minmax(0, 1fr) 24px;\n  align-items: center;\n  column-gap: 10px;\n  padding: 14px 14px;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  text-align: left;\n  font-family: inherit;\n`;\n\nconst Index = styled.span<{ $open: boolean }>`\n  font-size: 13px;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 0.02em;\n  color: ${(p) => (p.$open ? '#60a5fa' : '#6b7280')};\n  transition: color 0.15s ease;\n`;\n\nconst Question = styled.span<{ $open: boolean }>`\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  line-height: 1.35;\n  color: ${(p) => (p.$open ? '#e5e7eb' : '#d1d5db')};\n  transition: color 0.15s ease;\n`;\n\n/* animate.div wraps a custom component rather than a DOM tag string, so\n   emotion can't auto-filter $-prefixed transient props here. Pass the\n   open state through the style prop instead of a styled prop. */\nconst Chevron = styled(animate.div)`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.15s ease;\n`;\n\nconst Panel = styled(animate.div)`\n  overflow: hidden;\n`;\n\nconst Answer = styled.div`\n  display: grid;\n  grid-template-columns: 24px minmax(0, 1fr) 24px;\n  column-gap: 10px;\n  padding: 0 14px 14px;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.01em;\n  color: #9ca3af;\n\n  span {\n    grid-column: 2;\n  }\n`;\n\nconst FAQ = [\n  {\n    q: 'Is it production ready?',\n    a: 'Yes. It ships with TypeScript types, works in React 18+, and is tree-shakeable.',\n  },\n  {\n    q: 'Does it support gestures?',\n    a: 'Drag, move, scroll, and wheel are built in as hooks you can drop onto any element.',\n  },\n  {\n    q: 'How big is the bundle?',\n    a: 'Small by default. You only pay for the modifiers and gestures you import.',\n  },\n];\n\nfunction AccordionItem({\n  index,\n  q,\n  a,\n  open,\n  last,\n  onToggle,\n}: {\n  index: number;\n  q: string;\n  a: string;\n  open: boolean;\n  last: boolean;\n  onToggle: () => void;\n}) {\n  const contentRef = useRef<HTMLDivElement>(null);\n  const [progress, setProgress] = useValue(0);\n  const [height, setHeight] = useValue(0);\n  const contentHeight = useRef(0);\n\n  useLayoutEffect(() => {\n    const el = contentRef.current;\n    if (!el) return;\n\n    const measure = () => {\n      contentHeight.current = el.scrollHeight;\n    };\n\n    measure();\n\n    const observer = new ResizeObserver(measure);\n    observer.observe(el);\n    return () => observer.disconnect();\n  }, [a]);\n\n  useEffect(() => {\n    setProgress(withSpring(open ? 1 : 0, { damping: 22, stiffness: 260 }));\n    setHeight(\n      withSpring(open ? contentHeight.current : 0, {\n        damping: 22,\n        stiffness: 260,\n      })\n    );\n  }, [open, setProgress, setHeight]);\n\n  return (\n    <Item $last={last} $open={open}>\n      <Header type=\"button\" onClick={onToggle} aria-expanded={open}>\n        <Index $open={open}>{String(index + 1).padStart(2, '0')}</Index>\n        <Question $open={open}>{q}</Question>\n        <Chevron\n          style={{\n            rotateZ: progress.to([0, 1], [0, 180]),\n            color: open ? '#60a5fa' : '#6b7280',\n          }}\n        >\n          <FiChevronDown size={16} strokeWidth={2.25} />\n        </Chevron>\n      </Header>\n      <Panel style={{ height, opacity: progress }}>\n        <Answer ref={contentRef}>\n          <span>{a}</span>\n        </Answer>\n      </Panel>\n    </Item>\n  );\n}\n\nexport function AccordionDemo() {\n  const [active, setActive] = useState(0);\n\n  return (\n    <Stage>\n      <Eyebrow>Frequently asked</Eyebrow>\n      <List>\n        {FAQ.map((item, i) => (\n          <AccordionItem\n            key={item.q}\n            index={i}\n            q={item.q}\n            a={item.a}\n            open={active === i}\n            last={i === FAQ.length - 1}\n            onToggle={() => setActive((cur) => (cur === i ? -1 : i))}\n          />\n        ))}\n      </List>\n    </Stage>\n  );\n}\n"},{key:"TabsDemo",title:"Tabs",description:"Sliding indicator that follows the active tab.",code:"import React, { useState } from 'react';\nimport styled from '@emotion/styled';\nimport {\n  animate,\n  FlipGroup,\n  useValue,\n  withSequence,\n  withSpring,\n  withTiming,\n} from 'react-ui-animate';\n\nconst Stage = styled.div`\n  width: 100%;\n  max-width: 360px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n`;\n\nconst TabBar = styled.div`\n  display: flex;\n  padding: 5px;\n  border-radius: 12px;\n  background: #15171e;\n  border: 1px solid #2a2e38;\n`;\n\nconst Tab = styled.button<{ active: boolean }>`\n  position: relative;\n  z-index: 1;\n  flex: 1;\n  padding: 10px 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: ${(p) => (p.active ? '#ffffff' : '#9ca3af')};\n  transition: color 0.2s ease;\n`;\n\nconst Panel = styled(animate.div)`\n  min-height: 108px;\n  padding: 16px 18px;\n  border-radius: 12px;\n  background: #15171e;\n  border: 1px solid #2a2e38;\n`;\n\nconst PanelTitle = styled.div`\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  color: #e5e7eb;\n  margin-bottom: 6px;\n`;\n\nconst PanelText = styled.div`\n  font-size: 14px;\n  line-height: 1.55;\n  color: #9ca3af;\n`;\n\nconst TABS = [\n  {\n    label: 'Overview',\n    title: 'Declarative motion',\n    text: 'Animate with simple props instead of hand-writing timelines.',\n  },\n  {\n    label: 'Gestures',\n    title: 'Built-in gestures',\n    text: 'Drag, move, scroll, and wheel hooks for tactile interactions.',\n  },\n  {\n    label: 'Unmount',\n    title: 'Exit animations',\n    text: 'Animate elements out as they leave the DOM, e.g. modals and toasts.',\n  },\n];\n\nexport function TabsDemo() {\n  const [active, setActive] = useState(0);\n  const [enter, setEnter] = useValue(1);\n  const current = TABS[active];\n\n  const select = (index: number) => {\n    if (index === active) return;\n    setActive(index);\n    setEnter(\n      withSequence([\n        withTiming(0, { duration: 0 }),\n        withSpring(1, { damping: 22, stiffness: 280 }),\n      ])\n    );\n  };\n\n  return (\n    <Stage>\n      <FlipGroup>\n        <TabBar>\n          {TABS.map((t, i) => (\n            <Tab\n              key={t.label}\n              type=\"button\"\n              active={active === i}\n              onClick={() => select(i)}\n            >\n              {active === i && (\n                <animate.div\n                  flipId=\"home-tabs-indicator\"\n                  flipOptions={withSpring({ stiffness: 420, damping: 34 })}\n                  style={{\n                    position: 'absolute',\n                    inset: 0,\n                    borderRadius: 7,\n                    backgroundColor: '#1f222b',\n                    zIndex: -1,\n                  }}\n                />\n              )}\n              {t.label}\n            </Tab>\n          ))}\n        </TabBar>\n      </FlipGroup>\n\n      <Panel\n        style={{\n          opacity: enter,\n          translateY: enter.to([0, 1], [6, 0]),\n        }}\n      >\n        <PanelTitle>{current.title}</PanelTitle>\n        <PanelText>{current.text}</PanelText>\n      </Panel>\n    </Stage>\n  );\n}\n"},{key:"LikeButtonDemo",title:"Like button",description:"Press feedback with a spring pop.",code:"import React, { useEffect, useState } from 'react';\nimport styled from '@emotion/styled';\nimport { MdFavorite } from 'react-icons/md';\nimport { animate, useValue, withSequence, withSpring, withTiming } from 'react-ui-animate';\n\nconst Stage = styled.div`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  font-family: inherit;\n`;\n\nconst Button = styled.button`\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  cursor: pointer;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n`;\n\nconst Heart = styled(animate.div)`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 38px;\n`;\n\nconst Particle = styled(animate.div)`\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 7px;\n  height: 7px;\n  margin: -3.5px 0 0 -3.5px;\n  border-radius: 50%;\n  background: #f43f5e;\n  pointer-events: none;\n`;\n\nconst Count = styled.div`\n  font-size: 15px;\n  font-weight: 600;\n  color: #9ca3af;\n`;\n\nconst PARTICLES = 6;\n\nconst DOTS = Array.from({ length: PARTICLES }, (_, i) => {\n  const angle = (i / PARTICLES) * Math.PI * 2;\n  const dist = 42;\n  return { angle, dx: Math.cos(angle) * dist, dy: Math.sin(angle) * dist };\n});\n\nfunction Burst() {\n  return (\n    <>\n      {DOTS.map((d) => (\n        <ParticleDot key={d.angle} dx={d.dx} dy={d.dy} />\n      ))}\n    </>\n  );\n}\n\nfunction ParticleDot({ dx, dy }: { dx: number; dy: number }) {\n  const [x, setX] = useValue(0);\n  const [y, setY] = useValue(0);\n  const [o, setO] = useValue(1);\n  const [s, setS] = useValue(1);\n\n  useEffect(() => {\n    setX(withSpring(dx, { damping: 14, stiffness: 200 }));\n    setY(withSpring(dy, { damping: 14, stiffness: 200 }));\n    setO(withTiming(0, { duration: 600 }));\n    setS(withTiming(0, { duration: 600 }));\n  }, [dx, dy, setO, setS, setX, setY]);\n\n  return (\n    <Particle style={{ translateX: x, translateY: y, opacity: o, scale: s }} />\n  );\n}\n\nexport function LikeButtonDemo() {\n  const [liked, setLiked] = useState(false);\n  const [count, setCount] = useState(128);\n  const [bursts, setBursts] = useState<number[]>([]);\n  const [scale, setScale] = useValue(1);\n  const [color, setColor] = useValue(0);\n\n  const toggle = () => {\n    const next = !liked;\n    setLiked(next);\n    setCount((c) => c + (next ? 1 : -1));\n    setColor(withTiming(next ? 1 : 0, { duration: 220 }));\n\n    if (next) {\n      setScale(\n        withSequence([\n          withSpring(1.35, { damping: 6, stiffness: 320 }),\n          withSpring(1, { damping: 14 }),\n        ])\n      );\n      const id = Date.now();\n      setBursts((b) => [...b, id]);\n      setTimeout(() => setBursts((b) => b.filter((x) => x !== id)), 700);\n    } else {\n      setScale(withSpring(1, { damping: 14 }));\n    }\n  };\n\n  return (\n    <Stage>\n      <Button onClick={toggle} aria-pressed={liked}>\n        {bursts.map((id) => (\n          <Burst key={id} />\n        ))}\n        <Heart\n          style={{\n            scale,\n            color: color.to([0, 1], ['#6b7280', '#f43f5e']),\n          }}\n        >\n          <MdFavorite />\n        </Heart>\n      </Button>\n      <Count>\n        {count.toLocaleString()} {count === 1 ? 'like' : 'likes'}\n      </Count>\n    </Stage>\n  );\n}\n"},{key:"SwipeListDemo",title:"Swipe to delete",description:"Drag with snap-back and dismiss.",code:"import React, { useCallback, useEffect, useRef, useState } from 'react';\nimport styled from '@emotion/styled';\nimport { FiTrash2 } from 'react-icons/fi';\nimport {\n  animate,\n  Unmount,\n  Gesture,\n  useGesture,\n  useValue,\n  withSpring,\n  withStagger,\n  withTiming,\n} from 'react-ui-animate';\n\nconst Stage = styled.div`\n  width: 100%;\n  max-width: 360px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n`;\n\nconst Hint = styled.div`\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  color: #6b7280;\n  text-align: center;\n`;\n\nconst List = styled.div`\n  display: flex;\n  flex-direction: column;\n  min-height: 220px;\n`;\n\nconst RowWrap = styled(animate.div)`\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 10px;\n`;\n\nconst DeleteBg = styled.div`\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  padding-right: 18px;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: #ffffff;\n  background: #dc2626;\n`;\n\nconst Fore = styled(animate.div)`\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 14px 0 16px;\n  background: #1a1d24;\n  border: 1px solid #2a2e38;\n  border-radius: 10px;\n  cursor: grab;\n  user-select: none;\n  touch-action: pan-y;\n\n  &:active {\n    cursor: grabbing;\n  }\n`;\n\nconst Avatar = styled.div<{ $color: string }>`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n  border-radius: 9px;\n  background: ${(p) => p.$color};\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: #ffffff;\n`;\n\nconst Meta = styled.div`\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n`;\n\nconst Name = styled.div`\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  line-height: 1.3;\n  color: #e5e7eb;\n`;\n\nconst Detail = styled.div`\n  font-size: 14px;\n  line-height: 1.35;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n`;\n\nconst Time = styled.div`\n  flex-shrink: 0;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n`;\n\nconst ROW_H = 64;\nconst THRESHOLD = 88;\n\ntype ItemData = {\n  id: number;\n  order: number;\n  name: string;\n  detail: string;\n  time: string;\n  color: string;\n  initials: string;\n};\n\nconst SEED: Omit<ItemData, 'id' | 'order'>[] = [\n  {\n    name: 'Olivia Hart',\n    detail: 'Sent you design.fig',\n    time: '2m',\n    color: '#3b82f6',\n    initials: 'OH',\n  },\n  {\n    name: 'Liam Chen',\n    detail: 'Liked your update',\n    time: '1h',\n    color: '#10b981',\n    initials: 'LC',\n  },\n  {\n    name: 'Ava Patel',\n    detail: 'Commented on Draft',\n    time: '3h',\n    color: '#f59e0b',\n    initials: 'AP',\n  },\n];\n\nlet nextId = 1;\n\nfunction createItems(): ItemData[] {\n  return SEED.map((item, order) => ({ ...item, id: nextId++, order }));\n}\n\nfunction Row({\n  item,\n  onDelete,\n}: {\n  item: ItemData;\n  onDelete: (id: number) => void;\n}) {\n  const ref = useRef<HTMLDivElement>(null);\n  const [tx, setTx] = useValue(0);\n  const deleting = useRef(false);\n\n  useGesture(\n    ref,\n    Gesture.Pan()\n      .onChange(({ movement }) => {\n        if (deleting.current) return;\n        setTx(Math.min(0, movement.x));\n      })\n      .onEnd(({ movement }) => {\n        if (deleting.current) return;\n        const nx = Math.min(0, movement.x);\n        if (nx < -THRESHOLD) {\n          deleting.current = true;\n          setTx(\n            withTiming(-320, {\n              duration: 180,\n              onComplete: () => onDelete(item.id),\n            })\n          );\n        } else {\n          setTx(withSpring(0, { damping: 20, stiffness: 280 }));\n        }\n      })\n  );\n\n  return (\n    <RowWrap\n      style={{ height: 0, opacity: 0, scale: 0.98, marginBottom: 0 }}\n      animate={{\n        height: withStagger(\n          item.order,\n          withSpring(ROW_H, { damping: 22, stiffness: 260 }),\n          { each: 55 }\n        ),\n        marginBottom: withStagger(\n          item.order,\n          withSpring(8, { damping: 22, stiffness: 260 }),\n          { each: 55 }\n        ),\n        opacity: withStagger(item.order, withTiming(1, { duration: 200 }), {\n          each: 55,\n        }),\n        scale: withStagger(\n          item.order,\n          withSpring(1, { damping: 22, stiffness: 260 }),\n          { each: 55 }\n        ),\n      }}\n      unmount={{\n        height: withSpring(0, { damping: 22, stiffness: 280 }),\n        marginBottom: withSpring(0, { damping: 22, stiffness: 280 }),\n        opacity: withTiming(0, { duration: 160 }),\n        scale: withTiming(0.98, { duration: 160 }),\n      }}\n    >\n      <DeleteBg>\n        <FiTrash2 size={14} strokeWidth={2.25} />\n        Delete\n      </DeleteBg>\n      <Fore ref={ref} style={{ translateX: tx }}>\n        <Avatar $color={item.color}>{item.initials}</Avatar>\n        <Meta>\n          <Name>{item.name}</Name>\n          <Detail>{item.detail}</Detail>\n        </Meta>\n        <Time>{item.time}</Time>\n      </Fore>\n    </RowWrap>\n  );\n}\n\nexport function SwipeListDemo() {\n  const [items, setItems] = useState<ItemData[]>(() => createItems());\n  const shouldRestore = useRef(false);\n  const restoreTimer = useRef<ReturnType<typeof setTimeout> | null>(null);\n\n  const remove = useCallback((id: number) => {\n    setItems((prev) => {\n      const next = prev.filter((item) => item.id !== id);\n      shouldRestore.current = next.length === 0;\n      return next;\n    });\n  }, []);\n\n  const handleExitComplete = useCallback(() => {\n    if (!shouldRestore.current) return;\n    shouldRestore.current = false;\n\n    if (restoreTimer.current) clearTimeout(restoreTimer.current);\n    restoreTimer.current = setTimeout(() => {\n      setItems(createItems());\n    }, 420);\n  }, []);\n\n  useEffect(() => {\n    return () => {\n      if (restoreTimer.current) clearTimeout(restoreTimer.current);\n    };\n  }, []);\n\n  return (\n    <Stage>\n      <Hint>Swipe left on a row to delete</Hint>\n      <List>\n        <Unmount onExitComplete={handleExitComplete}>\n          {items.map((item) => (\n            <Row key={item.id} item={item} onDelete={remove} />\n          ))}\n        </Unmount>\n      </List>\n    </Stage>\n  );\n}\n"}];function P(){const[n,e]=i.useState(0),[a,l]=(0,i.useState)(!1),[h,m]=(0,i.useState)(!1),[u,g]=(0,i.useState)(!1),[x,y]=(0,i.useState)(0),w=E[n],v=(0,i.useMemo)((()=>w.code.replace(/\n{3,}/g,"\n\n").trim()),[w.code]),k=(0,i.useCallback)((()=>{navigator.clipboard.writeText(v).catch((()=>{})),g(!0),setTimeout((()=>g(!1)),1500)}),[v]),j=(0,i.useCallback)((()=>{y((n=>n+1))}),[]);return(0,f.jsx)("section",{className:(0,s.A)(b.section,b.sectionAlt),children:(0,f.jsxs)("div",{className:(0,s.A)("container",b.showcaseWrap),children:[(0,f.jsxs)(A,{className:b.sectionHeader,children:[(0,f.jsx)("span",{className:b.eyebrow,children:"Live demos"}),(0,f.jsx)("h2",{className:b.sectionTitle,children:"Examples"}),(0,f.jsx)("p",{className:b.sectionLede,children:"Interactive patterns built with React UI Animate. Real source, not a mockup."}),(0,f.jsxs)(o.A,{to:"/docs/getting-started",className:b.showcaseDocsLink,children:["Read the docs",(0,f.jsx)(d.a1M,{className:b.showcaseDocsIcon})]})]}),(0,f.jsxs)(A,{className:b.showcaseFrame,children:[(0,f.jsx)("nav",{className:b.showcaseNav,"aria-label":"Examples",children:E.map(((t,i)=>{const a=i===n;return(0,f.jsxs)("button",{type:"button",className:(0,s.A)(b.showcaseNavItem,a&&b.showcaseNavItemActive),onClick:()=>(n=>{e(n),l(!1)})(i),"aria-current":a?"true":void 0,children:[(0,f.jsx)("span",{className:b.showcaseNavIndex,children:String(i+1).padStart(2,"0")}),(0,f.jsxs)("span",{className:b.showcaseNavCopy,children:[(0,f.jsx)("span",{className:b.showcaseNavTitle,children:t.title}),(0,f.jsx)("span",{className:b.showcaseNavDesc,children:t.description})]})]},t.key)}))}),(0,f.jsxs)("div",{className:b.showcaseStage,children:[(0,f.jsxs)("div",{className:b.showcaseStageHead,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{className:b.showcaseStageTitle,children:w.title}),(0,f.jsx)("div",{className:b.showcaseStageDesc,children:w.description})]}),(0,f.jsxs)("div",{className:b.showcaseToolbar,children:[(0,f.jsx)("button",{type:"button",className:b.showcaseToolbarBtn,title:"Reset demo","aria-label":"Reset demo",onClick:j,disabled:a,children:(0,f.jsx)(p.cO3,{"aria-hidden":"true"})}),(0,f.jsxs)("button",{type:"button",className:b.showcaseToolbarBtn,title:a?"Show preview":"Show code","aria-label":a?"Show preview":"Show code","aria-pressed":a,onClick:()=>l((n=>!n)),children:[a?(0,f.jsx)(p.Vap,{"aria-hidden":"true"}):(0,f.jsx)(p.PjK,{"aria-hidden":"true"}),(0,f.jsx)("span",{children:a?"Preview":"Code"})]}),a&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("button",{type:"button",className:(0,s.A)(b.showcaseToolbarBtn,h&&b.showcaseToolbarBtnActive),title:"Toggle word wrap","aria-label":"Toggle word wrap","aria-pressed":h,onClick:()=>m((n=>!n)),children:(0,f.jsx)(p.qm6,{"aria-hidden":"true"})}),(0,f.jsx)("button",{type:"button",className:b.showcaseToolbarBtn,title:u?"Copied":"Copy code","aria-label":"Copy code",onClick:k,children:u?(0,f.jsx)(p.YrT,{"aria-hidden":"true"}):(0,f.jsx)(p.nxz,{"aria-hidden":"true"})})]})]})]}),a?(0,f.jsx)("div",{className:(0,s.A)(b.showcaseCode,h&&b.showcaseCodeWrap),children:(0,f.jsx)(r.A,{language:"tsx",children:v})}):(0,f.jsx)("div",{className:b.showcaseCanvas,children:(0,f.jsx)(c.A,{fallback:(0,f.jsx)("div",{className:b.showcaseFallback,"aria-hidden":"true"}),children:()=>{const n=t(9928)[w.key];return(0,f.jsx)(n,{})}})},`${w.key}-${x}`)]})]})]})})}function B(){return(0,f.jsx)("section",{className:b.section,children:(0,f.jsx)("div",{className:"container",children:(0,f.jsxs)(A,{className:b.cta,children:[(0,f.jsx)("h2",{className:b.ctaTitle,children:"Start animating in minutes"}),(0,f.jsx)("p",{className:b.ctaLede,children:"Install React UI Animate and ship your first animation today."}),(0,f.jsx)("div",{className:b.ctaActions,children:(0,f.jsxs)(D,{to:"/docs/getting-started",variant:"primary",children:["Read the Docs",(0,f.jsx)(d.a1M,{className:b.buttonIcon})]})}),(0,f.jsxs)("div",{className:b.ctaLinks,children:[(0,f.jsxs)("a",{className:b.ctaLink,href:w,target:"_blank",rel:"noopener noreferrer",children:[(0,f.jsx)(h.JyX,{className:b.ctaLinkIcon}),"npm"]}),(0,f.jsxs)("a",{className:b.ctaLink,href:y,target:"_blank",rel:"noopener noreferrer",children:[(0,f.jsx)(h.hL4,{className:b.ctaLinkIcon}),"GitHub"]}),(0,f.jsxs)("a",{className:b.ctaLink,href:v,target:"_blank",rel:"noopener noreferrer",children:[(0,f.jsx)(h.O4U,{className:b.ctaLinkIcon}),"Discord"]})]})]})})})}function M(){const{siteConfig:n}=(0,l.A)();return(0,i.useEffect)((()=>{const{body:n}=document;n.classList.add("nav-overlay");const e=()=>{n.classList.toggle("nav-scrolled",window.scrollY>16)};return e(),window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e),n.classList.remove("nav-overlay","nav-scrolled")}}),[]),(0,f.jsxs)(a.A,{title:`${n.title} \xb7 Fluid motion for React`,description:"A lightweight, declarative animation and gesture library for React. Build springs, sequences, drag interactions, and exit animations with a natural API.",children:[(0,f.jsx)(_,{}),(0,f.jsxs)("main",{children:[(0,f.jsx)(z,{}),(0,f.jsx)(P,{}),(0,f.jsx)(B,{})]})]})}},9928:(n,e,t)=>{t.r(e),t.d(e,{AccordionDemo:()=>Q,DragDemo:()=>Pn,LikeButtonDemo:()=>un,ModalDemo:()=>B,SwipeListDemo:()=>Ln,TabsDemo:()=>an,ToastDemo:()=>S});var i=t(6540),s=t(5965),a=t(3),o=t(54),r=t(4848);const l=[{title:"Changes saved",detail:"Your draft was synced"},{title:"Invite sent",detail:"Alex will get an email shortly"},{title:"Deploy complete",detail:"Production is live on v6.0.0-next.1"}],c=s.A.div`
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
`,h=(0,s.A)(o.i0.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`,m=s.A.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 14px 14px 16px;
`,u=s.A.div`
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
`,g=s.A.div`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.3;
  color: #e5e7eb;
`,x=s.A.div`
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
`,w=(0,s.A)(o.i0.div)`
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
  opacity: ${n=>n.$visible?1:0};
  transition: opacity 0.2s ease;
`;let k=0;function j({item:n,onEnd:e}){return(0,r.jsxs)(h,{style:{height:0,opacity:0,scale:.97,y:-6},animate:{height:(0,o.ek)(76,{damping:18,stiffness:220}),opacity:(0,o.ek)(1,{damping:18}),scale:(0,o.ek)(1,{damping:18}),y:(0,o.ek)(0,{damping:18})},unmount:{height:(0,o.ek)(0,{damping:18}),opacity:(0,o.fY)(0,{duration:160}),scale:(0,o.ek)(.97,{damping:18}),y:(0,o.fY)(-4,{duration:160})},children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(u,{"aria-hidden":"true",children:(0,r.jsx)(a.YrT,{size:14,strokeWidth:2.5})}),(0,r.jsxs)(f,{children:[(0,r.jsx)(g,{children:n.title}),(0,r.jsx)(x,{children:n.detail})]}),(0,r.jsx)(b,{type:"button","aria-label":"Dismiss",onClick:()=>e(n.id),children:(0,r.jsx)(a.yGN,{size:14,strokeWidth:2})})]}),(0,r.jsx)(y,{children:(0,r.jsx)(w,{style:{width:"0%"},animate:{width:(0,o.kB)([(0,o.fY)("0%",{duration:0}),(0,o.fY)("100%",{duration:3200,onComplete:()=>e(n.id)})])}})})]})}function S(){const[n,e]=(0,i.useState)([]),t=(0,i.useCallback)((n=>{e((e=>e.filter((e=>e.id!==n))))}),[]);return(0,r.jsxs)(c,{children:[(0,r.jsx)(d,{type:"button",onClick:()=>{const n=l[k%l.length];e((e=>[...e.slice(-2),{id:k++,title:n.title,detail:n.detail}]))},children:"Show notification"}),(0,r.jsxs)(p,{children:[(0,r.jsx)(v,{$visible:0===n.length,children:"Notifications appear here"}),(0,r.jsx)(o.zC,{children:n.map((n=>(0,r.jsx)(j,{item:n,onEnd:t},n.id)))})]})]})}var T=t(9879);const C=s.A.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
`,A=s.A.button`
  padding: 10px 16px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: #e5e7eb;
  cursor: pointer;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`,D=(0,s.A)(o.i0.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #08090d;
`,N=(0,s.A)(o.i0.div)`
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
`,_=s.A.h3`
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
`,R=s.A.div`
  display: flex;
  gap: 8px;
`,z=s.A.button`
  flex: 1;
  padding: 10px 0;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #e5e7eb;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`,E=s.A.button`
  flex: 1;
  padding: 10px 0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #eff6ff;
  background: #1e3a5f;
  border: 1px solid #3b5a80;
`;function P({onClose:n}){const e=(0,i.useRef)(null);return(0,o.jz)(e,n),(0,r.jsx)(D,{style:{opacity:0},animate:{opacity:(0,o.fY)(1,{duration:200})},unmount:{opacity:(0,o.fY)(0,{duration:180})},children:(0,r.jsxs)(N,{ref:e,style:{opacity:0,scale:.86,translateY:16},animate:{opacity:(0,o.fY)(1,{duration:180}),scale:(0,o.ek)(1,{damping:18,stiffness:240}),translateY:(0,o.ek)(0,{damping:18,stiffness:240})},unmount:{opacity:(0,o.fY)(0,{duration:160}),scale:(0,o.ek)(.86,{damping:18,stiffness:240}),translateY:(0,o.ek)(16,{damping:18,stiffness:240})},children:[(0,r.jsx)(I,{onClick:n,"aria-label":"Close",children:(0,r.jsx)(T.m6K,{})}),(0,r.jsx)(_,{children:"Delete project?"}),(0,r.jsx)(L,{children:"This will permanently remove the project and all of its files. This action can't be undone."}),(0,r.jsxs)(R,{children:[(0,r.jsx)(z,{onClick:n,children:"Cancel"}),(0,r.jsx)(E,{onClick:n,children:"Confirm"})]})]})})}function B(){const[n,e]=(0,i.useState)(!1);return(0,r.jsxs)(C,{children:[(0,r.jsx)(A,{onClick:()=>e(!0),children:"Open dialog"}),(0,r.jsx)(o.zC,{children:n&&(0,r.jsx)(P,{onClose:()=>e(!1)},"dialog")})]})}const M=s.A.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$=s.A.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #6b7280;
  text-align: center;
`,Y=s.A.div`
  overflow: hidden;
  border-radius: 12px;
  background: #1a1d24;
  border: 1px solid #2a2e38;
`,H=s.A.div`
  border-bottom: ${n=>n.$last?"none":"1px solid #2a2e38"};
  background: ${n=>n.$open?"#15171e":"transparent"};
`,F=s.A.button`
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
  color: ${n=>n.$open?"#60a5fa":"#6b7280"};
  transition: color 0.15s ease;
`,O=s.A.span`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.35;
  color: ${n=>n.$open?"#e5e7eb":"#d1d5db"};
  transition: color 0.15s ease;
`,q=(0,s.A)(o.i0.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.15s ease;
`,W=(0,s.A)(o.i0.div)`
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
`,V=[{q:"Is it production ready?",a:"Yes. It ships with TypeScript types, works in React 18+, and is tree-shakeable."},{q:"Does it support gestures?",a:"Drag, move, scroll, and wheel are built in as hooks you can drop onto any element."},{q:"How big is the bundle?",a:"Small by default. You only pay for the modifiers and gestures you import."}];function X({index:n,q:e,a:t,open:s,last:l,onToggle:c}){const d=(0,i.useRef)(null),[p,h]=(0,o.h)(0),[m,u]=(0,o.h)(0),f=(0,i.useRef)(0);return(0,i.useLayoutEffect)((()=>{const n=d.current;if(!n)return;const e=()=>{f.current=n.scrollHeight};e();const t=new ResizeObserver(e);return t.observe(n),()=>t.disconnect()}),[t]),(0,i.useEffect)((()=>{h((0,o.ek)(s?1:0,{damping:22,stiffness:260})),u((0,o.ek)(s?f.current:0,{damping:22,stiffness:260}))}),[s,h,u]),(0,r.jsxs)(H,{$last:l,$open:s,children:[(0,r.jsxs)(F,{type:"button",onClick:c,"aria-expanded":s,children:[(0,r.jsx)(G,{$open:s,children:String(n+1).padStart(2,"0")}),(0,r.jsx)(O,{$open:s,children:e}),(0,r.jsx)(q,{style:{rotateZ:p.to([0,1],[0,180]),color:s?"#60a5fa":"#6b7280"},children:(0,r.jsx)(a.fK4,{size:16,strokeWidth:2.25})})]}),(0,r.jsx)(W,{style:{height:m,opacity:p},children:(0,r.jsx)(U,{ref:d,children:(0,r.jsx)("span",{children:t})})})]})}function Q(){const[n,e]=(0,i.useState)(0);return(0,r.jsxs)(M,{children:[(0,r.jsx)($,{children:"Frequently asked"}),(0,r.jsx)(Y,{children:V.map(((t,i)=>(0,r.jsx)(X,{index:i,q:t.q,a:t.a,open:n===i,last:i===V.length-1,onToggle:()=>e((n=>n===i?-1:i))},t.q)))})]})}const Z=s.A.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,K=s.A.div`
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
  color: ${n=>n.active?"#ffffff":"#9ca3af"};
  transition: color 0.2s ease;
`,nn=(0,s.A)(o.i0.div)`
  min-height: 108px;
  padding: 16px 18px;
  border-radius: 12px;
  background: #15171e;
  border: 1px solid #2a2e38;
`,en=s.A.div`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: #e5e7eb;
  margin-bottom: 6px;
`,tn=s.A.div`
  font-size: 14px;
  line-height: 1.55;
  color: #9ca3af;
`,sn=[{label:"Overview",title:"Declarative motion",text:"Animate with simple props instead of hand-writing timelines."},{label:"Gestures",title:"Built-in gestures",text:"Drag, move, scroll, and wheel hooks for tactile interactions."},{label:"Unmount",title:"Exit animations",text:"Animate elements out as they leave the DOM, e.g. modals and toasts."}];function an(){const[n,e]=(0,i.useState)(0),[t,s]=(0,o.h)(1),a=sn[n];return(0,r.jsxs)(Z,{children:[(0,r.jsx)(o.$b,{children:(0,r.jsx)(K,{children:sn.map(((t,i)=>(0,r.jsxs)(J,{type:"button",active:n===i,onClick:()=>{var t;(t=i)!==n&&(e(t),s((0,o.kB)([(0,o.fY)(0,{duration:0}),(0,o.ek)(1,{damping:22,stiffness:280})])))},children:[n===i&&(0,r.jsx)(o.i0.div,{flipId:"home-tabs-indicator",flipOptions:(0,o.ek)({stiffness:420,damping:34}),style:{position:"absolute",inset:0,borderRadius:7,backgroundColor:"#1f222b",zIndex:-1}}),t.label]},t.label)))})}),(0,r.jsxs)(nn,{style:{opacity:t,translateY:t.to([0,1],[6,0])},children:[(0,r.jsx)(en,{children:a.title}),(0,r.jsx)(tn,{children:a.text})]})]})}const on=s.A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-family: inherit;
`,rn=s.A.button`
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
`,ln=(0,s.A)(o.i0.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
`,cn=(0,s.A)(o.i0.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 7px;
  height: 7px;
  margin: -3.5px 0 0 -3.5px;
  border-radius: 50%;
  background: #f43f5e;
  pointer-events: none;
`,dn=s.A.div`
  font-size: 15px;
  font-weight: 600;
  color: #9ca3af;
`,pn=Array.from({length:6},((n,e)=>{const t=e/6*Math.PI*2;return{angle:t,dx:42*Math.cos(t),dy:42*Math.sin(t)}}));function hn(){return(0,r.jsx)(r.Fragment,{children:pn.map((n=>(0,r.jsx)(mn,{dx:n.dx,dy:n.dy},n.angle)))})}function mn({dx:n,dy:e}){const[t,s]=(0,o.h)(0),[a,l]=(0,o.h)(0),[c,d]=(0,o.h)(1),[p,h]=(0,o.h)(1);return(0,i.useEffect)((()=>{s((0,o.ek)(n,{damping:14,stiffness:200})),l((0,o.ek)(e,{damping:14,stiffness:200})),d((0,o.fY)(0,{duration:600})),h((0,o.fY)(0,{duration:600}))}),[n,e,d,h,s,l]),(0,r.jsx)(cn,{style:{translateX:t,translateY:a,opacity:c,scale:p}})}function un(){const[n,e]=(0,i.useState)(!1),[t,s]=(0,i.useState)(128),[a,l]=(0,i.useState)([]),[c,d]=(0,o.h)(1),[p,h]=(0,o.h)(0);return(0,r.jsxs)(on,{children:[(0,r.jsxs)(rn,{onClick:()=>{const t=!n;if(e(t),s((n=>n+(t?1:-1))),h((0,o.fY)(t?1:0,{duration:220})),t){d((0,o.kB)([(0,o.ek)(1.35,{damping:6,stiffness:320}),(0,o.ek)(1,{damping:14})]));const n=Date.now();l((e=>[...e,n])),setTimeout((()=>l((e=>e.filter((e=>e!==n))))),700)}else d((0,o.ek)(1,{damping:14}))},"aria-pressed":n,children:[a.map((n=>(0,r.jsx)(hn,{},n))),(0,r.jsx)(ln,{style:{scale:c,color:p.to([0,1],["#6b7280","#f43f5e"])},children:(0,r.jsx)(T.OGi,{})})]}),(0,r.jsxs)(dn,{children:[t.toLocaleString()," ",1===t?"like":"likes"]})]})}const fn=s.A.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,gn=s.A.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #6b7280;
  text-align: center;
`,xn=s.A.div`
  display: flex;
  flex-direction: column;
  min-height: 220px;
`,bn=(0,s.A)(o.i0.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
`,yn=s.A.div`
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
`,wn=(0,s.A)(o.i0.div)`
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
`,vn=s.A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 9px;
  background: ${n=>n.$color};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ffffff;
`,kn=s.A.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,jn=s.A.div`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.3;
  color: #e5e7eb;
`,Sn=s.A.div`
  font-size: 14px;
  line-height: 1.35;
  color: #9ca3af;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Tn=s.A.div`
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 500;
  color: #6b7280;
`,Cn=64,An=88,Dn=[{name:"Olivia Hart",detail:"Sent you design.fig",time:"2m",color:"#3b82f6",initials:"OH"},{name:"Liam Chen",detail:"Liked your update",time:"1h",color:"#10b981",initials:"LC"},{name:"Ava Patel",detail:"Commented on Draft",time:"3h",color:"#f59e0b",initials:"AP"}];let Nn=1;function In(){return Dn.map(((n,e)=>({...n,id:Nn++,order:e})))}function _n({item:n,onDelete:e}){const t=(0,i.useRef)(null),[s,l]=(0,o.h)(0),c=(0,i.useRef)(!1);return(0,o.NH)(t,o.q6.Pan().onChange((({movement:n})=>{c.current||l(Math.min(0,n.x))})).onEnd((({movement:t})=>{if(c.current)return;Math.min(0,t.x)<-An?(c.current=!0,l((0,o.fY)(-320,{duration:180,onComplete:()=>e(n.id)}))):l((0,o.ek)(0,{damping:20,stiffness:280}))}))),(0,r.jsxs)(bn,{style:{height:0,opacity:0,scale:.98,marginBottom:0},animate:{height:(0,o.CI)(n.order,(0,o.ek)(Cn,{damping:22,stiffness:260}),{each:55}),marginBottom:(0,o.CI)(n.order,(0,o.ek)(8,{damping:22,stiffness:260}),{each:55}),opacity:(0,o.CI)(n.order,(0,o.fY)(1,{duration:200}),{each:55}),scale:(0,o.CI)(n.order,(0,o.ek)(1,{damping:22,stiffness:260}),{each:55})},unmount:{height:(0,o.ek)(0,{damping:22,stiffness:280}),marginBottom:(0,o.ek)(0,{damping:22,stiffness:280}),opacity:(0,o.fY)(0,{duration:160}),scale:(0,o.fY)(.98,{duration:160})},children:[(0,r.jsxs)(yn,{children:[(0,r.jsx)(a.IXo,{size:14,strokeWidth:2.25}),"Delete"]}),(0,r.jsxs)(wn,{ref:t,style:{translateX:s},children:[(0,r.jsx)(vn,{$color:n.color,children:n.initials}),(0,r.jsxs)(kn,{children:[(0,r.jsx)(jn,{children:n.name}),(0,r.jsx)(Sn,{children:n.detail})]}),(0,r.jsx)(Tn,{children:n.time})]})]})}function Ln(){const[n,e]=(0,i.useState)((()=>In())),t=(0,i.useRef)(!1),s=(0,i.useRef)(null),a=(0,i.useCallback)((n=>{e((e=>{const i=e.filter((e=>e.id!==n));return t.current=0===i.length,i}))}),[]),l=(0,i.useCallback)((()=>{t.current&&(t.current=!1,s.current&&clearTimeout(s.current),s.current=setTimeout((()=>{e(In())}),420))}),[]);return(0,i.useEffect)((()=>()=>{s.current&&clearTimeout(s.current)}),[]),(0,r.jsxs)(fn,{children:[(0,r.jsx)(gn,{children:"Swipe left on a row to delete"}),(0,r.jsx)(xn,{children:(0,r.jsx)(o.zC,{onExitComplete:l,children:n.map((n=>(0,r.jsx)(_n,{item:n,onDelete:a},n.id)))})})]})}const Rn=s.A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,zn=(0,s.A)(o.i0.div)`
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
`,En=s.A.div`
  font-family: var(--site-mono);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #6b7280;
`;function Pn(){const n=(0,i.useRef)(null),[e,t]=(0,o.h)(1),[s,a]=(0,i.useState)(!1),{x:l,y:c}=(0,o.i3)(n,{bounds:{left:0,right:0,top:0,bottom:0},onStart:()=>{a(!0),t((0,o.ek)(1.1))},onEnd:()=>{a(!1),t((0,o.ek)(1))}});return(0,r.jsxs)(Rn,{children:[(0,r.jsxs)(zn,{ref:n,style:{translateX:l,translateY:c,scale:e},children:[(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:(0,r.jsx)("path",{d:"M12 3v18M3 12h18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),(0,r.jsx)("span",{children:s?"spring physics":"drag me"})]}),(0,r.jsx)(En,{children:"Drag the card. It springs right back."})]})}}}]);