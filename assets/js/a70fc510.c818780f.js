"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92043],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=d(n),c=r,u=f["".concat(i,".").concat(c)]||f[c]||m[c]||l;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var t=e.method,n=e.url,l=e.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[t]},a.createElement("span",{className:r.method},t),a.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&a.createElement("small",null,l))}},55668:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(41627),p=["components"],i={},d="\u83b7\u53d6\u6d41\u7a0b\u5b9e\u4f8b",s={unversionedId:"open-api/flows/get-flow",id:"version-v2.1/open-api/flows/get-flow",title:"\u83b7\u53d6\u6d41\u7a0b\u5b9e\u4f8b",description:"\u6839\u636e\u5355\u636eID\u83b7\u53d6\u5ba1\u6279\u6d41\u7684\u6d41\u7a0b\u5b9e\u4f8b\uff0c\u5373\u5355\u636e\u6a21\u677f\u7684\u5ba1\u6279\u6d41\u8bbe\u7f6e\uff0c\u8fd4\u56de\u5bf9\u5e94\u5ba1\u6279\u6d41\u6240\u6709\u8282\u70b9\u7684\u5185\u5bb9\u8be6\u60c5\u3002",source:"@site/versioned_docs/version-v2.1/open-api/flows/get-flow.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/get-flow",permalink:"/docs/v2.1/open-api/flows/get-flow",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/flows/get-flow.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u5355\u636e",permalink:"/docs/v2.1/open-api/flows/update-form"},next:{title:"\u63d0\u4ea4\u5355\u636e",permalink:"/docs/v2.1/open-api/flows/flow-and-submit"}},m=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],f={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6\u6d41\u7a0b\u5b9e\u4f8b"},"\u83b7\u53d6\u6d41\u7a0b\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u6839\u636e\u5355\u636eID\u83b7\u53d6\u5ba1\u6279\u6d41\u7684\u6d41\u7a0b\u5b9e\u4f8b\uff0c\u5373\u5355\u636e\u6a21\u677f\u7684\u5ba1\u6279\u6d41\u8bbe\u7f6e\uff0c\u8fd4\u56de\u5bf9\u5e94\u5ba1\u6279\u6d41\u6240\u6709\u8282\u70b9\u7684\u5185\u5bb9\u8be6\u60c5\u3002"),(0,l.kt)(o.Z,{method:"GET",url:"/api/openapi/v2/flow/plan/computed/$`flowId`",mdxType:"Control"}),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u6709\u5355\u636e\u5904\u4e8e\u672a\u63d0\u4ea4\u7684\u60c5\u51b5\u4e0b\uff08",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"draft")," \u8349\u7a3f")," \u548c ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"rejected")," \u5df2\u9a73\u56de")," \u72b6\u6001\uff09\u624d\u80fd\u83b7\u53d6\u5ba1\u6279\u6d41\u5b9e\u4f8b\uff0c\u5426\u5219\u63d0\u793a\u6ca1\u6709\u6743\u9650\u83b7\u53d6\u8be5\u5355\u636e\u7684\u6d41\u7a0b\u5b9e\u4f8b\u3002")))),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"flowId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636eID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/flows/question-answer#%E9%97%AE%E9%A2%98%E4%B8%80"},"\u5355\u636eID\u83b7\u53d6\u65b9\u5f0f"))))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/flow/plan/computed/$PQIbuN0nmYc800?accessToken=UvsbtOEHTsk000'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "id":"oYo9niZxz4po00",                 //\u6d41\u7a0b\u5b9e\u4f8bID\n        "flowId": "oYo9niZxz4po00",            //\u5355\u636eID\n        "flowPlanConfigId": "dcI9lCDmlg1Y00",  //\u6d41\u7a0b\u914d\u7f6eID\n        "node": [                              //\u6d41\u7a0b\u8282\u70b9\n            {\n                "id":"",                       //\u8282\u70b9ID\uff0c\u5f53\u5355\u636e\u63d0\u4ea4\u4e4b\u540e\u5c31\u4f1a\u751f\u6210\u5bf9\u5e94\u7684\u5e94\u7528\u8282\u70b9ID\n                "configNodeId": "0XQ9lCDmlg2000",//\u8282\u70b9\u6a21\u7248\u8282\u70b9ID\n                "name": "\u8d39\u7528\u6807\u51c6\u68c0\u67e5",           //\u8282\u70b9\u540d\u79f0\n                "skippedType": "NO_SKIPPED",     //\u8df3\u8fc7\u7c7b\u578b\u3010\u4e0d\u8df3\u8fc7\uff1aNO_SKIPPED,\u5339\u914d\u4e0d\u5230\u5ba1\u6279\u4eba\uff1aAPPROVER_NOT_FOUND,\u901a\u8fc7\u89d2\u8272\u6216\u90e8\u95e8\u4e3b\u7ba1\u5339\u914d\u4e0d\u5230\u5ba1\u6279\u4eba\uff1aAPPROVER_NOT_FOUND_BY_ROLE,\u4e0d\u5177\u6709\u8be5\u8282\u70b9\u80fd\u529b\uff1aNO_ABILITY\u3011\n                "agreeType": "NO_AUTO_AGREE",    //\u81ea\u52a8\u540c\u610f\u7c7b\u578b\u3010\u4e0d\u81ea\u52a8\u540c\u610f\uff1aNO_AUTO_AGREE,\u81ea\u52a8\u540c\u610f\u5931\u8d25\uff1aFAILED_AUTO_AGREE,\u5ba1\u6279\u4eba\u4e0e\u63d0\u4ea4\u4eba\u76f8\u540c\uff1aAPPROVER_SAME_AS_SUBMITTER,\u5ba1\u6279\u4eba\u91cd\u590d\uff1aAPPROVER_REPEATED\u3011\n                "staffIds": null,                //\u5f53\u524d\u8282\u70b9\u5019\u9009\u4eba\u5217\u8868\n                "type": "ebot",                  //\u8282\u70b9\u7c7b\u578b\n                "policy": null,                  //\u4f1a\u7b7e\u7b56\u7565\uff0c\u5f53type="countersign"\u65f6\uff0c\u8be5\u5b57\u6bb5\u6709\u503c\n                "skipWhenApproverNonMatched": false,            //\u5339\u914d\u4e0d\u5230\u5ba1\u6279\u4eba\u65f6\uff0c\u662f\u5426\u8df3\u8fc7\n                "autoAgreeWhenApproverRepeated": false,         //\u5ba1\u6279\u4eba\u91cd\u590d\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u540c\u610f\n                "autoAgreeWhenApproverSameAsSubmitter": false,  //\u5ba1\u6279\u4eba\u4e0e\u63d0\u4ea4\u4eba\u76f8\u540c\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u540c\u610f\n                "allStaffs": false,                             //\u662f\u5426\u9009\u7528\u5168\u516c\u53f8\u5458\u5de5\u4f5c\u4e3a\u5ba1\u6279\u5019\u9009\u4eba\u5217\u8868\n                "addNode": false                                //\u662f\u5426\u662f\u52a0\u7b7e\u8282\u70b9\n            },\n            {\n                "id":"",\n                "configNodeId": "nj89lCDmlg2400",\n                "name": "\u4e3b\u7ba1\u5ba1\u6279",\n                "skippedType": "NO_SKIPPED",\n                "agreeType": "NO_AUTO_AGREE",\n                "staffIds": [\n                    "LqY9lELfXs0000:4Ac9lCBulQ1Y00"\n                ],\n                "type": "countersign",\n                "policy": "ANY",\n                "skipWhenApproverNonMatched": true,\n                "autoAgreeWhenApproverRepeated": false,\n                "autoAgreeWhenApproverSameAsSubmitter": false,\n                "allStaffs": false,\n                "addNode": false\n            },\n            {\n                "id":"",\n                "configNodeId": "ai89lCDmlg2800",\n                "name": "\u603b\u7ecf\u7406\u5ba1\u6279",\n                "skippedType": "NO_SKIPPED",\n                "agreeType": "NO_AUTO_AGREE",\n                "staffIds": [],\n                "type": "normal",\n                "policy": null,\n                "skipWhenApproverNonMatched": false,\n                "autoAgreeWhenApproverRepeated": false,\n                "autoAgreeWhenApproverSameAsSubmitter": false,\n                "allStaffs": true,\n                "addNode": false\n            },\n            {\n                "id":"",\n                "configNodeId": "SXM9lCDmlg2c00",\n                "name": "\u8d22\u52a1\u590d\u6838",\n                "skippedType": "NO_SKIPPED",\n                "agreeType": "NO_AUTO_AGREE",\n                "staffIds": [\n                    "LqY9lELfXs0000:4-k9nB-6Wk0000"\n                ],\n                "type": "normal",\n                "policy": null,\n                "skipWhenApproverNonMatched": true,\n                "autoAgreeWhenApproverRepeated": false,\n                "autoAgreeWhenApproverSameAsSubmitter": false,\n                "allStaffs": false,\n                "addNode": false\n            },\n            {\n                "id":"",\n                "configNodeId": "S1g9lCDmlg2g00",\n                "name": "\u51fa\u7eb3\u652f\u4ed8",\n                "skippedType": "NO_SKIPPED",\n                "agreeType": "NO_AUTO_AGREE",\n                "staffIds": [\n                    "LqY9lELfXs0000:4Ac9lCBulQ1Y00"\n                ],\n                "type": "normal",\n                "policy": null,\n                "skipWhenApproverNonMatched": false,\n                "autoAgreeWhenApproverRepeated": false,\n                "autoAgreeWhenApproverSameAsSubmitter": false,\n                "allStaffs": false,\n                "addNode": false\n            }\n        ],\n        "taskId": "SUBMIT",                            //\u5f53\u524d\u73af\u8282\u6240\u5904\u7684\u8282\u70b9ID\n        "ownerId": "LqY9lELfXs0000:4Ac9lCBulQ1Y00",    //\u6d41\u7a0b\u53d1\u8d77\u4ebaID/\u5458\u5de5ID\n        "submitterId": "LqY9lELfXs0000:4Ac9lCBulQ1Y00",//\u5355\u636e\u63d0\u4ea4\u4ebaID\uff08\u5373\u8be5\u5355\u636e\u5f52\u5c5e\u8005\uff09\u5458\u5de5ID\n        "corporationId": "LqY9lELfXs0000",\n        "fromStartNode": true                          //\u63d0\u4ea4\u540e\u662f\u5426\u91cd\u8d70\u6d41\u7a0b\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636e\u4e0d\u5b58\u5728"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"flowId"),"\uff08\u5355\u636eID\uff09\u662f\u5426\u6b63\u786e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u60a8\u6ca1\u6709\u6743\u9650\u83b7\u53d6\u8be5\u5355\u636e\u7684\u6d41\u7a0b\u5b9e\u4f8b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u5355\u636e\u662f\u5426\u5904\u4e8e ",(0,l.kt)("strong",{parentName:"td"},"\u8349\u7a3f")," \u548c ",(0,l.kt)("strong",{parentName:"td"},"\u9a73\u56de")," \u72b6\u6001")))))}c.isMDXComponent=!0}}]);