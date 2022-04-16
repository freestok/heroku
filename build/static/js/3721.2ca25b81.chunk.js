/*! For license information please see 3721.2ca25b81.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[3721],{53721:(t,i,e)=>{e.r(i),e.d(i,{CalciteNotice:()=>B,defineCustomElement:()=>M});var n,a=e(51554);!function(t){t.green="checkCircle",t.yellow="exclamationMarkTriangle",t.red="exclamationMarkTriangle",t.blue="lightbulb"}(n||(n={}));function o(t){return t.getRootNode()}function r(t){return t.host||null}function s(t,i){return function t(e){return e?e.closest(i)||t(r(o(e))):null}(t)}const c=":not([slot])";function l(t,i,e){i&&!Array.isArray(i)&&"string"!==typeof i&&(e=i,i=null);const n=i?Array.isArray(i)?i.map((t=>`[slot="${t}"]`)).join(","):`[slot="${i}"]`:c;return(null===e||void 0===e?void 0:e.all)?function(t,i,e){let n=i===c?m(t,c):Array.from(t.querySelectorAll(i));n=e&&!1===e.direct?n:n.filter((i=>i.parentElement===t)),n=(null===e||void 0===e?void 0:e.matches)?n.filter((t=>null===t||void 0===t?void 0:t.matches(e.matches))):n;const a=null===e||void 0===e?void 0:e.selector;return a?n.map((t=>Array.from(t.querySelectorAll(a)))).reduce(((t,i)=>[...t,...i]),[]).filter((t=>!!t)):n}(t,n,e):function(t,i,e){let n=i===c?m(t,c)[0]||null:t.querySelector(i);n=e&&!1===e.direct||(null===n||void 0===n?void 0:n.parentElement)===t?n:null,n=(null===e||void 0===e?void 0:e.matches)?(null===n||void 0===n?void 0:n.matches(e.matches))?n:null:n;const a=null===e||void 0===e?void 0:e.selector;return a?null===n||void 0===n?void 0:n.querySelector(a):n}(t,n,e)}function m(t,i){return t?Array.from(t.children||[]).filter((t=>null===t||void 0===t?void 0:t.matches(i))):[]}function d(t,i,e){return"string"===typeof i&&""!==i?i:""===i?t[e]:void 0}function h(t,i,e){const n=function(t){return"intersection"===t?window.IntersectionObserver:"mutation"===t?window.MutationObserver:window.ResizeObserver}(t);return a.Z5.isBrowser?new n(i,e):void 0}const u=new Set;let f;const p={childList:!0};function g(t){t.forEach((t=>{let{target:i}=t;(0,a.xE)(i)}))}const b="flip-rtl",w={},v={},k={s:16,m:24,l:32};async function y(t){let{icon:i,scale:e}=t;const n=k[e],o=function(t){const i=!isNaN(Number(t.charAt(0))),e=t.split("-");if(1===e.length)return i?`i${t}`:t;return e.map(((t,e)=>0===e?i?`i${t.toUpperCase()}`:t:t.charAt(0).toUpperCase()+t.slice(1))).join("")}(i),r="F"===o.charAt(o.length-1),s=`${r?o.substring(0,o.length-1):o}${n}${r?"F":""}`;if(w[s])return w[s];v[s]||(v[s]=fetch((0,a.K3)(`./assets/icon/${s}.json`)).then((t=>t.json())).catch((()=>(console.error(`"${s}" is not a valid calcite-ui-icon name`),""))));const c=await v[s];return w[s]=c,c}let x=class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:i,pathData:e,scale:n,textLabel:o}=this,r=function(t){const i=s(t,"[dir]");return i?i.getAttribute("dir"):"ltr"}(t),c=k[n],l=!!o,m=[].concat(e||"");return(0,a.h)(a.AA,{"aria-hidden":(!l).toString(),"aria-label":l?o:null,role:l?"img":null},(0,a.h)("svg",{class:{[b]:"rtl"===r&&i,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${c} ${c}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},m.map((t=>"string"===typeof t?(0,a.h)("path",{d:t}):(0,a.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:i,visible:e}=this;a.Z5.isBrowser&&t&&e&&(this.pathData=await y({icon:t,scale:i}))}waitUntilVisible(t){this.intersectionObserver=h("intersection",(i=>{i.forEach((i=>{i.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){height:2rem;width:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}"}};function D(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((t=>{if("calcite-icon"===t)customElements.get(t)||customElements.define(t,x)}))}x=(0,a.GH)(x,[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]),D();const z="Close",_="title",C="message",A="link",E="actions-end",I="actions-end",q="notice-close",O="container",$="notice-content",N="notice-icon";let R=class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteNoticeClose=(0,a.yM)(this,"calciteNoticeClose",7),this.calciteNoticeOpen=(0,a.yM)(this,"calciteNoticeOpen",7),this.active=!1,this.color="blue",this.dismissible=!1,this.intlClose=z,this.scale="m",this.width="auto",this.close=()=>{this.active=!1,this.calciteNoticeClose.emit()}}updateRequestedIcon(){this.requestedIcon=d(n,this.icon,this.color)}connectedCallback(){var t;t=this,f||(f=h("mutation",g)),f.observe(t.el,p)}disconnectedCallback(){!function(t){u.delete(t.el),g(f.takeRecords()),f.disconnect();for(const[i]of u.entries())f.observe(i,p)}(this)}componentWillLoad(){this.requestedIcon=d(n,this.icon,this.color)}render(){const{el:t}=this,i=(0,a.h)("button",{"aria-label":this.intlClose,class:q,onClick:this.close,ref:t=>this.closeButton=t},(0,a.h)("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"})),e=l(t,E);return(0,a.h)("div",{class:O},this.requestedIcon?(0,a.h)("div",{class:N},(0,a.h)("calcite-icon",{icon:this.requestedIcon,scale:"l"===this.scale?"m":"s"})):null,(0,a.h)("div",{class:$},(0,a.h)("slot",{name:_}),(0,a.h)("slot",{name:C}),(0,a.h)("slot",{name:A})),e?(0,a.h)("div",{class:I},(0,a.h)("slot",{name:E})):null,this.dismissible?i:null)}async setFocus(){const t=this.el.querySelector("calcite-link");(this.closeButton||t)&&(t?t.setFocus():this.closeButton&&this.closeButton.focus())}get el(){return this}static get watchers(){return{icon:["updateRequestedIcon"],color:["updateRequestedIcon"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-left:auto;margin-right:auto;display:none;max-width:100%;-ms-flex-align:center;align-items:center;width:var(--calcite-notice-width)}.container{pointer-events:none;margin-top:0px;margin-bottom:0px;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;width:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;max-height:0;text-align:start;-webkit-transition:var(--calcite-animation-timing);transition:var(--calcite-animation-timing);-webkit-border-start:0px solid;border-inline-start:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:-ms-flexbox;display:flex}:host([active]) .container{pointer-events:auto;display:-ms-flexbox;display:flex;max-height:100%;-ms-flex-align:center;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);-webkit-margin-end:var(--calcite-notice-spacing-token-small);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;min-width:0px;-ms-flex-direction:column;flex-direction:column;overflow-wrap:break-word;-ms-flex:1 1 0px;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){-webkit-padding-start:var(--calcite-notice-spacing-token-large);padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto}.notice-close{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch}:host([color=blue]) .container{border-color:var(--calcite-ui-brand)}:host([color=blue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]) .container{border-color:var(--calcite-ui-danger)}:host([color=red]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-color:var(--calcite-ui-success)}:host([color=green]) .container .notice-icon{color:var(--calcite-ui-success)}"}};function S(){if("undefined"===typeof customElements)return;["calcite-notice","calcite-icon"].forEach((t=>{switch(t){case"calcite-notice":customElements.get(t)||customElements.define(t,R);break;case"calcite-icon":customElements.get(t)||D()}}))}R=(0,a.GH)(R,[1,"calcite-notice",{active:[1540],color:[513],dismissible:[516],icon:[520],intlClose:[1,"intl-close"],scale:[513],width:[513],setFocus:[64]}]),S();const B=R,M=S}}]);
//# sourceMappingURL=3721.2ca25b81.chunk.js.map