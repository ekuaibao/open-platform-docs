"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9461],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(n),k=r,f=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return n?a.createElement(f,i(i({ref:e},m),{},{components:n})):a.createElement(f,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,i=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&a.createElement("small",null,l))}},51010:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return s},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(41627),o=["components"],p={},d="\u65b0\u5efa\u81ea\u5b9a\u4e49\u6863\u6848\u9879",m={unversionedId:"open-api/dimensions/creat-dimension-items",id:"version-v2.0/open-api/dimensions/creat-dimension-items",title:"\u65b0\u5efa\u81ea\u5b9a\u4e49\u6863\u6848\u9879",description:"<Control",source:"@site/versioned_docs/version-v2.0/open-api/dimensions/creat-dimension-items.md",sourceDirName:"open-api/dimensions",slug:"/open-api/dimensions/creat-dimension-items",permalink:"/docs/v2.0/open-api/dimensions/creat-dimension-items",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/dimensions/creat-dimension-items.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u7c7b\u522b",permalink:"/docs/v2.0/open-api/dimensions/get-dimensions"},next:{title:"\u6279\u91cf\u65b0\u5efa\u81ea\u5b9a\u4e49\u6863\u6848\u9879",permalink:"/docs/v2.0/open-api/dimensions/batch-creat-dimension-items"}},s=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],c={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u65b0\u5efa\u81ea\u5b9a\u4e49\u6863\u6848\u9879"},"\u65b0\u5efa\u81ea\u5b9a\u4e49\u6863\u6848\u9879"),(0,l.kt)(i.Z,{method:"POST",url:"/api/openapi/v1/dimensions/items",mdxType:"Control"}),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"dimensionId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u7c7b\u522bID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u901a\u8fc7",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimensions"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u7c7b\u522b"),"\u6765\u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u503c\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u503c\u540d\u79f0\uff0c\u6700\u5927\u4e0d\u80fd\u8d85\u8fc7300\u4e2a\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u503c\u7f16\u7801"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u503c\u7f16\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"visibility")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u89c1\u8303\u56f4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u89c1\u8303\u56f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f fullVisible")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5168\u90e8\u53ef\u89c1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u5168\u90e8\u53ef\u89c1 ","\u2003","  ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u975e\u5168\u90e8\u53ef\u89c1\uff0c\u6b64\u65f6\u767d\u540d\u5355\u5fc5\u586b\u3002",(0,l.kt)("br",null),"\u5728\u975e\u5168\u90e8\u53ef\u89c1\u7684\u60c5\u51b5\u4e0b\uff0c\u4ec5\u767d\u540d\u5355\u5185\u7684\u5458\u5de5\u53ef\u89c1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f staffs")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u767d\u540d\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u503c\u4e3a",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u5458\u5de5id"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f roles")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u89d2\u8272\u767d\u540d\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u503c\u4e3a",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-roles-group"},"\u89d2\u8272id"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f departments")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u767d\u540d\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u503c\u4e3a",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-departments"},"\u90e8\u95e8id"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"parentId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u503c\u7236\u7ea7ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u901a\u8fc7",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimension-items"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879"),"\u6765\u83b7\u53d6\u3002\u5982\u679c\u662f\u6839\u8282\u70b9\u5e94\u586b\u5199 ",(0,l.kt)("inlineCode",{parentName:"td"},'""'))))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u9884\u7f6e\u6863\u6848\u6709\u4e00\u4e9b\u989d\u5916\u5b57\u6bb5\uff0c\u8be6\u7ec6\u5b57\u6bb5\u4f20\u53c2\u89c1CURL\u91cc\u9762\u7684\u6ce8\u91ca\u3002")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v1/dimensions/items?accessToken=hQgbxfJnlElc00\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "dimensionId": "Urf3lsFgBp00gw:\u9879\u76ee",  //\u6863\u6848\u7c7b\u522bid\n    "name": "\u9879\u76ee2-1",                     //\u6863\u6848\u503c\u540d\u79f0    \n    "code": "XM2001",                     //\u6863\u6848\u503c\u7f16\u7801   \n    "visibility": {\n        "fullVisible": true,              //\u662f\u5426\u5168\u90e8\u53ef\u89c1\n        "staffs": [],\n        "roles": [],\n        "departments": []\n    },\n    "parentId": "Ak0btTcoEkrA00",         //\u6863\u6848\u503c\u7236\u7ea7id\n    //-----------------------------------------\n    //\u7cfb\u7edf\u9884\u7f6e\u6863\u6848\u989d\u5916\u53c2\u6570\u5982\u4e0b\uff0c\u4e0d\u7528\u65f6\u4e0d\u4f20\u5373\u53ef\uff1a        \n    "form":{\n        //\u201c\u9879\u76ee\u201d \u6863\u6848\u989d\u5916\u53c2\u6570\n        "projectBase": "[{\\"key\\":\\"8\\",\\"label\\":\\"\u5317\u4eac\u5e02/\u6d77\u6dc0\u533a\\"}]",  //\u9879\u76ee\u6240\u5728\u5730\n        "projectInspector": "uIk3sePdIJ00v0:1102",                     //\u9879\u76ee\u603b\u76d1\uff0c\u503c\u4e3a\u5458\u5de5ID\n        "projectManager": "uIk3sePdIJ00v0:AvT3lntT8zzpWw",             //\u9879\u76ee\u7ecf\u7406\uff0c\u503c\u4e3a\u5458\u5de5ID\n        "projectType": "ID_3sjnVFu0ZOw",                               //\u9879\u76ee\u7c7b\u578b\uff0c\u503c\u4e3a\u3010\u9879\u76ee\u7c7b\u578b\u9884\u7f6e\u3011\u6863\u6848\u5b9e\u4f8bID\n        //-----------------------------------------\n        //\u201c\u804c\u7ea7\u9884\u7f6e\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n        "rankType":"ID_3sjnv7SJeIw",                                   //\u804c\u7ea7\u7c7b\u578b\uff0c\u503c\u4e3a\u3010\u804c\u7ea7\u7c7b\u578b\u9884\u7f6e\u3011\u6863\u6848\u5b9e\u4f8bID\n        //-----------------------------------------\n        //\u201c\u5c97\u4f4d\u9884\u7f6e\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n         "postType":"ID_3sjQzq30UL0",                                  //\u5c97\u4f4d\u7c7b\u578b\uff0c\u503c\u4e3a\u3010\u5c97\u4f4d\u7c7b\u578b\u9884\u7f6e\u3011\u6863\u6848\u5b9e\u4f8bID\n        //-----------------------------------------\n        //\u201c\u6cd5\u4eba\u5b9e\u4f53\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n        "taxpayerType":"GeneralTaxpayer"                               //\u7eb3\u7a0e\u4eba\u7c7b\u578b\uff0cGeneralTaxpayer\uff1a\u4e00\u822c\u7eb3\u7a0e\u4eba\uff1bSmallScaleTaxpayer\uff1a\u5c0f\u89c4\u6a21\u7eb3\u7a0e\u4eba\n        //-----------------------------------------\n    },\n    //\u201c\u6cd5\u4eba\u5b9e\u4f53\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n    "payAccountIds":["uIk3sePdIJ00v0:BANK"],                            //\u53ef\u7528\u652f\u4ed8\u8d26\u6237\n    //\u201c\u6cd5\u4eba\u5b9e\u4f53\u201d\uff0c\u201c\u6210\u672c\u4e2d\u5fc3\u9884\u7f6e\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n    "departments":["uIk3sePdIJ00v0"]                                    //\u6240\u5c5e\u90e8\u95e8\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "XBUbxhnP5k8w00" // \u6863\u6848\u503cid\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("p",null,"\u5f53\u6863\u6848\u503c\u7236\u7ea7id\u53c2\u6570\u9519\u8bef\u65f6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorCode": 412,\n  "errorMessage": "\u4e0a\u7ea7\u6863\u6848\u4e0d\u5b58\u5728",\n  "errorDetails": null,\n  "code": null,\n  "data": null\n}\n')),(0,l.kt)("p",null,"\u5f53\u91cd\u590d\u5bfc\u5165\u65f6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 412,\n    "errorMessage": "\u8be5\u6863\u6848\u9879\u540d\u79f0[\u9879\u76ee2-1]\u5bfc\u5165\u91cd\u590d",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')),(0,l.kt)("p",null,"\u5f53\u6863\u6848\u503c\u7f16\u7801\u5df2\u5b58\u5728\u65f6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 412,\n    "errorMessage": "\u7f16\u7801[XM2003]\u5df2\u7ecf\u88ab\u5360\u7528",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')))}k.isMDXComponent=!0}}]);