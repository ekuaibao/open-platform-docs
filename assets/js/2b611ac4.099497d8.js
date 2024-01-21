"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[70927],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),f=r,u=c["".concat(p,".").concat(f)]||c[f]||m[f]||l;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},41627:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var t=e.method,a=e.url,l=e.description,o=a.replace(/\`(.*?)\`/g,"<span>$1</span>");return n.createElement("div",{className:r.control+" "+r[t]},n.createElement("span",{className:r.method},t),n.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&n.createElement("small",null,l))}},11375:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(41627),i=["components"],p={},s="\u5171\u4eab\u7533\u8bf7\u4e8b\u9879",d={unversionedId:"open-api/flows/share-requisition",id:"version-v2.0/open-api/flows/share-requisition",title:"\u5171\u4eab\u7533\u8bf7\u4e8b\u9879",description:"<Control",source:"@site/versioned_docs/version-v2.0/open-api/flows/share-requisition.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/share-requisition",permalink:"/docs/v2.0/open-api/flows/share-requisition",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/flows/share-requisition.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6839\u636e\u6279\u6b21\u53f7ID\u83b7\u53d6\u652f\u4ed8\u8bb0\u5f55",permalink:"/docs/v2.0/open-api/flows/get-payment-records"},next:{title:"\u5355\u636e\u5ba1\u6279",permalink:"/docs/v2.0/open-api/flows/flow-approval"}},m=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],c={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5171\u4eab\u7533\u8bf7\u4e8b\u9879"},"\u5171\u4eab\u7533\u8bf7\u4e8b\u9879"),(0,l.kt)(o.Z,{method:"PUT",url:"/api/openapi/v1/requisition/$`flowId`/share/[`staffIds`]",mdxType:"Control"}),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u88ab\u5171\u4eab\u4eba\u5458\u662f\u5168\u91cf\u66f4\u65b0\uff0c\u4e0d\u662f\u589e\u91cf\u66f4\u65b0\uff0c\u7b2c\u4e8c\u6b21\u8c03\u7528\u63a5\u53e3\u65f6\u4e0d\u5305\u542b\u7b2c\u4e00\u6b21\u8c03\u7528\u65f6\u7684\u88ab\u5171\u4eab\u4eba\u5458\u7684\u8bdd\uff0c\u7b2c\u4e00\u6b21\u7684\u4eba\u5458\u4f1a\u88ab\u53d6\u6d88\u5171\u4eab\u72b6\u6001\u3002"))),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"flowId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7533\u8bf7\u5355\u5355\u636eid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/v2.0/open-api/flows/get-forms-sequences"},"\u901a\u8fc7\u83b7\u53d6\u5355\u636e\u5217\u8868\u63a5\u53e3\u83b7\u53d6"),"\u6216\u8005\u51fa\u7ad9\u6d88\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"staffIds")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u88ab\u5171\u4eab\u5458\u5de5id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u901a\u8fc7\u83b7\u53d6\u5458\u5de5\u5217\u8868\u63a5\u53e3\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"staffId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5171\u4eab\u5458\u5de5id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u901a\u8fc7\u83b7\u53d6\u5458\u5de5\u5217\u8868\u63a5\u53e3\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location -g --request PUT 'https://app.ekuaibao.com/api/openapi/v1/requisition/$ID_3nuAVmk3r9w/share/[Urf3lsFgBp00gw:ID_3ow_Xyy0MzM]?accessToken=ID_3oHBMwn017g:Urf3lsFgBp00gw&staffId=Urf3lsFgBp00gw:AvT3lntT8zzpWw'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": true\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("p",null,"\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"flowId"),"\u548c\u5171\u4eab\u5458\u5de5id",(0,l.kt)("inlineCode",{parentName:"p"},"staffId"),"\u4e0d\u6b63\u786e\u65f6\uff0c\u8bf7\u68c0\u67e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 400,\n    "errorMessage": "\u7533\u8bf7\u4e8b\u9879\u4e0d\u5b58\u5728",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')),(0,l.kt)("p",null,"\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"staffIds"),"\u4e0d\u6b63\u786e\u65f6\uff0c\u8bf7\u68c0\u67e5\u88ab\u5171\u4eab\u5458\u5de5id\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 400,\n    "errorMessage": "\u5171\u4eab\u5bf9\u8c61\u4e0d\u5b58\u5728",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')))}f.isMDXComponent=!0}}]);