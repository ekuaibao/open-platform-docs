"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68317],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return s}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=c(r),s=a,f=m["".concat(p,".").concat(s)]||m[s]||u[s]||i;return r?n.createElement(f,l(l({ref:e},d),{},{components:r})):n.createElement(f,l({ref:e},d))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41627:function(t,e,r){r.d(e,{Z:function(){return i}});var n=r(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},i=function(t){var e=t.method,r=t.url,i=t.description,l=r.replace(/\`(.*?)\`/g,"<span>$1</span>");return n.createElement("div",{className:a.control+" "+a[e]},n.createElement("span",{className:a.method},e),n.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),i&&n.createElement("small",null,i))}},64916:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=r(41627),o=["components"],p={},c="\u83b7\u53d6\u57ce\u5e02\u7ec4\u8be6\u60c5",d={unversionedId:"open-api/city/get-city-group-details",id:"version-v2.0/open-api/city/get-city-group-details",title:"\u83b7\u53d6\u57ce\u5e02\u7ec4\u8be6\u60c5",description:"<Control",source:"@site/versioned_docs/version-v2.0/open-api/city/get-city-group-details.md",sourceDirName:"open-api/city",slug:"/open-api/city/get-city-group-details",permalink:"/docs/v2.0/open-api/city/get-city-group-details",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/city/get-city-group-details.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u542f\u7528/\u505c\u7528\u57ce\u5e02\u7ec4",permalink:"/docs/v2.0/open-api/city/update-city-group-status"},next:{title:"\u66f4\u65b0\u57ce\u5e02\u7ec4\u8be6\u60c5",permalink:"/docs/v2.0/open-api/city/update-city-group-details"}},u=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2}],m={toc:u};function s(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u83b7\u53d6\u57ce\u5e02\u7ec4\u8be6\u60c5"},"\u83b7\u53d6\u57ce\u5e02\u7ec4\u8be6\u60c5"),(0,i.kt)(l.Z,{method:"POST",url:"/api/openapi/v1/cityGroup/detail/search",mdxType:"Control"}),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"accessToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))))),(0,i.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"cityGroupId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u57ce\u5e02\u7ec4id"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/city/get-city-group"},"\u901a\u8fc7\u83b7\u53d6\u57ce\u5e02\u7ec4\u5217\u8868\u83b7\u53d6"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"keyword")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u641c\u7d22\u5173\u952e\u5b57"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4eba\u5458\u540d\u79f0\u6216\u89d2\u8272\u540d\u79f0")))),(0,i.kt)("h2",{id:"curl"},"CURL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/detail/search?accessToken=FsYc5j4FlclU00' \\\n--header 'content-type: application/json' \\\n--header 'Accept: application/json' \\\n--data-raw '{\n    \"cityGroupId\": \"wC0cPu1DNY1400\",\n    \"keyword\": null\n}'\n")),(0,i.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 1,\n    "items": [\n        {\n            "roleIds": [\n                "KtEcDd3_nNS000"\n            ],\n            "staffIds": [\n                "AdMbpirnlY2Q00:HEQbpirnlYgk00"\n            ],\n            "cityIds": [ //\u57ce\u5e02id\u5217\u8868\n                "1", "2", "19", "20"\n            ]\n        }\n    ]\n}\n')))}s.isMDXComponent=!0}}]);