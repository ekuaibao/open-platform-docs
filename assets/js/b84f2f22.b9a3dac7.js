"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[37582],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return f}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=o(a),f=r,N=k["".concat(m,".").concat(f)]||k[f]||s[f]||l;return a?n.createElement(N,i(i({ref:e},d),{},{components:a})):n.createElement(N,i({ref:e},d))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},41627:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,a=t.url,l=t.description,i=a.replace(/\`(.*?)\`/g,"<span>$1</span>");return n.createElement("div",{className:r.control+" "+r[e]},n.createElement("span",{className:r.method},e),n.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&n.createElement("small",null,l))}},86886:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return s},default:function(){return f}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(41627),p=["components"],m={},o="\u4fee\u6539\u5458\u5de5\u4fe1\u606f",d={unversionedId:"open-api/contacts/update-staffs",id:"version-v2.0/open-api/contacts/update-staffs",title:"\u4fee\u6539\u5458\u5de5\u4fe1\u606f",description:"<Control",source:"@site/versioned_docs/version-v2.0/open-api/contacts/update-staffs.md",sourceDirName:"open-api/contacts",slug:"/open-api/contacts/update-staffs",permalink:"/docs/v2.0/open-api/contacts/update-staffs",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/contacts/update-staffs.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6279\u91cf\u65b0\u589e\u5458\u5de5",permalink:"/docs/v2.0/open-api/contacts/batch-add-staffs"},next:{title:"\u83b7\u53d6\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5",permalink:"/docs/v2.0/open-api/contacts/get-allCustomeProperty"}},s=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],k={toc:s};function f(t){var e=t.components,m=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},k,m,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4fee\u6539\u5458\u5de5\u4fe1\u606f"},"\u4fee\u6539\u5458\u5de5\u4fe1\u606f"),(0,l.kt)(i.Z,{method:"PUT",url:"/api/openapi/v1/staffs/update/$`staffId`",mdxType:"Control"}),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6b64\u63a5\u53e3\u66f4\u65b0\u7684\u5458\u5de5\uff08\u5305\u62ec\u5728\u7cfb\u7edf\u4e0a\u521b\u5efa\u7684\uff09\uff0c\u66f4\u65b0\u540e\u60a8\u5c06 ",(0,l.kt)("strong",{parentName:"li"},"\u65e0\u6cd5\u5728\u5408\u601d\u754c\u9762\u4e0a\u7ef4\u62a4\u5176\u901a\u8baf\u5f55"),"\uff0c\u53ea\u80fd\u901a\u8fc7\u63a5\u53e3\u66f4\u65b0\u4fe1\u606f\u548c\u5220\u9664\u3002")))),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"staffId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u83b7\u53d6\u5458\u5de5\u5217\u8868"),"\u83b7\u53d6")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u59d3\u540d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u59d3\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"cellphone")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u624b\u673a\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u5982\u679c\u624b\u673a\u53f7\u4e3a\u56fd\u5916\u624b\u673a\u53f7\uff0c\u90a3\u4e48\u5e94\u4e3a : "(\u533a\u53f7)\u624b\u673a\u53f7"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"email")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90ae\u7bb1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4ee5\u4e0d\u4f20\uff0c\u4f46\u662f\u4e0d\u53ef\u4ee5\u4f20 ",(0,l.kt)("inlineCode",{parentName:"td"},'""'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"note")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5907\u6ce8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5907\u6ce8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"defaultDepartment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u90e8\u95e8ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u90e8\u95e8id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"departments")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6240\u5728\u90e8\u95e8ID,\u81f3\u5c111\u4e2a"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u4fdd\u9ed8\u8ba4\u90e8\u95e8\u5728 ",(0,l.kt)("inlineCode",{parentName:"td"},"departments")," \u91cc\u3002\u5982\u679c\u4e0d\u5728\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5c06departments\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u89c6\u4e3a\u9ed8\u8ba4\u90e8\u95e8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"modifyAccountPhone")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u4fee\u6539\u767b\u5f55\u624b\u673a\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u4fee\u6539\u767b\u5f55\u624b\u673a\u53f7\uff0c\u4fee\u6539\u7684\u624b\u673a\u53f7\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"cellphone"),"\uff0c\u4e0d\u53ef\u4fee\u6539\u6210\u5df2\u6ce8\u518c\u4f01\u4e1a\u7684\u624b\u673a\u53f7 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u4e0d\u4fee\u6539\u767b\u5f55\u624b\u673a\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"modifyAccountEmail")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u4fee\u6539\u90ae\u7bb1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u4fee\u6539\u90ae\u7bb1 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u4e0d\u4fee\u6539\u90ae\u7bb1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"staffCustomForm")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49\u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49\u5b57\u6bb5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f rankType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u804c\u7ea7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimension-items"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f postType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c97\u4f4d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimension-items"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f base")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e38\u9a7b\u5730"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u53c2\u8003\u683c\u5f0f : "','[{\\"key\\":\\"8\\",\\"label\\":\\"\u5317\u4eac\u5e02/\u6d77\u6dc0\u533a\\"}]','"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f u_\u5b57\u6bb5\u540d")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49\u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u81ea\u5b9a\u4e49\u5b57\u6bb5\uff0c\u683c\u5f0f\u4e3a"u',"_",'\u5b57\u6bb5\u540d"\uff0c\u4f8b\u5982 : u',"_","\u9879\u76ee")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"base\u53c2\u6570\u62fc\u63a5\u8bf4\u660e\uff1a",(0,l.kt)("br",null),"\n\u901a\u8fc7",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/docs/open-api/basedata/get-basedata-city"},"\u83b7\u53d6\u57ce\u5e02\u5217\u8868\u6570\u636e")),"\u63a5\u53e3\u83b7\u53d6\u6570\u636e\u540e\uff0c\u627e\u5230\u5bf9\u5e94\u57ce\u5e02\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"id"),"\u5bf9\u5e94",(0,l.kt)("inlineCode",{parentName:"li"},"key"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"fullName"),"\u5bf9\u5e94",(0,l.kt)("inlineCode",{parentName:"li"},"label"),"\u3002\n\u5982\u679c\u662f\u56fd\u5185\u57ce\u5e02\u5417\uff0c\u4e0d\u9700\u8981\u62fc\u63a5\u201c\u4e2d\u56fd\u201d\uff0c\u5982\u679c\u662f\u56fd\u5916\u57ce\u5e02\uff0c\u9700\u8981\u5c06",(0,l.kt)("inlineCode",{parentName:"li"},"fullName"),"\u53c2\u6570\u5168\u90e8\u6309\u7167\u683c\u5f0f\u62fc\u63a5\u3002\n",(0,l.kt)("img",{alt:"\u57ce\u5e02\u5b57\u6bb5\u62fc\u63a5\u793a\u4f8b",src:a(62448).Z}))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request PUT \'https://app.ekuaibao.com/api/openapi/v1/staffs/update/$JOYbpjPP-E2Q00:IIEbwYgR2E5M00?accessToken=z0wbwXPo6sf400\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "name": "\u674e\u56db",                    //\u5458\u5de5\u59d3\u540d\n    "code": "",                        //\u5458\u5de5\u5de5\u53f7\n    "cellphone": "",                   //\u624b\u673a\u53f7\n    "email": "2777481917@qq.com",      //\u90ae\u7bb1\n    "note": "notea",                   //\u5907\u6ce8\n    "defaultDepartment": "JOYbpjPP-E2Q00:pAwbwH_W7sec00",//\u9ed8\u8ba4\u90e8\u95e8\n    "departments":[                    //\u6240\u5728\u90e8\u95e8\n      "JOYbpjPP-E2Q00:pAwbwH_W7sec00"\n    ],\n    "modifyAccountPhone": false,       //\u662f\u5426\u4fee\u6539\u5458\u5de5\u624b\u673a\u53f7\n    "modifyAccountEmail": false,       //\u662f\u5426\u4fee\u6539\u5458\u5de5\u90ae\u7bb1\n    "staffCustomForm": {               //\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5\u96c6\u5408\n        "rankType":"lUcctXntW82A00",   //\u804c\u7ea7\n        "postType":"ltUcxNyWSQ1o00",   //\u5c97\u4f4d\n        "base":"[{\\"key\\":\\"7370\\",\\"label\\":\\"\u5c71\u897f\u7701/\u957f\u6cbb/\u4e0a\u515a\u533a\\"}]",//\u5e38\u9a7b\u5730\n        "u_\u6570\u5b57\u5b57\u6bb5":"1"                //\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "id": "JOYbpjPP-E2Q00:IIEbwYgR2E5M00", //\u5458\u5de5ID\n        "name": "\u674e\u56db",                        //\u5458\u5de5\u59d3\u540d\n        "code": "",                           //\u5458\u5de5\u5de5\u53f7\n        "departments": [                      //\u6240\u5728\u90e8\u95e8\n              "JOYbpjPP-E2Q00:pAwbwH_W7sec00"\n        ],\n        "defaultDepartment": "JOYbpjPP-E2Q00:pAwbwH_W7sec00", //\u9ed8\u8ba4\u90e8\u95e8\n        "cellphone": "",                                      //\u624b\u673a\u53f7\n        "active": true,                                       //true\uff1a\u5728\u804c\uff0cfalse\uff1a\u5df2\u79bb\u804c\n        "userId": "sQgbwYgR2E5s00",                           //\u7b2c\u4e09\u65b9ID\n        "email": "2777481917@qq.com",\n        "staffCustomForm":{                                   //\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5\u96c6\u5408\n            "base":"[{\\"key\\":\\"7370\\",\\"label\\":\\"\u5c71\u897f\u7701/\u957f\u6cbb/\u4e0a\u515a\u533a\\"}]",//\u5e38\u9a7b\u5730\n            "postType":"ltUcxNyWSQ1o00",                      //\u5c97\u4f4d\n            "rankType":"lUcctXntW82A00",                      //\u804c\u7ea7\n            "u_\u6570\u5b57\u5b57\u6bb5":"1"                                   //\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5\n        },\n        "external": false                                     // \u662f\u5426\u5916\u90e8\u5458\u5de5\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 400,\n    "errorMessage": "\u5458\u5de5\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')))}f.isMDXComponent=!0},62448:function(t,e,a){e.Z=a.p+"assets/images/\u57ce\u5e02\u5b57\u6bb5\u62fc\u63a5\u793a\u4f8b-e63e5207dfa581e545b1a1e2776317bb.png"}}]);