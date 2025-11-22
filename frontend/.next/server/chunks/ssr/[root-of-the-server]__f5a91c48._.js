module.exports=[916416,947805,a=>{"use strict";a.i(730025);var b=a.i(637573),c=a.i(178506);a.i(53218);var d=a.i(799188),e=a.i(511854),f=a.i(791477),g=a.i(196283);let h=(0,e.proxy)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),i=(0,g.withErrorBoundary)({state:h,subscribe:a=>(0,e.subscribe)(h,()=>a(h)),subscribeKey:(a,b)=>(0,f.subscribeKey)(h,a,b),showTooltip({message:a,triggerRect:b,variant:c}){h.open=!0,h.message=a,h.triggerRect=b,h.variant=c},hide(){h.open=!1,h.message="",h.triggerRect={width:0,height:0,top:0,left:0}}});a.s(["TooltipController",0,i],947805),a.i(675998);var j=a.i(140833);a.i(801214),a.i(235577),a.i(104497);var k=a.i(279421);let l=k.css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:a})=>a["3"]} 10px ${({spacing:a})=>a["3"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    color: ${({tokens:a})=>a.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:a})=>a["5"]});
    transition: opacity ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:a})=>a.xl};
    animation-timing-function: ${({easings:a})=>a["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:a})=>a.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:a})=>a.theme.foregroundPrimary};
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
`;var m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let n=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.open=i.state.open,this.message=i.state.message,this.triggerRect=i.state.triggerRect,this.variant=i.state.variant,this.unsubscribe.push(i.subscribe(a=>{this.open=a.open,this.message=a.message,this.triggerRect=a.triggerRect,this.variant=a.variant}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){this.dataset.variant=this.variant;let a=this.triggerRect.top,b=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${a}px;
    --w3m-tooltip-left: ${b}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${+!!this.open};
    `,c.html`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};n.styles=[l],m([(0,d.state)()],n.prototype,"open",void 0),m([(0,d.state)()],n.prototype,"message",void 0),m([(0,d.state)()],n.prototype,"triggerRect",void 0),m([(0,d.state)()],n.prototype,"variant",void 0),n=m([(0,j.customElement)("w3m-tooltip")],n),a.s([],916416)},439399,646432,a=>{"use strict";a.i(730025);var b=a.i(637573),c=a.i(178506);a.i(53218);var d=a.i(799188),e=a.i(351428);a.i(675998);var f=a.i(140833);a.i(801214),a.i(104497);var g=b;a.i(764831),a.i(508717),a.i(800958);var h=a.i(998772),i=a.i(279421);let j=i.css`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`,k=class extends g.LitElement{render(){return c.html`
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
    `}};k.styles=[h.resetStyles,h.elementStyles,j],k=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,f.customElement)("wui-ux-by-reown")],k),a.s([],646432);let l=i.css`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:a})=>a["3"]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:a})=>a.core.textAccentPrimary};
    font-weight: 500;
  }
