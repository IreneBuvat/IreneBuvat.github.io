"use strict";(self.webpackChunkgatsby_gitbook_boilerplate=self.webpackChunkgatsby_gitbook_boilerplate||[]).push([[790],{5489:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var a=n(5785),r=n(1151),l=n(7294);function i(e){const t=Object.assign({ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components);return l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"conferences/diaporamas"},"Diaporamas")),"\n")}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)},o=n(1473),s=n(7943),m=n(7277),d=n(7208);const u=m.rc.forcedNavOrder;function p(e){const{data:{allMdx:t,mdx:r,site:{siteMetadata:{docsLocation:i}}},children:c}=e;console.log("PostTemplate "+r.fields.title);const m=n(5935).Z,p=t.edges.map((e=>{let{node:t}=e;return t.fields.slug})).filter((e=>"/"!==e)).sort().reduce(((e,t)=>{if(u.find((e=>e===t)))return{...e,[t]:[t]};let n=t.split("/")[1];return n&&u.find((e=>e===`/${n}`))?{...e,[`/${n}`]:[].concat((0,a.Z)(e[`/${n}`]),[t])}:{...e,items:[].concat((0,a.Z)(e.items),[t])}}),{items:[]}),f=u.reduce(((e,t)=>e.concat(p[t])),[]).concat(p.items).map((e=>{if(e){const{node:n}=t.edges.find((t=>{let{node:n}=t;return n.fields.slug===e}));return{title:n.fields.title,url:n.fields.slug}}}));return l.createElement(o.Ar,e,l.createElement("div",{className:"titleWrapper"},l.createElement(d.wh,null,r.fields.title),l.createElement(d.I8,{className:"mobileView",id:"githubModification-123",hidden:!0},i&&l.createElement(o.rU,{className:"gitBtn",to:`${i}/${r.parent.relativePath}`},l.createElement("img",{src:m,alt:"Github logo"})," Edit on GitHub"))),l.createElement(d.yh,null,c),l.createElement("div",{className:"addPaddTopBottom"},l.createElement(s.Z,{mdx:r,nav:f})))}function f(e){return l.createElement(p,e,l.createElement(c,e))}const E=e=>{const{data:{mdx:{fields:{slug:t}},site:{siteMetadata:{title:n,description:a}}}}=e;let r=m.ZP.siteMetadata.siteUrl;return r="/"!==m.ZP.pathPrefix?r+m.ZP.pathPrefix:r,r+=t,l.createElement(l.Fragment,null,l.createElement("title",null,n),l.createElement("meta",{name:"title",content:n}),l.createElement("meta",{name:"description",content:a}),l.createElement("meta",{property:"og:title",content:n}),l.createElement("meta",{property:"og:description",content:a}),l.createElement("meta",{property:"twitter:title",content:n}),l.createElement("meta",{property:"twitter:description",content:a}),l.createElement("link",{rel:"canonical",href:r}))}}}]);
//# sourceMappingURL=component---src-templates-template-js-content-file-path-content-conferences-md-f755190721976eebe8fa.js.map