"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69769],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),f=d(a),N=r,s=f["".concat(m,".").concat(N)]||f[N]||k[N]||l;return a?n.createElement(s,i(i({ref:e},o),{},{components:a})):n.createElement(s,i({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=f;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},41627:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,a=t.url,l=t.description,i=a.replace(/\`(.*?)\`/g,"<span>$1</span>");return n.createElement("div",{className:r.control+" "+r[e]},n.createElement("span",{className:r.method},e),n.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&n.createElement("small",null,l))}},92411:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return k},default:function(){return N}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(41627),p=["components"],m={},d="\u6279\u91cf\u4fee\u6539\u5458\u5de5",o={unversionedId:"open-api/contacts/batch-update-staffs",id:"open-api/contacts/batch-update-staffs",title:"\u6279\u91cf\u4fee\u6539\u5458\u5de5",description:"<Control",source:"@site/docs/open-api/contacts/batch-update-staffs.md",sourceDirName:"open-api/contacts",slug:"/open-api/contacts/batch-update-staffs",permalink:"/docs/next/open-api/contacts/batch-update-staffs",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/contacts/batch-update-staffs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4fee\u6539\u5458\u5de5",permalink:"/docs/next/open-api/contacts/update-staffs"},next:{title:"\u5458\u5de5\u79bb\u804c\u4ea4\u63a5",permalink:"/docs/next/open-api/contacts/relay-staff"}},k=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],f={toc:k};function N(t){var e=t.components,m=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},f,m,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6279\u91cf\u4fee\u6539\u5458\u5de5"},"\u6279\u91cf\u4fee\u6539\u5458\u5de5"),(0,l.kt)(i.Z,{method:"PUT",url:"/api/openapi/v1.1/staffs/batch/update",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1200"},(0,l.kt)("strong",{parentName:"a"},"1.20.0"))," -> \ud83d\udc1e \u63a5\u53e3\u652f\u6301\u4f20\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"nickName"),"\uff08\u5458\u5de5\u522b\u540d\uff09\u5b57\u6bb5\uff0c\u4e14\u54cd\u5e94\u4fe1\u606f\u4e2d\u65b0\u589e\u4e86\u8be5\u5b57\u6bb5\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1190"},(0,l.kt)("strong",{parentName:"a"},"1.19.0"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6b64\u63a5\u53e3\u66f4\u65b0\u7684\u5458\u5de5\uff08\u5305\u62ec\u5728\u7cfb\u7edf\u4e0a\u521b\u5efa\u7684\uff09\uff0c\u66f4\u65b0\u540e\u60a8\u5c06 ",(0,l.kt)("strong",{parentName:"li"},"\u65e0\u6cd5\u5728\u5408\u601d\u754c\u9762\u4e0a\u7ef4\u62a4\u5176\u901a\u8baf\u5f55"),"\uff0c\u53ea\u80fd\u901a\u8fc7\u63a5\u53e3\u66f4\u65b0\u4fe1\u606f\u548c\u5220\u9664\u3002")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"staffList")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6279\u91cf\u4fee\u6539\u7684\u5458\u5de5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u4fe1\u606f\u6570\u7ec4, ",(0,l.kt)("strong",{parentName:"td"},"\u6700\u5927\u4e0d\u80fd\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"strong"},"100")," \u6761"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f id")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u83b7\u53d6\u5458\u5de5\u5217\u8868")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u59d3\u540d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u59d3\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f nickName")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u522b\u540d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u522b\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f code")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f cellphone")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u624b\u673a\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u5982\u679c\u624b\u673a\u53f7\u4e3a\u56fd\u5916\u624b\u673a\u53f7\uff0c\u90a3\u4e48\u5e94\u4e3a : "(\u533a\u53f7)\u624b\u673a\u53f7"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f email")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90ae\u7bb1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4ee5\u4e0d\u4f20\uff0c\u4f46\u662f\u4e0d\u53ef\u4ee5\u4f20 ",(0,l.kt)("inlineCode",{parentName:"td"},'""'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f note")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5907\u6ce8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5907\u6ce8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f defaultDepartment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u90e8\u95e8ID\u6216CODE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6240\u4f20\u9ed8\u8ba4\u90e8\u95e8\u5fc5\u987b\u5728 ",(0,l.kt)("inlineCode",{parentName:"td"},"departments")," \u91cc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f departments")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6240\u5728\u90e8\u95e8ID\u6216CODE\uff0c\u81f3\u5c111\u4e2a"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"defaultDepartment")," \u53c2\u6570\u987b\u540c\u65f6\u5b58\u5728\uff0c\u90fd\u4f20\u6216\u90fd\u4e0d\u4f20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f modifyAccountPhone")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u4fee\u6539\u767b\u5f55\u624b\u673a\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u662f\uff0c\u4fee\u6539\u540e\u624b\u673a\u53f7\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"cellphone"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u4e0d\u53ef\u4fee\u6539\u6210\u5df2\u6ce8\u518c\u4f01\u4e1a\u4e14\u4f01\u4e1a\u542f\u7528\u4e2d\u7684\u624b\u673a\u53f7"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f modifyAccountEmail")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u4fee\u6539\u767b\u5f55\u90ae\u7bb1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u662f\uff0c\u4fee\u6539\u540e\u90ae\u7bb1\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"email"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u4e0d\u53ef\u4fee\u6539\u6210\u5df2\u6ce8\u518c\u4f01\u4e1a\u4e14\u4f01\u4e1a\u542f\u7528\u4e2d\u7684\u90ae\u7bb1"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f staffCustomForm")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49\u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003","\u2003"," \u221f rankType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u804c\u7ea7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimension-items"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003","\u2003"," \u221f postType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c97\u4f4d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimension-items"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003","\u2003"," \u221f base")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e38\u9a7b\u5730"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u53c2\u8003\u683c\u5f0f : "','[{\\"key\\":\\"8\\",\\"label\\":\\"\u5317\u4eac\u5e02/\u6d77\u6dc0\u533a\\"}]','"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003","\u2003"," \u221f u_\u5b57\u6bb5\u540d")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49\u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u81ea\u5b9a\u4e49\u5b57\u6bb5\uff0c\u683c\u5f0f\u4e3a"u',"_",'\u5b57\u6bb5\u540d"\uff0c\u4f8b\u5982 : u',"_","\u9879\u76ee",(0,l.kt)("br",null),"\u53ef\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/contacts/get-allCustomeProperty"},"\u83b7\u53d6\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5")," \u83b7\u53d6\u5b57\u6bb5\u540d")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"base"),"\uff08\u5e38\u9a7b\u5730\uff09\u53c2\u6570\u62fc\u63a5\u8bf4\u660e\uff1a",(0,l.kt)("br",null),"\n\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/docs/open-api/basedata/get-basedata-city"},"\u83b7\u53d6\u57ce\u5e02\u5217\u8868\u6570\u636e"))," \u63a5\u53e3\u83b7\u53d6\u6570\u636e\u540e\uff0c\u627e\u5230\u5bf9\u5e94\u57ce\u5e02\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," \u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fullName")," \u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"li"},"label"))))),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("img",{alt:"\u57ce\u5e02\u5b57\u6bb5\u62fc\u63a5\u793a\u4f8b",src:a(75725).Z})))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request PUT \'https://app.ekuaibao.com/api/openapi/v1.1/staffs/batch/update?accessToken=ID01q4lptRWBIz%3ATsI3tt8KjF4S7M\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "staffList": [\n        {\n            "id": "TsI3tt8KjF4S7M:1222234",         //\u5458\u5de5ID\n            "name": "\u6d4b\u8bd51",                        //\u5458\u5de5\u59d3\u540d\n            "nickName": "\u6d4b1",                      //\u5458\u5de5\u522b\u540d\n            "code": "00001",                        //\u5458\u5de5\u5de5\u53f7\n            "cellphone": "17711111126",             //\u624b\u673a\u53f7\n            "email": "17718535962@163.com",         //\u90ae\u7bb1\n            "note": "\u6279\u91cf\u4fee\u6539",                     //\u5907\u6ce8\n            "defaultDepartment": "TsI3tt8KjF4S7M",  //\u9ed8\u8ba4\u90e8\u95e8\n            "departments": [                        //\u6240\u5728\u90e8\u95e8\n                "TsI3tt8KjF4S7M"\n            ],\n            "modifyAccountPhone" : false,           //\u662f\u5426\u4fee\u6539\u5458\u5de5\u624b\u673a\u53f7\n            "modifyAccountEmail" : false,           //\u662f\u5426\u4fee\u6539\u5458\u5de5\u624b\u673a\u53f7\n            "staffCustomForm": {                    //\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5\u96c6\u5408\n                "postType":"ID_3D5RavktVRM",        //\u5c97\u4f4d\n                "rankType":"ID_3D5RavktTRM",        //\u804c\u7ea7\n                "base": "[{\\"key\\":\\"8\\",\\"label\\":\\"\u5317\u4eac\u5e02/\u6d77\u6dc0\u533a\\"}]"  //\u5e38\u9a7b\u5730\n            }\n        },\n        {\n            "id": "TsI3tt8KjF4S7M:BbP3CdaKi$VcRw",\n            "name": "\u5f20\u56fd\u9633\u5c0f\u53f7",\n            "nickName": "\u5c0f\u9633",\n            "code": "00002",\n            "cellphone": "18515257800",\n            "email": "18515257800@163.com",\n            "note": "\u6279\u91cf\u4fee\u6539",\n            "defaultDepartment": "TsI3tt8KjF4S7M",\n            "departments": [\n                "TsI3tt8KjF4S7M"\n            ],\n            "modifyAccountPhone" : false,\n            "modifyAccountEmail" : false,\n            "staffCustomForm": {\n                "postType": "ID_3D5RavktVRM", \n                "rankType": "ID_3D5RavktTRM",\n                "base": "[{\\"key\\":\\"8\\",\\"label\\":\\"\u5317\u4eac\u5e02/\u6d77\u6dc0\u533a\\"}]"\n            }\n        }\n    ]\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "id": "TsI3tt8KjF4S7M:1222234",           //\u5458\u5de5ID\n            "name": "\u6d4b\u8bd51",                          //\u5458\u5de5\u59d3\u540d\n            "nickName": "\u6d4b1",                        //\u5458\u5de5\u522b\u540d\n            "code": "00001",                          //\u5458\u5de5\u5de5\u53f7\n            "departments": [                          //\u6240\u5728\u90e8\u95e8\n                "TsI3tt8KjF4S7M"\n            ],\n            "defaultDepartment": "TsI3tt8KjF4S7M",    //\u9ed8\u8ba4\u90e8\u95e8ID\n            "cellphone": "17711111126",               //\u624b\u673a\u53f7\n            "active": true,                           //true\uff1a\u5728\u804c\uff0cfalse\uff1a\u5df2\u79bb\u804c\uff08\u8d26\u53f7\u903b\u8f91\u5220\u9664\uff0c\u5728\u7cfb\u7edf\u4e0a\u4e0d\u53ef\u89c1\uff09\n            "userId": "1222234",                      //\u7b2c\u4e09\u65b9\u5e73\u53f0\u4eba\u5458ID\n            "email": null,                            //\u767b\u5f55\u90ae\u7bb1\uff08\u5927\u5199\u5b57\u6bcd\u5168\u8f6c\u6362\u4e3a\u5c0f\u5199\u5b57\u6bcd\uff09\n            "showEmail": "17718535962@163.com",       //\u5458\u5de5\u4e2a\u4eba\u4fe1\u606f\u663e\u793a\u90ae\u7bb1\uff08\u5927\u5199\u5b57\u6bcd\u4fdd\u6301\u4e0d\u53d8\uff09\n            "external": false,                        //\u662f\u5426\u5916\u90e8\u5458\u5de5\n            "authState": true,                        //\u662f\u5426\u6fc0\u6d3b\uff0c\u8868\u793a\u8d26\u53f7\u662f\u5426\u53ef\u7528\n            "globalRoaming": "+86",                   //\u56fd\u9645\u533a\u53f7\n            "note": "\u6279\u91cf\u4fee\u6539",                       //\u5907\u6ce8                  \n            "staffCustomForm": {                      //\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5\n                "base": "[{\\"key\\":\\"8\\",\\"label\\":\\"\u5317\u4eac\u5e02/\u6d77\u6dc0\u533a\\"}]",  //\u5e38\u9a7b\u5730\n                "postType": "ID_3D5RavktVRM",         //\u5c97\u4f4d\n                "rankType": "ID_3D5RavktTRM"          //\u804c\u7ea7\n            },\n            "updateTime": "2023-05-31 17:14:57",      //\u66f4\u65b0\u65f6\u95f4\n            "createTime": "2022-10-18 23:26:16"       //\u521b\u5efa\u65f6\u95f4\n        },\n        {\n            "id": "TsI3tt8KjF4S7M:BbP3CdaKi$VcRw",    //\u5458\u5de5ID\n            "name": "\u5f20\u56fd\u9633\u5c0f\u53f7",                     //\u5458\u5de5\u59d3\u540d\n            "nickName": "\u5c0f\u9633",                       //\u5458\u5de5\u522b\u540d\n            "code": "00002",                          //\u5458\u5de5\u5de5\u53f7\n            "departments": [                          //\u6240\u5728\u90e8\u95e8\n                "TsI3tt8KjF4S7M"\n            ],\n            "defaultDepartment": "TsI3tt8KjF4S7M",    //\u9ed8\u8ba4\u90e8\u95e8ID\n            "cellphone": "18515257800",               //\u624b\u673a\u53f7\n            "active": true,                           //true\uff1a\u5728\u804c\uff0cfalse\uff1a\u5df2\u79bb\u804c\uff08\u8d26\u53f7\u903b\u8f91\u5220\u9664\uff0c\u5728\u7cfb\u7edf\u4e0a\u4e0d\u53ef\u89c1\uff09\n            "userId": "BbP3CdaKi$VcRw",               //\u7b2c\u4e09\u65b9\u5e73\u53f0\u4eba\u5458ID\n            "email": null,                            //\u767b\u5f55\u90ae\u7bb1\uff08\u5927\u5199\u5b57\u6bcd\u5168\u8f6c\u6362\u4e3a\u5c0f\u5199\u5b57\u6bcd\uff09\n            "showEmail": "18515257800@163.com",       //\u5458\u5de5\u4e2a\u4eba\u4fe1\u606f\u663e\u793a\u90ae\u7bb1\uff08\u5927\u5199\u5b57\u6bcd\u4fdd\u6301\u4e0d\u53d8\uff09\n            "external": false,                        //\u662f\u5426\u5916\u90e8\u5458\u5de5\n            "authState": true,                        //\u662f\u5426\u6fc0\u6d3b\uff0c\u8868\u793a\u8d26\u53f7\u662f\u5426\u53ef\u7528\n            "globalRoaming": "+86",                   //\u56fd\u9645\u533a\u53f7\n            "note": "\u6279\u91cf\u4fee\u6539",                        //\u5907\u6ce8                  \n            "staffCustomForm": {                      //\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5\n                "base": "[{\\"key\\":\\"8\\",\\"label\\":\\"\u5317\u4eac\u5e02/\u6d77\u6dc0\u533a\\"}]",  //\u5e38\u9a7b\u5730\n                "postType": "ID_3D5RavktVRM",         //\u5c97\u4f4d\n                "rankType": "ID_3D5RavktTRM"          //\u804c\u7ea7\n            },\n            "updateTime": "2023-05-31 17:14:57",      //\u66f4\u65b0\u65f6\u95f4\n            "createTime": "2023-05-29 19:10:19"       //\u521b\u5efa\u65f6\u95f4\n        },\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"name"),"\uff08\u5458\u5de5\u59d3\u540d\uff09\u662f\u5426\u4e0d\u4f20\u6216\u8005\u4f20 ",(0,l.kt)("inlineCode",{parentName:"td"},'""'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u6bb5rankType\u4e0d\u5408\u6cd5\uff0c\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u7684\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u6240\u4f20\u503c\u662f\u5426\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u6bb5postType\u4e0d\u5408\u6cd5\uff0c\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u7684\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u6240\u4f20\u503c\u662f\u5426\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"staffCustomForm\u4e2d\u7684u_\u6d4b\u8bd51\u5b57\u6bb5\u4e0d\u5c5e\u4e8e\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"staffCustomForm"),"\uff08\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5\uff09\u6240\u4f20\u53c2\u6570\u662f\u5426\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6b64\u7528\u6237\u65e0\u6cd5\u8fdb\u884c\u4fee\u6539\u8d26\u6237\u624b\u673a\u53f7\uff0c\u56e0\u4fee\u6539\u7684\u624b\u673a\u53f7\u5728\u7cfb\u7edf\u4e2d\u5df2\u7ecf\u6ce8\u518c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u8981\u4fee\u6539\u7684\u767b\u5f55\u624b\u673a\u53f7\u662f\u5426\u5b58\u5728\u4e8e\u672a\u89e3\u6563\u7684\u4f01\u4e1a",(0,l.kt)("br",null),"\u5982\u679c\u5b58\u5728\uff0c\u53ea\u80fd\u5728\u672c\u4f01\u4e1a\u65b0\u589e\u5458\u5de5\u65f6\u4f7f\u7528\u8be5\u624b\u673a\u53f7")))))}N.isMDXComponent=!0},75725:function(t,e,a){e.Z=a.p+"assets/images/\u57ce\u5e02\u5b57\u6bb5\u62fc\u63a5\u793a\u4f8b-e63e5207dfa581e545b1a1e2776317bb.png"}}]);