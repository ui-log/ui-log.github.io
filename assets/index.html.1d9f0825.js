import{_ as n}from"./app.63e06a35.js";import{l as s,m as a,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var t="/assets/Namingcomponentsandhierarchy_0.05fd5a69.png",p="/assets/Namingcomponentsandhierarchy_1.9e07cca9.png",o="/assets/Namingcomponentsandhierarchy_2.e161611a.png",i="/assets/Namingcomponentsandhierarchy_3.0b4822ab.png";const c={},l=e('<p>Storybook\uC740 \uC774\uC57C\uAE30\uB97C \uAD6C\uC131\uD558\uACE0 \uD544\uC694\uD55C \uB3C4\uAD6C\uB97C \uC81C\uACF5\uD558\uC5EC \uC774\uC57C\uAE30\uB97C \uBD84\uB958\uD558\uACE0 \uC870\uC9C1\uC758 \uC694\uAD6C\uC0AC\uD56D\uACFC \uC120\uD638\uC5D0 \uB530\uB77C \uC774\uC57C\uAE30\uB97C \uAC80\uC0C9\uD558\uACE0 \uD544\uD130\uB9C1\uD560 \uC218 \uC788\uB294 \uAC15\uB825\uD55C \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><h2 id="\u1100\u116E\u110C\u1169\u110B\u116A-\u1100\u1168\u110E\u1173\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1100\u116E\u110C\u1169\u110B\u116A-\u1100\u1168\u110E\u1173\u11BC" aria-hidden="true">#</a> \uAD6C\uC870\uC640 \uACC4\uCE35</h2><p>Storybook\uC744 \uAD6C\uC131\uD560 \uB54C \uC774\uC57C\uAE30\uB97C \uAD6C\uC870\uD654\uD558\uB294 \uB450 \uAC00\uC9C0 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4: \uC554\uC2DC\uC801 \uBC29\uBC95\uACFC \uBA85\uC2DC\uC801 \uBC29\uBC95. \uC554\uC2DC\uC801 \uBC29\uBC95\uC740 \uC774\uC57C\uAE30\uC758 \uBB3C\uB9AC\uC801 \uC704\uCE58\uC5D0 \uC758\uC874\uD558\uC5EC \uC0AC\uC774\uB4DC\uBC14\uC5D0 \uC21C\uC11C\uB97C \uB9E4\uAE30\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70, \uBA85\uC2DC\uC801 \uBC29\uBC95\uC740 \uC81C\uBAA9 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uD65C\uC6A9\uD558\uC5EC \uC774\uC57C\uAE30\uB97C \uBC30\uCE58\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.</p><p><img src="'+t+`" alt="Namingcomponentsandhierarchy_0.png"></p><p>Storybook\uC744 \uAD6C\uC870\uD654\uD558\uB294 \uBC29\uC2DD\uC5D0 \uB530\uB77C \uC774\uC57C\uAE30 \uACC4\uCE35 \uAD6C\uC870\uAC00 \uB2E4\uC591\uD55C \uBD80\uBD84\uC73C\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC74C\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>\uCE74\uD14C\uACE0\uB9AC: Storybook\uC5D0\uC11C \uC0DD\uC131\uB41C \uC774\uC57C\uAE30\uC640 \uBB38\uC11C \uD398\uC774\uC9C0\uB97C \uC0C1\uC704 \uADF8\uB8F9\uD654\uD558\uB294 \uB2E8\uC704</li><li>\uD3F4\uB354: \uC0AC\uC774\uB4DC\uBC14\uC5D0 \uAD6C\uC131 \uC694\uC18C\uC640 \uC774\uC57C\uAE30\uB97C \uADF8\uB8F9\uD654\uD558\uB294 \uC911\uAC04 \uB2E8\uACC4\uC758 \uC870\uC9C1 \uB2E8\uC704\uB85C, \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uAE30\uB2A5\uC774\uB098 \uC139\uC158\uC744 \uB098\uD0C0\uB0C4</li><li>\uAD6C\uC131 \uC694\uC18C: \uC2A4\uD1A0\uB9AC\uAC00 \uD14C\uC2A4\uD2B8\uD558\uB294 \uAD6C\uC131 \uC694\uC18C\uB97C \uB098\uD0C0\uB0B4\uB294 \uD558\uC704 \uC870\uC9C1 \uB2E8\uC704</li><li>\uBB38\uC11C: \uAD6C\uC131 \uC694\uC18C\uC5D0 \uB300\uD574 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB41C \uBB38\uC11C \uD398\uC774\uC9C0</li><li>\uC774\uC57C\uAE30: \uD2B9\uC815 \uAD6C\uC131 \uC694\uC18C \uC0C1\uD0DC\uB97C \uD14C\uC2A4\uD2B8\uD558\uB294 \uAC1C\uBCC4 \uC774\uC57C\uAE30</li></ul><h2 id="\u110B\u1175\u110B\u1163\u1100\u1175-\u1106\u1167\u11BC\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u110B\u1163\u1100\u1175-\u1106\u1167\u11BC\u1106\u1167\u11BC" aria-hidden="true">#</a> \uC774\uC57C\uAE30 \uBA85\uBA85</h2><p>\uC774\uC57C\uAE30\uB97C \uB9CC\uB4E4 \uB54C, \uD0C0\uC774\uD2C0 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uBA85\uC2DC\uC801\uC73C\uB85C \uC0AC\uC6A9\uD558\uC5EC \uC0AC\uC774\uB4DC\uBC14\uC5D0\uC11C \uC774\uC57C\uAE30\uC758 \uC704\uCE58\uB97C \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uAD00\uB828\uB41C \uAD6C\uC131 \uC694\uC18C\uB97C \uD655\uC7A5 \uAC00\uB2A5\uD55C \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uADF8\uB8F9\uD654\uD558\uB294 \uB370 \uC0AC\uC6A9\uD558\uC5EC Storybook \uAD6C\uC131\uC744 \uB3D5\uACE0 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uB354 \uC9C1\uAD00\uC801\uC778 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uC2DC:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// &#39;your-framework&#39;\uC744 \uC0AC\uC6A9\uD558\uB294 framework \uC774\uB984\uC73C\uB85C \uBCC0\uACBD\uD558\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u{1F447} title \uC18D\uC131\uC740 \uC635\uC158\uC785\uB2C8\uB2E4.
   * \uC790\uB3D9 \uC81C\uBAA9\uC744 \uC0DD\uC131\uD558\uB294 \uBC29\uBC95\uC740 https://storybook.js.org/docs/configure/#configure-story-loading
   * \uC5D0\uC11C \uD655\uC778\uD574\uBCF4\uC138\uC694.
   */</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Button&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC544\uB798\uC640 \uAC19\uC774 \uB098\uD0C0\uB0A9\uB2C8\uB2E4:</p><p><img src="`+p+`" alt="Namingcomponentsandhierarchy_1.png"></p><h2 id="grouping" tabindex="-1"><a class="header-anchor" href="#grouping" aria-hidden="true">#</a> Grouping</h2><p>\uAD00\uB828 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD655\uC7A5 \uAC00\uB2A5\uD55C \uC778\uD130\uD398\uC774\uC2A4\uB85C \uBB36\uC5B4 Storybook \uC870\uC9C1\uC744 \uB3D5\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574\uC11C\uB294 /\uB97C \uAD6C\uBD84\uC790\uB85C \uC0AC\uC6A9\uD558\uC138\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// your-framework\uC744 \uC0AC\uC6A9\uD558\uB294 framework\uC758 \uC774\uB984\uC73C\uB85C \uBC14\uAFD4\uC8FC\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u{1F447} title \uC18D\uC131\uC740 \uC120\uD0DD \uC0AC\uD56D\uC785\uB2C8\uB2E4.
   * \uC790\uB3D9 \uC81C\uBAA9 \uC0DD\uC131 \uBC29\uBC95\uC740 https://storybook.js.org/docs/configure/#configure-story-loading
   * \uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
   */</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Design System/Atoms/Button&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// your-framework\uC744 \uC0AC\uC6A9\uD558\uB294 framework\uC758 \uC774\uB984\uC73C\uB85C \uBC14\uAFD4\uC8FC\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> CheckBox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./CheckBox&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> CheckBox<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u{1F447} title \uC18D\uC131\uC740 \uC120\uD0DD \uC0AC\uD56D\uC785\uB2C8\uB2E4.
   * \uC790\uB3D9 \uC81C\uBAA9 \uC0DD\uC131 \uBC29\uBC95\uC740 https://storybook.js.org/docs/configure/#configure-story-loading
   * \uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
   */</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Design System/Atoms/Checkbox&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> CheckBox<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uB098\uC635\uB2C8\uB2E4:</p><p><img src="`+o+`" alt="Naming Components and Hierarchy Table"></p><h2 id="\u1105\u116E\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1105\u116E\u1110\u1173" aria-hidden="true">#</a> \uB8E8\uD2B8</h2><p>\uAE30\uBCF8\uC801\uC73C\uB85C \uC0C1\uC704 \uB2E8\uACC4 \uADF8\uB8F9\uC740 \uC2A4\uD1A0\uB9AC\uBD81 UI\uC5D0\uC11C &quot;\uB8E8\uD2B8&quot;\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4 (\uC989, \uB300\uBB38\uC790\uB85C \uD45C\uC2DC\uB41C, \uD655\uC7A5\uD560 \uC218 \uC5C6\uB294 \uD56D\uBAA9\uC785\uB2C8\uB2E4). \uD544\uC694\uD55C \uACBD\uC6B0 Storybook\uC744 \uAD6C\uC131\uD558\uC5EC\uC774 \uB3D9\uC791\uC744 \uBE44\uD65C\uC131\uD654 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uAC04\uC18C\uD654\uB41C \uACBD\uD5D8\uC744 \uC81C\uACF5\uD574\uC57C\uD558\uB294 \uACBD\uC6B0 \uC720\uC6A9\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC5EC\uB7EC \uCEF4\uD3EC\uB10C\uD2B8 \uC2A4\uD1A0\uB9AC\uB85C \uAD6C\uC131\uB41C \uD070 Storybook\uC774 \uC788\uB294 \uACBD\uC6B0 \uD30C\uC77C \uACC4\uCE35 \uAD6C\uC870\uC5D0 \uB530\uB77C \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1103\u1161\u11AB\u110B\u1175\u11AF-\u1109\u1173\u1110\u1169\u1105\u1175-\u1112\u1169\u110B\u1175\u1109\u1173\u1110\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u110B\u1175\u11AF-\u1109\u1173\u1110\u1169\u1105\u1175-\u1112\u1169\u110B\u1175\u1109\u1173\u1110\u1175\u11BC" aria-hidden="true">#</a> \uB2E8\uC77C \uC2A4\uD1A0\uB9AC \uD638\uC774\uC2A4\uD305</h2><p>\uB2E8\uC77C \uC2A4\uD1A0\uB9AC \uCEF4\uD3EC\uB10C\uD2B8(\uC989, \uD615\uC81C \uC5C6\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uC2A4\uD1A0\uB9AC)\uB294 \uD45C\uC2DC \uC774\uB984\uC774 \uCEF4\uD3EC\uB10C\uD2B8 \uC774\uB984(\uD0C0\uC774\uD2C0\uC758 \uB9C8\uC9C0\uB9C9 \uBD80\uBD84)\uACFC \uC815\uD655\uD788 \uC77C\uCE58\uD558\uB294 \uACBD\uC6B0 UI\uC5D0\uC11C \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB300\uCCB4\uD558\uAE30 \uC704\uD574 \uC790\uB3D9\uC73C\uB85C \uD638\uC774\uC2A4\uD305\uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// &#39;your-framework&#39;\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uC774\uB984\uC73C\uB85C \uB300\uCCB4\uD558\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token keyword">as</span> ButtonComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> ButtonComponent<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u{1F447} title \uC18D\uC131\uC740 \uC120\uD0DD \uC0AC\uD56D\uC785\uB2C8\uB2E4.
   * \uC790\uB3D9 \uC81C\uBAA9 \uC0DD\uC131 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uB824\uBA74 https://storybook.js.org/docs/configure/#configure-story-loading \uB97C \uCC38\uC870\uD558\uC138\uC694
   */</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Design System/Atoms/Button&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> ButtonComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> ButtonComponent<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// \uC774 \uD30C\uC77C\uC5D0\uC11C \uC720\uC77C\uD558\uAC8C \uBA85\uBA85\uB41C \uB0B4\uBCF4\uB0B4\uAE30\uAC00 \uC788\uC73C\uBA70, \uCEF4\uD3EC\uB10C\uD2B8 \uC774\uB984\uACFC \uC77C\uCE58\uD569\uB2C8\uB2E4</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Button<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt="Namingcomponentsandhierarchy_3"></p><p>\uC2A4\uD1A0\uB9AC \uB0B4\uBCF4\uB0B4\uAE30\uB294 \uC790\uB3D9\uC73C\uB85C &quot;start cased&quot;\uB85C \uBCC0\uD658\uB429\uB2C8\uB2E4(myStory\uB294 &quot;My Story&quot;\uAC00 \uB428). \uB530\uB77C\uC11C \uCEF4\uD3EC\uB10C\uD2B8 \uC774\uB984\uC740 \uD574\uB2F9 \uC774\uB984\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4. \uB610\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uC774\uB984\uACFC \uC77C\uCE58\uD558\uB3C4\uB85D myStory.storyName = <code>...</code>\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC2A4\uD1A0\uB9AC \uC774\uB984\uC744 \uC7AC\uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110B\u1175\u110B\u1163\u1100\u1175-\u110C\u1165\u11BC\u1105\u1167\u11AF" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u110B\u1163\u1100\u1175-\u110C\u1165\u11BC\u1105\u1167\u11AF" aria-hidden="true">#</a> \uC774\uC57C\uAE30 \uC815\uB82C</h2><p>Storybook\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uC774\uC57C\uAE30\uB97C \uAC00\uC838\uC628 \uC21C\uC11C\uB300\uB85C \uC815\uB82C\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 preview.js \uD30C\uC77C\uC758 options \uB9E4\uAC1C\uBCC0\uC218\uC5D0 storySort\uB97C \uCD94\uAC00\uD558\uC5EC \uC774 \uD328\uD134\uC744 \uC0AC\uC6A9\uC790 \uC815\uC758\uD558\uC5EC \uB354 \uC9C1\uAD00\uC801\uC778 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB9DE\uAC8C \u2018your-framework\u2019\uB97C \uD574\uB2F9 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uBC14\uAFC9\uB2C8\uB2E4 (\uC608: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uC774 \uD568\uC218\uC758 \u2018a\u2019\uC640 \u2018b\u2019 \uB9E4\uAC1C\uBCC0\uC218\uC758 \uD0C0\uC785\uC740 \u2018import(&#39;@storybook/types&#39;).IndexEntry\u2019\uC785\uB2C8\uB2E4. \uC774 \uD568\uC218\uAC00 JavaScript \uD658\uACBD\uC5D0\uC11C \uC2E4\uD589\uB418\uBBC0\uB85C IntelliSense\uB97C \uC704\uD574 JSDoc\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.</span>
      <span class="token function-variable function">storySort</span><span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        a<span class="token punctuation">.</span>id <span class="token operator">===</span> b<span class="token punctuation">.</span>id <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> a<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> numeric<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>storySort\uB294 \uAD6C\uC131 \uAC1D\uCCB4\uB3C4 \uC218\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C(\uC608: react, vue3)\uB85C \uBCC0\uACBD\uD558\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span>
      storySort<span class="token operator">:</span> <span class="token punctuation">{</span>
        method<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        order<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        locales<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uC57C\uAE30\uB4E4\uC744 \uC54C\uD30C\uBCB3 \uC21C\uC73C\uB85C \uC815\uB82C\uD558\uB824\uBA74 method\uB97C <code>alphabetical</code>\uB85C \uC124\uC815\uD558\uACE0 \uC120\uD0DD\uC801\uC73C\uB85C \uB85C\uCF00\uC77C \uBB38\uC790\uC5F4\uC744 \uC124\uC815\uD558\uC138\uC694. \uC0AC\uC6A9\uC790 \uC815\uC758 \uBAA9\uB85D\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC774\uC57C\uAE30\uB4E4\uC744 \uC815\uB82C\uD558\uB824\uBA74 order \uBC30\uC5F4\uC744 \uC0AC\uC6A9\uD558\uC138\uC694. order \uBAA9\uB85D\uC5D0 \uD3EC\uD568\uB418\uC9C0 \uC54A\uB294 \uC774\uC57C\uAE30\uB4E4\uC740 \uBAA9\uB85D \uD56D\uBAA9 \uB4A4\uC5D0 \uB098\uD0C0\uB0A9\uB2C8\uB2E4.</p><p>order \uBC30\uC5F4\uC740 \uC911\uCCA9 \uBC30\uC5F4\uC744 \uD5C8\uC6A9\uD558\uC5EC 2\uB2E8\uACC4 \uC774\uC57C\uAE30 \uC885\uB958\uB97C \uC815\uB82C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C(\uC608: react, vue3)\uB85C \uBCC0\uACBD\uD558\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span>
      storySort<span class="token operator">:</span> <span class="token punctuation">{</span>
        order<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Intro&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Pages&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Admin&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;Components&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC758 \uC774\uC57C\uAE30 \uC815\uB82C \uC21C\uC11C\uAC00 \uB2E4\uC74C\uACFC \uAC19\uC774 \uACB0\uC815\uB429\uB2C8\uB2E4:</p><ul><li>\uC18C\uAC1C \uADF8\uB9AC\uACE0 \uC18C\uAC1C/ * \uC774\uC57C\uAE30</li><li>\uD398\uC774\uC9C0 \uC774\uC57C\uAE30</li><li>\uD398\uC774\uC9C0/\uD648 \uBC0F \uD398\uC774\uC9C0/\uD648/ * \uC774\uC57C\uAE30</li><li>\uD398\uC774\uC9C0/\uB85C\uADF8\uC778 \uBC0F \uD398\uC774\uC9C0/\uB85C\uADF8\uC778/ * \uC774\uC57C\uAE30</li><li>\uD398\uC774\uC9C0/\uAD00\uB9AC\uC790 \uBC0F \uD398\uC774\uC9C0/\uAD00\uB9AC\uC790/ * \uC774\uC57C\uAE30</li><li>\uD398\uC774\uC9C0/ * \uC774\uC57C\uAE30</li><li>\uCEF4\uD3EC\uB10C\uD2B8 \uBC0F \uCEF4\uD3EC\uB10C\uD2B8/ * \uC774\uC57C\uAE30</li><li>\uADF8 \uC678 \uBAA8\uB4E0 \uC774\uC57C\uAE30</li></ul><p>\uD2B9\uC815 \uCE74\uD14C\uACE0\uB9AC\uB97C \uBAA9\uB85D\uC758 \uB05D\uC5D0 \uC815\uB82C\uD558\uB824\uBA74 * \uB97C \uC21C\uC11C \uBC30\uC5F4\uC5D0 \uC0BD\uC785\uD558\uC5EC &quot;\uADF8 \uC678 \uBAA8\uB4E0 \uC774\uC57C\uAE30&quot;\uAC00 \uC5B4\uB514\uC5D0 \uC704\uCE58\uD574\uC57C \uD558\uB294\uC9C0\uB97C \uB098\uD0C0\uB0BC \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// &#39;your-framework&#39;\uC740 \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uB300\uCCB4\uD558\uC138\uC694 (\uC608: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span>
      storySort<span class="token operator">:</span> <span class="token punctuation">{</span>
        order<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Intro&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Pages&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Admin&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;Components&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;WIP&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uC608\uC2DC\uC5D0\uC11C WIP \uCE74\uD14C\uACE0\uB9AC\uB294 \uBAA9\uB85D\uC758 \uB05D\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p><p>\uC8FC\uBB38 \uC635\uC158\uC740 \uBC29\uBC95 \uC635\uC158\uACFC \uB3C5\uB9BD\uC801\uC785\uB2C8\uB2E4. \uC774\uC57C\uAE30\uB294 \uBA3C\uC800 \uC8FC\uBB38 \uBC30\uC5F4\uC5D0 \uB530\uB77C \uC815\uB82C\uB418\uBA70 \uADF8 \uB2E4\uC74C\uC5D0\uB294 \uBC29\uBC95: <code>alphabetical</code> \uB610\uB294 \uAE30\uBCF8 configure() \uAC00\uC838\uC624\uAE30 \uC21C\uC11C\uC5D0 \uB530\uB77C \uC815\uB82C\uB429\uB2C8\uB2E4.</p>`,38),r=[l];function u(d,k){return s(),a("div",null,r)}var h=n(c,[["render",u],["__file","index.html.vue"]]);export{h as default};
