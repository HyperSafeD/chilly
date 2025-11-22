(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,930017,990765,50024,668503,73992,e=>{"use strict";let t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;class s{constructor(e,t,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}}let a=e=>new s("string"==typeof e?e:e+"",void 0,r),o=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]),e,r),c=(e,r)=>{if(i)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of r){let r=document.createElement("style"),n=t.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=i.cssText,e.appendChild(r)}},l=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return a(t)})(e):e;e.s(["CSSResult",()=>s,"adoptStyles",()=>c,"css",()=>o,"getCompatibleStyle",()=>l,"supportsAdoptingStyleSheets",()=>i,"unsafeCSS",()=>a],990765);let{is:u,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:m,getPrototypeOf:f}=Object,y=globalThis,g=y.trustedTypes,v=g?g.emptyScript:"",b=y.reactiveElementPolyfillSupport,w={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},x=(e,t)=>!u(e,t),C={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class E extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=C){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&d(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){let{get:r,set:n}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let s=r?.call(this);n?.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??C}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...p(e),...m(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(l(i));else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){let n=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=i.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=r;let s=n.fromAttribute(t,e.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){let r=this.constructor,n=this[e];if(!(((i??=r.getPropertyOptions(e)).hasChanged??x)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:n},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==n||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e){let{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E.elementProperties=new Map,E.finalized=new Map,b?.({ReactiveElement:E}),(y.reactiveElementVersions??=[]).push("2.1.1"),e.s(["ReactiveElement",()=>E,"defaultConverter",()=>w,"notEqual",()=>x],50024);let $=globalThis,T=$.trustedTypes,k=T?T.createPolicy("lit-html",{createHTML:e=>e}):void 0,P="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+A,S=`<${O}>`,_=document,R=()=>_.createComment(""),I=e=>null===e||"object"!=typeof e&&"function"!=typeof e,j=Array.isArray,N=e=>j(e)||"function"==typeof e?.[Symbol.iterator],D="[ 	\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,M=/>/g,L=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,F=/"/g,H=/^(?:script|style|textarea|title)$/i,q=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),G=q(1),W=q(2),V=q(3),K=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),Q=new WeakMap,Z=_.createTreeWalker(_,129);function X(e,t){if(!j(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(t):t}let J=(e,t)=>{let i=e.length-1,r=[],n,s=2===t?"<svg>":3===t?"<math>":"",a=U;for(let t=0;t<i;t++){let i=e[t],o,c,l=-1,u=0;for(;u<i.length&&(a.lastIndex=u,null!==(c=a.exec(i)));)u=a.lastIndex,a===U?"!--"===c[1]?a=B:void 0!==c[1]?a=M:void 0!==c[2]?(H.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=L):void 0!==c[3]&&(a=L):a===L?">"===c[0]?(a=n??U,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,o=c[1],a=void 0===c[3]?L:'"'===c[3]?F:z):a===F||a===z?a=L:a===B||a===M?a=U:(a=L,n=void 0);let d=a===L&&e[t+1].startsWith("/>")?" ":"";s+=a===U?i+S:l>=0?(r.push(o),i.slice(0,l)+P+i.slice(l)+A+d):i+A+(-2===l?t:d)}return[X(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class ee{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,s=0;const a=e.length-1,o=this.parts,[c,l]=J(e,t);if(this.el=ee.createElement(c,i),Z.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=Z.nextNode())&&o.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(P)){const t=l[s++],i=r.getAttribute(e).split(A),a=/([.?@])?(.*)/.exec(t);o.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?es:"?"===a[1]?ea:"@"===a[1]?eo:en}),r.removeAttribute(e)}else e.startsWith(A)&&(o.push({type:6,index:n}),r.removeAttribute(e));if(H.test(r.tagName)){const e=r.textContent.split(A),t=e.length-1;if(t>0){r.textContent=T?T.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],R()),Z.nextNode(),o.push({type:2,index:++n});r.append(e[t],R())}}}else if(8===r.nodeType)if(r.data===O)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(A,e+1));)o.push({type:7,index:n}),e+=A.length-1}n++}}static createElement(e,t){let i=_.createElement("template");return i.innerHTML=e,i}}function et(e,t,i=e,r){if(t===K)return t;let n=void 0!==r?i._$Co?.[r]:i._$Cl,s=I(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(e))._$AT(e,i,r),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(t=et(e,n._$AS(e,t.values),n,r)),t}class ei{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??_).importNode(t,!0);Z.currentNode=r;let n=Z.nextNode(),s=0,a=0,o=i[0];for(;void 0!==o;){if(s===o.index){let t;2===o.type?t=new er(n,n.nextSibling,this,e):1===o.type?t=new o.ctor(n,o.name,o.strings,this,e):6===o.type&&(t=new ec(n,this,e)),this._$AV.push(t),o=i[++a]}s!==o?.index&&(n=Z.nextNode(),s++)}return Z.currentNode=_,r}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class er{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){I(e=et(this,e,t))?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==K&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):N(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(_.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=ee.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ei(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new ee(e)),t}k(e){j(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let n of e)r===t.length?t.push(i=new er(this.O(R()),this.O(R()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class en{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(e,t=this,i,r){let n=this.strings,s=!1;if(void 0===n)(s=!I(e=et(this,e,t,0))||e!==this._$AH&&e!==K)&&(this._$AH=e);else{let r,a,o=e;for(e=n[0],r=0;r<n.length-1;r++)(a=et(this,o[i+r],t,r))===K&&(a=this._$AH[r]),s||=!I(a)||a!==this._$AH[r],a===Y?e=Y:e!==Y&&(e+=(a??"")+n[r+1]),this._$AH[r]=a}s&&!r&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class es extends en{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class ea extends en{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class eo extends en{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=et(this,e,t,0)??Y)===K)return;let i=this._$AH,r=e===Y&&i!==Y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Y&&(i===Y||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ec{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){et(this,e)}}let el={M:P,P:A,A:O,C:1,L:J,R:ei,D:N,V:et,I:er,H:en,N:ea,U:eo,B:es,F:ec},eu=$.litHtmlPolyfillSupport;eu?.(ee,er),($.litHtmlVersions??=[]).push("3.3.1");let ed=(e,t,i)=>{let r=i?.renderBefore??t,n=r._$litPart$;if(void 0===n){let e=i?.renderBefore??null;r._$litPart$=n=new er(t.insertBefore(R(),e),e,void 0,i??{})}return n._$AI(e),n};e.s(["_$LH",()=>el,"html",()=>G,"mathml",()=>V,"noChange",()=>K,"nothing",()=>Y,"render",()=>ed,"svg",()=>W],668503);let eh=globalThis;class ep extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ed(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}ep._$litElement$=!0,ep.finalized=!0,eh.litElementHydrateSupport?.({LitElement:ep});let em=eh.litElementPolyfillSupport;em?.({LitElement:ep});let ef={_$AK:(e,t,i)=>{e._$AK(t,i)},_$AL:e=>e._$AL};(eh.litElementVersions??=[]).push("4.2.1"),e.s(["LitElement",()=>ep,"_$LE",()=>ef],73992),e.s([],930017)},914016,e=>{"use strict";var t=e.i(616656),i=e.i(105097),r=e.i(288079),n=e.i(236288);function s(e,t={}){let{key:i="fallback",name:o="Fallback",rank:c=!1,shouldThrow:l=a,retryCount:u,retryDelay:d}=t;return({chain:t,pollingInterval:s=4e3,timeout:a,...h})=>{let p=e,m=()=>{},f=(0,n.createTransport)({key:i,name:o,async request({method:e,params:i}){let r,n=async(s=0)=>{let o=p[s]({...h,chain:t,retryCount:0,timeout:a});try{let t=await o.request({method:e,params:i});return m({method:e,params:i,response:t,transport:o,status:"success"}),t}catch(a){if(m({error:a,method:e,params:i,transport:o,status:"error"}),l(a)||s===p.length-1||!(r??=p.slice(s+1).some(i=>{let{include:r,exclude:n}=i({chain:t}).config.methods||{};return r?r.includes(e):!n||!n.includes(e)})))throw a;return n(s+1)}};return n()},retryCount:u,retryDelay:d,type:"fallback"},{onResponse:e=>m=e,transports:p.map(e=>e({chain:t,retryCount:0}))});if(c){let e="object"==typeof c?c:{};!function({chain:e,interval:t=4e3,onTransports:i,ping:n,sampleCount:s=10,timeout:a=1e3,transports:o,weights:c={}}){let{stability:l=.7,latency:u=.3}=c,d=[],h=async()=>{let c=await Promise.all(o.map(async t=>{let i,r,s=t({chain:e,retryCount:0,timeout:a}),o=Date.now();try{await (n?n({transport:s}):s.request({method:"net_listening"})),r=1}catch{r=0}finally{i=Date.now()}return{latency:i-o,success:r}}));d.push(c),d.length>s&&d.shift();let p=Math.max(...d.map(e=>Math.max(...e.map(({latency:e})=>e))));i(o.map((e,t)=>{let i=d.map(e=>e[t].latency),r=i.reduce((e,t)=>e+t,0)/i.length,n=d.map(e=>e[t].success),s=n.reduce((e,t)=>e+t,0)/n.length;return 0===s?[0,t]:[u*(1-r/p)+l*s,t]}).sort((e,t)=>t[0]-e[0]).map(([,e])=>o[e])),await (0,r.wait)(t),h()};h()}({chain:t,interval:e.interval??s,onTransports:e=>p=e,ping:e.ping,sampleCount:e.sampleCount,timeout:e.timeout,transports:p,weights:e.weights})}return f}}function a(e){return!!("code"in e&&"number"==typeof e.code&&(e.code===i.TransactionRejectedRpcError.code||e.code===i.UserRejectedRequestError.code||t.ExecutionRevertedError.nodeMessage.test(e.message)||5e3===e.code))}e.s(["fallback",()=>s,"shouldThrow",()=>a])},571134,928271,e=>{"use strict";let t="2.22.1";e.s(["version",0,t],928271);var i,r,n=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class s extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return`@wagmi/core@${t}`}constructor(e,t={}){super(),i.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});const r=t.cause instanceof s?t.cause.details:t.cause?.message?t.cause.message:t.details,n=t.cause instanceof s&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...n?[`Docs: ${this.docsBaseUrl}${n}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=n,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return n(this,i,"m",r).call(this,this,e)}}i=new WeakSet,r=function e(t,r){return r?.(t)?t:t.cause?n(this,i,"m",e).call(this,t.cause,r):t},e.s(["BaseError",()=>s],571134)},623614,659001,e=>{"use strict";function t(e){let t=e.state.current,i=e.state.connections.get(t),r=i?.accounts,n=r?.[0],s=e.chains.find(e=>e.id===i?.chainId),a=e.state.status;switch(a){case"connected":return{address:n,addresses:r,chain:s,chainId:i?.chainId,connector:i?.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:a};case"reconnecting":return{address:n,addresses:r,chain:s,chainId:i?.chainId,connector:i?.connector,isConnected:!!n,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:a};case"connecting":return{address:n,addresses:r,chain:s,chainId:i?.chainId,connector:i?.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:a};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:a}}}e.s(["getAccount",()=>t],623614),e.s(["deepEqual",()=>function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){let r,n;if(t.constructor!==i.constructor)return!1;if(Array.isArray(t)&&Array.isArray(i)){if((r=t.length)!==i.length)return!1;for(n=r;0!=n--;)if(!e(t[n],i[n]))return!1;return!0}if("function"==typeof t.valueOf&&t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if("function"==typeof t.toString&&t.toString!==Object.prototype.toString)return t.toString()===i.toString();let s=Object.keys(t);if((r=s.length)!==Object.keys(i).length)return!1;for(n=r;0!=n--;)if(!Object.hasOwn(i,s[n]))return!1;for(n=r;0!=n--;){let r=s[n];if(r&&!e(t[r],i[r]))return!1}return!0}return t!=t&&i!=i}],659001)},469561,e=>{"use strict";let t=!1;async function i(e,r={}){let n;if(t)return[];t=!0,e.setState(e=>({...e,status:e.current?"reconnecting":"connecting"}));let s=[];if(r.connectors?.length)for(let t of r.connectors){let i;i="function"==typeof t?e._internal.connectors.setup(t):t,s.push(i)}else s.push(...e.connectors);try{n=await e.storage?.getItem("recentConnectorId")}catch{}let a={};for(let[,t]of e.state.connections)a[t.connector.id]=1;n&&(a[n]=0);let o=Object.keys(a).length>0?[...s].sort((e,t)=>(a[e.id]??10)-(a[t.id]??10)):s,c=!1,l=[],u=[];for(let t of o){let i=await t.getProvider().catch(()=>void 0);if(!i||u.some(e=>e===i)||!await t.isAuthorized())continue;let r=await t.connect({isReconnecting:!0}).catch(()=>null);r&&(t.emitter.off("connect",e._internal.events.connect),t.emitter.on("change",e._internal.events.change),t.emitter.on("disconnect",e._internal.events.disconnect),e.setState(e=>{let i=new Map(c?e.connections:new Map).set(t.uid,{accounts:r.accounts,chainId:r.chainId,connector:t});return{...e,current:c?e.current:t.uid,connections:i}}),l.push({accounts:r.accounts,chainId:r.chainId,connector:t}),u.push(i),c=!0)}return("reconnecting"===e.state.status||"connecting"===e.state.status)&&(c?e.setState(e=>({...e,status:"connected"})):e.setState(e=>({...e,connections:new Map,current:null,status:"disconnected"}))),t=!1,l}e.s(["reconnect",()=>i])},951908,e=>{"use strict";var t=e.i(659001),i=e.i(623614);function r(e,r){let{onChange:n}=r;return e.subscribe(()=>(0,i.getAccount)(e),n,{equalityFn(e,i){let{connector:r,...n}=e,{connector:s,...a}=i;return(0,t.deepEqual)(n,a)&&r?.id===s?.id&&r?.uid===s?.uid}})}e.s(["watchAccount",()=>r])},248095,e=>{"use strict";var t=e.i(837699),i=e.i(469561);function r(e){let{children:r,config:n,initialState:s,reconnectOnMount:a=!0}=e,{onMount:o}=function(e,t){let{initialState:r,reconnectOnMount:n}=t;return r&&!e._internal.store.persist.hasHydrated()&&e.setState({...r,chainId:e.chains.some(e=>e.id===r.chainId)?r.chainId:e.chains[0].id,connections:n?r.connections:new Map,status:n?"reconnecting":"disconnected"}),{async onMount(){e._internal.ssr&&(await e._internal.store.persist.rehydrate(),e._internal.mipd&&e._internal.connectors.setState(t=>{let i=new Set;for(let e of t??[])if(e.rdns)for(let t of Array.isArray(e.rdns)?e.rdns:[e.rdns])i.add(t);let r=[];for(let t of e._internal.mipd?.getProviders()??[]){if(i.has(t.info.rdns))continue;let n=e._internal.connectors.providerDetailToConnector(t),s=e._internal.connectors.setup(n);r.push(s)}return[...t,...r]})),n?(0,i.reconnect)(e):e.storage&&e.setState(e=>({...e,connections:new Map}))}}}(n,{initialState:s,reconnectOnMount:a});n._internal.ssr||o();let c=(0,t.useRef)(!0);return(0,t.useEffect)(()=>{if(c.current&&n._internal.ssr)return o(),()=>{c.current=!1}},[]),r}let n=(0,t.createContext)(void 0);function s(e){let{children:i,config:s}=e;return(0,t.createElement)(r,e,(0,t.createElement)(n.Provider,{value:s},i))}e.s(["WagmiContext",0,n,"WagmiProvider",()=>s],248095)},890813,(e,t,i)=>{"use strict";var r=e.r(837699),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useState,a=r.useEffect,o=r.useLayoutEffect,c=r.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!n(e,i)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var i=t(),r=s({inst:{value:i,getSnapshot:t}}),n=r[0].inst,u=r[1];return o(function(){n.value=i,n.getSnapshot=t,l(n)&&u({inst:n})},[e,i,t]),a(function(){return l(n)&&u({inst:n}),e(function(){l(n)&&u({inst:n})})},[e]),c(i),i};i.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},137385,(e,t,i)=>{"use strict";t.exports=e.r(890813)},73546,(e,t,i)=>{"use strict";var r=e.r(837699),n=e.r(137385),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useSyncExternalStore,o=r.useRef,c=r.useEffect,l=r.useMemo,u=r.useDebugValue;i.useSyncExternalStoreWithSelector=function(e,t,i,r,n){var d=o(null);if(null===d.current){var h={hasValue:!1,value:null};d.current=h}else h=d.current;var p=a(e,(d=l(function(){function e(e){if(!c){if(c=!0,a=e,e=r(e),void 0!==n&&h.hasValue){var t=h.value;if(n(t,e))return o=t}return o=e}if(t=o,s(a,e))return t;var i=r(e);return void 0!==n&&n(t,i)?(a=e,t):(a=e,o=i)}var a,o,c=!1,l=void 0===i?null:i;return[function(){return e(t())},null===l?void 0:function(){return e(l())}]},[t,i,r,n]))[0],d[1]);return c(function(){h.hasValue=!0,h.value=p},[p]),u(p),p}},798893,(e,t,i)=>{"use strict";t.exports=e.r(73546)},63944,837049,e=>{"use strict";var t=e.i(623614),i=e.i(951908),r=e.i(837699),n=e.i(248095),s=e.i(571134);class a extends s.BaseError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiError"})}get docsBaseUrl(){return"https://wagmi.sh/react"}get version(){return"wagmi@2.19.2"}}class o extends a{constructor(){super("`useConfig` must be used within `WagmiProvider`.",{docsPath:"/api/WagmiProvider"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiProviderNotFoundError"})}}function c(e={}){let t=e.config??(0,r.useContext)(n.WagmiContext);if(!t)throw new o;return t}e.s(["useConfig",()=>c],837049);var l=e.i(659001),u=e.i(798893);let d=e=>"object"==typeof e&&!Array.isArray(e);function h(e={}){let n=c(e);return function(e,t,i=t,n=l.deepEqual){let s=(0,r.useRef)([]),a=(0,u.useSyncExternalStoreWithSelector)(e,t,i,e=>e,(e,t)=>{if(d(e)&&d(t)&&s.current.length){for(let i of s.current)if(!n(e[i],t[i]))return!1;return!0}return n(e,t)});return(0,r.useMemo)(()=>{if(d(a)){let e={...a},t={};for(let[i,r]of Object.entries(e))t={...t,[i]:{configurable:!1,enumerable:!0,get:()=>(s.current.includes(i)||s.current.push(i),r)}};return Object.defineProperties(e,t),e}return a},[a])}(e=>(0,i.watchAccount)(n,{onChange:e}),()=>(0,t.getAccount)(n))}e.s(["useAccount",()=>h],63944)},517940,e=>{"use strict";var t=e.i(13365),i=e.i(837699);let r=(0,i.createContext)({theme:"dark",toggleTheme:()=>{},setTheme:()=>{}});function n({children:e}){let[n,s]=(0,i.useState)("dark"),[a,o]=(0,i.useState)(!1);(0,i.useEffect)(()=>{o(!0);let e=localStorage.getItem("theme");if(e)s(e),c(e);else{let e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";s(e),c(e)}},[]);let c=e=>{let t=document.documentElement;"dark"===e?t.classList.add("dark"):t.classList.remove("dark")},l=e=>{s(e),c(e),localStorage.setItem("theme",e)};return(0,t.jsx)(r.Provider,{value:{theme:n,toggleTheme:()=>{l("light"===n?"dark":"light")},setTheme:l},children:e})}function s(){return(0,i.useContext)(r)}e.s(["ThemeProvider",()=>n,"useTheme",()=>s])},519550,e=>{"use strict";var t=e.i(13365),i=e.i(837699),r=e.i(63944);let n=(0,i.createContext)(void 0),s="chilly_notifications";function a({children:e}){let{address:a}=(0,r.useAccount)(),[o,c]=(0,i.useState)(()=>{let e=localStorage.getItem(`${s}_${a}`);if(e)try{return JSON.parse(e)}catch(e){console.error("Failed to parse stored notifications:",e)}return[]});(0,i.useEffect)(()=>{a&&localStorage.setItem(`${s}_${a}`,JSON.stringify(o))},[o,a]);let l=(0,i.useCallback)(e=>{let t={...e,id:`${Date.now()}_${Math.random().toString(36).substr(2,9)}`,timestamp:Date.now(),read:!1};c(e=>[t,...e].slice(0,50)),"Notification"in window&&"granted"===Notification.permission&&new Notification(t.title,{body:t.message,icon:"/favicon.ico",tag:t.id})},[]),u=(0,i.useCallback)(e=>{c(t=>t.map(t=>t.id===e?{...t,read:!0}:t))},[]),d=(0,i.useCallback)(()=>{c(e=>e.map(e=>({...e,read:!0})))},[]),h=(0,i.useCallback)(e=>{c(t=>t.filter(t=>t.id!==e))},[]),p=(0,i.useCallback)(()=>{c([])},[]),m=o.filter(e=>!e.read).length;return(0,t.jsx)(n.Provider,{value:{notifications:o,unreadCount:m,addNotification:l,markAsRead:u,markAllAsRead:d,clearNotification:h,clearAllNotifications:p},children:e})}function o(){let e=(0,i.useContext)(n);if(void 0===e)throw Error("useNotifications must be used within a NotificationProvider");return e}function c(){"Notification"in window&&"default"===Notification.permission&&Notification.requestPermission()}e.s(["NotificationProvider",()=>a,"requestNotificationPermission",()=>c,"useNotifications",()=>o])},751326,e=>{"use strict";var t,i,r=((t={}).ORDER_CREATED="ORDER_CREATED",t.ORDER_UPDATED="ORDER_UPDATED",t.ORDER_CANCELLED="ORDER_CANCELLED",t.ORDER_CONFIRMED="ORDER_CONFIRMED",t.ORDER_SHIPPED="ORDER_SHIPPED",t.ORDER_DELIVERED="ORDER_DELIVERED",t.TRACKING_ADDED="TRACKING_ADDED",t.SUCCESS="SUCCESS",t.ERROR="ERROR",t.INFO="INFO",t),n=((i={})[i.Pending=0]="Pending",i[i.Confirmed=1]="Confirmed",i[i.Processing=2]="Processing",i[i.Shipped=3]="Shipped",i[i.Delivered=4]="Delivered",i[i.Cancelled=5]="Cancelled",i[i.Disputed=6]="Disputed",i);function s(e,t,i,r){let n=i||`#${t}`;switch(e){case"ORDER_CREATED":return{title:r?"Order Created":"New Order Received",message:r?`Your order ${n} has been created successfully`:`You have received a new order ${n}`};case"ORDER_CONFIRMED":return{title:"Order Confirmed",message:r?`Your order ${n} has been confirmed`:`You confirmed order ${n}`};case"ORDER_UPDATED":return{title:"Order Updated",message:`Order ${n} status has been updated`};case"ORDER_SHIPPED":return{title:r?"Order Shipped":"Order Marked as Shipped",message:r?`Your order ${n} has been shipped`:`You marked order ${n} as shipped`};case"ORDER_DELIVERED":return{title:r?"Order Delivered":"Order Marked as Delivered",message:r?`Your order ${n} has been delivered`:`Order ${n} has been marked as delivered`};case"ORDER_CANCELLED":return{title:"Order Cancelled",message:`Order ${n} has been cancelled`};case"TRACKING_ADDED":return{title:"Tracking Number Added",message:`Tracking number has been added to order ${n}`};default:return{title:"Notification",message:`Update for order ${n}`}}}e.s(["NotificationType",()=>r,"OrderStatus",()=>n,"getNotificationMessage",()=>s])},595589,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503);e.i(55906);var r=e.i(798975);e.i(301709);var n=e.i(903181),s=e.i(891947),a=e.i(411521),o=e.i(638403);let c=o.css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:e})=>e[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var l=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let u=class extends t.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){let e={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${e[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${e[this.size??"xl"]});
    `,i.html`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",i.html`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=s.UiHelperUtil.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};u.styles=[n.resetStyles,c],l([(0,r.property)()],u.prototype,"imageSrc",void 0),l([(0,r.property)()],u.prototype,"alt",void 0),l([(0,r.property)()],u.prototype,"address",void 0),l([(0,r.property)()],u.prototype,"size",void 0),u=l([(0,a.customElement)("wui-avatar")],u),e.s([],595589)},551907,e=>{"use strict";let t={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",EIP155:e.i(150169).ConstantsUtil.CHAIN.EVM,ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH",getSDKVersionWarningMessage:(e,t)=>`
     @@@@@@@           @@@@@@@@@@@@@@@@@@      
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@            @@@@@@@@@@@@@@@@@@  
      
AppKit SDK version ${e} is outdated. Latest version is ${t}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`};e.s(["ConstantsUtil",0,t])},670199,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503);e.i(55906);var r=e.i(798975);e.i(996690);var n=e.i(344912);e.i(72454),e.i(22662);var s=e.i(903181),a=e.i(411521);e.i(103914);var o=e.i(753549);let c=o.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var l=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let u=class extends t.LitElement{constructor(){super(...arguments),this.disabled=!1}render(){return i.html`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,n.ifDefined)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?i.html`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};u.styles=[s.resetStyles,c],l([(0,r.property)()],u.prototype,"errorMessage",void 0),l([(0,r.property)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,r.property)()],u.prototype,"value",void 0),l([(0,r.property)()],u.prototype,"tabIdx",void 0),u=l([(0,a.customElement)("wui-email-input")],u),e.s([],670199)},19432,e=>{"use strict";e.i(930017);var t=e.i(668503);let i=t.svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;e.s(["networkSvgMd",0,i])},899902,e=>{"use strict";e.i(722690),e.s([])},469909,e=>{"use strict";e.i(930017);var t=e.i(668503);let i=t.svg`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;e.s(["networkSvgLg",0,i])},773410,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503);e.i(55906);var r=e.i(798975),n=e.i(469909),s=e.i(19432);let a=i.svg`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;e.i(72454),e.i(301709);var o=e.i(903181),c=e.i(411521),l=e.i(638403);let u=l.css`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var d=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let h=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:a,md:s.networkSvgMd,lg:n.networkSvgLg},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${({sm:"4",md:"6",lg:"10"})[this.size]});
    `,i.html`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?i.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:i.html`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};h.styles=[o.resetStyles,u],d([(0,r.property)()],h.prototype,"size",void 0),d([(0,r.property)()],h.prototype,"name",void 0),d([(0,r.property)({type:Object})],h.prototype,"networkImagesBySize",void 0),d([(0,r.property)()],h.prototype,"imageSrc",void 0),d([(0,r.property)({type:Boolean})],h.prototype,"selected",void 0),d([(0,r.property)({type:Boolean})],h.prototype,"round",void 0),h=d([(0,c.customElement)("wui-network-image")],h),e.s([],773410)},969923,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503);e.i(55906);var r=e.i(798975),n=e.i(27926),s=e.i(455137),a=e.i(904670),o=e.i(33957);e.i(707294);var c=e.i(411521),l=e.i(753549);let u=l.css`
  :host {
    width: 100%;
    display: block;
  }
`;var d=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let h=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.text="",this.open=o.TooltipController.state.open,this.unsubscribe.push(a.RouterController.subscribeKey("view",()=>{o.TooltipController.hide()}),s.ModalController.subscribeKey("open",e=>{e||o.TooltipController.hide()}),o.TooltipController.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),o.TooltipController.hide()}render(){return i.html`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return i.html`<slot></slot> `}onMouseEnter(){let e=this.getBoundingClientRect();if(!this.open){let t=document.querySelector("w3m-modal"),i={width:e.width,height:e.height,left:e.left,top:e.top};if(t){let r=t.getBoundingClientRect();i.left=e.left-(window.innerWidth-r.width)/2,i.top=e.top-(window.innerHeight-r.height)/2}o.TooltipController.showTooltip({message:this.text,triggerRect:i,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||o.TooltipController.hide()}};h.styles=[u],d([(0,r.property)()],h.prototype,"text",void 0),d([(0,n.state)()],h.prototype,"open",void 0),h=d([(0,c.customElement)("w3m-tooltip-trigger")],h),e.s([],969923)},44068,e=>{"use strict";e.i(788655),e.s([])},788655,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503);e.i(55906);var r=e.i(798975),n=e.i(411521),s=e.i(638403);let a=s.css`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var o=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends t.LitElement{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",i.html`<slot></slot>`}};c.styles=[a],o([(0,r.property)()],c.prototype,"width",void 0),o([(0,r.property)()],c.prototype,"height",void 0),o([(0,r.property)()],c.prototype,"variant",void 0),o([(0,r.property)({type:Boolean})],c.prototype,"rounded",void 0),c=o([(0,n.customElement)("wui-shimmer")],c),e.s([],788655)},990231,e=>{"use strict";var t=e.i(707745),i=e.i(932220),r=e.i(170941),n=e.i(380970);let s=(0,t.proxy)({message:"",variant:"info",open:!1}),a=(0,r.withErrorBoundary)({state:s,subscribeKey:(e,t)=>(0,i.subscribeKey)(s,e,t),open(e,t){let{debug:i}=n.OptionsController.state,{code:r,displayMessage:a,debugMessage:o}=e;a&&i&&(s.message=a,s.variant=t,s.open=!0),o&&console.error("function"==typeof o?o():o,r?{code:r}:void 0)},warn(e,t,i){s.open=!0,s.message=e,s.variant="warning",t&&console.warn(t,i)},close(){s.open=!1,s.message="",s.variant="info"}});e.s(["AlertController",0,a])},532276,33957,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503);e.i(55906);var r=e.i(27926),n=e.i(707745),s=e.i(932220),a=e.i(170941);let o=(0,n.proxy)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),c=(0,a.withErrorBoundary)({state:o,subscribe:e=>(0,n.subscribe)(o,()=>e(o)),subscribeKey:(e,t)=>(0,s.subscribeKey)(o,e,t),showTooltip({message:e,triggerRect:t,variant:i}){o.open=!0,o.message=e,o.triggerRect=t,o.variant=i},hide(){o.open=!1,o.message="",o.triggerRect={width:0,height:0,top:0,left:0}}});e.s(["TooltipController",0,c],33957),e.i(707294);var l=e.i(411521);e.i(286715),e.i(963469),e.i(249033);var u=e.i(638403);let d=u.css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e["3"]} 10px ${({spacing:e})=>e["3"]};
    border-radius: ${({borderRadius:e})=>e["3"]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e["5"]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var h=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let p=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.open=c.state.open,this.message=c.state.message,this.triggerRect=c.state.triggerRect,this.variant=c.state.variant,this.unsubscribe.push(c.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;let e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${+!!this.open};
    `,i.html`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};p.styles=[d],h([(0,r.state)()],p.prototype,"open",void 0),h([(0,r.state)()],p.prototype,"message",void 0),h([(0,r.state)()],p.prototype,"triggerRect",void 0),h([(0,r.state)()],p.prototype,"variant",void 0),p=h([(0,l.customElement)("w3m-tooltip")],p),e.s([],532276)},928811,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503);e.i(55906);var r=e.i(798975);e.i(72454),e.i(301709),e.i(546414);var n=e.i(808529);function s(e,t,i){return e!==t&&(e-t<0?t-e:e-t)<=i+.1}let a={generate({uri:e,size:t,logoSize:r,padding:a=8,dotColor:o="var(--apkt-colors-black)"}){let c,l,u=[],d=(l=Math.sqrt((c=Array.prototype.slice.call(n.default.create(e,{errorCorrectionLevel:"Q"}).modules.data,0)).length),c.reduce((e,t,i)=>(i%l==0?e.push([t]):e[e.length-1].push(t))&&e,[])),h=(t-2*a)/d.length,p=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];p.forEach(({x:e,y:t})=>{let r=(d.length-7)*h*e+a,n=(d.length-7)*h*t+a;for(let e=0;e<p.length;e+=1){let t=h*(7-2*e);u.push(i.svg`
            <rect
              fill=${2===e?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===e?t-10:t}
              rx= ${0===e?(t-10)*.45:.45*t}
              ry= ${0===e?(t-10)*.45:.45*t}
              stroke=${o}
              stroke-width=${10*(0===e)}
              height=${0===e?t-10:t}
              x= ${0===e?n+h*e+5:n+h*e}
              y= ${0===e?r+h*e+5:r+h*e}
            />
          `)}});let m=Math.floor((r+25)/h),f=d.length/2-m/2,y=d.length/2+m/2-1,g=[];d.forEach((e,t)=>{e.forEach((e,i)=>{!d[t][i]||t<7&&i<7||t>d.length-8&&i<7||t<7&&i>d.length-8||t>f&&t<y&&i>f&&i<y||g.push([t*h+h/2+a,i*h+h/2+a])})});let v={};return g.forEach(([e,t])=>{v[e]?v[e]?.push(t):v[e]=[t]}),Object.entries(v).map(([e,t])=>{let i=t.filter(e=>t.every(t=>!s(e,t,h)));return[Number(e),i]}).forEach(([e,t])=>{t.forEach(t=>{u.push(i.svg`<circle cx=${e} cy=${t} fill=${o} r=${h/2.5} />`)})}),Object.entries(v).filter(([e,t])=>t.length>1).map(([e,t])=>{let i=t.filter(e=>t.some(t=>s(e,t,h)));return[Number(e),i]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let i=[];for(let e of t){let t=i.find(t=>t.some(t=>s(e,t,h)));t?t.push(e):i.push([e])}return[e,i.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{u.push(i.svg`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${o}
                stroke-width=${h/1.25}
                stroke-linecap="round"
              />
            `)})}),u}};var o=e.i(903181),c=e.i(411521),l=e.i(638403);let u=l.css`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var d=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let h=class extends t.LitElement{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),i.html`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return i.svg`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${a.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?i.html`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?i.html`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:i.html`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};h.styles=[o.resetStyles,u],d([(0,r.property)()],h.prototype,"uri",void 0),d([(0,r.property)({type:Number})],h.prototype,"size",void 0),d([(0,r.property)()],h.prototype,"theme",void 0),d([(0,r.property)()],h.prototype,"imageSrc",void 0),d([(0,r.property)()],h.prototype,"alt",void 0),d([(0,r.property)({type:Boolean})],h.prototype,"arenaClear",void 0),d([(0,r.property)({type:Boolean})],h.prototype,"farcaster",void 0),h=d([(0,c.customElement)("wui-qr-code")],h),e.s([],928811)},816261,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503);e.i(55906);var r=e.i(798975),n=e.i(903181),s=e.i(411521),a=e.i(638403);let o=a.css`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var c=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let l=class extends t.LitElement{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return i.html`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};l.styles=[n.resetStyles,o],c([(0,r.property)({type:Number})],l.prototype,"radius",void 0),l=c([(0,s.customElement)("wui-loading-thumbnail")],l),e.s([],816261)},56885,909385,e=>{"use strict";var t=e.i(707745),i=e.i(932220);let r=(0,t.proxy)({isLegalCheckboxChecked:!1}),n={state:r,subscribe:e=>(0,t.subscribe)(r,()=>e(r)),subscribeKey:(e,t)=>(0,i.subscribeKey)(r,e,t),setIsLegalCheckboxChecked(e){r.isLegalCheckboxChecked=e}};e.s(["OptionsStateController",0,n],56885),e.i(930017);var s=e.i(154747),a=e.i(668503);e.i(55906);var o=e.i(27926),c=e.i(380970);e.i(707294);var l=e.i(411521),u=s,d=e.i(798975);e.i(996690);var h=e.i(344912);e.i(588419);var p=e.i(757688);e.i(72454),e.i(22662);var m=e.i(903181),f=e.i(638403);let y=f.css`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:e})=>e[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:e})=>e.neutrals400};
    color: ${({colors:e})=>e.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:e})=>e.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:e})=>e[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:e})=>e.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:e})=>e.neutrals700};
    background-color: ${({colors:e})=>e.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:e})=>e.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:e})=>e.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var g=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let v={lg:"md",md:"sm",sm:"sm"},b=class extends u.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,p.createRef)(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){let e=v[this.size];return a.html`
      <label data-size=${this.size}>
        <input
          ${(0,p.ref)(this.inputElementRef)}
          ?checked=${(0,h.ifDefined)(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${e}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};b.styles=[m.resetStyles,y],g([(0,d.property)({type:Boolean})],b.prototype,"checked",void 0),g([(0,d.property)({type:Boolean})],b.prototype,"disabled",void 0),g([(0,d.property)()],b.prototype,"size",void 0),b=g([(0,l.customElement)("wui-checkbox")],b),e.i(249033);let w=f.css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:e})=>e["3"]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.theme.textSecondary};
    font-weight: 500;
  }
`;var x=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let C=class extends s.LitElement{constructor(){super(),this.unsubscribe=[],this.checked=n.state.isLegalCheckboxChecked,this.unsubscribe.push(n.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=c.OptionsController.state,i=c.OptionsController.state.features?.legalCheckbox;return(e||t)&&i?a.html`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=c.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=c.OptionsController.state;return e?a.html`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=c.OptionsController.state;return e?a.html`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}onCheckboxChange(){n.setIsLegalCheckboxChecked(!this.checked)}};C.styles=[w],x([(0,o.state)()],C.prototype,"checked",void 0),C=x([(0,l.customElement)("w3m-legal-checkbox")],C),e.s([],909385)},539363,57589,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503);e.i(55906);var r=e.i(27926),n=e.i(380970);e.i(707294);var s=e.i(411521);e.i(286715),e.i(249033);var a=t;e.i(72454),e.i(22662),e.i(546414);var o=e.i(903181),c=e.i(638403);let l=c.css`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`,u=class extends a.LitElement{render(){return i.html`
      <a
        data-testid="ux-branding-reown"
        href=${"https://reown.com"}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};u.styles=[o.resetStyles,o.elementStyles,l],u=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}([(0,s.customElement)("wui-ux-by-reown")],u),e.s([],57589);let d=c.css`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e["3"]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var h=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let p=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=n.OptionsController.state.remoteFeatures,this.unsubscribe.push(n.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.OptionsController.state,r=n.OptionsController.state.features?.legalCheckbox;return(e||t)&&!r?i.html`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `:i.html`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=n.OptionsController.state;return e?i.html`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){let{privacyPolicyUrl:e}=n.OptionsController.state;return e?i.html`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?i.html`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:i.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}};p.styles=[d],h([(0,r.state)()],p.prototype,"remoteFeatures",void 0),p=h([(0,s.customElement)("w3m-legal-footer")],p),e.s([],539363)},440984,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503),r=e.i(729289),n=e.i(914139),s=e.i(380970),a=e.i(904670),o=e.i(843175);e.i(707294);var c=e.i(411521);e.i(286715),e.i(963469),e.i(671119),e.i(249033);var l=e.i(45471),u=e.i(753549);let d=u.css``,h=class extends t.LitElement{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=s.OptionsController.state;return e||t?i.html`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return i.html` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){n.EventsController.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,o.getPreferredAccountType)(r.ChainController.state.activeChain)===l.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),a.RouterController.push("WhatIsABuy")}};h.styles=[d],h=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}([(0,c.customElement)("w3m-onramp-providers-footer")],h),e.s([],440984)},722690,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503);e.i(55906);var r=e.i(798975);e.i(72454),e.i(301709);var n=e.i(903181),s=e.i(411521);e.i(221829);var a=e.i(638403);let o=a.css`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var c=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let l=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="1";return"lg"===this.size?e="4":"md"===this.size?e="2":"sm"===this.size&&(e="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${e});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),i.html`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?i.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?i.html`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:i.html`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};l.styles=[n.resetStyles,o],c([(0,r.property)()],l.prototype,"size",void 0),c([(0,r.property)()],l.prototype,"name",void 0),c([(0,r.property)()],l.prototype,"imageSrc",void 0),c([(0,r.property)()],l.prototype,"walletIcon",void 0),c([(0,r.property)({type:Boolean})],l.prototype,"installed",void 0),c([(0,r.property)()],l.prototype,"badgeSize",void 0),l=c([(0,s.customElement)("wui-wallet-image")],l),e.s([],722690)},690648,e=>{"use strict";var t=e.i(336244);let i={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]};e.s(["ConstantsUtil",0,i])},222101,e=>{"use strict";var t=e.i(150169),i=e.i(380970),r=e.i(904670),n=e.i(690648);e.s(["HelpersUtil",0,{getTabsByNamespace:e=>e&&e===t.ConstantsUtil.CHAIN.EVM?i.OptionsController.state.remoteFeatures?.activity===!1?n.ConstantsUtil.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):n.ConstantsUtil.ACCOUNT_TABS:[],isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){let e=r.RouterController.state.view;if(n.ConstantsUtil.VIEWS_WITH_LEGAL_FOOTER.includes(e)){let{termsConditionsUrl:e,privacyPolicyUrl:t}=i.OptionsController.state,r=i.OptionsController.state.features?.legalCheckbox;return(!!e||!!t)&&!r}return n.ConstantsUtil.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}}])},475506,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503);e.i(55906);var r=e.i(798975);e.i(72454),e.i(22662);var n=e.i(903181),s=e.i(411521),a=e.i(638403);let o=a.css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    text-transform: uppercase;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var c=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let l=class extends t.LitElement{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let e="md"===this.size?"md-medium":"sm-medium",t="md"===this.size?"md":"sm";return i.html`
      ${this.icon?i.html`<wui-icon size=${t} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${e}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};l.styles=[n.resetStyles,o],c([(0,r.property)()],l.prototype,"variant",void 0),c([(0,r.property)()],l.prototype,"size",void 0),c([(0,r.property)()],l.prototype,"icon",void 0),l=c([(0,s.customElement)("wui-tag")],l),e.s([],475506)},229588,e=>{"use strict";e.i(930017);var t,i,r=e.i(154747),n=e.i(668503);e.i(55906);var s=e.i(798975),a=e.i(27926),o=e.i(965431),c=e.i(729289),l=e.i(232674),u=e.i(914139),d=e.i(380970),h=e.i(904670),p=e.i(572603),m=e.i(843175);e.i(707294);var f=e.i(128060),y=e.i(411521);e.i(286715),e.i(895520),e.i(671119),e.i(249033);var g=r;e.i(996690);var v=e.i(344912);e.i(22662);var b=e.i(903181);(t=i||(i={})).approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn";var w=r;e.i(301709),e.i(221829);var x=e.i(638403);let C=x.css`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var E=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let $=class extends w.LitElement{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images;this.images.length||(this.dataset.noImages="true");let i=e?.type==="NFT",r=t?.url?"NFT"===t.type:i;return this.style.cssText=`
    --local-left-border-radius: ${i?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    --local-right-border-radius: ${r?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    `,n.html`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,i=e?.type;return 2===this.images.length&&(e?.url||t?.url)?n.html`<div class="swap-images-container">
        ${e?.url?n.html`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?n.html`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?n.html`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===i?n.html`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`:n.html`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-primary";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?n.html`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${t} icon=${e}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontal":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};$.styles=[C],E([(0,s.property)()],$.prototype,"type",void 0),E([(0,s.property)()],$.prototype,"status",void 0),E([(0,s.property)()],$.prototype,"direction",void 0),E([(0,s.property)({type:Boolean})],$.prototype,"onlyDirectionIcon",void 0),E([(0,s.property)({type:Array})],$.prototype,"images",void 0),E([(0,s.property)({type:Object})],$.prototype,"secondImage",void 0),$=E([(0,y.customElement)("wui-transaction-visual")],$);let T=x.css`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var k=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let P=class extends g.LitElement{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return n.html`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,v.ifDefined)(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${i[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?n.html`
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?n.html`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}};P.styles=[b.resetStyles,T],k([(0,s.property)()],P.prototype,"type",void 0),k([(0,s.property)({type:Array})],P.prototype,"descriptions",void 0),k([(0,s.property)()],P.prototype,"date",void 0),k([(0,s.property)({type:Boolean})],P.prototype,"onlyDirectionIcon",void 0),k([(0,s.property)()],P.prototype,"status",void 0),k([(0,s.property)()],P.prototype,"direction",void 0),k([(0,s.property)({type:Array})],P.prototype,"images",void 0),P=k([(0,y.customElement)("wui-transaction-list-item")],P);var A=r;e.i(788655),e.i(546414);var O=r;e.i(72454);let S=x.css`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[128]};
  }

  .fallback-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
    border-radius: ${({borderRadius:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:e})=>e[128]};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:e})=>e["01"]};
    color: ${({tokens:e})=>e.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:e})=>e.core.textSuccess} 30%,
      ${({tokens:e})=>e.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var _=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let R={sm:"xxs",lg:"md"},I=class extends O.LitElement{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return n.html`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){let[e,t]=this.images;return 2===this.images.length&&(e||t)?n.html`
        <wui-image class="swap-crop-left-image" src=${e} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${t} alt="Swap image"></wui-image>
      `:e?n.html`<wui-image src=${e} alt="Swap image"></wui-image>`:null}fiatTemplate(){return n.html`<wui-icon
      class="fallback-icon"
      size=${R[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return n.html`<wui-icon
      class="fallback-icon"
      size=${R[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){let[e]=this.images;return e?n.html`<wui-image src=${e} alt="Token image"></wui-image> `:n.html`<wui-icon
      class="fallback-icon"
      name=${"nft"===this.type?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?n.html`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:n.html`<wui-icon
      class="direction-icon"
      size=${R[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return"trade"===this.type?"arrowClockWise":"arrowBottom"}};I.styles=[S],_([(0,s.property)()],I.prototype,"type",void 0),_([(0,s.property)()],I.prototype,"size",void 0),_([(0,s.property)()],I.prototype,"statusImageUrl",void 0),_([(0,s.property)({type:Array})],I.prototype,"images",void 0),I=_([(0,y.customElement)("wui-transaction-thumbnail")],I);let j=x.css`
  :host > wui-flex:first-child {
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,N=class extends A.LitElement{render(){return n.html`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};N.styles=[b.resetStyles,j],N=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}([(0,y.customElement)("wui-transaction-list-item-loader")],N);var D=e.i(45471);let U=x.css`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:e})=>e["3"]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e["3"]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var B=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let M="last-transaction",L=class extends r.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=c.ChainController.state.activeCaipAddress,this.transactionsByYear=p.TransactionsController.state.transactionsByYear,this.loading=p.TransactionsController.state.loading,this.empty=p.TransactionsController.state.empty,this.next=p.TransactionsController.state.next,p.TransactionsController.clearCursor(),this.unsubscribe.push(c.ChainController.subscribeKey("activeCaipAddress",e=>{e&&this.caipAddress!==e&&(p.TransactionsController.resetTransactions(),p.TransactionsController.fetchTransactions(e)),this.caipAddress=e}),c.ChainController.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),p.TransactionsController.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n.html` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){p.TransactionsController.resetTransactions(),this.caipAddress&&p.TransactionsController.fetchTransactions(l.CoreHelperUtil.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(e=>{let t=parseInt(e,10),i=Array(12).fill(null).map((e,i)=>({groupTitle:f.TransactionUtil.getTransactionGroupTitle(t,i),transactions:this.transactionsByYear[t]?.[i]})).filter(({transactions:e})=>e).reverse();return i.map(({groupTitle:e,transactions:t},r)=>{let s=r===i.length-1;return t?n.html`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${s?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${e}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(t,s)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){let{date:i,descriptions:r,direction:s,images:a,status:o,type:c,transfers:l,isAllNFT:u}=this.getTransactionListItemProps(e);return n.html`
      <wui-transaction-list-item
        date=${i}
        .direction=${s}
        id=${t&&this.next?M:""}
        status=${o}
        type=${c}
        .images=${a}
        .onlyDirectionIcon=${u||1===l.length}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((i,r)=>{let s=t&&r===e.length-1;return n.html`${this.templateRenderTransaction(i,s)}`})}emptyStateActivity(){return n.html`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return n.html`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?n.html`${this.emptyStateAccount()}`:n.html`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(n.html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){h.RouterController.push("WalletReceive")}createPaginationObserver(){let{projectId:e}=d.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(p.TransactionsController.fetchTransactions(l.CoreHelperUtil.getPlainAddress(this.caipAddress)),u.EventsController.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:l.CoreHelperUtil.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:(0,m.getPreferredAccountType)(c.ChainController.state.activeChain)===D.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${M}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=o.DateUtil.formatDate(e?.metadata?.minedAt),i=f.TransactionUtil.mergeTransfers(e?.transfers),r=f.TransactionUtil.getTransactionDescriptions(e,i),n=i?.[0],s=!!n&&i?.every(e=>!!e.nft_info),a=f.TransactionUtil.getTransactionImages(i);return{date:t,direction:n?.direction,descriptions:r,isAllNFT:s,images:a,status:e.metadata?.status,transfers:i,type:e.metadata?.operationType}}};L.styles=U,B([(0,s.property)()],L.prototype,"page",void 0),B([(0,a.state)()],L.prototype,"caipAddress",void 0),B([(0,a.state)()],L.prototype,"transactionsByYear",void 0),B([(0,a.state)()],L.prototype,"loading",void 0),B([(0,a.state)()],L.prototype,"empty",void 0),B([(0,a.state)()],L.prototype,"next",void 0),L=B([(0,y.customElement)("w3m-activity-list")],L),e.s([],229588)},463191,e=>{"use strict";var t=e.i(810393);let i=(0,e.i(724293).defineChain)({...t.chainConfig,id:44787,name:"Alfajores",nativeCurrency:{decimals:18,name:"CELO",symbol:"A-CELO"},rpcUrls:{default:{http:["https://alfajores-forno.celo-testnet.org"]}},blockExplorers:{default:{name:"Celo Alfajores Explorer",url:"https://celo-alfajores.blockscout.com",apiUrl:"https://celo-alfajores.blockscout.com/api"}},contracts:{...t.chainConfig.contracts,multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:0xde4e29},portal:{17e3:{address:"0x82527353927d8D069b3B452904c942dA149BA381",blockCreated:2411324}},disputeGameFactory:{17e3:{address:"0xE28AAdcd9883746c0e5068F58f9ea06027b214cb",blockCreated:2411324}},l2OutputOracle:{17e3:{address:"0x4a2635e9e4f6e45817b1D402ac4904c1d1752438",blockCreated:2411324}},l1StandardBridge:{17e3:{address:"0xD1B0E0581973c9eB7f886967A606b9441A897037",blockCreated:2411324}}},testnet:!0});e.s(["celoAlfajores",0,i])},599376,e=>{"use strict";var t=e.i(236288);function i(e,r={}){let{key:n="custom",methods:s,name:a="Custom Provider",retryDelay:o}=r;return({retryCount:i})=>(0,t.createTransport)({key:n,methods:s,name:a,request:e.request.bind(e),retryCount:r.retryCount??i,retryDelay:o,type:"custom"})}e.s(["custom",()=>i])},754674,e=>{"use strict";var t=e.i(358372),i=e.i(899812),r=e.i(230612),n=e.i(567365),s=e.i(865681),a=e.i(262479);async function o(e,t){return o.internal(e,a.sendTransaction,"sendTransaction",t)}(o||(o={})).internal=async function(e,a,o,c){let{abi:l,account:u=e.account,address:d,args:h,dataSuffix:p,functionName:m,...f}=c;if(void 0===u)throw new i.AccountNotFoundError({docsPath:"/docs/contract/writeContract"});let y=u?(0,t.parseAccount)(u):null,g=(0,r.encodeFunctionData)({abi:l,args:h,functionName:m});try{return await (0,s.getAction)(e,a,o)({data:`${g}${p?p.replace("0x",""):""}`,to:d,account:y,...f})}catch(e){throw(0,n.getContractError)(e,{abi:l,address:d,args:h,docsPath:"/docs/contract/writeContract",functionName:m,sender:y?.address})}},e.s(["writeContract",()=>o])},67965,e=>{"use strict";var t=e.i(358372),i=e.i(899812),r=e.i(574744);async function n(e,{account:n=e.account,message:s}){if(!n)throw new i.AccountNotFoundError({docsPath:"/docs/actions/wallet/signMessage"});let a=(0,t.parseAccount)(n);if(a.signMessage)return a.signMessage({message:s});let o="string"==typeof s?(0,r.stringToHex)(s):s.raw instanceof Uint8Array?(0,r.toHex)(s.raw):s.raw;return e.request({method:"personal_sign",params:[o,a.address]},{retryCount:0})}e.s(["signMessage",()=>n])},671119,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503);e.i(55906);var r=e.i(798975);e.i(72454),e.i(22662);var n=e.i(903181),s=e.i(411521),a=e.i(638403);let o=a.css`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({spacing:e})=>e[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var c=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let l={sm:"sm-medium",md:"md-medium"},u={accent:"accent-primary",secondary:"secondary"},d=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return i.html`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${u[this.variant]}
          variant=${l[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?i.html`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};d.styles=[n.resetStyles,n.elementStyles,o],c([(0,r.property)()],d.prototype,"size",void 0),c([(0,r.property)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,r.property)()],d.prototype,"variant",void 0),c([(0,r.property)()],d.prototype,"icon",void 0),d=c([(0,s.customElement)("wui-link")],d),e.s([],671119)},322470,e=>{"use strict";e.i(610663),e.s([])},374476,e=>{"use strict";e.s(["NavigationUtil",0,{URLS:{FAQ:"https://walletconnect.com/faq"}}])},915076,e=>{"use strict";var t=e.i(707745),i=e.i(932220);let r={convertEVMChainIdToCoinType(e){if(e>=0x80000000)throw Error("Invalid chainId");return(0x80000000|e)>>>0}};var n=e.i(918094),s=e.i(170941),a=e.i(486071),o=e.i(729289),c=e.i(804499),l=e.i(374182),u=e.i(904670);let d=(0,t.proxy)({suggestions:[],loading:!1}),h=(0,s.withErrorBoundary)({state:d,subscribe:e=>(0,t.subscribe)(d,()=>e(d)),subscribeKey:(e,t)=>(0,i.subscribeKey)(d,e,t),async resolveName(e){try{return await a.BlockchainApiController.lookupEnsName(e)}catch(e){throw Error(e?.reasons?.[0]?.description||"Error resolving name")}},async isNameRegistered(e){try{return await a.BlockchainApiController.lookupEnsName(e),!0}catch{return!1}},async getSuggestions(e){try{return d.loading=!0,d.suggestions=[],d.suggestions=(await a.BlockchainApiController.getEnsNameSuggestions(e)).suggestions||[],d.suggestions}catch(e){throw Error(h.parseEnsApiError(e,"Error fetching name suggestions"))}finally{d.loading=!1}},async getNamesForAddress(e){try{if(!o.ChainController.state.activeCaipNetwork)return[];let t=n.StorageUtil.getEnsFromCacheForAddress(e);if(t)return t;let i=await a.BlockchainApiController.reverseLookupEnsName({address:e});return n.StorageUtil.updateEnsCache({address:e,ens:i,timestamp:Date.now()}),i}catch(e){throw Error(h.parseEnsApiError(e,"Error fetching names for address"))}},async registerName(e){let t=o.ChainController.state.activeCaipNetwork,i=o.ChainController.getAccountData(t?.chainNamespace)?.address,s=l.ConnectorController.getAuthConnector();if(!t)throw Error("Network not found");if(!i||!s)throw Error("Address or auth connector not found");d.loading=!0;try{let s=JSON.stringify({name:e,attributes:{},timestamp:Math.floor(Date.now()/1e3)});u.RouterController.pushTransactionStack({onCancel(){u.RouterController.replace("RegisterAccountName")}});let l=await c.ConnectionController.signMessage(s);d.loading=!1;let h=t.id;if(!h)throw Error("Network not found");let p=r.convertEVMChainIdToCoinType(Number(h));await a.BlockchainApiController.registerEnsName({coinType:p,address:i,signature:l,message:s}),o.ChainController.setAccountProp("profileName",e,t.chainNamespace),n.StorageUtil.updateEnsCache({address:i,ens:[{name:e,registered_at:new Date().toISOString(),updated_at:void 0,addresses:{},attributes:[]}],timestamp:Date.now()}),u.RouterController.replace("RegisterAccountNameSuccess")}catch(i){let t=h.parseEnsApiError(i,`Error registering name ${e}`);throw u.RouterController.replace("RegisterAccountName"),Error(t)}finally{d.loading=!1}},validateName:e=>/^[a-zA-Z0-9-]{4,}$/u.test(e),parseEnsApiError:(e,t)=>e?.reasons?.[0]?.description||t});e.s(["EnsController",0,h],915076)},682511,e=>{"use strict";var t=e.i(571134);class i extends t.BaseError{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class r extends t.BaseError{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class n extends t.BaseError{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}t.BaseError;class s extends t.BaseError{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class a extends t.BaseError{constructor({connectionChainId:e,connectorChainId:t}){super(`The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorChainMismatchError"})}}class o extends t.BaseError{constructor({connector:e}){super(`Connector "${e.name}" unavailable while reconnecting.`,{details:"During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorUnavailableReconnectingError"})}}e.s(["ChainNotConfiguredError",()=>i,"ConnectorAccountNotFoundError",()=>s,"ConnectorAlreadyConnectedError",()=>r,"ConnectorChainMismatchError",()=>a,"ConnectorNotConnectedError",()=>n,"ConnectorUnavailableReconnectingError",()=>o])},556254,27563,263622,e=>{"use strict";var t=e.i(312425),i=e.i(574744),r=e.i(105097),n=e.i(570585),s=e.i(256265),a=e.i(682511),o=e.i(571134);class c extends o.BaseError{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class l extends o.BaseError{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}function u(e){return e}function d(e={}){let o,l,u,m,{shimDisconnect:f=!0,unstable_shimAsyncInject:y}=e;function g(){let t=e.target;if("function"==typeof t){let e=t();if(e)return e}return"object"==typeof t?t:"string"==typeof t?{...h[t]??{id:t,name:`${t[0].toUpperCase()}${t.slice(1)}`,provider:`is${t[0].toUpperCase()}${t.slice(1)}`}}:{id:"injected",name:"Injected",provider:e=>e?.ethereum}}return h=>({get icon(){return g().icon},get id(){return g().id},get name(){return g().name},get supportsSimulation(){return!0},type:d.type,async setup(){let t=await this.getProvider();t?.on&&e.target&&(u||(u=this.onConnect.bind(this),t.on("connect",u)),o||(o=this.onAccountsChanged.bind(this),t.on("accountsChanged",o)))},async connect({chainId:i,isReconnecting:n,withCapabilities:s}={}){let a=await this.getProvider();if(!a)throw new c;let d=[];if(n)d=await this.getAccounts().catch(()=>[]);else if(f)try{let e=await a.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});(d=e[0]?.caveats?.[0]?.value?.map(e=>(0,t.getAddress)(e))).length>0&&(d=await this.getAccounts())}catch(e){if(e.code===r.UserRejectedRequestError.code)throw new r.UserRejectedRequestError(e);if(e.code===r.ResourceUnavailableRpcError.code)throw e}try{d?.length||n||(d=(await a.request({method:"eth_requestAccounts"})).map(e=>(0,t.getAddress)(e))),u&&(a.removeListener("connect",u),u=void 0),o||(o=this.onAccountsChanged.bind(this),a.on("accountsChanged",o)),l||(l=this.onChainChanged.bind(this),a.on("chainChanged",l)),m||(m=this.onDisconnect.bind(this),a.on("disconnect",m));let c=await this.getChainId();if(i&&c!==i){let e=await this.switchChain({chainId:i}).catch(e=>{if(e.code===r.UserRejectedRequestError.code)throw e;return{id:c}});c=e?.id??c}return f&&await h.storage?.removeItem(`${this.id}.disconnected`),e.target||await h.storage?.setItem("injected.connected",!0),{accounts:s?d.map(e=>({address:e,capabilities:{}})):d,chainId:c}}catch(e){if(e.code===r.UserRejectedRequestError.code)throw new r.UserRejectedRequestError(e);if(e.code===r.ResourceUnavailableRpcError.code)throw new r.ResourceUnavailableRpcError(e);throw e}},async disconnect(){let t=await this.getProvider();if(!t)throw new c;l&&(t.removeListener("chainChanged",l),l=void 0),m&&(t.removeListener("disconnect",m),m=void 0),u||(u=this.onConnect.bind(this),t.on("connect",u));try{await (0,s.withTimeout)(()=>t.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]}),{timeout:100})}catch{}f&&await h.storage?.setItem(`${this.id}.disconnected`,!0),e.target||await h.storage?.removeItem("injected.connected")},async getAccounts(){let e=await this.getProvider();if(!e)throw new c;return(await e.request({method:"eth_accounts"})).map(e=>(0,t.getAddress)(e))},async getChainId(){let e=await this.getProvider();if(!e)throw new c;return Number(await e.request({method:"eth_chainId"}))},async getProvider(){let e;if("undefined"==typeof window)return;let t=g();return(e="function"==typeof t.provider?t.provider(window):"string"==typeof t.provider?p(window,t.provider):t.provider)&&!e.removeListener&&("off"in e&&"function"==typeof e.off?e.removeListener=e.off:e.removeListener=()=>{}),e},async isAuthorized(){try{if(f&&await h.storage?.getItem(`${this.id}.disconnected`)||!e.target&&!await h.storage?.getItem("injected.connected"))return!1;if(!await this.getProvider()){if(void 0!==y&&!1!==y){let e=async()=>("undefined"!=typeof window&&window.removeEventListener("ethereum#initialized",e),!!await this.getProvider()),t="number"==typeof y?y:1e3;if(await Promise.race([..."undefined"!=typeof window?[new Promise(t=>window.addEventListener("ethereum#initialized",()=>t(e()),{once:!0}))]:[],new Promise(i=>setTimeout(()=>i(e()),t))]))return!0}throw new c}return!!(await (0,n.withRetry)(()=>this.getAccounts())).length}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let n=await this.getProvider();if(!n)throw new c;let s=h.chains.find(e=>e.id===t);if(!s)throw new r.SwitchChainError(new a.ChainNotConfiguredError);let o=new Promise(e=>{let i=r=>{"chainId"in r&&r.chainId===t&&(h.emitter.off("change",i),e())};h.emitter.on("change",i)});try{return await Promise.all([n.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,i.numberToHex)(t)}]}).then(async()=>{await this.getChainId()===t&&h.emitter.emit("change",{chainId:t})}),o]),s}catch(a){if(4902===a.code||a?.data?.originalError?.code===4902)try{let a,c,{default:l,...u}=s.blockExplorers??{};e?.blockExplorerUrls?a=e.blockExplorerUrls:l&&(a=[l.url,...Object.values(u).map(e=>e.url)]),c=e?.rpcUrls?.length?e.rpcUrls:[s.rpcUrls.default?.http[0]??""];let d={blockExplorerUrls:a,chainId:(0,i.numberToHex)(t),chainName:e?.chainName??s.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??s.nativeCurrency,rpcUrls:c};return await Promise.all([n.request({method:"wallet_addEthereumChain",params:[d]}).then(async()=>{if(await this.getChainId()===t)h.emitter.emit("change",{chainId:t});else throw new r.UserRejectedRequestError(Error("User rejected switch after adding network."))}),o]),s}catch(e){throw new r.UserRejectedRequestError(e)}if(a.code===r.UserRejectedRequestError.code)throw new r.UserRejectedRequestError(a);throw new r.SwitchChainError(a)}},async onAccountsChanged(e){if(0===e.length)this.onDisconnect();else if(h.emitter.listenerCount("connect")){let e=(await this.getChainId()).toString();this.onConnect({chainId:e}),f&&await h.storage?.removeItem(`${this.id}.disconnected`)}else h.emitter.emit("change",{accounts:e.map(e=>(0,t.getAddress)(e))})},onChainChanged(e){let t=Number(e);h.emitter.emit("change",{chainId:t})},async onConnect(e){let t=await this.getAccounts();if(0===t.length)return;let i=Number(e.chainId);h.emitter.emit("connect",{accounts:t,chainId:i});let r=await this.getProvider();r&&(u&&(r.removeListener("connect",u),u=void 0),o||(o=this.onAccountsChanged.bind(this),r.on("accountsChanged",o)),l||(l=this.onChainChanged.bind(this),r.on("chainChanged",l)),m||(m=this.onDisconnect.bind(this),r.on("disconnect",m)))},async onDisconnect(e){let t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(h.emitter.emit("disconnect"),t&&(l&&(t.removeListener("chainChanged",l),l=void 0),m&&(t.removeListener("disconnect",m),m=void 0),u||(u=this.onConnect.bind(this),t.on("connect",u))))}})}e.s(["ProviderNotFoundError",()=>c,"SwitchChainNotSupportedError",()=>l],27563),e.s(["createConnector",()=>u],263622),d.type="injected";let h={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider:e=>e?.coinbaseWalletExtension?e.coinbaseWalletExtension:p(e,"isCoinbaseWallet")},metaMask:{id:"metaMask",name:"MetaMask",provider:e=>p(e,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;for(let t of["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPhantom","isPortal","isRabby","isTokenPocket","isTokenary","isUniswapWallet","isZerion"])if(e[t])return!1;return!0})},phantom:{id:"phantom",name:"Phantom",provider:e=>e?.phantom?.ethereum?e.phantom?.ethereum:p(e,"isPhantom")}};function p(e,t){function i(e){return"function"==typeof t?t(e):"string"!=typeof t||e[t]}let r=e.ethereum;return r?.providers?r.providers.find(e=>i(e)):r&&i(r)?r:void 0}e.s(["injected",()=>d],556254)},823414,495411,e=>{"use strict";var t=e.i(743854);t.default,e.s([],823414),e.s(["EventEmitter",()=>t.default],495411)},743854,(e,t,i)=>{"use strict";var r=Object.prototype.hasOwnProperty,n="~";function s(){}function a(e,t,i){this.fn=e,this.context=t,this.once=i||!1}function o(e,t,i,r,s){if("function"!=typeof i)throw TypeError("The listener must be a function");var o=new a(i,r||e,s),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],o]:e._events[c].push(o):(e._events[c]=o,e._eventsCount++),e}function c(e,t){0==--e._eventsCount?e._events=new s:delete e._events[t]}function l(){this._events=new s,this._eventsCount=0}Object.create&&(s.prototype=Object.create(null),new s().__proto__||(n=!1)),l.prototype.eventNames=function(){var e,t,i=[];if(0===this._eventsCount)return i;for(t in e=this._events)r.call(e,t)&&i.push(n?t.slice(1):t);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},l.prototype.listeners=function(e){var t=n?n+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,a=Array(s);r<s;r++)a[r]=i[r].fn;return a},l.prototype.listenerCount=function(e){var t=n?n+e:e,i=this._events[t];return i?i.fn?1:i.length:0},l.prototype.emit=function(e,t,i,r,s,a){var o=n?n+e:e;if(!this._events[o])return!1;var c,l,u=this._events[o],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,i),!0;case 4:return u.fn.call(u.context,t,i,r),!0;case 5:return u.fn.call(u.context,t,i,r,s),!0;case 6:return u.fn.call(u.context,t,i,r,s,a),!0}for(l=1,c=Array(d-1);l<d;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var h,p=u.length;for(l=0;l<p;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),d){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,i);break;case 4:u[l].fn.call(u[l].context,t,i,r);break;default:if(!c)for(h=1,c=Array(d-1);h<d;h++)c[h-1]=arguments[h];u[l].fn.apply(u[l].context,c)}}return!0},l.prototype.on=function(e,t,i){return o(this,e,t,i,!1)},l.prototype.once=function(e,t,i){return o(this,e,t,i,!0)},l.prototype.removeListener=function(e,t,i,r){var s=n?n+e:e;if(!this._events[s])return this;if(!t)return c(this,s),this;var a=this._events[s];if(a.fn)a.fn!==t||r&&!a.once||i&&a.context!==i||c(this,s);else{for(var o=0,l=[],u=a.length;o<u;o++)(a[o].fn!==t||r&&!a[o].once||i&&a[o].context!==i)&&l.push(a[o]);l.length?this._events[s]=1===l.length?l[0]:l:c(this,s)}return this},l.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&c(this,t)):(this._events=new s,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=n,l.EventEmitter=l,t.exports=l},239453,705157,e=>{"use strict";var t=e.i(847542),i=e.i(692577);let r={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844","0x4":"eip7702"};function n(e,t){let n={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,i.hexToNumber)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,i.hexToNumber)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?r[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return e.authorizationList&&(n.authorizationList=e.authorizationList.map(e=>({address:e.address,chainId:Number(e.chainId),nonce:Number(e.nonce),r:e.r,s:e.s,yParity:Number(e.yParity)}))),n.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"==typeof n.v){if(0n===n.v||27n===n.v)return 0;if(1n===n.v||28n===n.v)return 1;if(n.v>=35n)return+(n.v%2n===0n)}})(),"legacy"===n.type&&(delete n.accessList,delete n.maxFeePerBlobGas,delete n.maxFeePerGas,delete n.maxPriorityFeePerGas,delete n.yParity),"eip2930"===n.type&&(delete n.maxFeePerBlobGas,delete n.maxFeePerGas,delete n.maxPriorityFeePerGas),"eip1559"===n.type&&delete n.maxFeePerBlobGas,n}let s=(0,t.defineFormatter)("transaction",n);function a(e,t){let i=(e.transactions??[]).map(e=>"string"==typeof e?e:n(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:i,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}e.s(["defineTransaction",0,s,"formatTransaction",()=>n,"transactionType",0,r],705157);let o=(0,t.defineFormatter)("block",a);e.s(["defineBlock",0,o,"formatBlock",()=>a],239453)},996822,e=>{"use strict";var t=e.i(798138),i=e.i(373216),r=e.i(46728),n=e.i(574744);function s(e,t="hex"){let a=function e(t){var i,n;let s,a,o,l;return Array.isArray(t)?(a=c(s=(i=t.map(t=>e(t))).reduce((e,t)=>e+t.length,0)),{length:s<=55?1+s:1+a+s,encode(e){for(let{encode:t}of(s<=55?e.pushByte(192+s):(e.pushByte(247+a),1===a?e.pushUint8(s):2===a?e.pushUint16(s):3===a?e.pushUint24(s):e.pushUint32(s)),i))t(e)}}):(l=c((o="string"==typeof(n=t)?(0,r.hexToBytes)(n):n).length),{length:1===o.length&&o[0]<128?1:o.length<=55?1+o.length:1+l+o.length,encode(e){1===o.length&&o[0]<128||(o.length<=55?e.pushByte(128+o.length):(e.pushByte(183+l),1===l?e.pushUint8(o.length):2===l?e.pushUint16(o.length):3===l?e.pushUint24(o.length):e.pushUint32(o.length))),e.pushBytes(o)}})}(e),o=(0,i.createCursor)(new Uint8Array(a.length));return(a.encode(o),"hex"===t)?(0,n.bytesToHex)(o.bytes):o.bytes}function a(e,t="bytes"){return s(e,t)}function o(e,t="hex"){return s(e,t)}function c(e){if(e<256)return 1;if(e<65536)return 2;if(e<0x1000000)return 3;if(e<0x100000000)return 4;throw new t.BaseError("Length is too large.")}e.s(["bytesToRlp",()=>a,"hexToRlp",()=>o,"toRlp",()=>s])},979937,262008,997687,218460,991627,134550,639926,398618,575621,684050,e=>{"use strict";var t=e.i(46728),i=e.i(574744);function r(e){let{kzg:r}=e,n=e.to??("string"==typeof e.blobs[0]?"hex":"bytes"),s="string"==typeof e.blobs[0]?e.blobs.map(e=>(0,t.hexToBytes)(e)):e.blobs,a=[];for(let e of s)a.push(Uint8Array.from(r.blobToKzgCommitment(e)));return"bytes"===n?a:a.map(e=>(0,i.bytesToHex)(e))}function n(e){let{kzg:r}=e,n=e.to??("string"==typeof e.blobs[0]?"hex":"bytes"),s="string"==typeof e.blobs[0]?e.blobs.map(e=>(0,t.hexToBytes)(e)):e.blobs,a="string"==typeof e.commitments[0]?e.commitments.map(e=>(0,t.hexToBytes)(e)):e.commitments,o=[];for(let e=0;e<s.length;e++){let t=s[e],i=a[e];o.push(Uint8Array.from(r.computeBlobKzgProof(t,i)))}return"bytes"===n?o:o.map(e=>(0,i.bytesToHex)(e))}e.s(["blobsToCommitments",()=>r],979937),e.s(["blobsToProofs",()=>n],262008);var s=e.i(62600),a=e.i(7729);function o(e,r){let n=(0,s.sha256)((0,a.isHex)(e,{strict:!1})?(0,t.toBytes)(e):e);return"bytes"===(r||"hex")?n:(0,i.toHex)(n)}function c(e){let{commitment:t,version:r=1}=e,n=e.to??("string"==typeof t?"hex":"bytes"),s=o(t,"bytes");return s.set([r],0),"bytes"===n?s:(0,i.bytesToHex)(s)}function l(e){let{commitments:t,version:i}=e,r=e.to??("string"==typeof t[0]?"hex":"bytes"),n=[];for(let e of t)n.push(c({commitment:e,to:r,version:i}));return n}e.s(["sha256",()=>o],997687),e.s(["commitmentToVersionedHash",()=>c],218460),e.s(["commitmentsToVersionedHashes",()=>l],991627);e.s(["versionedHashVersionKzg",0,1],134550);var u=e.i(798138);class d extends u.BaseError{constructor({maxSize:e,size:t}){super("Blob size is too large.",{metaMessages:[`Max: ${e} bytes`,`Given: ${t} bytes`],name:"BlobSizeTooLargeError"})}}class h extends u.BaseError{constructor(){super("Blob data must not be empty.",{name:"EmptyBlobError"})}}class p extends u.BaseError{constructor({hash:e,size:t}){super(`Versioned hash "${e}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${t}`],name:"InvalidVersionedHashSizeError"})}}class m extends u.BaseError{constructor({hash:e,version:t}){super(`Versioned hash "${e}" version is invalid.`,{metaMessages:["Expected: 1",`Received: ${t}`],name:"InvalidVersionedHashVersionError"})}}e.s(["BlobSizeTooLargeError",()=>d,"EmptyBlobError",()=>h,"InvalidVersionedHashSizeError",()=>p,"InvalidVersionedHashVersionError",()=>m],639926);var f=e.i(373216),y=e.i(655717);function g(e){let r=e.to??("string"==typeof e.data?"hex":"bytes"),n="string"==typeof e.data?(0,t.hexToBytes)(e.data):e.data,s=(0,y.size)(n);if(!s)throw new h;if(s>761855)throw new d({maxSize:761855,size:s});let a=[],o=!0,c=0;for(;o;){let e=(0,f.createCursor)(new Uint8Array(131072)),t=0;for(;t<4096;){let i=n.slice(c,c+31);if(e.pushByte(0),e.pushBytes(i),i.length<31){e.pushByte(128),o=!1;break}t++,c+=31}a.push(e)}return"bytes"===r?a.map(e=>e.bytes):a.map(e=>(0,i.bytesToHex)(e.bytes))}function v(e){let{data:t,kzg:i,to:s}=e,a=e.blobs??g({data:t,to:s}),o=e.commitments??r({blobs:a,kzg:i,to:s}),c=e.proofs??n({blobs:a,commitments:o,kzg:i,to:s}),l=[];for(let e=0;e<a.length;e++)l.push({blob:a[e],commitment:o[e],proof:c[e]});return l}e.s(["toBlobs",()=>g],398618),e.s(["toBlobSidecars",()=>v],575621);var b=e.i(680707);function w(e){if(e.type)return e.type;if(void 0!==e.authorizationList)return"eip7702";if(void 0!==e.blobs||void 0!==e.blobVersionedHashes||void 0!==e.maxFeePerBlobGas||void 0!==e.sidecars)return"eip4844";if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new b.InvalidSerializableTransactionError({transaction:e})}e.s(["getTransactionType",()=>w],684050)},433642,e=>{"use strict";function t(e,{args:i,eventName:r}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...r?{args:i,eventName:r}:{}}}e.s(["formatLog",()=>t])},794260,e=>{"use strict";var t=e.i(692577),i=e.i(847542),r=e.i(433642),n=e.i(705157);let s={"0x0":"reverted","0x1":"success"};function a(e,i){let a={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>(0,r.formatLog)(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,t.hexToNumber)(e.transactionIndex):null,status:e.status?s[e.status]:null,type:e.type?n.transactionType[e.type]||e.type:null};return e.blobGasPrice&&(a.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(a.blobGasUsed=BigInt(e.blobGasUsed)),a}let o=(0,i.defineFormatter)("transactionReceipt",a);e.s(["defineTransactionReceipt",0,o,"formatTransactionReceipt",()=>a,"receiptStatuses",0,s])},724293,e=>{"use strict";function t(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}e.s(["defineChain",()=>t])},30034,e=>{"use strict";let t=(0,e.i(724293).defineChain)({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},blockTime:12e3,rpcUrls:{default:{http:["https://eth.merkle.io"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensUniversalResolver:{address:"0xeeeeeeee14d718c2b47d9923deab1335e144eeee",blockCreated:0x16041f6},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:0xdb04c1}}});e.s(["mainnet",0,t])},552996,e=>{"use strict";let t=(0,e.i(724293).defineChain)({id:0xaa36a7,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://11155111.rpc.thirdweb.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensUniversalResolver:{address:"0xeeeeeeee14d718c2b47d9923deab1335e144eeee",blockCreated:8928790}},testnet:!0});e.s(["sepolia",0,t])},877652,e=>{"use strict";let t=(0,e.i(724293).defineChain)({id:137,name:"Polygon",blockTime:2e3,nativeCurrency:{name:"POL",symbol:"POL",decimals:18},rpcUrls:{default:{http:["https://polygon-rpc.com"]}},blockExplorers:{default:{name:"PolygonScan",url:"https://polygonscan.com",apiUrl:"https://api.polygonscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:0x18938b0}}});e.s(["polygon",0,t])},687730,122900,749500,72288,157582,695966,e=>{"use strict";var t=e.i(724293);let i=(0,t.defineChain)({id:42161,name:"Arbitrum One",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},blockTime:250,rpcUrls:{default:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Arbiscan",url:"https://arbiscan.io",apiUrl:"https://api.arbiscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}});e.s(["arbitrum",0,i],687730);let r={gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}};e.s(["contracts",0,r],122900);var n=e.i(692577),s=e.i(239453),a=e.i(705157),o=e.i(794260);let c={block:(0,s.defineBlock)({format:e=>({transactions:e.transactions?.map(e=>{if("string"==typeof e)return e;let t=(0,a.formatTransaction)(e);return"0x7e"===t.typeHex&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,n.hexToBigInt)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}),stateRoot:e.stateRoot})}),transaction:(0,a.defineTransaction)({format(e){let t={};return"0x7e"===e.type&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,n.hexToBigInt)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:(0,o.defineTransactionReceipt)({format:e=>({l1GasPrice:e.l1GasPrice?(0,n.hexToBigInt)(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?(0,n.hexToBigInt)(e.l1GasUsed):null,l1Fee:e.l1Fee?(0,n.hexToBigInt)(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null})})};e.s(["formatters",0,c],749500);var l=e.i(661855),u=e.i(566296),d=e.i(268323),h=e.i(574744),p=e.i(996822),m=e.i(344446);function f(e,t){var i;return"deposit"===(i=e).type||void 0!==i.sourceHash?function(e){!function(e){let{from:t,to:i}=e;if(t&&!(0,u.isAddress)(t))throw new l.InvalidAddressError({address:t});if(i&&!(0,u.isAddress)(i))throw new l.InvalidAddressError({address:i})}(e);let{sourceHash:t,data:i,from:r,gas:n,isSystemTx:s,mint:a,to:o,value:c}=e,m=[t,r,o??"0x",a?(0,h.toHex)(a):"0x",c?(0,h.toHex)(c):"0x",n?(0,h.toHex)(n):"0x",s?"0x1":"0x",i??"0x"];return(0,d.concatHex)(["0x7e",(0,p.toRlp)(m)])}(e):(0,m.serializeTransaction)(e,t)}let y={transaction:f};e.s(["serializeTransaction",()=>f,"serializers",0,y],72288);let g={blockTime:2e3,contracts:r,formatters:c,serializers:y};e.s(["chainConfig",0,g],157582);let v=(0,t.defineChain)({...g,id:84532,network:"base-sepolia",name:"Base Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://sepolia.base.org"]}},blockExplorers:{default:{name:"Basescan",url:"https://sepolia.basescan.org",apiUrl:"https://api-sepolia.basescan.org/api"}},contracts:{...g.contracts,disputeGameFactory:{0xaa36a7:{address:"0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1"}},l2OutputOracle:{0xaa36a7:{address:"0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254"}},portal:{0xaa36a7:{address:"0x49f53e41452c74589e85ca1677426ba426459e85",blockCreated:4446677}},l1StandardBridge:{0xaa36a7:{address:"0xfd0Bf71F60660E2f608ed56e1659C450eB113120",blockCreated:4446677}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:1059647}},testnet:!0,sourceId:0xaa36a7}),b=(0,t.defineChain)({...v,experimental_preconfirmationTime:200,rpcUrls:{default:{http:["https://sepolia-preconf.base.org"]}}});e.s(["baseSepolia",0,v,"baseSepoliaPreconf",0,b],695966)},810393,e=>{"use strict";var t=e.i(122900);async function i(e,t){return BigInt(await e.request({method:"eth_gasPrice",params:[t]}))}async function r(e,t){return BigInt(await e.request({method:"eth_maxPriorityFeePerGas",params:[t]}))}var n=e.i(692577),s=e.i(239453),a=e.i(705157),o=e.i(51394),c=e.i(577712);function l(e){return 0===e||0n===e||null==e||"0"===e||""===e||"string"==typeof e&&("0x"===(0,c.trim)(e).toLowerCase()||"0x00"===(0,c.trim)(e).toLowerCase())}function u(e){return"cip64"===e.type||void 0!==e.maxFeePerGas&&void 0!==e.maxPriorityFeePerGas&&!l(e.feeCurrency)}let d={block:(0,s.defineBlock)({format:e=>({transactions:e.transactions?.map(e=>"string"==typeof e?e:{...(0,a.formatTransaction)(e),...e.gatewayFee?{gatewayFee:(0,n.hexToBigInt)(e.gatewayFee),gatewayFeeRecipient:e.gatewayFeeRecipient}:{},feeCurrency:e.feeCurrency})})}),transaction:(0,a.defineTransaction)({format(e){if("0x7e"===e.type)return{isSystemTx:e.isSystemTx,mint:e.mint?(0,n.hexToBigInt)(e.mint):void 0,sourceHash:e.sourceHash,type:"deposit"};let t={feeCurrency:e.feeCurrency};return"0x7b"===e.type?t.type="cip64":("0x7c"===e.type&&(t.type="cip42"),t.gatewayFee=e.gatewayFee?(0,n.hexToBigInt)(e.gatewayFee):null,t.gatewayFeeRecipient=e.gatewayFeeRecipient),t}}),transactionRequest:(0,o.defineTransactionRequest)({format(e){let t={};return e.feeCurrency&&(t.feeCurrency=e.feeCurrency),u(e)&&(t.type="0x7b"),t}})};var h=e.i(395024),p=e.i(661855),m=e.i(798138),f=e.i(66229),y=e.i(616656),g=e.i(72288),v=e.i(566296),b=e.i(268323),w=e.i(574744),x=e.i(996822),C=e.i(676802),E=e.i(344446);let $=h.maxUint256,T={blockTime:1e3,contracts:t.contracts,formatters:d,serializers:{transaction:function(e,t){return u(e)?function(e,t){!function(e){let{chainId:t,maxPriorityFeePerGas:i,gasPrice:r,maxFeePerGas:n,to:s,feeCurrency:a}=e;if(t<=0)throw new f.InvalidChainIdError({chainId:t});if(s&&!(0,v.isAddress)(s))throw new p.InvalidAddressError({address:s});if(r)throw new m.BaseError("`gasPrice` is not a valid CIP-64 Transaction attribute.");if(!l(n)&&n>$)throw new y.FeeCapTooHighError({maxFeePerGas:n});if(!l(i)&&!l(n)&&i>n)throw new y.TipAboveFeeCapError({maxFeePerGas:n,maxPriorityFeePerGas:i});if(!l(a)&&!(0,v.isAddress)(a))throw new m.BaseError("`feeCurrency` MUST be a token address for CIP-64 transactions.");if(l(a))throw new m.BaseError("`feeCurrency` must be provided for CIP-64 transactions.")}(e);let{chainId:i,gas:r,nonce:n,to:s,value:a,maxFeePerGas:o,maxPriorityFeePerGas:c,accessList:u,feeCurrency:d,data:h}=e,g=[(0,w.toHex)(i),n?(0,w.toHex)(n):"0x",c?(0,w.toHex)(c):"0x",o?(0,w.toHex)(o):"0x",r?(0,w.toHex)(r):"0x",s??"0x",a?(0,w.toHex)(a):"0x",h??"0x",(0,C.serializeAccessList)(u),d,...(0,E.toYParitySignatureArray)(e,t)];return(0,b.concatHex)(["0x7b",(0,x.toRlp)(g)])}(e,t):(0,g.serializeTransaction)(e,t)}},fees:{estimateFeesPerGas:async e=>{if(!e.request?.feeCurrency)return null;let[t,n]=await Promise.all([i(e.client,e.request.feeCurrency),r(e.client,e.request.feeCurrency)]);return{maxFeePerGas:e.multiply(t-n)+n,maxPriorityFeePerGas:n}}}};e.s(["chainConfig",0,T],810393)},187966,e=>{"use strict";function t(e){let t=new CustomEvent("eip6963:announceProvider",{detail:Object.freeze(e)});window.dispatchEvent(t);let i=()=>window.dispatchEvent(t);return window.addEventListener("eip6963:requestProvider",i),()=>window.removeEventListener("eip6963:requestProvider",i)}function i(e){if("undefined"==typeof window)return;let t=t=>e(t.detail);return window.addEventListener("eip6963:announceProvider",t),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",t)}e.s(["announceProvider",()=>t,"requestProviders",()=>i])},150507,e=>{"use strict";function t(e,t,i){let r=e[t.name];if("function"==typeof r)return r;let n=e[i];return"function"==typeof n?n:i=>t(e,i)}e.s(["getAction",()=>t])},967527,e=>{"use strict";var t=e.i(969862),i=e.i(150507);function r(e,r){let{chainId:n,...s}=r,a=e.getClient({chainId:n});return(0,i.getAction)(a,t.readContract,"readContract")(s)}e.s(["readContract",()=>r])},16627,149696,22634,e=>{"use strict";var t=e.i(754674),i=e.i(150507),r=e.i(581597),n=e.i(599376),s=e.i(312425),a=e.i(358372),o=e.i(682511);async function c(e,t={}){let i,{assertChainId:l=!0}=t;if(t.connector){let{connector:r}=t;if("reconnecting"===e.state.status&&!r.getAccounts&&!r.getChainId)throw new o.ConnectorUnavailableReconnectingError({connector:r});let[n,s]=await Promise.all([r.getAccounts().catch(e=>{if(null===t.account)return[];throw e}),r.getChainId()]);i={accounts:n,chainId:s,connector:r}}else i=e.state.connections.get(e.state.current);if(!i)throw new o.ConnectorNotConnectedError;let u=t.chainId??i.chainId,d=await i.connector.getChainId();if(l&&d!==u)throw new o.ConnectorChainMismatchError({connectionChainId:u,connectorChainId:d});let h=i.connector;if(h.getClient)return h.getClient({chainId:u});let p=(0,a.parseAccount)(t.account??i.accounts[0]);if(p&&(p.address=(0,s.getAddress)(p.address)),t.account&&!i.accounts.some(e=>e.toLowerCase()===p.address.toLowerCase()))throw new o.ConnectorAccountNotFoundError({address:p.address,connector:h});let m=e.chains.find(e=>e.id===u),f=await i.connector.getProvider({chainId:u});return(0,r.createClient)({account:p,chain:m,name:"Connector Client",transport:e=>(0,n.custom)(f)({...e,retryCount:0})})}async function l(e,r){let n,{account:s,chainId:a,connector:o,...l}=r;n="object"==typeof s&&s?.type==="local"?e.getClient({chainId:a}):await c(e,{account:s??void 0,assertChainId:!1,chainId:a,connector:o});let u=(0,i.getAction)(n,t.writeContract,"writeContract");return await u({...l,...s?{account:s}:{},chain:a?{id:a}:null})}e.s(["getConnectorClient",()=>c],149696),e.s(["writeContract",()=>l],16627);var u=e.i(692577),d=e.i(330973),h=e.i(59763),p=e.i(464857);async function m(e,t){let{chainId:r,timeout:n=0,...s}=t,a=e.getClient({chainId:r}),o=(0,i.getAction)(a,p.waitForTransactionReceipt,"waitForTransactionReceipt"),c=await o({...s,timeout:n});if("reverted"===c.status){let e=(0,i.getAction)(a,h.getTransaction,"getTransaction"),{from:t,...r}=await e({hash:c.transactionHash}),n=(0,i.getAction)(a,d.call,"call"),s=await n({...r,account:t,data:r.input,gasPrice:"eip1559"!==r.type?r.gasPrice:void 0,maxFeePerGas:"eip1559"===r.type?r.maxFeePerGas:void 0,maxPriorityFeePerGas:"eip1559"===r.type?r.maxPriorityFeePerGas:void 0});throw Error(s?.data?(0,u.hexToString)(`0x${s.data.substring(138)}`):"unknown reason")}return{...c,chainId:a.chain.id}}e.s(["waitForTransactionReceipt",()=>m],22634)},577309,807033,e=>{"use strict";e.i(336244);var t={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},i=new class{#e=t;#t=!1;setTimeoutProvider(e){this.#e=e}setTimeout(e,t){return this.#e.setTimeout(e,t)}clearTimeout(e){this.#e.clearTimeout(e)}setInterval(e,t){return this.#e.setInterval(e,t)}clearInterval(e){this.#e.clearInterval(e)}};function r(e){setTimeout(e,0)}e.s(["systemSetTimeoutZero",()=>r,"timeoutManager",()=>i],807033);var n="undefined"==typeof window||"Deno"in globalThis;function s(){}function a(e,t){return"function"==typeof e?e(t):e}function o(e){return"number"==typeof e&&e>=0&&e!==1/0}function c(e,t){return Math.max(e+(t||0)-Date.now(),0)}function l(e,t){return"function"==typeof e?e(t):e}function u(e,t){return"function"==typeof e?e(t):e}function d(e,t){let{type:i="all",exact:r,fetchStatus:n,predicate:s,queryKey:a,stale:o}=e;if(a){if(r){if(t.queryHash!==p(a,t.options))return!1}else if(!f(t.queryKey,a))return!1}if("all"!==i){let e=t.isActive();if("active"===i&&!e||"inactive"===i&&e)return!1}return("boolean"!=typeof o||t.isStale()===o)&&(!n||n===t.state.fetchStatus)&&(!s||!!s(t))}function h(e,t){let{exact:i,status:r,predicate:n,mutationKey:s}=e;if(s){if(!t.options.mutationKey)return!1;if(i){if(m(t.options.mutationKey)!==m(s))return!1}else if(!f(t.options.mutationKey,s))return!1}return(!r||t.state.status===r)&&(!n||!!n(t))}function p(e,t){return(t?.queryKeyHashFn||m)(e)}function m(e){return JSON.stringify(e,(e,t)=>w(t)?Object.keys(t).sort().reduce((e,i)=>(e[i]=t[i],e),{}):t)}function f(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&Object.keys(t).every(i=>f(e[i],t[i]))}var y=Object.prototype.hasOwnProperty;function g(e,t){if(e===t)return e;let i=b(e)&&b(t);if(!i&&!(w(e)&&w(t)))return t;let r=(i?e:Object.keys(e)).length,n=i?t:Object.keys(t),s=n.length,a=i?Array(s):{},o=0;for(let c=0;c<s;c++){let s=i?c:n[c],l=e[s],u=t[s];if(l===u){a[s]=l,(i?c<r:y.call(e,s))&&o++;continue}if(null===l||null===u||"object"!=typeof l||"object"!=typeof u){a[s]=u;continue}let d=g(l,u);a[s]=d,d===l&&o++}return r===s&&o===r?e:a}function v(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(let i in e)if(e[i]!==t[i])return!1;return!0}function b(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function w(e){if(!x(e))return!1;let t=e.constructor;if(void 0===t)return!0;let i=t.prototype;return!!x(i)&&!!i.hasOwnProperty("isPrototypeOf")&&Object.getPrototypeOf(e)===Object.prototype}function x(e){return"[object Object]"===Object.prototype.toString.call(e)}function C(e){return new Promise(t=>{i.setTimeout(t,e)})}function E(e,t,i){return"function"==typeof i.structuralSharing?i.structuralSharing(e,t):!1!==i.structuralSharing?g(e,t):t}function $(e,t,i=0){let r=[...e,t];return i&&r.length>i?r.slice(1):r}function T(e,t,i=0){let r=[t,...e];return i&&r.length>i?r.slice(0,-1):r}var k=Symbol();function P(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:e.queryFn&&e.queryFn!==k?e.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))}function A(e,t){return"function"==typeof e?e(...t):!!e}e.s(["addToEnd",()=>$,"addToStart",()=>T,"ensureQueryFn",()=>P,"functionalUpdate",()=>a,"hashKey",()=>m,"hashQueryKeyByOptions",()=>p,"isServer",()=>n,"isValidTimeout",()=>o,"matchMutation",()=>h,"matchQuery",()=>d,"noop",()=>s,"partialMatchKey",()=>f,"replaceData",()=>E,"replaceEqualDeep",()=>g,"resolveEnabled",()=>u,"resolveStaleTime",()=>l,"shallowEqualObjects",()=>v,"shouldThrowError",()=>A,"skipToken",()=>k,"sleep",()=>C,"timeUntilStale",()=>c],577309)},528762,e=>{"use strict";let t,i,r,n,s,a;var o=e.i(807033).systemSetTimeoutZero,c=(t=[],i=0,r=e=>{e()},n=e=>{e()},s=o,{batch:e=>{let a;i++;try{a=e()}finally{let e;--i||(e=t,t=[],e.length&&s(()=>{n(()=>{e.forEach(e=>{r(e)})})}))}return a},batchCalls:e=>(...t)=>{a(()=>{e(...t)})},schedule:a=e=>{i?t.push(e):s(()=>{r(e)})},setNotifyFunction:e=>{r=e},setBatchNotifyFunction:e=>{n=e},setScheduler:e=>{s=e}});e.s(["notifyManager",()=>c])},698261,45150,e=>{"use strict";var t=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};e.s(["Subscribable",()=>t],45150);var i=e.i(577309),r=new class extends t{#i;#r;#n;constructor(){super(),this.#n=e=>{if(!i.isServer&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#r||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#r?.(),this.#r=void 0)}setEventListener(e){this.#n=e,this.#r?.(),this.#r=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.#i!==e&&(this.#i=e,this.onFocus())}onFocus(){let e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return"boolean"==typeof this.#i?this.#i:globalThis.document?.visibilityState!=="hidden"}};e.s(["focusManager",()=>r],698261)},677445,720447,272663,704756,927468,e=>{"use strict";e.i(336244);var t=e.i(577309),i=e.i(528762),r=e.i(698261),n=e.i(45150),s=new class extends n.Subscribable{#s=!0;#r;#n;constructor(){super(),this.#n=e=>{if(!t.isServer&&window.addEventListener){let t=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",i)}}}}onSubscribe(){this.#r||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#r?.(),this.#r=void 0)}setEventListener(e){this.#n=e,this.#r?.(),this.#r=e(this.setOnline.bind(this))}setOnline(e){this.#s!==e&&(this.#s=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#s}};function a(){let e,t,i=new Promise((i,r)=>{e=i,t=r});function r(e){Object.assign(i,e),delete i.resolve,delete i.reject}return i.status="pending",i.catch(()=>{}),i.resolve=t=>{r({status:"fulfilled",value:t}),e(t)},i.reject=e=>{r({status:"rejected",reason:e}),t(e)},i}function o(e){return Math.min(1e3*2**e,3e4)}function c(e){return(e??"online")!=="online"||s.isOnline()}e.s(["onlineManager",()=>s],720447),e.s(["pendingThenable",()=>a],272663);var l=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function u(e){let i,n=!1,u=0,d=a(),h=()=>r.focusManager.isFocused()&&("always"===e.networkMode||s.isOnline())&&e.canRun(),p=()=>c(e.networkMode)&&e.canRun(),m=e=>{"pending"===d.status&&(i?.(),d.resolve(e))},f=e=>{"pending"===d.status&&(i?.(),d.reject(e))},y=()=>new Promise(t=>{i=e=>{("pending"!==d.status||h())&&t(e)},e.onPause?.()}).then(()=>{i=void 0,"pending"===d.status&&e.onContinue?.()}),g=()=>{let i;if("pending"!==d.status)return;let r=0===u?e.initialPromise:void 0;try{i=r??e.fn()}catch(e){i=Promise.reject(e)}Promise.resolve(i).then(m).catch(i=>{if("pending"!==d.status)return;let r=e.retry??3*!t.isServer,s=e.retryDelay??o,a="function"==typeof s?s(u,i):s,c=!0===r||"number"==typeof r&&u<r||"function"==typeof r&&r(u,i);n||!c?f(i):(u++,e.onFail?.(u,i),(0,t.sleep)(a).then(()=>h()?void 0:y()).then(()=>{n?f(i):g()}))})};return{promise:d,status:()=>d.status,cancel:t=>{if("pending"===d.status){let i=new l(t);f(i),e.onCancel?.(i)}},continue:()=>(i?.(),d),cancelRetry:()=>{n=!0},continueRetry:()=>{n=!1},canStart:p,start:()=>(p()?g():y().then(g),d)}}e.s(["CancelledError",()=>l,"canFetch",()=>c,"createRetryer",()=>u],704756);var d=e.i(807033),h=class{#a;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,t.isValidTimeout)(this.gcTime)&&(this.#a=d.timeoutManager.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(t.isServer?1/0:3e5))}clearGcTimeout(){this.#a&&(d.timeoutManager.clearTimeout(this.#a),this.#a=void 0)}};e.s(["Removable",()=>h],927468);var p=class extends h{#o;#c;#l;#u;#d;#h;#p;constructor(e){super(),this.#p=!1,this.#h=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#u=e.client,this.#l=this.#u.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#o=f(this.options),this.state=e.state??this.#o,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#d?.promise}setOptions(e){if(this.options={...this.#h,...e},this.updateGcTime(this.options.gcTime),this.state&&void 0===this.state.data){let e=f(this.options);void 0!==e.data&&(this.setData(e.data,{updatedAt:e.dataUpdatedAt,manual:!0}),this.#o=e)}}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#l.remove(this)}setData(e,i){let r=(0,t.replaceData)(this.state.data,e,this.options);return this.#m({data:r,type:"success",dataUpdatedAt:i?.updatedAt,manual:i?.manual}),r}setState(e,t){this.#m({type:"setState",state:e,setStateOptions:t})}cancel(e){let i=this.#d?.promise;return this.#d?.cancel(e),i?i.then(t.noop).catch(t.noop):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#o)}isActive(){return this.observers.some(e=>!1!==(0,t.resolveEnabled)(e.options.enabled,this))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===t.skipToken||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0&&this.observers.some(e=>"static"===(0,t.resolveStaleTime)(e.options.staleTime,this))}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):void 0===this.state.data||this.state.isInvalidated}isStaleByTime(e=0){return void 0===this.state.data||"static"!==e&&(!!this.state.isInvalidated||!(0,t.timeUntilStale)(this.state.dataUpdatedAt,e))}onFocus(){let e=this.observers.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:!1}),this.#d?.continue()}onOnline(){let e=this.observers.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:!1}),this.#d?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#l.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#d&&(this.#p?this.#d.cancel({revert:!0}):this.#d.cancelRetry()),this.scheduleGc()),this.#l.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#m({type:"invalidate"})}async fetch(e,i){let r;if("idle"!==this.state.fetchStatus&&this.#d?.status()!=="rejected"){if(void 0!==this.state.data&&i?.cancelRefetch)this.cancel({silent:!0});else if(this.#d)return this.#d.continueRetry(),this.#d.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let n=new AbortController,s=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#p=!0,n.signal)})},a=()=>{let e,r=(0,t.ensureQueryFn)(this.options,i),n=(s(e={client:this.#u,queryKey:this.queryKey,meta:this.meta}),e);return(this.#p=!1,this.options.persister)?this.options.persister(r,n,this):r(n)},o=(s(r={fetchOptions:i,options:this.options,queryKey:this.queryKey,client:this.#u,state:this.state,fetchFn:a}),r);this.options.behavior?.onFetch(o,this),this.#c=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==o.fetchOptions?.meta)&&this.#m({type:"fetch",meta:o.fetchOptions?.meta}),this.#d=u({initialPromise:i?.initialPromise,fn:o.fetchFn,onCancel:e=>{e instanceof l&&e.revert&&this.setState({...this.#c,fetchStatus:"idle"}),n.abort()},onFail:(e,t)=>{this.#m({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#m({type:"pause"})},onContinue:()=>{this.#m({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0});try{let e=await this.#d.start();if(void 0===e)throw Error(`${this.queryHash} data is undefined`);return this.setData(e),this.#l.config.onSuccess?.(e,this),this.#l.config.onSettled?.(e,this.state.error,this),e}catch(e){if(e instanceof l){if(e.silent)return this.#d.promise;else if(e.revert){if(void 0===this.state.data)throw e;return this.state.data}}throw this.#m({type:"error",error:e}),this.#l.config.onError?.(e,this),this.#l.config.onSettled?.(this.state.data,e,this),e}finally{this.scheduleGc()}}#m(e){let t=t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,...m(t.data,this.options),fetchMeta:e.meta??null};case"success":let i={...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#c=e.manual?i:void 0,i;case"error":let r=e.error;return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}};this.state=t(this.state),i.notifyManager.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()}),this.#l.notify({query:this,type:"updated",action:e})})}};function m(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:c(t.networkMode)?"fetching":"paused",...void 0===e&&{error:null,status:"pending"}}}function f(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,i=void 0!==t,r=i?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:i?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}e.s(["Query",()=>p,"fetchState",()=>m],677445)},411387,e=>{"use strict";var t=e.i(528762),i=e.i(927468),r=e.i(704756),n=class extends i.Removable{#u;#f;#y;#d;constructor(e){super(),this.#u=e.client,this.mutationId=e.mutationId,this.#y=e.mutationCache,this.#f=[],this.state=e.state||s(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#f.includes(e)||(this.#f.push(e),this.clearGcTimeout(),this.#y.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#f=this.#f.filter(t=>t!==e),this.scheduleGc(),this.#y.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#f.length||("pending"===this.state.status?this.scheduleGc():this.#y.remove(this))}continue(){return this.#d?.continue()??this.execute(this.state.variables)}async execute(e){let t=()=>{this.#m({type:"continue"})},i={client:this.#u,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#d=(0,r.createRetryer)({fn:()=>this.options.mutationFn?this.options.mutationFn(e,i):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#m({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#m({type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#y.canRun(this)});let n="pending"===this.state.status,s=!this.#d.canStart();try{if(n)t();else{this.#m({type:"pending",variables:e,isPaused:s}),await this.#y.config.onMutate?.(e,this,i);let t=await this.options.onMutate?.(e,i);t!==this.state.context&&this.#m({type:"pending",context:t,variables:e,isPaused:s})}let r=await this.#d.start();return await this.#y.config.onSuccess?.(r,e,this.state.context,this,i),await this.options.onSuccess?.(r,e,this.state.context,i),await this.#y.config.onSettled?.(r,null,this.state.variables,this.state.context,this,i),await this.options.onSettled?.(r,null,e,this.state.context,i),this.#m({type:"success",data:r}),r}catch(t){try{throw await this.#y.config.onError?.(t,e,this.state.context,this,i),await this.options.onError?.(t,e,this.state.context,i),await this.#y.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this,i),await this.options.onSettled?.(void 0,t,e,this.state.context,i),t}finally{this.#m({type:"error",error:t})}}finally{this.#y.runNext(this)}}#m(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),t.notifyManager.batch(()=>{this.#f.forEach(t=>{t.onMutationUpdate(e)}),this.#y.notify({mutation:this,type:"updated",action:e})})}};function s(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}e.s(["Mutation",()=>n,"getDefaultState",()=>s])},420182,429703,e=>{"use strict";var t=e.i(577309);function i(e){return{onFetch:(i,s)=>{let a=i.options,o=i.fetchOptions?.meta?.fetchMore?.direction,c=i.state.data?.pages||[],l=i.state.data?.pageParams||[],u={pages:[],pageParams:[]},d=0,h=async()=>{let s=!1,h=(0,t.ensureQueryFn)(i.options,i.fetchOptions),p=async(e,r,n)=>{let a;if(s)return Promise.reject();if(null==r&&e.pages.length)return Promise.resolve(e);let o=(Object.defineProperty(a={client:i.client,queryKey:i.queryKey,pageParam:r,direction:n?"backward":"forward",meta:i.options.meta},"signal",{enumerable:!0,get:()=>(i.signal.aborted?s=!0:i.signal.addEventListener("abort",()=>{s=!0}),i.signal)}),a),c=await h(o),{maxPages:l}=i.options,u=n?t.addToStart:t.addToEnd;return{pages:u(e.pages,c,l),pageParams:u(e.pageParams,r,l)}};if(o&&c.length){let e="backward"===o,t={pages:c,pageParams:l},i=(e?n:r)(a,t);u=await p(t,i,e)}else{let t=e??c.length;do{let e=0===d?l[0]??a.initialPageParam:r(a,u);if(d>0&&null==e)break;u=await p(u,e),d++}while(d<t)}return u};i.options.persister?i.fetchFn=()=>i.options.persister?.(h,{client:i.client,queryKey:i.queryKey,meta:i.options.meta,signal:i.signal},s):i.fetchFn=h}}}function r(e,{pages:t,pageParams:i}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,i[r],i):void 0}function n(e,{pages:t,pageParams:i}){return t.length>0?e.getPreviousPageParam?.(t[0],t,i[0],i):void 0}function s(e,t){return!!t&&null!=r(e,t)}function a(e,t){return!!t&&!!e.getPreviousPageParam&&null!=n(e,t)}e.s(["hasNextPage",()=>s,"hasPreviousPage",()=>a,"infiniteQueryBehavior",()=>i],420182);var o=e.i(837699),c=e.i(13365),l=o.createContext(void 0),u=e=>{let t=o.useContext(l);if(e)return e;if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},d=({client:e,children:t})=>(o.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,c.jsx)(l.Provider,{value:e,children:t}));e.s(["QueryClientProvider",()=>d,"useQueryClient",()=>u],429703)},769333,357516,e=>{"use strict";function t(e){return e.state.chainId}var i=e.i(837699),r=e.i(837049);function n(e={}){let s=(0,r.useConfig)(e);return(0,i.useSyncExternalStore)(e=>(function(e,t){let{onChange:i}=t;return e.subscribe(e=>e.chainId,i)})(s,{onChange:e}),()=>t(s),()=>t(s))}e.s(["useChainId",()=>n],769333);let s=[{inputs:[{internalType:"uint256",name:"_platformFeeBps",type:"uint256"},{internalType:"uint256",name:"_minOrderValue",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"orderId",type:"uint256"},{indexed:!0,internalType:"address",name:"buyer",type:"address"},{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"string",name:"orderNumber",type:"string"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"address",name:"currency",type:"address"}],name:"OrderCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"orderId",type:"uint256"},{indexed:!1,internalType:"enum OrderTracking.OrderStatus",name:"oldStatus",type:"uint8"},{indexed:!1,internalType:"enum OrderTracking.OrderStatus",name:"newStatus",type:"uint8"},{indexed:!1,internalType:"address",name:"updatedBy",type:"address"}],name:"OrderStatusUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"orderId",type:"uint256"},{indexed:!1,internalType:"string",name:"trackingNumber",type:"string"}],name:"TrackingNumberAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"orderId",type:"uint256"},{indexed:!0,internalType:"address",name:"disputer",type:"address"},{indexed:!1,internalType:"string",name:"reason",type:"string"}],name:"OrderDisputed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"orderId",type:"uint256"},{indexed:!1,internalType:"address",name:"cancelledBy",type:"address"},{indexed:!1,internalType:"string",name:"reason",type:"string"}],name:"OrderCancelled",type:"event"},{inputs:[{internalType:"address",name:"_seller",type:"address"},{internalType:"string",name:"_productName",type:"string"},{internalType:"string",name:"_productDescription",type:"string"},{internalType:"uint256",name:"_quantity",type:"uint256"},{internalType:"address",name:"_currency",type:"address"},{internalType:"uint256",name:"_estimatedDelivery",type:"uint256"},{internalType:"string",name:"_network",type:"string"},{internalType:"string",name:"_metadataHash",type:"string"}],name:"createOrder",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"_orderId",type:"uint256"}],name:"confirmOrder",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_orderId",type:"uint256"},{internalType:"enum OrderTracking.OrderStatus",name:"_newStatus",type:"uint8"}],name:"updateOrderStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_orderId",type:"uint256"},{internalType:"string",name:"_trackingNumber",type:"string"}],name:"addTrackingNumber",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_orderId",type:"uint256"}],name:"markAsShipped",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_orderId",type:"uint256"}],name:"markAsProcessing",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_orderId",type:"uint256"},{internalType:"string",name:"_reason",type:"string"}],name:"disputeOrder",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_orderId",type:"uint256"},{internalType:"string",name:"_reason",type:"string"}],name:"cancelOrder",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_orderId",type:"uint256"}],name:"getOrder",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"orderNumber",type:"string"},{internalType:"address",name:"buyer",type:"address"},{internalType:"address",name:"seller",type:"address"},{internalType:"string",name:"productName",type:"string"},{internalType:"string",name:"productDescription",type:"string"},{internalType:"uint256",name:"quantity",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"address",name:"currency",type:"address"},{internalType:"enum OrderTracking.OrderStatus",name:"status",type:"uint8"},{internalType:"uint256",name:"createdAt",type:"uint256"},{internalType:"uint256",name:"updatedAt",type:"uint256"},{internalType:"uint256",name:"estimatedDelivery",type:"uint256"},{internalType:"string",name:"trackingNumber",type:"string"},{internalType:"bytes32",name:"transactionHash",type:"bytes32"},{internalType:"string",name:"network",type:"string"},{internalType:"string",name:"metadataHash",type:"string"}],internalType:"struct OrderTracking.Order",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_buyer",type:"address"}],name:"getBuyerOrders",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_seller",type:"address"}],name:"getSellerOrders",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256[]",name:"_orderIds",type:"uint256[]"}],name:"getOrders",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"orderNumber",type:"string"},{internalType:"address",name:"buyer",type:"address"},{internalType:"address",name:"seller",type:"address"},{internalType:"string",name:"productName",type:"string"},{internalType:"string",name:"productDescription",type:"string"},{internalType:"uint256",name:"quantity",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"address",name:"currency",type:"address"},{internalType:"enum OrderTracking.OrderStatus",name:"status",type:"uint8"},{internalType:"uint256",name:"createdAt",type:"uint256"},{internalType:"uint256",name:"updatedAt",type:"uint256"},{internalType:"uint256",name:"estimatedDelivery",type:"uint256"},{internalType:"string",name:"trackingNumber",type:"string"},{internalType:"bytes32",name:"transactionHash",type:"bytes32"},{internalType:"string",name:"network",type:"string"},{internalType:"string",name:"metadataHash",type:"string"}],internalType:"struct OrderTracking.Order[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalOrders",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"orders",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"orderNumber",type:"string"},{internalType:"address",name:"buyer",type:"address"},{internalType:"address",name:"seller",type:"address"},{internalType:"string",name:"productName",type:"string"},{internalType:"string",name:"productDescription",type:"string"},{internalType:"uint256",name:"quantity",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"address",name:"currency",type:"address"},{internalType:"enum OrderTracking.OrderStatus",name:"status",type:"uint8"},{internalType:"uint256",name:"createdAt",type:"uint256"},{internalType:"uint256",name:"updatedAt",type:"uint256"},{internalType:"uint256",name:"estimatedDelivery",type:"uint256"},{internalType:"string",name:"trackingNumber",type:"string"},{internalType:"bytes32",name:"transactionHash",type:"bytes32"},{internalType:"string",name:"network",type:"string"},{internalType:"string",name:"metadataHash",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"buyerOrders",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"sellerOrders",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"platformFeeBps",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minOrderValue",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}];e.s(["OrderTrackingABI",0,s],357516)},109502,e=>{e.v(t=>Promise.all(["static/chunks/ed3937f788c143c0.js","static/chunks/4c6d4da185ed8f6c.js","static/chunks/b1b01965279ba984.js","static/chunks/e7070cf53904a7e5.js","static/chunks/25398a0c119c0148.js"].map(t=>e.l(t))).then(()=>t(880631)))},223562,e=>{e.v(t=>Promise.all(["static/chunks/ba089eb4a0e78e40.js"].map(t=>e.l(t))).then(()=>t(371533)))},968154,e=>{e.v(t=>Promise.all(["static/chunks/86c4d134f23de9dd.js"].map(t=>e.l(t))).then(()=>t(945646)))},686446,e=>{e.v(t=>Promise.all(["static/chunks/7c3b68826ff1d92a.js"].map(t=>e.l(t))).then(()=>t(844256)))},727770,e=>{e.v(t=>Promise.all(["static/chunks/ab0fa013dd72014d.js"].map(t=>e.l(t))).then(()=>t(98115)))},684552,e=>{e.v(t=>Promise.all(["static/chunks/69f8d8f70e3947bb.js","static/chunks/c2105dd77fc958be.js"].map(t=>e.l(t))).then(()=>t(825486)))},246045,e=>{e.v(t=>Promise.all(["static/chunks/9737248aa7bedbb7.js","static/chunks/fe64d2f55083fb39.js"].map(t=>e.l(t))).then(()=>t(957849)))},277029,e=>{e.v(t=>Promise.all(["static/chunks/2026f1ecd6274054.js"].map(t=>e.l(t))).then(()=>t(330322)))},765796,e=>{e.v(t=>Promise.all(["static/chunks/3a2270c8c67743ed.js"].map(t=>e.l(t))).then(()=>t(498023)))},138246,e=>{e.v(t=>Promise.all(["static/chunks/53159fda4116b6ec.js"].map(t=>e.l(t))).then(()=>t(722618)))},286907,e=>{e.v(t=>Promise.all(["static/chunks/0497cb1f218b6e8e.js"].map(t=>e.l(t))).then(()=>t(957489)))},953009,e=>{e.v(t=>Promise.all(["static/chunks/166abd650367cdc3.js"].map(t=>e.l(t))).then(()=>t(359054)))},582355,e=>{e.v(t=>Promise.all(["static/chunks/48d11e4dc2338a45.js"].map(t=>e.l(t))).then(()=>t(739413)))},59723,e=>{e.v(t=>Promise.all(["static/chunks/3a8fc6e65057a0f1.js"].map(t=>e.l(t))).then(()=>t(886340)))},918026,e=>{e.v(t=>Promise.all(["static/chunks/d6519f6ac4a58686.js","static/chunks/bfac56c790ae2c8d.js"].map(t=>e.l(t))).then(()=>t(651867)))},134166,e=>{e.v(t=>Promise.all(["static/chunks/6a84f40afbdc5019.js"].map(t=>e.l(t))).then(()=>t(346982)))},99511,e=>{e.v(t=>Promise.all(["static/chunks/c90566133db78935.js"].map(t=>e.l(t))).then(()=>t(676387)))},509366,e=>{e.v(t=>Promise.all(["static/chunks/794a2de7c979caf3.js"].map(t=>e.l(t))).then(()=>t(736947)))},591240,e=>{e.v(t=>Promise.all(["static/chunks/20b389cc3ec20a58.js"].map(t=>e.l(t))).then(()=>t(903470)))},818881,e=>{e.v(t=>Promise.all(["static/chunks/706dd4bd9f75db41.js"].map(t=>e.l(t))).then(()=>t(529534)))},877414,e=>{e.v(t=>Promise.all(["static/chunks/2edac1d14f5fc77c.js"].map(t=>e.l(t))).then(()=>t(191638)))},667709,e=>{e.v(t=>Promise.all(["static/chunks/bebd6efadba2e15e.js"].map(t=>e.l(t))).then(()=>t(625793)))},495783,e=>{e.v(t=>Promise.all(["static/chunks/aa2b7c9bf9c1aa80.js"].map(t=>e.l(t))).then(()=>t(221887)))},921826,e=>{e.v(t=>Promise.all(["static/chunks/47828b29975a4539.js"].map(t=>e.l(t))).then(()=>t(158708)))},177644,e=>{e.v(t=>Promise.all(["static/chunks/954402f7aceefc35.js"].map(t=>e.l(t))).then(()=>t(626604)))},839472,e=>{e.v(t=>Promise.all(["static/chunks/1a6eb7354c3da7ed.js"].map(t=>e.l(t))).then(()=>t(900059)))},772003,e=>{e.v(t=>Promise.all(["static/chunks/17a472e44862b8bf.js"].map(t=>e.l(t))).then(()=>t(785883)))},907216,e=>{e.v(t=>Promise.all(["static/chunks/ae407972a3bca5a7.js"].map(t=>e.l(t))).then(()=>t(315796)))},280283,e=>{e.v(t=>Promise.all(["static/chunks/ce291dd408610173.js"].map(t=>e.l(t))).then(()=>t(215639)))},302581,e=>{e.v(t=>Promise.all(["static/chunks/ad9d0759239477fa.js"].map(t=>e.l(t))).then(()=>t(740163)))},464289,e=>{e.v(t=>Promise.all(["static/chunks/70383205750a75f3.js"].map(t=>e.l(t))).then(()=>t(386009)))},47698,e=>{e.v(t=>Promise.all(["static/chunks/e67ec95ef0838ef9.js"].map(t=>e.l(t))).then(()=>t(864818)))},367747,e=>{e.v(t=>Promise.all(["static/chunks/ff1635f5601932cb.js"].map(t=>e.l(t))).then(()=>t(281531)))},830656,e=>{e.v(t=>Promise.all(["static/chunks/1ea76c810ad2d63c.js"].map(t=>e.l(t))).then(()=>t(994138)))},160203,e=>{e.v(t=>Promise.all(["static/chunks/70c1053dfd7a16a6.js"].map(t=>e.l(t))).then(()=>t(805958)))},145425,e=>{e.v(t=>Promise.all(["static/chunks/caf4baa7f77f0bcb.js"].map(t=>e.l(t))).then(()=>t(632798)))},886005,e=>{e.v(t=>Promise.all(["static/chunks/7300a670f2815252.js"].map(t=>e.l(t))).then(()=>t(293132)))},376274,e=>{e.v(t=>Promise.all(["static/chunks/bd29ab22a417ad94.js"].map(t=>e.l(t))).then(()=>t(891509)))},175740,e=>{e.v(t=>Promise.all(["static/chunks/1f0ab69b691f83a5.js"].map(t=>e.l(t))).then(()=>t(575964)))},702683,e=>{e.v(t=>Promise.all(["static/chunks/54e743e255eb71d2.js"].map(t=>e.l(t))).then(()=>t(250787)))},137849,e=>{e.v(t=>Promise.all(["static/chunks/64c4e3b010b66bb2.js"].map(t=>e.l(t))).then(()=>t(237085)))},429592,e=>{e.v(t=>Promise.all(["static/chunks/6ab9a4ab4945f786.js"].map(t=>e.l(t))).then(()=>t(427474)))},654219,e=>{e.v(t=>Promise.all(["static/chunks/b589e616634e9b05.js"].map(t=>e.l(t))).then(()=>t(444905)))},333652,e=>{e.v(t=>Promise.all(["static/chunks/b35338a8bfb58d96.js"].map(t=>e.l(t))).then(()=>t(805576)))},928553,e=>{e.v(t=>Promise.all(["static/chunks/35923ed7cc141e49.js"].map(t=>e.l(t))).then(()=>t(391076)))},119406,e=>{e.v(t=>Promise.all(["static/chunks/92ef898add3011c6.js"].map(t=>e.l(t))).then(()=>t(731738)))},71435,e=>{e.v(t=>Promise.all(["static/chunks/ccf686ee164f7054.js"].map(t=>e.l(t))).then(()=>t(625824)))},835006,e=>{e.v(t=>Promise.all(["static/chunks/747c2e56f9ce9e4d.js"].map(t=>e.l(t))).then(()=>t(813229)))},444352,e=>{e.v(t=>Promise.all(["static/chunks/5ed35ef03eccb3c2.js"].map(t=>e.l(t))).then(()=>t(184046)))},719071,e=>{e.v(t=>Promise.all(["static/chunks/b2b0ac5a823ba5bc.js"].map(t=>e.l(t))).then(()=>t(166781)))},578410,e=>{e.v(t=>Promise.all(["static/chunks/5ef05e55589dd547.js"].map(t=>e.l(t))).then(()=>t(295468)))},28399,e=>{e.v(t=>Promise.all(["static/chunks/80422aef9da0b04b.js"].map(t=>e.l(t))).then(()=>t(15464)))},890780,e=>{e.v(t=>Promise.all(["static/chunks/14a9076655ff2f80.js"].map(t=>e.l(t))).then(()=>t(649935)))},592863,e=>{e.v(t=>Promise.all(["static/chunks/3b8b1c70c5d2f5da.js"].map(t=>e.l(t))).then(()=>t(606960)))},515928,e=>{e.v(t=>Promise.all(["static/chunks/c7ab61168d52a1cc.js"].map(t=>e.l(t))).then(()=>t(682434)))},523960,e=>{e.v(t=>Promise.all(["static/chunks/f778f5f7e26a59af.js"].map(t=>e.l(t))).then(()=>t(507417)))},502618,e=>{e.v(t=>Promise.all(["static/chunks/31317c3373e6dee2.js"].map(t=>e.l(t))).then(()=>t(166158)))},229455,e=>{e.v(t=>Promise.all(["static/chunks/db737edb4e371360.js"].map(t=>e.l(t))).then(()=>t(592672)))},517631,e=>{e.v(t=>Promise.all(["static/chunks/a2097d219c4a7929.js"].map(t=>e.l(t))).then(()=>t(779998)))},215825,e=>{e.v(t=>Promise.all(["static/chunks/94b0501de6a321ef.js"].map(t=>e.l(t))).then(()=>t(457901)))},512333,e=>{e.v(t=>Promise.all(["static/chunks/35508bcaa2db8f72.js"].map(t=>e.l(t))).then(()=>t(847482)))},601357,e=>{e.v(t=>Promise.all(["static/chunks/637724dba2770aee.js"].map(t=>e.l(t))).then(()=>t(576461)))},785093,e=>{e.v(t=>Promise.all(["static/chunks/e89be9ba78b2a6e8.js"].map(t=>e.l(t))).then(()=>t(762004)))},124939,e=>{e.v(t=>Promise.all(["static/chunks/dd2c5c34fc893673.js"].map(t=>e.l(t))).then(()=>t(332886)))},251582,e=>{e.v(t=>Promise.all(["static/chunks/fe89a4c4a85ababe.js"].map(t=>e.l(t))).then(()=>t(801538)))},598362,e=>{e.v(t=>Promise.all(["static/chunks/35d72ed3efd321dd.js"].map(t=>e.l(t))).then(()=>t(525013)))},234438,e=>{e.v(t=>Promise.all(["static/chunks/2af00da1e95ba5c2.js"].map(t=>e.l(t))).then(()=>t(804116)))},905139,e=>{e.v(t=>Promise.all(["static/chunks/4c6d4da185ed8f6c.js"].map(t=>e.l(t))).then(()=>t(288787)))},340779,e=>{e.v(t=>Promise.all(["static/chunks/27d9c91869b972ca.js","static/chunks/6d9411485878e11d.js","static/chunks/89e578eced8ecd88.js"].map(t=>e.l(t))).then(()=>t(556934)))}]);