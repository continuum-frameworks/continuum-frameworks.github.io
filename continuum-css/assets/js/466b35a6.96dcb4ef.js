"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[94180],{59088:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var s=i(74848),t=i(28453);const a={slug:"/properties/animation-timing-function"},l="animation-timing-function",o={id:"syntax/properties/animation/animation-timing-function",title:"animation-timing-function",description:"The animation-timing-function property controls how an animation",source:"@site/docs/syntax/properties/animation/animation-timing-function.md",sourceDirName:"syntax/properties/animation",slug:"/properties/animation-timing-function",permalink:"/continuum-css/docs/properties/animation-timing-function",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/properties/animation-timing-function"},sidebar:"tutorialSidebar",previous:{title:"animation-timeline",permalink:"/continuum-css/docs/properties/animation-timeline"},next:{title:"animation",permalink:"/continuum-css/docs/properties/animation"}},c={},r=[{value:"Overview",id:"overview",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Values",id:"values",level:3},{value:"Value-functions",id:"value-functions",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Conditional via At-rules",id:"conditional-via-at-rules",level:3},{value:"Conditional via Pseudo-classes",id:"conditional-via-pseudo-classes",level:3},{value:"Conditional via Pseudo-elements",id:"conditional-via-pseudo-elements",level:3},{value:"Prime Example",id:"prime-example",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"animation-timing-function",children:"animation-timing-function"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"animation-timing-function"})})," property controls how an animation\nprogresses through the duration of each cycle."]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Given the following CSS styling for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="Example CSS styling"',children:"/* Global Keyword */\nanimation-timing-function: inherit;\nanimation-timing-function: initial;\nanimation-timing-function: revert;\nanimation-timing-function: revert-layer;\nanimation-timing-function: unset;\n"})}),"\n",(0,s.jsx)(n.p,{children:"The corresponding Continuum classes to use would be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Global Keyword --\x3e\n<div class="a794=i829"></div>\n<div class="a794=i631"></div>\n<div class="a794=r486"></div>\n<div class="a794=r319"></div>\n<div class="a794=u558"></div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["View the ",(0,s.jsx)(n.a,{href:"#prime-example",children:"Prime Example"})," section at the end of this page for a\nmore comprehensive look into using Continuum."]}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,s.jsxs)(n.p,{children:["To set the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"animation-timing-function"})})," property using Continuum value\nclasses:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Local Keyword --\x3e\n<div class="a794=e185"></div>\n\n\x3c!-- Local Keyword (multiple) --\x3e\n<div class="a794=e185;s296"></div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalues, view the ",(0,s.jsx)(n.a,{href:"/docs/syntax/values",children:"Values"})," documentation."]}),"\n",(0,s.jsx)(n.h3,{id:"value-functions",children:"Value-functions"}),"\n",(0,s.jsxs)(n.p,{children:["To set the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"animation-timing-function"})})," property using Continuum\nvalue-function classes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Ease Function --\x3e\n<div class="a794=c663(0.1;0.5;1;0.1)"></div>\n\n\x3c!-- Ease Function (multiple) --\x3e\n<div class="a794=c663(0.1;0.5;1;0.1);s346(3;e110)"></div>\n\n\x3c!-- Local Keyword, Ease Function (mixture) --\x3e\n<div class="a794=e185;c663(0.1;0.5;1;0.1)"></div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalue-functions, view the ",(0,s.jsx)(n.a,{href:"/docs/syntax/value-functions",children:"Value-functions"}),"\ndocumentation."]}),"\n",(0,s.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,s.jsx)(n.h3,{id:"conditional-via-at-rules",children:"Conditional via At-rules"}),"\n",(0,s.jsxs)(n.p,{children:["To conditionally set the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"animation-timing-function"})})," property using\nContinuum at-rule classes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Media Rule --\x3e\n<div class="@m074(p999)[body[a794=e476]]"></div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nat-rules, view the ",(0,s.jsx)(n.a,{href:"/docs/syntax/at-rules",children:"At-rules"})," documentation."]}),"\n",(0,s.jsx)(n.h3,{id:"conditional-via-pseudo-classes",children:"Conditional via Pseudo-classes"}),"\n",(0,s.jsxs)(n.p,{children:["To conditionally set the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"animation-timing-function"})})," property using\nContinuum pseudo-class classes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Interaction Class --\x3e\n<div class="a794:f194=c663(0.1;0.5;1;0.1)"></div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-classes, view the ",(0,s.jsx)(n.a,{href:"/docs/syntax/pseudo-classes",children:"Pseudo-classes"}),"\ndocumentation."]}),"\n",(0,s.jsx)(n.h3,{id:"conditional-via-pseudo-elements",children:"Conditional via Pseudo-elements"}),"\n",(0,s.jsxs)(n.p,{children:["To conditionally set the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"animation-timing-function"})})," property using\nContinuum pseudo-element classes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Cosmetic Element --\x3e\n<div class="a794::a205=s346(10;j391)"></div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-elements, view the ",(0,s.jsx)(n.a,{href:"/docs/syntax/pseudo-elements",children:"Pseudo-elements"}),"\ndocumentation."]}),"\n",(0,s.jsx)(n.h2,{id:"prime-example",children:"Prime Example"}),"\n",(0,s.jsx)(n.p,{children:"Combining all the above in a real-world example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"Example source goes here\n"})}),"\n",(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:(0,s.jsx)(n.p,{children:"Result:"})}),(0,s.jsx)("div",{children:(0,s.jsx)(n.p,{children:"Example output goes here"})})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(96540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);