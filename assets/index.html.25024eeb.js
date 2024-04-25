import{_ as c}from"./app.3052dcfb.js";import{l as n,m as l,E as s,G as a,p as t,Y as p,K as o,C as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/DecodinguseMemoandmemoinReactUnderstandingTheirTrueDistinction_0.62b310d6.png";const u={},r=o('<p><img src="'+i+'" alt="Decoding useMemo and memo in React"></p><h1 id="\u1105\u1175\u110B\u1162\u11A8\u1110\u1173\u110B\u1174-usememo-\u1112\u116E\u11A8-vs-memo-\u1112\u1161\u110B\u1175\u110B\u1165\u110B\u1169\u1103\u1165-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u110E\u1169\u1107\u1169\u110C\u1161\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1107\u1175\u1100\u116D" tabindex="-1"><a class="header-anchor" href="#\u1105\u1175\u110B\u1162\u11A8\u1110\u1173\u110B\u1174-usememo-\u1112\u116E\u11A8-vs-memo-\u1112\u1161\u110B\u1175\u110B\u1165\u110B\u1169\u1103\u1165-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u110E\u1169\u1107\u1169\u110C\u1161\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1107\u1175\u1100\u116D" aria-hidden="true">#</a> \uB9AC\uC561\uD2B8\uC758 useMemo \uD6C5 vs memo \uD558\uC774\uC5B4\uC624\uB354 \uCEF4\uD3EC\uB10C\uD2B8: \uCD08\uBCF4\uC790\uB97C \uC704\uD55C \uBE44\uAD50</h1><p>\uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAC1C\uBC1C\uD558\uB294 \uB370 \uB110\uB9AC \uC0AC\uC6A9\uB418\uB294 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC778 \uB9AC\uC561\uD2B8\uB294 \uC751\uC6A9\uD504\uB85C\uADF8\uB7A8 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uAE30 \uC704\uD55C \uB2E4\uC591\uD55C \uB3C4\uAD6C\uC640 \uC804\uB7B5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774 \uC911\uC5D0\uC11C useMemo\uC640 memo\uB294 \uBD88\uD544\uC694\uD55C \uCEF4\uD3EC\uB10C\uD2B8 \uC7AC\uB80C\uB354\uB9C1\uC744 \uCD5C\uC18C\uD654\uD558\uB294 \uB370 \uC790\uC8FC \uC0AC\uC6A9\uB418\uB294 \uAE30\uC220\uB85C \uB450\uB4DC\uB7EC\uC9D1\uB2C8\uB2E4. \uC720\uC0AC\uD55C \uBAA9\uD45C\uB97C \uACF5\uC720\uD558\uACE0 \uC788\uC9C0\uB9CC, \uADF8\uB4E4\uC758 \uAD6C\uD604\uACFC \uC801\uD569\uD55C \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C \uD604\uC800\uD558\uAC8C \uCC28\uC774\uAC00 \uB0A9\uB2C8\uB2E4. \uC774 \uAE30\uC0AC\uC5D0\uC11C\uB294 \uB9AC\uC561\uD2B8 \uB0B4\uC758 useMemo\uC640 memo \uC0AC\uC774\uC758 \uBA85\uD655\uD55C \uCC28\uC774\uC810\uC744 \uD0D0\uC0C9\uD569\uB2C8\uB2E4.</p><h1 id="usememo-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173\u110B\u1174-\u1100\u1161\u11B9-\u110F\u1162\u1109\u1175\u11BC-\u1112\u116E\u11A8\u110B\u1173\u11AF-\u1112\u116A\u11AF\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#usememo-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173\u110B\u1174-\u1100\u1161\u11B9-\u110F\u1162\u1109\u1175\u11BC-\u1112\u116E\u11A8\u110B\u1173\u11AF-\u1112\u116A\u11AF\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> useMemo: \uB9AC\uC561\uD2B8\uC758 \uAC12 \uCE90\uC2F1 \uD6C5\uC744 \uD65C\uC6A9\uD558\uAE30</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),k=o(`<ul><li>useMemo\uC740 \uD568\uC218\uC758 \uACB0\uACFC\uB97C \uBA54\uBAA8\uC774\uC988\uD558\uB294 \uD6C5\uC785\uB2C8\uB2E4. \uD568\uC218\uC640 \uC758\uC874\uC131 \uBC30\uC5F4\uC744 \uC778\uC790\uB85C \uBC1B\uC544\uB4E4\uC774\uBA70, \uC758\uC874\uC131 \uC911 \uD558\uB098\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC744 \uB54C\uC5D0\uB9CC \uBA54\uBAA8\uC774\uC988\uB41C \uAC12\uC758 \uC7AC\uACC4\uC0B0\uC774 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.</li><li>\uC8FC\uB85C \uB80C\uB354\uB9C1\uD560 \uB54C\uB9C8\uB2E4 \uB2E4\uC2DC \uC2E4\uD589\uD560 \uD544\uC694\uAC00 \uC5C6\uB294 \uBE44\uC6A9\uC774 \uB9CE\uC774 \uB4DC\uB294 \uACC4\uC0B0\uC774\uB098 \uC5F0\uC0B0\uC744 \uCD5C\uC801\uD654\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">calculateFactorial</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//\uACC4\uC0B0 \uBE44\uC6A9\uC774 \uB192\uC740 \uD329\uD1A0\uB9AC\uC5BC \uACC4\uC0B0\uC744 \uBAA8\uBC29</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\uD329\uD1A0\uB9AC\uC5BC \uACC4\uC0B0 \uC911...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">*=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">FactorialComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> setNumber<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \uC22B\uC790\uB97C \uAE30\uBC18\uC73C\uB85C\uD55C \uD329\uD1A0\uB9AC\uC5BC \uACC4\uC0B0\uC744 \uBA54\uBAA8\uC774\uC988</span>
  <span class="token keyword">const</span> factorial <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">calculateFactorial</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleNumberChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNumber <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>newNumber<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> newNumber <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setNumber</span><span class="token punctuation">(</span>newNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>label<span class="token operator">&gt;</span>\uC22B\uC790\uB97C \uC785\uB825\uD558\uC138\uC694<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;number&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span>number<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleNumberChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>number<span class="token punctuation">}</span>\uC758 \uD329\uD1A0\uB9AC\uC5BC<span class="token operator">:</span> <span class="token punctuation">{</span>factorial<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> FactorialComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uC608\uC2DC\uC5D0\uC11C:</p><ul><li>\uC0AC\uC6A9\uC790\uAC00 \uC22B\uC790\uB97C \uC785\uB825\uD560 \uC218 \uC788\uB294 FactorialComponent\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</li><li>calculateFactorial\uC740 \uC8FC\uC5B4\uC9C4 \uC22B\uC790\uC5D0 \uB300\uD55C \uACC4\uC0B0 \uBE44\uC6A9\uC774 \uB9CE\uC740 \uD329\uD1A0\uB9AC\uC5BC \uACC4\uC0B0\uC744 \uBAA8\uBC29\uD569\uB2C8\uB2E4.</li><li>\uC6B0\uB9AC\uB294 useMemo\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC22B\uC790 \uC0C1\uD0DC\uB97C \uAE30\uBC18\uC73C\uB85C\uD55C \uD329\uD1A0\uB9AC\uC5BC \uACC4\uC0B0\uC744 \uBA54\uBAA8\uC774\uC988\uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uD329\uD1A0\uB9AC\uC5BC\uC774 \uC22B\uC790\uAC00 \uBCC0\uACBD\uB420 \uB54C\uC5D0\uB9CC \uC7AC\uACC4\uC0B0\uB418\uB3C4\uB85D \uD569\uB2C8\uB2E4.</li><li>\uC0AC\uC6A9\uC790\uAC00 \uC720\uD6A8\uD55C \uC22B\uC790\uB97C \uC785\uB825\uD558\uBA74 \uD574\uB2F9 \uC22B\uC790\uC758 \uD329\uD1A0\uB9AC\uC5BC\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=o(`<p>\uB9CC\uC57D \uC22B\uC790 state\uAC00 \uB80C\uB354\uB9C1 \uAC04\uC5D0 \uBCC0\uACBD\uB418\uC9C0 \uC54A\uB294\uB2E4\uBA74, useMemo\uB294 \uC774\uC804\uC5D0 \uCE90\uC2DC\uB41C \uD329\uD1A0\uB9AC\uC5BC \uAC12\uC744 \uB2E4\uC2DC \uACC4\uC0B0\uD558\uC9C0 \uC54A\uACE0 \uBC18\uD658\uD560 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uCD5C\uC801\uD654\uB97C \uD1B5\uD574 \uD329\uD1A0\uB9AC\uC5BC \uACC4\uC0B0\uC774 \uD544\uC694\uD560 \uB54C\uB9CC \uC218\uD589\uB418\uBA70, \uAC01 \uB80C\uB354\uB9C1 \uC0AC\uC774\uD074\uB9C8\uB2E4 \uBD88\uD544\uC694\uD55C \uACC4\uC0B0\uC744 \uD53C\uD568\uC73C\uB85C\uC368 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4.</p><h1 id="\u1106\u1166\u1106\u1169-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC-\u110E\u116C\u110C\u1165\u11A8\u1112\u116A" tabindex="-1"><a class="header-anchor" href="#\u1106\u1166\u1106\u1169-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC-\u110E\u116C\u110C\u1165\u11A8\u1112\u116A" aria-hidden="true">#</a> \uBA54\uBAA8: \uB9AC\uC561\uD2B8 \uCEF4\uD3EC\uB10C\uD2B8 \uB80C\uB354\uB9C1 \uCD5C\uC801\uD654</h1><ul><li>memo\uB294 \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uBA54\uBAA8\uC774\uC81C\uC774\uC158\uD558\uB294 \uACE0\uCC28\uC6D0 \uCEF4\uD3EC\uB10C\uD2B8(HOC)\uC785\uB2C8\uB2E4. \uC774\uC804 \uD504\uB86D\uC2A4\uC640 \uB2E4\uC74C \uD504\uB86D\uC2A4\uB97C \uBE44\uAD50\uD558\uACE0 \uD504\uB86D\uC2A4\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC744 \uB54C\uC5D0\uB9CC \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB2E4\uC2DC \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4.</li><li>\uD504\uB86D\uC2A4\uAC00 \uBCC0\uACBD\uB418\uC9C0 \uC54A\uC558\uC744 \uB54C \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBD88\uD544\uC694\uD55C \uB2E4\uC2DC \uB80C\uB354\uB9C1\uC744 \uBC29\uC9C0\uD558\uB294 \uB370 \uC720\uC6A9\uD569\uB2C8\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> memo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// memo\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBA54\uBAA8\uC774\uC988\uB41C \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8</span>
<span class="token keyword">const</span> MemoizedComponent <span class="token operator">=</span> <span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> count <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;MemoizedComponent \uB2E4\uC2DC \uB80C\uB354\uB9C1 \uC911...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">incrementCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>incrementCount<span class="token punctuation">}</span><span class="token operator">&gt;</span>\uCE74\uC6B4\uD2B8 \uC99D\uAC00<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>MemoizedComponent count<span class="token operator">=</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=o('<p>\uC774 \uC608\uC81C\uC5D0\uC11C:</p><ul><li>MemoizedComponent\uB294 memo HOC\uB85C \uB798\uD551\uB41C \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4.</li><li>\uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 count prop\uC744 \uBC1B\uC544 \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4.</li><li>App\uC740 count \uC0C1\uD0DC\uB97C \uC99D\uAC00\uC2DC\uD0AC \uBC84\uD2BC\uC744 \uD3EC\uD568\uD55C \uC8FC\uC694 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4.</li><li>MemoizedComponent\uB294 App \uB0B4\uC5D0\uC11C \uB80C\uB354\uB9C1\uB418\uACE0 \uD604\uC7AC count \uAC12\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.</li><li>count \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB418\uBA74 memo\uC5D0 \uC758\uD574 \uC81C\uACF5\uB418\uB294 \uBA54\uBAA8\uC774\uC81C\uC774\uC158 \uB355\uBD84\uC5D0 MemoizedComponent\uAC00 count prop\uC774 \uBCC0\uACBD\uB41C \uACBD\uC6B0\uC5D0\uB9CC \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4.</li></ul><p>memo HOC\uB294 \uC774\uACF3\uC5D0\uC11C MemoizedComponent\uC758 prop(count)\uC774 \uBCC0\uACBD\uB418\uC9C0 \uC54A\uC558\uC744 \uB54C\uC758 \uBD88\uD544\uC694\uD55C \uB2E4\uC2DC \uB80C\uB354\uB9C1\uC744 \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC774 \uCD5C\uC801\uD654\uB294 \uD2B9\uD788 prop\uC5D0 \uC758\uC874\uD558\uC9C0\uB9CC \uB9E4 \uB80C\uB354\uB9C1\uB9C8\uB2E4 \uC5C5\uB370\uC774\uD2B8\uAC00 \uD544\uC694\uD558\uC9C0 \uC54A\uC740 \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uC720\uC6A9\uD569\uB2C8\uB2E4.</p><h1 id="\u1100\u1167\u11AF\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1105\u1169\u11AB" aria-hidden="true">#</a> \uACB0\uB860</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),v=e("p",null,"\uC694\uC57D\uD558\uBA74, useMemo\uB294 \uD568\uC218\uC758 \uACB0\uACFC\uB97C \uBA54\uBAA8\uC774\uC81C\uC774\uC158\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uACE0, memo\uB294 \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB80C\uB354\uB9C1\uC744 \uBA54\uBAA8\uC774\uC81C\uC774\uC158\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB458 \uB2E4 \uBD88\uD544\uC694\uD55C \uACC4\uC0B0\uC774\uB098 \uB80C\uB354\uB9C1\uC744 \uC904\uC5EC \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uC9C0\uB9CC, React \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB0B4\uC5D0\uC11C \uC11C\uB85C \uB2E4\uB978 \uB9E5\uB77D\uC5D0\uC11C \uC801\uC6A9\uB429\uB2C8\uB2E4.",-1),b=e("p",null,"\uC77D\uC5B4 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4!",-1);function g(f,h){return n(),l("div",null,[r,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,b])}var N=c(u,[["render",g],["__file","index.html.vue"]]);export{N as default};