import{_ as n}from"./app.63e06a35.js";import{l as s,m as a,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const t={},p=e(`<p>Storybook\uC740 React, Vue, Angular, Web Components, Svelte \uBC0F \uB354 \uB9CE\uC740 \uC6F9 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC9C0\uC6D0\uD558\uAE30 \uC704\uD574 \uC124\uACC4\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uC548\uB0B4\uC11C\uB294 Storybook\uC5D0 \uC0C8\uB85C\uC6B4 \uD504\uB808\uC784\uC6CC\uD06C \uC9C0\uC6D0\uC744 \uCD94\uAC00\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.</p><h2 id="\u1109\u1162\u1105\u1169\u110B\u116E\u11AB-\u1111\u1173\u1105\u1166\u110B\u1175\u11B7\u110B\u116F\u110F\u1173-\u1100\u116E\u110C\u1169-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1162\u1105\u1169\u110B\u116E\u11AB-\u1111\u1173\u1105\u1166\u110B\u1175\u11B7\u110B\u116F\u110F\u1173-\u1100\u116E\u110C\u1169-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uC0C8\uB85C\uC6B4 \uD504\uB808\uC784\uC6CC\uD06C \uAD6C\uC870 \uC124\uC815</h2><p>\uCCAB \uBC88\uC9F8\uB85C \uD574\uC57C \uD560 \uC77C\uC740 \uD504\uB808\uC784\uC6CC\uD06C \uC9C0\uC6D0\uC744 \uC704\uD55C \uAD6C\uC870\uB97C \uBCC4\uB3C4\uC758 \uC800\uC7A5\uC18C\uC5D0 \uB9CC\uB4DC\uB294 \uAC83\uC785\uB2C8\uB2E4.</p><p>\uC800\uD76C\uB294 Storybook \uBAA8\uB178\uB808\uD3EC\uC640 \uB3D9\uC77C\uD55C \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC870\uB97C \uCC44\uD0DD\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4. \uD574\uB2F9 \uAD6C\uC870\uC5D0\uB294 \uD504\uB808\uC784\uC6CC\uD06C \uD328\uD0A4\uC9C0(app/<code>framework</code>)\uC640 \uC608\uC81C \uC571(examples/<code>framework</code>-kitchen-sink)\uACFC \uD544\uC694\uD55C \uB2E4\uB978 \uBB38\uC11C \uBC0F \uC124\uC815\uC774 \uD3EC\uD568\uB429\uB2C8\uB2E4.</p><p>\uC57D\uAC04 \uD544\uC694 \uC774\uC0C1\uC758 \uACC4\uCE35 \uAD6C\uC870\uB97C \uAC00\uC9C0\uACE0 \uC788\uB294 \uAC83\uCC98\uB7FC \uBCF4\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC774 \uAD6C\uC870\uB294 Storybook\uC758 \uBAA8\uB178\uB808\uD3EC\uAC00 \uAD6C\uC131\uB41C \uBC29\uC2DD\uC744 \uBC18\uC601\uD558\uBBC0\uB85C Storybook\uC758 \uB3C4\uAD6C\uB97C \uC7AC\uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC6D0\uD55C\uB2E4\uBA74 \uB098\uC918\uB3C4 Storybook \uBAA8\uB178\uB808\uD3EC\uB85C \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC774\uB3D9\uD558\uB294 \uAC83\uC744 \uB354 \uC27D\uAC8C \uB9CC\uB4E4\uC5B4\uC90D\uB2C8\uB2E4.</p><p>Storybook\uC758 \uB3C4\uAD6C\uB97C \uC7AC\uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4. \uC5EC\uAE30\uC5D0\uC11C \uC2DC\uC791\uD560 \uC218 \uC788\uB294 \uBCF4\uC77C\uB7EC\uD50C\uB808\uC774\uD2B8\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1111\u1173\u1105\u1166\u110B\u1175\u11B7\u110B\u116F\u110F\u1173-\u110B\u1161\u110F\u1175\u1110\u1166\u11A8\u110E\u1165" tabindex="-1"><a class="header-anchor" href="#\u1111\u1173\u1105\u1166\u110B\u1175\u11B7\u110B\u116F\u110F\u1173-\u110B\u1161\u110F\u1175\u1110\u1166\u11A8\u110E\u1165" aria-hidden="true">#</a> \uD504\uB808\uC784\uC6CC\uD06C \uC544\uD0A4\uD14D\uCC98</h2><p>\uC77C\uBC18\uC801\uC73C\uB85C Storybook\uC5D0\uC11C \uC0C8\uB85C\uC6B4 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC9C0\uC6D0\uD558\uB294 \uAC83\uC740 \uC8FC\uB85C \uB450 \uAC00\uC9C0 \uCE21\uBA74\uC73C\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4:</p><ul><li>\uC11C\uBC84 \uAD6C\uC131\uD558\uAE30. \uC2A4\uD1A0\uB9AC\uBD81\uC5D0\uC11C \uC11C\uBC84\uB294 storybook dev \uB610\uB294 storybook build\uB97C \uC2E4\uD589\uD560 \uB54C \uC2E4\uD589\uB418\uB294 \uB178\uB4DC \uD504\uB85C\uC138\uC2A4\uC785\uB2C8\uB2E4. \uC11C\uBC84\uB97C \uAD6C\uC131\uD558\uB294 \uAC83\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uD504\uB808\uC784\uC6CC\uD06C\uBCC4\uB85C babel \uBC0F \uC6F9\uD329\uC744 \uAD6C\uC131\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.</li><li>\uD074\uB77C\uC774\uC5B8\uD2B8 \uAD6C\uC131\uD558\uAE30. \uD074\uB77C\uC774\uC5B8\uD2B8\uB294 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC2E4\uD589\uB418\uB294 \uCF54\uB4DC\uC774\uBA70, \uC774\uB97C \uAD6C\uC131\uD558\uB294 \uAC83\uC740 \uD504\uB808\uC784\uC6CC\uD06C\uBCC4\uB85C \uC2A4\uD1A0\uB9AC \uB80C\uB354\uB9C1 \uD568\uC218\uB97C \uC81C\uACF5\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.</li></ul><h2 id="\u1109\u1165\u1107\u1165-\u1100\u116E\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u1107\u1165-\u1100\u116E\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC11C\uBC84 \uAD6C\uC131\uD558\uAE30</h2><p>\uC2A4\uD1A0\uB9AC\uBD81\uC5D0\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uD30C\uC77C \uB85C\uB529\uC744 \uC704\uD55C babel/\uC6F9\uD329 \uAD6C\uC131\uC778 \uD504\uB9AC\uC14B\uC774\uB77C\uB294 \uAC1C\uB150\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uD504\uB808\uC784\uC6CC\uD06C\uAC00 \uC790\uCCB4 \uD30C\uC77C \uD615\uC2DD(\uC608: &quot;.vue&quot;)\uC744 \uAC00\uC9C0\uACE0 \uC788\uB294 \uACBD\uC6B0, \uB85C\uB4DC \uC2DC\uC5D0 JavaScript \uD30C\uC77C\uB85C \uBCC0\uD658\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uBAA8\uB4E0 \uD504\uB808\uC784\uC6CC\uD06C \uC0AC\uC6A9\uC790\uAC00 \uC774\uB97C \uD544\uC694\uB85C \uD55C\uB2E4\uACE0 \uAC00\uC815\uD55C\uB2E4\uBA74, \uD574\uB2F9 \uAE30\uB2A5\uC744 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4. \uC9C0\uAE08\uAE4C\uC9C0 \uC2A4\uD1A0\uB9AC\uBD81\uC5D0 \uCD94\uAC00\uB41C \uBAA8\uB4E0 \uD504\uB808\uC784\uC6CC\uD06C\uB294 Storybook\uC758 \uD575\uC2EC \uAD6C\uC131\uC774 \uB9E4\uC6B0 \uCD5C\uC18C\uD654\uB418\uC5B4 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC774 \uC791\uC5C5\uC744 \uC218\uD589\uD588\uC2B5\uB2C8\uB2E4.</p><h3 id="\u1111\u1162\u110F\u1175\u110C\u1175-\u1100\u116E\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#\u1111\u1162\u110F\u1175\u110C\u1175-\u1100\u116E\u110C\u1169" aria-hidden="true">#</a> \uD328\uD0A4\uC9C0 \uAD6C\uC870</h3><p>Storybook\uC758 framework preset\uC744 \uCD94\uAC00\uD558\uAE30 \uC804\uC5D0 Storybook\uC758 \uD328\uD0A4\uC9C0 \uAD6C\uC870\uB97C \uC774\uD574\uD558\uB294 \uAC83\uC774 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uAC01 framework\uB294 package.json\uC5D0\uC11C \uB450 \uAC00\uC9C0 \uC2E4\uD589 \uD30C\uC77C\uC744 \uB178\uCD9C\uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;storybook&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./bin/index.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build-storybook&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./bin/build.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB7EC\uD55C \uC2A4\uD06C\uB9BD\uD2B8\uB294 @storybook/core/server\uC5D0 \uC635\uC158 \uAC1D\uCCB4\uB97C \uC804\uB2EC\uD558\uBA70, \uC774 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB294 Storybook\uC758 framework-independent \uCF54\uB4DC\uB97C \uCD94\uC0C1\uD654\uD569\uB2C8\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC5B4, storybook dev\uB85C \uAC1C\uBC1C \uC11C\uBC84\uB97C \uC2DC\uC791\uD558\uB294 \uBCF4\uC77C\uB7EC\uD50C\uB808\uC774\uD2B8\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> buildDev <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/core/server&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> options <span class="token keyword">from</span> <span class="token string">&#39;./options&#39;</span><span class="token punctuation">;</span>

<span class="token function">buildDev</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB530\uB77C\uC11C \uD504\uB808\uC784\uC6CC\uD06C \uD504\uB9AC\uC14B\uC744 \uCD94\uAC00\uD558\uB294 \uBCF8\uC9C8\uC740 \uADF8 \uC635\uC158 \uAC1D\uCCB4\uB97C \uCC44\uC6B0\uB294 \uAC83\uBFD0\uC785\uB2C8\uB2E4.</p><h3 id="\u1109\u1165\u1107\u1165-\u110B\u1169\u11B8\u1109\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u1107\u1165-\u110B\u1169\u11B8\u1109\u1167\u11AB" aria-hidden="true">#</a> \uC11C\uBC84 \uC635\uC158</h3><p>\uC704\uC5D0\uC11C \uC124\uBA85\uD55C \uB300\uB85C, \uC11C\uBC84 \uC635\uC158 \uAC1D\uCCB4\uB294 \uC11C\uBC84\uB97C \uAD6C\uC131\uD558\uB294 \uC911\uC694\uD55C \uC791\uC5C5\uC744 \uD569\uB2C8\uB2E4.</p><p>@storybook/vue\uC758 \uC635\uC158 \uC815\uC758\uB97C \uC0B4\uD3B4\uBD05\uC2DC\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;read-pkg-up&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  packageJson<span class="token operator">:</span> <span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">{</span> cwd<span class="token operator">:</span> __dirname <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>packageJson<span class="token punctuation">,</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span>
  frameworkPresets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;./framework-preset-vue.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>framework \uC635\uC158\uC758 \uAC12(\uC989, &#39;vue&#39;)\uC740 \uC560\uB4DC\uC628\uC5D0 \uC804\uB2EC\uB418\uC5B4 \uD2B9\uC815 \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uC218 \uC788\uAC8C \uD569\uB2C8\uB2E4.</p><p>\uC774 \uD30C\uC77C\uC758 \uBCF8\uC9C8\uC740 framework \uD504\uB9AC\uC14B\uC778\uB370, \uC774\uB294 \uD45C\uC900 Storybook \uD504\uB9AC\uC14B\uC785\uB2C8\uB2E4. Storybook \uBAA8\uB178 \uB808\uD3EC\uC9C0\uD1A0\uB9AC\uC5D0\uC11C framework \uD328\uD0A4\uC9C0\uB4E4\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uC608: React, Vue, Web Components). \uC774\uACF3\uC5D0\uC11C framework\uBCC4 \uC0AC\uC6A9\uC790 \uC815\uC758 \uB0B4\uC6A9\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uB2F9\uC2E0\uC758 \uC0AC\uC6A9\uC790 \uC815\uC758 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uAC1C\uBC1C\uD558\uB294 \uB3D9\uC548 Storybook\uC5D0\uC11C \uC720\uC9C0 \uAD00\uB9AC\uB418\uC9C0 \uC54A\uB294 \uACBD\uC6B0 frameworkPath \uD0A4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC704\uCE58 \uD30C\uC77C\uC758 \uACBD\uB85C\uB97C \uC9C0\uC815\uD560 \uC218 \uC788\uC5B4\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;read-pkg-up&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  packageJson<span class="token operator">:</span> <span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">{</span> cwd<span class="token operator">:</span> __dirname <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>packageJson<span class="token punctuation">,</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;my-framework&#39;</span><span class="token punctuation">,</span>
  frameworkPath<span class="token operator">:</span> <span class="token string">&#39;@my-framework/storybook&#39;</span><span class="token punctuation">,</span>
  frameworkPresets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;./framework-preset-my-framework.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>frameworkPath\uC5D0 \uC0C1\uB300 \uACBD\uB85C\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uC5B4\uC694. \uB2E8, \uC774\uB4E4\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C Storybook \uAD6C\uC131 \uB514\uB809\uD1A0\uB9AC(\uC989, .storybook)\uC5D0\uC11C \uD574\uACB0\uB428\uC744 \uC78A\uC9C0 \uB9C8\uC138\uC694.</p><p>frameworkPath\uAC00 \uB2F9\uC2E0\uC758 \uD504\uB808\uC784\uC6CC\uD06C \uC571 \uB0B4\uC758 dist/client/index.js \uD30C\uC77C\uB85C \uB05D\uB098\uB3C4\uB85D \uD574\uC8FC\uC138\uC694.</p><h2 id="\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173-\u1100\u116E\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173-\u1100\u116E\u1109\u1165\u11BC" aria-hidden="true">#</a> \uD074\uB77C\uC774\uC5B8\uD2B8 \uAD6C\uC131</h2><p>\uD074\uB77C\uC774\uC5B8\uD2B8\uB97C \uAD6C\uC131\uD558\uB824\uBA74 \uD504\uB808\uC784\uC6CC\uD06C\uBCC4 \uB80C\uB354 \uD568\uC218\uB97C \uC81C\uACF5\uD574\uC57C \uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC5D0 \uB4E4\uC5B4\uAC00\uAE30 \uC804\uC5D0 \uC0AC\uC6A9\uC790\uAC00 \uC791\uC131\uD55C \uC2A4\uD1A0\uB9AC\uAC00 \uD654\uBA74\uC5D0 \uB80C\uB354\uB418\uB294 \uBC29\uC2DD\uC744 \uC774\uD574\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4.</p><h3 id="\u1105\u1166\u11AB\u1103\u1165-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u1100\u1162\u11A8\u110E\u1166" tabindex="-1"><a class="header-anchor" href="#\u1105\u1166\u11AB\u1103\u1165-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u1100\u1162\u11A8\u110E\u1166" aria-hidden="true">#</a> \uB80C\uB354 \uAC00\uB2A5\uD55C \uAC1D\uCCB4</h3><p>Storybook \uC2A4\uD1A0\uB9AC\uB294 &quot;\uB80C\uB354 \uAC00\uB2A5\uD55C \uAC1D\uCCB4&quot;\uB97C \uBC18\uD658\uD558\uB294 ES6 \uAC1D\uCCB4\uC785\uB2C8\uB2E4.</p><p>\uB2E4\uC74C\uC758 React \uC2A4\uD1A0\uB9AC\uB97C \uC0B4\uD3B4\uBCF4\uC138\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Sample <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>Button label<span class="token operator">=</span><span class="token string">&quot;hello button&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uACBD\uC6B0, \uB80C\uB354\uB9C1 \uAC00\uB2A5\uD55C \uAC1D\uCCB4\uB294 React element\uC778 <code>Button .../</code> \uC785\uB2C8\uB2E4.</p><p>\uB300\uBD80\uBD84\uC758 \uB2E4\uB978 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C\uB294 \uB80C\uB354\uB9C1 \uAC00\uB2A5\uD55C \uAC1D\uCCB4\uAC00 \uC0AC\uC2E4 \uC77C\uBC18 JavaScript \uAC1D\uCCB4\uC778 \uAC83\uC774 \uC77C\uBC18\uC801\uC785\uB2C8\uB2E4.</p><p>\uB2E4\uC74C\uC758 \uAC00\uC0C1 \uC608\uC2DC\uB97C \uC0B4\uD3B4\uBCF4\uC138\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// your-framework \uC774\uB984\uC73C\uB85C \uD574\uB2F9\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uC774\uB984\uACFC \uBCC0\uACBD\uD558\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Sample<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    template<span class="token operator">:</span> <span class="token string">&#39;&lt;button :label=label /&gt;&#39;</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">{</span>
      label<span class="token operator">:</span> <span class="token string">&#39;hello button&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 &quot;\uB80C\uB354\uB9C1 \uAC00\uB2A5\uD55C \uAC1D\uCCB4&quot;\uC758 \uB514\uC790\uC778\uC740 \uD504\uB808\uC784\uC6CC\uD06C\uBCC4\uC774\uBA70, \uC774 \uC774\uB514\uC5C4\uACFC \uCD5C\uB300\uD55C \uC77C\uCE58\uD558\uB294 \uAC83\uC774 \uC774\uC0C1\uC801\uC774\uB2E4.</p><h3 id="\u1105\u1166\u11AB\u1103\u1165-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#\u1105\u1166\u11AB\u1103\u1165-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> \uB80C\uB354 \uD568\uC218</h3><p>\uD504\uB808\uC784\uC6CC\uD06C\uC758 \uB80C\uB354 \uAE30\uB2A5\uC740 \uB80C\uB354\uB9C1 \uAC00\uB2A5\uD55C \uAC1D\uCCB4\uB97C DOM \uB178\uB4DC\uB85C \uBCC0\uD658\uD558\uB294 \uC5ED\uD560\uC744 \uB9E1\uC2B5\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uB2E4\uC74C\uACFC \uAC19\uC740 \uD615\uD0DC\uC785\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">renderMain</span><span class="token punctuation">(</span><span class="token punctuation">{</span> storyFn <span class="token punctuation">}</span><span class="token operator">:</span> RenderMainArgs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> storyObj <span class="token operator">=</span> <span class="token function">storyFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>storyObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  rootElement<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1111\u1162\u110F\u1175\u110C\u1175-\u1100\u116E\u110C\u1169-1" tabindex="-1"><a class="header-anchor" href="#\u1111\u1162\u110F\u1175\u110C\u1175-\u1100\u116E\u110C\u1169-1" aria-hidden="true">#</a> \uD328\uD0A4\uC9C0 \uAD6C\uC870</h3><p>\uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21\uC5D0\uC11C \uC911\uC694\uD55C \uD30C\uC77C\uC740 src/client/preview.js \uC785\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> start <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/preview-api&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&#39;./globals&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> render <span class="token keyword">from</span> <span class="token string">&#39;./render&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token function">start</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// the boilerplate code</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC77C\uBC18\uC801\uC73C\uB85C globals \uD30C\uC77C\uC740 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uCF54\uB4DC(\uC608: \uC560\uB4DC\uC628\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uB370\uCF54\uB808\uC774\uD130)\uAC00 \uC5B4\uB5A4 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778\uC9C0 \uC774\uD574\uD560 \uD544\uC694\uAC00 \uC788\uC744 \uB54C \uCC38\uC870\uD560 \uC218 \uC788\uB294 \uB2E8\uC77C \uC804\uC5ED \uBCC0\uC218\uB97C \uC124\uC815\uD569\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> global <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/global&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> window<span class="token operator">:</span> globalWindow <span class="token punctuation">}</span> <span class="token operator">=</span> global<span class="token punctuation">;</span>

globalWindow<span class="token punctuation">.</span><span class="token constant">STORYBOOK_ENV</span> <span class="token operator">=</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>start \uD568\uC218\uB294 Storybook\uC758 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB3C5\uB9BD\uC801\uC778 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21(\uBE0C\uB77C\uC6B0\uC800) \uCF54\uB4DC\uB97C \uCD94\uC0C1\uD654\uD558\uBA70 \uC704\uC5D0\uC11C \uC815\uC758\uD55C render \uD568\uC218\uB97C \uCDE8\uD569\uB2C8\uB2E4. render \uD568\uC218\uC758 \uC608\uB294 Storybook \uBAA8\uB178 \uC800\uC7A5\uC18C\uC758 React, Vue, Angular, Web Components\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.</p>`,48),o=[p];function c(i,l){return s(),a("div",null,o)}var b=n(t,[["render",c],["__file","index.html.vue"]]);export{b as default};
