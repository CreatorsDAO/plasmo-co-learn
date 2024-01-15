"use strict";(self.webpackChunkplasmo_co_learn=self.webpackChunkplasmo_co_learn||[]).push([[5481],{6157:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=t(5893),r=t(1151);const s={sidebar_position:2},a="Remote Code",c={id:"module4/remote",title:"Remote Code",description:"Plasmo \u4f1a\u81ea\u52a8\u628a\u4f60\u5728\u6846\u67b6\u4e2d \u6240\u6709 import \u7684\u811a\u672c \u6253\u5305\u5728\u6d4f\u89c8\u5668\u6269\u5c55\u4e2d\u3002",source:"@site/docs/module4/remote.mdx",sourceDirName:"module4",slug:"/module4/remote",permalink:"/plasmo-co-learn/docs/module4/remote",draft:!1,unlisted:!1,editUrl:"https://github.com/CreatorsDAO/plasmo-co-learn/tree/main/docs/module4/remote.mdx",tags:[],version:"current",lastUpdatedAt:1705288757,formattedLastUpdatedAt:"Jan 15, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Storage API",permalink:"/plasmo-co-learn/docs/module4/storage"},next:{title:"Background Service Worker",permalink:"/plasmo-co-learn/docs/module4/background"}},i={},l=[];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"remote-code",children:"Remote Code"}),"\n",(0,n.jsx)(o.p,{children:"Plasmo \u4f1a\u81ea\u52a8\u628a\u4f60\u5728\u6846\u67b6\u4e2d \u6240\u6709 import \u7684\u811a\u672c \u6253\u5305\u5728\u6d4f\u89c8\u5668\u6269\u5c55\u4e2d\u3002\n\u5982\u679c\u662f\u8fdc\u7a0b import \uff0c\u90a3\u4e48\u9700\u8981\u4f7f\u7528 https \u534f\u8bae\u3002"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#remotely-hosted-code",children:"\u4e5f\u662f MV3 \u8fdc\u7a0b\u4ee3\u7801\u6807\u51c6"})}),"\n",(0,n.jsx)(o.p,{children:"\u6dfb\u52a0 google \u5206\u6790\u7684\u7c7b\u5e93"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-typescript",children:'import "https://www.googletagmanager.com/gtag/js?id=XXXXXX";\n'})}),"\n",(0,n.jsxs)(o.p,{children:["\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(o.a,{href:"https://docs.plasmo.com/framework/env",children:"env"}),"\u3002"]}),"\n",(0,n.jsx)(o.p,{children:"\u672c\u6b21\u521b\u5efa .env.local"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-env",children:"PLASMO_PUBLIC_GTAG_ID=XXXXXX\n"})}),"\n",(0,n.jsx)(o.p,{children:"\u7136\u540e\uff0c\u5728 \u4ee3\u7801\u4e2d\u4f7f\u7528"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-typescript",children:'import "https://www.googletagmanager.com/gtag/js?id=$PLASMO_PUBLIC_GTAG_ID";\n'})}),"\n",(0,n.jsxs)(o.p,{children:["\u5b98\u65b9\u63d0\u4f9b\u4e86\u4e00\u4e2a\uff1a",(0,n.jsx)(o.a,{href:"https://github.com/PlasmoHQ/examples/tree/main/with-google-analytics",children:"\u4f7f\u7528\u8c37\u6b4c\u5206\u6790\u7684\u4e00\u4e2a\u5b9e\u4f8b"}),"\u3002"]}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsx)(o.p,{children:"Q: \u4e3a\u4ec0\u4e48\u6211\u5728\u524d\u7aef\u770b\u4e0d\u5230\u8fdc\u7a0b\u52a0\u8f7d\u5462\uff1f\nA: Plasmo \u4e2d\u7684 \u8fdc\u7a0b\u52a0\u8f7d\uff0c\u5176\u5b9e\u662f\u5728\u6253\u5305\u65f6\uff0c\u5c06\u6587\u4ef6\u9759\u6001\u4e0b\u8f7d\u4e0b\u6765\u5b58\u50a8\u5230\u672c\u5730\u3002\u6240\u4ee5\uff0c\u4f60\u5728\u8fd0\u884c\u4e2d\u65e0\u6cd5\u770b\u5230\u6700\u65b0\u7684\u8fdc\u7a0b\u8d44\u6e90\u3002\u8fd9\u4e00\u70b9\u4e5f\u662f\u9700\u8981\u6ce8\u610f\u7684\u3002"})})]})}function m(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>c,a:()=>a});var n=t(7294);const r={},s=n.createContext(r);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);