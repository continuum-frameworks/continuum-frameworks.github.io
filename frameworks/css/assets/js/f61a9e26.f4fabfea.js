"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[44827],{2252:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=s(74848),a=s(28453);const l={slug:"/properties/animation"},t="animation",o={id:"syntax/properties/animation/animation",title:"animation",description:"The animation property controls applies an animation between styles.",source:"@site/docs/syntax/properties/animation/animation.md",sourceDirName:"syntax/properties/animation",slug:"/properties/animation",permalink:"/frameworks/css/docs/properties/animation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/properties/animation"},sidebar:"tutorialSidebar",previous:{title:"animation-timing-function",permalink:"/frameworks/css/docs/properties/animation-timing-function"},next:{title:"appearance-*",permalink:"/frameworks/css/docs/syntax/properties/appearance-*"}},r={},d=[{value:"Overview",id:"overview",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Values",id:"values",level:3},{value:"Value-functions",id:"value-functions",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Conditional via At-rules",id:"conditional-via-at-rules",level:3},{value:"Conditional via Pseudo-classes",id:"conditional-via-pseudo-classes",level:3},{value:"Conditional via Pseudo-elements",id:"conditional-via-pseudo-elements",level:3},{value:"Prime Example",id:"prime-example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"animation",children:"animation"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"animation"})})," property controls applies an animation between styles."]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Given the following CSS styling for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:'title="Example CSS styling"',children:"/* Global Keyword */\nanimation: inherit;\nanimation: initial;\nanimation: revert;\nanimation: revert-layer;\nanimation: unset;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The corresponding Continuum classes to use would be:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Global Keyword --\x3e\n<div class="a465=i829"></div>\n<div class="a465=i631"></div>\n<div class="a465=r486"></div>\n<div class="a465=r319"></div>\n<div class="a465=u558"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["View the ",(0,i.jsx)(n.a,{href:"#prime-example",children:"Prime Example"})," section at the end of this page for a\nmore comprehensive look into using Continuum."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,i.jsxs)(n.p,{children:["To set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"animation"})})," property using Continuum value classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Local Keyword --\x3e\n<div class="a465=a375"></div>\n\n\x3c!-- Number Data --\x3e\n<div class="a465=2.5"></div>\n\n\x3c!-- Time Unit --\x3e\n<div class="a465=2s"></div>\n\n\x3c!-- Regular Identifier --\x3e\n<div class="a465=iD1"></div>\n\n\x3c!-- Local Keyword, Number Data, Time Unit, Regular Identifier (mixture) --\x3e\n<div class="a465=a793,2.5,3000ms,--iD1"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalues, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/values",children:"Values"})," documentation."]}),"\n",(0,i.jsx)(n.h3,{id:"value-functions",children:"Value-functions"}),"\n",(0,i.jsxs)(n.p,{children:["To set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"animation"})})," property using Continuum value-function classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Ease Function --\x3e\n<div class="a465=c663(0.1;0.5;1;0.1)"></div>\n\n\x3c!-- Ease Functions (multiple) --\x3e\n<div class="a465=c663(0.1;0.5;1;0.1);s346(3;e110)"></div>\n\n\x3c!-- Local Keyword, Number Data, Time Unit, Dashed Identifier, Ease Function (mixture) --\x3e\n<div class="a465=a375;3;2s;iD1;c663(0.1;0.5;1;0.1)"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalue-functions, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/value-functions",children:"Value-functions"}),"\ndocumentation."]}),"\n",(0,i.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,i.jsx)(n.h3,{id:"conditional-via-at-rules",children:"Conditional via At-rules"}),"\n",(0,i.jsxs)(n.p,{children:["To conditionally set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"animation"})})," property using Continuum at-rule\nclasses:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Media Rule --\x3e\n<div class="@m074(p999)[body[a465=[a793,2.5,3000ms]]]"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nat-rules, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/at-rules",children:"At-rules"})," documentation."]}),"\n",(0,i.jsx)(n.h3,{id:"conditional-via-pseudo-classes",children:"Conditional via Pseudo-classes"}),"\n",(0,i.jsxs)(n.p,{children:["To conditionally set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"animation"})})," property using Continuum pseudo-class\nclasses:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Interaction Class --\x3e\n<div class="a465:f194=s346(3;e110)"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-classes, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/pseudo-classes",children:"Pseudo-classes"}),"\ndocumentation."]}),"\n",(0,i.jsx)(n.h3,{id:"conditional-via-pseudo-elements",children:"Conditional via Pseudo-elements"}),"\n",(0,i.jsxs)(n.p,{children:["To conditionally set the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"animation"})})," property using Continuum pseudo-element\nclasses:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Cosmetic Element --\x3e\n<div class="a465::a205=--anotherId"></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-elements, view the ",(0,i.jsx)(n.a,{href:"/docs/syntax/pseudo-elements",children:"Pseudo-elements"}),"\ndocumentation."]}),"\n",(0,i.jsx)(n.h2,{id:"prime-example",children:"Prime Example"}),"\n",(0,i.jsx)(n.p,{children:"Combining all the above in a real-world example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"Example source goes here\n"})}),"\n",(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:(0,i.jsx)(n.p,{children:"Result:"})}),(0,i.jsx)("div",{children:(0,i.jsx)(n.p,{children:"Example output goes here"})})]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(96540);const a={},l=i.createContext(a);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);