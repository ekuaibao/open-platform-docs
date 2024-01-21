"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15894],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var t=e.method,n=e.url,l=e.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return r.createElement("div",{className:a.control+" "+a[t]},r.createElement("span",{className:a.method},t),r.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&r.createElement("small",null,l))}},27912:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(41627),i=["components"],p={},u="\u83b7\u53d6\u9884\u7b97\u5305\u5217\u8868",c={unversionedId:"open-api/budget/get-budget-list",id:"open-api/budget/get-budget-list",title:"\u83b7\u53d6\u9884\u7b97\u5305\u5217\u8868",description:"\u8fd4\u56de\u4f01\u4e1a\u4e0b\u5168\u90e8\u9884\u7b97\u5305\u4fe1\u606f\uff0c\u5bf9\u4e8e \u8349\u7a3f \u72b6\u6001\u7684\u4e5f\u4f1a\u8fd4\u56de\uff08\u9700\u8981\u5224\u65ad\u9884\u7b97\u5305\u6240\u5904\u7684\u72b6\u6001\u53d6\u7528\u6570\u636e\uff09\u3002",source:"@site/docs/open-api/budget/get-budget-list.md",sourceDirName:"open-api/budget",slug:"/open-api/budget/get-budget-list",permalink:"/docs/next/open-api/budget/get-budget-list",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/budget/get-budget-list.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u65b0\u589e\u9884\u7b97\u5305",permalink:"/docs/next/open-api/budget/add-budget"},next:{title:"\u83b7\u53d6\u9884\u7b97\u5305\u8be6\u7ec6\u4fe1\u606f",permalink:"/docs/next/open-api/budget/get-budget-details"}},d=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2}],s={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6\u9884\u7b97\u5305\u5217\u8868"},"\u83b7\u53d6\u9884\u7b97\u5305\u5217\u8868"),(0,l.kt)("p",null,"\u8fd4\u56de\u4f01\u4e1a\u4e0b\u5168\u90e8\u9884\u7b97\u5305\u4fe1\u606f\uff0c\u5bf9\u4e8e ",(0,l.kt)("strong",{parentName:"p"},"\u8349\u7a3f")," \u72b6\u6001\u7684\u4e5f\u4f1a\u8fd4\u56de\uff08\u9700\u8981\u5224\u65ad\u9884\u7b97\u5305\u6240\u5904\u7684\u72b6\u6001\u53d6\u7528\u6570\u636e\uff09\u3002"),(0,l.kt)(o.Z,{method:"GET",url:"/api/openapi/v2/budgets",mdxType:"Control"}),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/budgets?accessToken=ID_3D$9pAVgeG0:bwa3wajigF0WH0'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "pipeline": 1,\n            "grayver": "9.16.0.0:A",\n            "id": "ID_3BKMdBcdK7g",       //\u9884\u7b97\u5305ID\n            "version": 1,                 //\u9884\u7b97\u7248\u672c\n            "active": false,              //\u662f\u5426\u6fc0\u6d3b\uff0ctrue\uff1a\u53d1\u5e03\uff0cfalse\uff1a\u8349\u7a3f\n            "createTime": 1648019160064,  //\u521b\u5efa\u65e5\u671f\n            "updateTime": 1648019484117,  //\u66f4\u65b0\u65e5\u671f\n            "name": "\u6d4b\u8bd5\u9884\u7b97",           //\u9884\u7b97\u5305\u540d\u79f0\n            "nameSpell": "CESHIYUSUAN",\n            "corporationId": "bwa3wajigF0WH0", //\u4f01\u4e1aID\n            "sourceCorporationId": null,\n            "dataCorporationId": null,\n            "period": {                    //\u9884\u7b97\u5e74\u5ea6\n                "annual": "2022",          //\u63a7\u5236\u5e74\u5ea6\n                "period": "YEAR",          //\u5e74\u5ea6\u5185\u5206\u5272\u65b9\u5f0f\uff0cMONTH: \u6309\u6708\u4efd, SEASON: \u6309\u5b63\u5ea6, HALF_YEAR: \u534a\u5e74, YEAR: \u6574\u5e74, null: \u975e\u5468\u671f\u63a7\u5236\n                "startTime": 1641020760104,//\u975e\u5468\u671f\u63a7\u5236\u5f00\u59cb\u65f6\u95f4\n                "endTime": 1672470360104   //\u975e\u5468\u671f\u63a7\u5236\u7ed3\u675f\u65f6\u95f4\n            },\n            "tree": null,\n            "delete": false,               //\u9884\u7b97\u662f\u5426\u5220\u9664\n            "extendMoneys": null,\n            "legalEntityIds": [],\n            "budgetCurrency": null,\n            "isCustom": false,             //\u662f\u5426\u81ea\u5b9a\u4e49\u533a\u95f4\n            "isRollCalc": false,           //\u662f\u5426\u6eda\u52a8\u9884\u7b97\n            "isEdit": false,               //\u9884\u7b97\u5305\u7f16\u5236\u72b6\u6001\n            "isCalcEnd": true              //\u662f\u5426\u8ba1\u7b97\u6267\u884c\u5b8c\u6bd5\n        },\n        {\n            "pipeline": 1,\n            "grayver": "9.24.0.0:A",\n            "id": "ID_3D$8ov23ECg",\n            "version": 1,\n            "active": true,\n            "createTime": 1650359969300,\n            "updateTime": 1650359969300,\n            "name": "\u6d4b\u8bd5\u9884\u7b97-1",\n            "nameSpell": "CESHIYUSUAN-1",\n            "corporationId": "bwa3wajigF0WH0",\n            "sourceCorporationId": null,\n            "dataCorporationId": null,\n            "period": {\n                "annual": "2022",\n                "period": "SEASON",\n                "startTime": 1641028769360,\n                "endTime": 1672478369360\n            },\n            "tree": null,\n            "delete": false,\n            "extendMoneys": null,\n            "legalEntityIds": [],\n            "budgetCurrency": null,\n            "isCustom": false,\n            "isRollCalc": false,\n            "isEdit": false,\n            "isCalcEnd": true\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);