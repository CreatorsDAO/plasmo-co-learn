"use strict";(self.webpackChunkplasmo_co_learn=self.webpackChunkplasmo_co_learn||[]).push([[5342],{1079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var s=t(4848),l=t(8453);const o={sidebar_position:5},i="Content Script UI Style",c={id:"module3/contentui_style",title:"Content Script UI Style",description:"Style",source:"@site/docs/module3/contentui_style.mdx",sourceDirName:"module3",slug:"/module3/contentui_style",permalink:"/plasmo-co-learn/docs/module3/contentui_style",draft:!1,unlisted:!1,editUrl:"https://github.com/CreatorsDAO/plasmo-co-learn/tree/main/docs/module3/contentui_style.mdx",tags:[],version:"current",lastUpdatedAt:1723020542,formattedLastUpdatedAt:"Aug 7, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Content Script UI",permalink:"/plasmo-co-learn/docs/module3/contentui"},next:{title:"Storage API",permalink:"/plasmo-co-learn/docs/module4/storage"}},a={},r=[{value:"Style",id:"style",level:2},{value:"Raw CSS Text",id:"raw-css-text",level:3},{value:"Import Stylesheet",id:"import-stylesheet",level:3},{value:"CSS-in-JS",id:"css-in-js",level:3},{value:"CSS \u6a21\u5757",id:"css-\u6a21\u5757",level:3},{value:"\u81ea\u5b9a\u4e49\u5b57\u4f53 Custom Font",id:"\u81ea\u5b9a\u4e49\u5b57\u4f53-custom-font",level:3},{value:"Styling the Shadow DOM",id:"styling-the-shadow-dom",level:3},{value:"\u7ee7\u627f\u9875\u9762\u6837\u5f0f",id:"\u7ee7\u627f\u9875\u9762\u6837\u5f0f",level:3},{value:"Caveats",id:"caveats",level:2},{value:"\u53d8\u91cf\u51b2\u7a81 CSS Variables",id:"\u53d8\u91cf\u51b2\u7a81-css-variables",level:3},{value:"Root Container \u7684\u6837\u5f0f",id:"root-container-\u7684\u6837\u5f0f",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"content-script-ui-style",children:"Content Script UI Style"}),"\n",(0,s.jsx)(n.h2,{id:"style",children:"Style"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u4e0a\u6587\u6240\u8bf4\uff0c\u5f53 \u81ea\u5b9a\u4e49 Root \u5bb9\u5668\u540e\uff0cplasmo \u5141\u8bb8\u6269\u5c55\u5f00\u53d1\u8005\u5b89\u5168\u7684\u7ed9 CSUI \u6a21\u5757\u63d0\u4f9b\u6837\u5f0f\u3002\nPlasmo \u4fdd\u8bc1\u4e86\u5982\u4e0b\u7684\u4e24\u70b9:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5bfc\u51fa\u7684\u6837\u5f0f\uff0c\u4e0d\u4f1a\u6cc4\u9732\u5230 web \u9875\u9762\u672c\u8eab"}),"\n",(0,s.jsx)(n.li,{children:"\u9875\u9762\u7684\u6837\u5f0f\u4e0d\u4f1a\u5f71\u54cd\u5230 CSUI \u7ec4\u4ef6\u7684\u6837\u5f0f\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"raw-css-text",children:"Raw CSS Text"}),"\n",(0,s.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7 \u7ed9 CSUI \u5143\u7d20 \u5bfc\u51fa getStyle \u51fd\u6570\u6dfb\u52a0\u6837\u5f0f\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="content.tsx"',children:'import type { PlasmoGetStyle } from "plasmo";\n\nexport const getStyle: PlasmoGetStyle = () => {\n  const style = document.createElement("style");\n  style.textContent = `\n    p {\n      background-color: yellow;\n    }\n  `;\n  return style;\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"import-stylesheet",children:"Import Stylesheet"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\uff0c\u4f60\u60f3\u5f15\u5165\u6837\u5f0f\u6587\u4ef6\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a data-text \u7684 url \u524d\u7f00\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="content.ts"',children:'import styleText from "data-text:./style.scss";\nimport type { PlasmoGetStyle } from "plasmo";\n\nexport const getStyle: PlasmoGetStyle = () => {\n  const style = document.createElement("style");\n  style.textContent = styleText;\n  return style;\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"css-in-js",children:"CSS-in-JS"}),"\n",(0,s.jsxs)(n.p,{children:["getStyle \u7684 API \u4e5f\u652f\u6301 hydrate \u6837\u5f0f\u7684 CSS-in-JS cache , \u6bd4\u5982 ",(0,s.jsx)(n.a,{href:"https://github.com/PlasmoHQ/examples/blob/main/with-emotion/content.tsx",children:"with-emotion"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import createCache from "@emotion/cache";\nimport { CacheProvider } from "@emotion/react";\nimport type { PlasmoGetStyle } from "plasmo";\n\nconst styleElement = document.createElement("style");\n\nconst styleCache = createCache({\n  key: "plasmo-emotion-cache",\n  prepend: true,\n  container: styleElement,\n});\n\nexport const getStyle: PlasmoGetStyle = () => styleElement;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"css-\u6a21\u5757",children:"CSS \u6a21\u5757"}),"\n",(0,s.jsx)(n.p,{children:"\u6a21\u5757\u7684\u65b9\u5f0f\u5f15\u5165 css\uff0c\u53ef\u4ee5\u52a8\u6001\u63d0\u53d6\u5176\u4e2d\u7684 className \u4f5c\u4e3a\u5143\u7d20\u7684\u6837\u5f0f\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="content.ts"',children:'import styleText from "data-text:./style.module.css";\nimport type { PlasmoCSConfig } from "plasmo";\n\nimport * as style from "./style.module.css";\n\nexport const getStyle = () => {\n  const style = document.createElement("style");\n  style.textContent = styleText;\n  return style;\n};\n\nconst Overlay = () => <h1 className={style.header}>Captain Log</h1>;\n\nexport default Overlay;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u5b57\u4f53-custom-font",children:"\u81ea\u5b9a\u4e49\u5b57\u4f53 Custom Font"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Plasmo \u7684 CSUI \u4e2d\u4f7f\u7528\u5b57\u4f53\uff0c\u4f60\u9700\u8981\u5148\u5728\u6587\u4ef6\u4e2d \u5f15\u5165 css \u6587\u4ef6\u3002\n\u6d4f\u89c8\u5668\u4e0d\u8bc6\u522b\u5728 ShadowDom \u4e2d\u58f0\u660e\u7684\u5b57\u4f53\u3002\u4f60\u5fc5\u987b\u5728\u5168\u5c40\u4e2d\u5f15\u5165\u4ed6\u4eec\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5728 assets \u76ee\u5f55\u4e2d\u6dfb\u52a0\u4f60\u7684 \u5b57\u4f53\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u521b\u5efa\u4f7f\u7528\u5b57\u4f53\u6587\u4ef6\u7684 css \u6587\u4ef6\uff0c\u4f60\u9700\u8981\u5f15\u5165\u5b57\u4f53\u6587\u4ef6\u7684\u65f6\u5019\uff0c\u6309\u7167 data-base64 \u7684\u683c\u5f0f\u5f15\u5165\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="font.css"',children:'@font-face {\n  font-family: "Fascinate";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(data-base64:~assets/Fascinate.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\n    U+FEFF, U+FFFD;\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u5728 CSUI \u7684\u914d\u7f6e\u4e2d\u58f0\u660e css"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="content.tsx"',children:'export const config: PlasmoCSConfig = {\n  matches: ["https://www.plasmo.com/*"],\n  css: ["font.css"],\n};\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"\u5f53\u6d4f\u89c8\u5668\u6ce8\u518c\u5b57\u4f53\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528\u4ed6\u4eec\u4e86\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:'.hw-top {\n  background: red;\n  color: white;\n  font-family: "Fascinate";\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5b98\u65b9\u63d0\u4f9b\u7684 \u5b9e\u4f8b \uff1a ",(0,s.jsx)(n.a,{href:"https://github.com/PlasmoHQ/examples/blob/main/with-content-scripts-ui/contents/plasmo-overlay.tsx",children:"with-content-scripts-ui/contents/plasmo-overlay"})]}),"\n",(0,s.jsx)(n.h3,{id:"styling-the-shadow-dom",children:"Styling the Shadow DOM"}),"\n",(0,s.jsx)(n.p,{children:"ShadowDom \u7684 \u662f#plasmo-shadow-container \u7684 plasmo-inline \uff0c\u6240\u4ee5\uff0c\u53ef\u4ee5\u7528\u5bf9\u5e94\u7684 css \u88c5\u9970\u5668\u4fee\u6539\u5bb9\u5668\u6837\u5f0f\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="style.css"',children:"#plasmo-shadow-container {\n  z-index: 99999;\n}\n\n#plasmo-inline {\n  background: blue;\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u5982\u679c\u67d0\u4e9b\u6837\u5f0f\u88ab\u8986\u76d6\u4e86\u3002\u9700\u8981\u6ce8\u610f\u4e0b ",(0,s.jsx)(n.a,{href:"https://docs.plasmo.com/framework/content-scripts-ui/styling#root-container-style",children:" Caveats: Root Container Style "})]})}),"\n",(0,s.jsx)(n.h3,{id:"\u7ee7\u627f\u9875\u9762\u6837\u5f0f",children:"\u7ee7\u627f\u9875\u9762\u6837\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u7ee7\u627f\u5f53\u524d\u9875\u9762\u7684\u6837\u5f0f\uff0c\u4f60\u9700\u8981\u8986\u76d6\u5185\u7f6e\u7684 ",(0,s.jsx)(n.code,{children:"Root Container"})," , \u628a\u4f60\u7684 CSUI \u5143\u7d20\u76f4\u63a5\u6302\u8f7d\u5230\u9875\u9762\u7684 Dom \u4e2d\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"contentui#custom-root-container",children:"\u81ea\u5b9a\u4e49 Root Container"})}),"\n",(0,s.jsx)(n.h2,{id:"caveats",children:"Caveats"}),"\n",(0,s.jsx)(n.p,{children:"\u6846\u67b6\u7684\u901a\u7528\u6837\u5f0f\u5c01\u88c5\uff08\u76ee\u524d\u4e3a\u6b62\uff09\u8fd8\u65e0\u6cd5\u5904\u7406\u4e00\u4e9b\u60c5\u51b5\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684\u6ce8\u610f\u4e8b\u9879\uff1a"}),"\n",(0,s.jsx)(n.h3,{id:"\u53d8\u91cf\u51b2\u7a81-css-variables",children:"\u53d8\u91cf\u51b2\u7a81 CSS Variables"}),"\n",(0,s.jsxs)(n.p,{children:["CSS \u53d8\u91cf\u5728\u540c\u4e00\u4e2a\u6d4f\u89c8\u5668\u6807\u7b7e\u9875\u7684\u6240\u6709\u6846\u67b6\u4e4b\u95f4\u662f\u5171\u4eab\u7684\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u7f51\u9875\u5728 ",":root"," \u4e0a\u4e0b\u6587\u4e2d\u58f0\u660e\u4e86\u4e00\u4e9b CSS \u53d8\u91cf\uff0c\u5b83\u4eec\u4f1a\u4f18\u5148\u4e8e\u4f60\u7684\u53d8\u91cf\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u51b3 CSUI \u548c\u7f51\u9875\u4e4b\u95f4 CSS \u53d8\u91cf\u7684\u5171\u4eab\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u7684\u65b9\u6cd5\u89e3\u51b3\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e3a\u4f60\u7684 CSS \u53d8\u91cf\u58f0\u660e\u4e00\u4e2a\u72ec\u7279\u7684\u524d\u7f00\u547d\u540d\u7a7a\u95f4\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u5c06\u4f60\u7684 CSS \u53d8\u91cf\u63d0\u5347\u5230 ",":host"," \u8303\u56f4\u5185\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5728 iframe \u5185\u90e8\u6302\u8f7d CSUI \u5143\u7d20\uff0c\u5b83\u62e5\u6709\u81ea\u5df1\u7684 head \u548c body \u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"root-container-\u7684\u6837\u5f0f",children:"Root Container \u7684\u6837\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684\u7f51\u9875\u6837\u5f0f\u4f7f\u7528\u4e86\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"*"})," \u6765\u8bc6\u522b\u5143\u7d20\u7684\u901a\u7528\u6837\u5f0f\uff0c\u4ed6\u5c06\u4f1a\u8986\u76d6 ",(0,s.jsx)(n.code,{children:"Root Container"})," \u7684\u6837\u5f0f\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b9e\u4f8b\u8bf4\u660e\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u5982\u7f51\u9875\u6837\u5f0f\u4e2d\u5b58\u5728\u5982\u4e0b\u7684 \u6837\u5f0f\u5185\u5bb9:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"* {\n  display: block;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0a\u7684\u6837\u5f0f\u4e5f\u4f1a\u5c06 CSUI \u5143\u7d20\u7684\u5bb9\u5668 ",(0,s.jsx)(n.code,{children:"block"})," \u65b9\u5f0f\u5c55\u793a\u3002 \u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Root Container \u7684\u5185\u8054\u6837\u5f0f\u6765\u505a\u5230\u5408\u9002\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 CSS \u58f0\u660e\uff0c\u63d0\u5347\u4e00\u4e9b\u6837\u5f0f\u7684\u4f18\u5148\u7ea7\uff0c\u907f\u514d\u6b64\u7c7b\u4e8b\u60c5\u7684\u65b9\u5f0f\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"#plasmo-shadow-container {\n  z-index: 2147483646 !important;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(6540);const l={},o=s.createContext(l);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);