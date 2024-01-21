"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5745],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(d,".").concat(u)]||m[u]||s[u]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},o=function(e){var t=e.method,n=e.url,o=e.description,l=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[t]},a.createElement("span",{className:r.method},t),a.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),o&&a.createElement("small",null,o))}},22477:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(41627),i=["components"],d={},p="\u83b7\u53d6\u4f01\u4e1a\u5bf9\u8d26\u5355\u7ba1\u7406\u7684\u5b50\u5bf9\u8d26\u5355",c={unversionedId:"open-api/flows/get-flow-by-checkingId",id:"open-api/flows/get-flow-by-checkingId",title:"\u83b7\u53d6\u4f01\u4e1a\u5bf9\u8d26\u5355\u7ba1\u7406\u7684\u5b50\u5bf9\u8d26\u5355",description:"\u6839\u636e\u5bf9\u8d26\u5355ID\u83b7\u53d6\u8be5\u5bf9\u8d26\u5355\u6240\u7ba1\u7406\u7684\u5b50\u5bf9\u8d26\u5355\u8be6\u60c5\uff0c\u5b50\u5bf9\u8d26\u5355\u5c31\u662f\u4e00\u4e2a\u4e2a\u7684\u62a5\u9500\u5355\u3002",source:"@site/docs/open-api/flows/get-flow-by-checkingId.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/get-flow-by-checkingId",permalink:"/docs/next/open-api/flows/get-flow-by-checkingId",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/flows/get-flow-by-checkingId.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u5355\u636e\u6284\u9001\u6d88\u606f",permalink:"/docs/next/open-api/flows/get-carboncopy"},next:{title:"\u5e38\u89c1\u95ee\u9898\u603b\u7ed3",permalink:"/docs/next/open-api/flows/question-answer"}},s=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[{value:"\u7cfb\u7edf\u4e2d\u5bf9\u8d26\u5355\u6240\u5728\u4f4d\u7f6e",id:"\u7cfb\u7edf\u4e2d\u5bf9\u8d26\u5355\u6240\u5728\u4f4d\u7f6e",children:[],level:3}],level:2}],m={toc:s};function u(e){var t=e.components,d=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u83b7\u53d6\u4f01\u4e1a\u5bf9\u8d26\u5355\u7ba1\u7406\u7684\u5b50\u5bf9\u8d26\u5355"},"\u83b7\u53d6\u4f01\u4e1a\u5bf9\u8d26\u5355\u7ba1\u7406\u7684\u5b50\u5bf9\u8d26\u5355"),(0,o.kt)("p",null,"\u6839\u636e\u5bf9\u8d26\u5355ID\u83b7\u53d6\u8be5\u5bf9\u8d26\u5355\u6240\u7ba1\u7406\u7684\u5b50\u5bf9\u8d26\u5355\u8be6\u60c5\uff0c\u5b50\u5bf9\u8d26\u5355\u5c31\u662f\u4e00\u4e2a\u4e2a\u7684\u62a5\u9500\u5355\u3002"),(0,o.kt)(l.Z,{method:"GET",url:"/api/openapi/v1/getFlowByCheckingId",mdxType:"Control"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,o.kt)("div",null,(0,o.kt)("p",null,"  ",(0,o.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#07139"},(0,o.kt)("strong",{parentName:"a"},"0.7.139"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,o.kt)("br",null)))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u9700\u8981\u5f00\u901a\u3010",(0,o.kt)("strong",{parentName:"li"},"\u5bf9\u8d26\u7ed3\u7b97\u7ba1\u7406"),"\u3011\u529f\u80fd\u65b9\u53ef\u89c1\u3010",(0,o.kt)("strong",{parentName:"li"},"\u5bf9\u8d26\u7ed3\u7b97\u4e2d\u5fc3"),"\u3011\u6a21\u5757\u3002")))),(0,o.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"accessToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"checkingBillId")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5bf9\u8d26\u5355ID"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5bf9\u8d26\u7ed3\u7b97\u4e2d\u5fc3 -> ",(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/flows/get-flow-by-checkingId#%E7%B3%BB%E7%BB%9F%E4%B8%AD%E5%AF%B9%E8%B4%A6%E5%8D%95%E6%89%80%E5%9C%A8%E4%BD%8D%E7%BD%AE"},"\u5bf9\u8d26\u7ed3\u7b97\u4e2d\u6bcf\u6761\u6570\u636e\u5bf9\u5e94\u7684ID"))))),(0,o.kt)("h2",{id:"curl"},"CURL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/getFlowByCheckingId?checkingBillId=ID_3hCyl5N02eI&accessToken=FsYc5j4FlclU00' \\\n--header 'content-type: application/json' \\\n--header 'Accept: application/json'\n")),(0,o.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "pipeline": 1, \n            "version": 4, \n            "active": true,\n            "createTime": 1626336244716,           //\u521b\u5efa\u65f6\u95f4\n            "updateTime": 1626336244711,\n            "corporationId": "NXAcoInh6A0000",     //\u4f01\u4e1aID\n            "sourceCorporationId": null,\n            "dataCorporationId": null,\n            "form": {                              //\u5355\u636e\u8be6\u60c5\n                "code": "B21000015",               //\u5355\u636e\u7f16\u53f7\n                "title": "07\u6708\u6d88\u8d39\u5bf9\u8d26\u5355",          //\u5355\u636e\u6807\u9898\n                "details": [                       //\u8868\u5355\u660e\u7ec6\u6570\u636e\n                    {\n                        "feeTypeId": "ID_3h6EQYv0dfo",      //\u8d39\u7528\u7c7b\u578bID \u901a\u8fc7\u3010\u83b7\u53d6\u8d39\u7528\u7c7b\u578b\u3011\u63a5\u53e3\u53ef\u83b7\u5f97\uff0c\u901a\u8fc7\u3010\u6839\u636eID\u83b7\u53d6\u8d39\u7528\u7c7b\u578b\u3011\u67e5\u8be2\u7c7b\u578b\u8be6\u60c5\n                        "feeTypeForm": {                    //\u8d39\u7528\u7c7b\u578b\u6570\u636e\u660e\u7ec6\n                            "amount": {                     //\u8d39\u7528\u91d1\u989d\n                                "standard": "200.00",       //\u672c\u4f4d\u5e01\n                                "standardUnit": "\u7f8e\u5143",     //\u672c\u4f4d\u5e01\u5355\u4f4d\n                                "standardScale": "4",       //\u672c\u4f4d\u5e01\u7cbe\u5ea6\n                                "standardSymbol": "$",      //\u672c\u4f4d\u5e01\u7b26\u53f7\n                                "standardNumCode": "1560",  //\u672c\u4f4d\u5e01\u6570\u5b57\u4ee3\u7801\n                                "standardStrCode": "\u7f8e\u65e0"   //\u672c\u4f4d\u5e01\u5b57\u6bcd\u4ee3\u7801\n                            },\n                            "feeDate": 1622505660000,       //\u6d88\u8d39\u65f6\u95f4(\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233)\n                            "detailId": "ID_3hCyl5N06cI",\n                            "invoiceForm": {                //\u53d1\u7968\u4fe1\u606f\n                                "type": "unify",\n                                "invoiceCorporationId": "ID_3h6s0Vv1B68"\n                            },\n                            "system_statement": "ID_3hCyl5N04fI"\n                        },\n                        "specificationId": "ID_3h6EQYv0dfo:expense:fc9c53be16af79f8bb2b1bf06d2ed61ab2a68892"\n                    },\n                    {\n                        "feeTypeId1": "ID_3h6EQYv0dfo123",\n                        "feeTypeForm": {\n                            "amount": {\n                                "standard22": "300.00",\n                                "standardScale": "2",\n                                "standardUnit2": "\u5143",\n                                "standardSymbol": "\xa5",\n                                "standardNumCode": "156",\n                                "standardStrCode": "CNY"\n                            },\n                            "feeDate": 1622505660000,\n                            "detailId": "ID_3hCyl5N07do",\n                            "invoiceForm": {\n                                "type": "unify",\n                                "invoiceCorporationId": "ID_3h6s0Vv1B68"\n                            }\n                        },\n                        "specificationId2": "ID_3h6EQYv0dfo:expense:fc9c53be16af79f8bb2b1bf06d2ed61ab2a68892"\n                    }\n                ],\n                "voucherNo": "",\n                "printCount": "0",\n                "printState": "noPrint",\n                "submitDate": 1626336162283,                    //\u63d0\u4ea4\u65f6\u95f4\n                "submitterId": "NXAcoInh6A0000:v8IbsROYUw7c00", //\u63d0\u4ea4\u4ebaID\n                "expenseLinks": [],\n                "expenseMoney": {                               //\u62a5\u9500\u91d1\u989d\n                    "standard": "1730.00",\n                    "standardUnit": "\u5143",\n                    "standardScale": 2,\n                    "standardSymbol": "\xa5",\n                    "standardNumCode": "156",\n                    "standardStrCode": "CNY"\n                },\n                "voucherStatus": "\u672a\u751f\u6210",\n                "specificationId": "NXAcoInh6A0000:system:\u5bf9\u8d26\u5355:f5dcb4ed5447b79c55ed5c183602877659124fef", //\u5355\u636e\u6a21\u677fID\n                "writtenOffMoney": {                  //\u6838\u9500\u91d1\u989d\n                    "standard": "0.00",\n                    "standardUnit": "\u5143",\n                    "standardScale": 2,\n                    "standardSymbol": "\xa5",\n                    "standardNumCode": "156",\n                    "standardStrCode": "CNY"\n                },\n                "voucherCreateTime": 0\n            },\n            "ownerId": "NXAcoInh6A0000:v8IbsROYUw7c00", //\u6240\u5c5e\u4ebaID\n            "ownerDefaultDepartment": "NXAcoInh6A0000",\n            "state": "draft",\n            "flowType": "freeflow",               //\u6d41\u7a0b\u7c7b\u578b\n            "formType": "expense",                //\u5355\u636e\u7c7b\u578b\n            "logs": [                             //\u5ba1\u6279\u8bb0\u5f55\n                {\n                    "action": "freeflow.submit",  //\u52a8\u4f5c\u540d\u79f0\n                    "state": "approving",         //\u64cd\u4f5c\u540e\u5230\u6d41\u7a0b\u72b6\u6001\n                    "operatorId": "NXAcoInh6A0000:v8IbsROYUw7c00", //\u64cd\u4f5c\u4ebaID\n                    "byDelegateId": null,\n                    "operatorDefaultDepartment": "NXAcoInh6A0000", //\u64cd\u4f5c\u4eba\u9ed8\u8ba4\u90e8\u95e8ID\n                    "nextOperatorId": "ebot",                      //\u4e0b\u4e00\u64cd\u4f5c\u4ebaID\n                    "nextOperatorIds": [],                         //\u4f1a\u7b7e\u65f6\u7684\u4e0b\u4e00\u6279\u64cd\u4f5c\u4ebaID\n                    "time": 1626336177977,\n                    "attributes": {\n                        "nextId": "ID_3hCyCwP05cs",\n                        "nodeId": "SUBMIT",\n                        "comment": "",\n                        "isUrgent": false,\n                        "nextName": "\u8d39\u7528\u6807\u51c6\u68c0\u67e5",\n                        "urgentReason": "",\n                        "resubmitMethod": "FROM_START",\n                        "nextCounterSign": false,\n                        "sensitiveContent": "",\n                        "resubmitOperatorIds": []\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                },\n                {\n                    "action": "freeflow.agree",\n                    "state": "paid",\n                    "operatorId": "NXAcoInh6A0000:v8IbsROYUw7c00",\n                    "byDelegateId": null,\n                    "operatorDefaultDepartment": "NXAcoInh6A0000",\n                    "nextOperatorId": null,\n                    "nextOperatorIds": [],\n                    "time": 1626336244711,\n                    "attributes": {\n                        "nextId": null,\n                        "nodeId": "ID_3hCyCwP063M",\n                        "comment": "\u540c\u610f",\n                        "complete": true,\n                        "nextName": null,\n                        "nodeName": "\u4e3b\u7ba1\u5ba1\u6279",\n                        "expressNum": null,\n                        "isEbotNode": false,\n                        "counterSign": false,\n                        "isRecalNode": false,\n                        "oldFlowPlanId": null,\n                        "nextCounterSign": false,\n                        "autographImageId": null\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                }\n            ],\n            "actions": {\n                "NXAcoInh6A0000:v8IbsROYUw7c00": [\n                    "freeflow.archive",\n                    "freeflow.copy"\n                ]\n            },\n            "invoiceRemind": false,\n            "id": "ID_3hCyl5N0gdg"\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"200")),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},'{"items": []}')),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u7a7a\u8868\u793a\u6ca1\u6709\u67e5\u8be2\u5230\u5b50\u5bf9\u8d26\u5355\u6570\u636e",(0,o.kt)("br",null),"\u8bf7\u786e\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"td"},"checkingBillId"),"\uff08\u5bf9\u8d26\u5355ID\uff09\u662f\u5426\u6b63\u786e")))),(0,o.kt)("h3",{id:"\u7cfb\u7edf\u4e2d\u5bf9\u8d26\u5355\u6240\u5728\u4f4d\u7f6e"},"\u7cfb\u7edf\u4e2d\u5bf9\u8d26\u5355\u6240\u5728\u4f4d\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f01\u4e1a\u5bf9\u8d26\u5355\n",(0,o.kt)("img",{alt:"\u4f01\u4e1a\u5bf9\u8d26\u5355",src:n(39186).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b50\u5bf9\u8d26\u5355\u6982\u89c8\n",(0,o.kt)("img",{alt:"\u5b50\u5bf9\u8d26\u5355\u6982\u89c8",src:n(54001).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b50\u5bf9\u8d26\u5355\u8be6\u60c5\n",(0,o.kt)("img",{alt:"\u5b50\u5bf9\u8d26\u5355\u8be6\u60c5",src:n(24202).Z})))))}u.isMDXComponent=!0},39186:function(e,t,n){t.Z=n.p+"assets/images/\u4f01\u4e1a\u5bf9\u8d26\u5355-11f6b4bbe13d0b71f046258e947dbe2f.png"},54001:function(e,t,n){t.Z=n.p+"assets/images/\u5b50\u5bf9\u8d26\u5355\u6982\u89c8-dbbb58988193d53609aa450f3c42efdb.png"},24202:function(e,t,n){t.Z=n.p+"assets/images/\u5b50\u5bf9\u8d26\u5355\u8be6\u60c5-0e6cb4451d94652f2613b82020869c32.png"}}]);