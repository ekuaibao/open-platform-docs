"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9409],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=o(a),k=r,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98448:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},97225:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(87462),r=a(67294),l=a(51048),i=a(22713);var d=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=a(21414),o=a(86010),s="tabItem_vU9c";function m(e){var t,a,l,i=e.lazy,m=e.block,u=e.defaultValue,k=e.values,c=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,p.lx)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(t=null!=u?u:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==v&&!N.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=d(),_=h.tabGroupChoices,y=h.setTabGroupChoices,E=(0,r.useState)(v),I=E[0],w=E[1],D=[],T=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var C=_[c];null!=C&&C!==I&&N.some((function(e){return e.value===C}))&&w(C)}var O=function(e){var t=e.currentTarget,a=D.indexOf(t),n=N[a].value;n!==I&&(T(t),w(n),null!=c&&y(c,n))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=D.indexOf(e.currentTarget)+1;a=D[n]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;a=D[r]||D[D.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},N.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return D.push(e)},onKeyDown:j,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":I===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function u(e){var t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},41627:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var t=e.method,a=e.url,l=e.description,i=a.replace(/\`(.*?)\`/g,"<span>$1</span>");return n.createElement("div",{className:r.control+" "+r[t]},n.createElement("span",{className:r.method},t),n.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&n.createElement("small",null,l))}},95187:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return k},default:function(){return f}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(41627),d=a(97225),p=a(98448),o=["components"],s={},m="\u65b0\u589e\u6216\u66f4\u65b0\u4e1a\u52a1\u5bf9\u8c61\u6570\u636e",u={unversionedId:"open-api/datalink/update-entity-data",id:"version-v2.0/open-api/datalink/update-entity-data",title:"\u65b0\u589e\u6216\u66f4\u65b0\u4e1a\u52a1\u5bf9\u8c61\u6570\u636e",description:"\u5411\u6307\u5b9a\u4e1a\u52a1\u5bf9\u8c61\u6dfb\u52a0\u6216\u4fee\u6539\u6570\u636e\uff0c\u4ee5\u7cfb\u7edf\u9884\u5236\u5b57\u6bb5 code \u4e3a\u4f9d\u636e(\u4e1a\u52a1\u5bf9\u8c61\u4e0b\u552f\u4e00)\uff0c\u4e0d\u5b58\u5728\u5c31\u65b0\u589e\u6570\u636e\uff0c\u5b58\u5728\u5219\u66f4\u65b0\u6570\u636e\u3002",source:"@site/versioned_docs/version-v2.0/open-api/datalink/update-entity-data.md",sourceDirName:"open-api/datalink",slug:"/open-api/datalink/update-entity-data",permalink:"/docs/v2.0/open-api/datalink/update-entity-data",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/datalink/update-entity-data.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u589e\u5220\u4e1a\u52a1\u5bf9\u8c61\u5b57\u6bb5",permalink:"/docs/v2.0/open-api/datalink/add-delete-entity-field"},next:{title:"\u914d\u7f6e\u81ea\u5b9a\u4e49\u6269\u5c55\u81ea\u52a8\u8d4b\u503c",permalink:"/docs/v2.0/open-api/datalink/field-mapping"}},k=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"\u5404\u7c7b\u578b\u5b57\u6bb5\u503c\u793a\u4f8b",id:"\u5404\u7c7b\u578b\u5b57\u6bb5\u503c\u793a\u4f8b",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],c={toc:k};function f(e){var t=e.components,s=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u65b0\u589e\u6216\u66f4\u65b0\u4e1a\u52a1\u5bf9\u8c61\u6570\u636e"},"\u65b0\u589e\u6216\u66f4\u65b0\u4e1a\u52a1\u5bf9\u8c61\u6570\u636e"),(0,l.kt)("p",null,"\u5411\u6307\u5b9a\u4e1a\u52a1\u5bf9\u8c61\u6dfb\u52a0\u6216\u4fee\u6539\u6570\u636e\uff0c\u4ee5\u7cfb\u7edf\u9884\u5236\u5b57\u6bb5 ",(0,l.kt)("inlineCode",{parentName:"p"},"code")," \u4e3a\u4f9d\u636e(\u4e1a\u52a1\u5bf9\u8c61\u4e0b\u552f\u4e00)\uff0c\u4e0d\u5b58\u5728\u5c31\u65b0\u589e\u6570\u636e\uff0c\u5b58\u5728\u5219\u66f4\u65b0\u6570\u636e\u3002"),(0,l.kt)(i.Z,{method:"POST",url:"/api/openapi/v2/datalink/add",mdxType:"Control"}),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"entityId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u5bf9\u8c61ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/datalink/question-answer#%E9%97%AE%E9%A2%98%E4%B8%80"},"\u4e1a\u52a1\u5bf9\u8c61ID\u83b7\u53d6"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"importPart")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u90e8\u5206\u5bfc\u5165"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u6709\u4e00\u6761\u6570\u636e\u5bfc\u5165\u5931\u8d25\u540e\uff0c\u5176\u4ed6\u6570\u636e\u662f\u5426\u7ee7\u7eed\u5bfc\u5165\u3002",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u5f53\u5bfc\u5165\u9644\u4ef6\u65f6\uff0c\u6b64\u9879\u5fc5\u586b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"strong"},"true")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"dataLinks")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u6570\u636e\u6570\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u65b0\u589e\u6216\u4fee\u6539\u7684\u4e1a\u52a1\u5bf9\u8c61\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f count")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u5f15\u7528\u6b21\u6570"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9650\u5236\u5f15\u7528\u6b21\u6570\u65f6\u5fc5\u586b\u3002\u82e5\u8bbe\u7f6e\u7684\u503c\u5c0f\u4e8e\u5df2\u5f15\u7528\u6b21\u6570\uff0c\u5219\u5408\u601d\u7cfb\u7edf\u4f1a\u81ea\u52a8\u4fee\u6b63\u5230\u5df2\u5f15\u7528\u6b21\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f disabled")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u505c\u7528"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u505c\u7528 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u542f\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f ownerId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8d1f\u8d23\u4ebaID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u503c\u4e3a",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u5458\u5de5ID"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u683c\u5f0f\u4e3a {\u5b57\u6bb5\u540d\u79f0 : \u5b57\u6bb5\u503c}\u3002 ",(0,l.kt)("inlineCode",{parentName:"td"},"\u5b57\u6bb5\u540d\u79f0")," \u662f",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/datalink/get-entity-list"},"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61"),"\u8fd4\u56de\u503c\u4e2d ",(0,l.kt)("inlineCode",{parentName:"td"},"fields")," \u91cc\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"name")," \u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f visible")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u89c1\u6027"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u5bf9\u8c61\u201d\u53c2\u4e0e\u4eba\u914d\u7f6e\u201c\u4e3a\u201d\u90e8\u5206\u4eba\u5458\u53c2\u4e0e\u201c\u65f6\u6b64\u53c2\u6570\u624d\u6709\u6548\uff0c\u4e3a\u201c\u5168\u5458\u53c2\u4e0e\u201d\u65f6\u6b64\u53c2\u6570\u4e0d\u751f\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," ","\u2003"," \u221f fullVisible")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5168\u5458\u53ef\u89c1\u6027"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u5168\u90e8\u53ef\u89c1 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u6307\u5b9a\u5458\u5de5\u53ef\u89c1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," ","\u2003"," \u221f staffs")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u89c1\u5458\u5de5ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u503c\u4e3a",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u5458\u5de5ID"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," ","\u2003"," \u221f roles")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u89c1\u89d2\u8272ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u503c\u4e3a",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-roles-group"},"\u89d2\u8272ID"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," ","\u2003"," \u221f departments")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u89c1\u90e8\u95e8ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u503c\u4e3a",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-departments"},"\u90e8\u95e8ID"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," ","\u2003"," \u221f departmentsIncludeChildren")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b50\u90e8\u95e8\u662f\u5426\u53ef\u89c1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u53ef\u89c1 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u4e0d\u53ef\u89c1")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"dataLinks.data")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"code")," \u5b57\u6bb5\u503c\u4e3a\u5fc5\u586b\u5b57\u6bb5\uff0c\u65b0\u589e\u6570\u636e\u65f6\uff0c\u5982\u679ccode\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"\u81ea\u52a8\u7f16\u53f7"),"\uff0c\u4f20 ",(0,l.kt)("inlineCode",{parentName:"p"},'""')," \u5373\u53ef\uff0c\u5982\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6587\u672c")," \u7c7b\u578b\uff0c\u8868\u793a\u624b\u52a8\u4f20\u5165\u7f16\u53f7\uff0c\u4e0d\u53ef\u4e3a\u7a7a\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u66f4\u65b0\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u6570\u636e\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"dataLinks.data")," \u4e2d\u4e0d\u4f20\u7684\u5b57\u6bb5\uff0c\u8868\u793a\u6e05\u7a7a\u8be5\u5b57\u6bb5\u7684\u503c\uff0c\u8981\u683c\u5916\u6ce8\u610f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"dataLinks.visible")," \u53c2\u6570\u9700\u8981\u914d\u5408\u4e1a\u52a1\u5bf9\u8c61\u201d\u53c2\u4e0e\u4eba\u914d\u7f6e\u201c\u4e00\u8d77\u4f7f\u7528\uff0c\u53ea\u6709\u201d\u90e8\u5206\u4eba\u5458\u53c2\u4e0e\u201c\u65f6\u6b64\u53c2\u6570\u624d\u6709\u6548\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"image",src:a(36233).Z}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e1a\u52a1\u5bf9\u8c61\u5b57\u6bb5\u95ee\u9898\uff1a\u4e1a\u52a1\u5bf9\u8c61\u589e\u52a0\u4e00\u4e2a\u5b57\u6bb5\uff0c\u4f8b\u5982\u201c\u59d3\u540d\u201d\uff0c\u4fdd\u5b58\u540e\u5220\u9664\u8fd9\u4e2a\u5b57\u6bb5\uff0c\u518d\u4fdd\u5b58\u540e\u589e\u52a0\u201c\u59d3\u540d\u201d\u5b57\u6bb5\uff0c\u7cfb\u7edf\u4e2d\u5b9e\u9645\u5b57\u6bb5\u540d\u81ea\u52a8\u7f16\u53f7+1\uff0c\u8fd9\u79cd\u5b57\u6bb5\u65b0\u589e\u548c\u66f4\u65b0\u6570\u636e\u65f6\u8981\u6ce8\u610f\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"image",src:a(28921).Z}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u82e5\u9700\u8981\u5173\u8054\u5176\u4ed6\u4e1a\u52a1\u5bf9\u8c61\u3001\u81ea\u5b9a\u4e49\u6863\u6848\u7b49\uff0c\u4f20\u5176\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u5373\u53ef\u3002"))))),(0,l.kt)("h2",{id:"\u5404\u7c7b\u578b\u5b57\u6bb5\u503c\u793a\u4f8b"},"\u5404\u7c7b\u578b\u5b57\u6bb5\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'- \u6587\u672c - "\u6570\u636e1"\n- \u65e5\u671f - "1528276414283"\n- \u65e5\u671f\u8303\u56f4 - "1528276414283-1528276414283"\n- \u6570\u5b57 - "1.2234"\n- \u91d1\u989d - "12.35"\n- \u5f00\u5173 - true\n- \u9644\u4ef6\uff08\u8f6c\u4e49\u540e\u7684json\u683c\u5f0f\u5b57\u7b26\u4e32\uff0c\u591a\u4e2a\u9644\u4ef6\u65f6\u7528 ";" \u5206\u9694\uff09:\n  "{\\"key\\": \\"openapib9e51730-f778-4b81-b108-d6ca27d44ad9-\u767b\u5f55\u5bc6\u7801.txt\\", \\"fileId\\": \\"zEIb-kGNMsoc00\\", \\"fileName\\": \\"\u767b\u5f55\u5bc6\u7801.txt\\"}"\n- \u4eba\u5458\uff08\u4eba\u5458\u591a\u9009\u7c7b\u578b\uff0c\u591a\u4e2a\u4eba\u65f6\u7528","\u5206\u9694\uff09:\n  "Urf3lsFgBp00gw:Msy3lYjbQ103KM,Urf3lsFgBp00gw:mRI3oQU9lg02q0,Urf3lsFgBp00gw:Fmd3oQU9lg00q0"\n')),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("p",null,"\u6839\u636e\u4e1a\u52a1\u5bf9\u8c61\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u6743\u9650"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u505c\u7528\u65b9\u5f0f")," \u914d\u7f6e\u4e0d\u540c\uff0c\u6240\u9700Body Parameters\u7684\u6570\u636e\u7ed3\u6784\u7565\u6709\u5dee\u5f02\uff0c\u8bf7\u6839\u636e\u914d\u7f6e\u9009\u62e9\u5408\u9002\u7684\u793a\u4f8b\u3002"),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"\u5168\u5458\u53ef\u89c1&\u9650\u5236\u6b21\u6570",label:"\u5168\u5458\u53ef\u89c1&\u9650\u5236\u6b21\u6570",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v2/datalink/add?accessToken=cxEbrzNJSA3A00\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "entityId": "ea9d0b6e522a25878000",\n    "dataLinks": [\n        {\n            "count": 1,              //\u9650\u5236\u5f15\u7528\u6b21\u6570 1\n            "visible":{              //\u4e1a\u52a1\u5bf9\u8c61\u201d\u53c2\u4e0e\u4eba\u914d\u7f6e\u201c\u4e3a\u201d\u90e8\u5206\u4eba\u5458\u53c2\u4e0e\u201c\u65f6\u6b64\u53c2\u6570\u624d\u6709\u6548\uff0c\u5426\u5219\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e0d\u751f\u6548\n                "fullVisible":true,  //\u5168\u5458\u53ef\u89c1\uff0c\u4e3atrue\u65f6\uff0c\u4e0b\u97624\u4e2a\u53c2\u6570\u914d\u7f6e\u65e0\u6548\n                "staffs":[],         //\u53ef\u89c1\u5458\u5de5ID\n                "roles":[],          //\u53ef\u89c1\u89d2\u8272ID\n                "departments":[],    //\u53ef\u89c1\u90e8\u95e8ID\n                "departmentsIncludeChildren":true  //\u5b50\u90e8\u95e8\u662f\u5426\u53ef\u89c1\n            },\n            "disabled":false,        //true:\u505c\u7528 false:\u542f\u7528\n            "ownerId":"",            //\u8d1f\u8d23\u4ebaID\n            "data": {\n                "E_ea9d0b6e522a25878000_name":"\u6570\u636e\u540d\u79f01",\n                "E_ea9d0b6e522a25878000_code":"1",      //\u552f\u4e00ID\n                "E_ea9d0b6e522a25878000_\u6587\u672c":"\u6587\u672c1",\n                "E_ea9d0b6e522a25878000_\u65e5\u671f":"1529393393795",\n                "E_ea9d0b6e522a25878000_\u65e5\u671f\u8303\u56f4":"1476921600000-1529393393795",\n                "E_ea9d0b6e522a25878000_\u5c0f\u6570":"2.03",\n                "E_ea9d0b6e522a25878000_\u6574\u6570":"3",\n                "E_ea9d0b6e522a25878000_\u91d1\u989d":"10",\n                "E_ea9d0b6e522a25878000_\u5f00\u5173":false,\n                "E_ea9d0b6e522a25878000_\u8d26\u53f7":"pko998ovFMe800",      //\u94f6\u884c\u8d26\u53f7\u552f\u4e00ID\n                "E_ea9d0b6e522a25878000_\u4e1a\u52a1\u5bf9\u8c61":"dgs9fzle3A1I00",  //\u5173\u8054\u4e1a\u52a1\u5b9e\u4f53\u5bf9\u8c61ID\n                "E_ea9d0b6e522a25878000_\u81ea\u5b9a\u4e49\u6863\u6848":"6S49gt6c5E0w00" //\u5173\u8054\u81ea\u5b9a\u4e49\u6863\u6848ID\n            }\n        }\n    ]\n}\'\n\n'))),(0,l.kt)(p.Z,{value:"\u5168\u5458\u53ef\u89c1&\u7ba1\u7406\u5458\u505c\u542f\u7528",label:"\u5168\u5458\u53ef\u89c1&\u7ba1\u7406\u5458\u505c\u542f\u7528",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v2/datalink/add?accessToken=cxEbrzNJSA3A00\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "entityId": "ea9d0b6e522a25878000",\n    "dataLinks": [\n        {\n            "visible":{               //\u4e1a\u52a1\u5bf9\u8c61\u201d\u53c2\u4e0e\u4eba\u914d\u7f6e\u201c\u4e3a\u201d\u90e8\u5206\u4eba\u5458\u53c2\u4e0e\u201c\u65f6\u6b64\u53c2\u6570\u624d\u6709\u6548\uff0c\u5426\u5219\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e0d\u751f\u6548\n                "fullVisible":true,   //\u5168\u5458\u53ef\u89c1\uff0c\u4e3atrue\u65f6\uff0c\u4e0b\u97624\u4e2a\u53c2\u6570\u914d\u7f6e\u65e0\u6548\n                "staffs":[],          //\u53ef\u89c1\u5458\u5de5ID\n                "roles":[],           //\u53ef\u89c1\u89d2\u8272ID\n                "departments":[],     //\u53ef\u89c1\u90e8\u95e8ID\n                "departmentsIncludeChildren":true  //\u5b50\u90e8\u95e8\u662f\u5426\u53ef\u89c1\n            },\n            "disabled": false,                           //true:\u505c\u7528 false:\u542f\u7528\n            "ownerId":"Urf3lsFgBp00gw:Fmd3oQU9lg00q0",   //\u8d1f\u8d23\u4ebaID\uff0c\u8bbe\u7f6e\u53ef\u4ee5\u505c\u542f\u7528\u6b64\u6570\u636e\u7684\u4eba\u5458\n            "data": {\n                "E_ea9d0b6e522a25878000_name":"\u6570\u636e\u540d\u79f01",\n                "E_ea9d0b6e522a25878000_code":"1",       //\u552f\u4e00ID\n                "E_ea9d0b6e522a25878000_\u6587\u672c":"\u6587\u672c1",\n                "E_ea9d0b6e522a25878000_\u65e5\u671f":"1529393393795",\n                "E_ea9d0b6e522a25878000_\u65e5\u671f\u8303\u56f4":"1476921600000-1529393393795",\n                "E_ea9d0b6e522a25878000_\u5c0f\u6570":"2.03",\n                "E_ea9d0b6e522a25878000_\u6574\u6570":"3",\n                "E_ea9d0b6e522a25878000_\u91d1\u989d":"10",\n                "E_ea9d0b6e522a25878000_\u5f00\u5173":false,\n                "E_ea9d0b6e522a25878000_\u8d26\u53f7":"pko998ovFMe800",        //\u94f6\u884c\u8d26\u53f7\u552f\u4e00ID\n                "E_ea9d0b6e522a25878000_\u4e1a\u52a1\u5bf9\u8c61":"dgs9fzle3A1I00",    //\u5173\u8054\u4e1a\u52a1\u5b9e\u4f53\u5bf9\u8c61ID\n                "E_ea9d0b6e522a25878000_\u81ea\u5b9a\u4e49\u6863\u6848":"6S49gt6c5E0w00"   //\u5173\u8054\u81ea\u5b9a\u4e49\u6863\u6848ID\n            }\n        }\n    ]\n}\'\n'))),(0,l.kt)(p.Z,{value:"\u90e8\u5206\u53ef\u89c1&\u9650\u5236\u6b21\u6570",label:"\u90e8\u5206\u53ef\u89c1&\u9650\u5236\u6b21\u6570",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v2/datalink/add?accessToken=cxEbrzNJSA3A00\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "entityId": "ea9d0b6e522a25878000",\n    "dataLinks": [\n        {\n            "count": 1,                //\u9650\u5236\u5f15\u7528\u6b21\u6570 1\n            "visible":{                //\u4e1a\u52a1\u5bf9\u8c61\u201d\u53c2\u4e0e\u4eba\u914d\u7f6e\u201c\u4e3a\u201d\u90e8\u5206\u4eba\u5458\u53c2\u4e0e\u201c\u65f6\u6b64\u53c2\u6570\u624d\u6709\u6548\uff0c\u5426\u5219\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e0d\u751f\u6548\n                "fullVisible":false,   //\u90e8\u5206\u53ef\u89c1\uff0c\u4e3afalse\u65f6\uff0c\u4e0b\u97624\u4e2a\u53c2\u6570\u914d\u7f6e\u624d\u6709\u6548\n                "staffs":["Urf3lsFgBp00gw:Fmd3oQU9lg00q0","Urf3lsFgBp00gw:AvT3lntT8zzpWw"],  //\u53ef\u89c1\u5458\u5de5ID\n                "roles":[],                        //\u53ef\u89c1\u89d2\u8272ID\n                "departments":[],                  //\u53ef\u89c1\u90e8\u95e8ID\n                "departmentsIncludeChildren":true  //\u5b50\u90e8\u95e8\u662f\u5426\u53ef\u89c1\n            },\n            "disabled":false,                      //true:\u505c\u7528 false:\u542f\u7528\n            "ownerId":"",                          //\u8d1f\u8d23\u4ebaID\n            "data": {\n                "E_ea9d0b6e522a25878000_name":"\u6570\u636e\u540d\u79f01",\n                "E_ea9d0b6e522a25878000_code":"1",  //\u552f\u4e00ID\n                "E_ea9d0b6e522a25878000_\u6587\u672c":"\u6587\u672c1",\n                "E_ea9d0b6e522a25878000_\u65e5\u671f":"1529393393795",\n                "E_ea9d0b6e522a25878000_\u65e5\u671f\u8303\u56f4":"1476921600000-1529393393795",\n                "E_ea9d0b6e522a25878000_\u5c0f\u6570":"2.03",\n                "E_ea9d0b6e522a25878000_\u6574\u6570":"3",\n                "E_ea9d0b6e522a25878000_\u91d1\u989d":"10",\n                "E_ea9d0b6e522a25878000_\u5f00\u5173":false,\n                "E_ea9d0b6e522a25878000_\u8d26\u53f7":"pko998ovFMe800",       //\u94f6\u884c\u8d26\u53f7\u552f\u4e00ID\n                "E_ea9d0b6e522a25878000_\u4e1a\u52a1\u5bf9\u8c61":"dgs9fzle3A1I00",   //\u5173\u8054\u4e1a\u52a1\u5b9e\u4f53\u5bf9\u8c61ID\n                "E_ea9d0b6e522a25878000_\u81ea\u5b9a\u4e49\u6863\u6848":"6S49gt6c5E0w00"  //\u5173\u8054\u81ea\u5b9a\u4e49\u6863\u6848ID\n            }\n        }\n    ]\n}\'\n'))),(0,l.kt)(p.Z,{value:"\u90e8\u5206\u53ef\u89c1&\u7ba1\u7406\u5458\u505c\u542f\u7528",label:"\u90e8\u5206\u53ef\u89c1&\u7ba1\u7406\u5458\u505c\u542f\u7528",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v2/datalink/add?accessToken=cxEbrzNJSA3A00\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "entityId": "ea9d0b6e522a25878000",\n    "dataLinks": [\n        {\n            "visible":{                   //\u4e1a\u52a1\u5bf9\u8c61\u201d\u53c2\u4e0e\u4eba\u914d\u7f6e\u201c\u4e3a\u201d\u90e8\u5206\u4eba\u5458\u53c2\u4e0e\u201c\u65f6\u6b64\u53c2\u6570\u624d\u6709\u6548\uff0c\u5426\u5219\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e0d\u751f\u6548\n                "fullVisible":false,      //\u90e8\u5206\u53ef\u89c1\uff0c\u4e3afalse\u65f6\uff0c\u4e0b\u97624\u4e2a\u53c2\u6570\u914d\u7f6e\u624d\u6709\u6548\n                "staffs":["Urf3lsFgBp00gw:Fmd3oQU9lg00q0","Urf3lsFgBp00gw:AvT3lntT8zzpWw"],  //\u53ef\u89c1\u5458\u5de5ID\n                "roles":[],                        //\u53ef\u89c1\u89d2\u8272ID\n                "departments":[],                  //\u53ef\u89c1\u90e8\u95e8ID\n                "departmentsIncludeChildren":true  //\u5b50\u90e8\u95e8\u662f\u5426\u53ef\u89c1\n            },\n            "disabled":false,                           //true:\u505c\u7528 false:\u542f\u7528\n            "ownerId":"Urf3lsFgBp00gw:Fmd3oQU9lg00q0",  //\u8d1f\u8d23\u4ebaID,\u8bbe\u7f6e\u53ef\u4ee5\u505c\u542f\u7528\u6b64\u6570\u636e\u7684\u4eba\u5458\n            "data": {\n                "E_ea9d0b6e522a25878000_name":"\u6570\u636e\u540d\u79f01",\n                "E_ea9d0b6e522a25878000_code":"1",      //\u552f\u4e00ID\n                "E_ea9d0b6e522a25878000_\u6587\u672c":"\u6587\u672c1",\n                "E_ea9d0b6e522a25878000_\u65e5\u671f":"1529393393795",\n                "E_ea9d0b6e522a25878000_\u65e5\u671f\u8303\u56f4":"1476921600000-1529393393795",\n                "E_ea9d0b6e522a25878000_\u5c0f\u6570":"2.03",\n                "E_ea9d0b6e522a25878000_\u6574\u6570":"3",\n                "E_ea9d0b6e522a25878000_\u91d1\u989d":"10",\n                "E_ea9d0b6e522a25878000_\u5f00\u5173":false,\n                "E_ea9d0b6e522a25878000_\u8d26\u53f7":"pko998ovFMe800",        //\u94f6\u884c\u8d26\u53f7\u552f\u4e00ID\n                "E_ea9d0b6e522a25878000_\u4e1a\u52a1\u5bf9\u8c61":"dgs9fzle3A1I00",    //\u5173\u8054\u4e1a\u52a1\u5b9e\u4f53\u5bf9\u8c61ID\n                "E_ea9d0b6e522a25878000_\u81ea\u5b9a\u4e49\u6863\u6848":"6S49gt6c5E0w00"   //\u5173\u8054\u81ea\u5b9a\u4e49\u6863\u6848ID\n            }\n        }\n    ]\n}\'\n')))),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "errorMsg": [\n          "\u7b2c1\u6761\u6570\u636e\u5bfc\u5165\u6210\u529f"\n        ],\n        "dataLinkIds": {\n            "004": "cagbsyR13Qok00"  //key\u8868\u793acode\uff0cvalue\u8868\u793aid\n        },\n        "success": true\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"dataLinks.data")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"code")," \u5b57\u6bb5\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6587\u672c")," \u7c7b\u578b\uff0c\u4e14\u4f20 ",(0,l.kt)("inlineCode",{parentName:"p"},'""')," \u65f6\u8fd4\u56de\u5982\u4e0b\u54cd\u5e94\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "errorMsg": [\n            "\u7b2c1\u6761[\u7f16\u7801]\u6570\u636e\u683c\u5f0f\u4e0d\u6b63\u786e,\u5fc5\u586b\uff0c\u4e0d\u80fd\u4e3a\u7a7a"\n        ],\n        "dataLinkIds": {},\n        "success": false\n    }\n}\n')),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"importPart")," \u5e76\u672a\u8bbe\u7f6e\u6216\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \u65f6\uff0c\u82e5\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u6709\u6570\u636e\u5bfc\u5165\u5931\u8d25\uff0c\u5219\u540e\u7eed\u6570\u636e\u505c\u6b62\u5bfc\u5165\u5e76\u8fd4\u56de\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "errorMsg": [\n            "\u7b2c1\u6761[\u7f16\u7801]\u6570\u636e\u4e0d\u6b63\u786e"\n        ],\n        "dataLinkIds": {},\n        "success": false\n    }\n}\n')),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"importPart")," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u5373\u4f7f\u6709\u6570\u636e\u5bfc\u5165\u5931\u8d25\uff0c\u5176\u4ed6\u6570\u636e\u4f9d\u7136\u4f1a\u7ee7\u7eed\u5bfc\u5165\u5e76\u8fd4\u56de\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "errorMsg": [\n            "\u7b2c1\u6761[\u7f16\u7801]\u6570\u636e\u4e0d\u6b63\u786e",\n            "\u7b2c2\u6761\u6570\u636e\u5bfc\u5165\u6210\u529f"\n        ],\n        "dataLinkIds": {   //\u5bfc\u5165\u6210\u529f\u7684\u6570\u636e\u5217\u8868\n            "068": "yXUbszrwDg1Y00"\n        },\n        "success": false\n    }\n}\n')))}f.isMDXComponent=!0},36233:function(e,t,a){t.Z=a.p+"assets/images/visible-4dccf9ad2d21e596d28da11879e6bd33.png"},28921:function(e,t,a){t.Z=a.p+"assets/images/\u66f4\u65b0\u4e1a\u52a1\u5bf9\u8c61\u6570\u636e\u6ce8\u610f\u4e8b\u9879-3bb2f3db6b87d9b3c1f70485c05bb826.png"}}]);