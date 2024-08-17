"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[57341],{80912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=n(74848),r=n(28453);const o={slug:"/at-rules/font-face"},l="font-face",c={id:"syntax/at-rules/nested/font-face",title:"font-face",description:"The font-face at-rule instructs the style-sheet to specify a custom font",source:"@site/docs/syntax/at-rules/nested/font-face.md",sourceDirName:"syntax/at-rules/nested",slug:"/at-rules/font-face",permalink:"/continuum-css/docs/at-rules/font-face",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/at-rules/font-face"},sidebar:"tutorialSidebar",previous:{title:"counter-style",permalink:"/continuum-css/docs/at-rules/counter-style"},next:{title:"font-feature-values",permalink:"/continuum-css/docs/at-rules/font-feature-values"}},i={},a=[{value:"Definition",id:"definition",level:2},{value:"General Usage",id:"general-usage",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"font-face",children:"font-face"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"font-face"})})," at-rule instructs the style-sheet to specify a custom font\nwith which to display text; the font can be loaded from either a remote server\nor a locally-installed font on the user's own computer."]}),"\n",(0,s.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"CSS"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Continuum"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"@font-face { descriptors }"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"@f666[descriptors]"})})})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"general-usage",children:"General Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="HTML"',children:'\x3c!-- Font Face Rule --\x3e\n<div class="@at-rule"></div>\n'})}),"\n",(0,s.jsx)(t.p,{children:"Therefore, when expecting:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",metastring:'title="CSS"',children:'/* Example 1 */\n@font-face {\n    font-family: "Trickster";\n    src: local("Trickster"),\n        url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1), url("trickster-outline.otf")\n            format("opentype"), url("trickster-outline.woff") format("woff");\n}\n\n/* Example 2 */\n@font-face {\n    font-family: "Bitstream Vera Serif Bold";\n    src: url("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");\n}\n\n/* Example 3 */\n@font-face {\n    font-family: "MyHelvetica";\n    src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),\n        url("MgOpenModernaBold.ttf");\n    font-weight: bold;\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Respectively use:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="HTML"',children:"\x3c!-- Example 1 --\x3e\n<div\n    class=\"@f666[f649='Trickster',s621=[l567('Trickster');u535('trickster-COLRv1.otf'),f458('opentype'),t945(c899);u535('trickster-outline.otf'),f458('opentype');u535('trickster-outline.woff'),f458('woff')]]\"\n></div>\n\n\x3c!-- Example 2 --\x3e\n<div\n    class=\"@f666[f649='Bitstream_Vera_Serif_Bold',s621=u535('https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf')]\"\n></div>\n\n\x3c!-- Example 3 --\x3e\n<div\n    class=\"@f666[f649='MyHelvetica',s621=[l567('Helvetica_Neue_Bold');l567('HelveticaNeue-Bold');u535('MgOpenModernaBold.ttf')],f673=b613]\"\n></div>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For more information on how to implement CSS at-rules as defined by Continuum,\nrefer to the ",(0,s.jsx)(t.a,{href:"/docs/syntax/properties",children:"Properties"})," documentation."]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var s=n(96540);const r={},o=s.createContext(r);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);