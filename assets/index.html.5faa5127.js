import{_ as n}from"./app.3052dcfb.js";import{l as s,m as a,K as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const p={},e=t(`<p>\uC0C1\uC704: main.js|ts \uAD6C\uC131</p><p>\uC720\uD615: (\uBB38\uC790\uC5F4 | { name: string; options?: AddonOptions })[]</p><p>Storybook\uC5D0\uC11C \uB85C\uB4DC\uB41C \uC560\uB4DC\uC628\uC744 \uB4F1\uB85D\uD569\uB2C8\uB2E4.</p><p>\uAC01 \uC560\uB4DC\uC628\uC758 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC635\uC158\uC5D0 \uB300\uD574\uC11C\uB294 \uD574\uB2F9 \uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uADC0\uD558\uAC00 \uC0AC\uC6A9\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uB85C table \uD0DC\uADF8\uB97C \uBCC0\uACBD\uD558\uC2ED\uC2DC\uC624. (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;@storybook/addon-essentials&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;@storybook/addon-styling-webpack&#39;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            use<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
              <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                loader<span class="token operator">:</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
                options<span class="token operator">:</span> <span class="token punctuation">{</span>
                  implementation<span class="token operator">:</span> <span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;postcss&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function i(c,l){return s(),a("div",null,o)}var b=n(p,[["render",i],["__file","index.html.vue"]]);export{b as default};
