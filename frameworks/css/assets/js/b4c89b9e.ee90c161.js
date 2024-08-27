"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[56867],{86048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(74848),s=n(28453);const i={slug:"/at-rules/property"},l="property",o={id:"syntax/at-rules/nested/property",title:"property",description:"The property at-rule instructs the style-sheet to explicitly define CSS",source:"@site/docs/syntax/at-rules/nested/property.md",sourceDirName:"syntax/at-rules/nested",slug:"/at-rules/property",permalink:"/frameworks/css/docs/at-rules/property",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/at-rules/property"},sidebar:"tutorialSidebar",previous:{title:"page",permalink:"/frameworks/css/docs/at-rules/page"},next:{title:"styleset",permalink:"/frameworks/css/docs/at-rules/styleset"}},a={},c=[{value:"Definition",id:"definition",level:2},{value:"General Usage",id:"general-usage",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"property",children:"property"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"property"})})," at-rule instructs the style-sheet to explicitly define CSS\ncustom properties, allowing for property type checking and constraining, setting\ndefault values, and defining whether a custom property can inherit values or\nnot."]}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"CSS"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Continuum"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"@property --name { descriptors }"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"@p640(--name)[descriptors]"})})})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"general-usage",children:"General Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",metastring:'title="HTML"',children:'\x3c!-- Property Rule --\x3e\n<div class="@at-rule"></div>\n'})}),"\n",(0,r.jsx)(t.p,{children:"Therefore, when expecting:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-css",metastring:'title="CSS"',children:'/* Example 1 */\n@property --property-name {\n    syntax: "<color>";\n    inherits: false;\n    initial-value: #c0ffee;\n}\n\n/* Example 2 */\n@property --item-size {\n    syntax: "<percentage>";\n    inherits: true;\n    initial-value: 40%;\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Respectively use:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",metastring:'title="HTML"',children:"\x3c!-- Example 1 --\x3e\n<div\n    class=\"@p640(--property-name)[s247='<color>',i967=f368,i464=#c0ffee]\"\n></div>\n\n\x3c!-- Example 2 --\x3e\n<div class=\"@p640(--item-size)[s247='<percentage>',i967=t850,i464=40%]\"></div>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For more information on how to implement CSS at-rules as defined by Continuum,\nrefer to the ",(0,r.jsx)(t.a,{href:"/docs/syntax/properties",children:"Properties"})," documentation."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);