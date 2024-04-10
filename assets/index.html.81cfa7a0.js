import{_ as c}from"./app.63e06a35.js";import{l as n,m as l,E as a,G as t,p as s,Y as p,C as o,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var u="/assets/HowtoDebounceThrottleaCallbackwithReactHooks_0.53050a59.png";const i={},r=o("img",{src:u},null,-1),d=o("p",null,"\uC774\uC804 \uAE00\uC5D0\uC11C \uC6B0\uB9AC\uB294 \uD14D\uC2A4\uD2B8 \uC785\uB825\uC744 \uC704\uD55C \uD604\uC7AC \uAC12\uACFC \uB514\uBC14\uC6B4\uC2A4 \uAC12 \uB458 \uB2E4 \uC81C\uACF5\uD558\uB294 \uD6C4\uD06C\uB97C \uB9CC\uB4DC\uB294 \uBC29\uBC95\uC744 \uC0B4\uD3B4\uBCF4\uC558\uC5B4\uC694. \uC774\uBC88\uC5D0\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uBC1B\uB294 \uC785\uB825 \uCF5C\uBC31\uC744 \uB514\uBC14\uC6B4\uC2A4\uD558\uAC70\uB098 \uC2A4\uB85C\uD2C0\uD560 \uAC70\uC5D0\uC694.",-1),k=o("p",null,"\uAC04\uB2E8\uD55C \uAC80\uC0C9 \uC785\uB825\uC744 \uAD00\uB9AC\uD558\uACE0 \uCF5C\uBC31\uC744 \uBC1B\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB9CC\uB4E4\uC5B4 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),v=o("h1",{id:"input-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#input-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175","aria-hidden":"true"},"#"),s(" Input \uCEF4\uD3EC\uB10C\uD2B8 \uB9CC\uB4E4\uAE30")],-1),b=o("p",null,[o("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),m=e(`<p>\uB9AC\uC561\uD2B8\uC5D0\uC11C \uC785\uB825\uC744 \uCC98\uB9AC\uD558\uB294 \uD45C\uC900 \uBC29\uC2DD\uC740 \uC785\uB825 \uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uD574\uB2F9 state \uBCC0\uC218\uB3C4 \uBCC0\uACBD\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.</p><p>\uC6B0\uB9AC\uC758 \uACBD\uC6B0 \uC774 \uC0C1\uD0DC \uBCC0\uC218\uB294 value\uB77C\uACE0 \uBD80\uB974\uACA0\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC6B0\uB9AC\uB294 \uC0C1\uD0DC \uBCC0\uC218\uB97C \uAC80\uC0C9 \uC785\uB825\uB780\uACFC \uC5F0\uACB0\uD558\uAE30 \uC704\uD574 \uD574\uB2F9 \uAC12\uACFC onChange \uC18D\uC131\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">DebouncedInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newValue <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;search&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> DebouncedInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u110F\u1169\u11AF\u1107\u1162\u11A8" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u11AF\u1107\u1162\u11A8" aria-hidden="true">#</a> \uCF5C\uBC31</h1><p>\uC774\uC81C \uB3C4\uC804 \uACFC\uC81C\uB85C \uB3CC\uC544\uAC00\uC11C \uCEF4\uD3EC\uB10C\uD2B8 \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uCF5C\uBC31\uC744 \uCD94\uAC00\uD574 \uBD05\uC2DC\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">DebouncedInput</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onInput <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=e(`<p>\uCC98\uC74C\uC5D0 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC785\uB825\uD560 \uB54C \uC81C\uACF5\uB41C \uCF5C\uBC31\uC744 \uD638\uCD9C\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC73C\uB85C\uB294 onChange \uD578\uB4E4\uB7EC \uB0B4\uC5D0\uC11C \uD638\uCD9C\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">DebouncedInput</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onInput <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newValue <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onInput</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;search&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> DebouncedInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC0AC\uC6A9\uC790\uAC00 \uBB34\uC5B8\uAC00\uB97C \uC785\uB825\uD560 \uB54C\uB9C8\uB2E4 onInput \uCF5C\uBC31\uC774 \uC0C8 \uAC12\uACFC \uD568\uAED8 \uD638\uCD9C\uB429\uB2C8\uB2E4. \uC774\uAC8C \uC88B\uC740\uB370, \uB54C\uB85C\uB294 \uB124\uD2B8\uC6CC\uD06C \uD638\uCD9C\uC744 \uD558\uACE0 \uC0AC\uC6A9\uC790\uAC00 \uC0C8 \uD0A4\uB97C \uB204\uB97C \uB54C\uB9C8\uB2E4 API\uB97C \uD638\uCD9C\uD558\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C \uD0C0\uC774\uD551\uC744 \uBA48\uCD94\uC5C8\uC744 \uB54C \uD638\uCD9C\uD558\uACE0 \uC2F6\uC744 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><h1 id="\u1103\u1175\u1107\u1161\u110B\u116E\u11AB\u1109\u1173\u1103\u116C\u11AB-\u110F\u1169\u11AF\u1107\u1162\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1103\u1175\u1107\u1161\u110B\u116E\u11AB\u1109\u1173\u1103\u116C\u11AB-\u110F\u1169\u11AF\u1107\u1162\u11A8" aria-hidden="true">#</a> \uB514\uBC14\uC6B4\uC2A4\uB41C \uCF5C\uBC31</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=e(`<p>\uC774\uBBF8 \uB3C4\uC804\uC5D0 \uB300\uCC98\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uB294 \uC720\uD2F8\uB9AC\uD2F0 \uD568\uC218\uAC00 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0 \uC788\uC74C\uC744 \uC544\uC2DC\uACA0\uC9C0\uB9CC, \uADF8\uB7F0 \uD568\uC218\uB97C \uB2E4\uC2DC \uC791\uC131\uD560 \uD544\uC694\uB294 \uC5C6\uC2B5\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 React \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uD1B5\uD569\uD558\uAE30\uB9CC \uD558\uBA74 \uB429\uB2C8\uB2E4.</p><p>debounce \uD568\uC218\uB294 \uD568\uC218\uC640 \uC8FC\uC5B4\uC9C4 \uBC00\uB9AC\uCD08 \uB2E8\uC704\uC758 \uC2DC\uAC04\uC744 \uAC00\uC838\uC640 \uC0C8\uB85C\uC6B4 \uD568\uC218\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4. \uBC18\uD658\uB41C \uD568\uC218\uB97C \uC5EC\uB7EC \uBC88 \uD638\uCD9C\uD558\uBA74 \uC8FC\uC5B4\uC9C4 \uBC00\uB9AC\uCD08 \uB2E8\uC704\uC758 \uC2DC\uAC04\uC774 \uC9C0\uB09C \uD6C4\uC5D0 \uC6D0\uB798 \uD568\uC218\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4.</p><p>\uB530\uB77C\uC11C \uC6B0\uB9AC\uAC00 \uD560 \uC77C\uC740 \uCF5C\uBC31\uC758 debounced \uBC84\uC804\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC785\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> onInputDebounced <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>onInput<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=e(`<p>\uD558\uC9C0\uB9CC React \uD568\uC218 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC791\uB3D9\uD558\uB294 \uBC29\uC2DD \uB54C\uBB38\uC5D0 \uC774 \uBC29\uBC95\uC740 \uC791\uB3D9\uD558\uC9C0 \uC54A\uC744 \uAC83\uC785\uB2C8\uB2E4. \uAC12 \uC0C1\uD0DC \uBCC0\uC218\uAC00 \uBCC0\uACBD\uB420 \uB54C\uB9C8\uB2E4 \uD568\uC218 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB418\uACE0 \uC0C8\uB85C\uC6B4 \uB514\uBC14\uC6B4\uC2A4\uB41C \uCF5C\uBC31\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4.</p><p>\uC785\uB825 \uCF5C\uBC31\uC774 \uBCC0\uACBD\uB420 \uB54C\uB9CC \uBCC0\uACBD\uB418\uB294 \uB514\uBC14\uC6B4\uC2A4\uB41C \uCF5C\uBC31\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uC774\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 useCallback \uD6C5\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>useCallback \uD6C5\uC740 \uCF5C\uBC31\uACFC \uC758\uC874\uC131 \uBAA9\uB85D\uC744 \uAC00\uC838\uC640\uC11C \uAE30\uC5B5\uB41C \uCF5C\uBC31\uC744 \uBC18\uD658\uD569\uB2C8\uB2E4. \uC758\uC874\uC131\uC774 \uBCC0\uACBD\uB420 \uB54C\uB9CC \uBC18\uD658 \uCF5C\uBC31\uC774 \uBCC0\uACBD\uB429\uB2C8\uB2E4. \uAC01 \uCEF4\uD3EC\uB10C\uD2B8 \uC7AC\uB80C\uB354\uB9C1 \uC2DC useCallback\uC774 \uD638\uCD9C\uB418\uB354\uB77C\uB3C4 \uD574\uB2F9 \uCF00\uC774\uC2A4\uC5D0\uC11C\uB294 \uB3D9\uC77C\uD55C \uB514\uBC14\uC6B4\uC2A4 \uD568\uC218\uAC00 \uBC18\uD658\uB429\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> onInputDebounced <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
      <span class="token function">debounce</span><span class="token punctuation">(</span>onInput<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>onInput<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),w=e(`<p>\uD574\uC57C \uD560 \uC77C\uC740 \uC774\uAC83\uC774 \uC804\uBD80\uC5D0\uC694. \uC774\uC81C onChange \uD578\uB4E4\uB7EC\uC5D0\uC11C, \uCEF4\uD3EC\uB10C\uD2B8 \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uC81C\uACF5\uB41C \uD578\uB4E4\uB7EC \uB300\uC2E0 \uB514\uBC14\uC6B4\uC2A4\uB41C \uCF5C\uBC31\uC744 \uD638\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> debounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;lodash&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">DebouncedInput</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onInput <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> onInputDebounced <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
      <span class="token function">debounce</span><span class="token punctuation">(</span>onInput<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token punctuation">[</span>onInput<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newValue <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onInputDebounced</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;search&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> DebouncedInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1103\u1175\u1107\u1161\u110B\u116E\u11AB\u1109\u1173\u1103\u116C\u11AB-\u110F\u1169\u11AF\u1107\u1162\u11A8-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1175\u1107\u1161\u110B\u116E\u11AB\u1109\u1173\u1103\u116C\u11AB-\u110F\u1169\u11AF\u1107\u1162\u11A8-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB514\uBC14\uC6B4\uC2A4\uB41C \uCF5C\uBC31 \uC0AC\uC6A9\uD558\uAE30</h1><p>\uC544\uB798\uB294 \uC774\uC804 DebouncedInput \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uC608\uC2DC\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uC785\uB825\uC744 \uBA48\uCD9C \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB9B0 \uD6C4 \uAC80\uC0C9 \uCF5C\uBC31\uC774 \uD638\uCD9C\uB428\uC744 \uC8FC\uBAA9\uD574\uC8FC\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> DebouncedInput <span class="token keyword">from</span> <span class="token string">&quot;./DebouncedInput&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">search</span><span class="token operator">:</span> text <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>DebouncedInput onInput<span class="token operator">=</span><span class="token punctuation">{</span>search<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u110A\u1173\u1105\u1169\u1110\u1173\u11AF\u1105\u1175\u11BC\u1103\u116C\u11AB-\u110F\u1169\u11AF\u1107\u1162\u11A8" tabindex="-1"><a class="header-anchor" href="#\u110A\u1173\u1105\u1169\u1110\u1173\u11AF\u1105\u1175\u11BC\u1103\u116C\u11AB-\u110F\u1169\u11AF\u1107\u1162\u11A8" aria-hidden="true">#</a> \uC4F0\uB85C\uD2C0\uB9C1\uB41C \uCF5C\uBC31</h1><p>\uBE44\uC2B7\uD558\uAC8C, throttle \uC720\uD2F8\uB9AC\uD2F0 \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC8FC\uC5B4\uC9C4 \uCF5C\uBC31\uC744 \uC4F0\uB85C\uD2C0\uB9C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>throttle\uC740 \uD568\uC218\uC640 \uBC00\uB9AC\uCD08 \uB2E8\uC704\uC758 \uC2DC\uAC04\uC744 \uC778\uC790\uB85C \uC0AC\uC6A9\uD558\uBA70, \uC0C8\uB85C\uC6B4 \uD568\uC218\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4. \uBC18\uD658\uB41C \uD568\uC218\uB294 \uC5EC\uB7EC \uBC88 \uD638\uCD9C\uB418\uC5B4\uB3C4 \uC9C0\uC815\uB41C \uBC00\uB9AC\uCD08 \uB2E8\uC704\uB85C \uC6D0\uBCF8 \uD568\uC218\uB97C \uCD5C\uB300 \uD55C \uBC88\uB9CC \uD638\uCD9C\uD569\uB2C8\uB2E4.\`\`\`</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),I=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> throttle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;lodash&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">ThrottledInput</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onInput <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> onInputThrottled <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
      <span class="token function">throttle</span><span class="token punctuation">(</span>onInput<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token punctuation">[</span>onInput<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newValue <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onInputThrottled</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;search&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> ThrottledInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uADF8\uAC83\uC73C\uB85C \uB05D\uC785\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0 \uC804\uCCB4 \uCF54\uB4DC\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC77D\uC5B4 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4!</p>`,3);function q(x,C){return n(),l("div",null,[r,d,k,v,b,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),I])}var A=c(i,[["render",q],["__file","index.html.vue"]]);export{A as default};
