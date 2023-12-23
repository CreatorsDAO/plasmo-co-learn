"use strict";(self.webpackChunkplasmo_co_learn=self.webpackChunkplasmo_co_learn||[]).push([[6480],{6189:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=s(5893),r=s(1151);const l={sidebar_position:1},a="Storage API",o={id:"module4/storage",title:"Storage API",description:"Plasmo \u63d0\u4f9b\u4e86\u4e00\u4e2a \u5c01\u88c5\u597d\u7684 Storage \u5305 : @plasmohq/storage\u3002",source:"@site/docs/module4/storage.mdx",sourceDirName:"module4",slug:"/module4/storage",permalink:"/plasmo-co-learn/docs/module4/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/CreatorsDAO/plasmo-co-learn/tree/main/docs/module4/storage.mdx",tags:[],version:"current",lastUpdatedAt:1703348321,formattedLastUpdatedAt:"Dec 23, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Content Script UI Style",permalink:"/plasmo-co-learn/docs/module3/contentui_style"},next:{title:"Remote Code",permalink:"/plasmo-co-learn/docs/module4/remote"}},i={},c=[{value:"\u5b89\u88c5\u76f8\u5173\u6a21\u5757",id:"\u5b89\u88c5\u76f8\u5173\u6a21\u5757",level:2},{value:"\u4f7f\u7528\u5b9e\u4f8b",id:"\u4f7f\u7528\u5b9e\u4f8b",level:2},{value:"base Storage API",id:"base-storage-api",level:2},{value:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u4f4d\u7f6e",id:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u4f4d\u7f6e",level:3},{value:"\u6570\u636e\u81ea\u52a8 copy",id:"\u6570\u636e\u81ea\u52a8-copy",level:3},{value:"\u6570\u636e\u76d1\u63a7 (\u5e94\u7528\u5728 state \u72b6\u6001\u540c\u6b65)",id:"\u6570\u636e\u76d1\u63a7-\u5e94\u7528\u5728-state-\u72b6\u6001\u540c\u6b65",level:3},{value:"\u5b89\u5168\u5b58\u50a8",id:"\u5b89\u5168\u5b58\u50a8",level:2},{value:"React Hook",id:"react-hook",level:2},{value:"\u6e32\u67d3 state \u7684\u6700\u65b0 value",id:"\u6e32\u67d3-state-\u7684\u6700\u65b0-value",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u5b58\u50a8\u5b9e\u4f8b",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u5b58\u50a8\u5b9e\u4f8b",level:3},{value:"\u6e32\u67d3 \u521d\u59cb\u503c (\u65e0\u5173\u6301\u4e45\u5316)",id:"\u6e32\u67d3-\u521d\u59cb\u503c-\u65e0\u5173\u6301\u4e45\u5316",level:3},{value:"\u6e32\u67d3 \u521d\u59cb\u503c (\u5e76\u6301\u4e45\u5316)",id:"\u6e32\u67d3-\u521d\u59cb\u503c-\u5e76\u6301\u4e45\u5316",level:3},{value:"\u9ad8\u7ea7\u7528\u6cd5",id:"\u9ad8\u7ea7\u7528\u6cd5",level:3},{value:"\u706b\u72d0\u6d4f\u89c8\u5668\u7684\u7528\u6cd5",id:"\u706b\u72d0\u6d4f\u89c8\u5668\u7684\u7528\u6cd5",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"storage-api",children:"Storage API"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Plasmo"})," \u63d0\u4f9b\u4e86\u4e00\u4e2a \u5c01\u88c5\u597d\u7684 ",(0,t.jsx)(n.code,{children:"Storage"})," \u5305 : ",(0,t.jsx)(n.code,{children:"@plasmohq/storage"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u9002\u7528\u4e8e\u6d4f\u89c8\u5668\u6269\u5c55\u7684\u62bd\u8c61\u4e86\u6301\u4e45\u5316\u5b58\u50a8\u80fd\u529b\u7684\u5e94\u7528\u5305\u7ba1\u7406\u5668\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53 \u6d4f\u89c8\u5668\u6269\u5c55\u7684 ",(0,t.jsx)(n.code,{children:"storage API"})," \u4e0d\u53ef\u7528\u65f6\uff0c\u5c06\u964d\u7ea7\u4e3a ",(0,t.jsx)(n.code,{children:"localStorage"}),"\u3002"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"storage"})," \u5141\u8bb8 \u5404\u4e2a\u6a21\u5757\u4e4b\u95f4\u7684\u72b6\u6001\u540c\u6b65\uff0c\u5305\u62ec \u6269\u5c55\u9875\u9762\u3001background \u5b58\u50a8\u3001content script \u3001web pages\u3002"]}),(0,t.jsxs)(n.p,{children:["\u4f7f\u7528\u8fd9\u4e2a\u7c7b\u5e93\uff0c\u6700\u597d\u5f00\u542f ",(0,t.jsx)(n.code,{children:"storage"})," \u6743\u9650\u3002"]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88c5\u76f8\u5173\u6a21\u5757",children:"\u5b89\u88c5\u76f8\u5173\u6a21\u5757"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pnpm install @plasmohq/storage\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u5305\uff0c\u4e3b\u8981\u5bfc\u51fa\u4ee5\u4e0b\u7684\u4e09\u4e2a\u5185\u5bb9"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Modules"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"@plasmohq/storage"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["The base ",(0,t.jsx)(n.a,{href:"#storage",children:"Storage API"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"@plasmohq/storage/secure"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["The ",(0,t.jsx)(n.a,{href:"#secure-storage",children:"SecureStorage API"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"@plasmohq/storage/hook"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["The ",(0,t.jsx)(n.a,{href:"#react-hook-api",children:"React Hook Storage API"})]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u5b9e\u4f8b",children:"\u4f7f\u7528\u5b9e\u4f8b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/PlasmoHQ/examples/tree/main/with-storage",children:"with-storage"})," \u662f\u4e00\u4e2a\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"storage"})," \u540c\u6b65 options \u548c popups \u4e4b\u95f4\u7684\u6570\u636e\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/PlasmoHQ/examples/tree/main/with-redux",children:"with-redux"})," \u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"storage"})," \u4f5c\u4e3a ",(0,t.jsx)(n.code,{children:"Redux"})," \u7684\u5b58\u50a8\u5e93\u7684\u5b9e\u4f8b\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/PlasmoHQ/mice",children:"MICE"})," \u8fd9\u4e2a\u5b9e\u4f8b\u5c06\u5b58\u50a8\u548c webrtc \u7684 pipe message \u7ed3\u5408\uff0c\u901a\u8fc7\u6269\u5c55\u540c\u6b65\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"base-storage-api",children:"base Storage API"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"storage"})," \u63d0\u4f9b\u4e86\u4e86\u7b80\u5355\u6613\u7528\u7684 API\u3002\u4ed6\u53ef\u4ee5\u5e94\u7528\u5728 ",(0,t.jsx)(n.code,{children:"Plasmo"})," \u7684\u5404\u4e2a\u6a21\u5757\u7684 runtime \u4e0a\u4e0b\u6587\u3002\n\u4f60\u4e0d\u9700\u8981\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"JSON.stringify/parse"})," \u6765\u56de\u89e3\u6790\u6570\u636e\u3002\u56e0\u4e3a\uff0c\u4ed6\u63a5\u53d7\u539f\u59cb\u7684\u6570\u636e\u683c\u5f0f\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { Storage } from "@plasmohq/storage";\n\nconst storage = new Storage();\n\nawait storage.set("key", "value");\nconst data = await storage.get("key"); // "value"\n\nawait storage.set("capt", { color: "red" });\nconst data2 = await storage.get("capt"); // { color: "red" }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u4f4d\u7f6e",children:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u4f4d\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["\u521d\u59cb\u5316 ",(0,t.jsx)(n.code,{children:"Storage"})," \u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u63d0\u4f9b ",(0,t.jsx)(n.code,{children:"area"})," \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"sync"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const storage = new Storage({\n  area: "local",\n});\n'})}),"\n",(0,t.jsx)(n.p,{children:'\u63d0\u4f9b\u7684\u9009\u9879\u5217\u8868 "sync" | "local" | "managed" | "session"'}),"\n",(0,t.jsx)(n.h3,{id:"\u6570\u636e\u81ea\u52a8-copy",children:"\u6570\u636e\u81ea\u52a8 copy"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const storage = new Storage({\n  copiedKeyList: ["shield-modulation"],\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u901a\u8fc7\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"copiedKeyList"})," , \u4f60\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.code,{children:"content script"})," \u548c ",(0,t.jsx)(n.code,{children:"extention pages"})," \u4e2d\u5c06\u6570\u636e\u590d\u5236\u5230 ",(0,t.jsx)(n.code,{children:"localStorage"}),"\u3002\n\u4ee5\u4e0a\u4ee3\u7801\u4f1a\u5c06 ",(0,t.jsx)(n.code,{children:"shield-modulation"})," ,\u590d\u5236\u5230 ",(0,t.jsx)(n.code,{children:"localStorage"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u6570\u636e\u76d1\u63a7-\u5e94\u7528\u5728-state-\u72b6\u6001\u540c\u6b65",children:"\u6570\u636e\u76d1\u63a7 (\u5e94\u7528\u5728 state \u72b6\u6001\u540c\u6b65)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="background.ts"',children:'import { Storage } from "@plasmohq/storage";\n\nconst storage = new Storage();\n\nawait storage.set("serial-number", 47);\nawait storage.set("make", "plasmo-corp");\n\nstorage.watch({\n  "serial-number": (c) => {\n    console.log(c.newValue);\n  },\n  make: (c) => {\n    console.log(c.newValue);\n  },\n});\n\nawait storage.set("serial-number", 96);\nawait storage.set("make", "PlasmoHQ");\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u4e3a\u8fd9\u79cd\u673a\u5236\u7684\u5b58\u5728\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u4f60\u7684\u6269\u5c55\u5185\u90e8\u7684\u4e00\u79cd\u901a\u4fe1\u65b9\u5f0f \u3002\n\u6211\u4eec\u5728 ",(0,t.jsx)(n.a,{href:"https://github.com/PlasmoHQ/examples/tree/main/with-redux",children:"with-redux"}),"\u6f14\u793a\u4e86\u8fd9\u4e2a\u529f\u80fd\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u5168\u5b58\u50a8",children:"\u5b89\u5168\u5b58\u50a8"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"SecureStorage"})," API \u901a\u8fc7\u6570\u636e\u52a0\u5bc6\u89e3\u5bc6\u6269\u5c55\u4e86 ",(0,t.jsx)(n.code,{children:"storage"}),",\u7528\u4e8e\u654f\u611f\u6570\u636e\u7684\u5b58\u50a8\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u4e3a \u4ed6\u5229\u7528\u4e86 ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto",children:"Web Crypto SubtleCrypto API "})," , \u6240\u4ee5\uff0c\u4ed6\u53ea\u80fd\u5728 https \u7684\u4e0a\u4e0b\u6587\u4e2d\u6267\u884c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { SecureStorage } from "@plasmohq/storage/secure";\n\nconst storage = new SecureStorage();\n\nawait storage.setPassword("roosevelt"); // The only diff\n\nawait storage.set("key", "value");\nconst data = await storage.get("key"); // "value"\n\nawait storage.set("capt", { color: "red" });\nconst data2 = await storage.get("capt"); // { color: "red" }\n'})}),"\n",(0,t.jsx)(n.h2,{id:"react-hook",children:"React Hook"}),"\n",(0,t.jsxs)(n.p,{children:["hook API \u662f\u4e3a\u4e86\u5728\u6269\u5c55\u5404\u4e2a\u6a21\u5757\u4e4b\u95f4\u72b6\u6001\u540c\u6b65\u8bbe\u8ba1\u7684\u3002\n\u4ed6\u6709\u597d\u591a\u79cd\u4e0d\u540c\u7684\u7528\u9014\uff0c\u4f46\u662f\uff0c\u6700\u9996\u8981\u4e5f\u662f\u91cd\u8981\u7684\u662f\u5728 ",(0,t.jsx)(n.code,{children:"React"})," \u7ec4\u4ef6\u4e2d\u4f7f\u7528\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { useStorage } from "@plasmohq/storage/hook";\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u6e32\u67d3-state-\u7684\u6700\u65b0-value",children:"\u6e32\u67d3 state \u7684\u6700\u65b0 value"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const [hailingFrequency] = useStorage("hailing")\n...\n{hailingFrequency}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u5b58\u50a8\u5b9e\u4f8b",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u5b58\u50a8\u5b9e\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { Storage } from "@plasmohq/storage"\nimport { useStorage } from "@plasmohq/storage/hook"\n...\nconst [hailingFrequency] = useStorage({\n  key: "hailing",\n  instance: new Storage({\n    area: "local"\n  })\n})\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u6e32\u67d3-\u521d\u59cb\u503c-\u65e0\u5173\u6301\u4e45\u5316",children:"\u6e32\u67d3 \u521d\u59cb\u503c (\u65e0\u5173\u6301\u4e45\u5316)"}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,t.jsx)(n.code,{children:"useStorage"})," \u7684\u521d\u59cb\u5316\uff0c\u53ef\u80fd\u5b58\u5728\u4e8e\u5404\u4e2a\u7ec4\u4ef6\u4e2d\uff0c\u5b58\u5728\u7740\u5148\u540e\u987a\u5e8f\u3002\n\u90a3\u4e48\uff0c\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c\u53ef\u80fd\u53d1\u751f\u51b2\u7a81\u3002 ",(0,t.jsx)(n.code,{children:"Plasmo"})," \u5b9a\u4e49\u4e86\u521d\u59cb\u5316\u673a\u5236\u3002\n\u63d0\u4f9b\u56fa\u5b9a\u7684\u539f\u59cb\u503c\uff0c\u5404\u4e2a\u7ec4\u4ef6\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"storage"})," \u5728\u672a\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c\u4e92\u76f8\u9694\u79bb\uff0c\u5373\u4e92\u4e0d\u5f71\u54cd\u3002\n\u4f46\u662f\uff0c\u4e00\u65e6\u5176\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"storage"})," \u6570\u636e\u53d8\u66f4\uff0c\u5c06\u4f1a\u540c\u6b65\u5230\u5176\u4ed6\u7684\u7ec4\u4ef6\u5f53\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u7684\u5b9e\u4f8b\u63cf\u8ff0\u4e86\u8fd9\u4e2a\u73b0\u8c61:"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"popup"})," \u4e2d\u5b9a\u4e49\u521d\u59cb\u503c"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="popup.tsx"',children:'const [hailingFrequency, setHailingFrequency] = useStorage("hailing", "42")\n...\n<input value={hailingFrequency} onChange={(e) =>\n  setHailingFrequency(e.target.value)\n  }/> // "42"\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0a\u7684\u5b9e\u4f8b\uff0c\u6700\u5f00\u59cb\u7684\u503c\u663e\u793a\u4e3a 42\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"content.tsx"})," \u4e2d\u8ba2\u9605\u6570\u636e\u66f4\u65b0"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="content.tsx"',children:'const [hailingFrequency] = useStorage("hailing");\nreturn <p>{hailingFrequency}</p>; // undefined\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u672a\u5b9a\u4e49\u521d\u59cb\u503c\uff0c\u5c06\u663e\u793a undefined\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"options.tsx"}),"\u4e2d\u8ba2\u9605\u6570\u636e\uff0c\u5e76\u63d0\u4f9b\u4e0d\u4e00\u6837\u7684\u521d\u59cb\u503c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="options.tsx"',children:'const [hailingFrequency] = useStorage("hailing", "147");\nreturn <p>{hailingFrequency}</p>; // "147"\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5b9a\u4e49\u4e86\u4e0d\u4e00\u6837\u7684\u521d\u59cb\u503c\uff0c\u663e\u793a\u4e3a 147\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6700\u540e\uff0c\u5f53\u4f60\u5728 ",(0,t.jsx)(n.code,{children:"popup"})," \u4e2d\u8f93\u5165\u503c\u7684\u65f6\u5019\uff0c\u8be5\u503c\u5c06\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"storage"})," \u540c\u6b65\u5230\u5404\u4e2a\u6a21\u5757\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u6e32\u67d3-\u521d\u59cb\u503c-\u5e76\u6301\u4e45\u5316",children:"\u6e32\u67d3 \u521d\u59cb\u503c (\u5e76\u6301\u4e45\u5316)"}),"\n",(0,t.jsxs)(n.p,{children:["\u521d\u59cb\u5316 ",(0,t.jsx)(n.code,{children:"storage"})," \u7684\u65f6\u5019\uff0c\u4f20\u9012\u4e00\u4e2a\u51fd\u6570\u3002\u8be5\u51fd\u6570\u63d0\u4f9b\u4e00\u4e2a\u53c2\u6570\uff0c\u8868\u793a\u5f53\u524d storage \u4e2d\u7684\u503c\u3002\n\u5982\u679c\u5df2\u7ecf\u88ab\u5176\u4ed6\u7684\u7ec4\u4ef6\u521d\u59cb\u5316\u6216\u8005\u53d8\u66f4\uff0c\u8be5\u503c\u5c06\u4e3a\u6700\u65b0\u7684\u503c\uff0c\u5426\u5219\uff0c\u5c06\u4e3a undefined\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u5982\u4e0b\u7684\u5b9e\u4f8b\u6f14\u793a:"}),"\n",(0,t.jsx)(n.p,{children:"\u8bbe\u7f6e\u5982\u4e0b\u7684 popup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="popup.tsx"',children:'const [hailingFrequency, setHailingFrequency] = useStorage("hailing", (v) => v === undefined ? "200": v)\n...\n{hailingFrequency} // "200"\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\uff0c\u8bbe\u7f6e\u5982\u4e0b\u7684 options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="options.tsx"',children:'const [hailingFrequency, setHailingFrequency] = useStorage("hailing", (v) => v === undefined ? "100": v)\n...\n{hailingFrequency} // "100"\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0a\uff0c\u4f1a\u6839\u636e options \u6216\u8005 popup \u6253\u5f00\u7684\u5148\u540e\u987a\u5e8f\u4e0d\u540c\uff0c\u800c\u786e\u5b9a\u4e3a\u4e0d\u540c\u7684\u503c\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5148\u6253\u5f00 popup ,\u503c\u4f1a\u521d\u59cb\u5316\u4e3a 100"}),"\n",(0,t.jsx)(n.li,{children:"\u5148\u6253\u5f00 options , \u503c\u4f1a\u521d\u59cb\u5316\u4e3a 200"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u9ad8\u7ea7\u7528\u6cd5",children:"\u9ad8\u7ea7\u7528\u6cd5"}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528 useStorage \u7684\u4e0d\u540c\u8fd4\u56de\u503c\uff0c\u786e\u5b9a\u4e0d\u540c\u7684\u53d8\u66f4\u8303\u56f4\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"setStoreValue \u5c06\u4f1a\u540c\u6b65\u6570\u636e\u5230\u5176\u4ed6\u7684\u7ec4\u4ef6"}),"\n",(0,t.jsx)(n.li,{children:"setRenderValue \u53ea\u5f71\u54cd\u5f53\u524d\u7684\u72b6\u6001"}),"\n",(0,t.jsx)(n.li,{children:"remove \u5219\u662f\u5220\u9664 storage \u6570\u636e"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5177\u4f53\u5b9e\u4f8b\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const [\n  hailingFrequency,\n  setHailingFrequency,\n  { setRenderValue, setStoreValue, remove },\n] = useStorage("hailing");\n\nreturn (\n  <>\n    <input\n      value={hailingFrequency}\n      onChange={(e) => setRenderValue(e.target.value)}\n    />\n    <button onClick={() => setStoreValue()}>Save</button>\n    <button onClick={() => remove()}>Remove</button>\n  </>\n);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u706b\u72d0\u6d4f\u89c8\u5668\u7684\u7528\u6cd5",children:"\u706b\u72d0\u6d4f\u89c8\u5668\u7684\u7528\u6cd5"}),"\n",(0,t.jsxs)(n.p,{children:["\u706b\u72d0\u6d4f\u89c8\u5668\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"storage"})," \u7684\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u9047\u5230\u5982\u4e0b\u7684\u9519\u8bef\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Error: The storage API will not work with a temporary addon ID.\nPlease add an explicit addon ID to your manifest. For more information see ",(0,t.jsx)(n.a,{href:"https://mzl.la/3lPk1aE",children:"https://mzl.la/3lPk1aE"})]})}),"\n",(0,t.jsxs)(n.p,{children:["\u89e3\u51b3\u529e\u6cd5\uff0c\u662f\u706b\u72d0\u6d4f\u89c8\u5668\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"storage"})," \u7684\u65f6\u5019\uff0c\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u6269\u5c55 ID\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"manifest": {\n  "browser_specific_settings": {\n    "gecko": {\n      "id": "your-id@example.com"\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5f00\u53d1\u8fc7\u7a0b\u4e2d, ",(0,t.jsx)(n.code,{children:"ID"})," \u53ef\u4ee5\u968f\u610f\u5b9a\u4e49\u3002 \u53d1\u5e03\u7684\u65f6\u5019\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f60\u7684\u6269\u5c55 ID \u6765\u4ee3\u66ff\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var t=s(7294);const r={},l=t.createContext(r);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);