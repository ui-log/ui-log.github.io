import{_ as l}from"./app.3052dcfb.js";import{l as a,m as r,E as p,G as e,p as n,Y as t,C as s,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/CombiningthePowersofCSSGridandFlexboxAUnifiedApproachforDynamicWebLayouts_0.a2cdd1cf.png";const c={},d=s("p",null,"\uC138\uB85C\uC640 \uAC00\uB85C\uC758 \uB808\uC774\uC544\uC6C3\uC744 \uB9CC\uB4E4 \uB54C CSS Grid\uC640 Flexbox\uB294 \uB6F0\uC5B4\uB09C \uB3C4\uAD6C\uC785\uB2C8\uB2E4. CSS Grid\uB294 2\uCC28\uC6D0 \uB808\uC774\uC544\uC6C3\uC744 \uB9CC\uB4E4\uAE30 \uC704\uD55C \uAC15\uB825\uD55C \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC81C\uACF5\uD558\uB294 \uBC18\uBA74, Flexbox\uB294 1\uCC28\uC6D0 \uACF5\uAC04 \uB0B4\uC5D0\uC11C \uCF58\uD150\uCE20\uB97C \uC815\uB82C\uD558\uB294 \uB370 \uB2A5\uC219\uD569\uB2C8\uB2E4. \uC774 \uAE30\uC0AC\uB294 \uC774 \uB450 \uAC00\uC9C0 \uAE30\uC220\uC744 \uACB0\uD569\uD558\uC5EC \uAC01\uAC01\uC758 \uC7A5\uC810\uC744 \uD65C\uC6A9\uD558\uC5EC \uBCF5\uC7A1\uD558\uACE0 \uBC18\uC751\uD615 \uC6F9 \uB514\uC790\uC778\uC744 \uB9CC\uB4DC\uB294 \uBC29\uBC95\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \u201CCSS Flexbox\uB97C \uD65C\uC6A9\uD55C \uC720\uC5F0\uD55C \uB808\uC774\uC544\uC6C3 \uB9CC\uB4E4\uAE30: \uD3EC\uAD04\uC801 \uAC00\uC774\uB4DC\u201D\uC640 \u201CCSS Grid\uB97C \uD65C\uC6A9\uD55C \uC6F9 \uB808\uC774\uC544\uC6C3 \uAE30\uBC95 \uB9C8\uC2A4\uD130\uD558\uAE30\u201D\uB97C \uD1A0\uB300\uB85C, Grid\uC640 Flexbox\uB97C \uD568\uAED8 \uC0AC\uC6A9\uD558\uC5EC \uB808\uC774\uC544\uC6C3 \uC720\uC5F0\uC131\uACFC \uC0AC\uC6A9\uC131\uC744 \uD5A5\uC0C1\uD558\uB294 \uAD6C\uCCB4\uC801\uC778 \uC2DC\uB098\uB9AC\uC624\uB97C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),u=s("p",null,[s("img",{src:i,alt:""})],-1),k=s("h1",{id:"grid\u110B\u116A-flexbox\u110B\u1174-\u1109\u1175\u1102\u1165\u110C\u1175",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#grid\u110B\u116A-flexbox\u110B\u1174-\u1109\u1175\u1102\u1165\u110C\u1175","aria-hidden":"true"},"#"),n(" Grid\uC640 Flexbox\uC758 \uC2DC\uB108\uC9C0")],-1),v=s("p",null,"CSS Grid\uC758 \uD589\uACFC \uC5F4\uC744 \uAD00\uB9AC\uD558\uB294 \uB2A5\uB825\uC740 \uC804\uCCB4 \uD398\uC774\uC9C0 \uAD6C\uC870\uB97C \uC124\uC815\uD558\uB294 \uB370 \uC774\uC0C1\uC801\uC785\uB2C8\uB2E4. Flexbox\uB294 \uACF5\uAC04\uC744 \uBD84\uBC30\uD558\uACE0 \uD56D\uBAA9\uC744 \uD558\uB098\uC758 \uCD95\uC744 \uB530\uB77C \uC815\uB82C\uD558\uB294 \uB2A5\uB825 \uB54C\uBB38\uC5D0 Grid \uB0B4 \uC140 \uB0B4\uC6A9\uC744 \uD6A8\uC728\uC801\uC73C\uB85C \uAD00\uB9AC\uD558\uB294 \uB370 \uC6A9\uC774\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uAE30\uC220\uC744 \uD1B5\uD569\uD568\uC73C\uB85C\uC368 \uAC1C\uBC1C\uC790\uB4E4\uC740 \uACFC\uAC70\uC5D0 \uC5B4\uB824\uC6E0\uB358 \uB514\uC790\uC778 \uC815\uBC00\uB3C4\uC640 \uBC18\uC751\uC131\uC744 \uB2EC\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),b=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),m=o('<p>\uBBF8\uB514\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC608\uC81C\uB97C \uD655\uC7A5\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4. CSS Grid\uC640 Flexbox\uB97C \uC5B4\uB5BB\uAC8C \uC870\uD569\uD558\uC5EC \uB354 \uBCF5\uC7A1\uD55C \uB808\uC774\uC544\uC6C3 \uC694\uAD6C \uC0AC\uD56D\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294\uC9C0 \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774 \uBC29\uC2DD\uC744 \uD1B5\uD574 \uBBF8\uB514\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uBBF8\uC801\uC73C\uB85C \uB9E4\uB825\uC801\uC774\uBA70 \uB2E4\uC591\uD55C \uCF58\uD150\uCE20 \uD06C\uAE30\uC640 \uD654\uBA74 \uD06C\uAE30\uC5D0 \uC801\uC751\uD558\uC5EC \uAE30\uB2A5\uC801\uC73C\uB85C \uAC15\uB825\uD574\uC9D1\uB2C8\uB2E4.</p><h1 id="\u110B\u1168\u110C\u1166-\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u1106\u1175\u1103\u1175\u110B\u1165-\u1105\u1161\u110B\u1175\u1107\u1173\u1105\u1165\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u110C\u1166-\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u1106\u1175\u1103\u1175\u110B\u1165-\u1105\u1161\u110B\u1175\u1107\u1173\u1105\u1165\u1105\u1175" aria-hidden="true">#</a> \uC608\uC81C: \uBC18\uC751\uD615 \uBBF8\uB514\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC</h1><p>\uC6B0\uB9AC\uC758 \uBAA9\uD45C\uB294 \uC568\uBC94 \uC544\uD2B8\uC6CC\uD06C, \uB178\uB798 \uBAA9\uB85D, \uCD9C\uC2DC \uB0A0\uC9DC, \uC7A5\uB974\uC640 \uAC19\uC740 \uCD94\uAC00 \uC138\uBD80 \uC815\uBCF4\uAC00 \uD3EC\uD568\uB41C \uC568\uBC94\uC744 \uBCF4\uC5EC\uC8FC\uB294 \uBC18\uC751\uD615 \uBBF8\uB514\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uB9CC\uB4DC\uB294 \uAC83\uC785\uB2C8\uB2E4. \uBA3C\uC800 \uC568\uBC94\uC744 \uC704\uD55C \uADF8\uB9AC\uB4DC \uB808\uC774\uC544\uC6C3\uC744 \uC124\uC815\uD558\uACE0, \uAC01 \uC568\uBC94 \uB0B4\uC5D0\uC11C \uB178\uB798\uC640 \uC138\uBD80 \uC815\uBCF4\uC758 \uB808\uC774\uC544\uC6C3\uC744 \uD6A8\uC728\uC801\uC73C\uB85C \uAD00\uB9AC\uD558\uAE30 \uC704\uD574 Flexbox\uB97C \uC0AC\uC6A9\uD560 \uAC83\uC785\uB2C8\uB2E4.</p><h2 id="\u1103\u1161\u11AB\u1100\u1168-1-\u1100\u1173\u1105\u1175\u1103\u1173-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA-\u1112\u1163\u11BC\u1109\u1161\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-1-\u1100\u1173\u1105\u1175\u1103\u1173-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA-\u1112\u1163\u11BC\u1109\u1161\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB2E8\uACC4 1: \uADF8\uB9AC\uB4DC \uB808\uC774\uC544\uC6C3 \uD5A5\uC0C1\uD558\uAE30</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),g=o(`<p>\uD654\uBA74 \uD06C\uAE30\uC5D0 \uB530\uB77C \uC870\uC815\uB418\uB294 \uBCF5\uC7A1\uD55C \uADF8\uB9AC\uB4DC \uB808\uC774\uC544\uC6C3\uC744 \uC815\uC758\uD558\uC5EC \uC568\uBC94\uC774 \uBAA8\uBC14\uC77C \uC7A5\uCE58\uC640 \uB370\uC2A4\uD06C\uD1B1\uC5D0\uC11C \uC0AC\uC6A9\uC790 \uCE5C\uD654\uC801\uC73C\uB85C \uD45C\uC2DC\uB418\uB3C4\uB85D \uD560 \uAC83\uC785\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>media<span class="token operator">-</span>library <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
  grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto<span class="token operator">-</span>fill<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>250px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">gap</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>album <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
  <span class="token literal-property property">gap</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1103\u1161\u11AB\u1100\u1168-2-\u1100\u1173\u1105\u1175\u1103\u1173-\u1109\u1166\u11AF-\u1102\u1162-\u1109\u1166\u1107\u116E-flexbox-\u1100\u116E\u1112\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-2-\u1100\u1173\u1105\u1175\u1103\u1173-\u1109\u1166\u11AF-\u1102\u1162-\u1109\u1166\u1107\u116E-flexbox-\u1100\u116E\u1112\u1167\u11AB" aria-hidden="true">#</a> \uB2E8\uACC4 2: \uADF8\uB9AC\uB4DC \uC140 \uB0B4 \uC138\uBD80 Flexbox \uAD6C\uD604</h2><p>\uAC01 \uC568\uBC94 \uC548\uC5D0\uB294 \uC791\uD488, \uACE1 \uBAA9\uB85D, \uADF8\uB9AC\uACE0 \uC138\uBD80 \uC815\uBCF4\uB97C \uBA85\uD655\uD558\uACE0 \uB9E4\uB825\uC801\uC778 \uBC29\uC2DD\uC73C\uB85C \uAD6C\uC131\uD558\uAE30 \uC704\uD574 Flexbox \uB808\uC774\uC544\uC6C3\uC744 \uAD6C\uD604\uD560 \uAC83\uC785\uB2C8\uB2E4. \uB610\uD55C \uBBF8\uB514\uC5B4 \uCFFC\uB9AC\uB97C \uCD94\uAC00\uD558\uC5EC \uB2E4\uC591\uD55C \uD654\uBA74 \uD06C\uAE30\uC5D0 \uB9DE\uAC8C \uB808\uC774\uC544\uC6C3\uC744 \uC870\uC815\uD560 \uAC83\uC785\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),x=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;album&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;album-artwork.jpg&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;\uC568\uBC94 \uC544\uD2B8\uC6CC\uD06C&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;album-artwork&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;album-info&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>\uC568\uBC94 \uC81C\uBAA9<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\uBC1C\uB9E4\uC77C<span class="token operator">:</span> <span class="token number">2023</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\uC7A5\uB974<span class="token operator">:</span> \uD31D<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>ul <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;song-list&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;song&quot;</span><span class="token operator">&gt;</span>\uACE1 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;song&quot;</span><span class="token operator">&gt;</span>\uACE1 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uCD94\uAC00 \uACE1 <span class="token operator">--</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>album<span class="token operator">-</span>artwork <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>album<span class="token operator">-</span>info <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
  <span class="token literal-property property">gap</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>song<span class="token operator">-</span>list <span class="token punctuation">{</span>
  list<span class="token operator">-</span>style<span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
  <span class="token literal-property property">gap</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>song <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f0f0f0<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1103\u1161\u11AB\u1100\u1168-3-\u1106\u1175\u1103\u1175\u110B\u1165-\u110F\u116F\u1105\u1175\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u110C\u1169\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-3-\u1106\u1175\u1103\u1175\u110B\u1165-\u110F\u116F\u1105\u1175\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u110C\u1169\u110C\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 3: \uBBF8\uB514\uC5B4 \uCFFC\uB9AC\uB97C \uC0AC\uC6A9\uD55C \uBC18\uC751\uD615 \uC870\uC815</h2><p>\uBAA8\uB4E0 \uC7A5\uCE58\uC5D0\uC11C \uBA4B\uC9C0\uAC8C \uBCF4\uC774\uB3C4\uB85D \uD558\uAE30 \uC704\uD574 \uBBF8\uB514\uC5B4 \uCFFC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC01 \uC568\uBC94 \uB0B4\uC758 Flexbox \uB808\uC774\uC544\uC6C3\uC744 \uC870\uC815\uD558\uC5EC \uB354 \uC791\uC740 \uD654\uBA74\uC5D0\uC11C \uB178\uB798 \uBAA9\uB85D\uACFC \uC138\uBD80 \uC0AC\uD56D\uC5D0 \uB354 \uC27D\uAC8C \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uB3C4\uB85D \uC870\uC815\uD569\uB2C8\uB2E4.\`\`\`</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=o(`<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.album-info, .song-list</span> <span class="token punctuation">{</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.song</span> <span class="token punctuation">{</span>
    <span class="token property">flex-basis</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1100\u1173\u1105\u1175\u1103\u1173-grid-\u110B\u116A-\u1111\u1173\u11AF\u1105\u1166\u11A8\u1109\u1173\u1107\u1161\u11A8\u1109\u1173-flexbox-\u1105\u1173\u11AF-\u1100\u1167\u11AF\u1112\u1161\u11B8\u1112\u1161\u11AB-\u110C\u1161\u11BC\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1100\u1173\u1105\u1175\u1103\u1173-grid-\u110B\u116A-\u1111\u1173\u11AF\u1105\u1166\u11A8\u1109\u1173\u1107\u1161\u11A8\u1109\u1173-flexbox-\u1105\u1173\u11AF-\u1100\u1167\u11AF\u1112\u1161\u11B8\u1112\u1161\u11AB-\u110C\u1161\u11BC\u110C\u1165\u11B7" aria-hidden="true">#</a> \uADF8\uB9AC\uB4DC(Grid)\uC640 \uD50C\uB809\uC2A4\uBC15\uC2A4(Flexbox)\uB97C \uACB0\uD569\uD55C \uC7A5\uC810</h1><ul><li>\uD5A5\uC0C1\uB41C \uB808\uC774\uC544\uC6C3 \uC81C\uC5B4: \uADF8\uB9AC\uB4DC(Grid)\uC758 \uAD6C\uC870\uC640 \uD50C\uB809\uC2A4\uBC15\uC2A4(Flexbox)\uC758 \uB0B4\uC6A9 \uC815\uB82C\uC774 \uACB0\uD569\uB418\uC5B4 \uB808\uC774\uC544\uC6C3\uC744 \uB9E4\uC6B0 \uC815\uBC00\uD558\uAC8C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uBC18\uC751\uD615 \uB514\uC790\uC778: \uB2E4\uC591\uD55C \uD654\uBA74 \uD06C\uAE30\uC5D0 \uC801\uC751\uD558\uB294 \uB808\uC774\uC544\uC6C3\uC744 \uC190\uC27D\uAC8C \uC791\uC131\uD558\uC5EC \uC811\uADFC\uC131\uACFC \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uCF54\uB4DC \uAC04\uC18C\uD654: \uB450 \uB808\uC774\uC544\uC6C3 \uBAA8\uB378\uC758 \uCD5C\uC0C1\uC758 \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD558\uC5EC \uBCF5\uC7A1\uC131\uC744 \uC904\uC774\uACE0 \uC720\uC9C0\uBCF4\uC218\uC131\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><h1 id="\u1110\u1169\u11BC\u1112\u1161\u11B8\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1106\u1169\u1107\u1165\u11B7-\u1109\u1161\u1105\u1168" tabindex="-1"><a class="header-anchor" href="#\u1110\u1169\u11BC\u1112\u1161\u11B8\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1106\u1169\u1107\u1165\u11B7-\u1109\u1161\u1105\u1168" aria-hidden="true">#</a> \uD1B5\uD569\uC744 \uC704\uD55C \uBAA8\uBC94 \uC0AC\uB840\`\`\`</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=o("<ul><li>\uC804\uCCB4 \uD398\uC774\uC9C0 \uB808\uC774\uC544\uC6C3\uC5D0 CSS Grid\uB97C \uC0AC\uC6A9\uD558\uC138\uC694. \uC8FC\uC694 \uC139\uC158\uACFC \uC5F4\uB3C4 \uD3EC\uD568\uB429\uB2C8\uB2E4.</li><li>\uB3D9\uC801\uC774\uAC70\uB098 \uC54C \uC218 \uC5C6\uB294 \uD06C\uAE30\uB97C \uB2E4\uB8F0 \uB54C\uB294 Flexbox\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.</li><li>\uBAA8\uB4E0 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uC77C\uAD00\uB41C \uACBD\uD5D8\uC744 \uBCF4\uC7A5\uD558\uAE30 \uC704\uD574 \uBE0C\uB77C\uC6B0\uC800 \uC9C0\uC6D0 \uBC0F \uB300\uCCB4\uB97C \uACE0\uB824\uD558\uC138\uC694.</li></ul><p>CSS Grid\uC640 Flexbox\uC758 \uD611\uC5C5\uC740 \uC6F9 \uAC1C\uBC1C\uC790\uC5D0\uAC8C \uB2E4\uC591\uD55C \uAC00\uB2A5\uC131\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uC544\uB984\uB2F5\uACE0 \uAE30\uB2A5\uC801\uC778 \uBCF5\uC7A1\uD55C \uB514\uC790\uC778\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBBF8\uB514\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC608\uC2DC\uC5D0\uC11C \uD655\uC778\uD55C \uAC83\uCC98\uB7FC, \uC774 \uB450 \uAE30\uC220\uC744 \uACB0\uD569\uD558\uBA74 \uCC3D\uC758\uC131\uACFC \uC2E4\uC6A9\uC131\uC774 \uB9CC\uB098\uB294 \uD658\uACBD\uC744 \uC870\uC131\uD569\uB2C8\uB2E4. Grid\uC758 \uD3EC\uAD04\uC801\uC778 \uB808\uC774\uC544\uC6C3 \uAE30\uB2A5\uACFC Flexbox\uC758 \uC815\uB82C \uB3C4\uAD6C\uB97C \uC5B8\uC81C \uC5B4\uB5BB\uAC8C \uACB0\uD569\uD574\uC57C \uD558\uB294\uC9C0 \uC774\uD574\uD568\uC73C\uB85C\uC368, \uAC1C\uBC1C\uC790\uB294 \uC2DC\uAC01\uC801\uC73C\uB85C \uB9E4\uB825\uC801\uC774\uACE0 \uC751\uB2F5\uC131\uC774 \uB6F0\uC5B4\uB098\uBA70 \uC0AC\uC6A9\uC790 \uCE5C\uD654\uC801\uC778 \uC6F9 \uACBD\uD5D8\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Grid\uC640 Flexbox\uC758 \uAC1C\uBCC4 \uAC15\uC810\uC5D0 \uB300\uD55C \uB354 \uAE4A\uC740 \uD0D0\uAD6C\uB97C \uC704\uD574 &quot;CSS Flexbox\uB85C \uC720\uC5F0\uD55C \uB808\uC774\uC544\uC6C3 \uB9CC\uB4E4\uAE30: \uD3EC\uAD04\uC801\uC778 \uAC00\uC774\uB4DC&quot;\uC640 &quot;CSS Grid\uB85C \uC6F9 \uB808\uC774\uC544\uC6C3 \uAE30\uC220\uC758 \uC228\uC740 \uC694\uB839 \uC2B5\uB4DD&quot;\uC744 \uB2E4\uC2DC \uD55C\uBC88 \uCC38\uACE0\uD574\uBCF4\uC138\uC694.</p><p>\uB354 \uB9CE\uC740 \uC774\uC640 \uC720\uC0AC\uD55C \uAE30\uC0AC\uB97C \uBCF4\uB824\uBA74 Medium\uC5D0\uC11C \uC800\uB97C \uD314\uB85C\uC6B0\uD558\uAC70\uB098 \uC774\uBA54\uC77C\uB85C \uC0C8 \uC774\uC57C\uAE30\uB97C \uBC1B\uC544\uBCF4\uC138\uC694. \uB610\uB294 \uC81C \uBAA9\uB85D\uC744 \uC0B4\uD3B4\uBCF4\uB294 \uAC83\uB3C4 \uC88B\uC744 \uAC70\uC608\uC694. \uB610\uB294 \uC774\uC640 \uAD00\uB828\uB41C \uAE30\uC0AC\uB4E4\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694:</p><ul><li>\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C \uD575\uC2EC</li><li>Reflow\uC640 Repaint \uCD5C\uC18C\uD654: \uD6A8\uC728\uC801\uC778 CSS\uC640 JavaScript \uC548\uB0B4\uC11C</li><li>\uC6F9 \uC6CC\uCEE4\uB85C \uC6F9 \uC571 \uC131\uB2A5 \uADF9\uB300\uD654: \uB370\uC774\uD130 \uCC98\uB9AC \uC774\uC57C\uAE30</li><li>\uBC18\uC751\uD615 \uC774\uBBF8\uC9C0 \uB9C8\uC2A4\uD130\uD558\uAE30: srcset\uACFC sizes \uC548\uB0B4\uC11C</li></ul>",4);function f(_,w){return a(),r("div",null,[d,u,k,v,b,(a(),p(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(a(),p(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(a(),p(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(a(),p(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(a(),p(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y])}var B=l(c,[["render",f],["__file","index.html.vue"]]);export{B as default};