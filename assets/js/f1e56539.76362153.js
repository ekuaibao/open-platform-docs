"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54441],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),d=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=d(n),k=r,f=c["".concat(i,".").concat(k)]||c[k]||s[k]||o;return n?a.createElement(f,l(l({ref:e},m),{},{components:n})):a.createElement(f,l({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return o}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},o=function(t){var e=t.method,n=t.url,o=t.description,l=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),o&&a.createElement("small",null,o))}},55773:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return s},default:function(){return k}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(41627),p=["components"],i={},d="\u6839\u636e\u5355\u636eID\u67e5\u8be2\u6240\u6709\u5f85\u529e\u5df2\u529e\u4e8b\u9879",m={unversionedId:"open-api/flows/get-flow-backlog-byId",id:"version-v2.2/open-api/flows/get-flow-backlog-byId",title:"\u6839\u636e\u5355\u636eID\u67e5\u8be2\u6240\u6709\u5f85\u529e\u5df2\u529e\u4e8b\u9879",description:"<Control",source:"@site/versioned_docs/version-v2.2/open-api/flows/get-flow-backlog-byId.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/get-flow-backlog-byId",permalink:"/docs/open-api/flows/get-flow-backlog-byId",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.2/open-api/flows/get-flow-backlog-byId.md",tags:[],version:"v2.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6839\u636e\u5458\u5de5ID\u83b7\u53d6\u5df2\u652f\u4ed8\u5355\u636e",permalink:"/docs/open-api/flows/get-delivered-byStaff"},next:{title:"\u6839\u636e\u5355\u636eID\u83b7\u53d6\u501f\u6b3e\u5305\u4fe1\u606f",permalink:"/docs/open-api/flows/get-loanInfo-ByFlowId"}},s=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[{value:"\u4efb\u52a1\u72b6\u6001(<code>state</code>)\u53c2\u6570\u4ecb\u7ecd",id:"\u4efb\u52a1\u72b6\u6001state\u53c2\u6570\u4ecb\u7ecd",children:[],level:3}],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],c={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,p);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6839\u636e\u5355\u636eid\u67e5\u8be2\u6240\u6709\u5f85\u529e\u5df2\u529e\u4e8b\u9879"},"\u6839\u636e\u5355\u636eID\u67e5\u8be2\u6240\u6709\u5f85\u529e\u5df2\u529e\u4e8b\u9879"),(0,o.kt)(l.Z,{method:"GET",url:"/api/openapi/v1.1/flowDetails/allLogs",mdxType:"Control"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,o.kt)("div",null,(0,o.kt)("p",null,"  ",(0,o.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1111"},(0,o.kt)("strong",{parentName:"a"},"1.11.1")),"\u2003","-> \ud83d\udc1e \u4fee\u590d\u4e86\u7ba1\u7406\u5458\u56de\u9000\u5355\u636e\u5230\u4e0a\u4e00\u8282\u70b9\uff0c\u4e0a\u4e00\u8282\u70b9\u5ba1\u6279\u4eba\u9a73\u56de\u5355\u636e\uff0c\u63a5\u53e3\u62a5 ",(0,o.kt)("strong",{parentName:"p"},"HTTP 400")," \u7684BUG\u3002",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1110"},(0,o.kt)("strong",{parentName:"a"},"1.11.0")),"\u2003","-> \ud83d\udc1e \u4fee\u590d\u4e86\u7533\u8bf7\u5355\u53d8\u66f4\u7533\u8bf7\uff0c\u63a5\u53e3\u62a5 ",(0,o.kt)("strong",{parentName:"p"},"HTTP 400")," \u7684BUG\u3002",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#172"},(0,o.kt)("strong",{parentName:"a"},"1.8.1"))," ","\u2003"," -> \ud83d\udc1e \u4fee\u590d\u4e86\u5355\u636e\u64a4\u56de\u518d\u63d0\u4ea4\uff0c\u63a5\u53e3\u62a5 ",(0,o.kt)("strong",{parentName:"p"},"HTTP 400")," \u7684BUG\u3002",(0,o.kt)("br",null),"\n","\u2003"," ","\u2003"," ","\u2003"," -> \ud83d\udc1e \u4fee\u590d\u4e86\u5355\u636e\u7531\u7ba1\u7406\u5458\u8f6c\u4ea4\u7ed9\u4ed6\u4eba\u540e\u5ba1\u6279\u540c\u610f\uff0c\u63a5\u53e3\u62a5 ",(0,o.kt)("strong",{parentName:"p"},"HTTP 500")," \u7684BUG\u3002",(0,o.kt)("br",null),"\n","\u2003"," ","\u2003"," ","\u2003"," -> \ud83d\udc1e \u4fee\u590d\u4e86\u5355\u636e\u652f\u4ed8\u4e2d\u548c\u652f\u4ed8\u5b8c\u6210\u72b6\u6001\u7f3a\u5931 ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," \u7684BUG\u3002",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#172"},(0,o.kt)("strong",{parentName:"a"},"1.7.2"))," ","\u2003"," -> \ud83d\udc1e \u4fee\u590d\u4e86\u5f85\u529e\u4efb\u52a1\u81ea\u52a8\u540c\u610f\u65f6\uff0c\u63a5\u53e3\u62a5\u9519 ",(0,o.kt)("strong",{parentName:"p"},"HTTP 400")," \u7684BUG\u3002",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#170"},(0,o.kt)("strong",{parentName:"a"},"1.7.0"))," ","\u2003"," -> \ud83d\ude80 \u63a5\u53e3\u5347\u7ea7 ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.1")," \u7248\u672c\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u6210\u529f\u54cd\u5e94")," \u4e2d\u65b0\u589e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"action"),"\uff08\u5df2\u529e\u52a8\u4f5c\uff09\u53c2\u6570\u3002",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#120"},(0,o.kt)("strong",{parentName:"a"},"1.2.0"))," ","\u2003"," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,o.kt)("br",null)))),(0,o.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"accessToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"flowId")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636eID"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/flows/question-answer#%E9%97%AE%E9%A2%98%E4%B8%80"},"\u5355\u636eID\u83b7\u53d6\u65b9\u5f0f"))))),(0,o.kt)("h2",{id:"curl"},"CURL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1.1/flowDetails/allLogs?accessToken=ID_3zYtLIa1$gM:bwa3wajigF0WH0&flowId=ID_3zJ05rt0DY0'\n")),(0,o.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"action"),"\uff08\u5df2\u529e\u52a8\u4f5c\uff09\u53c2\u6570\u4ecb\u7ecd\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"/docs/open-api/flows/forms-state#%E5%AE%A1%E6%89%B9%E5%8A%A8%E4%BD%9C%E5%AE%A1%E6%89%B9%E6%97%A5%E5%BF%97%E4%B8%AD-action-%E5%AD%97%E6%AE%B5"},"\u5ba1\u6279\u52a8\u4f5c"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count":5,                           //\u5f85\u529e\u5df2\u529e\u603b\u6570\u91cf\n    "items":[\n        {\n            "pipeline":1,\n            "grayver":"9.10.0.0:A",\n            "id":"ID_3zE5G_0dCw0",       //\u4efb\u52a1ID\uff0c\u552f\u4e00\u6807\u8bc6\uff0c\u7b49\u4e8e\u51fa\u7ad9\u6d88\u606f\u7684\u201c\u5f85\u529eID\u201d\uff08backlogId\uff09\n            "version":2,\n            "active":true,\n            "createTime":1645692678756,\n            "updateTime":1645692693493,\n            "corporationId":"bwa3wajigF0WH0",\n            "sourceCorporationId":null,\n            "dataCorporationId":null,\n            "ownerId":"bwa3wajigF0WH0:ID_3lokDfb1p5w",  //\u5f85\u529e\u6216\u5df2\u529e\u4eba\u5458ID\n            "flowId":"ID_3zE5G_0bRw0",                  //\u5355\u636eID\n            "logId":-1,                                 //-1\uff1a\u8868\u793a\u5f85\u529e\uff0c\u9700\u914d\u5408 state \u4f7f\u7528\uff0c\u975e-1\uff1a\u8868\u793a\u5df2\u529e\n            "type":"expense",                           //\u5355\u636e\u7c7b\u578b\n            "state":"PROCESSING",                       //\u4efb\u52a1\u72b6\u6001\uff0c\u89c1\u201c\u53c2\u6570\u4ecb\u7ecd\u201d\u3002\n            "remindEndTime":0,\n            "rejectEndTime":0,\n            "autoApproveType":"NONE",\n            "rejectAlert":false,\n            "addCountReport":true,\n            "crossCorp":false,\n            "nodeId":"FLOW:1929857819:80920352",        //\u8282\u70b9ID\uff0c\u7b49\u4e8e\u51fa\u7ad9\u6d88\u606f\u7684\u201c\u8282\u70b9ID\u201d\uff08nodeId\uff09\n            "nodeName":"\u51fa\u7eb3\u652f\u4ed8",                      //\u8282\u70b9\u540d\u79f0\n            "action":null,                              //\u5df2\u529e\u52a8\u4f5c\uff0c\u5f85\u529e\u65f6\u8fd4\u56de null \n            "isUrgent":false\n        },\n        {\n            "pipeline":1,\n            "grayver":"9.10.0.0:A",\n            "id":"ID_3zE4PGk2Lrw",\n            "version":2,\n            "active":true,\n            "createTime":1645692653852,\n            "updateTime":1645692654197,\n            "corporationId":"bwa3wajigF0WH0",\n            "sourceCorporationId":null,\n            "dataCorporationId":null,\n            "ownerId":"ebot",\n            "flowId":"ID_3zE5G_0bRw0",\n            "logId":1,\n            "type":"expense",\n            "state":"PROCESSED",\n            "remindEndTime":0,\n            "rejectEndTime":0,\n            "autoApproveType":null,\n            "rejectAlert":false,\n            "addCountReport":false,\n            "crossCorp":false,\n            "nodeId":"FLOW:447576403:261660833",\n            "nodeName":"\u8d39\u7528\u6807\u51c6\u68c0\u67e5",\n            "action":"freeflow.submit",        //\u5df2\u529e\u52a8\u4f5c\n            "isUrgent":false\n        },\n        {\n            "pipeline":1,\n            "grayver":"9.10.0.0:A",\n            "id":"ID_3zE5G_0cmw0",\n            "version":2,\n            "active":true,\n            "createTime":1645692654205,\n            "updateTime":1645692663330,\n            "corporationId":"bwa3wajigF0WH0",\n            "sourceCorporationId":null,\n            "dataCorporationId":null,\n            "ownerId":"bwa3wajigF0WH0:ID_3lokDfb1p5w",\n            "flowId":"ID_3zE5G_0bRw0",\n            "logId":1,\n            "type":"expense",\n            "state":"PROCESSED",\n            "remindEndTime":0,\n            "rejectEndTime":0,\n            "autoApproveType":"NONE",\n            "rejectAlert":false,\n            "addCountReport":true,\n            "crossCorp":false,\n            "nodeId":"FLOW:329509645:1805752558",\n            "nodeName":"\u4e3b\u7ba1\u5ba1\u6279",\n            "action":"freeflow.agree",          //\u5df2\u529e\u52a8\u4f5c\n            "isUrgent":false\n        },\n        {\n            "pipeline":1,\n            "grayver":"9.10.0.0:A",\n            "id":"ID_3zE5G_0diw0",\n            "version":2,\n            "active":true,\n            "createTime":1645692663340,\n            "updateTime":1645692671476,\n            "corporationId":"bwa3wajigF0WH0",\n            "sourceCorporationId":null,\n            "dataCorporationId":null,\n            "ownerId":"bwa3wajigF0WH0:ID_3lokDfb1p5w",\n            "flowId":"ID_3zE5G_0bRw0",\n            "logId":2,\n            "type":"expense",\n            "state":"PROCESSED",\n            "remindEndTime":0,\n            "rejectEndTime":0,\n            "autoApproveType":"NONE",\n            "rejectAlert":false,\n            "addCountReport":true,\n            "crossCorp":false,\n            "nodeId":"FLOW:784050093:1182764294",\n            "nodeName":"\u603b\u7ecf\u7406\u5ba1\u6279",\n            "action":"freeflow.agree",          //\u5df2\u529e\u52a8\u4f5c\n            "isUrgent":false\n        },\n        {\n            "pipeline":1,\n            "grayver":"9.10.0.0:A",\n            "id":"ID_3zE5G_0dsw0",\n            "version":2,\n            "active":true,\n            "createTime":1645692671487,\n            "updateTime":1645692678748,\n            "corporationId":"bwa3wajigF0WH0",\n            "sourceCorporationId":null,\n            "dataCorporationId":null,\n            "ownerId":"bwa3wajigF0WH0:ID_3lokDfb1p5w",\n            "flowId":"ID_3zE5G_0bRw0",\n            "logId":3,\n            "type":"expense",\n            "state":"PROCESSED",\n            "remindEndTime":0,\n            "rejectEndTime":0,\n            "autoApproveType":"NONE",\n            "rejectAlert":false,\n            "addCountReport":true,\n            "crossCorp":false,\n            "nodeId":"FLOW:452403684:1743733109",\n            "nodeName":"\u8d22\u52a1\u590d\u6838",\n            "action":"freeflow.agree",          //\u5df2\u529e\u52a8\u4f5c\n            "isUrgent":false\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"\u6240\u67e5\u5355\u636eID\u4e3a\u8349\u7a3f\u72b6\u6001\u65f6\uff0c\u8fd4\u56de\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 0,\n    "items": []\n}\n')),(0,o.kt)("h3",{id:"\u4efb\u52a1\u72b6\u6001state\u53c2\u6570\u4ecb\u7ecd"},"\u4efb\u52a1\u72b6\u6001(",(0,o.kt)("inlineCode",{parentName:"h3"},"state"),")\u53c2\u6570\u4ecb\u7ecd"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"APPROVING")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5f85\u5ba1\u6279")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"PAYING")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5f85\u652f\u4ed8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"PROCESSING")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5904\u7406\u4e2d\uff08\u652f\u4ed8\u4e2d\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"PROCESSED")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5df2\u5904\u7406\uff08\u5ba1\u6279\u5b8c\u6210\u3001\u5df2\u652f\u4ed8\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"CANCELED")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5f85\u529e\u88ab\u53d6\u6d88\u3002\u5e38\u89c1\u573a\u666f\u5982\u4e0b\uff1a",(0,o.kt)("br",null),"\u2003","- \u5355\u636e\u88ab\u64a4\u56de",(0,o.kt)("br",null),"\u2003","- A\u5f85\u529e\u8f6c\u4ea4\u7ed9B\uff0cA\u7684\u5f85\u529e\u88ab\u53d6\u6d88",(0,o.kt)("br",null),"\u2003","- \u4f1a\u7b7e\u8282\u70b9\uff08\u4e00\u4eba\u5ba1\u6279\u901a\u8fc7\u8282\u70b9\u5b8c\u6210\uff09\uff0c\u4e00\u4eba\u5ba1\u6279\u540e\uff0c\u5176\u4f59\u4f1a\u7b7e\u4eba\u5458\u5f85\u529e\u88ab\u53d6\u6d88")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"SENDING")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5f85\u5bc4\u9001")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"RECEIVING")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5f85\u6536\u5355")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"RECEIVING_EXCEP")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6536\u5355\u5f02\u5e38")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"REQUISITION_PAID")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u4e34\u65f6\u72b6\u6001\uff08\u7533\u8bf7\u5355\u652f\u4ed8\u65f6\u6d88\u606f\u53d1\u9001\uff09")))),(0,o.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"400")),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Error 400 Bad Request"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u4ee3\u7801\u5904\u7406\u672a\u83b7\u53d6\u5230\u552f\u4e00 ",(0,o.kt)("inlineCode",{parentName:"td"},"action"),"\uff08\u5ba1\u6279\u52a8\u4f5c\uff09\uff0c\u6b64\u95ee\u9898\u8bf7\u53cd\u9988\u5408\u601d\u6280\u672f\u4eba\u5458")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"412")),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636e\u4e0d\u5b58\u5728"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"td"},"flowId"),"\uff08\u5355\u636eID\uff09\u662f\u5426\u5b58\u5728")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"412")),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636e\u5df2\u5220\u9664"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u5bf9\u5e94\u5355\u636e\u662f\u5426\u5df2\u5220\u9664")))))}k.isMDXComponent=!0}}]);