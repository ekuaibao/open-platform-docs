"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[70950],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),N=r,f=k["".concat(o,".").concat(N)]||k[N]||s[N]||l;return a?n.createElement(f,i(i({ref:e},m),{},{components:a})):n.createElement(f,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},41627:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,a=t.url,l=t.description,i=a.replace(/\`(.*?)\`/g,"<span>$1</span>");return n.createElement("div",{className:r.control+" "+r[e]},n.createElement("span",{className:r.method},e),n.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&n.createElement("small",null,l))}},42701:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return s},default:function(){return N}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(41627),p=["components"],o={},d="\u65b0\u589e\u81ea\u5b9a\u4e49\u6863\u6848\u9879",m={unversionedId:"open-api/dimensions/creat-dimension-items",id:"open-api/dimensions/creat-dimension-items",title:"\u65b0\u589e\u81ea\u5b9a\u4e49\u6863\u6848\u9879",description:"<Control",source:"@site/docs/open-api/dimensions/creat-dimension-items.md",sourceDirName:"open-api/dimensions",slug:"/open-api/dimensions/creat-dimension-items",permalink:"/docs/next/open-api/dimensions/creat-dimension-items",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/dimensions/creat-dimension-items.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u7c7b\u522b",permalink:"/docs/next/open-api/dimensions/get-dimensions"},next:{title:"\u6279\u91cf\u65b0\u589e\u81ea\u5b9a\u4e49\u6863\u6848\u9879",permalink:"/docs/next/open-api/dimensions/batch-creat-dimension-items"}},s=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],k={toc:s};function N(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u65b0\u589e\u81ea\u5b9a\u4e49\u6863\u6848\u9879"},"\u65b0\u589e\u81ea\u5b9a\u4e49\u6863\u6848\u9879"),(0,l.kt)(i.Z,{method:"POST",url:"/api/openapi/v1.1/dimensions/items",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#190"},(0,l.kt)("strong",{parentName:"a"},"1.9.0"))," -> \ud83c\udd95 \u4fee\u590d\u4e86\u4e0d\u4f20 ",(0,l.kt)("inlineCode",{parentName:"p"},"visibility"),"\uff08\u53ef\u89c1\u8303\u56f4\uff09\u975e\u5fc5\u586b\u53c2\u6570\u62a5\u9519\u7684BUG\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#172"},(0,l.kt)("strong",{parentName:"a"},"1.7.2"))," -> \ud83c\udd95 \u65b0\u589e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"baseCurrencyId"),"\uff08\u6cd5\u4eba\u5b9e\u4f53\u672c\u4f4d\u5e01\uff09\u53c2\u6570\uff0c\u4f7f\u7528\u6b64\u53c2\u6570\u9700\u8981\u5f00\u901a\u3010",(0,l.kt)("strong",{parentName:"p"},"\u6cd5\u4eba\u5b9e\u4f53\u591a\u5e01\u79cd"),"\u3011\u529f\u80fd\uff0c\u4f20\u53c2\u793a\u4f8b\u89c1CURL\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#110"},(0,l.kt)("strong",{parentName:"a"},"1.1.0"))," -> \ud83d\ude80 \u63a5\u53e3\u5347\u7ea7 ",(0,l.kt)("inlineCode",{parentName:"p"},"v1.1")," \u7248\u672c\uff0c\u65b0\u589e\u4e86\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"fullVisible")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"fals")," \u65f6\uff0c\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"staffs"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"roles"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"departments")," \u4e09\u4e2a\u53c2\u6570\u7684\u5fc5\u586b\u53ca\u6709\u6548\u6027\u6821\u9a8c\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"dimensionId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u7c7b\u522bID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimensions"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u7c7b\u522b")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u503c\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u503c\u540d\u79f0\uff0c\u6700\u5927\u4e0d\u80fd\u8d85\u8fc7300\u4e2a\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u503c\u7f16\u7801"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u503c\u7f16\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"visibility")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u89c1\u8303\u56f4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u89c1\u8303\u56f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f fullVisible")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5168\u90e8\u53ef\u89c1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u5168\u90e8\u53ef\u89c1 ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u975e\u5168\u90e8\u53ef\u89c1\uff0c\u4ee5\u4e0b",(0,l.kt)("strong",{parentName:"td"},"\u4e09\u4e2a\u767d\u540d\u5355\u81f3\u5c11\u5fc5\u586b\u4e00\u9879"),(0,l.kt)("br",null),"\u5728\u975e\u5168\u90e8\u53ef\u89c1\u7684\u60c5\u51b5\u4e0b\uff0c\u4ec5\u767d\u540d\u5355\u5185\u7684\u5458\u5de5\u53ef\u89c1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f staffs")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u767d\u540d\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u83b7\u53d6\u5458\u5de5\u5217\u8868")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f roles")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u89d2\u8272\u767d\u540d\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-roles-group"},"\u67e5\u8be2\u89d2\u8272\u7ec4\u548c\u89d2\u8272")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f departments")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u767d\u540d\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-departments"},"\u83b7\u53d6\u90e8\u95e8\u5217\u8868")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"parentId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u503c\u7236\u7ea7ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimension-items"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879")," \u83b7\u53d6\u3002\u5982\u679c\u662f\u6839\u8282\u70b9\u5e94\u586b\u5199 ",(0,l.kt)("inlineCode",{parentName:"td"},'""'))))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u9884\u7f6e\u6863\u6848\u6709\u4e00\u4e9b\u989d\u5916\u5b57\u6bb5\uff0c\u8be6\u7ec6\u5b57\u6bb5\u4f20\u53c2\u89c1CURL\u91cc\u9762\u7684\u6ce8\u91ca\u3002")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v1.1/dimensions/items?accessToken=hQgbxfJnlElc00\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "dimensionId": "Urf3lsFgBp00gw:\u9879\u76ee",  //\u6863\u6848\u7c7b\u522bID\n    "name": "\u9879\u76ee2-1",                     //\u6863\u6848\u503c\u540d\u79f0    \n    "code": "XM2001",                     //\u6863\u6848\u503c\u7f16\u7801   \n    "visibility": {\n        "fullVisible": true,              //\u662f\u5426\u5168\u90e8\u53ef\u89c1\n        "staffs": [],\n        "roles": [],\n        "departments": []\n    },\n    "parentId": "Ak0btTcoEkrA00",         //\u6863\u6848\u503c\u7236\u7ea7ID\n    //-----------------------------------------\n    //\u7cfb\u7edf\u9884\u7f6e\u6863\u6848\u989d\u5916\u53c2\u6570\u5982\u4e0b\uff0c\u4e0d\u7528\u65f6\u4e0d\u4f20\u5373\u53ef\uff1a        \n    "form":{\n        //\u201c\u9879\u76ee\u201d \u6863\u6848\u989d\u5916\u53c2\u6570\n        "projectBase": "[{\\"key\\":\\"8\\",\\"label\\":\\"\u5317\u4eac\u5e02/\u6d77\u6dc0\u533a\\"}]", //\u9879\u76ee\u6240\u5728\u5730\n        "projectInspector": "uIk3sePdIJ00v0:1102",                     //\u9879\u76ee\u603b\u76d1\uff0c\u503c\u4e3a\u5458\u5de5ID\n        "projectManager": "uIk3sePdIJ00v0:AvT3lntT8zzpWw",             //\u9879\u76ee\u7ecf\u7406\uff0c\u503c\u4e3a\u5458\u5de5ID\n        "projectType": "ID_3sjnVFu0ZOw",                               //\u9879\u76ee\u7c7b\u578b\uff0c\u503c\u4e3a\u3010\u9879\u76ee\u7c7b\u578b\u9884\u7f6e\u3011\u6863\u6848\u5b9e\u4f8bID\n        //-----------------------------------------\n        //\u201c\u804c\u7ea7\u9884\u7f6e\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n        "rankType":"ID_3sjnv7SJeIw",                                   //\u804c\u7ea7\u7c7b\u578b\uff0c\u503c\u4e3a\u3010\u804c\u7ea7\u7c7b\u578b\u9884\u7f6e\u3011\u6863\u6848\u5b9e\u4f8bID\n        //-----------------------------------------\n        //\u201c\u5c97\u4f4d\u9884\u7f6e\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n         "postType":"ID_3sjQzq30UL0",                                  //\u5c97\u4f4d\u7c7b\u578b\uff0c\u503c\u4e3a\u3010\u5c97\u4f4d\u7c7b\u578b\u9884\u7f6e\u3011\u6863\u6848\u5b9e\u4f8bID\n        //-----------------------------------------\n        //\u201c\u6cd5\u4eba\u5b9e\u4f53\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n        "baseCurrencyId":"156",                                        //\u6cd5\u4eba\u5b9e\u4f53\u672c\u4f4d\u5e01\u6570\u5b57\u4ee3\u7801\uff0c\u53d6\u503c\u89c1\u5e01\u79cd\u8bbe\u7f6e\uff0c\u53ea\u53ef\u4f20\u7cfb\u7edf\u5185\u914d\u7f6e\u597d\u7684\u672c\u4f4d\u5e01\uff0c\u9700\u8981\u5f00\u901a\u3010\u6cd5\u4eba\u5b9e\u4f53\u591a\u5e01\u79cd\u3011\u529f\u80fd\n        "taxpayerType":"GeneralTaxpayer"                               //\u7eb3\u7a0e\u4eba\u7c7b\u578b\uff0cGeneralTaxpayer\uff1a\u4e00\u822c\u7eb3\u7a0e\u4eba\uff1bSmallScaleTaxpayer\uff1a\u5c0f\u89c4\u6a21\u7eb3\u7a0e\u4eba\n        //-----------------------------------------\n    },\n    //\u201c\u6cd5\u4eba\u5b9e\u4f53\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n    "payAccountIds":["uIk3sePdIJ00v0:BANK"],                            //\u53ef\u7528\u652f\u4ed8\u8d26\u6237\n    //\u201c\u6cd5\u4eba\u5b9e\u4f53\u201d\uff0c\u201c\u6210\u672c\u4e2d\u5fc3\u9884\u7f6e\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n    "departments":["uIk3sePdIJ00v0"]                                    //\u6240\u5c5e\u90e8\u95e8\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "XBUbxhnP5k8w00" // \u6863\u6848\u503cID\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u7ea7\u6863\u6848\u4e0d\u5b58\u5728"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"parentId"),"\uff08\u6863\u6848\u503c\u7236\u7ea7ID\uff09\u662f\u5426\u6b63\u786e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8be5\u6863\u6848\u9879\u540d\u79f0","[\u9879\u76ee2-1]","\u5bfc\u5165\u91cd\u590d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"name"),"\uff08\u6863\u6848\u503c\u540d\u79f0\uff09\u662f\u5426\u5df2\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7f16\u7801","[XM2003]","\u5df2\u7ecf\u88ab\u5360\u7528"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"code"),"\uff08\u6863\u6848\u9879\u7f16\u7801\uff09\u662f\u5426\u5df2\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f53fullVisible\u4e3afalse\u65f6\uff0c\u8bf7\u6307\u5b9adepartments\u3001roles\u6216staffs\u7684\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u5f53 ",(0,l.kt)("inlineCode",{parentName:"td"},"fullVisible")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"departments"),"\uff08\u90e8\u95e8\u767d\u540d\u5355\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"roles"),"\uff08\u89d2\u8272\u767d\u540d\u5355\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"staffs"),"\uff08\u5458\u5de5\u767d\u540d\u5355\uff09\u53c2\u6570\u662f\u5426\u90fd\u4e3a\u7a7a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570staffs\u7684\u503c\u4e0d\u5b58\u5728\u6216\u5df2\u88ab\u7981\u7528","[xxxx]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"departments"),"\uff08\u90e8\u95e8\u767d\u540d\u5355\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"roles"),"\uff08\u89d2\u8272\u767d\u540d\u5355\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"staffs"),"\uff08\u5458\u5de5\u767d\u540d\u5355\uff09\u53c2\u6570\u662f\u5426\u6b63\u786e\u6216\u5df2\u7981\u7528")))))}N.isMDXComponent=!0}}]);