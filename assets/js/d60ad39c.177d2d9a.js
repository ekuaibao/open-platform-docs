"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25913],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,f=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(f,o(o({ref:e},s),{},{components:n})):a.createElement(f,o({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&a.createElement("small",null,l))}},71707:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(41627),i=["components"],d={},p="\u83b7\u53d6\u968f\u624b\u8bb0\u6570\u636e",s={unversionedId:"open-api/flows/get-notes",id:"version-v2.2/open-api/flows/get-notes",title:"\u83b7\u53d6\u968f\u624b\u8bb0\u6570\u636e",description:"\u6839\u636e\u6307\u5b9a\u5458\u5de5ID\u67e5\u8be2\u968f\u624b\u8bb0\u6570\u636e\u3002",source:"@site/versioned_docs/version-v2.2/open-api/flows/get-notes.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/get-notes",permalink:"/docs/open-api/flows/get-notes",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.2/open-api/flows/get-notes.md",tags:[],version:"v2.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5355\u636e\u76f8\u5173\u5b57\u6bb5\u7c7b\u578b",permalink:"/docs/open-api/flows/forms-state"},next:{title:"\u83b7\u53d6\u5355\u636e\u5217\u8868(\u65b0)",permalink:"/docs/open-api/flows/get-forms-details-byStaff"}},m=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],u={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6\u968f\u624b\u8bb0\u6570\u636e"},"\u83b7\u53d6\u968f\u624b\u8bb0\u6570\u636e"),(0,l.kt)("p",null,"\u6839\u636e\u6307\u5b9a\u5458\u5de5ID\u67e5\u8be2\u968f\u624b\u8bb0\u6570\u636e\u3002"),(0,l.kt)(o.Z,{method:"GET",url:"/api/openapi/v1/withNotes/search",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#151"},(0,l.kt)("strong",{parentName:"a"},"1.5.1"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"staffId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-staff-ids"},"\u67e5\u8be2\u5458\u5de5")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"start")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5206\u9875\u67e5\u8be2\u7684\u8d77\u59cb\u5e8f\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5206\u9875\u7684\u8d77\u59cb\u503c\u662f\u4ece ",(0,l.kt)("inlineCode",{parentName:"td"},"0")," \u5f00\u59cb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"count")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u6570\u636e\u6761\u6570"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u4e0d\u80fd\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"td"},"100"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"stage")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u968f\u624b\u8bb0\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"expense"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"expense")," : \u62a5\u9500",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"requisition")," : \u7533\u8bf7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"startTime")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u5f00\u59cb\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6309\u6570\u636e ",(0,l.kt)("strong",{parentName:"td"},"\u521b\u5efa\u65f6\u95f4")," \u67e5\u8be2\uff0c\u683c\u5f0f\uff1ayyyy-MM-dd HH:mm:ss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"endTime")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u7ed3\u675f\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6309\u6570\u636e ",(0,l.kt)("strong",{parentName:"td"},"\u521b\u5efa\u65f6\u95f4")," \u67e5\u8be2\uff0c\u683c\u5f0f\uff1ayyyy-MM-dd HH:mm:ss")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/withNotes/search?accessToken=ID_3GeTr663LRw:bwa3wajigF0WH0&staffId=bwa3wajigF0WH0:ID_3lokDfb1p5w&stage=expense&start=1&count=100&startTime=&endTime='\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 2,              //\u67e5\u8be2\u5230\u7684\u968f\u624b\u8bb0\u603b\u6570\n    "items": [\n        {\n            "pipeline": 1,\n            "grayver": "9.27.0.0:A",\n            "version": 6,\n            "active": true,\n            "createTime": 1652759177414,  //\u521b\u5efa\u65f6\u95f4\n            "updateTime": 1652784352805,  //\u66f4\u65b0\u65f6\u95f4\n            "name": "CODE1-1&2",                 \n            "nameSpell": "CODE1-1&2",\n            "code": "ID_3Gdmy$77eRM",\n            "corporationId": "bwa3wajigF0WH0",  \n            "sourceCorporationId": null,\n            "dataCorporationId": null,\n            "id": "ID_3Gdmy$77eRM",     //\u968f\u624b\u8bb0\u6570\u636eID\n            "form": {                   //\u968f\u624b\u8bb0\u6570\u636e\n                "code": "ID_3Gdmy$77eRM",\n                "name": "CODE1-1&200",  //\u540d\u79f0\uff0c\u683c\u5f0f\uff1a\u8d39\u7528\u7c7b\u578b\u540d\u79f0&\u8d39\u7528\u91d1\u989d\n                "stage": "expense",     //\u968f\u624b\u8bb0\u7c7b\u578b\n                "state": "draft",       //\u72b6\u6001\n                "amount": {             //\u8d39\u7528\u91d1\u989d\n                    "standard": "200",  \n                    "standardUnit": "\u5143",\n                    "standardScale": 2,\n                    "standardSymbol": "\xa5",\n                    "standardNumCode": "156",\n                    "standardStrCode": "CNY"\n                },\n                "feeDate": 1635696000000,     //\u6d88\u8d39\u65e5\u671f\n                "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",  //\u6240\u5c5e\u5458\u5de5\n                "detailId": "ID_3Gdmy$77eRM", \n                "linkType": "NOTES",\n                "feeTypeId": "ID_3BJKZuv0pow", //\u8d39\u7528\u7c7b\u578bID\n                "detailType": "detail",\n                "attachments": [               //\u9644\u4ef6\n                    {\n                        "key": "\u53d1\u7968-1652774426618-205.jpg",\n                        "fileId": "ID_3GdAvBl2TBM",\n                        "fileName": "\u53d1\u7968.jpg"\n                    }\n                ],\n                "invoiceForm": {              //\u53d1\u7968\u4fe1\u606f\n                    "type": "exist",          //\u53d1\u7968\u7c7b\u578b\uff0cexist\uff1a\u5df2\u6709\u53d1\u7968\uff0cnoWrite\uff1a\u65e0\u9700\u586b\u5199\n                    "invoices": [             //\u53d1\u7968\u5173\u8054\u4fe1\u606f\n                        {\n                            "itemIds": [      //\u53d1\u7968\u660e\u7ec6ID\n                                "ID_3Ettl$U0JSg"\n                            ],\n                            "taxRate": 0,     //\u7a0e\u7387\n                            "invoiceId": "bwa3wajigF0WH0:011002100511:35889578",  //\u53d1\u7968ID\n                            "taxAmount": {    //\u53ef\u62b5\u6263\u7a0e\u989d\n                                "standard": 0,\n                                "standardUnit": "\u5143",\n                                "standardScale": 2,\n                                "standardSymbol": "\xa5",\n                                "standardNumCode": "156",\n                                "standardStrCode": "CNY"\n                            }\n                        }\n                    ]\n                },\n                "consumptionReasons": "\u6d4b\u8bd51",  //\u6d88\u8d39\u4e8b\u7531\n                "specificationId": "ID_3BJKZuv0pow:expense:c30eed4cd82619ad6c176089789444d0ea2dd2ea"  //\u8d39\u7528\u7c7b\u578b\u6a21\u677fID\n            },\n            "ledgerAmount": null,\n            "ledgerAmountModel": null,\n            "totalCount": 1,\n            "useCount": 0,\n            "entityId": "ba0e026b717a0135a000",\n            "platformId": "ID_3w9HsnE0Oq0",\n            "source": "WRITE",  //\u6765\u6e90\n            "masterId": null,\n            "index": 0,\n            "visibility": {\n                "fullVisible": true,\n                "staffs": [],\n                "roles": [],\n                "departments": [],\n                "departmentsIncludeChildren": true\n            },\n            "visible": true,\n            "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",\n            "operatorId": null,\n            "sourceId": "",\n            "selfPlannedConfigs": null,\n            "rigidControlPassed": true,\n            "controlCalcVersion": 0,\n            "flowCounts": {},\n            "sourceMessage": ""\n        },\n        {\n            "pipeline": 1,\n            "grayver": "9.27.0.0:A",\n            "version": 5,\n            "active": true,\n            "createTime": 1652759057997,\n            "updateTime": 1652784352805,\n            "name": "\u968f\u624b\u8bb0\u8d39\u7528&1",\n            "nameSpell": "SUISHOUJIFEIYONG&1",\n            "code": "ID_3Gdmy$76uRM",\n            "corporationId": "bwa3wajigF0WH0",\n            "sourceCorporationId": null,\n            "dataCorporationId": null,\n            "id": "ID_3Gdmy$76uRM",\n            "form": {\n                "code": "ID_3Gdmy$76uRM",\n                "name": "\u968f\u624b\u8bb0\u8d39\u7528&1",\n                "stage": "expense",\n                "state": "draft",\n                "amount": {\n                    "standard": "1",\n                    "standardUnit": "\u5143",\n                    "standardScale": 2,\n                    "standardSymbol": "\xa5",\n                    "standardNumCode": "156",\n                    "standardStrCode": "CNY"\n                },\n                "feeDate": 1652716800000,\n                "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",\n                "detailId": "ID_3Gdmy$76uRM",\n                "linkType": "NOTES",\n                "feeTypeId": "bwa3wajigF0WH0:notes",\n                "detailType": "detail",\n                "attachments": [\n                    {\n                        "key": "charge-1652774444387-225.png",\n                        "fileId": "ID_3GdAvBl2YBM",\n                        "fileName": "charge.png"\n                    }\n                ],\n                "invoiceForm": {\n                    "type": "noWrite",\n                    "invoices": []\n                },\n                "consumptionReasons": "\u6d4b\u8bd52",\n                "specificationId": "bwa3wajigF0WH0:notes:expense:cd212835ca7d10f418badcae457decab2d8aabd8"\n            },\n            "ledgerAmount": null,\n            "ledgerAmountModel": null,\n            "totalCount": 1,\n            "useCount": 0,\n            "entityId": "ba0e026b717a0135a000",\n            "platformId": "ID_3w9HsnE0Oq0",\n            "source": "WRITE",\n            "masterId": null,\n            "index": 0,\n            "visibility": {\n                "fullVisible": true,\n                "staffs": [],\n                "roles": [],\n                "departments": [],\n                "departmentsIncludeChildren": true\n            },\n            "visible": true,\n            "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",\n            "operatorId": null,\n            "sourceId": "",\n            "selfPlannedConfigs": null,\n            "rigidControlPassed": true,\n            "controlCalcVersion": 0,\n            "flowCounts": {},\n            "sourceMessage": ""\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"count\u53c2\u6570\u4e0d\u80fd\u5927\u4e8e100"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"count"),"\uff08\u67e5\u8be2\u6570\u636e\u6761\u6570\uff09\u4e0d\u5141\u8bb8\u5927\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"100"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u67e5\u8be2\u5f02\u5e38"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"start"),"\uff08\u5206\u9875\u67e5\u8be2\u7684\u8d77\u59cb\u5e8f\u53f7\uff09\u662f\u5426\u5c0f\u4e8e\u5b9e\u9645\u603b\u6570\u636e\u91cf")))))}c.isMDXComponent=!0}}]);