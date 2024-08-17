"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[15567],{81120:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=s(74848),r=s(28453);const l={slug:"/properties/transform"},i="transform",a={id:"syntax/properties/transform/transform",title:"transform",description:"The transform property controls lets you rotate, scale, skew, or translate",source:"@site/docs/syntax/properties/transform/transform.md",sourceDirName:"syntax/properties/transform",slug:"/properties/transform",permalink:"/continuum-css/docs/properties/transform",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/properties/transform"},sidebar:"tutorialSidebar",previous:{title:"transform-style",permalink:"/continuum-css/docs/properties/transform-style"},next:{title:"transition-*",permalink:"/continuum-css/docs/syntax/properties/transition-*"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Values",id:"values",level:3},{value:"Value-functions",id:"value-functions",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Conditional via At-rules",id:"conditional-via-at-rules",level:3},{value:"Conditional via Pseudo-classes",id:"conditional-via-pseudo-classes",level:3},{value:"Conditional via Pseudo-elements",id:"conditional-via-pseudo-elements",level:3},{value:"Prime Example",id:"prime-example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"transform",children:"transform"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"transform"})})," property controls lets you rotate, scale, skew, or translate\nan element."]}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Given the following CSS styling for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",metastring:'title="Example CSS styling"',children:"/* Global Keyword */\ntransform: inherit;\ntransform: initial;\ntransform: revert;\ntransform: revert-layer;\ntransform: unset;\n"})}),"\n",(0,t.jsx)(n.p,{children:"The corresponding Continuum classes to use would be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Global Keyword --\x3e\n<div class="t526=i829"></div>\n<div class="t526=i631"></div>\n<div class="t526=r486"></div>\n<div class="t526=r319"></div>\n<div class="t526=u558"></div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.a,{href:"#prime-example",children:"Prime Example"})," section at the end of this page for a\nmore comprehensive look into using Continuum."]}),"\n",(0,t.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,t.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,t.jsxs)(n.p,{children:["To set the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"transform"})})," property using Continuum value classes:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Local Keyword --\x3e\n<div class="t526=n068"></div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalues, view the ",(0,t.jsx)(n.a,{href:"/docs/syntax/values",children:"Values"})," documentation."]}),"\n",(0,t.jsx)(n.h3,{id:"value-functions",children:"Value-functions"}),"\n",(0,t.jsxs)(n.p,{children:["To set the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"transform"})})," property using Continuum value-function classes:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Matrix Function --\x3e\n<div class="t526=m050(1;2;3;4;5;6)"></div>\n\n\x3c!-- Matrix Function, Rotate Function (mixture) --\x3e\n<div class="t526=m050(1;2;3;4;5;6),r763(45deg)"></div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalue-functions, view the ",(0,t.jsx)(n.a,{href:"/docs/syntax/value-functions",children:"Value-functions"}),"\ndocumentation."]}),"\n",(0,t.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,t.jsx)(n.h3,{id:"conditional-via-at-rules",children:"Conditional via At-rules"}),"\n",(0,t.jsxs)(n.p,{children:["To conditionally set the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"transform"})})," property using Continuum at-rule\nclasses:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Media Rule --\x3e\n<div class="@m074(p999)[body[t526=n068]]"></div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nat-rules, view the ",(0,t.jsx)(n.a,{href:"/docs/syntax/at-rules",children:"At-rules"})," documentation."]}),"\n",(0,t.jsx)(n.h3,{id:"conditional-via-pseudo-classes",children:"Conditional via Pseudo-classes"}),"\n",(0,t.jsxs)(n.p,{children:["To conditionally set the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"transform"})})," property using Continuum pseudo-class\nclasses:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Interaction Class --\x3e\n<div class="t526:f194=s179(2;0.5)"></div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-classes, view the ",(0,t.jsx)(n.a,{href:"/docs/syntax/pseudo-classes",children:"Pseudo-classes"}),"\ndocumentation."]}),"\n",(0,t.jsx)(n.h3,{id:"conditional-via-pseudo-elements",children:"Conditional via Pseudo-elements"}),"\n",(0,t.jsxs)(n.p,{children:["To conditionally set the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"transform"})})," property using Continuum pseudo-element\nclasses:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Cosmetic Element --\x3e\n<div class="t526::a205=n068"></div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-elements, view the ",(0,t.jsx)(n.a,{href:"/docs/syntax/pseudo-elements",children:"Pseudo-elements"}),"\ndocumentation."]}),"\n",(0,t.jsx)(n.h2,{id:"prime-example",children:"Prime Example"}),"\n",(0,t.jsx)(n.p,{children:"Combining all the above in a real-world example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"Example source goes here\n"})}),"\n",(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:(0,t.jsx)(n.p,{children:"Result:"})}),(0,t.jsx)("div",{children:(0,t.jsx)(n.p,{children:"Example output goes here"})})]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(96540);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);