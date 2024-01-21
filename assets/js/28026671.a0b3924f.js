"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27628],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),k=d(n),f=r,u=k["".concat(p,".").concat(f)]||k[f]||m[f]||l;return n?a.createElement(u,i(i({ref:e},c),{},{components:n})):a.createElement(u,i({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,i=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&a.createElement("small",null,l))}},30846:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(41627),o=["components"],p={},d="\u6839\u636e\u5355\u636e\u7f16\u53f7\u6216ID\u67e5\u8be2\u53d1\u7968ID\u548c\u660e\u7ec6ID",c={unversionedId:"open-api/datalink-extend/get-flow-invoice",id:"open-api/datalink-extend/get-flow-invoice",title:"\u6839\u636e\u5355\u636e\u7f16\u53f7\u6216ID\u67e5\u8be2\u53d1\u7968ID\u548c\u660e\u7ec6ID",description:"<Control",source:"@site/docs/open-api/datalink-extend/get-flow-invoice.md",sourceDirName:"open-api/datalink-extend",slug:"/open-api/datalink-extend/get-flow-invoice",permalink:"/docs/next/open-api/datalink-extend/get-flow-invoice",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/datalink-extend/get-flow-invoice.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u7968ID\u9a8c\u771f",permalink:"/docs/next/open-api/datalink-extend/invoice-validate-byInvoiceId"},next:{title:"\u83b7\u53d6\u53d1\u7968\u4e3b\u4f53\u4fe1\u606f",permalink:"/docs/next/open-api/datalink-extend/get-entity-invoice"}},m=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],k={toc:m};function f(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6839\u636e\u5355\u636e\u7f16\u53f7\u6216id\u67e5\u8be2\u53d1\u7968id\u548c\u660e\u7ec6id"},"\u6839\u636e\u5355\u636e\u7f16\u53f7\u6216ID\u67e5\u8be2\u53d1\u7968ID\u548c\u660e\u7ec6ID"),(0,l.kt)(i.Z,{method:"POST",url:"/api/openapi/v2/extension/flow/INVOICE/search",mdxType:"Control"}),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"code")," : \u5355\u636e\u7f16\u53f7 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"id")," : \u5355\u636eID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"codeOrIds")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f20\u5bf9\u5e94\u53c2\u6570\u7c7b\u578b\u503c\uff0c\u5355\u636e\u7f16\u53f7\u6216\u8005\u5355\u636eID")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v2/extension/flow/INVOICE/search?accessToken=ZyEbyCA-_Auk00\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "type":"id",\n    "codeOrIds":["j7sbyDMhYUpU00"]  //\u5355\u636eID\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "j7sbyDMhYUpU00": [                   //\u5355\u636eID\u6216\u8005\u5355\u636e\u7f16\u53f7\uff0c\u4e0e\u4f20\u53c2\u5bf9\u5e94\n            {\n                "invoiceId": "gwobfjObAAno00:3700171320:38415400",    //\u53d1\u7968ID\n                "invoiceItemId": [            //\u53d1\u7968\u660e\u7ec6ID\n                    "zz4byDMhYUh400", \n                    "k1IbyDMhYUiQ00",\n                    "ehQbyDMhYUjI00",\n                    "5AobyDMhYUio00",\n                    "8EQbyDMhYUjg00",\n                    "YIwbyDMhYUhw00",\n                    "buUbyDMhYUhY00"\n                ],\n                "invoiceType": "invoice"        //\u53d1\u7968\u7c7b\u578b\n            },\n            {\n                "invoiceId": "5-sbyDJSOI0800",  //\u53d1\u7968ID \n                "invoiceItemId": [],            //\u53d1\u7968\u660e\u7ec6ID\n                "invoiceType": "taxi"           //\u53d1\u7968\u7c7b\u578b\n            }\n        ]\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},'{"value": {}}')),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u7a7a\u8868\u793a\u6ca1\u6709\u67e5\u8be2\u5230\u6570\u636e",(0,l.kt)("br",null),"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"codeOrIds"),"\uff08\u67e5\u8be2\u53c2\u6570\uff09 \u662f\u5426\u6b63\u786e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u652f\u6301\u6b64\u7c7b\u578btype=name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"type"),"\uff08\u67e5\u8be2\u53c2\u6570\u7c7b\u578b\uff09 \u662f\u5426\u4e3a ",(0,l.kt)("strong",{parentName:"td"},"\u5907\u6ce8")," \u4e2d\u7684\u56fa\u5b9a\u503c")))))}f.isMDXComponent=!0}}]);