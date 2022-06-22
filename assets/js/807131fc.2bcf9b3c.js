"use strict";(self.webpackChunkreact_ui_animate_docs=self.webpackChunkreact_ui_animate_docs||[]).push([[9517],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3210:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:6,id:"use-scroll",title:"useScroll"},c=void 0,s={unversionedId:"api-references/hooks/use-scroll",id:"version-1.4.6/api-references/hooks/use-scroll",title:"useScroll",description:"Due to time constraint, we couldn't complete this page. We will complete as soon as possible.",source:"@site/versioned_docs/version-1.4.6/api-references/hooks/use-scroll.md",sourceDirName:"api-references/hooks",slug:"/api-references/hooks/use-scroll",permalink:"/docs/1.4.6/api-references/hooks/use-scroll",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.4.6/api-references/hooks/use-scroll.md",tags:[],version:"1.4.6",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"use-scroll",title:"useScroll"},sidebar:"tutorialSidebar",previous:{title:"useMeasure",permalink:"/docs/1.4.6/api-references/hooks/use-measure"},next:{title:"useMouseMove",permalink:"/docs/1.4.6/api-references/hooks/use-mouse-move"}},u={},p=[{value:"Arguments",id:"arguments",level:2},{value:"<code>callback</code>  function ",id:"callback--function-",level:4},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Due to time constraint, we couldn't complete this page. We will complete as soon as possible."))),(0,o.kt)("p",null,"This hook provides a way to handle scroll event in any ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),"."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"callback--function-"},(0,o.kt)("inlineCode",{parentName:"h4"},"callback")," ","[ function ]"),(0,o.kt)("p",null,"First argument is a callback function with ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object as its first argument which is called initially and is called on every scroll."),(0,o.kt)("p",null,"Here are the properties of an ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object argument of a callback function:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"isScrolling"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Boolean")," indicating the current status of scrolling.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"scrollX"),(0,o.kt)("td",{parentName:"tr",align:null},"Horizontal scroll amount.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"scrollY"),(0,o.kt)("td",{parentName:"tr",align:null},"Vertical scroll amount.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"velocityX"),(0,o.kt)("td",{parentName:"tr",align:null},"Velocity along horizontal scrolling direction.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"velocityY"),(0,o.kt)("td",{parentName:"tr",align:null},"Velocity along vertical scrolling direction.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"directionX"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the current horizontal scrolling direction. For positive +1, for negative -1 and for not scrolling 0.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"directionY"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the current vertical scrolling direction. For positive +1, for negative -1 and for not scrolling 0.")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,"It returns a function which can be spread on any ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLELement"),". If not bound to any ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement"),", event is attached to ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),"."),(0,o.kt)("p",null,"Define a hook for window:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"useScroll((event) => doSomething(event));\n")),(0,o.kt)("p",null,"Or you could bind it in any ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const bind = useScroll((event) => doSomething(event));\n")),(0,o.kt)("p",null,"Apply it on a ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLELement"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<div {...bind()}>...</div>\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In the below example, ",(0,o.kt)("inlineCode",{parentName:"p"},"useScroll")," hook is used to get ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollY"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useScroll } from "react-ui-animate";\n\nexport default function() {\n\n  const bind = useScroll(\n    function ({ scrollY }) {\n        console.log("Vertical scrolling amount", scrollY);\n    },\n  );\n\n  return (...);\n}\n')))}m.isMDXComponent=!0}}]);