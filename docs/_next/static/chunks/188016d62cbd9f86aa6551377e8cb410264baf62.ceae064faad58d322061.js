(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(a.AmpStateContext))};var c,r=(c=n("q1tI"))&&c.__esModule?c:{default:c},a=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,c=e.hybrid,r=void 0!==c&&c,a=e.hasQuery,o=void 0!==a&&a;return n||r&&o}},"4+/w":function(e,t,n){e.exports={toggle:"style_toggle__gtO3L",display:"style_display__3efFp",icon:"style_icon__NRDje",iconCross:"style_iconCross__2Eht-",iconCheck:"style_iconCheck__3d24g"}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var c,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=c?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(c=n("Xuae"))&&c.__esModule?c:{default:c},o=n("lwAK"),s=n("FYa8"),l=n("/0+H");function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,c={};return function(r){var a=!0,o=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){o=!0;var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var l=0,i=h.length;l<i;l++){var u=h[l];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var d=r.props[u],f=c[u]||new Set;"name"===u&&o||!f.has(d)?(f.add(d),c[u]=f):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,r.useContext)(o.AmpStateContext),c=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:f,headManager:c,inAmpMode:(0,l.isInAmpMode)(n)},t)}m.rewind=function(){};var j=m;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n("a3WO");function r(e,t){if(e){if("string"===typeof e)return Object(c.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(c.a)(e,t):void 0}}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var c=n("WkPL");e.exports=function(e){if(Array.isArray(e))return c(e)}},RIqP:function(e,t,n){var c=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),o=n("Bnag");e.exports=function(e){return c(e)||r(e)||a(e)||o()}},TYCe:function(e,t,n){e.exports={siteFooter:"style_siteFooter__37hpb",connectionList:"style_connectionList__ig-jS",connectionItem:"style_connectionItem__2D8Df",connectionLink:"style_connectionLink__3XiUv",connectionIcon:"style_connectionIcon__1gYKc",about:"style_about__f3QFU",connect:"style_connect__-kk9u",legal:"style_legal__578Om"}},WSXl:function(e,t,n){e.exports={main:"style_main__3NH-6",siteHeader:"style_siteHeader__1GsfI",siteId:"style_siteId__vPbHW",siteLogo:"style_siteLogo__3Nkny",siteTitle:"style_siteTitle__1tptt",siteSubtitle:"style_siteSubtitle__3bbEE",helm:"style_helm__ysj-L"}},Xuae:function(e,t,n){"use strict";var c=n("RIqP"),r=n("lwsE"),a=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),s=n("a1gu"),l=n("Nsbk");function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){o(n,e);var t=i(n);function n(e){var a;return r(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(c(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},a3WO:function(e,t,n){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}n.d(t,"a",(function(){return c}))},cTJO:function(e,t,n){"use strict";var c=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var a=r(n("q1tI")),o=n("elyg"),s=n("nOHt"),l=n("vNVm"),i={};function u(e,t,n,c){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,c).catch((function(e){0}));var r=c&&"undefined"!==typeof c.locale?c.locale:e&&e.locale;i[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.pathname||"/",d=a.default.useMemo((function(){var t=(0,o.resolveHref)(r,e.href,!0),n=c(t,2),a=n[0],s=n[1];return{href:a,as:e.as?(0,o.resolveHref)(r,e.as):s||a}}),[r,e.href,e.as]),h=d.href,f=d.as,m=e.children,j=e.replace,p=e.shallow,b=e.scroll,v=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var x=a.Children.only(m),y=x&&"object"===typeof x&&x.ref,g=(0,l.useIntersection)({rootMargin:"200px"}),O=c(g,2),_=O[0],w=O[1],k=a.default.useCallback((function(e){_(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,_]);(0,a.useEffect)((function(){var e=w&&t&&(0,o.isLocalURL)(h),c="undefined"!==typeof v?v:n&&n.locale,r=i[h+"%"+f+(c?"%"+c:"")];e&&!r&&u(n,h,f,{locale:c})}),[f,h,w,v,t,n]);var L={ref:k,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,c,r,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=c.indexOf("#")<0),t[r?"replace":"push"](n,c,{shallow:a,locale:l,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,h,f,j,p,b,v)},onMouseEnter:function(e){(0,o.isLocalURL)(h)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(n,h,f,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var N="undefined"!==typeof v?v:n&&n.locale,I=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(f,N,n&&n.locales,n&&n.domainLocales);L.href=I||(0,o.addBasePath)((0,o.addLocale)(f,N,n&&n.defaultLocale))}return a.default.cloneElement(x,L)};t.default=d},fhLV:function(e,t,n){"use strict";var c=n("nKUr"),r=n("4+/w");t.a=function(e){var t=e.id,n=e.label,a=e.toggleValue,o=e.toggleFunction,s=function(){return o(!a),!a};return Object(c.jsxs)("label",{className:r.toggle,htmlFor:t,children:[Object(c.jsx)("input",{type:"checkbox",name:t,checked:a,onChange:function(e){return s()},id:t}),Object(c.jsxs)("span",{className:r.display,hidden:!0,children:[Object(c.jsx)("svg",{"aria-hidden":"true",focusable:"false",className:"".concat(r.icon," ").concat(r.iconCheck),width:"18",height:"14",viewBox:"0 0 18 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z",fill:"currentcolor",stroke:"currentcolor"})}),Object(c.jsx)("svg",{"aria-hidden":"true",focusable:"false",className:"".concat(r.icon," ").concat(r.iconCross),width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z",fill:"currentcolor"})})]}),n]})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var c;t.__esModule=!0,t.AmpStateContext=void 0;var r=((c=n("q1tI"))&&c.__esModule?c:{default:c}).default.createContext({});t.AmpStateContext=r},ntAx:function(e,t,n){"use strict";var c=n("nKUr");var r=n("BsWD");function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(c=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);c=!0);}catch(l){r=!0,a=l}finally{try{c||null==s.return||s.return()}finally{if(r)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n("q1tI"),s=n("YFqc"),l=n.n(s),i=n("fhLV"),u=function(e,t){var n=Object(o.useState)((function(){return function(e,t){var n=window.localStorage.getItem(e);return null!==n?JSON.parse(n):t}(e,t)})),c=n[0],r=n[1];return Object(o.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(c))}),[e,c]),[c,r]},d=n("wAV2"),h=n("zFgD"),f=function(e){var t=e.role,n=e.setRole,r=Object(o.useRef)(null),s=Object(o.useRef)(null),f=Object(o.useRef)(null),m=Object(o.useState)(null),j=m[0],p=m[1],b=Object(o.useState)(""),v=b[0],x=b[1],y=a(u("theme",""),2),g=y[0],O=y[1];Object(o.useEffect)((function(){x(localStorage.getItem("role",t)||h.c),n(v)}),[t,n,v,x]);var _=function(e){O(e?"dark":"light")},w=function(e){var t=e.id,n=e.label;return Object(o.useEffect)((function(){""===g&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(O("dark"),document.querySelector("html").classList.add("dark-theme")),"dark"===g&&document.querySelector("html").classList.add("dark-theme"),"light"===g&&document.querySelector("html").classList.remove("dark-theme")})),Object(c.jsx)(i.a,{id:t,label:n,toggleValue:"dark"===g,toggleFunction:_})};return Object(o.useEffect)((function(){null!==j&&(j?(f.current.classList.add(d.visible),setTimeout((function(){return s.current.focus()}),500)):(setTimeout((function(){return r.current.focus()}),500),setTimeout((function(){return f.current.classList.remove(d.visible)}),500)))}),[j]),Object(o.useEffect)((function(){if(j){var e=f.current.querySelectorAll("a[href], button, input"),t=e[0],n=e[e.length-1],c=function(e){27===e.keyCode&&p(!1),"Tab"!==e.key&&9!==e.keyCode||(e.shiftKey?document.activeElement===t&&(n.focus(),e.preventDefault()):document.activeElement===n&&(t.focus(),e.preventDefault()))};return document.addEventListener("keydown",c),function(){document.removeEventListener("keydown",c)}}return""})),Object(c.jsxs)("nav",{className:"".concat(d.nav," ").concat(j?d.open:""),children:[Object(c.jsx)("button",{id:"main_nav",className:d.helmItem,type:"button","aria-expanded":!!j,"aria-label":"Expand navigation menu",onClick:function(){return p(!j)},ref:r,title:"main navigation",children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"helm",height:"40",width:"40",viewBox:"0 0 100 100",fill:"currentColor",stroke:"currentColor",children:Object(c.jsx)("path",{d:"M95.065 49.609a2.07 2.07 0 0 0-.414-1.094c-.382-.504-.997-.839-1.667-.99-1.571-.354-3.257.488-4.786.588-1.096.072-2.173.157-3.267.086-.116-.516-.619-.913-1.253-.913h-1.645a31.946 31.946 0 0 0-7.385-17.833l1.162-1.162c.448-.448.523-1.085.24-1.532.724-.824 1.545-1.525 2.371-2.249 1.152-1.01 2.939-1.607 3.8-2.968.497-.786.657-1.719.303-2.474-.212-.452-.604-.823-.975-1.141a2.07 2.07 0 0 0-1.067-.481c-.627-.086-1.298.111-1.879.478-1.361.861-1.958 2.648-2.968 3.8-.724.826-1.425 1.647-2.249 2.371-.447-.283-1.084-.208-1.532.24l-1.162 1.162a31.949 31.949 0 0 0-17.833-7.385v-1.645c0-.634-.397-1.137-.913-1.253-.071-1.094.014-2.171.086-3.267.1-1.529.942-3.214.588-4.786-.204-.907-.751-1.68-1.535-1.964-.47-.17-1.01-.155-1.496-.117a2.07 2.07 0 0 0-1.094.414c-.504.382-.839.997-.99 1.667-.354 1.571.488 3.257.588 4.786.072 1.096.157 2.173.086 3.267-.516.116-.913.619-.913 1.253v1.645a31.946 31.946 0 0 0-17.833 7.385l-1.162-1.162c-.448-.448-1.085-.523-1.532-.24-.824-.724-1.525-1.545-2.249-2.371-1.01-1.152-1.607-2.939-2.968-3.8-.786-.497-1.719-.657-2.474-.303-.452.212-.823.604-1.141.975a2.07 2.07 0 0 0-.481 1.067c-.086.627.111 1.298.478 1.879.861 1.361 2.648 1.958 3.8 2.968.826.724 1.647 1.425 2.371 2.249-.283.447-.208 1.084.24 1.532l1.162 1.162a31.949 31.949 0 0 0-7.385 17.833H16.45c-.634 0-1.137.397-1.253.913-1.094.071-2.171-.014-3.267-.086-1.529-.1-3.214-.942-4.786-.588-.907.204-1.68.751-1.964 1.535-.17.47-.155 1.01-.117 1.496.03.388.167.768.414 1.094.382.504.997.839 1.667.99 1.571.354 3.257-.488 4.786-.588 1.096-.072 2.173-.157 3.267-.086.116.516.619.913 1.253.913h1.645a31.946 31.946 0 0 0 7.385 17.833l-1.162 1.162c-.448.448-.523 1.085-.24 1.532-.724.824-1.545 1.525-2.371 2.249-1.152 1.01-2.939 1.607-3.8 2.968-.497.786-.657 1.719-.303 2.474.212.452.604.823.975 1.141a2.07 2.07 0 0 0 1.067.481c.627.086 1.298-.111 1.879-.478 1.361-.861 1.958-2.648 2.968-3.8.724-.826 1.425-1.647 2.249-2.371.447.283 1.084.208 1.532-.24l1.162-1.162a31.949 31.949 0 0 0 17.833 7.385v1.645c0 .634.397 1.137.913 1.253.071 1.094-.014 2.171-.086 3.267-.1 1.529-.942 3.214-.588 4.786.204.907.751 1.68 1.535 1.964.47.17 1.01.155 1.496.117a2.07 2.07 0 0 0 1.094-.414c.504-.382.839-.997.99-1.667.354-1.571-.488-3.257-.588-4.786-.072-1.096-.157-2.173-.086-3.267.516-.116.913-.619.913-1.253v-1.645a31.946 31.946 0 0 0 17.833-7.385l1.162 1.162c.448.448 1.085.523 1.532.24.824.724 1.525 1.545 2.249 2.371 1.01 1.152 1.607 2.939 2.968 3.8.786.497 1.719.657 2.474.303.452-.212.823-.604 1.141-.975a2.07 2.07 0 0 0 .481-1.067c.086-.627-.111-1.298-.478-1.879-.861-1.361-2.648-1.958-3.8-2.968-.826-.724-1.647-1.425-2.371-2.249.283-.447.208-1.084-.24-1.532l-1.162-1.162a31.949 31.949 0 0 0 7.385-17.833h1.645c.634 0 1.137-.397 1.253-.913 1.094-.071 2.171.014 3.267.086 1.529.1 3.214.942 4.786.588.907-.204 1.68-.751 1.964-1.535.167-.47.152-1.01.114-1.496zm-71.626 1.348a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75zm44.833-20.32a.874.874 0 1 1 1.237 1.235.874.874 0 0 1-1.237-1.235zm-16.383 1.355c.545-.088.971-.609.971-1.267v-1.54a20.973 20.973 0 0 1 10.001 4.144l-1.088 1.088c-.434.434-.517 1.045-.266 1.49l-5.367 5.367c-.445-.251-1.056-.168-1.49.266l-.483.483a8.94 8.94 0 0 0-1.307-.546v-.678c0-.658-.426-1.179-.971-1.267v-7.54zm-1.825-9.41a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75zm-2.796 6.603v1.54c0 .614.373 1.105.865 1.242v7.59c-.492.137-.865.628-.865 1.242v.678a8.894 8.894 0 0 0-1.307.546l-.483-.483c-.465-.465-1.135-.532-1.583-.209L38.563 36c.323-.448.256-1.118-.209-1.583l-1.088-1.088a20.982 20.982 0 0 1 10.002-4.144zm-16.649 1.452a.874.874 0 1 1 1.237 1.235.874.874 0 0 1-1.237-1.235zm2.693 6.647l1.088 1.088c.434.434 1.045.517 1.49.266l5.367 5.367c-.251.445-.168 1.056.266 1.49l.483.483a8.94 8.94 0 0 0-.546 1.307h-.678c-.658 0-1.179.426-1.267.971h-7.54c-.088-.545-.609-.971-1.267-.971h-1.54a20.963 20.963 0 0 1 4.144-10.001zm-1.456 32.243a.874.874 0 1 1-1.237-1.235.874.874 0 0 1 1.237 1.235zm2.543-7.735l-1.088 1.088a20.963 20.963 0 0 1-4.144-10.001h1.54c.614 0 1.105-.373 1.242-.865h7.59c.137.492.628.865 1.242.865h.678c.147.453.332.889.546 1.307l-.483.483c-.465.465-.532 1.135-.209 1.583l-5.332 5.332c-.447-.324-1.117-.257-1.582.208zm13.84 6.38c-.545.088-.971.609-.971 1.267v1.54a20.973 20.973 0 0 1-10.001-4.144l1.088-1.088c.434-.434.517-1.045.266-1.49l5.367-5.367c.445.251 1.056.168 1.49-.266l.483-.483a8.94 8.94 0 0 0 1.307.546v.678c0 .658.426 1.179.971 1.267v7.54zm1.825 9.41a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75zm0-24.773a2.727 2.727 0 1 1 0-5.454 2.727 2.727 0 0 1 0 5.454zm2.797 18.17v-1.54c0-.614-.373-1.104-.865-1.242v-7.59c.492-.137.865-.628.865-1.242v-.678a8.894 8.894 0 0 0 1.307-.546l.483.483c.465.465 1.135.532 1.583.209l5.332 5.332c-.323.448-.256 1.118.209 1.583l1.088 1.088a21 21 0 0 1-10.002 4.143zm16.649-1.452a.874.874 0 1 1-1.237-1.235.874.874 0 0 1 1.237 1.235zm-2.693-6.648l-1.088-1.088c-.434-.434-1.045-.517-1.49-.266l-5.367-5.367c.251-.445.168-1.056-.266-1.49l-.483-.483a8.94 8.94 0 0 0 .546-1.307h.678c.658 0 1.179-.426 1.267-.971h7.54c.088.545.609.971 1.267.971h1.54a20.975 20.975 0 0 1-4.144 10.001zm2.604-15.594c-.614 0-1.104.373-1.242.865h-7.59c-.137-.492-.628-.865-1.242-.865h-.678a8.894 8.894 0 0 0-.546-1.307l.483-.483c.465-.465.532-1.135.209-1.583l5.332-5.332c.448.323 1.118.256 1.583-.209l1.088-1.088a20.959 20.959 0 0 1 4.144 10.001h-1.541zm7.268 3.672a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z"})})}),Object(c.jsxs)("section",{className:d.navPanel,ref:f,children:[Object(c.jsx)("button",{className:d.navigationClose,type:"button","aria-expanded":!!j,"aria-label":"Close navigation menu",onClick:function(){return p(!j)},ref:s,children:Object(c.jsx)("svg",{viewBox:"0,0 100,100",height:"40",width:"40",stroke:"currentColor",strokeWidth:"10",strokeLinecap:"round",children:Object(c.jsx)("path",{d:"M25,25 75,75 M25,75 75,25",fill:"none"})})}),Object(c.jsx)("section",{className:d.primaryPanel,children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{className:d.navItem,children:Object(c.jsx)(l.a,{href:"/",children:Object(c.jsx)("a",{className:d.navLink,children:"Home"})})}),Object(c.jsx)("li",{className:d.navItem,children:Object(c.jsx)(l.a,{href:"/resume",children:Object(c.jsx)("a",{className:d.navLink,children:"R\xe9sum\xe9"})})}),Object(c.jsx)("li",{className:d.navItem,children:Object(c.jsx)(l.a,{href:"/gallery",children:Object(c.jsx)("a",{className:d.navLink,children:"Gallery"})})}),Object(c.jsx)("li",{className:d.navItem,children:Object(c.jsx)(l.a,{href:"/biography",children:Object(c.jsx)("a",{className:d.navLink,children:"Biography"})})})]})}),Object(c.jsx)("section",{}),Object(c.jsxs)("section",{className:d.secondaryPanel,children:[Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"Settings"}),Object(c.jsxs)("p",{children:["Role: ",Object(c.jsx)("span",{className:d.span,children:v})]}),Object(c.jsx)(w,{id:"navToggleDarkMode",label:"Dark mode"})]}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{className:d.navItem,children:Object(c.jsx)(l.a,{href:"https://journal.lilly.art/",children:Object(c.jsxs)("a",{className:d.navLink,children:["Journal ",Object(c.jsx)("span",{"aria-hidden":"true",children:"\u27b6"})]})})}),Object(c.jsx)("li",{className:d.navItem,children:Object(c.jsx)(l.a,{href:"/colophon",children:Object(c.jsx)("a",{className:d.navLink,children:"Colophon"})})})]})]})]})]})},m=n("TYCe"),j=function(e){var t=e.role,n=e.setRole,r=Object(o.useState)(""),a=r[0],s=r[1];return Object(o.useEffect)((function(){s(localStorage.getItem("role",t)||h.c),n(a)}),[t,n,a,s]),Object(c.jsx)("footer",{className:"".concat(m.siteFooter),children:Object(c.jsxs)("section",{children:[Object(c.jsxs)("section",{className:m.about,children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["This site was developed, designed, illustrated, and dabbled in by N.E.Lilly in the Greater Philadelphia area, circa 2021. Technical details provided on the ",Object(c.jsx)(l.a,{href:"/colophon",children:"Colophon"}),"."]})]}),Object(c.jsxs)("section",{className:m.connect,children:[Object(c.jsx)("h2",{children:"Connect"}),Object(c.jsxs)("ul",{className:m.connectionList,children:[Object(c.jsx)("li",{className:m.connectionItem,children:Object(c.jsxs)("a",{href:"https://linkedin.com/in/nelilly",className:m.connectionLink,target:"_blank",rel:"noopener noreferrer",children:[Object(c.jsx)("svg",{className:m.connectionIcon,height:"32",width:"32",xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -1 19 21",children:Object(c.jsx)("path",{fill:"currentColor",d:"M1.707 0a1.708 1.708 0 11-.004 3.415A1.708 1.708 0 011.707 0zM.234 14.19V4.711h2.945v9.477H.234zm4.792-9.478h2.821v1.295h.04c.393-.746 1.353-1.53 2.785-1.53 2.978 0 3.53 1.961 3.53 4.514v5.198H11.26V9.582c0-1.1-.021-2.515-1.53-2.515-1.531 0-1.764 1.198-1.764 2.433v4.69h-2.94V4.711z",transform:"translate(.479 .48)"})}),Object(c.jsx)("span",{className:"vh",children:"LinkedIn"})]})}),Object(c.jsx)("li",{className:m.connectionItem,children:Object(c.jsxs)("a",{href:"https://github.com/nelilly",className:m.connectionLink,target:"_blank",rel:"noopener noreferrer",children:[Object(c.jsx)("svg",{className:m.connectionIcon,height:"32",width:"32",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21 21",children:Object(c.jsx)("path",{fill:"currentColor",d:"M14.06 11.92c.39 0 .72.19 1 .58.28.38.43.86.43 1.42 0 .56-.14 1.04-.43 1.42-.28.38-.62.58-1 .58-.41 0-.76-.19-1.05-.58-.28-.38-.42-.86-.42-1.42s.14-1.04.42-1.42c.29-.39.64-.58 1.05-.58zm5.03-5.2c1.1 1.19 1.65 2.63 1.65 4.32 0 1.1-.13 2.08-.38 2.96-.25.87-.57 1.59-.96 2.14s-.86 1.04-1.43 1.44c-.57.42-1.09.72-1.56.91-.47.19-1.01.34-1.63.45-.61.11-1.06.16-1.38.18-.31.01-.64.02-1 .02-.08 0-.35.01-.8.02-.44.02-.82.03-1.11.03-.29 0-.67-.01-1.11-.03-.45-.01-.72-.02-.8-.02-.36 0-.7 0-1-.02-.32-.02-.78-.07-1.38-.18-.62-.1-1.16-.25-1.63-.45-.47-.19-.99-.49-1.56-.91a6.3 6.3 0 01-1.43-1.44C1.2 15.59.88 14.88.62 14c-.25-.88-.38-1.86-.38-2.96 0-1.69.55-3.13 1.65-4.32-.1-.06-.11-.66 0-1.78.1-1.13.34-2.17.73-3.12 1.37.14 3.06.92 5.07 2.32.68-.18 1.62-.27 2.8-.27 1.25 0 2.18.09 2.81.27.92-.62 1.8-1.13 2.64-1.52.85-.38 1.47-.61 1.85-.67l.58-.13c.39.95.63 1.99.73 3.12.11 1.12.11 1.72-.01 1.78zm-8.54 11.43c2.46 0 4.32-.3 5.58-.89 1.26-.59 1.9-1.81 1.9-3.65 0-1.07-.4-1.96-1.2-2.67-.41-.39-.9-.62-1.45-.71-.54-.09-1.38-.09-2.51 0s-1.9.13-2.31.13c-.56 0-1.18-.03-1.94-.09s-1.36-.09-1.78-.11c-.44-.01-.9.04-1.4.16-.51.12-.92.32-1.25.62-.77.69-1.16 1.58-1.16 2.68 0 1.84.62 3.06 1.87 3.65 1.24.6 3.1.89 5.56.89h.09zm-3.56-6.23c.39 0 .72.19 1 .58.28.38.42.86.42 1.42 0 .56-.14 1.04-.42 1.42-.28.38-.62.58-1 .58-.42 0-.77-.19-1.05-.58-.28-.38-.42-.86-.42-1.42s.14-1.04.42-1.42c.28-.39.63-.58 1.05-.58z"})}),Object(c.jsx)("span",{className:"vh",children:"GitHub"})]})}),Object(c.jsx)("li",{className:m.connectionItem,children:Object(c.jsxs)("a",{href:"https://codepen.io/nelilly/",className:m.connectionLink,target:"_blank",rel:"noopener noreferrer",children:[Object(c.jsx)("svg",{className:m.connectionIcon,height:"32",width:"32",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 26",fill:"none",stroke:"currentColor",strokeWidth:"2.3",strokeLinecap:"round",strokeLinejoin:"round",children:Object(c.jsx)("path",{d:"M2 16.7L13 24l11-7.3V9.3L13 2L2 9.3V16.7zM24 16.7L13 9.3l-11 7.4M2 9.3l11 7.3 l11-7.3M13 2v7.3M13 16.7V24"})}),Object(c.jsx)("span",{className:"vh",children:"CodePen"})]})}),Object(c.jsx)("li",{className:m.connectionItem,children:Object(c.jsxs)("a",{href:"https://dribbble.com/nelilly/about",className:m.connectionLink,target:"_blank",rel:"noopener noreferrer",children:[Object(c.jsx)("svg",{className:m.connectionIcon,height:"32",width:"32",viewBox:"0 0 100 100",fill:"currentColor",children:Object(c.jsx)("path",{d:"M8.1 50.1c0-7.7 1.9-14.7 5.7-21.2 3.8-6.5 8.9-11.6 15.4-15.4 6.5-3.8 13.5-5.7 21.2-5.7 7.7 0 14.7 1.9 21.2 5.7 6.5 3.8 11.6 8.9 15.4 15.4 3.8 6.5 5.7 13.5 5.7 21.2s-2 14.7-5.7 21.2c-3.8 6.5-8.9 11.6-15.4 15.4-6.5 3.8-13.5 5.7-21.2 5.7-7.7 0-14.7-1.9-21.2-5.7-6.5-3.8-11.6-8.9-15.4-15.4-3.8-6.5-5.7-13.6-5.7-21.2zm7.1 0c0 8.8 3 16.5 8.9 23.2C26.7 68 31 63 36.9 58.2c5.9-4.8 11.6-7.8 17.1-9-.8-2-1.7-3.7-2.4-5.3-9.7 3.1-20.2 4.6-31.4 4.6-2.2 0-3.8 0-4.9-.1v.8c-.1.4-.1.6-.1.9zm1.1-8.7c1.2.1 3.1.2 5.5.2 9.4 0 18.3-1.3 26.8-3.8-4.3-7.6-9-13.9-14.1-19C30 21 26.2 24.1 23 28.1c-3.2 4-5.4 8.4-6.7 13.3zm12.5 36.5c6.4 5 13.5 7.4 21.5 7.4 4.2 0 8.3-.8 12.4-2.4-1.1-9.6-3.3-19-6.6-28-5.2 1.1-10.4 4-15.7 8.5-5.1 4.7-9 9.4-11.6 14.5zm13-61.9c5 5.1 9.5 11.5 13.8 19.2C63.2 32 69 27.9 72.9 22.9c-6.5-5.4-14-8.1-22.5-8.1-2.9 0-5.8.4-8.6 1.2zm16.8 25.2c.8 1.8 1.8 4.1 2.9 6.8 4.2-.4 8.7-.6 13.6-.6 3.5 0 7 .1 10.4.3-.5-7.7-3.3-14.5-8.3-20.4-3.7 5.4-9.9 10.1-18.6 13.9zm5 12.7c2.9 8.3 4.8 16.9 5.8 25.7 4.4-2.9 8.1-6.6 10.9-11.1 2.8-4.5 4.5-9.4 5.1-14.6-4.1-.3-7.9-.4-11.2-.4-3.2 0-6.7.2-10.6.4z"})}),Object(c.jsx)("span",{className:"vh",children:"Dribbble"})]})}),Object(c.jsx)("li",{className:m.connectionItem,children:Object(c.jsxs)("a",{href:"https://www.artstation.com/nelilly",className:m.connectionLink,target:"_blank",rel:"noopener noreferrer",children:[Object(c.jsx)("svg",{className:m.connectionIcon,height:"32",width:"32",viewBox:"0 0 512 512",children:Object(c.jsx)("path",{fill:"currentColor",d:"M31 363.5l38.1 65.8c7.7 15.4 23.4 25.1 40.6 25.1h252.7L310 363.5H31zm442.6-24.3L326.4 81.8c-7.9-14.9-23.4-24.2-40.2-24.2h-78.3L435.8 454l36-62.4c1.7-2.9 18.6-26.3 1.8-52.4zm-200.8-40.3L170.5 121.8 68.2 298.9h204.6z"})}),Object(c.jsx)("span",{className:"vh",children:"Art Station"})]})}),Object(c.jsx)("li",{className:m.connectionItem,children:Object(c.jsxs)("a",{href:"https://fineartamerica.com/profiles/1-nathan-lilly",className:m.connectionLink,target:"_blank",rel:"noopener noreferrer",children:[Object(c.jsx)("svg",{className:m.connectionIcon,height:"32",width:"32",viewBox:"0 0 100 100",children:Object(c.jsx)("path",{fill:"currentColor",d:"M81.1 34.3c-2.2-.1-4.1.6-6.1 1-.7.2-1.5.3-2.3.6-1.1.4-2.8.4-4.5.4-2.3-.1-4.6-.4-6.4-1.8l-1.1-.8c-1.2-.9-1.9-2.2-2-3.7l-.1-1.4c-.1-1.7 0-3.4.4-5.1.4-1.6.5-3.3.2-5-.9-7.3-7.2-13-14.6-13.1-8.4-.1-15.2 6.6-15.2 14.9 0 4.4 1.9 8.3 4.9 11 .5.4.9.9 1.3 1.4l.5.6c2 2.7 1.3 6.4-2.5 10.3L32.3 45c-1.5 1.4-5.1 3.7-7.1 4.1C16 50.9 9 59.1 9.1 68.9c0 10.6 8.5 19.6 19.1 20.2 11.7.6 21.4-8.7 21.4-20.2 0-2.8-.6-5.4-1.6-7.8-.6-1.4-1.4-5.8-1.4-7.4v-4.2c0-1.6 1-4 2.1-5.2a5.8 5.8 0 014.5-1.7c3.5.2 6.9 1.6 9.6 3.9l1.5 1.2c1.8 1.5 3.3 3.4 4.4 5.5 2.1 4.2 6.5 7.1 11.6 7.1 7.3 0 13.2-6.1 12.9-13.4-.3-6.7-5.6-12.1-12.1-12.6z"})}),Object(c.jsx)("span",{className:"vh",children:"Fine Art America"})]})}),Object(c.jsx)("li",{className:m.connectionItem,children:Object(c.jsxs)("a",{href:"https://www.youtube.com/c/nathanelilly/videos",className:m.connectionLink,target:"_blank",rel:"noopener noreferrer",children:[Object(c.jsx)("svg",{className:m.connectionIcon,height:"32",width:"32",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(c.jsx)("path",{fill:"currentColor",d:"M471.6 147.3a56.4 56.4 0 00-39.8-40C396.7 97.8 256 97.8 256 97.8s-140.7 0-175.8 9.5a56.6 56.6 0 00-39.8 40c-9.4 35.3-9.4 109-9.4 109s0 73.7 9.4 109a55.7 55.7 0 0039.8 39.4c35.1 9.5 175.8 9.5 175.8 9.5s140.7 0 175.8-9.5a55.7 55.7 0 0039.8-39.4c9.4-35.3 9.4-109 9.4-109s0-73.7-9.4-109zM210 323.2V189.4l117.6 66.9L210 323.2z"})}),Object(c.jsx)("span",{className:"vh",children:"YouTube"})]})}),Object(c.jsx)("li",{className:m.connectionItem,children:Object(c.jsxs)("a",{href:"https://twitter.com/nelilly",className:m.connectionLink,target:"_blank",rel:"noopener noreferrer",children:[Object(c.jsx)("svg",{className:m.connectionIcon,height:"32",width:"32",xmlns:"http://www.w3.org/2000/svg",viewBox:"-1 -1 21 23",children:Object(c.jsx)("path",{fill:"currentColor",d:"M17.996 4.064C18.255 9.851 13.941 16.3 6.303 16.3A11.59 11.59 0 010 14.449a8.247 8.247 0 006.088-1.705 4.11 4.11 0 01-3.84-2.859c.645.12 1.282.086 1.86-.069C2.126 9.42.765 7.638.808 5.726c.551.31 1.189.49 1.86.517A4.119 4.119 0 011.395.749a11.637 11.637 0 008.473 4.305C9.265 2.48 11.22 0 13.872 0c1.18 0 2.256.5 3.005 1.3a8.047 8.047 0 002.609-.999 4.102 4.102 0 01-1.808 2.274 8.245 8.245 0 002.359-.646 8.031 8.031 0 01-2.04 2.135z",transform:"translate(0,2)"})}),Object(c.jsx)("span",{className:"vh",children:"Twitter"})]})})]})]}),Object(c.jsx)("section",{className:m.legal,children:Object(c.jsx)("p",{children:"\xa92021 N.E.Lilly"})})]})})},p=n("WSXl");t.a=function(e){var t=e.children,n=e.role,r=e.setRole;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("header",{className:"".concat(p.siteHeader),children:Object(c.jsxs)("nav",{className:p.helm,children:[Object(c.jsxs)("a",{href:"/",className:p.siteId,children:[Object(c.jsxs)("svg",{className:p.siteLogo,viewBox:"-25,-25 150,150",height:"36",width:"36",children:[Object(c.jsx)("defs",{children:Object(c.jsxs)("linearGradient",{id:"redGradient",children:[Object(c.jsx)("stop",{offset:"0%",stopColor:"#700"}),Object(c.jsx)("stop",{offset:"100%",stopColor:"#a00"})]})}),Object(c.jsx)("circle",{cx:"50",cy:"50",r:"72.5",fill:"#900",stroke:"#0002",strokeWidth:"5"}),Object(c.jsx)("path",{d:"M50 95c26 0 21-48 47-48 0-11-19-21-32-4 0-18-1-26-15-38-14 12-15 20-15 38-13-17-32-7-32 4 26 0 21 48 47 48z",fill:"#fff"})]}),Object(c.jsxs)("div",{className:p.siteTitle,children:["N.E.Lilly ",Object(c.jsx)("p",{className:p.siteSubtitle,children:n})]})]}),Object(c.jsx)(f,{role:n,setRole:r})]})}),Object(c.jsx)("main",{id:"main",className:"".concat(p.main),children:t}),Object(c.jsx)(j,{role:n,setRole:r})]})}},vNVm:function(e,t,n){"use strict";var c=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=(0,r.useRef)(),i=(0,r.useState)(!1),u=c(i,2),d=u[0],h=u[1],f=(0,r.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var c=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var c=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=c.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:c}),n}(n),r=c.id,a=c.observer,o=c.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(r))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,d]);return(0,r.useEffect)((function(){if(!o&&!d){var e=(0,a.requestIdleCallback)((function(){return h(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[d]),[f,d]};var r=n("q1tI"),a=n("0G5g"),o="undefined"!==typeof IntersectionObserver;var s=new Map},wAV2:function(e,t,n){e.exports={nav:"style_nav__1JYbF",helmItem:"style_helmItem__3lOIU",navigationClose:"style_navigationClose__1WJzi",navPanel:"style_navPanel__1itv5",span:"style_span__2aW1X",primaryPanel:"style_primaryPanel__Z0Y5j",secondaryPanel:"style_secondaryPanel__W9G3r",navItem:"style_navItem__35w7R",navLink:"style_navLink__1c09J",visible:"style_visible__2XUa5",open:"style_open__3u1hC"}},zFgD:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o}));var c="an Artist",r="a Designer",a="a Developer",o="a Dilettante"}}]);