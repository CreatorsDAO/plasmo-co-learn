"use strict";(self.webpackChunkplasmo_co_learn=self.webpackChunkplasmo_co_learn||[]).push([[2416],{9394:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=s(4848),l=s(8453);const o={sidebar_position:5},r="Message API",i={id:"module4/message",title:"Message API",description:"Plasmo \u63d0\u4f9b\u4e86\u5c01\u88c5\u597d\u7684 Message API , \u8fd9\u8ba9\u6269\u5c55\u5404\u4e2a\u6a21\u5757\u4e4b\u95f4\u901a\u4fe1\u53d8\u5f97\u7b80\u5355\u3002",source:"@site/docs/module4/message.mdx",sourceDirName:"module4",slug:"/module4/message",permalink:"/plasmo-co-learn/docs/module4/message",draft:!1,unlisted:!1,editUrl:"https://github.com/CreatorsDAO/plasmo-co-learn/tree/main/docs/module4/message.mdx",tags:[],version:"current",lastUpdatedAt:1723020542,formattedLastUpdatedAt:"Aug 7, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Background Service Worker",permalink:"/plasmo-co-learn/docs/module4/background"}},d={},a=[{value:"\u5b89\u88c5\u6a21\u5757",id:"\u5b89\u88c5\u6a21\u5757",level:2},{value:"\u6a21\u5757\u53ca\u901a\u4fe1\u89c4\u5219",id:"\u6a21\u5757\u53ca\u901a\u4fe1\u89c4\u5219",level:2},{value:"\u5b98\u65b9\u793a\u4f8b",id:"\u5b98\u65b9\u793a\u4f8b",level:2},{value:"Message Flow",id:"message-flow",level:2},{value:"Relay Flow",id:"relay-flow",level:2},{value:"Ports",id:"ports",level:2},{value:"\u4f7f\u7528 getPort \u51fd\u6570",id:"\u4f7f\u7528-getport-\u51fd\u6570",level:3},{value:"\u4f7f\u7528 <code>usePort</code> \u7684 <code>React API</code>",id:"\u4f7f\u7528-useport-\u7684-react-api",level:3},{value:"Initial Type Error",id:"initial-type-error",level:2},{value:"E2E Type Safety (WIP) \u70b9\u5bf9\u70b9\u7c7b\u578b\u5b89\u5168",id:"e2e-type-safety-wip-\u70b9\u5bf9\u70b9\u7c7b\u578b\u5b89\u5168",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"message-api",children:"Message API"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Plasmo"})," \u63d0\u4f9b\u4e86\u5c01\u88c5\u597d\u7684 Message API , \u8fd9\u8ba9\u6269\u5c55\u5404\u4e2a\u6a21\u5757\u4e4b\u95f4\u901a\u4fe1\u53d8\u5f97\u7b80\u5355\u3002\n\u5728\u4f60\u7684 ",(0,t.jsx)(n.code,{children:"Plasmo"}),"\u9879\u76ee\u76ee\u5f55\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"background"})," \u76ee\u5f55\uff0c\u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:"Message"})," \u6587\u4ef6\u76ee\u5f55\uff0c ",(0,t.jsx)(n.code,{children:"Plasmo"})," \u5c06\u4e3a\u4f60\u5b8c\u6210\u5269\u4f59\u7684\u5de5\u4f5c\u3002\n",(0,t.jsx)(n.code,{children:"Plasmo"})," \u63d0\u4f9b\u58f0\u660e\u5f0f\u7684\u3001\u7c7b\u578b\u5b89\u5168\u7684 \u51fd\u6570\u7ed3\u6784\uff0c\u540c\u65f6\u63d0\u4f9b ",(0,t.jsx)(n.code,{children:"Promise"}),"\u7ed3\u6784\u7684\u5f02\u6b65\u51fd\u6570\u6267\u884c\u7ed3\u6784\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88c5\u6a21\u5757",children:"\u5b89\u88c5\u6a21\u5757"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pnpm install @plasmohq/messaging\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u5728\u4f60\u7684 ",(0,t.jsx)(n.code,{children:"Plasmo"})," \u7684 ",(0,t.jsx)(n.code,{children:"background"})," \u76ee\u5f55 \u521b\u5efa messages \u6a21\u5757\u3002\n\u5982\u679c\u4f60\u4f7f\u7528\u4e86 ",(0,t.jsx)(n.code,{children:"background.ts"}),", \u90a3\u4e48\u4f60\u9700\u8981\u521b\u5efa ",(0,t.jsx)(n.code,{children:"background"})," \u76ee\u5f55\uff0c \u5176\u4e2d\u521b\u5efa ",(0,t.jsx)(n.code,{children:"index.ts"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6a21\u5757\u53ca\u901a\u4fe1\u89c4\u5219",children:"\u6a21\u5757\u53ca\u901a\u4fe1\u89c4\u5219"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Messaging API"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"From"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"To"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"One-time"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Long-lived"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.a,{href:"#message-flow",children:"Message Flow"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Ext-Pages/CS"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"BGSW"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.a,{href:"#relay-flow",children:"Relay Flow"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Website"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"CS/BGSW"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.a,{href:"#ports",children:"Ports"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Ext-Pages/CS"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"BGSW"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"No"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Ports"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"BGSW"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Ext-Pages/CS"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"No"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Ports + Relay"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"BGSW"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"WebPage"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b98\u65b9\u793a\u4f8b",children:"\u5b98\u65b9\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5b98\u65b9\u793a\u4f8b : ",(0,t.jsx)(n.a,{href:"https://github.com/PlasmoHQ/examples/tree/main/with-messaging",children:"with-messaging"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"message-flow",children:"Message Flow"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Message Flow"})," \u53ef\u4ee5\u5b8c\u6210\u6269\u5c55\u7ec4\u4ef6\u95f4\u7684\u4e00\u6b21\u6027\u901a\u4fe1\u3002 \u8fd9\u662f\u4e00\u79cd\u548c\u666e\u901a\u7684 API \u63a5\u53e3\u975e\u5e38\u76f8\u4f3c\u7684\u4e00\u79cd\u4ea4\u4e92\u65b9\u5f0f\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u901a\u4fe1\u53cc\u65b9\u53ef\u4ee5\u662f ",(0,t.jsx)(n.code,{children:"tab page"}),"\u3001",(0,t.jsx)(n.code,{children:"content script"}),"\u76f8\u5f53\u4e8e\u6211\u4eec\u7684\u524d\u7aef\u9875\u9762\uff0c ",(0,t.jsx)(n.code,{children:"background service worker"})," \u76f8\u5f53\u4e8e\u6211\u4eec\u7684\u540e\u7aef API \u63a5\u53e3\u3002\n\u8fd9\u79cd\u901a\u4fe1\u89c4\u5219\uff0c\u53ef\u4ee5\u628a\u5927\u91cf\u7684\u6570\u636e\u8ba1\u7b97\u6216\u8005\u56e0\u4e3a CORS \u89c4\u5219\u65e0\u6cd5\u8c03\u7528\u7684\u51fd\u6570\u653e\u5230",(0,t.jsx)(n.code,{children:"background"}),"\u4e2d\u53bb\u5b8c\u6210\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"background service"})," \u7684\u5de5\u4f5c\u51fd\u6570\u662f\u4e00\u4e2a\u4fe1\u606f\u4e2d\u5fc3\uff0c\u6bcf\u4e2a\u670d\u52a1\u90fd\u5305\u542b\u4e00\u4e2a Rest API \u6837\u5f0f\u7684\u5904\u7406\u5668\u3002\n\u4f60\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5728 ",(0,t.jsx)(n.code,{children:"background/messages"})," \u521b\u5efa\u4e00\u4e2a ts \u6a21\u5757\uff0c\u6587\u4ef6\u540d\u5c06\u4f1a\u662f message \u7684\u540d\u5b57\uff0c\u9ed8\u8ba4\u5bfc\u51fa\u7684\u51fd\u6570\u5fc5\u987b\u662f\u51fd\u6570\u5904\u7406\u5668\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="background/messages/ping.ts"',children:'import type { PlasmoMessaging } from "@plasmohq/messaging";\n\nconst handler: PlasmoMessaging.MessageHandler = async (req, res) => {\n  const message = await querySomeApi(req.body.id);\n\n  res.send({\n    message,\n  });\n};\n\nexport default handler;\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0a\u662f\u7c7b\u4f3c\u7684\u540e\u7aef API \u63a5\u53e3\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u4ecb\u7ecd \u5982\u4f55\u8c03\u7528\u3002\n\u5728 \u6269\u5c55\u9875\u9762\u3001Content Script \u6216\u8005 tab page \u4e2d\u6211\u4eec\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"@plasmohq/messaging"})," \u7684 API \u53d1\u8d77\u4ea4\u4e92\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,t.jsx)(n.code,{children:"Plasmo"})," \u5728\u540e\u53f0\u53ef\u4ee5\u89e3\u6790\u6211\u4eec\u7684 Service \u8c03\u7528\uff0c\u4f60\u4f7f\u7528\u7684 IDE \u89e6\u53d1\u6d88\u606f\u540d\u79f0\u7684\u63d0\u793a\u611f\u77e5\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="popup.tsx"',children:'import { sendToBackground } from "@plasmohq/messaging"\n\n...\nconst resp = await sendToBackground({\n  name: "ping",\n  body: {\n    id: 123\n  }\n})\n\nconsole.log(resp)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u4ece\u524d\u7aef\u7684 ",(0,t.jsx)(n.code,{children:"content script"})," \u5411\u540e\u7aef\u53d1\u8d77\u4ea4\u4e92\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u4f60\u7684 \u6269\u5c55 ID\u3002\n\u4f60\u770b\u7684\u6269\u5c55 ID \u53ef\u4ee5\u901a\u8fc7\uff0c ",(0,t.jsx)(n.code,{children:"chrome://extensions"})," \u6269\u5c55\u7ba1\u7406\u9875\u9762\u83b7\u5f97\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="contents/componentInTheMainWorld.tsx"',children:'import { sendToBackground } from "@plasmohq/messaging"\nimport type { PlasmoCSConfig } from "plasmo"\n\nexport const config: PlasmoCSConfig = {\n  matches: ["<all_urls>"],\n  world: "MAIN"\n}\n...\nconst resp = await sendToBackground({\n  name: "ping",\n  body: {\n    id: 123\n  },\n  extensionId: \'llljfehhnoeipgngggpomjapaakbkyyy\' // find this in chrome\'s extension manager\n})\n\nconsole.log(resp)\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"\u8fd9\u6837\uff0c\u81ea\u7136\u4e5f\u5e26\u6765\u4e86\u4e00\u4e2a\u95ee\u9898\u3002\u6269\u5c55 ID \u600e\u4e48\u83b7\u5f97\u5462\uff1f"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5f00\u53d1\u9636\u6bb5\u4f60\u53ef\u4ee5\u901a\u8fc7\uff0c\u6269\u5c55\u7ba1\u7406\u5668\u4e2d\u83b7\u5f97\uff0c\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4fdd\u6301\u4e0d\u53d8\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u53d1\u5e03\u540e\u600e\u4e48\u83b7\u5f97\u5462\uff1f\n\u5728\u6269\u5c55\u7684\u76f8\u5173\u9875\u9762\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"chrome.runtime.id"})," \u83b7\u53d6\u5230\u3002"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"relay-flow",children:"Relay Flow"}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u6a21\u5757\u76ee\u524d\u8fd8\u5904\u4e8e Alpha \u9636\u6bb5\uff0c\u53ef\u80fd\u6709 Bug \uff0c\u540c\u65f6 \u540e\u671f\u7684 API \u4e5f\u53ef\u80fd\u4f1a\u53d8\u5316\u3002\u8bf7\u8c28\u614e\u4f7f\u7528\u3002"}),(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u968f\u65f6\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"https://docs.plasmo.com/bug",children:"https://docs.plasmo.com/bug"})," \u53cd\u9988\u4f60\u9047\u5230\u7684 Bug \u6216\u8005\u5176\u4ed6\u95ee\u9898\u3002"]})]}),"\n",(0,t.jsx)(n.p,{children:"\u540c Message Flow \u7684\u533a\u522b:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8c03\u7528\u65b9\u4e0d\u540c\u3002 Message Flow \u7684\u8c03\u7528\u6765\u6e90\uff0c\u53ea\u80fd\u662f \u6269\u5c55\u9875\u9762\u6216\u8005 ",(0,t.jsx)(n.code,{children:"Content Script"}),"\u3002 \u800c Relay Flow \u7684\u6765\u6e90\u662f\u7f51\u7ad9\u9875\u9762\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u8fd0\u884c\u4f4d\u7f6e\u4e0d\u540c\u3002 Message Flow \u5904\u7406\u5668\u8fd0\u884c\u5728 ",(0,t.jsx)(n.code,{children:"background"}),"\uff0c\u800c ",(0,t.jsx)(n.code,{children:"Relay Flow"})," \u8dd1\u5728 ",(0,t.jsx)(n.code,{children:"Content Script"})," \u6216\u8005 ",(0,t.jsx)(n.code,{children:"Sandbox"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Content Script \u4e2d\u7684\u5904\u7406\u5b9e\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="contents/plasmo.ts"',children:'import type { PlasmoCSConfig } from "plasmo";\n\nimport { relayMessage } from "@plasmohq/messaging";\n\nexport const config: PlasmoCSConfig = {\n  matches: ["http://www.plasmo.com/*"], // Only relay messages from this domain\n};\n\nrelayMessage({\n  name: "ping",\n  async(req)=>{\n    return {\n      message: "hello from content"\n    }\n  }\n});\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sandbox \u4e2d\u7684\u8c03\u7528\u76d1\u542c\u5b9e\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="sandbox.ts"',children:'import { relayMessage } from "@plasmohq/messaging/relay";\n\nrelayMessage(\n  {\n    name: "ping",\n  },\n  async (req) => {\n    console.log("some message was relayed:", req);\n\n    return {\n      message: "Hello from sandbox",\n    };\n  }\n);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u7f51\u7ad9\u8c03\u7528\u65b9\u5f0f\uff0c\u540c\u6837\u9700\u8981\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"@plasmohq/messaging"})," \u63d0\u4f9b\u7684 API \u63a5\u53e3\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="pages/index.tsx"',children:'import { sendToBackgroundViaRelay } from "@plasmohq/messaging"\n...\n\nconst resp = await sendToBackgroundViaRelay({\n  name: "ping"\n})\n\nconsole.log(resp)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ports",children:"Ports"}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u6a21\u5757\u76ee\u524d\u8fd8\u5904\u4e8e Alpha \u9636\u6bb5\uff0c\u53ef\u80fd\u6709 Bug \uff0c\u540c\u65f6 \u540e\u671f\u7684 API \u4e5f\u53ef\u80fd\u4f1a\u53d8\u5316\u3002\u8bf7\u8c28\u614e\u4f7f\u7528\u3002"}),(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u968f\u65f6\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"https://docs.plasmo.com/bug",children:"https://docs.plasmo.com/bug"})," \u53cd\u9988\u4f60\u9047\u5230\u7684 Bug \u6216\u8005\u5176\u4ed6\u95ee\u9898\u3002"]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Message Ports"})," API \u662f ",(0,t.jsx)(n.code,{children:"Plasmo"})," \u4f7f\u7528\n",(0,t.jsx)(n.a,{href:"https://developer.chrome.com/docs/extensions/develop/concepts/messaging?hl=zh-cn#connect",children:"chrome \u7684 Port API "}),"\n\u5c01\u88c5\u5b8c\u6210\u7684\u4e00\u79cd\u957f\u8fde\u63a5\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4ea4\u4e92\u53cc\u65b9\u662f\u4ece ",(0,t.jsx)(n.code,{children:"Content Script"})," \u548c ",(0,t.jsx)(n.code,{children:"\u6269\u5c55\u9875\u9762"})," \u8c03\u7528 ",(0,t.jsx)(n.code,{children:"background"})," \u8c03\u7528\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u524d\u5b9e\u73b0\u4e3b\u8981\u662f\u4ece ",(0,t.jsx)(n.code,{children:"background service worker"})," \u4e2d\u521b\u5efa\u76d1\u542c\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a BGSW Port \u5904\u7406\u5668\uff0c\u53ea\u9700\u8981\u5728 ",(0,t.jsx)(n.code,{children:"background"})," \u76ee\u5f55\u4e2d\uff0c\u521b\u5efa ",(0,t.jsx)(n.code,{children:"ports"})," \u76ee\u5f55\u3002\n\u7136\u540e\uff0c\u521b\u5efa\u5904\u7406\u5668\u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u4e5f\u662f port \u7684\u540d\u5b57\uff0c\u9ed8\u8ba4\u5bfc\u51fa\u7684\u51fd\u6570\u5fc5\u987b\u662f\u51fd\u6570\u5904\u7406\u5668\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="background/ports/mail.ts"',children:'import type { PlasmoMessaging } from "@plasmohq/messaging";\n\nconst handler: PlasmoMessaging.PortHandler = async (req, res) => {\n  console.log(req);\n\n  res.send({\n    message: "Hello from port handler",\n  });\n};\n\nexport default handler;\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8c03\u7528 port \u5904\u7406\u5668\u6709\u4e24\u79cd\u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528-getport-\u51fd\u6570",children:"\u4f7f\u7528 getPort \u51fd\u6570"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 \u6269\u5c55\u9875\u9762\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"@plasmohq/messaging/port"})," \u7684 getPort \u51fd\u6570\u83b7\u5f97 port \u5bf9\u8c61\u3002\n\u7136\u540e\uff0c\u901a\u8fc7\u5411 port \u8c03\u7528 postMessage \u548c onMessage \u76d1\u63a7\u6d88\u606f\u8fd4\u56de\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="popup.svelte"',children:'<script lang="ts">\n  import { getPort } from "@plasmohq/messaging/port"\n  import { onMount, onDestroy } from "svelte"\n\n  let output = ""\n\n  const mailPort = getPort("mail")\n\n  onMount(() => {\n    mailPort.onMessage.addListener((msg) => {\n      output = msg\n    })\n  })\n\n  onDestroy(() => {\n    mailPort.onMessage.removeListener((msg) => {\n      output = msg\n    })\n  })\n\n  function handleSubmit() {\n    mailPort.postMessage({\n      body: {\n        hello: "world"\n      }\n    })\n  }\n<\/script>\n\n<div>{output}</div>\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"\u4f7f\u7528-useport-\u7684-react-api",children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"usePort"})," \u7684 ",(0,t.jsx)(n.code,{children:"React API"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="tabs/delta.tsx"',children:'import { usePort } from "@plasmohq/messaging/hook";\n\nfunction DeltaTab() {\n  const mailPort = usePort("mail");\n\n  return (\n    <div>\n      {mailPort.data?.message}\n      <button\n        onClick={async () => {\n          mailPort.send({\n            hello: "world",\n          });\n        }}\n      >\n        Send Data\n      </button>\n    </div>\n  );\n}\n\nexport default DeltaTab;\n'})}),"\n",(0,t.jsx)(n.h2,{id:"initial-type-error",children:"Initial Type Error"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u9047\u5230\u4e86 \u7c7b\u4f3c\u7684 \u9519\u8bef \uff1a ",(0,t.jsx)(n.code,{children:'"name" is never'}),"\u3002\n\u8fd9\u662f\u56e0\u4e3a ",(0,t.jsx)(n.code,{children:"Plasmo"})," \u9700\u8981\u7f16\u8bd1\u5904\u7406\u5668\u51fd\u6570\u3002\n\u4f60\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u7684\u65b9\u5f0f\u89e3\u51b3:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u91cd\u542f Dev Server"}),"\n",(0,t.jsx)(n.li,{children:"\u91cd\u542f \u4f60\u7684 IDE \u7684 typescript Server"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"e2e-type-safety-wip-\u70b9\u5bf9\u70b9\u7c7b\u578b\u5b89\u5168",children:"E2E Type Safety (WIP) \u70b9\u5bf9\u70b9\u7c7b\u578b\u5b89\u5168"}),"\n",(0,t.jsxs)(n.p,{children:["\u70b9\u5bf9\u70b9 \uff08E2E\uff09\u7684\u901a\u4fe1\u4ecd\u7136\u5728\u5f00\u53d1\u9636\u6bb5 ",(0,t.jsx)(n.a,{href:"https://github.com/PlasmoHQ/plasmo/issues/334",children:"#334"}),"\u3002\n\u540c\u65f6\u4f60\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u7684\u6cdb\u578b\u6765\u5c01\u88c5\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="background/messages/ping.ts"',children:'import type { PlasmoMessaging } from "@plasmohq/messaging";\n\nexport type RequestBody = {\n  id: number;\n};\n\nexport type ResponseBody = {\n  message: string;\n};\n\nconst handler: PlasmoMessaging.MessageHandler<\n  RequestBody,\n  ResponseBody\n> = async (req, res) => {\n  console.log(req.body.id);\n\n  res.send({\n    message: "Hello from background",\n  });\n};\n\nexport default handler;\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="popup.tsx"',children:'import { sendToBackground } from "@plasmohq/messaging"\n\nimport type { RequestBody, ResponseBody } from "~background/messages/ping"\n\n...\n\nconst resp = await sendToBackground<RequestBody, ResponseBody>({\n  name: "ping",\n  body: {\n    id: 123\n  }\n})\n\nconsole.log(resp)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(6540);const l={},o=t.createContext(l);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);