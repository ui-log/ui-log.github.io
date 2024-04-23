import{_ as c}from"./app.d68f74da.js";import{l as a,m as l,E as t,G as p,p as s,Y as e,C as n,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/MasteringReactTipstoAvoidCommonBeginnerErrors_0.fd1bbb37.png";const u={},r=n("p",null,[n("img",{src:i,alt:"\uB9C8\uC2A4\uD130\uB9C1 \uB9AC\uC561\uD2B8: \uCD08\uBCF4\uC790\uAC00 \uD53C\uD574\uC57C \uD560 \uC77C\uBC18 \uC624\uB958\uB97C \uD53C\uD558\uB294 \uD301"})],-1),d=n("p",null,"\uB9AC\uC561\uD2B8\uB294 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAD6C\uCD95\uD558\uB294 \uAC15\uB825\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC774\uC9C0\uB9CC, \uC5B4\uB5A4 \uB3C4\uAD6C\uB4E0 \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uC624\uC6A9\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCD08\uBCF4\uC790\uB4E4\uC740 \uC885\uC885 \uC720\uC9C0 \uAD00\uB9AC\uAC00 \uC5B4\uB824\uC6B0\uBA70 \uC131\uB2A5\uC774 \uB0AE\uC544\uC9C0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uC774\uC5B4\uC9C8 \uC218 \uC788\uB294 \uD568\uC815\uC5D0 \uBE60\uC9C0\uACE4 \uD569\uB2C8\uB2E4. \uC774 \uAC8C\uC2DC\uBB3C\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uC77C\uBC18\uC801\uC778 \uD568\uC815\uACFC \uADF8\uAC83\uB4E4\uC744 \uD53C\uD558\uB294 \uBC29\uBC95\uC744 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),k=n("h1",{id:"\u1109\u1175\u11AF\u1109\u116E-1-state-\u1100\u116A\u110B\u116D\u11BC",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u1109\u1175\u11AF\u1109\u116E-1-state-\u1100\u116A\u110B\u116D\u11BC","aria-hidden":"true"},"#"),s(" \uC2E4\uC218 1: State \uACFC\uC6A9")],-1),v=n("p",null,"State\uB294 \uC808\uC57D\uD574\uC11C \uC0AC\uC6A9\uD558\uACE0 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB3D9\uC801 \uC815\uBCF4\uB97C \uD45C\uD604\uD558\uB294 \uB370\uC774\uD130\uC5D0\uB9CC \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. State\uB97C \uACFC\uC6A9\uD558\uBA74 \uBD88\uD544\uC694\uD55C \uC7AC\uB80C\uB354\uB9C1\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uACE0, \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB85C\uC9C1\uC744 \uC774\uD574\uD558\uAE30 \uC5B4\uB835\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),m=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=o(`<p>\uBB38\uC81C: \uB54C\uB54C\uB85C, \uAF2D \uD544\uC694\uD558\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC758 \uBAA8\uB4E0 \uAC12\uC744 \uC800\uC7A5\uD558\uB294 \uC2E4\uC218\uB97C \uC790\uC8FC \uC800\uC9C8\uB7EC\uC694.</p><p>\uD574\uACB0\uCC45: \uB370\uC774\uD130 \uBCC0\uACBD\uACFC \uC7AC\uB80C\uB354\uB9C1\uC744 \uC720\uBC1C\uD558\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uC0C1\uD0DC\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uB098\uC068: \uD30C\uC0DD \uB370\uC774\uD130\uC5D0 \uBD88\uD544\uC694\uD55C \uC0C1\uD0DC</span>
<span class="token keyword">function</span> <span class="token function">PriceComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> basePrice <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>price<span class="token punctuation">,</span> setPrice<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>basePrice<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>tax<span class="token punctuation">,</span> setTax<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTax</span><span class="token punctuation">(</span>basePrice <span class="token operator">*</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uD30C\uC0DD \uB370\uC774\uD130\uB294 \uC0C1\uD0DC\uC5D0 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC544\uC57C \uD569\uB2C8\uB2E4.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>basePrice<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\uCD1D \uAC00\uACA9<span class="token operator">:</span> <span class="token punctuation">{</span>price <span class="token operator">+</span> tax<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \uC88B\uC74C: \uC9C1\uC811 \uD30C\uC0DD \uB370\uC774\uD130 \uACC4\uC0B0</span>
<span class="token keyword">function</span> <span class="token function">PriceComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> basePrice <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> tax <span class="token operator">=</span> basePrice <span class="token operator">*</span> <span class="token number">0.2</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\uCD1D \uAC00\uACA9<span class="token operator">:</span> <span class="token punctuation">{</span>basePrice <span class="token operator">+</span> tax<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1109\u1175\u11AF\u1109\u116E-2-\u1111\u1173\u1105\u1162\u1100\u1173\u1106\u1165\u11AB\u1110\u1173-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u11AF\u1109\u116E-2-\u1111\u1173\u1105\u1162\u1100\u1173\u1106\u1165\u11AB\u1110\u1173-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1100\u1175" aria-hidden="true">#</a> \uC2E4\uC218 2: \uD504\uB798\uADF8\uBA3C\uD2B8 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uAE30</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=o(`<p>React Fragments\uB294 \uCD94\uAC00 \uB178\uB4DC\uB97C DOM\uC5D0 \uCD94\uAC00\uD558\uC9C0 \uC54A\uACE0 \uC5EC\uB7EC \uC694\uC18C\uB97C \uBC18\uD658\uD560 \uC218 \uC788\uAC8C \uD574\uC90D\uB2C8\uB2E4. \uC774\uB294 DOM \uD2B8\uB9AC\uB97C \uAE54\uB054\uD558\uAC8C \uC720\uC9C0\uD558\uACE0 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294 \uB370 \uC720\uC6A9\uD569\uB2C8\uB2E4.</p><p>\uBB38\uC81C: \uBD88\uD544\uC694\uD55C DOM \uC694\uC18C\uAC00 \uB9C8\uD06C\uC5C5\uC744 \uC9C0\uC800\uBD84\uD558\uAC8C \uB9CC\uB4E4\uACE0 \uC131\uB2A5\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE60 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uD574\uACB0\uCC45: React Fragments\uB97C \uC0AC\uC6A9\uD558\uC5EC \uCD94\uAC00 \uB178\uB4DC\uB97C DOM\uC5D0 \uCD94\uAC00\uD558\uC9C0 \uC54A\uACE0 \uC790\uC2DD \uC694\uC18C \uBAA9\uB85D\uC744 \uADF8\uB8F9\uD654\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC548 \uC88B\uC740 \uBC29\uBC95: Extra div element</span>
<span class="token keyword">function</span> <span class="token function">List</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ListItem <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ListItem <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \uC88B\uC740 \uBC29\uBC95: React.Fragment \uC0AC\uC6A9</span>
<span class="token keyword">function</span> <span class="token function">List</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ListItem <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ListItem <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=n("h1",{id:"\u1109\u1175\u11AF\u1109\u116E-3-prop-types-\u1106\u116E\u1109\u1175\u1112\u1161\u1100\u1175",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u1109\u1175\u11AF\u1109\u116E-3-prop-types-\u1106\u116E\u1109\u1175\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),s(" \uC2E4\uC218 3: Prop Types \uBB34\uC2DC\uD558\uAE30")],-1),h=n("p",null,"Prop types\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC804\uB2EC\uB41C \uC18D\uC131\uC758 \uC758\uB3C4\uB41C \uC720\uD615\uC744 \uBB38\uC11C\uD654\uD558\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4. \uAC1C\uBC1C \uC911\uC5D0 \uB370\uC774\uD130 \uC720\uD615\uC744 \uC720\uD6A8\uC131 \uAC80\uC0AC\uD558\uC5EC \uBC84\uADF8\uB97C \uBC29\uC9C0\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),f=n("p",null,"\uBB38\uC81C: prop\uC744 \uC720\uD6A8\uC131 \uAC80\uC0AC\uD558\uC9C0 \uC54A\uC73C\uBA74 \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC5D0\uC11C \uC608\uC0C1\uCE58 \uBABB\uD55C \uBC84\uADF8\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),_=n("p",null,"\uD574\uACB0\uCC45: propTypes\uB97C \uC0AC\uC6A9\uD558\uC5EC \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC62C\uBC14\uB978 \uC720\uD615\uC758 prop\uC744 \uBC1B\uB3C4\uB85D \uD558\uC138\uC694.",-1),w=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),x=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&#39;prop-types&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Good: Using prop types for validation</span>
<span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Name<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Age<span class="token operator">:</span> <span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

UserProfile<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1109\u1175\u11AF\u1109\u116E-4-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u110C\u1162\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC-\u110B\u1169\u1112\u1162" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u11AF\u1109\u116E-4-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u110C\u1162\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC-\u110B\u1169\u1112\u1162" aria-hidden="true">#</a> \uC2E4\uC218 4: \uCEF4\uD3EC\uB10C\uD2B8 \uC7AC\uB80C\uB354\uB9C1 \uC624\uD574</h1><p>\uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC744 \uB54C\uBFD0\uB9CC \uC544\uB2C8\uB77C \uD504\uB86D\uC774 \uBCC0\uACBD\uB418\uC5C8\uAC70\uB098 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC7AC\uB80C\uB354\uB9C1 \uB420 \uB54C\uB3C4 \uC7AC\uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. \uC774\uB97C \uC81C\uB300\uB85C \uAD00\uB9AC\uD558\uC9C0 \uC54A\uC73C\uBA74 \uC131\uB2A5 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uBB38\uC81C: React \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB420 \uB54C\uB9CC \uC7AC\uB80C\uB354\uB9C1\uB41C\uB2E4\uACE0 \uC0DD\uAC01\uD558\uAE30.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),C=o(`<p>\uD574\uACB0\uCC45: \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uBD80\uBAA8\uAC00 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB420 \uB54C\uB098 \uD504\uB86D\uC774 \uBCC0\uACBD\uB420 \uB54C\uB3C4 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB41C\uB2E4\uB294 \uAC83\uC744 \uC774\uD574\uD574\uC8FC\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC88B\uC740 \uC608\uC2DC: React.memo\uB85C \uCD5C\uC801\uD654\uD558\uAE30</span>
<span class="token keyword">const</span> ChildComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ChildComponent\uC774 \uB80C\uB354\uB9C1\uB428&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ParentComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ChildComponent value<span class="token operator">=</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\uC99D\uAC00<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1109\u1175\u11AF\u1109\u116E-5-\u1109\u1161\u11BC\u1110\u1162-\u110C\u1175\u11A8\u110C\u1165\u11B8-\u1107\u1167\u11AB\u1100\u1167\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u11AF\u1109\u116E-5-\u1109\u1161\u11BC\u1110\u1162-\u110C\u1175\u11A8\u110C\u1165\u11B8-\u1107\u1167\u11AB\u1100\u1167\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC2E4\uC218 5: \uC0C1\uD0DC \uC9C1\uC811 \uBCC0\uACBD\uD558\uAE30</h1><p>\uC0C1\uD0DC\uB97C \uC9C1\uC811 \uBCC0\uC774\uD558\uB294 \uAC83\uC740 \uC608\uC0C1\uCE58 \uBABB\uD55C \uB3D9\uC791\uC744 \uCD08\uB798\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. React\uB294 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uAC10\uC9C0\uD558\uAE30 \uC704\uD574 \uBD88\uBCC0\uC131\uC5D0 \uC758\uC874\uD558\uAE30 \uB54C\uBB38\uC5D0 \uD56D\uC0C1 setState \uD568\uC218\uB098 \uD6C5\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC5C5\uB370\uC774\uD130 \uD568\uC218\uB97C \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),P=o(`<p>\uBB38\uC81C: \uC0C1\uD0DC\uB97C \uC9C1\uC811 \uBCC0\uACBD\uD558\uBA74 \uC608\uCE21\uD560 \uC218 \uC5C6\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uB3D9\uC791\uC744 \uC720\uB3C4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uD574\uACB0\uCC45: \uD56D\uC0C1 setState \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0C1\uD0DC\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uC2ED\uC2DC\uC624.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uB098\uC05C \uC608: \uC0C1\uD0DC\uB97C \uC9C1\uC811 \uBCC0\uACBD</span>
<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>items<span class="token punctuation">,</span> setItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token parameter">newItem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newItem<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uC774\uAC83\uC740 \uC7AC\uB80C\uB354\uB9C1\uC744 \uC77C\uC73C\uD0A4\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4</span>
    <span class="token function">setItems</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// \uC88B\uC740 \uC608: \uD568\uC218 \uC5C5\uB370\uC774\uD2B8 \uC0AC\uC6A9</span>
<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>items<span class="token punctuation">,</span> setItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token parameter">newItem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setItems</span><span class="token punctuation">(</span><span class="token parameter">prevItems</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token operator">...</span>prevItems<span class="token punctuation">,</span> newItem<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1100\u1167\u11AF\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1105\u1169\u11AB" aria-hidden="true">#</a> \uACB0\uB860</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),I=n("p",null,"\uC790\uC8FC \uD558\uB294 \uC2E4\uC218\uB97C \uD53C\uD558\uBA74 \uB354 \uB098\uC740, \uB354 \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uB420 \uAC83\uC785\uB2C8\uB2E4. React\uB97C \uBC30\uC6B0\uB294 \uAC83\uC740 \uC5EC\uC815\uC785\uB2C8\uB2E4. \uACC4\uC18D \uC2E4\uD5D8\uD558\uACE0, \uB3C5\uD574\uD558\uACE0, \uCF54\uB529\uD574\uBCF4\uC138\uC694. \uC990\uAC70\uC6B4 \uAC1C\uBC1C\uB418\uC138\uC694!",-1);function j(R,S){return a(),l("div",null,[r,d,k,v,m,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,h,f,_,w,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),C,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),P,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),I])}var N=c(u,[["render",j],["__file","index.html.vue"]]);export{N as default};
