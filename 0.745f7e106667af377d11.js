/*! For license information please see 0.745f7e106667af377d11.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),c=n(a(19));t.default=function(){return r.useContext(c.default)}},139:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(137));t.default=function(e){var t=(r.default().siteConfig||{}).baseUrl,a=void 0===t?"/":t;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},140:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},141:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(13);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,i=e.href,s=a||i,u=o.test(s),d=!1,h="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(n.useEffect)((function(){return!h&&u&&window.docusaurus.prefetch(s),function(){h&&t&&t.disconnect()}}),[s,h,u]),s&&u?r.a.createElement(c.b,l({},e,{onMouseEnter:function(){d||(window.docusaurus.preload(s),d=!0)},innerRef:function(e){var a,n;h&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):r.a.createElement("a",l({},e,{href:s}))}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(20),l=a(137),o=a.n(l),i=a(139),s=a.n(i),u=a(165),d=a.n(u),h=a(141),f=a(140),m=a.n(f),p=a(19),v=a.n(p);a(169);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=function(e){var t=g(Object(n.useState)(!0),2),c=t[0],l=t[1],o=Object(n.useRef)(null),i=Object(n.useContext)(v.a);Object(n.useEffect)((function(){var e=i.siteConfig,t=(void 0===e?{}:e).themeConfig.algolia;"undefined"!=typeof window?a.e(94).then(a.t.bind(null,226,7)).then((function(e){(0,e.default)({appId:t.appId,apiKey:t.apiKey,indexName:t.indexName,inputSelector:"#search_input_react",algoliaOptions:t.algoliaOptions})})):(console.warn("Search has failed to load and now is being disabled"),l(!1))}),[]);var s=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return Object(n.useEffect)((function(){e.isSearchBarExpanded&&o.current.focus()}),[e.isSearchBarExpanded]),c?r.a.createElement(n.Fragment,null,r.a.createElement("span",{role:"button",className:m()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:s,onKeyDown:s,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:m()({"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onBlur:s,ref:o})):null},y=a(170),k=a.n(y);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e){return r.a.createElement(h.a,_({className:"navbar__item navbar__link"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{activeClassName:"navbar__link--active",to:s()(e.to)}),e.label)}var O=function(){return r.a.createElement("span",{className:m()(k.a.toggle,k.a.moon)})},N=function(){return r.a.createElement("span",{className:m()(k.a.toggle,k.a.sun)})};var C=function(){var e=o()(),t=E(Object(n.useState)(!1),2),a=t[0],l=t[1],i=E(Object(n.useState)(!1),2),u=i[0],f=i[1],p="undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):"",v=E(Object(n.useState)(p),2),g=v[0],y=v[1],C=e.siteConfig,x=void 0===C?{}:C,j=x.baseUrl,S=x.themeConfig,T=void 0===S?{}:S,M=T.algolia,P=T.navbar,B=void 0===P?{}:P,I=B.title,F=B.logo,X=B.links,A=void 0===X?[]:X,L=Object(n.useCallback)((function(){l(!0)}),[l]),D=Object(n.useCallback)((function(){l(!1)}),[l]);Object(n.useEffect)((function(){try{var e=localStorage.getItem("theme");y(e)}catch(e){console.error(e)}}),[]);var R=function(e){var t=e.target.checked?"dark":"";y(t);try{localStorage.setItem("theme",t)}catch(e){console.error(e)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en","data-theme":g})),r.a.createElement("nav",{className:m()("navbar","navbar--light","navbar--fixed-top",{"navbar--sidebar-show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:L,onKeyDown:L},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(h.a,{className:"navbar__brand",to:j},null!=F&&r.a.createElement("img",{className:"navbar__logo",src:s()(F.src),alt:F.alt}),null!=I&&r.a.createElement("strong",{className:u?k.a.hideLogoText:""},I)),A.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(w,_({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},A.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(w,_({},e,{key:t}))})),r.a.createElement(d.a,{className:k.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===g,onChange:R,icons:{checked:r.a.createElement(O,null),unchecked:r.a.createElement(N,null)}}),M&&r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement(b,{handleSearchBarToggle:f,isSearchBarExpanded:u})))),r.a.createElement("div",{role:"presentation",className:"navbar__sidebar__backdrop",onClick:function(){l(!1)}}),r.a.createElement("div",{className:"navbar__sidebar"},r.a.createElement("div",{className:"navbar__sidebar__brand"},r.a.createElement(h.a,{className:"navbar__brand",onClick:D,to:j},null!=F&&r.a.createElement("img",{className:"navbar__logo",src:s()(F.src),alt:F.alt}),null!=I&&r.a.createElement("strong",null,I)),a&&r.a.createElement(d.a,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===g,onChange:R,icons:{checked:r.a.createElement(O,null),unchecked:r.a.createElement(N,null)}})),r.a.createElement("div",{className:"navbar__sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},A.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(w,_({className:"menu__link"},e,{onClick:D})))}))))))))};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var j=function(){var e=o()().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer;if(!a)return null;var n=a.copyright,c=a.links,l=void 0===c?[]:c,i=a.logo;return r.a.createElement("footer",{className:m()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e){return r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(h.a,x({className:"footer__link-item"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{to:s()(e.to)}),e.label))}))):null)}))),(i||n)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("img",{className:"footer__logo",alt:i.alt,src:i.src})),n)))};a(171);t.a=function(e){var t=o()().siteConfig,a=void 0===t?{}:t,n=a.favicon,l=a.tagline,i=a.title,u=a.themeConfig.image,d=a.url,h=e.children,f=e.title,m=e.noFooter,p=e.description,v=e.image,g=e.keywords,b=e.permalink,y=f||"".concat(i," · ").concat(l),k=v||u;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width"}),y&&r.a.createElement("title",null,y),y&&r.a.createElement("meta",{property:"og:title",content:y}),n&&r.a.createElement("link",{rel:"shortcut icon",href:s()(n)}),p&&r.a.createElement("meta",{name:"description",content:p}),p&&r.a.createElement("meta",{property:"og:description",content:p}),g&&g.length&&r.a.createElement("meta",{property:"keywords",content:g}),k&&r.a.createElement("meta",{property:"og:image",content:d+s()(k)}),k&&r.a.createElement("meta",{property:"twitter:image",content:d+s()(k)}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for ".concat(y)}),b&&r.a.createElement("meta",{property:"og:url",content:d+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(C,null),h,!m&&r.a.createElement(j,null))}},165:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=h(c),o=h(a(140)),i=h(a(6)),s=h(a(166)),u=h(a(167)),d=a(168);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:l.default.createElement(s.default,null),unchecked:l.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},166:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},167:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},168:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},169:function(e,t,a){},170:function(e,t,a){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_1gtM",toggle:"toggle_16vC",moon:"moon_1N64",sun:"sun_3CZP",hideLogoText:"hideLogoText_1pX_"}},171:function(e,t,a){}}]);