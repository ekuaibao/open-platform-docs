"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35518],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,f=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},o=function(e){var t=e.method,n=e.url,o=e.description,l=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return r.createElement("div",{className:a.control+" "+a[t]},r.createElement("span",{className:a.method},t),r.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),o&&r.createElement("small",null,o))}},99759:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(41627),p=["components"],i={},c="\u83b7\u53d6\u5355\u636e\u6284\u9001\u6d88\u606f",d={unversionedId:"open-api/flows/get-carboncopy",id:"version-v2.1/open-api/flows/get-carboncopy",title:"\u83b7\u53d6\u5355\u636e\u6284\u9001\u6d88\u606f",description:"<Control",source:"@site/versioned_docs/version-v2.1/open-api/flows/get-carboncopy.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/get-carboncopy",permalink:"/docs/v2.1/open-api/flows/get-carboncopy",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/flows/get-carboncopy.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u56de\u5355\u4e0b\u8f7d\u94fe\u63a5\u5730\u5740",permalink:"/docs/v2.1/open-api/flows/get-flow-receipt"},next:{title:"\u83b7\u53d6\u4f01\u4e1a\u5bf9\u8d26\u5355\u7ba1\u7406\u7684\u5b50\u5bf9\u8d26\u5355",permalink:"/docs/v2.1/open-api/flows/get-flow-by-checkingId"}},m=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],s={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u83b7\u53d6\u5355\u636e\u6284\u9001\u6d88\u606f"},"\u83b7\u53d6\u5355\u636e\u6284\u9001\u6d88\u606f"),(0,o.kt)(l.Z,{method:"GET",url:"/api/openapi/v1/carbonCopy/getCarbonCopy",mdxType:"Control"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,o.kt)("div",null,(0,o.kt)("p",null,"  ",(0,o.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#07129"},(0,o.kt)("strong",{parentName:"a"},"0.7.129"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,o.kt)("br",null)))),(0,o.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"accessToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"flowId")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636eID"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/flows/question-answer#%E9%97%AE%E9%A2%98%E4%B8%80"},"\u5355\u636eID\u83b7\u53d6\u65b9\u5f0f"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"receiverId")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u6536\u4eba\uff08\u5355\u636e\u88ab\u6284\u9001\u4eba\uff09ID"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-staff-ids"},"\u67e5\u8be2\u5458\u5de5")," \u83b7\u53d6")))),(0,o.kt)("h2",{id:"curl"},"CURL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/carbonCopy/getCarbonCopy?accessToken=FdAcjUU3HM0s00&flowId=J4ccjUq08pRU00&receiverId=FF0c6gsq-gl400:dIEbu2mgTs6o00' \\\n--header 'Content-Type: application/json' \\\n--header 'Accept: application/json'\n")),(0,o.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "id": "O6YcjUq08pUw00",\n        "version": 1,   \n        "active": true, \n        "createTime": 1613618785090,\n        "updateTime": 1613618785090,\n        "corporationId":  "FF0c6gsq-gl400",             //\u4f01\u4e1aID\n        "receiverId": "FF0c6gsq-gl400:dIEbu2mgTs6o00",  //\u63a5\u6536\u4ebaID/\u5355\u636e\u88ab\u6284\u9001\u4ebaID\n        "senderId": null,                               //\u53d1\u9001\u4ebaID/\u5355\u636e\u53d1\u9001\u4ebaID\n        "flowId": "J4ccjUq08pRU00",                     //\u5355\u636eID\n        "state": "UNREAD",                              //\u72b6\u6001(READ=\u5df2\u8bfb, UNREAD=\u672a\u8bfb)\n        "type": "requisition"                           //\u5355\u636e\u7c7b\u578b\n    }\n}\n')),(0,o.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"400")),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636e\u6284\u9001\u6d88\u606f\u4e0d\u5b58\u5728"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u5bf9\u5e94\u5355\u636e\u662f\u5426\u6709\u6284\u9001\u6d88\u606f")))))}u.isMDXComponent=!0}}]);