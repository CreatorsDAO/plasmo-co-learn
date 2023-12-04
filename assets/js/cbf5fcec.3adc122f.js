"use strict";(self.webpackChunkplasmo_co_learn=self.webpackChunkplasmo_co_learn||[]).push([[481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),i=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=i(r),d=n,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return r?o.createElement(f,l(l({ref:t},m),{},{components:r})):o.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<a;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7023:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:5},l="Remote Code",p={unversionedId:"module4/remote",id:"module4/remote",title:"Remote Code",description:"Plasmo \u4f1a\u81ea\u52a8\u628a\u4f60\u5728\u6846\u67b6\u4e2d \u6240\u6709 import \u7684\u811a\u672c \u6253\u5305\u5728\u6d4f\u89c8\u5668\u6269\u5c55\u4e2d\u3002",source:"@site/docs/module4/remote.mdx",sourceDirName:"module4",slug:"/module4/remote",permalink:"/plasmo-co-learn/docs/module4/remote",draft:!1,editUrl:"https://github.com/CreatorsDAO/plasmo-co-learn/tree/main/docs/module4/remote.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Storage",permalink:"/plasmo-co-learn/docs/module4/storage"}},c={},i=[],m={toc:i},s="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"remote-code"},"Remote Code"),(0,n.kt)("p",null,"Plasmo \u4f1a\u81ea\u52a8\u628a\u4f60\u5728\u6846\u67b6\u4e2d \u6240\u6709 import \u7684\u811a\u672c \u6253\u5305\u5728\u6d4f\u89c8\u5668\u6269\u5c55\u4e2d\u3002\n\u5982\u679c\u662f\u8fdc\u7a0b import \uff0c\u90a3\u4e48\u9700\u8981\u4f7f\u7528 https \u534f\u8bae\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#remotely-hosted-code"},"\u4e5f\u662f MV3 \u8fdc\u7a0b\u4ee3\u7801\u6807\u51c6")),(0,n.kt)("p",null,"\u6dfb\u52a0 google \u5206\u6790\u7684\u7c7b\u5e93"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import "https://www.googletagmanager.com/gtag/js?id=XXXXXX";\n')),(0,n.kt)("p",null,"\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.plasmo.com/framework/env"},"env"),"\u3002"),(0,n.kt)("p",null,"\u672c\u6b21\u521b\u5efa .env.local"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-env"},"PLASMO_PUBLIC_GTAG_ID=XXXXXX\n")),(0,n.kt)("p",null,"\u7136\u540e\uff0c\u5728 \u4ee3\u7801\u4e2d\u4f7f\u7528"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import "https://www.googletagmanager.com/gtag/js?id=$PLASMO_PUBLIC_GTAG_ID";\n')),(0,n.kt)("p",null,"\u5b98\u65b9\u63d0\u4f9b\u4e86\u4e00\u4e2a\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/PlasmoHQ/examples/tree/main/with-google-analytics"},"\u4f7f\u7528\u8c37\u6b4c\u5206\u6790\u7684\u4e00\u4e2a\u5b9e\u4f8b"),"\u3002"))}u.isMDXComponent=!0}}]);