`;var m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let n=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=e.OptionsController.state.remoteFeatures,this.unsubscribe.push(e.OptionsController.subscribeKey("remoteFeatures",a=>this.remoteFeatures=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=e.OptionsController.state,d=e.OptionsController.state.features?.legalCheckbox;return(a||b)&&!d?c.html`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `:c.html`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `}andTemplate(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=e.OptionsController.state;return a&&b?"and":""}termsTemplate(){let{termsConditionsUrl:a}=e.OptionsController.state;return a?c.html`<a href=${a} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){let{privacyPolicyUrl:a}=e.OptionsController.state;return a?c.html`<a href=${a} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(a=!1){return this.remoteFeatures?.reownBranding?a?c.html`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:c.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}};n.styles=[l],m([(0,d.state)()],n.prototype,"remoteFeatures",void 0),n=m([(0,f.customElement)("w3m-legal-footer")],n),a.s([],439399)},318137,a=>{"use strict";a.i(730025);var b=a.i(637573),c=a.i(178506),d=a.i(490610),e=a.i(881791),f=a.i(351428),g=a.i(802320),h=a.i(358765);a.i(675998);var i=a.i(140833);a.i(801214),a.i(235577),a.i(66641),a.i(104497);var j=a.i(230158),k=a.i(896120);let l=k.css``,m=class extends b.LitElement{render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=f.OptionsController.state;return a||b?c.html`
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
    `:null}howDoesItWorkTemplate(){return c.html` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){e.EventsController.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,h.getPreferredAccountType)(d.ChainController.state.activeChain)===j.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.RouterController.push("WhatIsABuy")}};m.styles=[l],m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("w3m-onramp-providers-footer")],m),a.s([],318137)},993167,a=>{"use strict";var b=a.i(511854),c=a.i(791477),d=a.i(196283),e=a.i(351428);let f=(0,b.proxy)({message:"",variant:"info",open:!1}),g=(0,d.withErrorBoundary)({state:f,subscribeKey:(a,b)=>(0,c.subscribeKey)(f,a,b),open(a,b){let{debug:c}=e.OptionsController.state,{code:d,displayMessage:g,debugMessage:h}=a;g&&c&&(f.message=g,f.variant=b,f.open=!0),h&&console.error("function"==typeof h?h():h,d?{code:d}:void 0)},warn(a,b,c){f.open=!0,f.message=a,f.variant="warning",b&&console.warn(b,c)},close(){f.open=!1,f.message="",f.variant="info"}});a.s(["AlertController",0,g])},205357,a=>{"use strict";let b={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:("undefined"!=typeof process&&void 0!==process.env?process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]};a.s(["ConstantsUtil",0,b])},750227,(a,b,c)=>{b.exports=a.x("node:path",()=>require("node:path"))},660526,(a,b,c)=>{b.exports=a.x("node:os",()=>require("node:os"))},71347,(a,b,c)=>{"use strict";function d(a){let b=[],c="",d=!1,e=!1,f="";for(let g=0;g<a.length;g++){let h=a[g];d||"."!==h?"["===h?(c&&(b.push(c),c=""),d=!0):"]"===h&&d?(b.push(c),c="",d=!1,e=!1):('"'===h||"'"===h)&&d?e?h===f?(e=!1,f=""):c+=h:(e=!0,f=h):c+=h:c&&(b.push(c),c="")}return c&&b.push(c),b}function e(a,b,c){let d=a;for(let a=0;a<b.length-1;a++){let c=b[a];if("object"!=typeof d||null===d||!(c in d)||"object"!=typeof d[c]||null===d[c])return!1;d=d[c]}let e=b[b.length-1];if("*"===e){if(Array.isArray(d))for(let a=0;a<d.length;a++)d[a]=c;else if("object"==typeof d&&null!==d)for(let a in d)Object.prototype.hasOwnProperty.call(d,a)&&(d[a]=c)}else"object"==typeof d&&null!==d&&e in d&&Object.prototype.hasOwnProperty.call(d,e)&&(d[e]=c);return!0}function f(a,b){let c=a;for(let a=0;a<b.length-1;a++){let d=b[a];if("object"!=typeof c||null===c||!(d in c)||"object"!=typeof c[d]||null===c[d])return!1;c=c[d]}let d=b[b.length-1];if("*"===d){if(Array.isArray(c))for(let a=0;a<c.length;a++)c[a]=void 0;else if("object"==typeof c&&null!==c)for(let a in c)Object.prototype.hasOwnProperty.call(c,a)&&delete c[a]}else"object"==typeof c&&null!==c&&d in c&&Object.prototype.hasOwnProperty.call(c,d)&&delete c[d];return!0}let g=Symbol("PATH_NOT_FOUND");b.exports=function(a={}){let{paths:b=[],censor:c="[REDACTED]",serialize:h=JSON.stringify,strict:i=!0,remove:j=!1}=a;if(!Array.isArray(b))throw TypeError("paths must be an array");for(let a of b)!function(a){if("string"!=typeof a)throw Error("Paths must be (non-empty) strings");if(""===a)throw Error("Invalid redaction path ()");if(a.includes("..")||a.includes(","))throw Error(`Invalid redaction path (${a})`);let b=0,c=!1,d="";for(let e=0;e<a.length;e++){let f=a[e];if(('"'===f||"'"===f)&&b>0)c?f===d&&(c=!1,d=""):(c=!0,d=f);else if("["!==f||c){if("]"===f&&!c&&--b<0)throw Error(`Invalid redaction path (${a})`)}else b++}if(0!==b)throw Error(`Invalid redaction path (${a})`)}(a);let k=function(a){if(0===a.length)return null;let b=new Map;for(let c of a){let a=d(c),e=b;for(let b=0;b<a.length;b++){let c=a[b];e.has(c)||e.set(c,new Map),e=e.get(c)}}return b}(b);return function(a){if(i&&(null===a||"object"!=typeof a)&&(null==a||"object"!=typeof a))return h?h(a):a;let l=k?function a(b,c,d=0){if(!c||0===c.size||null===b||"object"!=typeof b)return b;if(b instanceof Date)return new Date(b.getTime());if(Array.isArray(b)){let d=[];for(let e=0;e<b.length;e++){let f=e.toString();c.has(f)||c.has("*")?d[e]=a(b[e],c.get(f)||c.get("*")):d[e]=b[e]}return d}let e=Object.create(Object.getPrototypeOf(b));for(let d in b)Object.prototype.hasOwnProperty.call(b,d)&&(c.has(d)||c.has("*")?e[d]=a(b[d],c.get(d)||c.get("*")):e[d]=b[d]);return e}(a,k):a,m=c;return("function"==typeof c&&(m=c),!function(a,b,c,h=!1){for(let i of b){let b=d(i);if(b.includes("*"))!function a(b,c,d,g,h=!1){let i=c.indexOf("*");if(i===c.length-1){let a=c.slice(0,-1),e=b;for(let b of a){if(null==e||"object"!=typeof e||null===e)return;e=e[b]}if(Array.isArray(e))if(h)for(let a=0;a<e.length;a++)e[a]=void 0;else for(let b=0;b<e.length;b++){let c=[...a,b.toString()],f="function"==typeof d?d(e[b],c):d;e[b]=f}else if("object"==typeof e&&null!==e)if(h){let a=[];for(let b in e)Object.prototype.hasOwnProperty.call(e,b)&&a.push(b);for(let b of a)delete e[b]}else for(let b in e){let c=[...a,b],f="function"==typeof d?d(e[b],c):d;e[b]=f}}else!function(b,c,d,g,h,i=!1){let j=c.slice(0,g),k=c.slice(g+1),l=[];function m(b,c){if(c===j.length){if(Array.isArray(b))for(let a=0;a<b.length;a++)l[c]=a.toString(),m(b[a],c+1);else if("object"==typeof b&&null!==b)for(let a in b)l[c]=a,m(b[a],c+1)}else if(c<j.length){let a=j[c];b&&"object"==typeof b&&null!==b&&a in b&&(l[c]=a,m(b[a],c+1))}else if(k.includes("*"))a(b,k,"function"==typeof d?(a,b)=>d(a,[...l.slice(0,c),...b]):d,h,i);else if(i)f(b,k);else{let a="function"==typeof d?d(function(a,b){let c=a;for(let a of b){if(null==c||"object"!=typeof c||null===c)return;c=c[a]}return c}(b,k),[...l.slice(0,c),...k]):d;e(b,k,a)}}if(0===j.length)m(b,0);else{let a=b;for(let b=0;b<j.length;b++){let c=j[b];if(null==a||"object"!=typeof a||null===a)return;a=a[c],l[b]=c}null!=a&&m(a,j.length)}}(b,c,d,i,g,h)}(a,b,c,i,h);else if(h)f(a,b);else{let d=function(a,b){let c=a;for(let a of b){if(null==c||"object"!=typeof c||null===c||!(a in c))return g;c=c[a]}return c}(a,b);if(d===g)continue;let f="function"==typeof c?c(d,b):c;e(a,b,f)}}}(l,b,m,j),!1===h)?(l.restore=function(){return function a(b){if(null===b||"object"!=typeof b)return b;if(b instanceof Date)return new Date(b.getTime());if(b instanceof Array){let c=[];for(let d=0;d<b.length;d++)c[d]=a(b[d]);return c}if("object"==typeof b){let c=Object.create(Object.getPrototypeOf(b));for(let d in b)Object.prototype.hasOwnProperty.call(b,d)&&(c[d]=a(b[d]));return c}return b}(a)},l):"function"==typeof h?h(l):JSON.stringify(l)}}},687769,(a,b,c)=>{b.exports=a.x("node:events",()=>require("node:events"))},677652,(a,b,c)=>{b.exports=a.x("node:diagnostics_channel",()=>require("node:diagnostics_channel"))},854074,a=>{"use strict";a.i(730025);var b=a.i(637573),c=a.i(178506);a.i(53218);var d=a.i(833559);a.i(764831),a.i(87880);var e=a.i(998772),f=a.i(140833);a.i(603288);var g=a.i(279421);let h=g.css`
  :host {
    position: relative;
    background-color: ${({tokens:a})=>a.theme.foregroundTertiary};
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
    border: 1px solid ${({colors:a})=>a.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:a})=>a.accent010};
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
    border: 2px solid ${({tokens:a})=>a.theme.backgroundPrimary};
    padding: 1px;
  }
