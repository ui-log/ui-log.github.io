import{_ as n}from"./app.3052dcfb.js";import{l as s,m as a,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const p={},t=o(`<p>\uBD80\uBAA8: main.js|ts \uC124\uC815</p><p>\uC720\uD615: async (config: Config, options: WebpackOptions) \u21D2 Config</p><p>\uC6F9\uD329 \uBE4C\uB354\uB97C \uC0AC\uC6A9\uD560 \uB54C Storybook\uC758 Webpack \uC124\uC815\uC744 \uC0AC\uC6A9\uC790 \uC815\uC758\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB9DE\uAC8C your-framework\uC744(\uC608: react-webpack5, vue3-vite) \uBC14\uAFC9\uB2C8\uB2E4.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">webpackFinal</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> <span class="token punctuation">{</span> configType <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>configType <span class="token operator">===</span> <span class="token string">&#39;DEVELOPMENT&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uAC1C\uBC1C\uC6A9\uC73C\uB85C \uC124\uC815 \uC218\uC815</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>configType <span class="token operator">===</span> <span class="token string">&#39;PRODUCTION&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uD504\uB85C\uB355\uC158\uC6A9\uC73C\uB85C \uC124\uC815 \uC218\uC815</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u110B\u1169\u11B8\u1109\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110B\u1169\u11B8\u1109\u1167\u11AB" aria-hidden="true">#</a> \uC635\uC158</h2><p>\uC720\uD615: { configType?: <code>DEVELOPMENT</code> | <code>PRODUCTION</code> }</p><p>\uC5EC\uAE30\uC5D0 \uBB38\uC11C\uD654\uD558\uAE30 \uC5B4\uB824\uC6B4 \uB2E4\uB978 \uC635\uC158\uB4E4\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC720\uD615 \uC815\uC758\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.</p>`,7),e=[t];function c(i,l){return s(),a("div",null,e)}var f=n(p,[["render",c],["__file","index.html.vue"]]);export{f as default};
