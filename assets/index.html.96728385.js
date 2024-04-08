import{_ as n}from"./app.a99075bb.js";import{l as s,m as a,K as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var o="/assets/StorybookComposition_0.9cf25fdd.png",p="/assets/StorybookComposition_1.dd6c736c.png";const e={},i=t('<p>\uAD6C\uC131\uC740 \uB85C\uCEEC Storybook \uB0B4\uC5D0\uC11C URL\uC744 \uD1B5\uD574 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uB294 \uBAA8\uB4E0 Storybook \uAD6C\uC131\uC694\uC18C\uB97C \uD0D0\uC0C9\uD560 \uC218 \uC788\uB3C4\uB85D \uD574\uC90D\uB2C8\uB2E4. \uBDF0 \uB808\uC774\uC5B4, \uAE30\uC220 \uC2A4\uD0DD \uB610\uB294 \uC885\uC18D\uC131\uC5D0 \uAD00\uACC4\uC5C6\uC774 \uC628\uB77C\uC778\uC73C\uB85C \uAC8C\uC2DC\uB41C Storybook \uB610\uB294 \uB85C\uCEEC\uB85C \uC2E4\uD589 \uC911\uC778 Storybook\uC744 \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><img src="'+o+'" alt="\uC774\uBBF8\uC9C0"></p><p>\uAD6C\uC131\uB41C Storybook\uC758 \uC2A4\uD1A0\uB9AC\uB294 \uB2F9\uC2E0\uC758 \uC2A4\uD1A0\uB9AC \uC606\uC5D0 \uC0AC\uC774\uB4DC\uBC14\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uD300\uC774 \uC885\uC885 \uACE0\uC0DD\uD558\uB294 \uC77C\uBC18\uC801\uC778 \uC791\uC5C5 \uD750\uB984\uC744 \uD574\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>\u{1F469}\u200D\u{1F4BB} UI \uAC1C\uBC1C\uC790\uB294 Storybook \uAC04\uC5D0 \uC804\uD658\uD558\uC9C0 \uC54A\uACE0 \uC774\uC804 \uC544\uD2B8\uB97C \uBE60\uB974\uAC8C \uCC38\uC870\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\u{1F3A8} \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC740 \uC0AC\uC6A9\uC790\uC758 Storybook\uC5D0 \uC790\uC2E0\uC744 \uAD6C\uC131\uD558\uC5EC \uCC44\uD0DD\uB3C4\uB97C \uD655\uB300\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\u{1F6E0} \uD504\uB860\uD2B8\uC5D4\uB4DC \uD50C\uB7AB\uD3FC\uC740 \uD504\uB85C\uC81D\uD2B8 \uC804\uCCB4\uC5D0\uC11C \uAD6C\uC131\uC694\uC18C\uAC00 \uC0AC\uC6A9\uB418\uB294 \uBC29\uC2DD\uC744 \uAC10\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\u{1F4DA} \uC11C\uB85C \uB2E4\uB978 \uAE30\uC220 \uC2A4\uD0DD\uC744 \uAC00\uC9C4 \uC5EC\uB7EC Storybook\uC744 \uD55C \uACF3\uC5D0\uC11C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><p><img src="'+p+`" alt="Storybook Composition"></p><h2 id="\u1100\u1166\u1109\u1175\u1103\u116C\u11AB-\u1109\u1173\u1110\u1169\u1105\u1175\u1107\u116E\u11A8-\u1100\u116E\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1100\u1166\u1109\u1175\u1103\u116C\u11AB-\u1109\u1173\u1110\u1169\u1105\u1175\u1107\u116E\u11A8-\u1100\u116E\u1109\u1165\u11BC" aria-hidden="true">#</a> \uAC8C\uC2DC\uB41C \uC2A4\uD1A0\uB9AC\uBD81 \uAD6C\uC131</h2><p>.storybook/main.js|ts \uD30C\uC77C\uC5D0 \uCC38\uC870 \uC2A4\uD1A0\uB9AC\uBD81\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB97C \uD3EC\uD568\uD55C refs \uD544\uB4DC\uB97C \uCD94\uAC00\uD558\uC138\uC694. \uC815\uC801\uC73C\uB85C \uBE4C\uB4DC\uB41C \uC2A4\uD1A0\uB9AC\uBD81\uC758 URL\uC744 \uC804\uB2EC\uD558\uC138\uC694.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB9DE\uAC8C your-framework\uB97C \uAD50\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  refs<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;design-system&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;Storybook Design System&#39;</span><span class="token punctuation">,</span>
      url<span class="token operator">:</span> <span class="token string">&#39;https://master--5ccbc373887ca40020446347.chromatic.com/&#39;</span><span class="token punctuation">,</span>
      expanded<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \uC635\uC158, \uAE30\uBCF8\uC801\uC73C\uB85C true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1105\u1169\u110F\u1165\u11AF-\u1109\u1173\u1110\u1169\u1105\u1175\u1107\u116E\u11A8-\u1112\u1161\u11B8\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1105\u1169\u110F\u1165\u11AF-\u1109\u1173\u1110\u1169\u1105\u1175\u1107\u116E\u11A8-\u1112\u1161\u11B8\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB85C\uCEEC \uC2A4\uD1A0\uB9AC\uBD81 \uD569\uC131\uD558\uAE30</h2><p>\uB85C\uCEEC\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778 \uC5EC\uB7EC \uAC1C\uC758 \uC2A4\uD1A0\uB9AC\uBD81\uC744 \uD569\uC131\uD560 \uC218\uB3C4 \uC788\uC5B4\uC694. \uC608\uB97C \uB4E4\uC5B4, React \uC2A4\uD1A0\uB9AC\uBD81\uACFC Angular \uC2A4\uD1A0\uB9AC\uBD81\uC774 \uB2E4\uB978 \uD3EC\uD2B8\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778 \uACBD\uC6B0, \uC124\uC815 \uD30C\uC77C(.storybook/main.js|ts)\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uACE0 \uB2E4\uC74C\uACFC \uAC19\uC774 \uCC38\uC870\uD560 \uC218 \uC788\uC5B4\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C your-framework\uC744 \uAD50\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  refs<span class="token operator">:</span> <span class="token punctuation">{</span>
    react<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;React&#39;</span><span class="token punctuation">,</span>
      url<span class="token operator">:</span> <span class="token string">&#39;http://localhost:7007&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    angular<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;Angular&#39;</span><span class="token punctuation">,</span>
      url<span class="token operator">:</span> <span class="token string">&#39;http://localhost:7008&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uC124\uC815\uC744 \uCD94\uAC00\uD558\uBA74 React \uBC0F Angular \uC2A4\uD1A0\uB9AC\uBD81\uC744 \uD604\uC7AC \uC2A4\uD1A0\uB9AC\uBD81\uC5D0 \uD569\uCE60 \uC218 \uC788\uC5B4\uC694. \uC774\uB7EC\uBA74 \uC774 \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC790\uB3D9\uC73C\uB85C \uC801\uC6A9\uB418\uC5B4, \uB450 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uB3D9\uC2DC\uC5D0 \uAC1C\uBC1C\uD560 \uC218 \uC788\uC5B4\uC694.</p><h2 id="\u1112\u116A\u11AB\u1100\u1167\u11BC\u1107\u1167\u11AF-\u1109\u1173\u1110\u1169\u1105\u1175\u1107\u116E\u11A8-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1112\u116A\u11AB\u1100\u1167\u11BC\u1107\u1167\u11AF-\u1109\u1173\u1110\u1169\u1105\u1175\u1107\u116E\u11A8-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uD658\uACBD\uBCC4 \uC2A4\uD1A0\uB9AC\uBD81 \uC0DD\uC131\uD558\uAE30</h2><p>\uD604\uC7AC \uAC1C\uBC1C \uD658\uACBD(\uC608: \uAC1C\uBC1C, \uC2A4\uD14C\uC774\uC9D5, \uD504\uB85C\uB355\uC158)\uC5D0 \uB530\uB77C \uC2A4\uD1A0\uB9AC\uBD81\uC744 \uC0DD\uC131\uD560 \uC218\uB3C4 \uC788\uC5B4\uC694. \uC608\uB97C \uB4E4\uC5B4, \uC774\uBBF8 \uACF5\uAC1C\uB41C \uC2A4\uD1A0\uB9AC\uBD81\uC774 \uC788\uC9C0\uB9CC \uC544\uC9C1 \uB9B4\uB9AC\uC2A4\uB418\uC9C0 \uC54A\uC740 \uCD5C\uC2E0 \uAE30\uB2A5\uC744 \uD3EC\uD568\uD55C \uBC84\uC804\uB3C4 \uC81C\uACF5\uD558\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC791\uC5C5 \uC911\uC774\uB77C\uBA74, \uADF8\uC5D0 \uB9DE\uAC8C \uAD6C\uC131\uC744 \uC870\uC815\uD560 \uC218 \uC788\uC5B4\uC694.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C your-framework\uB97C \uB300\uCCB4\uD558\uC2ED\uC2DC\uC624 (\uC608: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// \u{1F447} configType \uC778\uC218\uC5D0\uC11C \uD604\uC7AC \uD658\uACBD\uC744 \uAC00\uC838\uC62C \uC218 \uC788\uC5B4\uC694</span>
  <span class="token function-variable function">refs</span><span class="token operator">:</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> <span class="token punctuation">{</span> configType <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>configType <span class="token operator">===</span> <span class="token string">&#39;DEVELOPMENT&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        react<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;\uAC1C\uBC1C \uBAA8\uB4DC\uC5D0\uC11C \uC791\uB3D9\uD558\uB294 \uAD6C\uC131\uB41C React \uC2A4\uD1A0\uB9AC\uBD81&#39;</span><span class="token punctuation">,</span>
          url<span class="token operator">:</span> <span class="token string">&#39;http://localhost:7007&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        angular<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;\uAC1C\uBC1C \uBAA8\uB4DC\uC5D0\uC11C \uC791\uB3D9\uD558\uB294 \uAD6C\uC131\uB41C Angular \uC2A4\uD1A0\uB9AC\uBD81&#39;</span><span class="token punctuation">,</span>
          url<span class="token operator">:</span> <span class="token string">&#39;http://localhost:7008&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      react<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;\uD504\uB85C\uB355\uC158\uC5D0\uC11C \uC791\uB3D9\uD558\uB294 \uAD6C\uC131\uB41C React \uC2A4\uD1A0\uB9AC\uBD81&#39;</span><span class="token punctuation">,</span>
        url<span class="token operator">:</span> <span class="token string">&#39;https://your-production-react-storybook-url&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      angular<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;\uD504\uB85C\uB355\uC158\uC5D0\uC11C \uC791\uB3D9\uD558\uB294 \uAD6C\uC131\uB41C Angular \uC2A4\uD1A0\uB9AC\uBD81&#39;</span><span class="token punctuation">,</span>
        url<span class="token operator">:</span> <span class="token string">&#39;https://your-production-angular-storybook-url&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF" aria-hidden="true">#</a> \uBB38\uC81C \uD574\uACB0</h2><h3 id="\u1109\u1173\u1110\u1169\u1105\u1175\u1107\u116E\u11A8-\u1100\u116E\u1109\u1165\u11BC\u110B\u1175-\u1102\u1162-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173\u110B\u116A-\u110C\u1161\u11A8\u1103\u1169\u11BC\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u110B\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u1109\u1173\u1110\u1169\u1105\u1175\u1107\u116E\u11A8-\u1100\u116E\u1109\u1165\u11BC\u110B\u1175-\u1102\u1162-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173\u110B\u116A-\u110C\u1161\u11A8\u1103\u1169\u11BC\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u110B\u1161\u110B\u116D" aria-hidden="true">#</a> \uC2A4\uD1A0\uB9AC\uBD81 \uAD6C\uC131\uC774 \uB0B4 \uD504\uB85C\uC81D\uD2B8\uC640 \uC791\uB3D9\uD558\uC9C0 \uC54A\uC544\uC694</h3><p>\uB9CC\uC57D \uC624\uB798\uB41C \uC2A4\uD1A0\uB9AC\uBD81 \uBC84\uC804\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uAC70\uB098 \uCD5C\uC2E0 \uBC84\uC804\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC5C6\uB294 \uD504\uB85C\uC81D\uD2B8 \uD2B9\uC815 \uC694\uAD6C \uC0AC\uD56D\uC774 \uC788\uB2E4\uBA74, \uC2A4\uD1A0\uB9AC\uBD81 CLI\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC2A4\uD1A0\uB9AC\uBD81\uC744 \uCD5C\uC2E0 \uBC84\uC804\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uC9C0 \uC54A\uACE0 \uBC30\uD3EC\uD560 \uB54C index.json \uD30C\uC77C\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74:</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npx storybook@7.5.3 extract
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),c=[i];function l(r,u){return s(),a("div",null,c)}var g=n(e,[["render",l],["__file","index.html.vue"]]);export{g as default};
