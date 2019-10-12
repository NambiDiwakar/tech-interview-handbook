(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{136:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var a=n(0),i=n.n(a),o=i.a.createContext({}),r=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=r(e.components);return i.a.createElement(o.Provider,{value:t},e.children)};var u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=r(n),g=a,h=c[s+"."+g]||c[g]||l[g]||o;return n?i.a.createElement(h,Object.assign({},{ref:t},u,{components:n})):i.a.createElement(h,Object.assign({},{ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var g=2;g<o;g++)r[g]=n[g];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));n(0);var a=n(136);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r={id:"picking-a-language",title:"Picking a Language"},s=[{value:"Some languages are more suited for interviews",id:"some-languages-are-more-suited-for-interviews",children:[]},{value:"Use a language you are familiar with",id:"use-a-language-you-are-familiar-with",children:[]},{value:"The exception to the norm",id:"the-exception-to-the-norm",children:[]}],u={rightToc:s},l="wrapper";function c(e){var t=e.components,n=o(e,["components"]);return Object(a.b)(l,i({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Before anything else, you need to pick a programming language to do your interviews in. Most companies will let you code in any language you want, the only exception I know being Google, where they only allow candidates to pick from Java, C++, JavaScript or Python for their algorithmic coding interviews."),Object(a.b)("h2",{id:"some-languages-are-more-suited-for-interviews"},"Some languages are more suited for interviews"),Object(a.b)("p",null,"There are some languages which are more suitable than others for coding interviews and some languages you absolutely want to avoid. From my experience as an interviewer, most candidates pick Python or Java. Other commonly seen languages include JavaScript, Ruby and C++. I would absolutely avoid lower level languages like C or Go, simply because they lack many standard library functions and data structures and some may require manual memory management."),Object(a.b)("p",null,"Personally, Python is my de facto choice for algorithm coding interviews because it is succinct and has a pretty huge library of functions and data structures available. One of my top reasons for recommending Python is that it uses consistent APIs that operate on different data structures, such as ",Object(a.b)("inlineCode",{parentName:"p"},"len()"),", ",Object(a.b)("inlineCode",{parentName:"p"},"for ... in ...")," and slicing notation on sequences (strings/lists/tuples). Getting the last element in a sequence is ",Object(a.b)("inlineCode",{parentName:"p"},"arr[-1]")," and reversing it is simply ",Object(a.b)("inlineCode",{parentName:"p"},"arr[::-1]"),". You can achieve a lot with minimal syntax in Python."),Object(a.b)("p",null,"Java is a decent choice too but having to constantly declare types in your code means extra keystrokes which results in slower coding/typing speed. This issue will be more apparent when you have to write on a whiteboard during on-site interviews. The reasons for choosing/not choosing C++ are similar to Java. Ultimately, Python, Java and C++ are decent choices of languages."),Object(a.b)("h2",{id:"use-a-language-you-are-familiar-with"},"Use a language you are familiar with"),Object(a.b)("p",null,"Most of the time, it is recommended that you use a language that you are extremely familiar with rather than picking up a new language just for doing interviews because the company uses that language heavily or just because you want to show that you are trendy."),Object(a.b)("p",null,"If you are under time constraints, picking up a new language just for interviewing is hardly a good idea. Languages take time to master and if you are already spending most of your time and effort on mastering algorithms, there is barely spare effort left for mastering a new language. If you are familiar with using one of the mainstream languages, there isn't a strong reason to learn a new language just for interviewing."),Object(a.b)("p",null,"If you have been using Java at work for a while now and do not have time to be comfortably familiar with another language, I would recommend just sticking to Java instead of picking up Python from scratch just for the sake of interviews. Doing so, you can avoid having to context switch between languages during work vs interviews. Most of the time, the bottleneck is in the thinking and not the writing. It takes some getting used to before one becomes fluent in a language and be able to wield it with ease."),Object(a.b)("h2",{id:"the-exception-to-the-norm"},"The exception to the norm"),Object(a.b)("p",null,'One exception to the convention of allowing you to "pick any programming language you want" is when you are interviewing for a domain-specific position, such as Front End/iOS/Android Engineer roles, in which you would need to be familiar with coding in JavaScript, Objective-C/Swift and Java respectively. If you need to use a data structure that the language does not support, such as a Queue or Heap in JavaScript, perhaps try asking the interviewer whether you can assume that you have a data structure that implements certain methods with specified time complexities. If the implementation of that data structure is not crucial to solving the problem, the interviewer will usually allow this. In reality, being aware of existing data structures and selecting the appropriate ones to tackle the problem at hand is more important than knowing the intricate implementation details.'))}c.isMDXComponent=!0}}]);