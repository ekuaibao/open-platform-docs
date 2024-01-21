"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4056],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),d=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),s=d(n),u=a,f=s["".concat(i,".").concat(u)]||s[u]||m[u]||l;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return r.createElement("div",{className:a.control+" "+a[e]},r.createElement("span",{className:a.method},e),r.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&r.createElement("small",null,l))}},77464:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(41627),p=["components"],i={},d="\u6279\u91cf\u65b0\u589e\u90e8\u95e8",c={unversionedId:"open-api/contacts/batch-add-departments",id:"version-v2.0/open-api/contacts/batch-add-departments",title:"\u6279\u91cf\u65b0\u589e\u90e8\u95e8",description:"<Control",source:"@site/versioned_docs/version-v2.0/open-api/contacts/batch-add-departments.md",sourceDirName:"open-api/contacts",slug:"/open-api/contacts/batch-add-departments",permalink:"/docs/v2.0/open-api/contacts/batch-add-departments",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/contacts/batch-add-departments.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u65b0\u589e\u90e8\u95e8",permalink:"/docs/v2.0/open-api/contacts/add-departments"},next:{title:"\u4fee\u6539\u90e8\u95e8\u4fe1\u606f",permalink:"/docs/v2.0/open-api/contacts/update-departments"}},m=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],s={toc:m};function u(t){var e=t.components,n=(0,a.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6279\u91cf\u65b0\u589e\u90e8\u95e8"},"\u6279\u91cf\u65b0\u589e\u90e8\u95e8"),(0,l.kt)(o.Z,{method:"POST",url:"/api/openapi/v1/departments/batch/create",mdxType:"Control"}),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"departmentList")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u589e\u90e8\u95e8\u7684\u96c6\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u589e\u90e8\u95e8\u7684\u96c6\u5408")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f code")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u7f16\u7801"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4f20 ",(0,l.kt)("inlineCode",{parentName:"td"},'""'),"\uff0c\u4e0d\u53ef\u4f20\u91cd\u590d\u7684\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u53ef\u4f20 ",(0,l.kt)("inlineCode",{parentName:"td"},'""'),"\uff0c\u4e0d\u53ef\u4f20\u91cd\u590d\u7684\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f parentId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u7ea7\u90e8\u95e8ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6839\u90e8\u95e8\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},'""'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f order")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6392\u5e8f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"code\u4e3a\u7a7a\uff0corder\u76f8\u540c\u65f6\uff0c\u6309\u521b\u5efa\u65f6\u95f4\u6392\u5e8f",(0,l.kt)("br",null),"code\u4e3a\u7a7a\uff0corder\u4e0d\u540c\u65f6\uff0c\u6309order\u6392\u5e8f",(0,l.kt)("br",null),"code\u4e0d\u4e3a\u7a7a\u65f6\uff0c\u6309code\u6392\u5e8f")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v1/departments/batch/create?accessToken=rv0bwKeAks4Y00\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "departmentList":[\n        {\n            "code":"233434342121111",\n            "name":"\u4e8b\u4e1a\u90e811111",\n            "parentId":"U_gb_X4Yr8aY00:NTIc6przKo2s00",\n            "order":0\n        },\n        {\n            "code":"233434342121311111",\n            "name":"\u4e8b\u4e1a\u90e811112",\n            "parentId":"U_gb_X4Yr8aY00:NTIc6przKo2s00",\n            "order":0\n        }\n    ]\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items":[\n        {\n            "id":"U_gb_X4Yr8aY00:YSYc6_Ipx8uI00",\n            "name":"\u4e8b\u4e1a\u90e811111",\n            "parentId":"U_gb_X4Yr8aY00:NTIc6przKo2s00",\n            "active":true,\n            "form":{                            //\u90e8\u95e8\u5173\u8054\u6cd5\u4eba\u5b9e\u4f53id\u548c\u6210\u672c\u4e2d\u5fc3id\n                "costCenter":"NzMcynfBJ43M00",  //\u6210\u672c\u4e2d\u5fc3ID\n                "legalEntity":"11YcypdGzoEo00"  //\u6cd5\u4eba\u5b9e\u4f53ID\n            },\n            "code":"233434342121111"\n        },\n        {\n            "id":"U_gb_X4Yr8aY00:Ty8c6_Ipx8uM00",\n            "name":"\u4e8b\u4e1a\u90e811112",\n            "parentId":"U_gb_X4Yr8aY00:NTIc6przKo2s00",\n            "active":true,\n            "form":{                            //\u90e8\u95e8\u5173\u8054\u6cd5\u4eba\u5b9e\u4f53id\u548c\u6210\u672c\u4e2d\u5fc3id\n                "costCenter":"NzMcynfBJ43M00",  //\u6210\u672c\u4e2d\u5fc3ID\n                "legalEntity":"11YcypdGzoEo00"  //\u6cd5\u4eba\u5b9e\u4f53ID\n            },\n            "code":"233434342121311111"\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n      "errorCode": 400,\n      "errorMessage": "\u8be5\u7ea7\u76ee\u5f55\u540d\u79f0\u300c\u4e8b\u4e1a\u90e811111\u300d\u5df2\u5b58\u5728",\n      "errorDetails": null,\n      "code": null,\n      "data": null\n}\n')))}u.isMDXComponent=!0}}]);