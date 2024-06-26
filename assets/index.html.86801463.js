import{_ as n}from"./app.3052dcfb.js";import{l as s,m as a,K as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const e={},p=t(`<p>\uC560\uB4DC\uC628 \uC791\uC131 \uAE30\uCD08\uB97C \uC774\uD574\uD558\uBA74 \uC560\uB4DC\uC628\uC744 \uB354 \uC88B\uAC8C \uB9CC\uB4DC\uB294 \uB2E4\uC591\uD55C \uACF5\uD1B5 \uAC1C\uC120 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uD398\uC774\uC9C0\uC5D0\uB294 \uC560\uB4DC\uC628 \uC0DD\uC131\uC5D0 \uB300\uD55C \uCD94\uAC00 \uC815\uBCF4\uAC00 \uB098\uC640 \uC788\uC5B4\uC694. \uC5EC\uB7EC\uBD84\uC774 \uC9C1\uC811 \uC560\uB4DC\uC628\uC744 \uB9CC\uB4E4 \uB54C \uBE60\uB974\uACE0 \uC27D\uAC8C \uCC38\uACE0\uD558\uC2E4 \uC218 \uC788\uB3C4\uB85D \uAC00\uC774\uB4DC\uB85C \uD65C\uC6A9\uD574\uBCF4\uC138\uC694.</p><h3 id="\u110B\u1162\u1103\u1173\u110B\u1169\u11AB-\u1111\u1162\u1102\u1165\u11AF-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u1103\u1173\u110B\u1169\u11AB-\u1111\u1162\u1102\u1165\u11AF-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A" aria-hidden="true">#</a> \uC560\uB4DC\uC628 \uD328\uB110 \uBE44\uD65C\uC131\uD654</h3><p>\uD2B9\uC815 \uC774\uC57C\uAE30\uC758 \uC560\uB4DC\uC628 \uD328\uB110\uC744 \uBE44\uD65C\uC131\uD654\uD558\uB294 \uAC83\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><p>\uADF8\uB97C \uAC00\uB2A5\uD558\uAC8C \uD558\uB824\uBA74 \uD328\uB110\uC744 \uB4F1\uB85D\uD560 \uB54C paramKey \uC694\uC18C\uB97C \uC804\uB2EC\uD574\uC57C \uD569\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token constant">ADDON_ID</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  addons<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token constant">PANEL_ID</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> types<span class="token punctuation">.</span><span class="token constant">PANEL</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&#39;\uB0B4 \uC560\uB4DC\uC628&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\uC560\uB4DC\uC628 \uD0ED \uB0B4\uC6A9<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    paramKey<span class="token operator">:</span> <span class="token string">&#39;myAddon&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \uC774 \uC694\uC18C</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uADF8\uB9AC\uACE0 \uC2A4\uD1A0\uB9AC\uB97C \uCD94\uAC00\uD560 \uB54C disabled \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC804\uB2EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// &#39;your-framework&#39;\uB97C \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C \uC774\uB984\uC73C\uB85C \uBC14\uAFC9\uB2C8\uB2E4</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u{1F447} title \uD504\uB85C\uD37C\uD2F0\uB294 \uC120\uD0DD \uC0AC\uD56D\uC785\uB2C8\uB2E4.
   * \uC790\uB3D9 \uC81C\uBAA9 \uC0DD\uC131 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uB824\uBA74 https://storybook.js.org/docs/configure/#configure-story-loading \uCC38\uC870
   */</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Button&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    myAddon<span class="token operator">:</span> <span class="token punctuation">{</span> disable<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \uC560\uB4DC\uC628\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u110B\u1162\u1103\u1173\u110B\u1169\u11AB-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u1105\u1175\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u1103\u1173\u110B\u1169\u11AB-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u1105\u1175\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC560\uB4DC\uC628 \uC2A4\uD0C0\uC77C\uB9C1\uD558\uAE30\`\`\`</h3><p>Storybook\uC740 \uC2A4\uD0C0\uC77C\uB9C1\uC744 \uC704\uD574 Emotion\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uB294 \uD14C\uB9C8\uB3C4 \uC81C\uACF5\uD574\uC694!</p><p>\uC560\uB4DC\uC628\uC758 UI \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC2A4\uD0C0\uC77C\uB9C1\uD558\uAE30 \uC704\uD574 Emotion\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uD65C\uC131\uD654\uB41C Storybook \uD14C\uB9C8\uB97C \uD65C\uC6A9\uD558\uC5EC \uC77C\uAD00\uB41C \uAC1C\uBC1C\uC790 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD560 \uC218 \uC788\uC5B4\uC694. \uB9CC\uC57D Emotion\uC744 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC73C\uB824\uBA74 \uC778\uB77C\uC778 \uC2A4\uD0C0\uC77C\uC774\uB098 \uB2E4\uB978 css-in-js \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC5B4\uC694. Emotion\uC758 withTheme HOC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC18D\uC131\uC73C\uB85C \uD14C\uB9C8\uB97C \uBC1B\uC544\uC62C \uC218 \uC788\uC5B4\uC694. \uD14C\uB9C8\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uAE30.</p><h3 id="storybook-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#storybook-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173" aria-hidden="true">#</a> Storybook \uCEF4\uD3EC\uB10C\uD2B8</h3><p>\uC560\uB4DC\uC628 \uC791\uC131\uC790\uB4E4\uC740 React \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC790\uC2E0\uC758 UI\uB97C \uAC1C\uBC1C\uD560 \uC218 \uC788\uC5B4\uC694. \uD558\uC9C0\uB9CC Storybook\uC758 UI \uCEF4\uD3EC\uB10C\uD2B8\uC778 @storybook/components\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC560\uB4DC\uC628\uC744 \uB354 \uBE68\uB9AC \uAD6C\uCD95\uD558\uB294 \uAC83\uC774 \uC88B\uC544\uC694. Storybook \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC774\uC810\uC744 \uC5BB\uC744 \uC218 \uC788\uC5B4\uC694:</p><ul><li>\uC2E4\uC804\uC5D0\uC11C \uAC80\uC99D\uB41C \uC644\uC131\uD488 \uCEF4\uD3EC\uB10C\uD2B8</li><li>Storybook \uAE30\uBCF8 \uB8E9 \uC564 \uD544</li><li>Storybook \uD14C\uB9C8 \uC9C0\uC6D0 \uAE30\uB2A5 \uB0B4\uC7A5</li></ul><p>\uB2E4\uC74C\uC5D0 \uC81C\uACF5\uB41C \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB2E4\uC74C \uC560\uB4DC\uC628\uC5D0\uC11C \uC0AC\uC6A9\uD558\uC138\uC694.</p><p>\uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uBCF4\uC644\uD558\uB294 \uAC83\uC73C\uB85C UI \uAE30\uBCF8 \uC694\uC18C \uC9D1\uD569\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC560\uB4DC\uC628 \uC2A4\uD0C0\uC77C\uB9C1\uC744 \uC704\uD55C \uCC38\uACE0 \uC790\uB8CC\uB85C \uC544\uB798 \uB0B4\uC6A9\uC744 \uC0AC\uC6A9\uD558\uC138\uC694.</p><h3 id="\u1107\u1175\u11AF\u1103\u1173-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1107\u1175\u11AF\u1103\u1173-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7" aria-hidden="true">#</a> \uBE4C\uB4DC \uC2DC\uC2A4\uD15C</h3><p>\uB9CC\uC57D \uC560\uB4DC\uC628\uC744 \uD328\uD0A4\uC9C0\uB85C \uAC1C\uBC1C \uC911\uC774\uB77C\uBA74 <code>npm link</code>\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC560\uB4DC\uC628\uC744 <code>package.json</code> \uD30C\uC77C\uC5D0 \uB85C\uCEEC \uC885\uC18D\uC131\uC73C\uB85C \uB098\uC5F4\uD574\uC8FC\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;@storybook/addon-controls&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file:///home/username/myrepo&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1112\u1161\u11BA-\u1106\u1169\u1103\u1172\u11AF-\u1100\u116D\u110E\u1166" tabindex="-1"><a class="header-anchor" href="#\u1112\u1161\u11BA-\u1106\u1169\u1103\u1172\u11AF-\u1100\u116D\u110E\u1166" aria-hidden="true">#</a> \uD56B \uBAA8\uB4C8 \uAD50\uCCB4</h3><p>\uC560\uB4DC\uC628\uC744 \uAC1C\uBC1C\uD558\uB294 \uB3D9\uC548 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uBC18\uC601\uD558\uB824\uBA74 HMR(\uD56B \uBAA8\uB4C8 \uAD50\uCCB4)\uC744 \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="\u1109\u1173\u1110\u1162\u11AB\u1103\u1173\u110B\u1165\u11AF\u1105\u1169\u11AB-storybook-\u110B\u1162\u1103\u1173\u110B\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1109\u1173\u1110\u1162\u11AB\u1103\u1173\u110B\u1165\u11AF\u1105\u1169\u11AB-storybook-\u110B\u1162\u1103\u1173\u110B\u1169\u11AB" aria-hidden="true">#</a> \uC2A4\uD0E0\uB4DC\uC5BC\uB860 Storybook \uC560\uB4DC\uC628</h3><p>\uC2A4\uD0E0\uB4DC\uC5BC\uB860 \uC560\uB4DC\uC628\uC744 \uAC1C\uBC1C \uC911\uC774\uB77C\uBA74, \uB2E4\uC74C\uACFC \uAC19\uC774 package.json\uC5D0 \uC0C8 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uCD94\uAC00\uD574\uC8FC\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build -- --watch&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u1105\u1169\u110F\u1165\u11AF-storybook-\u110B\u1162\u1103\u1173\u110B\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1105\u1169\u110F\u1165\u11AF-storybook-\u110B\u1162\u1103\u1173\u110B\u1169\u11AB" aria-hidden="true">#</a> \uB85C\uCEEC Storybook \uC560\uB4DC\uC628</h4><p>\uB9CC\uC57D \uAE30\uC874 Storybook \uC124\uCE58 \uC704\uC5D0\uC11C \uAD6C\uCD95\uB41C \uB85C\uCEEC Storybook \uC560\uB4DC\uC628\uC744 \uAC1C\uBC1C\uD558\uACE0 \uC788\uB2E4\uBA74, HMR(\uD56B \uBAA8\uB4C8 \uAD50\uCCB4)\uC740 \uAE30\uBCF8 \uC81C\uACF5\uB429\uB2C8\uB2E4.</p><h3 id="\u1111\u1173\u1105\u1175\u1109\u1166\u11BA-\u1102\u1162\u110B\u1166\u1109\u1165-\u110B\u1162\u1103\u1173\u110B\u1169\u11AB-\u110C\u1161\u11A8\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1111\u1173\u1105\u1175\u1109\u1166\u11BA-\u1102\u1162\u110B\u1166\u1109\u1165-\u110B\u1162\u1103\u1173\u110B\u1169\u11AB-\u110C\u1161\u11A8\u1109\u1165\u11BC" aria-hidden="true">#</a> \uD504\uB9AC\uC14B \uB0B4\uC5D0\uC11C \uC560\uB4DC\uC628 \uC791\uC131</h3><p>\uB9CC\uC57D \uC81C\uC5B4\uD560 \uC218 \uC5C6\uB294 \uC11C\uB4DC\uD30C\uD2F0 \uC560\uB4DC\uC628\uC744 \uB85C\uB4DC\uD558\uB294 \uD504\uB9AC\uC14B\uC744 \uC791\uC5C5 \uC911\uC774\uACE0 \uD2B9\uC815 \uAE30\uB2A5(\uC608: \uB370\uCF54\uB808\uC774\uD130)\uC5D0 \uC561\uC138\uC2A4\uD558\uAC70\uB098 \uCD94\uAC00 \uAD6C\uC131\uC744 \uC81C\uACF5\uD574\uC57C\uD558\uB294 \uACBD\uC6B0 \uD504\uB9AC\uC14B\uC744 \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 \uB2E4\uB978 \uC560\uB4DC\uC628\uC744 \uB85C\uB4DC\uD558\uACE0 \uAD6C\uC131\uD560 \uC218 \uC788\uB3C4\uB85D \uC544\uB798\uC640 \uAC19\uC774 \uD504\uB9AC\uC14B\uC744 \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD569\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">managerEntries</span><span class="token punctuation">(</span>entry <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>entry<span class="token punctuation">,</span> <span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;my-other-addon/register&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">config</span> <span class="token operator">=</span> <span class="token punctuation">(</span>entry <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>entry<span class="token punctuation">,</span> <span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;my-other-addon/addDecorator&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  managerEntries<span class="token punctuation">,</span>
  config<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB9CC\uC57D \uB2F9\uC2E0\uC774 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC988\uD558\uACE0 \uC2F6\uC740 \uC560\uB4DC\uC628\uC744 \uC81C\uC5B4\uD560 \uC218 \uC788\uB2E4\uBA74, \uADF8 \uACBD\uC6B0\uC5D0 \uB2F9\uC2E0\uC740 \uD504\uB9AC\uC14B\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uACE0 \uD544\uC694\uD55C \uC124\uC815\uC744 \uC81C\uACF5\uD558\uBA70 \uCD94\uAC00 \uD504\uB9AC\uC14B\uC744 \uB85C\uB4DC\uD558\uAE30 \uC704\uD55C \uC0AC\uC6A9\uC790 \uC815\uC758 \uD568\uC218\uB97C \uAD6C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 Essentials \uC560\uB4DC\uC628\uC5D0\uC11C \uAD6C\uD604\uB41C \uBC29\uC2DD\uACFC \uC720\uC0AC\uD569\uB2C8\uB2E4.</p>`,29),o=[p];function c(i,l){return s(),a("div",null,o)}var b=n(e,[["render",c],["__file","index.html.vue"]]);export{b as default};
