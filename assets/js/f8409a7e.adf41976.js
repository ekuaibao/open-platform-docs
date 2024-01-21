"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3206],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98448:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},97225:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(67294),i=n(51048),o=n(22713);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(21414),p=n(86010),u="tabItem_vU9c";function d(e){var t,n,i,o=e.lazy,d=e.block,c=e.defaultValue,m=e.values,h=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=l(),y=f.tabGroupChoices,w=f.setTabGroupChoices,_=(0,r.useState)(N),T=_[0],E=_[1],x=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=y[h];null!=O&&O!==T&&k.some((function(e){return e.value===O}))&&E(O)}var Z=function(e){var t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==T&&(C(t),E(a),null!=h&&w(h,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":d},g)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:Z,onClick:Z},i,{className:(0,p.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},41627:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},i=function(e){var t=e.method,n=e.url,i=e.description,o=n.replace(/\`(.*?)\`/g,"<span>$1</span>");return a.createElement("div",{className:r.control+" "+r[t]},a.createElement("span",{className:r.method},t),a.createElement("strong",{dangerouslySetInnerHTML:{__html:o}}),i&&a.createElement("small",null,i))}},58083:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return g}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(41627),l=n(97225),s=n(98448),p=["components"],u={sidebar_position:1},d=void 0,c={unversionedId:"intro",id:"intro",title:"intro",description:"\u8bf7\u6c42\u8def\u5f84\u793a\u4f8b",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/next/intro",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},m=[{value:"\u8bf7\u6c42\u8def\u5f84\u793a\u4f8b",id:"\u8bf7\u6c42\u8def\u5f84\u793a\u4f8b",children:[],level:2},{value:"\u544a\u793a\u793a\u4f8b",id:"\u544a\u793a\u793a\u4f8b",children:[],level:2},{value:"\u9009\u9879\u5361\u793a\u4f8b",id:"\u9009\u9879\u5361\u793a\u4f8b",children:[],level:2},{value:"\u53c2\u6570\u793a\u4f8b",id:"\u53c2\u6570\u793a\u4f8b",children:[],level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",children:[{value:"shell",id:"shell",children:[],level:3},{value:"Response",id:"response",children:[],level:3}],level:2}],h={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8bf7\u6c42\u8def\u5f84\u793a\u4f8b"},"\u8bf7\u6c42\u8def\u5f84\u793a\u4f8b"),(0,i.kt)(o.Z,{method:"POST",url:"/pet/{petId}/uploadImage",description:"uploads an image",mdxType:"Control"}),(0,i.kt)(o.Z,{method:"GET",url:"/pet/{petId}/uploadImage",description:"uploads an image",mdxType:"Control"}),(0,i.kt)(o.Z,{method:"PUT",url:"/pet/{petId}/uploadImage",description:"uploads an image",mdxType:"Control"}),(0,i.kt)(o.Z,{method:"DELETE",url:"/pet/{petId}/uploadImage",description:"uploads an image",mdxType:"Control"}),(0,i.kt)("h2",{id:"\u544a\u793a\u793a\u4f8b"},"\u544a\u793a\u793a\u4f8b"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,i.kt)("a",{parentName:"p",href:"#"},"this ",(0,i.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,i.kt)("a",{parentName:"p",href:"#"},"this ",(0,i.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,i.kt)("a",{parentName:"p",href:"#"},"this ",(0,i.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,i.kt)("a",{parentName:"p",href:"#"},"this ",(0,i.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,i.kt)("a",{parentName:"p",href:"#"},"this ",(0,i.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,i.kt)("h2",{id:"\u9009\u9879\u5361\u793a\u4f8b"},"\u9009\u9879\u5361\u793a\u4f8b"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,i.kt)(s.Z,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,i.kt)(s.Z,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,i.kt)("h2",{id:"\u53c2\u6570\u793a\u4f8b"},"\u53c2\u6570\u793a\u4f8b"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"accept")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"Setting to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"petId")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"petId")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2003"," \u221f ",(0,i.kt)("inlineCode",{parentName:"td"},"package_type")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of supported package.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2003"," ","\u2003"," \u221f ",(0,i.kt)("inlineCode",{parentName:"td"},"visibility")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"body")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"body"),(0,i.kt)("td",{parentName:"tr",align:null},"The description of the project.")))),(0,i.kt)("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,i.kt)("h3",{id:"shell"},"shell"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl \\\n  -H "Accept: application/vnd.github.v3+json" \\\n  https://api.github.com/orgs/ORG/packages\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Status: 200 OK\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 197,\n    "name": "hello_docker",\n    "package_type": "container",\n    "owner": {\n      "login": "github",\n      "id": 9919,\n      "node_id": "MDEyOk9yZ2FuaXphdGlvbjk5MTk=",\n      "avatar_url": "https://avatars.githubusercontent.com/u/9919?v=4",\n      "gravatar_id": "",\n      "url": "https://api.github.com/users/github",\n      "html_url": "https://github.com/github",\n      "followers_url": "https://api.github.com/users/github/followers",\n      "following_url": "https://api.github.com/users/github/following{/other_user}",\n      "gists_url": "https://api.github.com/users/github/gists{/gist_id}",\n      "starred_url": "https://api.github.com/users/github/starred{/owner}{/repo}",\n      "subscriptions_url": "https://api.github.com/users/github/subscriptions",\n      "organizations_url": "https://api.github.com/users/github/orgs",\n      "repos_url": "https://api.github.com/users/github/repos",\n      "events_url": "https://api.github.com/users/github/events{/privacy}",\n      "received_events_url": "https://api.github.com/users/github/received_events",\n      "type": "Organization",\n      "site_admin": false\n    },\n    "version_count": 1,\n    "visibility": "private",\n    "url": "https://api.github.com/orgs/github/packages/container/hello_docker",\n    "created_at": "2020-05-19T22:19:11Z",\n    "updated_at": "2020-05-19T22:19:11Z",\n    "html_url": "https://github.com/orgs/github/packages/container/package/hello_docker"\n  },\n  {\n    "id": 198,\n    "name": "goodbye_docker",\n    "package_type": "container",\n    "owner": {\n      "login": "github",\n      "id": 9919,\n      "node_id": "MDEyOk9yZ2FuaXphdGlvbjk5MTk=",\n      "avatar_url": "https://avatars.githubusercontent.com/u/9919?v=4",\n      "gravatar_id": "",\n      "url": "https://api.github.com/users/github",\n      "html_url": "https://github.com/github",\n      "followers_url": "https://api.github.com/users/github/followers",\n      "following_url": "https://api.github.com/users/github/following{/other_user}",\n      "gists_url": "https://api.github.com/users/github/gists{/gist_id}",\n      "starred_url": "https://api.github.com/users/github/starred{/owner}{/repo}",\n      "subscriptions_url": "https://api.github.com/users/github/subscriptions",\n      "organizations_url": "https://api.github.com/users/github/orgs",\n      "repos_url": "https://api.github.com/users/github/repos",\n      "events_url": "https://api.github.com/users/github/events{/privacy}",\n      "received_events_url": "https://api.github.com/users/github/received_events",\n      "type": "Organization",\n      "site_admin": false\n    },\n    "version_count": 2,\n    "visibility": "private",\n    "url": "https://api.github.com/orgs/github/packages/container/goodbye_docker",\n    "created_at": "2020-05-20T22:19:11Z",\n    "updated_at": "2020-05-20T22:19:11Z",\n    "html_url": "https://github.com/orgs/github/packages/container/package/goodbye_docker"\n  }\n]\n')))}g.isMDXComponent=!0}}]);