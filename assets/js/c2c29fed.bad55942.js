"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92124],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(g,p(p({ref:e},d),{},{components:n})):r.createElement(g,p({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:a,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,p=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return r.createElement("div",{className:a.control+" "+a[e]},r.createElement("span",{className:a.method},e),r.createElement("strong",{dangerouslySetInnerHTML:{__html:p}}),l&&r.createElement("small",null,l))}},93213:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),p=n(41627),o=["components"],i={},c="\u83b7\u53d6\u81ea\u5efa\u5e94\u7528\u6388\u6743",d={unversionedId:"open-api/getting-started/auth-getAppAccessToken",id:"open-api/getting-started/auth-getAppAccessToken",title:"\u83b7\u53d6\u81ea\u5efa\u5e94\u7528\u6388\u6743",description:"<Control",source:"@site/docs/open-api/getting-started/auth-getAppAccessToken.md",sourceDirName:"open-api/getting-started",slug:"/open-api/getting-started/auth-getAppAccessToken",permalink:"/docs/next/open-api/getting-started/auth-getAppAccessToken",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/getting-started/auth-getAppAccessToken.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u6388\u6743",permalink:"/docs/next/open-api/getting-started/auth"},next:{title:"\u5237\u65b0\u6388\u6743",permalink:"/docs/next/open-api/getting-started/refresh-auth"}},s=[{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],u={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6\u81ea\u5efa\u5e94\u7528\u6388\u6743"},"\u83b7\u53d6\u81ea\u5efa\u5e94\u7528\u6388\u6743"),(0,l.kt)(p.Z,{method:"POST",url:"/api/openapi/v1/auth/getAppAccessToken",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1250"},(0,l.kt)("strong",{parentName:"a"},"1.25.0"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"appKey")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u5165\u8d26\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/question-answer#%E9%97%AE%E9%A2%98%E5%9B%9B"},"\u83b7\u53d6\u63a5\u5165\u8d26\u53f7\uff0c\u89c1\u95ee\u9898\u56db"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"appSecret")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u5165\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/question-answer#%E9%97%AE%E9%A2%98%E5%9B%9B"},"\u83b7\u53d6\u63a5\u5165\u5bc6\u7801\uff0c\u89c1\u95ee\u9898\u56db"))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v1/auth/getAppAccessToken\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "appKey": "xxxx-xxxx-xxx-xxxxx",\n    "appSecurity": "xxxxx-xxxx-xxx-xxx"\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "accessToken": "RuTQLbUMrWaojvpEdXCRQJtLANoACqkA",    //\u83b7\u53d6\u5230\u7684accessToken\n        "timeout": 7200                                       //\u6709\u6548\u671f2\u5c0f\u65f6\uff0c\u5355\u4f4d\uff1a\u79d2\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:"left"},"500"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u4e0d\u5b58\u5728"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"appKey"),"\uff08\u63a5\u5165\u8d26\u53f7\uff09\u662f\u5426\u6b63\u786e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:"left"},"500"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u9274\u6743\u5931\u8d25"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"appSecret"),"\uff08\u63a5\u5165\u5bc6\u7801\uff09\u662f\u5426\u6b63\u786e")))))}m.isMDXComponent=!0}}]);