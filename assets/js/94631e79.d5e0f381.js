"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[685],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},i=function(e){var t=e.method,n=e.url,i=e.description,l=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return r.createElement("div",{className:a.control+" "+a[t]},r.createElement("span",{className:a.method},t),r.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),i&&r.createElement("small",null,i))}},65320:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(41627),o=["components"],p={},d="\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u53f0\u8d26\u5b57\u6bb5",c={unversionedId:"open-api/inside/get-entity-ledgerConfig",id:"open-api/inside/get-entity-ledgerConfig",title:"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u53f0\u8d26\u5b57\u6bb5",description:"<Control",source:"@site/docs/open-api/inside/get-entity-ledgerConfig.md",sourceDirName:"open-api/inside",slug:"/open-api/inside/get-entity-ledgerConfig",permalink:"/docs/next/open-api/inside/get-entity-ledgerConfig",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/inside/get-entity-ledgerConfig.md",tags:[],version:"current",frontMatter:{}},s=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],m={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u53f0\u8d26\u5b57\u6bb5"},"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u53f0\u8d26\u5b57\u6bb5"),(0,i.kt)(l.Z,{method:"GET",url:"/api/openapi/v2/datalink/ledger/ledgerEntityId/$`entityId`",mdxType:"Control"}),(0,i.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"entityId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u5bf9\u8c61ID"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/datalink/get-entity-list"},"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61")," \u83b7\u53d6")))),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"accessToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,i.kt)("h2",{id:"curl"},"CURL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/datalink/ledger/ledgerEntityId/$d1102ef381c4fb15cbc0?accessToken=ID01uxhO1GK8Ps%3ATdk3tgber501v0'\n")),(0,i.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "operateSource": "WRITE",\n            "operatorId": "Tdk3tgber501v0:AvT3lntT8zzpWw",  //\u64cd\u4f5c\u4eba\n            "pipeline": 1,\n            "grayver": "9.102.0.0-prd",\n            "dbVersion": 2,\n            "threadId": "709",\n            "id": "ID01s6bfGjqPrp",                //\u53f0\u8d26\u5b57\u6bb5\u914d\u7f6eID\n            "version": 2,\n            "active": true,\n            "createTime": 1692080122421,\n            "updateTime": 1699943398068,\n            "corporationId": "Tdk3tgber501v0",\n            "sourceCorporationId": null,\n            "dataCorporationId": null,\n            "staffId": "Tdk3tgber501v0:AvT3lntT8zzpWw",\n            "name": "\u62a5\u9500\u91d1\u989d",                   //\u53f0\u8d26\u5b57\u6bb5\u540d\u79f0\n            "dataLinkEntityId": "d1102ef381c4fb15cbc0",\n            "configSourceEntityId": "",\n            "statisticsSource": "MASTER",\n            "billRefFieldName": "u_\u4e1a\u52a12",       //\u901a\u8fc7\u300c\u5355\u636e/\u8d39\u7528\u660e\u7ec6/\u53d1\u7968\u300d\u4e2d\u7684\u4e1a\u52a1\u5bf9\u8c61\u5b57\u6bb5\uff0c\u5224\u65ad\u5173\u8054\u300c\u672c\u4e1a\u52a1\u5bf9\u8c61\u300d\n            "filter": {                          //\u8fc7\u6ee4\u6761\u4ef6\n                "template": "simple",\n                "expressions": []\n            },\n            "sumFieldName": "expenseMoney",      //\u7edf\u8ba1\u300c\u5355\u636e/\u8d39\u7528\u660e\u7ec6/\u53d1\u7968\u300d\u7684\u54ea\u4e2a\u5b57\u6bb5\n            "priorityApportion": false,\n            "sumFieldLabel": "\u62a5\u9500\u91d1\u989d",         //\u6c47\u603b\u5b57\u6bb5\u540d\u79f0\n            "propertyName": "E_ID01s6bfGjqPrp_\u62a5\u9500\u91d1\u989d_L",  //\u4e1a\u52a1\u5bf9\u8c61\u4e2d\u7684\u53f0\u8d26\u5c5e\u6027\u5b57\u6bb5\uff0c\u7528\u4e8e\u4fdd\u5b58\u53f0\u8d26\u6c47\u603b\u503c\n            "unit": null,\n            "sumFieldType": "MONEY",            //\u6c47\u603b\u5b57\u6bb5\u7c7b\u578b\uff0cMONEY\uff1a\u91d1\u989d\n            "billDimensionConfig": null,\n            "statisticsEntityId": null,\n            "isLock": false\n        },\n        {\n            "operateSource": "WRITE",\n            "operatorId": "Tdk3tgber501v0:AvT3lntT8zzpWw",\n            "pipeline": 1,\n            "grayver": "9.102.0.0-prd",\n            "dbVersion": 1,\n            "threadId": "637",\n            "id": "ID01uxhZo2pyft",\n            "version": 1,\n            "active": true,\n            "createTime": 1699943392331,\n            "updateTime": 1699943392331,\n            "corporationId": "Tdk3tgber501v0",\n            "sourceCorporationId": null,\n            "dataCorporationId": null,\n            "staffId": "Tdk3tgber501v0:AvT3lntT8zzpWw",\n            "name": "\u5df2\u5b8c\u6210\u62a5\u9500\u91d1\u989d",\n            "dataLinkEntityId": "d1102ef381c4fb15cbc0",\n            "configSourceEntityId": "",\n            "statisticsSource": "MASTER",\n            "billRefFieldName": "u_\u4e1a\u52a12",\n            "filter": {\n                "template": "simple",\n                "expressions": [\n                    {\n                        "type": null,\n                        "left": "specificationId",      //\u9650\u5b9a\u7edf\u8ba1\u7684\u5355\u636e\u6a21\u677f\u7684\u7c7b\u578b\n                        "operator": "in",\n                        "right": [\n                            "ID01nrAmUbaQtF"\n                        ],\n                        "strictRight": {\n                            "specificationId": [],\n                            "specificationGroupId": [\n                                "ID01nrAmUbaQtF"\n                            ]\n                        },\n                        "includeChildren": true,\n                        "fromWhere": "MASTER",\n                        "entity": "",\n                        "isSearchInMaster": false\n                    },\n                    {\n                        "type": null,\n                        "left": "state",               //\u9650\u5b9a\u7edf\u8ba1\u7684\u5355\u636e\u7684\u72b6\u6001\n                        "operator": "in",\n                        "right": [\n                            "archived"\n                        ],\n                        "strictRight": {},\n                        "includeChildren": false,\n                        "fromWhere": "MASTER",\n                        "entity": "",\n                        "isSearchInMaster": false\n                    }\n                ]\n            },\n            "sumFieldName": "expenseMoney",\n            "priorityApportion": false,\n            "sumFieldLabel": "\u5df2\u5b8c\u6210\u62a5\u9500\u91d1\u989d",\n            "propertyName": "E_ID01uxhZo2pyft_\u5df2\u5b8c\u6210\u62a5\u9500\u91d1\u989d_L",\n            "unit": null,\n            "sumFieldType": "MONEY",\n            "billDimensionConfig": null,\n            "statisticsEntityId": null,\n            "isLock": false\n        }\n    ]\n}\n')),(0,i.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"200")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u6570\u636e\u4e3a\u7a7a"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"entityId"),"\uff08\u4e1a\u52a1\u5bf9\u8c61ID\uff09\u662f\u5426\u6b63\u786e")))))}u.isMDXComponent=!0}}]);