"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53633],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=d(n),k=r,u=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return n?a.createElement(u,o(o({ref:e},m),{},{components:n})):a.createElement(u,o({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&a.createElement("small",null,l))}},9475:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return s},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(41627),i=["components"],p={},d="\u67e5\u8be2\u5458\u5de5",m={unversionedId:"open-api/corporation/get-staff-ids",id:"version-v2.2/open-api/corporation/get-staff-ids",title:"\u67e5\u8be2\u5458\u5de5",description:"\u901a\u8fc7\u5458\u5de5\u7684 \u5458\u5de5ID\u3001\u5de5\u53f7\u3001\u624b\u673a\u53f7\u3001\u90ae\u7bb1\u3001\u7b2c\u4e09\u65b9ID \u67e5\u8be2\u5458\u5de5\u4fe1\u606f\u3002",source:"@site/versioned_docs/version-v2.2/open-api/corporation/get-staff-ids.md",sourceDirName:"open-api/corporation",slug:"/open-api/corporation/get-staff-ids",permalink:"/docs/open-api/corporation/get-staff-ids",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.2/open-api/corporation/get-staff-ids.md",tags:[],version:"v2.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u5df2\u6fc0\u6d3b\u5458\u5de5\u5217\u8868",permalink:"/docs/open-api/corporation/get-all-auth-staffs"},next:{title:"\u67e5\u8be2\u5458\u5de5\u5f85\u529e\u6570\u91cf",permalink:"/docs/open-api/corporation/get-staff-backLog"}},s=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],c={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u67e5\u8be2\u5458\u5de5"},"\u67e5\u8be2\u5458\u5de5"),(0,l.kt)("p",null,"\u901a\u8fc7\u5458\u5de5\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5458\u5de5ID"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u5de5\u53f7"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u624b\u673a\u53f7"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u90ae\u7bb1"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u7b2c\u4e09\u65b9ID")," \u67e5\u8be2\u5458\u5de5\u4fe1\u606f\u3002",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{method:"POST",url:"/api/openapi/v1/staffs/getStaffIds",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1240"},(0,l.kt)("strong",{parentName:"a"},"1.24.0"))," -> \ud83d\udc1e \u54cd\u5e94\u4fe1\u606f\u4e2d\u65b0\u589e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"roles"),"\uff08\u89d2\u8272\u4fe1\u606f\uff09\u5b57\u6bb5\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1200"},(0,l.kt)("strong",{parentName:"a"},"1.20.0"))," -> \ud83d\udc1e \u54cd\u5e94\u4fe1\u606f\u4e2d\u65b0\u589e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"nickName"),"\uff08\u5458\u5de5\u522b\u540d\uff09\u5b57\u6bb5\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1190"},(0,l.kt)("strong",{parentName:"a"},"1.19.0"))," -> \ud83d\udc1e \u54cd\u5e94\u4fe1\u606f\u4e2d\u65b0\u589e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"globalRoaming"),"\uff08\u56fd\u9645\u533a\u53f7\uff09\u5b57\u6bb5\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#1100"},(0,l.kt)("strong",{parentName:"a"},"1.10.0"))," -> \ud83d\udc1e \u65b0\u589e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"authState"),"\uff08\u6fc0\u6d3b\u72b6\u6001\uff09\u6210\u529f\u54cd\u5e94\u8fd4\u56de\u53c2\u6570\u3002",(0,l.kt)("br",null)))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u672c\u63a5\u53e3\u53ea\u80fd\u67e5\u8be2\u5230 ",(0,l.kt)("strong",{parentName:"li"},"\u542f\u7528")," \u7684\u5458\u5de5\u4fe1\u606f\uff0c\u5982\u679c\u9700\u8981\u67e5\u8be2\u5df2\u505c\u7528\u7684\u5458\u5de5\u4fe1\u606f\uff0c\u8bf7\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"li",href:"/docs/open-api/corporation/get-all-staffs"},"\u83b7\u53d6\u5458\u5de5\u5217\u8868")," \u67e5\u8be2\u5230\u5168\u90e8\u5df2\u505c\u7528\u7684\u5458\u5de5\u5217\u8868\uff0c\u518d\u8fdb\u884c\u5339\u914d\u3002")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u65b9\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"STAFFID")," : \u5458\u5de5ID",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"CODE")," : \u5de5\u53f7",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"CELLPHONE")," : \u624b\u673a\u53f7",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"MAIL")," : \u90ae\u7bb1",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"USERID")," : \u7b2c\u4e09\u65b9ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"conditionIds")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u67e5\u8be2\u6761\u4ef6\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301\u591a\u4e2a\uff0c\u6700\u591a\u4e0d\u80fd\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"td"},"100")," \u4e2a")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9ID\u6307\u9489\u9489ID\u3001\u4f01\u4e1a\u5fae\u4fe1open ID\u3001\u4e91\u4e4b\u5bb6ID\u7b49\uff0c\u5408\u601d\u539f\u751f\u7248\u672c\u6ca1\u6709\u7b2c\u4e09\u65b9ID\u3002")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/staffs/getStaffIds?accessToken=RCIbwHcnF0kg00' \\\n--header 'content-type: application/json' \\\n--header 'Accept: application/json' \\\n--data-raw '{\n    \"type\": \"STAFFID\",\n    \"conditionIds\":[\n        \"JOYbpjPP-E2Q00:pt4bu1ZI9s2000\"\n    ]\n}'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "id": "JOYbpjPP-E2Q00:pt4bu1ZI9s2000",  //\u5458\u5de5ID\n            "name": "\u4e8c\u53f7\u5458\u5de5",                     //\u5458\u5de5\u59d3\u540d\n            "nickName": "\u8001\u56db",                    //\u5458\u5de5\u522b\u540d\n            "code": "1002",                        //\u5458\u5de5\u5de5\u53f7\n            "departments": [                       //\u6240\u5c5e\u90e8\u95e8ID\u96c6\u5408\n                "JOYbpjPP-E2Q00:ZNEbwH_W7sc000",\n                "JOYbpjPP-E2Q00:pAwbwH_W7sec00",\n                "JOYbpjPP-E2Q00"\n            ],\n            "defaultDepartment": "JOYbpjPP-E2Q00:ZNEbwH_W7sc000", //\u9ed8\u8ba4\u90e8\u95e8ID\n            "cellphone": "18603000748",                           //\u624b\u673a\u53f7\n            "active": true,                                       //true\uff1a\u5728\u804c\uff0cfalse\uff1a\u5df2\u79bb\u804c\uff08\u8d26\u53f7\u903b\u8f91\u5220\u9664\uff0c\u5728\u7cfb\u7edf\u4e0a\u4e0d\u53ef\u89c1\uff09\n            "userId": "-Nwbu1ZI9s1Y00",                           //\u7b2c\u4e09\u65b9\u5e73\u53f0\u4eba\u5458ID\n            "email": "cmzhouxiaofeng@xxx.com.cn",                 //\u767b\u5f55\u90ae\u7bb1\uff08\u5927\u5199\u5b57\u6bcd\u5168\u8f6c\u6362\u4e3a\u5c0f\u5199\u5b57\u6bcd\uff09\n            "showEmail": "Cmzhouxiaofeng@xxx.com.cn",             //\u5458\u5de5\u4e2a\u4eba\u4fe1\u606f\u663e\u793a\u90ae\u7bb1\uff08\u5927\u5199\u5b57\u6bcd\u4fdd\u6301\u4e0d\u53d8\uff09\n            "external": false,                                    //\u662f\u5426\u5916\u90e8\u5458\u5de5\n            "authState": true,                                    //\u662f\u5426\u6fc0\u6d3b\uff0c\u8868\u793a\u8d26\u53f7\u662f\u5426\u53ef\u7528\n            "globalRoaming": "+86",                               //\u56fd\u9645\u533a\u53f7\n            "note": "\u5907\u6ce8",                                       //\u5907\u6ce8\n            "staffCustomForm":{                                               //\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5\n                "base":"[{\\"key\\":\\"7370\\",\\"label\\":\\"\u5c71\u897f\u7701/\u957f\u6cbb/\u4e0a\u515a\u533a\\"}]",//\u5e38\u9a7b\u5730\n                "postType":"ltUcxNyWSQ1o00",                                  //\u5c97\u4f4d\n                "rankType":"lUcctXntW82A00",                                  //\u804c\u7ea7\n                "u_\u6570\u5b57\u5b57\u6bb5":"1"                                              //\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5\n            },\n            "updateTime": "2022-08-05 14:59:19",      //\u66f4\u65b0\u65f6\u95f4\n            "createTime": "2022-08-05 14:59:19",      //\u521b\u5efa\u65f6\u95f4\n            "roles": [                                //\u89d2\u8272\u4fe1\u606f\n                {\n                    "roleDefId": "TsI3tt8KjF4S7M:admin",  //\u89d2\u8272\u5b9a\u4e49ID\n                    "properties": {}                      //\u89d2\u8272\u5c5e\u6027\uff0c\u666e\u901a\u89d2\u8272\u8be5\u503c\u4e3a\u7a7a\n                },\n                {\n                    "roleDefId": "ID_3twRn$sszLg",        //\u89d2\u8272\u5b9a\u4e49ID\n                    "properties": {}                      //\u89d2\u8272\u5c5e\u6027\uff0c\u666e\u901a\u89d2\u8272\u8be5\u503c\u4e3a\u7a7a\n                },\n                {\n                    "roleDefId": "TsI3tt8KjF4S7M:leader",  //\u89d2\u8272\u5b9a\u4e49ID\n                    "properties": {                        //\u89d2\u8272\u5c5e\u6027\uff0c\u90e8\u95e8\u89d2\u8272\n                        "departmentId": "TsI3tt8KjF4S7M:ID01omyu2Lbk4f" //key\u56fa\u5b9a\u503c\uff08departmentId\uff09\uff0cvalue: \u90e8\u95e8ID\n                    }\n                },\n                {\n                    "roleDefId": "ID01tMVw9kXWh1",         //\u89d2\u8272\u5b9a\u4e49ID\n                    "properties": {                        //\u89d2\u8272\u5c5e\u6027\uff0c\u6cd5\u4eba\u5b9e\u4f53\u89d2\u8272\n                        "\u6cd5\u4eba\u5b9e\u4f53": "ID_3tqvxwgjI6w"       //key\u56fa\u5b9a\u503c\uff08\u6cd5\u4eba\u5b9e\u4f53\uff09\uff0cvalue: \u6cd5\u4eba\u5b9e\u4f53ID\n                    }\n                },\n                {\n                    "roleDefId": "ID01tMVw9kXX4z",          //\u89d2\u8272\u5b9a\u4e49ID\n                    "properties": {                         //\u89d2\u8272\u5c5e\u6027\uff0c\u81ea\u5b9a\u4e49\u6863\u6848\u89d2\u8272\n                        "\u8d39\u7528\u5206\u7c7b": "ID01pDLUgk2y51"        //key\u56fa\u5b9a\u503c\uff08\u81ea\u5b9a\u4e49\u6863\u6848\u540d\u79f0\uff09\uff0cvalue: \u6863\u6848ID\n                    }\n                }\n            ]\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2conditionIds\u4e0d\u80fd\u4e3a\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"conditionIds")," \u662f\u5426\u4f20\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"403")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6388\u6743"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"),"\uff08\u8ba4\u8bc1token\uff09\u662f\u5426\u5df2\u8fc7\u671f",(0,l.kt)("br",null),"\u8bf7\u786e\u8ba4 ",(0,l.kt)("strong",{parentName:"td"},"\u5730\u5740\u524d\u7f00")," \u4e0e\u60a8\u7684\u4f01\u4e1a\u73af\u5883\u4e00\u81f4")))))}k.isMDXComponent=!0}}]);