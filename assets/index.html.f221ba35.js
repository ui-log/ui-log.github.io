import{_ as n}from"./app.3052dcfb.js";import{l as s,m as a,K as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var p="/assets/Highlight_0.0206ef10.png";const o={},e=t('<p>\uC2A4\uD1A0\uB9AC\uBD81\uC758 \uD558\uC774\uB77C\uC774\uD2B8 \uC560\uB4DC\uC628\uC740 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uB514\uBC84\uAE45\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uB294 \uC720\uC6A9\uD55C \uB3C4\uAD6C\uC785\uB2C8\uB2E4. \uC774 \uC560\uB4DC\uC628\uC744 \uB3C5\uB9BD \uC560\uB4DC\uC628\uC73C\uB85C \uC0AC\uC6A9\uD558\uAC70\uB098 \uC811\uADFC\uC131 \uC560\uB4DC\uC628\uACFC \uAC19\uC740 \uB2E4\uB978 \uC560\uB4DC\uC628\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uB54C \uD2B9\uC815 DOM \uB178\uB4DC\uB97C \uAC15\uC870\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><img src="'+p+`" alt="\uD558\uC774\uB77C\uC774\uD2B8 \uC608\uC2DC"></p><h2 id="dom-\u110B\u116D\u1109\u1169-\u1100\u1161\u11BC\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#dom-\u110B\u116D\u1109\u1169-\u1100\u1161\u11BC\u110C\u1169" aria-hidden="true">#</a> DOM \uC694\uC18C \uAC15\uC870</h2><p>\uC560\uB4DC\uC628\uC744 \uC0AC\uC6A9\uD558\uC5EC DOM \uC694\uC18C\uB97C \uAC15\uC870\uD558\uB824\uBA74 \uC2A4\uD1A0\uB9AC\uB098 \uC560\uB4DC\uC628 \uB0B4\uC5D0\uC11C HIGHLIGHT \uC774\uBCA4\uD2B8\uB97C \uBC1C\uC0DD\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uBCA4\uD2B8 \uD398\uC774\uB85C\uB4DC\uB294 \uAC15\uC870\uD560 \uC694\uC18C\uC640 \uB9E4\uCE58\uB418\uB294 \uC120\uD0DD\uC790 \uBC30\uC5F4\uC774 \uD3EC\uD568\uB41C elements \uC18D\uC131\uC744 \uD560\uB2F9\uD574\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useChannel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/preview-api&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">HIGHLIGHT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/addon-highlight&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./MyComponent&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Highlighted<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span>storyFn<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">useChannel</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">HIGHLIGHT</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        elements<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;h2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.storybook-button&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">storyFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1100\u1161\u11BC\u110C\u1169\u1100\u1161-\u1111\u116D\u1109\u1175\u1103\u116C\u11AB-\u110B\u116D\u1109\u1169-\u110E\u1169\u1100\u1175\u1112\u116A" tabindex="-1"><a class="header-anchor" href="#\u1100\u1161\u11BC\u110C\u1169\u1100\u1161-\u1111\u116D\u1109\u1175\u1103\u116C\u11AB-\u110B\u116D\u1109\u1169-\u110E\u1169\u1100\u1175\u1112\u116A" aria-hidden="true">#</a> \uAC15\uC870\uAC00 \uD45C\uC2DC\uB41C \uC694\uC18C \uCD08\uAE30\uD654</h3><p>\uAE30\uBCF8\uC801\uC73C\uB85C Storybook\uC740 \uC774\uC57C\uAE30 \uAC04 \uC804\uD658 \uC2DC \uC790\uB3D9\uC73C\uB85C \uAC15\uC870\uB41C \uC694\uC18C\uB97C \uC81C\uAC70\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC218\uB3D9\uC73C\uB85C \uC9C0\uC6B0\uB294 \uACBD\uC6B0, \uC774\uC57C\uAE30\uB098 \uC560\uB4DC\uC628 \uB0B4\uBD80\uC5D0\uC11C RESET_HIGHLIGHT \uC774\uBCA4\uD2B8\uB97C \uBC1C\uC0DD\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useChannel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/preview-api&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">HIGHLIGHT</span><span class="token punctuation">,</span> <span class="token constant">RESET_HIGHLIGHT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/addon-highlight&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./MyComponent&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ResetHighlight<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span>storyFn<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">useChannel</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">RESET_HIGHLIGHT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u{1F448} \uC774\uC804\uC5D0 \uAC15\uC870\uB41C \uC694\uC18C \uC81C\uAC70</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">HIGHLIGHT</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        elements<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;header&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;section&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;footer&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">storyFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174" tabindex="-1"><a class="header-anchor" href="#\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174" aria-hidden="true">#</a> \uC2A4\uD0C0\uC77C \uC0AC\uC6A9\uC790 \uC815\uC758</h2><p>\uAE30\uBCF8\uC801\uC73C\uB85C \uC560\uB4DC\uC628\uC740 \uC774\uC57C\uAE30\uC5D0 \uD65C\uC131\uD654\uB41C \uAC15\uC870\uB41C \uC694\uC18C\uC5D0 \uD45C\uC900 \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uD398\uC774\uB85C\uB4DC \uAC1D\uCCB4\uB97C \uD655\uC7A5\uD558\uACE0 \uC0C9\uC0C1 \uBC0F/\uB610\uB294 \uC2A4\uD0C0\uC77C \uC18D\uC131\uC744 \uC81C\uACF5\uD568\uC73C\uB85C\uC368 \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC2A4\uD0C0\uC77C\uC744 \uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useChannel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/preview-api&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">HIGHLIGHT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/addon-highlight&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./MyComponent&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> StyledHighlight<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span>storyFn<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">useChannel</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">HIGHLIGHT</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        elements<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;h2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.storybook-button&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span>
        style<span class="token operator">:</span> <span class="token string">&#39;double&#39;</span><span class="token punctuation">,</span> <span class="token comment">// &#39;dotted&#39; | &#39;dashed&#39; | &#39;solid&#39; | &#39;double&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">storyFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E" aria-hidden="true">#</a> \uB9E4\uAC1C\uBCC0\uC218</h3><p>\uC774 \uC560\uB4DC\uC628\uC740 \uD558\uC774\uB77C\uC774\uD2B8 \uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD558\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB9E4\uAC1C\uBCC0\uC218\uB97C Storybook\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4:</p><h4 id="disable" tabindex="-1"><a class="header-anchor" href="#disable" aria-hidden="true">#</a> disable</h4><p>\uC720\uD615: \uBD88\uB9B0(boolean)</p><p>\uC774 \uC560\uB4DC\uC628\uC758 \uB3D9\uC791\uC744 \uBE44\uD65C\uC131\uD654\uD558\uC138\uC694. \uC804\uCCB4 Storybook\uC5D0\uC11C \uC774 \uC560\uB4DC\uC628\uC744 \uBE44\uD65C\uC131\uD654\uD558\uB824\uBA74 addon-essentials\uC744 \uB4F1\uB85D\uD560 \uB54C \uD574\uC57C\uD569\uB2C8\uB2E4. \uB354 \uB9CE\uC740 \uC815\uBCF4\uB294 essential addon\uC758 \uBB38\uC11C\uB97C \uCC38\uC870\uD574\uC8FC\uC138\uC694.</p><p>\uC774 \uB9E4\uAC1C\uBCC0\uC218\uB294 \uB354 \uAD6C\uCCB4\uC801\uC778 \uC218\uC900\uC5D0\uC11C \uC7AC\uC815\uC758\uB97C \uD5C8\uC6A9\uD558\uB294 \uB370 \uAC00\uC7A5 \uC720\uC6A9\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC774 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uD504\uB85C\uC81D\uD2B8 \uC218\uC900\uC5D0\uC11C true\uB85C \uC124\uC815\uD558\uBA74, \uBA54\uD0C0(\uCEF4\uD3EC\uB10C\uD2B8) \uB610\uB294 \uC2A4\uD1A0\uB9AC \uC218\uC900\uC5D0\uC11C false\uB85C \uC124\uC815\uD558\uC5EC \uB2E4\uC2DC \uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="\u1102\u1162\u1107\u1169\u1102\u1162\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1102\u1162\u1107\u1169\u1102\u1162\u1100\u1175" aria-hidden="true">#</a> \uB0B4\uBCF4\uB0B4\uAE30</h3><p>\uC774 \uC560\uB4DC\uC628\uC740 Storybook\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB0B4\uBCF4\uB0B4\uAE30\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">HIGHLIGHT</span><span class="token punctuation">,</span> <span class="token constant">RESET_HIGHLIGHT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/addon-highlight&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="highlight" tabindex="-1"><a class="header-anchor" href="#highlight" aria-hidden="true">#</a> HIGHLIGHT</h4><p>\uD0C0\uC785: \uBB38\uC790\uC5F4</p><p>DOM \uC694\uC18C\uB97C \uAC15\uC870\uD558\uB294 \uC774\uBCA4\uD2B8\uC785\uB2C8\uB2E4. \uC774\uBCA4\uD2B8 \uD398\uC774\uB85C\uB4DC\uB294 \uAC15\uC870\uD558\uB824\uB294 \uC694\uC18C\uC5D0 \uB9E4\uCE6D\uB418\uB294 \uC120\uD0DD\uAE30 \uBC30\uC5F4\uB85C \uD560\uB2F9\uB41C elements \uC18D\uC131\uC744 \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4. \uC0AC\uC6A9 \uC608\uC2DC\uB294 \uC704\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694.</p><h4 id="reset-highlight" tabindex="-1"><a class="header-anchor" href="#reset-highlight" aria-hidden="true">#</a> RESET_HIGHLIGHT</h4><p>\uC720\uD615: \uBB38\uC790\uC5F4</p><p>\uD558\uC774\uB77C\uC774\uD2B8\uB41C \uC694\uC18C\uC5D0\uC11C \uBAA8\uB4E0 \uD558\uC774\uB77C\uC774\uD2B8\uB97C \uC9C0\uC6B0\uB294 \uC774\uBCA4\uD2B8\uC785\uB2C8\uB2E4. \uC704\uC758 \uC0AC\uC6A9 \uC608\uC2DC\uB97C \uD655\uC778\uD558\uC138\uC694.</p>`,27),c=[e];function i(l,u){return s(),a("div",null,c)}var b=n(o,[["render",i],["__file","index.html.vue"]]);export{b as default};