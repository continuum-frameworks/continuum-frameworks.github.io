"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[87130],{64302:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var l=s(74848),i=s(28453);const a={slug:"/properties/margin-block"},t="margin-block",r={id:"syntax/properties/margin/margin-block",title:"margin-block",description:"The margin-block property controls the logical block start and end margins",source:"@site/docs/syntax/properties/margin/margin-block.md",sourceDirName:"syntax/properties/margin",slug:"/properties/margin-block",permalink:"/continuum-css/docs/properties/margin-block",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/properties/margin-block"},sidebar:"tutorialSidebar",previous:{title:"margin-block-start",permalink:"/continuum-css/docs/properties/margin-block-start"},next:{title:"margin-bottom",permalink:"/continuum-css/docs/properties/margin-bottom"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Values",id:"values",level:3},{value:"Value-functions",id:"value-functions",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Conditional via At-rules",id:"conditional-via-at-rules",level:3},{value:"Conditional via Pseudo-classes",id:"conditional-via-pseudo-classes",level:3},{value:"Conditional via Pseudo-elements",id:"conditional-via-pseudo-elements",level:3},{value:"Prime Example",id:"prime-example",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"margin-block",children:"margin-block"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"margin-block"})})," property controls the logical block start and end margins\nof an element, which maps to physical margins depending on the element's writing\nmode, directionality, and text orientation."]}),"\n",(0,l.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(n.p,{children:"Given the following CSS styling for example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",metastring:'title="Example CSS styling"',children:"/* Global Keyword */\nmargin-block: inherit;\nmargin-block: initial;\nmargin-block: revert;\nmargin-block: revert-layer;\nmargin-block: unset;\n"})}),"\n",(0,l.jsx)(n.p,{children:"The corresponding Continuum classes to use would be:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Global Keyword --\x3e\n<div class="m605=i829"></div>\n<div class="m605=i631"></div>\n<div class="m605=r486"></div>\n<div class="m605=r319"></div>\n<div class="m605=u558"></div>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["View the ",(0,l.jsx)(n.a,{href:"#prime-example",children:"Prime Example"})," section at the end of this page for a\nmore comprehensive look into using Continuum."]}),"\n",(0,l.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,l.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,l.jsxs)(n.p,{children:["To set the ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"margin-block"})})," property using Continuum value classes:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Local Keyword --\x3e\n<div class="m605=a793"></div>\n\n\x3c!-- Local Keyword (multiple) --\x3e\n<div class="m605=a793,a793"></div>\n\n\x3c!-- Length Unit --\x3e\n<div class="m605=10vh"></div>\n\n\x3c!-- Length Unit (multiple) --\x3e\n<div class="m605=10vh,5vh"></div>\n\n\x3c!-- Percentage Unit --\x3e\n<div class="m605=100%"></div>\n\n\x3c!-- Percentage Unit (multiple) --\x3e\n<div class="m605=100%,50%"></div>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalues, view the ",(0,l.jsx)(n.a,{href:"/docs/syntax/values",children:"Values"})," documentation."]}),"\n",(0,l.jsx)(n.h3,{id:"value-functions",children:"Value-functions"}),"\n",(0,l.jsxs)(n.p,{children:["To set the ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"margin-block"})})," property using Continuum value-function classes:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="Example HTML use"',children:"NOT APPLICABLE\n------------------------------------\nCSS doesn't have any value-functions applicable to this property.\n"})}),"\n",(0,l.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalue-functions, view the ",(0,l.jsx)(n.a,{href:"/docs/syntax/value-functions",children:"Value-functions"}),"\ndocumentation."]}),"\n",(0,l.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,l.jsx)(n.h3,{id:"conditional-via-at-rules",children:"Conditional via At-rules"}),"\n",(0,l.jsxs)(n.p,{children:["To conditionally set the ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"margin-block"})})," property using Continuum at-rule\nclasses:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Media Rule --\x3e\n<div class="@m074(p999)[body[m605=[1000mm,100px]]]"></div>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nat-rules, view the ",(0,l.jsx)(n.a,{href:"/docs/syntax/at-rules",children:"At-rules"})," documentation."]}),"\n",(0,l.jsx)(n.h3,{id:"conditional-via-pseudo-classes",children:"Conditional via Pseudo-classes"}),"\n",(0,l.jsxs)(n.p,{children:["To conditionally set the ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"margin-block"})})," property using Continuum\npseudo-class classes:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Interaction Class --\x3e\n<div class="m605:f194=100%"></div>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-classes, view the ",(0,l.jsx)(n.a,{href:"/docs/syntax/pseudo-classes",children:"Pseudo-classes"}),"\ndocumentation."]}),"\n",(0,l.jsx)(n.h3,{id:"conditional-via-pseudo-elements",children:"Conditional via Pseudo-elements"}),"\n",(0,l.jsxs)(n.p,{children:["To conditionally set the ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"margin-block"})})," property using Continuum\npseudo-element classes:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Cosmetic Element --\x3e\n<div class="m605::a205=10dvmax,10dvmin"></div>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-elements, view the ",(0,l.jsx)(n.a,{href:"/docs/syntax/pseudo-elements",children:"Pseudo-elements"}),"\ndocumentation."]}),"\n",(0,l.jsx)(n.h2,{id:"prime-example",children:"Prime Example"}),"\n",(0,l.jsx)(n.p,{children:"Combining all the above in a real-world example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"Example source goes here\n"})}),"\n",(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsx)(n.p,{children:"Result:"})}),(0,l.jsx)("div",{children:(0,l.jsx)(n.p,{children:"Example output goes here"})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var l=s(96540);const i={},a=l.createContext(i);function t(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);