(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[886],{6472:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/colophon",function(){return r(3297)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},l=r(1003),s=r(880),c=r(9246);var u={};function h(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=s.useRouter(),i=a.default.useMemo((function(){var t=o(l.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),d=i.href,f=i.as,p=e.children,y=e.replace,g=e.shallow,m=e.scroll,x=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var v=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,b=o(c.useIntersection({rootMargin:"200px"}),2),w=b[0],j=b[1],O=a.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);a.default.useEffect((function(){var e=j&&r&&l.isLocalURL(d),t="undefined"!==typeof x?x:n&&n.locale,o=u[d+"%"+f+(t?"%"+t:"")];e&&!o&&h(n,d,f,{locale:t})}),[f,d,j,x,r,n]);var S={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:s,scroll:a}))}(e,n,d,f,y,g,m,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&h(n,d,f,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof x?x:n&&n.locale,k=n&&n.isLocaleDomain&&l.getDomainLocale(f,_,n&&n.locales,n&&n.domainLocales);S.href=k||l.addBasePath(l.addLocale(f,_,n&&n.defaultLocale))}return a.default.cloneElement(t,S)};t.default=d},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,u=i.useRef(),h=o(i.useState(!1),2),d=h[0],f=h[1],p=o(i.useState(t?t.current:null),2),y=p[0],g=p[1],m=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=s.get(n):(t=s.get(r),c.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),s.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&f(e)}),{root:y,rootMargin:r}))}),[n,y,r,d]);return i.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&g(t.current)}),[t]),[m,d]};var i=r(7294),a=r(4686),l="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},3297:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return N},default:function(){return E}});var n=r(5893),o=r(5697),i=r.n(o),a=r(7294),l=r(3200),s=r(9008),c=r(6651),u=r(7169),h=r(5301);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(e){var t=e.title,r=e.details,o=e.userValue,i=e.chartData,a=function(e,t){return 100*t/e+2*(u-e)+1},l=i.map((function(e){return e.value})).reduce((function(e,t){return e+t})),s=f(i).concat([{label:"Other",value:100-l}]),c=s.length,u=10,d=!0,p=function(e,t){return e===t&&(d=!1),e===t||"Other"===e&&d};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("figure",{className:h.chart,children:[(0,n.jsxs)("figcaption",{className:h.chartCaption,children:[(0,n.jsx)("h3",{children:t}),r&&(0,n.jsx)("p",{children:r})]}),(0,n.jsxs)("svg",{viewBox:"0,0 1000,400",fill:"currentColor",fontSize:"18",children:[(0,n.jsxs)("svg",{height:"86%",children:[(0,n.jsxs)("g",{className:h.chartGrid,children:[(0,n.jsx)("rect",{y:"0%",height:"1",width:"100%"}),(0,n.jsx)("rect",{y:"25%",height:"1",width:"100%"}),(0,n.jsx)("rect",{y:"50%",height:"1",width:"100%"}),(0,n.jsx)("rect",{y:"75%",height:"1",width:"100%"}),(0,n.jsx)("rect",{y:"99%",height:"1",width:"100%"})]}),s.map((function(e,r){var i=e.label,l=e.value;return(0,n.jsxs)("g",{children:[(0,n.jsx)("rect",{x:"".concat(a(c,r)-u/2,"%"),y:"".concat(99-l,"%"),height:"".concat(l,"%"),stroke:"currentColor",strokeWidth:".5",width:"".concat(u,"%")}),p(i,o)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("circle",{cx:"".concat(a(c,r),"%"),cy:"".concat(90.5-l,"%"),r:"20",fill:"#0088ff"}),(0,n.jsx)("text",{x:"".concat(a(c,r),"%"),y:"".concat(91-l,"%"),textAnchor:"middle",alignmentBaseline:"middle",fill:"var(--color-canvas)",className:h.you,"aria-label":"You use ".concat(i," ").concat(t),children:"You"})]})]},i)}))]}),s.map((function(e,t){var r=e.label,o=e.value;return(0,n.jsxs)("g",{children:[(0,n.jsx)("text",{x:"".concat(a(c,t),"%"),y:"91%",textAnchor:"middle",children:r}),(0,n.jsx)("text",{x:"".concat(a(c,t),"%"),y:"97%",textAnchor:"middle",className:h.chartValues,children:"".concat(o.toFixed(2),"%")})]},r)}))]})]})})},y=p;p.propTypes={title:i().string.isRequired,details:i().string.isRequired,userValue:i().string,chartData:i().arrayOf(i().shape({label:i().string.isRequired,value:i().number.isRequired})).isRequired};var g="Colophon",m=JSON.parse('[{"label":"Android","value":40.2},{"label":"Windows","value":32.76},{"label":"iOS","value":15.91},{"label":"OS X","value":7.21},{"label":"Unknown","value":1.93},{"label":"Linux","value":0.89}]'),x=JSON.parse('[{"label":"Chrome","value":64.75},{"label":"Safari","value":18.4},{"label":"Firefox","value":3.71},{"label":"Samsung Internet","value":3.3},{"label":"Edge","value":3.14},{"label":"Opera","value":2.16}]'),v=JSON.parse('[{"label":"1920\xd71080","value":8.78},{"label":"1366\xd7768","value":8.54},{"label":"360\xd7640","value":7.14},{"label":"414\xd7896","value":4.25},{"label":"1536\xd7864","value":3.8},{"label":"375\xd7667","value":3.53}]'),b=JSON.parse('[{"label":"Mobile","value":53.74},{"label":"Desktop","value":43.44},{"label":"Tablet","value":2.75},{"label":"Console","value":0.07}]'),w=r(6841);function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=function(e){var t=e.indexOf("MSIE")>-1||e.indexOf("rv:")>-1,r=e.indexOf("Chrome")>-1,n=e.indexOf("Edg")>-1,o=e.indexOf("Firefox")>-1,i=e.indexOf("Opera")>-1||e.indexOf("OP")>-1,a=e.indexOf("Safari")>-1;return i?"Opera":n?"Microsoft Edge":r?"Chrome":a?"Safari":o?"Firefox":t?"Internet Explorer":"an unknown"},_=function(e){return!1===e||null===e?"Unknown":e.indexOf("Linux")>-1?"Linux":e.indexOf("iP")>-1?"iOS":e.indexOf("Mac")>-1?"OS X":e.indexOf("Sun")>-1?"Solaris":e.indexOf("Win")>-1?"Windows":e},k=function(e){return/nintendo|playstation|psp|xbox/i.test(e.toLowerCase())?"Console":/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|xoom|sch-i800|pixel c|sm-t827r4|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(e.toLowerCase())?"Tablet":/mobile|ipad|phone|ipod|android|blackberry|mini|windows\sce|palm/i.test(e.toLowerCase())?"Mobile":"Desktop"},C=function(e){var t=e.indexOf("Chrome")>-1&&e.indexOf("Windows")>-1||e.indexOf("OPR")>-1,r=e.indexOf("Xbox")>-1,n=e.indexOf("Gecko")>-1,o=e.indexOf("Opera")>-1,i=e.indexOf("Trident")>-1,a=e.indexOf("WebKit")>-1;return o?"the Presto":i?"the Trident":r?"the EdgeHTML":t?"the Blink":a?"the WebKit":n?"the Gecko":"an unknown"},A=function(e){var t=e.lastUpdated,r=O((0,c.K)(),1)[0],o=(0,a.useState)({}),i=o[0],h=o[1];return(0,a.useEffect)((function(){var e=window.innerHeight,t=window.innerWidth,r=navigator.platform,n=navigator.userAgent;h({browserFamily:S(n),rendering:C(n),innerHeight:e,innerWidth:t,height:window.screen.height,width:window.screen.width,os:_(r),device:k(n),userAgent:n})}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:"N.E.Lilly: Colophon"}),(0,n.jsx)("link",{rel:"canonical",href:"https://lilly.art/colophon/"}),(0,n.jsx)("meta",{property:"og:title",content:"N.E.Lilly: Colophon"},"title"),(0,n.jsx)("meta",{property:"og:url",content:"https://lilly.art/colophon/"}),(0,n.jsx)("meta",{property:"og:description",content:"N.E.Lilly: Colophon."}),(0,n.jsx)("meta",{property:"og:image",content:"https://lilly.art/images/og/home.webp"}),(0,n.jsx)("meta",{property:"twitter:image",content:"https://lilly.art/images/og/home.webp"}),(0,n.jsx)("meta",{name:"keywords",content:"N.E. Lilly, Nathan E. Lilly, colophon, portfolio, development, design, art, illustration"}),(0,n.jsx)("meta",{name:"description",content:"N.E.Lilly: Colophon."})]}),(0,n.jsx)(u.Z,{children:(0,n.jsxs)("article",{className:w.colophon,children:[(0,n.jsx)("h1",{children:g}),r.role===l.ZJ&&(0,n.jsxs)("blockquote",{className:w.quote,children:[(0,n.jsx)("p",{children:"Far too few designers put any thought into usability, ending up with a great product that\u2019s completely inaccessible."}),(0,n.jsx)("p",{className:w.quoteCitation,children:"\u2014 James Dyson"})]}),r.role===l.R0&&(0,n.jsxs)("blockquote",{className:w.quote,children:[(0,n.jsx)("p",{children:"I am not here to teach you young people any one way to draw \u2014 I am here to help you. I want to help you find a purpose, a reason for painting."}),(0,n.jsx)("p",{className:w.quoteCitation,children:"\u2014 John French Sloan"})]}),r.role===l.bV&&(0,n.jsxs)("blockquote",{className:w.quote,children:[(0,n.jsx)("p",{children:"Software is a great combination between artistry and engineering."}),(0,n.jsx)("p",{className:w.quoteCitation,children:"\u2014 Bill Gates"})]}),r.role===l.MW&&(0,n.jsxs)("blockquote",{className:w.quote,children:[(0,n.jsx)("p",{children:"From inaccessible mountain range by way of desert untrod by human foot to the ends of the unknown seas, the breath of the everlasting creative spirit is felt, rejoicing over every speck of dust that hearkens to it and lives."}),(0,n.jsx)("p",{className:w.quoteCitation,children:"\u2014 Johann Wolfgang von Goethe"})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("p",{children:"A colophon is a page at the back of a book, originating from the Greek word for \u201csummit\u201d. The purpose of a colophon is to give the reader information about the book\u2019s authorship and construction methods. It is the final touch put on the work."}),(0,n.jsxs)("p",{children:["This site was designed and developed using ",(0,n.jsx)("a",{href:"https://jamstack.org/",children:"JAM stack principles"}),", the ",(0,n.jsx)("a",{href:"https://reactjs.org/",children:"React"})," library with ",(0,n.jsx)("a",{href:"https://nextjs.org/",children:"Next.js"})," and served on ",(0,n.jsx)("a",{href:"https://pages.github.com/",children:"GitHub Pages"}),"."]}),(0,n.jsxs)("p",{children:["It is currently displayed on ",i.os," operating system in ",i.browserFamily," browser using ",i.rendering," rendering engine with a screen size of ",i.width,"\xd7",i.height," and document size of ",i.innerWidth,"\xd7",i.innerHeight," (if your browser is being honest)."]}),(0,n.jsx)("h2",{children:"User Comparison"}),(0,n.jsx)(y,{title:"Operating System",details:"The Android operating system is the current usage leader, followed closely by Windows and the combined iOS/OSX operating systems.",userValue:i.os,chartData:m}),(0,n.jsx)(y,{title:"Browser",details:"Chrome maintains the vast majority of the browser market worldwide, while use of Internet Explorer has dropped to less that 1%.",userValue:i.browserFamily,chartData:x}),(0,n.jsx)(y,{title:"Screen Resolution",details:"Screen resolution is highly fractured, underscoring the importance of using proper responsive techniques.",userValue:"".concat(i.width,"\xd7").concat(i.height),chartData:v}),(0,n.jsx)(y,{title:"Devices",details:"Globally, mobile devices are increasingly important while the use of game consoles for Internet access languishes.",userValue:i.device,chartData:b}),(0,n.jsxs)("p",{children:["Source: ",(0,n.jsx)("a",{href:"https://statcounter.com/",children:"Statcounter"})," Worldwide statistics (Aug 2020)."]})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{children:"Navigation Icon"}),(0,n.jsxs)("figure",{style:{textAlign:"center",margin:"1rem 0"},children:[(0,n.jsx)("figcaption",{style:{textAlign:"left"},children:(0,n.jsx)("p",{children:"The main navigation icon is a ship\u2019s wheel in homage to Netscape Navigator, the inherent nautical theme of the World Wide Web, and because I hate the hamburger."})}),(0,n.jsx)("svg",{height:"200",width:"200",viewBox:"0 0 100 100",fill:"#fff6",stroke:"currentColor",children:(0,n.jsx)("use",{href:"#helm",height:"100",width:"100"})})]})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{children:"N.E.Lilly Logo"}),(0,n.jsxs)("figure",{style:{textAlign:"center",margin:"1rem 0"},children:[(0,n.jsx)("figcaption",{style:{textAlign:"left"},children:(0,n.jsxs)("p",{children:["The site logo is a minimalist design by N.E.Lilly based on the coat of arms of Thomas Lilly of Bromsgrove (1502 - 1572), as described in Burke\u2019s General Armory. ",(0,n.jsx)("q",{children:"3 white lilies on a field of red, with a swan crest."})]})}),(0,n.jsx)("img",{src:"/lilly3_swan.svg",height:"200",width:"200",alt:"3 white lilies on a field of red, with a swan crest."})]})]}),(0,n.jsxs)("p",{children:["This site is not copy protected. Last modified on ",t,"."]}),(0,n.jsx)("p",{className:w.end,children:"\u2660"})]})})]})};A.propTypes={lastUpdated:i().string.isRequired};var N=!0,E=A},5301:function(e){e.exports={chart:"style_chart__6oaI0",chartCaption:"style_chartCaption__sKCTU",chartGrid:"style_chartGrid__3__eK",chartValues:"style_chartValues__CYOz6",you:"style_you__4xh9h"}},6841:function(e){e.exports={colophon:"style_colophon__KpZHs",end:"style_end__488Ij",quote:"style_quote__Gpnsq",quoteCitation:"style_quoteCitation__NR309"}},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[169,774,888,179],(function(){return t=6472,e(e.s=t);var t}));var t=e.O();_N_E=t}]);