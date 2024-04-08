import{_ as a}from"./app.a99075bb.js";import{l as s,m as e,K as n}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var r="/assets/Codecontributions_0.6d3c8ea6.png",p="/assets/Codecontributions_1.d8c75809.png",t="/assets/Codecontributions_2.b18f6153.png";const o={},i=n(`<p>Storybook\uC758 \uBAA8\uB178\uB9AC\uD3EC\uC5D0 \uC0C8 \uAE30\uB2A5\uC774\uB098 \uBC84\uADF8 \uC218\uC815\uC744 \uAE30\uC5EC\uD558\uC138\uC694. \uC774 \uD398\uC774\uC9C0\uC5D0\uC11C\uB294 \uCF54\uB4DC\uB97C \uAE30\uC5EC\uD558\uAE30 \uC704\uD574 \uD658\uACBD\uC744 \uC124\uC815\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.</p><h2 id="\u1109\u1161\u110C\u1165\u11AB-\u110C\u116E\u11AB\u1107\u1175-\u1109\u1161\u1112\u1161\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110C\u1165\u11AB-\u110C\u116E\u11AB\u1107\u1175-\u1109\u1161\u1112\u1161\u11BC" aria-hidden="true">#</a> \uC0AC\uC804 \uC900\uBE44 \uC0AC\uD56D</h2><ul><li>Node \uBC84\uC804 18\uC774 \uC124\uCE58\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694 (\uC81C\uC548: v18.16.0).</li><li>Windows\uB97C \uC0AC\uC6A9 \uC911\uC774\uB77C\uBA74 Windows Subsystem for Linux (WSL)\uC744 \uC0AC\uC6A9\uD558\uC138\uC694.</li></ul><h2 id="\u110E\u1169\u1100\u1175-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110E\u1169\u1100\u1175-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uCD08\uAE30 \uC124\uC815</h2><p>Storybook \uBAA8\uB178 \uB808\uD3EC\uC9C0\uD1A0\uB9AC\uB97C \uD3EC\uD06C\uD558\uACE0 \uB85C\uCEEC\uB85C \uD074\uB860\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git clone https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>your<span class="token operator">-</span>username<span class="token operator">/</span>storybook<span class="token punctuation">.</span>git
cd storybook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook\uC740 Yarn \uD328\uD0A4\uC9C0 \uB9E4\uB2C8\uC800\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. Corepack\uC744 \uC0AC\uC6A9\uD558\uC5EC Storybook\uACFC \uD568\uAED8 \uC0AC\uC6A9\uD560 \uC62C\uBC14\uB978 \uBC84\uC804\uC744 \uC124\uC815\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>corepack enable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u110E\u1165\u11BA-\u1107\u1165\u11AB\u110D\u1162-\u1109\u1162\u11AB\u1103\u1173\u1107\u1161\u11A8\u1109\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110E\u1165\u11BA-\u1107\u1165\u11AB\u110D\u1162-\u1109\u1162\u11AB\u1103\u1173\u1107\u1161\u11A8\u1109\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uCCAB \uBC88\uC9F8 \uC0CC\uB4DC\uBC15\uC2A4 \uC2E4\uD589\uD558\uAE30</h2><p>Storybook \uAC1C\uBC1C\uC740 \uAC01\uAC01 \uB2E4\uB978 \uC0AC\uC6A9\uC790 \uC124\uC815\uC5D0 \uB300\uC751\uD558\uB294 \uD15C\uD50C\uB9BF\uD654\uB41C Storybook \uD658\uACBD\uC778 \uC0CC\uB4DC\uBC15\uC2A4 \uC138\uD2B8\uC5D0\uC11C \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4. \uAC01 \uC0CC\uB4DC\uBC15\uC2A4 \uC548\uC5D0\uC11C\uB294 \uBAA8\uB4E0 \uD658\uACBD\uC5D0\uC11C \uD575\uC2EC \uAE30\uB2A5\uACFC \uC560\uB4DC\uC628\uC744 \uD14C\uC2A4\uD2B8\uD560 \uC218 \uC788\uB3C4\uB85D \uC77C\uBC18\uD654\uB41C \uC774\uC57C\uAE30 \uC9D1\uD569\uC774 \uC8FC\uC785\uB429\uB2C8\uB2E4.</p><p>\uB85C\uCEEC\uC5D0\uC11C \uC0CC\uB4DC\uBC15\uC2A4\uB97C \uC2E4\uD589\uD558\uB824\uBA74 \uB2E4\uC74C \uBA85\uB839\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>yarn start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC694\uAD6C \uC0AC\uD56D\uC744 \uC124\uCE58\uD558\uACE0 \uCF54\uB4DC\uB97C \uBE4C\uB4DC\uD558\uACE0 Vite React \uC124\uC815\uC744 \uAE30\uBC18\uC73C\uB85C \uD55C \uC2DC\uC791 \uC608\uC81C\uB97C \uB9CC\uB4E4\uACE0 \uC5F0\uACB0\uD55C \uB2E4\uC74C Storybook \uC11C\uBC84\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4.</p><p>\uBAA8\uB4E0 \uAC83\uC774 \uC798 \uC9C4\uD589\uB418\uBA74 \uC0CC\uB4DC\uBC15\uC2A4\uAC00 \uC2E4\uD589\uB418\uB294 \uAC83\uC744 \uBCFC \uC218 \uC788\uC5B4\uC694.</p><p><img src="`+r+`" alt="Codecontributions_0.png"></p><h2 id="\u1103\u1161\u1105\u1173\u11AB-\u1109\u1162\u11AB\u1103\u1173\u1107\u1161\u11A8\u1109\u1173-\u1110\u1166\u11B7\u1111\u1173\u11AF\u1105\u1175\u11BA-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u1105\u1173\u11AB-\u1109\u1162\u11AB\u1103\u1173\u1107\u1161\u11A8\u1109\u1173-\u1110\u1166\u11B7\u1111\u1173\u11AF\u1105\u1175\u11BA-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB2E4\uB978 \uC0CC\uB4DC\uBC15\uC2A4 \uD15C\uD50C\uB9BF \uC2E4\uD589\uD558\uAE30</h2><p>\uAE30\uBCF8\uC801\uC73C\uB85C &#39;start&#39; \uBA85\uB839\uC740 Vite \uAE30\uBC18\uC758 React \uD15C\uD50C\uB9BF\uC744 \uCD08\uAE30\uD654\uD558\uB3C4\uB85D \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uB80C\uB354\uB7EC\uC5D0\uC11C \uC791\uC5C5\uD560 \uACC4\uD68D\uC778 \uACBD\uC6B0\uC5D0\uB3C4 \uB3D9\uC77C\uD558\uAC8C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C\uACFC \uAC19\uC774 &#39;task&#39; \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC5EC \uC2DC\uC791\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>yarn task
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC54C\uB9DE\uAC8C \uB2F5\uBCC0\uD558\uC5EC Storybook\uC774 \uADC0\uD558\uC758 \uBAA9\uD45C\uB97C \uD30C\uC545\uD558\uB3C4\uB85D \uD5C8\uC6A9\uD558\uC2ED\uC2DC\uC624. \uC774\uB7EC\uD55C \uC9C8\uBB38\uC5D0 \uB2F5\uBCC0\uD55C \uD6C4\uC5D0\uB294 \uD544\uC694\uD560 \uACBD\uC6B0 \uB2E4\uC2DC \uC2E4\uD589\uD558\uB824\uBA74 \uC120\uD0DD\uD55C \uC635\uC158\uACFC \uD568\uAED8 \uC804\uCCB4 \uBA85\uB839\uC774 \uD45C\uC2DC\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</p><h2 id="\u1110\u1166\u1109\u1173\u1110\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1110\u1166\u1109\u1173\u1110\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uD14C\uC2A4\uD2B8 \uC2E4\uD589\uD558\uAE30</h2><p>\uCCAB \uBC88\uC9F8 \uC0CC\uB4DC\uBC15\uC2A4\uB97C \uC131\uACF5\uC801\uC73C\uB85C \uC2E4\uD589\uD55C \uD6C4\uC5D0\uB294 \uB85C\uCEEC \uBA38\uC2E0\uC5D0 \uAD6C\uCD95\uB41C \uC644\uC804\uD788 \uAE30\uB2A5\uD558\uB294 Storybook \uBC84\uC804\uC774 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uCF54\uB4DC \uBCC0\uACBD\uC5D0 \uB4E4\uC5B4\uAC00\uAE30 \uC804\uC5D0 \uBAA8\uB4E0 \uAC83\uC774 \uC81C\uB300\uB85C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uD2B9\uD788 \uD14C\uC2A4\uD2B8 \uC2A4\uC704\uD2B8\uB97C \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p>\uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC5EC \uD14C\uC2A4\uD2B8\uB97C \uC2E4\uD589\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>yarn test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u1100\u1162\u1107\u1161\u11AF\u110B\u1173\u11AF-\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1109\u1166\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u1107\u1161\u11AF\u110B\u1173\u11AF-\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1109\u1166\u110B\u116D" aria-hidden="true">#</a> \uAC1C\uBC1C\uC744 \uC2DC\uC791\uD558\uC138\uC694</h2><p>\uC774\uC81C \uC124\uC815\uC744 \uD655\uC778\uD588\uC73C\uB2C8 \uCF54\uB4DC \uC791\uC5C5\uC5D0 \uB4E4\uC5B4\uAC00 \uBD05\uC2DC\uB2E4. \uAC00\uC7A5 \uAC04\uB2E8\uD55C \uBC29\uBC95\uC740 \uD55C \uCC3D\uC5D0\uC11C \uC0CC\uB4DC\uBC15\uC2A4\uB97C \uC2E4\uD589\uD558\uACE0 \uB2E4\uB978 \uCC3D\uC5D0\uC11C \uB300\uD654\uD615 \uBE4C\uB4DC \uD504\uB85C\uC138\uC2A4\uB97C \uC2E4\uD589\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.</p><p>\uC544\uB9C8\uB3C4 yarn start \uBA85\uB839\uC744 \uC2E4\uD589\uD55C \uD6C4\uC5D0 \uCD08\uAE30\uD654\uB41C Vite \uAE30\uBC18 React \uC0CC\uB4DC\uBC15\uC2A4\uB97C \uC2E4\uD589 \uC911\uC774\uB77C\uACE0 \uAC00\uC815\uD569\uB2C8\uB2E4. \uC0C8\uB85C\uC6B4 \uD130\uBBF8\uB110 \uCC3D\uC744 \uC5F4\uACE0 Storybook \uBAA8\uB178\uB808\uD3EC\uC758 \uCF54\uB4DC \uB514\uB809\uD1A0\uB9AC\uB85C \uC774\uB3D9\uD55C \uB2E4\uC74C \uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC5EC \uAE30\uC5EC\uB97C \uC704\uD55C \uC0C8\uB85C\uC6B4 \uBE0C\uB79C\uCE58\uB97C \uB9CC\uB4E4\uC5B4\uC8FC\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git checkout <span class="token operator">-</span>b my<span class="token operator">-</span>first<span class="token operator">-</span>storybook<span class="token operator">-</span>contribution
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uB2E4\uC74C\uACFC \uAC19\uC774 \uBE4C\uB4DC \uD504\uB85C\uC138\uC2A4\uB97C \uC2E4\uD589\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>yarn build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>&quot;watch&quot; \uBAA8\uB4DC\uC5D0\uC11C \uBE4C\uB4DC \uD504\uB85C\uC138\uC2A4\uB97C \uC2DC\uC791\uD558\uB77C\uB294 \uBA54\uC2DC\uC9C0\uAC00 \uB098\uC624\uBA74, \uB300\uD654\uD615 \uBAA8\uB4DC\uC5D0\uC11C \uAC1C\uBC1C\uD558\uAE30 \uC704\uD574 &quot;yes&quot;\uB97C \uC120\uD0DD\uD558\uC138\uC694. \uADF8 \uD6C4, \uC5B4\uB5A4 \uD328\uD0A4\uC9C0\uB97C \uBE4C\uB4DC\uD560\uC9C0 \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624. \uC608\uB97C \uB4E4\uC5B4, @storybook/addon-docs \uAE30\uB2A5\uC744 \uAC1C\uBC1C\uD558\uB824\uBA74 @storybook/addon-docs\uC640 @storybook/components \uB458 \uB2E4 \uC120\uD0DD\uD558\uACE0 \uC2F6\uC744 \uAC83\uC785\uB2C8\uB2E4.</p><p><img src="`+p+'" alt="\uC774\uBBF8\uC9C0"></p><p>\uC791\uC5C5\uD558\uB294 \uB0B4\uC6A9\uC774 \uBBF8\uB9AC\uBCF4\uAE30(\uC2A4\uD1A0\uB9AC\uAC00 \uD45C\uC2DC\uB418\uB294 \uAC00\uC7A5 \uB0B4\uBD80\uC758 Storybook iframe)\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uACBD\uC6B0, \uC800\uC7A5\uD55C \uD6C4 1~2\uCD08 \uD6C4\uC5D0 \uC790\uB3D9 \uC0C8\uB85C\uACE0\uCE68\uB429\uB2C8\uB2E4.```</p><p>\uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74(Addons\uC774 \uD45C\uC2DC\uB418\uB294 \uAC00\uC7A5 \uBC14\uAE65\uCABD Storybook iframe\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uBA74), \uC800\uC7A5\uD55C \uD6C4 \uC218\uB3D9\uC73C\uB85C \uC0C8\uB85C \uACE0\uCCD0\uC57C \uD569\uB2C8\uB2E4.</p><p><img src="'+t+`" alt="Codecontributions_2.png"></p><h2 id="\u110C\u1161\u11A8\u110B\u1165\u11B8-\u1112\u116A\u11A8\u110B\u1175\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u11A8\u110B\u1165\u11B8-\u1112\u116A\u11A8\u110B\u1175\u11AB" aria-hidden="true">#</a> \uC791\uC5C5 \uD655\uC778</h2><p>\uCF54\uB529\uC744 \uB9C8\uCE58\uBA74 \uAD00\uB828 \uBB38\uC11C\uC640 \uD14C\uC2A4\uD2B8\uB97C \uCD94\uAC00\uD574\uC8FC\uC138\uC694. \uADF8\uB807\uAC8C \uD558\uBA74 PR(Pull Request) \uAC80\uD1A0 \uACFC\uC815\uC774 \uAC04\uB2E8\uD574\uC9C0\uACE0, \uCF54\uB4DC\uAC00 \uB354 \uBE68\uB9AC \uBCD1\uD569\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="\u110B\u1175\u110B\u1163\u1100\u1175-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u110B\u1163\u1100\u1175-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC774\uC57C\uAE30 \uCD94\uAC00\uD558\uAE30</h3><p>\uB2F9\uC0AC\uC758 \uC2A4\uC704\uD2B8\uC5D0 \uC774\uC57C\uAE30 \uB610\uB294 \uBC94\uC6A9 \uC774\uC57C\uAE30 \uC138\uD2B8\uB97C \uCD94\uAC00\uD558\uBA74 \uC791\uC5C5\uC744 \uD14C\uC2A4\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>Essential \uC560\uB4DC\uC628 \uC911 \uD558\uB098\uC5D0 \uC791\uC5C5 \uC911\uC774\uB77C\uACE0 \uAC00\uC815\uD558\uBA74 \uC644\uC804\uD55C \uC774\uC57C\uAE30 \uC138\uD2B8\uAC00 \uC774\uBBF8 \uC874\uC7AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC560\uB4DC\uC628\uC758 template/stories \uB514\uB809\uD1A0\uB9AC\uB97C \uD655\uC778\uD558\uC5EC \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD574\uC57C \uD558\uB294\uC9C0 \uBB38\uC11C\uD654\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uACE0 \uC5EC\uAE30\uC5D0 \uC774\uC57C\uAE30\uB97C \uCD94\uAC00\uD558\uC138\uC694.</p><p>\uD2B9\uC815 \uB80C\uB354\uB7EC\uC640 \uAD00\uB828\uB41C \uB0B4\uC6A9\uC744 \uC218\uC815\uD558\uACE0 \uC788\uB2E4\uBA74(\uC608: React, Vue 3 \uB4F1), \uD574\uB2F9 \uB80C\uB354\uB7EC\uC640 \uAD00\uB828\uB41C template/stories \uB514\uB809\uD1A0\uB9AC\uB3C4 \uBE44\uC2B7\uD558\uAC8C \uC788\uC73C\uBA70 \uC774\uACF3\uC5D0 \uC774\uC57C\uAE30\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.</p><h3 id="\u1110\u1166\u1109\u1173\u1110\u1173-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1110\u1166\u1109\u1173\u1110\u1173-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uD14C\uC2A4\uD2B8 \uCD94\uAC00\uD558\uAE30</h3><p>\uC720\uB2DB \uD14C\uC2A4\uD2B8\uB97C \uD1B5\uD574 Storybook\uC774 \uC6B0\uC5F0\uD788 \uAE68\uC9C0\uC9C0 \uC54A\uB3C4\uB85D \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCF54\uB4DC\uAC00 \uC608\uC0C1\uCE58 \uBABB\uD55C \uBC29\uC2DD\uC73C\uB85C \uC5ED\uD589\uD560 \uC218 \uC788\uB294 \uACBD\uC6B0, \uD480 \uB9AC\uD018\uC2A4\uD2B8\uC5D0 \uB2E8\uC704 \uD14C\uC2A4\uD2B8\uB97C \uD3EC\uD568\uC2DC\uD0B5\uB2C8\uB2E4. \uB2E4\uC74C \uB124\uC774\uBC0D \uCEE8\uBCA4\uC158\uC744 \uC0AC\uC6A9\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">+</span><span class="token operator">--</span> parentFolder
<span class="token operator">|</span>   <span class="token operator">+</span><span class="token operator">--</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span><span class="token punctuation">.</span>ts
<span class="token operator">|</span>   <span class="token operator">+</span><span class="token operator">--</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span><span class="token punctuation">.</span>test<span class="token punctuation">.</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u110B\u1166\u1103\u1173-\u1110\u116E-\u110B\u1166\u11AB\u1103\u1173-\u1110\u1166\u1109\u1173\u1110\u1173-e2e" tabindex="-1"><a class="header-anchor" href="#\u110B\u1166\u1103\u1173-\u1110\u116E-\u110B\u1166\u11AB\u1103\u1173-\u1110\u1166\u1109\u1173\u1110\u1173-e2e" aria-hidden="true">#</a> \uC5D0\uB4DC \uD22C \uC5D4\uB4DC \uD14C\uC2A4\uD2B8 (e2e)</h3><p>Storybook\uC758 monorepo\uB294 CI \uC911\uC5D0 Playwright\uB97C \uC0AC\uC6A9\uD55C end-to-end \uD14C\uC2A4\uD2B8\uB97C \uC758\uC874\uD558\uB3C4\uB85D \uC124\uC815\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uD14C\uC2A4\uD2B8\uB97C \uB3D5\uAE30 \uC704\uD574 \uAE30\uC5EC\uB97C \uC81C\uCD9C\uD558\uAE30 \uC804\uC5D0 \uC774 \uD14C\uC2A4\uD2B8 \uC2A4\uC704\uD2B8\uB97C \uC2E4\uD589\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4.</p><p>\uC0CC\uB4DC\uBC15\uC2A4\uC5D0 \uB300\uD55C e2e \uD14C\uC2A4\uD2B8\uB97C \uC2E4\uD589\uD558\uB824\uBA74 e2e-tests \uC791\uC5C5\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>yarn task <span class="token operator">--</span>task e2e<span class="token operator">-</span>tests <span class="token operator">--</span>template<span class="token operator">=</span>react<span class="token operator">-</span>vite<span class="token operator">/</span><span class="token keyword">default</span><span class="token operator">-</span>ts <span class="token operator">--</span>start<span class="token operator">-</span>from<span class="token operator">=</span>auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uBB38\uC81C\uAC00 \uC788\uACE0 \uB514\uBC84\uAE45\uC744 \uC6D0\uD55C\uB2E4\uBA74 DEBUG=1 \uD658\uACBD \uBCC0\uC218\uB97C \uC804\uB2EC\uD558\uC5EC Playwright\uAC00 \uAC10\uC2DC \uBAA8\uB4DC\uC5D0\uC11C \uC2E4\uD589\uB418\uB3C4\uB85D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">DEBUG</span><span class="token operator">=</span><span class="token number">1</span> yarn task <span class="token operator">--</span>task e2e<span class="token operator">-</span>tests <span class="token operator">--</span>template<span class="token operator">=</span>react<span class="token operator">-</span>vite<span class="token operator">/</span><span class="token keyword">default</span><span class="token operator">-</span>ts <span class="token operator">--</span>start<span class="token operator">-</span>from<span class="token operator">=</span>auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u1111\u116E\u11AF-\u1105\u1175\u110F\u1170\u1109\u1173\u1110\u1173-\u110C\u1166\u110E\u116E\u11AF\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF-\u1105\u1175\u110F\u1170\u1109\u1173\u1110\u1173-\u110C\u1166\u110E\u116E\u11AF\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uD480 \uB9AC\uD018\uC2A4\uD2B8 \uC81C\uCD9C\uD558\uAE30</h2><p>\uAE30\uC5EC\uB97C \uC81C\uCD9C\uD558\uAE30 \uC804\uC5D0 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uB2E4\uC74C \uBA85\uB839\uC5B4\uB85C \uD14C\uC2A4\uD2B8 \uC2A4\uC704\uD2B8\uB97C \uC2E4\uD589\uD574\uC8FC\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>yarn test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uD558\uB294 \uAC83\uC740 \uB9C8\uC9C0\uB9C9 \uC21C\uAC04\uC758 \uBC84\uADF8\uB97C \uBC29\uC9C0\uD558\uB294 \uAC83 \uC678\uC5D0\uB3C4, \uADC0\uD558\uAC00 \uD480 \uB9AC\uD018\uC2A4\uD2B8\uB97C \uC81C\uCD9C\uD55C \uD6C4 \uBE60\uB974\uAC8C \uAE30\uC5EC\uBB3C\uC744 \uBCD1\uD569\uD558\uB294 \uC88B\uC740 \uBC29\uBC95\uC785\uB2C8\uB2E4. \uC774\uB97C \uD558\uC9C0 \uC54A\uC73C\uBA74 \uC720\uC9C0 \uBCF4\uC218\uC790 \uC911 \uD55C \uBA85\uC774 \uBAA8\uB4E0 \uD14C\uC2A4\uD2B8\uAC00 \uD1B5\uACFC\uD560 \uB54C\uAE4C\uC9C0 \uD480 \uB9AC\uD018\uC2A4\uD2B8\uC5D0 &#39;\uC791\uC5C5 \uC9C4\uD589 \uC911&#39; \uB808\uC774\uBE14\uC744 \uB2EC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="\u1103\u1161\u110B\u1173\u11B7-\u1107\u1173\u1105\u1162\u11AB\u110E\u1175-\u1103\u1162\u1109\u1161\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u110B\u1173\u11B7-\u1107\u1173\u1105\u1162\u11AB\u110E\u1175-\u1103\u1162\u1109\u1161\u11BC" aria-hidden="true">#</a> \uB2E4\uC74C \uBE0C\uB79C\uCE58 \uB300\uC0C1</h3><p>\uD14C\uC2A4\uD2B8 \uC2A4\uC704\uD2B8\uAC00 \uC644\uB8CC\uB418\uBA74, \uCEE4\uBC0B\uD558\uACE0 \uD478\uC2DC\uD558\uACE0, Storybook\uC758 \uB2E4\uC74C(\uAE30\uBCF8) \uBE0C\uB79C\uCE58\uC5D0 \uB300\uD55C \uD480 \uB9AC\uD018\uC2A4\uD2B8\uB97C \uC624\uD508\uD558\uC138\uC694. \uC774 \uBE0C\uB79C\uCE58\uB294 \uBAA8\uB4E0 \uD65C\uBC1C\uD55C \uAC1C\uBC1C\uC774 \uC9C4\uD589\uB418\uBA70, \uCD5C\uC2E0 \uD504\uB9AC\uB9B4\uB9AC\uC2A4 \uBC84\uC804\uACFC \uAD00\uB828\uC774 \uC788\uC2B5\uB2C8\uB2E4(\uC608: 7.0.0-alpha.47).</p><p>\uADC0\uD558\uC758 \uAE30\uC5EC\uAC00 \uBC84\uADF8 \uC218\uC815\uC5D0 \uCD08\uC810\uC744 \uB9DE\uCD94\uACE0 \uB2E4\uC74C \uC548\uC815\uC801\uC778 \uB9B4\uB9AC\uC2A4\uC5D0 \uB098\uD0C0\uB098\uAE38 \uC6D0\uD55C\uB2E4\uBA74, \uD480 \uB9AC\uD018\uC2A4\uD2B8 \uC124\uBA85\uC5D0 \uC5B8\uAE09\uD574\uC8FC\uC138\uC694. \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uB294 \uBCC0\uD654\uC774\uBA70 \uC911\uC694\uD55C \uBC84\uADF8\uB97C \uC218\uC815\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD328\uCE58\uB97C \uC2DC\uB3C4\uD558\uACA0\uC2B5\uB2C8\uB2E4.</p><h3 id="\u1111\u1169\u110F\u1173-\u110C\u1161\u11A8\u110B\u1165\u11B8-\u1109\u1175-\u110B\u1172\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1105\u1175\u1109\u1169\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#\u1111\u1169\u110F\u1173-\u110C\u1161\u11A8\u110B\u1165\u11B8-\u1109\u1175-\u110B\u1172\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1105\u1175\u1109\u1169\u1109\u1173" aria-hidden="true">#</a> \uD3EC\uD06C \uC791\uC5C5 \uC2DC \uC720\uC6A9\uD55C \uB9AC\uC18C\uC2A4</h3><ul><li>\uD3EC\uD06C \uB3D9\uAE30\uD654\uD558\uAE30</li><li>\uC0C1\uC704 \uC800\uC7A5\uC18C\uB97C \uD3EC\uD06C\uC5D0 \uBCD1\uD569\uD558\uAE30</li></ul><h3 id="\u110C\u1161\u11A8\u110B\u1165\u11B8-\u1109\u1175\u11AF\u1111\u1162\u1105\u1173\u11AF-\u110C\u1162\u1112\u1167\u11AB\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u11A8\u110B\u1165\u11B8-\u1109\u1175\u11AF\u1111\u1162\u1105\u1173\u11AF-\u110C\u1162\u1112\u1167\u11AB\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC791\uC5C5 \uC2E4\uD328\uB97C \uC7AC\uD604\uD558\uAE30</h3><p>PR\uC744 \uB9CC\uB4E0 \uD6C4, CI \uC791\uC5C5 \uC911 \uD558\uB098\uAC00 \uC2E4\uD328\uD558\uBA74 \uD574\uB2F9 \uC791\uC5C5\uC758 \uB85C\uADF8\uB97C \uD655\uC778\uD560 \uB54C \uB85C\uCEEC\uC5D0\uC11C \uC791\uC5C5\uC744 \uC7AC\uD604\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD558\uB294 \uBA54\uC2DC\uC9C0\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uC774\uB294 \uC791\uC5C5\uC744 \uC62C\uBC14\uB978 \uD15C\uD50C\uB9BF\uC5D0 \uB300\uD574 \uC2E4\uD589\uD558\uB294 \uAC83\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>yarn task <span class="token operator">--</span>task e2e<span class="token operator">-</span>tests <span class="token operator">--</span>template<span class="token operator">=</span>react<span class="token operator">-</span>vite<span class="token operator">/</span><span class="token keyword">default</span><span class="token operator">-</span>ts <span class="token operator">--</span>start<span class="token operator">-</span>from<span class="token operator">=</span>install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC77C\uBC18\uC801\uC73C\uB85C \uB85C\uCEEC \uCF54\uB4DC\uAC00 \uC644\uC804\uD788 \uCD5C\uC2E0 \uC0C1\uD0DC\uC778\uC9C0 \uD655\uC778\uD558\uB824\uBA74 \uC124\uCE58 \uC791\uC5C5\uBD80\uD130 \uC2DC\uC791\uD558\uB294 \uAC83\uC774 \uC88B\uC740 \uC544\uC774\uB514\uC5B4\uC785\uB2C8\uB2E4. \uC2E4\uD328\uB97C \uC7AC\uD604\uD558\uBA74 \uC218\uC815\uC744 \uC2DC\uB3C4\uD574 \uBE4C\uB4DC\uB85C \uCEF4\uD30C\uC77C\uD558\uACE0 --start-from=auto\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC791\uC5C5\uC744 \uB2E4\uC2DC \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110C\u1162\u1112\u1167\u11AB\u1106\u116E\u11AF\u1100\u116A-\u110C\u1161\u11A8\u110B\u1165\u11B8-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u110C\u1162\u1112\u1167\u11AB\u1106\u116E\u11AF\u1100\u116A-\u110C\u1161\u11A8\u110B\u1165\u11B8-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uC7AC\uD604\uBB3C\uACFC \uC791\uC5C5 \uBC29\uBC95</h2><p>\uBC84\uADF8 \uBCF4\uACE0\uC11C\uC5D0 \uC7AC\uD604\uBB3C\uC744 \uD3EC\uD568\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4. \uB2E8\uC77C \uC800\uC7A5\uC18C\uC758 \uC608\uC81C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB300\uD574 \uB300\uD654\uC2DD\uC73C\uB85C \uAC1C\uBC1C\uD560 \uC218 \uC788\uB294 \uAC83\uACFC \uAC19\uC774 \uC7AC\uD604 \uC800\uC7A5\uC18C\uC5D0 \uB300\uD574 \uAC1C\uBC1C\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC704 \uC791\uC5C5\uC744 \uC218\uD589\uD558\uB824\uBA74, monorepo\uC758 \uB8E8\uD2B8\uC5D0\uC11C \uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx storybook@next link https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>your<span class="token operator">-</span>username<span class="token operator">/</span>your<span class="token operator">-</span>project<span class="token punctuation">.</span>git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774 \uBA85\uB839\uC740 ../storybook-repros/your-project\uB77C\uB294 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uACE0, \uC790\uB3D9\uC801\uC73C\uB85C \uB85C\uCEEC Storybook \uCF54\uB4DC\uC5D0 \uC5F0\uACB0\uD569\uB2C8\uB2E4. \uC5F0\uACB0\uB41C \uC774\uD6C4\uC5D0\uB294 Storybook\uC744 \uC2E4\uD589\uD558\uACE0 \uC704\uC5D0\uC11C \uC5B8\uAE09\uD55C \uB300\uB85C \uAC1C\uBC1C\uD560 \uC218 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.</p><p>\uC774\uBBF8 \uB85C\uCEEC \uBA38\uC2E0\uC5D0 \uC7AC\uD604\uBCF8\uC774 \uC788\uB294 \uACBD\uC6B0, --local \uD50C\uB798\uADF8\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB3D9\uC77C\uD558\uAC8C monorepo \uAC1C\uBC1C \uD658\uACBD\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx storybook@next link <span class="token operator">--</span>local <span class="token operator">/</span>path<span class="token operator">/</span>to<span class="token operator">/</span>local<span class="token operator">-</span>repro<span class="token operator">-</span>directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u1110\u1166\u11B7\u1111\u1173\u11AF\u1105\u1175\u11BA-\u1100\u1162\u1107\u1161\u11AF\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1110\u1166\u11B7\u1111\u1173\u11AF\u1105\u1175\u11BA-\u1100\u1162\u1107\u1161\u11AF\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uD15C\uD50C\uB9BF \uAC1C\uBC1C\uD558\uAE30</h2><p>\uCCAB \uBC88\uC9F8 \uB2E8\uACC4\uB294 \uBAA8\uB4E0 repro \uD15C\uD50C\uB9BF\uC758 \uB9C8\uC2A4\uD130 \uBAA9\uB85D\uC778 code/lib/cli/src/sandbox-templates.ts\uC5D0 \uD56D\uBAA9\uC744 \uCD94\uAC00\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&#39;cra/default-js&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Create React App (Javascript)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token string">&#39;npx create-react-app .&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inDevelopment</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">expected</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">framework</span><span class="token operator">:</span> <span class="token string">&#39;@storybook/cra&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">renderer</span><span class="token operator">:</span> <span class="token string">&#39;@storybook/react&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token string">&#39;@storybook/builder-webpack5&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD504\uB85C\uC138\uC2A4\uB97C \uC27D\uAC8C \uB9CC\uB4E4\uAE30 \uC704\uD574 PR\uC774 \uBCD1\uD569\uB420 \uB54C\uAE4C\uC9C0 inDevelopment \uD50C\uB798\uADF8\uB97C \uCD94\uAC00\uD574\uC8FC\uC138\uC694 (\uD50C\uB798\uADF8\uB97C \uC81C\uAC70\uD558\uB294 \uB450 \uBC88\uC9F8 PR\uC744 \uBE60\uB974\uAC8C \uB530\uB77C\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4).</p><p>\uD0A4 cra/default-js\uB294 \uB450 \uBD80\uBD84\uC73C\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>\uD504\uB9AC\uD53D\uC2A4\uB294 \uC7AC\uD604 \uC571\uC744 \uC0DD\uC131\uD558\uB294 \uB370 \uC0AC\uC6A9\uB41C \uB3C4\uAD6C\uC785\uB2C8\uB2E4</li><li>\uC11C\uD53D\uC2A4\uB294 \uAE30\uBCF8 \uC124\uCE58\uB97C \uC218\uC815\uD558\uB294 \uC635\uC158\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uD2B9\uC815 \uBC84\uC804\uC774\uB098 \uC635\uC158\uC774 \uD3EC\uD568\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><p>\uC2A4\uD06C\uB9BD\uD2B8 \uD544\uB4DC\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD658\uACBD\uC744 \uC0DD\uC131\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. . \uC778\uC790\uB294 &quot;\uD604\uC7AC \uC791\uC5C5 \uB514\uB809\uD1A0\uB9AC&quot;\uC774\uBA70, \uC774\uB294 \uD0A4(\uC608: repros/cra/default-js/before-storybook)\uB97C \uAE30\uBC18\uC73C\uB85C \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4. {beforeDir} \uD0A4\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294\uB370, \uD574\uB2F9 \uB514\uB809\uD1A0\uB9AC\uC758 \uACBD\uB85C\uB85C \uB300\uCCB4\uB420 \uAC83\uC785\uB2C8\uB2E4.</p><p>\uB098\uBA38\uC9C0 \uD544\uB4DC\uB4E4\uC740 \uC27D\uAC8C \uC774\uD574\uD560 \uC218 \uC788\uC5B4\uC694:</p><p>skipTasks \uD544\uB4DC\uB294 \uD2B9\uC815 \uC791\uC5C5\uC5D0\uC11C \uC0CC\uB4DC\uBC15\uC2A4\uAC00 \uC81C\uB300\uB85C \uC791\uB3D9\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC874\uC7AC\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC6B0\uB9AC\uB294 \uC5EC\uC804\uD788 \uB2E4\uB978 \uC791\uC5C5\uC744 \uC2E4\uD589\uD558\uACE0 \uC2F6\uC744 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC6B0\uB9AC\uAC00 \uC81C\uC5B4\uD560 \uC218 \uC5C6\uB294 \uBC84\uADF8\uAC00 \uBC1C\uC0DD\uD558\uC5EC \uD14C\uC2A4\uD2B8 \uB7EC\uB108 \uC791\uC5C5\uC5D0\uC11C\uB9CC \uC2E4\uD328\uD558\uB294 \uACBD\uC6B0\uC785\uB2C8\uB2E4.</p><p>name \uD544\uB4DC\uC5D0\uB294 \uD15C\uD50C\uB9BF\uC758 \uC0AC\uB78C\uC774 \uC77D\uAE30 \uC26C\uC6B4 \uC774\uB984/\uC124\uBA85\uC774 \uD3EC\uD568\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</p><p>expected \uD544\uB4DC\uB294 \uC6B0\uB9AC\uAC00 sb init\uC744 \uD1B5\uD574 \uC0DD\uC131\uB418\uAE30\uB97C \uAE30\uB300\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C/\uB80C\uB354\uB7EC/\uBE4C\uB354\uB97C \uBC18\uC601\uD569\uB2C8\uB2E4. \uC774\uAC83\uC740 \uC0CC\uB4DC\uBC15\uC2A4\uB97C \uC0DD\uC131\uD558\uB294 \uB3D9\uC548 \uB2E8\uC5B8\uBB38\uC5D0 \uC720\uC6A9\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uD15C\uD50C\uB9BF\uC774 \uB2E4\uB978 \uAE30\uB300\uB41C \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uC0DD\uC131\uB41C \uACBD\uC6B0 \uC2E4\uD328\uD558\uAC8C \uB429\uB2C8\uB2E4. \uC774\uB294 \uD68C\uADC0\uB97C \uAC10\uC9C0\uD558\uB294 \uBC29\uBC95\uC73C\uB85C \uC791\uB3D9\uD569\uB2C8\uB2E4.</p><h3 id="\u1109\u1162\u11AB\u1103\u1173\u1107\u1161\u11A8\u1109\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1162\u11AB\u1103\u1173\u1107\u1161\u11A8\u1109\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC0CC\uB4DC\uBC15\uC2A4 \uC2E4\uD589\uD558\uAE30</h3><p>\uB9CC\uC57D \uD15C\uD50C\uB9BF\uC5D0 inDevelopment \uD50C\uB798\uADF8\uAC00 \uC788\uB2E4\uBA74 \uD574\uB2F9 \uD15C\uD50C\uB9BF\uC740 \uC0CC\uB4DC\uBC15\uC2A4 \uD504\uB85C\uC138\uC2A4\uC758 \uC77C\uBD80\uB85C (\uB85C\uCEEC\uC5D0\uC11C) \uC0DD\uC131\uB429\uB2C8\uB2E4. \uB2E4\uC74C \uBA85\uB839\uC5B4\uB85C \uC0CC\uB4DC\uBC15\uC2A4\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C <code>template-key</code>\uB294 \uC120\uD0DD\uD55C \uD15C\uD50C\uB9BF\uC758 id\uB85C \uB300\uCCB4\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC608: cra/default-js:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>yarn task <span class="token operator">--</span>task dev <span class="token operator">--</span>template <span class="token operator">&lt;</span>template<span class="token operator">-</span>key<span class="token operator">&gt;</span> <span class="token operator">--</span>start<span class="token operator">-</span>from<span class="token operator">=</span>install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>inDevelopment\uC744 \uAC00\uC9C4 \uD15C\uD50C\uB9BF\uC740 \uB85C\uCEEC \uD15C\uD50C\uB9BF \uC0DD\uC131\uC5D0 \uD544\uC694\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC790\uB3D9\uC73C\uB85C --no-link \uD50C\uB798\uADF8\uC640 \uD568\uAED8 \uC2E4\uD589\uB429\uB2C8\uB2E4.</p><p>PR\uC774 \uBCD1\uD569\uB418\uBA74 \uD15C\uD50C\uB9BF\uC774 \uB9E4\uC77C \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uACE0 \uAC1C\uBC1C \uC911 \uD50C\uB798\uADF8\uB97C \uC81C\uAC70\uD560 \uC218 \uC788\uC73C\uBA70 \uC0CC\uB4DC\uBC15\uC2A4\uB294 \uD15C\uD50C\uB9BF \uC800\uC7A5\uC18C\uC5D0\uC11C \uCF54\uB4DC\uB97C \uAC00\uC838\uC62C \uAC83\uC785\uB2C8\uB2E4.</p><h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF" aria-hidden="true">#</a> \uBB38\uC81C \uD574\uACB0</h2><p>Storybook\uC5D0 \uAE30\uC5EC\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uC138\uC694</p><ul><li>\uAE30\uB2A5 \uC694\uCCAD\uC744 \uC791\uC131\uD558\uB294 RFC \uD504\uB85C\uC138\uC2A4</li><li>\uAE30\uB2A5 \uBC0F \uBC84\uADF8 \uC218\uC815\uC744 \uC704\uD55C \uCF54\uB4DC</li><li>\uC0C8\uB85C\uC6B4 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uC2DC\uC791\uD558\uB294 \uBC95</li><li>\uBB38\uC11C \uAC1C\uC120, \uC624\uD0C0 \uC218\uC815, \uBA85\uD655\uD654\uB97C \uC704\uD55C \uBB38\uC11C</li><li>\uC0C8\uB85C\uC6B4 \uC2A4\uB2C8\uD3AB\uACFC \uC608\uC81C\uC5D0 \uB300\uD55C \uC608\uC81C</li></ul>`,88),l=[i];function c(d,u){return s(),e("div",null,l)}var y=a(o,[["render",c],["__file","index.html.vue"]]);export{y as default};
