import{_ as s}from"./app.63e06a35.js";import{l as a,m as e,C as n,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var t="/assets/Viewport_0.b5801908.mp4";const o={},i=n("p",null,'"Viewport" \uD234\uBC14 \uD56D\uBAA9\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC774\uC57C\uAE30\uAC00 \uB80C\uB354\uB9C1\uB418\uB294 iframe\uC758 \uD06C\uAE30\uB97C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uBC18\uC751\uD615 UI\uB97C \uC27D\uAC8C \uAC1C\uBC1C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.',-1),c=n("video",{autoplay:"",playsinline:"",loop:""},[n("source",{src:t,type:"video/mp4"})],-1),l=p(`<h2 id="\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uC124\uC815</h2><p>&quot;Viewport&quot; \uC560\uB4DC\uC628\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC77C\uB828\uC758 \uD45C\uC900 \uBDF0\uD3EC\uD2B8\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uAE30\uBCF8 \uBDF0\uD3EC\uD2B8\uB97C \uBCC0\uACBD\uD558\uB824\uBA74 .storybook/preview.js \uD30C\uC77C\uC5D0\uC11C global parameters.viewport \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// your-framework\uC744 \uC0AC\uC6A9\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uBC14\uAFD4\uC8FC\uC138\uC694 (\uC608: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    viewport<span class="token operator">:</span> <span class="token punctuation">{</span>
      viewports<span class="token operator">:</span> newViewports<span class="token punctuation">,</span> <span class="token comment">// newViewports\uB294 ViewportMap\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. (\uC544\uB798 \uC608\uC81C \uCC38\uC870)</span>
      defaultViewport<span class="token operator">:</span> <span class="token string">&#39;someDefault&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>viewport \uC804\uC5ED \uBCC0\uC218\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD0A4\uB97C \uAC00\uC9C4 \uAC1D\uCCB4\uB97C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><p>viewports \uAC1D\uCCB4\uC5D0\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD0A4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4:</p><h3 id="\u110C\u1161\u1109\u1166\u1112\u1161\u11AB-\u1103\u1175\u1107\u1161\u110B\u1175\u1109\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1109\u1166\u1112\u1161\u11AB-\u1103\u1175\u1107\u1161\u110B\u1175\u1109\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC790\uC138\uD55C \uB514\uBC14\uC774\uC2A4 \uC124\uC815 \uC0AC\uC6A9\uD558\uAE30</h3><p>\uBDF0\uD3EC\uD2B8 \uC560\uB4DC\uC628\uC5D0\uB294 \uAD6C\uC131 \uC694\uC18C\uB97C \uD14C\uC2A4\uD2B8\uD560 \uB54C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uB514\uBC14\uC774\uC2A4\uB4E4\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798\uC5D0\uB294 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uB514\uBC14\uC774\uC2A4\uC640 \uADF8\uB4E4\uC744 \uC0AC\uC6A9\uD558\uB294 \uC608\uC2DC\uAC00 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB530\uB77C your-framework\uC744 \uD574\uB2F9 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uB300\uCCB4\uD558\uC138\uC694 (\uC608: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">INITIAL_VIEWPORTS</span><span class="token punctuation">,</span> <span class="token constant">MINIMAL_VIEWPORTS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/addon-viewport&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    viewport<span class="token operator">:</span> <span class="token punctuation">{</span>
      viewports<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token constant">INITIAL_VIEWPORTS</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token constant">MINIMAL_VIEWPORTS</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      defaultViewport<span class="token operator">:</span> <span class="token string">&#39;iphone14promax&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1109\u1162\u1105\u1169\u110B\u116E\u11AB-\u1103\u1175\u1107\u1161\u110B\u1175\u1109\u1173-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1162\u1105\u1169\u110B\u116E\u11AB-\u1103\u1175\u1107\u1161\u110B\u1175\u1109\u1173-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC0C8\uB85C\uC6B4 \uB514\uBC14\uC774\uC2A4 \uCD94\uAC00\uD558\uAE30</h3><p>\uD2B9\uC815 \uBDF0\uD3EC\uD2B8\uB098 \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uBDF0\uD3EC\uD2B8 \uBAA9\uB85D\uC774 \uC788\uB294 \uACBD\uC6B0, .storybook/preview.js \uD30C\uC77C\uC744 \uC218\uC815\uD558\uC5EC \uADF8\uB4E4\uC744 \uD3EC\uD568\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> customViewports <span class="token operator">=</span> <span class="token punctuation">{</span>
  kindleFire2<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Kindle Fire 2&#39;</span><span class="token punctuation">,</span>
    styles<span class="token operator">:</span> <span class="token punctuation">{</span>
      width<span class="token operator">:</span> <span class="token string">&#39;600px&#39;</span><span class="token punctuation">,</span>
      height<span class="token operator">:</span> <span class="token string">&#39;963px&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  kindleFireHD<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Kindle Fire HD&#39;</span><span class="token punctuation">,</span>
    styles<span class="token operator">:</span> <span class="token punctuation">{</span>
      width<span class="token operator">:</span> <span class="token string">&#39;533px&#39;</span><span class="token punctuation">,</span>
      height<span class="token operator">:</span> <span class="token string">&#39;801px&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB2E4\uC74C \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC801\uC6A9\uD558\uC5EC \uC2A4\uD1A0\uB9AC\uBD81\uC5D0\uC11C \uC0AC\uC6A9\uD558\uC138\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uD504\uB808\uC784\uC6CC\uD06C \uC774\uB984\uC73C\uB85C your-framework\uC744 \uC6D0\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uBCC0\uACBD\uD558\uC138\uC694 (\uC608: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    viewport<span class="token operator">:</span> <span class="token punctuation">{</span> viewports<span class="token operator">:</span> customViewports <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC2A4\uD1A0\uB9AC\uBD81\uC744 \uC2DC\uC791\uD558\uBA74 \uC0C8\uB85C\uC6B4 \uBDF0\uD3EC\uD2B8\uC640 \uAE30\uAE30\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p><p>\uD544\uC694\uD55C \uACBD\uC6B0 \uC774 \uB450 \uAC00\uC9C0\uB97C \uB2E4\uB978 viewport \uBAA9\uB85D\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uC5B4\uC694.</p><p>\uC608\uB97C \uB4E4\uC5B4, \uC774 \uB450 \uAC00\uC9C0\uB97C \uCD5C\uC18C\uD55C\uC758 viewport \uBAA9\uB85D\uACFC \uD568\uAED8 \uC0AC\uC6A9\uD558\uB824\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD560 \uC218 \uC788\uC5B4\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB9DE\uAC8C your-framework\uC744(\uC608: react, vue3) \uB300\uCCB4\uD558\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">MINIMAL_VIEWPORTS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/addon-viewport&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> customViewports <span class="token operator">=</span> <span class="token punctuation">{</span>
  kindleFire2<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Kindle Fire 2&#39;</span><span class="token punctuation">,</span>
    styles<span class="token operator">:</span> <span class="token punctuation">{</span>
      width<span class="token operator">:</span> <span class="token string">&#39;600px&#39;</span><span class="token punctuation">,</span>
      height<span class="token operator">:</span> <span class="token string">&#39;963px&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  kindleFireHD<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Kindle Fire HD&#39;</span><span class="token punctuation">,</span>
    styles<span class="token operator">:</span> <span class="token punctuation">{</span>
      width<span class="token operator">:</span> <span class="token string">&#39;533px&#39;</span><span class="token punctuation">,</span>
      height<span class="token operator">:</span> <span class="token string">&#39;801px&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    viewport<span class="token operator">:</span> <span class="token punctuation">{</span>
      viewports<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token constant">MINIMAL_VIEWPORTS</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>customViewports<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kindle Fire 2\uC640 Kindle Fire HD \uB450 \uAC1C\uC758 viewport(\uBCF4\uAE30 \uD654\uBA74)\uAC00 MINIMAL_VIEWPORTS\uC5D0 \uBCD1\uD569\uB418\uC5B4 \uB514\uBC14\uC774\uC2A4 \uBAA9\uB85D\uC5D0 \uD3EC\uD568\uB429\uB2C8\uB2E4.</p><h3 id="\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1104\u1169\u1102\u1173\u11AB-\u1109\u1173\u1110\u1169\u1105\u1175\u1107\u1167\u11AF-\u1100\u116E\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1104\u1169\u1102\u1173\u11AB-\u1109\u1173\u1110\u1169\u1105\u1175\u1107\u1167\u11AF-\u1100\u116E\u1109\u1165\u11BC" aria-hidden="true">#</a> \uCEF4\uD3EC\uB10C\uD2B8 \uB610\uB294 \uC2A4\uD1A0\uB9AC\uBCC4 \uAD6C\uC131</h3><p>\uD2B9\uC815 \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C\uB294 \uC804\uC5ED\uC801\uC73C\uB85C \uD2B9\uC815 \uC2DC\uAC01\uC801 \uBDF0\uD3EC\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC2E4\uC6A9\uC801\uC774\uC9C0 \uC54A\uC744 \uC218 \uC788\uC73C\uBA70, \uD574\uB2F9 \uBDF0\uD3EC\uD2B8\uB97C \uAC1C\uBCC4 \uC2A4\uD1A0\uB9AC\uC5D0 \uB9DE\uAC8C \uC870\uC815\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uCEF4\uD3EC\uB10C\uD2B8 \uC218\uC900\uC774\uB098 \uD2B9\uC815 \uC2A4\uD1A0\uB9AC\uC5D0 \uBDF0\uD3EC\uD2B8\uB97C \uD3EC\uD568\uD558\uAE30 \uC704\uD574 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uD1B5\uD574 \uC2A4\uD1A0\uB9AC\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uC138\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">INITIAL_VIEWPORTS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/addon-viewport&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./MyComponent&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u{1F447} Essentials \uC560\uB4DC\uC628\uC758 viewports \uAC1D\uCCB4</span>
    viewport<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u{1F447} \uC0AC\uC6A9\uD558\uACE0 \uC2F6\uC740 \uBDF0\uD3EC\uD2B8</span>
      viewports<span class="token operator">:</span> <span class="token constant">INITIAL_VIEWPORTS</span><span class="token punctuation">,</span>
      <span class="token comment">//\u{1F447} \uC790\uCCB4 \uAE30\uBCF8 \uBDF0\uD3EC\uD2B8</span>
      defaultViewport<span class="token operator">:</span> <span class="token string">&#39;iphone6&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> MyStory<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    viewport<span class="token operator">:</span> <span class="token punctuation">{</span>
      defaultViewport<span class="token operator">:</span> <span class="token string">&#39;iphonex&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u110F\u1175\u1107\u1169\u1103\u1173-\u1103\u1161\u11AB\u110E\u116E\u11A8\u110F\u1175" tabindex="-1"><a class="header-anchor" href="#\u110F\u1175\u1107\u1169\u1103\u1173-\u1103\u1161\u11AB\u110E\u116E\u11A8\u110F\u1175" aria-hidden="true">#</a> \uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4</h3><ul><li>\uC774\uC804 \uBDF0\uD3EC\uD2B8: alt + shift + v</li><li>\uB2E4\uC74C \uBDF0\uD3EC\uD2B8: alt + v</li><li>\uBDF0\uD3EC\uD2B8 \uC7AC\uC124\uC815: alt + control + v</li></ul><p>\uD544\uC694\uD558\uB2E4\uBA74, \uB2E8\uCD95\uD0A4 \uD398\uC774\uC9C0\uC5D0\uC11C \uC218\uC815\uD560 \uC218 \uC788\uC5B4\uC694.</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="\u1111\u1161\u1105\u1161\u1106\u1175\u1110\u1165" tabindex="-1"><a class="header-anchor" href="#\u1111\u1161\u1105\u1161\u1106\u1175\u1110\u1165" aria-hidden="true">#</a> \uD30C\uB77C\uBBF8\uD130</h3><p>\uC774 \uC560\uB4DC\uC628\uC740 viewport \uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uC544\uB798 Storybook\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD30C\uB77C\uBBF8\uD130\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4:</p><h4 id="defaultorientation" tabindex="-1"><a class="header-anchor" href="#defaultorientation" aria-hidden="true">#</a> defaultOrientation</h4><p>\uC720\uD615: <code>portrait</code> | <code>landscape</code></p><p>\uAE30\uBCF8\uC801\uC73C\uB85C <code>portrait</code>\uB85C \uC124\uC815\uB429\uB2C8\uB2E4. \uC774\uB294 \uC774\uC57C\uAE30\uB97C \uBCFC \uB54C \uC0AC\uC6A9\uB418\uB294 \uAE30\uBCF8 \uBC29\uD5A5\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.</p><h4 id="defaultviewport" tabindex="-1"><a class="header-anchor" href="#defaultviewport" aria-hidden="true">#</a> defaultViewport</h4><p>\uD0C0\uC785: \uBB38\uC790\uC5F4</p><p>\uC774 \uC2A4\uD1A0\uB9AC\uB97C \uBCFC \uB54C \uC0AC\uC6A9\uD558\uB294 \uAE30\uBCF8 \uBDF0\uD3EC\uD2B8\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. \uBDF0\uD3EC\uD2B8 \uC624\uBE0C\uC81D\uD2B8\uC758 \uD0A4\uC640 \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4.</p><h4 id="disable" tabindex="-1"><a class="header-anchor" href="#disable" aria-hidden="true">#</a> disable</h4><p>\uD0C0\uC785: boolean</p><p>\uC774 \uC560\uB4DC\uC628\uC758 \uB3D9\uC791\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4. \uC2A4\uD1A0\uB9AC\uBD81 \uC804\uCCB4\uC5D0\uC11C \uC774 \uC560\uB4DC\uC628\uC744 \uBE44\uD65C\uC131\uD654\uD558\uB824\uBA74 \uC560\uB4DC\uC628-\uC5C5\uACC4 \uD45C\uC900 \uB4F1\uB85D \uC2DC \uC774\uB807\uAC8C \uD574\uC57C \uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uC815\uBCF4\uB294 \uC5C5\uACC4 \uD45C\uC900 \uC560\uB4DC\uC628 \uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC138\uC694.</p><p>\uC774 \uB9E4\uAC1C\uBCC0\uC218\uB294 \uB354 \uAD6C\uCCB4\uC801\uC778 \uC218\uC900\uC5D0\uC11C \uC7AC\uC815\uC758\uB97C \uD5C8\uC6A9\uD558\uB294 \uB370 \uAC00\uC7A5 \uC720\uC6A9\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC774 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uD504\uB85C\uC81D\uD2B8 \uC218\uC900\uC5D0\uC11C true\uB85C \uC124\uC815\uB418\uC5B4 \uC788\uB2E4\uBA74, \uBA54\uD0C0(\uCEF4\uD3EC\uB10C\uD2B8) \uB610\uB294 \uC2A4\uD1A0\uB9AC \uC218\uC900\uC5D0\uC11C false\uB85C \uC124\uC815\uD558\uC5EC \uB2E4\uC2DC \uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h4 id="\u1107\u1172\u1111\u1169\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1107\u1172\u1111\u1169\u1110\u1173" aria-hidden="true">#</a> \uBDF0\uD3EC\uD2B8</h4><p>\uC720\uD615:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">styles</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;desktop&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;mobile&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;tablet&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uBDF0\uD3EC\uD2B8\uB97C \uC9C0\uC815\uD558\uC138\uC694. \uD0A4\uB294 \uBDF0\uD3EC\uD2B8\uB97C \uCC38\uC870\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uBA70 \uAC12\uC740 \uD574\uB2F9 \uBDF0\uD3EC\uD2B8\uB97C \uC815\uC758\uD558\uB294 \uAC1D\uCCB4\uC785\uB2C8\uB2E4. \uC704\uC758 \uC0AC\uC6A9 \uC608\uC81C\uB97C \uCC38\uC870\uD558\uC138\uC694. \uB108\uBE44(width)\uC640 \uB192\uC774(height) \uAC12\uC740 \uB2E8\uC704\uB97C \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4. \uC608: <code>320px</code>.</p><h3 id="\u110B\u1175\u11A8\u1109\u1173\u1111\u1169\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11A8\u1109\u1173\u1111\u1169\u1110\u1173" aria-hidden="true">#</a> \uC775\uC2A4\uD3EC\uD2B8</h3><p>\uC774 \uC560\uB4DC\uC628\uC740 Storybook\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC775\uC2A4\uD3EC\uD2B8\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">INITIAL_VIEWPORTS</span><span class="token punctuation">,</span> <span class="token constant">MINIMAL_VIEWPORTS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/addon-viewport&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u110E\u1169\u1100\u1175-\u1107\u1172\u1111\u1169\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u110E\u1169\u1100\u1175-\u1107\u1172\u1111\u1169\u1110\u1173" aria-hidden="true">#</a> \uCD08\uAE30 \uBDF0\uD3EC\uD2B8</h4><p>\uD0C0\uC785: \uC624\uBE0C\uC81D\uD2B8</p><p>\uC704\uC758 \uBAA9\uB85D\uC5D0 \uB098\uC5F4\uB41C \uBDF0\uD3EC\uD2B8 \uC560\uB4DC\uC628\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uAE30\uBCF8 \uBDF0\uD3EC\uD2B8 \uC138\uD2B8\uC785\uB2C8\uB2E4.</p><h4 id="\u110E\u116C\u1109\u1169-\u1107\u1172\u1111\u1169\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u110E\u116C\u1109\u1169-\u1107\u1172\u1111\u1169\u1110\u1173" aria-hidden="true">#</a> \uCD5C\uC18C \uBDF0\uD3EC\uD2B8</h4><p>\uC885\uB958: \uAC1D\uCCB4</p><p>\uBDF0\uD3EC\uD2B8 \uC560\uB4DC\uC628\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uCD5C\uC18C\uD55C\uC758 \uBDF0\uD3EC\uD2B8 \uC138\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC774 \uB098\uC5F4\uB429\uB2C8\uB2E4:</p>`,51),r=[i,c,l];function u(d,k){return a(),e("div",null,r)}var g=s(o,[["render",u],["__file","index.html.vue"]]);export{g as default};
