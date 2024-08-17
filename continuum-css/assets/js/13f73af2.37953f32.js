"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[58482],{6670:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=s(74848),l=s(28453);const t={slug:"/properties/grid-auto-columns"},a="grid-auto-columns",r={id:"syntax/properties/grid/grid-auto-columns",title:"grid-auto-columns",description:"The grid-auto-columns property controls the size of an implicitly-created",source:"@site/docs/syntax/properties/grid/grid-auto-columns.md",sourceDirName:"syntax/properties/grid",slug:"/properties/grid-auto-columns",permalink:"/continuum-css/docs/properties/grid-auto-columns",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/properties/grid-auto-columns"},sidebar:"tutorialSidebar",previous:{title:"grid-area",permalink:"/continuum-css/docs/properties/grid-area"},next:{title:"grid-auto-flow",permalink:"/continuum-css/docs/properties/grid-auto-flow"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Values",id:"values",level:3},{value:"Value-functions",id:"value-functions",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Conditional via At-rules",id:"conditional-via-at-rules",level:3},{value:"Conditional via Pseudo-classes",id:"conditional-via-pseudo-classes",level:3},{value:"Conditional via Pseudo-elements",id:"conditional-via-pseudo-elements",level:3},{value:"Prime Example",id:"prime-example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"grid-auto-columns",children:"grid-auto-columns"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"grid-auto-columns"})})," property controls the size of an implicitly-created\ngrid column track or pattern of tracks."]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Given the following CSS styling for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:'title="Example CSS styling"',children:"/* Global Keyword */\ngrid-auto-columns: inherit;\ngrid-auto-columns: initial;\ngrid-auto-columns: revert;\ngrid-auto-columns: revert-layer;\ngrid-auto-columns: unset;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The corresponding Continuum classes to use would be:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Global Keyword --\x3e\n<div class="g277=i829"></div>\n<div class="g277=i631"></div>\n<div class="g277=r486"></div>\n<div class="g277=r319"></div>\n<div class="g277=u558"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["View the ",(0,i.jsx)(n.a,{href:"#prime-example",children:"Prime Example"})," section at the end of this page for a\nmore comprehensive look into using Continuum."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,i.jsxs)(n.p,{children:["To set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"grid-auto-columns"})})," property using Continuum value classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Local Keyword --\x3e\n<div class="g277=a793"></div>\n\n\x3c!-- Local Keyword (multiple) --\x3e\n<div class="g277=a793,a793"></div>\n\n\x3c!-- Flex Unit --\x3e\n<div class="g277=5fr"></div>\n\n\x3c!-- Flex Unit (multiple) --\x3e\n<div class="g277=5fr,2.5fr"></div>\n\n\x3c!-- Length Unit --\x3e\n<div class="g277=10vh"></div>\n\n\x3c!-- Length Unit (multiple) --\x3e\n<div class="g277=10vh,5vh"></div>\n\n\x3c!-- Percentage Unit --\x3e\n<div class="g277=100%"></div>\n\n\x3c!-- Percentage Unit (multiple) --\x3e\n<div class="g277=100%,50%"></div>\n\n\x3c!-- Local Keyword, Flex Unit, Length Unit, Percentage Unit (mixture) --\x3e\n<div class="g277=a793,5fr"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalues, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/values",children:"Values"})," documentation."]}),"\n",(0,i.jsx)(n.h3,{id:"value-functions",children:"Value-functions"}),"\n",(0,i.jsxs)(n.p,{children:["To set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"grid-auto-columns"})})," property using Continuum value-function\nclasses:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Grid Function --\x3e\n<div class="g277=f837(1000px)"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalue-functions, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/value-functions",children:"Value-functions"}),"\ndocumentation."]}),"\n",(0,i.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,i.jsx)(n.h3,{id:"conditional-via-at-rules",children:"Conditional via At-rules"}),"\n",(0,i.jsxs)(n.p,{children:["To conditionally set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"grid-auto-columns"})})," property using Continuum\nat-rule classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Media Rule --\x3e\n<div class="@m074(p999)[body[g277=[m418,m600]]]"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nat-rules, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/at-rules",children:"At-rules"})," documentation."]}),"\n",(0,i.jsx)(n.h3,{id:"conditional-via-pseudo-classes",children:"Conditional via Pseudo-classes"}),"\n",(0,i.jsxs)(n.p,{children:["To conditionally set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"grid-auto-columns"})})," property using Continuum\npseudo-class classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Interaction Class --\x3e\n<div class="g277:f194=100px,m965(100px;a793)"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-classes, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/pseudo-classes",children:"Pseudo-classes"}),"\ndocumentation."]}),"\n",(0,i.jsx)(n.h3,{id:"conditional-via-pseudo-elements",children:"Conditional via Pseudo-elements"}),"\n",(0,i.jsxs)(n.p,{children:["To conditionally set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"grid-auto-columns"})})," property using Continuum\npseudo-element classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Cosmetic Element --\x3e\n<div class="g277::a205=0.5fr,3fr,1fr"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-elements, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/pseudo-elements",children:"Pseudo-elements"}),"\ndocumentation."]}),"\n",(0,i.jsx)(n.h2,{id:"prime-example",children:"Prime Example"}),"\n",(0,i.jsx)(n.p,{children:"Combining all the above in a real-world example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"Example source goes here\n"})}),"\n",(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:(0,i.jsx)(n.p,{children:"Result:"})}),(0,i.jsx)("div",{children:(0,i.jsx)(n.p,{children:"Example output goes here"})})]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var i=s(96540);const l={},t=i.createContext(l);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);