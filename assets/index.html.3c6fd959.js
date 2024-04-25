import{_ as n}from"./app.3052dcfb.js";import{l as s,m as a,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const t={},o=e(`<p>Storybook\uC740 \uC644\uC804\uD788 \uC775\uBA85\uC758 \uB370\uC774\uD130\uB97C \uC218\uC9D1\uD558\uC5EC \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uAC1C\uC120\uD558\uB294 \uB370 \uB3C4\uC6C0\uC744 \uC90D\uB2C8\uB2E4. \uC774 \uC775\uBA85 \uD504\uB85C\uADF8\uB7A8\uC5D0 \uCC38\uC5EC\uD558\uB294 \uAC83\uC740 \uC120\uD0DD \uC0AC\uD56D\uC774\uBA70, \uC5B4\uB5A4 \uC815\uBCF4\uB3C4 \uACF5\uC720\uD558\uACE0 \uC2F6\uC9C0 \uC54A\uB2E4\uBA74 \uC120\uD0DD \uC0AC\uD56D\uC5D0\uC11C \uC81C\uC678\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110B\u116B-telemetry\u1100\u1161-\u1109\u116E\u110C\u1175\u11B8\u1103\u116C\u1102\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u110B\u116B-telemetry\u1100\u1161-\u1109\u116E\u110C\u1175\u11B8\u1103\u116C\u1102\u1161\u110B\u116D" aria-hidden="true">#</a> \uC65C Telemetry\uAC00 \uC218\uC9D1\uB418\uB098\uC694?</h2><p>\uC218\uC2ED\uB9CC \uBA85\uC758 \uAC1C\uBC1C\uC790\uB4E4\uC774 \uC77C\uC0C1\uC801\uC73C\uB85C Storybook\uC744 \uC0AC\uC6A9\uD558\uC5EC \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uBE4C\uB4DC, \uD14C\uC2A4\uD2B8 \uBC0F \uBB38\uC11C\uD654\uD569\uB2C8\uB2E4. Storybook\uC740 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uC911\uB9BD\uC801\uC774\uBA70 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD504\uB7F0\uD2B8\uC5D4\uB4DC \uC0DD\uD0DC\uACC4\uC640 \uD1B5\uD569\uB429\uB2C8\uB2E4:</p><ul><li>JavaScript \uD504\uB808\uC784\uC6CC\uD06C: React, Vue 3, Svelte \uBC0F Solid</li><li>\uB77C\uC774\uBE0C\uB7EC\uB9AC: Styled-Components, Tailwind, Redux</li><li>\uB514\uC790\uC778 \uB3C4\uAD6C: Figma, Sketch, Zeplin \uBC0F InVision</li><li>Workflow \uB3C4\uAD6C: Notion, Confluence \uBC0F Jira</li></ul><p>\uACFC\uAC70\uC5D0\uB294 \uAC1C\uC120 \uD504\uB85C\uC138\uC2A4\uAC00 \uC218\uB3D9\uC801\uC778 \uD53C\uB4DC\uBC31 \uC218\uC9D1\uC5D0 \uC758\uC874\uD588\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC810\uC810 \uB354 \uB9CE\uC740 \uC0AC\uC6A9\uC790\uB4E4\uACFC \uB2E4\uC591\uD55C \uD1B5\uD569\uC744 \uC9C0\uC6D0\uD574\uC57C \uD558\uB294 \uC0C1\uD669\uC5D0\uC11C, Storybook \uC0AC\uC6A9\uB7C9 \uBC0F \uBB38\uC81C\uC810\uC744 \uC815\uD655\uD788 \uCE21\uC815\uD558\uAE30 \uC704\uD55C \uBC29\uBC95\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.</p><p>\uC774 \uD154\uB808\uBA54\uD2B8\uB9AC \uB370\uC774\uD130\uB294 \uC6B0\uB9AC(\uC720\uC9C0\uBCF4\uC218\uC790\uB4E4)\uAC00 \uAC00\uC7A5 \uD070 \uC601\uD5A5\uB825\uC744 \uAC00\uC9C4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC6B0\uC120 \uC21C\uC704\uB85C \uC9C0\uC815\uD560 \uC218 \uC788\uAC8C \uB3C4\uC640\uC90D\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574, \uD504\uB860\uD2B8\uC5D4\uB4DC \uC0DD\uD0DC\uACC4\uC758 \uD2B8\uB80C\uB4DC\uB97C \uB530\uB77C\uAC00\uACE0, \uC6B0\uB9AC \uCEE4\uBBA4\uB2C8\uD2F0\uC758 \uB178\uB825\uC774 \uC758\uB3C4\uD55C \uACB0\uACFC\uB97C \uB2EC\uC131\uD558\uB294\uC9C0 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110B\u1165\u1104\u1165\u11AB-\u110C\u1165\u11BC\u1107\u1169\u1100\u1161-\u1109\u116E\u110C\u1175\u11B8\u1103\u116C\u1100\u1169-\u110B\u1175\u11BB\u1102\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u110B\u1165\u1104\u1165\u11AB-\u110C\u1165\u11BC\u1107\u1169\u1100\u1161-\u1109\u116E\u110C\u1175\u11B8\u1103\u116C\u1100\u1169-\u110B\u1175\u11BB\u1102\u1161\u110B\u116D" aria-hidden="true">#</a> \uC5B4\uB5A4 \uC815\uBCF4\uAC00 \uC218\uC9D1\uB418\uACE0 \uC788\uB098\uC694?</h2><p>\uC6B0\uB9AC\uB294 \uBA85\uB839\uC5B4 \uD638\uCD9C, Storybook \uBC84\uC804, \uC560\uB4DC\uC628, \uADF8\uB9AC\uACE0 \uBDF0 \uB808\uC774\uC5B4\uB97C \uD3EC\uD568\uD55C \uC77C\uBC18\uC801\uC778 \uC0AC\uC6A9 \uC815\uBCF4\uB97C \uC218\uC9D1\uD569\uB2C8\uB2E4.</p><p>\uC6B0\uB9AC\uB294 \uD2B9\uD788 \uD154\uB808\uBBF8\uD2B8\uB9AC \uC774\uBCA4\uD2B8\uC5D0\uC11C \uB2E4\uC74C \uC815\uBCF4\uB97C \uCD94\uC801\uD569\uB2C8\uB2E4:</p><ul><li>\uBC1C\uC0DD \uC2DC\uAC01.</li><li>\uC2E4\uD589\uB41C \uBA85\uB839 (\uC608: init, upgrade, dev, build).</li><li>Storybook \uACE0\uC720 \uC2DD\uBCC4\uC790: Storybook \uC124\uCE58 \uACFC\uC815 \uC911\uC5D0 \uC0DD\uC131\uB41C \uB2E8\uBC29\uD5A5 \uD574\uC2DC.</li><li>\uC774\uBCA4\uD2B8 \uBC1C\uC0DD \uC9C0\uC810\uC758 IP \uC8FC\uC18C\uC758 \uB2E8\uBC29\uD5A5 \uD574\uC2DC (\uC2A4\uD338 \uD0D0\uC9C0\uC6A9).</li><li>\uC2A4\uD1A0\uB9AC \uC218.</li><li>Storybook \uBC84\uC804.</li><li>Storybook \uBA54\uD0C0\uB370\uC774\uD130: \uC5B8\uC5B4 (\uC608: TypeScript, JavaScript). \uC9C0\uC6D0\uB418\uB294 \uBDF0 \uB808\uC774\uC5B4 (\uC608: React, Vue 3, Angular, Svelte). \uBE4C\uB354 (\uC608: Webpack5, Vite). \uBA54\uD0C0 \uD504\uB808\uC784\uC6CC\uD06C (\uC608: Next, Gatsby, CRA). \uC560\uB4DC\uC628 (\uC608: Essentials, Accessibility).</li><li>\uC5B8\uC5B4 (\uC608: TypeScript, JavaScript).</li><li>\uC9C0\uC6D0\uB418\uB294 \uBDF0 \uB808\uC774\uC5B4 (\uC608: React, Vue 3, Angular, Svelte).</li><li>\uBE4C\uB354 (\uC608: Webpack5, Vite).</li><li>\uBA54\uD0C0 \uD504\uB808\uC784\uC6CC\uD06C (\uC608: Next, Gatsby, CRA).</li><li>\uC560\uB4DC\uC628 (\uC608: Essentials, Accessibility).</li><li>\uD328\uD0A4\uC9C0 \uB9E4\uB2C8\uC800 \uC815\uBCF4 (\uC608: npm, yarn).</li><li>Monorepo \uC815\uBCF4 (\uC608: NX, Turborepo).</li><li>\uC571 \uB0B4 \uC774\uBCA4\uD2B8 (\uC608: Storybook \uAC00\uC774\uB4DC \uD22C\uC5B4).</li></ul><p>\uC6D0\uC2DC \uB370\uC774\uD130 \uC811\uADFC\uC740 \uB9E4\uC6B0 \uC81C\uD55C\uB418\uC5B4 \uC788\uC73C\uBA70, \uD154\uB808\uBBF8\uD2B8\uB9AC\uB97C \uC720\uC9C0\uD558\uB294 Storybook \uD575\uC2EC \uD300\uC758 \uC77C\uBD80 \uBA64\uBC84\uC5D0\uAC8C\uB9CC \uD5C8\uC6A9\uB429\uB2C8\uB2E4. \uB370\uC774\uD130 \uC138\uD2B8\uC5D0\uC11C \uAC1C\uBCC4 \uC0AC\uC6A9\uC790\uB97C \uC2DD\uBCC4\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB370\uC774\uD130\uB294 \uC775\uBA85\uD654\uB418\uC5B4 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC5ED\uCD94\uC801\uB420 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1106\u1175\u11AB\u1100\u1161\u11B7\u1112\u1161\u11AB-\u110C\u1165\u11BC\u1107\u1169\u1102\u1173\u11AB-\u110B\u1165\u1104\u1165\u11AB\u1100\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u1106\u1175\u11AB\u1100\u1161\u11B7\u1112\u1161\u11AB-\u110C\u1165\u11BC\u1107\u1169\u1102\u1173\u11AB-\u110B\u1165\u1104\u1165\u11AB\u1100\u1161\u110B\u116D" aria-hidden="true">#</a> \uBBFC\uAC10\uD55C \uC815\uBCF4\uB294 \uC5B4\uB5A4\uAC00\uC694?</h2><p>\uC6B0\uB9AC\uB294 \uB2F9\uC2E0\uC758 \uAC1C\uC778 \uC815\uBCF4\uC640 \uBCF4\uC548\uC744 \uB9E4\uC6B0 \uC911\uC694\uD558\uAC8C \uC0DD\uAC01\uD569\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 \uCD94\uAC00 \uC870\uCE58\uB97C \uCDE8\uD558\uC5EC \uC548\uC804\uD55C \uB370\uC774\uD130(\uC608: \uD658\uACBD \uBCC0\uC218 \uB610\uB294 \uB2E4\uB978 \uD615\uD0DC\uC758 \uBBFC\uAC10\uD55C \uB370\uC774\uD130)\uAC00 \uBD84\uC11D\uC5D0 \uC720\uCD9C\uB418\uC9C0 \uC54A\uB3C4\uB85D \uD569\uB2C8\uB2E4. STORYBOOK_TELEMETRY_DEBUG\uB97C 1\uB85C \uC124\uC815\uD558\uC5EC \uC218\uC9D1\uD55C \uC815\uBCF4\uB97C \uCD9C\uB825\uD558\uBA74 \uC218\uC9D1\uB41C \uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4:</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>STORYBOOK_TELEMETRY_DEBUG=1 npm run storybook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uB2E4\uC74C \uCD9C\uB825\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;anonymousId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8bcfdfd5f9616a1923dd92adf89714331b2d18693c722e05152a47f8093392bb&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;eventType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dev&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;payload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;versionStatus&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cached&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;storyIndex&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;storyCount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;componentCount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;pageStoryCount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;playStoryCount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;autodocsCount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;storiesMdxCount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;mdxCount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;exampleStoryCount&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;exampleDocsCount&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;onboardingStoryCount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;onboardingDocsCount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;generatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1689007841223</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;hasCustomBabel&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
    <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook\uC758 \uC548\uB0B4 \uD22C\uC5B4\uAC00 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uB294 \uACBD\uC6B0, \uB2E4\uC74C\uACFC \uAC19\uC740 \uCD9C\uB825\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;eventType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;addon-onboarding&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;payload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;step&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1:Welcome&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;addonVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.6&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \uC704\uC5D0\uC11C \uC218\uC9D1\uB41C \uBA54\uD0C0\uB370\uC774\uD130 \uCC38\uC870.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u110B\u1175-\u1103\u1166\u110B\u1175\u1110\u1165\u1102\u1173\u11AB-\u1100\u1169\u11BC\u110B\u1172\u1103\u116C\u1102\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175-\u1103\u1166\u110B\u1175\u1110\u1165\u1102\u1173\u11AB-\u1100\u1169\u11BC\u110B\u1172\u1103\u116C\u1102\u1161\u110B\u116D" aria-hidden="true">#</a> \uC774 \uB370\uC774\uD130\uB294 \uACF5\uC720\uB418\uB098\uC694?</h2><p>\uC218\uC9D1\uD558\uB294 \uB370\uC774\uD130\uB294 \uC775\uBA85\uC774\uBA70 \uC6D0\uCC9C\uC744 \uCD94\uC801\uD560 \uC218 \uC5C6\uC73C\uBA70, \uC9D1\uACC4 \uD615\uD0DC\uB85C\uB9CC \uC758\uBBF8\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC218\uC9D1\uD558\uB294 \uB370\uC774\uD130\uB294 \uAC1C\uC778 \uC2DD\uBCC4\uC774 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC55E\uC73C\uB85C \uCEE4\uBBA4\uB2C8\uD2F0\uC640 \uAD00\uB828 \uB370\uC774\uD130\uB97C \uACF5\uAC1C \uB300\uC2DC\uBCF4\uB4DC(\uB610\uB294 \uC720\uC0AC\uD55C \uB370\uC774\uD130 \uD45C\uD604 \uD615\uC2DD)\uB97C \uD1B5\uD574 \uACF5\uC720\uD560 \uACC4\uD68D\uC785\uB2C8\uB2E4.</p><h2 id="\u1100\u1165\u1107\u116E\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1100\u1165\u1107\u116E\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uAC70\uBD80\uD558\uB294 \uBC29\uBC95</h2><p>Storybook\uC758 \uAD6C\uC131 \uC694\uC18C\uC778 disableTelemetry\uB97C true\uB85C \uC124\uC815\uD558\uAC70\uB098 --disable-telemetry \uD50C\uB798\uADF8\uB97C \uC0AC\uC6A9\uD558\uAC70\uB098 STORYBOOK_DISABLE_TELEMETRY \uD658\uACBD \uBCC0\uC218\uB97C 1\uB85C \uC124\uC815\uD558\uC5EC \uD154\uB808\uBA54\uD2B8\uB9AC\uB97C \uAC70\uBD80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uAD50\uCCB4\uD558\uC138\uC694 (\uC608: react-webpack5, vue3-vite)</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    disableTelemetry<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u{1F448} \uD154\uB808\uBA54\uD2B8\uB9AC \uBE44\uD65C\uC131\uD654</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u110F\u1173\u1105\u1162\u1109\u1175-\u1107\u1169\u1100\u1169\u1109\u1165-\u1100\u1175\u1107\u1169\u11AB\u110C\u1165\u11A8\u110B\u1173\u1105\u1169-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A\u1103\u116C\u11B7" tabindex="-1"><a class="header-anchor" href="#\u110F\u1173\u1105\u1162\u1109\u1175-\u1107\u1169\u1100\u1169\u1109\u1165-\u1100\u1175\u1107\u1169\u11AB\u110C\u1165\u11A8\u110B\u1173\u1105\u1169-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A\u1103\u116C\u11B7" aria-hidden="true">#</a> \uD06C\uB798\uC2DC \uBCF4\uACE0\uC11C (\uAE30\uBCF8\uC801\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB428)</h2><p>\uC77C\uBC18 \uC0AC\uC6A9 \uD154\uB808\uBA54\uD2B8\uB9AC \uC678\uC5D0\uB3C4, \uCDA9\uB3CC \uBCF4\uACE0\uC11C\uB97C \uACF5\uC720\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. Storybook\uC5D0\uC11C\uB294 \uC624\uB958 \uAC1D\uCCB4\uB97C \uC0B4\uD3B4\uBCF8 \uD6C4(\uBAA8\uB4E0 \uC0AC\uC6A9\uC790 \uACBD\uB85C\uB97C \uC81C\uAC70), \uD574\uB2F9 \uC815\uBCF4\uB97C \uD154\uB808\uBA54\uD2B8\uB9AC \uC774\uBCA4\uD2B8\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4. \uCDA9\uB3CC \uBCF4\uACE0\uB97C \uD65C\uC131\uD654\uD558\uB824\uBA74 --enable-crash-reports \uD50C\uB798\uADF8\uB97C \uC0AC\uC6A9\uD558\uC5EC enableCrashReports \uAD6C\uC131 \uC694\uC18C\uB97C true\uB85C \uC124\uC815\uD558\uAC70\uB098, STORYBOOK_ENABLE_CRASH_REPORTS \uD658\uACBD \uBCC0\uC218\uB97C 1\uB85C \uC124\uC815\uD558\uBA74 \uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uAE30\uC785\uD569\uB2C8\uB2E4(\uC608: react-webpack5, vue3-vite)</span>
  framework<span class="token operator">:</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;../src/**/*.mdx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../src/**/*.stories.@(js|jsx|mjs|ts|tsx)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    enableCrashReports<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u{1F448} \uCDA9\uB3CC \uBCF4\uACE0\uC11C\uB97C \uD154\uB808\uBA54\uD2B8\uB9AC \uC774\uBCA4\uD2B8\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD154\uB808\uBA54\uD2B8\uB9AC \uC774\uBCA4\uD2B8\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD56D\uBAA9\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  stack<span class="token operator">:</span> <span class="token string">&#39;Error: Your button is not working\\n&#39;</span> <span class="token operator">+</span>
    <span class="token string">&#39;    at Object.&lt;anonymous&gt; ($SNIP/test.js:39:27)\\n&#39;</span> <span class="token operator">+</span>
    <span class="token string">&#39;    at Module._compile (node:internal/modules/cjs/loader:1103:14)\\n&#39;</span> <span class="token operator">+</span>
    <span class="token string">&#39;    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)\\n&#39;</span> <span class="token operator">+</span>
    <span class="token string">&#39;    at Module.load (node:internal/modules/cjs/loader:981:32)\\n&#39;</span> <span class="token operator">+</span>
    <span class="token string">&#39;    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\\n&#39;</span> <span class="token operator">+</span>
    <span class="token string">&#39;    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)\\n&#39;</span> <span class="token operator">+</span>
    <span class="token string">&#39;    at node:internal/main/run_main_module:17:47&#39;</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">&#39;Your button is not working&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),p=[o];function r(i,l){return s(),a("div",null,p)}var b=n(t,[["render",r],["__file","index.html.vue"]]);export{b as default};
