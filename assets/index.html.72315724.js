import{_ as n}from"./app.d68f74da.js";import{l as s,m as a,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const p={},e=o(`<p>Storybook Webpack builder\uB294 Storybook\uC758 \uAE30\uBCF8 \uBE4C\uB354\uC785\uB2C8\uB2E4. \uC774 \uBE4C\uB354\uB97C \uC0AC\uC6A9\uD558\uBA74 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC1C\uBC1C \uBC0F \uD14C\uC2A4\uD2B8 \uACBD\uD5D8\uC744 \uC6D0\uD560\uD558\uAC8C \uB9CC\uB4E4\uC5B4\uC90D\uB2C8\uB2E4. \uB610\uD55C UI \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uACA9\uB9AC\uB41C \uD658\uACBD\uC5D0\uC11C \uAC1C\uBC1C\uD560 \uC218 \uC788\uC5B4 \uAE30\uC874 Webpack \uAD6C\uC131\uACFC \uD568\uAED8 Storybook\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD6A8\uC728\uC801\uC73C\uB85C \uAC1C\uBC1C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uC124\uC815</h2><p>\uAE30\uBCF8\uC801\uC73C\uB85C Storybook\uC740 Webpack\uC5D0 \uB300\uD55C Zero-config \uC9C0\uC6D0\uC744 \uC81C\uACF5\uD558\uBA70 \uAC00\uC7A5 \uC77C\uBC18\uC801\uC778 \uC0AC\uC6A9 \uC0AC\uB840\uC640 \uC791\uC5C5\uD560 \uC218 \uC788\uB3C4\uB85D \uB9CC\uB4E0 \uAE30\uBCF8 \uAD6C\uC131\uC774 \uC790\uB3D9\uC73C\uB85C \uC124\uC815\uB429\uB2C8\uB2E4. \uADF8\uB7EC\uB098 Storybook \uAD6C\uC131 \uD30C\uC77C(\uC608: .storybook/main.js|ts)\uC744 \uD655\uC7A5\uD558\uACE0 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uAC70\uB098 \uD544\uC694\uC5D0 \uB9DE\uAC8C \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uB294 \uCD94\uAC00 \uC635\uC158\uC744 \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798\uC5D0 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC635\uC158\uACFC \uC0AC\uC6A9 \uBC29\uBC95 \uC608\uC2DC\uAC00 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC785\uB825\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    builder<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;@storybook/builder-webpack5&#39;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        fsCache<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lazyCompilation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1100\u1175\u1107\u1169\u11AB-\u1100\u116E\u1109\u1165\u11BC-\u110C\u1162\u110C\u1165\u11BC\u110B\u1174\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1100\u1175\u1107\u1169\u11AB-\u1100\u116E\u1109\u1165\u11BC-\u110C\u1162\u110C\u1165\u11BC\u110B\u1174\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uAE30\uBCF8 \uAD6C\uC131 \uC7AC\uC815\uC758\uD558\uAE30</h3><p>Storybook\uC758 Webpack \uAD6C\uC131\uC740 Webpack 5\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uBA70, \uD504\uB85C\uC81D\uD2B8\uC758 \uC694\uAD6C\uC5D0 \uB9DE\uAC8C \uD655\uC7A5\uD560 \uC218 \uC788\uB3C4\uB85D \uC124\uACC4\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uB85C\uB354\uB098 \uD50C\uB7EC\uADF8\uC778\uC744 \uCD94\uAC00\uD574\uC57C \uD560 \uACBD\uC6B0, .storybook/main.js \uB610\uB294 .storybook/main.ts \uD30C\uC77C\uC5D0\uC11C webpackFinal \uAD6C\uC131 \uC694\uC18C\uB97C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uAD6C\uC131 \uC694\uC18C\uB294 \uCCAB \uBC88\uC9F8 \uC778\uC218\uB85C \uAE30\uBCF8 \uAD6C\uC131\uC744 \uBC1B\uACE0 \uB450 \uBC88\uC9F8 \uC778\uC218\uB85C Storybook \uC635\uC158 \uAC1D\uCCB4\uB97C \uBC1B\uB294 \uD568\uC218\uB97C \uB0B4\uBCF4\uB0B4\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// &#39;your-framework&#39; \uBD80\uBD84\uC744 \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uB300\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">webpackFinal</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> <span class="token punctuation">{</span> configType <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>configType <span class="token operator">===</span> <span class="token string">&#39;DEVELOPMENT&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uAC1C\uBC1C\uC6A9 \uAD6C\uC131 \uC218\uC815</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>configType <span class="token operator">===</span> <span class="token string">&#39;PRODUCTION&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uD504\uB85C\uB355\uC158\uC6A9 \uAD6C\uC131 \uC218\uC815</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook\uC774 \uC2DC\uC791\uD560 \uB54C, \uC790\uCCB4 \uAD6C\uC131\uC5D0 \uC790\uB3D9\uC73C\uB85C \uBCD1\uD569\uB429\uB2C8\uB2E4. \uADF8\uB7EC\uB098 webpackFinal \uAD6C\uC131 \uC694\uC18C\uB97C \uC81C\uACF5\uD560 \uB54C\uB294 \uAD6C\uC131\uC744 \uC9C1\uC811 \uBCD1\uD569\uD574\uC57C \uD569\uB2C8\uB2E4. \uAD6C\uC131 \uAC1D\uCCB4\uC758 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uCC45\uC784 \uC788\uAC8C \uCC98\uB9AC\uD558\uC5EC entry \uBC0F output \uC18D\uC131\uC744 \uC720\uC9C0\uD558\uB3C4\uB85D \uAD8C\uC7A5\uD569\uB2C8\uB2E4.</p><h4 id="\u110B\u1170\u11B8\u1111\u1162\u11A8-\u1111\u1173\u11AF\u1105\u1165\u1100\u1173\u110B\u1175\u11AB-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1170\u11B8\u1111\u1162\u11A8-\u1111\u1173\u11AF\u1105\u1165\u1100\u1173\u110B\u1175\u11AB-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC6F9\uD329 \uD50C\uB7EC\uADF8\uC778 \uC0AC\uC6A9\uD558\uAE30</h4><p>Storybook \uAD6C\uC131\uC744 \uC0AC\uC6A9\uC790 \uC815\uC758\uD558\uB294 \uB610 \uB2E4\uB978 \uBC29\uBC95\uC740 \uCF54\uB4DC \uCD5C\uC801\uD654, \uC790\uC0B0 \uAD00\uB9AC \uB610\uB294 \uAE30\uD0C0 \uC791\uC5C5\uC5D0 \uB3C4\uC6C0\uC744 \uC8FC\uB294 \uC0AC\uC6A9\uC790 \uC815\uC758 \uD50C\uB7EC\uADF8\uC778\uC774\uB098 \uB85C\uB354\uB97C \uCD94\uAC00\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uB098, Storybook\uC740 \uBBF8\uB9AC\uBCF4\uAE30 \uD398\uC774\uC9C0\uB97C \uC0DD\uC131\uD558\uAE30 \uC704\uD574 HtmlWebpackPlugin\uC744 \uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0 \uBCC0\uACBD \uC0AC\uD56D\uC744 config.plugins \uBC30\uC5F4\uC5D0 \uCD94\uAC00\uD558\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C \uB36E\uC5B4\uC4F0\uC9C0 \uC54A\uACE0 \uBCC0\uACBD\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 framework(\uC608: react-webpack5, vue3-vite)\uB85C your-framework\uB97C \uB300\uCCB4\uD569\uB2C8\uB2E4</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
 framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
 stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">webpackFinal</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   config<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> config<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB610\uD55C, \uD2B9\uC815 \uD30C\uC77C \uD655\uC7A5\uC790\uB97C \uBA85\uC2DC\uC801\uC73C\uB85C \uD3EC\uD568\uD558\uC9C0 \uC54A\uB294 Webpack \uB85C\uB354\uC640 \uC791\uC5C5\uD560 \uB54C(\uC989, test \uC18D\uC131\uC744 \uD1B5\uD574), \uD574\uB2F9 \uB85C\uB354\uC5D0 \uB300\uD55C .ejs \uD30C\uC77C \uD655\uC7A5\uC790\uB97C \uC81C\uC678\uD574\uC57C \uD569\uB2C8\uB2E4.</p><h3 id="\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-webpack-\u1100\u116E\u1109\u1165\u11BC-\u1111\u1161\u110B\u1175\u11AF-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-webpack-\u1100\u116E\u1109\u1165\u11BC-\u1111\u1161\u110B\u1175\u11AF-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" aria-hidden="true">#</a> \uC0AC\uC6A9\uC790 \uC815\uC758 Webpack \uAD6C\uC131 \uD30C\uC77C \uAC00\uC838\uC624\uAE30</h3><p>\uC774\uBBF8 \uC788\uB294 Webpack \uAD6C\uC131 \uD30C\uC77C\uC744 Storybook\uACFC \uC7AC\uC0AC\uC6A9\uD574\uC57C \uD560 \uACBD\uC6B0, \uD574\uB2F9 \uD30C\uC77C\uC744 \uAC00\uC838\uC640 \uAE30\uBCF8 \uAD6C\uC131\uACFC \uBCD1\uD569\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// your-framework\uC744 \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uBC14\uAFD4\uC8FC\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> custom <span class="token keyword">from</span> <span class="token string">&#39;../webpack.config.js&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u{1F448} \uAC00\uC838\uC624\uB294 \uC0AC\uC6A9\uC790 \uC815\uC758 Webpack \uAD6C\uC131</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">webpackFinal</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>config<span class="token punctuation">,</span>
      module<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>config<span class="token punctuation">.</span>module<span class="token punctuation">,</span> rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>config<span class="token punctuation">.</span>module<span class="token punctuation">.</span>rules<span class="token punctuation">,</span> <span class="token operator">...</span>custom<span class="token punctuation">.</span>module<span class="token punctuation">.</span>rules<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack-\u1100\u116E\u1109\u1165\u11BC-\u1103\u1175\u1107\u1165\u1100\u1173" tabindex="-1"><a class="header-anchor" href="#webpack-\u1100\u116E\u1109\u1165\u11BC-\u1103\u1175\u1107\u1165\u1100\u1173" aria-hidden="true">#</a> Webpack \uAD6C\uC131 \uB514\uBC84\uADF8</h3><p>\uB9CC\uC57D Storybook\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 Webpack \uAD6C\uC131\uC744 \uB514\uBC84\uADF8\uD558\uB824\uBA74 Storybook CLI\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5B4\uC694. \uAC1C\uBC1C \uBAA8\uB4DC\uC5D0\uC11C \uC2E4\uD589 \uC911\uC774\uB77C\uBA74 \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5B4\uC694:</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm run storybook -- --debug-webpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uAC8C\uB2E4\uAC00, Storybook\uC758 \uC815\uC801 \uBE4C\uB4DC\uB97C \uC0DD\uC131\uD558\uACE0 \uC2F6\uB2E4\uBA74 \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5B4\uC694:</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm run build-storybook -- --debug-webpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u110F\u1165\u11B7\u1111\u1161\u110B\u1175\u11AF\u1105\u1165-\u110C\u1175\u110B\u116F\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110F\u1165\u11B7\u1111\u1161\u110B\u1175\u11AF\u1105\u1165-\u110C\u1175\u110B\u116F\u11AB" aria-hidden="true">#</a> \uCEF4\uD30C\uC77C\uB7EC \uC9C0\uC6D0</h2><p>Storybook\uC740 \uCEF4\uD30C\uC77C\uB7EC\uC5D0 \uC911\uB9BD\uC801\uC778 \uBC29\uC2DD\uC73C\uB85C \uBC88\uB4E4\uB9C1\uC744 \uC218\uD589\uD569\uB2C8\uB2E4. \uC774\uB294 \uB2F9\uC2E0\uC774 \uC790\uC2E0\uB9CC\uC758 \uC751\uC6A9\uD504\uB85C\uADF8\uB7A8 \uBC88\uB4E4\uB7EC(Babel, SWC \uB4F1)\uB97C \uAC00\uC838\uC640\uC11C Webpack 5 \uAE30\uBC18 \uD504\uB85C\uC81D\uD2B8\uC758 \uBC29\uB300\uD55C \uC0DD\uD0DC\uACC4 \uB0B4\uC5D0\uC11C \uD638\uD658\uC131\uC744 \uD655\uBCF4\uD560 \uC218 \uC788\uB3C4\uB85D \uD574\uC90D\uB2C8\uB2E4.</p><h3 id="swc" tabindex="-1"><a class="header-anchor" href="#swc" aria-hidden="true">#</a> SWC</h3><p>\uB9CC\uC57D SWC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uB97C \uBE4C\uB4DC\uD588\uB2E4\uBA74, @storybook/addon-webpack5-compiler-swc \uC560\uB4DC\uC628\uC744 \uC0AC\uC6A9\uD558\uC138\uC694. \uC774 \uC560\uB4DC\uC628\uC740 Webpack 5 \uD504\uB85C\uC81D\uD2B8\uC640\uC758 \uC0DD\uD0DC\uACC4 \uD638\uD658\uC131\uC744 \uB192\uC774\uBA74\uC11C \uB192\uC740 \uC131\uB2A5\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4. \uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC5EC \uC560\uB4DC\uC628\uC744 \uC790\uB3D9\uC73C\uB85C \uC124\uCE58\uD558\uC138\uC694:</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npx storybook@latest add @storybook/addon-webpack5-compiler-swc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774 \uC560\uB4DC\uC628\uC744 \uD65C\uC131\uD654\uD558\uBA74 Webpack \uAD6C\uC131\uC774 swc-loader\uB97C JavaScript \uBC0F TypeScript \uD30C\uC77C\uC5D0 \uC0AC\uC6A9\uD558\uB3C4\uB85D \uC870\uC815\uB429\uB2C8\uB2E4. \uB610\uD55C \uD504\uB85C\uC81D\uD2B8\uC758 SWC \uAD6C\uC131\uC744 \uAC10\uC9C0\uD558\uACE0 \uC0AC\uC6A9\uD560 \uAC83\uC785\uB2C8\uB2E4.</p><h3 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> Babel</h3><p>\uB9CC\uC57D TypeScript\uB098 \uB2E4\uB978 \uCD5C\uC2E0 JavaScript \uAE30\uB2A5\uC744 \uD3EC\uD568\uD558\uC5EC \uD2B9\uC815 \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD558\uAE30 \uC704\uD574 Babel\uC758 \uB3C4\uAD6C\uB97C \uD65C\uC6A9\uD558\uB294 \uD504\uB85C\uC81D\uD2B8\uB97C \uB2E4\uB8E8\uACE0 \uC788\uB2E4\uBA74, @storybook/addon-webpack5-compiler-babel \uC560\uB4DC\uC628\uC744 \uC0AC\uC6A9\uD558\uC5EC Storybook\uC5D0 \uC774\uB97C \uD3EC\uD568\uC2DC\uCF1C \uD504\uB85C\uC81D\uD2B8\uC640\uC758 \uD638\uD658\uC131\uC744 \uBCF4\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC2E4\uD589\uD558\uC5EC \uC560\uB4DC\uC628\uC744 \uC790\uB3D9\uC73C\uB85C \uC124\uC815\uD569\uB2C8\uB2E4:\`\`\`</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npx storybook@latest add @storybook/addon-webpack5-compiler-babel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774 \uCD94\uAC00 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD558\uBA74 Webpack \uAD6C\uC131\uC744 \uC870\uC815\uD558\uC5EC JavaScript\uC640 TypeScript \uD30C\uC77C\uC5D0 \uB300\uD55C \uAE30\uBCF8\uB85C\uB354\uB85C babel-loader\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uAC8C\uB2E4\uAC00 \uD504\uB85C\uC81D\uD2B8\uC758 Babel \uAD6C\uC131\uC744 \uAC10\uC9C0\uD558\uACE0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.</p><h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF" aria-hidden="true">#</a> \uBB38\uC81C \uD574\uACB0</h2><h3 id="storybook\u110B\u1166\u1109\u1165-typescript-\u1106\u1169\u1103\u1172\u11AF\u110B\u1175-\u1112\u1162\u1100\u1167\u11AF\u1103\u116C\u110C\u1175-\u110B\u1161\u11AD\u110B\u1173\u11B7" tabindex="-1"><a class="header-anchor" href="#storybook\u110B\u1166\u1109\u1165-typescript-\u1106\u1169\u1103\u1172\u11AF\u110B\u1175-\u1112\u1162\u1100\u1167\u11AF\u1103\u116C\u110C\u1175-\u110B\u1161\u11AD\u110B\u1173\u11B7" aria-hidden="true">#</a> Storybook\uC5D0\uC11C TypeScript \uBAA8\uB4C8\uC774 \uD574\uACB0\uB418\uC9C0 \uC54A\uC74C</h3><p>Storybook\uC758 \uAE30\uBCF8 Webpack \uAD6C\uC131\uC740 \uCD94\uAC00 \uAD6C\uC131 \uC5C6\uC774 \uB300\uBD80\uBD84\uC758 \uD504\uB85C\uC81D\uD2B8 \uC124\uC815\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC131\uC774\uB098 \uC120\uD0DD\uD55C \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB530\uB77C, tsconfig \uD30C\uC77C\uC5D0\uC11C alias\uB97C \uC0AC\uC6A9\uD558\uC5EC Storybook \uB0B4\uC5D0\uC11C TypeScript \uBAA8\uB4C8\uC774 \uD574\uACB0\uB418\uC9C0 \uC54A\uB294 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uB824\uBA74 \uC544\uB798\uC640 \uAC19\uC774 Storybook\uC758 Webpack \uAD6C\uC131\uC744 \uD655\uC7A5\uD558\uBA74\uC11C tsconfig-paths-webpack-plugin\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB9DE\uAC8C &#39;your-framework&#39;\uC744 \uD574\uB2F9 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uAD50\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> TsconfigPathsPlugin <span class="token keyword">from</span> <span class="token string">&#39;tsconfig-paths-webpack-plugin&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">webpackFinal</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>plugins <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token operator">...</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>plugins <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">TsconfigPathsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          extensions<span class="token operator">:</span> config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>extensions<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uADF8\uB807\uC9C0\uB9CC, \uAE30\uBCF8 alias \uAD6C\uC131\uC744 \uC81C\uACF5\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC0AC\uC6A9 \uC911\uC774\uACE0 Storybook\uC5D0 \uB3D9\uC77C\uD55C alias\uB97C \uC0AC\uC6A9\uD558\uB824\uB294 \uACBD\uC6B0 \uCD94\uAC00 \uD328\uD0A4\uC9C0\uB97C \uC124\uCE58\uD560 \uD544\uC694\uAC00 \uC5C6\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uC2E0, Storybook\uC758 \uAE30\uBCF8 \uAD6C\uC131\uC744 \uD655\uC7A5\uD558\uC5EC \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uB3D9\uC77C\uD55C alias\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, @ import \uACBD\uB85C\uC5D0 \uB300\uD55C alias\uB97C \uC124\uC815\uD558\uB824\uBA74 \uB2E4\uC74C\uC744 .storybook/main.js|ts \uD30C\uC77C\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB9DE\uAC8C &#39;your-framework&#39;\uC744 \uD574\uB2F9 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uAD50\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">webpackFinal</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>alias <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>alias<span class="token punctuation">,</span>
        <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="storybook-ui\u110B\u1166\u1109\u1165-\u1106\u1175\u1105\u1175-\u1107\u1165\u11AB\u1103\u1173\u11AF\u1103\u116C\u11AB-\u110B\u1166\u1109\u1166\u11BA\u110B\u1175-\u1111\u116D\u1109\u1175\u1103\u116C\u110C\u1175-\u110B\u1161\u11AD\u1109\u1173\u11B8\u1102\u1175\u1103\u1161" tabindex="-1"><a class="header-anchor" href="#storybook-ui\u110B\u1166\u1109\u1165-\u1106\u1175\u1105\u1175-\u1107\u1165\u11AB\u1103\u1173\u11AF\u1103\u116C\u11AB-\u110B\u1166\u1109\u1166\u11BA\u110B\u1175-\u1111\u116D\u1109\u1175\u1103\u116C\u110C\u1175-\u110B\u1161\u11AD\u1109\u1173\u11B8\u1102\u1175\u1103\u1161" aria-hidden="true">#</a> Storybook UI\uC5D0\uC11C \uBBF8\uB9AC \uBC88\uB4E4\uB41C \uC5D0\uC14B\uC774 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4</h3><p>Storybook\uC740 \uB0B4\uBD80 \uB9E4\uB2C8\uC800\uB97C \uBE4C\uB4DC\uD558\uAE30 \uC704\uD574 esbuild\uB97C \uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0 managerWebpack\uC73C\uB85C \uC5D0\uC14B\uC744 \uBC88\uB4E4\uB9C1\uD558\uB294 \uAC83\uC740 \uB354 \uC774\uC0C1 Storybook UI\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uAE30\uC874\uC758 managerWebpack \uAD6C\uC131 \uC694\uC18C\uB97C Storybook \uAD6C\uC131 \uD30C\uC77C\uC5D0\uC11C \uC81C\uAC70\uD558\uACE0 \uC774\uBBF8\uC9C0\uB098 CSS \uC678\uC758 \uC5D0\uC14B\uC744 \uC0AC\uC804\uC5D0 JavaScript\uB85C \uBC88\uB4E4\uB9C1\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4.</p><h3 id="storybook\u110B\u1175-webpack-4\u110B\u116A-\u1112\u1161\u11B7\u1101\u1166-\u110C\u1161\u11A8\u1103\u1169\u11BC\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1109\u1173\u11B8\u1102\u1175\u1103\u1161" tabindex="-1"><a class="header-anchor" href="#storybook\u110B\u1175-webpack-4\u110B\u116A-\u1112\u1161\u11B7\u1101\u1166-\u110C\u1161\u11A8\u1103\u1169\u11BC\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1109\u1173\u11B8\u1102\u1175\u1103\u1161" aria-hidden="true">#</a> Storybook\uC774 Webpack 4\uC640 \uD568\uAED8 \uC791\uB3D9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4</h3><p>Webpack 4 \uC9C0\uC6D0\uC774 \uC911\uB2E8\uB418\uC5C8\uC73C\uBA70 \uB354 \uC774\uC0C1 \uC720\uC9C0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. Storybook\uC744 \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uB294 \uACBD\uC6B0 \uC790\uB3D9\uC73C\uB85C Webpack 5\uB97C \uC0AC\uC6A9\uD558\uACE0 \uAD6C\uC131\uC744 \uC774\uC8FC\uD558\uB824\uACE0 \uC2DC\uB3C4\uD560 \uAC83\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC0AC\uC6A9\uC790 \uC815\uC758 Webpack \uAD6C\uC131\uACFC \uC791\uC5C5 \uC911\uC778 \uACBD\uC6B0, \uD574\uB2F9 \uAD6C\uC131\uC744 Webpack 5\uC640 \uD638\uD658\uB418\uB3C4\uB85D \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCD5C\uC2E0 \uBC84\uC804\uC758 Storybook\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uAC00 \uC6D0\uD65C\uD558\uAC8C \uC2E4\uD589\uB418\uB3C4\uB85D \uD558\uB824\uBA74 \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uD504\uB85C\uC138\uC2A4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. Webpack \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uC81C\uACF5\uB41C \uC9C0\uCE68\uC5D0 \uB530\uB77C \uAD6C\uC131\uC744 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uB178\uD2B8: \uB354 \uB9CE\uC740 \uC815\uBCF4\uB97C \uC54C\uC544\uBCF4\uC138\uC694!</p><ul><li>Vite \uBE4C\uB354: Vite\uC640 \uBC88\uB4E4\uB9C1\uC744 \uC704\uD55C \uBE4C\uB354</li><li>Webpack \uBE4C\uB354: Webpack\uACFC \uBC88\uB4E4\uB9C1\uC744 \uC704\uD55C \uBE4C\uB354</li><li>\uBE4C\uB354 API: Storybook \uBE4C\uB354\uB97C \uAD6C\uCD95\uD558\uAE30 \uC704\uD55C API</li></ul>`,42),t=[e];function c(i,l){return s(),a("div",null,t)}var m=n(p,[["render",c],["__file","index.html.vue"]]);export{m as default};
