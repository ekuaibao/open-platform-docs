"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42652],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,f=u["".concat(p,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var t=e.method,n=e.url,l=e.description,i=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[t]},a.createElement("span",{className:r.method},t),a.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&a.createElement("small",null,l))}},55155:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return c},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(41627),o=["components"],p={},d="\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61",m={unversionedId:"open-api/datalink/get-entity-list",id:"version-v2.1/open-api/datalink/get-entity-list",title:"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61",description:"\u83b7\u53d6\u67d0\u4e2a\u81ea\u5efa\u5e94\u7528\u4e0b\u7684\u6240\u6709\u4e1a\u52a1\u5bf9\u8c61\u3002",source:"@site/versioned_docs/version-v2.1/open-api/datalink/get-entity-list.md",sourceDirName:"open-api/datalink",slug:"/open-api/datalink/get-entity-list",permalink:"/docs/v2.1/open-api/datalink/get-entity-list",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/datalink/get-entity-list.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u81ea\u5efa\u5e94\u7528",permalink:"/docs/v2.1/open-api/datalink/edit-platform"},next:{title:"\u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61",permalink:"/docs/v2.1/open-api/datalink/create-entity"}},c=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],u={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61"},"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61"),(0,l.kt)("p",null,"\u83b7\u53d6\u67d0\u4e2a\u81ea\u5efa\u5e94\u7528\u4e0b\u7684\u6240\u6709\u4e1a\u52a1\u5bf9\u8c61\u3002"),(0,l.kt)(i.Z,{method:"GET",url:"/api/openapi/v2/datalink/entity/$`platformId`",mdxType:"Control"}),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"platformId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5efa\u5e94\u7528ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/datalink/question-answer#%E9%97%AE%E9%A2%98%E4%B8%80"},"\u81ea\u5efa\u5e94\u7528ID\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/datalink/entity/$PgQbrAHda85Y00?accessToken=cxEbrzNJSA3A00'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "version": 3,\n            "active": true,              //\u662f\u5426\u542f\u7528\n            "createTime": 1597659931743,\n            "updateTime": 1597659931743,\n            "name": "\u4e1a\u52a1\u5bf9\u8c611",          //\u4e1a\u52a1\u5bf9\u8c61\u540d\u79f0\n            "nameSpell": "SHITI1",       //\u4e1a\u52a1\u5bf9\u8c61\u540d\u79f0\u62fc\u97f3\n            "code": "",\n            "corporationId": "34A73EyI8A0w00",\n            "ledgerIds": null,\n            "plannedIds": null,\n            "parentId": "",\n            "scoped": true,                     //true\u90e8\u5206\u53ef\u89c1\uff0cfalse\u5168\u5458\u53ef\u89c1\n            "type": "BILL",                     //\u4e1a\u52a1\u5bf9\u8c61\u7c7b\u578b\uff0cDIMENSION\uff1a\u6863\u6848\u3001BILL\uff1a\u5355\u636e\u3001ORDER\uff1a\u8ba2\u5355\n            "disableStrategy": "MANUAL_ADMIN",  //MANUAL_ADMIN\uff1a\u7ba1\u7406\u5458\u505c\u7528/\u542f\u7528\u3001LIMIT_COUNT\uff1a\u8d85\u8fc7\u5f15\u7528\u6b21\u6570\u505c\u7528\n            "maxUsageCount": 0,                 //\u6700\u5927\u5f15\u7528\u6b21\u6570\n            "writtenOffField": null,\n            "fields": [                         //\u4e1a\u52a1\u5bf9\u8c61\u5b57\u6bb5\n                {\n                    "name": "E_ea9d0b6e522a25878000_name",  //\u5b57\u6bb5\u540d\u79f0\uff0c\u4e1a\u52a1\u5bf9\u8c61\u5b57\u6bb5\u552f\u4e00\u6807\u793a\n                    "label": "\u540d\u79f0",                        //\u663e\u793a\u540d\u79f0\n                    "type": "text",                         //\u7c7b\u578b: text\u6587\u672c\u3001date\u65f6\u95f4\u3001dateRange\u65f6\u95f4\u6bb5\u3001number\u6570\u5b57\u3001money\u91d1\u989d\u3001switcher\u5f00\u5173\n                    "source": "dataLink",\n                    "optional": false,                      //\u662f\u5426\u9009\u586b\n                    "defaultValue": null,\n                    "formula": false,\n                    "calculation": {\n                        "dependencies": [],\n                        "dependenciesBy": [],\n                        "order": 1\n                    }\n                },\n                {\n                    "name": "E_ea9d0b6e522a25878000_code",\n                    "label": "\u7f16\u7801",\n                    "type": "autoNumber",\n                    "source": "dataLink",\n                    "optional": false,\n                    "defaultValue": null,\n                    "formula": false,\n                    "calculation": {\n                        "dependencies": [],\n                        "dependenciesBy": [],\n                        "order": 0\n                    },\n                    "rule": "{000}"\n                },\n            ],\n            "defaultMappingRuleId": "NyIbrB8G9ous00",\n            "filterId": null,\n            "id": "ea9d0b6e522a25878000",       //\u4e1a\u52a1\u5bf9\u8c61ID \n            "platformId": "PgQbrAHda85Y00",     //\u81ea\u5efa\u5e94\u7528ID \n            "details": null,\n            "homePageVisibleIds": null,\n            "homeVisibility": {\n                "fullVisible": false,\n                "staffs": null,\n                "roles": null,\n                "departments": null,\n                "departmentsIncludeChildren": true\n            },\n            "showOnPage": true,\n            "importMethod": [\n                "excel",\n                "api"\n            ],\n            "allowRecordLog": false,\n            "logFields": []\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"403")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8be5\u5e73\u53f0\u4e0d\u5b58\u5728"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"platformId"),"\uff08\u81ea\u5efa\u5e94\u7528ID\uff09\u662f\u5426\u5b58\u5728")))))}s.isMDXComponent=!0}}]);