import{_ as n}from"./app.d68f74da.js";import{l as s,m as a,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const o={},p=e(`<p>\uBD80\uBAA8: main.js|ts \uAD6C\uC131</p><p>\uC720\uD615:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  builder<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> options<span class="token operator">?</span><span class="token operator">:</span> BuilderOptions <span class="token punctuation">}</span><span class="token punctuation">;</span>
  channelOptions<span class="token operator">?</span><span class="token operator">:</span> ChannelOptions<span class="token punctuation">;</span>
  crossOriginIsolated<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disableProjectJson<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disableTelemetry<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disableWebpackDefaults<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disableWhatsNewNotifications<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  enableCrashReports<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  renderer<span class="token operator">?</span><span class="token operator">:</span> RendererName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook\uC758 \uB0B4\uBD80 \uAE30\uB2A5\uC744 \uAD6C\uC131\uD569\uB2C8\uB2E4.</p><h2 id="\u1107\u1175\u11AF\u1103\u1165" tabindex="-1"><a class="header-anchor" href="#\u1107\u1175\u11AF\u1103\u1165" aria-hidden="true">#</a> \uBE4C\uB354</h2><p>\uC720\uD615:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">|</span> <span class="token string">&#39;@storybook/builder-vite&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;@storybook/builder-webpack5&#39;</span>
<span class="token operator">|</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;@storybook/builder-vite&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;@storybook/builder-webpack5&#39;</span><span class="token punctuation">;</span>
    options<span class="token operator">?</span><span class="token operator">:</span> BuilderOptions<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook\uC758 \uBE4C\uB354\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4. Vite \uB610\uB294 Webpack\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9\uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uBCC0\uACBD(\uC608: react-webpack5, vue3-vite)\uC73C\uB85C \uB300\uCCB4</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    builder<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;@storybook/builder-vite&#39;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        viteConfigPath<span class="token operator">:</span> <span class="token string">&#39;../../../vite.config.js&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="channeloptions" tabindex="-1"><a class="header-anchor" href="#channeloptions" aria-hidden="true">#</a> channelOptions</h2><p>Type: ChannelOptions</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">allowClass</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">allowDate</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">allowFunction</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">allowRegExp</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">allowSymbol</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">allowUndefined</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">lazyEval</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">maxDepth</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">space</span><span class="token operator">:</span> number <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook\uC5D0\uC11C \uB9E4\uB2C8\uC800\uC640 \uBBF8\uB9AC\uBCF4\uAE30 \uAC04\uC5D0 \uD1B5\uC2E0\uD558\uB294 \uB370 \uC0AC\uC6A9\uD558\uB294 \uCC44\uB110\uC744 \uAD6C\uC131\uD569\uB2C8\uB2E4.</p><p>\uC77C\uBC18\uC801\uC73C\uB85C \uB450 \uAC00\uC9C0 \uC18D\uC131\uB9CC \uC0AC\uC6A9\uB420 \uAC00\uB2A5\uC131\uC774 \uB192\uC2B5\uB2C8\uB2E4:</p><h3 id="channeloptions-allowfunction" tabindex="-1"><a class="header-anchor" href="#channeloptions-allowfunction" aria-hidden="true">#</a> channelOptions.allowFunction</h3><p>\uC720\uD615: \uBD80\uC6B8 (boolean)</p><p>\uB514\uD3F4\uD2B8: false</p><p>\uCC44\uB110 \uAC04\uC5D0 \uD568\uC218 \uC9C1\uB82C\uD654\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4. \uC774\uB294 \uBCF4\uC548 \uC704\uD5D8\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="channeloptions-maxdepth" tabindex="-1"><a class="header-anchor" href="#channeloptions-maxdepth" aria-hidden="true">#</a> channelOptions.maxDepth</h3><p>\uD0C0\uC785: \uC22B\uC790</p><p>\uAE30\uBCF8\uAC12: 3</p><p>\uCC44\uB110\uC744 \uD1B5\uD574 \uC9C1\uB82C\uD654\uD560 \uC218 \uC788\uB294 \uC911\uCCA9 \uAC1D\uCCB4\uC758 \uCD5C\uB300 \uAE4A\uC774\uC785\uB2C8\uB2E4. \uAC12\uC774 \uD074\uC218\uB85D \uC18D\uB3C4\uAC00 \uB290\uB824\uC9D1\uB2C8\uB2E4.</p><h2 id="crossoriginisolated" tabindex="-1"><a class="header-anchor" href="#crossoriginisolated" aria-hidden="true">#</a> crossOriginIsolated</h2><p>\uC720\uD615: \uBD80\uC6B8\uAC12</p><p>&quot;\uC548\uC804\uD55C \uCEE8\uD14D\uC2A4\uD2B8&quot;\uC5D0\uC11C \uBB38\uC11C\uB97C \uC2E4\uD589\uD558\uB824\uBA74 CORS \uD5E4\uB354\uB97C \uD65C\uC131\uD654\uD558\uC138\uC694. SharedArrayBuffer \uBCF4\uC548 \uC694\uAD6C \uC0AC\uD56D\uC744 \uCC38\uC870\uD574\uC8FC\uC138\uC694.</p><p>\uC774\uB807\uAC8C \uAC1C\uBC1C \uBAA8\uB4DC\uC5D0\uC11C \uD5E4\uB354\uB97C \uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>Cross-Origin-Opener-Policy: same-origin</li><li>Cross-Origin-Embedder-Policy: require-corp</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C Framework\uB97C \uB300\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    crossOriginIsolated<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="disableprojectjson" tabindex="-1"><a class="header-anchor" href="#disableprojectjson" aria-hidden="true">#</a> disableProjectJson</h2><p>\uC720\uD615: \uBD80\uC6B8(boolean)</p><p>project.json \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uB294 \uC791\uC5C5\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4. \uC774 \uD30C\uC77C\uC5D0\uB294 Storybook \uBA54\uD0C0\uB370\uC774\uD130\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uB098\uD0C0\uB0B4\uB294 &quot;your-framework&quot; \uBD80\uBD84\uC744 \uD574\uB2F9 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uB300\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    disableProjectJson<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="disabletelemetry" tabindex="-1"><a class="header-anchor" href="#disabletelemetry" aria-hidden="true">#</a> disableTelemetry</h2><p>\uC720\uD615: boolean</p><p>Storybook\uC758 \uD154\uB808\uBA54\uD2B8\uB9AC \uC218\uC9D1\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uC640 \uD568\uAED8 (\uC608: react-webpack5, vue3-vite) \uB2E4\uC74C\uACFC \uAC19\uC774 \uAD50\uCCB4\uD558\uC2ED\uC2DC\uC624</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    disableTelemetry<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="disablewebpackdefaults" tabindex="-1"><a class="header-anchor" href="#disablewebpackdefaults" aria-hidden="true">#</a> disableWebpackDefaults</h2><p>\uC720\uD615: boolean</p><p>Storybook\uC758 \uAE30\uBCF8 Webpack \uAD6C\uC131\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uB300\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    disableWebpackDefaults<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="disablewhatsnewnotifications" tabindex="-1"><a class="header-anchor" href="#disablewhatsnewnotifications" aria-hidden="true">#</a> disableWhatsNewNotifications</h2><p>\uC720\uD615: \uBD80\uC6B8\uD615</p><p>\uC0C8\uB85C\uC6B4 Storybook \uBC84\uC804 \uBC0F \uC0DD\uD0DC\uACC4 \uC5C5\uB370\uC774\uD2B8(\uC560\uB4DC\uC628, \uCF58\uD150\uCE20 \uB4F1)\uC5D0 \uB300\uD55C UI\uC758 &quot;\uC0C8\uB85C\uC6B4 \uAE30\uB2A5&quot; \uC54C\uB9BC\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C(\uC608: react-webpack5, vue3-vite)\uB85C \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uBC14\uAFD4\uC8FC\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    disableWhatsNewNotifications<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enablecrashreports" tabindex="-1"><a class="header-anchor" href="#enablecrashreports" aria-hidden="true">#</a> enableCrashReports</h2><p>\uC720\uD615: \uBD80\uC6B8(boolean)</p><p>Storybook \uD154\uB808\uBA54\uD2B8\uB9AC\uB85C \uBCF4\uB0B4\uB294 \uCDA9\uB3CC \uBCF4\uACE0\uC11C\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C your-framework\uC744 \uB300\uCCB4\uD558\uC2ED\uC2DC\uC624 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    enableCrashReports<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u{1F448} \uCDA9\uB3CC \uBCF4\uACE0\uC11C\uB97C \uD154\uB808\uBA54\uD2B8\uB9AC \uC774\uBCA4\uD2B8\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1105\u1166\u11AB\u1103\u1165\u1105\u1165" tabindex="-1"><a class="header-anchor" href="#\u1105\u1166\u11AB\u1103\u1165\u1105\u1165" aria-hidden="true">#</a> \uB80C\uB354\uB7EC</h2><p>\uC720\uD615: \uB80C\uB354\uB7EC \uC774\uB984</p>`,50),t=[p];function i(c,r){return s(),a("div",null,t)}var m=n(o,[["render",i],["__file","index.html.vue"]]);export{m as default};
