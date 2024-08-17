"use strict";(self.webpackChunkcontinuum_css_docs=self.webpackChunkcontinuum_css_docs||[]).push([[5899],{49233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453);const l={slug:"/introduction",sidebar_position:1},a="Introduction",o={id:"introduction",title:"Introduction",description:"What is Continuum?",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/continuum-css/docs/introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/continuum-css/docs/installation"}},r={},c=[{value:"Tell Me More",id:"tell-me-more",level:2},{value:"The Big Question",id:"the-big-question",level:2},{value:"How About A Demo",id:"how-about-a-demo",level:2},{value:"How About A Demo (The Sequel)",id:"how-about-a-demo-the-sequel",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsxs)(n.p,{children:["What is ",(0,i.jsx)(n.strong,{children:"Continuum"}),"?"]}),"\n",(0,i.jsx)(n.p,{children:"Continuum is a powerful yet lightweight JavaScript framework built around the\npremise that all CSS features should always be available to you from within your\nmarkup."}),"\n",(0,i.jsx)(n.h2,{id:"tell-me-more",children:"Tell Me More"}),"\n",(0,i.jsx)(n.p,{children:"Let's start with an example."}),"\n",(0,i.jsx)(n.p,{children:"Traditionally, whenever a developer needed to style anything on the web, they\nhad to first write some CSS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:'title="CSS"',children:"#body {\n    background-color: #5d977a;\n    color: white;\n}\n#main {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n.title {\n    font-size: 30px;\n    font-weight: 750;\n    text-decoration-line: underline;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then, choose between using a ",(0,i.jsx)(n.code,{children:"<link>"})," or ",(0,i.jsx)(n.code,{children:"<style>"})," tag to make these styles\navailable:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<link\n    ...\n    href="styles.css"\n/>\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<style type="text/css">\n    .body { ...\n</style>\n'})}),"\n",(0,i.jsx)(n.p,{children:"And finally, apply the appropriate tags, classes, and IDs to style the page's\ncontent as envisioned:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="HTML"',children:'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="UTF-8" />\n        <meta\n            name="viewport"\n            content="width=device-width, initial-scale=1.0"\n        />\n        <link\n            rel="stylesheet"\n            type="text/css"\n            href="styles.css"\n        />\n    </head>\n    <body id="body">\n        <div id="main">\n            <h1 class="title">Hello World!</h1>\n        </div>\n    </body>\n</html>\n'})}),"\n",(0,i.jsx)(n.p,{children:"All with the end goal of seeing..."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Hello World",src:t(21962).A+"",width:"1280",height:"720"})}),"\n",(0,i.jsx)(n.p,{children:"This approach, though still viable, does not lend itself to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Accelerating development."}),"\n",(0,i.jsx)(n.li,{children:"Reducing decision fatigue."}),"\n",(0,i.jsx)(n.li,{children:"And most importantly, retaining creative control as a designer."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This is where Continuum steps in."}),"\n",(0,i.jsx)(n.p,{children:"It's drop-in web development solution that can be easily integrated into any\nexisting web application with minimal effort, designed to always enhance\nfunctionality without requiring any restructuring of existing codebases."}),"\n",(0,i.jsx)(n.p,{children:"For example, to still get the above page, only this time whilst leveraging\nContinuum:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="HTML"',children:'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="UTF-8" />\n        <meta\n            name="viewport"\n            content="width=device-width, initial-scale=1.0"\n        />\n        \x3c!-- highlight-start --\x3e\n        <script\n            defer\n            src="https://cdn.jsdelivr.net/npm/continuum-css@latest/dist/cdn.min.js"\n        ><\/script>\n        \x3c!-- highlight-end --\x3e\n    </head>\n    \x3c!-- highlight-start --\x3e\n    <body class="b622=#5d977a c320=w097">\n        \x3c!-- highlight-end --\x3e\n        \x3c!-- highlight-start --\x3e\n        <div class="p963=a770 l052=50% t792=50% t526=t310(-50%;-50%)">\n            \x3c!-- highlight-end --\x3e\n            \x3c!-- highlight-start --\x3e\n            <h1 class="f582=30px f673=750 t138=u441">Hello World!</h1>\n            \x3c!-- highlight-end --\x3e\n        </div>\n    </body>\n</html>\n'})}),"\n",(0,i.jsx)(n.p,{children:"Same result, but with the added benefit of never having to write a single line\nof custom CSS, while still being able to create your own custom styles."}),"\n",(0,i.jsx)(n.p,{children:"Plus, at least 30% less typing is always welcome!"}),"\n",(0,i.jsx)(n.p,{children:"\u201cThat looks like a mess\u201d is probably what you're thinking. And if you are,\nyou're not wrong. It is somewhat unconventional. But once you try it, and after\na while actually start to see beyond the matrix, you\u2019ll notice:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Accelerated Development"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Significantly enhance the efficiency of styling HTML by using classes that\nencapsulate common styling properties directly in the markup itself. This\napproach not only saves time as well as reduce the need for writing custom CSS,\nit also ensures consistency across the application. Moreover, the available\ncommunity support and extensive up-to-date documentation facilitate quicker\nproblem-solving and learning."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Improved Maintainability"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This method not only speeds up the development process but also promotes\nconsistency across the application. Additionally, it encourages a more modular\napproach to design, making it easier to maintain and update styles. By\nminimizing context switching between HTML and CSS files, developers can focus\nmore on other time-consuming tasks, which ultimately leads to faster project\ncompletion while still maintaining high-quality standards."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Reduced Decision Fatigue"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, instead of writing custom styles for margins, padding, and colors,\na developer can simply use unreserved classes like m276=a793, p427=10vh, and\nc320=r054. This not only speeds up the development process but also reduces\ncognitive load, allowing developers to focus on app functionality and user\nexperience rather than getting bogged down in deliberating over which styles to\napply or what custom CSS to create for each component."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Minimised Complexity"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Significantly minimise complexity in styling HTML by implementing a functional\napproach to design. Instead of managing multiple style-sheets and writing\nextensive custom CSS for each component, developers can both optimise their\nworkflow and clean their codebase by simply applying classes directly in the\nmarkup. This approach allows for changes to be made quickly by only adjusting\nthe classes themselves as opposed to diving into separate CSS files."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Retained Creative Control"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The absence of arbitrary constraints requiring you to choose your styles from a\npredefined set of pre-approved design systems, empowers designers to make\nreal-time adjustments, which fosters a collaborative environment where both\ndevelopers and designers can contribute to the visual aspects without stepping\non each other's toes. Ultimately, this unique class structure promotes retaining\ncreative control by providing flexibility and efficiency in the design process."}),"\n",(0,i.jsx)(n.h2,{id:"the-big-question",children:"The Big Question"}),"\n",(0,i.jsx)(n.p,{children:"And now for the big question you may have had for a while... \u201cWhy not just use\ninline styles?\u201d"}),"\n",(0,i.jsx)(n.p,{children:"While it may seem that using Continuum classes is akin to inline styles \u2014 since\nboth involve applying styles directly to elements \u2014 there are significant\nadvantages to using the custom class approach:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Firstly, our classes facilitate responsive design. Unlike inline styles,\nwhich do not support media queries or any other such CSS features, our\nclasses allow for the easy implementation of responsive utilities, enabling\nthe creation of fully adaptable interfaces."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Secondly, our classes can effectively manage various states such as hover\nand focus. Inline styles lack the capability to target these or any other\nstates, but Continuum classes provide state variants that simplify targetted\nstyling for varying user interactions."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Lastly, our classes allow for the use of custom helpers, like the ",(0,i.jsx)(n.code,{children:"@cc-grab"}),"\nat-rule, which extend the capabilities of standard CSS. These tailored\nhelpers enhance workflows and improve overall code quality by delivering\nspecific design needs that cannot be met when using inline styles alone."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, the following component is entirely responsive and features a\nbutton that incorporates hover and focus specific styles, all constructed only\nusing Continuum classes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="HTML"',children:'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="UTF-8" />\n        <meta\n            name="viewport"\n            content="width=device-width, initial-scale=1.0"\n        />\n        <script\n            defer\n            src="https://cdn.jsdelivr.net/npm/continuum-css@latest/dist/cdn.min.js"\n        ><\/script>\n        <style type="text/continuum-css">\n            #toggle:c319 ~ dialog {\n                d497: b102;\n            }\n        </style>\n    </head>\n    <body\n        class="f649=m091 f582=20px d497=f726 a058=c112 j649=c112 h609=100vh m276=0 p427=0 w968=100% b622=#E5E5F7 b657=r866(e688,f294,a141,10px,10px;#F7B267;#F7B267,50%;#000,50%) b595=10px,10px"\n    >\n        <input\n            type="checkbox"\n            aria-hidden="true"\n            id="toggle"\n            class="d497=n068"\n        />\n        <label\n            for="toggle"\n            class="b565=#F7B267 o825:h858=0.95 b565:f194=l900 c320=w097 p427=0.5em,1em b852=4px f673=900"\n            >Open Dialog</label\n        >\n        <dialog\n            class="a465=appear,350ms,e792,1 m592=500px b852=4px @k597(appear)0%[o825=0,t526=t548(-10px)]"\n        >\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n                nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n                sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n            <label\n                for="toggle"\n                class="b565=#F7B267 o825:h858=0.85 b565:f194=l900 c320=w097 p427=0.5em,1em b852=4px f673=900"\n                >Close Dialog</label\n            >\n        </dialog>\n    </body>\n</html>\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Ipsum Dialog",src:t(52402).A+"",width:"1280",height:"720"})}),"\n",(0,i.jsx)(n.p,{children:"In summary, Continuum classes not only enhance consistency and improve\nresponsiveness, but also streamline state-management and encourage developer\ncreativity; making them the superior choice for modern web development."}),"\n",(0,i.jsx)(n.p,{children:"That was a lot. But there's no better way to get a feel for what Continuum is\nand can do than by seeing it for yourself."}),"\n",(0,i.jsx)(n.h2,{id:"how-about-a-demo",children:"How About A Demo"}),"\n",(0,i.jsxs)(n.p,{children:["Let's begin by creating a blank HTML file named ",(0,i.jsx)(n.code,{children:"gradient-waves.html"})," anywhere\non your computer."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"gradient-waves.html\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next, use your favourite text-editor to type-in or just copy & paste the\nfollowing:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="HTML"',children:'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="UTF-8" />\n        <meta\n            name="viewport"\n            content="width=device-width, initial-scale=1.0"\n        />\n        <script\n            defer\n            src="https://cdn.jsdelivr.net/npm/continuum-css@latest/dist/cdn.min.js"\n        ><\/script>\n    </head>\n    <body\n        class="b565=l098(315deg;r050(101;0;94;1),3%;r050(60;132;206;1),38%;r050(48;238;226;1),68%;r050(255;25;25;1),98%) b595=400%,400% b399=f000 a465=gradient,15s,e185,i118"\n    >\n        \x3c!-- Gradient --\x3e\n        <div\n            class="@k597(gradient)[0%[b007=[0%,0%]],50%[b007=[100%,100%]],100%[b007=[0%,0%]] @k597(waves)[0%[t526=t708(0%)],25%[t526=t708(-25%)],50%[t526=t708(-50%)],75%[t526=t708(-25%)],100%[t526=t708(0%)]"\n        >\n            <div\n                class="b565=r616(255,255,255/25%) b852=1000%,1000%,0,0 p963=f000 w968=200% h609=12em t526=t242(0;0;0) l052=0 z190=-1 o825=0.7 b401=0em a465=waves,10s,-3s,l073,i118"\n            >\n                \x3c!-- Wave 1 --\x3e\n            </div>\n            <div\n                class="b565=r616(255,255,255/25%) b852=1000%,1000%,0,0 p963=f000 w968=200% h609=12em t526=t242(0;0;0) l052=0 z190=-1 o825=0.8 b401=-1.25em a465=waves,18s,l073,r760,i118"\n            >\n                \x3c!-- Wave 2 --\x3e\n            </div>\n            <div\n                class="b565=r616(255,255,255/25%) b852=1000%,1000%,0,0 p963=f000 w968=200% h609=12em t526=t242(0;0;0) l052=0 z190=-1 o825=0.9 b401=-2.5em a465=waves,20s,-1s,r760,i118"\n            >\n                \x3c!-- Wave 3 --\x3e\n            </div>\n        </div>\n    </body>\n</html>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, open ",(0,i.jsx)(n.code,{children:"gradient-waves.html"})," in a web browser of your choice."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Gradient Waves",src:t(10122).A+"",width:"1280",height:"720"})}),"\n",(0,i.jsx)(n.p,{children:"See the difference?"}),"\n",(0,i.jsx)(n.p,{children:"That's the beauty of Continuum! A limitless number of unreserved class-name\ncombinations at your fingertips, all enabling you to rapidly build modern\nwebsites without ever needing to leave your HTML."}),"\n",(0,i.jsx)(n.p,{children:'Now that you\'ve had a taste, ready for a harder demo? (i.e. "Demo Harder: Part\n2 - First Blood" \ud83e\uddd0)'}),"\n",(0,i.jsx)(n.h2,{id:"how-about-a-demo-the-sequel",children:"How About A Demo (The Sequel)"}),"\n",(0,i.jsxs)(n.p,{children:["Let's again begin by creating a blank HTML file, this time named\n",(0,i.jsx)(n.code,{children:"auth-forms.html"}),", anywhere on your computer."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"auth-forms.html\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next, using your favourite text-editor, type-in or just copy & paste the\nfollowing:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="HTML"',children:'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="UTF-8" />\n        <meta\n            name="viewport"\n            content="width=device-width, initial-scale=1.0"\n        />\n        <script\n            defer\n            src="https://cdn.jsdelivr.net/npm/continuum-css@latest/dist/cdn.min.js"\n        ><\/script>\n        <style type="text/continuum-css">\n            #checkbox:c319 ~ #sign-up-label {\n                t526: s179(0.6);\n            }\n            #checkbox:c319 ~ #login {\n                t526: t548(-500px);\n            }\n            #checkbox:c319 ~ #login-label {\n                p118: 20px;\n                t526: s179(1);\n            }\n        </style>\n    </head>\n    <body\n        class="m276=0 p427=0 d497=f726 j649=c112 a058=c112 m179=100vh f649=s217 b565=l098(t144,b401;#80213a;#bf3157;#ff4275)"\n    >\n        <div\n            class="w968=350px h609=500px b565=r054 o744=h007 b565=n601,c112/c205 b852=10px b915=5px,20px,50px,#000"\n        >\n            \x3c!-- Forms --\x3e\n            <input\n                type="checkbox"\n                aria-hidden="true"\n                id="checkbox"\n                class="d497=n068"\n            />\n            <div class="p963=r396 w968=100% h609=100%">\n                \x3c!-- Sign up --\x3e\n                <form>\n                    <label\n                        for="checkbox"\n                        aria-hidden="true"\n                        id="sign-up-label"\n                        class="f582=2.3em j649=c112 d497=f726 m276=60px f673=b613 c538=p459 t668=0.5s,e476 c320=#fff"\n                        >Sign up</label\n                    >\n                    <input\n                        required\n                        type="text"\n                        name="username"\n                        placeholder="Username"\n                        class="w968=60% h609=20px b565=#e0dede j649=c112 d497=f726 m276=20px,a793 p427=10px b423=n068 o696=n068 b852=5px"\n                    />\n                    <input\n                        required\n                        type="email"\n                        name="email"\n                        placeholder="Email"\n                        class="w968=60% h609=20px b565=#e0dede j649=c112 d497=f726 m276=20px,a793 p427=10px b423=n068 o696=n068 b852=5px"\n                    />\n                    <input\n                        required\n                        type="password"\n                        name="password"\n                        placeholder="Password"\n                        class="w968=60% h609=20px b565=#e0dede j649=c112 d497=f726 m276=20px,a793 p427=10px b423=n068 o696=n068 b852=5px"\n                    />\n                    <button\n                        class="w968=60% h609=40px m276=10px,a793 j649=c112 d497=b102 c320=#fff b565=#80213a f582=1em f673=b613 m594=20px o696=n068 b423=n068 b852=5px t668=0.2s,e792 c538=p459 b565:h858=#40101d"\n                    >\n                        Sign up\n                    </button>\n                </form>\n            </div>\n            <div\n                id="login"\n                class="h609=460px b565=#eee b852=10px/10px t526=t548(-180px) t668=0.5s,e476"\n            >\n                \x3c!-- Login --\x3e\n                <form>\n                    <label\n                        for="checkbox"\n                        aria-hidden="true"\n                        id="login-label"\n                        class="f582=2.3em j649=c112 d497=f726 m276=60px f673=b613 c538=p459 t668=0.5s,e476 c320=#80213a p118=10px t526=s179(0.6)"\n                        >Login</label\n                    >\n                    <input\n                        required\n                        type="email"\n                        name="email"\n                        placeholder="Email"\n                        class="w968=60% h609=20px b565=#e0dede j649=c112 d497=f726 m276=20px,a793 p427=10px b423=n068 o696=n068 b852=5px"\n                    />\n                    <input\n                        required\n                        type="password"\n                        name="password"\n                        placeholder="Password"\n                        class="w968=60% h609=20px b565=#e0dede j649=c112 d497=f726 m276=20px,a793 p427=10px b423=n068 o696=n068 b852=5px"\n                    />\n                    <button\n                        class="w968=60% h609=40px m276=10px,a793 j649=c112 d497=b102 c320=#fff b565=#80213a f582=1em f673=b613 m594=20px o696=n068 b423=n068 b852=5px t668=0.2s,e792 c538=p459 b565:h858=#40101d"\n                    >\n                        Login\n                    </button>\n                </form>\n            </div>\n        </div>\n    </body>\n</html>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, open ",(0,i.jsx)(n.code,{children:"auth-forms.html"})," in a web browser of your choice."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Auth Forms",src:t(26139).A+"",width:"1280",height:"720"})}),"\n",(0,i.jsx)(n.p,{children:"More to your liking?"}),"\n",(0,i.jsx)(n.p,{children:"As you can see, Continuum is not and aims to never be a constraint-based tool;\nlimiting your creativity to whatever features its creators arbitrarily decide to\ninclude and support in the latest version."}),"\n",(0,i.jsx)(n.p,{children:"We mean it when we say... All of CSS, all the time."}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"Don't mind constraint-based systems when it comes to designing UIs?"}),(0,i.jsxs)(n.p,{children:["Then watch this space! One such tool is currently being worked on by the creator\nof Continuum (under the codename ",(0,i.jsx)(n.em,{children:'"Goose"'})," *), and will soon be available for\nuse alongside or even instead of Continuum itself."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:'* "Goose" is the call-sign of Anthony Edwards\' character from the original\n"Top Gun" (1986) movie.'})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Continuum is designed to simplify development processes wherever it can."}),(0,i.jsxs)(n.p,{children:["One of the ways it accomplishes this is through the custom ",(0,i.jsx)(n.code,{children:"cc-grab"})," attribute,\nwhich allows developers to template their classes without the help of some\ncustom JavaScript."]}),(0,i.jsxs)(n.p,{children:["For example, to get the same result as seen in the example above, but without\nthe common ",(0,i.jsx)(n.code,{children:"<input>"})," tags' classes being repeated:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<label\n    ...\n    class="c320=#fff ..."\n    >Sign up</label\n>\n<div class="w968=60% ...">\n    <input\n        ...\n        placeholder="Username"\n        cc-grab\n    />\n    <input\n        ...\n        placeholder="Email"\n        cc-grab\n    />\n    <input\n        ...\n        placeholder="Password"\n        cc-grab\n    />\n</div>\n<button class="w968=60% ...">Sign up</button>\n'})}),(0,i.jsx)(n.p,{children:"Now at runtime, the inputs' parent element's classes will be grabbed and\nprepended to the inputs' own classes, before said parent is removed from the\nDOM."}),(0,i.jsxs)(n.p,{children:["Want to keep the parent element itself for whatever reason? Then use the\ncorresponding custom ",(0,i.jsx)(n.code,{children:"@cc-grab"})," at-rule. For example:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<label\n    ...\n    class="c320=#fff ... @cc-grab[w968=60%,...]"\n    >Sign up</label\n>\n<input\n    ...\n    placeholder="Username"\n    cc-grab\n/>\n<input\n    ...\n    placeholder="Email"\n    cc-grab\n/>\n<input\n    ...\n    placeholder="Password"\n    cc-grab\n/>\n<button class="w968=60% ...">Sign up</button>\n'})}),(0,i.jsxs)(n.p,{children:["This time, only classes that have been marked as grabbable via the use of\n",(0,i.jsx)(n.code,{children:"@cc-grab"})," will be grabbed (and also removed) from the inputs' parent element\nand prepended to the inputs' own classes, with said parent then still remaining\nin the DOM to function or style as intended."]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"Should you have any questions about or require further assistance with\nContinuum, please do not hesitate to reach out to any member of our support\nteam."}),(0,i.jsx)(n.p,{children:"Thank you for choosing our framework!"})]}),"\n",(0,i.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,i.jsxs)(n.p,{children:["You may choose to get familiar with some of the\n",(0,i.jsx)(n.a,{href:"/docs/configuration",children:"Configuration"})," options available to developers, or to dive\nstraight into exploring all of the ",(0,i.jsx)(n.a,{href:"/docs/concepts",children:"Concepts"})," that underpin\nContinuum."]}),"\n",(0,i.jsx)(n.p,{children:"Whatever you decide, you are more than equipped to start building stuff on your\nown."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},26139:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/auth-forms-122f14e5eaca28777f92119ad1756822.gif"},10122:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/gradient-waves-5cea86c38c73154b7007e63fc4f7a9aa.gif"},21962:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/gif;base64,R0lGODlhAAXQAgAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQAHgAAACwAAAAAAAXQAoddl3ldl3ldl3lclnlclnlclnlclnlclnlclnlclnlclnldl3lclnlclnlclnlclnlclnlclnlclnlclnldl3lclnlclnlclnlclnlclnlclnlclnlclnldl3lclnlclnlclnlclnlclnlclnlclnlclnldl3pdlnldlnldlnldlnldlnldlnldlnldlnldl3pdlnldlnldlnldlnldlnldlnldlnldlnldl3pdlnldlnldlnldlnldl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pdl3pemHtfmHxfmHxfmHxfmHxfmHxfmHxfmHxfmHxfmHxgmH1gmX1hmX1hmX5imn5imn9jmn9jm39jm39jm4Bkm4BknIBlnIFlnIFmnIFmnIFmnYJnnYJonoNpnoRqn4VroIVsoIZtoYduoohvoolvoolwo4lwo4pxo4pxpIpypItypItypItzpYxzpYx0pYx0po10po11po52p493p494qJB4qJF5qZF6qZJ7qpJ7qpN8qpN8q5R9q5R+rJR+rJV/rJWArZaEsJmHspyKtJ6NtaCPt6KRuKOSuaWTuqWUuqaUuqaUuqeVu6eVu6eVu6eVu6eWu6iWvKiXvKmYvaqZvquavqybv62cwK6dwK6ewa+fwrCgwrGhw7Kiw7KjxLOjxLOjxLOjxLSlxbWmxranx7eox7epx7ipyLiqyLmqyLmrybqrybqsybutyrytyrytyrytyrytyryuy72vzL6xzL+yzcC0zsG30MS708fB18zF2tDJ3NPM3tXO4NfS4trU5NzY5uDa5+Hd6ePe6eTe6uTf6uXf6+Xg6+bg6+bi7Ofj7ejl7unm7+rn7+vo8Ovp8Ozq8e7r8u7r8u/s8/Dt8/Du9PHv9PLw9fLw9fPx9vPy9vTz9/X1+ff3+vn6/Pv7/Pv7/fz9/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v4I/wCLCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnz6BDix5NurTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz59CjS59Ovbr169iza9/Ovbv37+DDi/8fT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26OGHIIYo4ogklmjiiSimqOKKLLbo4oswxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnkkkw26eSTUEYp5ZRUVmnllVhmqeWWXHbp5ZdghinmmGSWaeaZaKap5ppstunmm3DGKeecdNZp55145qnnnnz26eefgAYq6KCEFmrooYgmquiijDbq6KOQRirppJRWaumlmGaq6aacdurpp6CGKuqopJZq6qmopqrqqqy26uqrsMb/KuustNZq66245qrrrrz26uuvwAYr7LDEFmvsscgmq+yyzDbr7LPQRivttNRWa+212Gar7bbcduvtt+CGK+645JZr7rnopqvuuuy26+678MYr77z01mvvvfjmq+++/Pbr778AByzwwAQXbPDBCCes8MIMN+zwwxBHLPHEFFds8cUYZ6zxxhx37PHHIIcs8sgkl2zyySinrPLKLLfs8sswxyzzzDTXbPPNOOes88489+zzz0AHLfTQRBdt9NFIJ6300kw37fTTUEct9dRUV2311VhnrfXWXHft9ddghy322GSXbfbZaKet9tpst+3223DHLffcdNdt991456333nz3/+3334AHLvjghBdu+OGIJ6744ow37vjjkEcu+eSUV2755ZhnrvnmnHfu+eeghy766KSXbvrpqKeu+uqst+7667DHLvvstNdu++2456777rz37vvvwAcv/PDEF2/88cgnr/zyzDfv/PPQRy/99NRXb/312Gev/fbcd+/99+CHL/745Jdv/vnop6/++uy37/778Mcv//z012///fjnr//+/Pfv//8ADKAAB0jAAhrwgAhMoAIXyMAGOvCBEIygBCdIwQpa8IIYzKAGN8jBDnrwgyAMoQhH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"},52402:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ipsum-dialog-6ecc2964554f2f98e599ecb66908ee65.gif"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);