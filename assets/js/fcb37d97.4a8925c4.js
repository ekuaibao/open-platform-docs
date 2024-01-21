"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53036],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98448:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},97225:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),r=n(67294),l=n(51048),i=n(22713);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=n(21414),p=n(86010),m="tabItem_vU9c";function s(e){var t,n,l,i=e.lazy,s=e.block,u=e.defaultValue,c=e.values,k=e.groupId,f=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,d.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(t=null!=u?u:null==(n=N.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=N[0])?void 0:l.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=o(),y=h.tabGroupChoices,T=h.setTabGroupChoices,C=(0,r.useState)(b),E=C[0],w=C[1],O=[],P=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var D=y[k];null!=D&&D!==E&&g.some((function(e){return e.value===D}))&&w(D)}var x=function(e){var t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==E&&(P(t),w(a),null!=k&&T(k,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":s},f)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:x,onClick:x},l,{className:(0,p.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(N.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function u(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},41627:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var t=e.method,n=e.url,l=e.description,i=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[t]},a.createElement("span",{className:r.method},t),a.createElement("strong",{dangerouslySetInnerHTML:{__html:i}}),l&&a.createElement("small",null,l))}},57874:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(41627),o=n(97225),d=n(98448),p=["components"],m={},s="\u505c\u7528\u81ea\u5b9a\u4e49\u6863\u6848\u9879",u={unversionedId:"open-api/dimensions/disable-dimension-items",id:"version-v2.2/open-api/dimensions/disable-dimension-items",title:"\u505c\u7528\u81ea\u5b9a\u4e49\u6863\u6848\u9879",description:"<Control",source:"@site/versioned_docs/version-v2.2/open-api/dimensions/disable-dimension-items.md",sourceDirName:"open-api/dimensions",slug:"/open-api/dimensions/disable-dimension-items",permalink:"/docs/open-api/dimensions/disable-dimension-items",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.2/open-api/dimensions/disable-dimension-items.md",tags:[],version:"v2.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u81ea\u5b9a\u4e49\u6863\u6848\u9879",permalink:"/docs/open-api/dimensions/update-dimension-items"},next:{title:"\u542f\u7528\u81ea\u5b9a\u4e49\u6863\u6848\u9879",permalink:"/docs/open-api/dimensions/enable-dimension-items"}},c=[{value:"Path Parameters",id:"path-parameters",children:[{value:"Query Parameters:",id:"query-parameters",children:[],level:4}],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],k={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u505c\u7528\u81ea\u5b9a\u4e49\u6863\u6848\u9879"},"\u505c\u7528\u81ea\u5b9a\u4e49\u6863\u6848\u9879"),(0,l.kt)(i.Z,{method:"PUT",url:"/api/openapi/v1.1/dimensions/items/$`id`/disable",mdxType:"Control"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u66f4\u65b0\u65e5\u5fd7")),(0,l.kt)("div",null,(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"/docs/open-api/notice/update-log#172"},(0,l.kt)("strong",{parentName:"a"},"1.7.2"))," -> \ud83d\ude80 \u63a5\u53e3\u5347\u7ea7 ",(0,l.kt)("inlineCode",{parentName:"p"},"v1.1")," \u7248\u672c\uff0c\u65b0\u589e ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u7c7b\u578b\u53c2\u6570\uff0c\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"code")," \u4f20\u53c2\u3002",(0,l.kt)("br",null)))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u5b50\u7ea7\u6863\u6848\u9879\u4e5f\u4f1a\u88ab\u4e00\u5e76\u505c\u7528\u3002")))),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u9879ID\u6216CODE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimension-items"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u9879")," \u83b7\u53d6\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"strong"},"type")," \u53c2\u6570\u4fdd\u6301\u4e00\u81f4"))))),(0,l.kt)("h4",{id:"query-parameters"},"Query Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u83b7\u53d6\u6388\u6743")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")," : \u4f20id\u503c ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," : \u4f20code\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"dimensionId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u7c7b\u522bCODE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"strong"},"code")," \u65f6\u5fc5\u586b\uff0c\u5426\u5219\u4e0d\u4f20"),(0,l.kt)("br",null),"\u6b64\u53c2\u6570\u53ef\u907f\u514d\u7cfb\u7edf\u5185\u91cd\u590d\u7684\u6863\u6848\u9879 ",(0,l.kt)("inlineCode",{parentName:"td"},"CODE")," \u62a5\u9519",(0,l.kt)("br",null),"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/dimensions/get-dimensions"},"\u83b7\u53d6\u81ea\u5b9a\u4e49\u6863\u6848\u7c7b\u522b")," \u83b7\u53d6")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"id",label:"id",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/dimensions/items/$ID_3FB3TN259U0/disable?accessToken=ID_3K5pCMV0QHv:bwa3wajigF0WH0&type=id'\n"))),(0,l.kt)(d.Z,{value:"code",label:"code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/dimensions/items/$XM001/disable?accessToken=ID_3K5pCMV0QHv:bwa3wajigF0WH0&type=code&dimensionId=DA001'\n")))),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"204")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"(\u54cd\u5e94\u9700\u8981\u5224\u65ad ",(0,l.kt)("strong",{parentName:"td"},"HTTP\u72b6\u6001\u7801")," \u6765\u786e\u5b9a\u662f\u5426\u6210\u529f\uff0c\u54cd\u5e94\u6210\u529f\u65f6\u65e0\u5185\u5bb9\u8fd4\u56de)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6392\u67e5\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7c7b\u578b\u4e3acode\u65f6dimensionId\u662f\u5fc5\u586b\u53c2\u6570\uff0c\u8bf7\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"dimensionId")," \u5fc5\u586b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636ecode: ","[CODE2]","\u4e0d\u80fd\u627e\u5230\u552f\u4e00\u7684\u6863\u6848\u9879"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," \u65f6\uff0c\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"id"),"\uff08\u6863\u6848\u9879CODE\uff09\u662f\u5426\u6b63\u786e\u6216\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"400")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636ecode: ","[DA0011]","\u4e0d\u80fd\u627e\u5230\u552f\u4e00\u6863\u6848"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," \u65f6\uff0c\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"dimensionId"),"\uff08\u6863\u6848\u7c7b\u522bCODE\uff09\u662f\u5426\u6b63\u786e\u6216\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6863\u6848\u9879\u4e0d\u5b58\u5728"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")," = ",(0,l.kt)("inlineCode",{parentName:"td"},"id")," \u65f6\uff0c\u8bf7\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"td"},"id"),"\uff08\u6863\u6848\u9879ID\uff09\u662f\u5426\u6b63\u786e\u6216\u5b58\u5728")))))}f.isMDXComponent=!0}}]);