"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96608],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=c(a),u=n,f=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return a?r.createElement(f,l(l({ref:e},d),{},{components:a})):r.createElement(f,l({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},41627:function(t,e,a){a.d(e,{Z:function(){return i}});var r=a(67294),n={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},i=function(t){var e=t.method,a=t.url,i=t.description,l=a.replace(/\`(.*?)\`/g,"<span>$1</span>");return r.createElement("div",{className:n.control+" "+n[e]},r.createElement("span",{className:n.method},e),r.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),i&&r.createElement("small",null,i))}},88383:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=a(41627),o=["components"],p={},c="\u66f4\u65b0\u57ce\u5e02\u7ec4\u8be6\u60c5",d={unversionedId:"open-api/city/update-city-group-details",id:"version-v2.0/open-api/city/update-city-group-details",title:"\u66f4\u65b0\u57ce\u5e02\u7ec4\u8be6\u60c5",description:"<Control",source:"@site/versioned_docs/version-v2.0/open-api/city/update-city-group-details.md",sourceDirName:"open-api/city",slug:"/open-api/city/update-city-group-details",permalink:"/docs/v2.0/open-api/city/update-city-group-details",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/city/update-city-group-details.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u57ce\u5e02\u7ec4\u8be6\u60c5",permalink:"/docs/v2.0/open-api/city/get-city-group-details"},next:{title:"\u5220\u9664\u57ce\u5e02\u7ec4\u8be6\u60c5",permalink:"/docs/v2.0/open-api/city/delete-city-group-details"}},m=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2}],s={toc:m};function u(t){var e=t.components,a=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u66f4\u65b0\u57ce\u5e02\u7ec4\u8be6\u60c5"},"\u66f4\u65b0\u57ce\u5e02\u7ec4\u8be6\u60c5"),(0,i.kt)(l.Z,{method:"POST",url:"/api/openapi/v1/cityGroup/detail/save",mdxType:"Control"}),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"accessToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))))),(0,i.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"roleIds")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u89d2\u8272ID\u5217\u8868"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-roles-group"},"\u901a\u8fc7\u67e5\u8be2\u89d2\u8272\u7ec4\u548c\u89d2\u8272\u83b7\u53d6"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"staffIds")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4eba\u5458ID\u5217\u8868"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u901a\u8fc7\u83b7\u53d6\u5458\u5de5\u5217\u8868\u83b7\u53d6"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"cityIds")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u57ce\u5e02ID\u5217\u8868"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/basedata/get-basedata-city"},"\u901a\u8fc7\u83b7\u53d6\u57ce\u5e02\u5217\u8868\u6570\u636e\u83b7\u53d6"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"cityGroupId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u57ce\u5e02\u7ec4ID"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/city/get-city-group"},"\u901a\u8fc7\u83b7\u53d6\u57ce\u5e02\u7ec4\u5217\u8868\u83b7\u53d6"))))),(0,i.kt)("h2",{id:"curl"},"CURL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'http://app.ekuaibao.com/api/openapi/v1/cityGroup/detail/save?accessToken=FsYc5j4FlclU00\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "roleIds":[],\n    "staffIds":[\n        "AdMbpirnlY2Q00:Mksc4_e8ggjo00", "AdMbpirnlY2Q00:ksUbpirnlYg000"\n    ],\n    "cityIds":[        //\u57ce\u5e02ID\u5217\u8868\n        "37", "153", "154"\n    ],\n    "cityGroupId":"wC0cPu1DNY1400"\n}\'\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9009\u62e9\u57ce\u5e02\u672b\u7ea7\u65f6\u9700\u8981\u628a\u5176\u7236\u7ea7\u76f4\u5230\u9876\u7ea7id\u4f20\u9012\u8fc7\u6765\uff0c\u5982: \u77f3\u5bb6\u5e84\u5e02\u533a\uff0839\uff09->\u77f3\u5bb6\u5e84\u5e02\uff0838\uff09->\u6cb3\u5317\u7701\uff0837\uff09\u3002"))),(0,i.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "message": "ok"\n}\n')))}u.isMDXComponent=!0}}]);