"use strict";(self.webpackChunkplasmo_co_learn=self.webpackChunkplasmo_co_learn||[]).push([[906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=i(n),u=l,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:l,o[1]=p;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:3},o="\u5f00\u53d1\u5de5\u4f5c\u6d41",p={unversionedId:"module2/workflow",id:"module2/workflow",title:"\u5f00\u53d1\u5de5\u4f5c\u6d41",description:"\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd\u4f7f\u7528 plasmo \u5f00\u53d1\u6d4f\u89c8\u5668\u6269\u5c55\u7684\u5de5\u4f5c\u6d41\u3002",source:"@site/docs/module2/workflow.mdx",sourceDirName:"module2",slug:"/module2/workflow",permalink:"/plasmo-co-learn/docs/module2/workflow",draft:!1,editUrl:"https://github.com/CreatorsDAO/plasmo-co-learn/tree/main/docs/module2/workflow.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u5757\u4ecb\u7ecd",permalink:"/plasmo-co-learn/docs/module2/"},next:{title:"\u6d4f\u89c8\u5668\u5185\u7f6e\u9875\u9762",permalink:"/plasmo-co-learn/docs/module2/pages"}},s={},i=[{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"\u4f7f\u7528 <code>src</code> \u4f5c\u4e3a\u6e90\u7801\u76ee\u5f55",id:"\u4f7f\u7528-src-\u4f5c\u4e3a\u6e90\u7801\u76ee\u5f55",level:3},{value:"\u6307\u5b9a\u5165\u53e3\u6587\u4ef6",id:"\u6307\u5b9a\u5165\u53e3\u6587\u4ef6",level:3},{value:"\u4f7f\u7528\u6a21\u677f\u6587\u4ef6",id:"\u4f7f\u7528\u6a21\u677f\u6587\u4ef6",level:3},{value:"Development Sever",id:"development-sever",level:2},{value:"\u52a0\u8f7d\u6269\u5c55",id:"\u52a0\u8f7d\u6269\u5c55",level:3},{value:"\u9009\u62e9\u4e00\u4e2a\u6307\u5b9a\u7684\u76ee\u6807\u6587\u4ef6",id:"\u9009\u62e9\u4e00\u4e2a\u6307\u5b9a\u7684\u76ee\u6807\u6587\u4ef6",level:3},{value:"\u53bb\u6389 <code>source maps</code>",id:"\u53bb\u6389-source-maps",level:3},{value:"\u6307\u5b9a Server port \u548c websocket",id:"\u6307\u5b9a-server-port-\u548c-websocket",level:3},{value:"\u53d1\u5e03\u4e00\u4e2a\u4ea7\u54c1\u5305",id:"\u53d1\u5e03\u4e00\u4e2a\u4ea7\u54c1\u5305",level:2},{value:"\u5e38\u89c4\u7684 <code>build</code>",id:"\u5e38\u89c4\u7684-build",level:3},{value:"\u8bbe\u7f6e\u76ee\u6807",id:"\u8bbe\u7f6e\u76ee\u6807",level:3},{value:"\u6dfb\u52a0\u81ea\u5b9a\u4e49 tag",id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49-tag",level:3},{value:"\u53bb\u6389 source maps",id:"\u53bb\u6389-source-maps-1",level:3},{value:"\u5176\u4ed6\u4f18\u5316",id:"\u5176\u4ed6\u4f18\u5316",level:3}],m={toc:i},c="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5f00\u53d1\u5de5\u4f5c\u6d41"},"\u5f00\u53d1\u5de5\u4f5c\u6d41"),(0,l.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"plasmo")," \u5f00\u53d1\u6d4f\u89c8\u5668\u6269\u5c55\u7684\u5de5\u4f5c\u6d41\u3002"),(0,l.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,l.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u7684\u547d\u4ee4\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"plasmo")," \u9879\u76ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm create plasmo\n# OR\nyarn create plasmo\n# OR\nnpm create plasmo\n")),(0,l.kt)("p",null,"\u5982\u679c\uff0c\u8df3\u8fc7\u540d\u5b57\u7684\u63d0\u793a\uff0c\u6dfb\u52a0\u4e00\u4e2a\u6269\u5c55\u7684\u540d\u5b57\u5373\u53ef:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'pnpm create plasmo "My Awesome Extension"\n# OR\nyarn create plasmo "My Awesome Extension"\n# OR\nnpm create plasmo "My Awesome Extension"\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u4f60\u4e5f\u53ef\u4ee5\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"plasmo")," \u5b89\u88c5\u4e3a\u5168\u5c40\u7684\u5bf9\u8c61 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm i -g plasmo"),"\u3002")),(0,l.kt)("h3",{id:"\u4f7f\u7528-src-\u4f5c\u4e3a\u6e90\u7801\u76ee\u5f55"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h3"},"src")," \u4f5c\u4e3a\u6e90\u7801\u76ee\u5f55"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"plasmo")," \u4f7f\u7528\u5f53\u524d\u9879\u76ee\u7684\u6587\u4ef6\u5939\u4f5c\u4e3a\u4ee3\u7801\u6839\u76ee\u5f55\u3002 \u521b\u5efa\u9879\u76ee\u7684\u65f6\u5019\uff0c\u4f7f\u7528 --with-src \u53c2\u6570\u5373\u53ef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm create plasmo --with-src\n# OR\nyarn create plasmo --with-src\n# OR\nnpm create plasmo --with-src\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684\u9879\u76ee\u5df2\u7ecf\u521b\u5efa\u597d\u4e86\uff0c\u8bf7\u6309\u7167\u5982\u4e0b\u7684\u64cd\u4f5c:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u628a\u6240\u6709\u7684\u6e90\u7801\u590d\u5236\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"src")," \u76ee\u5f55\u3002\n\u7136\u540e\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," \uff1a \u539f\u6765\u6307\u5411 ",(0,l.kt)("inlineCode",{parentName:"li"},"~*")," \uff0c\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"./src/*")),(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 \u914d\u7f6e\u6587\u4ef6\u6e90\u7801\u90e8\u5206:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "extends": "plasmo/templates/tsconfig.base",\n  "exclude": ["node_modules"],\n  "include": [".plasmo/index.d.ts", "./**/*.ts", "./**/*.tsx"],\n  "compilerOptions": {\n    "paths": {\n      "~*": ["./src/*"]\n    },\n    "baseUrl": "."\n  }\n}\n')),(0,l.kt)("h3",{id:"\u6307\u5b9a\u5165\u53e3\u6587\u4ef6"},"\u6307\u5b9a\u5165\u53e3\u6587\u4ef6"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u7684\u5165\u53e3\u6587\u4ef6\u4e3a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.plasmo.com/framework/ext-pages#adding-a-popup-page"},"popup"),"\u3002\n\u4f60\u53ef\u4ee5\u4f7f\u7528 --entry \u8bbe\u7f6e\u4e0d\u540c\u7684\u5165\u53e3\u3002\n\u8fd9\u91cc\u5217\u51fa\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"plasmo")," \u652f\u6301\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/PlasmoHQ/plasmo/tree/main/packages/init/entries"},"entries"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm create plasmo --entry=options,newtab,contents/inline\n# OR\nnpm create plasmo -- --entry=options,newtab,contents/inline\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"npm \u4e0d\u652f\u6301 \u5411\u4ed6\u7684\u5b50\u547d\u4ee4\u76f4\u63a5\u4f20\u9012\u53c2\u6570\uff0c\u9700\u8981\u4f7f\u7528 -- \u8f6c\u79fb\u4f20\u9012\u7684\u53c2\u6570\u3002")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u6a21\u677f\u6587\u4ef6"},"\u4f7f\u7528\u6a21\u677f\u6587\u4ef6"),(0,l.kt)("p",null,"plasmo \u5b98\u65b9\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/PlasmoHQ/examples/"},"\u6a21\u677f\u5217\u8868"),"\u3002\u53ef\u4ee5\u9009\u62e9\u4e0d\u540c\u7684\u6a21\u677f\u7c7b\u578b\u521d\u59cb\u5316:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm create plasmo --with-env\n# OR\nnpm create plasmo -- --with-env\n")),(0,l.kt)("h2",{id:"development-sever"},"Development Sever"),(0,l.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\u7684\u547d\u4ee4\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm dev\n# OR\nnpm run dev\n# OR\nplasmo dev\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Plasmo")," \u5c06\u4e3a\u60a8\u7684\u6269\u5c55\u521b\u5efa\u4e00\u4e2a\u5f00\u53d1\u6587\u4ef6\u5939\u548c\u4e00\u4e2a\u5b9e\u65f6\u91cd\u8f7d\u5f00\u53d1\u670d\u52a1\u5668(\u4e00\u4e2a websocket \u670d\u52a1\u5668)\uff0c\u6587\u4ef6\u66f4\u6539\u65f6\u81ea\u52a8\u66f4\u65b0\u60a8\u7684\u5f00\u53d1\u6587\u4ef6\u5939\u3002\n\u66f4\u65b9\u4fbf\u7684\u662f\u5f53\u4f60\u4fee\u6539\u6e90\u4ee3\u7801\u66f4\u6539\u65f6\u91cd\u65b0\u52a0\u8f7d\u6d4f\u89c8\u5668\u3002\n\u5b83\u8fd8\u4f1a\u5728\u6269\u5c55\u540d\u524d\u52a0\u4e0a DEV | \u5e76\u4f7f\u56fe\u6807\u53d8\u6210\u7070\u5ea6\uff0c\u4ee5\u533a\u5206\u5f00\u53d1\u548c\u751f\u4ea7\u6269\u5c55\u6346\u7ed1\u5305\u3002"),(0,l.kt)("h3",{id:"\u52a0\u8f7d\u6269\u5c55"},"\u52a0\u8f7d\u6269\u5c55"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"chrome://extensions")," \u6253\u5f00\u8bbe\u7f6e\u9875\u9762\u542f\u7528\u5f00\u53d1\u8005\u6a21\u5f0f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"dev mode",src:n(9027).Z,width:"690",height:"624"})),(0,l.kt)("p",null,"\u70b9\u51fb\u9875\u9762 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u52a0\u8f7d\u5df2\u89e3\u538b\u7684\u6269\u5c55\u7a0b\u5e8f")," \u9009\u9879\uff0c\u5728\u5f39\u51fa\u7684\u6587\u4ef6\u5bfc\u822a\u4e2d\u5b9a\u4f4d\u5230\u9879\u76ee\u7684\u5f00\u53d1\u76ee\u5f55\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u6587\u4ef6\u5939\u3002"),(0,l.kt)("p",null,"\u5176\u4e2d\u53ef\u80fd\u6709\u4e24\u4e2a\u6587\u4ef6\u5939:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"chrome-mv3-dev")," \u4e3a\u5f00\u53d1\u76ee\u5f55\uff0c\u4e3a\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u7684\u76ee\u5f55\u3002 ",(0,l.kt)("inlineCode",{parentName:"li"},"run dev")," \u7684\u65f6\u5019\u4f1a\u540c\u65f6\u89e6\u53d1\u4e00\u4e2a\u548c\u9875\u9762\u8fde\u63a5\u7684 websocket,\u66f4\u65b0\u6269\u5c55\u7684\u65f6\u5019\uff0c\u9664\u4e86\u4f1a\u91cd\u65b0\u6253\u5305\u6269\u5c55\u4ee5\u5916\u3002\n\u9875\u9762\u4e5f\u4f1a\u6709\u6240\u53cd\u9988\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"chrome-mv3-prod")," \u8fd9\u91cc\u4e3a\u4ea7\u54c1\u76ee\u5f55\uff0c\u4e0e\u7ebf\u4e0a\u53d1\u5e03\u540e\u7684\u771f\u5b9e\u60c5\u51b5\u6ca1\u6709\u533a\u522b\uff0c\u4e5f\u53ef\u4ee5\u5c0f\u8303\u56f4\u4f7f\u7528\u5206\u53d1\u6d4b\u8bd5\u3002")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u6709\u65f6\u4f60\u65e0\u6cd5\u5728 chrome \u4e2d\u770b\u5230\u4f60\u7684\u6269\u5c55\u3002\u5728 chrome \u5bfc\u822a\u680f\u7684\u8bbe\u7f6e\u4e2d\u70b9\u5f00\uff0c\u9009\u62e9 Pin \u5373\u53ef\u663e\u793a\u51fa\u6765\u3002\n",(0,l.kt)("img",{alt:"dev mode",src:n(1622).Z,width:"495",height:"641"}))),(0,l.kt)("h3",{id:"\u9009\u62e9\u4e00\u4e2a\u6307\u5b9a\u7684\u76ee\u6807\u6587\u4ef6"},"\u9009\u62e9\u4e00\u4e2a\u6307\u5b9a\u7684\u76ee\u6807\u6587\u4ef6"),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"plasmo")," \u5f00\u53d1\u6846\u67b6\uff0c\u4e0d\u53ea\u662f\u4e00\u4e2a Chrome \u6269\u5c55\u6216\u8005 Firefox \u6269\u5c55\u3002 \u4ed6\u5e94\u8be5\u79f0\u4e4b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"plasmo"),"\u6269\u5c55\u3002\n\u8fd9\u4e5f\u610f\u5473\u7740\uff0c\u4f60\u53ef\u4ee5\u4f60\u53ef\u4ee5\u6253\u5305\u51fa\u6240\u6709\u652f\u6301\u7684\u6d4f\u89c8\u5668\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--target")," \u53c2\u6570\u6765\u5236\u5b9a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"plasmo dev --target=firefox-mv2\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.plasmo.com/framework/workflows/faq#what-are-the-officially-supported-browser-targets"},"\u652f\u6301\u7684\u76ee\u6807\u6d4f\u89c8\u5668\u5217\u8868")),(0,l.kt)("h3",{id:"\u53bb\u6389-source-maps"},"\u53bb\u6389 ",(0,l.kt)("inlineCode",{parentName:"h3"},"source maps")),(0,l.kt)("p",null,"source maps \u4e3a\u8c03\u5236\u7a0b\u5e8f\u7684\u65f6\u5019\uff0c\u4ed6\u4f1a\u5f71\u54cd\u6269\u5c55\u7684\u52a0\u8f7d\u987a\u5e8f\u3002\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-source-maps")," \u53bb\u6389"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"plasmo dev --no-source-maps\n")),(0,l.kt)("h3",{id:"\u6307\u5b9a-server-port-\u548c-websocket"},"\u6307\u5b9a Server port \u548c websocket"),(0,l.kt)("p",null,"\u6309\u7167\u5982\u4e0b\u7684\u547d\u4ee4\u4fee\u6539 \u542f\u52a8\u7684 Server port \u548c websocket \u7aef\u53e3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"plasmo dev --serve-host=localhost --serve-port-1012\nplasmo dev --hmr-host=localhost --hmr-port=1815\n")),(0,l.kt)("h2",{id:"\u53d1\u5e03\u4e00\u4e2a\u4ea7\u54c1\u5305"},"\u53d1\u5e03\u4e00\u4e2a\u4ea7\u54c1\u5305"),(0,l.kt)("h3",{id:"\u5e38\u89c4\u7684-build"},"\u5e38\u89c4\u7684 ",(0,l.kt)("inlineCode",{parentName:"h3"},"build")),(0,l.kt)("p",null,"\u4ea7\u54c1\u5305 ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," \u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm build\n# OR\nnpm run build\n")),(0,l.kt)("p",null,"\u751f\u6210 zip \u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm package\n# OR\nnpm run package\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u4e24\u6b65\u4e5f\u53ef\u4ee5\u5408\u6210\u4e00\u6b65"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm build --zip\n# OR\nnpm run build -- --zip\n")),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u76ee\u6807"},"\u8bbe\u7f6e\u76ee\u6807"),(0,l.kt)("p",null,"\u540c dev \u4e00\u6837\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--target")," \u8bbe\u7f6e\u76ee\u6807"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"plasmo build --target=firefox-mv2\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.plasmo.com/framework/workflows/faq#what-are-the-officially-supported-browser-targets"},"\u652f\u6301\u5217\u8868")),(0,l.kt)("h3",{id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49-tag"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49 tag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"plasmo build --tag=staging\n")),(0,l.kt)("p",null,"\u5c06\u4f1a\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"build/chrome-mv3-staging")," \u76ee\u5f55\u3002"),(0,l.kt)("h3",{id:"\u53bb\u6389-source-maps-1"},"\u53bb\u6389 source maps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"plasmo build --source-maps\n")),(0,l.kt)("h3",{id:"\u5176\u4ed6\u4f18\u5316"},"\u5176\u4ed6\u4f18\u5316"),(0,l.kt)("p",null,"\u5173\u95ed minification (\u4e00\u79cd\u4ee3\u7801\u538b\u7f29\u6280\u672f)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"plasmo build --no-minify\n")),(0,l.kt)("p",null,"\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"hoisting")," \u7684\u6280\u672f\u3002\n\u5728 JavaScript \u548c\u6d4f\u89c8\u5668\u6269\u5c55\u5f00\u53d1\u4e2d\uff0choisting \u6307\u7684\u662f\u63d0\u5347\u6a21\u5757\u4f9d\u8d56\u9879\u7684\u8fc7\u7a0b\uff0c\u4f7f\u5f97\u88ab\u591a\u4e2a\u6587\u4ef6\u5171\u540c\u4f9d\u8d56\u7684\u6a21\u5757\u53ea\u9700\u8981\u52a0\u8f7d\u4e00\u6b21\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"plasmo build --hoist\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u7684\u4e24\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\u3002"))}d.isMDXComponent=!0},9027:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devmod-0154a12bc307a9ff9eed9d1959254249.jpg"},1622:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/show_extension-2ff6d404b47d0c027ee3105fe0104d5a.jpg"}}]);