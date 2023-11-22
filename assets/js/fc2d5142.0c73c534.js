"use strict";(self.webpackChunkplasmo_co_learn=self.webpackChunkplasmo_co_learn||[]).push([[2336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},l="10 \u5206\u949f React",p={unversionedId:"module1/basic_react",id:"module1/basic_react",title:"10 \u5206\u949f React",description:"\u6d4f\u89c8\u5668\u6269\u5c55\u662f\u4e00\u4e2a\u524d\u7aef\u5bc6\u96c6\u578b\u9879\u76ee\u3002",source:"@site/docs/module1/basic_react.mdx",sourceDirName:"module1",slug:"/module1/basic_react",permalink:"/plasmo-co-learn/docs/module1/basic_react",draft:!1,editUrl:"https://github.com/CreatorsDAO/plasmo-co-learn/tree/main/docs/module1/basic_react.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u4f60\u7684\u7b2c\u4e00\u4e2a\u6d4f\u89c8\u5668\u6269\u5c55",permalink:"/plasmo-co-learn/docs/module1/first-extension"},next:{title:"\u6a21\u5757\u4ecb\u7ecd",permalink:"/plasmo-co-learn/docs/module2/"}},c={},i=[{value:"\u9879\u76ee\u521b\u5efa",id:"\u9879\u76ee\u521b\u5efa",level:2},{value:"\u57fa\u672c\u7ec4\u4ef6",id:"\u57fa\u672c\u7ec4\u4ef6",level:2},{value:"\u7ec4\u4ef6\u53c2\u6570",id:"\u7ec4\u4ef6\u53c2\u6570",level:2},{value:"\u7ec4\u4ef6 hook",id:"\u7ec4\u4ef6-hook",level:2},{value:"\u8def\u7531\u7ec4\u4ef6",id:"\u8def\u7531\u7ec4\u4ef6",level:2},{value:"\u72b6\u6001\u4fdd\u5b58",id:"\u72b6\u6001\u4fdd\u5b58",level:2},{value:"\u4f18\u5316\u8d44\u6e90\u52a0\u8f7d",id:"\u4f18\u5316\u8d44\u6e90\u52a0\u8f7d",level:2}],s={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"10-\u5206\u949f-react"},"10 \u5206\u949f React"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6d4f\u89c8\u5668\u6269\u5c55\u662f\u4e00\u4e2a\u524d\u7aef\u5bc6\u96c6\u578b\u9879\u76ee\u3002\n\u6b63\u5f0f\u5f00\u59cb\u4e4b\u524d\uff0c\u5e0c\u671b\u4f60\u4e86\u89e3\u4e00\u4e9b\u7b80\u5355\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," \u76f8\u5173\u77e5\u8bc6\u3002\n\u8fd9\u4e2a\u6781\u901f\u6559\u7a0b\u662f\u4f5c\u8005\u81ea\u5df1\u6536\u96c6\u6574\u7406\u7684\uff0c\u4e0d\u80fd\u8ba9\u4f60\u6210\u4e3a\u524d\u7aef\u4e13\u5bb6\uff0c\u53ea\u662f\u8ba9\u4f60\u5bf9 React \u7684\u76f8\u5173\u6982\u5ff5\u6709\u6240\u4e86\u89e3\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u540c\u65f6\uff0c\u53ef\u4ee5\u5173\u6ce8\u6211\u4eec\u540e\u7eed\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CreatorsDAO/front-end-co-learning"},(0,r.kt)("strong",{parentName:"a"},"\u524d\u7aef\u5171\u5b66")))),(0,r.kt)("h2",{id:"\u9879\u76ee\u521b\u5efa"},"\u9879\u76ee\u521b\u5efa"),(0,r.kt)("p",null,"\u9879\u76ee\u521b\u5efa\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," \u63d0\u4f9b\u7684 (create-react-app)","[https://create-react-app.dev/]","\u811a\u624b\u67b6\u3002\n\u6216\u8005\uff0c\u4f60\u4e5f\u53ef\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/"},"vite")," \u4e24\u79cd\u65b9\u5f0f\u6765\u5b8c\u6210\u9879\u76ee\u7684\u521d\u59cb\u5316\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app my-app\npnpm create vite\n")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"vite"),"\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c\u8bb0\u5f97\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"React"),"\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Typescript")," \u9879\u76ee\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u61d2\u5f97\u6298\u817e\u672c\u5730\u7684\u73af\u5883\uff0c\u6216\u8005\u60f3\u62e5\u6709\u4e00\u4e2a\u968f\u65f6\u968f\u5730\u7f16\u8f91\u7684\u4e91\u7aef\u9879\u76ee\uff0c\u4f60\u53ef\u4ee5\u5c1d\u8bd5 ",(0,r.kt)("a",{parentName:"p",href:"https://stackblitz.com/"},"stackblitz"),", \u8fd9\u91cc\u6709\u4e30\u5bcc\u7684\u524d\u7aef\u8d44\u6e90\u3002")),(0,r.kt)("h2",{id:"\u57fa\u672c\u7ec4\u4ef6"},"\u57fa\u672c\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u9879\u76ee\u521d\u59cb\u5316\u5b8c\u6210\u540e\u7684\u6587\u4ef6\u5927\u4f53\u7ed3\u6784\u7c7b\u4f3c\uff0c\u6211\u4eec\u62ff\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"vite")," \u521b\u5efa\u7684 react \u9879\u76ee\u4e3e\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},".\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502\xa0\xa0 \u2514\u2500\u2500 vite.svg\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.css\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.tsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 react.svg\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.css\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.tsx\n\u2502\xa0\xa0 \u2514\u2500\u2500 vite-env.d.ts\n\u251c\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 tsconfig.node.json\n\u2514\u2500\u2500 vite.config.ts\n")),(0,r.kt)("p",null,"src \u5185\u90e8\u4e00\u822c\u4f1a\u6709\u4e00\u4e2a\u9690\u85cf\u7684\u4e3b\u5165\u53e3\u6587\u4ef6 \u8fd9\u91cc\u662f main.tsx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Typescript"},"import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport App from './App.tsx'\nimport './index.css'\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n)\n")),(0,r.kt)("p",null,"\u5927\u591a\u6570 React \u9879\u76ee\u4f9d\u8d56\u4e8e\u6838\u5fc3\u7c7b\u5e93",(0,r.kt)("inlineCode",{parentName:"p"},"ReactDOM"),",\u4ed6\u4e5f\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"React"),"\u6846\u67b6\u7684\u4e00\u90e8\u5206\u3002 App.tsx \u4e2d\u5b9a\u4e49\u81ea\u5df1\u7684\u5e94\u7528\u7ec4\u4ef6\u3002\n\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactDOM.createRoot")," \u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," \u7ed3\u6784\uff0c\u628a\u540e\u7eed\u7684 React \u7ec4\u4ef6\u6302\u8f7d\u5230 html dom \u4e2d\uff0c\u5b8c\u6210 UI \u5c55\u793a\u3002"),(0,r.kt)("p",null,"App \u7ec4\u4ef6\u7684\u4ee3\u7801\u5728 App.tsx \u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Typescript"},'function App() {\n  const [count, setCount] = useState(0)\n\n  return (\n    <>\n      <div>\n        <a href="https://vitejs.dev" target="_blank">\n          <img src={viteLogo} className="logo" alt="Vite logo" />\n        </a>\n        <a href="https://react.dev" target="_blank">\n          <img src={reactLogo} className="logo react" alt="React logo" />\n        </a>\n      </div>\n      <h1>Vite + React</h1>\n      <div className="card">\n        <button onClick={() => setCount((count) => count + 1)}>\n          count is {count}\n        </button>\n        <p>\n          Edit <code>src/App.tsx</code> and save to test HMR\n        </p>\n      </div>\n      <p className="read-the-docs">\n        Click on the Vite and React logos to learn more\n      </p>\n    </>\n  )\n}\n\nexport default App\n')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u6587\u4ef6 \u901a\u8fc7 export \u5bf9\u5916\u5230\u5904\u4e00\u4e2a \u51fd\u6570\u7ec4\u4ef6\uff0c\u8fd9\u4e2a\u51fd\u6570\u7ec4\u4ef6\u8fd4\u56de\u4e86\u4e00\u4e2a React Dom \u7ed3\u6784\u3002\n\u4f60\u5e94\u8be5\u770b\u7740\u5f88\u773c\u719f\uff0c\u5185\u90e8\u57fa\u672c\u4e0a\u662f\u7c7b\u4f3c HTML \u4ee3\u7801\u7684\u6a21\u7248\u7ed3\u6784\u3002"),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u53c2\u6570"},"\u7ec4\u4ef6\u53c2\u6570"),(0,r.kt)("p",null,"\u7c7b\u4f3c\u4e0a\u8fb9\u4ecb\u7ecd\u7684 App \u7ec4\u4ef6\uff0c\u4ed6\u5728 main.tsx \u4e2d\u901a\u8fc7 HTML \u6807\u7b7e\u7684\u65b9\u5f0f\u4f7f\u7528\u3002\u90a3\u4e48\u600e\u4e48\u4f20\u9012\u53c2\u6570\u5462\uff1f\n\u8fd9\u4e2a\u53c2\u6570\u653e\u5728\u51fd\u6570\u5f0f\u7ec4\u4ef6\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570 props,\u5e76\u4e14\u4f4d\u7f6e\u4e0d\u53ef\u53d8\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Typescript"},"function Example(props: any) {\n  return (\n    <p>{props.msg}</p>\n  )\n}\n\nexport default Example;\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u5b9a\u4e49\u4e86\u4e00\u4e2a Example \u7ec4\u4ef6\uff0c\u63a5\u53d7\u4efb\u610f\u7c7b\u578b\u7684\u53c2\u6570\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Typescript \u4e2d\u7c7b\u578b\u4e0d\u597d\u6807\u8bc6\uff0c\u6216\u8005\u61d2\u5f97\u8bbe\u7f6e\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4f7f\u7528 any \u4ee3\u66ff\u3002 \ud83d\ude04")),(0,r.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\u4e5f\u5f88\u7b80\u5355\u3002\u6309\u9700\u5f15\u5165\u4ee5\u540e\uff0c\u76f4\u63a5\u4f7f\u7528 Example \u6807\u7b7e\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Typescript"},'<Example msg="hello world"/>\n')),(0,r.kt)("h2",{id:"\u7ec4\u4ef6-hook"},"\u7ec4\u4ef6 hook"),(0,r.kt)("p",null,"\u51fd\u6570\u5f0f\u7ec4\u4ef6\uff0c\u901a\u8fc7 useXXX \u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5b8c\u6210\u4e8b\u4ef6\u7684\u76f8\u5173\u7ed1\u5b9a\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4ecb\u7ecd\u4e24\u4e2a\u91cd\u8981\u7684 hook:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacy.reactjs.org/docs/hooks-state.html"},"useState"))),(0,r.kt)("p",null,"\u7528\u6765\u505a\u7ec4\u4ef6\u5185\u7684\u72b6\u6001\u5b58\u50a8\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Typescript"},'function Example() {\n  // Declare a new state variable, which we\'ll call "count"\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,"useState \u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff0c\u7528\u6765\u505a\u72b6\u6001\u6570\u636e\u7684\u521d\u59cb\u5316\uff0c\u8fd4\u56de\u4e24\u4e2a\u503c\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u503c\u4f5c\u4e3a\u5f53\u524d state \u7684\u53d8\u91cf\u540d(\u6bd4\u5982\u4ee5\u4e0a\u7684 count)\uff0c\u53ef\u4ee5\u6ce8\u5165\u5230\u8fd4\u56de\u7684\u6a21\u7248\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53e6\u4e00\u4e2a\u662f\u72b6\u6001\u53d8\u66f4\u7684\u56de\u8c03 (\u6bd4\u5982\u4ee5\u4e0a\u7684 setCount) ,\u7ec4\u4ef6\u4e2d\u53ef\u901a\u8fc7\u4e8b\u4ef6\u7684\u5904\u7406\u6bd4\u5982 onClick \u8c03\u7528\u56de\u8c03\uff0c\u6539\u53d8\u7ec4\u4ef6\u72b6\u6001\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacy.reactjs.org/docs/hooks-reference.html#useeffect"},"useEffect"))),(0,r.kt)("p",null,"\u8fd9\u4e2a\u76f8\u5bf9\u590d\u6742\u4e00\u4e9b\uff0c\u6807\u8bc6\u5f53\u5173\u6ce8\u7684\u72b6\u6001\u53d8\u66f4\u7684\u65f6\u5019\u6267\u884c\u7684\u4e1a\u52a1\u903b\u8f91\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Typescript"},'function Example() {\n  // Declare a new state variable, which we\'ll call "count"\n  const [count, setCount] = useState(0);\n\n  useEffect(function(){\n    console.log(count);\n  },[count])\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,"\u4ee5\u4e0a\u7684\u4ee3\u7801\u8868\u793a\uff0c\u5f53\u72b6\u6001\u6570\u636e count \u53d8\u66f4\u7684\u65f6\u5019\uff0c\u89e6\u53d1\u6267\u884c\u7684\u903b\u8f91\u3002\n\u5982\u679c\u5173\u6ce8\u7684\u72b6\u6001 count \u4e3a\u7a7a\uff0c\u5219\u8868\u793a\uff0c\u5728\u7ec4\u4ef6\u52a0\u8f7d\u7684\u65f6\u5019\u6267\u884c\u4e00\u6b21\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a onload\u3002"),(0,r.kt)("h2",{id:"\u8def\u7531\u7ec4\u4ef6"},"\u8def\u7531\u7ec4\u4ef6"),(0,r.kt)("p",null,"React \u7684\u4e00\u5927\u573a\u666f\u662f\u6784\u5efa SPA \u5e94\u7528(\u5355\u9875\u9762\u5e94\u7528)\u3002\u8fd9\u65f6\u5019\u7ec4\u4ef6\u5207\u6362\u5373\u6210\u4e3a\u4e00\u4e2a\u95ee\u9898\u3002\u63a8\u8350\u5927\u5bb6\u4f7f\u7528"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main"},"react router")," \u6765\u5b8c\u6210\u7ec4\u4ef6\u95f4\u7684\u6570\u636e\u5207\u6362\u3002"),(0,r.kt)("h2",{id:"\u72b6\u6001\u4fdd\u5b58"},"\u72b6\u6001\u4fdd\u5b58"),(0,r.kt)("p",null,"\u5355\u7ec4\u4ef6\u7684\u72b6\u6001\u53ef\u4ee5\u4f7f\u7528 useState \u6765\u505a\uff0c\u8de8\u7ec4\u4ef6\u72b6\u6001\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://jotai.org/"},"jotai")," \u6765\u505a\u3002"),(0,r.kt)("h2",{id:"\u4f18\u5316\u8d44\u6e90\u52a0\u8f7d"},"\u4f18\u5316\u8d44\u6e90\u52a0\u8f7d"),(0,r.kt)("p",null,"react \u5e94\u7528\u4e2d\u7f51\u7edc\u8d44\u6e90\u7684\u52a0\u8f7d\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/quick-start"},"react query")," \u6765\u505a\u3002"))}m.isMDXComponent=!0}}]);