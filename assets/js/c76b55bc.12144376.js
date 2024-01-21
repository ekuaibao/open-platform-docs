"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85103],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,f=u["".concat(i,".").concat(s)]||u[s]||m[s]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var t=e.method,n=e.url,l=e.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return r.createElement("div",{className:a.control+" "+a[t]},r.createElement("span",{className:a.method},t),r.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&r.createElement("small",null,l))}},57340:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(41627),p=["components"],i={},d="\u66f4\u65b0\u89d2\u8272",c={unversionedId:"open-api/corporation/update-roledefs",id:"version-v2.1/open-api/corporation/update-roledefs",title:"\u66f4\u65b0\u89d2\u8272",description:"<Control",source:"@site/versioned_docs/version-v2.1/open-api/corporation/update-roledefs.md",sourceDirName:"open-api/corporation",slug:"/open-api/corporation/update-roledefs",permalink:"/docs/v2.1/open-api/corporation/update-roledefs",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/corporation/update-roledefs.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u65b0\u589e\u89d2\u8272",permalink:"/docs/v2.1/open-api/corporation/create-roledefs"},next:{title:"\u67e5\u8be2\u89d2\u8272\u4e0b\u5458\u5de5\u4fe1\u606f",permalink:"/docs/v2.1/open-api/corporation/get-roles"}},m=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],u={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u66f4\u65b0\u89d2\u8272"},"\u66f4\u65b0\u89d2\u8272"),(0,l.kt)(o.Z,{method:"PUT",url:"/api/openapi/v1/roledefs/$`roledefId`",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#130"},(0,l.kt)("strong",{parentName:"a"},"1.3.0"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"roledefId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u89d2\u8272ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5728\u5408\u601d\u684c\u9762\u7aef\u300c\u7cfb\u7edf\u8bbe\u7f6e\u300d>\u300c\u89d2\u8272\u7ba1\u7406\u300d\u5904\u67e5\u770b",(0,l.kt)("br",null),"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-roles-group"},"\u67e5\u8be2\u89d2\u8272\u7ec4\u548c\u89d2\u8272")," \u83b7\u53d6")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u89d2\u8272\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u89d2\u8272\u540d\u79f0\u4e0d\u80fd\u91cd\u590d")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/roledefs/ID_3BKMdBcP07g?accessToken=ID_3BKMdBcO$7g:xgJ3wajigF25H0&name=ZGY\u804c\u7ea7\u9884\u7f6e\u89d2\u82721' \\\n--header 'Content-Type: text/plain' \\\n--header 'content-type: application/json'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "pipeline": 1,\n        "grayver": "9.16.0.0:A",\n        "id": "ID_3BKMdBcP07g",  //\u89d2\u8272ID\n        "version": 8,            //\u7248\u672c\u53f7\n        "active": true,          //\u662f\u5426\u542f\u7528\n        "createTime": 1648024446623,\n        "updateTime": 1648024446623,\n        "name": "ZGY\u804c\u7ea7\u9884\u7f6e\u89d2\u82721",          //\u89d2\u8272\u540d\u79f0\n        "nameSpell": "ZGYZHIJIYUZHIJIAOSE", //\u540d\u79f0\u62fc\u97f3\n        "corporationId": "xgJ3wajigF25H0",  //\u4f01\u4e1aID\n        "sourceCorporationId": null,\n        "dataCorporationId": null,\n        "roleGroupId": "xgJ3wajigF25H0:group:default",  //\u89d2\u8272\u7ec4ID\n        "scope": {                                      //\u89d2\u8272\u7c7b\u578b\n            "name": "\u804c\u7ea7\u9884\u7f6e\u89d2\u8272",                      //\u89d2\u8272\u7c7b\u578b\u540d\u79f0\n            "properties": {                             //\u89d2\u8272\u7c7b\u578b\u914d\u7f6e\n                "\u804c\u7ea7\u9884\u7f6e": "basedata.Dimension.\u804c\u7ea7\u9884\u7f6e"\n            }\n        },\n        "locked": false,\n        "code": "CODE10",                    //\u89d2\u8272\u7f16\u53f7\n        "type": "ROLE",                      //\u7c7b\u578b\n        "sourceType": "basedata.Dimension",  \n        "sourceTypeValue": "basedata.Dimension.\u804c\u7ea7\u9884\u7f6e",\n        "sourceName": "ZGY\u804c\u7ea7\u9884\u7f6e\u89d2\u82721",\n        "purposeType": "organization.Staff",\n        "purposeTypeValue": null,\n        "purposeName": "ZGY\u804c\u7ea7\u9884\u7f6e\u89d2\u82721(\u53cd)",\n        "sourceChannel": "MANUAL",          //\u89d2\u8272\u6570\u636e\u6765\u6e90\uff0cMANUAL:\u624b\u52a8\u7ba1\u7406  API:API\u5bfc\u5165\n        "sourcePlat": null,\n        "sourceId": null,\n        "suffixName": null\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6b64\u540d\u79f0\u7684\u89d2\u8272\u5df2\u7ecf\u5b58\u5728\uff0c\u8bf7\u66f4\u6362\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"name"),"\uff08\u89d2\u8272\u540d\u79f0\uff09\u662f\u5426\u5df2\u5b58\u5728")))))}s.isMDXComponent=!0}}]);