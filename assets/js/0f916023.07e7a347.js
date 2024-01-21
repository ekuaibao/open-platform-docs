"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79814],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return c}});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=a.createContext({}),i=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=i(n.components);return a.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,s=n.parentName,p=d(n,["components","mdxType","originalType","parentName"]),m=i(t),c=r,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return t?a.createElement(f,l(l({ref:e},p),{},{components:t})):a.createElement(f,l({ref:e},p))}));function c(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,l=new Array(o);l[0]=m;var d={};for(var s in e)hasOwnProperty.call(e,s)&&(d[s]=e[s]);d.originalType=n,d.mdxType="string"==typeof n?n:r,l[1]=d;for(var i=2;i<o;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41627:function(n,e,t){t.d(e,{Z:function(){return o}});var a=t(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},o=function(n){var e=n.method,t=n.url,o=n.description,l=t.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),o&&a.createElement("small",null,o))}},7468:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=t(41627),d=["components"],s={},i="\u6839\u636e\u6279\u6b21\u53f7ID\u83b7\u53d6\u652f\u4ed8\u8bb0\u5f55",p={unversionedId:"open-api/flows/get-payment-records",id:"version-v2.1/open-api/flows/get-payment-records",title:"\u6839\u636e\u6279\u6b21\u53f7ID\u83b7\u53d6\u652f\u4ed8\u8bb0\u5f55",description:"\u6839\u636e\u5355\u636e\u7684\u6279\u6b21\u53f7\u83b7\u53d6\u652f\u4ed8\u4fe1\u606f\u3002",source:"@site/versioned_docs/version-v2.1/open-api/flows/get-payment-records.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/get-payment-records",permalink:"/docs/v2.1/open-api/flows/get-payment-records",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/flows/get-payment-records.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u63d0\u4ea4\u5355\u636e\u7684\u652f\u4ed8\u7ed3\u679c",permalink:"/docs/v2.1/open-api/flows/get-payment-results"},next:{title:"\u83b7\u53d6\u7533\u8bf7\u4e8b\u9879\u5217\u8868",permalink:"/docs/v2.1/open-api/flows/get-requisition-all"}},u=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],m={toc:u};function c(n){var e=n.components,t=(0,r.Z)(n,d);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6839\u636e\u6279\u6b21\u53f7id\u83b7\u53d6\u652f\u4ed8\u8bb0\u5f55"},"\u6839\u636e\u6279\u6b21\u53f7ID\u83b7\u53d6\u652f\u4ed8\u8bb0\u5f55"),(0,o.kt)("p",null,"\u6839\u636e\u5355\u636e\u7684\u6279\u6b21\u53f7\u83b7\u53d6\u652f\u4ed8\u4fe1\u606f\u3002"),(0,o.kt)(l.Z,{method:"GET",url:"/api/openapi/v1/paymentRecord/getFlowInfo",mdxType:"Control"}),(0,o.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"accessToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,o.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"channelTradeNos")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6279\u6b21\u53f7ID"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6279\u6b21\u53f7ID")))),(0,o.kt)("h2",{id:"curl"},"CURL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/paymentRecord/getFlowInfo?accessToken=6X0byyG1Xsnk00' \\\n--header 'Content-Type: application/json' \\\n--header 'Accept: application/json' \\\n--data-raw '{\n    \"channelTradeNos\": [\"OFFLINE2020000001\", \"OFFLINE2020000002\"]\n}'\n")),(0,o.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "version": 1,                       //\u7248\u672c\u53f7\n            "active": true,                     //\u662f\u5426\u6709\u6548\uff08\u6216\u8005\u7406\u89e3\u4e3a\u662f\u5426\u88ab\u5220\u9664\uff09 true-\u6709\u6548\uff0cfalse-\u65e0\u6548\n            "createTime": 1599469765944,        //\u521b\u5efa\u65f6\u95f4(\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233)\n            "updateTime": 1599469765921,        //\u4fee\u6539\u65f6\u95f4(\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233)\n            "corporationId": "3Qobu2l0cs6k00",  //\u4f01\u4e1aID\n            "form": {\n                "code": "B20000001",            //\u5355\u636e\u7f16\u7801\n                "title": "sgsgs",               //\u5355\u636e\u6807\u9898\n                "details": [                    //\u6d88\u8d39\u660e\u7ec6\n                    {\n                        "feeTypeId": "3Qobu2l0cs6k00:office", //\u8d39\u7528\u7c7b\u578bID\uff0c\u901a\u8fc7\u3010\u83b7\u53d6\u8d39\u7528\u7c7b\u578b\u3011\u63a5\u53e3\u53ef\u83b7\u5f97\uff0c\u901a\u8fc7\u3010\u6839\u636eID\u83b7\u53d6\u8d39\u7528\u7c7b\u578b\u3011\u67e5\u8be2\u7c7b\u578b\u8be6\u60c5\n                        "feeTypeForm": {                      //\u8d39\u7528\u7c7b\u578b\u6570\u636e\u660e\u7ec6\n                            "amount": {                       //\u8d39\u7528\u91d1\u989d\n                                "standard": "124",            //\u672c\u4f4d\u5e01\n                                "standardUnit": "\u5143",         //\u672c\u4f4d\u5e01\u5355\u4f4d\n                                "standardScale": 2,           //\u672c\u4f4d\u5e01\u7cbe\u5ea6\n                                "standardSymbol": "\xa5",        //\u672c\u4f4d\u5e01\u7b26\u53f7\n                                "standardNumCode": "156",     //\u672c\u4f4d\u5e01\u6570\u5b57\u4ee3\u7801\n                                "standardStrCode": "CNY"      //\u672c\u4f4d\u5e01\u5b57\u6bcd\u4ee3\u7801\n                            },\n                            "feeDate": 1599408000000,         //\u6d88\u8d39\u65f6\u95f4(\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233)\n                            "detailId": "osobykFMBcrc00",     //\u53d1\u7968(\u975e\u5fc5\u8fd4\u56de\u5b57\u6bb5)\n                            "attachments": [],                //\u9644\u4ef6 \u53ef\u7528\u9644\u4ef6\u4fe1\u606f\u7684\u6570\u636e\u901a\u8fc7\u8c03\u7528\u3010\u83b7\u53d6\u9644\u4ef6URL\u3011\u63a5\u53e3\u6765\u83b7\u53d6\u9644\u4ef6\u6587\u4ef6\u4e0b\u8f7d\u94fe\u63a5\n                            "invoiceForm": {                  //\u53d1\u7968\u4fe1\u606f(\u975e\u5fc5\u8fd4\u56de\u5b57\u6bb5)\n                                "type": "noWrite"\n                            },\n                            "consumptionReasons": ""\n                        },\n                        "specificationId": "3Qobu2l0cs6k00:office:expense:d862ab2944ebe9369de5cafd548796be16a0dc19" //\u5355\u636e\u6a21\u7248ID\n                    }\n                ],\n                "payDate": 1599469765921, \n                "payeeId": "XnIbuIH6HQ2E00",  //\u6536\u6b3e\u4ebaID\n                "payMoney": {                 //\u652f\u4ed8\u91d1\u989d\n                    "standard": "124.00",\n                    "standardUnit": "\u5143",\n                    "standardScale": "2",\n                    "standardSymbol": "\xa5",\n                    "standardNumCode": "156",\n                    "standardStrCode": "CNY"\n                },\n                "printCount": "0",\n                "printState": "noPrint",\n                "submitDate": 1599469665928,   //\u63d0\u4ea4\u65f6\u95f4\n                "description": "",\n                "expenseDate": 1599408000000,  //\u62a5\u9500\u65f6\u95f4\n                "submitterId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00", //\u63d0\u4ea4\u4ebaID\n                "expenseMoney": {              //\u62a5\u9500\u91d1\u989d\n                    "standard": "124.00",\n                    "standardUnit": "\u5143",\n                    "standardScale": "2",\n                    "standardSymbol": "\xa5",\n                    "standardNumCode": "156",\n                    "standardStrCode": "CNY"\n                },\n                "companyRealPay": {            //\u4f01\u4e1a\u5df2\u4ed8\u91d1\u989d\n                    "standard": "0.00",\n                    "standardUnit": "\u5143",\n                    "standardScale": "2",\n                    "standardSymbol": "\xa5",\n                    "standardNumCode": "156",\n                    "standardStrCode": "CNY"\n                },\n                "paymentChannel": "OFFLINE",\n                "specificationId": "C20bu2n6osbc00:ebd338960d9053892b3fd86dfa6f31690d014de7",\n                "writtenOffMoney": {           //\u6838\u9500\u91d1\u989d\n                    "standard": "0.00",\n                    "standardUnit": "\u5143",\n                    "standardScale": "2",\n                    "standardSymbol": "\xa5",\n                    "standardNumCode": "156",\n                    "standardStrCode": "CNY"\n                },\n                "paymentAccountId": "3Qobu2l0cs6k00:BANK",\n                "expenseDepartment": "3Qobu2l0cs6k00",\n                "timeToEnterPendingPayment": 1599469751158\n            },\n            "ownerId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",  //\u6d41\u7a0b\u53d1\u8d77\u4ebaID\n            "ownerDefaultDepartment": "3Qobu2l0cs6k00",  //\u6d41\u7a0b\u53d1\u8d77\u4eba\u9ed8\u8ba4\u90e8\u95e8ID\n            "state": "paid",                             //\u6d41\u7a0b\u72b6\u6001 pending-\u63d0\u4ea4\u4e2d approving-\u5ba1\u6279\u4e2d paying-\u5f85\u652f\u4ed8 PROCESSING-\u652f\u4ed8\u4e2d paid-\u5df2\u652f\u4ed8 archived-\u5f52\u6863 sending-\u5bc4\u9001\u4e2d receiving-\u6536\u5355\u4e2d\n            "flowType": "freeflow",                      //\u6d41\u7a0b\u7c7b\u578b\n            "formType": "expense",                       //\u5355\u636e\u7c7b\u578b expense-\u62a5\u9500\u5355 requisition-\u7533\u8bf7\u5355  loan-\u501f\u6b3e\u5355 permit-\u6388\u6743\u5355 custom-\u57fa\u7840\u5355\u636e\n            "logs": [\n                {\n                    "action": "freeflow.submit",\n                    "state": "approving",\n                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",\n                    "nextOperatorId": "ebot",\n                    "nextOperatorIds": [],\n                    "time": 1599469672798,\n                    "attributes": {\n                        "nextId": "FLOW:1107581706:1439535759",\n                        "nodeId": "SUBMIT",\n                        "comment": "",\n                        "isUrgent": false,\n                        "nextName": "\u8d39\u7528\u6807\u51c6\u68c0\u67e5",\n                        "urgentReason": null,\n                        "resubmitMethod": "FROM_START",\n                        "nextCounterSign": false,\n                        "sensitiveContent": null,\n                        "resubmitOperatorIds": []\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                },\n                {\n                    "action": "freeflow.agree",\n                    "state": "approving",\n                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",\n                    "nextOperatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "nextOperatorIds": [],\n                    "time": 1599469700889,\n                    "attributes": {\n                        "nextId": "FLOW:576447118:557814958",\n                        "nodeId": "FLOW:826115405:1409479521",\n                        "comment": "",\n                        "complete": true,\n                        "nextName": "\u603b\u7ecf\u7406\u5ba1\u6279",\n                        "expressNum": null,\n                        "isEbotNode": false,\n                        "counterSign": false,\n                        "nextCounterSign": false,\n                        "autographImageId": null\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                },\n                {\n                    "action": "freeflow.agree",\n                    "state": "approving",\n                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",\n                    "nextOperatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "nextOperatorIds": [],\n                    "time": 1599469740670,\n                    "attributes": {\n                        "nextId": "FLOW:1819409373:499160992",\n                        "nodeId": "FLOW:576447118:557814958",\n                        "comment": "",\n                        "complete": true,\n                        "nextName": "\u8d22\u52a1\u590d\u6838",\n                        "expressNum": null,\n                        "isEbotNode": false,\n                        "counterSign": false,\n                        "nextCounterSign": false,\n                        "autographImageId": null\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                },\n                {\n                    "action": "freeflow.agree",\n                    "state": "paying",\n                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",\n                    "nextOperatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "nextOperatorIds": [],\n                    "time": 1599469751158,\n                    "attributes": {\n                        "nextId": "FLOW:1384184901:409145774",\n                        "nodeId": "FLOW:1819409373:499160992",\n                        "comment": "",\n                        "complete": true,\n                        "nextName": "\u51fa\u7eb3\u652f\u4ed8",\n                        "expressNum": null,\n                        "isEbotNode": false,\n                        "counterSign": false,\n                        "nextCounterSign": false,\n                        "autographImageId": null\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                },\n                {\n                    "action": "freeflow.paying",\n                    "state": "paying",\n                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",\n                    "nextOperatorId": null,\n                    "nextOperatorIds": [],\n                    "time": 1599469764045,\n                    "attributes": {\n                        "nodeId": "FLOW:1384184901:409145774",\n                        "comment": null,\n                        "failureReason": "",\n                        "channelTradeNo": "OFFLINE2020000002",\n                        "paymentChannel": "OFFLINE",\n                        "autographImageId": null,\n                        "paymentAccountId": "3Qobu2l0cs6k00:BANK"\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                },\n                {\n                    "action": "freeflow.pay",\n                    "state": "paid",\n                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",\n                    "nextOperatorId": null,\n                    "nextOperatorIds": [],\n                    "time": 1599469765921,\n                    "attributes": {\n                        "nodeId": "FLOW:1384184901:409145774",\n                        "comment": "",\n                        "failureReason": "",\n                        "channelTradeNo": "OFFLINE2020000002",\n                        "paymentChannel": "OFFLINE",\n                        "autographImageId": null,\n                        "paymentAccountId": "3Qobu2l0cs6k00:BANK"\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                }\n            ],\n            "actions": {             //\u64cd\u4f5c\u4eba\u53ef\u6267\u884c\u5230\u52a8\u4f5c\uff1akey\u662f\u64cd\u4f5c\u4eba\u7684\u5458\u5de5ID\uff1bvalue\u662f\u52a8\u4f5c\u540d\u79f0\n                "3Qobu2l0cs6k00:dIEbu2mgTs6o00": [\n                    "freeflow.archive",\n                    "freeflow.copy"\n                ]\n            },\n            "invoiceRemind": false,\n            "id": "17wbykFMBcq000"   //\u5355\u636eID\uff0c\u5bf9\u5e94\u5176\u4ed6api\u7684flowId\n        },\n        {\n            "version": 1,\n            "active": true,\n            "createTime": 1599468317968,\n            "updateTime": 1599468317945,\n            "corporationId": "3Qobu2l0cs6k00",\n            "form": {\n                "code": "J20000002",\n                "title": "gt",\n                "payDate": 1599468317945,\n                "payeeId": "XnIbuIH6HQ2E00",\n                "loanDate": 1599468240000,\n                "payMoney": {\n                    "standard": "600",\n                    "standardUnit": "\u5143",\n                    "standardScale": 2,\n                    "standardSymbol": "\xa5",\n                    "standardNumCode": "156",\n                    "standardStrCode": "CNY"\n                },\n                "loanMoney": {\n                    "st`andard": "600",\n                    "standardUnit": "\u5143",\n                    "standardScale": 2,\n                    "standardSymbol": "\xa5",\n                    "standardNumCode": "156",\n                    "stan`dardStrCode": "CNY"\n                },\n                "printCount": "0",\n                "printState": "noPrint",\n                "submitDate": 1599468258338,\n                "attachments": [],\n                "description": "",\n                "submitterId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                "repaymentDate": 1602060240000,\n                "loanDepartment": "3Qobu2l0cs6k00",\n                "paymentChannel": "OFFLINE",\n                "specificationId": "jOgbu2n6osbY00:4ee314c57d8f2d595ae84274e15f6805101db743",\n                "paymentAccountId": "3Qobu2l0cs6k00:BANK",\n                "timeToEnterPendingPayment": 1599468299421\n            },\n            "ownerId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n            "ownerDefaultDepartment": "3Qobu2l0cs6k00",\n            "state": "paid",\n            "flowType": "freeflow",\n            "formType": "loan",\n            "logs": [\n                {\n                    "action": "freeflow.submit",\n                    "state": "approving",\n                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",\n                    "nextOperatorId": "ebot",\n                    "nextOperatorIds": [],\n                    "time": 1599468259147,\n                    "attributes": {\n                        "nextId": "FLOW:1643288510:382532198",\n                        "nodeId": "SUBMIT",\n                        "comment": "",\n                        "isUrgent": false,\n                        "nextName": "\u8d39\u7528\u6807\u51c6\u68c0\u67e5",\n                        "urgentReason": null,\n                        "resubmitMethod": "FROM_START",\n                        "nextCounterSign": false,\n                        "sensitiveContent": null,\n                        "resubmitOperatorIds": []\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                },\n                {\n                    "action": "freeflow.agree",\n                    "state": "approving",\n                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",\n                    "nextOperatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "nextOperatorIds": [],\n                    "time": 1599468280143,\n                    "attributes": {\n                        "nextId": "FLOW:694821774:295031507",\n                        "nodeId": "FLOW:1064632976:1365741553",\n                        "comment": "",\n                        "complete": true,\n                        "nextName": "\u603b\u7ecf\u7406\u5ba1\u6279",\n                        "expressNum": null,\n                        "isEbotNode": false,\n                        "counterSign": false,\n                        "nextCounterSign": false,\n                        "autographImageId": null\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                },\n                {\n                    "action": "freeflow.agree",\n                    "state": "approving",\n                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",\n                    "nextOperatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "nextOperatorIds": [],\n                    "time": 1599468287415,\n                    "attributes": {\n                        "nextId": "FLOW:1706542521:973252507",\n                        "nodeId": "FLOW:694821774:295031507",\n                        "comment": "",\n                        "complete": true,\n                        "nextName": "\u8d22\u52a1\u590d\u6838",\n                        "expressNum": null,\n                        "isEbotNode": false,\n                        "counterSign": false,\n                        "nextCounterSign": false,\n                        "autographImageId": null\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                },\n                {\n                    "action": "freeflow.agree",\n                    "state": "paying",\n                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",\n                    "nextOperatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "nextOperatorIds": [],\n                    "time": 1599468299421,\n                    "attributes": {\n                        "nextId": "FLOW:826542045:1015144047",\n                        "nodeId": "FLOW:1706542521:973252507",\n                        "comment": "",\n                        "complete": true,\n                        "nextName": "\u51fa\u7eb3\u652f\u4ed8",\n                        "expressNum": null,\n                        "isEbotNode": false,\n                        "counterSign": false,\n                        "nextCounterSign": false,\n                        "autographImageId": null\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                },\n                {\n                    "action": "freeflow.paying",\n                    "state": "paying",\n                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",\n                    "nextOperatorId": null,\n                    "nextOperatorIds": [],\n                    "time": 1599468314767,\n                    "attributes": {\n                        "nodeId": "FLOW:826542045:1015144047",\n                        "comment": null,\n                        "failureReason": "",\n                        "channelTradeNo": "OFFLINE2020000001",\n                        "paymentChannel": "OFFLINE",\n                        "autographImageId": null,\n                        "paymentAccountId": "3Qobu2l0cs6k00:BANK"\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                },\n                {\n                    "action": "freeflow.pay",\n                    "state": "paid",\n                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",\n                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",\n                    "nextOperatorId": null,\n                    "nextOperatorIds": [],\n                    "time": 1599468317945,\n                    "attributes": {\n                        "nodeId": "FLOW:826542045:1015144047",\n                        "comment": "",\n                        "failureReason": "",\n                        "channelTradeNo": "OFFLINE2020000001",\n                        "paymentChannel": "OFFLINE",\n                        "autographImageId": null,\n                        "paymentAccountId": "3Qobu2l0cs6k00:BANK"\n                    },\n                    "modifyFlowLog": null,\n                    "attachments": []\n                }\n            ],\n            "actions": {\n                "3Qobu2l0cs6k00:dIEbu2mgTs6o00": [\n                    "freeflow.archive",\n                    "freeflow.copy"\n                ]\n            },\n            "invoiceRemind": false,\n            "id": "z0cbykkgi4to00"\n        }\n    ]\n}\n\n')),(0,o.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"400")),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u652f\u4ed8\u8bb0\u5f55\u4e0d\u5b58\u5728"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"td"},"channelTradeNos"),"\uff08\u6279\u6b21\u53f7ID\uff09\u662f\u5426\u6b63\u786e")))))}c.isMDXComponent=!0}}]);