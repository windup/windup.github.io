"use strict";(self.webpackChunkwindup_website=self.webpackChunkwindup_website||[]).push([[826],{8826:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return b},swapPlaceholderImage:function(){return g}});var o=n(7059),i=n(7294),a=n(7762);n(6879);let r;const c=new WeakMap,s=navigator.connection||navigator.mozConnection||navigator.webkitConnection,l=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function u(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function d(e,t,n,o,i,a){const r=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),s=n.has(t);function l(e){this.removeEventListener("load",l);const t=e.currentTarget,n=new Image;n.src=t.currentSrc,n.decode?n.decode().then((()=>{u(this,c),null==i||i({wasCached:s})})).catch((e=>{u(this,c),null==a||a(e)})):(u(this,c),null==i||i({wasCached:s}))}return r.addEventListener("load",l),null==o||o({wasCached:s}),Array.from(r.parentElement.children).forEach((e=>{const t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),r.complete&&l.call(r,{currentTarget:r}),()=>{r&&r.removeEventListener("load",l)}}function g(e,t,i,a,l,u,g){if(!(0,o.h)()){let o;const w=(m=()=>{o=d(e,t,i,l,u,g)},"IntersectionObserver"in window?(r||(r=new IntersectionObserver((e=>{e.forEach((e=>{var t;e.isIntersecting&&(null==(t=c.get(e.target))||t(),c.delete(e.target))}))}),{rootMargin:"4g"!==(null==s?void 0:s.effectiveType)||null!=s&&s.saveData?"2500px":"1250px"})),function(e){return c.set(e,m),r.observe(e),function(){r&&e&&(c.delete(e),r.unobserve(e))}}):function(){return m(),function(){}}),f=w(e);var b,h;return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(b=a.objectFit)?b:"cover",e.dataset.objectPosition=""+(null!=(h=a.objectPosition)?h:"50% 50%"),async function(e){"objectFitPolyfill"in window||await n.e(622).then(n.t.bind(n,9622,23)),window.objectFitPolyfill(e)}(e)),()=>{o&&o(),f()}}var m;return d(e,t,i,l,u,g)}function b(e){let{image:t,loading:n="lazy",isLoading:r,isLoaded:c,imgClassName:s,imgStyle:u={},objectPosition:d,backgroundColor:g,objectFit:b="cover"}=e,h=(0,o._)(e,l);const{width:m,height:w,layout:f,images:v,placeholder:p,backgroundColor:y}=t;return u=(0,o.a)({objectFit:b,objectPosition:d,backgroundColor:g},u),(0,a.renderToStaticMarkup)(i.createElement(o.L,{layout:f,width:m,height:w},i.createElement(o.P,(0,o.a)({},(0,o.g)(p,c,f,m,w,y,b,d))),i.createElement(o.M,(0,o.a)({},h,{width:m,height:w,className:s},(0,o.b)(r,c,v,n,u)))))}}}]);
//# sourceMappingURL=826-bcb6fb293c0d3be51491.js.map