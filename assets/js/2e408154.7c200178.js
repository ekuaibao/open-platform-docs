"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35176],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(n),k=r,u=c["".concat(p,".").concat(k)]||c[k]||s[k]||i;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},i=function(e){var t=e.method,n=e.url,i=e.description,l=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[t]},a.createElement("span",{className:r.method},t),a.createElement("strong",{dangerouslySetInnerHTML:{__html:l}}),i&&a.createElement("small",null,i))}},16132:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return s},default:function(){return k}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(41627),o=["components"],p={},m="\u65b0\u589e\u81ea\u5b9a\u4e49\u6863\u6848\u7c7b\u522b",d={unversionedId:"open-api/dimensions/create-dimensions",id:"version-v2.2/open-api/dimensions/create-dimensions",title:"\u65b0\u589e\u81ea\u5b9a\u4e49\u6863\u6848\u7c7b\u522b",description:"<Control",source:"@site/versioned_docs/version-v2.2/open-api/dimensions/create-dimensions.md",sourceDirName:"open-api/dimensions",slug:"/open-api/dimensions/create-dimensions",permalink:"/docs/open-api/dimensions/create-dimensions",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.2/open-api/dimensions/create-dimensions.md",tags:[],version:"v2.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/open-api/dimensions/info"},next:{title:"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u7c7b\u522b",permalink:"/docs/open-api/dimensions/get-dimensions"}},s=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],c={toc:s};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u65b0\u589e\u81ea\u5b9a\u4e49\u6863\u6848\u7c7b\u522b"},"\u65b0\u589e\u81ea\u5b9a\u4e49\u6863\u6848\u7c7b\u522b"),(0,i.kt)(l.Z,{method:"POST",url:"/api/openapi/v1/dimensions",mdxType:"Control"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,i.kt)("div",null,(0,i.kt)("p",null,"  ",(0,i.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#07143"},(0,i.kt)("strong",{parentName:"a"},"0.7.143"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,i.kt)("br",null)))),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"accessToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"td"},"accessToken"))))),(0,i.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u7c7b\u522b\u540d\u79f0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u7c7b\u522b\u540d\u79f0\u4e0d\u80fd\u91cd\u590d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"code")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u7c7b\u522b\u7f16\u7801"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u7c7b\u522b\u7f16\u7801\u53ef\u4e3a\u7a7a\uff0c\u4f46\u4e0d\u80fd\u91cd\u590d")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5f53\u586b\u5199\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," \u5b57\u6bb5\u5728\u7cfb\u7edf\u4e2d\u5df2\u5b58\u5728\uff0c\u4f1a\u5ffd\u7565 ",(0,i.kt)("inlineCode",{parentName:"li"},"code")," \u53c2\u6570\uff0c\u8fd4\u56de\u7cfb\u7edf\u4e2d\u5df2\u5b58\u5728\u7684\u6863\u6848\u7c7b\u522bID\u3002")))),(0,i.kt)("h2",{id:"curl"},"CURL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v1/dimensions?accessToken=ID_3mBvtR901YM:Urf3lsFgBp00gw\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "code":"01",\n    "name":" \u6863\u6848\u540d\u79f0"\n}\'\n')),(0,i.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,i.kt)("p",null,"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," \u7f16\u7801\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," \u540d\u79f0\u5728\u7cfb\u7edf\u4e2d\u5df2\u5b58\u5728\u65f6\uff0c\u4f1a\u8fd4\u56de\u5df2\u521b\u5efa\u7684\u6863\u6848\u503cID\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "Urf3lsFgBp00gw:\u6863\u6848\u540d\u79f0"   //\u6863\u6848\u503cID\n}\n')),(0,i.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"400")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u586b\u5199\u663e\u793a\u540d\u79f0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"name"),"\uff08\u6863\u6848\u7c7b\u522b\u540d\u79f0\uff09\u662f\u5426\u586b\u5199")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"412")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6b64\u7f16\u7801\u5df2\u7ecf\u88ab\u5360\u7528"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"code"),"\uff08\u6863\u6848\u7c7b\u522b\u7f16\u7801\uff09\u662f\u5426\u5df2\u5b58\u5728")))))}k.isMDXComponent=!0}}]);