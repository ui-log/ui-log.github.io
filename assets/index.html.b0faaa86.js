import{_ as s}from"./app.3052dcfb.js";import{l as n,m as a,K as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const p={},o=t(`<p>\uAD6C\uC131 \uC694\uC18C\uB294 \uC885\uC885 \uC0AC\uC6A9\uC790\uAC00 \uAE30\uB300\uD558\uB294 \uB300\uB85C \uB80C\uB354\uB9C1\uB418\uAE30 \uC704\uD574 \uC774\uBBF8\uC9C0, \uBE44\uB514\uC624, \uAE00\uAF34 \uBC0F \uAE30\uD0C0 \uC5D0\uC14B\uC5D0 \uC758\uC874\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC5D0\uC14B\uC744 \uC774\uC57C\uAE30 \uD30C\uC77C\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC740 \uC5EC\uB7EC \uAC00\uC9C0\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="\u110B\u1175\u110B\u1163\u1100\u1175\u110B\u1166-\u110B\u1166\u1109\u1166\u11BA-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u110B\u1163\u1100\u1175\u110B\u1166-\u110B\u1166\u1109\u1166\u11BA-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" aria-hidden="true">#</a> \uC774\uC57C\uAE30\uC5D0 \uC5D0\uC14B \uAC00\uC838\uC624\uAE30</h3><p>\uBBF8\uB514\uC5B4 \uC5D0\uC14B\uC744 \uAC00\uC838\uC624\uB294 \uAC83\uC740 \uAC04\uB2E8\uD569\uB2C8\uB2E4. \uAE30\uBCF8 \uC124\uC815\uC73C\uB85C \uC791\uB3D9\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC0AC\uC6A9\uC790 \uC815\uC758 \uC6F9\uD329 \uAD6C\uC131\uC744 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 \uD544\uC694\uD55C \uD30C\uC77C\uC744 \uCC98\uB9AC\uD558\uAE30 \uC704\uD574 \uD30C\uC77C \uB85C\uB354\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p>\uC774\uD6C4\uC5D0\uB294 \uC774\uC57C\uAE30\uC5D0\uC11C \uC5B4\uB5A4 \uC5D0\uC14B\uC774\uB4E0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> imageFile <span class="token keyword">from</span> <span class="token string">&#39;./static/image.png&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./MyComponent&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token punctuation">{</span>
  src<span class="token operator">:</span> imageFile<span class="token punctuation">,</span>
  alt<span class="token operator">:</span> <span class="token string">&#39;my image&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> WithAnImage<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>image<span class="token punctuation">.</span>src<span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token punctuation">{</span>image<span class="token punctuation">.</span>alt<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="storybook-configuration\u110B\u1173\u11AF-\u1110\u1169\u11BC\u1112\u1162-\u110C\u1165\u11BC\u110C\u1165\u11A8-\u1111\u1161\u110B\u1175\u11AF-\u110C\u1166\u1100\u1169\u11BC" tabindex="-1"><a class="header-anchor" href="#storybook-configuration\u110B\u1173\u11AF-\u1110\u1169\u11BC\u1112\u1162-\u110C\u1165\u11BC\u110C\u1165\u11A8-\u1111\u1161\u110B\u1175\u11AF-\u110C\u1166\u1100\u1169\u11BC" aria-hidden="true">#</a> Storybook Configuration\uC744 \uD1B5\uD574 \uC815\uC801 \uD30C\uC77C \uC81C\uACF5</h3><p>Storybook\uC744 \uD1B5\uD574 \uC815\uC801 \uD30C\uC77C\uC744 \uC81C\uACF5\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uB85C\uB4DC\uC5D0 \uD544\uC694\uD55C \uC790\uC0B0\uC744 \uD56D\uC0C1 \uAC00\uC9C0\uACE0 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB85C\uACE0, \uAE00\uAF34 \uBC0F \uC544\uC774\uCF58\uACFC \uAC19\uC774 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC790\uC8FC \uC0AC\uC6A9\uD558\uB294 \uC790\uC0B0\uC5D0 \uB300\uD574 \uC774 \uAE30\uC220\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4.</p><p>Storybook\uC744 \uC2DC\uC791\uD560 \uB54C \uC815\uC801 \uD30C\uC77C\uC774 \uC788\uB294 \uB514\uB809\uD130\uB9AC(\uB610\uB294 \uB514\uB809\uD130\uB9AC \uBAA9\uB85D)\uB97C \uAD6C\uC131\uD558\uC138\uC694. \uC815\uC801Dirs \uAD6C\uC131 \uC694\uC18C\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC8FC\uC694 Storybook \uAD6C\uC131 \uD30C\uC77C(.storybook/main.js|ts \uB4F1)\uC5D0\uC11C \uB514\uB809\uD130\uB9AC\uB97C \uC9C0\uC815\uD558\uC138\uC694:\`\`\`</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9\uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C (\uC608: react-webpack5, vue3-vite)\uB85C table \uD0DC\uADF8\uB97C Markdown \uD615\uC2DD\uC73C\uB85C \uBCC0\uACBD\uD558\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../public&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//\u{1F448} Storybook\uC5D0\uC11C \uC815\uC801 \uC790\uC0B0 \uD3F4\uB354\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC5EC\uAE30\uC11C ../public\uC740 \uC815\uC801 \uB514\uB809\uD1A0\uB9AC\uC785\uB2C8\uB2E4. \uC774\uC81C \uCEF4\uD3EC\uB10C\uD2B8 \uB610\uB294 \uC2A4\uD1A0\uB9AC\uC5D0\uC11C \uC774\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./MyComponent&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// &quot;public&quot; \uB514\uB809\uD1A0\uB9AC\uC5D0 image.png\uAC00 \uC788\uB294 \uAC83\uC73C\uB85C \uAC00\uC815\uD569\uB2C8\uB2E4.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> WithAnImage<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;/image.png&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;my image&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD558\uB098\uC758 \uB514\uB809\uD1A0\uB9AC \uB300\uC2E0 \uACF5\uBC31 \uC5C6\uC774 \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C \uB514\uB809\uD1A0\uB9AC \uBAA9\uB85D\uC744 \uC804\uB2EC\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.\`\`\`</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB530\uB77C framework\uB97C react-webpack5, vue3-vite \uB4F1\uC73C\uB85C \uBC14\uAFB8\uC138\uC694.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../public&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../static&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB610\uB294 \uB514\uB809\uD130\uB9AC\uB97C \uC815\uC758\uD558\uB294 \uAD6C\uC131 \uAC1D\uCCB4\uB97C \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC5B4\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB530\uB77C framework\uB97C react-webpack5, vue3-vite \uB4F1\uC73C\uB85C \uBC14\uAFB8\uC138\uC694.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> from<span class="token operator">:</span> <span class="token string">&#39;../my-custom-assets/images&#39;</span><span class="token punctuation">,</span> to<span class="token operator">:</span> <span class="token string">&#39;/assets&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cdn\u110B\u1166\u1109\u1165-\u110C\u1161\u1109\u1161\u11AB-\u110E\u1161\u11B7\u110C\u1169\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#cdn\u110B\u1166\u1109\u1165-\u110C\u1161\u1109\u1161\u11AB-\u110E\u1161\u11B7\u110C\u1169\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> CDN\uC5D0\uC11C \uC790\uC0B0 \uCC38\uC870\uD558\uAE30</h3><p>\uC628\uB77C\uC778 CDN\uC5D0 \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD558\uACE0 \uD574\uB2F9 \uD30C\uC77C\uC744 \uCC38\uC870\uD574\uC8FC\uC138\uC694. \uC774 \uC608\uC2DC\uC5D0\uC11C\uB294 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uC774\uBBF8\uC9C0 \uC11C\uBE44\uC2A4\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./MyComponent&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> WithAnImage<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">!</span><span class="token punctuation">[</span>My <span class="token constant">CDN</span> placeholder<span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>storybook<span class="token punctuation">.</span>js<span class="token punctuation">.</span>org<span class="token operator">/</span>images<span class="token operator">/</span>placeholders<span class="token operator">/</span>350x150<span class="token punctuation">.</span>png<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u110C\u1165\u11AF\u1103\u1162-\u1100\u1167\u11BC\u1105\u1169\u110B\u116A-\u1109\u1161\u11BC\u1103\u1162-\u1100\u1167\u11BC\u1105\u1169" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11AF\u1103\u1162-\u1100\u1167\u11BC\u1105\u1169\u110B\u116A-\u1109\u1161\u11BC\u1103\u1162-\u1100\u1167\u11BC\u1105\u1169" aria-hidden="true">#</a> \uC808\uB300 \uACBD\uB85C\uC640 \uC0C1\uB300 \uACBD\uB85C</h3><p>\uAC00\uB054\uC529, Storybook\uC744 https://example.com/storybook \uACFC \uAC19\uC740 \uD558\uC704 \uACBD\uB85C\uC5D0 \uBC30\uD3EC\uD558\uACE0 \uC2F6\uC744 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC774 \uACBD\uC6B0\uC5D0\uB294 \uBAA8\uB4E0 \uC774\uBBF8\uC9C0\uC640 \uBBF8\uB514\uC5B4 \uD30C\uC77C\uC744 \uC0C1\uB300 \uACBD\uB85C\uB85C \uAC00\uC838\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uBE0C\uB77C\uC6B0\uC800\uAC00 \uD574\uB2F9 \uD30C\uC77C\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</p><p>\uC815\uC801 \uCF58\uD150\uCE20\uB97C \uAC00\uC838\uC640\uC11C \uB85C\uB4DC\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC790\uB3D9\uC73C\uB85C \uCC98\uB9AC\uB418\uBBC0\uB85C \uB530\uB85C \uD560 \uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p><p>Storybook\uACFC \uD568\uAED8 \uC815\uC801 \uB514\uB809\uD1A0\uB9AC\uC5D0 \uC5D0\uC14B\uC744 \uC81C\uACF5\uD558\uB294 \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uB97C \uB85C\uB4DC\uD558\uAE30 \uC704\uD574 \uC0C1\uB300 \uACBD\uB85C\uB97C \uC0AC\uC6A9\uD558\uAC70\uB098 base \uC694\uC18C\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.</p><h3 id="\u1109\u1173\u1110\u1169\u1105\u1175\u110B\u1166\u1109\u1165-\u1111\u1169\u11AB\u1110\u1173-\u110E\u1161\u11B7\u110C\u1169\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1173\u1110\u1169\u1105\u1175\u110B\u1166\u1109\u1165-\u1111\u1169\u11AB\u1110\u1173-\u110E\u1161\u11B7\u110C\u1169\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC2A4\uD1A0\uB9AC\uC5D0\uC11C \uD3F0\uD2B8 \uCC38\uC870\uD558\uAE30</h3><p>Storybook\uC744 \uC815\uC801 \uD3F4\uB354\uC5D0\uC11C \uC5D0\uC14B\uC744 \uC81C\uACF5\uD558\uB3C4\uB85D \uAD6C\uC131\uD55C \uD6C4\uC5D0 Storybook\uC5D0\uC11C \uD574\uB2F9 \uC5D0\uC14B\uC744 \uCC38\uC870\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC774\uC57C\uAE30\uC5D0 \uC0AC\uC6A9\uC790 \uC815\uC758 \uAE00\uAF34\uC744 \uCC38\uC870\uD558\uACE0 \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 \uAD6C\uC131 \uB514\uB809\uD1A0\uB9AC (\uC608: .storybook) \uB0B4\uC5D0 preview-head.html \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uACE0 <code>link</code> \uD0DC\uADF8\uB97C \uCD94\uAC00\uD558\uC5EC \uAE00\uAF34\uC744 \uCC38\uC870\uD558\uBA74 \uB429\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uC815\uC801 \uB514\uB809\uD1A0\uB9AC \uB610\uB294 \uC778\uD130\uB137\uC5D0\uC11C \uC81C\uACF5\uB418\uB294 \uC815\uC801 \uD30C\uC77C \uAC00\uC838\uC624\uAE30 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uC608<span class="token operator">:</span> <span class="token string">&#39;main.js|ts&#39;</span>\uB294 staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../public&#39;</span><span class="token punctuation">]</span>\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC73C\uBA70 \uAE00\uAF34\uC740 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">public</span><span class="token template-punctuation string">\`</span></span> \uB514\uB809\uD1A0\uB9AC \uB0B4\uC758 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">fonts</span><span class="token template-punctuation string">\`</span></span> \uB514\uB809\uD1A0\uB9AC\uC5D0 \uC788\uC2B5\uB2C8\uB2E4<span class="token punctuation">.</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;preload&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;/fonts/my-font.woff2&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uB610\uB294 \uC0AC\uC6A9\uC790 \uC815\uC758 head<span class="token operator">-</span>tag JavaScript\uB97C \uB85C\uB4DC\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4<span class="token operator">:</span> <span class="token operator">--</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://use.typekit.net/xxxyyy.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    Typekit<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),e=[o];function c(l,i){return n(),a("div",null,e)}var y=s(p,[["render",c],["__file","index.html.vue"]]);export{y as default};