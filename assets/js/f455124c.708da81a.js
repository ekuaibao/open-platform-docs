"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48305],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41627:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},o=function(e){var t=e.method,r=e.url,o=e.description,i=r.replace(/\`(.*?)\`/g,"<span>$1</span>");return n.createElement("div",{className:a.control+" "+a[t]},n.createElement("span",{className:a.method},t),n.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),o&&n.createElement("small",null,o))}},4033:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(41627),l=["components"],p={},c="\u83b7\u53d6\u57ce\u5e02\u7ec4\u5217\u8868",u={unversionedId:"open-api/city/get-city-group",id:"version-v2.0/open-api/city/get-city-group",title:"\u83b7\u53d6\u57ce\u5e02\u7ec4\u5217\u8868",description:"<Control",source:"@site/versioned_docs/version-v2.0/open-api/city/get-city-group.md",sourceDirName:"open-api/city",slug:"/open-api/city/get-city-group",permalink:"/docs/v2.0/open-api/city/get-city-group",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/city/get-city-group.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/v2.0/open-api/city/info"},next:{title:"\u521b\u5efa\u57ce\u5e02\u7ec4",permalink:"/docs/v2.0/open-api/city/create-city-group"}},s=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2}],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u83b7\u53d6\u57ce\u5e02\u7ec4\u5217\u8868"},"\u83b7\u53d6\u57ce\u5e02\u7ec4\u5217\u8868"),(0,o.kt)(i.Z,{method:"GET",url:"/api/openapi/v1/cityGroup/search",mdxType:"Control"}),(0,o.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"accessToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"keyword")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u5173\u952e\u5b57"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6309\u57ce\u5e02\u7ec4\u540d\u79f0\u641c\u7d22\uff0c\u652f\u6301\u6a21\u7cca\u67e5\u8be2")))),(0,o.kt)("h2",{id:"curl"},"CURL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/cityGroup/search?accessToken=ID_3wA7iWV0ac0:Urf3lsFgBp00gw&keyword=22'\n")),(0,o.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 1,\n    "items": [\n        {\n            "pipeline": 1,\n            "id": "As0c0vI1uk7g00",  //\u57ce\u5e02\u7ec4id\n            "version": 10,\n            "active": true,         \n            "createTime": 1607569090433,\n            "updateTime": 1607571367488,\n            "name": "\u534e\u5317\u533a",         //\u57ce\u5e02\u7ec4\u540d\u79f0\n            "desc": "\u5317\u4eac\u5929\u6d25",       //\u57ce\u5e02\u7ec4\u63cf\u8ff0\n            "status": true,          //\u662f\u5426\u542f\u7528\n            "cityGroup": [],         //\u57ce\u5e02\u7ec4\u660e\u7ec6, \u5728\u5217\u8868\u4e2d\u8fd4\u56de\u4e3a[]\n            "corporationId": "AdMbpirnlY2Q00"\n        }\n    ]\n}\n\n')))}d.isMDXComponent=!0}}]);