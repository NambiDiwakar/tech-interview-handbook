(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{136:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r),i=a.a.createContext({}),o=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=o(e.components);return a.a.createElement(i.Provider,{value:n},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=o(t),s=r,m=u[l+"."+s]||u[s]||p[s]||i;return t?a.a.createElement(m,Object.assign({},{ref:n},c,{components:t})):a.a.createElement(m,Object.assign({},{ref:n},c))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));t(0);var r=t(136);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o={id:"hash-table",title:"Hash Table"},l=[{value:"Sample questions",id:"sample-questions",children:[]}],c={rightToc:l},p="wrapper";function u(e){var n=e.components,t=i(e,["components"]);return Object(r.b)(p,a({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"sample-questions"},"Sample questions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Describe an implementation of a least-used cache, and big-O notation of it."),Object(r.b)("li",{parentName:"ul"},"A question involving an API's integration with hash map where the buckets of hash map are made up of linked lists."),Object(r.b)("li",{parentName:"ul"},"Implement data structure ",Object(r.b)("inlineCode",{parentName:"li"},"Map")," storing pairs of integers (key, value) and define following member functions in O(1) runtime: ",Object(r.b)("inlineCode",{parentName:"li"},"void insert(key, value)"),", ",Object(r.b)("inlineCode",{parentName:"li"},"void delete(key)"),", ",Object(r.b)("inlineCode",{parentName:"li"},"int get(key)"),", ",Object(r.b)("inlineCode",{parentName:"li"},"int getRandomKey()"),". ",Object(r.b)("a",a({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/08/14/uber-interview-question-map-implementation/"}),"(Solution)"))))}u.isMDXComponent=!0}}]);