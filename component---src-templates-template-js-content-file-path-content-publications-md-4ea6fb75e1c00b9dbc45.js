"use strict";(self.webpackChunkgatsby_gitbook_boilerplate=self.webpackChunkgatsby_gitbook_boilerplate||[]).push([[26],{2608:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return E}});var a=n(5785),l=n(1151),r=n(7294);function i(e){const t=Object.assign({ul:"ul",li:"li",p:"p",a:"a"},(0,l.ah)(),e.components);return r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"/publications/articlesoriginaux"},"Articles originaux")),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"/publications/autres"},"Autres")),"\n"),"\n")}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)},o=n(1473),s=n(7943),m=n(7277),u=n(7208);const d=m.rc.forcedNavOrder;function p(e){const{data:{allMdx:t,mdx:l,site:{siteMetadata:{docsLocation:i}}},children:c}=e,m=n(5935).Z,p=t.edges.map((e=>{let{node:t}=e;return t.fields.slug})).filter((e=>"/"!==e)).sort().reduce(((e,t)=>{if(d.find((e=>e===t)))return{...e,[t]:[t]};let n=t.split("/")[1];return n&&d.find((e=>e===`/${n}`))?{...e,[`/${n}`]:[].concat((0,a.Z)(e[`/${n}`]),[t])}:{...e,items:[].concat((0,a.Z)(e.items),[t])}}),{items:[]}),E=d.reduce(((e,t)=>e.concat(p[t])),[]).concat(p.items).map((e=>{if(e){const{node:n}=t.edges.find((t=>{let{node:n}=t;return n.fields.slug===e}));return{title:n.fields.title,url:n.fields.slug}}}));return r.createElement(o.Ar,e,r.createElement("div",{className:"titleWrapper"},r.createElement(u.wh,null,l.fields.title),r.createElement(u.I8,{className:"mobileView",id:"githubModification-123",hidden:!0},i&&r.createElement(o.rU,{className:"gitBtn",to:`${i}/${l.parent.relativePath}`},r.createElement("img",{src:m,alt:"Github logo"})," Edit on GitHub"))),r.createElement(u.yh,null,c),r.createElement("div",{className:"addPaddTopBottom"},r.createElement(s.Z,{mdx:l,nav:E})))}function E(e){return r.createElement(p,e,r.createElement(c,e))}const f=e=>{const{data:{mdx:{fields:{slug:t}},site:{siteMetadata:{title:n,description:a}}}}=e;let l=m.ZP.siteMetadata.siteUrl;return l="/"!==m.ZP.pathPrefix?l+m.ZP.pathPrefix:l,l+=t,r.createElement(r.Fragment,null,r.createElement("title",null,n),r.createElement("meta",{name:"title",content:n}),r.createElement("meta",{name:"description",content:a}),r.createElement("meta",{property:"og:title",content:n}),r.createElement("meta",{property:"og:description",content:a}),r.createElement("meta",{property:"twitter:title",content:n}),r.createElement("meta",{property:"twitter:description",content:a}),r.createElement("link",{rel:"canonical",href:l}))}}}]);
//# sourceMappingURL=component---src-templates-template-js-content-file-path-content-publications-md-4ea6fb75e1c00b9dbc45.js.map