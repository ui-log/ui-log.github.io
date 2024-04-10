import{_ as n}from"./app.63e06a35.js";import{l as s,m as a,K as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var p="/assets/End-to-endtesting_0.350e8754.png";const o={},e=t(`<p>Storybook\uC740 Cypress \uBC0F Playwright\uC640 \uAC19\uC740 \uCD94\uAC00 \uD14C\uC2A4\uD2B8 \uD504\uB808\uC784\uC6CC\uD06C\uC640 \uC2E0\uC18D\uD558\uAC8C \uD1B5\uD569\uB418\uC5B4 \uC885\uD569\uC801\uC778 \uD14C\uC2A4\uD2B8 \uC194\uB8E8\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. Component Story Format (CSF)\uC744 \uD65C\uC6A9\uD558\uC5EC \uAC1C\uBC1C\uC790\uB294 Storybook \uD658\uACBD \uB0B4\uC5D0\uC11C \uAC1C\uBCC4 \uAD6C\uC131 \uC694\uC18C\uC758 \uB3D9\uC791\uC744 \uAC80\uC99D\uD558\uB294 \uC0AC\uC6A9\uC790 \uC0C1\uD638\uC791\uC6A9\uC744 \uC2DC\uBBAC\uB808\uC774\uC158\uD558\uB294 \uD14C\uC2A4\uD2B8 \uCF00\uC774\uC2A4\uB97C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC811\uADFC \uBC29\uC2DD\uC744 \uD1B5\uD574 \uAC1C\uBC1C\uC790\uB294 \uC11C\uB85C \uB2E4\uB978 \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C \uAD6C\uC131 \uC694\uC18C\uC758 \uAE30\uB2A5, \uBC18\uC751\uC131 \uBC0F \uC2DC\uAC01\uC801 \uBAA8\uC2B5\uC744 \uCCA0\uC800\uD788 \uD14C\uC2A4\uD2B8\uD558\uC5EC \uB354 \uACAC\uACE0\uD558\uACE0 \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="cypress\u110B\u116A-\u1112\u1161\u11B7\u1101\u1166" tabindex="-1"><a class="header-anchor" href="#cypress\u110B\u116A-\u1112\u1161\u11B7\u1101\u1166" aria-hidden="true">#</a> Cypress\uC640 \uD568\uAED8</h3><p>Cypress\uB294 \uC5D4\uB4DC \uD22C \uC5D4\uB4DC \uD14C\uC2A4\uD2B8 \uD504\uB808\uC784\uC6CC\uD06C\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uB3D9\uC791\uC744 \uC2DC\uBBAC\uB808\uC774\uC158\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC644\uC804\uD55C \uC778\uC2A4\uD134\uC2A4\uB97C \uD14C\uC2A4\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Component Story Format\uC744 \uD65C\uC6A9\uD558\uBA74 Cypress\uC5D0\uC11C \uC2A4\uD1A0\uB9AC\uB97C \uC7AC\uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC01 \uBA85\uBA85\uB41C \uB0B4\uBCF4\uB0B4\uAE30(\uB2E4\uC2DC \uB9D0\uD574, \uC2A4\uD1A0\uB9AC)\uB294 \uD14C\uC2A4\uD2B8 \uC124\uC815 \uB0B4\uC5D0\uC11C \uB80C\uB354\uB9C1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>Cypress\uC640 Storybook\uC744 \uC0AC\uC6A9\uD55C \uC5D4\uB4DC \uD22C \uC5D4\uB4DC \uD14C\uC2A4\uD2B8\uC758 \uC608\uC2DC\uB85C\uB294 \uB85C\uADF8\uC778 \uAD6C\uC131 \uC694\uC18C\uB97C \uC62C\uBC14\uB978 \uC785\uB825\uAC12\uC73C\uB85C \uD14C\uC2A4\uD2B8\uD558\uB294 \uAC83\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uB2E4\uC74C\uACFC \uAC19\uC740 \uC2A4\uD1A0\uB9AC\uAC00 \uC788\uB2E4\uBA74:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> userEvent<span class="token punctuation">,</span> within<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/test&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> LoginForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./LoginForm&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> LoginForm<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> LoginForm<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> LoginForm<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> EmptyForm<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/*
 * \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * \uB97C \uCC38\uC870\uD558\uC5EC canvasElement\uB97C \uC0AC\uC6A9\uD558\uC5EC DOM\uC744 \uCFFC\uB9AC\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uC138\uC694
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> FilledForm<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">play</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> canvasElement <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token function">within</span><span class="token punctuation">(</span>canvasElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u{1F447} \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC0C1\uD638\uC791\uC6A9 \uBAA8\uBC29</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;email@provider.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;a-random-password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 https://storybook.js.org/docs/essentials/actions#automatically-matching-args \uB97C \uCC38\uC870\uD558\uC5EC Actions \uD328\uB110\uC5D0\uC11C \uB85C\uAE45 \uC124\uC815\uD558\uB294 \uBC29\uBC95 \uC54C\uC544\uBCF4\uC138\uC694</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u{1F447} DOM \uAD6C\uC870 \uD655\uC778</span>
    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>
      canvas<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span>
        <span class="token string">&#39;\uBAA8\uB4E0 \uAC83\uC774 \uC644\uBCBD\uD569\uB2C8\uB2E4. \uACC4\uC815\uC774 \uC900\uBE44\uB418\uC5C8\uC73C\uB2C8 \uC2DC\uC791\uD560 \uC900\uBE44\uAC00 \uB418\uC5C8\uB124\uC694!&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC2F8\uC774\uD504\uB808\uC2A4\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD14C\uC2A4\uD2B8\uB97C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">/// &lt;reference types=&quot;cypress&quot; /&gt;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;\uB85C\uADF8\uC778 \uC591\uC2DD&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;\uC62C\uBC14\uB978 \uB85C\uADF8\uC778 \uC815\uBCF4\uB97C \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4.&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">&#39;/iframe.html?id=components-login-form--example&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;#login-form&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">within</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      cy<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;**\uC774\uBA54\uC77C \uC785\uB825**&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;#email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;have.value&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;email@provider.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cy<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;**\uBE44\uBC00\uBC88\uD638 \uC785\uB825**&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;#password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;have.value&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a-random-password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC2F8\uC774\uD504\uB808\uC2A4\uAC00 \uD14C\uC2A4\uD2B8\uB97C \uC2E4\uD589\uD560 \uB54C Storybook\uC758 \uACA9\uB9AC\uB41C iframe\uC744 \uB85C\uB4DC\uD558\uACE0 \uC785\uB825 \uAC12\uC774 \uD14C\uC2A4\uD2B8 \uAC12\uACFC \uC77C\uCE58\uD558\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.\`\`\`</p><p><img src="`+p+`" alt="\uC774\uBBF8\uC9C0"></p><h3 id="playwright\u1105\u1169" tabindex="-1"><a class="header-anchor" href="#playwright\u1105\u1169" aria-hidden="true">#</a> Playwright\uB85C</h3><p>Playwright\uB294 Microsoft\uC5D0\uC11C \uB098\uC628 \uBE0C\uB77C\uC6B0\uC800 \uC790\uB3D9\uD654 \uB3C4\uAD6C\uC774\uC790 \uC5D4\uB4DC \uD22C \uC5D4\uB4DC \uD14C\uC2A4\uD305 \uD504\uB808\uC784\uC6CC\uD06C\uC785\uB2C8\uB2E4. \uD06C\uB85C\uC2A4 \uBE0C\uB77C\uC6B0\uC800 \uC790\uB3D9\uD654, \uC7A5\uCE58 \uC5D0\uBBAC\uB808\uC774\uC158\uC744 \uD1B5\uD55C \uBAA8\uBC14\uC77C \uD14C\uC2A4\uD305 \uBC0F \uD5E4\uB4DC\uB9AC\uC2A4 \uD14C\uC2A4\uD305\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. Component Story Format\uC744 \uC774\uC6A9\uD558\uBA74 Playwright\uB85C \uC2A4\uD1A0\uB9AC\uB97C \uC7AC\uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC01\uAC01\uC758 \uC774\uB984 \uC788\uB294 \uB0B4\uBCF4\uB0B4\uAE30(\uB2E4\uC2DC \uB9D0\uD574, \uC2A4\uD1A0\uB9AC)\uB294 \uD14C\uC2A4\uD2B8 \uC124\uC815 \uB0B4\uC5D0\uC11C \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4.</p><p>Playwright\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790 \uD750\uB984 \uD14C\uC2A4\uD2B8\uB97C \uD558\uB294 \uC2E4\uC81C \uC2DC\uB098\uB9AC\uC624\uB294 \uB85C\uADF8\uC778 \uC591\uC2DD\uC744 \uC720\uD6A8\uC131 \uAC80\uC0AC\uD558\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC774\uBBF8 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC2A4\uD1A0\uB9AC\uAC00 \uB9CC\uB4E4\uC5B4\uC838 \uC788\uB2E4\uBA74:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> userEvent<span class="token punctuation">,</span> within<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/test&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> LoginForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./LoginForm&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> LoginForm<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    component<span class="token operator">:</span> LoginForm<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> LoginForm<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> EmptyForm<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/*
 * \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uB824\uBA74 https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas \uB97C \uCC38\uC870\uD558\uC138\uC694.
 * \uCE94\uBC84\uC2A4 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC5EC DOM\uC744 \uCFFC\uB9AC\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uC138\uC694.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> FilledForm<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">play</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> canvasElement <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token function">within</span><span class="token punctuation">(</span>canvasElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u{1F447} \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC0C1\uD638\uC791\uC6A9 \uC2DC\uBBAC\uB808\uC774\uC158</span>
        <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;email@provider.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;a-random-password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// https://storybook.js.org/docs/essentials/actions#automatically-matching-args \uC5EC\uAE30\uB97C \uCC38\uC870\uD558\uC5EC Actions \uD328\uB110\uC5D0\uC11C \uB85C\uAE45 \uC124\uC815 \uBC29\uBC95\uC744 \uD655\uC778\uD558\uC138\uC694.</span>
        <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u{1F447} DOM \uAD6C\uC870 \uD655\uC778</span>
        <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>
            canvas<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span>
                <span class="token string">&#39;Everything is perfect. Your account is ready and we should probably get you started!&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Playwright\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC785\uB825\uAC12\uC774 \uCC44\uC6CC\uC9C0\uACE0 \uC2A4\uD1A0\uB9AC\uC640 \uC77C\uCE58\uD558\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uD14C\uC2A4\uD2B8\uB97C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;Login Form inputs&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> page <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:6006/iframe.html?id=components-login-form--example&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> email <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">inputValue</span><span class="token punctuation">(</span><span class="token string">&#39;#email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">inputValue</span><span class="token punctuation">(</span><span class="token string">&#39;#password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;email@provider.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;a-random-password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Playwright\uB97C \uC2E4\uD589\uD558\uBA74 \uC0C8 \uBE0C\uB77C\uC6B0\uC800 \uCC3D\uC774 \uC5F4\uB9AC\uACE0 Storybook\uC758 \uACA9\uB9AC\uB41C iframe\uC744\uB85C\uB4DC\uD558\uC5EC \uC785\uB825\uAC12\uC774 \uC9C0\uC815\uB41C \uAC12\uB4E4\uC744 \uD3EC\uD568\uD558\uB294\uC9C0 \uD655\uC778\uD558\uACE0 \uD130\uBBF8\uB110\uC5D0\uC11C \uD14C\uC2A4\uD2B8 \uACB0\uACFC\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\`\`\`</p><h4 id="\u1103\u1161\u1105\u1173\u11AB-ui-\u1110\u1166\u1109\u1173\u1110\u1173\u110B\u1166-\u1103\u1162\u1112\u1162-\u110B\u1161\u11AF\u110B\u1161\u1107\u1169\u1109\u1166\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u1105\u1173\u11AB-ui-\u1110\u1166\u1109\u1173\u1110\u1173\u110B\u1166-\u1103\u1162\u1112\u1162-\u110B\u1161\u11AF\u110B\u1161\u1107\u1169\u1109\u1166\u110B\u116D" aria-hidden="true">#</a> \uB2E4\uB978 UI \uD14C\uC2A4\uD2B8\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uC138\uC694</h4><ul><li>\uD14C\uC2A4\uD2B8 \uC2E4\uD589\uC744 \uC790\uB3D9\uD654\uD558\uB294 \uD14C\uC2A4\uD2B8 \uB7EC\uB108</li><li>\uC678\uAD00\uC744 \uC704\uD55C \uC2DC\uAC01\uC801 \uD14C\uC2A4\uD2B8</li><li>\uC0AC\uC6A9\uC131\uC744 \uC704\uD55C \uC811\uADFC\uC131 \uD14C\uC2A4\uD2B8</li><li>\uC0AC\uC6A9\uC790 \uB3D9\uC791 \uC2DC\uBBAC\uB808\uC774\uC158\uC744 \uC704\uD55C \uC0C1\uD638 \uC791\uC6A9 \uD14C\uC2A4\uD2B8</li><li>\uCF54\uB4DC \uCEE4\uBC84\uB9AC\uC9C0\uB97C \uCE21\uC815\uD558\uAE30 \uC704\uD55C \uCEE4\uBC84\uB9AC\uC9C0 \uD14C\uC2A4\uD2B8</li><li>\uB80C\uB354\uB9C1 \uC624\uB958 \uBC0F \uACBD\uACE0\uB97C \uC704\uD55C \uC2A4\uB0C5\uC0F7 \uD14C\uC2A4\uD2B8</li><li>\uC2E4\uC81C \uC0AC\uC6A9\uC790 \uC2DC\uB098\uB9AC\uC624\uB97C \uC2DC\uBBAC\uB808\uC774\uC158\uD558\uAE30 \uC704\uD55C \uC5D4\uB4DC-\uD22C-\uC5D4\uB4DC \uD14C\uC2A4\uD2B8</li><li>\uAE30\uB2A5\uC131\uC744 \uC704\uD55C \uC720\uB2DB \uD14C\uC2A4\uD2B8</li></ul>`,18),c=[e];function i(l,u){return s(),a("div",null,c)}var b=n(o,[["render",i],["__file","index.html.vue"]]);export{b as default};
