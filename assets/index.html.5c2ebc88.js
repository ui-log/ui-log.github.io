import{_ as s}from"./app.a99075bb.js";import{l as n,m as a,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var p="/assets/Markdown_0.9b91df61.png";const t={},o=e('<p>Markdown \uBE14\uB85D\uC744 \uC0AC\uC6A9\uD558\uBA74 MDX \uD30C\uC77C\uC5D0 \uC77C\uBC18 \uB9C8\uD06C\uB2E4\uC6B4\uC744 \uAC00\uC838\uC640 \uD3EC\uD568\uD560 \uC218 \uC788\uC5B4\uC694.</p><p><img src="'+p+`" alt="Markdown_0"></p><p>\uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uAC00\uC838\uC62C \uB54C\uB294 \uAC00\uC838\uC624\uB294 \uACBD\uB85C\uC5D0 ?raw \uC811\uBBF8\uC0AC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uCF58\uD150\uCE20\uAC00 \uADF8\uB300\uB85C \uAC00\uC838\uC640\uC9C0\uACE0 \uD3C9\uAC00\uB418\uC9C0 \uC54A\uB3C4\uB85D \uD574\uC57C \uD574\uC694:</p><h1 id="\u1107\u1165\u1110\u1173\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1107\u1165\u1110\u1173\u11AB" aria-hidden="true">#</a> \uBC84\uD2BC</h1><p>\uC0AC\uC6A9\uC790 \uC0C1\uD638\uC791\uC6A9\uC744 \uC704\uD55C \uAE30\uBCF8 UI \uAD6C\uC131 \uC694\uC18C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@storybook/design-system&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC774\uB807\uAC8C \uD558\uC9C0 \uB9C8\uC2DC\uACE0, \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4</span>
<span class="token keyword">import</span> ReadMe <span class="token keyword">from</span> <span class="token string">&#39;./README.md&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \uC774\uB807\uAC8C \uD558\uC138\uC694, \uC791\uB3D9\uD569\uB2C8\uB2E4</span>
<span class="token keyword">import</span> ReadMe <span class="token keyword">from</span> <span class="token string">&#39;./README.md?raw&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Markdown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/blocks&#39;</span><span class="token punctuation">;</span>

# \uD5E4\uB354

<span class="token operator">&lt;</span>Markdown<span class="token operator">&gt;</span><span class="token punctuation">{</span>ReadMe<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Markdown<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1106\u1161\u110F\u1173\u1103\u1161\u110B\u116E\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1106\u1161\u110F\u1173\u1103\u1161\u110B\u116E\u11AB" aria-hidden="true">#</a> \uB9C8\uD06C\uB2E4\uC6B4</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Markdown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/blocks&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uB9C8\uD06C\uB2E4\uC6B4\uC740 \uB2E4\uC74C \uC18D\uC131\uACFC \uD568\uAED8 \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4:\`\`\`</p><h3 id="\u110C\u1161\u1109\u1175\u11A8-\u110B\u116D\u1109\u1169" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1109\u1175\u11A8-\u110B\u116D\u1109\u1169" aria-hidden="true">#</a> \uC790\uC2DD \uC694\uC18C</h3><p>\uC720\uD615: \uBB38\uC790\uC5F4</p><p>\uD574\uC11D\uD558\uACE0 \uD45C\uC2DC\uD560 \uB9C8\uD06C\uB2E4\uC6B4 \uD615\uC2DD\uC758 \uBB38\uC790\uC5F4\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><h3 id="\u110B\u1169\u11B8\u1109\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110B\u1169\u11B8\u1109\u1167\u11AB" aria-hidden="true">#</a> \uC635\uC158</h3><p>\uB9C8\uD06C\uB2E4\uC6B4\uC744 JSX\uB85C \uBCC0\uD658\uD558\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0 \uC804\uB2EC\uB418\uB294 \uC635\uC158\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.</p><h2 id="\u110C\u1175\u11A8\u110C\u1165\u11B8-\u1106\u1161\u110F\u1173\u1103\u1161\u110B\u116E\u11AB\u110B\u1173\u11AF-\u1100\u1161\u110C\u1167\u110B\u1169\u110C\u1175-\u110B\u1161\u11AD\u1102\u1173\u11AB-\u110B\u1175\u110B\u1172\u1102\u1173\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u110C\u1175\u11A8\u110C\u1165\u11B8-\u1106\u1161\u110F\u1173\u1103\u1161\u110B\u116E\u11AB\u110B\u1173\u11AF-\u1100\u1161\u110C\u1167\u110B\u1169\u110C\u1175-\u110B\u1161\u11AD\u1102\u1173\u11AB-\u110B\u1175\u110B\u1172\u1102\u1173\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161\u110B\u116D" aria-hidden="true">#</a> \uC9C1\uC811 \uB9C8\uD06C\uB2E4\uC6B4\uC744 \uAC00\uC838\uC624\uC9C0 \uC54A\uB294 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?</h2><p>\uC21C\uC218\uD558\uAC8C \uAE30\uC220\uC801\uC778 \uCE21\uBA74\uC5D0\uC11C, \uC6B0\uB9AC\uB294 \uC774\uB807\uAC8C MDX \uD30C\uC77C\uC5D0 \uAC00\uC838\uC628 \uB9C8\uD06C\uB2E4\uC6B4\uC744 \uC9C1\uC811 \uD3EC\uD568\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> ReadMe <span class="token keyword">from</span> <span class="token string">&#39;./README.md&#39;</span><span class="token punctuation">;</span>

# \uC81C\uBAA9

<span class="token punctuation">{</span>ReadMe<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uADF8\uB7EC\uB098 \uC77C\uBC18 \uB9C8\uD06C\uB2E4\uC6B4\uACFC MDX2 \uC0AC\uC774\uC5D0\uB294 \uC791\uC740 \uAD6C\uBB38 \uCC28\uC774\uAC00 \uC788\uC2B5\uB2C8\uB2E4. MDX2\uB294 \uB354 \uC5C4\uACA9\uD558\uBA70 \uD2B9\uC815 \uCF58\uD150\uCE20\uB97C JSX \uD45C\uD604\uC2DD\uC73C\uB85C \uD574\uC11D\uD569\uB2C8\uB2E4. \uB2E4\uC74C\uC740 \uC644\uBCBD\uD788 \uC720\uD6A8\uD55C \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC758 \uC608\uC2DC\uC774\uBA70, \uC774\uB97C MDX2\uAC00 \uC9C1\uC811 \uCC98\uB9AC\uD558\uBA74 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span> \uC77C\uBC18 \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC5D0\uC11C\uB294 \uC720\uD6A8\uD558\uC9C0\uB9CC<span class="token punctuation">,</span> <span class="token constant">MDX2</span>\uB294 \uC774\uB97C \uD45C\uD604\uC2DD\uC73C\uB85C \uD3C9\uAC00\uD558\uB824\uACE0 \uD560 \uAC83\uC785\uB2C8\uB2E4 <span class="token punctuation">}</span>

<span class="token operator">&lt;</span>\uC774\uAC83 \uB610\uD55C \uC720\uD6A8\uD569\uB2C8\uB2E4<span class="token punctuation">.</span> \uADF8\uB7EC\uB098 <span class="token constant">MDX2</span>\uB294 \uC774\uB97C <span class="token constant">JSX</span> \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC778\uC2DD\uD569\uB2C8\uB2E4 <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB610\uD55C, MDX2\uB294 \uC0C8 \uC904\uC5D0 \uC788\uB294 \uBAA8\uB4E0 \uBB38\uC790\uC5F4\uC744 p \uD0DC\uADF8\uB098 \uBE44\uC2B7\uD55C \uD0DC\uADF8\uB85C \uAC10\uC2F8\uBBC0\uB85C, \uC77C\uBC18 .md \uD30C\uC77C\uACFC .mdx \uD30C\uC77C \uC0AC\uC774\uC5D0 \uCF58\uD150\uCE20\uAC00 \uB2E4\uB974\uAC8C \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
  \uC77C\uBD80 \uD14D\uC2A4\uD2B8
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

\uC704\uC758 \uC608\uC2DC\uB294 \uC77C\uBC18 \uB9C8\uD06C\uB2E4\uC6B4\uC5D0\uC11C \uADF8\uB300\uB85C \uC720\uC9C0\uB418\uC9C0\uB9CC<span class="token punctuation">,</span> <span class="token constant">MDX2</span>\uB294 \uC774\uB97C \uCEF4\uD30C\uC77C\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uB9CC\uB4ED\uB2C8\uB2E4<span class="token operator">:</span>

# \uC81C\uBAA9

<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\uC77C\uBD80 \uD14D\uC2A4\uD2B8<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),i=[o];function r(l,c){return n(),a("div",null,i)}var g=s(t,[["render",r],["__file","index.html.vue"]]);export{g as default};
