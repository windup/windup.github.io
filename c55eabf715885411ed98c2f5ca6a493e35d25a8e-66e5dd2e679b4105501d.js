(self.webpackChunkwindup_website=self.webpackChunkwindup_website||[]).push([[311],{7059:function(e,t,r){"use strict";r.d(t,{G:function(){return P},L:function(){return h},M:function(){return E},P:function(){return C},S:function(){return q},_:function(){return s},a:function(){return a},b:function(){return d},c:function(){return u},d:function(){return l},g:function(){return p},h:function(){return c}});var n=r(7294),i=(r(6879),r(5697)),o=r.n(i);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const u=e=>{var t;return(e=>{var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},l=e=>{var t,r,n;return null==(t=u(e))||null==(r=t.images)||null==(n=r.fallback)?void 0:n.src};function d(e,t,r,n,i){return void 0===i&&(i={}),a({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:a({},i,{opacity:t?1:0})})}function p(e,t,r,n,i,o,s,c){const u={};o&&(u.backgroundColor=o,"fixed"===r?(u.width=n,u.height=i,u.backgroundColor=o,u.position="relative"):("constrained"===r||"fullWidth"===r)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),c&&(u.objectPosition=c);const l=a({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:a({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return l}const f=["children"],m=function(e){let{layout:t,width:r,height:i}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,r=s(e,f);return n.createElement(n.Fragment,null,n.createElement(m,a({},r)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:r,loading:i,alt:o="",shouldLoad:c}=e,u=s(e,y);return n.createElement("img",a({},u,{decoding:"async",loading:i,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:o}))},v=function(e){let{fallback:t,sources:r=[],shouldLoad:i=!0}=e,o=s(e,g);const c=o.sizes||(null==t?void 0:t.sizes),u=n.createElement(b,a({},o,t,{sizes:c,shouldLoad:i}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:o}=e;return n.createElement("source",{key:t+"-"+o+"-"+r,type:o,media:t,srcSet:i?r:void 0,"data-srcset":i?void 0:r,sizes:c})})),u):u};var w;b.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},v.displayName="Picture",v.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const T=["fallback"],C=function(e){let{fallback:t}=e,r=s(e,T);return t?n.createElement(v,a({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",a({},r))};C.displayName="Placeholder",C.propTypes={fallback:i.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(v,a({},e)),n.createElement("noscript",null,n.createElement(v,a({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;const A=function(e,t,r){for(var n=arguments.length,i=new Array(n>3?n-3:0),a=3;a<n;a++)i[a-3]=arguments[a];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(i)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},O={image:o().object.isRequired,alt:A},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],k=new Set;let j,I;const x=function(e){let{as:t="div",image:i,style:o,backgroundColor:u,className:l,class:d,onStartLoad:p,onLoad:f,onError:m}=e,h=s(e,S);const{width:y,height:g,layout:b}=i,v=function(e,t,r){const n={};let i="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}(y,g,b),{style:w,className:T}=v,C=s(v,L),E=(0,n.useRef)(),A=(0,n.useMemo)((()=>JSON.stringify(i.images)),[i.images]);d&&(l=d);const O=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,y,g);return(0,n.useEffect)((()=>{j||(j=r.e(826).then(r.bind(r,8826)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=E.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function t(){document.removeEventListener("load",t),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)})),void k.add(A);if(I&&k.has(A))return;let t,n;return j.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;E.current&&(E.current.innerHTML=r(a({isLoading:!0,isLoaded:k.has(A),image:i},h)),k.has(A)||(t=requestAnimationFrame((()=>{E.current&&(n=s(E.current,A,k,o,p,f,m))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[i]),(0,n.useLayoutEffect)((()=>{k.has(A)&&I&&(E.current.innerHTML=I(a({isLoading:k.has(A),isLoaded:k.has(A),image:i},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,n.createElement)(t,a({},C,{style:a({},w,o,{backgroundColor:u}),className:T+(l?" "+l:""),ref:E,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},P=(0,n.memo)((function(e){return e.image?(0,n.createElement)(x,e):null}));P.propTypes=O,P.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],N=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),_={src:o().string.isRequired,alt:A,width:N,height:N,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(D=P,function(e){let{src:t,__imageData:r,__error:i}=e,o=s(e,M);return i&&console.warn(i),r?n.createElement(D,a({image:r},o)):(console.warn("Image not loaded",t),null)});var D;q.displayName="StaticImage",q.propTypes=_},8119:function(e,t,r){"use strict";r.d(t,{Z:function(){return we}});var n,i,o,a,s=r(5785),c=r(7294),u=r(1597),l=r(7059),d=r(5697),p=r.n(d),f=r(8412),m=r.n(f),h=r(1275),y=r.n(h),g=r(1209),b=r.n(g),v="bodyAttributes",w="htmlAttributes",T="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(C).map((function(e){return C[e]})),"charset"),A="cssText",O="href",S="http-equiv",L="innerHTML",k="itemprop",j="name",I="property",x="rel",P="src",M="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",_="defer",q="encodeSpecialCharacters",D="onChangeClientState",H="titleTemplate",z=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),U=[C.NOSCRIPT,C.SCRIPT,C.STYLE],B="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},$=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=te(e,C.TITLE),r=te(e,H);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=te(e,R);return t||n||void 0},J=function(e){return te(e,D)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},ee=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],c=s.toLowerCase();-1===t.indexOf(c)||r===x&&"canonical"===e[r].toLowerCase()||c===x&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==L&&s!==A&&s!==k||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],c=b()({},n[s],i[s]);n[s]=c}return e}),[]).reverse()},te=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},re=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){re(e)}),0)}),ne=function(e){return clearTimeout(e)},ie="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||re:r.g.requestAnimationFrame||re,oe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:r.g.cancelAnimationFrame||ne,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},se=null,ce=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,d=e.title,p=e.titleAttributes;de(C.BODY,n),de(C.HTML,i),le(d,p);var f={baseTag:pe(C.BASE,r),linkTags:pe(C.LINK,o),metaTags:pe(C.META,a),noscriptTags:pe(C.NOSCRIPT,s),scriptTags:pe(C.SCRIPT,u),styleTags:pe(C.STYLE,l)},m={},h={};Object.keys(f).forEach((function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=f[e].oldTags)})),t&&t(),c(e,m,h)},ue=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ue(e)),de(C.TITLE,t)},de=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(B),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var d=o.length-1;d>=0;d--)r.removeAttribute(o[d]);i.length===o.length?r.removeAttribute(B):r.getAttribute(B)!==a.join(",")&&r.setAttribute(B,a.join(","))}},pe=function(e,t){var r=document.head||document.querySelector(C.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===L)r.innerHTML=t.innerHTML;else if(n===A)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(B,"true"),i.some((function(e,t){return a=t,r.isEqualNode(e)}))?i.splice(a,1):o.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:o}},fe=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},he=function(e,t,r){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[B]=!0,i=me(r,n),[c.createElement(C.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=fe(r),o=ue(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+$(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+$(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case v:case w:return{toComponent:function(){return me(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[B]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===L||r===A){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),c.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===L||e===A)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+$(n[t],r)+'"';return e?e+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===U.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},ye=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title,d=void 0===l?"":l,p=e.titleAttributes;return{base:he(C.BASE,t,n),bodyAttributes:he(v,r,n),htmlAttributes:he(w,i,n),link:he(C.LINK,o,n),meta:he(C.META,a,n),noscript:he(C.NOSCRIPT,s,n),script:he(C.SCRIPT,c,n),style:he(C.STYLE,u,n),title:he(C.TITLE,{title:d,titleAttributes:p},n)}},ge=m()((function(e){return{baseTag:X([O,M],e),bodyAttributes:Q(v,e),defer:te(e,_),encode:te(e,q),htmlAttributes:Q(w,e),linkTags:ee(C.LINK,[x,O],e),metaTags:ee(C.META,[j,E,S,I,k],e),noscriptTags:ee(C.NOSCRIPT,[L],e),onChangeClientState:J(e),scriptTags:ee(C.SCRIPT,[P,L],e),styleTags:ee(C.STYLE,[A],e),title:G(e),titleAttributes:Q(T,e)}}),(function(e){se&&oe(se),e.defer?se=ie((function(){ce(e,(function(){se=null}))})):(ce(e),se=null)}),ye)((function(){return null})),be=(i=ge,a=o=function(e){function t(){return W(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!y()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return K({},n,((t={})[r.type]=[].concat(n[r.type]||[],[K({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(n.type){case C.TITLE:return K({},i,((t={})[n.type]=a,t.titleAttributes=K({},o),t));case C.BODY:return K({},i,{bodyAttributes:K({},o)});case C.HTML:return K({},i,{htmlAttributes:K({},o)})}return K({},i,((r={})[n.type]=K({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=K({},t);return Object.keys(e).forEach((function(t){var n;r=K({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)}(V(i,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=V(e,["children"]),n=K({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(i,n)},Y(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:p().object,bodyAttributes:p().object,children:p().oneOfType([p().arrayOf(p().node),p().node]),defaultTitle:p().string,defer:p().bool,encodeSpecialCharacters:p().bool,htmlAttributes:p().object,link:p().arrayOf(p().object),meta:p().arrayOf(p().object),noscript:p().arrayOf(p().object),onChangeClientState:p().func,script:p().arrayOf(p().object),style:p().arrayOf(p().object),title:p().string,titleAttributes:p().object,titleTemplate:p().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);be.renderStatic=be.rewind;function ve(e){var t,r;let{description:n,lang:i,meta:o,image:a,title:d,article:p}=e;const{site:f}=(0,u.useStaticQuery)("287575728"),m=f.siteMetadata.siteUrl,h=n||f.siteMetadata.description,y=(0,l.d)(a)||f.siteMetadata.image,g=null===(t=f.siteMetadata)||void 0===t?void 0:t.title,b=[{name:"description",content:y+" metaDescription"},{property:"og:title",content:d?d+" | "+g:g},{property:"og:description",content:h},{property:"og:type",content:p?"article":"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=f.siteMetadata)||void 0===r?void 0:r.twitterCreator)||""},{name:"twitter:title",content:d?d+" | "+g:g},{name:"twitter:description",content:h}],v=[{property:"og:image",content:""+m+y}],w=o.find((e=>{let{property:t}=e;return"og:image"===t}));let T=[].concat((0,s.Z)(o),b);return"object"!=typeof w&&(T=T.concat(v)),c.createElement(c.Fragment,null,c.createElement(be,{htmlAttributes:{lang:i},defer:!1,title:d,titleTemplate:g?"%s | "+g:null,defaultTitle:g,meta:T}))}ve.defaultProps={lang:"en",meta:[],description:""};var we=ve},6879:function(e){"use strict";const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,r=!1,n=!1;for(let i=0;i<e.length;i++){const o=e[i];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,n=r,r=!0,i++):r&&n&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,i-1)+"-"+e.slice(i-1),n=r,r=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,n=r,r=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r;var r};e.exports=t,e.exports.default=t},1209:function(e){"use strict";e.exports=Object.assign},1275:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,u,l;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!o(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!o(e[u[c]],a[u[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},8412:function(e,t,r){"use strict";var n,i=r(7294),o=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=e(u.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return o.createElement(n,this.props)},i}(i.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(d,"canUseDOM",s),d}}}}]);
//# sourceMappingURL=c55eabf715885411ed98c2f5ca6a493e35d25a8e-66e5dd2e679b4105501d.js.map