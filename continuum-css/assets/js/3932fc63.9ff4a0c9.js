"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[87168],{76114:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>a});var r=s(74848),l=s(28453);const i={slug:"/properties/border"},o="border",t={id:"syntax/properties/border/border",title:"border",description:"The border property controls an element's border.",source:"@site/docs/syntax/properties/border/border.md",sourceDirName:"syntax/properties/border",slug:"/properties/border",permalink:"/continuum-css/docs/properties/border",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/properties/border"},sidebar:"tutorialSidebar",previous:{title:"border-width",permalink:"/continuum-css/docs/properties/border-width"},next:{title:"bottom-*",permalink:"/continuum-css/docs/syntax/properties/bottom-*"}},d={},a=[{value:"Overview",id:"overview",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Values",id:"values",level:3},{value:"Value-functions",id:"value-functions",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Conditional via At-rules",id:"conditional-via-at-rules",level:3},{value:"Conditional via Pseudo-classes",id:"conditional-via-pseudo-classes",level:3},{value:"Conditional via Pseudo-elements",id:"conditional-via-pseudo-elements",level:3},{value:"Prime Example",id:"prime-example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"border",children:"border"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"border"})})," property controls an element's border."]}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Given the following CSS styling for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",metastring:'title="Example CSS styling"',children:"/* Global Keyword */\nborder: inherit;\nborder: initial;\nborder: revert;\nborder: revert-layer;\nborder: unset;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The corresponding Continuum classes to use would be:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Global Keyword --\x3e\n<div class="b423=i829"></div>\n<div class="b423=i631"></div>\n<div class="b423=r486"></div>\n<div class="b423=r319"></div>\n<div class="b423=u558"></div>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["View the ",(0,r.jsx)(n.a,{href:"#prime-example",children:"Prime Example"})," section at the end of this page for a\nmore comprehensive look into using Continuum."]}),"\n",(0,r.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,r.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,r.jsxs)(n.p,{children:["To set the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"border"})})," property using Continuum value classes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Keyword Color --\x3e\n<div class="b423=c282"></div>\n\n\x3c!-- Named Color --\x3e\n<div class="b423=r054"></div>\n\n\x3c!-- Hexadecimal Color --\x3e\n<div class="b423=#0f0"></div>\n\n\x3c!-- System Color --\x3e\n<div class="b423=a568"></div>\n\n\x3c!-- Length Unit --\x3e\n<div class="b423=110vh"></div>\n\n\x3c!-- Keyword Color, Named Color, Hexadecimal Color, System Color, Length Unit (mixture) --\x3e\n<div class="b423=c282,d564,110vh"></div>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalues, view the ",(0,r.jsx)(n.a,{href:"/docs/syntax/values",children:"Values"})," documentation."]}),"\n",(0,r.jsx)(n.h3,{id:"value-functions",children:"Value-functions"}),"\n",(0,r.jsxs)(n.p,{children:["To set the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"border"})})," property using Continuum value-function classes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Color Function --\x3e\n<div class="b423=h459(240,100%,50%/1.0)"></div>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalue-functions, view the ",(0,r.jsx)(n.a,{href:"/docs/syntax/value-functions",children:"Value-functions"}),"\ndocumentation."]}),"\n",(0,r.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,r.jsx)(n.h3,{id:"conditional-via-at-rules",children:"Conditional via At-rules"}),"\n",(0,r.jsxs)(n.p,{children:["To conditionally set the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"border"})})," property using Continuum at-rule classes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Media Rule --\x3e\n<div class="@m074(p999)[body[b423=s705]]"></div>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nat-rules, view the ",(0,r.jsx)(n.a,{href:"/docs/syntax/at-rules",children:"At-rules"})," documentation."]}),"\n",(0,r.jsx)(n.h3,{id:"conditional-via-pseudo-classes",children:"Conditional via Pseudo-classes"}),"\n",(0,r.jsxs)(n.p,{children:["To conditionally set the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"border"})})," property using Continuum pseudo-class\nclasses:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Interaction Class --\x3e\n<div class="b423:f194=d564,r054"></div>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-classes, view the ",(0,r.jsx)(n.a,{href:"/docs/syntax/pseudo-classes",children:"Pseudo-classes"}),"\ndocumentation."]}),"\n",(0,r.jsx)(n.h3,{id:"conditional-via-pseudo-elements",children:"Conditional via Pseudo-elements"}),"\n",(0,r.jsxs)(n.p,{children:["To conditionally set the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"border"})})," property using Continuum pseudo-element\nclasses:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Cosmetic Element --\x3e\n<div class="b423::a205=t998,d182,#32a1ce"></div>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-elements, view the ",(0,r.jsx)(n.a,{href:"/docs/syntax/pseudo-elements",children:"Pseudo-elements"}),"\ndocumentation."]}),"\n",(0,r.jsx)(n.h2,{id:"prime-example",children:"Prime Example"}),"\n",(0,r.jsx)(n.p,{children:"Combining all the above in a real-world example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"Example source goes here\n"})}),"\n",(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)(n.p,{children:"Result:"})}),(0,r.jsx)("div",{children:(0,r.jsx)(n.p,{children:"Example output goes here"})})]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var r=s(96540);const l={},i=r.createContext(l);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);