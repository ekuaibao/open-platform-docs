"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91310],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),m=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=m(n),u=a,k=s["".concat(i,".").concat(u)]||s[u]||c[u]||l;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return r.createElement("div",{className:a.control+" "+a[e]},r.createElement("span",{className:a.method},e),r.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&r.createElement("small",null,l))}},76995:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(41627),p=["components"],i={},m="\u6839\u636e\u81ea\u5b9a\u4e49\u5b57\u6bb5\u67e5\u8be2\u90e8\u95e8\u4fe1\u606f",d={unversionedId:"open-api/inside/get-departments-deptCustom",id:"open-api/inside/get-departments-deptCustom",title:"\u6839\u636e\u81ea\u5b9a\u4e49\u5b57\u6bb5\u67e5\u8be2\u90e8\u95e8\u4fe1\u606f",description:"<Control",source:"@site/docs/open-api/inside/get-departments-deptCustom.md",sourceDirName:"open-api/inside",slug:"/open-api/inside/get-departments-deptCustom",permalink:"/docs/next/open-api/inside/get-departments-deptCustom",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/inside/get-departments-deptCustom.md",tags:[],version:"current",frontMatter:{}},c=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],s={toc:c};function u(t){var e=t.components,n=(0,a.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6839\u636e\u81ea\u5b9a\u4e49\u5b57\u6bb5\u67e5\u8be2\u90e8\u95e8\u4fe1\u606f"},"\u6839\u636e\u81ea\u5b9a\u4e49\u5b57\u6bb5\u67e5\u8be2\u90e8\u95e8\u4fe1\u606f"),(0,l.kt)(o.Z,{method:"POST",url:"/api/openapi/v1/departments/departmentCustom",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1160"},(0,l.kt)("strong",{parentName:"a"},"1.16.0"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u90e8\u95e8\u81ea\u5b9a\u4e49\u5b57\u6bb5\u540d")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u81ea\u5b9a\u4e49\u5b57\u6bb5\u540d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-departments"},"\u83b7\u53d6\u90e8\u95e8\u5217\u8868")," \u8fd4\u56de\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"form"),"\uff08\u90e8\u95e8\u81ea\u5b9a\u4e49\u5b57\u6bb5\uff09\u83b7\u53d6")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"curl --location 'https://app.ekuaibao.com/api/openapi/v1/departments/departmentCustom?accessToken=ID01oMxsLeIgRM%3ADgM3w5DRQ401Iw' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"costCenter\": \"ID01krmp8S5JiD\"\n}'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "id": "DgM3w5DRQ401Iw:pAwbwH_W7sec00", //\u90e8\u95e8ID\n            "name": "\u8d22\u52a1\u90e8",                      //\u90e8\u95e8\u540d\u79f0\n            "parentId": "DgM3w5DRQ401Iw",         //\u4e0a\u7ea7\u90e8\u95e8ID\n            "active": true,                       //\u662f\u5426\u542f\u7528\n            "code": "1003",                       //\u90e8\u95e8\u7f16\u7801\n            "updateTime": "2022-01-11 17:43:59",  //\u66f4\u65b0\u65f6\u95f4\n            "createTime": "2022-01-11 17:43:59",  //\u521b\u5efa\u65f6\u95f4\n            "form":{                              //\u90e8\u95e8\u5173\u8054\u6cd5\u4eba\u5b9e\u4f53ID\u548c\u6210\u672c\u4e2d\u5fc3ID\n                "costCenter":"ID01krmp8S5JiD",    //\u6210\u672c\u4e2d\u5fc3ID\n                "legalEntity":"11YcypdGzoEo00"    //\u6cd5\u4eba\u5b9e\u4f53ID\n            },\n            "order": 3                            //\u6392\u5e8f\u5e8f\u53f7\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u53c2\u6570\u4e0d\u80fd\u4e3a\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"Body Parameters")," \u662f\u5426\u4f20\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"403")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6388\u6743"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"),"\uff08\u8ba4\u8bc1token\uff09\u662f\u5426\u5df2\u8fc7\u671f",(0,l.kt)("br",null),"\u8bf7\u786e\u8ba4 ",(0,l.kt)("strong",{parentName:"td"},"\u5730\u5740\u524d\u7f00")," \u4e0e\u60a8\u7684\u4f01\u4e1a\u73af\u5883\u4e00\u81f4")))))}u.isMDXComponent=!0}}]);