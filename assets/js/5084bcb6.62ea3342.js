"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43698],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),N=m(n),s=r,c=N["".concat(o,".").concat(s)]||N[s]||k[s]||i;return n?a.createElement(c,l(l({ref:e},d),{},{components:n})):a.createElement(c,l({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},i=function(t){var e=t.method,n=t.url,i=t.description,l=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),i&&a.createElement("small",null,i))}},27056:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return k},default:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(41627),p=["components"],o={},m="\u83b7\u53d6\u6536\u6b3e\u8d26\u6237",d={unversionedId:"open-api/pay/get-payeeInfos",id:"open-api/pay/get-payeeInfos",title:"\u83b7\u53d6\u6536\u6b3e\u8d26\u6237",description:"\u6839\u636e \u6536\u6b3e\u8d26\u6237ID\u3001\u5f00\u6237\u540d\u79f0\u3001\u94f6\u884c\u5361\u53f7 \u83b7\u53d6\u6536\u6b3e\u8d26\u6237\u4fe1\u606f\uff08\u652f\u6301\u5206\u9875\uff09\u3002",source:"@site/docs/open-api/pay/get-payeeInfos.md",sourceDirName:"open-api/pay",slug:"/open-api/pay/get-payeeInfos",permalink:"/docs/next/open-api/pay/get-payeeInfos",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/pay/get-payeeInfos.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u4ed8\u6b3e\u8d26\u6237",permalink:"/docs/next/open-api/pay/get-payerInfos-search"},next:{title:"\u83b7\u53d6\u6240\u6709\u5f00\u6237\u7f51\u70b9\u4fe1\u606f",permalink:"/docs/next/open-api/pay/get-all-branch"}},k=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],N={toc:k};function s(t){var e=t.components,n=(0,r.Z)(t,p);return(0,i.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u83b7\u53d6\u6536\u6b3e\u8d26\u6237"},"\u83b7\u53d6\u6536\u6b3e\u8d26\u6237"),(0,i.kt)("p",null,"\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"\u6536\u6b3e\u8d26\u6237ID"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u5f00\u6237\u540d\u79f0"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u94f6\u884c\u5361\u53f7")," \u83b7\u53d6\u6536\u6b3e\u8d26\u6237\u4fe1\u606f\uff08\u652f\u6301\u5206\u9875\uff09\u3002"),(0,i.kt)(l.Z,{method:"GET",url:"/api/openapi/v2.1/payeeInfos",mdxType:"Control"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,i.kt)("div",null,(0,i.kt)("p",null,"  ",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1270"},(0,i.kt)("strong",{parentName:"a"},"1.27.0")),"\u2003","-> \ud83d\udc1e \u54cd\u5e94\u4fe1\u606f\u4e2d\u65b0\u589e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"customFields"),"\uff08\u81ea\u5b9a\u4e49\u5b57\u6bb5\uff09\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1180"},(0,i.kt)("strong",{parentName:"a"},"1.18.0")),"\u2003","-> \ud83d\ude80 \u63a5\u53e3\u5347\u7ea7 ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.1")," \u7248\u672c\uff0c\u63a5\u53e3 ",(0,i.kt)("strong",{parentName:"p"},"\u6210\u529f\u54cd\u5e94")," \u4e2d\u65b0\u589e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"nationCode"),"\uff08\u94f6\u884c\u6240\u5728\u5730\u533a\u4ee3\u7801\uff08\u6d77\u5916\u8d26\u6237\uff09\uff09\u53c2\u6570\uff0c\u53c2\u6570\u4ecb\u7ecd\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/pay/new-payeeInfo"},"\u65b0\u589e\u6536\u6b3e\u8d26\u6237"),"\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1110"},(0,i.kt)("strong",{parentName:"a"},"1.11.0")),"\u2003","-> \ud83d\udc1e \u65b0\u589e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"orderBy")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"orderByType")," \u53c2\u6570\uff0c\u63a5\u53e3\u3010",(0,i.kt)("strong",{parentName:"p"},"\u6210\u529f\u54cd\u5e94"),"\u3011\u6570\u636e\u53ef\u6309\u7167 ",(0,i.kt)("inlineCode",{parentName:"p"},"updateTime"),"\uff08\u66f4\u65b0\u65f6\u95f4\uff09\u6392\u5e8f\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#180"},(0,i.kt)("strong",{parentName:"a"},"1.8.0"))," ","\u2003"," -> \ud83d\udc1e \u4fee\u590d\u4e86\u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"WEIXIN"),"\uff08\u5fae\u4fe1\uff09\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"OTHER"),"\uff08\u5176\u4ed6\uff09\u7c7b\u578b\u6536\u6b3e\u8d26\u6237\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"certificateType"),"\uff08\u8bc1\u4ef6\u7c7b\u578b \uff09\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"certificateNo"),"\uff08\u8bc1\u4ef6\u53f7\u7801\uff09\u8fd4\u56de\u7a7a\u7684BUG\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#120"},(0,i.kt)("strong",{parentName:"a"},"1.2.0"))," ","\u2003"," -> \ud83c\udd95 \u65b0\u589e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," \u53c2\u6570\u63cf\u8ff0\uff0c\u5e76\u4e14\u63a5\u53e3 ",(0,i.kt)("strong",{parentName:"p"},"\u6210\u529f\u54cd\u5e94")," \u4e2d\u589e\u52a0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," \u53c2\u6570\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#110"},(0,i.kt)("strong",{parentName:"a"},"1.1.0"))," ","\u2003"," -> \ud83c\udd95 \u65b0\u589e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"startDate")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"endDate")," \u53c2\u6570\uff0c\u6839\u636e ",(0,i.kt)("strong",{parentName:"p"},"\u66f4\u65b0\u65f6\u95f4")," \u8fc7\u6ee4\u5217\u8868\u6570\u636e\uff0c\u5e76\u4e14\u8fd4\u56de\u503c\u4e2d\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"createTime")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"updateTime")," \u53c2\u6570\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#07160"},(0,i.kt)("strong",{parentName:"a"},"0.7.160"))," -> \ud83c\udd95 \u65b0\u589e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"active"),"\uff08\u8d26\u6237\u662f\u5426\u542f\u7528\uff09\u53c2\u6570\u8fc7\u6ee4\u6536\u6b3e\u8d26\u6237\u4fe1\u606f\u3002",(0,i.kt)("br",null)))),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"accessToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"ids")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6536\u6b3e\u8d26\u6237ID"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4ee5\u65e0\u5185\u5bb9\uff0c\u591a\u4e2a\u503c\u7528\u82f1\u6587\u9017\u53f7 ",(0,i.kt)("inlineCode",{parentName:"td"},",")," \u8fdb\u884c\u5206\u5272")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"names")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u6237\u540d\u79f0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4ee5\u65e0\u5185\u5bb9\uff0c\u591a\u4e2a\u503c\u7528\u82f1\u6587\u9017\u53f7 ",(0,i.kt)("inlineCode",{parentName:"td"},",")," \u8fdb\u884c\u5206\u5272")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"cardNos")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u94f6\u884c\u5361\u53f7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4ee5\u65e0\u5185\u5bb9\uff0c\u591a\u4e2a\u503c\u7528\u82f1\u6587\u9017\u53f7 ",(0,i.kt)("inlineCode",{parentName:"td"},",")," \u8fdb\u884c\u5206\u5272")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"start")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u59cb\u67e5\u8be2\u7d22\u5f15"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4ece ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," \u5f00\u59cb")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"count")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u9875\u603b\u6570"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u4e0d\u80fd\u8d85\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"td"},"100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"active")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8d26\u6237\u662f\u5426\u542f\u7528"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," : \u542f\u7528 ","\u2003"," ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," : \u505c\u7528")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"startDate")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u5f00\u59cb\u65f6\u95f4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6309\u6570\u636e ",(0,i.kt)("strong",{parentName:"td"},"\u66f4\u65b0\u65f6\u95f4")," \u67e5\u8be2\uff0c\u683c\u5f0f\uff1ayyyy-MM-dd HH:mm:ss")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"endDate")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u7ed3\u675f\u65f6\u95f4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6309\u6570\u636e ",(0,i.kt)("strong",{parentName:"td"},"\u66f4\u65b0\u65f6\u95f4")," \u67e5\u8be2\uff0c\u683c\u5f0f\uff1ayyyy-MM-dd HH:mm:ss")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"orderBy")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6392\u5e8f\u5b57\u6bb5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"updateTime")," : \u66f4\u65b0\u65f6\u95f4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"orderByType")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6392\u5e8f\u65b9\u5f0f"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"asc"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"asc")," \uff1a\u6b63\u5e8f ","\u2003"," ",(0,i.kt)("inlineCode",{parentName:"td"},"desc")," \uff1a\u5012\u5e8f")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"active")," \u53c2\u6570\u4f20\u503c\u5206\u4e09\u79cd\u60c5\u51b5\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"active")," \u53c2\u6570\u548c\u503c\u5747 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u4e0d\u4f20"),"\uff0c\u8fd4\u56de\u4f01\u4e1a\u4e0b ",(0,i.kt)("strong",{parentName:"li"},"\u5168\u90e8")," \u6536\u6b3e\u8d26\u6237\uff08\u5305\u62ec\u505c\u7528\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"active")," \u503c\u4f20 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u7a7a\u4e32")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u975etrue\u5916\u4efb\u610f\u503c"),"\uff0c\u8fd4\u56de\u4f01\u4e1a\u4e0b\u5168\u90e8 ",(0,i.kt)("strong",{parentName:"li"},"\u505c\u7528")," \u7684\u6536\u6b3e\u8d26\u6237\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"active")," \u503c\u4f20 ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c\u8fd4\u56de\u4f01\u4e1a\u4e0b\u5168\u90e8 ",(0,i.kt)("strong",{parentName:"li"},"\u542f\u7528")," \u7684\u6536\u6b3e\u8d26\u6237\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ids"),"\u3001",(0,i.kt)("inlineCode",{parentName:"strong"},"names"),"\u3001",(0,i.kt)("inlineCode",{parentName:"strong"},"cardNos")," \u4e09\u4e2a\u53c2\u6570\u53ef\u4ee5\u65e0\u5185\u5bb9\uff0c\u4e0d\u53ef\u4e0d\u4f20\u53c2\u6570\u540d\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e09\u4e2a\u53c2\u6570\u67e5\u8be2\u65f6\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"or")," \u7684\u5173\u7cfb\uff0c\u4f18\u5148\u67e5\u8be2\u987a\u5e8f\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"ids")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"names")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"cardNos"),"\uff0c\u90fd\u6ca1\u6709\u503c\u5219\u9ed8\u8ba4\u67e5\u8be2\u5168\u90e8\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5df2\u505c\u7528")," \u7684\u6536\u6b3e\u8d26\u6237\uff0c\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"li"},"ids"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"names"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"cardNos")," \u4e09\u4e2a\u53c2\u6570\u4efb\u610f\u5176\u4e00\u914d\u5408 ",(0,i.kt)("inlineCode",{parentName:"li"},"active = false")," \u67e5\u8be2\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u5206\u9875\u65f6\uff0c\u6bcf\u9875 ",(0,i.kt)("inlineCode",{parentName:"li"},"10")," \u6761\u6570\u636e\uff0c\u90a3\u4e48\u7b2c\u4e00\u9875\u5bf9\u5e94\u7684\u53c2\u6570\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"start=0&count=10")," \uff0c\u7b2c\u4e8c\u9875\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"start=10&count=10"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startDate")," \u67e5\u8be2\u89c4\u5219\u662f ",(0,i.kt)("strong",{parentName:"li"},"\u5927\u4e8e\u7b49\u4e8e"),"\uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"endDate")," \u67e5\u8be2\u89c4\u5219\u662f ",(0,i.kt)("strong",{parentName:"li"},"\u5c0f\u4e8e\u7b49\u4e8e"),"\uff08",(0,i.kt)("strong",{parentName:"li"},"\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233")," \u4e0e ",(0,i.kt)("strong",{parentName:"li"},"\u65e5\u671f")," \u8f6c\u6362\u7684\u5f71\u54cd\uff0c\u5bfc\u81f4\u53d6\u503c\u7ed3\u679c\u5f80\u5f80\u662f ",(0,i.kt)("strong",{parentName:"li"},"\u5c0f\u4e8e"),"\uff0c\u6ca1\u6709 ",(0,i.kt)("strong",{parentName:"li"},"\u7b49\u4e8e"),"\uff09\u3002")))),(0,i.kt)("h2",{id:"curl"},"CURL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/payeeInfos?accessToken=ID01iWYs8eUjHV:xgJ3wajigF25H0&start=0&count=100&names&cardNos&ids&active=true&orderBy=updateTime&orderByType=desc'\n")),(0,i.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 2,                      //\u67e5\u8be2\u7ed3\u679c\u603b\u6570\n    "items": [\n        {\n            "sort": "ALIPAY",        //\u8d26\u6237\u7c7b\u522b\uff08BANK\uff1a\u94f6\u884c\u5361  ALIPAY\uff1a\u652f\u4ed8\u5b9d  OVERSEABANK\uff1a\u6d77\u5916\u8d26\u53f7  CHECK\uff1a\u652f\u7968  ACCEPTANCEBILL\uff1a\u627f\u5151\u6c47\u7968  OTHER\uff1a\u5176\u4ed6  WALLET\uff1a\u94b1\u5305\uff09\n            "id": "_iIaLyGGdM3I00",  //\u6536\u6b3e\u8d26\u6237ID\n            "name": "He",            //\u5f00\u6237\u540d\u79f0\n            "cardNo": "17000000000", //\u94f6\u884c\u5361\u53f7\u6216\u94b1\u5305\u53f7\n            "type": "\u4e2a\u4eba\u8d26\u6237",      //\u8d26\u6237\u7c7b\u578b\uff08\u4e2a\u4eba\u8d26\u6237\u3001\u5bf9\u516c\u8d26\u6237\uff09\n            "createTime": 1645605250592, //\u521b\u5efa\u65f6\u95f4\n            "updateTime": 1645605250592, //\u66f4\u65b0\u65f6\u95f4\n            "province": "",          //\u5f00\u6237\u7701\u4efd\n            "city": "",              //\u5f00\u6237\u57ce\u5e02\n            "bank": "\u652f\u4ed8\u5b9d",        //\u5f00\u6237\u884c\n            "branch": "",            //\u5f00\u6237\u7f51\u70b9\n            "certificateType": null, //\u8bc1\u4ef6\u7c7b\u578b\n            "certificateNo": null,   //\u8bc1\u4ef6\u53f7\u7801\n            "bankLinkNo": null,      //\u94f6\u8054\u53f7\n            "unionBank": "",         //\u7b80\u6d01\u5f55\u5165\u5f00\u6237\u884c\n            "bankName": "",          //\u6d77\u5916\u94f6\u884c\u540d\u79f0\uff08\u6d77\u5916\u8d26\u6237\uff09\n            "swiftCode": "",         //\u94f6\u884c\u56fd\u9645\u4ee3\u7801\uff08\u6d77\u5916\u8d26\u6237\uff09\n            "nationCode": "",        //\u94f6\u884c\u6240\u5728\u5730\u533a\u4ee3\u7801\uff08\u6d77\u5916\u8d26\u6237\uff09\uff0c\u53c2\u6570\u4ecb\u7ecd\u89c1\u3010\u65b0\u589e\u6536\u6b3e\u8d26\u6237\u3011\n            "bankCode": "",          //\u8054\u884c\u53f7\uff08\u6d77\u5916\u8d26\u6237\uff09\n            "branchCode": "",        //\u652f\u884c\u53f7\uff08\u6d77\u5916\u8d26\u6237\uff09\n            "visibility": {          //\u53ef\u89c1\u6027\n                "fullVisible": true, //\u662f\u5426\u5168\u90e8\u53ef\u89c1\uff08true\uff1a\u5168\u90e8\u53ef\u89c1  false\uff1a\u6307\u5b9a\u4eba\u5458\u53ef\u89c1\uff09\n                "staffs": [],        //\u53ef\u89c1\u5458\u5de5ID\n                "roles": [],         //\u53ef\u89c1\u89d2\u8272ID\n                "departments": [],   //\u53ef\u89c1\u90e8\u95e8ID\n                "departmentsIncludeChildren": true  //\u53ef\u89c1\u90e8\u95e8\u662f\u5426\u5305\u542b\u5b50\u90e8\u95e8\uff08true\uff1a\u662f  false\uff1a\u5426\uff09\n            },\n            "remark": "remark",                           //\u5907\u6ce8\n            "active": true,                               //\u8d26\u6237\u72b6\u6001\uff08true\uff1a\u542f\u7528  false\uff1a\u505c\u7528\uff09\n            "operatorId": "PtgbQUtfE08400:dIEbu2mgTs6o00", //\u8d26\u6237\u521b\u5efa\u8005ID\n            "customFields": {                             //\u81ea\u5b9a\u4e49\u5b57\u6bb5\n                "u_\u539f\u56e0": "22",\n                "u_\u662f\u5426\u8d85\u6807": "11"\n            },\n            "staffId": "",                                 //\u5c5e\u4e8e\u4e2a\u4eba\u7684\u4e2a\u4eba\u8d26\u6237\u6240\u6709\u8005ID\n            "owner": "CORPORATION"                         //\u6240\u6709\u8005\u7c7b\u578b\uff08INDIVIDUAL\uff1a\u4e2a\u4eba  CORPORATION\uff1a\u4f01\u4e1a\uff09\n        },\n        {\n            "sort": "OVERSEABANK",\n            "id": "ID01ptA3IGvCYn",\n            "name": "\u6d77\u5916\u8d26\u6237",\n            "cardNo": "111",\n            "type": "\u4e2a\u4eba\u8d26\u6237",\n            "createTime": 1644398058965, //\u521b\u5efa\u65f6\u95f4\n            "updateTime": 1644398058965, //\u66f4\u65b0\u65f6\u95f4\n            "province": "",\n            "city": "",\n            "bank": "\u6d77\u5916",\n            "branch": "",\n            "certificateType": null,\n            "certificateNo": null,\n            "bankLinkNo": null,\n            "unionBank": "",\n            "bankName": "11",\n            "swiftCode": "111",\n            "nationCode": "090",\n            "bankCode": "12345",\n            "branchCode": "111",\n            "visibility": {             //\u53ef\u89c1\u6027\n                "fullVisible": true,    //\u662f\u5426\u5168\u90e8\u53ef\u89c1\uff08true\uff1a\u5168\u90e8\u53ef\u89c1  false\uff1a\u6307\u5b9a\u4eba\u5458\u53ef\u89c1\uff09\n                "staffs": [],           //\u53ef\u89c1\u5458\u5de5ID\n                "roles": [],            //\u53ef\u89c1\u89d2\u8272ID\n                "departments": [],      //\u53ef\u89c1\u90e8\u95e8ID\n                "departmentsIncludeChildren": true  //\u53ef\u89c1\u90e8\u95e8\u662f\u5426\u5305\u542b\u5b50\u90e8\u95e8\uff08true\uff1a\u662f  false\uff1a\u5426\uff09\n            },\n            "remark": "remark",                           //\u5907\u6ce8\n            "active": true,                               //\u8d26\u6237\u72b6\u6001\uff0ctrue\uff1a\u542f\u7528  false\uff1a\u505c\u7528\n            "operatorId": "API",                          //\u8d26\u6237\u521b\u5efa\u8005ID\n            "customFields": {                             //\u81ea\u5b9a\u4e49\u5b57\u6bb5\n                "u_\u539f\u56e0": "22",\n                "u_\u662f\u5426\u8d85\u6807": "11"\n            },\n            "staffId": "",                                 //\u5c5e\u4e8e\u4e2a\u4eba\u7684\u4e2a\u4eba\u8d26\u6237\u6240\u6709\u8005ID\n            "owner": "CORPORATION"                         //\u6240\u6709\u8005\u7c7b\u578b\n        }\n    ]\n}\n')),(0,i.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"404")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Error 404 Not Found"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,i.kt)("strong",{parentName:"td"},"\u8bf7\u6c42\u53c2\u6570")," \u662f\u5426\u6309\u8981\u6c42\u586b\u5199\u5b8c\u5168")))))}s.isMDXComponent=!0}}]);