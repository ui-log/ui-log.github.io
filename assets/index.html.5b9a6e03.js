import{_ as s}from"./app.3052dcfb.js";import{l as a,m as n,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const o={},t=e(`<p>Source \uBE14\uB85D\uC740 \uC18C\uC2A4 \uCF54\uB4DC \uC870\uAC01\uC744 \uC9C1\uC811 \uB80C\uB354\uB9C1\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Source <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/blocks&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">&#39;./Button.stories&#39;</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>Source <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">.</span>Primary<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Source <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/blocks&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uCF54\uB4DC</h3><p>\uD0C0\uC785: \uBB38\uC790\uC5F4</p><p>\uAE30\uBCF8\uAC12: parameters.docs.source.code</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Source <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/blocks&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">&#39;./Button.stories&#39;</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>Source code<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">const thisIsCustomSource = true;
if (isSyntaxHighlighted) {
  console.log(&#39;syntax highlighting is working&#39;);
}</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dark" tabindex="-1"><a class="header-anchor" href="#dark" aria-hidden="true">#</a> dark</h3><p>Type: boolean</p><p>Default: parameters.docs.source.dark</p><p>\uC2A4\uB2C8\uD3AB\uC774 \uB2E4\uD06C \uBAA8\uB4DC\uB85C \uB80C\uB354\uB9C1\uB418\uB294\uC9C0 \uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.</p><h3 id="excludedecorators" tabindex="-1"><a class="header-anchor" href="#excludedecorators" aria-hidden="true">#</a> excludeDecorators</h3><p>\uC720\uD615: boolean</p><p>\uAE30\uBCF8: parameters.docs.source.excludeDecorators</p><p>\uB370\uCF54\uB808\uC774\uD130\uAC00 \uC18C\uC2A4 \uCF54\uB4DC \uC2A4\uB2C8\uD3AB\uC5D0 \uB80C\uB354\uB9C1\uB418\uB294\uC9C0 \uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.</p><h3 id="\u1112\u1167\u11BC\u1109\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1112\u1167\u11BC\u1109\u1175\u11A8" aria-hidden="true">#</a> \uD615\uC2DD</h3><p>\uC720\uD615: \uBD80\uC6B8 | <code>dedent</code> | BuiltInParserName</p><p>\uAE30\uBCF8\uAC12: parameters.docs.source.format \uB610\uB294 true</p><p>\uC18C\uC2A4 \uCF54\uB4DC\uC5D0 \uC0AC\uC6A9\uB41C \uD615\uC2DD \uC9C0\uC815\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. true \uBC0F <code>dedent</code>\uB294 \uBAA8\uB4E0 \uC5EC\uBD84\uC758 \uB4E4\uC5EC\uC4F0\uAE30\uB97C \uC81C\uAC70\uD558\uB294 \uB3D9\uC77C\uD55C \uD6A8\uACFC\uB97C \uC90D\uB2C8\uB2E4. \uBAA8\uB4E0 \uC720\uD6A8\uD55C prettier \uAD6C\uBB38 \uBD84\uC11D\uAE30 \uC774\uB984\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.</p><h3 id="\u110B\u1165\u11AB\u110B\u1165" tabindex="-1"><a class="header-anchor" href="#\u110B\u1165\u11AB\u110B\u1165" aria-hidden="true">#</a> \uC5B8\uC5B4</h3><p>\uC720\uD615:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;jsextra&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;jsx&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;json&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;yml&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bash&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;css&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;html&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;tsx&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;typescript&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;graphql&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uAE30\uBCF8\uAC12: parameters.docs.source.language \uB610\uB294 <code>jsx</code></p><p>\uAD6C\uBB38 \uAC15\uC870\uC5D0 \uC0AC\uC6A9\uD560 \uC5B8\uC5B4\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.</p><h3 id="of" tabindex="-1"><a class="header-anchor" href="#of" aria-hidden="true">#</a> of</h3><p>\uD0C0\uC785: \uC774\uC57C\uAE30 \uB0B4\uBCF4\uB0B4\uAE30</p><p>\uC774\uC57C\uAE30\uC758 \uC18C\uC2A4\uB97C \uB80C\uB354\uB9C1\uD558\uB294 \uAC83\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.</p><h3 id="\u1107\u1167\u11AB\u1112\u116A\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1107\u1167\u11AB\u1112\u116A\u11AB" aria-hidden="true">#</a> \uBCC0\uD658</h3><p>\uD0C0\uC785: (\uCF54\uB4DC: \uBB38\uC790\uC5F4, \uC774\uC57C\uAE30\uCEE8\uD14D\uC2A4\uD2B8: \uC774\uC57C\uAE30\uCEE8\uD14D\uC2A4\uD2B8) = \uBB38\uC790\uC5F4</p><p>\uAE30\uBCF8\uAC12: parameters.docs.source.transform</p><p>\uB80C\uB354\uB9C1\uB418\uAE30 \uC804\uC5D0 \uC18C\uC2A4\uB97C \uB3D9\uC801\uC73C\uB85C \uBCC0\uD658\uD558\uB294 \uD568\uC218\uC774\uBA70, \uC6D0\uBCF8 \uC18C\uC2A4 \uBC0F \uD544\uC694\uD55C \uC774\uC57C\uAE30 \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uAE30\uBC18\uC73C\uB85C\uD569\uB2C8\uB2E4. \uBC18\uD658\uB41C \uBB38\uC790\uC5F4\uC740 \uADF8\uB300\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4. code \uBC0F transform\uC774 \uBAA8\uB450 \uC9C0\uC815\uB41C \uACBD\uC6B0 transform\uC740 \uBB34\uC2DC\uB429\uB2C8\uB2E4.</p><h3 id="\u110B\u1172\u1112\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110B\u1172\u1112\u1167\u11BC" aria-hidden="true">#</a> \uC720\uD615</h3><p>\uC720\uD615: <code>\uC790\uB3D9</code> | <code>\uCF54\uB4DC</code> | <code>\uB3D9\uC801</code></p><p>\uAE30\uBCF8\uAC12: parameters.docs.source.type \uB610\uB294 <code>auto</code></p><p>\uC18C\uC2A4 \uCF54\uB4DC\uAC00 \uB80C\uB354\uB9C1\uB418\uB294 \uBC29\uC2DD\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.</p><ul><li>auto: \uC774 \uAC12\uC740 \uB3D9\uC801\uC73C\uB85C \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. \uC774\uB294 \uC2A4\uD1A0\uB9AC\uC758 \uB80C\uB354 \uD568\uC218\uAC00 args \uC785\uB825\uC744 \uD5C8\uC6A9\uD558\uACE0 \uB3D9\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8 \uB41C arg \uAC12\uC744 \uC9C0\uC6D0\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC0AC\uC6A9\uD560 \uACBD\uC6B0\uB9CC \uD574\uB2F9\uB429\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 code\uC640 \uB3D9\uC77C\uD569\uB2C8\uB2E4.</li><li>code: code prop\uC758 \uAC12\uC744 \uB80C\uB354\uB9C1\uD558\uBA70, \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uC815\uC801 \uC2A4\uD1A0\uB9AC \uC18C\uC2A4\uB97C \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4.</li><li>dynamic: \uB3D9\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB41C arg \uAC12\uC73C\uB85C \uC2A4\uD1A0\uB9AC \uC18C\uC2A4\uB97C \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4.</li></ul>`,37),p=[t];function r(c,i){return a(),n("div",null,p)}var v=s(o,[["render",r],["__file","index.html.vue"]]);export{v as default};
