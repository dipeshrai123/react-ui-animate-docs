"use strict";(self.webpackChunkreact_ui_animate_docs=self.webpackChunkreact_ui_animate_docs||[]).push([[8069],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),c=i,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return t?a.createElement(f,r(r({ref:n},u),{},{components:t})):a.createElement(f,r({ref:n},u))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7547:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],l={sidebar_position:4,id:"animations",title:"Animations"},s=void 0,p={unversionedId:"animations",id:"version-1.4.6/animations",title:"Animations",description:"Due to time constraint, we couldn't complete this page. We will complete as soon as possible.",source:"@site/versioned_docs/version-1.4.6/animations.md",sourceDirName:".",slug:"/animations",permalink:"/docs/animations",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.4.6/animations.md",tags:[],version:"1.4.6",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"animations",title:"Animations"},sidebar:"tutorialSidebar",previous:{title:"Animated Values",permalink:"/docs/animated-values"},next:{title:"Gestures",permalink:"/docs/gestures"}},u={},m=[{value:"Animated Value Animated Transition",id:"animated-value-animated-transition",level:2},{value:"Configuring Animations",id:"configuring-animations",level:2},{value:"Interpolations",id:"interpolations",level:2}],d={toc:m};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Due to time constraint, we couldn't complete this page. We will complete as soon as possible."))),(0,o.kt)("p",null,"Animations are very important to create a great user experience. Objects in motion have momentum and rarely come to stop immediately. To convey physically believable motion, we need physics based animations. The library provides a way to implement any physically behaving animations."),(0,o.kt)("p",null,"In the previous article about ",(0,o.kt)("inlineCode",{parentName:"p"},"Animated Values"),", we learned about ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedValue")," hook. We also learned how to perform animated transitions by assigning values to a Animated Values. This, however, is not the only way how animations can be implemented. React UI Animate provides a number of ways how animations can be customized and implemented. In this article, we explore different ways to implement animated transitions and how customizations can be done in an animation."),(0,o.kt)("h2",{id:"animated-value-animated-transition"},"Animated Value Animated Transition"),(0,o.kt)("p",null,"React UI Animate provides one of the easiest way to implement animated transitions with ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedValue")," hook. We implemented a simple opacity toggle animation by simply assigning and reading opacity node. Let us recall the example from previous article, where we'd update an Animated Value when we cliked a button."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AnimatedBlock, useAnimatedValue } from 'react-ui-animate';\n\nexport default function () {\n  const opacity = useAnimatedValue(0); // It initializes opacity object with value 0.\n\n  return (\n    <div>\n      {/* AnimatedBlock component can read useAnimatedValue() */}\n      <AnimatedBlock\n        style={{\n          opacity: opacity.value, // using opacity with value property\n          width: 100,\n          padding: 20,\n          background: '#39F',\n        }}\n      >\n        ANIMATED\n      </AnimatedBlock>\n\n      {/* Assigning value to 1 auto animates from initialized value 0 to 1 smoothly */}\n      <button onClick={() => (opacity.value = 1)}>Animate Me</button>\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"In the above example when we click button, opacity is animated from 0 to 1 smoothly. As you can notice ",(0,o.kt)("inlineCode",{parentName:"p"},"AnimatedBlock")," is used instead of any other HTML Element because the Animated Values cannot be read by HTML Elements, we need special type of Component that can read it. Here, we have ",(0,o.kt)("inlineCode",{parentName:"p"},"AnimatedBlock")," HOC which is a div element and also can read Animated Values."),(0,o.kt)("p",null,"In React UI Animate, such Animated Value can accept primitives like number, boolean, string or Animated Value itself. When we initialize a ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedValue"),", with any primitives, it must be updated / assigned with same primitive type. You also can initiate the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedValue")," with conditional operation. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState } from "react";\nimport { useAnimatedValue } from "react-ui-animate";\n\nexport default function () {\n  const [open, setOpen] = useState(false);\n  const opacity = useAnimatedValue(open ? 1 : 0); // You can also initialize with a conditional operator\n\n  return (\n    ...\n  );\n}\n')),(0,o.kt)("p",null,"In above example, you could initialize a value with a conditional operator. You dont even need to assign value for update. Changing state ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"setOpen")," can conditionally update the Animated Value with animated transitions."),(0,o.kt)("p",null,"Strings in Animated Value are also allowed which is benificial for string valued style properties and svg paths. When strings are updated with new string, the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedValue")," determines whether it can be interpolated or not. If it can be interpolated, it assigns the animated transitions and if not, it instantly updates to new one. Let us take an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useAnimatedValue } from "react-ui-animate";\n\nexport default function () {\n  const position = useAnimatedValue("relative"); // assigning strings\n\n  return (\n    ...\n    <button onClick={() => (position.value = "fixed")}>Toggle</button>\n  );\n}\n')),(0,o.kt)("h2",{id:"configuring-animations"},"Configuring Animations"),(0,o.kt)("p",null,"Basically, React UI Animate provides two types of animation configurations: ",(0,o.kt)("inlineCode",{parentName:"p"},"Timing")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring")," based animations. ",(0,o.kt)("inlineCode",{parentName:"p"},"Timing")," based animations depends upon duration while Spring based animations are naturally balanced and depends upon properties of an object. By default, Animated Values in React UI Animate implements ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring")," based animation. ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedValue")," hook accepts a second optional argument which is an object different animation configurations. To simply modify the nature of spring animation we can define ",(0,o.kt)("inlineCode",{parentName:"p"},"animationType")," property."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"animationType")," property accepts a string of values like ease, elastic, wooble, etc. Default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"ease"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const opacity = useAnimatedValue(0, { animationType: 'elastic' });\n")),(0,o.kt)("p",null,"Aditionally, You can also define custom spring configurations by modifying properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"mass"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"friction")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tension")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const opacity = useAnimatedValue(0, { mass: 1, friction: 10, tension: 200 });\n")),(0,o.kt)("p",null,"In the above example, we defined ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring")," based animations which is naturally balanced. But, In some cases, ",(0,o.kt)("inlineCode",{parentName:"p"},"Timing")," based animation is needed. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Timing")," based animations are fully dependent upon durations. We have to define the amount of duration when the animation is finished. The configuration object accepts a ",(0,o.kt)("inlineCode",{parentName:"p"},"duration")," property where the value is the number of milliseconds the animation should be completed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const opacity = useAnimatedValue(0, { duration: 1000 });\n")),(0,o.kt)("p",null,"In the above example, ",(0,o.kt)("inlineCode",{parentName:"p"},"duration")," is set to 1000 milliseconds i.e. 1 second. When animation value is updated it will complete the animation to in exactly 1 second. These animations are not naturally balanced like Spring based animations because it is linearly interpolated. Linear animations are boring and is not possible in real life. We can define some easing functions to modify the nature of Time based animations. To do so, we should define ",(0,o.kt)("inlineCode",{parentName:"p"},"easing")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const opacity = useAnimatedValue(0, {\n  duration: 1000,\n  easing: Easing.inOut(Easing.ease),\n});\n")),(0,o.kt)("p",null,"In the above example, ",(0,o.kt)("inlineCode",{parentName:"p"},"duration")," is set to 1000 milliseconds and ",(0,o.kt)("inlineCode",{parentName:"p"},"easing")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Easing.inOut(Easing.ease)")," which defines an object moves slowly accelerating to speed and slowly coming to rest. You can find a visualization of some common easing functions at ",(0,o.kt)("a",{parentName:"p",href:"http://easings.net/"},"http://easings.net/"),". Bezier curves also can be implemented."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const opacity = useAnimatedValue(0, {\n  duration: 1000,\n  easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),\n});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Easing")," module also has a ",(0,o.kt)("inlineCode",{parentName:"p"},"bezier")," function which provides a cubic bezier curve, equivalent to CSS Transitions' ",(0,o.kt)("inlineCode",{parentName:"p"},"transition-timing-function"),". A useful tool to visualize cubic bezier curves can be found at ",(0,o.kt)("a",{parentName:"p",href:"http://cubic-bezier.com/"},"http://cubic-bezier.com/"),"."),(0,o.kt)("h2",{id:"interpolations"},"Interpolations"),(0,o.kt)("p",null,"Each property can be run through an interpolation first. An interpolation maps input ranges to output ranges, typically using a linear interpolation but also supports easing functions. By default, it will extrapolate the curve beyond the ranges given, but you can also have it clamp the output value. ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate")," function allows the Animated Value to map from input ranges to output ranges."),(0,o.kt)("p",null,"A basic mapping to convert a ",(0,o.kt)("inlineCode",{parentName:"p"},"0-1")," range to a ",(0,o.kt)("inlineCode",{parentName:"p"},"0-100")," range would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"interpolate(value, [0, 1], [0, 100]);\n")),(0,o.kt)("p",null,"For example, we want to move an element from left 0px to 500px when the opacity changes from ",(0,o.kt)("inlineCode",{parentName:"p"},"0 to 1"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useAnimatedValue, AnimatedBlock, interpolate } from 'react-ui-animate';\n\nexport default function () {\n  const opacity = useAnimatedValue(0);\n\n  return (\n    <>\n      <AnimatedBlock\n        style={{\n          width: 100,\n          height: 100,\n          opacity: opacity.value,\n          backgroundColor: 'red',\n          position: 'absolute',\n          left: interpolate(opacity.value, [0, 1], [0, 500]),\n        }}\n      />\n\n      <button onClick={() => (opacity.value = 1)}>Animate Me</button>\n    </>\n  );\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"interpolate")," accepts an animated value as its first argument, array of numbers as its second argument namely input range and array of numbers with same length as second argument namely output range. It also supports multiple range segments as well, which is very much useful for different scenarios like dead zones and other handly tricks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"interpolate(value, [0, 1], ['red', 'black']);\n")),(0,o.kt)("p",null,"The default behavior of ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate")," is that it will extrapolate the curve beyond the ranges given. You can clamp the value output value by passing extrapolation configuration object as 4th argument of ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate")," function. You can set the extrapolation by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"extrapolate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"extrapolateLeft"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"extrapolateRight")," options. The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"extend")," but you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"clamp")," to prevent the output value from exceeding outputRange."))}c.isMDXComponent=!0}}]);