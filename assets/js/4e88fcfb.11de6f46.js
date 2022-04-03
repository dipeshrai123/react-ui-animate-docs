"use strict";(self.webpackChunkreact_ui_animate_docs=self.webpackChunkreact_ui_animate_docs||[]).push([[1202],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4963:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:3,id:"use-outside-value",title:"useOutsideClick"},s=void 0,c={unversionedId:"api-references/hooks/use-outside-value",id:"api-references/hooks/use-outside-value",title:"useOutsideClick",description:"Due to time constraint, we couldn't complete this page. We will complete as soon as possible.",source:"@site/docs/api-references/hooks/use-outside-click.md",sourceDirName:"api-references/hooks",slug:"/api-references/hooks/use-outside-value",permalink:"/docs/next/api-references/hooks/use-outside-value",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-references/hooks/use-outside-click.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"use-outside-value",title:"useOutsideClick"},sidebar:"tutorialSidebar",previous:{title:"useMountedValue",permalink:"/docs/next/api-references/hooks/use-mounted-value"},next:{title:"useWindowDimension",permalink:"/docs/next/api-references/hooks/use-window-dimension"}},u={},d=[{value:"Arguments",id:"arguments",level:2},{value:"<code>elementRef</code>  HTMLElement ",id:"elementref--htmlelement-",level:4},{value:"<code>callback</code>  function ",id:"callback--function-",level:4},{value:"<code>deps</code>  array ",id:"deps--array-",level:4},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Due to time constraint, we couldn't complete this page. We will complete as soon as possible."))),(0,i.kt)("p",null,"This hook provides a way to handle clicks outside of any element."),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"elementref--htmlelement-"},(0,i.kt)("inlineCode",{parentName:"h4"},"elementRef")," ","[ HTMLElement ]"),(0,i.kt)("p",null,"First argument is an elementRef created using ",(0,i.kt)("inlineCode",{parentName:"p"},"useRef")," hook."),(0,i.kt)("h4",{id:"callback--function-"},(0,i.kt)("inlineCode",{parentName:"h4"},"callback")," ","[ function ]"),(0,i.kt)("p",null,"Second argument is a callback function with Mouse Event as its first argument and it is called whenever we click outside of the referenced element."),(0,i.kt)("h4",{id:"deps--array-"},(0,i.kt)("inlineCode",{parentName:"h4"},"deps")," ","[ array ]"),(0,i.kt)("p",null,"Optional array of values which re-initiates the callback function when changed."),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("p",null,"Void"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In the below example, we create a ",(0,i.kt)("inlineCode",{parentName:"p"},"<div />")," element, create a reference to that element and used ",(0,i.kt)("inlineCode",{parentName:"p"},"useOutsideClick")," hook to determine whether we clicked outside the referenced element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useOutsideClick } from 'react-ui-animate';\n\nexport default function () {\n  const elemRef = React.useRef(null);\n\n  useOutsideClick(elemRef, function () {\n    console.log('Clicked outside the box');\n  });\n\n  return (\n    <div\n      ref={elemRef}\n      style={{\n        width: 100,\n        height: 100,\n        backgroundColor: '#ff0000',\n      }}\n    />\n  );\n}\n")))}m.isMDXComponent=!0}}]);