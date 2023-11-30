"use strict";(self.webpackChunkplasmo_co_learn=self.webpackChunkplasmo_co_learn||[]).push([[209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Background Service Worker",l={unversionedId:"module4/background",id:"module4/background",title:"Background Service Worker",description:"\u76f8\u5173\u4ecb\u7ecd",source:"@site/docs/module4/background.mdx",sourceDirName:"module4",slug:"/module4/background",permalink:"/plasmo-co-learn/docs/module4/background",draft:!1,editUrl:"https://github.com/CreatorsDAO/plasmo-co-learn/tree/main/docs/module4/background.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Content Script UI",permalink:"/plasmo-co-learn/docs/module3/contentui"},next:{title:"Message API",permalink:"/plasmo-co-learn/docs/module4/message"}},p={},c=[{value:"\u76f8\u5173\u4ecb\u7ecd",id:"\u76f8\u5173\u4ecb\u7ecd",level:2},{value:"\u57fa\u7840\u4f7f\u7528",id:"\u57fa\u7840\u4f7f\u7528",level:3},{value:"\u6570\u636e\u6301\u4e45\u5316",id:"\u6570\u636e\u6301\u4e45\u5316",level:3},{value:"Background \u4f7f\u7528\u5b9e\u4f8b",id:"background-\u4f7f\u7528\u5b9e\u4f8b",level:2},{value:"\u521b\u5efa\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u83dc\u5355 <code>contextMenu</code>",id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u83dc\u5355-contextmenu",level:3}],s={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"background-service-worker"},"Background Service Worker"),(0,a.kt)("h2",{id:"\u76f8\u5173\u4ecb\u7ecd"},"\u76f8\u5173\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u6269\u5c55\u4e5f\u5206\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Background"),"\uff0c\u5b83\u8fd0\u884c\u7684\u4e0a\u4e0b\u6587 \u79f0\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers"},"Service \u4e0a\u4e0b\u6587"),"\u3002\n\u5728\u8fd9\u4e2a\u4e0a\u4e0b\u6587\uff0c\u4f60\u53ef\u4ee5\u8131\u79bb\u5f00\u5f88\u591a\u675f\u7f1a\uff0c\u5c3d\u53ef\u80fd\u53d1\u6325\u4f60\u7684\u60f3\u8c61\u7a7a\u95f4\u3002 \u6bd4\u5982: \u4f60\u518d\u4e5f\u4e0d\u7528\u62c5\u5fc3 ",(0,a.kt)("inlineCode",{parentName:"p"},"CORS")," \u9650\u5236\uff0c\u53ef\u4ee5\u83b7\u53d6\u4f60\u60f3\u8981\u7684\u4efb\u610f\u7684\u8d44\u6e90\u3002\n\u901a\u5e38\u7684\u64cd\u4f5c\u662f\u628a\u4e00\u4e9b\uff0c\u76f8\u5bf9\u8017\u65f6\u7684\u64cd\u4f5c\u653e\u5728\u540e\u53f0\u6267\u884c\u3002"),(0,a.kt)("h3",{id:"\u57fa\u7840\u4f7f\u7528"},"\u57fa\u7840\u4f7f\u7528"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"plasmo")," \u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ca\u7b80\u5355\u7684\u65b9\u5f0f\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Background"),"\u3002 \u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"plasmo"),"\u76ee\u5f55\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"background.ts"),"\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=background.ts",title:"background.ts"},'export {};\n\nconsole.log(\n  "Live now; make now always the most precious time. Now will never come again."\n);\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u56e0\u4e3a,",(0,a.kt)("inlineCode",{parentName:"p"},"plasmo")," \u9ed8\u8ba4\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"typescript")," \u3002\u4ed6\u90a3\u4efb\u4f55\u7684\u4e00\u4e2a\u6587\u4ef6\u5f53\u6210\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"module"),"\u3002\n\u5982\u679c\u4f60\u6ca1\u6709\u5176\u4ed6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"export"),", \u4f60\u9700\u8981\u5728\u5f00\u5934\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"export {};"))),(0,a.kt)("p",null,"\u91cd\u65b0\u52a0\u8f7d\u4f60\u7684\u6269\u5c55\uff0c\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Worker"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4189).Z,width:"446",height:"290"})),(0,a.kt)("p",null,"\u70b9\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Worker")," \u5217\u8868\u3002\n",(0,a.kt)("img",{src:n(9446).Z,width:"1016",height:"115"})),(0,a.kt)("p",null,"\u606d\u559c\u4f60! \u4f60\u63a8\u5f00\u4e86\u65b0\u4e16\u754c\u7684\u5927\u95e8\u3002"),(0,a.kt)("p",null,"\u5b98\u65b9\u63d0\u4f9b\u7684\u5b9e\u4f8b\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PlasmoHQ/examples/tree/main/with-background"},"with-background")),(0,a.kt)("h3",{id:"\u6570\u636e\u6301\u4e45\u5316"},"\u6570\u636e\u6301\u4e45\u5316"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"plasmo")," \u5f00\u53d1\u7684\u6a21\u5757 \u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u6a21\u5f0f\u4e0b\uff0c Service \u603b\u4fdd\u6301 active \u7684\u72b6\u6001\u3002")),(0,a.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6d4f\u89c8\u5668\u7684\u6269\u5c55\u7a7a\u95f2 5 \u5206\u949f\u5de6\u53f3\uff0c\u5c31\u4f1a\u88ab\u6d4f\u89c8\u5668\u5f53\u505a\u7a7a\u95f2\u8fdb\u7a0b\u6e05\u7406\u3002\n\u6e05\u9664\u4ee5\u540e\uff0c\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," \u811a\u672c\u4e2d\u7684\u6570\u636e\u5c06\u4f1a\u6d88\u5931\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u4f60\u9700\u8981\u4e00\u4e2a\u5b58\u50a8\u5e93\uff0c\u4fdd\u6301\u4f60\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.plasmo.com/framework/storage"},"storage")," \u6a21\u5757\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\n\u5f53\u7136\uff0c\u66f4\u9ad8\u7ea7\u7684\u529e\u6cd5\u662f\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"websocket"),"\u5c06\u672c\u5730\u7684\u72b6\u6001\u5b58\u50a8\u5230\u8fdc\u7aef\u7684\u6570\u636e\u5e93\u3002"),(0,a.kt)("h2",{id:"background-\u4f7f\u7528\u5b9e\u4f8b"},"Background \u4f7f\u7528\u5b9e\u4f8b"),(0,a.kt)("h3",{id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u83dc\u5355-contextmenu"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u83dc\u5355 ",(0,a.kt)("inlineCode",{parentName:"h3"},"contextMenu")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"background.ts")," \u4e2d\u6dfb\u52a0\u5b9a\u4e49:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=background.ts",title:"background.ts"},'chrome.runtime.onInstalled.addListener(() => {\n  // \u521b\u5efa\u4e0a\u4e0b\u6587\u83dc\u5355\u9879\n  chrome.contextMenus.create({\n    id: "myExtensionOpenPage",\n    title: "Open My Page",\n    contexts: ["all"],\n  });\n\n  chrome.contextMenus.create({\n    id: "Github",\n    title: "Open Github",\n    contexts: ["all"],\n    parentId: "myExtensionOpenPage",\n  });\n});\n\n// \u76d1\u542c\u4e0a\u4e0b\u6587\u83dc\u5355\u7684\u70b9\u51fb\u4e8b\u4ef6\nchrome.contextMenus.onClicked.addListener((info, tab) => {\n  if (info.menuItemId === "Github") {\n    // \u8981\u6253\u5f00\u7684\u9875\u9762 URL\n    const pageUrl = "https://creatorsdao.github.io/plasmo-co-learn/docs/intro/";\n\n    // \u6253\u5f00\u65b0\u6807\u7b7e\u9875\n    chrome.tabs.create({ url: pageUrl });\n  }\n});\n')),(0,a.kt)("p",null,"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0\u6743\u9650\u58f0\u660e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=package.json",title:"package.json"},'....\n"permissions": [\n      "tabs","commands"\n],\n....\n')),(0,a.kt)("p",null,"\u4ee5\u4e0a\u5c31\u521b\u5efa\u4e86\u4e00\u4e2a\u53f3\u952e\u8df3\u8f6c Github \u7684\u4e0a\u4e0b\u6587\u83dc\u5355\u3002"))}m.isMDXComponent=!0},4189:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/creators-e9ca3eb36a373cdcf0ea64aced818f7f.jpg"},9446:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/log-ed4ead263343d71e18ea0a2a0d747280.jpg"}}]);