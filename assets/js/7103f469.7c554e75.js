"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31941],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return s}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),m=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=m(r),s=n,f=u["".concat(i,".").concat(s)]||u[s]||c[s]||l;return r?a.createElement(f,o(o({ref:e},d),{},{components:r})):a.createElement(f,o({ref:e},d))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var m=2;m<l;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41627:function(t,e,r){r.d(e,{Z:function(){return l}});var a=r(67294),n={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,r=t.url,l=t.description,o=r.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:n.control+" "+n[e]},a.createElement("span",{className:n.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&a.createElement("small",null,l))}},83784:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=r(41627),p=["components"],i={},m="\u5220\u9664\u89d2\u8272\u4e0b\u5458\u5de5\u4fe1\u606f",d={unversionedId:"open-api/corporation/delete-roles",id:"open-api/corporation/delete-roles",title:"\u5220\u9664\u89d2\u8272\u4e0b\u5458\u5de5\u4fe1\u606f",description:"<Control",source:"@site/docs/open-api/corporation/delete-roles.md",sourceDirName:"open-api/corporation",slug:"/open-api/corporation/delete-roles",permalink:"/docs/next/open-api/corporation/delete-roles",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/corporation/delete-roles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u89d2\u8272\u4e0b\u5458\u5de5\u4fe1\u606f",permalink:"/docs/next/open-api/corporation/update-roles"},next:{title:"\u5e38\u89c1\u95ee\u9898\u603b\u7ed3",permalink:"/docs/next/open-api/corporation/question-answer"}},c=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],u={toc:c};function s(t){var e=t.components,r=(0,n.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5220\u9664\u89d2\u8272\u4e0b\u5458\u5de5\u4fe1\u606f"},"\u5220\u9664\u89d2\u8272\u4e0b\u5458\u5de5\u4fe1\u606f"),(0,l.kt)(o.Z,{method:"DELETE",url:"/api/openapi/v1.1/roledefs/$`roledefId`/staffs",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1122"},(0,l.kt)("strong",{parentName:"a"},"1.13.0")),"\u2003","-> \ud83d\ude80 \u63a5\u53e3\u5347\u7ea7 ",(0,l.kt)("inlineCode",{parentName:"p"},"v1.1")," \u7248\u672c\uff0c\u5f00\u653e\u4e86\u63a5\u53e3\u53ef\u4ee5\u5220\u9664\u6570\u636e\u6765\u6e90\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"\u3010\u624b\u52a8\u7ba1\u7406\u3011")," \u7684\u89d2\u8272\u6570\u636e\u7684\u6743\u9650\uff0c\u7cfb\u7edf\u9875\u9762\u4ecd\u4fdd\u7559\u65e0\u6cd5\u624b\u52a8\u5220\u9664\u6570\u636e\u6765\u6e90\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"\u3010API\u5bfc\u5165\u3011")," \u7684\u89d2\u8272\u6570\u636e\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#180"},(0,l.kt)("strong",{parentName:"a"},"1.8.0"))," ","\u2003"," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"roledefId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u89d2\u8272ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5728\u5408\u601d\u684c\u9762\u7aef\u300c\u7cfb\u7edf\u8bbe\u7f6e\u300d>\u300c\u89d2\u8272\u7ba1\u7406\u300d\u5904\u67e5\u770b",(0,l.kt)("br",null),"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-roles-group"},"\u67e5\u8be2\u89d2\u8272\u7ec4\u548c\u89d2\u8272")," \u83b7\u53d6")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request DELETE 'https://app.ekuaibao.com/api/openapi/v1.1/roledefs/$ID_3BJKZuv0Dow/staffs?accessToken=ID_3KGdB6S01Z0:bwa3wajigF0WH0'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"204")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"(\u54cd\u5e94\u9700\u8981\u5224\u65ad ",(0,l.kt)("strong",{parentName:"td"},"HTTP\u72b6\u6001\u7801")," \u6765\u786e\u5b9a\u662f\u5426\u6210\u529f\uff0c\u54cd\u5e94\u6210\u529f\u65f6\u65e0\u5185\u5bb9\u8fd4\u56de)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u627e\u4e0d\u5230\u89d2\u8272"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"roledefId"),"\uff08\u89d2\u8272ID\uff09\u662f\u5426\u6b63\u786e\u6216\u5b58\u5728")))))}s.isMDXComponent=!0}}]);