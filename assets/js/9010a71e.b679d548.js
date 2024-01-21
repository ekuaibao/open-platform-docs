"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21913],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),f=a,u=s["".concat(p,".").concat(f)]||s[f]||c[f]||i;return n?r.createElement(u,l(l({ref:t},m),{},{components:n})):r.createElement(u,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},i=function(e){var t=e.method,n=e.url,i=e.description,l=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return r.createElement("div",{className:a.control+" "+a[t]},r.createElement("span",{className:a.method},t),r.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),i&&r.createElement("small",null,i))}},86029:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return c},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(41627),o=["components"],p={},d="\u83b7\u53d6\u4f01\u4e1a\u4e0b\u6240\u6709\u5ba1\u6279\u77e9\u9635",m={unversionedId:"open-api/matrix/get-matrixs",id:"version-v2.2/open-api/matrix/get-matrixs",title:"\u83b7\u53d6\u4f01\u4e1a\u4e0b\u6240\u6709\u5ba1\u6279\u77e9\u9635",description:"<Control",source:"@site/versioned_docs/version-v2.2/open-api/matrix/get-matrixs.md",sourceDirName:"open-api/matrix",slug:"/open-api/matrix/get-matrixs",permalink:"/docs/open-api/matrix/get-matrixs",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.2/open-api/matrix/get-matrixs.md",tags:[],version:"v2.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/open-api/matrix/info"},next:{title:"\u6839\u636e\u77e9\u9635ID\u83b7\u53d6\u77e9\u9635\u660e\u7ec6",permalink:"/docs/open-api/matrix/get-matrix-byId"}},c=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2}],s={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u83b7\u53d6\u4f01\u4e1a\u4e0b\u6240\u6709\u5ba1\u6279\u77e9\u9635"},"\u83b7\u53d6\u4f01\u4e1a\u4e0b\u6240\u6709\u5ba1\u6279\u77e9\u9635"),(0,i.kt)(l.Z,{method:"POST",url:"/api/openapi/v2/matrix/search",mdxType:"Control"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,i.kt)("div",null,(0,i.kt)("p",null,"  ",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1270"},(0,i.kt)("strong",{parentName:"a"},"1.27.0"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,i.kt)("br",null)))),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"accessToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,i.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"limit")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5206\u9875\u9650\u5236"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5206\u9875\u9650\u5236")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"\u2003"," \u221f start")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5206\u9875\u67e5\u8be2\u7684\u8d77\u59cb\u5e8f\u53f7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5206\u9875\u7684\u8d77\u59cb\u503c\u662f\u4ece ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," \u5f00\u59cb\uff0c \u800c\u4e0d\u662f\u4f20\u7edf\u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"1")," \u5f00\u59cb")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"\u2003"," \u221f count")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u6570\u636e\u6761\u6570"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u4e0d\u80fd\u8d85\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"td"},"100"))))),(0,i.kt)("h2",{id:"curl"},"CURL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/matrix/search?accessToken=ID01vIvmPOlSCi%3ATdk3tgber501v0' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"limit\": {\n        \"start\": 0,\n        \"count\": 10\n    }\n}'\n")),(0,i.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 1,\n    "items": [\n        {\n            "pipeline": 1,\n            "grayver": "9.95.0.0-prd",\n            "dbVersion": 0,\n            "threadId": "",\n            "id": "ID01p4Q9vzOnAr",                 //\u5ba1\u6279\u77e9\u9635ID\n            "version": 3,\n            "active": true,                         //\u662f\u5426\u6709\u6548\uff08\u6216\u8005\u7406\u89e3\u4e3a\u662f\u5426\u88ab\u5220\u9664\uff09 true\uff1a\u6709\u6548\uff0cfalse\uff1a\u65e0\u6548\n            "createTime": 1682322635458,            //\u521b\u5efa\u65f6\u95f4(\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233)\n            "updateTime": 1682322659786,            //\u66f4\u65b0\u65f6\u95f4(\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233)\n            "name": "\u6d4b\u8bd5\u77e9\u9635",                      //\u5ba1\u6279\u77e9\u9635\u540d\u79f0\n            "nameSpell": "CESHIJUZHEN",             //\u540d\u79f0\u5927\u5199\u62fc\u97f3\n            "corporationId": "Tdk3tgber501v0",      //\u4f01\u4e1aID\n            "sourceCorporationId": null,\n            "dataCorporationId": null,\n            "fieldConfig": [                        //\u6761\u4ef6\u5b57\u6bb5\u914d\u7f6e\n                {\n                    "id": "ID01p4Qa2pkden",         //\u6761\u4ef6\u5b57\u6bb5\u914d\u7f6eID\n                    "type": "organization.Staff",   //\u6761\u4ef6\u5b57\u6bb5\u7c7b\u578b\n                    "field": "submitterId",         //\u6761\u4ef6\u5b57\u6bb5\u540d\u79f0\n                    "operator": "=",                //\u903b\u8f91\u8fd0\u7b97\u7b26\uff1a\u91d1\u989d\u5b57\u6bb5\u3001\u6570\u5b57\u5b57\u6bb5\u903b\u8f91\u7b26\u53ef\u9009\u2265><\u2264\uff0c\u5176\u4ed6\u5b57\u6bb5\u9ed8\u8ba4\u4e3a\u7b49\u4e8e\n                    "containChild": false           //\u662f\u5426\u5305\u542b\u5b50\u7ea7\n                },\n                {\n                    "id": "ID01p4Qa2pkduT",\n                    "type": "flow.FeeType",\n                    "field": "feeTypeId",\n                    "operator": "=",\n                    "containChild": false\n                },\n                {\n                    "id": "ID01p4Qa2pkdLp",\n                    "type": "organization.Department",\n                    "field": "expenseDepartment",\n                    "operator": "=",\n                    "containChild": false\n                }\n            ],\n            "resultConfig": [                         //\u7ed3\u679c\u5b57\u6bb5\u914d\u7f6e\n                {\n                    "id": "ID01p4Qa2pkeir",           //\u7ed3\u679c\u5b57\u6bb5\u914d\u7f6eID\n                    "name": "\u4e1a\u52a1\u5ba1\u6279",                //\u7ed3\u679c\u5b57\u6bb5\u914d\u7f6e\u540d\u79f0\n                    "fieldConfig": [                 //\u7279\u6709\u6761\u4ef6\u914d\u7f6e\n                        {\n                            "id": "ID01p4Qa2pke1V",    //\u7279\u6709\u6761\u4ef6\u914d\u7f6e\u5b57\u6bb5ID  \n                            "type": "flow.MoneyModel", //\u7279\u6709\u6761\u4ef6\u914d\u7f6e\u5b57\u6bb5\u7c7b\u578b\n                            "field": "expenseMoney",   //\u7279\u6709\u6761\u4ef6\u914d\u7f6e\u5b57\u6bb5\u540d\u79f0  \n                            "operator": ">=",          //\u903b\u8f91\u8fd0\u7b97\u7b26\uff1a\u91d1\u989d\u5b57\u6bb5\u3001\u6570\u5b57\u5b57\u6bb5\u903b\u8f91\u7b26\u53ef\u9009\u2265><\u2264\uff0c\u5176\u4ed6\u5b57\u6bb5\u9ed8\u8ba4\u4e3a\u7b49\u4e8e\n                            "containChild": false      //\u662f\u5426\u5305\u542b\u5b50\u7ea7\n                        },\n                        {\n                            "id": "ID01wj7Z0952QT",\n                            "type": "basedata.city",\n                            "field": "toCity",\n                            "operator": "=",\n                            "containChild": false\n                        }\n                    ]\n                },\n                {\n                    "id": "ID01p4Qa2pkePt",\n                    "name": "\u8d22\u52a1\u5ba1\u6279",\n                    "fieldConfig": [\n                        {\n                            "id": "ID01p4Qa2pkeyX",\n                            "type": "flow.MoneyModel",\n                            "field": "expenseMoney",\n                            "operator": "<=",\n                            "containChild": false\n                        }\n                    ]\n                },\n                {\n                    "id": "ID01p4Qa2pkf5Z",\n                    "name": "\u8d22\u52a1\u5ba1\u62792",\n                    "fieldConfig": []\n                }\n            ],\n            "indexVersion": 1,\n            "ownerId": "Tdk3tgber501v0:AvT3lntT8zzpWw",     //\u6240\u5c5e\u5458\u5de5ID\n            "editorId": "Tdk3tgber501v0:AvT3lntT8zzpWw"     //\u7f16\u8f91\u5458\u5de5ID\n        }\n    ]\n}\n')))}f.isMDXComponent=!0}}]);