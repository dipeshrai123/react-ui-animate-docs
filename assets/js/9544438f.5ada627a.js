"use strict";(self.webpackChunkreact_ui_animate_docs=self.webpackChunkreact_ui_animate_docs||[]).push([[6356],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:9,id:"use-wheel",title:"useWheel"},s=void 0,u={unversionedId:"api-references/hooks/use-wheel",id:"api-references/hooks/use-wheel",title:"useWheel",description:"Due to time constraint, we couldn't complete this page. We will complete as soon as possible.",source:"@site/docs/api-references/hooks/use-wheel.md",sourceDirName:"api-references/hooks",slug:"/api-references/hooks/use-wheel",permalink:"/docs/next/api-references/hooks/use-wheel",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-references/hooks/use-wheel.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,id:"use-wheel",title:"useWheel"},sidebar:"tutorialSidebar",previous:{title:"useDrag",permalink:"/docs/next/api-references/hooks/use-drag"},next:{title:"useGesture",permalink:"/docs/next/api-references/hooks/use-gesture"}},p={},c=[{value:"Arguments",id:"arguments",level:2},{value:"<code>callback</code>  function ",id:"callback--function-",level:4},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Due to time constraint, we couldn't complete this page. We will complete as soon as possible."))),(0,o.kt)("p",null,"This hook provides a way to implement wheel event in any ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement"),"."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"callback--function-"},(0,o.kt)("inlineCode",{parentName:"h4"},"callback")," ","[ function ]"),(0,o.kt)("p",null,"First argument is a callback function with wheel ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object as its first argument which is called on every wheel event."),(0,o.kt)("p",null,"Here are the properties of an ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object argument of a callback function:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"target"),(0,o.kt)("td",{parentName:"tr",align:null},"Current target element to which the wheel event bound to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"deltaX"),(0,o.kt)("td",{parentName:"tr",align:null},"Wheel delta amount along horizontal axis.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"deltaY"),(0,o.kt)("td",{parentName:"tr",align:null},"Wheel delta amount along vertical axis.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"movementX"),(0,o.kt)("td",{parentName:"tr",align:null},"Amount of movement in x-axis. Always starts from 0 while wheeling.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"movementY"),(0,o.kt)("td",{parentName:"tr",align:null},"Amount of movement in y-axis. Always starts from 0 while wheeling.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"offsetX"),(0,o.kt)("td",{parentName:"tr",align:null},"Amount of movement with offset in x-axis. It saves the previous movement and wheel starts from previous position.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"offsetY"),(0,o.kt)("td",{parentName:"tr",align:null},"Amount of movement with offset in y-axis. It saves the previous movement and wheel starts from previous position.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"velocityX"),(0,o.kt)("td",{parentName:"tr",align:null},"Velocity along horizontal wheel direction.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"velocityY"),(0,o.kt)("td",{parentName:"tr",align:null},"Velocity along vertical wheel direction.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"directionX"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the current horizontal wheel direction. For positive +1, for negative -1 and for not wheeling 0.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"directionY"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the current vertical wheel direction. For positive +1, for negative -1 and for not wheeling 0.")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,"It returns a function which is spread on any ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLELement"),"."),(0,o.kt)("p",null,"Define a bind function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const bind = useWheel((event) => doSomething(event));\n")),(0,o.kt)("p",null,"Apply it on a ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLELement"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<div {...bind()} style={{ width: 100, height: 100, backgroundColor: 'red' }} />\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In the below example, ",(0,o.kt)("inlineCode",{parentName:"p"},"useWheel")," hook is used to capture wheel event on ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useAnimatedValue, useWheel, AnimatedBlock } from 'react-ui-animate';\n\nexport default function () {\n  const left = useAnimatedValue(0);\n\n  const bind = useWheel(function ({ movementX, isWheeling }) {\n    left.value = isWheeling ? movementX : 0;\n  });\n\n  return (\n    <AnimatedBlock\n      {...bind()} // bind here\n      style={{\n        width: 100,\n        height: 100,\n        backgroundColor: '#3399ff',\n        position: 'absolute',\n        left: left.value,\n        top: 0,\n      }}\n    />\n  );\n}\n")))}d.isMDXComponent=!0}}]);