(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{7330:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return i(4511)}])},1551:function(e,n,i){"use strict";function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,s=new Array(n);i<n;i++)s[i]=e[i];return s}function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var s,t,r=[],a=!0,o=!1;try{for(i=i.call(e);!(a=(s=i.next()).done)&&(r.push(s.value),!n||r.length!==n);a=!0);}catch(l){o=!0,t=l}finally{try{a||null==i.return||i.return()}finally{if(o)throw t}}return r}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return s(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var r,a=(r=i(7294))&&r.__esModule?r:{default:r},o=i(1003),l=i(880),c=i(9246);var d={};function p(e,n,i,s){if(e&&o.isLocalURL(n)){e.prefetch(n,i,s).catch((function(e){0}));var t=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;d[n+"%"+i+(t?"%"+t:"")]=!0}}var u=function(e){var n,i=!1!==e.prefetch,s=l.useRouter(),r=a.default.useMemo((function(){var n=t(o.resolveHref(s,e.href,!0),2),i=n[0],r=n[1];return{href:i,as:e.as?o.resolveHref(s,e.as):r||i}}),[s,e.href,e.as]),u=r.href,h=r.as,m=e.children,f=e.replace,g=e.shallow,v=e.scroll,y=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var j=(n=a.default.Children.only(m))&&"object"===typeof n&&n.ref,x=t(c.useIntersection({rootMargin:"200px"}),2),b=x[0],S=x[1],N=a.default.useCallback((function(e){b(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,b]);a.default.useEffect((function(){var e=S&&i&&o.isLocalURL(u),n="undefined"!==typeof y?y:s&&s.locale,t=d[u+"%"+h+(n?"%"+n:"")];e&&!t&&p(s,u,h,{locale:n})}),[h,u,S,y,i,s]);var w={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,i,s,t,r,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(i))&&(e.preventDefault(),n[t?"replace":"push"](i,s,{shallow:r,locale:l,scroll:a}))}(e,s,u,h,f,g,v,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(u)&&p(s,u,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var A="undefined"!==typeof y?y:s&&s.locale,C=s&&s.isLocaleDomain&&o.getDomainLocale(h,A,s&&s.locales,s&&s.domainLocales);w.href=C||o.addBasePath(o.addLocale(h,A,s&&s.defaultLocale))}return a.default.cloneElement(n,w)};n.default=u},9246:function(e,n,i){"use strict";function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,s=new Array(n);i<n;i++)s[i]=e[i];return s}function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var s,t,r=[],a=!0,o=!1;try{for(i=i.call(e);!(a=(s=i.next()).done)&&(r.push(s.value),!n||r.length!==n);a=!0);}catch(l){o=!0,t=l}finally{try{a||null==i.return||i.return()}finally{if(o)throw t}}return r}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return s(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,i=e.rootMargin,s=e.disabled||!o,d=r.useRef(),p=t(r.useState(!1),2),u=p[0],h=p[1],m=t(r.useState(n?n.current:null),2),f=m[0],g=m[1],v=r.useCallback((function(e){d.current&&(d.current(),d.current=void 0),s||u||e&&e.tagName&&(d.current=function(e,n,i){var s=function(e){var n,i={root:e.root||null,margin:e.rootMargin||""},s=c.find((function(e){return e.root===i.root&&e.margin===i.margin}));s?n=l.get(s):(n=l.get(i),c.push(i));if(n)return n;var t=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;n&&i&&n(i)}))}),e);return l.set(i,n={id:i,observer:r,elements:t}),n}(i),t=s.id,r=s.observer,a=s.elements;return a.set(e,n),r.observe(e),function(){if(a.delete(e),r.unobserve(e),0===a.size){r.disconnect(),l.delete(t);var n=c.findIndex((function(e){return e.root===t.root&&e.margin===t.margin}));n>-1&&c.splice(n,1)}}}(e,(function(e){return e&&h(e)}),{root:f,rootMargin:i}))}),[s,f,i,u]);return r.useEffect((function(){if(!o&&!u){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),r.useEffect((function(){n&&g(n.current)}),[n]),[v,u]};var r=i(7294),a=i(4686),o="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},4511:function(e,n,i){"use strict";i.r(n);var s=i(5893),t=i(9008),r=i(7169),a=i(6055);n.default=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.default,{children:[(0,s.jsx)("title",{children:"N.E.Lilly: R\xe9sum\xe9"}),(0,s.jsx)("link",{rel:"canonical",href:"https://lilly.art/resume/"}),(0,s.jsx)("meta",{property:"og:title",content:"N.E.Lilly: R\xe9sum\xe9"},"title"),(0,s.jsx)("meta",{property:"og:url",content:"https://lilly.art/resume/"}),(0,s.jsx)("meta",{property:"og:description",content:"N.E.Lilly: R\xe9sum\xe9."}),(0,s.jsx)("meta",{property:"og:image",content:"https://lilly.art/images/og/home.webp"}),(0,s.jsx)("meta",{property:"twitter:image",content:"https://lilly.art/images/og/home.webp"}),(0,s.jsx)("meta",{name:"keywords",content:"N.E. Lilly, Nathan E. Lilly, resume, portfolio, development, design, art, illustration"}),(0,s.jsx)("meta",{name:"description",content:"N.E.Lilly: R\xe9sum\xe9."})]}),(0,s.jsx)(r.Z,{children:(0,s.jsxs)("article",{className:a.resume,children:[(0,s.jsxs)("section",{className:"".concat(a.resumeSection," ").concat(a.cover),children:[(0,s.jsx)("h1",{children:"Nathan E. Lilly"}),(0,s.jsx)("h2",{children:"UX Engineer, Front-End Development, UI Design"}),(0,s.jsx)("p",{children:"Software Development, Apps, Web + Mobile"}),(0,s.jsx)("p",{children:"Nathan E. Lilly used his artistic training to become a software developer for Fortune 100 companies in the technology, media, and finance industries. He is an effective communicator with the ability to explain technical issues in everyday language. He has consistently demonstrated the ability to effectively translate ideas into reality, working on multiple assignments simultaneously, while ensuring that each one meets its deadlines and is of high quality. Skilled in User Interface (UI) Engineering and Front-End Development; Human Factors & Accessibility (A11y); Full-Stack Development (LAMP, MERN, AWS/Serverless), CMS Development; Information Architecture, Content Strategy; User Experience (UX) Design; Illustration and Visual Design; Interactive Media, Animation and Motion Graphics."})]}),(0,s.jsxs)("section",{className:"".concat(a.resumeSection," ").concat(a.experienceSection),children:[(0,s.jsx)("h2",{children:"Experience"}),(0,s.jsxs)("section",{className:a.position,children:[(0,s.jsx)("h3",{className:a.employer,children:"Comcast NBCUniversal"}),(0,s.jsxs)("div",{className:a.details,children:[(0,s.jsx)("p",{className:a.title,children:"Senior UI/UX Developer"}),(0,s.jsx)("p",{className:a.location,children:"Philadelphia, PA"}),(0,s.jsx)("p",{className:a.duration,children:"6/2021 - Present"})]}),(0,s.jsx)("p",{className:a.description,children:"Gather and evaluate user-focused requirements, design graphic elements, and build new software and web applications in collaboration with product managers and engineers in a fast-paced Agile driven environment using HTML5, CSS3, JavaScript (ES6), design software (Adobe CS, Photoshop, Illustrator), wireframe tools, and Javascript UI technologies and frameworks (including React, MERN, JAM, AWS/Serverless) for Comcast NBCUniversal internal development teams. Lead teams/projects and shares expertise. Mentor and train other members of the team and non-technical personnel. Prepare and present drafts, storyboards, process flows, sitemaps, prototypes, and finished applications to internal teams and key stakeholders. Apply comprehensive knowledge of human/computer interaction, web standards, accessibility, responsive device support, browser rendering, and cross-browser support. Integrate knowledge of business and functional priorities. Adhere to corporate style guide standards. Create original graphic elements (e.g. images, figures, sketches, charts, and tables). Identify and troubleshoot potential user experience issues. Conduct adjustments to the application based on user feedback. Assist with tracking performance metrics. Analyze, test, and assist with the integration of new components and applications. Oversee the documentation of all development activity."}),(0,s.jsxs)("div",{className:a.details,children:[(0,s.jsx)("p",{className:a.title,children:"UI Engineer"}),(0,s.jsx)("p",{className:a.location,children:"Philadelphia, PA"}),(0,s.jsx)("p",{className:a.duration,children:"4/2016 - 6/2021"})]}),(0,s.jsx)("p",{className:a.description,children:"Collaborate with UX designers and back-end developers in a fast-paced Agile driven environment to create and enhance user interfaces, components, and page designs for high-volume, large-scale web applications using HTML5, CSS3, JavaScript (ES6), and Javascript UI technologies and frameworks (including MERN, AWS/Serverless, React.js, Polymer, JQuery, JSON); Work with various CMSs and IDEs; Required intimate knowledge of web standards, accessibility, responsive device support, browser rendering, and cross-browser support."})]}),(0,s.jsxs)("section",{className:a.position,children:[(0,s.jsxs)("h3",{className:a.employer,children:["The Judge Group ",(0,s.jsx)("span",{children:"for Comcast NBCUniversal"})]}),(0,s.jsxs)("div",{className:a.details,children:[(0,s.jsx)("p",{className:a.title,children:"Senior Front-End Developer"}),(0,s.jsx)("p",{className:a.location,children:"Philadelphia, PA"}),(0,s.jsx)("p",{className:a.duration,children:"8/2014 - 4/2016"})]}),(0,s.jsx)("p",{className:a.description,children:"Collaborate with UX designers and back-end developers in a fast-paced Agile driven environment to create and enhance user interfaces for high-volume, large-scale web applications; Develop advanced interactive page features using HTML5, JavaScript, JQuery and custom code; Work with Sitecore CMS, Visual Studio, and Team Foundation Server (TFS); Experience rendering page designs for large-scale, public-facing websites using HTML, CSS, and Javascript UI technologies (including JQuery, React.js, Polymer, AJAX, JSON, MVC, MVVM, Knockout.js); Required intimate knowledge of web standards, accessibility, responsive device support, browser rendering, and cross-browser support."})]}),(0,s.jsxs)("section",{className:a.position,children:[(0,s.jsxs)("h3",{className:a.employer,children:["LiquidHub ",(0,s.jsx)("span",{children:"for The Vanguard Group"})]}),(0,s.jsxs)("div",{className:a.details,children:[(0,s.jsx)("p",{className:a.title,children:"Senior UI Designer"}),(0,s.jsx)("p",{className:a.location,children:"Malvern, PA"}),(0,s.jsx)("p",{className:a.duration,children:"1/2010 - 6/2014"})]}),(0,s.jsx)("p",{className:a.description,children:"Responsible for User Interaction development (UX), user interface design of website prototypes, and component based design solutions using Dreamweaver, XML, Cascading Style Sheets, JavaScript, HTML, JSF, Photoshop, Illustrator, and RIAs (Rich Internet Applications using tools like AJAX, Flash) in an Agile project management environment for the User Centered Design group of a premier investment management company. Provide senior level user interface design services, which include the analysis of complex user and business workflows and the design and documentation of highly usable interfaces (web, mobile, or client/server), reflecting knowledge of the user\u2019s tasks, information hierarchy and usability best practices. Create detailed user interface designs, including prototyping, for external (web/mobile) and internal (client/server) applications. Support the creation of visual elements, components and templates. Recommend viable, effective design/code solutions which supported underlying performance thresholds. Maintain technical knowledge around company UCD practices, use of templates & components, and prototype process."})]}),(0,s.jsxs)("section",{className:a.position,children:[(0,s.jsxs)("h3",{className:a.employer,children:["Freelance ",(0,s.jsx)("span",{children:"for various clients"})]}),(0,s.jsxs)("div",{className:a.details,children:[(0,s.jsx)("p",{className:a.title,children:"Lead Developer"}),(0,s.jsx)("p",{className:a.location,children:"Philadelphia, PA"}),(0,s.jsx)("p",{className:a.duration,children:"8/1998 - Present"})]}),(0,s.jsx)("p",{className:a.description,children:"Design and development on various projects; Work closely with clients to answer questions and understand project expectations. Create and adherence to project budgets. Present specifications, storyboards, wireframes, and design prototypes. Advise and provide guidance to clients through each step of site construction. Quality assurance and testing of all web design projects, including web usability and accessibility. Create and manage Internet and Intranet sites, with key responsibility for creation of web content. Design, develop, and implement web interfaces, graphics, and layouts. Create, optimize, and manipulate images. Create and produce interactive rich media ads. Write, edit and proofread documents in the process of planning and preparing articles for online dissemination."})]}),(0,s.jsxs)("section",{className:a.position,children:[(0,s.jsx)("h3",{className:a.employer,children:"GMAC Mortgage"}),(0,s.jsxs)("div",{className:a.details,children:[(0,s.jsx)("p",{className:a.title,children:"Web Developer"}),(0,s.jsx)("p",{className:a.location,children:"Fort Washington, PA"}),(0,s.jsx)("p",{className:a.duration,children:"4/2007 - 10/2009"})]}),(0,s.jsx)("p",{className:a.description,children:"Work closely with business/marketing staff to answer questions and understand project expectations; Assure code quality and test all projects, including web usability and accessibility; Develop and maintain web sites using HTML, CSS, JavaScript, Dreamweaver, Flash, and XML. Sites included GMAC Mortgage, Ditech, and various internal applications."})]}),(0,s.jsxs)("section",{className:a.position,children:[(0,s.jsxs)("h3",{className:a.employer,children:["Kelly Professional Services ",(0,s.jsx)("span",{children:"for J.P.Morgan Chase"})]}),(0,s.jsxs)("div",{className:a.details,children:[(0,s.jsx)("p",{className:a.title,children:"Web Technician"}),(0,s.jsx)("p",{className:a.location,children:"Wilmington, DE"}),(0,s.jsx)("p",{className:a.duration,children:"5/2005 - 4/2007"})]}),(0,s.jsx)("p",{className:a.description,children:"Responsible for development and maintenance of client websites for JPMorgan Chase. Additional responsibilities include creation and maintenance of automation scripts and applications. Develop and maintain web sites using HTML, CSS, JavaScript, Dreamweaver, Flash, and XML. Clients included Disney, United Airlines, Amazon, Starbucks, Universal Studios."})]}),(0,s.jsxs)("section",{className:a.position,children:[(0,s.jsx)("h3",{className:a.employer,children:"E-duction, Inc."}),(0,s.jsxs)("div",{className:a.details,children:[(0,s.jsx)("p",{className:a.title,children:"Electronic Media Manager"}),(0,s.jsx)("p",{className:a.location,children:"Blue Bell, PA"}),(0,s.jsx)("p",{className:a.duration,children:"2/2001 - 7/2002"})]}),(0,s.jsx)("p",{className:a.description,children:"Creation and implementation of the company\u2019s style guides and visual brand standards. Design and maintain all aspects of the company\u2019s published materials including web sites, desktop publishing, traditional print media, and presentations."})]}),(0,s.jsxs)("section",{className:a.position,children:[(0,s.jsx)("h3",{className:a.employer,children:"University of the Arts"}),(0,s.jsxs)("div",{className:a.details,children:[(0,s.jsx)("p",{className:a.title,children:"Instructor (Adjunct Faculty)"}),(0,s.jsx)("p",{className:a.location,children:"Philadelphia, PA"}),(0,s.jsx)("p",{className:a.duration,children:"2/2001 - 9/2001"})]}),(0,s.jsx)("p",{className:a.description,children:"Instruction of continuing education students in web development methods and technologies, including web graphics, HTML, CSS, JavaScript, Flash, and multimedia, in a university class format."})]}),(0,s.jsxs)("section",{className:a.position,children:[(0,s.jsx)("h3",{className:a.employer,children:"JSP Concepts"}),(0,s.jsxs)("div",{className:a.details,children:[(0,s.jsx)("p",{className:a.title,children:"Tutor"}),(0,s.jsx)("p",{className:a.location,children:"Camp Hill, PA"}),(0,s.jsx)("p",{className:a.duration,children:"2/1997 - 10/2001"})]}),(0,s.jsx)("p",{className:a.description,children:"Private on-on-one instruction with individual students in the use of graphic design applications."})]}),(0,s.jsxs)("section",{className:a.position,children:[(0,s.jsxs)("h3",{className:a.employer,children:["JFC ProTemps ",(0,s.jsx)("span",{children:"for TSR Inc. & NavSup FMSO"})]}),(0,s.jsxs)("div",{className:a.details,children:[(0,s.jsx)("p",{className:a.title,children:"Web Developer"}),(0,s.jsx)("p",{className:a.location,children:"Camp Hill, PA"}),(0,s.jsx)("p",{className:a.duration,children:"10/1999 - 10/2000"})]}),(0,s.jsx)("p",{className:a.description,children:"Re-design and maintenance of the 4,000 page United States Navy Supply (Fleet Material Supply Office) website to ensure greater security of the site based on consultations with Navy Marketing Representative and Navy Webmaster."})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Skills"}),(0,s.jsx)("h3",{children:"Development"}),(0,s.jsx)("p",{children:"UI Engineering and Front-End Development of applications integrating databases and using server-side scripting languages. E-commerce implementation and support. Database planning, normalization, and integration."}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{children:"Programming:"}),(0,s.jsx)("dd",{children:"Javascript, Javascript Frameworks (React, Polymer, Angular), Redux, Functional Programming, Regular Expressions, Object Oriented Programming (OOP); MERN, LAMP, AWS/Serverless;"}),(0,s.jsx)("dt",{children:"Server-side Scripting:"}),(0,s.jsx)("dd",{children:"Node, PHP, CGI, Perl, ASP, XML;"}),(0,s.jsx)("dt",{children:"Web Services:"}),(0,s.jsx)("dd",{children:"HTML5 APIs, RSS, RDF;"}),(0,s.jsx)("dt",{children:"Networking:"}),(0,s.jsx)("dd",{children:"Apache, FTP, SSH;"}),(0,s.jsx)("dt",{children:"Databases:"}),(0,s.jsx)("dd",{children:"DynamoDB, SQL, MySQL, SQLite, Access;"}),(0,s.jsx)("p",{children:"HTML5, CSS3, JavaScript, ES6, React.js, Redux, Polymer, jQuery, DHTML, SVG, Responsive design, Web Performance, Cross-Platform, Cross-Browser, Web Standards compliant design, Search Engine Optimization; Node, PHP, Python, ASP, CGI; Apache; SQL, MySQL; MERN, JAM, LAMP;"})]}),(0,s.jsx)("h3",{children:"Design"}),(0,s.jsx)("p",{children:"User Experience (UX), Internet consulting, project management for the WWW, web analysis & redesign, and web design & development. Creation of visual, audio, animation, video, and interactive media for the Internet. Search engine optimization, including keyword research/selection, meta tagging, search engine submissions, position tracking."}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{children:"Visual Design:"}),(0,s.jsx)("dd",{children:"Adobe Photoshop, Image Ready, Illustrator, CorelDraw, GIMP;"}),(0,s.jsx)("dt",{children:"UI Design:"}),(0,s.jsx)("dd",{children:"Cross-Platform, Cross-Browser, Web Standards compliant design, Search Engine Optimization, XHTML, HTML, HTML5, Javascript, jQuery, Cascading Style Sheets (CSS-1, CSS-2, CSS-P, CSS3), DHTML, Web Page Editors (Dreamweaver, Adobe GoLive, Microsoft FrontPage);"}),(0,s.jsx)("dt",{children:"Media Production"}),(0,s.jsx)("dd",{children:"Macromedia Flash (Animation, Video, Actionscript), Streaming Audio and Video, SVG, SMIL, Director, Sound Forge, Premiere; Lightwave, Poser, Bryce;"}),(0,s.jsx)("p",{children:"Adobe Photoshop, Illustrator, InDesign, CorelDraw, Flash (Animation, Video, Actionscript), Streaming Audio and Video, Director, Sound Forge, Premiere; Lightwave, Poser, Bryce; "})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Certifications"}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{children:"International Association of Accessibility Professionals"}),(0,s.jsxs)("dd",{children:[(0,s.jsx)("a",{href:"https://www.accessibilityassociation.org/cpwacertificants#L-R",children:"Certified Professional in Web Accessibility"})," (CPWA), 12/2018"]})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Volunteering"}),(0,s.jsxs)("dl",{children:[(0,s.jsxs)("dt",{children:[(0,s.jsx)("a",{href:"https://gparsec.com",children:"gPARSEC"})," (Greater Pottstown Area Robotics Science and Engineering Community)"]}),(0,s.jsx)("dd",{children:"Treasurer, 2019 to present"}),(0,s.jsx)("dd",{children:"Mentor, 2016 to present"}),(0,s.jsx)("dt",{children:"BSA Troop 4 of Royersford"}),(0,s.jsx)("dd",{children:"Webmaster, 2014 to 2016"}),(0,s.jsx)("dt",{children:"Philadelphia Science Fiction Society"}),(0,s.jsx)("dd",{children:"Secretary, 2003 to 2006"}),(0,s.jsx)("dd",{children:"Webmaster, 2002 to 2010"})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Education"}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{children:"Berkeley Computer Training Corporation"}),(0,s.jsx)("dd",{children:"Internet Technology Certificate, 1998"}),(0,s.jsx)("dt",{children:"Lock Haven University"}),(0,s.jsx)("dd",{children:"Bachelor of Arts in Fine Art (Electronic Media), 1996"}),(0,s.jsx)("dd",{children:"Bachelor of Arts in Philosophy, 1996"}),(0,s.jsx)("dt",{children:"Mastbaum (Area Vocational Technical School)"}),(0,s.jsx)("dd",{children:"Vocational Technical Diploma, Commercial Art, 1991"})]})]})]})})]})}},6055:function(e){e.exports={resume:"style_resume__SZB5r",resumeSection:"style_resumeSection__pk640",experienceSection:"style_experienceSection__CNvJ7",cover:"style_cover__0N77f",position:"style_position__nGY9i",description:"style_description__HDD6K",details:"style_details__ngPqQ",employer:"style_employer__XN0Ig",title:"style_title__kyOh0",location:"style_location__M_6uJ",duration:"style_duration__o0Qc5"}},9008:function(e,n,i){e.exports=i(3121)},1664:function(e,n,i){e.exports=i(1551)},1163:function(e,n,i){e.exports=i(880)}},function(e){e.O(0,[169,774,888,179],(function(){return n=7330,e(e.s=n);var n}));var n=e.O();_N_E=n}]);