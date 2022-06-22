"use strict";(self.webpackChunkreact_ui_animate_docs=self.webpackChunkreact_ui_animate_docs||[]).push([[2111],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1630:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:5,id:"use-measure",title:"useMeasure"},s=void 0,u={unversionedId:"api-references/hooks/use-measure",id:"version-1.4.6/api-references/hooks/use-measure",title:"useMeasure",description:"Due to time constraint, we couldn't complete this page. We will complete as soon as possible.",source:"@site/versioned_docs/version-1.4.6/api-references/hooks/use-measure.md",sourceDirName:"api-references/hooks",slug:"/api-references/hooks/use-measure",permalink:"/docs/1.4.6/api-references/hooks/use-measure",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.4.6/api-references/hooks/use-measure.md",tags:[],version:"1.4.6",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"use-measure",title:"useMeasure"},sidebar:"tutorialSidebar",previous:{title:"useWindowDimension",permalink:"/docs/1.4.6/api-references/hooks/use-window-dimension"},next:{title:"useScroll",permalink:"/docs/1.4.6/api-references/hooks/use-scroll"}},p={},c=[{value:"Arguments",id:"arguments",level:2},{value:"<code>callback</code>  function ",id:"callback--function-",level:4},{value:"<code>deps</code>  array ",id:"deps--array-",level:4},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Due to time constraint, we couldn't complete this page. We will complete as soon as possible."))),(0,i.kt)("p",null,"This hook provides a way to measure any ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElement"),". It handles the resize of the window."),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"callback--function-"},(0,i.kt)("inlineCode",{parentName:"h4"},"callback")," ","[ function ]"),(0,i.kt)("p",null,"First argument is a callback function with ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," object with measurements as its first argument which is called initially and is called on every resize of a window."),(0,i.kt)("p",null,"Here are the properties of an ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," object argument of a callback function:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"left"),(0,i.kt)("td",{parentName:"tr",align:null},"Left position of a ",(0,i.kt)("inlineCode",{parentName:"td"},"HTMLELement"),". It accounts the horizontal page offset value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"top"),(0,i.kt)("td",{parentName:"tr",align:null},"Top position of a ",(0,i.kt)("inlineCode",{parentName:"td"},"HTMLELement"),". It accounts the vertical page offset value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"vLeft"),(0,i.kt)("td",{parentName:"tr",align:null},"Left position of a ",(0,i.kt)("inlineCode",{parentName:"td"},"HTMLELement")," relative to viewport. It doesn't account horizontal page offset value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"vTop"),(0,i.kt)("td",{parentName:"tr",align:null},"Top position of a ",(0,i.kt)("inlineCode",{parentName:"td"},"HTMLELement")," relative to viewport. It doesn't account vertical page offset value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"width"),(0,i.kt)("td",{parentName:"tr",align:null},"Width of a ",(0,i.kt)("inlineCode",{parentName:"td"},"HTMLELement"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"height"),(0,i.kt)("td",{parentName:"tr",align:null},"Height of a ",(0,i.kt)("inlineCode",{parentName:"td"},"HTMLElement"))))),(0,i.kt)("h4",{id:"deps--array-"},(0,i.kt)("inlineCode",{parentName:"h4"},"deps")," ","[ array ]"),(0,i.kt)("p",null,"Optional array of values which re-initiates the callback function when changed."),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("p",null,"It returns a function which is spread on any ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLELement"),"."),(0,i.kt)("p",null,"Define a bind function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const bind = useMeasure(event => doSomething(event));}\n")),(0,i.kt)("p",null,"Apply it on a HTMLELement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<div {...bind()} style={{ width: 100, height: 100, backgroundColor: 'red' }} />\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In the below example, ",(0,i.kt)("inlineCode",{parentName:"p"},"useMeasure")," hook is used to measure the widths of a multiple mapped elements."),(0,i.kt)("p",null,"Multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElements")," can be measured by passing an argument in the returned function while spreading. All the measurements are in array with same index as mapped elements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useMeasure } from 'react-ui-animate';\n\nexport default function () {\n  const bind = useMeasure(function ({ width }) {\n    console.log('width', width); // Array of widths\n  });\n\n  return (\n    <>\n      {Array(5)\n        .fill(null)\n        .map((_, i) => (\n          <div\n            key={i}\n            {...bind(i)} // passed with index\n            style={{\n              width: 100,\n              height: 100,\n              backgroundColor: '#3399ff',\n            }}\n          />\n        ))}\n    </>\n  );\n}\n")))}m.isMDXComponent=!0}}]);