"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97780],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),c=r,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},98448:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},97225:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(87462),r=a(67294),l=a(51048),i=a(22713);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=a(21414),d=a(86010),m="tabItem_vU9c";function u(e){var t,a,l,i=e.lazy,u=e.block,s=e.defaultValue,c=e.values,k=e.groupId,f=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,p.lx)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===s?s:null!=(t=null!=s?s:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=N[0])?void 0:l.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),y=b.tabGroupChoices,w=b.setTabGroupChoices,T=(0,r.useState)(v),E=T[0],C=T[1],O=[],D=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var P=y[k];null!=P&&P!==E&&g.some((function(e){return e.value===P}))&&C(P)}var j=function(e){var t=e.currentTarget,a=O.indexOf(t),n=g[a].value;n!==E&&(D(t),C(n),null!=k&&w(k,n))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":u},f)},g.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:j,onClick:j},l,{className:(0,d.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(N.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function s(e){var t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},41627:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var t=e.method,a=e.url,l=e.description,i=a.replace(/\`(.*?)\`/g,"<span>$1</span>");return n.createElement("div",{className:r.control+" "+r[t]},n.createElement("span",{className:r.method},t),n.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&n.createElement("small",null,l))}},7178:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(41627),o=a(97225),p=a(98448),d=["components"],m={},u="\u5220\u9664\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e",s={unversionedId:"open-api/recordLink/delete-dimension-relation-items",id:"version-v2.2/open-api/recordLink/delete-dimension-relation-items",title:"\u5220\u9664\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e",description:"<Control",source:"@site/versioned_docs/version-v2.2/open-api/recordLink/delete-dimension-relation-items.md",sourceDirName:"open-api/recordLink",slug:"/open-api/recordLink/delete-dimension-relation-items",permalink:"/docs/open-api/recordLink/delete-dimension-relation-items",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.2/open-api/recordLink/delete-dimension-relation-items.md",tags:[],version:"v2.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u65b0\u589e\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e",permalink:"/docs/open-api/recordLink/creat-dimension-relation-items"},next:{title:"\u66f4\u65b0\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e",permalink:"/docs/open-api/recordLink/update-dimension-relation-items"}},c=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],k={toc:c};function f(e){var t=e.components,a=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5220\u9664\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e"},"\u5220\u9664\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e"),(0,l.kt)(i.Z,{method:"POST",url:"/api/openapi/v2.1/recordLink/del/$`id`",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#140"},(0,l.kt)("strong",{parentName:"a"},"1.4.0"))," ","\u2003"," -> \ud83d\udc1e \u66f4\u65b0\u4e86\u6821\u9a8c\u903b\u8f91\uff0c\u6863\u6848\u5173\u7cfb\u7c7b\u578b\u5171\u516d\u79cd\uff0c\u5168\u90fd\u505a\u53c2\u6570\u6821\u9a8c\uff0c\u82e5\u4f20\u5165\u5df2\u5220\u9664\u53c2\u6570\u5219\u62a5\u9519",(0,l.kt)("br",null),"\n","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," \u25cf ",(0,l.kt)("strong",{parentName:"p"},"\u672a\u6fc0\u6d3b/\u5df2\u79fb\u9664")," \u5458\u5de5\uff0c\u4e0d\u80fd\u8fdb\u884c\u4efb\u4f55\u6863\u6848\u5173\u7cfb\u6570\u636e\u64cd\u4f5c\u3002",(0,l.kt)("br",null),"\n","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," \u25cf body\u53c2\u6570\u91cc\u4f20\u591a\u4e2a\u503c\u65f6\uff0c\u6821\u9a8c\u53c2\u6570\u4efb\u610f\u4e00\u4e2a\u4e0d\u5b58\u5728\u5219\u62a5\u9519\u3002",(0,l.kt)("br",null),"\n","\u2003"," ","\u2003"," ","\u2003"," -> \ud83d\udc1e \u65e0\u6548\u679c\u7684\u5220\u9664\u8fd4\u56de\u4fe1\u606f\u63d0\u793a\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#130"},(0,l.kt)("strong",{parentName:"a"},"1.3.0"))," ","\u2003"," -> \ud83c\udd95 \u65b0\u589e ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u7c7b\u578b\u53c2\u6570\uff0c\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"code")," \u4f20\u53c2\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#07132"},(0,l.kt)("strong",{parentName:"a"},"0.7.132"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u652f\u6301\u4e24\u79cd\u7ef4\u5ea6\u53d6\u4ea4\u96c6\u5220\u9664\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u5173\u7cfbID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/recordLink/get-dimension-relation"},"\u83b7\u53d6\u4f01\u4e1a\u4e0b\u6863\u6848\u5173\u7cfb\u5217\u8868")," \u83b7\u53d6")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")," : \u4f20id\u503c ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," : \u4f20code\u503c",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u8bf7\u4fdd\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"strong"},"code")," \u552f\u4e00\uff0c\u300e\u5458\u5de5\u300f\u548c\u300e\u90e8\u95e8\u300f\u7684 ",(0,l.kt)("inlineCode",{parentName:"strong"},"code")," \u5728\u7cfb\u7edf\u4e0a\u5141\u8bb8\u4e3a\u7a7a\u548c\u91cd\u590d"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"sourceValues")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6e90\u7ef4\u5ea6\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/recordLink/get-dimension-relation-items"},"\u83b7\u53d6\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"purposeValues")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76ee\u6807\u7ef4\u5ea6\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/recordLink/get-dimension-relation-items"},"\u83b7\u53d6\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e")," \u83b7\u53d6")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u5f53\u586b ",(0,l.kt)("inlineCode",{parentName:"li"},"sourceValues")," \u65f6\uff0c\u4ee5\u6e90\u7ef4\u5ea6\u5220\u9664\u76f8\u5173\u6863\u6848\u5173\u7cfb\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u586b ",(0,l.kt)("inlineCode",{parentName:"li"},"purposeValues")," \u65f6\uff0c\u4ee5\u76ee\u6807\u7ef4\u5ea6\u5220\u9664\u76f8\u5173\u6863\u6848\u5173\u7cfb\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"sourceValues")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"purposeValues")," \u90fd\u586b\u65f6\uff0c\u4ee5\u6e90\u7ef4\u5ea6\u548c\u76ee\u6807\u7ef4\u5ea6\u7684\u4ea4\u96c6\u5220\u9664\u76f8\u5173\u6863\u6848\u5173\u7cfb\u3002")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"id",label:"id",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/del/$ID_3BFuV7KbVDw?accessToken=ID_3BJKZuv8iow:bwa3wajigF0WH0&type=id\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "sourceValues": [  //\u4ee5\u201c\u5458\u5de5\u548c\u9879\u76ee\u201d\u6863\u6848\u5173\u7cfb\u4e3a\u4f8b\uff0c\u5458\u5de5ID\n       "bwa3wajigF0WH0:qKZ3wlg6bv9OGg","bwa3wajigF0WH0:IqQ3wlg6bv9QGg","bwa3wajigF0WH0:aRx3BagJH20mdg"\n    ],\n    "purposeValues": []\n}\'\n'))),(0,l.kt)(p.Z,{value:"code",label:"code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/del/$ID_3BFuV7KbVDw?accessToken=ID_3BJKZuv8iow:bwa3wajigF0WH0&type=code\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "sourceValues": [  //\u4ee5\u201c\u5458\u5de5\u548c\u9879\u76ee\u201d\u6863\u6848\u5173\u7cfb\u4e3a\u4f8b\uff0c\u5458\u5de5\u5de5\u53f7\uff08CODE\uff09\n       "1001","1002","1003"\n    ],\n    "purposeValues": []\n}\'\n')))),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5173\u7cfb\u5220\u9664\u6210\u529f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f20\u5165\u7684\u6863\u6848\u5173\u7cfb\u53c2\u6570\u4e0d\u5b58\u5728\uff0c\u65e0\u6cd5\u5220\u9664"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u4f20\u5165\u7684\u6863\u6848\u5173\u7cfb\u53c2\u6570\u662f\u5426\u5df2\u5220\u9664\uff08\u4f8b\u5982\uff0c\u540c\u4e00\u7ec4\u53c2\u6570\u91cd\u590d\u8c03\u7528\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u5173\u7cfbID:ID_3BfDMDHeZ20\u4e0d\u5b58\u5728\u6216\u5df2\u5220\u9664\uff01"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"id"),"\uff08\u6863\u6848\u5173\u7cfbID\uff09\u662f\u5426\u5df2\u5220\u9664")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65e0\u6548\u7684\u6863\u6848\u5173\u7cfbID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"id"),"\uff08\u6863\u6848\u5173\u7cfbID\uff09\u662f\u5426\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ef4\u5ea6\u503c","[sss]","\u5bf9\u5e94\u7684\u6570\u636e\u4e0d\u5b58\u5728"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"sourceValues"),"\uff08\u6e90\u7ef4\u5ea6\u503c\uff09\u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"purposeValues"),"\uff08\u76ee\u6807\u7ef4\u5ea6\u503c\uff09\u662f\u5426\u5b58\u5728")))))}f.isMDXComponent=!0}}]);