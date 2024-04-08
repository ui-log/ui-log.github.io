import{_ as s}from"./app.a99075bb.js";import{l as n,m as a,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const t={},o=e(`<p>\uBD80\uBAA8: main.js|ts \uAD6C\uC131</p><p>\uC720\uD615: TestBuildConfig</p><p>Storybook\uC758 \uD504\uB85C\uB355\uC158 \uBE4C\uB4DC \uCD9C\uB825\uC744 \uCD5C\uC801\uD654\uD558\uAE30 \uC704\uD55C \uAD6C\uC131 \uC635\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h2><p>\uC885\uB958: TestBuildFlags</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  disableBlocks<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disabledAddons<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  disableMDXEntries<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disableAutoDocs<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disableDocgen<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disableSourcemaps<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disableTreeShaking<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook\uC758 \uD504\uB85C\uB355\uC158 \uBE4C\uB4DC\uB97C \uC131\uB2A5 \uD14C\uC2A4\uD2B8 \uC6A9\uB3C4\uB85C \uAD6C\uC131\uD558\uACE0, \uBE4C\uB4DC\uC5D0\uC11C \uD2B9\uC815 \uAE30\uB2A5\uC744 \uBE44\uD65C\uC131\uD654\uD558\uB294 \uC124\uC815\uC785\uB2C8\uB2E4. build-storybook\uC744 \uC2E4\uD589\uD560 \uB54C \uC774 \uAE30\uB2A5\uC740 --test \uD50C\uB798\uADF8\uB97C \uC124\uC815\uD558\uC5EC \uD65C\uC131\uD654\uB429\uB2C8\uB2E4.</p><h3 id="test-disableblocks" tabindex="-1"><a class="header-anchor" href="#test-disableblocks" aria-hidden="true">#</a> test.disableBlocks</h3><p>\uC885\uB958: \uBD80\uC6B8</p><p>\uBE4C\uB4DC\uC5D0\uC11C @storybook/blocks \uD328\uD0A4\uC9C0\uB97C \uC81C\uC678\uD558\uBA74 Docs \uBE14\uB85D\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC790\uB3D9 \uBB38\uC11C\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C (\uC608: react-webpack5, vue3-vite)\uB85C your-framework\uB97C \uB300\uCCB4\uD558\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token punctuation">{</span>
      disableBlocks<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test-disabledaddons" tabindex="-1"><a class="header-anchor" href="#test-disabledaddons" aria-hidden="true">#</a> test.disabledAddons</h3><p>\uD0C0\uC785: \uBB38\uC790\uC5F4 \uBC30\uC5F4</p><p>\uBE4C\uB4DC \uCD9C\uB825\uC5D0\uC11C \uBE44\uD65C\uC131\uD654\uD560 \uC560\uB4DC\uC628 \uBAA9\uB85D\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C your-framework\uC744 \uB300\uCCB4\uD558\uC2ED\uC2DC\uC624 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;@storybook/addon-links&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@storybook/addon-essentials&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@storybook/addon-interactions&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@storybook/addon-a11y&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token punctuation">{</span>
      disabledAddons<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@storybook/addon-a11y&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test-disablemdxentries" tabindex="-1"><a class="header-anchor" href="#test-disablemdxentries" aria-hidden="true">#</a> test.disableMDXEntries</h3><p>\uC720\uD615: \uBD80\uC6B8</p><p>\uC774 \uC635\uC158\uC744 \uD65C\uC131\uD654\uD558\uBA74 MDX \uD615\uC2DD\uC758 \uC0AC\uC6A9\uC790 \uC791\uC131 \uBB38\uC11C \uD56D\uBAA9\uC774 \uBE4C\uB4DC\uC5D0\uC11C \uC81C\uAC70\uB429\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uAD50\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token punctuation">{</span>
      disableMDXEntries<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test-disableautodocs" tabindex="-1"><a class="header-anchor" href="#test-disableautodocs" aria-hidden="true">#</a> test.disableAutoDocs</h3><p>\uC720\uD615: \uBD80\uC6B8</p><p>autodocs \uAE30\uB2A5\uC73C\uB85C \uC0DD\uC131\uB41C \uC790\uB3D9 \uBB38\uC11C\uAC00 \uBE4C\uB4DC\uC5D0 \uD3EC\uD568\uB418\uC9C0 \uC54A\uB3C4\uB85D \uBC29\uC9C0\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C(\uC608: react-webpack5, vue3-vite)\uB85C your-framework\uC744 \uB300\uCCB4\uD558\uC138\uC694.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token punctuation">{</span>
      disableAutoDocs<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test-disabledocgen" tabindex="-1"><a class="header-anchor" href="#test-disabledocgen" aria-hidden="true">#</a> test.disableDocgen</h3><p>\uC720\uD615: \uBD80\uC6B8</p><p>\uC124\uBA85: \uC9C0\uC6D0\uB418\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uAE30\uBC18\uD55C \uC815\uC801 \uBD84\uC11D \uB3C4\uAD6C \uC911 \uD558\uB098\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC790\uB3D9 argType \uBC0F \uAD6C\uC131 \uC18D\uC131 \uC720\uCD94\uB97C \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C(\uC608: react-webpack5, vue3-vite)\uB85C \uB300\uCCB4\uD558\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token punctuation">{</span>
      disableDocgen<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test-disablesourcemaps" tabindex="-1"><a class="header-anchor" href="#test-disablesourcemaps" aria-hidden="true">#</a> test.disableSourcemaps</h3><p>\uD14C\uC774\uBE14 \uD0DC\uADF8\uB97C Markdown \uD615\uC2DD\uC73C\uB85C \uBCC0\uACBD\uD558\uC138\uC694.</p><p>\uC720\uD615: boolean</p><p>\uBE4C\uB4DC\uB97C \uC704\uD55C \uC18C\uC2A4 \uB9F5 \uC0DD\uC131\uC758 \uAE30\uBCF8 \uB3D9\uC791\uC744 \uC7AC\uC815\uC758\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C &#39;your-framework&#39;\uC744(\uB97C) \uD574\uB2F9 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uB300\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token punctuation">{</span>
      disableSourcemaps<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test-disabletreeshaking" tabindex="-1"><a class="header-anchor" href="#test-disabletreeshaking" aria-hidden="true">#</a> test.disableTreeShaking</h3><p>\uC720\uD615: \uBD80\uC6B8</p><p>\uBE4C\uB4DC\uC5D0\uC11C \uD2B8\uB9AC \uC250\uC774\uD0B9\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C your-framework\uB97C \uAD50\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token punctuation">{</span>
      disableTreeShaking<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),p=[o];function i(c,l){return n(),a("div",null,p)}var m=s(t,[["render",i],["__file","index.html.vue"]]);export{m as default};