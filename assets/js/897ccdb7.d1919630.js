"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79280],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return s}});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=a.createContext({}),u=function(n){var e=a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):d(d({},e),n)),t},p=function(n){var e=u(n.components);return a.createElement(i.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,i=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),c=u(t),s=r,g=c["".concat(i,".").concat(s)]||c[s]||m[s]||l;return t?a.createElement(g,d(d({ref:e},p),{},{components:t})):a.createElement(g,d({ref:e},p))}));function s(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,d=new Array(l);d[0]=c;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=n,o.mdxType="string"==typeof n?n:r,d[1]=o;for(var u=2;u<l;u++)d[u]=t[u];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},41627:function(n,e,t){t.d(e,{Z:function(){return l}});var a=t(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(n){var e=n.method,t=n.url,l=n.description,d=t.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:d}}),l&&a.createElement("small",null,l))}},1077:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),d=t(41627),o=["components"],i={},u="\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u53f0\u8d26\u6570\u636e",p={unversionedId:"open-api/inside/get-entity-ledger",id:"version-v2.2/open-api/inside/get-entity-ledger",title:"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u53f0\u8d26\u6570\u636e",description:"<Control",source:"@site/versioned_docs/version-v2.2/open-api/inside/get-entity-ledger.md",sourceDirName:"open-api/inside",slug:"/open-api/inside/get-entity-ledger",permalink:"/docs/open-api/inside/get-entity-ledger",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.2/open-api/inside/get-entity-ledger.md",tags:[],version:"v2.2",frontMatter:{}},m=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],c={toc:m};function s(n){var e=n.components,t=(0,r.Z)(n,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u53f0\u8d26\u6570\u636e"},"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u53f0\u8d26\u6570\u636e"),(0,l.kt)(d.Z,{method:"GET",url:"/api/openapi/v2/datalink/byLedgerConfigId/$`ledgerConfigId`/byDataLinkId/$`dataLinkId`",mdxType:"Control"}),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"ledgerConfigId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u5bf9\u8c61\u53f0\u8d26\u914d\u7f6eID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/datalink/get-entity-object"},"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u4fe1\u606f")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"dataLinkId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8bID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/datalink/get-entity-object"},"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u4fe1\u606f")," \u83b7\u53d6")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/datalink/byLedgerConfigId/$ID_3v7HGBq_dW0/byDataLinkId/$ID_3v7IN7M5pT0?accessToken=ID_3BEqRpuUsy0:djg8LshfUkfM00'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count":3,                    //\u603b\u6570\u91cf\n    "items":[\n        {\n            "id":"ID_3BEqPWzQyaw",    //\u4e1a\u52a1\u5bf9\u8c61\u53f0\u8d26ID\n            "active":true,            //\u662f\u5426\u542f\u7528\n            "amount":{                //\u6267\u884c\u91d1\u989d\n                "rate":"1",\n                "budget":null,\n                "foreign":null,\n                "sysRate":null,\n                "standard":"100",\n                "budgetRate":null,\n                "budgetUnit":null,\n                "budgetScale":null,\n                "foreignUnit":null,\n                "budgetSymbol":null,\n                "foreignScale":null,\n                "standardUnit":"\u5143",\n                "budgetNumCode":null,\n                "budgetStrCode":null,\n                "foreignSymbol":null,\n                "standardScale":"2",\n                "foreignNumCode":null,\n                "foreignStrCode":null,\n                "standardSymbol":"\xa5",\n                "standardNumCode":"156",\n                "standardStrCode":"CNY"\n            },\n            "detail":{                             //\u5173\u8054\u6d88\u8d39\u4fe1\u606f\n                "feeTypeId":"ID_3BDKWQqqq8g",      //\u8d39\u7528\u660e\u7ec6ID\n                "feeTypeForm":{                    //\u8d39\u7528\u7c7b\u578b\u6570\u636e\u660e\u7ec6\n                    "amount":{                     //\u8d39\u7528\u91d1\u989d\n                        "standard":"100",          //\u672c\u4f4d\u5e01\n                        "standardUnit":"\u5143",       //\u672c\u4f4d\u5e01\u5355\u4f4d\n                        "standardScale":2,         //\u672c\u4f4d\u5e01\u7cbe\u5ea6\n                        "standardSymbol":"\xa5",      //\u672c\u4f4d\u5e01\u7b26\u53f7\n                        "standardNumCode":"156",   //\u672c\u4f4d\u5e01\u6570\u5b57\u4ee3\u7801\n                        "standardStrCode":"CNY"    //\u672c\u4f4d\u5e01\u5b57\u6bcd\u4ee3\u7801\n                    },\n                    "feeDate":1647792000000,       //\u6d88\u8d39\u65f6\u95f4(\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233)\n                    "detailId":"tMUB7Hi2aItcS6",   //\u660e\u7ec6ID\n                    "attachments":[                //\u9644\u4ef6 \u53ef\u7528\u9644\u4ef6\u4fe1\u606f\u7684\u6570\u636e\u901a\u8fc7\u8c03\u7528\u3010\u83b7\u53d6\u9644\u4ef6URL\u3011\u63a5\u53e3\u6765\u83b7\u53d6\u9644\u4ef6\u6587\u4ef6\u4e0b\u8f7d\u94fe\u63a5\n                    ],\n                    "invoiceForm":{                //\u53d1\u7968\u4fe1\u606f(\u975e\u5fc5\u8fd4\u56de\u5b57\u6bb5)\n                        "type":"noWrite"           //\u53d1\u7968\u7c7b\u578b\n                    },\n                    "consumptionReasons":"",       //\u6d88\u8d39\u539f\u56e0\n                    "u_\u6d4b\u8bd5\u8d39\u7528\u5bfc\u5165":"ID_3v7IN7M5pT0" //\u81ea\u5b9a\u4e49\u5b57\u6bb5\n                },\n                "specificationId":"ID_3BDKWQqqq8g:expense:484c25ad502a1b0c4817ccd0b157430c9d20d2a4"   //\u8d39\u7528\u7c7b\u578b\u6a21\u677fID\n            },\n            "flowId":"ID_3BEqPWzQgaw",          //\u5355\u636eID\n            "feeDate":1647792000000,            //\u6d88\u8d39\u65f6\u95f4(\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233)\n            "grayver":"9.16.0.0:A",\n            "version":1,\n            "detailId":"tMUB7Hi2aItcS6",        //\u660e\u7ec6ID\n            "pipeline":1,\n            "totalNum":"0",\n            "apportion":null,\n            "feeTypeId":"ID_3BDKWQqqq8g",       //\u8d39\u7528\u660e\u7ec6ID\n            "createTime":1647842693505,\n            "dataLinkId":"ID_3v7IN7M5pT0",      //\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8bID\n            "updateTime":1647842693505,\n            "apportionId":null,\n            "originalRate":"1",\n            "standardRate":"1",\n            "sumFieldName":"amount",            \n            "corporationId":"djg8LshfUkfM00",   //\u4f01\u4e1aID\n            "refDataLinkId":"",                 //\u5173\u8054\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8bID \n            "groupDimension":"",\n            "ledgerConfigId":"ID_3v7HGBq_dW0",  //\u4e1a\u52a1\u5bf9\u8c61\u53f0\u8d26\u914d\u7f6eID\n            "originalAmount":{                  //\u8ba1\u5212\u91d1\u989d\n                "rate":null,\n                "budget":null,\n                "foreign":null,\n                "sysRate":null,\n                "standard":"100",\n                "budgetRate":null,\n                "budgetUnit":null,\n                "budgetScale":null,\n                "foreignUnit":null,\n                "budgetSymbol":null,\n                "foreignScale":null,\n                "standardUnit":"\u5143",\n                "budgetNumCode":null,\n                "budgetStrCode":null,\n                "foreignSymbol":null,\n                "standardScale":"2",\n                "foreignNumCode":null,\n                "foreignStrCode":null,\n                "standardSymbol":"\xa5",\n                "standardNumCode":"156",\n                "standardStrCode":"CNY"\n            },\n            "dataLinkEntityId":"a10dd7f32900de827800",    //\u4e1a\u52a1\u5bf9\u8c61ID\n            "dataCorporationId":null,\n            "sourceCorporationId":null,\n            "code":"code1",\n            "name":"\u6d4b\u8bd51",\n            "refActive":false\n        },\n        {\n            "id":"ID_3BD$803fXY0",\n            "active":true,\n            "amount":{\n                "rate":"1",\n                "budget":null,\n                "foreign":null,\n                "sysRate":null,\n                "standard":"123",\n                "budgetRate":null,\n                "budgetUnit":null,\n                "budgetScale":null,\n                "foreignUnit":null,\n                "budgetSymbol":null,\n                "foreignScale":null,\n                "standardUnit":"\u5143",\n                "budgetNumCode":null,\n                "budgetStrCode":null,\n                "foreignSymbol":null,\n                "standardScale":"2",\n                "foreignNumCode":null,\n                "foreignStrCode":null,\n                "standardSymbol":"\xa5",\n                "standardNumCode":"156",\n                "standardStrCode":"CNY"\n            },\n            "detail":{\n                "feeTypeId":"ID_3BDKWQqqq8g",\n                "feeTypeForm":{\n                    "amount":{\n                        "standard":"123",\n                        "standardUnit":"\u5143",\n                        "standardScale":2,\n                        "standardSymbol":"\xa5",\n                        "standardNumCode":"156",\n                        "standardStrCode":"CNY"\n                    },\n                    "feeDate":1647792000000,\n                    "detailId":"iKHhI2Whq82eEd",\n                    "attachments":[\n                    ],\n                    "invoiceForm":{\n                        "type":"noWrite"\n                    },\n                    "consumptionReasons":"",\n                    "u_\u6d4b\u8bd5\u8d39\u7528\u5bfc\u5165":"ID_3v7IN7M5pT0"\n                },\n                "specificationId":"ID_3BDKWQqqq8g:expense:484c25ad502a1b0c4817ccd0b157430c9d20d2a4"\n            },\n            "flowId":"ID_3BDLsqKTR9M",\n            "feeDate":1647792000000,\n            "grayver":"9.16.0.0:A",\n            "version":1,\n            "detailId":"iKHhI2Whq82eEd",\n            "pipeline":1,\n            "totalNum":"0",\n            "apportion":null,\n            "feeTypeId":"ID_3BDKWQqqq8g",\n            "createTime":1647835196886,\n            "dataLinkId":"ID_3v7IN7M5pT0",\n            "updateTime":1647835196886,\n            "apportionId":null,\n            "originalRate":"1",\n            "standardRate":"1",\n            "sumFieldName":"amount",\n            "corporationId":"djg8LshfUkfM00",\n            "refDataLinkId":"",\n            "groupDimension":"",\n            "ledgerConfigId":"ID_3v7HGBq_dW0",\n            "originalAmount":{\n                "rate":null,\n                "budget":null,\n                "foreign":null,\n                "sysRate":null,\n                "standard":"123",\n                "budgetRate":null,\n                "budgetUnit":null,\n                "budgetScale":null,\n                "foreignUnit":null,\n                "budgetSymbol":null,\n                "foreignScale":null,\n                "standardUnit":"\u5143",\n                "budgetNumCode":null,\n                "budgetStrCode":null,\n                "foreignSymbol":null,\n                "standardScale":"2",\n                "foreignNumCode":null,\n                "foreignStrCode":null,\n                "standardSymbol":"\xa5",\n                "standardNumCode":"156",\n                "standardStrCode":"CNY"\n            },\n            "dataLinkEntityId":"a10dd7f32900de827800",\n            "dataCorporationId":null,\n            "sourceCorporationId":null,\n            "code":"code2",    //\u88ab\u5173\u8054\u7f16\u53f7\n            "name":"\u6d4b\u8bd52",     //\u88ab\u5173\u8054\u540d\u79f0\n            "refActive":true   //\u88ab\u5173\u8054\u4e1a\u52a1\u5bf9\u8c61\u662f\u5426\u542f\u7528\uff08\u53f0\u8d26\u7edf\u8ba1\u7c7b\u578b\u4e3a[\u5176\u4ed6\u4e1a\u52a1\u5bf9\u8c61]\u65f6\u5b58\u5728\uff09\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"500")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef\uff1a\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u8fc7\u5c11"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"dataLinkId"),"\uff08\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8bID\uff09\u662f\u5426\u5b58\u5728")))))}s.isMDXComponent=!0}}]);