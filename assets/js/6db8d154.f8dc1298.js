"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34160],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,s=u["".concat(p,".").concat(c)]||u[c]||f[c]||l;return n?a.createElement(s,o(o({ref:t},m),{},{components:n})):a.createElement(s,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var t=e.method,n=e.url,l=e.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[t]},a.createElement("span",{className:r.method},t),a.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&a.createElement("small",null,l))}},78328:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return f},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(41627),i=["components"],p={},d="\u6839\u636e\u501f\u6b3e\u5305ID\u83b7\u53d6\u501f\u6b3e\u5305\u4fe1\u606f",m={unversionedId:"open-api/flows/get-flow-byLoanInfoId",id:"open-api/flows/get-flow-byLoanInfoId",title:"\u6839\u636e\u501f\u6b3e\u5305ID\u83b7\u53d6\u501f\u6b3e\u5305\u4fe1\u606f",description:"<Control",source:"@site/docs/open-api/flows/get-flow-byLoanInfoId.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/get-flow-byLoanInfoId",permalink:"/docs/next/open-api/flows/get-flow-byLoanInfoId",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/flows/get-flow-byLoanInfoId.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6839\u636e\u5355\u636eID\u83b7\u53d6\u501f\u6b3e\u5305\u4fe1\u606f",permalink:"/docs/next/open-api/flows/get-loanInfo-ByFlowId"},next:{title:"\u6839\u636e\u8fd8\u6b3e\u8bb0\u5f55ID\u83b7\u53d6\u8fd8\u6b3e\u4fe1\u606f",permalink:"/docs/next/open-api/flows/get-repayment-record"}},f=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],u={toc:f};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6839\u636e\u501f\u6b3e\u5305id\u83b7\u53d6\u501f\u6b3e\u5305\u4fe1\u606f"},"\u6839\u636e\u501f\u6b3e\u5305ID\u83b7\u53d6\u501f\u6b3e\u5305\u4fe1\u606f"),(0,l.kt)(o.Z,{method:"GET",url:"/api/openapi/v1/loan/loanInfo/$`id`",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#171"},(0,l.kt)("strong",{parentName:"a"},"1.7.1"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u501f\u6b3e\u5305ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4ee5\u901a\u8fc7\u51fa\u7ad9\u6d88\u606f\u83b7\u53d6")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/loan/loanInfo/$ID_3HV7_Hq1yKw?accessToken=ID_3JxzF8U0aA0:bwa3wajigF0WH0'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {                                 //\u501f\u6b3e\u5305\u4fe1\u606f\n        "pipeline": 1,                         \n        "grayver": "9.32.0.0:A",               \n        "version": 2,                         \n        "active": true,                        //\u662f\u5426\u6709\u6548\n        "createTime": 1654583438870,           //\u521b\u5efa\u65f6\u95f4(\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233)\n        "updateTime": 1655370021141,           //\u66f4\u65b0\u65f6\u95f4(\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233)\n        "corporationId": "bwa3wajigF0WH0",     //\u4f01\u4e1aID\n        "sourceCorporationId": null,\n        "dataCorporationId": null,\n        "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w", //\u501f\u6b3e\u5305\u6240\u5c5e\u4eba\u5458\u5de5ID\n        "id": "ID_3HV7_Hq1yKw",                //\u501f\u6b3e\u5305ID\n        "total": "10.0",                       //\u603b\u91d1\u989d\n        "totalMoneyNode": {\n            "standard": "10.0",\n            "standardUnit": "\u5143",\n            "standardScale": 2,\n            "standardSymbol": "\xa5",\n            "standardNumCode": "156",\n            "standardStrCode": "CNY"\n        },\n        "reserved": 10.0,                      //\u5360\u7528\u91d1\u989d\uff08\u672a\u786e\u8ba4\u8fd8\u6b3e\u7684\u91d1\u989d\uff0c\u8fd8\u6b3e\u7533\u8bf7\u63d0\u4ea4\u4e2d\uff0c\u51fa\u7eb3\u672a\u786e\u8ba4\u6536\u6b3e\uff09\n        "remain": 0.0,                         //\u4f59\u989d\uff08\u5269\u4f59\u5f85\u8fd8\u91d1\u989d\uff09\n        "repayment": 0,                        //\u786e\u8ba4\u91d1\u989d\uff08\u786e\u8ba4\u5df2\u8fd8\u91d1\u989d\uff0c\u51fa\u7eb3\u5df2\u786e\u8ba4\u6536\u6b3e\uff09\n        "overage": null,\n        "state": "REPAID",                     //REPAID\uff1a\u5f85\u8fd8\u6b3e\uff0cPAID\uff1a\u5df2\u8fd8\u6e05\n        "flowId": "ID_3BPNpAnjCGw",            //\u5355\u636eID\n        "title": "\u8fed\u4ee3\u6d4b\u8bd5-\u4e0d\u4f202",              //\u501f\u6b3e\u5355\u6807\u9898\n        "repaymentDate": 9007199254740991,     //\u8fd8\u6b3e\u65e5\u671f\n        "loanDate": 1647446400000,             //\u501f\u6b3e\u65e5\u671f\n        "source": "REQUISITION",               //\u501f\u6b3e\u6765\u6e90, REQUISITION\uff1a\u7533\u8bf7\u5355\uff0cLOAN\uff1a\u501f\u6b3e\uff08\u9ed8\u8ba4\u501f\u6b3e\u5305\u662f\u501f\u6b3e\u751f\u6210\u7684\uff09\n        "sharedOwnerIds": [],                  //\u501f\u6b3e\u5171\u4eab\u4eba\uff08\u5305\u542b\u501f\u6b3e\u4eba\uff09\n        "notConfirmOwnerIds": [],\n        "loanInfoRemind": false,               //\u662f\u5426\u501f\u6b3e\u63d0\u9192\n        "config": {                            //\u914d\u7f6e\u4fe1\u606f\n            "isLimitRepaymentDate": false,     //\u662f\u5426\u9650\u5236\u8fd8\u6b3e\u65e5\u671f  \n            "allowModifyRepaymentDateConfig": null, //\u5141\u8bb8\u4fee\u6539\u8fd8\u6b3e\u65e5\u671f\u914d\u7f6e\n            "limitRepaymentDateRange": null,   //\u8fd8\u6b3e\u65e5\u671f\u8303\u56f4\n            "foreignCurrency": false,          //\u5916\u5e01\n            "writtenOffMaxTimes": null,        //\u6ce8\u9500\u6700\u957f\u65f6\u95f4\n            "autoShare": null,\n            "allShare": null,\n            "ability": "loan"\n        },\n        "foreignCurrencyLoan": null,\n        "foreignRemain": null,\n        "foreignReserved": null,\n        "foreignRepayment": null,\n        "foreignOverage": null,\n        "totalProfitAndLoss": null,\n        "delayCount": 0,\n        "writtenOffRemainTimes": null,\n        "budgetRemain": null,\n        "transfer": false,\n        "code": "S22000038",                    //\u5355\u636e\u7f16\u53f7\n        "transferId": null,\n        "infoType": "GENERAL",\n        "realArrivalDate": 1655370021165\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636e\u501f\u6b3e\u5305Id:ID_3HV7_Hq1yKw1, \u83b7\u53d6\u4e0d\u5230\u5bf9\u5e94\u7684\u501f\u6b3e\u5305,\u8bf7\u6838\u67e5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"id"),"\uff08\u501f\u6b3e\u5305ID\uff09\u662f\u5426\u6b63\u786e")))))}c.isMDXComponent=!0}}]);