"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[70941],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return f}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),c=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=c(n),f=r,u=s["".concat(i,".").concat(f)]||s[f]||m[f]||l;return n?a.createElement(u,o(o({ref:e},d),{},{components:n})):a.createElement(u,o({ref:e},d))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&a.createElement("small",null,l))}},380:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(41627),p=["components"],i={},c="\u83b7\u53d6\u5355\u636e\u5ba1\u6279\u7ed3\u679c",d={unversionedId:"open-api/flows/flow-approval-result",id:"open-api/flows/flow-approval-result",title:"\u83b7\u53d6\u5355\u636e\u5ba1\u6279\u7ed3\u679c",description:"<Control",source:"@site/docs/open-api/flows/flow-approval-result.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/flow-approval-result",permalink:"/docs/next/open-api/flows/flow-approval-result",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/flows/flow-approval-result.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8bc4\u8bba\u5355\u636e",permalink:"/docs/next/open-api/flows/flow-comment"},next:{title:"\u83b7\u53d6\u5355\u636e\u5ba1\u6279\u72b6\u6001",permalink:"/docs/next/open-api/flows/get-approve-state"}},m=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],s={toc:m};function f(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6\u5355\u636e\u5ba1\u6279\u7ed3\u679c"},"\u83b7\u53d6\u5355\u636e\u5ba1\u6279\u7ed3\u679c"),(0,l.kt)(o.Z,{method:"GET",url:"/api/openapi/v1/backlog/data/result",mdxType:"Control"}),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5f00\u901a\u3010",(0,l.kt)("strong",{parentName:"li"},"\u5355\u636e\u5ba1\u6279"),"\u3011\u529f\u80fd\uff0c\u65b9\u53ef\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8be5\u63a5\u53e3\u5728\u8c03\u7528 ",(0,l.kt)("a",{parentName:"li",href:"/docs/open-api/flows/flow-approval"},"\u5355\u636e\u5ba1\u6279")," \u63a5\u53e3\u540e ",(0,l.kt)("strong",{parentName:"li"},"60\u79d2")," \u5185\u8c03\u7528\uff0c \u65b9\u53ef\u5f97\u5230\u5ba1\u6279\u7ed3\u679c\u3002")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"approveId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5ba1\u6279\u4ebaID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-staff-ids"},"\u67e5\u8be2\u5458\u5de5")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"powerCode")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u529f\u80fd\u6388\u6743\u7801"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f20 ",(0,l.kt)("inlineCode",{parentName:"td"},"TICKET_AUDIT_switch")," \u5373\u53ef")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/backlog/data/result?accessToken=ID_3sTFcaTookM:djg8LshfUkfM00&approveId=djg8LshfUkfM00:ID_3kpneISgylw&powerCode=TICKET_AUDIT_switch' \\\n--header 'Content-Type: application/json' \\\n--header 'Accept: application/json'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "total": 2,       //\u5ba1\u6279\u603b\u6570\n        "success": 0,     //\u6210\u529f\u6570\n        "error": 2,       //\u5931\u8d25\u6570\n        "residue": 0,     //\u7b49\u5f85\u5904\u7406\u6570\n        "errorMsg": [     //\u9519\u8bef\u6d88\u606f\n            {\n                "flowCode": "B20000006",\n                "flowTitle": "\u4e0d\u540c\u5ba1\u6279\u4eba",\n                "msg": "\u60a8\u6ca1\u6709\u6743\u9650\u5904\u7406\u8be5\u5f85\u529e\u4e8b\u9879",\n                "flowId": "6T8bITwIaUmo00",\n                "backlogId": "cxgbJuQWr0gE00"\n            },\n            {\n                "flowCode": "J20000013",\n                "flowTitle": "\u4e0d\u9009\u51fa\u7eb3003",\n                "msg": "\u672a\u9009\u62e9\u4e0b\u7ea7\u5ba1\u6279\u4eba",\n                "flowId": "y-EbIT7IQY7M00",\n                "backlogId": "k_QbIT7IQYig00"\n            }\n        ],\n        "lastBacklogId": "",\n        "filter": 0\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u672a\u8bbe\u7f6e\u6307\u5b9a\u4eba\u5458"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"approverId"),"\uff08\u5ba1\u6279\u4ebaId\uff09\u662f\u5426\u6b63\u786e")))))}f.isMDXComponent=!0}}]);