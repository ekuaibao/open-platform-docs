"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18563],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),c=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),f=c(n),k=r,s=f["".concat(i,".").concat(k)]||f[k]||d[k]||l;return n?a.createElement(s,o(o({ref:e},m),{},{components:n})):a.createElement(s,o({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=f;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&a.createElement("small",null,l))}},97807:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(41627),p=["components"],i={},c="\u67e5\u8be2\u5458\u5de5\u5f85\u529e\u6570\u91cf",m={unversionedId:"open-api/corporation/get-staff-backLog",id:"open-api/corporation/get-staff-backLog",title:"\u67e5\u8be2\u5458\u5de5\u5f85\u529e\u6570\u91cf",description:"\u901a\u8fc7\u5458\u5de5\u7684 \u5458\u5de5ID\u3001\u5de5\u53f7\u3001\u624b\u673a\u53f7 \u67e5\u8be2\u5458\u5de5\u5f85\u529e\u4e8b\u9879\u7684\u6570\u91cf\u3002",source:"@site/docs/open-api/corporation/get-staff-backLog.md",sourceDirName:"open-api/corporation",slug:"/open-api/corporation/get-staff-backLog",permalink:"/docs/next/open-api/corporation/get-staff-backLog",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/corporation/get-staff-backLog.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u67e5\u8be2\u5458\u5de5",permalink:"/docs/next/open-api/corporation/get-staff-ids"},next:{title:"\u83b7\u53d6\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5",permalink:"/docs/next/open-api/contacts/get-allCustomeProperty"}},d=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],f={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u67e5\u8be2\u5458\u5de5\u5f85\u529e\u6570\u91cf"},"\u67e5\u8be2\u5458\u5de5\u5f85\u529e\u6570\u91cf"),(0,l.kt)("p",null,"\u901a\u8fc7\u5458\u5de5\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5458\u5de5ID"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u5de5\u53f7"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u624b\u673a\u53f7")," \u67e5\u8be2\u5458\u5de5\u5f85\u529e\u4e8b\u9879\u7684\u6570\u91cf\u3002"),(0,l.kt)(o.Z,{method:"GET",url:"/api/openapi/v1.1/staffs/getBacklogCount/$`type`",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#120"},(0,l.kt)("strong",{parentName:"a"},"1.2.0"))," -> \ud83d\ude80 \u63a5\u53e3\u5347\u7ea7 ",(0,l.kt)("inlineCode",{parentName:"p"},"v1.1")," \u7248\u672c\uff0c\u65b0\u589e\u4e86\u54cd\u5e94\u6570\u636e\u4e2d\u8fd4\u56de\u8be6\u7ec6\u5f85\u529e\u7c7b\u578b\u53ca\u6570\u91cf\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u65b9\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")," : \u5458\u5de5ID ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," : \u5458\u5de5\u5de5\u53f7 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"cellphone")," : \u5458\u5de5\u624b\u673a\u53f7")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"staffParam")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u7684\u5458\u5de5\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u4fe1\u606f\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"staffID")," \u3001",(0,l.kt)("inlineCode",{parentName:"td"},"code")," \u3001",(0,l.kt)("inlineCode",{parentName:"td"},"cellphone")," \u4efb\u610f\u4e00\u4e2a\u5373\u53ef")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1.1/staffs/getBacklogCount/$id?accessToken=RCIbwHcnF0kg00&staffParam=JOYbpjPP-E2Q00:y8gbpjP9OsnI00' \\\n--header 'content-type: application/json' \\\n--header 'Accept: application/json'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": {\n    "count": 1,             //\u5f85\u529e\u603b\u6570\u91cf\n        "type": {           //\u5f85\u529e\u7c7b\u578b\u7ec6\u9879\n          "print": 1,       //\u5f85\u6211\u6253\u5370\n          "paying": 0,      //\u5f85\u6211\u652f\u4ed8\n          "carbonCopy": 0,  //\u6284\u9001\u6211\u7684\n          "sending": 0,     //\u5f85\u6211\u5bc4\u9001\n          "peceving": 0,    //\u5f85\u6211\u6536\u5355\n          "approving": 1    //\u5f85\u6211\u5ba1\u6279\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"403")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6388\u6743"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"),"\uff08\u8ba4\u8bc1token\uff09\u662f\u5426\u5df2\u8fc7\u671f",(0,l.kt)("br",null),"\u8bf7\u786e\u8ba4 ",(0,l.kt)("strong",{parentName:"td"},"\u5730\u5740\u524d\u7f00")," \u4e0e\u60a8\u7684\u4f01\u4e1a\u73af\u5883\u4e00\u81f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u672a\u67e5\u627e\u5230\u6b64\u5458\u5de5\u4fe1\u606f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"staffParam"),"\uff08\u67e5\u8be2\u7684\u5458\u5de5\u53c2\u6570\uff09\u662f\u5426\u6b63\u786e\u6216\u8005\u5458\u5de5\u662f\u5426\u5b58\u5728")))))}k.isMDXComponent=!0}}]);