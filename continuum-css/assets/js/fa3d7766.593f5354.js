"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[15],{48802:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var l=n(74848),i=n(28453);const t={slug:"/properties/list-style"},a="list-style",r={id:"syntax/properties/list/list-style",title:"list-style",description:"The list-style property controls allows you to set all the list style",source:"@site/docs/syntax/properties/list/list-style.md",sourceDirName:"syntax/properties/list",slug:"/properties/list-style",permalink:"/continuum-css/docs/properties/list-style",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/properties/list-style"},sidebar:"tutorialSidebar",previous:{title:"list-style-type",permalink:"/continuum-css/docs/properties/list-style-type"},next:{title:"margin-*",permalink:"/continuum-css/docs/syntax/properties/margin-*"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Values",id:"values",level:3},{value:"Value-functions",id:"value-functions",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Conditional via At-rules",id:"conditional-via-at-rules",level:3},{value:"Conditional via Pseudo-classes",id:"conditional-via-pseudo-classes",level:3},{value:"Conditional via Pseudo-elements",id:"conditional-via-pseudo-elements",level:3},{value:"Prime Example",id:"prime-example",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"list-style",children:"list-style"})}),"\n",(0,l.jsxs)(s.p,{children:["The ",(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"list-style"})})," property controls allows you to set all the list style\nproperties at once."]}),"\n",(0,l.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(s.p,{children:"Given the following CSS styling for example:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-css",metastring:'title="Example CSS styling"',children:"/* Global Keyword */\nlist-style: inherit;\nlist-style: initial;\nlist-style: revert;\nlist-style: revert-layer;\nlist-style: unset;\n"})}),"\n",(0,l.jsx)(s.p,{children:"The corresponding Continuum classes to use would be:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Global Keyword --\x3e\n<div class="l736=i829"></div>\n<div class="l736=i631"></div>\n<div class="l736=r486"></div>\n<div class="l736=r319"></div>\n<div class="l736=u558"></div>\n'})}),"\n",(0,l.jsxs)(s.p,{children:["View the ",(0,l.jsx)(s.a,{href:"#prime-example",children:"Prime Example"})," section at the end of this page for a\nmore comprehensive look into using Continuum."]}),"\n",(0,l.jsx)(s.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,l.jsx)(s.h3,{id:"values",children:"Values"}),"\n",(0,l.jsxs)(s.p,{children:["To set the ",(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"list-style"})})," property using Continuum value classes:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Local Keyword --\x3e\n<div class="l736=n068"></div>\n\n\x3c!-- Local Keyword (multiple) --\x3e\n<div class="l736=n068,i009"></div>\n\n\x3c!-- String Data --\x3e\n<div class="l736=\'~\'"></div>\n\n\x3c!-- Local Keyword, String Data (mixture) --\x3e\n<div class="l736=n068,\'~\'"></div>\n\n\x3c!-- Regular Identifier --\x3e\n<div class="l736=iD1"></div>\n\n\x3c!-- Local Keyword, Regular Identifier (mixture) --\x3e\n<div class="l736=i009,iD1"></div>\n'})}),"\n",(0,l.jsxs)(s.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalues, view the ",(0,l.jsx)(s.a,{href:"/docs/syntax/values",children:"Values"})," documentation."]}),"\n",(0,l.jsx)(s.h3,{id:"value-functions",children:"Value-functions"}),"\n",(0,l.jsxs)(s.p,{children:["To set the ",(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"list-style"})})," property using Continuum value-function classes:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-html",metastring:'title="Example HTML use"',children:"\x3c!-- Reference Function --\x3e\n<div class=\"l736=u535('icon.svg')\"></div>\n\n\x3c!-- Reference Function, Counter Function (mixture) --\x3e\n<div class=\"l736=u535('icon.svg'),s938(a390,'~')\"></div>\n"})}),"\n",(0,l.jsxs)(s.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalue-functions, view the ",(0,l.jsx)(s.a,{href:"/docs/syntax/value-functions",children:"Value-functions"}),"\ndocumentation."]}),"\n",(0,l.jsx)(s.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,l.jsx)(s.h3,{id:"conditional-via-at-rules",children:"Conditional via At-rules"}),"\n",(0,l.jsxs)(s.p,{children:["To conditionally set the ",(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"list-style"})})," property using Continuum at-rule\nclasses:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Media Rule --\x3e\n<div class="@m074(p999)[body[l736=[g069,o967]]]"></div>\n'})}),"\n",(0,l.jsxs)(s.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nat-rules, view the ",(0,l.jsx)(s.a,{href:"/docs/syntax/at-rules",children:"At-rules"})," documentation."]}),"\n",(0,l.jsx)(s.h3,{id:"conditional-via-pseudo-classes",children:"Conditional via Pseudo-classes"}),"\n",(0,l.jsxs)(s.p,{children:["To conditionally set the ",(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"list-style"})})," property using Continuum pseudo-class\nclasses:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-html",metastring:'title="Example HTML use"',children:"\x3c!-- Interaction Class --\x3e\n<div class=\"l736:f194=s938(a390,'~')\"></div>\n"})}),"\n",(0,l.jsxs)(s.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-classes, view the ",(0,l.jsx)(s.a,{href:"/docs/syntax/pseudo-classes",children:"Pseudo-classes"}),"\ndocumentation."]}),"\n",(0,l.jsx)(s.h3,{id:"conditional-via-pseudo-elements",children:"Conditional via Pseudo-elements"}),"\n",(0,l.jsxs)(s.p,{children:["To conditionally set the ",(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"list-style"})})," property using Continuum\npseudo-element classes:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-html",metastring:'title="Example HTML use"',children:"\x3c!-- Cosmetic Element --\x3e\n<div class=\"l736::a205=u535('img/shape.png'),i009\"></div>\n"})}),"\n",(0,l.jsxs)(s.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-elements, view the ",(0,l.jsx)(s.a,{href:"/docs/syntax/pseudo-elements",children:"Pseudo-elements"}),"\ndocumentation."]}),"\n",(0,l.jsx)(s.h2,{id:"prime-example",children:"Prime Example"}),"\n",(0,l.jsx)(s.p,{children:"Combining all the above in a real-world example:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-html",metastring:'title="Example HTML use"',children:"Example source goes here\n"})}),"\n",(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Result:"})}),(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Example output goes here"})})]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var l=n(96540);const i={},t=l.createContext(i);function a(e){const s=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);