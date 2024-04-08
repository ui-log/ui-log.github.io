import{_ as c}from"./app.a99075bb.js";import{l as n,m as l,E as s,G as a,p as t,Y as p,K as o,C as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/SuperchargeYourReactAppTipsandTricksforOptimalPerformance_0.cc12e6f6.png";const u={},r=o('<img src="'+i+`"><p>\uB9AC\uC561\uD2B8\uB294 \uC131\uB2A5\uC774 \uC6B0\uC218\uD55C \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uCD95\uD558\uB294 \uAC15\uB825\uD55C \uB3C4\uAD6C\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9AC\uC561\uD2B8 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294 \uBA87 \uAC00\uC9C0 \uD301\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4:</p><ul><li>\uB9AC\uC561\uD2B8\uC758 \uB0B4\uC7A5 \uB3C4\uAD6C \uC0AC\uC6A9: \uB9AC\uC561\uD2B8\uB294 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uAE30 \uC704\uD574 \uAE30\uBCF8\uC801\uC73C\uB85C \uC5EC\uB7EC \uB3C4\uAD6C\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, React.memo() \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uBA54\uBAA8\uC774\uC81C\uC774\uC158\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uD574\uB2F9 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uD504\uB86D\uC774 \uBCC0\uACBD\uB420 \uB54C\uC5D0\uB9CC \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB418\uAC8C \uD569\uB2C8\uB2E4. \uBE44\uC2B7\uD558\uAC8C, React\uC758 useMemo()\uC640 useCallback() \uD6C5\uC740 \uAC12\uACFC \uD568\uC218\uB97C \uBA54\uBAA8\uC774\uC81C\uC774\uC158\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// useMemo</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> prop1<span class="token punctuation">,</span> prop2 <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> expensiveValue <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// prop1\uACFC prop2\uB97C \uAE30\uBC18\uC73C\uB85C \uD55C \uBE44\uC2FC \uACC4\uC0B0</span>
    <span class="token keyword">return</span> prop1 <span class="token operator">+</span> prop2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>prop1<span class="token punctuation">,</span> prop2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>expensiveValue<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=o(`<p>\uC774 \uC608\uC2DC\uC5D0\uC11C\uB294 prop1\uACFC prop2\uC758 \uAC12\uC5D0 \uB530\uB77C \uACC4\uC0B0 \uACB0\uACFC\uB97C \uAE30\uC5B5\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uB294 useMemo() \uD6C5\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC5B4\uC694. useMemo() \uD6C5\uC740 \uCCAB \uBC88\uC9F8 \uC778\uC218\uB85C \uD568\uC218\uB97C \uCDE8\uD558\uB294\uB370\uC694, \uC774 \uD568\uC218\uB294 \uAE30\uC5B5\uD558\uB824\uB294 \uAC12\uC744 \uBC18\uD658\uD574\uC57C \uD574\uC694. \uB450 \uBC88\uC9F8 \uC778\uC218\uB294 \uC885\uC18D\uC131 \uBC30\uC5F4\uC774\uBA70, \uC774 \uBC30\uC5F4\uC740 \uD568\uC218\uAC00 \uB2E4\uC2DC \uC2E4\uD589\uB418\uC5B4\uC57C \uD558\uB294 \uC2DC\uC810\uC744 \uACB0\uC815\uD574\uC694. \uC885\uC18D\uC131 \uC911 \uD558\uB098\uB77C\uB3C4 \uBCC0\uACBD\uB418\uBA74 \uD568\uC218\uAC00 \uB2E4\uC2DC \uC2E4\uD589\uB418\uACE0 \uAE30\uC5B5\uB41C \uAC12\uC774 \uC5C5\uB370\uC774\uD2B8\uB420 \uAC70\uC5D0\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//useCallback</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> handleClick <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Button clicked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>onClick<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">&gt;</span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uC608\uC2DC\uC5D0\uC11C\uB294 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uC804\uB2EC\uB418\uB294 \uD568\uC218\uB97C \uAE30\uC5B5\uD558\uAE30 \uC704\uD574 useCallback() \uD6C5\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC5B4\uC694. useCallback() \uD6C5\uC740 \uD568\uC218\uB97C \uCCAB \uBC88\uC9F8 \uC778\uC218\uB85C, \uAE30\uC5B5\uD558\uB824\uB294 \uD568\uC218\uB97C \uB450 \uBC88\uC9F8 \uC778\uC218\uB85C \uBC30\uC5F4\uB85C \uBC1B\uB294\uB370\uC694, \uC774 \uBC30\uC5F4\uC740 \uD568\uC218\uAC00 \uB2E4\uC2DC \uB9CC\uB4E4\uC5B4\uC838\uC57C \uD558\uB294 \uC2DC\uC810\uC744 \uACB0\uC815\uD574\uC694. \uC885\uC18D\uC131 \uC911 \uD558\uB098\uB77C\uB3C4 \uBCC0\uACBD\uB418\uBA74 \uD568\uC218\uAC00 \uB2E4\uC2DC \uB9CC\uB4E4\uC5B4\uC9C0\uACE0 \uAE30\uC5B5\uB41C \uD568\uC218\uAC00 \uC5C5\uB370\uC774\uD2B8\uB420 \uAC70\uC5D0\uC694.</p><ol start="2"><li>\uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30 \uCD5C\uC18C\uD654: \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB294 \uB79C\uB354\uB9C1 \uBC0F \uB2E4\uC2DC \uB79C\uB354\uB9C1\uACFC \uAD00\uB828\uD55C \uC131\uB2A5\uC5D0 \uC601\uD5A5\uC744 \uC904 \uC218 \uC788\uC5B4\uC694. \uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30\uB97C \uCD5C\uC18C\uD654\uD558\uAE30 \uC704\uD574 \uBD88\uD544\uC694\uD55C props \uBC0F \uC0C1\uD0DC\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uACE0, \uD070 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC791\uC740 \uAD00\uB9AC\uD558\uAE30 \uC26C\uC6B4 \uD06C\uAE30\uB85C \uBD84\uD560\uD558\uB294 \uAC83\uC744 \uACE0\uB824\uD574\uBCF4\uC138\uC694.</li></ol><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=o(`<ol start="3"><li>\uAC00\uC0C1\uD654 \uC0AC\uC6A9\uD558\uAE30: \uAE34 \uBAA9\uB85D\uC774\uB098 \uD45C\uB97C \uB80C\uB354\uB9C1\uD560 \uB54C, \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC804\uCCB4 \uBAA9\uB85D/\uD45C\uB97C \uB80C\uB354\uB9C1\uD558\uB294 \uB300\uC2E0 \uD654\uBA74\uC5D0 \uBCF4\uC774\uB294 \uC694\uC18C\uB9CC \uB80C\uB354\uB9C1\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uB80C\uB354\uB9C1 \uC131\uB2A5\uC774 \uD06C\uAC8C \uD5A5\uC0C1\uB418\uACE0 \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC218\uD589\uD574\uC57C \uD558\uB294 \uC791\uC5C5\uB7C9\uC774 \uC904\uC5B4\uB4ED\uB2C8\uB2E4. React\uC5D0\uC11C \uAC00\uC0C1\uD654\uB97C \uAD6C\uD604\uD558\uB294 \uC778\uAE30 \uC788\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC911 \uD558\uB098\uB294 react-virtualized\uC785\uB2C8\uB2E4. \uC544\uB798\uB294 react-virtualized\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC544\uC774\uD15C\uC758 \uB300\uB7C9 \uBAA9\uB85D\uC744 \uB80C\uB354\uB9C1\uD558\uB294 \uBC29\uBC95 \uC608\uC2DC\uC785\uB2C8\uB2E4:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-virtualized&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> items <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">rowRenderer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> index<span class="token punctuation">,</span> key<span class="token punctuation">,</span> style <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>items<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>List width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span> height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span> rowCount<span class="token operator">=</span><span class="token punctuation">{</span>items<span class="token punctuation">.</span>length<span class="token punctuation">}</span> rowHeight<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span> rowRenderer<span class="token operator">=</span><span class="token punctuation">{</span>rowRenderer<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704 \uC608\uC81C\uC5D0\uC11C MyComponent\uB294 react-virtualized\uC758 List \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC544\uC774\uD15C \uBAA9\uB85D\uC744 \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4. rowRenderer \uD568\uC218\uB294 List \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 prop\uC73C\uB85C \uC804\uB2EC\uB418\uBA70 \uBAA9\uB85D\uC758 \uAC01 \uD56D\uBAA9\uC744 \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4. \uC774 rowRenderer \uD568\uC218\uB294 \uD604\uC7AC \uD654\uBA74\uC5D0 \uBCF4\uC774\uB294 \uD56D\uBAA9\uC5D0 \uB300\uD574\uC11C\uB9CC \uD638\uCD9C\uB418\uBA70 \uC0AC\uC6A9\uC790\uAC00 \uC2A4\uD06C\uB864\uD560 \uB54C react-virtualized\uAC00 \uB3D9\uC801\uC73C\uB85C \uCD94\uAC00 \uD56D\uBAA9\uC744 \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4.</p><ol start="4"><li>\uC774\uBBF8\uC9C0 \uCD5C\uC801\uD654: \uD070 \uC774\uBBF8\uC9C0\uB294 \uD2B9\uD788 \uBAA8\uBC14\uC77C \uAE30\uAE30\uC5D0\uC11C \uC131\uB2A5 \uC800\uD558\uC758 \uC8FC\uC694 \uC694\uC778\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uAE30 \uC704\uD574 \uC774\uBBF8\uC9C0\uB97C \uCD5C\uC801\uD654\uD558\uC5EC \uD06C\uAE30\uB97C \uC904\uC774\uACE0, \uC0AC\uC6A9\uC790\uAC00 \uD544\uC694\uD560 \uB54C\uAE4C\uC9C0 \uB85C\uB529\uC744 \uBBF8\uB8E8\uB294 &quot;Lazy Loading&quot;\uC744 \uC0AC\uC6A9\uD558\uACE0, \uD654\uBA74 \uD06C\uAE30\uC5D0 \uB9DE\uAC8C \uC801\uC808\uD55C \uC774\uBBF8\uC9C0\uB97C \uC81C\uACF5\uD558\uB294 \uBC18\uC751\uD615 \uC774\uBBF8\uC9C0\uB97C \uACE0\uB824\uD574\uC57C \uD569\uB2C8\uB2E4. React \uC571\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uCD5C\uC801\uD654\uD558\uB294 \uBC29\uBC95 \uC608\uC2DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</li></ol><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=o(`<ul><li>\uC774\uBBF8\uC9C0 \uCD5C\uC801\uD654 \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uBBF8\uC9C0\uB97C \uC555\uCD95\uD558\uACE0 \uD06C\uAE30\uB97C \uC870\uC815\uD55C \uD6C4 \uC571\uC5D0 \uCD94\uAC00\uD558\uC138\uC694. squoosh.app\uC774\uB098 tinypng.com\uACFC \uAC19\uC740 \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC774\uBBF8\uC9C0\uC758 \uD30C\uC77C \uD06C\uAE30\uB97C \uC904\uC77C \uC218 \uC788\uACE0 \uD488\uC9C8\uC744 \uD06C\uAC8C \uD3EC\uAE30\uD558\uC9C0 \uC54A\uACE0\uB3C4 \uC555\uCD95\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uD398\uC774\uC9C0\uC5D0 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uB294 \uC774\uBBF8\uC9C0\uB97C lazy-load\uD558\uB294 img \uC694\uC18C\uC5D0 lazy \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uC138\uC694. \uC774\uB807\uAC8C \uD558\uBA74 \uD398\uC774\uC9C0\uC758 \uCD08\uAE30\uB85C\uB4DC \uC2DC\uAC04\uC744 \uC904\uC774\uACE0 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;\uC774\uBBF8\uC9C0/\uACBD\uB85C.jpg&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;\uCD5C\uC801\uD654\uB41C \uC774\uBBF8\uC9C0&quot;</span> loading<span class="token operator">=</span><span class="token string">&quot;lazy&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;\uB2E4\uB978-\uC774\uBBF8\uC9C0/\uACBD\uB85C.jpg&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;\uB2E4\uB978 \uCD5C\uC801\uD654\uB41C \uC774\uBBF8\uC9C0&quot;</span> loading<span class="token operator">=</span><span class="token string">&quot;lazy&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>img \uC694\uC18C\uC5D0 srcSet \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC11C\uB85C \uB2E4\uB978 \uD654\uBA74 \uD06C\uAE30\uC5D0 \uB300\uD55C \uB2E4\uB978 \uC774\uBBF8\uC9C0 \uC18C\uC2A4\uB97C \uC81C\uACF5\uD558\uC138\uC694. \uC774\uB807\uAC8C \uD558\uBA74 \uB354 \uC791\uC740 \uD654\uBA74\uC5D0\uC11C \uC774\uBBF8\uC9C0\uC758 \uD30C\uC77C \uD06C\uAE30\uB97C \uC904\uC77C \uC218 \uC788\uACE0, \uB354 \uD070 \uC774\uBBF8\uC9C0\uAC00 \uD544\uC694\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0 \uC720\uC6A9\uD569\uB2C8\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>img
        src<span class="token operator">=</span><span class="token string">&quot;\uC774\uBBF8\uC9C0/\uACBD\uB85C.jpg&quot;</span>
        alt<span class="token operator">=</span><span class="token string">&quot;\uCD5C\uC801\uD654\uB41C \uC774\uBBF8\uC9C0&quot;</span>
        srcSet<span class="token operator">=</span>&quot;
          \uC774\uBBF8\uC9C0<span class="token operator">-</span>\uC791\uC740<span class="token operator">/</span>\uACBD\uB85C<span class="token punctuation">.</span>jpg 640w<span class="token punctuation">,</span>
          \uC774\uBBF8\uC9C0<span class="token operator">-</span>\uC911\uAC04<span class="token operator">/</span>\uACBD\uB85C<span class="token punctuation">.</span>jpg 1024w<span class="token punctuation">,</span>
          \uC774\uBBF8\uC9C0<span class="token operator">-</span>\uD070<span class="token operator">/</span>\uACBD\uB85C<span class="token punctuation">.</span>jpg 2048w
        &quot;
        sizes<span class="token operator">=</span>&quot;<span class="token punctuation">(</span>max<span class="token operator">-</span>width<span class="token operator">:</span> 640px<span class="token punctuation">)</span> 640px<span class="token punctuation">,</span>
          <span class="token punctuation">(</span>max<span class="token operator">-</span>width<span class="token operator">:</span> 1024px<span class="token punctuation">)</span> 1024px<span class="token punctuation">,</span>
          2048px&quot;
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=e("ol",{start:"5"},[e("li",null,"\uD504\uB85C\uD544 \uBC0F \uC131\uB2A5 \uCD5C\uC801\uD654: \uB9C8\uC9C0\uB9C9\uC73C\uB85C, React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC131\uB2A5\uC744 \uC815\uAE30\uC801\uC73C\uB85C \uD504\uB85C\uD544\uB9C1\uD558\uACE0 \uCD5C\uC801\uD654\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uC131\uB2A5 \uBCD1\uBAA9 \uD604\uC0C1\uC744 \uC2DD\uBCC4\uD558\uB294 \uB370 Chrome DevTools \uC131\uB2A5 \uD0ED\uC774\uB098 React\uC758 \uB0B4\uC7A5 \uD504\uB85C\uD30C\uC77C\uB9C1 \uB3C4\uAD6C\uC640 \uAC19\uC740 \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD558\uACE0, \uADF8 \uD6C4\uC5D0 \uC774\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD574\uC57C \uD569\uB2C8\uB2E4.")],-1),b=e("p",null,"\uC774\uB7EC\uD55C \uD301\uC744 \uB530\uB974\uBA74 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC131\uB2A5\uC774 \uC6B0\uC218\uD558\uACE0 \uD6CC\uB96D\uD55C \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1);function g(y,w){return n(),l("div",null,[r,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,b])}var j=c(u,[["render",g],["__file","index.html.vue"]]);export{j as default};