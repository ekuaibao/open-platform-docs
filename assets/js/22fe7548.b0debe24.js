"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[93091],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(a),c=r,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},98448:function(t,e,a){var n=a(67294);e.Z=function(t){var e=t.children,a=t.hidden,r=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},e)}},97225:function(t,e,a){a.d(e,{Z:function(){return s}});var n=a(87462),r=a(67294),l=a(51048),i=a(22713);var o=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},p=a(21414),d=a(86010),m="tabItem_vU9c";function u(t){var e,a,l,i=t.lazy,u=t.block,s=t.defaultValue,c=t.values,k=t.groupId,f=t.className,N=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:N.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),b=(0,p.lx)(g,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===s?s:null!=(e=null!=s?s:null==(a=N.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(l=N[0])?void 0:l.props.value;if(null!==v&&!g.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=o(),y=h.tabGroupChoices,w=h.setTabGroupChoices,T=(0,r.useState)(v),E=T[0],C=T[1],D=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var P=y[k];null!=P&&P!==E&&g.some((function(t){return t.value===P}))&&C(P)}var I=function(t){var e=t.currentTarget,a=D.indexOf(e),n=g[a].value;n!==E&&(O(e),C(n),null!=k&&w(k,n))},j=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n=D.indexOf(t.currentTarget)+1;a=D[n]||D[0];break;case"ArrowLeft":var r=D.indexOf(t.currentTarget)-1;a=D[r]||D[D.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":u},f)},g.map((function(t){var e=t.value,a=t.label,l=t.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:function(t){return D.push(t)},onKeyDown:j,onFocus:I,onClick:I},l,{className:(0,d.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":E===e})}),null!=a?a:e)}))),i?(0,r.cloneElement)(N.filter((function(t){return t.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==E})}))))}function s(t){var e=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(e)},t))}},41627:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,a=t.url,l=t.description,i=a.replace(/\`(.*?)\`/g,"<span>$1</span>");return n.createElement("div",{className:r.control+" "+r[e]},n.createElement("span",{className:r.method},e),n.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&n.createElement("small",null,l))}},25095:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(41627),o=a(97225),p=a(98448),d=["components"],m={},u="\u65b0\u589e\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e",s={unversionedId:"open-api/recordLink/creat-dimension-relation-items",id:"version-v2.2/open-api/recordLink/creat-dimension-relation-items",title:"\u65b0\u589e\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e",description:"<Control",source:"@site/versioned_docs/version-v2.2/open-api/recordLink/creat-dimension-relation-items.md",sourceDirName:"open-api/recordLink",slug:"/open-api/recordLink/creat-dimension-relation-items",permalink:"/docs/open-api/recordLink/creat-dimension-relation-items",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.2/open-api/recordLink/creat-dimension-relation-items.md",tags:[],version:"v2.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e",permalink:"/docs/open-api/recordLink/get-dimension-relation-items"},next:{title:"\u5220\u9664\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e",permalink:"/docs/open-api/recordLink/delete-dimension-relation-items"}},c=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],k={toc:c};function f(t){var e=t.components,m=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,n.Z)({},k,m,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u65b0\u589e\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e"},"\u65b0\u589e\u67d0\u6863\u6848\u5173\u7cfb\u4e0b\u7684\u6863\u6848\u9879\u6570\u636e"),(0,l.kt)(i.Z,{method:"POST",url:"/api/openapi/v2.1/recordLink/add/$`id`",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#140"},(0,l.kt)("strong",{parentName:"a"},"1.4.0"))," -> \ud83d\udc1e \u66f4\u65b0\u4e86\u6821\u9a8c\u903b\u8f91\uff0c\u6863\u6848\u5173\u7cfb\u7c7b\u578b\u5171\u516d\u79cd\uff0c\u5168\u90fd\u505a\u53c2\u6570\u6821\u9a8c\uff0c\u82e5\u4f20\u5165\u5df2\u5220\u9664\u53c2\u6570\u5219\u62a5\u9519",(0,l.kt)("br",null),"\n","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," \u25cf ",(0,l.kt)("strong",{parentName:"p"},"\u672a\u6fc0\u6d3b/\u5df2\u79fb\u9664")," \u5458\u5de5\uff0c\u4e0d\u80fd\u8fdb\u884c\u4efb\u4f55\u6863\u6848\u5173\u7cfb\u6570\u636e\u64cd\u4f5c\u3002",(0,l.kt)("br",null),"\n","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," ","\u2003"," \u25cf body\u53c2\u6570\u91cc\u4f20\u591a\u4e2a\u503c\u65f6\uff0c\u6821\u9a8c\u53c2\u6570\u4efb\u610f\u4e00\u4e2a\u4e0d\u5b58\u5728\u5219\u62a5\u9519\u3002",(0,l.kt)("br",null),"\n","\u2003"," ","\u2003"," -> \ud83d\udc1e \u65e0\u6548\u679c\u7684\u65b0\u589e\u8fd4\u56de\u4fe1\u606f\u63d0\u793a\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#130"},(0,l.kt)("strong",{parentName:"a"},"1.3.0"))," -> \ud83c\udd95 \u65b0\u589e ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u7c7b\u578b\u53c2\u6570\uff0c\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"code")," \u4f20\u53c2\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#120"},(0,l.kt)("strong",{parentName:"a"},"1.2.0"))," -> \ud83d\ude80 \u63a5\u53e3\u5347\u7ea7 ",(0,l.kt)("inlineCode",{parentName:"p"},"v2.1")," \u7248\u672c\uff0c\u4fee\u590d\u4e86\u4f20\u5176\u4ed6\u7c7b\u578b\u81ea\u5b9a\u4e49\u6863\u6848\u9879ID\uff08\u975e\u6863\u6848\u5173\u7cfb\u914d\u7f6e\u7684\u7c7b\u578b\uff09\u53ef\u4ee5\u521b\u5efa\u6210\u529f\u6570\u636e\u7684\u95ee\u9898\u3002",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u5173\u7cfbID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/recordLink/get-dimension-relation"},"\u83b7\u53d6\u4f01\u4e1a\u4e0b\u6863\u6848\u5173\u7cfb\u5217\u8868")," \u83b7\u53d6")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")," : \u4f20id\u503c ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," : \u4f20code\u503c",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u8bf7\u4fdd\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"strong"},"code")," \u552f\u4e00\uff0c\u300e\u5458\u5de5\u300f\u548c\u300e\u90e8\u95e8\u300f\u7684 ",(0,l.kt)("inlineCode",{parentName:"strong"},"code")," \u5728\u7cfb\u7edf\u4e0a\u5141\u8bb8\u4e3a\u7a7a\u548c\u91cd\u590d"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"sourceValues")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6e90\u7ef4\u5ea6\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6e90\u7ef4\u5ea6\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"purposeValues")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76ee\u6807\u7ef4\u5ea6\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76ee\u6807\u7ef4\u5ea6\u503c")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u5173\u4e8e\u6e90\u7ef4\u5ea6\u503c\u548c\u76ee\u6807\u7ef4\u5ea6\u503c\u7684\u533a\u5206\uff1a\n",(0,l.kt)("img",{alt:"images",src:a(90104).Z}))))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"id",label:"id",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/add/$ID_3BFuV7KbVDw?accessToken=ID_3BFuV7KbNDw:bwa3wajigF0WH0&type=id\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "sourceValues": [   //\u4ee5\u201c\u5458\u5de5\u548c\u9879\u76ee\u201d\u6863\u6848\u5173\u7cfb\u4e3a\u4f8b\uff0c\u6e90\u7ef4\u5ea6\u503c\u4f20\u67d0\u4e2a\u5458\u5de5\u7684ID\n        "bwa3wajigF0WH0:qKZ3wlg6bv9OGg","bwa3wajigF0WH0:IqQ3wlg6bv9QGg"\n    ],\n    "purposeValues": [  //\u4ee5\u201c\u5458\u5de5\u548c\u9879\u76ee\u201d\u6863\u6848\u5173\u7cfb\u4e3a\u4f8b\uff0c\u76ee\u6807\u7ef4\u5ea6\u503c\u4f20\u67d0\u4e2a\u9879\u76ee\u7684ID\n        "ID_3zYtLIa21gM","ID_3zYtLIa22gM"\n    ]\n}\'\n'))),(0,l.kt)(p.Z,{value:"code",label:"code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/add/$ID_3BFuV7KbVDw?accessToken=ID_3BFuV7KbNDw:bwa3wajigF0WH0&type=code\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "sourceValues": [   //\u4ee5\u201c\u5458\u5de5\u548c\u9879\u76ee\u201d\u6863\u6848\u5173\u7cfb\u4e3a\u4f8b\uff0c\u6e90\u7ef4\u5ea6\u503c\u4f20\u67d0\u4e2a\u5458\u5de5\u7684\u5de5\u53f7\uff08CODE)\n        "1001","1002","1003"\n    ],\n    "purposeValues": [  //\u4ee5\u201c\u5458\u5de5\u548c\u9879\u76ee\u201d\u6863\u6848\u5173\u7cfb\u4e3a\u4f8b\uff0c\u76ee\u6807\u7ef4\u5ea6\u503c\u4f20\u67d0\u4e2a\u9879\u76ee\u7684CODE\n        "CODE1","CODE2","CODE3"\n    ]\n}\'\n')))),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5173\u7cfb\u65b0\u589e\u6210\u529f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f20\u5165\u7684\u6863\u6848\u5173\u7cfb\u53c2\u6570\u5df2\u5b58\u5728\uff0c\u65e0\u6cd5\u65b0\u589e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4\u4f20\u5165\u7684\u6863\u6848\u5173\u7cfb\u53c2\u6570\u662f\u5426\u5df2\u5b58\u5728\uff08\u4f8b\u5982\uff0c\u540c\u4e00\u7ec4\u53c2\u6570\u91cd\u590d\u8c03\u7528\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u5173\u7cfbID:ID_3BfDMDHeZ20\u4e0d\u5b58\u5728\u6216\u5df2\u5220\u9664\uff01"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"id"),"\uff08\u6863\u6848\u5173\u7cfbID\uff09\u662f\u5426\u5df2\u5220\u9664")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65e0\u6548\u7684\u6863\u6848\u5173\u7cfbID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"id"),"\uff08\u6863\u6848\u5173\u7cfbID\uff09\u662f\u5426\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ef4\u5ea6\u503c","[sss]","\u5bf9\u5e94\u7684\u6570\u636e\u4e0d\u5b58\u5728"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"sourceValues"),"\uff08\u6e90\u7ef4\u5ea6\u503c\uff09\u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"purposeValues"),"\uff08\u76ee\u6807\u7ef4\u5ea6\u503c\uff09\u662f\u5426\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[code]","\u4e3a","[CODE3]","\u7684\u6570\u636e\u5df2\u505c\u7528\u6216\u5220\u9664"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"sourceValues"),"\uff08\u6e90\u7ef4\u5ea6\u503c\uff09\u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"purposeValues"),"\uff08\u76ee\u6807\u7ef4\u5ea6\u503c\uff09\u662f\u5426\u505c\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[code]","\u4e3a","[20220408]","\u7684\u5458\u5de5\u672a\u6fc0\u6d3b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b\u5458\u5de5\u7c7b\u578b\u7684\u6863\u6848\u5173\u7cfb\uff0c\u8bf7\u786e\u8ba4\u4f20\u53c2\u7684\u5458\u5de5\u662f\u5426\u6fc0\u6d3b\u6216\u79fb\u9664")))))}f.isMDXComponent=!0},90104:function(t,e,a){e.Z=a.p+"assets/images/\u6e90\u7ef4\u5ea6\u4e0e\u76ee\u6807\u7ef4\u5ea6-025bcd9ca3ad7b6cebb4775173df8193.png"}}]);