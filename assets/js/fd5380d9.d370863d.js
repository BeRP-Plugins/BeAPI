"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5172],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(a),k=r,u=m["".concat(c,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(u,d(d({ref:t},p),{},{components:a})):n.createElement(u,d({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,d=new Array(l);d[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var o=2;o<l;o++)d[o]=a[o];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4166:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),d=["components"],i={title:"Modal"},c=void 0,o={unversionedId:"classes/modal",id:"classes/modal",title:"Modal",description:"The primary interaction point for handing schemas and documents.",source:"@site/docs/classes/modal.mdx",sourceDirName:"classes",slug:"/classes/modal",permalink:"/BeAPI/docs/classes/modal",editUrl:"https://github.com/MCBE-Utilities/BeAPI/tree/docs/docs/classes/modal.mdx",tags:[],version:"current",frontMatter:{title:"Modal"},sidebar:"sidebar",previous:{title:"EventEmitter",permalink:"/BeAPI/docs/classes/eventemitter"},next:{title:"Player",permalink:"/BeAPI/docs/classes/player"}},p=[{value:"Constructor",id:"constructor",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"schema <code>READONLY</code>",id:"schema-readonly",children:[],level:3},{value:"name <code>READONLY</code>",id:"name-readonly",children:[],level:3},{value:"scoreboardName <code>READONLY</code>",id:"scoreboardname-readonly",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"asArray",id:"asarray",children:[{value:"Returns",id:"returns",children:[],level:4}],level:3},{value:"find",id:"find",children:[{value:"Returns",id:"returns-1",children:[],level:4}],level:3},{value:"findAll",id:"findall",children:[{value:"Returns",id:"returns-2",children:[],level:4}],level:3},{value:"write",id:"write",children:[{value:"Returns",id:"returns-3",children:[],level:4}],level:3},{value:"writeBulk",id:"writebulk",children:[{value:"Returns",id:"returns-4",children:[],level:4}],level:3},{value:"delete",id:"delete",children:[{value:"Returns",id:"returns-5",children:[],level:4}],level:3},{value:"deleteAll",id:"deleteall",children:[{value:"Returns",id:"returns-6",children:[],level:4}],level:3},{value:"sync",id:"sync",children:[{value:"Returns",id:"returns-7",children:[],level:4}],level:3}],level:2}],s={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The primary interaction point for handing schemas and documents."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/examples/databasing"},"examples/databasing")," for getting started with databasing."))),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Modal(name, schema, scoreboardName);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"name"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Name of model (used to reference serialized data for fetching).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"schema"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/classes/schema"},"Schema")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Blueprint for modal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"scoreboardName"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string?")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"BeAPI__DATABASE")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Name of scoreboard documents for this modal should go under.")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"schema-readonly"},"schema ",(0,l.kt)("inlineCode",{parentName:"h3"},"READONLY")),(0,l.kt)("p",null,"Parent schema blueprint."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/classes/schema"},"Schema")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"name-readonly"},"name ",(0,l.kt)("inlineCode",{parentName:"h3"},"READONLY")),(0,l.kt)("p",null,"Schema name used to categorize documents."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/classes/schema"},"Schema")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"scoreboardname-readonly"},"scoreboardName ",(0,l.kt)("inlineCode",{parentName:"h3"},"READONLY")),(0,l.kt)("p",null,"Scoreboard name in which schema saves documents to."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/classes/schema"},"Schema")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"asarray"},"asArray"),(0,l.kt)("p",null,"Return all documents as an array."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"asArray();\n")),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/classes/document"},"Document[]")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"find"},"find"),(0,l.kt)("p",null,"Uses partial data provided to find a specific document."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"find(partial);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"partial"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"object")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Partial data matcher.")))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/classes/document"},"Document")," | ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined"},"undefined")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"findall"},"findAll"),(0,l.kt)("p",null,"Uses partial data provided to find a all matching documents."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"findAll(partial);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"partial"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"object")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Partial data matcher.")))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/classes/document"},"Document[]")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"write"},"write"),(0,l.kt)("p",null,"Write a new document to be stored."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"write(data);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"data"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"object")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Data to be stored.")))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/classes/document"},"Document")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"writebulk"},"writeBulk"),(0,l.kt)("p",null,"Write a new document to be stored."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"write(data);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"data"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"object[]")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Datas to be stored.")))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/classes/document"},"Document[]")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"delete"},"delete"),(0,l.kt)("p",null,"Deletes documents from database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"delete(id);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"id"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Document to delete.")))),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"deleteall"},"deleteAll"),(0,l.kt)("p",null,"Deletes all documents from database."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is pretty dangerous and irreversible... Be careful!"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"deleteAll(data);\n")),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sync"},"sync"),(0,l.kt)("p",null,"Syncs document with persistent storage."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sync(id);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"id"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Document to sync.")))),(0,l.kt)("h4",{id:"returns-7"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);