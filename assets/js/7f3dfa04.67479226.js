"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["51108"],{7609:function(e,t,o){o.d(t,{Z:()=>i});let i=o.p+"assets/images/profilo_blog_post_android_ios-695990a01bf8fa0ea8b6c2d26946cd94.png"},90842:function(e,t,o){o.d(t,{Z:()=>i});let i=o.p+"assets/images/profilo_blog_post_palette_website_color_picker-7fe21bbbee9aa484750e889471957135.png"},12816:function(e,t,o){o.d(t,{Z:()=>i});let i=o.p+"assets/images/profilo_blog_post_photoshop_color_picker-86628cde93ca147d5ed36f0e0dfa046b.png"},78334:function(e,t,o){o.d(t,{Z:()=>i});let i=o.p+"assets/images/profilo_blog_post_website_final-41123bbb4a337d3415d6a8f826362713.png"},78426:function(e,t,o){o.d(t,{Z:()=>i});let i=o.p+"assets/images/profilo_blog_post_website_final_docs-4efd3319b5bc1a33a4dde7dd785cb6a5.png"},76770:function(e,t,o){o.d(t,{Z:()=>i});let i=o.p+"assets/images/profilo_blog_post_website_initial-2b55252c641e418f02b8bb6a5234b219.png"},53426:function(e,t,o){o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var i=o(80410),n=o(85893),s=o(80980);let r={title:"How I Converted Profilo to Docusaurus in Under 2 Hours",authors:["abernathyca"],tags:["profilo","adoption"]},a=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Overview of Steps Taken",id:"overview-of-steps-taken",level:2},{value:"Design",id:"design",level:2},{value:"Final Thoughts",id:"final-thoughts",level:2}];function h(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"\u201CJoel and I were discussing having a website and how it would have been great to launch with it. So I challenged myself to add Docusaurus support. It took just over an hour and a half. I'm going to send you a PR with the addition so you can take a look and see if you like it. Your workflow for adding docs wouldn't be much different from editing those Markdown files.\u201D"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"\u2014 Note sent to the Profilo team"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This is the story of the rather short journey it took to create the ",(0,n.jsx)(t.a,{href:"https://facebookincubator.github.io/profilo/",children:"Profilo"})," website using Docusaurus."]}),"\n",(0,n.jsxs)(t.p,{children:["Profilo, an Android library for collecting performance traces from production, ",(0,n.jsx)(t.a,{href:"https://code.fb.com/android/profilo-understanding-app-performance-in-the-wild/",children:"was announced"})," earlier this year. The project was ",(0,n.jsx)(t.a,{href:"https://github.com/facebookincubator/profilo/tree/802042f90f990998a272387e371b893af52465b8",children:"published on GitHub"})," with a less than ",(0,n.jsx)(t.a,{href:"https://github.com/facebookincubator/profilo/tree/802042f90f990998a272387e371b893af52465b8/docs",children:"a handful or Markdown files"})," to describe its functionality and no website to showcase any branding and highlight the logo. The task at hand was to turn these existing docs and logo into a website."]}),"\n",(0,n.jsx)(t.p,{children:"In general, when creating a website with Docusaurus you do the following:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Generate a template website using Docusaurus scripts."}),"\n",(0,n.jsx)(t.li,{children:"Customize the generated template files for your desired site colors and your project configuration (ex: website and GitHub links)."}),"\n",(0,n.jsxs)(t.li,{children:["Create the website content:","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Add your docs and any supporting assets."}),"\n",(0,n.jsx)(t.li,{children:"Customize the default landing page provided by Docusaurus to suit your needs."}),"\n",(0,n.jsx)(t.li,{children:"Configure the default site navigation file."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Publish the website and set up how it will be published for future changes."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Given I had pre-existing Markdown files, I didn't have to generate the core content but simply make sure that Docusaurus could process the files by adding the expected metadata to them. Most of the work would therefore consist of customizing the defaults provided by Docusaurus."}),"\n",(0,n.jsx)(t.h2,{id:"overview-of-steps-taken",children:"Overview of Steps Taken"}),"\n",(0,n.jsx)(t.p,{children:"Here's an overview of the steps taken to convert to a website. I'll discuss some of the design aspects in a later section."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Design and colors:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Got all the desired logo formats from designer. I had to create the ",(0,n.jsx)(t.em,{children:".favicon"})," one."]}),"\n",(0,n.jsxs)(t.li,{children:["Worked out some passable primary and secondary website colors using the ",(0,n.jsx)(t.a,{href:"http://paletton.com/",children:"http://paletton.com/"})," tools - very handy!"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Initial website setup:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Forked the ",(0,n.jsx)(t.a,{href:"https://github.com/facebookincubator/profilo/",children:"Profilo project"})," on GitHub and created a local clone of the fork to set up the website."]}),"\n",(0,n.jsxs)(t.li,{children:["Created the initial Docusaurus website using the ",(0,n.jsx)(t.a,{href:"https://v1.docusaurus.io/docs/en/installation.html",children:"installation instructions"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Deleted the ",(0,n.jsx)(t.code,{children:"docs-examples-from-docusaurus"})," and ",(0,n.jsx)(t.code,{children:"website/blog-examples-from-docusaurus"})," folders as these would not be needed. Profilo had existing docs we could use and there was no need for blogs at this time."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Content creation:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Added metadata to the existing Markdown files found in the ",(0,n.jsx)(t.code,{children:"docs"})," folder, for example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-md",children:"---\nid: architecture\ntitle: Architecture\nsidebar_label: Architecture\n---\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Added the logo assets to the ",(0,n.jsx)(t.code,{children:"website/static/img"})," folder."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Modified ",(0,n.jsx)(t.code,{children:"website/pages/en/index.js"}),", the landing page, to highlight Profilo features."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Modified ",(0,n.jsx)(t.code,{children:"website/core/Footer.js"}),", the footer, to simplify it for Profilo."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Edited ",(0,n.jsx)(t.code,{children:"website/siteConfig.js"})," (website configuration file) to specify the previously chosen primary and secondary colors."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Modified ",(0,n.jsx)(t.code,{children:"website/sidebars.json"})," that specifies the sidebar navigation. Listed all the docs and customized it based on the metadata added to the Markdown files."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Edited the website configuration file to specify the GitHub properties, logo images, header links, and the website link."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Tested the website locally throughout this phase. (I ran ",(0,n.jsx)(t.code,{children:"yarn start"})," from the ",(0,n.jsx)(t.code,{children:"website"})," folder to start the server.)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Feedback and review changes:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Sent a ",(0,n.jsx)(t.a,{href:"https://github.com/facebookincubator/profilo/pull/6",children:"pull request"})," to the project."]}),"\n",(0,n.jsx)(t.li,{children:"Updated the colors after the designer rightly gasped at the ones I had chosen (IANAD)."}),"\n",(0,n.jsx)(t.li,{children:"Updated the colors and updated the PR."}),"\n",(0,n.jsxs)(t.li,{children:["The PR was then accepted and ",(0,n.jsx)(t.a,{href:"https://github.com/facebookincubator/profilo/commit/6ad033aaf5a7d54e6d842f45a5bccd051a8e45ad",children:"merged"}),". Yay!"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Website publishing:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Pushed the first website version by running the Docusaurus publish script from the command line:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"USE_SSH=true \\\n  GIT_USER=caabernathy \\\n  CURRENT_BRANCH=master \\\n  yarn run publish-gh-pages\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Configured CircleCI using the ",(0,n.jsx)(t.a,{href:"https://v1.docusaurus.io/docs/en/publishing.html#automating-deployments-using-continuous-integration",children:"provided Docusaurus instructions"}),". There were 2 PRs for this, ",(0,n.jsx)(t.a,{href:"https://github.com/facebookincubator/profilo/pull/8",children:"the first"}),"for the initial config and ",(0,n.jsx)(t.a,{href:"https://github.com/facebookincubator/profilo/pull/12",children:"the second"})," to make sure CircleCI only triggered for changes in the master branch (thanks Joel Marcey!)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The final website was published on ",(0,n.jsx)(t.a,{href:"https://facebookincubator.github.io/profilo/",children:"https://facebookincubator.github.io/profilo/"}),". It had taken 1.5 hours to get to the initial PR stage and another half an hour or so to respond to review feedback and publish the website."]}),"\n",(0,n.jsx)(t.h2,{id:"design",children:"Design"}),"\n",(0,n.jsx)(t.p,{children:"Here's what the initial website looked like when the first pull request was sent out:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"The website&#39;s front page, with a quite bright and saturated red color as the primary color, closely resembling the Profilo logo color, making the logo unrecognizable in the navbar",src:o(76770).Z+"",width:"1090",height:"919"})}),"\n",(0,n.jsx)(t.p,{children:"Most of the time in the content creation was spent picking colors that worked reasonably well with the given logo. These colors were a good jumping off point for designer feedback. I used Photoshop to sample various portions of the logo."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Picking colors in Photoshop, with the Profilo logo and the main working area in the background and a color picker dialog in the foreground, selected to a red shade",src:o(12816).Z+"",width:"1090",height:"624"})}),"\n",(0,n.jsxs)(t.p,{children:["I then took the RGB representation of the color and set it as the baseline color on ",(0,n.jsx)(t.a,{href:"http://paletton.com/",children:"Paletton"}),". The website then gave me various color options to try on the website by editing the Docusaurus website configuration file."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Using Paletton to generate a full palette from the red shade selected. There&#39;s a color wheel showing all hues on the left, and a square showing various shades of red on the right.",src:o(90842).Z+"",width:"1012",height:"632"})}),"\n",(0,n.jsx)(t.p,{children:"The selected primary and secondary colors were a good jumping off point for designer feedback."}),"\n",(0,n.jsx)(t.p,{children:"There were also modifications made to the default website generated by Docusaurus. These changes were mainly around simplifying the footer and creating a customized landing page for Profilo that listed the project's features."}),"\n",(0,n.jsx)(t.p,{children:"Here's what the final website looked like:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"The website&#39;s front page, with a much darker red color as the primary color, making both the logo and the primary-colored title text clearly legible.",src:o(78334).Z+"",width:"1141",height:"865"})}),"\n",(0,n.jsx)(t.p,{children:"This is an example page showing the core content, in this case the Getting Started page:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"A doc page with the sidebar on the left quarter of the screen and the main content occupying the rest. Some text is using the primary color and the main body uses multiple kinds of typesetting including bold, list, and code",src:o(78426).Z+"",width:"1221",height:"733"})}),"\n",(0,n.jsxs)(t.p,{children:["This also shows the sidebar structure that was set up through editing ",(0,n.jsx)(t.code,{children:"website/sidebars.json"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Lastly, I didn't have to worry about handling responsive design. You get this out of the box with Docusaurus!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Mobile screenshots of the front page and sample doc page. The layout is automatically adjusted to make it appear more natural. The doc sidebar is hidden behind a button.",src:o(7609).Z+"",width:"1064",height:"940"})}),"\n",(0,n.jsx)(t.h2,{id:"final-thoughts",children:"Final Thoughts"}),"\n",(0,n.jsx)(t.p,{children:"The Profilo engineers were happy to see that they didn't have to change their workflow to update existing content. They were able to continue working with Markdown files. This will still be true in the future if new docs are added, although there may be some config changes needed if the sidebar navigation needs to be updated."}),"\n",(0,n.jsx)(t.p,{children:"The infrastructure provided by Docusaurus made it easy to convert Markdown files into a working website. Even though the project had only three docs, this gave Profilo a more professional look. So, it was well worth the short time investment to get it done."})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},80980:function(e,t,o){o.d(t,{Z:()=>a,a:()=>r});var i=o(67294);let n={},s=i.createContext(n);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}},80410:function(e){e.exports=JSON.parse('{"permalink":"/blog/2018/04/30/How-I-Converted-Profilo-To-Docusaurus","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2018/04-30-How-I-Converted-Profilo-To-Docusaurus.mdx","source":"@site/blog/2018/04-30-How-I-Converted-Profilo-To-Docusaurus.mdx","title":"How I Converted Profilo to Docusaurus in Under 2 Hours","description":"\u201CJoel and I were discussing having a website and how it would have been great to launch with it. So I challenged myself to add Docusaurus support. It took just over an hour and a half. I\'m going to send you a PR with the addition so you can take a look and see if you like it. Your workflow for adding docs wouldn\'t be much different from editing those Markdown files.\u201D","date":"2018-04-30T00:00:00.000Z","tags":[{"inline":false,"label":"Profilo","permalink":"/blog/tags/profilo"},{"inline":false,"label":"Adoption","permalink":"/blog/tags/adoption"}],"readingTime":5.95,"hasTruncateMarker":true,"authors":[{"name":"Christine Abernathy","url":"http://x.com/abernathyca","socials":{"x":"https://x.com/abernathyca"},"imageURL":"https://github.com/caabernathy.png","key":"abernathyca","page":null}],"frontMatter":{"title":"How I Converted Profilo to Docusaurus in Under 2 Hours","authors":["abernathyca"],"tags":["profilo","adoption"]},"unlisted":false,"lastUpdatedAt":1742657049000,"lastUpdatedBy":"espent74","prevItem":{"title":"Towards Docusaurus 2","permalink":"/blog/2018/09/11/Towards-Docusaurus-2"},"nextItem":{"title":"Introducing Docusaurus","permalink":"/blog/2017/12/14/introducing-docusaurus"}}')}}]);