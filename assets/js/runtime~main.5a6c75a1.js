(()=>{"use strict";var e,a,f,c,r,t={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return t[e].call(f.exports,f,f.exports,o),f.loaded=!0,f.exports}o.m=t,o.c=d,e=[],o.O=(a,f,c,r)=>{if(!f){var t=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],r=e[i][2];for(var d=!0,b=0;b<f.length;b++)(!1&r||t>=r)&&Object.keys(o.O).every((e=>o.O[e](f[b])))?f.splice(b--,1):(d=!1,r<t&&(t=r));if(d){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[f,c,r]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var t={};a=a||[null,f({}),f([]),f(f)];for(var d=2&c&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((a=>t[a]=()=>e[a]));return t.default=()=>e,o.d(r,t),r},o.d=(e,a)=>{for(var f in a)o.o(a,f)&&!o.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,f)=>(o.f[f](e,a),a)),[])),o.u=e=>"assets/js/"+({5:"68f6967e",53:"935f2afb",720:"4b1c66fd",948:"8717b14a",1237:"6b9cf11d",1691:"4fbb7b2a",1862:"7f6d2349",1914:"d9f32620",2021:"9df216ac",2267:"59362658",2336:"fc2d5142",2362:"e273c56f",2535:"814f3328",2584:"cc6b848a",2907:"8a354aeb",3026:"1ee05011",3085:"1f391b9e",3089:"a6aa9e1f",3206:"f8409a7e",3241:"4dd79207",3514:"73664a40",3522:"a1c2ffe5",3608:"9e4087bc",4013:"01a85c17",4195:"c4f5d8e4",4368:"a94703ab",4781:"67819035",4942:"1a8fc9ba",5370:"ef8c40a5",5481:"cbf5fcec",5777:"78b543d2",6026:"02fbe9ca",6103:"ccc49370",6480:"19435779",7414:"393be207",7518:"4a0c03ec",7642:"2667c855",7643:"305cbda3",7918:"17896441",8518:"a7bd4aaa",8610:"6875c492",8636:"f4f34a3a",9003:"925b3f96",9099:"b51e0dd8",9209:"336757ee",9301:"2573322b",9459:"16e31973",9642:"7661071f",9661:"5e95c892",9666:"6eacf03d",9906:"03e6874b"}[e]||e)+"."+{5:"1bf2b932",53:"5250fdb6",720:"c6e8022a",948:"e671b69e",1237:"f6e28d40",1691:"9a9a3cfc",1772:"6560b895",1862:"c7bbca01",1914:"43a0452a",2021:"55dffcf2",2196:"25b6d722",2267:"c8d05abe",2336:"798fa0c6",2362:"07138332",2535:"f9f2dfd4",2584:"2cb5c7ff",2907:"1727e4e5",3026:"f8b033ef",3085:"7b9523e4",3089:"67d2e5bd",3206:"8b1768e3",3241:"d2853c9b",3514:"47a2da41",3522:"33d12468",3608:"3348e3b5",4013:"7aa2a6b0",4195:"8dd7e9f8",4368:"25736b1a",4781:"ae0e4c05",4942:"002624c2",5370:"12b859a0",5481:"0fbd1b59",5777:"3bd6bd07",6026:"83a32f1e",6103:"56ec3aae",6480:"473431c1",7414:"cc9c7b95",7518:"985b070a",7642:"5462f1a7",7643:"b3abfe76",7918:"f37af021",8518:"c91f2ca3",8610:"d586017d",8636:"f55e9bed",9003:"0bb590c6",9099:"14290174",9209:"013da9f1",9301:"5d811c7a",9459:"1168c56e",9642:"e88b2f09",9661:"11f725c2",9666:"54b36214",9677:"e340e81e",9906:"48063229"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},r="plasmo-co-learn:",o.l=(e,a,f,t)=>{if(c[e])c[e].push(a);else{var d,b;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+f){d=l;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",r+f),d.src=e),c[e]=[a];var u=(a,f)=>{d.onerror=d.onload=null,clearTimeout(s);var r=c[e];if(delete c[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/plasmo-co-learn/",o.gca=function(e){return e={17896441:"7918",19435779:"6480",59362658:"2267",67819035:"4781","68f6967e":"5","935f2afb":"53","4b1c66fd":"720","8717b14a":"948","6b9cf11d":"1237","4fbb7b2a":"1691","7f6d2349":"1862",d9f32620:"1914","9df216ac":"2021",fc2d5142:"2336",e273c56f:"2362","814f3328":"2535",cc6b848a:"2584","8a354aeb":"2907","1ee05011":"3026","1f391b9e":"3085",a6aa9e1f:"3089",f8409a7e:"3206","4dd79207":"3241","73664a40":"3514",a1c2ffe5:"3522","9e4087bc":"3608","01a85c17":"4013",c4f5d8e4:"4195",a94703ab:"4368","1a8fc9ba":"4942",ef8c40a5:"5370",cbf5fcec:"5481","78b543d2":"5777","02fbe9ca":"6026",ccc49370:"6103","393be207":"7414","4a0c03ec":"7518","2667c855":"7642","305cbda3":"7643",a7bd4aaa:"8518","6875c492":"8610",f4f34a3a:"8636","925b3f96":"9003",b51e0dd8:"9099","336757ee":"9209","2573322b":"9301","16e31973":"9459","7661071f":"9642","5e95c892":"9661","6eacf03d":"9666","03e6874b":"9906"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,f)=>{var c=o.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((f,r)=>c=e[a]=[f,r]));f.push(c[2]=r);var t=o.p+o.u(a),d=new Error;o.l(t,(f=>{if(o.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var r=f&&("load"===f.type?"missing":f.type),t=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+t+")",d.name="ChunkLoadError",d.type=r,d.request=t,c[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,f)=>{var c,r,t=f[0],d=f[1],b=f[2],n=0;if(t.some((a=>0!==e[a]))){for(c in d)o.o(d,c)&&(o.m[c]=d[c]);if(b)var i=b(o)}for(a&&a(f);n<t.length;n++)r=t[n],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(i)},f=self.webpackChunkplasmo_co_learn=self.webpackChunkplasmo_co_learn||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();