`;var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j=class extends b.LitElement{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let a="1";return"lg"===this.size?a="4":"md"===this.size?a="2":"sm"===this.size&&(a="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${a});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),c.html`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?c.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?c.html`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:c.html`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};j.styles=[e.resetStyles,h],i([(0,d.property)()],j.prototype,"size",void 0),i([(0,d.property)()],j.prototype,"name",void 0),i([(0,d.property)()],j.prototype,"imageSrc",void 0),i([(0,d.property)()],j.prototype,"walletIcon",void 0),i([(0,d.property)({type:Boolean})],j.prototype,"installed",void 0),i([(0,d.property)()],j.prototype,"badgeSize",void 0),j=i([(0,f.customElement)("wui-wallet-image")],j),a.s([],854074)},116626,a=>{"use strict";var b=a.i(50516),c=a.i(351428),d=a.i(802320),e=a.i(205357);a.s(["HelpersUtil",0,{getTabsByNamespace:a=>a&&a===b.ConstantsUtil.CHAIN.EVM?c.OptionsController.state.remoteFeatures?.activity===!1?e.ConstantsUtil.ACCOUNT_TABS.filter(a=>"Activity"!==a.label):e.ConstantsUtil.ACCOUNT_TABS:[],isValidReownName:a=>/^[a-zA-Z0-9]+$/gu.test(a),isValidEmail:a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(a),validateReownName:a=>a.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){let a=d.RouterController.state.view;if(e.ConstantsUtil.VIEWS_WITH_LEGAL_FOOTER.includes(a)){let{termsConditionsUrl:a,privacyPolicyUrl:b}=c.OptionsController.state,d=c.OptionsController.state.features?.legalCheckbox;return(!!a||!!b)&&!d}return e.ConstantsUtil.VIEWS_WITH_DEFAULT_FOOTER.includes(a)}}])},693328,a=>{"use strict";a.i(730025);var b=a.i(637573),c=a.i(178506);a.i(53218);var d=a.i(833559);a.i(764831),a.i(508717);var e=a.i(998772),f=a.i(140833),g=a.i(279421);let h=g.css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:a})=>a[1]};
    text-transform: uppercase;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:a})=>a.core.foregroundAccent010};
    color: ${({tokens:a})=>a.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:a})=>a.core.backgroundSuccess};
    color: ${({tokens:a})=>a.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:a})=>a.core.backgroundWarning};
    color: ${({tokens:a})=>a.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:a})=>a.core.backgroundError};
    color: ${({tokens:a})=>a.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:a})=>a[2]};
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:a})=>a[1]};
    border-radius: ${({borderRadius:a})=>a[1]};
  }
`;var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j=class extends b.LitElement{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let a="md"===this.size?"md-medium":"sm-medium",b="md"===this.size?"md":"sm";return c.html`
      ${this.icon?c.html`<wui-icon size=${b} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${a}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};j.styles=[e.resetStyles,h],i([(0,d.property)()],j.prototype,"variant",void 0),i([(0,d.property)()],j.prototype,"size",void 0),i([(0,d.property)()],j.prototype,"icon",void 0),j=i([(0,f.customElement)("wui-tag")],j),a.s([],693328)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__f5a91c48._.js.map