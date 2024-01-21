"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6959],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return f}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=m(n),f=r,k=c["".concat(o,".").concat(f)]||c[f]||s[f]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,i=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&a.createElement("small",null,l))}},45972:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return s},default:function(){return f}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(41627),p=["components"],o={},m="\u521b\u5efa\u81ea\u5b9a\u4e49\u5b57\u6bb5(\u5168\u5c40\u5b57\u6bb5)",d={unversionedId:"open-api/forms/create-custom-field",id:"version-v2.0/open-api/forms/create-custom-field",title:"\u521b\u5efa\u81ea\u5b9a\u4e49\u5b57\u6bb5(\u5168\u5c40\u5b57\u6bb5)",description:"<Control",source:"@site/versioned_docs/version-v2.0/open-api/forms/create-custom-field.md",sourceDirName:"open-api/forms",slug:"/open-api/forms/create-custom-field",permalink:"/docs/v2.0/open-api/forms/create-custom-field",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/forms/create-custom-field.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6839\u636e\u4f01\u4e1aID\u83b7\u53d6\u5206\u644a\u6a21\u7248\u5217\u8868",permalink:"/docs/v2.0/open-api/forms/get-apportion-template-list"},next:{title:"\u5728\u5355\u636e\u6a21\u677f\u4e2d\u8ffd\u52a0\u5168\u5c40\u5b57\u6bb5",permalink:"/docs/v2.0/open-api/forms/add-global-field"}},s=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],c={toc:s};function f(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u5b57\u6bb5\u5168\u5c40\u5b57\u6bb5"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u5b57\u6bb5(\u5168\u5c40\u5b57\u6bb5)"),(0,l.kt)(i.Z,{method:"POST",url:"/api/openapi/v1/property/addPropertySet",mdxType:"Control"}),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"properties")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u4fe1\u606f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f label")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f canAsDimension")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u81ea\u5b9a\u4e49\u6863\u6848"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u81ea\u5b9a\u4e49\u6863\u6848")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f dataType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003","\u2003"," \u221f type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u7c7b\u522b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u53ef\u53c2\u8003"\u793a\u4f8b"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003","\u2003"," \u221f entity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u7528\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"td"},"ref"),' \u65f6\u5fc5\u586b\uff0c\u53ef\u53c2\u8003"CURL\u793a\u4f8b"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003","\u2003"," \u221f elemType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9644\u4ef6\u4fe1\u606f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"td"},"list"),' \u65f6\u5fc5\u586b\uff0c\u53ef\u53c2\u8003"CURL\u793a\u4f8b"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003","\u2003"," \u221f unit")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5355\u4f4d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"td"},"number"),' \u65f6\u9009\u586b\uff0c\u53ef\u53c2\u8003"CURL\u793a\u4f8b"',(0,l.kt)("br",null),"\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"kg"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"cm")," \u7b49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003","\u2003"," \u221f scale")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u6570\u4f4d\u6570"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"td"},"number"),' \u65f6\u5fc5\u586b\uff0c\u53ef\u53c2\u8003"CURL\u793a\u4f8b"')))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},'\u6570\u636e\u7c7b\u578b\u6709\u591a\u79cd\u60c5\u51b5\uff0c\u6ce8\u610f\u7504\u522b\uff0c\u53ef\u53c2\u8003"CURL\u793a\u4f8b"\u3002')))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v1/property/addPropertySet?accessToken=f8QbuH2hwQ5E00\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "properties":[\n        {\n            "label":"\u81ea\u5b9a\u4e49\u6269\u5c55\u6d4b\u8bd5",\n            "canAsDimension":false,\n            "dataType":{\n                "type":"ref",\n                "entity":"datalink.DataLinkEntity.99280b7abde4c9c19800" //\u81ea\u5b9a\u4e49\u6269\u5c55\n            }\n        },\n        {\n            "label":"\u6863\u6848\u9879\u76ee",\n            "canAsDimension":true,\n            "dataType":{\n                "type":"ref",\n                "entity":"basedata.Dimension.\u9879\u76ee" //\u81ea\u5b9a\u4e49\u6863\u6848\n            }\n        },\n        {\n            "label":"\u6587\u672c1",\n            "canAsDimension":false,\n            "dataType":{\n                "type":"text"  //\u6587\u672c\n            }\n        },\n        {\n            "label":"\u6570\u5b571",\n            "canAsDimension":false,\n            "dataType":{\n                "type":"number",//\u6570\u5b57\n                "unit":"kg",    //\u5355\u4f4d\n                "scale": 3      //\u5c0f\u6570\u4f4d\u6570\n            }\n        },\n        {\n            "label":"\u91d1\u989d1",\n            "canAsDimension":false,\n            "dataType":{\n                "type":"money" //\u91d1\u989d\n            }\n        },\n        {\n            "label":"\u65e5\u671f1",\n            "canAsDimension":false,\n            "dataType":{\n                "type":"date" //\u65e5\u671f\n            }\n        },\n        {\n            "label":"\u65e5\u671f\u8303\u56f41",\n            "canAsDimension":false,\n            "dataType":{\n                "type":"dateRange" //\u65e5\u671f\u8303\u56f4\n            }\n        },\n        {\n            "label":"\u5f00\u51731",\n            "canAsDimension":false,\n            "dataType":{\n                "type":"boolean" //\u5f00\u5173\n            }\n        },\n        {\n            "label":"\u9644\u4ef61",\n            "canAsDimension":false,\n            "dataType":{\n                "type":"list",\n                "elemType":{\n                    "type":"attachment" //\u9644\u4ef6\n                }\n            }\n        },\n        {\n            "label":"\u90e8\u95e81",\n            "canAsDimension":true,\n            "dataType":{\n                "type":"ref",\n                "entity":"organization.Department" //\u90e8\u95e8\n            }\n        },\n        {\n            "label":"\u5458\u5de51",\n            "canAsDimension":true,\n            "dataType":{\n                "type":"ref",\n                "entity":"organization.Staff" //\u5458\u5de5\n            }\n        },\n        {\n            "label":"\u57ce\u5e021",\n            "canAsDimension":false,\n            "dataType":{\n                "type":"ref",\n                "entity":"basedata.city" //\u57ce\u5e02\n            }\n        },\n        {\n            "label":"\u679a\u4e3e1",\n            "canAsDimension":false,\n            "dataType":{\n                "type":"ref",\n                "entity":"basedata.Enum.CabinType" //\u679a\u4e3e\n            }\n        }\n    ]\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u9700\u8981\u5224\u65ad\u72b6\u6001\u7801\u6765\u786e\u5b9a\u662f\u5426\u6210\u529f\u3002")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"code 204\n")),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u53c2\u6570\u503c\u6240\u5bf9\u5e94\u7684\u5176\u4ed6\u5fc5\u586b\u53c2\u6570\u672a\u586b\u5199\u6216\u586b\u5199\u9519\u8bef\u65f6\uff0c\u8fd4\u56de\u5982\u4e0b\u54cd\u5e94\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 400,\n    "errorMessage": "[ref]\u4e3a\u4e0d\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')))}f.isMDXComponent=!0}}]);