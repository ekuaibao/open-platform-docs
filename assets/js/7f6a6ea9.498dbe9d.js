"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42025],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),s=m(a),N=r,f=s["".concat(d,".").concat(N)]||s[N]||k[N]||l;return a?n.createElement(f,p(p({ref:e},o),{},{components:a})):n.createElement(f,p({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},41627:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,a=t.url,l=t.description,p=a.replace(/\`(.*?)\`/g,"<span>$1</span>");return n.createElement("div",{className:r.control+" "+r[e]},n.createElement("span",{className:r.method},e),n.createElement("strong",{dangerouslySetInnerHTML:{__html:p}}),l&&n.createElement("small",null,l))}},14993:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return k},default:function(){return N}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p=a(41627),i=["components"],d={},m="\u65b0\u589e\u5458\u5de5",o={unversionedId:"open-api/contacts/add-staffs",id:"version-v2.1/open-api/contacts/add-staffs",title:"\u65b0\u589e\u5458\u5de5",description:"\u5f53\u5458\u5de5\u65b0\u589e\u5230\u4f01\u4e1a\u540e\uff0c\u8be5\u5458\u5de5\u53ef\u901a\u8fc7 \u5feb\u6377\u767b\u5f55\uff08\u77ed\u4fe1\u9a8c\u8bc1\u7801\u767b\u5f55\uff09\u7684\u65b9\u5f0f\u8fdb\u5165\u5408\u601d\uff0c\u6216\u8005\u901a\u8fc7 \u5fd8\u8bb0\u5bc6\u7801 \u6765\u8bbe\u7f6e\u5bc6\u7801\u3002",source:"@site/versioned_docs/version-v2.1/open-api/contacts/add-staffs.md",sourceDirName:"open-api/contacts",slug:"/open-api/contacts/add-staffs",permalink:"/docs/v2.1/open-api/contacts/add-staffs",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/contacts/add-staffs.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u505c\u542f\u7528\u90e8\u95e8",permalink:"/docs/v2.1/open-api/contacts/active-departments"},next:{title:"\u6279\u91cf\u65b0\u589e\u5458\u5de5",permalink:"/docs/v2.1/open-api/contacts/batch-add-staffs"}},k=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],s={toc:k};function N(t){var e=t.components,d=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,d,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u65b0\u589e\u5458\u5de5"},"\u65b0\u589e\u5458\u5de5"),(0,l.kt)("p",null,"\u5f53\u5458\u5de5\u65b0\u589e\u5230\u4f01\u4e1a\u540e\uff0c\u8be5\u5458\u5de5\u53ef\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"p"},"\u5feb\u6377\u767b\u5f55"),"\uff08\u77ed\u4fe1\u9a8c\u8bc1\u7801\u767b\u5f55\uff09\u7684\u65b9\u5f0f\u8fdb\u5165\u5408\u601d\uff0c\u6216\u8005\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"p"},"\u5fd8\u8bb0\u5bc6\u7801")," \u6765\u8bbe\u7f6e\u5bc6\u7801\u3002"),(0,l.kt)(p.Z,{method:"POST",url:"/api/openapi/v1.1/staffs",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#180"},(0,l.kt)("strong",{parentName:"a"},"1.8.0"))," ","\u2003"," -> \ud83d\ude80 \u63a5\u53e3\u5347\u7ea7 ",(0,l.kt)("inlineCode",{parentName:"p"},"v1.1")," \u7248\u672c\uff0c\u65b0\u589e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"cellphone"),"\uff08\u624b\u673a\u53f7\uff09\u53c2\u6570\u6821\u9a8c\uff0c\u53ea\u5141\u8bb8\u4f20\u82f1\u6587\u62ec\u53f7\u548c\u6570\u5b57\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#07140"},(0,l.kt)("strong",{parentName:"a"},"0.7.140"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u652f\u6301\u81ea\u5b9a\u4e49\u5b57\u6bb5\u4fdd\u5b58\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#07133"},(0,l.kt)("strong",{parentName:"a"},"0.7.133"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u63a7\u5236\u53d1\u9001\u90ae\u4ef6\u6807\u8bc6\u53c2\u6570\u3002",(0,l.kt)("br",null)))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u5f53\u65b0\u589e\u5458\u5de5\u7684 ",(0,l.kt)("strong",{parentName:"li"},"\u624b\u673a\u53f7"),"/",(0,l.kt)("strong",{parentName:"li"},"\u90ae\u7bb1")," \u4e0e\u4e00\u4e2a\u5df2\u505c\u7528\u7684\u5458\u5de5\u76f8\u540c\uff0c\u90a3\u4e48\u7cfb\u7edf\u5c06\u542f\u7528\u5df2\u505c\u7528\u7684\u5458\u5de5\u5e76\u66f4\u65b0\u5176\u5458\u5de5\u4fe1\u606f\uff0c\u800c\u4e0d\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u5458\u5de5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6b64\u63a5\u53e3\u65b0\u589e\u7684\u5458\u5de5\uff0c\u60a8\u5c06 ",(0,l.kt)("strong",{parentName:"li"},"\u65e0\u6cd5\u5728\u5408\u601d\u754c\u9762\u4e0a\u7ef4\u62a4\u5176\u901a\u8baf\u5f55"),"\uff0c\u53ea\u80fd\u901a\u8fc7\u63a5\u53e3\u66f4\u65b0\u4fe1\u606f\u548c\u5220\u9664\u3002")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u59d3\u540d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u59d3\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"cellphone")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u624b\u673a\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u5982\u679c\u624b\u673a\u53f7\u4e3a\u56fd\u5916\u624b\u673a\u53f7\uff0c\u4f20\u53c2\u793a\u4f8b : "(\u533a\u53f7)\u624b\u673a\u53f7"',(0,l.kt)("br",null),"\u539f\u751f\u73af\u5883\u624b\u673a\u53f7\u6216\u90ae\u7bb1\u5fc5\u987b\u81f3\u5c11\u586b\u4e00\u4e2a",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u53ea\u5141\u8bb8\u4f20\u82f1\u6587\u62ec\u53f7\u548c\u6570\u5b57"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"email")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90ae\u7bb1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4ee5\u4e0d\u4f20\uff0c\u4f46\u662f\u4e0d\u53ef\u4ee5\u4f20 ",(0,l.kt)("inlineCode",{parentName:"td"},'""'),(0,l.kt)("br",null),"\u539f\u751f\u73af\u5883\u624b\u673a\u53f7\u6216\u90ae\u7bb1\u5fc5\u987b\u81f3\u5c11\u586b\u4e00\u4e2a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"note")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5907\u6ce8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5907\u6ce8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"defaultDepartment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u90e8\u95e8ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u4fdd\u9ed8\u8ba4\u90e8\u95e8\u5728 ",(0,l.kt)("inlineCode",{parentName:"td"},"departments")," \u91cc\u3002\u5982\u679c\u4e0d\u5728\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5c06departments\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u89c6\u4e3a\u9ed8\u8ba4\u90e8\u95e8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"departments")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6240\u5728\u90e8\u95e8ID\uff0c\u81f3\u5c111\u4e2a"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u517c\u804c\u90e8\u95e8\uff0c\u8bf7\u786e\u4fdd\u81f3\u5c11\u5305\u542b\u9ed8\u8ba4\u90e8\u95e8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"userid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u4eba\u5458ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5982\u9700\u8981\u540c\u6b65\u9489\u9489\u3001\u4f01\u4e1a\u5fae\u4fe1\u7b49\u7b2c\u4e09\u65b9\u5e73\u53f0\u4eba\u5458\uff0c\u9700\u8981\u52a0\u4e0a\u6b64\u53c2\u6570",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"strong"},"cellphone")," \u53c2\u6570\u5728\u7cfb\u7edf\u4e2d\u5df2\u6ce8\u518c\uff0c\u672c\u53c2\u6570\u4e0d\u751f\u6548\uff0c\u4f1a\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"strong"},"cellphone")," \u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"strong"},"userid")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"useNewAccount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5f3a\u5236\u542f\u7528\u65b0\u7528\u6237"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u542f\u7528 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u4e0d\u542f\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"useSendEmail")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u7981\u6b62\u53d1\u9001\u90ae\u4ef6\u901a\u77e5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u7981\u6b62 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u4e0d\u7981\u6b62")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"staffCustomForm")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49\u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49\u5b57\u6bb5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f rankType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u804c\u7ea7\u6863\u6848\u9879ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimension-items"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f postType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c97\u4f4d\u6863\u6848\u9879ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimension-items"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f base")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e38\u9a7b\u5730"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u53c2\u8003\u683c\u5f0f : "','[{\\"key\\":\\"8\\",\\"label\\":\\"\u5317\u4eac\u5e02/\u6d77\u6dc0\u533a\\"}]','"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f u_\u5b57\u6bb5\u540d")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49\u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u81ea\u5b9a\u4e49\u5b57\u6bb5\uff0c\u683c\u5f0f\u4e3a"u',"_",'\u5b57\u6bb5\u540d"\uff0c\u4f8b\u5982 : u',"_","\u9879\u76ee")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"base"),"\uff08\u5e38\u9a7b\u5730\uff09\u53c2\u6570\u62fc\u63a5\u8bf4\u660e\uff1a",(0,l.kt)("br",null),"\n\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/docs/open-api/basedata/get-basedata-city"},"\u83b7\u53d6\u57ce\u5e02\u5217\u8868\u6570\u636e"))," \u63a5\u53e3\u83b7\u53d6\u6570\u636e\u540e\uff0c\u627e\u5230\u5bf9\u5e94\u57ce\u5e02\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," \u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fullName")," \u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"li"},"label"))))),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("img",{alt:"\u57ce\u5e02\u5b57\u6bb5\u62fc\u63a5\u793a\u4f8b",src:a(30391).Z})))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v1.1/staffs?accessToken=z0wbwXPo6sf400\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "name":"\u5f20\u4e09", \n    "code":"36987",\n    "cellphone":"15070403486",\n    "email":"2777481917@163.com",\n    "note":"\u5907\u6ce8",\n    "defaultDepartment":"JOYbpjPP-E2Q00:pAwbwH_W7sec00",  //\u9ed8\u8ba4\u90e8\u95e8\n    "departments":[                                       //\u6240\u5728\u90e8\u95e8\n        "JOYbpjPP-E2Q00:pAwbwH_W7sec00"\n    ],\n    "staffCustomForm":{                                   //\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5\n        "rankType":"lUcctXntW82A00",   \n        "postType":"ltUcxNyWSQ1o00",\n        "base":"[{\\"key\\":\\"7370\\",\\"label\\":\\"\u5c71\u897f\u7701/\u957f\u6cbb/\u4e0a\u515a\u533a\\"}]",\n        "u_\u6587\u672c1":"",\n        "u_num1":"1",\n        "u_\u5458\u5de5\u6863\u6848":"ID_3b9EX5San3s",\n        "u_money1":{\n            "standard":"123.1234",\n            "standardStrCode":"CNY",\n            "standardNumCode":"156",\n            "standardSymbol":"\xa5",\n            "standardUnit":"\u5143",\n            "standardScale":2\n        },\n        "u_date1":1624896000000\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "id": "JOYbpjPP-E2Q00:IIEbwYgR2E5M00",  //\u5458\u5de5ID\n        "name": "\u5f20\u4e09",                         //\u5458\u5de5\u59d3\u540d\n        "code": "36987",                        //\u5458\u5de5\u5de5\u53f7\n        "departments": [                        //\u6240\u5728\u90e8\u95e8\n            "JOYbpjPP-E2Q00:pAwbwH_W7sec00"\n        ],\n        "defaultDepartment": "JOYbpjPP-E2Q00:pAwbwH_W7sec00", //\u9ed8\u8ba4\u90e8\u95e8\n        "cellphone": "15070403486",             //\u624b\u673a\u53f7\n        "staffCustomForm":null,                 //\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5\n        "active": true,                         //true\uff1a\u5728\u804c\uff0cfalse\uff1a\u5df2\u79bb\u804c\n        "userId": "sQgbwYgR2E5s00",             //\u7b2c\u4e09\u65b9\u5e73\u53f0\u4eba\u5458ID\n        "email": "2777481917@163.com",          //\u90ae\u7bb1\n        "external": false,                      //\u662f\u5426\u5916\u90e8\u5458\u5de5\n        "staffCustomForm": {                    //\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5\n            "rankType":"lUcctXntW82A00",        //\u804c\u7ea7\u6863\u6848\u9879ID        \n            "postType":"ltUcxNyWSQ1o00",        //\u5c97\u4f4d\u6863\u6848\u9879ID\n            "base":"[{\\"key\\":\\"7370\\",\\"label\\":\\"\u5c71\u897f\u7701/\u957f\u6cbb/\u4e0a\u515a\u533a\\"}]",//\u5e38\u9a7b\u5730\n            "u_\u6587\u672c1": "",\n            "u_num1": "1",\n            "u_\u5458\u5de5\u6863\u6848": "ID_3b9EX5San3s",\n            "u_money1": {\n                "standard": "123.1234",\n                "standardStrCode": "CNY",\n                "standardNumCode": "156",\n                "standardSymbol": "\xa5",\n                "standardUnit": "\u5143",\n                "standardScale": 2\n            },\n            "u_date1": 1624896000000\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u53ea\u80fd\u5305\u542b\u6570\u5b57\u548c\u82f1\u6587\u62ec\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"cellphone"),"\uff08\u624b\u673a\u53f7\uff09\u662f\u5426\u5305\u542b\u975e\u6cd5\u5b57\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u589e\u5458\u5de5\u6570\u636e\u5e93\u5f02\u5e38\uff1a\u8be5\u624b\u673a\u53f7/\u90ae\u7bb1\u8d26\u53f7\u5df2\u88ab\u5176\u4ed6\u5458\u5de5\u4f7f\u7528\uff0c\u8bf7\u52ff\u91cd\u590d\u7ed1\u5b9a"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u65b0\u589e\u5458\u5de5\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"cellphone"),"\uff08\u624b\u673a\u53f7\uff09/ ",(0,l.kt)("inlineCode",{parentName:"td"},"email"),"\uff08\u90ae\u7bb1\uff09\u5728\u672c\u4f01\u4e1a\u4e2d\u662f\u5426\u5df2\u5b58\u5728\uff0c\u4e14\u672a\u505c\u7528\uff0c\u53ef\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u83b7\u53d6\u5458\u5de5\u5217\u8868")," \u83b7\u53d6\u786e\u8ba4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8be5\u8d26\u53f7\u5df2\u88ab\u5176\u4ed6\u5458\u5de5\u4f7f\u7528\uff0c\u8bf7\u52ff\u91cd\u590d\u7ed1\u5b9a"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u65b0\u589e\u5458\u5de5\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"userid"),"\uff08\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u4eba\u5458ID\uff09\u5728\u7cfb\u7edf\u4e2d\u662f\u5426\u5df2\u5b58\u5728\uff0c\u53ef\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u83b7\u53d6\u5458\u5de5\u5217\u8868")," \u83b7\u53d6\u786e\u8ba4",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"strong"},"userid")," \u4e0d\u662f\u672c\u4f01\u4e1a\u5360\u7528\uff0c\u8bf7\u66f4\u6362 ",(0,l.kt)("inlineCode",{parentName:"strong"},"userid")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"403")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u4e0d\u80fd\u4e3a\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"defaultDepartment"),"\uff08\u9ed8\u8ba4\u90e8\u95e8ID\uff09\u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"departments"),"\uff08\u6240\u5728\u90e8\u95e8ID\uff09\u662f\u5426\u4f20\u53c2")))))}N.isMDXComponent=!0},30391:function(t,e,a){e.Z=a.p+"assets/images/\u57ce\u5e02\u5b57\u6bb5\u62fc\u63a5\u793a\u4f8b-e63e5207dfa581e545b1a1e2776317bb.png"}}]);