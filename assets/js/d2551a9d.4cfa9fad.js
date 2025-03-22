"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["78417"],{77092:function(e,n,t){t.r(n),t.d(n,{frontMatter:()=>o,default:()=>h,contentTitle:()=>a,assets:()=>d,toc:()=>l,metadata:()=>s});var s=JSON.parse('{"id":"migration/v2/migration-translated-sites","title":"Translated sites","description":"This page explains how migrate a translated Docusaurus v1 site to Docusaurus v2.","source":"@site/docs/migration/v2/migration-translated-sites.mdx","sourceDirName":"migration/v2","slug":"/migration/v2/translated-sites","permalink":"/docs/migration/v2/translated-sites","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/v2/migration-translated-sites.mdx","tags":[],"version":"current","lastUpdatedBy":"espent74","lastUpdatedAt":1742657049000,"frontMatter":{"slug":"/migration/v2/translated-sites"},"sidebar":"docs","previous":{"title":"Versioned sites","permalink":"/docs/migration/v2/versioned-sites"}}'),i=t(85893),r=t(80980);let o={slug:"/migration/v2/translated-sites"},a="Translated sites",d={},l=[{value:"i18n differences",id:"i18n-differences",level:2},{value:"Different filesystem paths",id:"different-filesystem-paths",level:3},{value:"Updated translation APIs",id:"updated-translation-apis",level:3},{value:"Stricter Markdown parser",id:"stricter-markdown-parser",level:3},{value:"Migration strategies",id:"migration-strategies",level:2},{value:"Create a new Crowdin project",id:"create-a-new-crowdin-project",level:3},{value:"Use the existing Crowdin project",id:"use-the-existing-crowdin-project",level:3},{value:"Use Git instead of Crowdin",id:"use-git-instead-of-crowdin",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"translated-sites",children:"Translated sites"})}),"\n",(0,i.jsx)(n.p,{children:"This page explains how migrate a translated Docusaurus v1 site to Docusaurus v2."}),"\n",(0,i.jsx)(n.h2,{id:"i18n-differences",children:"i18n differences"}),"\n",(0,i.jsx)(n.p,{children:"Docusaurus v2 i18n is conceptually quite similar to Docusaurus v1 i18n with a few differences."}),"\n",(0,i.jsx)(n.p,{children:"It is not tightly coupled to Crowdin, and you can use Git or another SaaS instead."}),"\n",(0,i.jsx)(n.h3,{id:"different-filesystem-paths",children:"Different filesystem paths"}),"\n",(0,i.jsxs)(n.p,{children:["On Docusaurus v2, localized content is generally found at ",(0,i.jsx)(n.code,{children:"website/i18n/[locale]"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Docusaurus v2 is modular based on a plugin system, and each plugin is responsible to manage its own translations."}),"\n",(0,i.jsxs)(n.p,{children:["Each plugin has its own i18n subfolder, like: ",(0,i.jsx)(n.code,{children:"website/i18n/fr/docusaurus-plugin-content-blog"})]}),"\n",(0,i.jsx)(n.h3,{id:"updated-translation-apis",children:"Updated translation APIs"}),"\n",(0,i.jsxs)(n.p,{children:["With Docusaurus v1, you translate your pages with ",(0,i.jsx)(n.code,{children:"<translate>"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const translate = require('../../server/translate.js').translate;\n\n<h2>\n  <translate desc=\"the header description\">\n    This header will be translated\n  </translate>\n</h2>;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["On Docusaurus v2, you translate your pages with ",(0,i.jsx)(n.code,{children:"<Translate>"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'import Translate from \'@docusaurus/Translate\';\n\n<h2>\n  <Translate id="header.translation.id" description="the header description">\n    This header will be translated\n  </Translate>\n</h2>;\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"write-translations"})," CLI still works to extract translations from your code."]}),(0,i.jsxs)(n.p,{children:["The code translations are now added to ",(0,i.jsx)(n.code,{children:"i18n/[locale]/code.json"})," using Chrome i18n JSON format."]})]}),"\n",(0,i.jsx)(n.h3,{id:"stricter-markdown-parser",children:"Stricter Markdown parser"}),"\n",(0,i.jsxs)(n.p,{children:["Docusaurus v2 is using ",(0,i.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"})," to parse Markdown files."]}),"\n",(0,i.jsx)(n.p,{children:"MDX compiles Markdown files to React components, is stricter than the Docusaurus v1 parser, and will make your build fail on error instead of rendering some bad content."}),"\n",(0,i.jsx)(n.p,{children:"Also, the HTML elements must be replaced by JSX elements."}),"\n",(0,i.jsx)(n.p,{children:"This is particularly important for i18n because if your translations are not good on Crowdin and use invalid Markup, your v2 translated site might fail to build: you may need to do some translation cleanup to fix the errors."}),"\n",(0,i.jsx)(n.h2,{id:"migration-strategies",children:"Migration strategies"}),"\n",(0,i.jsxs)(n.p,{children:["This section will help you figure out how to ",(0,i.jsx)(n.strong,{children:"keep your existing v1 translations after you migrate to v2"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["There are ",(0,i.jsx)(n.strong,{children:"multiple possible strategies"})," to migrate a Docusaurus v1 site using Crowdin, with different tradeoffs."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"This documentation is a best-effort to help you migrate, please help us improve it if you find a better way!"})}),"\n",(0,i.jsx)(n.p,{children:"Before all, we recommend to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Migrate your v1 Docusaurus site to v2 without the translations"}),"\n",(0,i.jsxs)(n.li,{children:["Get familiar with the ",(0,i.jsx)(n.a,{href:"/docs/i18n/introduction",children:"new i18n system of Docusaurus v2"})," an"]}),"\n",(0,i.jsxs)(n.li,{children:["Make Crowdin work for your v2 site, using a new and untranslated Crowdin project and the ",(0,i.jsx)(n.a,{href:"/docs/i18n/crowdin",children:"Crowdin tutorial"})]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"Don't try to migrate without understanding both Crowdin and Docusaurus v2 i18n."})}),"\n",(0,i.jsx)(n.h3,{id:"create-a-new-crowdin-project",children:"Create a new Crowdin project"}),"\n",(0,i.jsxs)(n.p,{children:["To avoid any ",(0,i.jsx)(n.strong,{children:"risk of breaking your v1 site in production"}),", one possible strategy is to duplicate the original v1 Crowdin project."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["This strategy was used to ",(0,i.jsx)(n.a,{href:"https://jestjs.io/blog/2021/03/09/jest-website-upgrade",children:"upgrade the Jest website"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:'Unfortunately, Crowdin does not have any "Duplicate/clone Project" feature, which makes things complicated.'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Download the translation memory of your original project in ",(0,i.jsx)(n.code,{children:".tmx"})," format (",(0,i.jsx)(n.code,{children:"https://crowdin.com/project/<ORIGINAL_PROJECT>/settings#tm"})," > ",(0,i.jsx)(n.code,{children:"View Records"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Upload the translation memory to your new project (",(0,i.jsx)(n.code,{children:"https://crowdin.com/project/<NEW_PROJECT>/settings#tm"})," > ",(0,i.jsx)(n.code,{children:"View Records"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Reconfigure ",(0,i.jsx)(n.code,{children:"crowdin.yml"})," for Docusaurus v2 according to the i18n docs"]}),"\n",(0,i.jsx)(n.li,{children:"Upload the Docusaurus v2 source files with the Crowdin CLI to the new project"}),"\n",(0,i.jsxs)(n.li,{children:["Mark sensitive strings like ",(0,i.jsx)(n.code,{children:"id"})," or ",(0,i.jsx)(n.code,{children:"slug"}),' as "hidden string" on Crowdin']}),"\n",(0,i.jsxs)(n.li,{children:['On the "Translations" tab, click on "Pre-Translation > via TM" (',(0,i.jsx)(n.code,{children:"https://crowdin.com/project/<NEW_PROJECT>/settings#translations"}),")"]}),"\n",(0,i.jsx)(n.li,{children:'Try first with "100% match" (more content will be translated than "Perfect"), and pre-translate your sources'}),"\n",(0,i.jsx)(n.li,{children:"Download the Crowdin translations locally"}),"\n",(0,i.jsx)(n.li,{children:"Try to run/build your site and see if there are any errors"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You will likely have errors on your first-try: the pre-translation might try to translate things that it should not be translated (front matter, admonition, code blocks...), and the translated MD files might be invalid for the MDX parser."}),"\n",(0,i.jsxs)(n.p,{children:["You will have to fix all the errors until your site builds. You can do that by modifying the translated MD files locally, and fix your site for one locale at a time using ",(0,i.jsx)(n.code,{children:"docusaurus build --locale fr"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"There is no ultimate guide we could write to fix these errors, but common errors are due to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Not marking enough strings as "hidden strings" in Crowdin, leading to pre-translation trying to translate these strings.'}),"\n",(0,i.jsx)(n.li,{children:"Having bad v1 translations, leading to invalid markup in v2: bad HTML elements inside translations and unclosed tags"}),"\n",(0,i.jsxs)(n.li,{children:["Anything rejected by the MDX parser, like using HTML elements instead of JSX elements (use the ",(0,i.jsx)(n.a,{href:"https://mdxjs.com/playground/",children:"MDX playground"})," for debugging)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'You might want to repeat this pre-translation process, eventually trying the "Perfect" option and limiting pre-translation only some languages/files.'}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.a,{href:"/docs/i18n/crowdin#mdx-solutions",children:(0,i.jsx)(n.code,{children:"mdx-code-block"})})," around problematic Markdown elements: Crowdin is less likely mess things up with code blocks."]})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"You will likely notice that some things were translated on your old project, but are now untranslated in your new project."}),(0,i.jsx)(n.p,{children:"The Crowdin Markdown parser is evolving other time and each Crowdin project has a different parser version, which can lead to pre-translation not being able to pre-translate all the strings."}),(0,i.jsx)(n.p,{children:"This parser version is undocumented, and you will have to ask the Crowdin support to know your project's parser version and fix one specific version."}),(0,i.jsx)(n.p,{children:"Using the same CLI version and parser version across the 2 Crowdin projects might give better results."})]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:'Crowdin has an "upload translations" feature, but in our experience it does not give very good results for Markdown'})}),"\n",(0,i.jsx)(n.h3,{id:"use-the-existing-crowdin-project",children:"Use the existing Crowdin project"}),"\n",(0,i.jsx)(n.p,{children:"If you don't mind modifying your existing Crowdin project and risking to mess things up, it may be possible to use the Crowdin branch system."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"This workflow has not been tested in practice, please report us how good it is."})}),"\n",(0,i.jsx)(n.p,{children:"This way, you wouldn't need to create a new Crowdin project, transfer the translation memory, apply pre-translations, and try to fix the pre-translations errors."}),"\n",(0,i.jsx)(n.p,{children:"You could create a Crowdin branch for Docusaurus v2, where you upload the v2 sources, and merge the Crowdin branch to main once ready."}),"\n",(0,i.jsx)(n.h3,{id:"use-git-instead-of-crowdin",children:"Use Git instead of Crowdin"}),"\n",(0,i.jsx)(n.p,{children:"It is possible to migrate away of Crowdin, and add the translation files to Git instead."}),"\n",(0,i.jsx)(n.p,{children:"Use the Crowdin CLI to download the v1 translated files, and put these translated files at the correct Docusaurus v2 filesystem location."})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},80980:function(e,n,t){t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);