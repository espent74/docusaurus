"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["27749"],{71602:function(e,n,r){r.r(n),r.d(n,{frontMatter:()=>u,default:()=>f,contentTitle:()=>c,assets:()=>d,toc:()=>p,metadata:()=>t});var t=JSON.parse('{"id":"api/plugins/plugin-rsdoctor","title":"\uD83D\uDCE6 plugin-rsdoctor","description":"A Rsdoctor plugin can help you troubleshoot the bundling phase of your Docusaurus site, supporting both Webpack and Rspack.","source":"@site/docs/api/plugins/plugin-rsdoctor.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-rsdoctor","permalink":"/docs/api/plugins/@docusaurus/plugin-rsdoctor","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-rsdoctor.mdx","tags":[],"version":"current","lastUpdatedBy":"espent74","lastUpdatedAt":1742657049000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7,"slug":"/api/plugins/@docusaurus/plugin-rsdoctor"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-google-gtag","permalink":"/docs/api/plugins/@docusaurus/plugin-google-gtag"},"next":{"title":"\uD83D\uDCE6 plugin-svgr","permalink":"/docs/api/plugins/@docusaurus/plugin-svgr"}}'),o=r(85893),a=r(80980),l=r(15398),s=r(58636),i=r(32240);let u={sidebar_position:7,slug:"/api/plugins/@docusaurus/plugin-rsdoctor"},c="\uD83D\uDCE6 plugin-rsdoctor",d={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"-plugin-rsdoctor",children:"\uD83D\uDCE6 plugin-rsdoctor"})}),"\n","\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.a,{href:"https://rsdoctor.dev/",children:"Rsdoctor"})," plugin can help you troubleshoot the bundling phase of your Docusaurus site, supporting both Webpack and Rspack."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Use it to figure out which plugin or loader is slowing down the bundler, and focus your efforts on optimizing the bottleneck."})}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,o.jsx)(s.Z,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-rsdoctor\n"})})}),(0,o.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-rsdoctor\n"})})}),(0,o.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-rsdoctor\n"})})}),(0,o.jsx)(s.Z,{value:"bun",label:"Bun",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"bun add @docusaurus/plugin-rsdoctor\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,o.jsx)(i.Z,{children:(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Default"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"rsdoctorOptions"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"object"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"{}"})}),(0,o.jsxs)(n.td,{children:["The ",(0,o.jsx)(n.a,{href:"https://rsdoctor.dev/config/options/options",children:"Rsdoctor bundler plugin options"}),", forwarded as is"]})]})})]})}),"\n",(0,o.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,o.jsx)(n.p,{children:"You can configure this plugin through plugin options."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      'rsdoctor',\n      {\n        rsdoctorOptions: {\n          mode: 'lite',\n        },\n      },\n    ],\n  ],\n};\n"})})]})}function f(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},58636:function(e,n,r){r.d(n,{Z:()=>a});var t=r(85893);r(67294);var o=r(90496);function a(e){let{children:n,hidden:r,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.Z)("tabItem_pnkT",a),hidden:r,children:n})}},15398:function(e,n,r){r.d(n,{Z:()=>x});var t=r(85893),o=r(67294),a=r(90496),l=r(54947),s=r(3620),i=r(844),u=r(97486),c=r(32263),d=r(16971);function p(e){return o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||o.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var f=r(71607);function g(e){let{className:n,block:r,selectedValue:o,selectValue:s,tabValues:i}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let n=e.currentTarget,r=i[u.indexOf(n)].value;r!==o&&(c(n),s(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:i.map(e=>{let{value:n,label:r,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...l,className:(0,a.Z)("tabs__item","tabItem_AQgk",l?.className,{"tabs__item--active":o===n}),children:r??n},n)})})}function m(e){let{lazy:n,children:r,selectedValue:l}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===l);return e?(0,o.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,a=function(e){let{values:n,children:r}=e;return(0,o.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[l,f]=(0,o.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:a})),[g,m]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(a),(0,o.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})},[a,t])]}({queryString:r,groupId:t}),[b,x]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,a]=(0,d.Nk)(r);return[t,(0,o.useCallback)(e=>{r&&a.set(e)},[r,a])]}({groupId:t}),j=(()=>{let e=g??b;return h({value:e,tabValues:a})?e:null})();return(0,i.Z)(()=>{j&&f(j)},[j]),{selectedValue:l,selectValue:(0,o.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),m(e),x(e)},[m,x,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList_Qoir"),children:[(0,t.jsx)(g,{...n,...e}),(0,t.jsx)(m,{...n,...e})]})}function x(e){let n=(0,f.Z)();return(0,t.jsx)(b,{...e,children:p(e.children)},String(n))}},32240:function(e,n,r){r.d(n,{Z:()=>i});var t=r(85893),o=r(67294),a=r(96700),l=r(3620);let s=o.forwardRef(function(e,n){let{name:r,children:s}=e,i=function(e){let n=e;for(;(0,o.isValidElement)(n);)[n]=o.Children.toArray(n.props.children);if("string"!=typeof n)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return n}(s),u=r?`${r}-${i}`:i,c=`#${u}`,d=(0,l.k6)();return(0,a.Z)().collectAnchor(u),(0,t.jsx)("tr",{id:u,tabIndex:0,ref:d.location.hash===c?n:void 0,onClick:e=>{let n="TD"===e.target.tagName.toUpperCase(),r=!!window.getSelection()?.toString();n&&!r&&d.push(c)},onKeyDown:e=>{"Enter"===e.key&&d.push(c)},children:s.props.children})});function i(e){let{children:n,name:r}=e;if("table"!==n.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[a,l]=o.Children.toArray(n.props.children),i=(0,o.useRef)(null);(0,o.useEffect)(()=>{i.current?.focus()},[i]);let u=o.Children.map(l.props.children,e=>(0,t.jsx)(s,{name:r,ref:i,children:e}));return(0,t.jsxs)("table",{className:"apiTable_e8hp",children:[a,(0,t.jsx)("tbody",{children:u})]})}},80980:function(e,n,r){r.d(n,{Z:()=>s,a:()=>l});var t=r(67294);let o={},a=t.createContext(o);function l(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);