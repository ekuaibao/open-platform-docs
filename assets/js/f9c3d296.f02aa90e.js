"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36973],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=d(n),s=r,u=f["".concat(p,".").concat(s)]||f[s]||m[s]||l;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var t=e.method,n=e.url,l=e.description,i=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[t]},a.createElement("span",{className:r.method},t),a.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&a.createElement("small",null,l))}},9806:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(41627),o=["components"],p={},d="\u884c\u7a0b",c={unversionedId:"open-api/datalink-extend/get-entity-travel",id:"version-v2.0/open-api/datalink-extend/get-entity-travel",title:"\u884c\u7a0b",description:"<Control",source:"@site/versioned_docs/version-v2.0/open-api/datalink-extend/get-entity-travel.md",sourceDirName:"open-api/datalink-extend",slug:"/open-api/datalink-extend/get-entity-travel",permalink:"/docs/v2.0/open-api/datalink-extend/get-entity-travel",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/datalink-extend/get-entity-travel.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7231\u5ba2CRM",permalink:"/docs/v2.0/open-api/datalink-extend/get-entity-ik-crm"},next:{title:"\u53d1\u7968\u56fe\u7247",permalink:"/docs/v2.0/open-api/datalink-extend/get-entity-invoice-img"}},m=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],f={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u884c\u7a0b"},"\u884c\u7a0b"),(0,l.kt)(i.Z,{method:"POST",url:"/api/openapi/v2/extension/TRAVEL/object/`objectId`/search",mdxType:"Control"}),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"objectId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u884c\u7a0b\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"travel")," : \u6240\u6709\u884c\u7a0b","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"train")," : \u706b\u8f66\u884c\u7a0b","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"taxi")," : \u6253\u8f66\u884c\u7a0b",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"hotel")," : \u9152\u5e97\u884c\u7a0b","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"flight")," : \u673a\u7968\u884c\u7a0b")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"index")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u9875"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u9875")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"count")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u6570"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"ids")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8bid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6309\u7167\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u7684id\u67e5\u8be2\u8be6\u60c5")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/TRAVEL/object/travel/search?accessToken=Ts0byCA-_A4M00' \\\n--header 'content-type: application/json' \\\n--header 'Accept: application/json' \\\n--data-raw '\n{\n    \"index\":1,\n    \"count\":10,\n    \"ids\":[\"0m4aN2sTKEv000\"]\n}'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 1,\n    "items": [\n        {\n            "id": "0m4aN2sTKEv000", //\u4e1a\u52a1\u5bf9\u8c61ID\n            "ownerId": { //\u8d1f\u8d23\u4eba\n                "version": 128, //\u7248\u672c\u53f7\n                "active": true, //\u662f\u5426\u542f\u7528\n                "createTime": 1577066928842,\n                "updateTime": 1599061982830,\n                "nameSpell": "MAXIAO",\n                "code": "0650", //\u5458\u5de5\u7f16\u7801\n                "corporationId": "jsw646Uwfo0400", //\u4f01\u4e1aID\n                "userId": "qy01773affcc89bfb79b68c7c3f3", //\u7528\u6237ID\n                "id": "jsw646Uwfo0400:qy01773affcc89bfb79b68c7c3f3", //\u5458\u5de5ID\n                "name": "\u9a6c\u9a81", //\u5458\u5de5\u540d\u79f0\n                "avatar": "https://wework.qpic.cn/wwhead/duc2TvpEgSTPk74IwG7Bs0LwtRFOibzwibGKx05gZplOHKmNkeCqYTbO57kunGZLndVYIFEU1W3EA/0",\n                "email": "endtiger@sina.com",\n                "cellphone": "15764907096", //\u624b\u673a\u53f7\n                "note": "\u8d39\u63a7\u4ea7\u54c1\u90e8",\n                "departments": [ //\u6240\u5c5e\u90e8\u95e8\n                    "jsw646Uwfo0400:1634018471"\n                ],\n                "defaultDepartment": "jsw646Uwfo0400:1634018471", //\u9ed8\u8ba4\u90e8\u95e8\n                "external": false, //\u662f\u5426\u5916\u90e8\u4eba\u5458\n                "order": {\n                    "jsw646Uwfo0400:1634018471": "0"\n                }\n            },\n            "visibility": {\n                "fullVisible": false,\n                "staff": [],\n                "department": [],\n                "role": []\n            },\n            "useCount": 0, //\u4f7f\u7528\u6570\u91cf\n            "totalCount": 1, //\u603b\u6570\u91cf\n            "active": true, //\u662f\u5426\u6709\u6548\n            "entityId": "a90909923caa65007000",\n            "E_fa1409923caa65001000_code": "TRIP0000000007", //\u4e1a\u52a1\u5bf9\u8c61\u7f16\u7801\n            "E_fa1409923caa65001000_name": "\u8f85\u5bfc\u8d39", //\u4e1a\u52a1\u5bf9\u8c61\u540d\u79f0\n            "E_fa1409923caa65001000_\u51fa\u53d1\u5730": "[{\\"key\\":\\"858\\",\\"label\\":\\"\u4e0a\u6d77\u5e02\u533a\\"}]",\n            "E_fa1409923caa65001000_\u540c\u884c\u4eba": [\n                {\n                    "version": 304,\n                    "active": true,\n                    "createTime": 1558663461693,\n                    "updateTime": 1599061982830,\n                    "nameSpell": "YANFENG",\n                    "code": "0000275",\n                    "corporationId": "jsw646Uwfo0400",\n                    "userId": "qy01383acfcc5abfb09baabf8456",\n                    "id": "jsw646Uwfo0400:qy01383acfcc5abfb09baabf8456",\n                    "name": "\u4e25\u5cf0",\n                    "avatar": "http://wework.qpic.cn/bizmail/kDBJlOrWCQMB2h0aTIxYIgPlcPzJNWiaEYBcSovOaHD97Ig87uiaSmsA/0",\n                    "email": null,\n                    "cellphone": "18217376879",\n                    "note": null,\n                    "departments": [\n                        "jsw646Uwfo0400:1634021527"\n                    ],\n                    "defaultDepartment": "jsw646Uwfo0400:1634021527",\n                    "external": false,\n                    "order": null\n                },\n                {\n                    "version": 332,\n                    "active": true,\n                    "createTime": 1535537754582,\n                    "updateTime": 1599061982830,\n                    "nameSpell": "YUHENGZHONG",\n                    "code": "",\n                    "corporationId": "jsw646Uwfo0400",\n                    "userId": "qy01ec3a82ccfebfb19b3d851bd1",\n                    "id": "jsw646Uwfo0400:YuHengZhong",\n                    "name": "\u4e8e\u6052\u5fe0",\n                    "avatar": "http://wework.qpic.cn/bizmail/QCRMVrYlqzYk15RtjhJG9H7OicKp7H1KVeYicgL5FTyN6gsP4oS0PyRQ/0",\n                    "email": null,\n                    "cellphone": null,\n                    "note": null,\n                    "departments": [\n                        "jsw646Uwfo0400:1634018450"\n                    ],\n                    "defaultDepartment": "jsw646Uwfo0400:1634018450",\n                    "external": false,\n                    "order": null\n                },\n                {\n                    "version": 107,\n                    "active": true,\n                    "createTime": 1577721541334,\n                    "updateTime": 1599061982830,\n                    "nameSpell": "YUMENG",\n                    "code": "",\n                    "corporationId": "jsw646Uwfo0400",\n                    "userId": "qy01ae3a77cc19bfb69bb04e305b",\n                    "id": "jsw646Uwfo0400:qy01ae3a77cc19bfb69bb04e305b",\n                    "name": "\u4e8e\u68a6",\n                    "avatar": "https://wework.qpic.cn/wwhead/duc2TvpEgSTPk74IwG7Bsib2UIxz8FJVVcHF4LY94VKqp4sfLzKFG9jn6EgrwoegIZIC76lcsf4w/0",\n                    "email": null,\n                    "cellphone": null,\n                    "note": null,\n                    "departments": [\n                        "jsw646Uwfo0400:1634021552"\n                    ],\n                    "defaultDepartment": "jsw646Uwfo0400:1634021552",\n                    "external": false,\n                    "order": {\n                        "jsw646Uwfo0400:1634018435": "0"\n                    }\n                }\n            ],\n            "E_fa1409923caa65001000_\u7533\u8bf7\u4eba": {\n                "version": 128,\n                "active": true,\n                "createTime": 1577066928842,\n                "updateTime": 1599061982830,\n                "nameSpell": "MAXIAO",\n                "code": "0650",\n                "corporationId": "jsw646Uwfo0400",\n                "userId": "qy01773affcc89bfb79b68c7c3f3",\n                "id": "jsw646Uwfo0400:qy01773affcc89bfb79b68c7c3f3",\n                "name": "\u9a6c\u9a81",\n                "avatar": "https://wework.qpic.cn/wwhead/duc2TvpEgSTPk74IwG7Bs0LwtRFOibzwibGKx05gZplOHKmNkeCqYTbO57kunGZLndVYIFEU1W3EA/0",\n                "email": "endtiger@sina.com",\n                "cellphone": "15764907096",\n                "note": "\u8d39\u63a7\u4ea7\u54c1\u90e8",\n                "departments": [\n                    "jsw646Uwfo0400:1634018471"\n                ],\n                "defaultDepartment": "jsw646Uwfo0400:1634018471",\n                "external": false,\n                "order": {\n                    "jsw646Uwfo0400:1634018471": "0"\n                }\n            },\n            "E_fa1409923caa65001000_\u76ee\u7684\u5730": "[{\\"key\\":\\"2123\\",\\"label\\":\\"\u5e7f\u5dde\u5e02\u533a\\"}]",\n            "E_fa1409923caa65001000_\u51fa\u53d1\u65e5\u671f": 1586188800000,\n            "ledgers": [],\n            "plans": []\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"objectId")," \u4e0d\u53ef\u4f20\u672a\u652f\u6301\u7684\u7c7b\u578b\uff0c\u5426\u5219\u8fd4\u56de\u4e00\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 400,\n    "errorMessage": "\u6682\u4e0d\u652f\u6301\u6b64\u6269\u5c55\u7c7b\u578b\u67e5\u8be2",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')))}s.isMDXComponent=!0}}]);