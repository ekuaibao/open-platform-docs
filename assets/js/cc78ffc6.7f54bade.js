"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61819],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),d=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(n),k=r,u=s["".concat(i,".").concat(k)]||s[k]||c[k]||l;return n?a.createElement(u,o(o({ref:e},m),{},{components:n})):a.createElement(u,o({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&a.createElement("small",null,l))}},80452:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return c},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(41627),p=["components"],i={},d="\u65b0\u589e\u90e8\u95e8",m={unversionedId:"open-api/contacts/add-departments",id:"version-v2.1/open-api/contacts/add-departments",title:"\u65b0\u589e\u90e8\u95e8",description:"<Control",source:"@site/versioned_docs/version-v2.1/open-api/contacts/add-departments.md",sourceDirName:"open-api/contacts",slug:"/open-api/contacts/add-departments",permalink:"/docs/v2.1/open-api/contacts/add-departments",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/contacts/add-departments.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/v2.1/open-api/contacts/info"},next:{title:"\u6279\u91cf\u65b0\u589e\u90e8\u95e8",permalink:"/docs/v2.1/open-api/contacts/batch-add-departments"}},c=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],s={toc:c};function k(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u65b0\u589e\u90e8\u95e8"},"\u65b0\u589e\u90e8\u95e8"),(0,l.kt)(o.Z,{method:"POST",url:"/api/openapi/v1/departments",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#160"},(0,l.kt)("strong",{parentName:"a"},"1.6.0"))," -> \ud83d\udc1e ",(0,l.kt)("strong",{parentName:"p"},"\u6210\u529f\u54cd\u5e94")," \u4e2d\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"order"),"\uff08\u6392\u5e8f\u5e8f\u53f7\uff09\u53c2\u6570\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u7f16\u7801"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4f20 ",(0,l.kt)("inlineCode",{parentName:"td"},'""'),"\uff0c\u4e0d\u53ef\u4f20\u91cd\u590d\u7684\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u53ef\u4f20 ",(0,l.kt)("inlineCode",{parentName:"td"},'""'),"\uff0c\u4e0d\u53ef\u4f20\u91cd\u590d\u7684\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"parentId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u7ea7\u90e8\u95e8ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6839\u90e8\u95e8\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},'""'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"order")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6392\u5e8f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"code\u4e3a\u7a7a\uff0corder\u76f8\u540c\u65f6\uff0c\u6309\u521b\u5efa\u65f6\u95f4\u6392\u5e8f",(0,l.kt)("br",null),"code\u4e3a\u7a7a\uff0corder\u4e0d\u540c\u65f6\uff0c\u6309order\u6392\u5e8f",(0,l.kt)("br",null),"code\u4e0d\u4e3a\u7a7a\u65f6\uff0c\u6309code\u6392\u5e8f")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v1/departments?accessToken=rv0bwKeAks4Y00\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "code": "1330",\n    "name": "\u4e8b\u4e1a\u90e8",\n    "parentId": "JOYbpjPP-E2Q00",\n    "order": 0\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "id": "JOYbpjPP-E2Q00:NJ4bwJTotQiA00", //\u90e8\u95e8ID\n        "name": "\u4e8b\u4e1a\u90e8",                      //\u90e8\u95e8\u540d\u79f0\n        "parentId": "JOYbpjPP-E2Q00",         //\u4e0a\u7ea7\u90e8\u95e8ID\n        "form":{                              //\u90e8\u95e8\u5173\u8054\u6cd5\u4eba\u5b9e\u4f53ID\u548c\u6210\u672c\u4e2d\u5fc3ID\n          "costCenter":"NzMcynfBJ43M00",      //\u6210\u672c\u4e2d\u5fc3ID\n          "legalEntity":"11YcypdGzoEo00"      //\u6cd5\u4eba\u5b9e\u4f53ID\n        },\n        "active": true,                       //\u662f\u5426\u505c\u7528\n        "order": 0,                           //\u6392\u5e8f\u5e8f\u53f7\n        "code": "1330"                        //\u90e8\u95e8\u7f16\u7801\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8be5\u90e8\u95e8\u5728\u540c\u7ea7\u6709\u76f8\u540c\u7684\u90e8\u95e8\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u5bf9\u5e94\u5c42\u7ea7\u662f\u5426\u6709\u76f8\u540c\u7684\u90e8\u95e8\u540d\u79f0")))))}k.isMDXComponent=!0}}]);