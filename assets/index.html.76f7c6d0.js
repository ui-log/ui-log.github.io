import{_ as n}from"./app.d68f74da.js";import{l as s,m as a,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const t={},e=o(`<p>Storybook\uC758 \uC8FC\uC694 \uC7A5\uC810 \uC911 \uD558\uB098\uB294 Storybook\uC758 UI \uBC0F \uB3D9\uC791\uC744 \uD655\uC7A5\uD558\uB294 \uC560\uB4DC\uC628\uB4E4\uC785\uB2C8\uB2E4. Storybook\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C &quot;\uD544\uC218&quot; \uC560\uB4DC\uC628 \uC138\uD2B8\uB97C \uD568\uAED8 \uC81C\uACF5\uD558\uC5EC \uCD08\uAE30 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4. Storybook \uCF54\uC5B4 \uD300\uC5D0 \uC758\uD574 \uAC1C\uBC1C\uB41C &quot;\uACF5\uC2DD&quot; \uC560\uB4DC\uC628\uBFD0\uB9CC \uC544\uB2C8\uB77C \uB9CE\uC740 \uC11C\uB4DC \uD30C\uD2F0 \uC560\uB4DC\uC628\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><ul><li>Actions</li><li>Backgrounds</li><li>Controls</li><li>Docs</li><li>Highlight</li><li>Measure &amp; outline</li><li>Toolbars &amp; globals</li><li>Viewport</li></ul><h3 id="\u1109\u1165\u11AF\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u110E\u1175" aria-hidden="true">#</a> \uC124\uCE58</h3><p>\uD504\uB85C\uC81D\uD2B8\uC5D0 Storybook\uC744 \uD3EC\uD568\uC2DC\uD0A4\uAE30 \uC704\uD574 npx storybook@latest init\uC744 \uC2E4\uD589\uD588\uB2E4\uBA74, \uCD5C\uC2E0 \uBC84\uC804\uC758 Essentials \uC560\uB4DC\uC628(@storybook/addon-essentials)\uC774 \uC774\uBBF8 \uC124\uCE58\uB418\uC5B4 \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uBBC0\uB85C \uB098\uBA38\uC9C0 \uC139\uC158\uC744 \uAC74\uB108\uB6F0\uACE0 \uC9C4\uD589\uD558\uC154\uB3C4 \uB429\uB2C8\uB2E4.</p><p>\uADF8\uB7EC\uB098 \uAE30\uC874 Storybook \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC5D0\uC15C\uC15C \uC560\uB4DC\uC628\uC744 \uC218\uB3D9\uC73C\uB85C \uC124\uCE58\uD558\uB824\uB294 \uACBD\uC6B0, \uD130\uBBF8\uB110\uC5D0\uC11C \uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC5EC \uC124\uCE58\uD560 \uC218 \uC788\uC5B4\uC694:</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm install @storybook/addon-essentials --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Storybook \uAD6C\uC131 (<code>.storybook/main.js|ts</code>)\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uC5EC \uC5D0\uC15C\uC15C \uC560\uB4DC\uC628\uC744 \uD3EC\uD568\uC2DC\uCF1C \uC8FC\uC138\uC694.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C (\uC608: react-webpack5, vue3-vite) \uB300\uCCB4\uD574\uC8FC\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@storybook/addon-essentials&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u{1F448} \uC560\uB4DC\uC628 essentials \uB4F1\uB85D</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uC124\uC815</h3><p>Essentials\uB294 &quot;\uC81C\uB85C \uC124\uC815&quot;\uC785\uB2C8\uB2E4. \uAD8C\uC7A5 \uAD6C\uC131\uC774 \uAE30\uBCF8\uC801\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4.</p><p>\uAC1C\uBCC4 Essentials \uC560\uB4DC\uC628\uC744 \uC7AC\uAD6C\uC131\uD574\uC57C \uD558\uB294 \uACBD\uC6B0, \uC124\uCE58 \uC9C0\uCE68\uC744 \uB530\uB77C \uC218\uB3D9\uC73C\uB85C \uC124\uCE58\uD558\uACE0 \uC120\uD0DD\uD55C \uBC29\uBC95\uC5D0 \uB530\uB77C Storybook \uAD6C\uC131 \uD30C\uC77C(i.e., .storybook/main.js|ts)\uC5D0 \uB4F1\uB85D\uD558\uACE0 \uD544\uC694\uC5D0 \uB9DE\uAC8C \uAD6C\uC131\uC744 \uC870\uC815\uD558\uC138\uC694. \uC608\uB97C \uB4E4\uBA74:</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm install @storybook/addon-actions --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC544\uB798\uB294 \uBAA8\uB4E0 \uC560\uB4DC\uC628\uC5D0 \uB300\uD55C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC635\uC158\uC744 \uAC16\uCD98 \uAD6C\uC131 \uBC0F \uD45C\uB85C \uC904\uC778 \uC124\uC815 \uB0B4\uC6A9\uC785\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C your-framework\uB97C \uB300\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;@storybook/addon-links&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@storybook/addon-actions&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@storybook/addon-viewport&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;@storybook/addon-docs&#39;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        csfPluginOptions<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        mdxPluginOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
          mdxCompileOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
            remarkPlugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@storybook/addon-controls&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@storybook/addon-backgrounds&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@storybook/addon-toolbars&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@storybook/addon-measure&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@storybook/addon-outline&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook\uB97C \uC2DC\uC791\uD558\uBA74 \uC0AC\uC6A9\uC790 \uC815\uC758 \uAD6C\uC131\uC774 \uAE30\uBCF8 \uAD6C\uC131\uC744 \uB36E\uC5B4\uC4F8 \uAC83\uC785\uB2C8\uB2E4.</p><h3 id="\u110B\u1162\u1103\u1173\u110B\u1169\u11AB-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u1103\u1173\u110B\u1169\u11AB-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A" aria-hidden="true">#</a> \uC560\uB4DC\uC628 \uBE44\uD65C\uC131\uD654</h3><p>\uADFC\uBCF8 \uC560\uB4DC\uC628 \uC911 \uC77C\uBD80\uB97C \uBE44\uD65C\uC131\uD654\uD574\uC57C \uD55C\uB2E4\uBA74 .storybook/main.js \uD30C\uC77C\uC744 \uC218\uC815\uD558\uC5EC \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC5B4, \uBC30\uACBD \uC560\uB4DC\uC628\uC744 \uBE44\uD65C\uC131\uD654\uD558\uB824\uBA74 Storybook \uAD6C\uC131\uC5D0 \uB2E4\uC74C \uBCC0\uACBD\uC744 \uC801\uC6A9\uD558\uBA74 \uB429\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB9DE\uAC8C your-framework\uC744(\uC608: react-webpack5, vue3-vite) \uB300\uCCB4\uD558\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;@storybook/addon-essentials&#39;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        backgrounds<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u{1F448} \uBC30\uACBD \uC560\uB4DC\uC628 \uBE44\uD65C\uC131\uD654</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),p=[e];function i(c,l){return s(),a("div",null,p)}var b=n(t,[["render",i],["__file","index.html.vue"]]);export{b as default};
