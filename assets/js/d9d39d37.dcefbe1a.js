"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30077],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(d,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},o=function(e){var t=e.method,n=e.url,o=e.description,l=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return r.createElement("div",{className:a.control+" "+a[t]},r.createElement("span",{className:a.method},t),r.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),o&&r.createElement("small",null,o))}},93386:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(41627),i=["components"],d={},p="\u83b7\u53d6\u9884\u7b97\u8282\u70b9\u548c\u5b50\u8282\u70b9\u8be6\u7ec6\u4fe1\u606f(\u5206\u9875)",u={unversionedId:"open-api/budget/get-BudgetsDetails-ByPage",id:"version-v2.0/open-api/budget/get-BudgetsDetails-ByPage",title:"\u83b7\u53d6\u9884\u7b97\u8282\u70b9\u548c\u5b50\u8282\u70b9\u8be6\u7ec6\u4fe1\u606f(\u5206\u9875)",description:"\u8fd4\u56de\u67e5\u8be2\u7684\u9884\u7b97\u8282\u70b9\u548c\u5176\u5b50\u8282\u70b9\u4fe1\u606f\uff0c\u5305\u62ec\u9884\u7b97\u6267\u884c\u60c5\u51b5\u3002",source:"@site/versioned_docs/version-v2.0/open-api/budget/get-BudgetsDetails-ByPage.md",sourceDirName:"open-api/budget",slug:"/open-api/budget/get-BudgetsDetails-ByPage",permalink:"/docs/v2.0/open-api/budget/get-BudgetsDetails-ByPage",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/budget/get-BudgetsDetails-ByPage.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u9884\u7b97\u6811\u5217\u8868",permalink:"/docs/v2.0/open-api/budget/get-budget-list"},next:{title:"\u6839\u636e\u5458\u5de5\u83b7\u53d6\u5bf9\u5e94\u6743\u9650\u9884\u7b97\u8282\u70b9\u5217\u8868",permalink:"/docs/v2.0/open-api/budget/get-BudgetsDetails-ByStaff"}},s=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u83b7\u53d6\u9884\u7b97\u8282\u70b9\u548c\u5b50\u8282\u70b9\u8be6\u7ec6\u4fe1\u606f\u5206\u9875"},"\u83b7\u53d6\u9884\u7b97\u8282\u70b9\u548c\u5b50\u8282\u70b9\u8be6\u7ec6\u4fe1\u606f(\u5206\u9875)"),(0,o.kt)("p",null,"\u8fd4\u56de\u67e5\u8be2\u7684\u9884\u7b97\u8282\u70b9\u548c\u5176\u5b50\u8282\u70b9\u4fe1\u606f\uff0c\u5305\u62ec\u9884\u7b97\u6267\u884c\u60c5\u51b5\u3002"),(0,o.kt)(l.Z,{method:"GET",url:"/api/openapi/v2/budgets/$`budgetId`/query",mdxType:"Control"}),(0,o.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"budgetId")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u9884\u7b97\u6811ID"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/budget/get-budget-list"},"\u9884\u7b97\u6811ID\u83b7\u53d6"))))),(0,o.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"accessToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"nodeId")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u67e5\u8be2\u7684\u8282\u70b9ID"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/budget/get-budget-details"},"\u9884\u7b97\u8282\u70b9ID\u83b7\u53d6"),"\uff0c\u4e3a\u7a7a\u5c31\u662f\u67e5\u8be2\u6839\u8282\u70b9")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"start")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u5f00\u59cb\u4f4d\u7f6e"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u5f00\u59cb\u4f4d\u7f6e")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"count")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u6570\u91cf"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"100"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u53ef\u8d85\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"td"},"100"))))),(0,o.kt)("h2",{id:"curl"},"CURL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/budgets/$u6wbqiMW0Yqo00/query?accessToken=f_kbtOJVVwdo00&start=1&count=100' \\\n--header 'content-type: application/json' \\\n--header 'Accept: application/json'\n")),(0,o.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "nodes": [                      //\u67e5\u8be2\u7684\u9884\u7b97\u8282\u70b9\u548c\u5176\u5b50\u8282\u70b9\u4fe1\u606f\n            {\n                "id": "rd0bqiMW0Yr000",\n                "version": 10,  \n                "active": true,         //\u662f\u5426\u6fc0\u6d3b\n                "createTime": 1597314328513,\n                "updateTime": 1597314328513,\n                "nameSpell": "",\n                "code": "1001",         //\u9884\u7b97\u7f16\u7801\n                "corporationId": "zKIbl2WX4I8I00",  //\u4f01\u4e1aID\n                "nodeId": "1597314178620",          //\u8282\u70b9ID\n                "content": [                        //\u8282\u70b9\u7ef4\u5ea6\n                         {\n                             "dimensionType":"FEE_TYPE",            //\u7ef4\u5ea6\u79cd\u7c7b(DEPART: \u90e8\u95e8\uff0cPROJECT\uff1a\u6863\u6848\uff0cFEE_TYPE\uff1a\u6d88\u8d39\u7c7b\u578b\uff0cSTAFF\uff1a\u5458\u5de5)\n                             "dimensionId":"feeTypeId",             //\u7ef4\u5ea6\u79cd\u7c7b\u7684\u6807\u8bc6ID\n                             "mustLeaf":true,                       //\u7ef4\u5ea6\u662f\u5426\u5fc5\u5b9a\u4e3a\u53f6\u8282\u70b9(\u672c\u90e8)\uff0ctrue:\u975e\u672c\u7ea7 \n                             "contentId":"zKIbl2WX4I8I00:allowance" //\u7ef4\u5ea6\u5185\u5bb9ID\n                         }\n                ],\n                "moneys": [                         //\u8282\u70b9\u91d1\u989d\n                    {\n                        "nodeId": "1597314178620",  //\u9884\u7b97\u8282\u70b9ID\n                        "periodTime": "1",          //\u7b2c\u51e0\u4e2a\u5468\u671f\n                        "budgetMoney": 355000,      //\u9884\u7b97\u603b\u989d\n                        "extendMoneys": {}          //\u53c2\u8003\u91d1\u989d\n                    }\n                ],\n                "control": "FORBID",                //\u9884\u7b97\u8282\u70b9\u7684\u63a7\u5236\u65b9\u5f0f(ALLOW\uff1a\u5141\u8bb8\uff0cWARN\uff1a\u8b66\u544a\uff0cFORBID\uff1a\u7981\u6b62\uff0cIGNORED\uff1a\u4ec0\u4e48\u90fd\u4e0d\u505a)\n                "overControllerRate": 100,          //\u9884\u7b97\u8d85\u6807\u6bd4\u4f8b\n                "budgetId": "u6wbqiMW0Yqo00",       //\u9884\u7b97\u6811ID\n                "budgetVersion": 1,                 //\u9884\u7b97\u7248\u672c\n                "name": "\u9884\u7b972020",                 //\u9884\u7b97\u540d\u79f0\n                "parentId": "",                     //\u7236\u8282\u70b9ID\n                "isLeaf": false                     //\u9884\u7b97\u8282\u70b9\u662f\u5426\u662f\u53f6\u5b50\u8282\u70b9\n            },\n\n            ...\n\n        ],\n        "monies": [                  //\u8282\u70b9\u5bf9\u5e94\u7684\u9884\u7b97\u6267\u884c\u60c5\u51b5\n            {\n                "budgetId": "u6wbqiMW0Yqo00",\n                "nodeId": "1597314273579001",\n                "periodTime": "1",\n                "budgetVersion": 1,\n                "id": "u6wbqiMW0Yqo00:1:1",\n                "version": 5,\n                "active": true,\n                "createTime": 1597314330412,\n                "updateTime": 1597911655998,\n                "corporationId": "zKIbl2WX4I8I00",\n                "budgetMoney": 75000,     //\u9884\u7b97\u91d1\u989d\n                "confirmedMoney": 0,      //\u5df2\u4f7f\u7528\u91d1\u989d\n                "occupiedMoney": 30,      //\u5360\u7528\u91d1\u989d\n                "budgetMoneyRoll": 0,     //\u9884\u7b97\u91d1\u989d(\u6eda\u52a8)\n                "confirmedMoneyRoll": 0,  //\u5df2\u4f7f\u7528\u91d1\u989d(\u6eda\u52a8)\n                "occupiedMoneyRoll": 30,  //\u5360\u7528\u91d1\u989d(\u6eda\u52a8)\n                "dimensionContents": [    //\u9884\u7b97\u8282\u70b9\u5360\u7528\u7684\u5168\u7ef4\u5ea6\n                    {\n                        "dimensionType": "FEE_TYPE",            //\u7ef4\u5ea6\u79cd\u7c7b(DEPART: \u90e8\u95e8\uff0cPROJECT\uff1a\u6863\u6848\uff0cFEE_TYPE\uff1a\u6d88\u8d39\u7c7b\u578b\uff0cSTAFF\uff1a\u5458\u5de5)\n                        "dimensionId": "feeTypeId",             //\u7ef4\u5ea6\u79cd\u7c7b\u7684\u6807\u8bc6ID\n                        "mustLeaf": true,                       //\u7ef4\u5ea6\u662f\u5426\u5fc5\u5b9a\u4e3a\u53f6\u8282\u70b9(\u672c\u90e8)\n                        "contentId": "zKIbl2WX4I8I00:catering"  //\u7ef4\u5ea6\u5185\u5bb9ID\n                    }\n                ],\n                "isLeaf": true    //\u9884\u7b97\u8282\u70b9\u662f\u5426\u662f\u53f6\u5b50\u8282\u70b9\n            },\n            ...\n\n        ],\n        "count": 3,              //\u67e5\u8be2\u8282\u70b9\u548c\u5176\u5b50\u8282\u70b9\u7684\u603b\u6570\n        "visibilities": [        //\u9884\u7b97\u53ef\u89c1\u6027(\u9884\u7b97\u8d1f\u8d23\u4eba)\n            {\n                "id": "6pEbqiMW0Yrc00",\n                "version": 2,\n                "active": true,\n                "createTime": 1597314328513,\n                "updateTime": 1597994882143,\n                "corporationId": "zKIbl2WX4I8I00",  //\u4f01\u4e1a\u7f16\u53f7\n                "budgetId": "u6wbqiMW0Yqo00",       //\u9884\u7b97\u6811ID\n                "budgetVersion": 1,                 //\u9884\u7b97\u7248\u672c\n                "nodeId": "1597314178620",          //\u9884\u7b97\u8282\u70b9ID\n                "roleDefIds": ["\u89d2\u8272ID"],           //\u89d2\u8272ID\u96c6\u5408\n                "staffIds": [                       //\u5458\u5de5ID\u96c6\u5408 \n                    "zKIbl2WX4I8I00:h5wbhuSCoQh000"\n                ]  \n            }\n        ],\n        "editInChargers": [                 //\u9884\u7b97\u7f16\u5236\u4eba\n            {\n                "nodeId": "1597314178620",  //\u9884\u7b97\u8282\u70b9ID\n                "roleDefIds": [],           //\u89d2\u8272ID\u96c6\u5408\n                "staffIds": [               //\u5458\u5de5ID\u96c6\u5408\n                    "zKIbl2WX4I8I00:h5wbhuSCoQh000"\n                ],\n                "id": "uJ8bqiMW0Yro00",\n                "version": 2,\n                "active": true,\n                "createTime": 1597314329816,\n                "updateTime": 1597994882256,\n                "corporationId": "zKIbl2WX4I8I00",\n                "budgetId": "u6wbqiMW0Yqo00", //\u9884\u7b97ID\n                "budgetVersion": 1            //\u9884\u7b97\u7248\u672c\n            }\n        ]\n    }\n}\n')),(0,o.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"budgetId")," \u4e0d\u5b58\u5728\u65f6\uff0c \u8fd4\u56de\u6b64\u54cd\u5e94\u6570\u636e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 400,\n    "errorMessage": "\u4e0d\u5b58\u5728\u7684\u9884\u7b97\u5305",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')),(0,o.kt)("p",null,"\u7a0b\u5e8f\u5185\u90e8\u9519\u8bef\uff0c \u8fd4\u56de\u6b64\u54cd\u5e94\u6570\u636e\uff0c \u53ef\u5c1d\u8bd5\u518d\u6b21\u8bf7\u6c42\u83b7\u53d6\u6570\u636e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 500,\n    "errorMessage": "Format specifier \'%s\'",\n    "errorDetails": "com.ekuaibao.exile.boot.UnexpectedException: Format specifier \'%s\'\\n\\tat ------.remote error from whispered-invoice-rest[release-rest-server-668745ddf6-g8j9d/172.70.23.176](Unknown Source)"\n    "code": null,\n    "data": null\n}\n')))}m.isMDXComponent=!0}}]);