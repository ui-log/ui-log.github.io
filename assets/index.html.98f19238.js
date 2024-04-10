import{_ as c}from"./app.63e06a35.js";import{l as a,m as l,E as t,G as o,p as n,Y as e,K as p,C as s}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/UnlockingCommunicationinReactAJourneyintothePowerofSignals_0.75db8003.png";const u={},d=p('<img src="'+i+'"><h1 id="\u1109\u1169\u1100\u1162" tabindex="-1"><a class="header-anchor" href="#\u1109\u1169\u1100\u1162" aria-hidden="true">#</a> \uC18C\uAC1C</h1><p>\uB04A\uC784\uC5C6\uC774 \uBC1C\uC804\uD558\uB294 \uC6F9 \uAC1C\uBC1C\uC758 \uC138\uACC4\uC5D0\uC11C React\uB294 \uB3D9\uC801 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAD6C\uCD95\uD558\uB294 \uB370 \uAC00\uC7A5 \uB9CE\uC774 \uC0AC\uC6A9\uB418\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC120\uC5B8\uC801 \uAD6C\uBB38\uACFC \uD6A8\uC728\uC801 \uB80C\uB354\uB9C1\uC744 \uD1B5\uD574 React\uB294 \uB110\uB9AC \uCC44\uD0DD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uAC1C\uBC1C\uC790\uB85C\uC11C \uC6B0\uB9AC\uB294 \uD56D\uC0C1 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294 \uBC29\uBC95\uC744 \uCC3E\uACE0 \uB300\uC548\uC801\uC778 \uC194\uB8E8\uC158\uC744 \uD0D0\uAD6C\uD569\uB2C8\uB2E4. \uD558\uB098 \uD765\uBBF8\uB85C\uC6B4 \uAE38\uC740 \uC2E0\uD638(Signals)\uC758 \uC138\uACC4\uC5D0 \uD0D0\uD5D8\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.</p><h1 id="\u1109\u1175\u11AB\u1112\u1169-signals-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u11AB\u1112\u1169-signals-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC2E0\uD638(Signals) \uC774\uD574\uD558\uAE30</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),r=p('<h1 id="\u1109\u1175\u1100\u1173\u1102\u1165\u11AF\u110B\u1175\u1105\u1161\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u1100\u1173\u1102\u1165\u11AF\u110B\u1175\u1105\u1161\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161\u110B\u116D" aria-hidden="true">#</a> \uC2DC\uADF8\uB110\uC774\uB780 \uBB34\uC5C7\uC778\uAC00\uC694?</h1><p>\uC2DC\uADF8\uB110\uC740 \uC774\uBCA4\uD2B8\uB098 \uBA54\uC2DC\uC9C0\uB85C\uB3C4 \uC54C\uB824\uC9C4 \uAC83\uC73C\uB85C, \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC2DC\uC2A4\uD15C\uC758 \uB2E4\uC591\uD55C \uBD80\uBD84 \uAC04\uC5D0 \uB300\uD654\uB97C \uB098\uB20C \uC218 \uC788\uB294 \uBCF4\uD3B8\uC801\uC778 \uC218\uB2E8\uC73C\uB85C \uC791\uC6A9\uD569\uB2C8\uB2E4. \uC9C1\uC811 \uBA54\uC18C\uB4DC \uD638\uCD9C\uC774\uB098 \uAC15\uD55C \uACB0\uD569\uACFC\uB294 \uB2EC\uB9AC, \uC2DC\uADF8\uB110\uC740 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC774\uBCA4\uD2B8\uB97C \uD1B5\uC9C0\uD558\uACE0, \uB4E3\uACE0, \uC774\uBCA4\uD2B8\uC5D0 \uC751\uB2F5\uD558\uB294 \uC720\uC5F0\uD558\uACE0 \uACB0\uD569\uC744 \uB290\uC2A8\uD558\uAC8C \uD558\uB294 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><h1 id="\u1109\u1175\u1100\u1173\u1102\u1165\u11AF\u110B\u1174-\u110C\u1161\u11A8\u1103\u1169\u11BC-\u1107\u1161\u11BC\u1109\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u1100\u1173\u1102\u1165\u11AF\u110B\u1174-\u110C\u1161\u11A8\u1103\u1169\u11BC-\u1107\u1161\u11BC\u1109\u1175\u11A8" aria-hidden="true">#</a> \uC2DC\uADF8\uB110\uC758 \uC791\uB3D9 \uBC29\uC2DD</h1><p>\uC77C\uBC18\uC801\uC73C\uB85C, \uC2DC\uADF8\uB110\uC740 \uBC1C\uD589-\uAD6C\uB3C5 \uBAA8\uB378\uC5D0\uC11C \uC791\uB3D9\uD569\uB2C8\uB2E4. \uCEF4\uD3EC\uB10C\uD2B8(\uBC1C\uD589\uC790)\uB294 \uD2B9\uC815 \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD560 \uB54C \uC2DC\uADF8\uB110\uC744 \uBC29\uCD9C\uD558\uBA70, \uB2E4\uB978 \uCEF4\uD3EC\uB10C\uD2B8(\uAD6C\uB3C5\uC790)\uB294 \uC11C\uB85C\uC5D0 \uB300\uD55C \uC9C1\uC811\uC801\uC778 \uC9C0\uC2DD\uC774 \uC5C6\uC5B4\uB3C4 \uADF8 \uC2DC\uADF8\uB110\uC744 \uB4E3\uACE0 \uBC18\uC751\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),k=p('<h1 id="\u1109\u1175\u1100\u1173\u1102\u1165\u11AF\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1109\u1161\u11BC\u1112\u116A\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u1100\u1173\u1102\u1165\u11AF\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1109\u1161\u11BC\u1112\u116A\u11BC" aria-hidden="true">#</a> \uC2DC\uADF8\uB110\uC744 \uC0AC\uC6A9\uD558\uB294 \uC0C1\uD669</h1><ul><li>\uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uC0C1\uD638\uC791\uC6A9: \uC2DC\uADF8\uB110\uC740 \uADF8\uB798\uD53D \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uC77C\uBC18\uC801\uC73C\uB85C \uC0AC\uC6A9\uB418\uBA70 \uBC84\uD2BC \uD074\uB9AD, \uB9C8\uC6B0\uC2A4 \uC774\uB3D9 \uB610\uB294 \uD0A4\uBCF4\uB4DC \uC785\uB825\uACFC \uAC19\uC740 \uC0AC\uC6A9\uC790 \uC0C1\uD638\uC791\uC6A9\uC744 \uCC98\uB9AC\uD569\uB2C8\uB2E4.</li><li>\uCEF4\uD3EC\uB10C\uD2B8\uAC04 \uD1B5\uC2E0: \uC2DC\uADF8\uB110\uC740 \uC11C\uB85C \uB2E4\uB978 \uCEF4\uD3EC\uB10C\uD2B8\uB098 \uBAA8\uB4C8 \uAC04\uC758 \uD1B5\uC2E0\uC744 \uC6D0\uD65C\uD558\uAC8C \uCC98\uB9AC\uD558\uC5EC \uB290\uC2A8\uD558\uAC8C \uACB0\uD569\uB418\uC5B4 \uC788\uC73C\uBA74\uC11C\uB3C4 \uC870\uD654\uB86D\uAC8C \uC791\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4.</li><li>\uC2DC\uC2A4\uD15C \uC218\uC900 \uC774\uBCA4\uD2B8: \uB354 \uD070 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC2DC\uC2A4\uD15C\uC5D0\uC11C\uB294 \uB370\uC774\uD130 \uC5C5\uB370\uC774\uD2B8, \uB124\uD2B8\uC6CC\uD06C \uD65C\uB3D9 \uB610\uB294 \uC624\uB958 \uC54C\uB9BC\uACFC \uAC19\uC740 \uC2DC\uC2A4\uD15C \uC218\uC900 \uC774\uBCA4\uD2B8\uB97C \uCC98\uB9AC\uD558\uB294 \uB370 \uC2DC\uADF8\uB110\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><h1 id="react\u110B\u1166\u1109\u1165-\u1109\u1175\u1100\u1173\u1102\u1165\u11AF-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#react\u110B\u1166\u1109\u1165-\u1109\u1175\u1100\u1173\u1102\u1165\u11AF-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> React\uC5D0\uC11C \uC2DC\uADF8\uB110 \uC774\uD574\uD558\uAE30</h1><p>\uC2DC\uADF8\uB110\uC740 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uCEF4\uD3EC\uB10C\uD2B8\uAC04 \uD1B5\uC2E0\uC5D0 \uAC15\uB825\uD55C \uBA54\uCEE4\uB2C8\uC998\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC804\uD1B5\uC801\uC778 \uC0C1\uD0DC \uAD00\uB9AC\uC5D0\uB9CC \uC758\uC874\uD558\uB294 \uB300\uC2E0 React\uC5D0\uC11C\uC758 \uC2DC\uADF8\uB110\uC740 \uB354 \uC774\uBCA4\uD2B8 \uC911\uC2EC\uC801\uC778 \uC811\uADFC \uBC29\uC2DD\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4. \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC2DC\uADF8\uB110\uC744 \uBC1C\uC2E0\uD560 \uC218 \uC788\uACE0, \uB2E4\uB978 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC774\uB7EC\uD55C \uC2DC\uADF8\uB110\uC744 \uCCAD\uCDE8\uD558\uC5EC \uB290\uC2A8\uD558\uAC8C \uACB0\uD569\uB418\uACE0 \uBC18\uC751\uC801\uC778 \uC544\uD0A4\uD14D\uCC98\uB97C \uAC00\uB2A5\uCF00 \uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),v=p('<h1 id="react\u110B\u1166\u1109\u1165-\u1109\u1175\u11AB\u1112\u1169\u110B\u1174-\u110C\u116E\u110B\u116D-\u110B\u1175\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#react\u110B\u1166\u1109\u1165-\u1109\u1175\u11AB\u1112\u1169\u110B\u1174-\u110C\u116E\u110B\u116D-\u110B\u1175\u110C\u1165\u11B7" aria-hidden="true">#</a> React\uC5D0\uC11C \uC2E0\uD638\uC758 \uC8FC\uC694 \uC774\uC810</h1><ul><li>\uAD6C\uC131 \uC694\uC18C\uC758 \uBD84\uB9AC: \uC2E0\uD638\uB97C \uD1B5\uD574 \uAD6C\uC131 \uC694\uC18C\uAC04\uC5D0 \uC9C1\uC811\uC801\uC778 \uC885\uC18D\uC131\uC744 \uB9CC\uB4E4\uC9C0 \uC54A\uACE0 \uD1B5\uC2E0\uC744 \uC6D0\uD560\uD558\uAC8C \uD560 \uC218 \uC788\uC5B4 \uB354 \uBAA8\uB4C8\uD654\uB418\uACE0 \uC720\uC9C0\uBCF4\uC218\uAC00 \uC6A9\uC774\uD55C \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB97C \uC720\uB3C4\uD569\uB2C8\uB2E4.</li><li>\uC774\uBCA4\uD2B8 \uC8FC\uB3C4 \uC544\uD0A4\uD14D\uCC98: \uC774\uBCA4\uD2B8 \uC8FC\uB3C4 \uC544\uD0A4\uD14D\uCC98\uB97C \uC218\uC6A9\uD568\uC73C\uB85C\uC368, \uC2E0\uD638\uB294 \uC720\uC5F0\uD558\uACE0 \uD655\uC7A5 \uAC00\uB2A5\uD55C \uB514\uC790\uC778\uC744 \uAC00\uB2A5\uD558\uAC8C \uD569\uB2C8\uB2E4. \uAD6C\uC131 \uC694\uC18C\uB294 \uD2B9\uC815 \uAD00\uC2EC\uC5D0 \uAE30\uBC18\uD558\uC5EC \uC2E0\uD638\uC5D0 \uBC18\uC751\uD558\uBA70, \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uB354 \uBE60\uB974\uACE0 \uC9C1\uAD00\uC801\uC73C\uB85C \uB9CC\uB4E4\uC5B4\uC90D\uB2C8\uB2E4.</li><li>\uAC04\uC18C\uD654\uB41C \uC0C1\uD0DC \uAD00\uB9AC: React\uC5D0\uB294 \uAC15\uB825\uD55C \uC0C1\uD0DC \uAD00\uB9AC \uC2DC\uC2A4\uD15C\uC774 \uC788\uC9C0\uB9CC, \uD2B9\uC815 \uC2DC\uB098\uB9AC\uC624\uC5D0 \uB354 \uC801\uD569\uD55C \uB300\uCCB4 \uC218\uB2E8\uC73C\uB85C \uC2E0\uD638\uAC00 \uC81C\uACF5\uB429\uB2C8\uB2E4. \uC2E0\uD638\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8 \uC0C1\uD0DC\uC758 \uD2B9\uC815 \uCE21\uBA74\uC744 \uAD00\uB9AC\uD560 \uC218 \uC788\uC73C\uBA70, \uC911\uC559 \uC9D1\uC911\uC2DD \uC0C1\uD0DC \uAD00\uB9AC \uC194\uB8E8\uC158 \uC5C6\uC774\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</li></ul><h1 id="\u1109\u1175\u11AB\u1112\u1169\u110B\u1174-\u1109\u1175\u11AF\u110C\u1166-\u1112\u116A\u11AF\u110B\u116D\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u11AB\u1112\u1169\u110B\u1174-\u1109\u1175\u11AF\u110C\u1166-\u1112\u116A\u11AF\u110B\u116D\u11BC" aria-hidden="true">#</a> \uC2E0\uD638\uC758 \uC2E4\uC81C \uD65C\uC6A9</h1><p>\uD559\uC2B5\uD558\uB294 \uAC00\uC7A5 \uD6A8\uACFC\uC801\uC778 \uBC29\uBC95\uC740 \uC2E4\uC81C \uC608\uC81C\uB97C \uD1B5\uD574 \uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 \uD560 \uC77C \uAD00\uB9AC\uB97C \uC704\uD55C \uAC04\uB2E8\uD55C \uC2E0\uD638 \uAD6C\uD604\uC744 \uC81C\uC2DC\uD569\uB2C8\uB2E4. \uD560 \uC77C\uC740 \uB85C\uCEEC \uC800\uC7A5\uC18C\uC5D0 \uC800\uC7A5\uB418\uBA70, \uC2E0\uD638\uC758 \uCD08\uAE30 \uAC12\uC740 \uB85C\uCEEC \uC800\uC7A5\uC18C\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC80\uC0C9\uD558\uC5EC \uC124\uC815\uB429\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),g=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">LOCAL_STORAGE_KEY</span> <span class="token operator">=</span> <span class="token string">&quot;todos&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getTodosFromLocalStorage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> todos <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token constant">LOCAL_STORAGE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> todos <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>todos<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> todosSignal <span class="token operator">=</span> <span class="token function">signal</span><span class="token punctuation">(</span><span class="token function">getTodosFromLocalStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC2DC\uADF8\uB110\uC758 \uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C\uB9C8\uB2E4 \uC5C5\uB370\uC774\uD2B8\uB41C \uB370\uC774\uD130\uB97C \uB85C\uCEEC \uC800\uC7A5\uC18C\uC5D0 \uB2E4\uC2DC \uC800\uC7A5\uD558\uB294 \uD6A8\uACFC\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">setTodosToLocalStorage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">todos</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token constant">LOCAL_STORAGE_KEY</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>todos<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTodosToLocalStorage</span><span class="token punctuation">(</span>todosSignal<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uAC8C\uB2E4\uAC00, \uD568\uC218 \uB0B4\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 \uC2DC\uADF8\uB110\uC758 \uBCC0\uACBD\uC5D0 \uB530\uB77C \uBCC0\uC218\uB97C \uB3D9\uC801\uC73C\uB85C \uB2E4\uC2DC \uC720\uD6A8\uC131\uC744 \uAC80\uC0AC\uD558\uB294 \uACC4\uC0B0 \uD568\uC218\uAC00 \uC788\uC2B5\uB2C8\uB2E4. todos \uC2DC\uADF8\uB110\uC758 \uACBD\uC6B0\uB3C4 \uD574\uB2F9\uB429\uB2C8\uB2E4.\`\`\`</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> completedTodoCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> todosSignal<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>isDone<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uD568\uC218\uB294 \uC0C8\uB85C\uC6B4 \uD560 \uC77C\uC744 \uBAA9\uB85D\uC5D0 \uCD94\uAC00\uD560 \uB54C \uD65C\uC131\uD654\uB429\uB2C8\uB2E4. \uAC12\uC774 \uC9C1\uC811 \uC218\uC815\uB418\uBA74 \uC2DC\uADF8\uB110\uC774 \uB098\uBA38\uC9C0\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">onAddTodo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> todo <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">uuidV4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    text<span class="token punctuation">,</span>
    <span class="token literal-property property">isDone</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  todosSignal<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span>todo<span class="token punctuation">,</span> <span class="token operator">...</span>todosSignal<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC608\uC81C\uB294 GitHub \uC800\uC7A5\uC18C\uC5D0\uC11C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=s("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173\u110B\u1166\u1109\u1165-\u1109\u1175\u11AB\u1112\u1169\u110B\u1174-\u1112\u1175\u11B7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173\u110B\u1166\u1109\u1165-\u1109\u1175\u11AB\u1112\u1169\u110B\u1174-\u1112\u1175\u11B7","aria-hidden":"true"},"#"),n(" \uACB0\uB860: \uB9AC\uC561\uD2B8\uC5D0\uC11C \uC2E0\uD638\uC758 \uD798")],-1),m=s("p",null,"\uC2E0\uD638\uB294 \uB9AC\uC561\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uB2E4\uC591\uD55C \uC2DC\uB098\uB9AC\uC624\uB97C \uCC98\uB9AC\uD558\uB294 \uB2E4\uC7AC\uB2E4\uB2A5\uD55C \uB3C4\uAD6C \uC138\uD2B8\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uBCC0\uD654\uB97C \uC54C\uB9AC\uB294 \uAC83, \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uD2B8\uB9AC\uAC70\uD558\uB294 \uAC83, \uD639\uC740 \uBCF5\uC7A1\uD55C \uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uC870\uC815\uD558\uB294 \uAC83\uC774\uB77C \uD560\uC9C0\uB77C\uB3C4, \uC2E0\uD638\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uB2E4\uB978 \uBD80\uBD84 \uC0AC\uC774\uC758 \uD6A8\uC728\uC801\uC778 \uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158\uC744 \uAD00\uB9AC\uD558\uB294 \uAE54\uB054\uD558\uACE0 \uD6A8\uC728\uC801\uC778 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",-1),f=s("p",null,"\uC2E0\uD638\uB97C \uAC1C\uBC1C \uC6CC\uD06C\uD50C\uB85C\uC6B0\uC5D0 \uD1B5\uD569\uD558\uBA74 \uBCF4\uB2E4 \uBAA8\uB4C8\uC2DD\uC774\uACE0 \uD655\uC7A5 \uAC00\uB2A5\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC544\uD0A4\uD14D\uCC98\uB97C \uCD09\uC9C4\uD569\uB2C8\uB2E4. \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uBE44\uACB0\uD569\uB41C \uBC29\uC2DD\uC73C\uB85C \uD1B5\uC2E0\uD560 \uC218 \uC788\uB3C4\uB85D \uD574\uC90C\uC73C\uB85C\uC368, \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB97C \uC774\uD574\uD558\uAE30 \uC27D\uACE0 \uC720\uC9C0\uBCF4\uC218 \uAC00\uB2A5\uD558\uBA70 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC9C4\uD654\uD568\uC5D0 \uB530\uB77C \uD655\uC7A5\uD560 \uC218 \uC788\uB3C4\uB85D \uB9CC\uB4ED\uB2C8\uB2E4.",-1),y=s("p",null,"\uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC2E0\uD638\uC758 \uC7A0\uC7AC\uB825\uC744 \uD0D0\uC0C9\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uAD6C\uCCB4\uC801\uC778 \uC694\uAD6C\uC0AC\uD56D\uACFC \uC81C\uC57D \uC0AC\uD56D\uC744 \uACE0\uB824\uD574\uBCF4\uC138\uC694. \uB2E4\uC591\uD55C \uC2E0\uD638 \uD328\uD134\uC744 \uC2E4\uD5D8\uD558\uACE0 \uC2E0\uD638\uC758 \uD798\uC744 \uD65C\uC6A9\uD558\uC5EC \uB354 \uB3D9\uC801\uC774\uACE0 \uBC18\uC751\uC801\uC778 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694.",-1),_=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),w=s("p",null,"\uC774 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uB294 Comsysto Reply GmbH\uC5D0\uC11C \uAC8C\uC2DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",-1);function x(S,T){return a(),l("div",null,[d,(a(),t(e("script"),null,{default:o(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(a(),t(e("script"),null,{default:o(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(a(),t(e("script"),null,{default:o(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(a(),t(e("script"),null,{default:o(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(a(),t(e("script"),null,{default:o(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(a(),t(e("script"),null,{default:o(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,m,f,y,_,(a(),t(e("script"),null,{default:o(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w])}var O=c(u,[["render",x],["__file","index.html.vue"]]);export{O as default};
