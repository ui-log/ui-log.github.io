import{_ as n}from"./app.a99075bb.js";import{l as a,m as s,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var o="/assets/InstallStorybook_0.b2b97b93.png";const t={},i=e(`<p>Storybook\uC744 \uC0AC\uC6A9\uD558\uBA74 React \uBC0F Vite\uB85C \uAD6C\uCD95\uB41C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 UI \uAD6C\uC131 \uC694\uC18C\uB97C \uACA9\uB9AC\uD558\uC5EC \uAC1C\uBC1C\uD558\uACE0 \uD14C\uC2A4\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Storybook\uC740 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB0B4\uC6A9\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4:</p><ul><li>\u{1F3CE}\uFE0F \uC131\uB2A5\uC744 \uC704\uD574 \uBBF8\uB9AC \uBC88\uB4E4\uB9C1</li><li>\u{1FA84} \uAD6C\uC131\uC774 \uD544\uC694 \uC5C6\uC74C</li><li>\u{1F4AB} \uB4F1\uB4F1!</li></ul><h2 id="\u110B\u116D\u1100\u116E-\u1109\u1161\u1112\u1161\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110B\u116D\u1100\u116E-\u1109\u1161\u1112\u1161\u11BC" aria-hidden="true">#</a> \uC694\uAD6C \uC0AC\uD56D</h2><ul><li>React \u2265 16.8</li><li>Vite \u2265 4.0</li><li>Storybook \u2265 8.0</li></ul><h2 id="\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC2DC\uC791\uD558\uAE30</h2><h3 id="storybook\u110B\u1175-\u110B\u1165\u11B9\u1102\u1173\u11AB-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173\u110B\u1166\u1109\u1165" tabindex="-1"><a class="header-anchor" href="#storybook\u110B\u1175-\u110B\u1165\u11B9\u1102\u1173\u11AB-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173\u110B\u1166\u1109\u1165" aria-hidden="true">#</a> Storybook\uC774 \uC5C6\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C</h3><p>React \uD504\uB85C\uC81D\uD2B8\uC758 \uB8E8\uD2B8 \uB514\uB809\uD1A0\uB9AC\uC5D0\uC11C \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC2E4\uD589\uD55C \uD6C4 \uC548\uB0B4\uC5D0 \uB530\uB974\uC138\uC694:</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npx storybook@latest init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Storybook \uC2DC\uC791\uD558\uAE30\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uC138\uC694.</p><h3 id="storybook\u110B\u1175-\u1111\u1169\u1112\u1161\u11B7\u1103\u116C\u11AB-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173\u110B\u1166\u1109\u1165" tabindex="-1"><a class="header-anchor" href="#storybook\u110B\u1175-\u1111\u1169\u1112\u1161\u11B7\u1103\u116C\u11AB-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173\u110B\u1166\u1109\u1165" aria-hidden="true">#</a> Storybook\uC774 \uD3EC\uD568\uB41C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C</h3><p>\uC774 \uD504\uB808\uC784\uC6CC\uD06C\uB294 Storybook 7+\uC640 \uD568\uAED8 \uC791\uB3D9\uD558\uB3C4\uB85D \uC124\uACC4\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uBBF8 v7\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC9C0 \uC54A\uB2E4\uBA74 \uB2E4\uC74C \uBA85\uB839\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uC138\uC694:</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npx storybook@latest upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u110C\u1161\u1103\u1169\u11BC-\u110B\u1175\u1100\u116A\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1103\u1169\u11BC-\u110B\u1175\u1100\u116A\u11AB" aria-hidden="true">#</a> \uC790\uB3D9 \uC774\uAD00</h4><p>\uC704\uC758 \uC5C5\uADF8\uB808\uC774\uB4DC \uBA85\uB839\uC744 \uC2E4\uD589\uD560 \uB54C @storybook/react-vite\uB85C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uB77C\uB294 \uD504\uB86C\uD504\uD2B8\uAC00 \uD45C\uC2DC\uB420 \uAC83\uC785\uB2C8\uB2E4. \uC790\uB3D9 \uC774\uAD00\uC774 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC791\uB3D9\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uC218\uB3D9 \uC774\uAD00\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.</p><h4 id="\u1109\u116E\u1103\u1169\u11BC-\u110B\u1175\u1100\u116A\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1109\u116E\u1103\u1169\u11BC-\u110B\u1175\u1100\u116A\u11AB" aria-hidden="true">#</a> \uC218\uB3D9 \uC774\uAD00</h4><p>\uBA3C\uC800 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC124\uCE58\uD558\uC2ED\uC2DC\uC624:</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm install --save-dev @storybook/react-vite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uADF8\uB7F0 \uB2E4\uC74C, .storybook/main.js|ts \uD30C\uC77C\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uC5EC framework \uC18D\uC131\uC744 \uBCC0\uACBD\uD558\uC138\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@storybook/react-vite&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// framework: &#39;@storybook/react-webpack5&#39;, \u{1F448} \uC774 \uBD80\uBD84 \uC0AD\uC81C</span>
  framework<span class="token operator">:</span> <span class="token string">&quot;@storybook/react-vite&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u{1F448} \uC774 \uBD80\uBD84 \uCD94\uAC00</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1109\u1165\u11AF\u110C\u1165\u11BC-\u1106\u1161\u1107\u1165\u11B8\u1109\u1161-\u1109\u1175\u11AF\u1112\u1162\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u110C\u1165\u11BC-\u1106\u1161\u1107\u1165\u11B8\u1109\u1161-\u1109\u1175\u11AF\u1112\u1162\u11BC" aria-hidden="true">#</a> \uC124\uC815 \uB9C8\uBC95\uC0AC \uC2E4\uD589</h2><p>\uB9CC\uC57D \uBAA8\uB4E0 \uAC83\uC774 \uC21C\uC870\uB86D\uAC8C \uC9C4\uD589\uB41C\uB2E4\uBA74, \uC2A4\uD1A0\uB9AC\uBD81\uC744 \uC2DC\uC791\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uB294 \uC124\uC815 \uB9C8\uBC95\uC0AC\uB97C \uBCFC \uC218 \uC788\uC744 \uAC81\uB2C8\uB2E4. \uC774 \uB9C8\uBC95\uC0AC\uB294 \uC8FC\uC694 \uAC1C\uB150\uACFC \uAE30\uB2A5\uC744 \uC18C\uAC1C\uD574\uC8FC\uBA70 UI\uC758 \uAD6C\uC131 \uBC29\uBC95, \uCCAB \uBC88\uC9F8 \uC2A4\uD1A0\uB9AC \uC791\uC131 \uBC29\uBC95, \uADF8\uB9AC\uACE0 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uB2E4\uC591\uD55C \uC785\uB825\uC5D0 \uB300\uD574 \uC5B4\uB5BB\uAC8C \uBC18\uC751\uD558\uB294\uC9C0\uB97C \uD14C\uC2A4\uD2B8\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD574\uC90D\uB2C8\uB2E4.</p><p><img src="`+o+`" alt="\uC774\uBBF8\uC9C0"></p><p>\uB9CC\uC57D \uB9C8\uBC95\uC0AC\uB97C \uAC74\uB108\uB6F0\uC5C8\uB2E4\uBA74, Storybook \uC778\uC2A4\uD134\uC2A4 URL\uC5D0 ?path=/onboarding \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uB97C \uCD94\uAC00\uD558\uC5EC \uC5B8\uC81C\uB4E0 \uB2E4\uC2DC \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uC608\uC81C \uC2A4\uD1A0\uB9AC\uAC00 \uC5EC\uC804\uD788 \uC81C\uACF5\uB418\uB294 \uC0C1\uD0DC\uC5EC\uC57C \uD569\uB2C8\uB2E4.</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="\u110B\u1169\u11B8\u1109\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110B\u1169\u11B8\u1109\u1167\u11AB" aria-hidden="true">#</a> \uC635\uC158</h3><p>\uD544\uC694 \uC2DC \uCD94\uAC00 \uAD6C\uC131\uC744 \uC704\uD574 \uC635\uC158 \uAC1D\uCCB4\uB97C \uC804\uB2EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@storybook/react-vite&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">config</span><span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">framework</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;@storybook/react-vite&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u1107\u1175\u11AF\u1103\u1165" tabindex="-1"><a class="header-anchor" href="#\u1107\u1175\u11AF\u1103\u1165" aria-hidden="true">#</a> \uBE4C\uB354</h4><p>\uC720\uD615: \uB808\uCF54\uB4DC<code>\uBB38\uC790\uC5F4, \uBAA8\uB450</code></p><p>\uD504\uB808\uC784\uC6CC\uD06C \uBE4C\uB354\uB97C \uC704\uD55C \uAD6C\uC131 \uC635\uC158\uC785\uB2C8\uB2E4. \uD574\uB2F9 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC635\uC158\uC740 Vite \uBE4C\uB354 \uBB38\uC11C\uC5D0\uC11C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>`,30),r=[i];function p(l,c){return a(),s("div",null,r)}var h=n(t,[["render",p],["__file","index.html.vue"]]);export{h as default};