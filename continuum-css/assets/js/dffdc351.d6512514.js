"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[37395],{28012:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(74848),l=s(28453);const r={slug:"/properties/grid-auto-rows"},t="grid-auto-rows",o={id:"syntax/properties/grid/grid-auto-rows",title:"grid-auto-rows",description:"The grid-auto-rows property controls the size of an implicitly-created",source:"@site/docs/syntax/properties/grid/grid-auto-rows.md",sourceDirName:"syntax/properties/grid",slug:"/properties/grid-auto-rows",permalink:"/continuum-css/docs/properties/grid-auto-rows",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/properties/grid-auto-rows"},sidebar:"tutorialSidebar",previous:{title:"grid-auto-flow",permalink:"/continuum-css/docs/properties/grid-auto-flow"},next:{title:"grid-column-end",permalink:"/continuum-css/docs/properties/grid-column-end"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Values",id:"values",level:3},{value:"Value-functions",id:"value-functions",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Conditional via At-rules",id:"conditional-via-at-rules",level:3},{value:"Conditional via Pseudo-classes",id:"conditional-via-pseudo-classes",level:3},{value:"Conditional via Pseudo-elements",id:"conditional-via-pseudo-elements",level:3},{value:"Prime Example",id:"prime-example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"grid-auto-rows",children:"grid-auto-rows"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"grid-auto-rows"})})," property controls the size of an implicitly-created\ngrid row track or pattern of tracks."]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Given the following CSS styling for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:'title="Example CSS styling"',children:"/* Global Keyword */\ngrid-auto-rows: inherit;\ngrid-auto-rows: initial;\ngrid-auto-rows: revert;\ngrid-auto-rows: revert-layer;\ngrid-auto-rows: unset;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The corresponding Continuum classes to use would be:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Global Keyword --\x3e\n<div class="g283=i829"></div>\n<div class="g283=i631"></div>\n<div class="g283=r486"></div>\n<div class="g283=r319"></div>\n<div class="g283=u558"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["View the ",(0,i.jsx)(n.a,{href:"#prime-example",children:"Prime Example"})," section at the end of this page for a\nmore comprehensive look into using Continuum."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,i.jsxs)(n.p,{children:["To set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"grid-auto-rows"})})," property using Continuum value classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Local Keyword --\x3e\n<div class="g283=a793"></div>\n\n\x3c!-- Local Keyword (multiple) --\x3e\n<div class="g283=a793,a793"></div>\n\n\x3c!-- Flex Unit --\x3e\n<div class="g283=5fr"></div>\n\n\x3c!-- Flex Unit (multiple) --\x3e\n<div class="g283=5fr,2.5fr"></div>\n\n\x3c!-- Length Unit --\x3e\n<div class="g283=10vh"></div>\n\n\x3c!-- Length Unit (multiple) --\x3e\n<div class="g283=10vh,5vh"></div>\n\n\x3c!-- Percentage Unit --\x3e\n<div class="g283=100%"></div>\n\n\x3c!-- Percentage Unit (multiple) --\x3e\n<div class="g283=100%,50%"></div>\n\n\x3c!-- Local Keyword, Flex Unit, Length Unit, Percentage Unit (mixture) --\x3e\n<div class="g283=a793,5fr"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalues, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/values",children:"Values"})," documentation."]}),"\n",(0,i.jsx)(n.h3,{id:"value-functions",children:"Value-functions"}),"\n",(0,i.jsxs)(n.p,{children:["To set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"grid-auto-rows"})})," property using Continuum value-function classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Grid Function --\x3e\n<div class="g283=f837(1000px)"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalue-functions, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/value-functions",children:"Value-functions"}),"\ndocumentation."]}),"\n",(0,i.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,i.jsx)(n.h3,{id:"conditional-via-at-rules",children:"Conditional via At-rules"}),"\n",(0,i.jsxs)(n.p,{children:["To conditionally set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"grid-auto-rows"})})," property using Continuum at-rule\nclasses:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Media Rule --\x3e\n<div class="@m074(p999)[body[g283=[10%,33.3%]]]"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nat-rules, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/at-rules",children:"At-rules"})," documentation."]}),"\n",(0,i.jsx)(n.h3,{id:"conditional-via-pseudo-classes",children:"Conditional via Pseudo-classes"}),"\n",(0,i.jsxs)(n.p,{children:["To conditionally set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"grid-auto-rows"})})," property using Continuum\npseudo-class classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Interaction Class --\x3e\n<div class="g283:f194=100px,m965(100px;a793)"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-classes, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/pseudo-classes",children:"Pseudo-classes"}),"\ndocumentation."]}),"\n",(0,i.jsx)(n.h3,{id:"conditional-via-pseudo-elements",children:"Conditional via Pseudo-elements"}),"\n",(0,i.jsxs)(n.p,{children:["To conditionally set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"grid-auto-rows"})})," property using Continuum\npseudo-element classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Cosmetic Element --\x3e\n<div class="g283::a205=m965(100px;a793),10%,0.5fr"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-elements, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/pseudo-elements",children:"Pseudo-elements"}),"\ndocumentation."]}),"\n",(0,i.jsx)(n.h2,{id:"prime-example",children:"Prime Example"}),"\n",(0,i.jsx)(n.p,{children:"Combining all the above in a real-world example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"Example source goes here\n"})}),"\n",(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:(0,i.jsx)(n.p,{children:"Result:"})}),(0,i.jsx)("div",{children:(0,i.jsx)(n.p,{children:"Example output goes here"})})]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(96540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);