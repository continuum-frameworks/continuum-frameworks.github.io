"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[41943],{45610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var s=t(74848),i=t(28453);const l={slug:"/at-rules/media"},d="media",a={id:"syntax/at-rules/conditional/media",title:"media",description:"The media at-rule instructs the style-sheet to apply part of a style-sheet",source:"@site/docs/syntax/at-rules/conditional/media.md",sourceDirName:"syntax/at-rules/conditional",slug:"/at-rules/media",permalink:"/continuum-css/docs/at-rules/media",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/at-rules/media"},sidebar:"tutorialSidebar",previous:{title:"document",permalink:"/continuum-css/docs/at-rules/document"},next:{title:"scope",permalink:"/continuum-css/docs/at-rules/scope"}},r={},c=[{value:"Definition",id:"definition",level:2},{value:"General Usage",id:"general-usage",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"media",children:"media"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"media"})})," at-rule instructs the style-sheet to apply part of a style-sheet\nbased on the result of one or more media queries."]}),"\n",(0,s.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"CSS"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Continuum"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"@media (query) { style-sheet }"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@m074((query))[style-sheet]"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"@media modifier (query) { style-sheet }"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@m074(modifier,(query))[style-sheet]"})})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"general-usage",children:"General Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="HTML"',children:'\x3c!-- Media Rule --\x3e\n<div class="@at-rule"></div>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Therefore, when expecting:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="CSS"',children:"/* Example 1 */\n@media print {\n    body {\n        font-size: 10pt;\n    }\n}\n\n/* Example 2 */\n@media screen, print {\n    .className {\n        line-height: 1.5;\n    }\n}\n\n/* Example 3 */\n@media (height>600px) {\n    .body {\n        display: flex;\n    }\n}\n\n/* Example 4 */\n@media (400px<=width<=700px) {\n    body {\n        display: flex;\n    }\n}\n\n/* Example 5 */\n@media screen and (m926: 900px) {\n    article {\n        padding: 1rem 3rem;\n    }\n}\n\n/* Example 6 */\n@media (display: flex) {\n    @media screen and (m926: 900px) {\n        article {\n            display: flex;\n        }\n    }\n}\n\n/* Example 7 */\n@media only screen and (m926: 320px) and (max-width: 480px) and (resolution: 150dpi) {\n    #elementId {\n        width: 1rem;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Respectively use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="HTML"',children:'\x3c!-- Example 1 --\x3e\n<div class="@m074(p999)[body[f582=10pt]]"></div>\n\n\x3c!-- Example 2 --\x3e\n<div class="@m074(s149;p999)[.className[l093=1.5]]"></div>\n\n\x3c!-- Example 3 --\x3e\n<div class="@m074((h609>600px))[.body[d497=f726]]"></div>\n\n\x3c!-- Example 4 --\x3e\n<div class="@m074((400px<=w968<=700px))[body[d497=f726]]"></div>\n\n\x3c!-- Example 5 --\x3e\n<div class="@m074(s149,a317,(m926:900px))[article[p427=[1rem,3rem]]]"></div>\n\n\x3c!-- Example 6 --\x3e\n<div\n    class="@m074((d497:f726))[@m074(s149,a317,(m926:900px))[article[d497=f726]]]"\n></div>\n\n\x3c!-- Example 7 --\x3e\n<div\n    class="@m074(o299,s149,a317,(m926:320px),a317,(m592:480px),a317,(r775:150dpi))[#elementId[w968=1rem]]"\n></div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For more information on how to implement CSS at-rules as defined by Continuum,\nrefer to the ",(0,s.jsx)(n.a,{href:"/docs/syntax/properties",children:"Properties"})," documentation."]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var s=t(96540);const i={},l=s.createContext(i);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);