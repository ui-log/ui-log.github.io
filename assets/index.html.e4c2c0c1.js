import{_ as s}from"./app.3052dcfb.js";import{l as n,m as a,K as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const o={},p=t(`<p>\uBD80\uBAA8: main.js|ts \uAD6C\uC131</p><p>\uC720\uD615: (\uBB38\uC790\uC5F4 | { from: string; to: string })[]</p><p>Storybook\uC5D0\uC11C \uB85C\uB4DC\uB420 \uC815\uC801 \uD30C\uC77C \uB514\uB809\uD1A0\uB9AC \uBAA9\uB85D\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uB300\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../public&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../static&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1109\u1165\u11AF\u110C\u1165\u11BC-\u1100\u1162\u11A8\u110E\u1166-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u110C\u1165\u11BC-\u1100\u1162\u11A8\u110E\u1166-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC124\uC815 \uAC1D\uCCB4 \uC0AC\uC6A9\uD558\uAE30</h2><p>\uB514\uB809\uD1A0\uB9AC\uB97C \uC815\uC758\uD558\uB294 \uB370 \uAD6C\uC131 \uAC1D\uCCB4\uB97C \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC5B4\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C(\uC608: react-webpack5, vue3-vite)\uB85C your-framework\uB97C \uAD50\uCCB4\uD558\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> from<span class="token operator">:</span> <span class="token string">&#39;../my-custom-assets/images&#39;</span><span class="token punctuation">,</span> to<span class="token operator">:</span> <span class="token string">&#39;/assets&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),e=[p];function c(i,r){return n(),a("div",null,e)}var b=s(o,[["render",c],["__file","index.html.vue"]]);export{b as default};
