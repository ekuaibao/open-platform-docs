"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88280],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,c=m["".concat(d,".").concat(u)]||m[u]||f[u]||o;return t?a.createElement(c,l(l({ref:n},p),{},{components:t})):a.createElement(c,l({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41627:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},o=function(e){var n=e.method,t=e.url,o=e.description,l=t.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[n]},a.createElement("span",{className:r.method},n),a.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),o&&a.createElement("small",null,o))}},37180:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return f},default:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=t(41627),i=["components"],d={slug:"get-approve",title:"\u6839\u636e\u5458\u5de5ID\u83b7\u53d6\u5f85\u5ba1\u6279\u5355\u636e(\u5e9f\u5f03)",authors:["\u51af\u7ee7\u6210"]},s="~~\u6839\u636e\u5458\u5de5ID\u83b7\u53d6\u5f85\u5ba1\u6279\u5355\u636e~~",p={unversionedId:"open-api/flows/get-approve",id:"version-v2.1/open-api/flows/get-approve",title:"\u6839\u636e\u5458\u5de5ID\u83b7\u53d6\u5f85\u5ba1\u6279\u5355\u636e(\u5e9f\u5f03)",description:"<Control",source:"@site/versioned_docs/version-v2.1/open-api/flows/get-approve.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/get-approve",permalink:"/docs/v2.1/open-api/flows/get-approve",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/flows/get-approve.md",tags:[],version:"v2.1",frontMatter:{slug:"get-approve",title:"\u6839\u636e\u5458\u5de5ID\u83b7\u53d6\u5f85\u5ba1\u6279\u5355\u636e(\u5e9f\u5f03)",authors:["\u51af\u7ee7\u6210"]}},f=[{value:"Path Parameters",id:"path-parameters",children:[{value:"Query Parameters:",id:"query-parameters",children:[],level:4}],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],m={toc:f};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6839\u636e\u5458\u5de5id\u83b7\u53d6\u5f85\u5ba1\u6279\u5355\u636e"},(0,o.kt)("del",{parentName:"h1"},"\u6839\u636e\u5458\u5de5ID\u83b7\u53d6\u5f85\u5ba1\u6279\u5355\u636e")),(0,o.kt)(l.Z,{method:"GET",url:"/api/openapi/v1/docs/byApproverId/$`approverId`",mdxType:"Control"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,o.kt)("div",null,(0,o.kt)("p",null,"  ",(0,o.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#160"},(0,o.kt)("strong",{parentName:"a"},"1.6.0"))," -> \u274c \u63a5\u53e3\u5e9f\u5f03\u3002",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#141"},(0,o.kt)("strong",{parentName:"a"},"1.4.1"))," -> \ud83d\udc1e \u4f18\u5316\u4e86\u63a5\u53e3 ",(0,o.kt)("strong",{parentName:"p"},"HTTP 500")," \u9519\u8bef\uff0c\u66f4\u65b0\u63a5\u53e3 ",(0,o.kt)("strong",{parentName:"p"},"\u5931\u8d25\u54cd\u5e94")," \u793a\u4f8b\u3002",(0,o.kt)("br",null)))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u63a8\u8350\u4f7f\u7528\uff0c\u63a5\u53e3\u5e9f\u5f03\uff0c\u4e0d\u518d\u66f4\u65b0\u7ef4\u62a4\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528\u3010",(0,o.kt)("a",{parentName:"li",href:"/docs/open-api/flows/get-approve-new"},"\u6839\u636e\u5458\u5de5ID\u83b7\u53d6\u5f85\u5ba1\u6279\u5355\u636e(\u65b0)"),"\u3011\u63a5\u53e3\u3002")))),(0,o.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"approverId")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5ID"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-staff-ids"},"\u67e5\u8be2\u5458\u5de5")," \u83b7\u53d6")))),(0,o.kt)("h4",{id:"query-parameters"},"Query Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"accessToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"powerCode")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u529f\u80fd\u6388\u6743\u7801"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"219902")," : \u5f00\u653e\u63a5\u53e3 ","\u2003"," ",(0,o.kt)("inlineCode",{parentName:"td"},"219904")," : \u5f00\u653e\u63a5\u53e3(\u65b0)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"index")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5206\u9875\u67e5\u8be2\u7684\u8d77\u59cb\u503c"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8d77\u59cb\u503c\u4ece ",(0,o.kt)("inlineCode",{parentName:"td"},"0")," \u5f00\u59cb")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"count")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u6570\u636e\u6761\u6570"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u4e0d\u80fd\u8d85\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"td"},"100"))))),(0,o.kt)("h2",{id:"curl"},"CURL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/docs/byApproverId/$gwobfjObAAno00:KpIbfkxLiU7800?accessToken=cWEbn1cA0kjU00&index=0&count=10&powerCode=219902'\n")),(0,o.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,o.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/v2.1/open-api/flows/get-forms-sequences-ids"},"\u6839\u636e\u5355\u636eID\u96c6\u5408\u83b7\u53d6\u5355\u636e\u5217\u8868"),"\u8fd4\u56de\u4fe1\u606f\uff0c\u5355\u636e\u6570\u636e\u7ed3\u6784\u662f\u4e00\u6837\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items":[\n        {\n            "type":"loan",\n            "id":"ID_3sJUVscs$_w",                      //\u5355\u636eID \u5bf9\u5e94\u5176\u4ed6api\u7684flowId\n            "corporationId":"PCx3rwm3aA00qM",           //\u4f01\u4e1aID\n            "ownerId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",  //\u5355\u636e\u63d0\u4ea4\u4ebaID\n            "dataType":"loan",\n            "remark":"333",                             //\u5907\u6ce8\n            "title":"111111",                           //\u6807\u9898\n            "updateTime":1638273586023,                 //\u66f4\u65b0\u65e5\u671f\u65f6\u95f4\u6233\n            "specificationId":"ID_3rwlFm525WM:783fa301dc70ce4040d2b913be214ac09f58121a",  //\u6a21\u677fID\n            "owner":{                                   //\u63d0\u4ea4\u4eba\u4fe1\u606f\n                "id":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",   //\u5458\u5de5ID\n                "name":"\u5f20\u56fd\u9633",                        //\u59d3\u540d  \n                "departments":[                        //\u6240\u5c5e\u90e8\u95e8\u4fe1\u606f\n                    {\n                        "id":"PCx3rwm3aA00qM",\n                        "name":"\u6d2a\u6d1e\u5927\u69d0\u6811",\n                        "code":""\n                    }\n                ],\n                "code":""\n            },\n            "department":{              //\u62a5\u9500\u90e8\u95e8\u4fe1\u606f\n                "id":"PCx3rwm3aA00qM",\n                "name":"\u6d2a\u6d1e\u5927\u69d0\u6811",\n                "code":""\n            },\n            "code":"J21000002",         //\u5355\u636ecode\n            "userProps":{               //\u5355\u636e\u5b57\u6bb5\u4fe1\u606f\n                "specificationId":{\n                    "id":"ID_3rwlFm525WM:783fa301dc70ce4040d2b913be214ac09f58121a",\n                    "code":"",\n                    "name":"\u4e2a\u4eba\u501f\u6b3e\u5355"\n                },\n                "submitterId":{\n                    "id":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                    "code":"00000",\n                    "name":"\u5f20\u56fd\u9633"\n                },\n                "loanDepartment":{\n                    "id":"PCx3rwm3aA00qM",\n                    "code":"000",\n                    "name":"\u6d2a\u6d1e\u5927\u69d0\u6811"\n                },\n                "payeeId":{\n                    "id":"ID_3s4PKc13U$g",\n                    "code":"",\n                    "name":"\u6d4b\u8bd5\u8d26\u6237"\n                },\n                "description":"333",\n                "attachments":[]\n            },\n            "state":"APPROVING",  //\u5355\u636e\u72b6\u6001\n            "project":null,       //\u9879\u76ee\u4fe1\u606f\n            "logs":[              //\u5ba1\u6279\u65e5\u5fd7\n                {\n                    "isNew":false,\n                    "corporationId":"PCx3rwm3aA00qM",\n                    "docDataCode":"J21000002",\n                    "time":1638272215864,\n                    "state":"approving",\n                    "action":"freeflow.submit",\n                    "operatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                    "nodeName":"SUBMIT",\n                    "nodeId":"SUBMIT",\n                    "nextNodeId":"FLOW:798772639:426695814",\n                    "nextOperatorId":"ebot",\n                    "logid":"ID_3sJWS7K0hpw",\n                    "attachments":[],\n                    "attributes":{\n                        "nextId":"FLOW:798772639:426695814",\n                        "nodeId":"SUBMIT",\n                        "comment":"",\n                        "isUrgent":false,\n                        "nextName":"\u8d39\u7528\u6807\u51c6\u68c0\u67e5",\n                        "urgentReason":null,\n                        "resubmitMethod":"FROM_START",\n                        "nextCounterSign":false,\n                        "sensitiveContent":null,\n                        "resubmitOperatorIds":[]\n                    }\n                },\n                {\n                    "isNew":false,\n                    "corporationId":"PCx3rwm3aA00qM",\n                    "docDataCode":"J21000002",\n                    "time":1638272708533,\n                    "state":"rejected",\n                    "action":"freeflow.reject",\n                    "operatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                    "nodeName":"",\n                    "nodeId":"FLOW:483550292:96796672",\n                    "nextNodeId":"null",\n                    "nextOperatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                    "logid":"ID_3sJWS7K0ipw",\n                    "attachments":[],\n                    "attributes":{\n                        "isAuto":false,\n                        "nextId":null,\n                        "nodeId":"FLOW:483550292:96796672",\n                        "comment":"11",\n                        "nodeName":"\u63d0\u4ea4\u4eba",\n                        "isEbotNode":false,\n                        "isStaffExit":false,\n                        "resubmitMethod":"TO_REJECTOR",\n                        "isCostControlCheck":false\n                    }\n                },\n                {\n                    "isNew":false,\n                    "corporationId":"PCx3rwm3aA00qM",\n                    "docDataCode":"J21000002",\n                    "time":1638272858038,\n                    "state":"approving",\n                    "action":"freeflow.submit",\n                    "operatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                    "nodeName":"SUBMIT",\n                    "nodeId":"SUBMIT",\n                    "nextNodeId":"FLOW:798772639:426695814",\n                    "nextOperatorId":"ebot",\n                    "logid":"ID_3sJWS7K0jpw",\n                    "attachments":[],\n                    "attributes":{\n                        "nextId":"FLOW:798772639:426695814",\n                        "nodeId":"SUBMIT",\n                        "comment":"\u5bf9\u300c\u51ed\u8bc1\u72b6\u6001\u300d\uff0c\u8fdb\u884c\u4e86\u4fee\u6539\uff0c\u8bf7\u6ce8\u610f\uff01",\n                        "isUrgent":false,\n                        "nextName":"\u8d39\u7528\u6807\u51c6\u68c0\u67e5",\n                        "urgentReason":null,\n                        "resubmitMethod":"TO_REJECTOR",\n                        "nextCounterSign":false,\n                        "sensitiveContent":null,\n                        "resubmitOperatorIds":[\n                            "PCx3rwm3aA00qM:VWf3rvZHCb0ghM"\n                        ]\n                    }\n                },\n                {\n                    "isNew":false,\n                    "corporationId":"PCx3rwm3aA00qM",\n                    "docDataCode":"J21000002",\n                    "time":1638273200580,\n                    "state":"rejected",\n                    "action":"freeflow.reject",\n                    "operatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                    "nodeName":"",\n                    "nodeId":"FLOW:483550292:96796672",\n                    "nextNodeId":"null",\n                    "nextOperatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                    "logid":"ID_3sJWS7K0kpw",\n                    "attachments":[],\n                    "attributes":{\n                        "isAuto":false,\n                        "nextId":null,\n                        "nodeId":"FLOW:483550292:96796672",\n                        "comment":"1112",\n                        "nodeName":"\u63d0\u4ea4\u4eba",\n                        "isEbotNode":false,\n                        "isStaffExit":false,\n                        "resubmitMethod":"FROM_START",\n                        "isCostControlCheck":false\n                    }\n                },\n                {\n                    "isNew":false,\n                    "corporationId":"PCx3rwm3aA00qM",\n                    "docDataCode":"J21000002",\n                    "time":1638273431095,\n                    "state":"approving",\n                    "action":"freeflow.submit",\n                    "operatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                    "nodeName":"SUBMIT",\n                    "nodeId":"SUBMIT",\n                    "nextNodeId":"FLOW:644696586:109364268",\n                    "nextOperatorId":"ebot",\n                    "logid":"ID_3th9UoH0Xrg",\n                    "attachments":[],\n                    "attributes":{\n                        "nextId":"FLOW:644696586:109364268",\n                        "nodeId":"SUBMIT",\n                        "comment":"",\n                        "isUrgent":false,\n                        "nextName":"\u8d39\u7528\u6807\u51c6\u68c0\u67e5",\n                        "urgentReason":null,\n                        "resubmitMethod":"FROM_START",\n                        "nextCounterSign":false,\n                        "sensitiveContent":null,\n                        "resubmitOperatorIds":[]\n                    }\n                },\n                {\n                    "isNew":false,\n                    "corporationId":"PCx3rwm3aA00qM",\n                    "docDataCode":"J21000002",\n                    "time":1638273586023,\n                    "state":"approving",\n                    "action":"freeflow.agree",\n                    "operatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                    "nodeName":"\u4e3b\u7ba1\u5ba1\u6279",\n                    "nodeId":"FLOW:1061893438:772150319",\n                    "nextNodeId":"FLOW:1764849392:458464952",\n                    "nextOperatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                    "logid":"ID_3th9UoH0Yrg",\n                    "attachments":[],\n                    "attributes":{\n                        "nextId":"FLOW:1764849392:458464952",\n                        "nodeId":"FLOW:1061893438:772150319",\n                        "comment":"\u540c\u610f",\n                        "complete":true,\n                        "nextName":"\u603b\u7ecf\u7406\u5ba1\u6279",\n                        "nodeName":"\u4e3b\u7ba1\u5ba1\u6279",\n                        "expressNum":null,\n                        "isEbotNode":false,\n                        "counterSign":false,\n                        "isRecalNode":false,\n                        "oldFlowPlanId":null,\n                        "nextCounterSign":false,\n                        "autographImageId":null\n                    }\n                }\n            ],\n            "flowPlan":{    //\u5ba1\u6279\u8ba1\u5212\n                "pipeline":1,\n                "grayver":"9.7.0.0:A",\n                "id":"ID_3sJUVscs$_w",\n                "version":6,\n                "active":true,\n                "createTime":1638273430336,\n                "updateTime":1638273585966,\n                "corporationId":"PCx3rwm3aA00qM",\n                "sourceCorporationId":null,\n                "dataCorporationId":null,\n                "prevId":"FLOW:1061893438:772150319",\n                "nextNodeId":null,\n                "taskId":"FLOW:1764849392:458464952",\n                "ownerId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                "submitterId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                "flowPlanConfigId":"ID_3rwlFm51JWM",\n                "submitNode":{\n                    "id":"SUBMIT",\n                    "nextId":"SUBMIT",\n                    "nextApproverIds":null,\n                    "ownerId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                    "carbonCopy":[],\n                    "urgent":null,\n                    "isSensitive":null,\n                    "isRequired":null,\n                    "submitOutboundMessage":null,\n                    "hidePrintBtnDependOnRemind":null,\n                    "budgetCalcTime":null,\n                    "isAllowWithdraw":null\n                },\n                "nodes":[\n                    {\n                        "type":"ebot",\n                        "id":"FLOW:644696586:109364268",\n                        "configNodeId":"ID_3rwlFm51KWM",\n                        "name":"\u8d39\u7528\u6807\u51c6\u68c0\u67e5",\n                        "label":null,\n                        "skippedType":"NO_SKIPPED",\n                        "agreeType":"NO_AUTO_AGREE",\n                        "conditionalDescription":null,\n                        "conditionalType":null,\n                        "skipWhenApproverNonMatched":false,\n                        "autoAgreeWhenApproverRepeated":false,\n                        "autoAgreeWhenApproverSameAsSubmitter":false,\n                        "removeDefaultHistoryApprover":false,\n                        "autoAgreeWhenCreditInsepction":false,\n                        "creditNoteAvailable":false,\n                        "allowModify":true,\n                        "config":{\n                            "isAuto":false\n                        },\n                        "isAllStaffs":false,\n                        "carbonCopy":[],\n                        "timeCount":null,\n                        "addCountReport":false,\n                        "isAddNode":false,\n                        "autoRemindPrint":false,\n                        "beforeRemindPrint":false,\n                        "allowModifyApprover":false,\n                        "expressConfig":null,\n                        "commentWhenFlowHasRisk":false,\n                        "forbidBatchApproveRiskFlow":false,\n                        "condition":null,\n                        "laterCalcReason":null,\n                        "forbidBeforeAddNode":false,\n                        "forbidAftAddNode":false,\n                        "forbidShiftNode":false,\n                        "crossCorpNode":false,\n                        "rejectSetting":null,\n                        "ebotConfig":{\n                            "type":"costControlCheck",\n                            "setting":{\n                                "controlIds":[],\n                                "isOutOfLimitReject":false\n                            }\n                        },\n                        "approveType":"NONE"\n                    },\n                    {\n                        "type":"normal",\n                        "id":"FLOW:1061893438:772150319",\n                        "configNodeId":"ID_3rwlFm51LWM",\n                        "name":"\u4e3b\u7ba1\u5ba1\u6279",\n                        "label":null,\n                        "skippedType":"NO_SKIPPED",\n                        "agreeType":"NO_AUTO_AGREE",\n                        "conditionalDescription":null,\n                        "conditionalType":null,\n                        "skipWhenApproverNonMatched":true,\n                        "autoAgreeWhenApproverRepeated":false,\n                        "autoAgreeWhenApproverSameAsSubmitter":false,\n                        "removeDefaultHistoryApprover":false,\n                        "autoAgreeWhenCreditInsepction":false,\n                        "creditNoteAvailable":false,\n                        "allowModify":false,\n                        "config":{\n                            "isAuto":false,\n                            "isSubmitterChoice":false\n                        },\n                        "isAllStaffs":true,\n                        "carbonCopy":[],\n                        "timeCount":null,\n                        "addCountReport":true,\n                        "isAddNode":false,\n                        "autoRemindPrint":false,\n                        "beforeRemindPrint":false,\n                        "allowModifyApprover":false,\n                        "expressConfig":null,\n                        "commentWhenFlowHasRisk":false,\n                        "forbidBatchApproveRiskFlow":false,\n                        "condition":null,\n                        "laterCalcReason":null,\n                        "forbidBeforeAddNode":false,\n                        "forbidAftAddNode":false,\n                        "forbidShiftNode":false,\n                        "crossCorpNode":false,\n                        "rejectSetting":null,\n                        "staffIds":[],\n                        "approverId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                        "forbidRejectNode":false,\n                        "approveType":"NONE"\n                    },\n                    {\n                        "type":"normal",\n                        "id":"FLOW:1764849392:458464952",\n                        "configNodeId":"ID_3rwlFm51MWM",\n                        "name":"\u603b\u7ecf\u7406\u5ba1\u6279",\n                        "label":null,\n                        "skippedType":"NO_SKIPPED",\n                        "agreeType":"NO_AUTO_AGREE",\n                        "conditionalDescription":null,\n                        "conditionalType":null,\n                        "skipWhenApproverNonMatched":true,\n                        "autoAgreeWhenApproverRepeated":false,\n                        "autoAgreeWhenApproverSameAsSubmitter":false,\n                        "removeDefaultHistoryApprover":false,\n                        "autoAgreeWhenCreditInsepction":false,\n                        "creditNoteAvailable":false,\n                        "allowModify":false,\n                        "config":{\n                            "isAuto":false,\n                            "isSubmitterChoice":false\n                        },\n                        "isAllStaffs":true,\n                        "carbonCopy":[],\n                        "timeCount":null,\n                        "addCountReport":true,\n                        "isAddNode":false,\n                        "autoRemindPrint":false,\n                        "beforeRemindPrint":false,\n                        "allowModifyApprover":false,\n                        "expressConfig":null,\n                        "commentWhenFlowHasRisk":false,\n                        "forbidBatchApproveRiskFlow":false,\n                        "condition":null,\n                        "laterCalcReason":null,\n                        "forbidBeforeAddNode":false,\n                        "forbidAftAddNode":false,\n                        "forbidShiftNode":false,\n                        "crossCorpNode":false,\n                        "rejectSetting":null,\n                        "staffIds":[],\n                        "approverId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                        "forbidRejectNode":false,\n                        "approveType":"NONE"\n                    },\n                    {\n                        "type":"normal",\n                        "id":"FLOW:37322208:1039255624",\n                        "configNodeId":"ID_3rwlFm51NWM",\n                        "name":"\u8d22\u52a1\u590d\u6838",\n                        "label":null,\n                        "skippedType":"NO_SKIPPED",\n                        "agreeType":"NO_AUTO_AGREE",\n                        "conditionalDescription":null,\n                        "conditionalType":null,\n                        "skipWhenApproverNonMatched":true,\n                        "autoAgreeWhenApproverRepeated":false,\n                        "autoAgreeWhenApproverSameAsSubmitter":false,\n                        "removeDefaultHistoryApprover":false,\n                        "autoAgreeWhenCreditInsepction":false,\n                        "creditNoteAvailable":false,\n                        "allowModify":false,\n                        "config":{\n                            "isAuto":false,\n                            "isSubmitterChoice":false\n                        },\n                        "isAllStaffs":true,\n                        "carbonCopy":[],\n                        "timeCount":null,\n                        "addCountReport":true,\n                        "isAddNode":false,\n                        "autoRemindPrint":false,\n                        "beforeRemindPrint":false,\n                        "allowModifyApprover":false,\n                        "expressConfig":null,\n                        "commentWhenFlowHasRisk":false,\n                        "forbidBatchApproveRiskFlow":false,\n                        "condition":null,\n                        "laterCalcReason":null,\n                        "forbidBeforeAddNode":false,\n                        "forbidAftAddNode":false,\n                        "forbidShiftNode":false,\n                        "crossCorpNode":false,\n                        "rejectSetting":null,\n                        "staffIds":[],\n                        "approverId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                        "forbidRejectNode":false,\n                        "approveType":"NONE"\n                    },\n                    {\n                        "type":"normal",\n                        "id":"FLOW:1388497113:849775802",\n                        "configNodeId":"ID_3rwlFm51OWM",\n                        "name":"\u51fa\u7eb3\u652f\u4ed8",\n                        "label":null,\n                        "skippedType":"NO_SKIPPED",\n                        "agreeType":"NO_AUTO_AGREE",\n                        "conditionalDescription":null,\n                        "conditionalType":null,\n                        "skipWhenApproverNonMatched":false,\n                        "autoAgreeWhenApproverRepeated":false,\n                        "autoAgreeWhenApproverSameAsSubmitter":false,\n                        "removeDefaultHistoryApprover":false,\n                        "autoAgreeWhenCreditInsepction":false,\n                        "creditNoteAvailable":false,\n                        "allowModify":false,\n                        "config":{\n                            "isAuto":false,\n                            "isSubmitterChoice":false\n                        },\n                        "isAllStaffs":true,\n                        "carbonCopy":[],\n                        "timeCount":null,\n                        "addCountReport":true,\n                        "isAddNode":false,\n                        "autoRemindPrint":false,\n                        "beforeRemindPrint":false,\n                        "allowModifyApprover":false,\n                        "expressConfig":null,\n                        "commentWhenFlowHasRisk":false,\n                        "forbidBatchApproveRiskFlow":false,\n                        "condition":null,\n                        "laterCalcReason":null,\n                        "forbidBeforeAddNode":false,\n                        "forbidAftAddNode":false,\n                        "forbidShiftNode":false,\n                        "crossCorpNode":false,\n                        "rejectSetting":null,\n                        "staffIds":[],\n                        "approverId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",\n                        "forbidRejectNode":false,\n                        "approveType":"NONE"\n                    }\n                ],\n                "resubmitMethod":"TO_NEXTNODE",\n                "configVersion":1,\n                "hasCrossCorpNode":false\n            },\n            "payeeDate":1638272160000,\n            "money":33333,\n            "money_standardStrCode":"CNY",\n            "money_standardNumCode":"156",\n            "money_standardSymbol":"\xa5",\n            "money_standardUnit":"\u5143",\n            "money_rate":null,\n            "money_foreignStrCode":null,\n            "money_foreignNumCode":null,\n            "money_foreign":null,\n            "money_foreignSymbol":null,\n            "money_foreignUnit":null,\n            "payeeInfo":{   //\u6536\u6b3e\u4eba\u4fe1\u606f\n                "sort":"BANK",\n                "name":"\u6d4b\u8bd5\u8d26\u6237",\n                "cardNo":"6228485558282223333",\n                "bank":"\u5546\u4e1a\u94f6\u884c",\n                "branch":"\u5317\u4eac\u94f6\u884c\u660c\u5e73\u652f\u884c",\n                "type":"PERSONAL",\n                "province":"\u5317\u4eac\u5e02",\n                "city":"\u5317\u4eac\u5e02",\n                "certificateType":"01",\n                "certificateNo":"142615199711116666",\n                "bankLinkNo":"313100001145",\n                "bankName":"",\n                "swiftCode":"",\n                "bankCode":"",\n                "branchCode":"",\n                "remark":"\u6d4b\u8bd5\u8d26\u6237"\n            },\n            "payorId":"ID_3s4PKc13U$g",\n            "paymentChannel":null,\n            "paymentAccountId":null,\n            "payTime":null,\n            "repaymentDate":1640864160000,\n            "channelTradeNo":null,\n            "receiptState":"",\n            "paymentAccount":null\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 400,\n    "errorMessage": "\u4e0d\u5141\u8bb8\u8bbf\u95ee",  //\u68c0\u67e5\u5458\u5de5ID\u662f\u5426\u5c5e\u4e8e\u6b64\u516c\u53f8\u7684\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')),(0,o.kt)("p",null,"\u5f53\u67d0\u4e2a\u5355\u636e\u4e2d\u6709\u5f15\u7528\u7684\u6570\u636e\u88ab\u7269\u7406\u5220\u9664\u65f6\uff08\u6570\u636e\u5e93\u4e2d\u4e0d\u5b58\u5728\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"/docs/open-api/flows/update-form"},"\u66f4\u65b0\u5355\u636e")," \u6e05\u7406\u810f\u6570\u636e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 400,\n    "errorMessage": "\u83b7\u53d6\u5f85\u5ba1\u6279\u5355\u636e\u5f02\u5e38\uff1a\u627e\u4e0d\u5230\u4f9d\u8d56\u7684\u5b9e\u4f53\uff1aID_3EnD3w6uTe0",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')))}u.isMDXComponent=!0}}]);