"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15960],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),f=p(t),m=r,s=f["".concat(o,".").concat(m)]||f[m]||u[m]||l;return t?a.createElement(s,i(i({ref:n},c),{},{components:t})):a.createElement(s,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=f;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41627:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var n=e.method,t=e.url,l=e.description,i=t.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[n]},a.createElement("span",{className:r.method},n),a.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&a.createElement("small",null,l))}},64460:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=t(41627),d=["components"],o={},p="\u83b7\u53d6\u884c\u7a0b\u6a21\u7248",c={unversionedId:"open-api/feetype/get-travelTemplate",id:"version-v2.2/open-api/feetype/get-travelTemplate",title:"\u83b7\u53d6\u884c\u7a0b\u6a21\u7248",description:"<Control",source:"@site/versioned_docs/version-v2.2/open-api/feetype/get-travelTemplate.md",sourceDirName:"open-api/feetype",slug:"/open-api/feetype/get-travelTemplate",permalink:"/docs/open-api/feetype/get-travelTemplate",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.2/open-api/feetype/get-travelTemplate.md",tags:[],version:"v2.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6839\u636eID\u6216CODE\u83b7\u53d6\u8d39\u7528\u7c7b\u578b\u6a21\u677f\u4fe1\u606f",permalink:"/docs/open-api/feetype/get-feetypes"},next:{title:"\u65b0\u589e\u8d39\u7528\u7c7b\u578b\u9ed8\u8ba4\u5bfc\u5165\u9879",permalink:"/docs/open-api/feetype/default-feetypes-import"}},u=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2}],f={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6\u884c\u7a0b\u6a21\u7248"},"\u83b7\u53d6\u884c\u7a0b\u6a21\u7248"),(0,l.kt)(i.Z,{method:"GET",url:"/api/openapi/v2/specifications/byTravelTemplate",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1220"},(0,l.kt)("strong",{parentName:"a"},"1.22.0"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://app.ekuaibao.com/api/openapi/v2/specifications/byTravelTemplate?accessToken=ID01swZqg9Hr5Y%3ATdk3tgber501v0'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "corporationId": "TsI3tt8KjF4S7M",\n            "version": "2.0",\n            "name": "\u7528\u8f66",\n            "entityId": "b20dd823890c7da21800",\n            "active": true,\n            "components": [\n                {\n                    "field": "dataLinkId",\n                    "type": "String",\n                    "defaultValue": {\n                        "type": "fixed",\n                        "value": null\n                    }\n                },\n                {\n                    "field": "dataLinkTemplateId",\n                    "type": "String",\n                    "defaultValue": {\n                        "type": "fixed",\n                        "value": "ID_3twzygNZJxw"\n                    }\n                },\n                {\n                    "field": "dataLinkForm",\n                    "type": "components",\n                    "components": [\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u4f4f\u5bbf\u5730",\n                            "type": "city",\n                            "multiple": true\n                        },\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u5165\u4f4f\u65e5\u671f",\n                            "type": "long"\n                        },\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u79bb\u5e97\u65e5\u671f",\n                            "type": "long"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            "corporationId": "TsI3tt8KjF4S7M",\n            "version": "2.0",\n            "name": "\u98de\u673a",\n            "entityId": "b30dd823890c7d5a1800",\n            "active": true,\n            "components": [\n                {\n                    "field": "dataLinkId",\n                    "type": "String",\n                    "defaultValue": {\n                        "type": "fixed",\n                        "value": null\n                    }\n                },\n                {\n                    "field": "dataLinkTemplateId",\n                    "type": "String",\n                    "defaultValue": {\n                        "type": "fixed",\n                        "value": "ID_3twzygNZrxw"\n                    }\n                },\n                {\n                    "field": "dataLinkForm",\n                    "type": "components",\n                    "components": [\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u51fa\u53d1\u5730",\n                            "type": "city",\n                            "multiple": true\n                        },\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u76ee\u7684\u5730",\n                            "type": "city",\n                            "multiple": true\n                        },\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u884c\u7a0b\u65e5\u671f",\n                            "type": "long"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            "corporationId": "TsI3tt8KjF4S7M",\n            "version": "2.0",\n            "name": "\u9910\u8865",\n            "entityId": "b60dd823890c7dba1800",\n            "active": true,\n            "components": [\n                {\n                    "field": "dataLinkId",\n                    "type": "String",\n                    "defaultValue": {\n                        "type": "fixed",\n                        "value": null\n                    }\n                },\n                {\n                    "field": "dataLinkTemplateId",\n                    "type": "String",\n                    "defaultValue": {\n                        "type": "fixed",\n                        "value": "ID_3twzygNZPxw"\n                    }\n                },\n                {\n                    "field": "dataLinkForm",\n                    "type": "components",\n                    "components": [\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u4f4f\u5bbf\u5730",\n                            "type": "city",\n                            "multiple": true\n                        },\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u5165\u4f4f\u65e5\u671f",\n                            "type": "long"\n                        },\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u79bb\u5e97\u65e5\u671f",\n                            "type": "long"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            "corporationId": "TsI3tt8KjF4S7M",\n            "version": "2.0",\n            "name": "\u9152\u5e97",\n            "entityId": "ba0dd823890c7d721800",\n            "active": true,\n            "components": [\n                {\n                    "field": "dataLinkId",\n                    "type": "String",\n                    "defaultValue": {\n                        "type": "fixed",\n                        "value": null\n                    }\n                },\n                {\n                    "field": "dataLinkTemplateId",\n                    "type": "String",\n                    "defaultValue": {\n                        "type": "fixed",\n                        "value": "ID_3twzygNZxxw"\n                    }\n                },\n                {\n                    "field": "dataLinkForm",\n                    "type": "components",\n                    "components": [\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u4f4f\u5bbf\u5730",\n                            "type": "city",\n                            "multiple": true\n                        },\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u5165\u4f4f\u65e5\u671f",\n                            "type": "long"\n                        },\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u79bb\u5e97\u65e5\u671f",\n                            "type": "long"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            "corporationId": "TsI3tt8KjF4S7M",\n            "version": "2.0",\n            "name": "\u706b\u8f66",\n            "entityId": "d20dd823890c7d8a1800",\n            "active": true,\n            "components": [\n                {\n                    "field": "dataLinkId",\n                    "type": "String",\n                    "defaultValue": {\n                        "type": "fixed",\n                        "value": null\n                    }\n                },\n                {\n                    "field": "dataLinkTemplateId",\n                    "type": "String",\n                    "defaultValue": {\n                        "type": "fixed",\n                        "value": "ID_3twzygNZDxw"\n                    }\n                },\n                {\n                    "field": "dataLinkForm",\n                    "type": "components",\n                    "components": [\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u51fa\u53d1\u5730",\n                            "type": "city",\n                            "multiple": true\n                        },\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u76ee\u7684\u5730",\n                            "type": "city",\n                            "multiple": true\n                        },\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u884c\u7a0b\u65e5\u671f",\n                            "type": "long"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            "corporationId": "TsI3tt8KjF4S7M",\n            "version": "2.0",\n            "name": "\u901a\u7528",\n            "entityId": "e20dd823890c7dd21800",\n            "active": true,\n            "components": [\n                {\n                    "field": "dataLinkId",\n                    "type": "String",\n                    "defaultValue": {\n                        "type": "fixed",\n                        "value": null\n                    }\n                },\n                {\n                    "field": "dataLinkTemplateId",\n                    "type": "String",\n                    "defaultValue": {\n                        "type": "fixed",\n                        "value": "ID_3twzygNZVxw"\n                    }\n                },\n                {\n                    "field": "dataLinkForm",\n                    "type": "components",\n                    "components": [\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u4f4f\u5bbf\u5730",\n                            "type": "city",\n                            "multiple": true\n                        },\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u5165\u4f4f\u65e5\u671f",\n                            "type": "long"\n                        },\n                        {\n                            "field": "E_ac0dd823890c7d2a1800_\u79bb\u5e97\u65e5\u671f",\n                            "type": "long"\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);