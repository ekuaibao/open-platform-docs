"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25061],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(a),c=r,s=k["".concat(p,".").concat(c)]||k[c]||u[c]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},98448:function(t,e,a){var n=a(67294);e.Z=function(t){var e=t.children,a=t.hidden,r=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},e)}},97225:function(t,e,a){a.d(e,{Z:function(){return k}});var n=a(87462),r=a(67294),l=a(51048),i=a(22713);var o=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},p=a(21414),d=a(86010),m="tabItem_vU9c";function u(t){var e,a,l,i=t.lazy,u=t.block,k=t.defaultValue,c=t.values,s=t.groupId,f=t.className,N=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:N.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),b=(0,p.lx)(g,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===k?k:null!=(e=null!=k?k:null==(a=N.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(l=N[0])?void 0:l.props.value;if(null!==h&&!g.some((function(t){return t.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=o(),y=v.tabGroupChoices,w=v.setTabGroupChoices,C=(0,r.useState)(h),T=C[0],D=C[1],E=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var P=y[s];null!=P&&P!==T&&g.some((function(t){return t.value===P}))&&D(P)}var S=function(t){var e=t.currentTarget,a=E.indexOf(e),n=g[a].value;n!==T&&(O(e),D(n),null!=s&&w(s,n))},V=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n=E.indexOf(t.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(t.currentTarget)-1;a=E[r]||E[E.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":u},f)},g.map((function(t){var e=t.value,a=t.label,l=t.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:function(t){return E.push(t)},onKeyDown:V,onFocus:S,onClick:S},l,{className:(0,d.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":T===e})}),null!=a?a:e)}))),i?(0,r.cloneElement)(N.filter((function(t){return t.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==T})}))))}function k(t){var e=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(e)},t))}},41627:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,a=t.url,l=t.description,i=a.replace(/\`(.*?)\`/g,"<span>$1</span>");return n.createElement("div",{className:r.control+" "+r[e]},n.createElement("span",{className:r.method},e),n.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&n.createElement("small",null,l))}},22732:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return k},toc:function(){return c},default:function(){return f}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(41627),o=a(97225),p=a(98448),d=["components"],m={},u="\u7f16\u8f91\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e",k={unversionedId:"open-api/recordLink/edit-dimension-relation-items",id:"version-v2.1/open-api/recordLink/edit-dimension-relation-items",title:"\u7f16\u8f91\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e",description:"<Control",source:"@site/versioned_docs/version-v2.1/open-api/recordLink/edit-dimension-relation-items.md",sourceDirName:"open-api/recordLink",slug:"/open-api/recordLink/edit-dimension-relation-items",permalink:"/docs/v2.1/open-api/recordLink/edit-dimension-relation-items",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/recordLink/edit-dimension-relation-items.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e",permalink:"/docs/v2.1/open-api/recordLink/update-dimension-relation-items"},next:{title:"\u5e38\u89c1\u95ee\u9898\u603b\u7ed3",permalink:"/docs/v2.1/open-api/recordLink/question-answer"}},c=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],s={toc:c};function f(t){var e=t.components,a=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7f16\u8f91\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e"},"\u7f16\u8f91\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e"),(0,l.kt)(i.Z,{method:"POST",url:"/api/openapi/v2.1/recordLink/editSingle/$`id`",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#140"},(0,l.kt)("strong",{parentName:"a"},"1.4.0"))," ","\u2003"," -> \ud83d\udc1e \u66f4\u65b0\u4e86\u6821\u9a8c\u903b\u8f91\uff0c\u6863\u6848\u5173\u7cfb\u7c7b\u578b\u5171\u516d\u79cd\uff0c\u5168\u90fd\u505a\u53c2\u6570\u6821\u9a8c\uff0c\u82e5\u4f20\u5165\u5df2\u5220\u9664\u53c2\u6570\u5219\u62a5\u9519",(0,l.kt)("br",null),"\n","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," \u25cf ",(0,l.kt)("strong",{parentName:"p"},"\u672a\u6fc0\u6d3b/\u5df2\u79fb\u9664")," \u5458\u5de5\uff0c\u4e0d\u80fd\u8fdb\u884c\u4efb\u4f55\u6863\u6848\u5173\u7cfb\u6570\u636e\u64cd\u4f5c\u3002",(0,l.kt)("br",null),"\n","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," \u25cf body\u53c2\u6570\u91cc\u4f20\u591a\u4e2a\u503c\u65f6\uff0c\u6821\u9a8c\u53c2\u6570\u4efb\u610f\u4e00\u4e2a\u4e0d\u5b58\u5728\u5219\u62a5\u9519\u3002",(0,l.kt)("br",null),"\n","\u2003"," ","\u2003"," ","\u2003"," -> \ud83d\udc1e \u65e0\u6548\u679c\u7684\u7f16\u8f91\u8fd4\u56de\u4fe1\u606f\u63d0\u793a\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#130"},(0,l.kt)("strong",{parentName:"a"},"1.3.0"))," ","\u2003"," -> \ud83c\udd95 \u65b0\u589e ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u7c7b\u578b\u53c2\u6570\uff0c\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"code")," \u4f20\u53c2\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#07125"},(0,l.kt)("strong",{parentName:"a"},"0.7.125"))," -> \ud83c\udd95 \u65b0\u589e\u4e86\u672c\u63a5\u53e3\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u5173\u7cfbID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/recordLink/get-dimension-relation"},"\u83b7\u53d6\u4f01\u4e1a\u4e0b\u6863\u6848\u5173\u7cfb\u5217\u8868")," \u83b7\u53d6")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")," : \u4f20id\u503c ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," : \u4f20code\u503c",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u8bf7\u4fdd\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"strong"},"code")," \u552f\u4e00\uff0c\u300e\u5458\u5de5\u300f\u548c\u300e\u90e8\u95e8\u300f\u7684 ",(0,l.kt)("inlineCode",{parentName:"strong"},"code")," \u5728\u7cfb\u7edf\u4e0a\u5141\u8bb8\u4e3a\u7a7a\u548c\u91cd\u590d"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"recordLinks")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6279\u91cf\u66f4\u65b0\u9879"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6279\u91cf\u66f4\u65b0\u9879")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f oldSourceValue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65e7\u6e90\u7ef4\u5ea6\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/recordLink/get-dimension-relation-items"},"\u83b7\u53d6\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f oldPurposeValue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65e7\u76ee\u6807\u7ef4\u5ea6\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/recordLink/get-dimension-relation-items"},"\u83b7\u53d6\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e")," \u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f newSourceValue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u6e90\u7ef4\u5ea6\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u6e90\u7ef4\u5ea6\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f newPurposeValue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u76ee\u6807\u7ef4\u5ea6\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u76ee\u6807\u7ef4\u5ea6\u503c")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"id",label:"id",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/editSingle/$ID_3BFuV7KbVDw?accessToken=ID_3BKtCKGf_k0:bwa3wajigF0WH0&type=id\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "recordLinks": [\n        {\n            "oldSourceValue": "bwa3wajigF0WH0:qKZ3wlg6bv9OGg",  //\u4ee5\u201c\u5458\u5de5\u548c\u9879\u76ee\u201d\u6863\u6848\u5173\u7cfb\u4e3a\u4f8b\uff0c\u65e7\u5458\u5de5ID\n            "oldPurposeValue": "ID_3zYtLIa21gM",                //\u65e7\u9879\u76eeID \n            "newSourceValue": "bwa3wajigF0WH0:ID_3lokDfb1p5w",  //\u65b0\u5458\u5de5ID\n            "newPurposeValue": "ID_3B9HDc30MOM"                 //\u65b0\u9879\u76eeID\n        }\n    ]\n}\'\n'))),(0,l.kt)(p.Z,{value:"code",label:"code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/editSingle/$ID_3BFuV7KbVDw?accessToken=ID_3BKtCKGf_k0:bwa3wajigF0WH0&type=code\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "recordLinks": [\n        {\n            "oldSourceValue": "1003",                           //\u4ee5\u201c\u5458\u5de5\u548c\u9879\u76ee\u201d\u6863\u6848\u5173\u7cfb\u4e3a\u4f8b\uff0c\u65e7\u5458\u5de5\u5de5\u53f7\uff08CODE\uff09\n            "oldPurposeValue": "CODE1",                         //\u65e7\u9879\u76eeCODE\n            "newSourceValue": "1001",                           //\u65b0\u5458\u5de5\u5de5\u53f7\uff08CODE\uff09\n            "newPurposeValue": "CODE2"                          //\u65b0\u9879\u76eeCODE\n        }\n    ]\n}\'\n')))),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5173\u7cfb\u66f4\u65b0\u6210\u529f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u5173\u7cfbID:ID_3BfDMDHeZ20\u4e0d\u5b58\u5728\u6216\u5df2\u5220\u9664\uff01"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"id"),"\uff08\u6863\u6848\u5173\u7cfbID\uff09\u662f\u5426\u5df2\u5220\u9664")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65e0\u6548\u7684\u6863\u6848\u5173\u7cfbID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"id"),"\uff08\u6863\u6848\u5173\u7cfbID\uff09\u662f\u5426\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65e7\u6863\u6848\u5173\u7cfb\u4e0d\u5b58\u5728"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"oldSourceValue"),"\uff08\u65e7\u6e90\u7ef4\u5ea6\u503c\uff09\u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"oldPurposeValue"),"\uff08\u65e7\u76ee\u6807\u7ef4\u5ea6\u503c\uff09\u5bf9\u5e94\u7684\u65e7\u6863\u6848\u5173\u7cfb\u662f\u5426\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u6863\u6848\u5173\u7cfb\u5df2\u7ecf\u5b58\u5728"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"newSourceValue"),"\uff08\u65b0\u6e90\u7ef4\u5ea6\u503c\uff09\u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"newPurposeValue"),"\uff08\u65b0\u76ee\u6807\u7ef4\u5ea6\u503c\uff09\u5bf9\u5e94\u7684\u65b0\u6863\u6848\u5173\u7cfb\u662f\u5426\u5df2\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ef4\u5ea6\u503c","[CODE12]","\u5bf9\u5e94\u7684\u6570\u636e\u4e0d\u5b58\u5728"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"oldSourceValue"),"\uff08\u65e7\u6e90\u7ef4\u5ea6\u503c\uff09\u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"oldPurposeValue"),"\uff08\u65e7\u76ee\u6807\u7ef4\u5ea6\u503c\uff09\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"newSourceValue"),"\uff08\u65b0\u6e90\u7ef4\u5ea6\u503c\uff09\u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"newPurposeValue"),"\uff08\u65b0\u76ee\u6807\u7ef4\u5ea6\u503c\uff09\u662f\u5426\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[code]","\u4e3a","[CODE3]","\u7684\u6570\u636e\u5df2\u505c\u7528\u6216\u5220\u9664"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"newSourceValue"),"\uff08\u65b0\u6e90\u7ef4\u5ea6\u503c\uff09\u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"newPurposeValue"),"\uff08\u65b0\u76ee\u6807\u7ef4\u5ea6\u503c\uff09\u662f\u5426\u505c\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[code]","\u4e3a","[20220408]","\u7684\u5458\u5de5\u672a\u6fc0\u6d3b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b\u5458\u5de5\u7c7b\u578b\u7684\u6863\u6848\u5173\u7cfb\uff0c\u8bf7\u786e\u8ba4\u4f20\u53c2\u7684\u5458\u5de5\uff08",(0,l.kt)("inlineCode",{parentName:"td"},"newSourceValue"),"\uff08\u65b0\u6e90\u7ef4\u5ea6\u503c\uff09\u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"newPurposeValue"),"\uff08\u65b0\u76ee\u6807\u7ef4\u5ea6\u503c\uff09\uff09\u662f\u5426\u6fc0\u6d3b\u6216\u79fb\u9664")))))}f.isMDXComponent=!0}}]);