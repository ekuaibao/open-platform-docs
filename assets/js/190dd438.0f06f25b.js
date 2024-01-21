"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[66189],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(n),c=r,u=k["".concat(o,".").concat(c)]||k[c]||s[c]||l;return n?a.createElement(u,i(i({ref:e},m),{},{components:n})):a.createElement(u,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},98448:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},97225:function(t,e,n){n.d(e,{Z:function(){return k}});var a=n(87462),r=n(67294),l=n(51048),i=n(22713);var p=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=n(21414),d=n(86010),m="tabItem_vU9c";function s(t){var e,n,l,i=t.lazy,s=t.block,k=t.defaultValue,c=t.values,u=t.groupId,N=t.className,f=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:f.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),y=(0,o.lx)(g,(function(t,e){return t.value===e.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===k?k:null!=(e=null!=k?k:null==(n=f.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=f[0])?void 0:l.props.value;if(null!==v&&!g.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=p(),h=b.tabGroupChoices,C=b.setTabGroupChoices,E=(0,r.useState)(v),D=E[0],I=E[1],O=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var w=h[u];null!=w&&w!==D&&g.some((function(t){return t.value===w}))&&I(w)}var P=function(t){var e=t.currentTarget,n=O.indexOf(e),a=g[n].value;a!==D&&(T(e),I(a),null!=u&&C(u,a))},j=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=O.indexOf(t.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(t.currentTarget)-1;n=O[r]||O[O.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":s},N)},g.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:function(t){return O.push(t)},onKeyDown:j,onFocus:P,onClick:P},l,{className:(0,d.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":D===e})}),null!=n?n:e)}))),i?(0,r.cloneElement)(f.filter((function(t){return t.props.value===D}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==D})}))))}function k(t){var e=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(e)},t))}},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description,i=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&a.createElement("small",null,l))}},6048:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return s},metadata:function(){return k},toc:function(){return c},default:function(){return N}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(41627),p=n(97225),o=n(98448),d=["components"],m={},s="\u66f4\u65b0\u81ea\u5b9a\u4e49\u6863\u6848\u9879",k={unversionedId:"open-api/dimensions/update-dimension-items",id:"version-v2.1/open-api/dimensions/update-dimension-items",title:"\u66f4\u65b0\u81ea\u5b9a\u4e49\u6863\u6848\u9879",description:"<Control",source:"@site/versioned_docs/version-v2.1/open-api/dimensions/update-dimension-items.md",sourceDirName:"open-api/dimensions",slug:"/open-api/dimensions/update-dimension-items",permalink:"/docs/v2.1/open-api/dimensions/update-dimension-items",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/dimensions/update-dimension-items.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6839\u636e\u540d\u79f0\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879",permalink:"/docs/v2.1/open-api/dimensions/get-dimension-items-byName"},next:{title:"\u505c\u7528\u81ea\u5b9a\u4e49\u6863\u6848\u9879",permalink:"/docs/v2.1/open-api/dimensions/disable-dimension-items"}},c=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],u={toc:c};function N(t){var e=t.components,n=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u66f4\u65b0\u81ea\u5b9a\u4e49\u6863\u6848\u9879"},"\u66f4\u65b0\u81ea\u5b9a\u4e49\u6863\u6848\u9879"),(0,l.kt)(i.Z,{method:"PUT",url:"/api/openapi/v1.1/dimensions/items/$`id`",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#180"},(0,l.kt)("strong",{parentName:"a"},"1.8.0"))," -> \ud83c\udd95 \u65b0\u589e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"baseCurrencyId"),"\uff08\u6cd5\u4eba\u5b9e\u4f53\u672c\u4f4d\u5e01\uff09\u53c2\u6570\uff0c\u4f7f\u7528\u6b64\u53c2\u6570\u9700\u8981\u5f00\u901a\u3010",(0,l.kt)("strong",{parentName:"p"},"\u6cd5\u4eba\u5b9e\u4f53\u591a\u5e01\u79cd"),"\u3011\u529f\u80fd\uff0c\u4f20\u53c2\u793a\u4f8b\u89c1CURL\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#150"},(0,l.kt)("strong",{parentName:"a"},"1.5.0"))," -> \ud83d\ude80 \u63a5\u53e3\u5347\u7ea7 ",(0,l.kt)("inlineCode",{parentName:"p"},"v1.1")," \u7248\u672c\uff0c\u65b0\u589e ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u7c7b\u578b\u53c2\u6570\uff0c\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"code")," \u4f20\u53c2\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u9879ID\u6216CODE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimension-items"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879")," \u83b7\u53d6\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"strong"},"type")," \u53c2\u6570\u4fdd\u6301\u4e00\u81f4"))))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")," : \u4f20id\u503c ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," : \u4f20code\u503c",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u8bf7\u4fdd\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"strong"},"code")," \u552f\u4e00\uff0c\u300e\u5458\u5de5\u300f\u548c\u300e\u90e8\u95e8\u300f\u7684 ",(0,l.kt)("inlineCode",{parentName:"strong"},"code")," \u5728\u7cfb\u7edf\u4e0a\u5141\u8bb8\u4e3a\u7a7a\u548c\u91cd\u590d"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"dimensionId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u7c7b\u522bCODE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"strong"},"code")," \u65f6\u5fc5\u586b\uff0c\u5426\u5219\u4e0d\u4f20"),(0,l.kt)("br",null),"\u6b64\u53c2\u6570\u53ef\u907f\u514d\u7cfb\u7edf\u5185\u91cd\u590d\u7684\u6863\u6848\u9879 ",(0,l.kt)("inlineCode",{parentName:"td"},"CODE")," \u62a5\u9519",(0,l.kt)("br",null),"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimensions"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u7c7b\u522b")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u9879\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u9879\u540d\u79f0\uff0c\u6700\u5927\u4e0d\u80fd\u8d85\u8fc7300\u4e2a\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u9879\u7f16\u7801"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u9879\u7f16\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"visibility")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u89c1\u8303\u56f4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u89c1\u8303\u56f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f fullVisible")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5168\u90e8\u53ef\u89c1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u5168\u90e8\u53ef\u89c1 ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u975e\u5168\u90e8\u53ef\u89c1\uff0c\u4ee5\u4e0b",(0,l.kt)("strong",{parentName:"td"},"\u4e09\u4e2a\u767d\u540d\u5355\u81f3\u5c11\u5fc5\u586b\u4e00\u9879"),(0,l.kt)("br",null),"\u5728\u975e\u5168\u90e8\u53ef\u89c1\u7684\u60c5\u51b5\u4e0b\uff0c\u4ec5\u767d\u540d\u5355\u5185\u7684\u5458\u5de5\u53ef\u89c1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f staffs")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5458\u5de5\u767d\u540d\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u5458\u5de5ID")," \u6216 ",(0,l.kt)("strong",{parentName:"td"},"CODE"),"\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"strong"},"type")," \u53c2\u6570\u4fdd\u6301\u4e00\u81f4"),(0,l.kt)("br",null),"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u83b7\u53d6\u5458\u5de5\u5217\u8868")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f roles")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u89d2\u8272\u767d\u540d\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u89d2\u8272ID")," \u6216 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/question-answer#%E9%97%AE%E9%A2%98%E4%B8%89"},"CODE"),"\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"strong"},"type")," \u53c2\u6570\u4fdd\u6301\u4e00\u81f4"),(0,l.kt)("br",null),"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-roles-group"},"\u67e5\u8be2\u89d2\u8272\u7ec4\u548c\u89d2\u8272")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f departments")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u767d\u540d\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u90e8\u95e8ID")," \u6216 ",(0,l.kt)("strong",{parentName:"td"},"CODE"),"\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"strong"},"type")," \u53c2\u6570\u4fdd\u6301\u4e00\u81f4"),(0,l.kt)("br",null),"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-departments"},"\u83b7\u53d6\u90e8\u95e8\u5217\u8868")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"parentId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7236\u8282\u70b9ID\u6216CODE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6839\u8282\u70b9\u8bf7\u586b\u5199 ",(0,l.kt)("inlineCode",{parentName:"td"},'""'),"\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"strong"},"type")," \u53c2\u6570\u4fdd\u6301\u4e00\u81f4"),(0,l.kt)("br",null),"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimension-items"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879")," \u83b7\u53d6")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u9884\u7f6e\u6863\u6848\u6709\u4e00\u4e9b\u989d\u5916\u5b57\u6bb5\uff0c\u8be6\u7ec6\u5b57\u6bb5\u4f20\u53c2\u89c1CURL\u91cc\u9762\u7684\u6ce8\u91ca\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u66f4\u65b0\u989d\u5916\u5b57\u6bb5\u65f6\uff0c\u9700\u8981\u5c06\u5bf9\u5e94\u6863\u6848\u7684\u5168\u90e8\u989d\u5916\u5b57\u6bb5\u4e00\u8d77\u4f20\u5165\uff0c\u5426\u5219\u672a\u4f20\u7684\u5b57\u6bb5\u4f1a\u88ab\u7f6e\u7a7a\u3002"))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)(p.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"id",label:"id",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request PUT \'https://app.ekuaibao.com/api/openapi/v1.1/dimensions/items/$XBUbxhnP5k8w00?accessToken=hQgbxfJnlElc00\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    //"dimensionId":"JOYbpjPP-E2Q00:\u9879\u76ee",                 //\u6863\u6848\u7c7b\u522bID\uff0ctype = id \u65f6\uff0c\u6b64\u53c2\u6570\u4e0d\u4f20\n    "name": "\u6863\u6848\u9879\u540d\u79f0",\n    "code": "\u6863\u6848\u9879\u7f16\u7801",\n    "visibility": {\n        "fullVisible": false,                              //\u975e\u5168\u90e8\u53ef\u89c1\n        "staffs": [ "JOYbpjPP-E2Q00:y8gbpjP9OsnI00" ],     //\u5458\u5de5ID\n        "roles": [],                                       //\u89d2\u8272ID\n        "departments": []                                  //\u90e8\u95e8ID\n    },\n    "parentId": "Ak0btTcoEkrA00",                          //\u7236\u8282\u70b9ID\n    //-----------------------------------------\n    //\u7cfb\u7edf\u9884\u7f6e\u6863\u6848\u989d\u5916\u53c2\u6570\u5982\u4e0b\uff0c\u4e0d\u7528\u65f6\u4e0d\u4f20\u5373\u53ef\uff1a        \n    "form":{\n        //\u201c\u9879\u76ee\u201d \u6863\u6848\u989d\u5916\u53c2\u6570\n        "projectBase": "[{\\"key\\":\\"8\\",\\"label\\":\\"\u5317\u4eac\u5e02/\u6d77\u6dc0\u533a\\"}]", //\u9879\u76ee\u6240\u5728\u5730\n        "projectInspector": "uIk3sePdIJ00v0:1102",                     //\u9879\u76ee\u603b\u76d1\uff0c\u503c\u4e3a\u5458\u5de5ID\u6216CODE\uff0c\u4e0e \u201ctype\u201d \u53c2\u6570\u4fdd\u6301\u4e00\u81f4\n        "projectManager": "uIk3sePdIJ00v0:AvT3lntT8zzpWw",             //\u9879\u76ee\u7ecf\u7406\uff0c\u503c\u4e3a\u5458\u5de5ID\u6216CODE\uff0c\u4e0e \u201ctype\u201d \u53c2\u6570\u4fdd\u6301\u4e00\u81f4\n        "projectType": "ID_3sjnVFu0ZOw",                               //\u9879\u76ee\u7c7b\u578b\uff0c\u503c\u4e3a\u3010\u9879\u76ee\u7c7b\u578b\u9884\u7f6e\u3011\u6863\u6848\u5b9e\u4f8bID\u6216CODE\uff0c\u4e0e \u201ctype\u201d \u53c2\u6570\u4fdd\u6301\u4e00\u81f4\n        //-----------------------------------------\n        //\u201c\u804c\u7ea7\u9884\u7f6e\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n        "rankType":"ID_3sjnv7SJeIw",                                   //\u804c\u7ea7\u7c7b\u578b\uff0c\u503c\u4e3a\u3010\u804c\u7ea7\u7c7b\u578b\u9884\u7f6e\u3011\u6863\u6848\u5b9e\u4f8bID\u6216CODE\uff0c\u4e0e \u201ctype\u201d \u53c2\u6570\u4fdd\u6301\u4e00\u81f4\n        //-----------------------------------------\n        //\u201c\u5c97\u4f4d\u9884\u7f6e\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n         "postType":"ID_3sjQzq30UL0",                                  //\u5c97\u4f4d\u7c7b\u578b\uff0c\u503c\u4e3a\u3010\u5c97\u4f4d\u7c7b\u578b\u9884\u7f6e\u3011\u6863\u6848\u5b9e\u4f8bID\u6216CODE\uff0c\u4e0e \u201ctype\u201d \u53c2\u6570\u4fdd\u6301\u4e00\u81f4\n        //-----------------------------------------\n        //\u201c\u6cd5\u4eba\u5b9e\u4f53\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n        "baseCurrencyId":"156",                                        //\u6cd5\u4eba\u5b9e\u4f53\u672c\u4f4d\u5e01\u6570\u5b57\u4ee3\u7801\uff0c\u53d6\u503c\u89c1\u5e01\u79cd\u8bbe\u7f6e\uff0c\u53ea\u53ef\u4f20\u7cfb\u7edf\u5185\u914d\u7f6e\u597d\u7684\u672c\u4f4d\u5e01\uff0c\u65e0\u6cd5\u4fee\u6539\u5df2\u914d\u7f6e\u7684\u672c\u4f4d\u5e01\uff0c\u9700\u8981\u5f00\u901a\u3010\u6cd5\u4eba\u5b9e\u4f53\u591a\u5e01\u79cd\u3011\u529f\u80fd        \n        "taxpayerType":"GeneralTaxpayer"                               //\u7eb3\u7a0e\u4eba\u7c7b\u578b\uff0cGeneralTaxpayer\uff1a\u4e00\u822c\u7eb3\u7a0e\u4eba\uff1bSmallScaleTaxpayer\uff1a\u5c0f\u89c4\u6a21\u7eb3\u7a0e\u4eba\n        //-----------------------------------------\n    },\n    //\u201c\u6cd5\u4eba\u5b9e\u4f53\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n    "payAccountIds":["uIk3sePdIJ00v0:BANK"],                            //\u53ef\u7528\u652f\u4ed8\u8d26\u6237\n    //\u201c\u6cd5\u4eba\u5b9e\u4f53\u201d\uff0c\u201c\u6210\u672c\u4e2d\u5fc3\u9884\u7f6e\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n    "departments":["uIk3sePdIJ00v0"]                                    //\u6240\u5c5e\u90e8\u95e8ID\u6216CODE\uff0c\u4e0e \u201ctype\u201d \u53c2\u6570\u4fdd\u6301\u4e00\u81f4\n}\'\n'))),(0,l.kt)(o.Z,{value:"code",label:"code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request PUT \'https://app.ekuaibao.com/api/openapi/v1.1/dimensions/items/$CODE11?accessToken=hQgbxfJnlElc00&type=code\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "dimensionId":"DA001",                                 //\u6863\u6848\u7c7b\u522bCODE\uff0ctype = code \u65f6\uff0c\u6b64\u53c2\u6570\u5fc5\u586b\n    "name": "\u6863\u6848\u9879\u540d\u79f0",\n    "code": "\u6863\u6848\u9879\u7f16\u7801",\n    "visibility": {\n        "fullVisible": false,                              //\u975e\u5168\u90e8\u53ef\u89c1\n        "staffs": [ "1001" ],                              //\u5458\u5de5CODE\uff08\u5de5\u53f7\uff09\n        "roles": [ "CODE2" ],                              //\u89d2\u8272CODE\n        "departments": [ "BM001" ]                         //\u90e8\u95e8CODE\n    },\n    "parentId": "CODE1",                                   //\u7236\u8282\u70b9CODE\n    //-----------------------------------------\n    //\u7cfb\u7edf\u9884\u7f6e\u6863\u6848\u989d\u5916\u53c2\u6570\u5982\u4e0b\uff0c\u4e0d\u7528\u65f6\u4e0d\u4f20\u5373\u53ef\uff1a        \n    "form":{\n        //\u201c\u9879\u76ee\u201d \u6863\u6848\u989d\u5916\u53c2\u6570\n        "projectBase": "[{\\"key\\":\\"8\\",\\"label\\":\\"\u5317\u4eac\u5e02/\u6d77\u6dc0\u533a\\"}]", //\u9879\u76ee\u6240\u5728\u5730\n        "projectInspector": "1001",                                    //\u9879\u76ee\u603b\u76d1\uff0c\u503c\u4e3a\u5458\u5de5ID\u6216CODE\uff0c\u4e0e \u201ctype\u201d \u53c2\u6570\u4fdd\u6301\u4e00\u81f4\n        "projectManager": "1001",                                      //\u9879\u76ee\u7ecf\u7406\uff0c\u503c\u4e3a\u5458\u5de5ID\u6216CODE\uff0c\u4e0e \u201ctype\u201d \u53c2\u6570\u4fdd\u6301\u4e00\u81f4\n        "projectType": "CODE1",                                        //\u9879\u76ee\u7c7b\u578b\uff0c\u503c\u4e3a\u3010\u9879\u76ee\u7c7b\u578b\u9884\u7f6e\u3011\u6863\u6848\u5b9e\u4f8bID\u6216CODE\uff0c\u4e0e \u201ctype\u201d \u53c2\u6570\u4fdd\u6301\u4e00\u81f4\n        //-----------------------------------------\n        //\u201c\u804c\u7ea7\u9884\u7f6e\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n        "rankType":"CODE1",                                            //\u804c\u7ea7\u7c7b\u578b\uff0c\u503c\u4e3a\u3010\u804c\u7ea7\u7c7b\u578b\u9884\u7f6e\u3011\u6863\u6848\u5b9e\u4f8bID\u6216CODE\uff0c\u4e0e \u201ctype\u201d \u53c2\u6570\u4fdd\u6301\u4e00\u81f4\n        //-----------------------------------------\n        //\u201c\u5c97\u4f4d\u9884\u7f6e\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n         "postType":"CODE1",                                           //\u5c97\u4f4d\u7c7b\u578b\uff0c\u503c\u4e3a\u3010\u5c97\u4f4d\u7c7b\u578b\u9884\u7f6e\u3011\u6863\u6848\u5b9e\u4f8bID\u6216CODE\uff0c\u4e0e \u201ctype\u201d \u53c2\u6570\u4fdd\u6301\u4e00\u81f4\n        //-----------------------------------------\n        //\u201c\u6cd5\u4eba\u5b9e\u4f53\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n        "baseCurrencyId":"156",                                        //\u6cd5\u4eba\u5b9e\u4f53\u672c\u4f4d\u5e01\u6570\u5b57\u4ee3\u7801\uff0c\u53d6\u503c\u89c1\u5e01\u79cd\u8bbe\u7f6e\uff0c\u53ea\u53ef\u4f20\u7cfb\u7edf\u5185\u914d\u7f6e\u597d\u7684\u672c\u4f4d\u5e01\uff0c\u65e0\u6cd5\u4fee\u6539\u5df2\u914d\u7f6e\u7684\u672c\u4f4d\u5e01\uff0c\u9700\u8981\u5f00\u901a\u3010\u6cd5\u4eba\u5b9e\u4f53\u591a\u5e01\u79cd\u3011\u529f\u80fd        \n        "taxpayerType":"GeneralTaxpayer"                               //\u7eb3\u7a0e\u4eba\u7c7b\u578b\uff0cGeneralTaxpayer\uff1a\u4e00\u822c\u7eb3\u7a0e\u4eba\uff1bSmallScaleTaxpayer\uff1a\u5c0f\u89c4\u6a21\u7eb3\u7a0e\u4eba\n        //-----------------------------------------\n    },\n    //\u201c\u6cd5\u4eba\u5b9e\u4f53\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n    "payAccountIds":["uIk3sePdIJ00v0:BANK"],                            //\u53ef\u7528\u652f\u4ed8\u8d26\u6237\n    //\u201c\u6cd5\u4eba\u5b9e\u4f53\u201d\uff0c\u201c\u6210\u672c\u4e2d\u5fc3\u9884\u7f6e\u201d\u6863\u6848\u989d\u5916\u53c2\u6570\n    "departments":["BM001"]                                             //\u6240\u5c5e\u90e8\u95e8ID\u6216CODE\uff0c\u4e0e \u201ctype\u201d \u53c2\u6570\u4fdd\u6301\u4e00\u81f4\n}\'\n')))),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u9700\u8981\u5224\u65ad ",(0,l.kt)("strong",{parentName:"li"},"HTTP\u72b6\u6001\u7801")," \u6765\u786e\u5b9a\u662f\u5426\u6210\u529f\uff0c\u54cd\u5e94\u6210\u529f\u65f6\u65e0\u5185\u5bb9\u8fd4\u56de\u3002")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"code 204\n")),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"baseCurrencyId\u5bf9\u5e94\u7684\u672c\u4f4d\u5e01\u5728\u4f01\u4e1a\u4e0d\u5b58\u5728\uff0c\u8bf7\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"baseCurrencyId")," \u53c2\u6570\u503c\u5bf9\u5e94\u7684\u672c\u4f4d\u5e01\u5728\u4f01\u4e1a\u5185\u662f\u5426\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7c7b\u578b\u4e3a\u6cd5\u4eba\u5b9e\u4f53\u65f6\uff0cbaseCurrencyId\u662f\u5fc5\u586b\u53c2\u6570\uff0c\u8bf7\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u901a\u4e86\u3010",(0,l.kt)("strong",{parentName:"td"},"\u6cd5\u4eba\u5b9e\u4f53\u591a\u5e01\u79cd"),"\u3011\u529f\u80fd\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"baseCurrencyId")," \u662f\u5fc5\u586b\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7c7b\u578b\u4e3acode\u65f6dimensionId\u662f\u5fc5\u586b\u53c2\u6570\uff0c\u8bf7\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"dimensionId"),"\uff08\u6863\u6848\u7c7b\u522bCODE) \u662f\u5fc5\u586b\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636ecode: [","[CODE22]","]\u4e0d\u80fd\u627e\u5230\u552f\u4e00\u7684\u6863\u6848\u9879"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," \u65f6\uff0c\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"parentId"),"\uff08\u7236\u8282\u70b9CODE\uff09\u662f\u5426\u6b63\u786e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"403")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6cd5\u4eba\u5b9e\u4f53\u7684\u591a\u5e01\u79cd\u4e0d\u5141\u8bb8\u4fee\u6539"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6cd5\u4eba\u5b9e\u4f53\u7684\u591a\u5e01\u79cd\u4e00\u7ecf\u914d\u7f6e\u4e0d\u5141\u8bb8\u4fee\u6539")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u7ea7\u6863\u6848","[ID_3yrzERx0Qf01]","\u4e0d\u5b58\u5728"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"td"},"id")," \u65f6\uff0c\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"parentId"),"\uff08\u7236\u8282\u70b9ID\uff09\u662f\u5426\u6b63\u786e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636ecode: [","[100]","]\u4e0d\u80fd\u627e\u5230\u552f\u4e00\u7684\u5458\u5de5"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," \u65f6\uff0c\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"staffs"),"\uff08\u5458\u5de5\u767d\u540d\u5355\uff09\u5728\u7cfb\u7edf\u4e2d\u662f\u5426\u91cd\u590d\u6216\u8005\u4e0d\u5b58\u5728")))))}N.isMDXComponent=!0}}]);