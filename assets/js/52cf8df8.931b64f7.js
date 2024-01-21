"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[83134],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},i=function(e){var t=e.method,n=e.url,i=e.description,l=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return r.createElement("div",{className:a.control+" "+a[t]},r.createElement("span",{className:a.method},t),r.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),i&&r.createElement("small",null,i))}},10334:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(41627),o=["components"],p={},d="\u6839\u636eID\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879",s={unversionedId:"open-api/dimensions/get-dimension-items-byId",id:"version-v2.1/open-api/dimensions/get-dimension-items-byId",title:"\u6839\u636eID\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879",description:"\u901a\u8fc7\u6863\u6848\u9879\u7684 id \u6765\u83b7\u53d6\u5bf9\u5e94\u7684\u6863\u6848\u9879\u4fe1\u606f\u3002",source:"@site/versioned_docs/version-v2.1/open-api/dimensions/get-dimension-items-byId.md",sourceDirName:"open-api/dimensions",slug:"/open-api/dimensions/get-dimension-items-byId",permalink:"/docs/v2.1/open-api/dimensions/get-dimension-items-byId",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/dimensions/get-dimension-items-byId.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879(\u6240\u6709\u5b57\u6bb5\u503c)",permalink:"/docs/v2.1/open-api/dimensions/get-dimension-items-withAll"},next:{title:"\u6839\u636e\u7f16\u7801\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879",permalink:"/docs/v2.1/open-api/dimensions/get-dimension-items-byCode"}},m=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6839\u636eid\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879"},"\u6839\u636eID\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879"),(0,i.kt)("p",null,"\u901a\u8fc7\u6863\u6848\u9879\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," \u6765\u83b7\u53d6\u5bf9\u5e94\u7684\u6863\u6848\u9879\u4fe1\u606f\u3002"),(0,i.kt)(l.Z,{method:"GET",url:"/api/openapi/v1/dimensions/getDimensionById",mdxType:"Control"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,i.kt)("div",null,(0,i.kt)("p",null,"  ",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#180"},(0,i.kt)("strong",{parentName:"a"},"1.8.0"))," ","\u2003"," -> \ud83d\udc1e ",(0,i.kt)("strong",{parentName:"p"},"\u6210\u529f\u54cd\u5e94")," \u4e2d\u53ef\u83b7\u53d6\u65b0\u589e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"channel"),"\uff08\u6570\u636e\u6765\u6e90\uff09\u5b57\u6bb5\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#07159"},(0,i.kt)("strong",{parentName:"a"},"0.7.159"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,i.kt)("br",null)))),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"accessToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49\u6863\u6848\u503c\u7684ID"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimension-items"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879")," \u83b7\u53d6")))),(0,i.kt)("h2",{id:"curl"},"CURL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/dimensions/getDimensionById?accessToken=ID_3uzKp$o07_w:Urf3lsFgBp00gw&id=Urf3lsFgBp00gw:desktopPC' \\\n--header 'content-type: application/json' \\\n--header 'Accept: application/json'\n")),(0,i.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "pipeline": 1,\n        "grayver": "8.8.0.0:A",\n        "version": 1,\n        "active": true,                    //\u662f\u5426\u6709\u6548\n        "createTime": 1630465060738,       //\u521b\u5efa\u65e5\u671f\n        "updateTime": 1630465060738,       //\u66f4\u65b0\u65e5\u671f\n        "name": "\u53f0\u5f0f\u7535\u8111",                 //\u6863\u6848\u503c\u540d\u79f0\n        "nameSpell": "TAISHIDIANNAO",\n        "code": "5-Desktop-PC",             //\u81ea\u5b9a\u4e49\u6863\u6848\u503c\u7684\u7f16\u7801\n        "corporationId": "Urf3lsFgBp00gw",  //\u4f01\u4e1aID\n        "sourceCorporationId": null,\n        "dataCorporationId": null,\n        "parentId": "",                     //\u6863\u6848\u7684\u7236\u7ea7ID\n        "id": "Urf3lsFgBp00gw:desktopPC",   //\u6863\u6848\u503cID\n        "dimensionId": "Urf3lsFgBp00gw:\u56fa\u5b9a\u8d44\u4ea7\u7c7b\u76ee",  //\u6240\u5c5e\u6863\u6848\u7c7b\u522bID\n        "channel": "API",                   //\u6570\u636e\u6765\u6e90  MANUAL\uff1a\u7cfb\u7edf\u521b\u5efa  API\uff1a\u63a5\u53e3\u521b\u5efa\n        "orders": 1585212226451,            //\u6392\u5e8f\n        "visibility": {                     //\u53ef\u89c1\u8303\u56f4\n            "fullVisible": true,  //\u662f\u5426\u5168\u90e8\u53ef\u89c1\u3002\u5728\u975e\u5168\u90e8\u53ef\u89c1\u7684\u60c5\u51b5\u4e0b\uff0c\u4ec5\u767d\u540d\u5355\u5185\u7684\u5458\u5de5\u53ef\u89c1\u3002\n            "staffs": [],         //\u5458\u5de5\u767d\u540d\u5355\n            "roles": [],          //\u89d2\u8272\u767d\u540d\u5355\n            "departments": [],    //\u90e8\u95e8\u767d\u540d\u5355\n            "departmentsIncludeChildren": true\n        },\n        "payAccountIds": null,    //\u652f\u4ed8\u8d26\u6237ID\n        "form": null,\n        "sourceCorpId": null,\n        "taxpayerType": null,\n        "permissions": [\n            {\n                "name": "ALL",\n                "auth": true\n            }\n        ],\n        "leaf": true\n    }\n}\n')),(0,i.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"200")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'{"value": null}')),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e3a\u7a7a\u8868\u793a\u6ca1\u6709\u5bf9\u5e94\u7684\u6863\u6848\u9879\u4fe1\u606f",(0,i.kt)("br",null),"\u8bf7\u786e\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"id"),"\uff08\u81ea\u5b9a\u4e49\u6863\u6848\u503c\u7684ID\uff09\u662f\u5426\u5b58\u5728")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"400")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8f93\u5165\u5b58\u5728\u9519\u8bef:",(0,i.kt)("br",null),"- \u7f3a\u5c11id\u53c2\u6570"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," \uff08\u81ea\u5b9a\u4e49\u6863\u6848\u503c\u7684ID\uff09\u662f\u5426\u4f20\u5165")))))}u.isMDXComponent=!0}}]);