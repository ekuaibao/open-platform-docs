"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75553],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=m(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return n?a.createElement(f,o(o({ref:e},s),{},{components:n})):a.createElement(f,o({ref:e},s))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&a.createElement("small",null,l))}},58378:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(41627),i=["components"],p={},m="\u83b7\u53d6\u5168\u5c40\u5b57\u6bb5\u5217\u8868",s={unversionedId:"open-api/forms/get-customs-param",id:"version-v2.1/open-api/forms/get-customs-param",title:"\u83b7\u53d6\u5168\u5c40\u5b57\u6bb5\u5217\u8868",description:"<Control",source:"@site/versioned_docs/version-v2.1/open-api/forms/get-customs-param.md",sourceDirName:"open-api/forms",slug:"/open-api/forms/get-customs-param",permalink:"/docs/v2.1/open-api/forms/get-customs-param",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/forms/get-customs-param.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5728\u5355\u636e\u6a21\u677f\u4e2d\u8ffd\u52a0\u5168\u5c40\u5b57\u6bb5",permalink:"/docs/v2.1/open-api/forms/add-global-field"},next:{title:"\u5e38\u89c1\u95ee\u9898\u603b\u7ed3",permalink:"/docs/v2.1/open-api/forms/question-answer"}},c=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],d={toc:c};function u(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6\u5168\u5c40\u5b57\u6bb5\u5217\u8868"},"\u83b7\u53d6\u5168\u5c40\u5b57\u6bb5\u5217\u8868"),(0,l.kt)(o.Z,{method:"GET",url:"/api/openapi/v1.1/property",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#103"},(0,l.kt)("strong",{parentName:"a"},"1.0.3"))," ","\u2003"," -> \ud83d\ude80 \u63a5\u53e3\u5347\u7ea7 ",(0,l.kt)("inlineCode",{parentName:"p"},"v1.1")," \u7248\u672c\uff0c\u65b0\u589e\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"\uff08\u5168\u5c40\u5b57\u6bb5\u7c7b\u578b\uff09\u7684\u53c2\u6570\u6821\u9a8c\uff0c\u975e\u5907\u6ce8\u7c7b\u578b\u65f6\uff0c\u62a5\u9519 ",(0,l.kt)("strong",{parentName:"p"},"\u201dtype\u53c2\u6570\u4e0d\u5408\u6cd5\u201c"),"\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#07131"},(0,l.kt)("strong",{parentName:"a"},"0.7.131"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5168\u5c40\u5b57\u6bb5\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"flow.FlowForm")," : \u5355\u636e",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"datalink.form")," : \u4e1a\u52a1\u5bf9\u8c61",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"dimension.form")," : \u81ea\u5b9a\u4e49\u6863\u6848",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"staff.form")," : \u5458\u5de5",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"department.form")," : \u90e8\u95e8")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u7cfb\u7edf\u4e2d\u5b58\u5728 ",(0,l.kt)("strong",{parentName:"li"},"\u5355\u636e"),"\u3001",(0,l.kt)("strong",{parentName:"li"},"\u4e1a\u52a1\u5bf9\u8c61"),"\u3001",(0,l.kt)("strong",{parentName:"li"},"\u4eba\u5458")," \u7c7b\u578b\u7684\u5168\u5c40\u5b57\u6bb5\u9875\u9762\uff0c",(0,l.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49\u6863\u6848"),"\u3001",(0,l.kt)("strong",{parentName:"li"},"\u90e8\u95e8")," \u7c7b\u578b\u7684\u5168\u5c40\u5b57\u6bb5\u65e0\u7cfb\u7edf\u9875\u9762\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5355\u636e")," \u7c7b\u578b\u5168\u5c40\u5b57\u6bb5\u4f4d\u7f6e\uff1a\n",(0,l.kt)("img",{alt:"\u5355\u636e\u7c7b\u578b\u5168\u5c40\u5b57\u6bb5",src:n(9474).Z})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4e1a\u52a1\u5bf9\u8c61")," \u7c7b\u578b\u5168\u5c40\u5b57\u6bb5\u4f4d\u7f6e\uff1a\n",(0,l.kt)("img",{alt:"\u4e1a\u52a1\u5bf9\u8c61\u7c7b\u578b\u5168\u5c40\u5b57\u6bb5",src:n(32983).Z})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5458\u5de5")," \u7c7b\u578b\u5168\u5c40\u5b57\u6bb5\u4f4d\u7f6e\uff1a\n",(0,l.kt)("img",{alt:"\u5458\u5de5\u7c7b\u578b\u5168\u5c40\u5b57\u6bb5",src:n(67608).Z}))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1.1/property?accessToken=ID_3sNZ1zd0jTw:PCx3rwm3aA00qM&type=department.form' \\\n--header 'content-type: application/json' \\\n--header 'Accept: application/json'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "items":[\n      {\n         "name":"costCenter",\n         "label":"\u6210\u672c\u4e2d\u5fc3",\n         "active":true,\n         "canAsDimension":true,\n         "ability":"",\n         "dataType":{\n            "type":"ref",\n            "entity":"basedata.Dimension.\u6210\u672c\u4e2d\u5fc3\u9884\u7f6e"\n         }\n      },\n      {\n         "name":"legalEntity",\n         "label":"\u6cd5\u4eba\u5b9e\u4f53",\n         "active":true,\n         "canAsDimension":true,\n         "ability":"",\n         "dataType":{\n           "type":"ref",\n           "entity":"basedata.Dimension.\u6cd5\u4eba\u5b9e\u4f53"\n         }\n      }\n   ]\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"type\u53c2\u6570\u4e0d\u5408\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"type"),"\uff08\u5168\u5c40\u5b57\u6bb5\u7c7b\u578b\uff09\u662f\u5426\u4e3a ",(0,l.kt)("strong",{parentName:"td"},"\u5907\u6ce8")," \u4e2d\u7684\u56fa\u5b9a\u503c")))))}u.isMDXComponent=!0},32983:function(t,e,n){e.Z=n.p+"assets/images/\u4e1a\u52a1\u5bf9\u8c61\u7c7b\u578b\u5168\u5c40\u5b57\u6bb5-3c2d6d4a4e6c79039f5b5ea7a5ca3efe.png"},9474:function(t,e,n){e.Z=n.p+"assets/images/\u5355\u636e\u7c7b\u578b\u5168\u5c40\u5b57\u6bb5-d8fdea3a01a34c0f5f00ddd022d91f95.png"},67608:function(t,e,n){e.Z=n.p+"assets/images/\u5458\u5de5\u7c7b\u578b\u5168\u5c40\u5b57\u6bb5-7b6f55c6f0ea881b256761859b629339.png"}}]);