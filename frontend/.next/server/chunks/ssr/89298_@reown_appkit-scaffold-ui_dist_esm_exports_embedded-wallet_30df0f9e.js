module.exports=[789366,a=>{"use strict";a.i(730025);var b=a.i(637573),c=a.i(178506);a.i(53218);var d=a.i(799188),e=a.i(615408),f=a.i(832557),g=a.i(426779),h=a.i(351428),i=a.i(68822);a.i(675998);var j=a.i(140833),k=a.i(896120);let l=k.css`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let n=class extends b.LitElement{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(g.ModalController.subscribeKey("open",a=>{a||this.onHideIframe()}),g.ModalController.subscribeKey("shake",a=>{a?this.iframe.style.animation="w3m-shake 500ms var(--apkt-easings-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(a=>a()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";let a=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver(b=>{let c=b?.[0]?.contentBoxSize,d=c?.[0]?.inlineSize;this.iframe.style.height="600px",a.style.height="600px",h.OptionsController.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():(d&&d<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 300px + 32px)",this.iframe.style.bottom="unset"),this.onShowIframe())}),this.bodyObserver.observe(window.document.body)}render(){return c.html`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){let a=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=a?"w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)"}async syncTheme(){let a=f.ConnectorController.getAuthConnector();if(a){let b=i.ThemeController.getSnapshot().themeMode,c=i.ThemeController.getSnapshot().themeVariables;await a.provider.syncTheme({themeVariables:c,w3mThemeVariables:(0,e.getW3mThemeVariables)(c,b)})}}async updateFrameSizeForEmbeddedMode(){let a=this?.renderRoot?.querySelector("div");await new Promise(a=>{setTimeout(a,300)});let b=this.getBoundingClientRect();a.style.width="100%",this.iframe.style.left=`${b.left}px`,this.iframe.style.top=`${b.top}px`,this.iframe.style.width=`${b.width}px`,this.iframe.style.height=`${b.height}px`,this.onShowIframe()}};n.styles=l,m([(0,d.state)()],n.prototype,"ready",void 0),n=m([(0,j.customElement)("w3m-approve-transaction-view")],n),a.s(["W3mApproveTransactionView",()=>n],987835);var o=b,p=a.i(325163);a.i(801214);var q=b,r=a.i(833559);a.i(764831),a.i(87880),a.i(508717);var s=a.i(998772),t=a.i(279421);let u=t.css`
  a {
    border: none;
    border-radius: ${({borderRadius:a})=>a["20"]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:a})=>a[1]};
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      box-shadow ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      border ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${({tokens:a})=>a.core.backgroundSuccess};
    color: ${({tokens:a})=>a.core.textSuccess};
  }

  a[data-type='error'] {
    background-color: ${({tokens:a})=>a.core.backgroundError};
    color: ${({tokens:a})=>a.core.textError};
  }

  a[data-type='warning'] {
    background-color: ${({tokens:a})=>a.core.backgroundWarning};
    color: ${({tokens:a})=>a.core.textWarning};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:a})=>a[1]};
    padding-right: ${({spacing:a})=>a[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    a[data-type='success']:not(:disabled):hover {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:a})=>a.core.borderSuccess};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:a})=>a.core.borderError};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:a})=>a.core.borderWarning};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:a})=>a.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent020};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:a})=>a.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent020};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:a})=>a.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent020};
  }

  a:disabled {
    opacity: 0.5;
  }
`;var v=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let w={sm:"md-regular",md:"lg-regular",lg:"lg-regular"},x={success:"sealCheck",error:"warning",warning:"exclamationCircle"},y=class extends q.LitElement{constructor(){super(...arguments),this.type="success",this.size="md",this.imageSrc=void 0,this.disabled=!1,this.href="",this.text=void 0}render(){return c.html`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${w[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `}imageTemplate(){return this.imageSrc?c.html`<wui-image src=${this.imageSrc} size="inherit"></wui-image>`:c.html`<wui-icon
      name=${x[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`}};y.styles=[s.resetStyles,s.elementStyles,u],v([(0,r.property)()],y.prototype,"type",void 0),v([(0,r.property)()],y.prototype,"size",void 0),v([(0,r.property)()],y.prototype,"imageSrc",void 0),v([(0,r.property)({type:Boolean})],y.prototype,"disabled",void 0),v([(0,r.property)()],y.prototype,"href",void 0),v([(0,r.property)()],y.prototype,"text",void 0),y=v([(0,j.customElement)("wui-semantic-chip")],y),a.i(104497);let z=class extends o.LitElement{render(){return c.html`
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${p.ConstantsUtil.SECURE_SITE_DASHBOARD}
          href=${p.ConstantsUtil.SECURE_SITE_DASHBOARD}
          imageSrc=${p.ConstantsUtil.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};z=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,j.customElement)("w3m-upgrade-wallet-view")],z),a.s(["W3mUpgradeWalletView",()=>z],930112);var A=b;a.i(811650);var B=a.i(652469),C=a.i(50516),D=a.i(490610),E=a.i(203479),F=a.i(927383),G=a.i(881791),H=a.i(848800),I=a.i(358765),J=b;a.i(634090),a.i(693328);let K=t.css`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[4]};
    padding: ${({spacing:a})=>a[4]};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
      border-radius: ${({borderRadius:a})=>a[6]};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent040};
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }
`;var L=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let M=class extends J.LitElement{constructor(){super(...arguments),this.name="",this.registered=!1,this.loading=!1,this.disabled=!1}render(){return c.html`
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `}templateRightContent(){return this.loading?c.html`<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`:this.registered?c.html`<wui-tag variant="info" size="sm">Registered</wui-tag>`:c.html`<wui-tag variant="success" size="sm">Available</wui-tag>`}};M.styles=[s.resetStyles,s.elementStyles,K],L([(0,r.property)()],M.prototype,"name",void 0),L([(0,r.property)({type:Boolean})],M.prototype,"registered",void 0),L([(0,r.property)({type:Boolean})],M.prototype,"loading",void 0),L([(0,r.property)({type:Boolean})],M.prototype,"disabled",void 0),M=L([(0,j.customElement)("wui-account-name-suggestion-item")],M);var N=b;a.i(852094);var O=a.i(396426);a.i(239902);let P=t.css`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${({spacing:a})=>a[4]};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${({spacing:a})=>a[1]};
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    border-radius: ${({borderRadius:a})=>a[1]};
  }
