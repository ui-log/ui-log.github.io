import{_ as n}from"./app.a99075bb.js";import{l as s,m as a,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const o={},t=e(`<p>\uBD80\uBAA8: main.js|ts \uC124\uC815</p><p>\uC720\uD615: (config: Babel.Config, options: Options) =<code> Babel.Config | Promise</code>Babel.Config\`</p><p>Storybook\uC758 Babel \uC124\uC815\uC744 \uC0AC\uC6A9\uC790 \uC815\uC758\uD558\uC138\uC694.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C your-framework\uC744 \uAD50\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">babel</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> <span class="token punctuation">{</span> configType <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>configType <span class="token operator">===</span> <span class="token string">&#39;DEVELOPMENT&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uC5EC\uAE30\uC5D0 \uAC1C\uBC1C \uAD6C\uC131\uC744 \uB123\uC73C\uC138\uC694</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>configType <span class="token operator">===</span> <span class="token string">&#39;PRODUCTION&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uC5EC\uAE30\uC5D0 \uD504\uB85C\uB355\uC158 \uAD6C\uC131\uC744 \uB123\uC73C\uC138\uC694</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="babel-config" tabindex="-1"><a class="header-anchor" href="#babel-config" aria-hidden="true">#</a> Babel.Config</h2><p>Babel\uC774 \uC81C\uACF5\uD558\uB294 \uC635\uC158\uC740 @storybook/addon-webpack5-compiler-babel \uC560\uB4DC\uC628\uC744 \uD65C\uC131\uD654\uD55C \uACBD\uC6B0\uC5D0\uB9CC \uC801\uC6A9\uB429\uB2C8\uB2E4.</p><h2 id="\u110B\u1169\u11B8\u1109\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110B\u1169\u11B8\u1109\u1167\u11AB" aria-hidden="true">#</a> \uC635\uC158</h2><p>\uC720\uD615: { configType?: <code>DEVELOPMENT</code> | <code>PRODUCTION</code> }</p><p>\uD14C\uC774\uBE14 \uD0DC\uADF8\uB97C Markdown \uD615\uC2DD\uC73C\uB85C \uBCC0\uACBD\uD574\uC8FC\uC138\uC694.</p>`,9),p=[t];function c(i,l){return s(),a("div",null,p)}var b=n(o,[["render",c],["__file","index.html.vue"]]);export{b as default};
