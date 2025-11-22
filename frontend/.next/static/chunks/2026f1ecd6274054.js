(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,330322,e=>{"use strict";e.i(930017);var t=e.i(154747),i=e.i(668503);e.i(55906);var r=e.i(27926);e.i(996690);var o=e.i(344912),n=e.i(423929),a=e.i(729289),s=e.i(232674),l=e.i(904670),c=e.i(234696),u=e.i(501528),d=e.i(843175);e.i(707294);var h=e.i(891947),p=e.i(411521),w=t,m=e.i(798975);e.i(72454),e.i(301709),e.i(22662),e.i(546414);var f=e.i(903181),g=e.i(638403);let b=g.css`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    border: none;
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:active:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-text {
    flex: 1;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-flex {
    width: auto;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e["01"]};
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .network-icon {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
    margin-left: -8px;
  }

  .network-icon:first-child {
    margin-left: 0px;
  }

  .network-icon:after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }
`;var k=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let C=class extends w.LitElement{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return i.html`
      <button>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
        <wui-flex>
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="inherit"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let e=this.networkImages.slice(0,5);return i.html` <wui-flex class="networks">
      ${e?.map(e=>i.html` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};C.styles=[f.resetStyles,f.elementStyles,b],k([(0,m.property)({type:Array})],C.prototype,"networkImages",void 0),k([(0,m.property)()],C.prototype,"text",void 0),C=k([(0,p.customElement)("wui-compatible-network")],C),e.i(286715),e.i(928811),e.i(249033);var y=e.i(45471);let v=g.css`
  wui-compatible-network {
    margin-top: ${({spacing:e})=>e["4"]};
    width: 100%;
  }

  wui-qr-code {
    width: unset !important;
    height: unset !important;
  }

  wui-icon {
    align-items: normal;
  }
`;var x=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let $=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.address=a.ChainController.getAccountData()?.address,this.profileName=a.ChainController.getAccountData()?.profileName,this.network=a.ChainController.state.activeCaipNetwork,this.unsubscribe.push(a.ChainController.subscribeChainProp("accountState",e=>{e?(this.address=e.address,this.profileName=e.profileName):c.SnackController.showError("Account not found")}),a.ChainController.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-wallet-receive-view: No account provided");let e=n.AssetUtil.getNetworkImage(this.network);return i.html` <wui-flex
      flexDirection="column"
      .padding=${["0","4","4","4"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${h.UiHelperUtil.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:4*!this.profileName,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["4","0","0","0"]}
        alignItems="center"
        gap="4"
      >
        <wui-qr-code
          size=${232}
          theme=${u.ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,o.ifDefined)(u.ThemeController.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="lg-regular" color="primary" align="center">
          Copy your address or scan this QR code
        </wui-text>
        <wui-button @click=${this.onCopyClick.bind(this)} size="sm" variant="neutral-secondary">
          <wui-icon slot="iconLeft" size="sm" color="inherit" name="copy"></wui-icon>
          <wui-text variant="md-regular" color="inherit">Copy address</wui-text>
        </wui-button>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=a.ChainController.getAllRequestedCaipNetworks(),t=a.ChainController.checkIfSmartAccountEnabled(),r=a.ChainController.state.activeCaipNetwork,o=e.filter(e=>e?.chainNamespace===r?.chainNamespace);if((0,d.getPreferredAccountType)(r?.chainNamespace)===y.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return r?i.html`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[n.AssetUtil.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;let s=(o?.filter(e=>e?.assets?.imageId)?.slice(0,5)).map(n.AssetUtil.getNetworkImage).filter(Boolean);return i.html`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${s}
    ></wui-compatible-network>`}onReceiveClick(){l.RouterController.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(s.CoreHelperUtil.copyToClopboard(this.address),c.SnackController.showSuccess("Address copied"))}catch{c.SnackController.showError("Failed to copy")}}};$.styles=v,x([(0,r.state)()],$.prototype,"address",void 0),x([(0,r.state)()],$.prototype,"profileName",void 0),x([(0,r.state)()],$.prototype,"network",void 0),$=x([(0,p.customElement)("w3m-wallet-receive-view")],$),e.s(["W3mWalletReceiveView",()=>$],298178),e.s([],577755),e.i(577755),e.i(298178),e.s(["W3mWalletReceiveView",()=>$],330322)}]);