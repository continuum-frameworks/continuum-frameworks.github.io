"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[73889],{62696:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=i(74848),l=i(28453);const t={slug:"/properties/inline-size"},r="inline-size",a={id:"syntax/properties/inline/inline-size",title:"inline-size",description:"The inline-size property controls the horizontal or vertical size of an",source:"@site/docs/syntax/properties/inline/inline-size.md",sourceDirName:"syntax/properties/inline",slug:"/properties/inline-size",permalink:"/continuum-css/docs/properties/inline-size",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/properties/inline-size"},sidebar:"tutorialSidebar",previous:{title:"inline-*",permalink:"/continuum-css/docs/syntax/properties/inline-*"},next:{title:"input-*",permalink:"/continuum-css/docs/syntax/properties/input-*"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Values",id:"values",level:3},{value:"Value-functions",id:"value-functions",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Conditional via At-rules",id:"conditional-via-at-rules",level:3},{value:"Conditional via Pseudo-classes",id:"conditional-via-pseudo-classes",level:3},{value:"Conditional via Pseudo-elements",id:"conditional-via-pseudo-elements",level:3},{value:"Prime Example",id:"prime-example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"inline-size",children:"inline-size"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"inline-size"})})," property controls the horizontal or vertical size of an\nelement's block, depending on its writing mode. It corresponds to either the\nwidth or the height property, depending on the value of writing-mode."]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Given the following CSS styling for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="Example CSS styling"',children:"/* Global Keyword */\ninline-size: inherit;\ninline-size: initial;\ninline-size: revert;\ninline-size: revert-layer;\ninline-size: unset;\n"})}),"\n",(0,s.jsx)(n.p,{children:"The corresponding Continuum classes to use would be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Global Keyword --\x3e\n<div class="i774=i829"></div>\n<div class="i774=i631"></div>\n<div class="i774=r486"></div>\n<div class="i774=r319"></div>\n<div class="i774=u558"></div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["View the ",(0,s.jsx)(n.a,{href:"#prime-example",children:"Prime Example"})," section at the end of this page for a\nmore comprehensive look into using Continuum."]}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,s.jsxs)(n.p,{children:["To set the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"inline-size"})})," property using Continuum value classes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Local Keyword --\x3e\n<div class="i774=a793"></div>\n\n\x3c!-- Length Unit --\x3e\n<div class="i774=10vh"></div>\n\n\x3c!-- Percentage Unit --\x3e\n<div class="i774=100%"></div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalues, view the ",(0,s.jsx)(n.a,{href:"/docs/syntax/values",children:"Values"})," documentation."]}),"\n",(0,s.jsx)(n.h3,{id:"value-functions",children:"Value-functions"}),"\n",(0,s.jsxs)(n.p,{children:["To set the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"inline-size"})})," property using Continuum value-function classes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Grid Function --\x3e\n<div class="i774=f837(1000px)"></div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalue-functions, view the ",(0,s.jsx)(n.a,{href:"/docs/syntax/value-functions",children:"Value-functions"}),"\ndocumentation."]}),"\n",(0,s.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,s.jsx)(n.h3,{id:"conditional-via-at-rules",children:"Conditional via At-rules"}),"\n",(0,s.jsxs)(n.p,{children:["To conditionally set the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"inline-size"})})," property using Continuum at-rule\nclasses:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Media Rule --\x3e\n<div class="@m074(p999)[body[i774=m600]]"></div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nat-rules, view the ",(0,s.jsx)(n.a,{href:"/docs/syntax/at-rules",children:"At-rules"})," documentation."]}),"\n",(0,s.jsx)(n.h3,{id:"conditional-via-pseudo-classes",children:"Conditional via Pseudo-classes"}),"\n",(0,s.jsxs)(n.p,{children:["To conditionally set the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"inline-size"})})," property using Continuum pseudo-class\nclasses:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Interaction Class --\x3e\n<div class="i774:f194=c616(m956(10vw;20rem);300px;m026(90vw;55rem))"></div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-classes, view the ",(0,s.jsx)(n.a,{href:"/docs/syntax/pseudo-classes",children:"Pseudo-classes"}),"\ndocumentation."]}),"\n",(0,s.jsx)(n.h3,{id:"conditional-via-pseudo-elements",children:"Conditional via Pseudo-elements"}),"\n",(0,s.jsxs)(n.p,{children:["To conditionally set the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"inline-size"})})," property using Continuum\npseudo-element classes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Cosmetic Element --\x3e\n<div class="i774::a205=f837"></div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-elements, view the ",(0,s.jsx)(n.a,{href:"/docs/syntax/pseudo-elements",children:"Pseudo-elements"}),"\ndocumentation."]}),"\n",(0,s.jsx)(n.h2,{id:"prime-example",children:"Prime Example"}),"\n",(0,s.jsx)(n.p,{children:"Combining all the above in a real-world example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"Example source goes here\n"})}),"\n",(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:(0,s.jsx)(n.p,{children:"Result:"})}),(0,s.jsx)("div",{children:(0,s.jsx)(n.p,{children:"Example output goes here"})})]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);