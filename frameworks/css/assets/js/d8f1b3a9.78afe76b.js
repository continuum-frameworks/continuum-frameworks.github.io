"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[66175],{85543:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var l=s(74848),i=s(28453);const t={slug:"/properties/grid-template-rows"},r="grid-template-rows",a={id:"syntax/properties/grid/grid-template-rows",title:"grid-template-rows",description:"The grid-template-rows property controls the line names and track sizing",source:"@site/docs/syntax/properties/grid/grid-template-rows.md",sourceDirName:"syntax/properties/grid",slug:"/properties/grid-template-rows",permalink:"/frameworks/css/docs/properties/grid-template-rows",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/properties/grid-template-rows"},sidebar:"tutorialSidebar",previous:{title:"grid-template-columns",permalink:"/frameworks/css/docs/properties/grid-template-columns"},next:{title:"grid-template",permalink:"/frameworks/css/docs/properties/grid-template"}},d={},o=[{value:"Overview",id:"overview",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Values",id:"values",level:3},{value:"Value-functions",id:"value-functions",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Conditional via At-rules",id:"conditional-via-at-rules",level:3},{value:"Conditional via Pseudo-classes",id:"conditional-via-pseudo-classes",level:3},{value:"Conditional via Pseudo-elements",id:"conditional-via-pseudo-elements",level:3},{value:"Prime Example",id:"prime-example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"grid-template-rows",children:"grid-template-rows"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"grid-template-rows"})})," property controls the line names and track sizing\nfunctions of the grid rows."]}),"\n",(0,l.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(n.p,{children:"Given the following CSS styling for example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",metastring:'title="Example CSS styling"',children:"/* Global Keyword */\ngrid-template-rows: inherit;\ngrid-template-rows: initial;\ngrid-template-rows: revert;\ngrid-template-rows: revert-layer;\ngrid-template-rows: unset;\n"})}),"\n",(0,l.jsx)(n.p,{children:"The corresponding Continuum classes to use would be:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Global Keyword --\x3e\n<div class="g506=i829"></div>\n<div class="g506=i631"></div>\n<div class="g506=r486"></div>\n<div class="g506=r319"></div>\n<div class="g506=u558"></div>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["View the ",(0,l.jsx)(n.a,{href:"#prime-example",children:"Prime Example"})," section at the end of this page for a\nmore comprehensive look into using Continuum."]}),"\n",(0,l.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,l.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,l.jsxs)(n.p,{children:["To set the ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"grid-template-rows"})})," property using Continuum value classes:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Local Keyword --\x3e\n<div class="g506=a793"></div>\n\n\x3c!-- Local Keyword (multiple) --\x3e\n<div class="g506=a793,a793"></div>\n\n\x3c!-- Flex Unit --\x3e\n<div class="g506=5fr"></div>\n\n\x3c!-- Flex Unit (multiple) --\x3e\n<div class="g506=5fr,2.5fr"></div>\n\n\x3c!-- Length Unit --\x3e\n<div class="g506=10vh"></div>\n\n\x3c!-- Length Unit (multiple) --\x3e\n<div class="g506=10vh,5vh"></div>\n\n\x3c!-- Percentage Unit --\x3e\n<div class="g506=100%"></div>\n\n\x3c!-- Percentage Unit (multiple) --\x3e\n<div class="g506=100%,50%"></div>\n\n\x3c!-- Local Keyword, Flex Unit, Length Unit, Percentage Unit (mixture) --\x3e\n<div class="g506=a793,5fr"></div>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalues, view the ",(0,l.jsx)(n.a,{href:"/docs/syntax/values",children:"Values"})," documentation."]}),"\n",(0,l.jsx)(n.h3,{id:"value-functions",children:"Value-functions"}),"\n",(0,l.jsxs)(n.p,{children:["To set the ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"grid-template-rows"})})," property using Continuum value-function\nclasses:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Grid Function --\x3e\n<div class="g506=f837(1000px)"></div>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalue-functions, view the ",(0,l.jsx)(n.a,{href:"/docs/syntax/value-functions",children:"Value-functions"}),"\ndocumentation."]}),"\n",(0,l.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,l.jsx)(n.h3,{id:"conditional-via-at-rules",children:"Conditional via At-rules"}),"\n",(0,l.jsxs)(n.p,{children:["To conditionally set the ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"grid-template-rows"})})," property using Continuum\nat-rule classes:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Media Rule --\x3e\n<div class="@m074(p999)[body[g506=[100px,1fr]]]"></div>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nat-rules, view the ",(0,l.jsx)(n.a,{href:"/docs/syntax/at-rules",children:"At-rules"})," documentation."]}),"\n",(0,l.jsx)(n.h3,{id:"conditional-via-pseudo-classes",children:"Conditional via Pseudo-classes"}),"\n",(0,l.jsxs)(n.p,{children:["To conditionally set the ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"grid-template-rows"})})," property using Continuum\npseudo-class classes:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Interaction Class --\x3e\n<div class="g506:f194=[anotherId],100px"></div>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-classes, view the ",(0,l.jsx)(n.a,{href:"/docs/syntax/pseudo-classes",children:"Pseudo-classes"}),"\ndocumentation."]}),"\n",(0,l.jsx)(n.h3,{id:"conditional-via-pseudo-elements",children:"Conditional via Pseudo-elements"}),"\n",(0,l.jsxs)(n.p,{children:["To conditionally set the ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"grid-template-rows"})})," property using Continuum\npseudo-element classes:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Cosmetic Element --\x3e\n<div class="g506::a205=200px,r501(a207;100px),300px"></div>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-elements, view the ",(0,l.jsx)(n.a,{href:"/docs/syntax/pseudo-elements",children:"Pseudo-elements"}),"\ndocumentation."]}),"\n",(0,l.jsx)(n.h2,{id:"prime-example",children:"Prime Example"}),"\n",(0,l.jsx)(n.p,{children:"Combining all the above in a real-world example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"Example source goes here\n"})}),"\n",(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsx)(n.p,{children:"Result:"})}),(0,l.jsx)("div",{children:(0,l.jsx)(n.p,{children:"Example output goes here"})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var l=s(96540);const i={},t=l.createContext(i);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);