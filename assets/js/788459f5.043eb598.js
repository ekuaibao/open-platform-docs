"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8948],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return g}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),N=d(a),g=r,f=N["".concat(o,".").concat(g)]||N[g]||k[g]||l;return a?n.createElement(f,p(p({ref:e},m),{},{components:a})):n.createElement(f,p({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=N;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},41627:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,a=t.url,l=t.description,p=a.replace(/\`(.*?)\`/g,"<span>$1</span>");return n.createElement("div",{className:r.control+" "+r[e]},n.createElement("span",{className:r.method},e),n.createElement("strong",{dangerouslySetInnerHTML:{__html:p}}),l&&n.createElement("small",null,l))}},88053:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return k},default:function(){return g}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p=a(41627),i=["components"],o={},d="\u65b0\u589e\u4ed8\u6b3e\u8d26\u6237",m={unversionedId:"open-api/pay/new-payerInfo",id:"version-v2.1/open-api/pay/new-payerInfo",title:"\u65b0\u589e\u4ed8\u6b3e\u8d26\u6237",description:"<Control",source:"@site/versioned_docs/version-v2.1/open-api/pay/new-payerInfo.md",sourceDirName:"open-api/pay",slug:"/open-api/pay/new-payerInfo",permalink:"/docs/v2.1/open-api/pay/new-payerInfo",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/pay/new-payerInfo.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u6240\u6709\u5f00\u6237\u7f51\u70b9\u4fe1\u606f",permalink:"/docs/v2.1/open-api/pay/get-all-branch"},next:{title:"\u65b0\u589e\u6536\u6b3e\u8d26\u6237",permalink:"/docs/v2.1/open-api/pay/new-payeeInfo"}},k=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],N={toc:k};function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u65b0\u589e\u4ed8\u6b3e\u8d26\u6237"},"\u65b0\u589e\u4ed8\u6b3e\u8d26\u6237"),(0,l.kt)(p.Z,{method:"POST",url:"/api/openapi/v4/payerInfos",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#160"},(0,l.kt)("strong",{parentName:"a"},"1.6.0"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"sort")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8d26\u53f7\u7c7b\u522b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"OTHER"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"BANK")," : \u94f6\u884c\u5361 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"OTHER")," : \u5176\u5b83")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8d26\u6237\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"PUBLIC"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PUBLIC")," : \u5bf9\u516c\u8d26\u6237")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u6237\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u6237\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"cardNo")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u94f6\u884c\u5361\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u94f6\u884c\u5361\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"bank")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u94f6\u884c\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u94f6\u884c\u540d\u79f0\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u53ef\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"strong"},"branch")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"strong"},"bankLinkNo")," \u81ea\u52a8\u56de\u586b\uff0c",(0,l.kt)("br",null),"\u9700\u4fdd\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"strong"},"branch")," \u5728 ",(0,l.kt)("a",{parentName:"strong",href:"/docs/open-api/pay/get-all-branch"},"\u5f00\u6237\u7f51\u70b9")," \u5185"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"branch")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u6237\u7f51\u70b9"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"sort")," = ",(0,l.kt)("inlineCode",{parentName:"strong"},"BANK")," \u65f6\uff0c\u5fc5\u586b"),"\u3002\u83b7\u53d6 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/pay/get-all-branch"},"\u5f00\u6237\u7f51\u70b9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"bankLinkNo")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u94f6\u8054\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u5f53\u5f00\u6237\u7f51\u70b9\u4e0e\u5408\u601d\u7cfb\u7edf\u4e0d\u5339\u914d\u65f6\uff0c\u53ef\u901a\u8fc7\u94f6\u8054\u53f7\u5339\u914d"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"province")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u94f6\u884c\u6240\u5728\u7701"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u94f6\u884c\u6240\u5728\u7701\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u53ef\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"strong"},"branch")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"strong"},"bankLinkNo")," \u81ea\u52a8\u56de\u586b\uff0c\u9700\u4fdd\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"strong"},"branch")," \u5728 ",(0,l.kt)("a",{parentName:"strong",href:"/docs/open-api/pay/get-all-branch"},"\u5f00\u6237\u7f51\u70b9")," \u5185"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"city")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u94f6\u884c\u6240\u5728\u57ce\u5e02"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u94f6\u884c\u6240\u5728\u57ce\u5e02\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u53ef\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"strong"},"branch")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"strong"},"bankLinkNo")," \u81ea\u52a8\u56de\u586b\uff0c\u9700\u4fdd\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"strong"},"branch")," \u5728 ",(0,l.kt)("a",{parentName:"strong",href:"/docs/open-api/pay/get-all-branch"},"\u5f00\u6237\u7f51\u70b9")," \u5185"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"remark")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5907\u6ce8\u4fe1\u606f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5907\u6ce8\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"channels")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u4ed8\u65b9\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u8003 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/pay/get-payerInfos-search#%E6%94%AF%E4%BB%98%E6%96%B9%E5%BC%8Fchannels%E7%B1%BB%E5%9E%8B%E5%8F%82%E8%80%83%E9%9C%80%E6%89%BE%E6%94%AF%E4%BB%98%E4%BA%BA%E5%91%98%E7%A1%AE%E8%AE%A4"},"\u652f\u4ed8\u65b9\u5f0f\u7c7b\u578b"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"visibility")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u89c1\u8303\u56f4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u89c1\u8303\u56f4\u5bf9\u8c61")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f fullVisible")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5168\u5458\u53ef\u89c1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u5168\u5458\u53ef\u89c1 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u90e8\u5206\u53ef\u89c1",(0,l.kt)("br",null),"\u90e8\u5206\u53ef\u89c1\u5219\u4ec5\u6709\u767d\u540d\u5355\u4e2d\u53ef\u89c1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f roles")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u89d2\u8272\u767d\u540d\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-roles-group"},"\u67e5\u8be2\u89d2\u8272\u7ec4\u548c\u89d2\u8272")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f staffs")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u767d\u540d\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u83b7\u53d6\u5458\u5de5\u5217\u8868")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f departments")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u767d\u540d\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-departments"},"\u83b7\u53d6\u90e8\u95e8\u5217\u8868")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f departmentsIncludeChildren")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0b\u5c5e\u5b50\u90e8\u95e8\u662f\u5426\u53ef\u89c1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u53ef\u89c1 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u4e0d\u53ef\u89c1")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"branch"),"\uff08\u5f00\u6237\u7f51\u70b9\uff09\u4e0d\u786e\u5b9a\u65f6\uff0c\u53ef\u586b\u5199 \u201d1\u201c\uff08branch\u4e0d\u53ef\u4e3anull\uff09\uff0c\u5e76\u4fdd\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"li"},"bankLinkNo"),"\uff08\u94f6\u8054\u53f7\uff09\u6b63\u786e\uff0c\u7cfb\u7edf\u4f1a\u6839\u636e\u94f6\u8054\u53f7\u81ea\u52a8\u56de\u586b\u5f00\u6237\u7f51\u70b9\u3002")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v4/payerInfos?accessToken=ID_3H6V3NV0s$g:Urf3lsFgBp00gw\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "sort": "BANK",                 //\u8d26\u53f7\u7c7b\u522b\n    "type":"PUBLIC",                //\u8d26\u6237\u7c7b\u578b       \n    "name": "\u63a5\u53e3\u65b0\u589e6",            //\u5f00\u6237\u540d\u79f0\n    "cardNo": "05306",             //\u94f6\u884c\u5361\u53f7\n    // "bank":"\u5de5\u5546\u94f6\u884c",          //\u94f6\u884c\u540d\u79f0\uff0c\u6b64\u793a\u4f8b\u4e3a\u901a\u8fc7\u201cbankLinkNo\u201d\uff08\u94f6\u8054\u53f7\uff09\u81ea\u52a8\u56de\u586b                \n    "branch":"1",                  //\u5f00\u6237\u7f51\u70b9\uff0c\u6b64\u793a\u4f8b\u4e3a\u901a\u8fc7\u201cbankLinkNo\u201d\uff08\u94f6\u8054\u53f7\uff09\u81ea\u52a8\u56de\u586b       \n    //"province":"\u5317\u4eac\u5e02",         //\u94f6\u884c\u6240\u5728\u7701\uff0c\u6b64\u793a\u4f8b\u4e3a\u901a\u8fc7\u201cbankLinkNo\u201d\uff08\u94f6\u8054\u53f7\uff09\u81ea\u52a8\u56de\u586b                    \n    //"city":"\u5317\u4eac\u5e02",             //\u94f6\u884c\u6240\u5728\u57ce\u5e02\uff0c\u6b64\u793a\u4f8b\u4e3a\u901a\u8fc7\u201cbankLinkNo\u201d\uff08\u94f6\u8054\u53f7\uff09\u81ea\u52a8\u56de\u586b                        \n    "bankLinkNo": "403431000017",  //\u94f6\u8054\u53f7\n    "remark":"\u5907\u6ce8",               //\u5907\u6ce8\u4fe1\u606f\n    "channels": [                 //\u652f\u4ed8\u65b9\u5f0f\n        "OFFLINE"\n    ],\n    "visibility":{                  //\u53ef\u89c1\u6027\n        "fullVisible":false,        //\u662f\u5426\u5168\u5458\u53ef\u89c1\uff08true\uff1a\u5168\u90e8\u53ef\u89c1\uff0cfalse\uff1a\u6307\u5b9a\u4eba\u5458\u53ef\u89c1\uff09\n        "roles":["Urf3lsFgBp00gw:leader"],              //\u53ef\u89c1\u89d2\u8272ID\n        "staffs":["Urf3lsFgBp00gw:ID_3two5lv0D7M"],     //\u53ef\u89c1\u5458\u5de5ID\n        "departments":["Urf3lsFgBp00gw:ID_3nLNQ_X0RQM"],//\u53ef\u89c1\u90e8\u95e8ID\n        "departmentsIncludeChildren":true               //\u53ef\u89c1\u90e8\u95e8\u662f\u5426\u5305\u542b\u5b50\u90e8\u95e8\uff08true\uff1a\u662f\uff0cfalse\uff1a\u5426\uff09\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "pipeline": 1,\n        "grayver": "9.30.0.0:A",\n        "id": "ID_3Hh7yim08x0",      //\u65b0\u589e\u7684\u4ed8\u6b3e\u8d26\u6237ID\n        "version": 1,\n        "active": true,\n        "createTime": 1653896478960,\n        "updateTime": 1653896478960,\n        "nameSpell": "",\n        "corporationId": "Urf3lsFgBp00gw",\n        "sourceCorporationId": null,\n        "dataCorporationId": null,\n        "name": "",\n        "code": "",\n        "accountName": "\u63a5\u53e3\u65b0\u589e9",\n        "accountNo": "05309",\n        "type": "PUBLIC",\n        "owner": "CORPORATION",\n        "sort": "BANK",\n        "logs": [],\n        "staffId": null,\n        "bank": "\u90ae\u653f\u94f6\u884c",\n        "icon": "https://images.ekuaibao.com/bank/bank-yz.svg",\n        "asPayee": false,\n        "asPayer": true,\n        "channels": [\n            "OFFLINE"\n        ],\n        "visibility": {\n            "fullVisible": false,\n            "staffs": [\n                "Urf3lsFgBp00gw:ID_3two5lv0D7M1"\n            ],\n            "roles": [\n                "Urf3lsFgBp00gw:leader1"\n            ],\n            "departments": [\n                "Urf3lsFgBp00gw:ID_3nLNQ_X0$QM1"\n            ],\n            "departmentsIncludeChildren": true\n        },\n        "advancedOption": null,\n        "defaultChannel": "OFFLINE",\n        "bankLinkNo": "403431000017",\n        "certificateType": null,\n        "certificateNo": null,\n        "remark": "\u5907\u6ce8",\n        "branch": "\u4e2d\u56fd\u90ae\u653f\u50a8\u84c4\u94f6\u884c\u80a1\u4efd\u6709\u9650\u516c\u53f8\u5b9c\u6625\u5e02\u5206\u884c",\n        "province": "\u6c5f\u897f\u7701",\n        "city": "\u5b9c\u6625\u5e02",\n        "unionIcon": null,\n        "unionBank": null,\n        "extensions": null\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8be5\u8d26\u6237\u5df2\u5b58\u5728\uff0c\u65e0\u6cd5\u521b\u5efa"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"name"),"\uff08\u5f00\u6237\u540d\u79f0\uff09\u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"cardNo"),"\uff08\u94f6\u884c\u5361\u53f7\uff09\u5728\u7cfb\u7edf\u4e2d\u662f\u5426\u5b58\u5728")))))}g.isMDXComponent=!0}}]);