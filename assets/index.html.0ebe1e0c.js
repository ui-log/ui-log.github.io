import{_ as n}from"./app.63e06a35.js";import{l as s,m as a,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var t="/assets/Storylayout_0.73fe87e3.png";const p={},o=e(`<p>\uB808\uC774\uC544\uC6C3 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC0AC\uC6A9\uD558\uBA74 Storybook\uC758 \uCE94\uBC84\uC2A4 \uD0ED\uC5D0 \uC774\uC57C\uAE30\uAC00 \uBC30\uCE58\uB418\uB294 \uBC29\uC2DD\uC744 \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110C\u1165\u11AB\u110B\u1167\u11A8-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11AB\u110B\u1167\u11A8-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA" aria-hidden="true">#</a> \uC804\uC5ED \uB808\uC774\uC544\uC6C3</h2><p>\uB2E4\uC74C\uACFC \uAC19\uC774 ./storybook/preview.js\uC5D0 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C(\uC608: react, vue3)\uB85C your-framework\uB97C \uB300\uCCB4\uD574\uC8FC\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    layout<span class="token operator">:</span> <span class="token string">&#39;centered&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt="\uC774\uBBF8\uC9C0"></p><p>\uC704\uC758 \uC608\uC2DC\uC5D0\uC11C Storybook\uC740 UI\uC5D0\uC11C \uBAA8\uB4E0 \uC2A4\uD1A0\uB9AC\uB97C \uAC00\uC6B4\uB370 \uC815\uB82C\uD569\uB2C8\uB2E4. \uB808\uC774\uC544\uC6C3\uC740 \uC544\uB798 \uC635\uC158\uB4E4\uC744 \uBC1B\uC2B5\uB2C8\uB2E4:</p><ul><li>centered: \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uCE94\uBC84\uC2A4\uC758 \uC218\uD3C9 \uBC0F \uC218\uC9C1\uC73C\uB85C \uAC00\uC6B4\uB370 \uC815\uB82C</li><li>fullscreen: \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uCE94\uBC84\uC2A4\uC758 \uC804\uCCB4 \uB108\uBE44\uC640 \uB192\uC774\uB85C \uD655\uC7A5</li><li>padded: (\uAE30\uBCF8\uAC12) \uCEF4\uD3EC\uB10C\uD2B8 \uC8FC\uBCC0\uC5D0 \uC5EC\uBD84\uC758 \uD328\uB529 \uCD94\uAC00</li></ul><h2 id="\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA" tabindex="-1"><a class="header-anchor" href="#\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA" aria-hidden="true">#</a> \uCEF4\uD3EC\uB10C\uD2B8 \uB808\uC774\uC544\uC6C3</h2><p>\uC704\uC640 \uAC19\uC774 \uAD6C\uC131 \uC694\uC18C \uC218\uC900\uC5D0\uC11C\uB3C4 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// your-framework\uC744 \uC0AC\uC6A9\uD558\uB294 </span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">storybook</span></span><span class="token operator">/</span>your<span class="token operator">-</span>framework&#39; 

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
  <span class="token comment">// \uB808\uC774\uC544\uC6C3 \uD30C\uB77C\uBBF8\uD130\uB97C \uC804\uCCB4 \uAD6C\uC131 \uC694\uC18C\uC5D0 \uC801\uC6A9\uD569\uB2C8\uB2E4.</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    layout<span class="token operator">:</span> <span class="token string">&#39;centered&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1109\u1173\u1110\u1169\u1105\u1175-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA" tabindex="-1"><a class="header-anchor" href="#\u1109\u1173\u1110\u1169\u1105\u1175-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA" aria-hidden="true">#</a> \uC2A4\uD1A0\uB9AC \uB808\uC774\uC544\uC6C3</h2><p>\uB610\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD2B9\uC815 \uC2A4\uD1A0\uB9AC\uC5D0\uB3C4 \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC5EC\uB7EC\uBD84\uC774 \uC0AC\uC6A9\uD558\uC2DC\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uC774\uB984\uC744 &#39;your-framework&#39; \uC790\uB9AC\uC5D0 \uB123\uC5B4\uC8FC\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> WithLayout<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    layout<span class="token operator">:</span> <span class="token string">&#39;centered&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[o];function i(l,r){return s(),a("div",null,c)}var y=n(p,[["render",i],["__file","index.html.vue"]]);export{y as default};
