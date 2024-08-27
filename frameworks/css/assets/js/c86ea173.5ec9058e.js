"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[68465],{66952:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(74848),l=s(28453);const i={slug:"/properties/content"},o="content",a={id:"syntax/properties/content/content",title:"content",description:"The content property controls replaces content with a generated value.",source:"@site/docs/syntax/properties/content/content.md",sourceDirName:"syntax/properties/content",slug:"/properties/content",permalink:"/frameworks/css/docs/properties/content",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/properties/content"},sidebar:"tutorialSidebar",previous:{title:"content-visibility",permalink:"/frameworks/css/docs/properties/content-visibility"},next:{title:"counter-*",permalink:"/frameworks/css/docs/syntax/properties/counter-*"}},r={},c=[{value:"Overview",id:"overview",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Values",id:"values",level:3},{value:"Value-functions",id:"value-functions",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Conditional via At-rules",id:"conditional-via-at-rules",level:3},{value:"Conditional via Pseudo-classes",id:"conditional-via-pseudo-classes",level:3},{value:"Conditional via Pseudo-elements",id:"conditional-via-pseudo-elements",level:3},{value:"Prime Example",id:"prime-example",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"content",children:"content"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"content"})})," property controls replaces content with a generated value."]}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Given the following CSS styling for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",metastring:'title="Example CSS styling"',children:"/* Global Keyword */\ncontent: inherit;\ncontent: initial;\ncontent: revert;\ncontent: revert-layer;\ncontent: unset;\n"})}),"\n",(0,t.jsx)(n.p,{children:"The corresponding Continuum classes to use would be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Global Keyword --\x3e\n<div class="c204=i829"></div>\n<div class="c204=i631"></div>\n<div class="c204=r486"></div>\n<div class="c204=r319"></div>\n<div class="c204=u558"></div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.a,{href:"#prime-example",children:"Prime Example"})," section at the end of this page for a\nmore comprehensive look into using Continuum."]}),"\n",(0,t.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,t.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,t.jsxs)(n.p,{children:["To set the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"content"})})," property using Continuum value classes:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Local Keyword --\x3e\n<div class="c204=n068"></div>\n\n\x3c!-- String Data --\x3e\n<div class="c204=\'Text_goes_here\'"></div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalues, view the ",(0,t.jsx)(n.a,{href:"/docs/syntax/values",children:"Values"})," documentation."]}),"\n",(0,t.jsx)(n.h3,{id:"value-functions",children:"Value-functions"}),"\n",(0,t.jsxs)(n.p,{children:["To set the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"content"})})," property using Continuum value-function classes:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"\x3c!-- Reference Function --\x3e\n<div class=\"c204=u535('image.png')\"></div>\n\n\x3c!-- Local Keyword, Counter Function (mixture) --\x3e\n<div class=\"c204=o642,c434(l052)\"></div>\n\n\x3c!-- Local Keyword, Counter Function, String Data (mixture) --\x3e\n<div\n    class=\"c204='prefix',u535('image.png'),'suffix'/'Alt_text_goes_here'\"\n></div>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nvalue-functions, view the ",(0,t.jsx)(n.a,{href:"/docs/syntax/value-functions",children:"Value-functions"}),"\ndocumentation."]}),"\n",(0,t.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,t.jsx)(n.h3,{id:"conditional-via-at-rules",children:"Conditional via At-rules"}),"\n",(0,t.jsxs)(n.p,{children:["To conditionally set the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"content"})})," property using Continuum at-rule classes:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:'\x3c!-- Media Rule --\x3e\n<div class="@m074(p999)[body[c204=n686]]"></div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\nat-rules, view the ",(0,t.jsx)(n.a,{href:"/docs/syntax/at-rules",children:"At-rules"})," documentation."]}),"\n",(0,t.jsx)(n.h3,{id:"conditional-via-pseudo-classes",children:"Conditional via Pseudo-classes"}),"\n",(0,t.jsxs)(n.p,{children:["To conditionally set the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"content"})})," property using Continuum pseudo-class\nclasses:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"\x3c!-- Interaction Class --\x3e\n<div class=\"c204:f194=i923('image1x.png',1x;'image2x.png',2x)\"></div>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-classes, view the ",(0,t.jsx)(n.a,{href:"/docs/syntax/pseudo-classes",children:"Pseudo-classes"}),"\ndocumentation."]}),"\n",(0,t.jsx)(n.h3,{id:"conditional-via-pseudo-elements",children:"Conditional via Pseudo-elements"}),"\n",(0,t.jsxs)(n.p,{children:["To conditionally set the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"content"})})," property using Continuum pseudo-element\nclasses:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"\x3c!-- Cosmetic Element --\x3e\n<div class=\"c204::a205=n257/'Alt_text_goes_here'\"></div>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For a full list of all currently supported global, keyword, and other named CSS\npseudo-elements, view the ",(0,t.jsx)(n.a,{href:"/docs/syntax/pseudo-elements",children:"Pseudo-elements"}),"\ndocumentation."]}),"\n",(0,t.jsx)(n.h2,{id:"prime-example",children:"Prime Example"}),"\n",(0,t.jsx)(n.p,{children:"Combining all the above in a real-world example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Example HTML use"',children:"Example source goes here\n"})}),"\n",(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:(0,t.jsx)(n.p,{children:"Result:"})}),(0,t.jsx)("div",{children:(0,t.jsx)(n.p,{children:"Example output goes here"})})]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const l={},i=t.createContext(l);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);