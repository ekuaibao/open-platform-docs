"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1197],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},o=function(e){var t=e.method,n=e.url,o=e.description,i=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return r.createElement("div",{className:a.control+" "+a[t]},r.createElement("span",{className:a.method},t),r.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),o&&r.createElement("small",null,o))}},12293:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(41627),l=["components"],p={},c="\u83b7\u53d6\u5f00\u7968\u4fe1\u606f\u5217\u8868",u={unversionedId:"open-api/payerInfo/get-payerInfo-list",id:"version-v2.2/open-api/payerInfo/get-payerInfo-list",title:"\u83b7\u53d6\u5f00\u7968\u4fe1\u606f\u5217\u8868",description:"<Control",source:"@site/versioned_docs/version-v2.2/open-api/payerInfo/get-payerInfo-list.md",sourceDirName:"open-api/payerInfo",slug:"/open-api/payerInfo/get-payerInfo-list",permalink:"/docs/open-api/payerInfo/get-payerInfo-list",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.2/open-api/payerInfo/get-payerInfo-list.md",tags:[],version:"v2.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/open-api/payerInfo/info"},next:{title:"\u6279\u91cf\u65b0\u589e\u5f00\u7968\u4fe1\u606f",permalink:"/docs/open-api/payerInfo/batch-new-payerInfo"}},s=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u83b7\u53d6\u5f00\u7968\u4fe1\u606f\u5217\u8868"},"\u83b7\u53d6\u5f00\u7968\u4fe1\u606f\u5217\u8868"),(0,o.kt)(i.Z,{method:"GET",url:"/api/openapi/v2/payerinfo/list",mdxType:"Control"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,o.kt)("div",null,(0,o.kt)("p",null,"  ",(0,o.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1122"},(0,o.kt)("strong",{parentName:"a"},"1.13.0"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,o.kt)("br",null)))),(0,o.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"accessToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,o.kt)("h2",{id:"curl"},"CURL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/payerinfo/list?accessToken=ID01mjXV51aneL:ZrZ3BRy2ms0g6g'\n")),(0,o.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "pipeline": 1,\n            "grayver": "9.95.0.0-prd",\n            "id": "ID01mjYkgH8y5N",           //\u5f00\u7968\u4fe1\u606fID\n            "version": 1,                     //\u7248\u672c\u53f7\n            "active": true,                   //\u662f\u5426\u542f\u7528\uff08true\uff1a\u542f\u7528\uff0cfalse\uff1a\u505c\u7528\uff09\n            "createTime": 1673430378740,      //\u521b\u5efa\u65f6\u95f4\n            "updateTime": 1673430378740,      //\u66f4\u65b0\u65f6\u95f4\n            "corporationId": "ZrZ3BRy2ms0g6g",//\u4f01\u4e1aID\n            "sourceCorporationId": null,      \n            "dataCorporationId": null,\n            "name": "\u5317\u4eac\u5408\u601d\u4fe1\u606f\u6709\u9650\u516c\u53f8",     //\u4f01\u4e1a\u540d\u79f0\n            "payerNo": "80082088200HOSE",     //\u7eb3\u7a0e\u4eba\u8bc6\u522b\u53f7\n            "account": "12345678900",         //\u4f01\u4e1a\u8d26\u53f7\n            "bank": "\u4e2d\u56fd\u5de5\u5546\u94f6\u884c\u6d59\u6c5f\u7701\u5206\u884c\u8425\u4e1a\u90e8\u672c\u7ea7\u4e1a\u52a1\u90e8120202110990010xxxx", //\u5f00\u6237\u884c\n            "tel": "8008208820",              //\u7535\u8bdd\n            "addr": "\u865a\u62df\u5730\u5740",                //\u5730\u5740\n            "remark": "\u6d4b\u8bd5\u5f00\u7968\u4fe1\u606f",          //\u5907\u6ce8\n            "visibility": {                   //\u53ef\u89c1\u8303\u56f4\n                "fullVisible": true,          //\u662f\u5426\u5168\u90e8\u53ef\u89c1\uff08true\uff1a\u5168\u90e8\u53ef\u89c1\uff0cfalse\uff1a\u6307\u5b9a\u4eba\u5458\u53ef\u89c1\uff09\n                "staffs": [],                 //\u53ef\u89c1\u5458\u5de5ID\n                "roles": [],                  //\u53ef\u89c1\u89d2\u8272ID\n                "departments": [],            //\u53ef\u89c1\u90e8\u95e8ID\n                "departmentsIncludeChildren": true    //\u53ef\u89c1\u90e8\u95e8\u662f\u5426\u5305\u542b\u5b50\u90e8\u95e8\uff08true\uff1a\u662f\uff0cfalse\uff1a\u5426\uff09\n                },\n            "historicalName": "\u66fe\u7528\u540d\u5317\u4eac\u5408\u601d\u4fe1\u606f\u6709\u9650\u8d23\u4efb\u516c\u53f8",  //\u66fe\u7528\u4f01\u4e1a\u540d\u79f0\n            "historicalNameExpirationTime": 1640966399000     //\u66fe\u7528\u4f01\u4e1a\u540d\u79f0\u5931\u6548\u65f6\u95f4\n        } \n    ]\n}\n')))}f.isMDXComponent=!0}}]);