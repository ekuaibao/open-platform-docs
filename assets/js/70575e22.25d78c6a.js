"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57801],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=d(n),f=r,u=s["".concat(p,".").concat(f)]||s[f]||m[f]||l;return n?a.createElement(u,i(i({ref:e},c),{},{components:n})):a.createElement(u,i({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,i=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&a.createElement("small",null,l))}},91385:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(41627),o=["components"],p={},d="\u67e5\u8be2\u4eba\u5458\u4fe1\u7528\u5206\u6570",c={unversionedId:"open-api/datalink-extend/get-credit-byStaffId",id:"version-v2.2/open-api/datalink-extend/get-credit-byStaffId",title:"\u67e5\u8be2\u4eba\u5458\u4fe1\u7528\u5206\u6570",description:"<Control",source:"@site/versioned_docs/version-v2.2/open-api/datalink-extend/get-credit-byStaffId.md",sourceDirName:"open-api/datalink-extend",slug:"/open-api/datalink-extend/get-credit-byStaffId",permalink:"/docs/open-api/datalink-extend/get-credit-byStaffId",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.2/open-api/datalink-extend/get-credit-byStaffId.md",tags:[],version:"v2.2",frontMatter:{}},m=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],s={toc:m};function f(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u67e5\u8be2\u4eba\u5458\u4fe1\u7528\u5206\u6570"},"\u67e5\u8be2\u4eba\u5458\u4fe1\u7528\u5206\u6570"),(0,l.kt)(i.Z,{method:"GET",url:"/api/openapi/v2/credit/byStaffId",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1250"},(0,l.kt)("strong",{parentName:"a"},"1.25.0"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8be5\u63a5\u53e3\u9700\u8981\u5f00\u901a\u3010",(0,l.kt)("strong",{parentName:"li"},"\u4fe1\u7528\u7ba1\u7406"),"\u3011\u529f\u80fd\uff0c\u5e76\u5728 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u4fe1\u7528\u6a21\u578b"))," \u6a21\u5757\u9996\u6b21\u4fdd\u5b58\uff0c\u751f\u6210\u4fe1\u7528\u6570\u636e\u3002")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"staffId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-staff-ids"},"\u67e5\u8be2\u5458\u5de5")," \u83b7\u53d6")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://app.ekuaibao.com/api/openapi/v2/credit/byStaffId?accessToken=ID01w4CBq8tWer%3AxgJ3wajigF25H0&staffId=xgJ3wajigF25H0%3Adbc3wajigF1UH0' \\\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "code": "B",      //\u7f16\u7801\n        "point": 100,     //\u5206\u6570\n        "level": "B",     //\u7b49\u7ea7\u540d\u79f0\n        "description": "\u4fe1\u7528\u826f\u597d2",   //\u7b49\u7ea7\u63cf\u8ff0\n        "updateTime": 1698128934234  //\u66f4\u65b0\u65f6\u95f4\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4fe1\u7528\u6a21\u578b\u4e0d\u5b58\u5728"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u662f\u5426\u5f00\u901a ",(0,l.kt)("strong",{parentName:"td"},"\u3010\u4fe1\u7528\u7ba1\u7406\u3011")," \u529f\u80fd\uff0c\u5e76\u5728 ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u4fe1\u7528\u6a21\u578b"))," \u6a21\u5757\u9996\u6b21\u4fdd\u5b58\uff0c\u751f\u6210\u4fe1\u7528\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u672a\u521d\u59cb\u5316\u4fe1\u7528\u5206"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"staffId"),"\uff08\u5458\u5de5ID\uff09\u662f\u5426\u6b63\u786e")))))}f.isMDXComponent=!0}}]);