import{_ as n}from"./app.63e06a35.js";import{l as s,m as a,K as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const p={},o=t(`<p>\uBD80\uBAA8: main.js|ts \uC124\uC815</p><p>\uC720\uD615: string[] | ((config: string[], options: Options) =&gt; string[] | Promise&lt;string[]&gt;)</p><p>\uC2A4\uD1A0\uB9AC \uBBF8\uB9AC\uBCF4\uAE30\uC5D0\uC11C \uC2E4\uD589\uD560 \uCD94\uAC00 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./types&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">previewAnnotations</span><span class="token operator">:</span> StorybookConfig<span class="token punctuation">[</span><span class="token string">&#39;previewAnnotations&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entry <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
  <span class="token operator">...</span>entry<span class="token punctuation">,</span>
  require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;@storybook/nextjs/preview.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function i(c,r){return s(),a("div",null,e)}var g=n(p,[["render",i],["__file","index.html.vue"]]);export{g as default};
