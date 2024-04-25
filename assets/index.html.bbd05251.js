import{_ as p}from"./app.3052dcfb.js";import{l as n,m as i,E as e,G as t,p as s,Y as o,C as a,K as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var d="/assets/HowtoPositionHTMLElementsSidebySidewithCSS_0.76b26012.png";const r={},c=a("img",{src:d},null,-1),u=a("p",null,"HTML \uC694\uC18C \uC815\uB82C\uC740 CSS\uC5D0\uC11C \uAC1C\uBC1C\uC790\uB4E4\uC774 \uB2E4\uB8E8\uB294 \uAC00\uC7A5 \uC77C\uBC18\uC801\uC778 \uBB38\uC81C \uC911 \uD558\uB098\uC785\uB2C8\uB2E4. CSS\uB294 \uC694\uC18C\uB97C \uBC30\uCE58\uD558\uB294 \uB370 \uC81C\uACF5\uD558\uB294 \uC5EC\uB7EC \uBC29\uBC95\uC774 \uC788\uC73C\uBA70, \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB530\uB77C \uC0AC\uC6A9\uD560 \uBC29\uBC95\uC744 \uC2A4\uC2A4\uB85C \uACB0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.",-1),b=a("p",null,"\uC774 \uAC8C\uC2DC\uBB3C\uC5D0\uC11C\uB294 CSS\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC694\uC18C\uB97C \uC606\uC73C\uB85C \uBC30\uCE58\uD558\uB294 \uB124 \uAC00\uC9C0 \uB2E4\uC591\uD55C \uBC29\uBC95\uC744 \uD0D0\uC0C9\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),v=a("h1",{id:"_1-display-inline-block",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-display-inline-block","aria-hidden":"true"},"#"),s(" 1. Display: Inline-Block")],-1),g=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),k=l('<p>\uCCAB \uBC88\uC9F8 \uBC29\uBC95\uC740 display: inline-block \uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uBC29\uBC95\uC740 \uC694\uC18C\uB97C \uB098\uB780\uD788 \uBC30\uCE58\uD558\uAE30 \uC704\uD55C \uAC04\uB2E8\uD558\uACE0 \uC804\uD1B5\uC801\uC778 CSS \uAE30\uBC95\uC785\uB2C8\uB2E4.</p><h2 id="inline-\u1104\u1169\u1102\u1173\u11AB-block" tabindex="-1"><a class="header-anchor" href="#inline-\u1104\u1169\u1102\u1173\u11AB-block" aria-hidden="true">#</a> Inline \uB610\uB294 Block?</h2><p>\uC774 \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD558\uAE30 \uC804\uC5D0 \uC774 \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD560 \uC694\uC18C\uAC00 \uBE14\uB85D \uC218\uC900 \uC694\uC18C(\uC608: <code>div</code>, <code>p</code>)\uC778\uC9C0 \uC778\uB77C\uC778 \uC694\uC18C(<code>span</code>, <code>a</code>)\uC778\uC9C0 \uD655\uC778\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4.</p><p>\uBA3C\uC800, \uC778\uB77C\uC778 HTML \uC694\uC18C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uACE0 \uC774 \uC694\uC18C\uB4E4\uC740 \uC790\uB3D9\uC73C\uB85C \uB098\uB780\uD788 \uBC30\uCE58\uB429\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC778\uB77C\uC778 \uC694\uC18C\uC758 \uC81C\uD55C\uC740 \uB108\uBE44 &amp; \uB192\uC774 \uC18D\uC131\uC774 \uC801\uC6A9\uB418\uC9C0 \uC54A\uB294\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uBC18\uBA74\uC5D0, \uBE14\uB85D \uC218\uC900 \uC694\uC18C\uC5D0\uB294 \uB108\uBE44\uC640 \uB192\uC774 \uC18D\uC131\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uC9C0\uB9CC \uBE14\uB85D \uC694\uC18C\uB294 \uB098\uB780\uD788 \uBC30\uCE58\uD560 \uC218 \uC5C6\uB294 \uBB38\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uAC83\uC774 display \uC18D\uC131\uC744 inline-block\uC73C\uB85C \uBCC0\uACBD\uD558\uC5EC \uC694\uC18C\uC758 \uD45C\uC2DC \uB3D9\uC791\uC744 \uBCC0\uACBD\uD558\uB294 \uC138 \uBC88\uC9F8 \uBC29\uBC95\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uB294 \uC774\uC720\uC785\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),m=l(`<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div, span</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>inline-block</code> \uC18D\uC131\uC740 \uC694\uC18C\uB97C \uC606\uC73C\uB85C \uB193\uC2B5\uB2C8\uB2E4 (\uC778\uB77C\uC778 \uC694\uC18C\uCC98\uB7FC). \uBE14\uB85D \uB808\uBCA8 \uC694\uC18C\uC640 \uAC19\uC774 \uB108\uBE44 \uBC0F \uB192\uC774 \uC18D\uC131\uC744 \uD560\uB2F9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="_2-float-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-float-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2. <code>float</code> \uC0AC\uC6A9\uD558\uAE30</h2><p>\uC694\uC18C\uB97C \uC606\uC73C\uB85C \uC815\uB82C\uD558\uB294 \uB610 \uB2E4\uB978 \uBC29\uBC95\uC740 <code>float</code>\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uAC83\uC740 \uC624\uB798\uB41C \uAE30\uC220\uC774\uBA70 <code>float</code>\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC5EC\uC804\uD788 \uC720\uC6A9\uD55C\uC9C0\uC5D0 \uB300\uD55C \uB9CE\uC740 \uD1A0\uB860\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=l('<h2 id="\u1111\u1173\u11AF\u1105\u1169\u11BA\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u11AF\u1101\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u1111\u1173\u11AF\u1105\u1169\u11BA\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u11AF\u1101\u1161\u110B\u116D" aria-hidden="true">#</a> \uD50C\uB86F\uC744 \uC0AC\uC6A9\uD574\uC57C \uD560\uAE4C\uC694?</h2><p>\uC194\uC9C1\uD788 \uB9D0\uD574\uC11C, \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4. \uC694\uC18C\uB97C \uC606\uC73C\uB85C \uBC30\uCE58\uD558\uAE30\uB9CC \uD558\uB824\uBA74 \uD50C\uB86F\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 Flexbox, Grid \uB610\uB294 Bootstrap\uACFC \uAC19\uC740 \uD504\uB808\uC784\uC6CC\uD06C\uC640 \uAC19\uC740 \uD604\uB300 \uAE30\uC220\uC744 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD50C\uB86F\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC9C0 \uC54A\uC744 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1109\u1161\u110B\u116D\u11BC-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uC0AC\uC6A9 \uBC29\uBC95</h2><p>\uD50C\uB86F\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD398\uC774\uC9C0\uC758 \uC67C\uCABD\uC774\uB098 \uC624\uB978\uCABD\uC5D0 \uC694\uC18C\uB97C \uBC30\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC911\uC559 \uC815\uB82C\uC740 \uD50C\uB86F\uB9CC\uC73C\uB85C \uC9C1\uC811 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC65C\uB0D0\uD558\uBA74 \uD50C\uB86F\uC5D0 \uB300\uD55C &quot;\uAC00\uC6B4\uB370&quot; \uAC12\uC774 \uC5C6\uAE30 \uB54C\uBB38\uC774\uC9C0\uB9CC, \uC774\uB294 \uB2E4\uB978 CSS \uC18D\uC131\uC73C\uB85C \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),y=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>div <span class="token punctuation">{</span>
  <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uADF8\uB9AC\uACE0 float \uC18D\uC131\uC740 \uC694\uC18C\uB97C \uC77C\uBC18 \uBB38\uC11C \uD750\uB984\uC5D0\uC11C \uC81C\uAC70\uD569\uB2C8\uB2E4. \uC774\uB294 \uD398\uC774\uC9C0\uB97C \uC5C9\uB9DD\uC73C\uB85C \uB9CC\uB4E4\uACE0 \uB098\uBA38\uC9C0 \uC694\uC18C\uB97C \uB465\uB465 \uB5A0 \uC788\uB294 \uC694\uC18C \uC544\uB798\uB85C \uC774\uB3D9\uC2DC\uCF1C \uC77C\uBD80\uAC00 \uBCF4\uC774\uC9C0 \uC54A\uAC70\uB098 \uC804\uD600 \uBCF4\uC774\uC9C0 \uC54A\uAC8C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC774\uB97C \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 float \uB41C \uC694\uC18C \uB2E4\uC74C\uC5D0 clear \uC18D\uC131\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>div <span class="token punctuation">{</span>
  <span class="token literal-property property">clear</span><span class="token operator">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=a("p",null,"\uC774 \uAC8C\uC2DC\uBB3C\uC758 \uACE0\uAE09 \uAE30\uC220\uC744 \uBCF4\uB2E4 \uC0C1\uC138\uD788 \uC0B4\uD3B4\uBCF4\uB824\uBA74 \uC544\uB798\uC758 \uD29C\uD1A0\uB9AC\uC5BC \uBE44\uB514\uC624\uB97C \uC2DC\uCCAD\uD574 \uBCF4\uC138\uC694:",-1),f=a("h1",{id:"\u1100\u1169\u1100\u1173\u11B8-\u1100\u1175\u1109\u116E\u11AF-flexbox-\u1104\u1169\u1102\u1173\u11AB-grid",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1100\u1169\u1100\u1173\u11B8-\u1100\u1175\u1109\u116E\u11AF-flexbox-\u1104\u1169\u1102\u1173\u11AB-grid","aria-hidden":"true"},"#"),s(" \uACE0\uAE09 \uAE30\uC220: Flexbox \uB610\uB294 Grid")],-1),x=a("p",null,"\uC9C0\uAE08\uAE4C\uC9C0 \uC6B0\uB9AC\uB294 \uC774 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD55C \uC804\uD1B5\uC801\uC778 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC774\uC57C\uAE30\uD588\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uB354 \uACE0\uAE09 \uAE30\uC220\uB85C \uB118\uC5B4\uAC00 \uBD05\uC2DC\uB2E4.",-1),w=a("p",null,"CSS\uB294 \uC815\uB82C \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD55C \uB450 \uAC00\uC9C0 \uB354 \uCD5C\uADFC \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uADF8\uAC83\uC774 \uBC14\uB85C \u2018flexbox\u2019\uC640 \u2018grid\u2019\uC785\uB2C8\uB2E4. Flexbox \uB610\uB294 Grid\uB97C \uC0AC\uC6A9\uD558\uB294 \uC7A5\uC810\uC740 \uB354 \uB113\uACE0, \uB354 \uC720\uC5F0\uD558\uBA70, \uC815\uB82C \uBB38\uC81C\uC5D0 \uB300\uD574 \uC27D\uAC8C \uD574\uACB0\uCC45\uC744 \uC81C\uACF5\uD55C\uB2E4\uB294 \uC810\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC774\uB7EC\uD55C \uAE30\uC220\uB4E4\uC740 \uC815\uB82C\uC744 \uC704\uD55C \uB2E4\uC591\uD55C \uAE30\uB2A5\uC774 \uB9CE\uAE30 \uB54C\uBB38\uC5D0 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C Flexbox \uB610\uB294 Grid\uB97C \uC0AC\uC6A9\uD558\uAE30 \uC804\uC5D0 \uC774\uB4E4\uC5D0 \uB300\uD55C \uC774\uD574\uAC00 \uC880 \uD544\uC694\uD569\uB2C8\uB2E4. \uD639\uC740 \uC0AC\uC6A9\uD558\uB824\uB294 \uAE30\uC220\uC5D0 \uC801\uD569\uD55C \uACBD\uC6B0 \uD504\uB85C\uC81D\uD2B8\uB97C \uC9C4\uD589\uD574\uC57C \uD569\uB2C8\uB2E4.",-1),j=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),S=l(`<h1 id="_3-flexbox" tabindex="-1"><a class="header-anchor" href="#_3-flexbox" aria-hidden="true">#</a> 3. Flexbox</h1><p>\uD50C\uB809\uC2A4\uBC15\uC2A4\uB97C \uC0AC\uC6A9\uD558\uAE30\uB85C \uACB0\uC815\uD588\uB2E4\uBA74, \uBA3C\uC800 \uC694\uC18C\uB4E4\uC740 \uBD80\uBAA8 \uC694\uC18C\uB85C \uB458\uB7EC\uC2F8\uC5EC \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uADF8\uB7F0 \uB2E4\uC74C, \uBD80\uBAA8 \uC694\uC18C(\uCEE8\uD14C\uC774\uB108)\uC5D0 display: flex \uC18D\uC131\uC744 \uD560\uB2F9\uD558\uBA74 \uC790\uC2DD \uC694\uC18C\uB4E4\uC744 \uC790\uB3D9\uC73C\uB85C \uC606\uC73C\uB85C \uB098\uB780\uD788 \uBC30\uCE58\uD560 \uAC83\uC785\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),C=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB610\uD55C, \uC790\uC2DD \uC694\uC18C\uC5D0 flex \uC18D\uC131\uC744 \uCD94\uAC00\uD558\uACE0 \uC22B\uC790\uB97C \uC9C0\uC815\uD558\uBA74 (\uC608: \uC22B\uC790 1) \uACF5\uAC04\uC774 \uBAA8\uB450 \uB3D9\uB4F1\uD558\uAC8C \uB098\uB269\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>p <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Flexbox\uB97C \uC0AC\uC6A9\uD558\uBA74 CSS\uB85C \uC694\uC18C\uB97C \uC27D\uAC8C \uBC30\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uC774\uD574\uD558\uBA74 \uB9E4\uC6B0 \uD3B8\uB9AC\uD569\uB2C8\uB2E4.\`\`\`</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),M=l(`<h1 id="_4-\u1100\u1173\u1105\u1175\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#_4-\u1100\u1173\u1105\u1175\u1103\u1173" aria-hidden="true">#</a> 4. \uADF8\uB9AC\uB4DC</h1><p>CSS \uADF8\uB9AC\uB4DC\uB294 \uC694\uC18C\uB4E4\uC744 \uC606\uC73C\uB85C \uC815\uB82C\uD558\uB294 \uB610 \uB2E4\uB978 \uB300\uC548\uC801\uC778 \uBC29\uBC95\uC785\uB2C8\uB2E4. Flexbox\uC640 \uC720\uC0AC\uD558\uC9C0\uB9CC \uB2E4\uB978 \uADDC\uCE59\uACFC \uAD6C\uD604\uC744 \uAC16\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC6B0\uC120, flexbox \uBC29\uBC95\uC5D0\uC11C \uD588\uB358 \uAC83\uCC98\uB7FC \uC694\uC18C\uB4E4\uC740 \uBD80\uBAA8 \uCEE8\uD14C\uC774\uB108 \uB0B4\uBD80\uC5D0 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),B=l(`<p>\uADF8 \uD6C4\uC5D0, \uBD80\uBAA8 \uC694\uC18C\uC778 \uCEE8\uD14C\uC774\uB108\uC758 display \uC18D\uC131\uC744 grid\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB2E4\uC74C\uC73C\uB85C, \uB808\uC774\uC544\uC6C3\uC744 \uC5B4\uB5BB\uAC8C \uD560 \uAC83\uC778\uC9C0 \uACB0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. \uB808\uC774\uC544\uC6C3\uC5D0 \uBA87 \uAC1C\uC758 \uC5F4\uACFC \uD589\uC774 \uC788\uC744\uC9C0 \uACB0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC138 \uAC1C\uC758 \uC694\uC18C\uB97C \uAC01\uAC01 \uD55C \uC5F4\uC5D0 \uBC30\uCE58\uD558\uC5EC \uB098\uB780\uD788 \uB193\uACE0 \uC2F6\uB2E4\uACE0 \uAC00\uC815\uD574\uBD05\uC2DC\uB2E4. \uC694\uC18C\uB97C \uB098\uB780\uD788 \uBC30\uCE58\uD558\uAE30 \uC704\uD574 grid-template-columns \uC18D\uC131\uC744 \uC815\uC758\uD558\uACE0, \uAC01 \uC5F4\uC5D0 1fr \uAC12\uC744 \uC8FC\uC5B4 \uBE48 \uD544\uB4DC\uB97C \uB3D9\uC77C\uD558\uAC8C \uB098\uB215\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
  grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> 1fr 1fr 1fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),F=a("p",null,"\uC9C0\uAE08\uAE4C\uC9C0 \uAE00\uC774 \uB9C8\uC74C\uC5D0 \uB4DC\uC168\uB098\uC694? Medium\uC740 \uC218\uB9CE\uC740 \uD6CC\uB96D\uD55C \uAE30\uC0AC\uB97C \uAD11\uACE0 \uC5C6\uC774 \uC81C\uACF5\uD558\uB294 \uD6CC\uB96D\uD55C \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4. \uAD11\uACE0\uAC00 \uC5C6\uB294 Medium\uC740 \uC774 \uD50C\uB7AB\uD3FC\uC744 \uC0AC\uB791\uD558\uB294 \uB3C5\uC790\uB4E4\uC774 \uD68C\uC6D0\uC774 \uB418\uC5B4 \uC9C0\uC6D0\uD560 \uC218 \uC788\uB3C4\uB85D \uD574\uC90D\uB2C8\uB2E4.",-1),q=a("p",null,"\uC704\uC5D0\uC11C \uC5B8\uAE09\uD55C \uB9C1\uD06C\uB97C \uD1B5\uD574 Medium \uD68C\uC6D0\uC774 \uB418\uC2DC\uBA74 Medium\uC758 \uBAA8\uB4E0 \uC774\uC57C\uAE30\uC5D0 \uBB34\uC81C\uD55C \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8 \uB9C1\uD06C\uB97C \uC774\uC6A9\uD558\uBA74 \uD568\uAED8 \uC791\uAC00\uB85C\uC11C \uC800\uB97C \uC9C0\uC6D0\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. Medium\uC5D0\uC11C \uC791\uC740 \uCEE4\uBBF8\uC158\uC744 \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC10\uC0AC\uD569\uB2C8\uB2E4 \u{1F603}",-1);function G(H,T){return n(),i("div",null,[c,u,b,v,g,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,f,x,w,j,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),C,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),M,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),F,q])}var K=p(r,[["render",G],["__file","index.html.vue"]]);export{K as default};