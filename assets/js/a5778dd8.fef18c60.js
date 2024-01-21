"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[67684],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return g}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),m=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},o=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),o=m(a),g=n,f=o["".concat(d,".").concat(g)]||o[g]||N[g]||l;return a?r.createElement(f,p(p({ref:e},k),{},{components:a})):r.createElement(f,p({ref:e},k))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=o;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},59030:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return k},default:function(){return o}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),p=["components"],i={},d="\u5355\u636e\u76f8\u5173\u5b57\u6bb5\u7c7b\u578b",m={unversionedId:"open-api/flows/forms-state",id:"open-api/flows/forms-state",title:"\u5355\u636e\u76f8\u5173\u5b57\u6bb5\u7c7b\u578b",description:"\u5355\u636e\u7c7b\u578b(\u5355\u636e\u8be6\u60c5\u4e2d\u7684 formType \u5b57\u6bb5)",source:"@site/docs/open-api/flows/forms-state.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/forms-state",permalink:"/docs/next/open-api/flows/forms-state",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/flows/forms-state.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/next/open-api/flows/info"},next:{title:"\u83b7\u53d6\u968f\u624b\u8bb0\u6570\u636e",permalink:"/docs/next/open-api/flows/get-notes"}},k=[{value:"\u5355\u636e\u7c7b\u578b(\u5355\u636e\u8be6\u60c5\u4e2d\u7684 <code>formType</code> \u5b57\u6bb5)",id:"\u5355\u636e\u7c7b\u578b\u5355\u636e\u8be6\u60c5\u4e2d\u7684-formtype-\u5b57\u6bb5",children:[],level:2},{value:"\u5355\u636e\u72b6\u6001(\u5355\u636e\u8be6\u60c5\u4e2d\u7684 <code>state</code> \u5b57\u6bb5)",id:"\u5355\u636e\u72b6\u6001\u5355\u636e\u8be6\u60c5\u4e2d\u7684-state-\u5b57\u6bb5",children:[],level:2},{value:"\u5ba1\u6279\u52a8\u4f5c(\u5ba1\u6279\u65e5\u5fd7\u4e2d <code>action</code> \u5b57\u6bb5)",id:"\u5ba1\u6279\u52a8\u4f5c\u5ba1\u6279\u65e5\u5fd7\u4e2d-action-\u5b57\u6bb5",children:[],level:2},{value:"\u679a\u4e3e\u6863\u6848",id:"\u679a\u4e3e\u6863\u6848",children:[{value:"\u822a\u73ed\u8231\u578b",id:"\u822a\u73ed\u8231\u578b",children:[],level:3},{value:"\u706b\u8f66\u5e2d\u522b",id:"\u706b\u8f66\u5e2d\u522b",children:[],level:3},{value:"\u8f6e\u8239\u8231\u578b",id:"\u8f6e\u8239\u8231\u578b",children:[],level:3},{value:"\u53d1\u7968\u7c7b\u578b",id:"\u53d1\u7968\u7c7b\u578b",children:[],level:3},{value:"\u7eb3\u7a0e\u4eba\u7c7b\u578b",id:"\u7eb3\u7a0e\u4eba\u7c7b\u578b",children:[],level:3}],level:2}],N={toc:k};function o(t){var e=t.components,a=(0,n.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5355\u636e\u76f8\u5173\u5b57\u6bb5\u7c7b\u578b"},"\u5355\u636e\u76f8\u5173\u5b57\u6bb5\u7c7b\u578b"),(0,l.kt)("h2",{id:"\u5355\u636e\u7c7b\u578b\u5355\u636e\u8be6\u60c5\u4e2d\u7684-formtype-\u5b57\u6bb5"},"\u5355\u636e\u7c7b\u578b(\u5355\u636e\u8be6\u60c5\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"h2"},"formType")," \u5b57\u6bb5)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"expense")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u62a5\u9500\u5355")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"requisition")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7533\u8bf7\u5355")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"application")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7533\u8bf7\u4e8b\u9879")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"loan")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u501f\u6b3e\u5355")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"repayment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fd8\u6b3e\u8bb0\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"payment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4ed8\u6b3e\u5355")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"receipt")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6536\u6b3e\u5355")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"permit")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6388\u6743\u5355")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"custom")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u7528\u5ba1\u6279\u5355")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"corpPayment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5bf9\u516c\u4ed8\u6b3e\u5355")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"reimbursement")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u62a5\u8d26\u5355\u3001\u53d1\u7968\u5f55\u5165\u5355")))),(0,l.kt)("h2",{id:"\u5355\u636e\u72b6\u6001\u5355\u636e\u8be6\u60c5\u4e2d\u7684-state-\u5b57\u6bb5"},"\u5355\u636e\u72b6\u6001(\u5355\u636e\u8be6\u60c5\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"h2"},"state")," \u5b57\u6bb5)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"draft")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8349\u7a3f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"nullify")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5df2\u4f5c\u5e9f",(0,l.kt)("strong",{parentName:"td"},"\uff08\u4e0d\u540c\u4e8e\u201c\u5df2\u5220\u9664\u201d\uff09"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"pending")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u63d0\u4ea4\u4e2d\uff08\u9884\u7b97\u8ba1\u7b97\uff0c\u4e34\u65f6\u72b6\u6001\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"approving")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5ba1\u6279\u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"rejected")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5df2\u9a73\u56de")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"paying")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f85\u652f\u4ed8\uff0c\u7528\u4e8e\u5f00\u542f\u4e86\u51fa\u7eb3\u652f\u4ed8\u8282\u70b9\u4e14\u53d1\u751f\u652f\u4ed8\u52a8\u4f5c\u7684\u5355\u636e",(0,l.kt)("br",null),"\u6ca1\u6709\u53d1\u751f\u652f\u4ed8\u65f6\uff0c\u5355\u636e\u72b6\u6001\u76f4\u63a5\u53d8\u6210\u5df2\u5b8c\u6210")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"PROCESSING"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u652f\u4ed8\u4e2d\uff0c\u975e\u5355\u636e\u72b6\u6001\uff0c\u5c5e\u4e8e\u4e1a\u52a1\u72b6\u6001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"paid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5df2\u652f\u4ed8/\u5ba1\u6279\u5b8c\u6210\uff0c\u4e0d\u662f\u5355\u636e\u6700\u7ec8\u72b6\u6001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"archived")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f52\u6863\uff0c\u5355\u636e\u6700\u7ec8\u72b6\u6001",(0,l.kt)("br",null),"\u5ba1\u6279\u5b8c\u6210\u7684\u5355\u636e\u786e\u8ba4\u540e\u8868\u793a\u5f52\u6863\uff08\u3010\u6211\u7684\u5355\u636e\u3011-\u3010\u5df2\u5b8c\u6210\u5355\u636e\u3011\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"sending")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5bc4\u9001\u4e2d\uff08\u5355\u636e\u5230\u8fbe\u201c",(0,l.kt)("strong",{parentName:"td"},"\u5bc4\u9001\u8282\u70b9"),"\u201d\u65f6\u5904\u4e8e\u6b64\u72b6\u6001\uff0c\u9700\u8981\u5f00\u901a\u3010",(0,l.kt)("strong",{parentName:"td"},"\u5f02\u5730\u5355\u636e\u5bc4\u6536\u7ba1\u7406"),"\u3011\u529f\u80fd\u65b9\u53ef\u914d\u7f6e\u6b64\u8282\u70b9\u7c7b\u578b\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"receiving")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6536\u5355\u4e2d\uff08\u5355\u636e\u5230\u8fbe\u201c",(0,l.kt)("strong",{parentName:"td"},"\u6536\u5355\u8282\u70b9"),"\u201d\u65f6\u5904\u4e8e\u6b64\u72b6\u6001\uff0c\u9700\u8981\u5f00\u901a\u3010",(0,l.kt)("strong",{parentName:"td"},"\u5f02\u5730\u5355\u636e\u5bc4\u6536\u7ba1\u7406"),"\u3011\u529f\u80fd\u65b9\u53ef\u914d\u7f6e\u6b64\u8282\u70b9\u7c7b\u578b\uff09")))),(0,l.kt)("h2",{id:"\u5ba1\u6279\u52a8\u4f5c\u5ba1\u6279\u65e5\u5fd7\u4e2d-action-\u5b57\u6bb5"},"\u5ba1\u6279\u52a8\u4f5c(\u5ba1\u6279\u65e5\u5fd7\u4e2d ",(0,l.kt)("inlineCode",{parentName:"h2"},"action")," \u5b57\u6bb5)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.submit")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u63d0\u4ea4\u9001\u5ba1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.editApproving")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5ba1\u6279\u4e2d\u4fee\u6539")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.delete")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5220\u9664\u5355\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.retract")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u64a4\u56de")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.agree")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u540c\u610f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.reject")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9a73\u56de")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.remind")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6253\u5370\u63d0\u9192")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.print")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6253\u5370")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.addnode")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8f6c\u4ea4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.back")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u56de\u9000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.comment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bc4\u8bba")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.modify")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4fee\u6539")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.activate")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6fc0\u6d3b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.receive")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u786e\u8ba4\u6536\u5355")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.nullify")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f5c\u5e9f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.pay")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u4ed8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.addExpress")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6dfb\u52a0\u5bc4\u9001\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.jumpExpress")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8df3\u8fc7\u5bc4\u9001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.shiftApprove")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8f6c\u4ea4\u5ba1\u6279")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.addSignNode")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u52a0\u7b7e\u5ba1\u6279")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.select.approver")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9009\u62e9\u5ba1\u6279\u4eba")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"freeflow.alter")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636e\u53d8\u66f4")))),(0,l.kt)("h2",{id:"\u679a\u4e3e\u6863\u6848"},"\u679a\u4e3e\u6863\u6848"),(0,l.kt)("h3",{id:"\u822a\u73ed\u8231\u578b"},"\u822a\u73ed\u8231\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7f16\u7801"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ecf\u6d4e\u8231"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ECONOMY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5546\u52a1\u8231"),(0,l.kt)("td",{parentName:"tr",align:"left"},"BUSINESS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5934\u7b49\u8231"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FIRST")))),(0,l.kt)("h3",{id:"\u706b\u8f66\u5e2d\u522b"},"\u706b\u8f66\u5e2d\u522b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7f16\u7801"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u786c\u5ea7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"YZ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8f6f\u5ea7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"RZ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u786c\u5367"),(0,l.kt)("td",{parentName:"tr",align:"left"},"YW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8f6f\u5367"),(0,l.kt)("td",{parentName:"tr",align:"left"},"RW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u7b49\u5ea7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"YD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e8c\u7b49\u5ea7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ED")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5546\u52a1\u5ea7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9ad8\u7ea7\u8f6f\u5367"),(0,l.kt)("td",{parentName:"tr",align:"left"},"GJRW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9ad8\u94c1\u52a8\u5367"),(0,l.kt)("td",{parentName:"tr",align:"left"},"DW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u52a8\u5367"),(0,l.kt)("td",{parentName:"tr",align:"left"},"DW2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u7a7a\u8c03\u786c\u5ea7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"XKTYZ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u7a7a\u8c03\u786c\u5367"),(0,l.kt)("td",{parentName:"tr",align:"left"},"XKTYW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u7a7a\u8c03\u8f6f\u5367"),(0,l.kt)("td",{parentName:"tr",align:"left"},"XKTRW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8f6f\u5367\u4ee3\u8f6f\u5ea7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"RWDRZ")))),(0,l.kt)("h3",{id:"\u8f6e\u8239\u8231\u578b"},"\u8f6e\u8239\u8231\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7f16\u7801"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u7b49\u8231"),(0,l.kt)("td",{parentName:"tr",align:"left"},"YI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e8c\u7b49\u8231"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e09\u7b49\u8231"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u56db\u7b49\u8231"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SI")))),(0,l.kt)("h3",{id:"\u53d1\u7968\u7c7b\u578b"},"\u53d1\u7968\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7f16\u7801"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u589e\u503c\u7a0e\u4e13\u7528\u53d1\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"VATSpecialInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u589e\u503c\u7a0e\u666e\u901a\u53d1\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"VATOrdinaryInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u673a\u52a8\u8f66\u9500\u552e\u7edf\u4e00\u53d1\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"MotorInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8d27\u7269\u8fd0\u8f93\u4e1a\u589e\u503c\u7a0e\u4e13\u7528\u53d1\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"GoodsTransportInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e8c\u624b\u8f66\u9500\u552e\u7edf\u4e00\u53d1\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SecondhandCarInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u589e\u503c\u7a0e\u7535\u5b50\u666e\u901a\u53d1\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"VATElectronicInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u589e\u503c\u7a0e\u666e\u901a\u53d1\u7968\uff08\u5377\u5f0f\uff09"),(0,l.kt)("td",{parentName:"tr",align:"left"},"VATVolumeTicket")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u884c\u8d39\u53d1\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TollInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u533a\u5757\u94fe\u7535\u5b50\u53d1\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"BlockchainElectronicInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u706b\u8f66\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TrainInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u51fa\u79df\u8f66\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TaxiInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9a\u989d\u53d1\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"QuotaInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5ba2\u8fd0\u6c7d\u8f66\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"PassengerCarInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u822a\u7a7a\u8fd0\u8f93\u7535\u5b50\u5ba2\u7968\u884c\u7a0b\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AircraftInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fc7\u8def\u8d39\u53d1\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"RoadTollInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5176\u4ed6\u53d1\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"OtherInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u8d39\u5c0f\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ShoppingInvoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7535\u5b50\u53d1\u7968\uff08\u666e\u901a\u53d1\u7968\uff09"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FullDigitalNormal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7535\u5b50\u53d1\u7968\uff08\u589e\u503c\u7a0e\u4e13\u7528\u53d1\u7968\uff09"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FullDigitalSpecial")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u589e\u503c\u7a0e\u7535\u5b50\u4e13\u7528\u53d1\u7968"),(0,l.kt)("td",{parentName:"tr",align:"left"},"VATElectronicSpecialInvoice")))),(0,l.kt)("h3",{id:"\u7eb3\u7a0e\u4eba\u7c7b\u578b"},"\u7eb3\u7a0e\u4eba\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7f16\u7801"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u822c\u7eb3\u7a0e\u4eba"),(0,l.kt)("td",{parentName:"tr",align:"left"},"GeneralTaxpayer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u89c4\u6a21\u7eb3\u7a0e\u4eba"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SmallScaleTaxpayer")))))}o.isMDXComponent=!0}}]);