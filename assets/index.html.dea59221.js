import{_ as n}from"./app.a99075bb.js";import{l as s,m as a,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const e={},t=o(`<p>Storybook\uC740 \uB2E4\uC591\uD55C \uAD6C\uC131 \uD30C\uC77C\uC744 \uD3EC\uD568\uD558\uB294 .storybook\uC774\uB77C\uB294 \uD3F4\uB354\uB97C \uD1B5\uD574 \uAD6C\uC131\uB429\uB2C8\uB2E4.</p><h2 id="storybook-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1100\u116E\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#storybook-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1100\u116E\u1109\u1165\u11BC" aria-hidden="true">#</a> Storybook \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC131</h2><p>Storybook\uC758 \uC8FC \uAD6C\uC131 \uD30C\uC77C\uC778 main.js \uB610\uB294 main.ts\uB294 \uC2A4\uD1A0\uB9AC \uC704\uCE58, \uC0AC\uC6A9\uD558\uB294 \uC560\uB4DC\uC628, \uAE30\uB2A5 \uD50C\uB798\uADF8 \uBC0F \uB2E4\uB978 \uD504\uB85C\uC81D\uD2B8\uBCC4 \uC124\uC815\uC744 \uC815\uC758\uD569\uB2C8\uB2E4. \uC774 \uD30C\uC77C\uC740 \uD504\uB85C\uC81D\uD2B8\uC758 \uB8E8\uD2B8 \uB514\uB809\uD1A0\uB9AC\uC5D0 \uC788\uB294 .storybook \uD3F4\uB354\uC5D0 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC774 \uD30C\uC77C\uC740 JavaScript \uB610\uB294 TypeScript\uB85C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798\uC5D0 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC635\uC158\uACFC \uC0AC\uC6A9 \uBC29\uBC95 \uC608\uC2DC\uAC00 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9\uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C your-framework\uC744 \uB300\uCCB4\uD558\uC138\uC694(\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uD544\uC218</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \uC120\uD0DD</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@storybook/addon-essentials&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  docs<span class="token operator">:</span> <span class="token punctuation">{</span>
    autodocs<span class="token operator">:</span> <span class="token string">&#39;tag&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../public&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1109\u1173\u1110\u1169\u1105\u1175-\u1105\u1169\u1103\u1175\u11BC-\u1100\u116E\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1173\u1110\u1169\u1105\u1175-\u1105\u1169\u1103\u1175\u11BC-\u1100\u116E\u1109\u1165\u11BC" aria-hidden="true">#</a> \uC2A4\uD1A0\uB9AC \uB85C\uB529 \uAD6C\uC131</h2><p>\uAE30\uBCF8\uC801\uC73C\uB85C Storybook\uC740 .storybook/main.js|ts\uC758 \uAE00\uB85C\uBE0C(\uD328\uD134 \uC77C\uCE58 \uBB38\uC790\uC5F4)\uB97C \uAE30\uBC18\uC73C\uB85C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC2A4\uD1A0\uB9AC\uB97C \uB85C\uB4DC\uD569\uB2C8\uB2E4. \uC774 \uB54C, \uD504\uB85C\uC81D\uD2B8\uC758 \uD655\uC7A5\uC790\uAC00 .stories.*\uC778 \uBAA8\uB4E0 \uD30C\uC77C\uACFC \uC77C\uCE58\uD558\uB294 \uAC83\uC744 \uCC3E\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD568\uC73C\uB85C\uC368 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC124\uBA85\uD558\uB294 \uC2A4\uD1A0\uB9AC \uD30C\uC77C\uC744 \uD568\uAED8 \uB450\uB294 \uAC83\uC744 \uC758\uB3C4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u2022
\u2514\u2500\u2500 components
    \u251C\u2500\u2500 Button<span class="token punctuation">.</span>js
    \u2514\u2500\u2500 Button<span class="token punctuation">.</span>stories<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB2E4\uB978 \uB124\uC774\uBC0D \uADDC\uCE59\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74, picomatch\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uAD6C\uBB38\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAE00\uB85C\uBE0C\uB97C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC5B4, my-project/src/components \uB514\uB809\uD1A0\uB9AC\uC5D0\uC11C .md \uBC0F .js \uD30C\uC77C\uC744 \uBAA8\uB450 \uAC00\uC838\uC624\uACE0 \uC2F6\uB2E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB9DE\uAC8C your-framework\uC744 \uD574\uB2F9 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uAD50\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../my-project/src/components/*.@(js|md)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1100\u116E\u1109\u1165\u11BC-\u1100\u1162\u11A8\u110E\u1166\u1105\u1169" tabindex="-1"><a class="header-anchor" href="#\u1100\u116E\u1109\u1165\u11BC-\u1100\u1162\u11A8\u110E\u1166\u1105\u1169" aria-hidden="true">#</a> \uAD6C\uC131 \uAC1D\uCCB4\uB85C</h3><p>\uB610\uD55C Storybook \uAD6C\uC131\uC744 \uAD6C\uC131 \uAC1D\uCCB4\uB97C \uAE30\uBC18\uC73C\uB85C \uC2A4\uD1A0\uB9AC\uB97C \uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, packages/components \uB514\uB809\uD1A0\uB9AC\uC5D0\uC11C \uC2A4\uD1A0\uB9AC\uB97C \uB85C\uB4DC\uD558\uACE0 \uC2F6\uB2E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC124\uC815 \uAC1C\uCCB4\uB97C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// your-framework\uC744 \uC0AC\uC6A9\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uBCC0\uACBD\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u{1F447} \uC2A4\uD1A0\uB9AC\uAC00 \uC788\uB294 \uB514\uB809\uD1A0\uB9AC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4</span>
      directory<span class="token operator">:</span> <span class="token string">&#39;../packages/components&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u{1F447} \uD574\uB2F9 \uD328\uD134\uACFC \uC77C\uCE58\uD558\uB294 \uD30C\uC77C\uC744 \uBAA8\uB450 \uBD88\uB7EC\uC635\uB2C8\uB2E4</span>
      files<span class="token operator">:</span> <span class="token string">&#39;*.stories.*&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u{1F447} \uC2A4\uD1A0\uB9AC \uC81C\uBAA9\uC744 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uD560 \uB54C \uC0AC\uC6A9\uB429\uB2C8\uB2E4</span>
      titlePrefix<span class="token operator">:</span> <span class="token string">&#39;MyComponents&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook\uAC00 \uC2DC\uC791\uB418\uBA74 packages/components \uB514\uB809\uD1A0\uB9AC \uC548\uC5D0 stories \uD655\uC7A5\uC790\uB97C \uD3EC\uD568\uD55C \uBAA8\uB4E0 \uD30C\uC77C\uC744 \uCC3E\uC544\uC11C \uC2A4\uD1A0\uB9AC\uC758 \uC81C\uBAA9\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.</p><h3 id="\u1103\u1175\u1105\u1166\u11A8\u1110\u1169\u1105\u1175\u110B\u116A-\u1112\u1161\u11B7\u1101\u1166" tabindex="-1"><a class="header-anchor" href="#\u1103\u1175\u1105\u1166\u11A8\u1110\u1169\u1105\u1175\u110B\u116A-\u1112\u1161\u11B7\u1101\u1166" aria-hidden="true">#</a> \uB514\uB809\uD1A0\uB9AC\uC640 \uD568\uAED8</h3><p>\uB610\uD55C \uB514\uB809\uD1A0\uB9AC\uB97C \uC774\uC6A9\uD558\uC5EC Storybook \uAD6C\uC131\uC744 \uAC04\uB2E8\uD558\uAC8C \uD560 \uC218 \uC788\uACE0 \uC2A4\uD1A0\uB9AC\uB97C \uBD88\uB7EC\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, packages/MyStories \uC548\uC5D0 \uC788\uB294 \uBAA8\uB4E0 \uC2A4\uD1A0\uB9AC\uB97C \uBD88\uB7EC\uC624\uACE0 \uC2F6\uB2E4\uBA74, \uC544\uB798\uC640 \uAC19\uC774 \uAD6C\uC131\uC744 \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:\`\`\`</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C(\uC608: react-webpack5, vue3-vite)\uB85C table\uD0DC\uADF8\uB97C \uBCC0\uACBD\uD574\uC8FC\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F447} Storybook\uC740 MyStories \uD3F4\uB354 \uB0B4\uC758 \uBAA8\uB4E0 \uAE30\uC874 \uC2A4\uD1A0\uB9AC\uB97C \uB85C\uB4DC\uD569\uB2C8\uB2E4</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../packages/MyStories&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-\u1100\u116E\u1112\u1167\u11AB\u1100\u116A-\u1112\u1161\u11B7\u1101\u1166" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-\u1100\u116E\u1112\u1167\u11AB\u1100\u116A-\u1112\u1161\u11B7\u1101\u1166" aria-hidden="true">#</a> \uC0AC\uC6A9\uC790 \uC815\uC758 \uAD6C\uD604\uACFC \uD568\uAED8</h3><p>Storybook \uAD6C\uC131\uC744 \uC870\uC815\uD558\uACE0 \uC0AC\uC6A9\uC790 \uC815\uC758 \uB17C\uB9AC\uB97C \uAD6C\uD604\uD558\uC5EC \uC2A4\uD1A0\uB9AC\uB97C\uB85C\uB4DC\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC2A4\uD1A0\uB9AC\uB97C\uB85C\uB4DC\uD558\uB294 \uC77C\uBC18\uC801\uC778 \uBC29\uBC95\uC73C\uB85C \uD574\uACB0\uD560 \uC218 \uC5C6\uB294 \uD2B9\uC815 \uD328\uD134\uC774 \uD3EC\uD568\uB41C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC791\uC5C5 \uC911\uC778 \uACBD\uC6B0 \uB2E4\uC74C\uACFC \uAC19\uC774 \uAD6C\uC131\uC744 \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C(\uC608: react-webpack5, vue3-vite)\uB85C table\uD0DC\uADF8\uB97C \uBCC0\uACBD\uD574\uC8FC\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StoriesEntry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/types&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">findStories</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>StoriesEntry<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uC0AC\uC6A9\uC790 \uC815\uC758 \uB17C\uB9AC\uB294 \uD30C\uC77C \uBAA9\uB85D\uC744 \uBC18\uD658\uD569\uB2C8\uB2E4</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">stories</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>list<span class="token operator">:</span> StoriesEntry<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>list<span class="token punctuation">,</span>
    <span class="token comment">// \u{1F447} \uBC1C\uACAC\uD55C \uC2A4\uD1A0\uB9AC\uB97C \uAE30\uC874 \uC2A4\uD1A0\uB9AC \uD30C\uC77C \uBAA9\uB85D\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4</span>
    <span class="token operator">...</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">findStories</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u110B\u1161\u11AF\u1105\u1167\u110C\u1175\u11AB-\u110C\u1166\u110B\u1163\u11A8-\u1109\u1161\u1112\u1161\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110B\u1161\u11AF\u1105\u1167\u110C\u1175\u11AB-\u110C\u1166\u110B\u1163\u11A8-\u1109\u1161\u1112\u1161\u11BC" aria-hidden="true">#</a> \uC54C\uB824\uC9C4 \uC81C\uC57D \uC0AC\uD56D</h3><p>\uD604\uC7AC Storybook\uC5D0\uC11C \uC774\uC57C\uAE30\uB4E4\uC774 \uC0C9\uC778\uD654\uB418\uB294 \uBC29\uC2DD \uB54C\uBB38\uC5D0, \uD604\uC7AC \uC21C\uAC04\uC740 \uB7F0\uD0C0\uC784\uC5D0 \uC774\uC57C\uAE30\uB97C \uBD88\uB7EC\uC624\uB294 \uAC83\uC5D0\uB294 \uC57D\uAC04\uC758 \uC81C\uC57D \uC0AC\uD56D\uC774 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>\uBC84\uC804 1\uBD80\uD130 \uBC84\uC804 3\uAE4C\uC9C0\uC758 CSF \uD615\uC2DD\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.</li><li>\uC81C\uD55C\uB41C API\uB97C \uAE30\uBC18\uC73C\uB85C \uC0AC\uC6A9\uC790 \uC815\uC758 storySort \uD568\uC218\uAC00 \uD5C8\uC6A9\uB429\uB2C8\uB2E4.</li></ul><h2 id="\u110B\u1175\u110B\u1163\u1100\u1175-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC-\u1100\u116E\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u110B\u1163\u1100\u1175-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC-\u1100\u116E\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC774\uC57C\uAE30 \uB80C\uB354\uB9C1 \uAD6C\uC131\uD558\uAE30</h2><p>\uC2A4\uD1A0\uB9AC\uB97C \uB80C\uB354\uB9C1\uD558\uB294 \uBC29\uC2DD\uC744 \uC81C\uC5B4\uD558\uACE0 \uC804\uC5ED \uB370\uCF54\uB808\uC774\uD130\uC640 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uCD94\uAC00\uD558\uB824\uBA74 .storybook/preview.js \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uC138\uC694. \uC774 \uD30C\uC77C\uC740 Canvas UI\uC5D0 \uB85C\uB4DC\uB418\uBA70, \uC5EC\uB7EC\uBD84\uC758 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uBD84\uB9AC\uB418\uC5B4 \uB80C\uB354\uB9C1\uD558\uB294 &quot;preview&quot; iframe\uC5D0 \uB85C\uB4DC\uB429\uB2C8\uB2E4. \uBAA8\uB4E0 \uC2A4\uD1A0\uB9AC\uC5D0 \uC801\uC6A9\uB418\uB294 \uAE00\uB85C\uBC8C \uCF54\uB4DC(\uC608: CSS \uC784\uD3EC\uD2B8 \uB610\uB294 JavaScript \uBAA8\uC758 \uAC1D\uCCB4)\uC5D0\uB294 preview.js\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.</p><p>preview.js \uD30C\uC77C\uC740 ES \uBAA8\uB4C8\uC774 \uB420 \uC218 \uC788\uC73C\uBA70 \uB2E4\uC74C \uD0A4\uB97C \uB0B4\uBCF4\uB0BC \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>decorators - \uAE00\uB85C\uBC8C \uB370\uCF54\uB808\uC774\uD130 \uBC30\uC5F4</li><li>parameters - \uAE00\uB85C\uBC8C \uB9E4\uAC1C\uBCC0\uC218 \uAC1D\uCCB4</li><li>globalTypes - globalTypes \uC815\uC758</li></ul><p>\uC2A4\uD1A0\uB9AC\uC758 \uC21C\uC11C\uB97C \uBCC0\uACBD\uD558\uB824\uBA74, &#39;\uC2A4\uD1A0\uB9AC \uC815\uB82C&#39;\uC5D0 \uB300\uD574 \uC77D\uC5B4\uBCF4\uC138\uC694.</p><h2 id="storybook-ui-\u1100\u116E\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#storybook-ui-\u1100\u116E\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> Storybook UI \uAD6C\uC131\uD558\uAE30</h2><p>Storybook\uC758 UI(\uB9E4\uB2C8\uC800)\uC758 \uB3D9\uC791\uC744 \uC81C\uC5B4\uD558\uB824\uBA74 .storybook/manager.js \uD30C\uC77C\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC774 \uD30C\uC77C\uC5D0\uB294 \uD2B9\uC815\uD55C API\uAC00 \uC5C6\uC9C0\uB9CC, UI \uC635\uC158\uC744 \uC124\uC815\uD558\uACE0 Storybook\uC758 \uD14C\uB9C8\uB97C \uAD6C\uC131\uD558\uB294 \uACF3\uC785\uB2C8\uB2E4.</p>`,31),p=[t];function i(c,r){return s(),a("div",null,p)}var b=n(e,[["render",i],["__file","index.html.vue"]]);export{b as default};
