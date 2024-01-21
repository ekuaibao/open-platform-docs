"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88918],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(f,i(i({ref:e},s),{},{components:r})):n.createElement(f,i({ref:e},s))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41627:function(t,e,r){r.d(e,{Z:function(){return l}});var n=r(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,r=t.url,l=t.description,i=r.replace(/\`(.*?)\`/g,"<span>$1</span>");return n.createElement("div",{className:a.control+" "+a[e]},n.createElement("span",{className:a.method},e),n.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&n.createElement("small",null,l))}},66716:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=r(41627),o=["components"],p={},c="\u5173\u95ed\u7533\u8bf7\u4e8b\u9879",s={unversionedId:"open-api/flows/close-requisition",id:"version-v2.2/open-api/flows/close-requisition",title:"\u5173\u95ed\u7533\u8bf7\u4e8b\u9879",description:"<Control",source:"@site/versioned_docs/version-v2.2/open-api/flows/close-requisition.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/close-requisition",permalink:"/docs/open-api/flows/close-requisition",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.2/open-api/flows/close-requisition.md",tags:[],version:"v2.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5171\u4eab\u7533\u8bf7\u4e8b\u9879",permalink:"/docs/open-api/flows/share-requisition"},next:{title:"\u83b7\u53d6\u5355\u636e\u9644\u4ef6",permalink:"/docs/open-api/flows/get-flows-attachment"}},m=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],u={toc:m};function d(t){var e=t.components,r=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5173\u95ed\u7533\u8bf7\u4e8b\u9879"},"\u5173\u95ed\u7533\u8bf7\u4e8b\u9879"),(0,l.kt)(i.Z,{method:"PUT",url:"/api/openapi/v1/requisition/closeRequisition/[`ids`]",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#180"},(0,l.kt)("strong",{parentName:"a"},"1.8.0"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"ids")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7533\u8bf7\u4e8b\u9879ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/flows/get-requisition-all"},"\u83b7\u53d6\u7533\u8bf7\u4e8b\u9879\u5217\u8868")," \u83b7\u53d6")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location -g --request PUT 'https://app.ekuaibao.com/api/openapi/v1/requisition/closeRequisition/[ID_3BTtR548KcM,ID_3BTtR54K_cM]?accessToken=ID_3KGmoYP01Lv:dfX3BRy2ms0m6g'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": "\u5173\u95ed\u7533\u8bf7\u4e8b\u9879\uff0c\u6210\u529f\u5173\u95ed\u4e86[2]\u6761"\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5173\u95ed\u7533\u8bf7\u4e8b\u9879,\u4f20\u5165\u7684ids\u67e5\u8be2\u4e0d\u5230\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"ids"),"\uff08\u7533\u8bf7\u4e8b\u9879ID\uff09\u662f\u5426\u6b63\u786e\u6216\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5173\u95ed\u7533\u8bf7\u4e8b\u9879\uff0c\u6210\u529f\u5173\u95ed\u4e86","[0]","\u6761,\u672a\u5220\u9664\u6210\u529f\u7684\u539f\u56e0\u4e3a:",(0,l.kt)("br",null),"1\u3001code\u4e3a","[S22000005]",",id\u4e3a","[ID_3BTtR548KcM]","\u7684\u7533\u8bf7\u5355\u5df2\u5173\u95ed\u6216\u5220\u9664\uff0c\u65e0\u6cd5\u4f7f\u7528\u3002",(0,l.kt)("br",null),"2\u3001code\u4e3a","[S22000006]",",id\u4e3a","[ID_3BTtR54K_cM]","\u7684\u7533\u8bf7\u5355\u5df2\u5173\u95ed\u6216\u5220\u9664\uff0c\u65e0\u6cd5\u4f7f\u7528\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u7533\u8bf7\u4e8b\u9879\u662f\u5426\u5df2\u5173\u95ed\u6216\u5220\u9664")))))}d.isMDXComponent=!0}}]);