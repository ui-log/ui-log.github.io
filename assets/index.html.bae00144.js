import{_ as o}from"./app.3052dcfb.js";import{l as n,m as c,E as s,G as a,p as t,Y as p,K as e,C as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/10JavaScriptTricksYouDidntKnow_0.5afa3620.png";const u={},r=e('<img src="'+i+`"><h1 id="_1-\u1107\u1167\u11AF\u110E\u1175\u11BC\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1100\u116E\u110C\u1169-\u1107\u116E\u11AB\u1112\u1162" tabindex="-1"><a class="header-anchor" href="#_1-\u1107\u1167\u11AF\u110E\u1175\u11BC\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1100\u116E\u110C\u1169-\u1107\u116E\u11AB\u1112\u1162" aria-hidden="true">#</a> 1. \uBCC4\uCE6D\uC744 \uC0AC\uC6A9\uD55C \uAD6C\uC870 \uBD84\uD574</h1><p>\uAD6C\uC870\uBD84\uD574 \uD560\uB2F9\uC740 \uAC15\uB825\uD55C \uAE30\uB2A5\uC774\uC5D0\uC694. \uD560\uB2F9 \uC911\uC5D0 \uBCC0\uC218\uC758 \uBCC4\uCE6D\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uB2E4\uB294 \uAC74 \uC54C\uACE0 \uACC4\uC168\uB098\uC694?</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">prop1</span><span class="token operator">:</span> newName1<span class="token punctuation">,</span> <span class="token literal-property property">prop2</span><span class="token operator">:</span> newName2 <span class="token punctuation">}</span> <span class="token operator">=</span> object<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=e(`<p>\uC5EC\uAE30\uC11C\uB294 prop1\uACFC prop2\uB97C newName1\uACFC newName2\uB85C \uC774\uB984\uC744 \uBCC0\uACBD\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="_2-\u1109\u1165\u11BC\u1102\u1173\u11BC\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1106\u1166\u1106\u1169\u110B\u1175\u110C\u1166\u110B\u1175\u1109\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#_2-\u1109\u1165\u11BC\u1102\u1173\u11BC\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1106\u1166\u1106\u1169\u110B\u1175\u110C\u1166\u110B\u1175\u1109\u1167\u11AB" aria-hidden="true">#</a> 2. \uC131\uB2A5\uC744 \uC704\uD55C \uBA54\uBAA8\uC774\uC81C\uC774\uC158</h2><p>\uBA54\uBAA8\uC774\uC81C\uC774\uC158\uC740 \uB354 \uB098\uC740 \uC131\uB2A5\uC744 \uC704\uD574 \uD568\uC218 \uACB0\uACFC\uB97C \uCE90\uC2DC\uD558\uB294 \uAE30\uC220\uC785\uB2C8\uB2E4. \uAC04\uB2E8\uD55C \uAD6C\uD604 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> memoizedFunction <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>args <span class="token keyword">in</span> cache<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">[</span>args<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">computeResult</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cache<span class="token punctuation">[</span>args<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=e(`<p>\uACB0\uACFC\uB97C \uCE90\uC2F1\uD568\uC73C\uB85C\uC368 \uC911\uBCF5\uB41C \uACC4\uC0B0\uC744 \uD53C\uD560 \uC218 \uC788\uC5B4\uC694.</p><h1 id="_3-\u1112\u1161\u11B7\u1109\u116E-\u1112\u1161\u11B8\u1109\u1165\u11BC\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u110F\u1165\u1105\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#_3-\u1112\u1161\u11B7\u1109\u116E-\u1112\u1161\u11B8\u1109\u1165\u11BC\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u110F\u1165\u1105\u1175\u11BC" aria-hidden="true">#</a> 3. \uD568\uC218 \uD569\uC131\uC744 \uC704\uD55C \uCEE4\uB9C1</h1><p>\uCEE4\uB9C1\uC744 \uD1B5\uD574 \uC7AC\uC0AC\uC6A9 \uAC00\uB2A5\uD558\uACE0 \uC870\uD569 \uAC00\uB2A5\uD55C \uD568\uC218\uB97C \uB9CC\uB4E4 \uC218 \uC788\uC5B4\uC694. \uC544\uB798 \uAC04\uACB0\uD55C \uCEE4\uB9C1 \uD568\uC218\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">curry</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  args<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> fn<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>moreArgs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">curry</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>moreArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=e(`<p>\uC774\uB97C \uC0AC\uC6A9\uD558\uBA74 \uBD80\uBD84\uC801\uC73C\uB85C \uC801\uC6A9\uB41C \uD568\uC218\uB97C \uC27D\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC5B4\uC694.</p><h2 id="_4-debouncing-and-throttling" tabindex="-1"><a class="header-anchor" href="#_4-debouncing-and-throttling" aria-hidden="true">#</a> 4. Debouncing and Throttling</h2><p>\uD568\uC218 \uC2E4\uD589 \uC18D\uB3C4\uB97C \uC81C\uC5B4\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD574\uC694. \uC790\uC8FC \uBC1C\uC0DD\uD558\uB294 \uC774\uBCA4\uD2B8\uB97C \uD6A8\uC728\uC801\uC73C\uB85C \uCC98\uB9AC\uD558\uAE30 \uC704\uD574 \uB514\uBC14\uC6B4\uC2F1\uACFC \uC2A4\uB85C\uD2C0\uB9C1\uC744 \uC0AC\uC6A9\uD574\uBCF4\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timeoutId<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeoutId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timeoutId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">throttle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> interval</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> lastExecTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> timeoutId<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> currentTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTime <span class="token operator">-</span> lastExecTime <span class="token operator">&gt;=</span> interval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      lastExecTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeoutId<span class="token punctuation">)</span><span class="token punctuation">;</span>
      timeoutId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        lastExecTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> interval <span class="token operator">-</span> <span class="token punctuation">(</span>currentTime <span class="token operator">-</span> lastExecTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=e(`<p>\uC704 \uAE30\uC220\uB4E4\uC740 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uBA70 \uACFC\uB3C4\uD55C \uD568\uC218 \uD638\uCD9C\uC744 \uBC29\uC9C0\uD569\uB2C8\uB2E4.</p><h2 id="_5-\u1103\u1169\u11BC\u110C\u1165\u11A8-\u1100\u1162\u11A8\u110E\u1166-\u110F\u1175" tabindex="-1"><a class="header-anchor" href="#_5-\u1103\u1169\u11BC\u110C\u1165\u11A8-\u1100\u1162\u11A8\u110E\u1166-\u110F\u1175" aria-hidden="true">#</a> 5. \uB3D9\uC801 \uAC1D\uCCB4 \uD0A4</h2><p>\uB300\uAD04\uD638 \uD45C\uAE30\uBC95\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB3D9\uC801\uC73C\uB85C \uAC1D\uCCB4 \uD0A4\uB97C \uC0DD\uC131\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> dynamicKey <span class="token operator">=</span> <span class="token string">&#39;key&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>dynamicKey<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=e(`<p>\uC774\uAC83\uC740 \uB7F0\uD0C0\uC784\uC5D0 \uD0A4\uAC00 \uACB0\uC815\uB420 \uB54C \uC720\uC6A9\uD569\uB2C8\uB2E4.</p><h1 id="_6-\u110B\u1169\u11B8\u1109\u1167\u1102\u1165\u11AF-\u110E\u1166\u110B\u1175\u1102\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#_6-\u110B\u1169\u11B8\u1109\u1167\u1102\u1165\u11AF-\u110E\u1166\u110B\u1175\u1102\u1175\u11BC" aria-hidden="true">#</a> 6. \uC635\uC154\uB110 \uCCB4\uC774\uB2DD</h1><p>\uC635\uC154\uB110 \uCCB4\uC774\uB2DD\uC740 \uB9CE\uC740 \uAC80\uC0AC \uACFC\uC815 \uC5C6\uC774 \uC911\uCCA9\uB41C \uC18D\uC131\uC5D0 \uC27D\uAC8C \uC811\uADFC\uD560 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC640\uC90D\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uCD08\uBCF4\uC790:</span>
<span class="token keyword">let</span> nestedValue<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>object <span class="token operator">&amp;&amp;</span> object<span class="token punctuation">.</span>property <span class="token operator">&amp;&amp;</span> object<span class="token punctuation">.</span>property<span class="token punctuation">.</span>nested<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  nestedValue <span class="token operator">=</span> object<span class="token punctuation">.</span>property<span class="token punctuation">.</span>nested<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  nestedValue <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \uC804\uBB38\uAC00:</span>
<span class="token keyword">let</span> nestedValue <span class="token operator">=</span> object<span class="token operator">?.</span>property<span class="token operator">?.</span>nested <span class="token operator">??</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=e(`<p>\uC774\uB807\uAC8C \uD558\uBA74 &quot;cannot read property &#39;nested&#39; of undefined&quot; \uC624\uB958\uB97C \uBC29\uC9C0\uD558\uACE0 \uCF54\uB4DC\uB97C \uB354 \uAC04\uACB0\uD558\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC5B4\uC694.</p><h1 id="_7-\u1112\u116A\u1109\u1161\u11AF\u1111\u116D-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#_7-\u1112\u116A\u1109\u1161\u11AF\u1111\u116D-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> 7. \uD654\uC0B4\uD45C \uD568\uC218</h1><p>\uD654\uC0B4\uD45C \uD568\uC218\uB294 \uD568\uC218\uB97C \uC815\uC758\uD558\uB294 \uAC04\uACB0\uD55C \uAD6C\uBB38\uC744 \uC81C\uACF5\uD574\uC918\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uCD08\uBCF4\uC790:</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \uC804\uBB38\uAC00:</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=e(`<p>\uD654\uC0B4\uD45C \uD568\uC218\uB294 \uC9E7\uACE0 \uC775\uBA85\uC758 \uD568\uC218\uC5D0 \uD2B9\uD788 \uC720\uC6A9\uD569\uB2C8\uB2E4.</p><h1 id="_8-\u1107\u1162\u110B\u1167\u11AF-\u1100\u116E\u110C\u1169\u1107\u116E\u11AB\u1112\u1162" tabindex="-1"><a class="header-anchor" href="#_8-\u1107\u1162\u110B\u1167\u11AF-\u1100\u116E\u110C\u1169\u1107\u116E\u11AB\u1112\u1162" aria-hidden="true">#</a> 8. \uBC30\uC5F4 \uAD6C\uC870\uBD84\uD574</h1><p>\uAD6C\uC870 \uBD84\uD574\uB294 \uAC1D\uCCB4\uBFD0\uB9CC \uC544\uB2C8\uB77C \uBC30\uC5F4\uC5D0\uC11C\uB3C4 \uC791\uB3D9\uD569\uB2C8\uB2E4!</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uCD08\uBCF4\uC790:</span>
<span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> first <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> second <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \uC804\uBB38\uAC00:</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=e(`<p>\uC774\uB97C \uD1B5\uD574 \uBC30\uC5F4 \uC694\uC18C\uC640 \uC791\uC5C5\uD558\uAE30\uAC00 \uB354 \uC26C\uC6CC\uC9D1\uB2C8\uB2E4.</p><h2 id="_9-\u1100\u1162\u11A8\u110E\u1166-\u1100\u116E\u110C\u1169\u1107\u116E\u11AB\u1112\u1162" tabindex="-1"><a class="header-anchor" href="#_9-\u1100\u1162\u11A8\u110E\u1166-\u1100\u116E\u110C\u1169\u1107\u116E\u11AB\u1112\u1162" aria-hidden="true">#</a> 9. \uAC1D\uCCB4 \uAD6C\uC870\uBD84\uD574</h2><p>\uBC30\uC5F4 \uAD6C\uC870 \uBD84\uD574\uC640 \uC720\uC0AC\uD558\uAC8C, \uC774 \uAE30\uC220\uC740 \uAC1D\uCCB4\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uCD08\uBCF4:</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> user<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> user<span class="token punctuation">.</span>age<span class="token punctuation">;</span>

<span class="token comment">// \uC804\uBB38\uAC00:</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=e(`<p>\uAC1D\uCCB4\uB97C \uD574\uCCB4\uD558\uC5EC \uAC04\uACB0\uD558\uAC8C \uAC12\uC744 \uCD94\uCD9C\uD558\uC138\uC694.</p><h1 id="_10-\u110B\u1172\u1112\u116D\u1109\u1165\u11BC-\u1100\u1165\u11B7\u1109\u1161\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1111\u1173\u1105\u1169\u11A8\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#_10-\u110B\u1172\u1112\u116D\u1109\u1165\u11BC-\u1100\u1165\u11B7\u1109\u1161\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1111\u1173\u1105\u1169\u11A8\u1109\u1175" aria-hidden="true">#</a> 10. \uC720\uD6A8\uC131 \uAC80\uC0AC\uB97C \uC704\uD55C \uD504\uB85D\uC2DC</h1><p>Proxy \uAC1D\uCCB4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC785\uB825 \uC720\uD6A8\uC131 \uAC80\uC0AC\uB97C \uC218\uD589\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> validator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token operator">===</span> <span class="token string">&#39;age&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value <span class="token operator">!==</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\uB098\uC774\uB294 \uC22B\uC790\uC5EC\uC57C \uD569\uB2C8\uB2E4.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),w=l("p",null,"\uD504\uB85D\uC2DC\uB294 \uC18D\uC131 \uD560\uB2F9\uC744 \uAC00\uB85C\uCC4C \uC218 \uC788\uACE0 \uAC80\uC99D\uD560 \uC218 \uC788\uC5B4 \uAC15\uB825\uD55C \uC785\uB825 \uC81C\uC5B4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.",-1);function _(x,j){return n(),c("div",null,[r,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w])}var D=o(u,[["render",_],["__file","index.html.vue"]]);export{D as default};
