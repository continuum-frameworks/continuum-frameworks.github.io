"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[102],{65274:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(74848),l=s(28453);const t={slug:"/properties/prefix"},r="prefix",o={id:"syntax/properties/prefix/prefix",title:"prefix",description:"The prefix property controls the content that will be added to the",source:"@site/docs/syntax/properties/prefix/prefix.md",sourceDirName:"syntax/properties/prefix",slug:"/properties/prefix",permalink:"/continuum-css/docs/properties/prefix",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/properties/prefix"},sidebar:"tutorialSidebar",previous:{title:"prefix-*",permalink:"/continuum-css/docs/syntax/properties/prefix-*"},next:{title:"print-*",permalink:"/continuum-css/docs/syntax/properties/print-*"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Values",id:"values",level:3},{value:"Value-functions",id:"value-functions",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Conditional via At-rules",id:"conditional-via-at-rules",level:3},{value:"Conditional via Pseudo-classes",id:"conditional-via-pseudo-classes",level:3},{value:"Conditional via Pseudo-elements",id:"conditional-via-pseudo-elements",level:3},{value:"Prime Example",id:"prime-example",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"prefix",children:"prefix"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"prefix"})})," property controls the content that will be added to the\nbeginning of the counter's marker representation."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This property is only applicable as a descriptor for the ",(0,i.jsx)(n.strong,{children:"@counter-style"}),"\nat-rule."]})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Given the following CSS styling for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:'title="Example CSS styling"',children:"/* Global Keyword */\nprefix: inherit;\nprefix: initial;\nprefix: revert;\nprefix: revert-layer;\nprefix: unset;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The corresponding Continuum classes to use would be:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Global Keyword --\x3e\n<div class="p408=i829"></div>\n<div class="p408=i631"></div>\n<div class="p408=r486"></div>\n<div class="p408=r319"></div>\n<div class="p408=u558"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["View the ",(0,i.jsx)(n.a,{href:"#prime-example",children:"Prime Example"})," section at the end of this page for a\nmore comprehensive look into using Continuum."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,i.jsxs)(n.p,{children:["To set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"prefix"})})," property using Continuum value classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",metastring:'title="Example HTML use"',children:"NOT APPLICABLE\n------------------------------------\nCSS doesn't have any values applicable to this property.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalues, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/values",children:"Values"})," documentation."]}),"\n",(0,i.jsx)(n.h3,{id:"value-functions",children:"Value-functions"}),"\n",(0,i.jsxs)(n.p,{children:["To set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"prefix"})})," property using Continuum value-function classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="HTML"',children:"\x3c!-- Url Function --\x3e\n<div\n    class=\"@c839(--swop5c)[p408=u535('https://example.org/SWOP2006_Coated5v1.icc')]\"\n></div>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalue-functions, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/value-functions",children:"Value-functions"}),"\ndocumentation."]}),"\n",(0,i.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,i.jsx)(n.h3,{id:"conditional-via-at-rules",children:"Conditional via At-rules"}),"\n",(0,i.jsxs)(n.p,{children:["To conditionally set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"prefix"})})," property using Continuum at-rule classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="HTML"',children:"\x3c!-- Color Profile Rule --\x3e\n<div\n    class=\"@c839(--swop5c)[p408=u535('https://example.org/SWOP2006_Coated5v1.icc')]\"\n></div>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nat-rules, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/at-rules",children:"At-rules"})," documentation."]}),"\n",(0,i.jsx)(n.h3,{id:"conditional-via-pseudo-classes",children:"Conditional via Pseudo-classes"}),"\n",(0,i.jsxs)(n.p,{children:["To conditionally set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"prefix"})})," property using Continuum pseudo-class\nclasses:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",metastring:'title="Example HTML use"',children:"NOT APPLICABLE\n------------------------------------\nCSS doesn't have any pseudo-classes applicable to this property.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-classes, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/pseudo-classes",children:"Pseudo-classes"}),"\ndocumentation."]}),"\n",(0,i.jsx)(n.h3,{id:"conditional-via-pseudo-elements",children:"Conditional via Pseudo-elements"}),"\n",(0,i.jsxs)(n.p,{children:["To conditionally set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"prefix"})})," property using Continuum pseudo-element\nclasses:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",metastring:'title="Example HTML use"',children:"NOT APPLICABLE\n------------------------------------\nCSS doesn't have any pseudo-elements applicable to this property.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-elements, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/pseudo-elements",children:"Pseudo-elements"}),"\ndocumentation."]}),"\n",(0,i.jsx)(n.h2,{id:"prime-example",children:"Prime Example"}),"\n",(0,i.jsx)(n.p,{children:"Combining all the above in a real-world example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"Example source goes here\n"})}),"\n",(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:(0,i.jsx)(n.p,{children:"Result:"})}),(0,i.jsx)("div",{children:(0,i.jsx)(n.p,{children:"Example output goes here"})})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(96540);const l={},t=i.createContext(l);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);