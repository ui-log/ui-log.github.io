import{_ as s}from"./app.a99075bb.js";import{l as n,m as a,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const o={},t=e(`<p>\uBD80\uBAA8: main.js|ts \uAD6C\uC131</p><p>\uD0C0\uC785:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  autodocs<span class="token operator">?</span><span class="token operator">:</span> boolean <span class="token operator">|</span> <span class="token string">&#39;tag&#39;</span><span class="token punctuation">;</span>
  defaultName<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  docsMode<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook\uC758 \uC790\uB3D9 \uC0DD\uC131\uB41C \uBB38\uC11C\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4.</p><h2 id="\u110C\u1161\u1103\u1169\u11BC-\u1106\u116E\u11AB\u1109\u1165" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1103\u1169\u11BC-\u1106\u116E\u11AB\u1109\u1165" aria-hidden="true">#</a> \uC790\uB3D9 \uBB38\uC11C</h2><p>\uC720\uD615: boolean | <code>tag</code></p><p>\uAE30\uBCF8\uAC12: <code>tag</code></p><p>\uC2A4\uD1A0\uB9AC\uC5D0 \uB300\uD55C \uC790\uB3D9 \uBB38\uC11C\uD654 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD558\uAC70\uB098 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</p><ul><li>true: \uBAA8\uB4E0 \uC774\uC57C\uAE30\uC5D0 \uB300\uD574 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4.</li><li>false: \uBAA8\uB4E0 \uC774\uC57C\uAE30\uC5D0 \uB300\uD574 \uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4.</li><li><code>tag</code>: <code>autodocs</code>\uB85C \uD0DC\uADF8\uB41C \uC774\uC57C\uAE30\uC5D0 \uB300\uD574 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4.</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C your-framework\uB97C \uB300\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  docs<span class="token operator">:</span> <span class="token punctuation">{</span>
    autodocs<span class="token operator">:</span> <span class="token string">&#39;tag&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defaultname" tabindex="-1"><a class="header-anchor" href="#defaultname" aria-hidden="true">#</a> defaultName</h2><p>\uD0C0\uC785: \uBB38\uC790\uC5F4</p><p>\uAE30\uBCF8: <code>Docs</code></p><p>\uC0DD\uC131\uB41C \uBB38\uC11C \uD398\uC774\uC9C0\uC5D0 \uC0AC\uC6A9\uD560 \uC774\uB984\uC785\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 framework\uB85C \uAD50\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  docs<span class="token operator">:</span> <span class="token punctuation">{</span>
    defaultName<span class="token operator">:</span> <span class="token string">&#39;Documentation&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docsmode" tabindex="-1"><a class="header-anchor" href="#docsmode" aria-hidden="true">#</a> docsMode</h2><p>\uC720\uD615: \uBD80\uC6B8</p><p>\uC0AC\uC774\uB4DC\uBC14\uC5D0 \uBB38\uC11C \uD398\uC774\uC9C0\uB9CC \uD45C\uC2DC\uD569\uB2C8\uB2E4(\uC77C\uBC18\uC801\uC73C\uB85C --docs CLI \uD50C\uB798\uADF8\uB85C \uC124\uC815\uB428).</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C your-framework\uC744(\uC608: react-webpack5, vue3-vite) \uBC14\uAFD4\uC8FC\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  docs<span class="token operator">:</span> <span class="token punctuation">{</span>
    docsMode<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),p=[t];function c(i,r){return n(),a("div",null,p)}var b=s(o,[["render",c],["__file","index.html.vue"]]);export{b as default};
