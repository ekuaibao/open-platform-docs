"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92140],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),f=p(n),c=r,k=f["".concat(o,".").concat(c)]||f[c]||s[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=f;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,i=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&a.createElement("small",null,l))}},94876:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(41627),d=["components"],o={},p="\u586b\u5199\u5355\u636e\u5ba1\u6279\u6d41\u7a0b(\u5355\u636e\u63d0\u4ea4)",m={unversionedId:"open-api/flows/flow-and-submit",id:"version-v2.0/open-api/flows/flow-and-submit",title:"\u586b\u5199\u5355\u636e\u5ba1\u6279\u6d41\u7a0b(\u5355\u636e\u63d0\u4ea4)",description:"<Control",source:"@site/versioned_docs/version-v2.0/open-api/flows/flow-and-submit.md",sourceDirName:"open-api/flows",slug:"/open-api/flows/flow-and-submit",permalink:"/docs/v2.0/open-api/flows/flow-and-submit",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/flows/flow-and-submit.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u6d41\u7a0b\u5b9e\u4f8b",permalink:"/docs/v2.0/open-api/flows/get-flow"},next:{title:"\u7b80\u5355\u5355\u636e\u4e8b\u4ef6\u5904\u7406",permalink:"/docs/v2.0/open-api/flows/do-action-flow"}},s=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"\u9644\u52a0\u8bf4\u660e",id:"\u9644\u52a0\u8bf4\u660e",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u786e\u8ba4\u63d0\u4ea4\u7ed3\u679c",id:"\u786e\u8ba4\u63d0\u4ea4\u7ed3\u679c",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],f={toc:s};function c(t){var e=t.components,n=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u586b\u5199\u5355\u636e\u5ba1\u6279\u6d41\u7a0b\u5355\u636e\u63d0\u4ea4"},"\u586b\u5199\u5355\u636e\u5ba1\u6279\u6d41\u7a0b(\u5355\u636e\u63d0\u4ea4)"),(0,l.kt)(i.Z,{method:"POST",url:"/api/openapi/v2/flow/data/submitFlow",mdxType:"Control"}),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u7ecf\u7531","[\u521b\u5efa\u5355\u636e]","\u63a5\u53e3\uff0c\u6b63\u786e\u4fdd\u5b58\u6570\u636e\u540e\uff0c\u914d\u7f6e\u5ba1\u6279\u4eba\uff0c\u8c03\u7528\u6b64\u63a5\u53e3\u63d0\u4ea4\u5355\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7a0b\u5e8f\u4f1a\u5bf9\u8bf7\u6c42\u53c2\u6570\u3001body\u6570\u636e\u683c\u5f0f\u4ee5\u53ca\u6d41\u7a0b\u8282\u70b9\u8fdb\u884c\u5b8c\u6574\u6027\u4e0e\u5408\u6cd5\u6027\u6821\u9a8c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0e\u4e1a\u52a1\u753b\u9762\u4e0a\u7684\u63d0\u4ea4\u5355\u636e\u529f\u80fd\u4e00\u6837\uff0c\u9700\u8981\u6309\u683c\u5f0f\u7ec4\u7ec7\u5ba1\u6279\u6d41\u7a0b\u8282\u70b9\u4fe1\u606f\u6570\u636e\uff0c\u63d0\u4ea4\u5355\u636e\u4fe1\u606f\u3002")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"flowId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5355\u636eID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/outbound-message/outbound-new"},"\u4e00\u822c\u901a\u8fc7\u51fa\u7ad9\u6d88\u606f\u83b7\u53d6\u5355\u636eId\u4fe1\u606f"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"isUrgent")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u52a0\u6025"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u52a0\u6025 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u4e0d\u52a0\u6025")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"urgentReason")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u52a0\u6025\u539f\u56e0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u52a0\u6025\u539f\u56e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"nodes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8282\u70b9\u4fe1\u606f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81f3\u5c11\u4e00\u4e2a\u8282\u70b9\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f configNodeId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u914d\u7f6e\u8282\u70b9ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/flows/get-flow"},"\u83b7\u53d6\u6d41\u7a0b\u5b9e\u4f8b"),"\u54cd\u5e94\u6570\u636e\u4e2d\u3010node\u3011\u6570\u7ec4\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"id"),"\u5b57\u6bb5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f approverId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5ba1\u6279\u4ebaId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636e\u914d\u7f6e\u7684\u5ba1\u6279\u6d41\u914d\u7f6e\u53bb\u5224\u65ad\u662f\u5426\u9700\u8981\u4f20\u9001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f counterSigners")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u7b7e\u5ba1\u6279\u4eba\u5217\u8868"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636e\u914d\u7f6e\u7684\u5ba1\u6279\u6d41\u914d\u7f6e\u53bb\u5224\u65ad\u662f\u5426\u9700\u8981\u4f20\u9001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," ","\u2003"," \u221f signerId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u7b7e\u5ba1\u6279\u4ebaID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u8bbe\u7f6e\u4f1a\u7b7e\u5ba1\u6279\u4eba\u5217\u8868\u65f6\u5019\u5fc5\u586b")))),(0,l.kt)("h2",{id:"\u9644\u52a0\u8bf4\u660e"},"\u9644\u52a0\u8bf4\u660e"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"isUrgent")," \u5b57\u6bb5\u8868\u8fbe\u662f\u5426\u52a0\u6025\uff1b",(0,l.kt)("inlineCode",{parentName:"p"},"urgentReason")," \u5b57\u6bb5\u4e3a\u52a0\u6025\u539f\u56e0\uff1b \u4ec5\u5f53\u6d41\u7a0b\u914d\u7f6e\u5141\u8bb8\u52a0\u6025\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"isUrgent"),' \u624d\u53ef\u4e3a"true"\uff1b')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684\u6d41\u7a0b\u5b9e\u4f8b\u4e2d\uff0c",(0,l.kt)("br",null),"\n","\u2003",' \u82e5\u67d0\u8282\u70b9\u7684 type="normal"\u65f6\uff0c\u5bf9\u5e94\u4f20\u5165\u53c2\u6570\u4e3a ',(0,l.kt)("inlineCode",{parentName:"p"},"approverId"),"\uff1b",(0,l.kt)("br",null),"\n","\u2003",' \u82e5\u67d0\u8282\u70b9\u7684 type="countersign"\u65f6\uff0c\u5bf9\u5e94\u4f20\u5165\u53c2\u6570\u4e3a ',(0,l.kt)("inlineCode",{parentName:"p"},"signerId"),"\uff1b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684\u6d41\u7a0b\u5b9e\u4f8b\u4e2d\uff0c",(0,l.kt)("br",null),"\n","\u2003",' \u82e5\u67d0\u8282\u70b9\u7684 type="normal"\uff0c\u4e14 allStaffs="true" \u65f6\uff0c\u53ef\u4f20\u5165\u4f01\u4e1a\u5185\u4efb\u610f\u5458\u5de5 ID\uff0c\u4ec5 \u5141\u8bb8\u4f20\u5165\u4e00\u4e2a\uff1b',(0,l.kt)("br",null),"\n","\u2003",' \u82e5\u67d0\u8282\u70b9\u7684 type="countersign"\uff0c\u4e14 allStaffs="true" \u65f6\uff0c\u53ef\u4f20\u5165\u4f01\u4e1a\u5185\u4efb\u610f\u5458\u5de5 ID\uff0c\u5141\u8bb8\u4f20\u5165 \u591a\u4e2a\uff1b')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'\u5728\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684\u6d41\u7a0b\u5b9e\u4f8b\u4e2d\uff0c\u82e5\u67d0\u8282\u70b9\u7684 allstaffs="false"\uff0c\u4e14 isauto="false"\uff1a',(0,l.kt)("br",null),"\n","\u2003",' \u5f53\u5176 type="normal"\u65f6\uff0c\u9700\u4f20\u5165 staffIds \u6570\u7ec4\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\u5458\u5de5 ID\uff1b',(0,l.kt)("br",null),"\n","\u2003",' \u5f53\u5176 type="countersign"\u65f6\uff0c\u9700\u4f20\u5165 staffIds \u6570\u7ec4\u4e2d\u7684\u4efb\u610f\u5458\u5de5 ID\uff0c\u5141\u8bb8\u4f20\u5165 \u591a\u4e2a\uff1b')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'\u5728\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684\u6d41\u7a0b\u5b9e\u4f8b\u4e2d\uff0c\u82e5\u67d0\u8282\u70b9\u7684 allstaffs="false"\uff0c\u4e14 isauto="true"\uff1a',(0,l.kt)("br",null),"\n","\u2003",' \u5f53\u5176 type="normal"\u65f6\uff0c\u9700\u4f20\u5165 staffIds \u6570\u7ec4\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\u5458\u5de5 ID\uff1b',(0,l.kt)("br",null),"\n","\u2003",' \u5f53\u5176 type="countersign"\u65f6\uff0c\u9700\u4f20\u5165 staffIds \u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5458\u5de5 ID\uff1b'))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v2/flow/data/submitFlow?accessToken=cWEbn1cA0kjU00&flowId=PQIbuN0nmYc800\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "isUrgent": false,\n    "urgentReason": "",\n    "nodes": [\n        {\n            "configNodeId": "@@:612A5312-1F93-4A09-B324-1CC3AE375F19",//\u914d\u7f6e\u8282\u70b9ID\n            "approverId": "KQI9kk5LZU0000:7q49kk50Cg0400" //\u5ba1\u6279\u4ebaId\n        },\n        {\n            "configNodeId": "@@:72BFA12C-4622-457F-A92F-F237DF9BAF26", //\u914d\u7f6e\u8282\u70b9ID\n            "counterSigners": [ //\u4f1a\u7b7e\u5ba1\u6279\u4eba\u5217\u8868\n                {\n                    "signerId": "KQI9kk5LZU0000:7q49kk50Cg0400" //\u4f1a\u7b7e\u5ba1\u6279\u4ebaID\n                },\n                {\n                    "signerId": "6Rk9l1WYNM0400:152219341224235350"//\u4f1a\u7b7e\u5ba1\u6279\u4ebaID\n                },\n                {\n                    "signerId": "6Rk9l1WYNM0400:11560833021005745"//\u4f1a\u7b7e\u5ba1\u6279\u4ebaID\n                }\n            ]\n        },\n        {\n            "configNodeId": "@@:5D3C0936-1E4C-49AD-BAE3-1B99C894C198",\n            "counterSigners": [\n                {\n                    "signerId": "KQI9kk5LZU0000:7q49kk50Cg0400"\n                }\n            ]\n        }\n    ]\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value":"",\n    "type":-1,\n    "flow":{\n        "version":1,//\u7248\u672c\n        "active":true,//\u662f\u5426\u505c\u7528\uff08\u662f\u5426\u6709\u6548\uff09\n        "createTime":1562864828130,//\u521b\u5efa\u65f6\u95f4\n        "updateTime":1562864828130,//\u66f4\u65b0\u65f6\u95f4\n        "corporationId":"dNU9lELfXs0g00",//\u4f01\u4e1aid\n        "form":{\n            "code":"B19000019",//\u5355\u636e\u7f16\u53f7\n            "title":"api \u6d4b\u8bd5\u52a0\u6025\u771f",//\u5355\u636e\u6807\u9898\n            "details":[//\u660e\u7ec6\u8be6\u60c5\n                {\n                    "feeTypeId":"dNU9lELfXs0g00:office",//\u8d39\u7528\u7c7b\u578bid\n                    "feeTypeForm":{\n                        "amount":{//\u660e\u7ec6\u91d1\u989d\n                            "standard":"500.00",\n                            "standardUnit":"\u5143",\n                            "standardScale":2,\n                            "standardSymbol":"\xa5",\n                            "standardNumCode":"156",\n                            "standardStrCode":"CNY"\n                        },\n                        "detailId":"Xok9pY7cXo2w00",//\u660e\u7ec6id\n                        "invoiceForm":{//\u53d1\u7968\n                            "type":"wait",\n                            "attachments":[\n\n                            ]\n                        }\n                    },\n                    "specificationId":"dNU9lELfXs0g00:office:expense:2b43fb410d8d5cadb681282ace8f14090500eedb"//\u8d39\u7528\u6a21\u677fid\n                }\n            ],\n            "payMoney":{//\u652f\u4ed8\u91d1\u989d\n                "standard":"500.00",\n                "standardStrCode":"CNY",\n                "standardNumCode":"156",\n                "standardSymbol":"\xa5",\n                "standardUnit":"\u5143",\n                "standardScale":"2"\n            },\n            "submitDate":1562864828009,//\u63d0\u4ea4\u65e5\u671f\n            "expenseDate":1562036472205,//\u62a5\u9500\u65e5\u671f\n            "submitterId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",//\u63d0\u4ea4\u4ebaid\n            "expenseMoney":{//\u62a5\u9500\u91d1\u989d\n                "standard":"500.00",\n                "standardStrCode":"CNY",\n                "standardNumCode":"156",\n                "standardSymbol":"\xa5",\n                "standardUnit":"\u5143",\n                "standardScale":"2"\n            },\n            "companyRealPay":{\n                "standard":"0.00",\n                "standardStrCode":"CNY",\n                "standardNumCode":"156",\n                "standardSymbol":"\xa5",\n                "standardUnit":"\u5143",\n                "standardScale":"2"\n            },\n            "specificationId":"Ys49lCDmlgbc00:6ad521918f3ff67fe11866cab1888da290e74c85",//\u5355\u636e\u6a21\u677fid\n            "writtenOffMoney":{\n                "standard":"0.00",\n                "standardStrCode":"CNY",\n                "standardNumCode":"156",\n                "standardSymbol":"\xa5",\n                "standardUnit":"\u5143",\n                "standardScale":"2"\n            }\n        },\n        "ownerId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",//\u5355\u636e\u6240\u5c5e\u4ebaid\n        "ownerDefaultDepartment":"dNU9lELfXs0g00",//\u6240\u5c5e\u4eba\u90e8\u95e8\n        "state":"pending",//\u5355\u636e\u72b6\u6001\uff0c\u63d0\u4ea4\u4e2d\uff08\u9884\u7b97\u8ba1\u7b97\uff09\n        "flowType":"freeflow",\n        "formType":"expense",//\u5355\u636e\u7c7b\u578b\n        "logs":[//\u5ba1\u6279\u65e5\u5fd7\n\n        ],\n        "actions":{\n\n        },\n        "id":"YLg9pY7cXo2k00"//\u5355\u636eid\n    }\n}\n')),(0,l.kt)("h2",{id:"\u786e\u8ba4\u63d0\u4ea4\u7ed3\u679c"},"\u786e\u8ba4\u63d0\u4ea4\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u5355\u636e\u540e\uff0c\u5408\u601d\u9884\u7f6e\u7684\u300c\u8d39\u7528\u6807\u51c6\u68c0\u67e5\u300d\u8282\u70b9\uff0c\u4f1a\u68c0\u67e5\u5355\u636e\u4e2d\u7684\u9884\u7b97\u3001\u8d39\u7528\u6807\u51c6\u7b49\u8d39\u63a7\u6307\u6807\u662f\u5426\u5408\u89c4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u5b58\u5728\u4e0d\u5408\u89c4\uff0c\u9700\u8981\u9a73\u56de\u7684\u60c5\u51b5\u65f6\uff0c\u8be5\u8282\u70b9\u4f1a\u81ea\u52a8\u9a73\u56de\u5355\u636e\u3002 \u6b64\u65f6\u9700\u8c03\u7528\u300c\u83b7\u53d6\u5355\u636e\u8be6\u60c5\u300d\u63a5\u53e3\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6839\u636e\u8fd4\u56de\u6570\u636e\u4e2d\u7684\u3010state\u3011\uff0c\u5224\u65ad\u8be5\u5355\u636e\u662f\u5426\u88ab \u9a73\u56de\uff0c\u5982\u8fd4\u56de state!=\u201cdraft\u201d \u4e14 state!=\u201crejected\u201d\uff0c\u5219\u8be5\u5355\u636e\u63d0\u4ea4\u6210\u529f\u3002")),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 400,\n    "errorMessage": "openapi\u5355\u636e\u6570\u636e\u63d0\u4ea4\uff0c\u5ba1\u6279\u8282\u70b9[\u6d4b\u8bd5\u4e0b\u4e00\u4e2a\u64cd\u4f5c\u4eba]\uff0c\u8bbe\u7f6e\u7684\u4eba\u5458\u6ca1\u6709\u5ba1\u6279\u6743\u9650\uff0c\u8bf7\u6838\u5bf9\u5ba1\u6279\u6d41\u6a21\u677f\u914d\u7f6e\u3002",//\u6dfb\u52a0\u7684\u5ba1\u6279\u4ebaId\u4e0d\u5408\u89c4\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')))}c.isMDXComponent=!0}}]);