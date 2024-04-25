import{_ as l}from"./app.3052dcfb.js";import{l as a,m as i,E as t,G as e,p as s,Y as o,K as p,C as n}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/AngularSignal-basedcomponentstutorial_0.8eaae22e.png",u="/assets/AngularSignal-basedcomponentstutorial_1.146f2583.png",r="/assets/AngularSignal-basedcomponentstutorial_2.a5d5295a.png";const d={},k=p('<img src="'+c+`"><p>Angular 17.3\uAC00 \uCD9C\uC2DC\uB418\uBA74\uC11C \uC2DC\uADF8\uB110 \uAE30\uBC18 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uD604\uC2E4\uC774 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC2DC\uADF8\uB110 \uAE30\uBC18 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uBAA8\uB4E0 \uB370\uC774\uD130 \uC785\uB825, \uCD9C\uB825 \uBC0F \uCFFC\uB9AC\uAC00 RxJs\uC640 \uB3C5\uB9BD\uC801\uC774\uBA70 Angular Signals\uB97C \uB300\uC2E0 \uC0AC\uC6A9\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4.</p><p>\uB2E4\uC2DC \uB9D0\uD574\uC11C, \uC6B0\uB9AC\uAC00 \uC774\uC804\uC5D0 Angular \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC791\uC131\uD588\uB358 \uBC29\uC2DD\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AsyncPipe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> EventEmitter<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Output<span class="token punctuation">,</span> ViewChild <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HelloComponent</span> <span class="token punctuation">{</span>

  @<span class="token function">Input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  name <span class="token operator">=</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">;</span>

  @<span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  greetingClicked <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  @<span class="token function">ViewChild</span><span class="token punctuation">(</span>ProfileComponent<span class="token punctuation">)</span>
  <span class="token literal-property property">profileComponent</span><span class="token operator">:</span> ProfileComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=p(`<p>\uC544\uB798\uB294 \uC2DC\uADF8\uB110 \uAE30\uBC18 \uC811\uADFC \uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD55C \uB3D9\uC77C\uD55C \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC2B5\uC785\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AsyncPipe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> input<span class="token punctuation">,</span> output<span class="token punctuation">,</span> viewChild <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HelloComponent</span> <span class="token punctuation">{</span>

  name <span class="token operator">=</span> input<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&#39;World&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  greetingClicked <span class="token operator">=</span> output<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  profileComponent <span class="token operator">=</span> <span class="token function">viewChild</span><span class="token punctuation">(</span>ProfileComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uAC00\uC7A5 \uD070 \uCC28\uC774\uC810\uC740 \uBAA8\uB4E0 \uB370\uCF54\uB808\uC774\uD130(@Input, @Output, @ViewChild, @ContentChild, @ViewChildren, @ContentChildren)\uAC00 \uC774\uC81C \uD568\uC218\uB85C \uB300\uCCB4\uB420 \uC218 \uC788\uB2E4\uB294 \uC810\uC785\uB2C8\uB2E4.</p><p>\uB610\uD55C \uC785\uB825\uACFC \uCD9C\uB825 \uB458 \uB2E4 \uAC00\uB2A5\uD55C model() \uD568\uC218\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uD568\uC218\uB294 \uC591\uBC29\uD5A5 \uB370\uC774\uD130 \uBC14\uC778\uB529\uC5D0 \uC644\uBCBD\uD569\uB2C8\uB2E4. model()\uC5D0 \uB300\uD55C \uAC04\uB2E8\uD55C \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uC5EC\uAE30\uC5D0\uC11C \uCC3E\uC544\uBCFC \uC218 \uC788\uC5B4\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=n("img",{src:u},null,-1),g=n("h1",{id:"\u1109\u1175\u1100\u1173\u1102\u1165\u11AF-\u1100\u1175\u1107\u1161\u11AB-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173\u110B\u1174-\u110B\u1175\u110B\u1172\u1102\u1173\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161\u110B\u116D",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u1109\u1175\u1100\u1173\u1102\u1165\u11AF-\u1100\u1175\u1107\u1161\u11AB-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173\u110B\u1174-\u110B\u1175\u110B\u1172\u1102\u1173\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161\u110B\u116D","aria-hidden":"true"},"#"),s(" \uC2DC\uADF8\uB110 \uAE30\uBC18 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?")],-1),b=n("p",null,"\uAC04\uB2E8\uD788 \uB9D0\uD574\uC11C, \uB354 \uB098\uC740 \uC131\uB2A5\uACFC \uBCC0\uACBD \uAC10\uC9C0\uB97C \uC704\uD574\uC11C\uC785\uB2C8\uB2E4. \uC2DC\uADF8\uB110 \uAE30\uBC18 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uBA74 Angular\uAC00 \uC5B4\uB5A4 \uBDF0(\uCEF4\uD3EC\uB10C\uD2B8 \uD15C\uD50C\uB9BF\uC758 \uC77C\uBD80\uBD84)\uAC00 \uC5B4\uB5A4 \uC2DC\uADF8\uB110\uC5D0 \uC758\uC874\uD558\uB294\uC9C0 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uC2DC\uADF8\uB110\uC758 \uAC12\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uBA74 Angular\uAC00 \uC815\uD655\uD788 \uC5B4\uB5A4 \uBD80\uBD84\uC744 \uC5C5\uB370\uC774\uD2B8\uD560\uC9C0 \uC54C\uB824\uC90D\uB2C8\uB2E4. \uC804\uCCB4 \uCEF4\uD3EC\uB10C\uD2B8 \uD2B8\uB9AC\uB97C \uD1B5\uACFC\uD558\uACE0 \uBAA8\uB4E0 \uAC83\uC744 \uD655\uC778\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4!",-1),h=n("p",null,"\uBCC0\uACBD \uAC10\uC9C0\uAC00 \uC791\uB3D9\uD558\uB294 \uBC29\uC2DD\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uB824\uBA74 \uC774 \uC124\uBA85\uC744 \uCC38\uACE0\uD574\uBCF4\uC138\uC694.",-1),_=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),y=n("p",null,"\uCD94\uAC00 \uD61C\uD0DD \uC911 \uD558\uB098\uB294 Angular \uD559\uC2B5\uC758 \uAC00\uC7A5 \uC5B4\uB824\uC6B4 \uBD80\uBD84\uC774\uC5C8\uB358 RxJs\uC5D0 \uB300\uD55C \uC758\uC874\uC131\uC774 \uC904\uC5B4\uB4E0\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC2DC\uADF8\uB110 \uAE30\uBC18 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uAD6C\uB3C5, \uC11C\uBE0C\uC81D\uD2B8, \uC5F0\uC0B0\uC790 \uB4F1 \uC5C6\uC774 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uAC83\uC740 Angular \uD300\uC758 \uB2E4\uC74C \uBAA9\uD45C \uC911 \uD558\uB098\uB85C, ng-conf 2024\uC5D0\uC11C \uBC1C\uD45C\uB418\uC5C8\uC2B5\uB2C8\uB2E4: Zone.js\uC640 RxJs \uC5C6\uC774 Angular\uC758 \uBBF8\uB798\uB97C \uC81C\uACF5\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",-1),f=n("p",null,[n("img",{src:r,alt:"AngularSignal-basedcomponentstutorial_2"})],-1),w=n("h1",{id:"\u1109\u1175\u1100\u1173\u1102\u1165\u11AF-\u1100\u1175\u1107\u1161\u11AB-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173\u1105\u1173\u11AF-\u110B\u1165\u1104\u1165\u11C2\u1100\u1166-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u11AF\u1101\u1161\u110B\u116D",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u1109\u1175\u1100\u1173\u1102\u1165\u11AF-\u1100\u1175\u1107\u1161\u11AB-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173\u1105\u1173\u11AF-\u110B\u1165\u1104\u1165\u11C2\u1100\u1166-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u11AF\u1101\u1161\u110B\u116D","aria-hidden":"true"},"#"),s(" \uC2DC\uADF8\uB110 \uAE30\uBC18 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC5B4\uB5BB\uAC8C \uAD6C\uD604\uD560\uAE4C\uC694?")],-1),C=n("p",null,"Angular\uC758 \uD604\uC7AC \uC0C1\uD0DC\uC5D0\uC11C \uC2DC\uADF8\uB110 \uAE30\uBC18 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD65C\uC131\uD654\uD558\uB294 \uCCAB \uBC88\uC9F8 \uB2E8\uACC4\uB294 \uC11C\uBE44\uC2A4\uB97C Observable\uACFC Subject \uB300\uC2E0 \uC2DC\uADF8\uB110\uC744 \uB178\uCD9C\uD558\uB3C4\uB85D \uB9CC\uB4DC\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uAC00\uC774\uB4DC\uB77C\uC778\uACFC \uCD5C\uACE0\uC758 \uC2E4\uCC9C \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC11C\uBE44\uC2A4\uC5D0\uC11C \uC2DC\uADF8\uB110\uC744 \uC548\uC804\uD558\uAC8C \uB178\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),x=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),j=n("p",null,"\uB450 \uBC88\uC9F8 \uB2E8\uACC4\uB294 \uAD6C\uC131 \uC694\uC18C\uC5D0\uC11C \uC0AC\uC6A9 \uC911\uC778 \uBAA8\uB4E0 \uB370\uCF54\uB808\uC774\uD130\uB97C \uC0C8\uB85C\uC6B4 \uC2DC\uADF8\uB110 \uAE30\uBC18 \uC635\uC158\uC73C\uB85C \uBC14\uAFB8\uB294 \uAC83\uC785\uB2C8\uB2E4:",-1),A=n("ul",null,[n("li",null,"@Input\uC740 input()\uC73C\uB85C \uBC14\uB01D\uB2C8\uB2E4."),n("li",null,"@ViewChild\uB294 viewChild()\uB85C, @ContentChild\uB294 contentChild()\uB85C \uBC14\uB01D\uB2C8\uB2E4."),n("li",null,"@Output\uC740 output()\uC73C\uB85C \uBC14\uB01D\uB2C8\uB2E4.")],-1),O=n("p",null,"input()\uACFC \uB2EC\uB9AC output() \uD568\uC218\uB294 \uC2DC\uADF8\uB110\uC744 \uBC18\uD658\uD558\uC9C0 \uC54A\uB294\uB2E4\uB294 \uC810\uC5D0 \uC720\uC758\uD574\uC57C \uD569\uB2C8\uB2E4. \uB300\uC2E0, \uC774 \uD568\uC218\uB294 RxJs\uC5D0 \uB300\uD55C \uC758\uC874\uC131\uC744 \uACA9\uB9AC\uC2DC\uD0A4\uB294\uB370, Angular\uC758 EventEmitter\uB294 RxJs Observable\uC744 \uD655\uC7A5\uD558\uC9C0\uB9CC \uC5EC\uC804\uD788 .emit() \uBA54\uC11C\uB4DC\uC5D0 \uC758\uC874\uD569\uB2C8\uB2E4.",-1),R=n("p",null,"\uB2E4\uC74C\uACFC \uAC19\uC740 output \uC120\uC5B8\uC774 Typescript \uCEF4\uD3EC\uB10C\uD2B8 \uCF54\uB4DC\uC5D0 \uC788\uB2E4\uACE0 \uAC00\uC815\uD574 \uBD05\uC2DC\uB2E4:",-1),S=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),J=p('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>greetingClicked <span class="token operator">=</span> output<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uADF8\uB7F0 \uB2E4\uC74C, \uB2E4\uC74C\uACFC \uAC19\uC774 \uCD9C\uB825 \uAC12\uC744 \uBC1C\uC0DD\uC2DC\uD0B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>greetingClicked<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;\uC77C\uBD80 \uAC12&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Rxjs \uCF54\uB4DC \uBC0F \uB808\uAC70\uC2DC \uB370\uCF54\uB808\uC774\uD130\uAC00 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uC644\uC804\uD788 \uC81C\uAC70\uB418\uBA74 \uCD5C\uC885 \uB2E8\uACC4\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBCC0\uACBD \uAC10\uC9C0 \uC804\uB7B5\uC744 OnPush\uB85C \uBCC0\uACBD\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB294 \uACE7 \uBCC0\uACBD\uB420 \uC218 \uC788\uC9C0\uB9CC \uD604\uC7AC\uB294 \uC6B0\uB9AC\uC758 \uC804\uCCB4 \uCEF4\uD3EC\uB10C\uD2B8 \uD2B8\uB9AC\uB97C \uBB34\uC870\uAC74 \uD1B5\uACFC\uD560 \uAE30\uBCF8 \uC804\uB7B5\uC744 \uBE44\uD65C\uC131\uD654\uD558\uB294 \uAC00\uC7A5 \uC26C\uC6B4 \uBC29\uBC95\uC785\uB2C8\uB2E4.```</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),E=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;app-hello&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">templateUrl</span><span class="token operator">:</span> <span class="token string">&#39;./hello.component.html&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">standalone</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">changeDetection</span><span class="token operator">:</span> ChangeDetectionStrategy<span class="token punctuation">.</span>OnPush<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HelloComponent</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uD558\uBA74 \uC2DC\uADF8\uB110 \uAE30\uBC18 \uAD6C\uC131 \uC694\uC18C\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uACE0, \uBCC0\uACBD \uAC10\uC9C0\uAC00 \uD5A5\uC0C1\uB418\uBA70 RxJs\uC5D0 \uB300\uD55C \uB3C5\uB9BD\uC131\uC774 \uD5A5\uC0C1\uB429\uB2C8\uB2E4!</p><p>Stackblitz\uC5D0\uC11C \uC791\uB3D9\uD558\uB294 \uC644\uC804\uD55C \uC608\uC81C\uB97C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h1 id="rxjs\u110B\u1166-\u1103\u1162\u1112\u1162\u1109\u1165-\u110B\u1165\u1104\u1165\u11C2\u1100\u1166-\u1109\u1162\u11BC\u1100\u1161\u11A8\u1112\u1161\u1109\u1175\u11B8\u1102\u1175\u1101\u1161" tabindex="-1"><a class="header-anchor" href="#rxjs\u110B\u1166-\u1103\u1162\u1112\u1162\u1109\u1165-\u110B\u1165\u1104\u1165\u11C2\u1100\u1166-\u1109\u1162\u11BC\u1100\u1161\u11A8\u1112\u1161\u1109\u1175\u11B8\u1102\u1175\u1101\u1161" aria-hidden="true">#</a> RxJs\uC5D0 \uB300\uD574\uC11C \uC5B4\uB5BB\uAC8C \uC0DD\uAC01\uD558\uC2ED\uB2C8\uAE4C?</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),V=n("p",null,"\uC2E0\uD638\uB294 RxJs\uC640 \uC0C1\uD638 \uC6B4\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uC5EC\uB7EC \uD568\uC218\uB97C \uD1B5\uD574 \uC124\uACC4\uB418\uC5C8\uC2B5\uB2C8\uB2E4:",-1),P=n("ul",null,[n("li",null,"toObservable()\uC740 \uC2E0\uD638\uB97C Observable\uB85C \uBCC0\uD658\uD569\uB2C8\uB2E4."),n("li",null,"toSignal()\uC740 Observable\uC744 \uC2E0\uD638\uB85C \uBCC0\uD658\uD569\uB2C8\uB2E4."),n("li",null,"outputToObservable()\uC740 OutputRef(ouput() \uD568\uC218\uC5D0 \uC758\uD574 \uBC18\uD658\uB41C \uC0C8 \uAC1D\uCCB4)\uB97C Observable\uB85C \uBCC0\uD658\uD569\uB2C8\uB2E4."),n("li",null,"outputFromObservable()\uC740 Observable\uC744 \uCD9C\uB825\uC73C\uB85C \uBCC0\uD658\uD569\uB2C8\uB2E4.")],-1),B=n("p",null,"RxJs\uB97C \uACC4\uC18D \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD2B9\uD788, \uC11C\uBE44\uC2A4\uAC00 \uBCF5\uC7A1\uD55C \uC5F0\uC0B0\uC790 \uCCB4\uC778\uC744 \uAC00\uC9C0\uACE0 \uC788\uB294 \uACBD\uC6B0\uC785\uB2C8\uB2E4. \uB2E8\uC9C0 \uACB0\uACFC\uB97C \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uB300\uD55C \uC2E0\uD638\uB85C \uBCC0\uD658\uD558\uBA74 \uB429\uB2C8\uB2E4.",-1);function I(D,H){return a(),i("div",null,[k,(a(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(a(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,g,b,h,_,(a(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,f,w,C,x,(a(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,A,O,R,S,(a(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),J,(a(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),E,(a(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),V,P,B])}var K=l(d,[["render",I],["__file","index.html.vue"]]);export{K as default};
