"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27194],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),f=c(n),s=r,k=f["".concat(p,".").concat(s)]||f[s]||d[s]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var t=e.method,n=e.url,l=e.description,i=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[t]},a.createElement("span",{className:r.method},t),a.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&a.createElement("small",null,l))}},47763:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(41627),o=["components"],p={},c="\u83b7\u53d6\u5355\u636e\u9644\u4ef6",m={unversionedId:"open-api/flows/get-flows-attachment",id:"version-v2.0/open-api/flows/get-flows-attachment",title:"\u83b7\u53d6\u5355\u636e\u9644\u4ef6",description:"\u672c\u63a5\u53e3\u662f\u63d0\u4f9b\u6839\u636e\u5355\u636e\u7684Id\u83b7\u53d6\u5355\u636e\u7684\u9644\u4ef6\u6570\u636e\u4fe1\u606f\u3002",source:"@site/versioned_docs/version-v2.0/open-api/flows/get-flows-attachment.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/get-flows-attachment",permalink:"/docs/v2.0/open-api/flows/get-flows-attachment",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/flows/get-flows-attachment.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u56de\u5199\u5355\u636e\u51ed\u8bc1\u4fe1\u606f",permalink:"/docs/v2.0/open-api/flows/voucher-write-back"},next:{title:"\u83b7\u53d6\u5355\u636ePDF\u6587\u4ef6\u6d41",permalink:"/docs/v2.0/open-api/flows/get-flows-pdf"}},d=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2},{value:"\u5355\u636e\u9644\u4ef6\u79cd\u7c7b\u8865\u5145\u8bf4\u660e",id:"\u5355\u636e\u9644\u4ef6\u79cd\u7c7b\u8865\u5145\u8bf4\u660e",children:[],level:2}],f={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6\u5355\u636e\u9644\u4ef6"},"\u83b7\u53d6\u5355\u636e\u9644\u4ef6"),(0,l.kt)("p",null,"\u672c\u63a5\u53e3\u662f\u63d0\u4f9b\u6839\u636e\u5355\u636e\u7684Id\u83b7\u53d6\u5355\u636e\u7684\u9644\u4ef6\u6570\u636e\u4fe1\u606f\u3002"),(0,l.kt)(i.Z,{method:"POST",url:"/api/openapi/v1/flowDetails/attachment",mdxType:"Control"}),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"flowIds")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636eID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u6b21\u6700\u591a\u80fd\u67e5\u8be2100\u4e2a\u5355\u636e")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"flowIds"),"\u53ef\u4ee5\u662f\u4e00\u4e2a\u6279\u91cf\u7684\uff0c\u4ee5\u9017\u53f7\u9694\u5f00\u5373\u53ef,\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},'["1s8cfnyBH8Jw00","1s8cfnyBH8Jw01"]'),";"))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/flowDetails/attachment?accessToken=TNQbsyYQV80I00'\n--header 'Content-Type: application/json' \\\n--header 'Accept: application/json' \\\n--data-raw '{\n      \"flowIds\":[\"BXoci03_oQ5000\",\"c3Aci0NWnkgc00\",\"6_kcgINHfcbI00\"]\n}'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items":[\n        {\n            "flowId":"6_kcgINHfcbI00",//\u5355\u636eid\n            "flowCode":"B21000073",//\u5355\u636e\u7f16\u7801\n            "attachmentList":[\n                {\n                    "type":"flow.body",//\u5355\u636e\u8be6\u60c5\u9644\u4ef6\n                    "attachmentUrls":[//\u9644\u4ef6\u5217\u8868\n                        {\n                            "key":"\u65e0\u53d1\u7968\u53f7\u7801-1611919507409-253.jpg",//\u9644\u4ef6key\n                            "url":"https://vipimg.ekuaibao.com/%E6%97%A0%E5%8F%91%E7%A5%A8%E5%8F%B7%E7%A0%81-1611919507409-253.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:oiv8FdEHZuO7LDQE-Qh8YdZS_8g=",//\u9644\u4ef6url\n                            "fileId":"2u8cgINHfceI00",//\u9644\u4ef6id\n                            "fileName":"\u65e0\u53d1\u7968\u53f7\u7801.jpg"//\u9644\u4ef6\u540d\u79f0\n                        }\n                    ]\n                },\n                {\n                    "type":"flow.free",////\u5355\u636e\u8d39\u7528\u8be6\u60c5\u9644\u4ef6\n                    "freeId":"r3gX9hMxRsvgAa",//\u8d39\u7528\u8be6\u60c5id\n                    "attachmentUrls":[//\u8d39\u7528\u8be6\u60c5\u9644\u4ef6\n                        {\n                            "key":"\u65e0\u53d1\u7968\u53f7\u7801-1611919424372-705.jpg",\n                            "url":"https://vipimg.ekuaibao.com/%E6%97%A0%E5%8F%91%E7%A5%A8%E5%8F%B7%E7%A0%81-1611919424372-705.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:KN9enR6649pNcF13Mq4S7Uuka50=",\n                            "fileId":"-XYcgINHfcb800",\n                            "fileName":"\u65e0\u53d1\u7968\u53f7\u7801.jpg"\n                        }\n                    ],\n                    "invoiceUrls":[//\u53d1\u7968\u6587\u4ef6\n                        {\n                            "key":"\u5e7f\u4e1c\u673a\u6253\u53d1\u79689000(1)-1611919551788-38.jpg",\n                            "url":"https://vipimg.ekuaibao.com/%E5%B9%BF%E4%B8%9C%E6%9C%BA%E6%89%93%E5%8F%91%E7%A5%A89000%281%29-1611919551788-38.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:f4bcE63ecFlQ8wdyYW0UNwsJ9d0=",\n                            "fileId":"YrMcgINHfcfc00",\n                            "fileName":"\u5e7f\u4e1c\u673a\u6253\u53d1\u79689000(1).jpg"\n                        }\n                    ]\n                },\n                {\n                    "type":"flow.approving",//\u5355\u636e\u5ba1\u6279\u9644\u4ef6\uff08\u5305\u542b\u8bc4\u8bba\u9644\u4ef6\uff09\n                    "attachmentUrls":[\n                        {\n                            "key":"1111g_200_200-1611919723502-854.png",\n                            "url":"https://vipimg.ekuaibao.com/1111g_200_200-1611919723502-854.png?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:wYhkcoRckh58zM3yuEl0s8-5blk=",\n                            "fileId":"pR4cgINHfcoY00",\n                            "fileName":"1111g_200_200.png"\n                        },\n                        {\n                            "key":"222_200_200-1611919723502-680.png",\n                            "url":"https://vipimg.ekuaibao.com/222_200_200-1611919723502-680.png?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:M0aRd9QQOnTaB5gPusibxGCz540=",\n                            "fileId":"mTgcgINHfcoU00",\n                            "fileName":"222_200_200.png"\n                        }\n                    ]\n                },\n                {\n                    "type":"flow.receipt",//\u5355\u636e\u56de\u5355\u5730\u5740\n                    "receiptUrls":[\n                        {\n                            "url":"https://vipimg.ekuaibao.com/503cedde-d7d6-4115-b8ee-1aed222add21-MjIwMjczOTE3ODE%3D.pdf?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:OeWrlRnBSn8LQGlMz8reHTbn0vE=",\n                            "key":"503cedde-d7d6-4115-b8ee-1aed222add21-MjIwMjczOTE3ODE=.pdf"\n                        }\n                    ]\n                }\n            ],\n            "fromType":"expense"//\u5355\u636e\u7c7b\u578b\n        },\n        {\n            "flowId":"BXoci03_oQ5000",\n            "flowCode":"B21000085",\n            "attachmentList":[\n                {\n                    "type":"flow.body",\n                    "attachmentUrls":[\n                        {\n                            "key":"\u5b9a\u989d\u53d1\u796801-1612269865498-150.jpg",\n                            "url":"https://vipimg.ekuaibao.com/%E5%AE%9A%E9%A2%9D%E5%8F%91%E7%A5%A801-1612269865498-150.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:EcJrAcZAIJ1ZJVj-Sv-ICJsZOUM=",\n                            "fileId":"Wswci03_oQ4800",\n                            "fileName":"\u5b9a\u989d\u53d1\u796801.jpg"\n                        }\n                    ]\n                },\n                {\n                    "type":"flow.free",\n                    "freeId":"OmLAQeEFpAJnVp",\n                    "attachmentUrls":[\n                        {\n                            "key":"\u5b9a\u989d\u53d1\u796802-1612269762542-987.jpg",\n                            "url":"https://vipimg.ekuaibao.com/%E5%AE%9A%E9%A2%9D%E5%8F%91%E7%A5%A802-1612269762542-987.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:N-vOMKLw6oLLILD9sCYmvnnUrDw=",\n                            "fileId":"2i0ci03_oQ4000",\n                            "fileName":"\u5b9a\u989d\u53d1\u796802.jpg"\n                        }\n                    ],\n                    "invoiceUrls":[\n                        {\n                            "key":"\u6df1\u5733\u7535\u5b50\u666e\u7968-1612269846131-83.png",\n                            "url":"https://vipimg.ekuaibao.com/%E6%B7%B1%E5%9C%B3%E7%94%B5%E5%AD%90%E6%99%AE%E7%A5%A8-1612269846131-83.png?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:xDGJBYJo_w6S71nOvvRBfop9Q2o=",\n                            "fileId":"FYQci03_oQ4400",\n                            "fileName":"\u6df1\u5733\u7535\u5b50\u666e\u7968.png"\n                        }\n                    ]\n                }\n            ],\n            "fromType":"expense"\n        },\n        {\n            "flowId":"c3Aci0NWnkgc00",\n            "flowCode":"B21000086",\n            "attachmentList":[\n                {\n                    "type":"flow.body",\n                    "attachmentUrls":[\n                        {\n                            "key":"\u5b9a\u989d\u53d1\u796801-1612273739152-688.jpg",\n                            "url":"https://vipimg.ekuaibao.com/%E5%AE%9A%E9%A2%9D%E5%8F%91%E7%A5%A801-1612273739152-688.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:ZNTBX4s9xxj7IRMg5UOLX8PriGI=",\n                            "fileId":"ltgci0NWnkfo00",\n                            "fileName":"\u5b9a\u989d\u53d1\u796801.jpg"\n                        }\n                    ]\n                },\n                {\n                    "type":"flow.approving",\n                    "attachmentUrls":[\n                        {\n                            "key":"\u5b9a\u989d\u53d1\u796806-1612319984830-684.jpg",\n                            "url":"https://vipimg.ekuaibao.com/%E5%AE%9A%E9%A2%9D%E5%8F%91%E7%A5%A806-1612319984830-684.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:4hupCJlaiDXThuXGdIWTomkv_Vs=",\n                            "fileId":"j1Yci2bRCgw000",\n                            "fileName":"\u5b9a\u989d\u53d1\u796806.jpg"\n                        }\n                    ]\n                }\n            ],\n            "fromType":"expense"\n        }\n    ]\n}\n')),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u54cd\u5e94\u6570\u636e\u4e2d\u9644\u4ef6\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"key"),",",(0,l.kt)("inlineCode",{parentName:"p"},"fileId"),",",(0,l.kt)("inlineCode",{parentName:"p"},"fileName"),"\u4e0d\u662f\u5fc5\u8fd4\u56de\u7684\uff0c\u6709\u4e9b\u9644\u4ef6\u53ef\u80fd\u6ca1\u6709\u8be5\u4e9b\u5b57\u6bb5\u3002"))),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("p",null,"\u5355\u636e\u4e0d\u5b58\u5728\uff0c\u4e00\u822c\u662f\u5355\u636eid\u4e0d\u5bf9\u6216\u8005\u5355\u636e\u5df2\u7ecf\u88ab\u5220\u9664\u4e86\uff0c\u8bf7\u68c0\u67e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"items": [] //\u8868\u793a\u6ca1\u67e5\u5230\u6570\u636e\n}\n')),(0,l.kt)("h2",{id:"\u5355\u636e\u9644\u4ef6\u79cd\u7c7b\u8865\u5145\u8bf4\u660e"},"\u5355\u636e\u9644\u4ef6\u79cd\u7c7b\u8865\u5145\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5bf9\u5e94\u9644\u4ef6\u6765\u6e90\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"flow.body"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636e\u8be6\u60c5\u9644\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"flow.free"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636e\u8d39\u7528\u8be6\u60c5\u9644\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"flow.approving"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636e\u5ba1\u6279\u9644\u4ef6\uff08\u5305\u542b\u8bc4\u8bba\u9644\u4ef6\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"flow.receipt"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636e\u56de\u5355\u9644\u4ef6")))))}s.isMDXComponent=!0}}]);