"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[29895],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=m(n),k=r,u=c["".concat(p,".").concat(k)]||c[k]||s[k]||i;return n?a.createElement(u,l(l({ref:e},d),{},{components:n})):a.createElement(u,l({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},i=function(t){var e=t.method,n=t.url,i=t.description,l=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),i&&a.createElement("small",null,i))}},53220:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return s},default:function(){return k}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(41627),o=["components"],p={},m="\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879(\u4e0d\u5e26\u53ef\u89c1\u8303\u56f4)",d={unversionedId:"open-api/dimensions/get-dimension-items",id:"version-v2.1/open-api/dimensions/get-dimension-items",title:"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879(\u4e0d\u5e26\u53ef\u89c1\u8303\u56f4)",description:"<Control",source:"@site/versioned_docs/version-v2.1/open-api/dimensions/get-dimension-items.md",sourceDirName:"open-api/dimensions",slug:"/open-api/dimensions/get-dimension-items",permalink:"/docs/v2.1/open-api/dimensions/get-dimension-items",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/dimensions/get-dimension-items.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6279\u91cf\u65b0\u589e\u81ea\u5b9a\u4e49\u6863\u6848\u9879",permalink:"/docs/v2.1/open-api/dimensions/batch-creat-dimension-items"},next:{title:"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879(\u5e26\u53ef\u89c1\u8303\u56f4)",permalink:"/docs/v2.1/open-api/dimensions/get-dimension-items-visibility"}},s=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],c={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879\u4e0d\u5e26\u53ef\u89c1\u8303\u56f4"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879(\u4e0d\u5e26\u53ef\u89c1\u8303\u56f4)"),(0,i.kt)(l.Z,{method:"GET",url:"/api/openapi/v1/dimensions/items",mdxType:"Control"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,i.kt)("div",null,(0,i.kt)("p",null,"  ",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#110"},(0,i.kt)("strong",{parentName:"a"},"1.1.0"))," ","\u2003"," -> \ud83d\udc1e \u65b0\u589e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"startDate")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"endDate")," \u53c2\u6570\uff0c\u6839\u636e ",(0,i.kt)("strong",{parentName:"p"},"\u66f4\u65b0\u65f6\u95f4")," \u8fc7\u6ee4\u5217\u8868\u6570\u636e\uff0c\u5e76\u4e14\u8fd4\u56de\u503c\u4e2d\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"createTime")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"updateTime")," \u53c2\u6570\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#07136"},(0,i.kt)("strong",{parentName:"a"},"0.7.136"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u652f\u6301\u6309 ",(0,i.kt)("inlineCode",{parentName:"p"},"dimensionId"),"\uff08\u6863\u6848\u7c7b\u522bID\uff09\u53c2\u6570\u8fc7\u6ee4\u6570\u636e\u3002",(0,i.kt)("br",null)))),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"accessToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"start")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5206\u9875\u67e5\u8be2\u7684\u8d77\u59cb\u5e8f\u53f7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4ece\u7b2c\u51e0\u6761\u6570\u636e\u5f00\u59cb\u67e5\u8be2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"count")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u6570\u636e\u6761\u6570"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u4e0d\u80fd\u8d85\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"td"},"100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"dimensionId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u7c7b\u522bID"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimensions"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u7c7b\u522b")," \u83b7\u53d6\uff0c\u901a\u8fc7\u6b64\u53c2\u6570\u53ef\u67e5\u8be2",(0,i.kt)("br",null),"\u6307\u5b9a\u6863\u6848\u7c7b\u522b\u4e0b\u7684\u6863\u6848\u9879")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"startDate")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u5f00\u59cb\u65f6\u95f4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6309\u6570\u636e ",(0,i.kt)("strong",{parentName:"td"},"\u66f4\u65b0\u65f6\u95f4")," \u67e5\u8be2\uff0c\u683c\u5f0f\uff1ayyyy-MM-dd HH:mm:ss")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"endDate")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u7ed3\u675f\u65f6\u95f4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6309\u6570\u636e ",(0,i.kt)("strong",{parentName:"td"},"\u66f4\u65b0\u65f6\u95f4")," \u67e5\u8be2\uff0c\u683c\u5f0f\uff1ayyyy-MM-dd HH:mm:ss")))),(0,i.kt)("h2",{id:"curl"},"CURL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/dimensions/items?accessToken=hQgbxfJnlElc00&start=0&count=100&startDate=2022-01-12 14:35:54&endDate=' \\\n--header 'content-type: application/json' \\\n--header 'Accept: application/json'\n")),(0,i.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 6,                            //\u6863\u6848\u503c\u7684\u6570\u91cf\n    "items": [\n        {\n            "id": "JOYbpjPP-E2Q00:laptop", //\u6863\u6848\u503cID\n            "name": "\u7b14\u8bb0\u672c\u7535\u8111",          //\u6863\u6848\u503c\u540d\u79f0\n            "active": true,                //\u662f\u5426\u6709\u6548\n            "code": "4-Laptop",            //\u6863\u6848\u503c\u7f16\u7801\n            "dimensionId": "JOYbpjPP-E2Q00:\u56fa\u5b9a\u8d44\u4ea7\u7c7b\u76ee", //\u6240\u5c5e\u6863\u6848\u7c7b\u522bID\n            "parentId": "",                 //\u6863\u6848\u503c\u7684\u7236\u7ea7ID\n            "updateTime": "2022-02-10 11:16:33",\n            "createTime": "2022-02-10 11:16:33"\n        },\n        {\n            "id": "Ak0btTcoEkrA00",\n            "name": "\u6d4b\u8bd5\u9879\u76ee",\n            "active": true,\n            "code": "CODE1",\n            "dimensionId": "JOYbpjPP-E2Q00:\u9879\u76ee",\n            "parentId": "",\n            "updateTime": "2022-02-10 11:16:39",\n            "createTime": "2022-02-10 11:16:39"\n        }\n    ]\n}\n')),(0,i.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"400")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'{"count": 0,"items": []}')),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"dimensionId"),"\uff08\u6863\u6848\u7c7b\u522bID\uff09\u662f\u5426\u6b63\u786e\uff0c\u4ee5\u53ca",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"startDate"),"\uff08\u67e5\u8be2\u5f00\u59cb\u65f6\u95f4\uff09\u548c ",(0,i.kt)("inlineCode",{parentName:"td"},"endDate"),"\uff08\u67e5\u8be2\u7ed3\u675f\u65f6\u95f4\uff09\u683c\u5f0f\u662f\u5426\u6b63\u786e")))))}k.isMDXComponent=!0}}]);