import{_ as s}from"./app.3052dcfb.js";import{l as a,m as n,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var t="/assets/Story_0.a37d3d1a.png";const o={},p=e('<p>\uC2A4\uD1A0\uB9AC(\uCEF4\uD3EC\uB10C\uD2B8 \uD14C\uC2A4\uD2B8)\uB294 Storybook\uC758 \uAE30\uBCF8\uC801\uC778 \uAD6C\uC131 \uC694\uC18C\uC785\uB2C8\uB2E4.</p><p>Storybook Docs\uC5D0\uC11C\uB294 MDX \uD30C\uC77C\uC758 \uCEE8\uD14D\uC2A4\uD2B8 \uB0B4\uC5D0\uC11C \uBAA8\uB4E0 \uC8FC\uC11D(\uB9E4\uAC1C\uBCC0\uC218, args, \uB85C\uB354, \uB370\uCF54\uB808\uC774\uD130, play \uD568\uC218)\uAC00 \uC801\uC6A9\uB41C CSF \uD30C\uC77C\uC758 \uC5B4\uB5A4 \uC774\uC57C\uAE30\uB4E0 \uB80C\uB354\uB9C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><img src="'+t+`" alt="Story_0"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Story <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/blocks&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">&#39;./Button.stories&#39;</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>Story <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">.</span>Primary<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u110B\u1175\u110B\u1163\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u110B\u1163\u1100\u1175" aria-hidden="true">#</a> \uC774\uC57C\uAE30</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Story <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/blocks&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="autoplay" tabindex="-1"><a class="header-anchor" href="#autoplay" aria-hidden="true">#</a> autoplay</h3><p>\uD0C0\uC785: \uBD88\uB9AC\uC5B8</p><p>\uAE30\uBCF8\uAC12: parameters.docs.story.autoplay</p><p>\uC774\uC57C\uAE30\uC758 \uC7AC\uC0DD \uD568\uC218\uAC00 \uC2E4\uD589\uB418\uB294\uC9C0 \uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.</p><p>\uBB38\uC11C \uD56D\uBAA9\uC5D0 \uBAA8\uB4E0 \uC774\uC57C\uAE30\uAC00 \uB3D9\uC2DC\uC5D0 \uB80C\uB354\uB9C1\uB418\uAE30 \uB54C\uBB38\uC5D0, \uC7AC\uC0DD \uAE30\uB2A5\uC740 \uC11C\uB85C \uC0C1\uD638 \uC791\uC6A9\uD560 \uC218 \uC788\uB294 \uC784\uC758\uC758 \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uC608: \uD3EC\uCEE4\uC2A4 \uD6D4\uCE58\uAE30 \uB610\uB294 \uD654\uBA74 \uC2A4\uD06C\uB864). \uC774\uB7EC\uD55C \uC774\uC720\uB85C, \uAE30\uBCF8\uC801\uC73C\uB85C \uC774\uC57C\uAE30\uB294 \uBB38\uC11C \uBAA8\uB4DC\uC5D0\uC11C \uC7AC\uC0DD \uD568\uC218\uB97C \uC2E4\uD589\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p><p>\uADF8\uB7EC\uB098 \uC7AC\uC0DD \uD568\uC218\uAC00 \uBB38\uC11C\uC5D0\uC11C \uC2E4\uD589\uD574\uB3C4 &quot;\uC548\uC804\uD558\uB2E4&quot;\uACE0 \uD310\uB2E8\uB41C\uB2E4\uBA74, \uC774 \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC790\uB3D9\uC73C\uB85C \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="\u1102\u1169\u11C1\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1102\u1169\u11C1\u110B\u1175" aria-hidden="true">#</a> \uB192\uC774</h3><p>\uC720\uD615: \uBB38\uC790\uC5F4</p><p>\uAE30\uBCF8\uAC12: parameters.docs.story.height</p><p>iframe\uC5D0\uC11C \uC774\uC57C\uAE30\uB97C \uADF8\uB9B4 \uB54C \uB610\uB294 \uC778\uB77C\uC778\uC73C\uB85C \uC774\uC57C\uAE30\uB97C \uB80C\uB354\uB9C1\uD560 \uB54C \uCD5C\uC18C \uB192\uC774\uB97C \uC124\uC815\uD569\uB2C8\uB2E4 (iframe\uC758 \uACBD\uC6B0 \uC2E4\uC81C \uB192\uC774\uC785\uB2C8\uB2E4). \uC774\uB294 iframe\uC758 \uACBD\uC6B0 parameters.docs.story.iframeHeight\uB97C \uC7AC\uC815\uC758\uD569\uB2C8\uB2E4.</p><h3 id="\u110B\u1175\u11AB\u1105\u1161\u110B\u1175\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11AB\u1105\u1161\u110B\u1175\u11AB" aria-hidden="true">#</a> \uC778\uB77C\uC778</h3><p>\uC720\uD615: \uBD80\uC6B8</p><p>\uAE30\uBCF8\uAC12: parameters.docs.story.inline \uB610\uB294 true (\uC9C0\uC6D0\uB418\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uACBD\uC6B0)</p><p>\uC774\uC57C\uAE30\uAC00 \uC778\uB77C\uC778\uC73C\uB85C \uB80C\uB354\uB9C1\uB420\uC9C0 (\uB2E4\uB978 \uBB38\uC11C \uB0B4\uC6A9\uACFC \uB3D9\uC77C\uD55C \uBE0C\uB77C\uC6B0\uC800 \uD504\uB808\uC784\uC5D0) \uC544\uB2C8\uBA74 iframe\uC5D0 \uD45C\uC2DC\uB420\uC9C0 \uACB0\uC815\uD569\uB2C8\uB2E4.</p><h3 id="\u1106\u1166\u1110\u1161" tabindex="-1"><a class="header-anchor" href="#\u1106\u1166\u1110\u1161" aria-hidden="true">#</a> \uBA54\uD0C0</h3><p>\uC720\uD615: CSF \uD30C\uC77C \uB0B4\uBCF4\uB0B4\uAE30</p><p>\uC774\uC57C\uAE30\uAC00 \uC5F0\uAD00\uB41C CSF \uD30C\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.</p><p>Meta\uB97C \uD1B5\uD574 MDX \uD30C\uC77C\uC5D0 \uCCA8\uBD80\uD558\uC9C0 \uC54A\uC740 CSF \uD30C\uC77C\uC5D0\uC11C \uC774\uC57C\uAE30\uB97C \uB80C\uB354\uB9C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. meta \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uC5EC CSF \uD30C\uC77C\uC5D0\uC11C \uB0B4\uBCF4\uB0B8 \uC804\uCCB4 \uC138\uD2B8\uB97C \uC804\uB2EC\uD558\uBA74 \uB429\uB2C8\uB2E4 (\uAE30\uBCF8 \uB0B4\uBCF4\uB0B4\uAE30\uAC00 \uC544\uB2D9\uB2C8\uB2E4!).</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Story <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/blocks&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">&#39;./Button.stories&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> HeaderStories <span class="token keyword">from</span> <span class="token string">&#39;./Header.stories&#39;</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token punctuation">{</span><span class="token comment">/* \uC774 MDX \uD30C\uC77C\uC740 \uB300\uBD80\uBD84 Button\uC5D0 \uAD00\uB828\uB418\uC5B4 \uC788\uC9C0\uB9CC Header \uC2A4\uD1A0\uB9AC\uB3C4 \uB80C\uB354\uB9C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4 */</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>Story <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>HeaderStories<span class="token punctuation">.</span>LoggedIn<span class="token punctuation">}</span> meta<span class="token operator">=</span><span class="token punctuation">{</span>HeaderStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="of" tabindex="-1"><a class="header-anchor" href="#of" aria-hidden="true">#</a> of</h3><p>\uC720\uD615: \uC2A4\uD1A0\uB9AC \uB0B4\uBCF4\uB0B4\uAE30</p><p>Story \uBE14\uB85D\uC5D0 \uC758\uD574 \uB80C\uB354\uB9C1\uB418\uB294 \uC2A4\uD1A0\uB9AC\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. of\uAC00 \uC815\uC758\uB418\uC9C0 \uC54A\uC558\uACE0 MDX \uD30C\uC77C\uC774 \uCCA8\uBD80\uB41C \uACBD\uC6B0, \uAE30\uBCF8(\uCCAB \uBC88\uC9F8) \uC2A4\uD1A0\uB9AC\uAC00 \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4.</p>`,28),r=[p];function i(c,l){return a(),n("div",null,r)}var y=s(o,[["render",i],["__file","index.html.vue"]]);export{y as default};