`;var Q=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let R=class extends N.LitElement{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return c.html`
      <wui-input-text
        value=${(0,O.ifDefined)(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `}};R.styles=[s.resetStyles,P],Q([(0,r.property)()],R.prototype,"errorMessage",void 0),Q([(0,r.property)({type:Boolean})],R.prototype,"disabled",void 0),Q([(0,r.property)()],R.prototype,"value",void 0),Q([(0,r.property)({type:Boolean})],R.prototype,"loading",void 0),Q([(0,r.property)({attribute:!1})],R.prototype,"onKeyDown",void 0),R=Q([(0,j.customElement)("wui-ens-input")],R),a.i(235577),a.i(934670),a.i(161739);var S=a.i(230158),T=a.i(116626);let U=t.css`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[4]};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    border-radius: ${({borderRadius:a})=>a[6]};
    padding: ${({spacing:a})=>a[4]};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent040};
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var V=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let W=class extends A.LitElement{constructor(){super(),this.formRef=(0,B.createRef)(),this.usubscribe=[],this.name="",this.error="",this.loading=F.EnsController.state.loading,this.suggestions=F.EnsController.state.suggestions,this.profileName=D.ChainController.getAccountData()?.profileName,this.onDebouncedNameInputChange=E.CoreHelperUtil.debounce(a=>{a.length<4?this.error="Name must be at least 4 characters long":T.HelpersUtil.isValidReownName(a)?(this.error="",F.EnsController.getSuggestions(a)):this.error="The value is not a valid username"}),this.usubscribe.push(F.EnsController.subscribe(a=>{this.suggestions=a.suggestions,this.loading=a.loading}),D.ChainController.subscribeChainProp("accountState",a=>{this.profileName=a?.profileName,a?.profileName&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(a=>a()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return c.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["1","3","4","3"]}
      >
        <form ${(0,B.ref)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){let a=this.suggestions.find(a=>a.name?.split(".")?.[0]===this.name&&a.registered);if(this.loading)return c.html`<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;let b=`${this.name}${C.ConstantsUtil.WC_NAME_SUFFIX}`;return c.html`
      <wui-icon-link
        ?disabled=${!!a}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${a?"default":"accent-primary"}
        @click=${()=>this.onSubmitName(b)}
      >
      </wui-icon-link>
    `}onNameInputChange(a){let b=T.HelpersUtil.validateReownName(a.detail||"");this.name=b,this.onDebouncedNameInputChange(b)}onKeyDown(a){1!==a.key.length||T.HelpersUtil.isValidReownName(a.key)||a.preventDefault()}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:c.html`<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map(a=>c.html`<wui-account-name-suggestion-item
            name=${a.name}
            ?registered=${a.registered}
            ?loading=${this.loading}
            ?disabled=${a.registered||this.loading}
            data-testid="account-name-suggestion"
            @click=${()=>this.onSubmitName(a.name)}
          ></wui-account-name-suggestion-item>`)}
    </wui-flex>`}isAllowedToSubmit(a){let b=a.split(".")?.[0],c=this.suggestions.find(a=>a.name?.split(".")?.[0]===b&&a.registered);return!this.loading&&!this.error&&!this.profileName&&b&&F.EnsController.validateName(b)&&!c}async onSubmitName(a){try{if(!this.isAllowedToSubmit(a))return;G.EventsController.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:(0,I.getPreferredAccountType)(D.ChainController.state.activeChain)===S.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:a}}),await F.EnsController.registerName(a),G.EventsController.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:(0,I.getPreferredAccountType)(D.ChainController.state.activeChain)===S.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:a}})}catch(b){H.SnackController.showError(b.message),G.EventsController.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:(0,I.getPreferredAccountType)(D.ChainController.state.activeChain)===S.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:a,error:E.CoreHelperUtil.parseError(b)}})}}onEnterKey(a){if("Enter"===a.key&&this.name&&this.isAllowedToSubmit(this.name)){let a=`${this.name}${C.ConstantsUtil.WC_NAME_SUFFIX}`;this.onSubmitName(a)}}};W.styles=U,V([(0,r.property)()],W.prototype,"errorMessage",void 0),V([(0,d.state)()],W.prototype,"name",void 0),V([(0,d.state)()],W.prototype,"error",void 0),V([(0,d.state)()],W.prototype,"loading",void 0),V([(0,d.state)()],W.prototype,"suggestions",void 0),V([(0,d.state)()],W.prototype,"profileName",void 0),W=V([(0,j.customElement)("w3m-register-account-name-view")],W),a.s(["W3mRegisterAccountNameView",()=>W],290774);var X=b,Y=a.i(615307),Z=a.i(802320);a.i(803675),a.i(131066),a.i(66641);let $=k.css`
  .continue-button-container {
    width: 100%;
  }
`,_=class extends X.LitElement{render(){return c.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{E.CoreHelperUtil.openHref(Y.NavigationUtil.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return c.html` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return c.html`<wui-flex
      .padding=${["0","4","0","4"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){Z.RouterController.replace("Account")}};_.styles=$,_=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,j.customElement)("w3m-register-account-name-success-view")],_),a.s(["W3mRegisterAccountNameSuccess",()=>_],968023),a.s([],956899),a.i(956899),a.i(987835),a.i(930112),a.i(290774),a.i(968023),a.s(["W3mApproveTransactionView",()=>n,"W3mRegisterAccountNameSuccess",()=>_,"W3mRegisterAccountNameView",()=>W,"W3mUpgradeWalletView",()=>z],789366)}];

//# sourceMappingURL=89298_%40reown_appkit-scaffold-ui_dist_esm_exports_embedded-wallet_30df0f9e.js.map