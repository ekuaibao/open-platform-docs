"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[93146],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var t=e.method,n=e.url,l=e.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return r.createElement("div",{className:a.control+" "+a[t]},r.createElement("span",{className:a.method},t),r.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),l&&r.createElement("small",null,l))}},33908:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(41627),p=["components"],i={},c="\u83b7\u53d6\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5",u={unversionedId:"open-api/contacts/get-allCustomeProperty",id:"open-api/contacts/get-allCustomeProperty",title:"\u83b7\u53d6\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5",description:"<Control",source:"@site/docs/open-api/contacts/get-allCustomeProperty.md",sourceDirName:"open-api/contacts",slug:"/open-api/contacts/get-allCustomeProperty",permalink:"/docs/next/open-api/contacts/get-allCustomeProperty",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/contacts/get-allCustomeProperty.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u67e5\u8be2\u5458\u5de5\u5f85\u529e\u6570\u91cf",permalink:"/docs/next/open-api/corporation/get-staff-backLog"},next:{title:"\u4fee\u6539\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5(\u5168\u73af\u5883)",permalink:"/docs/next/open-api/contacts/update-staffs-customFields"}},s=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5"},"\u83b7\u53d6\u5458\u5de5\u81ea\u5b9a\u4e49\u5b57\u6bb5"),(0,l.kt)(o.Z,{method:"GET",url:"/api/openapi/v1/staffs/getAllCustomeProperty",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#07140"},(0,l.kt)("strong",{parentName:"a"},"0.7.140"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/staffs/getAllCustomeProperty?accessToken=ID_3kVvb6B042U' \\\n--header 'Accept: application/json'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "name": "rankType",    //\u5b57\u6bb5\u540d\u79f0\n            "label": "\u804c\u7ea7",       //\u5b57\u6bb5\u663e\u793a\u540d\u79f0\n            "active": true,        //\u662f\u5426\u505c\u7528\n            "canAsDimension": false,\n            "ability": "rank",     //\u6240\u5c5e\u81ea\u5b9a\u4e49\u6863\u6848\u7f16\u7801\n            "dataType": {          //\u6570\u636e\u7c7b\u578b\n                "type": "ref",     //\u5b57\u6bb5\u7c7b\u578b(text/number/money/date/ref)\n                "entity": "basedata.Dimension.\u804c\u7ea7\u9884\u7f6e"  //\u6240\u5c5e\u81ea\u5b9a\u4e49\u6863\u6848\u5b9e\u4f53\u7c7b\n            }\n        },\n        {\n            "name": "u_\u7231\u597d",\n            "label": "\u7231\u597d",\n            "active": true,\n            "dataType": {\n                "type": "text"\n            }\n        },\n        {\n            "name": "u_\u624b\u673a",\n            "label": "\u624b\u673a",\n            "active": true,\n            "dataType": {\n                "type": "number",\n                "scale": 0,\n                "unit": ""\n            }\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"403")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6388\u6743"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"),"\uff08\u8ba4\u8bc1token\uff09\u662f\u5426\u5df2\u8fc7\u671f",(0,l.kt)("br",null),"\u8bf7\u786e\u8ba4 ",(0,l.kt)("strong",{parentName:"td"},"\u5730\u5740\u524d\u7f00")," \u4e0e\u60a8\u7684\u4f01\u4e1a\u73af\u5883\u4e00\u81f4")))))}d.isMDXComponent=!0}}]);