"use strict";(self.webpackChunkwindup_website=self.webpackChunkwindup_website||[]).push([[744],{5677:function(e,r,t){t.d(r,{Z:function(){return m}});var a=t(7294),n=t(1597);function l(){return l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=(0,a.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,s=e.size,c=void 0===s?24:s,i=o(e,["color","size"]);return a.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),a.createElement("circle",{cx:"12",cy:"12",r:"10"}),a.createElement("polyline",{points:"12 8 8 12 12 16"}),a.createElement("line",{x1:"16",y1:"12",x2:"8",y2:"12"}))}));s.displayName="ArrowLeftCircle";var c=s,i=t(1857),m=function(e){var r=e.pageContext,t=r.previousPagePath,l=r.nextPagePath,o=r.humanPageNumber,s=r.numberOfPages,m="px-3 flex items-center space-x-3 py-2 border-2 border-base-400 rounded hover:border-base-500 focus:ring-2 focus:ring-base-500 font-medium",d="inline h-5 w-5";return a.createElement("nav",{className:"flex justify-between my-8 items-center"},s>1&&a.createElement("div",{className:"font-medium"},"Page ",o," of ",s),a.createElement("div",{className:"flex space-x-3"},t&&a.createElement(n.Link,{to:t+"/",rel:"prev",className:m},a.createElement(c,{"aria-hidden":!0,className:d}),a.createElement("div",{className:"flex space-x-1"},a.createElement("span",null,"Previous"),a.createElement("span",{className:"sr-only md:not-sr-only"},"page"))),l&&a.createElement(n.Link,{to:l+"/",rel:"next",className:m},a.createElement("div",{className:"flex space-x-1"},a.createElement("span",null,"Next"),a.createElement("span",{className:"sr-only md:not-sr-only"},"page")),a.createElement(i.Z,{"aria-hidden":!0,className:d}))))}},2095:function(e,r,t){var a=t(7294),n=t(1597),l=t(6050);r.Z=function(e){var r=e.post,t=e.condensed,o="/blog/"+r.slug;return a.createElement("div",{className:t?"":"md:first:col-span-2"},a.createElement(n.Link,{to:o,className:"shadow-post hover:shadow-post-hover flex flex-col bg-base-100 h-full p-4 group rounded-lg focus:ring-2 focus:ring-primary-400 border-2 border-slate-200 hover:border-4"},a.createElement(l.Z,{className:"before:text-transparent before:absolute before:pointer-events-none before:z-[1] before:w-full before:h-full before:shadow-image before:rounded-md relative rounded-md overflow-hidden",image:r.frontmatter.image}),a.createElement("p",{className:"flex justify-between border-b border-base-300 py-3 text-base-500 font-bold"},r.frontmatter.date),a.createElement("h2",{className:"my-2 font-headings font-bold text-lg tracking-wide group-hover:text-primary-700"},r.frontmatter.title),!0!==t&&a.createElement("p",{className:"line-clamp-3"},r.frontmatter.description?r.frontmatter.description:r.excerpt)))}},6768:function(e,r,t){t.r(r);var a=t(7294),n=t(262),l=t(5677),o=t(2095),s=t(7950),c="Windup Blog";r.default=function(e){var r=e.data,t=e.pageContext,i=r.allMdx.nodes;return a.createElement("div",{className:"max-w-screen-xl page-wrapper"},a.createElement(n.Z,{title:c}),a.createElement("h1",{className:"sr-only"},c),a.createElement("div",{className:"flex flex-col md:flex-row md:space-x-4"},a.createElement("div",{className:"pb-8 md:pb-16"},a.createElement("div",{className:"grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6 my-6"},i.map((function(e){return a.createElement(o.Z,{key:e.id,post:e})}))),a.createElement(l.Z,{pageContext:t})),a.createElement("aside",{className:"w-full md:w-1/4 flex-shrink-0 md:border-l md:border-base-300 md:pl-4 py-4 pb-10 md:pb-16"},a.createElement(s.Z,null))))}}}]);
//# sourceMappingURL=component---src-templates-blog-js-000e3177a64c1d412b1f.js.map