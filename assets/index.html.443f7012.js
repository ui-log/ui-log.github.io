import{_ as e}from"./app.a99075bb.js";import{l as a,m as o,K as n}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const r={},t=n(`<p>\uC6B0\uB9AC\uB294 \uD655\uC7A5 \uAE30\uB2A5 \uC0DD\uC131\uC790\uB4E4\uC774 Storybook \uC0DD\uD0DC\uACC4\uB97C \uD65C\uAE30\uCC28\uACE0 \uCD5C\uC2E0 \uC0C1\uD0DC\uB85C \uC720\uC9C0\uD558\uAE30 \uC704\uD574 \uB4E4\uC774\uB294 \uD5CC\uC2E0\uACFC \uB178\uB825\uC5D0 \uC9C4\uC2EC\uC73C\uB85C \uAC10\uC0AC\uB4DC\uB9BD\uB2C8\uB2E4. Storybook\uC774 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uACFC \uAC1C\uC120 \uC0AC\uD56D\uC744 \uAC00\uC838\uC624\uBA74\uC11C 8.0 \uBC84\uC804\uC73C\uB85C \uC9C4\uD654\uD568\uC5D0 \uB530\uB77C, \uC774 \uC548\uB0B4\uC11C\uB294 7.x\uC5D0\uC11C 8.0\uC73C\uB85C \uC5EC\uB7EC\uBD84\uC758 \uC560\uB4DC\uC628\uC744 \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uB294 \uB370 \uB3C4\uC6C0\uC744 \uB4DC\uB9AC\uACE0\uC790 \uD569\uB2C8\uB2E4. \uB9CC\uC57D Storybook\uC758 \uC774\uC804 \uBC84\uC804\uC5D0\uC11C \uC560\uB4DC\uC628\uC744 \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD574\uC57C \uD55C\uB2E4\uBA74, \uBA3C\uC800 Storybook 7.0\uC744 \uC704\uD55C \uC560\uB4DC\uC628 \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uAC00\uC774\uB4DC\uB97C \uCC38\uC870\uD574 \uC8FC\uC138\uC694.</p><h2 id="\u110B\u1174\u110C\u1169\u11AB\u1109\u1165\u11BC-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u110B\u1174\u110C\u1169\u11AB\u1109\u1165\u11BC-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173" aria-hidden="true">#</a> \uC758\uC874\uC131 \uC5C5\uB370\uC774\uD2B8</h2><p>\uAC00\uC7A5 \uBA3C\uC800 Storybook \uC758\uC874\uC131\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uAC83\uC73C\uB85C \uC2DC\uC791\uD558\uC138\uC694. \uD504\uB9AC \uB9B4\uB9AC\uC2A4 \uBC84\uC804\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 <code>next</code> \uD0DC\uADF8\uB97C, \uAC00\uC7A5 \uCD5C\uC2E0 \uC548\uC815 \uBC84\uC804\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 <code>latest</code>\uB97C, \uB610\uB294 \uC9C1\uC811 \uBC84\uC804\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;@storybook/client-logger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;next&quot;</span> <span class="token comment">// \uB610\uB294 &quot;latest&quot;, \uB610\uB294 &quot;^8.0.0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u110B\u1162\u1103\u1173\u110B\u1169\u11AB\u110B\u116D\u11BC-\u110C\u116E\u110B\u116D-\u1107\u1167\u11AB\u1100\u1167\u11BC-\u1109\u1161\u1112\u1161\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u1103\u1173\u110B\u1169\u11AB\u110B\u116D\u11BC-\u110C\u116E\u110B\u116D-\u1107\u1167\u11AB\u1100\u1167\u11BC-\u1109\u1161\u1112\u1161\u11BC" aria-hidden="true">#</a> \uC560\uB4DC\uC628\uC6A9 \uC8FC\uC694 \uBCC0\uACBD \uC0AC\uD56D</h2><p>\uBC84\uC804 8.0\uC5D0\uC11C \uC560\uB4DC\uC628 \uAC1C\uBC1C\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uC911\uC694\uD55C \uBCC0\uACBD \uC0AC\uD56D\uB4E4\uC774 \uC788\uC2B5\uB2C8\uB2E4. 8.0\uC758 \uBCC0\uACBD \uC0AC\uD56D \uC804\uCCB4 \uBAA9\uB85D\uC740 \uC804\uCCB4 \uC774\uC804 \uC548\uB0B4\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.</p><h3 id="node-js-16-\u110C\u1175\u110B\u116F\u11AB-\u110C\u116E\u11BC\u1103\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#node-js-16-\u110C\u1175\u110B\u116F\u11AB-\u110C\u116E\u11BC\u1103\u1161\u11AB" aria-hidden="true">#</a> Node.js 16 \uC9C0\uC6D0 \uC911\uB2E8</h3><p>Node.js 16 \uC9C0\uC6D0\uC774 \uC885\uB8CC\uB418\uC5C8\uC73C\uB2C8 \uC560\uB4DC\uC628\uC744 Node.js 18\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD574 \uC8FC\uC138\uC694.</p><h3 id="\u1106\u1162\u1102\u1175\u110C\u1165-ui\u110B\u116D\u11BC-react-18" tabindex="-1"><a class="header-anchor" href="#\u1106\u1162\u1102\u1175\u110C\u1165-ui\u110B\u116D\u11BC-react-18" aria-hidden="true">#</a> \uB9E4\uB2C8\uC800 UI\uC6A9 React 18</h3><p>UI \uAE30\uBC18\uC758 \uC560\uB4DC\uC628(\uC608: \uD328\uB110, \uD234\uBC14, \uD0ED)\uC740 Storybook UI\uC5D0\uC11C \uC694\uC18C\uB97C \uB80C\uB354\uB9C1\uD558\uAE30 \uC704\uD574 React 18\uC5D0 \uC758\uC874\uD569\uB2C8\uB2E4. \uB610\uD55C, \uC8FC\uC694 prop\uC774 \uB354 \uC774\uC0C1 \uB80C\uB354 \uD568\uC218\uB85C \uC804\uB2EC\uB418\uC9C0 \uC54A\uB294 \uC0AC\uC2E4\uC744 \uC8FC\uC758\uD558\uC138\uC694.</p><h3 id="react-\u1111\u1175\u110B\u1165-\u110C\u1169\u11BC\u1109\u1169\u11A8\u1109\u1165\u11BC\u110B\u1173\u11AB-\u1103\u1165-\u110B\u1175\u1109\u1161\u11BC-\u1111\u1175\u11AF\u110B\u116D\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1109\u1173\u11B8\u1102\u1175\u1103\u1161" tabindex="-1"><a class="header-anchor" href="#react-\u1111\u1175\u110B\u1165-\u110C\u1169\u11BC\u1109\u1169\u11A8\u1109\u1165\u11BC\u110B\u1173\u11AB-\u1103\u1165-\u110B\u1175\u1109\u1161\u11BC-\u1111\u1175\u11AF\u110B\u116D\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1109\u1173\u11B8\u1102\u1175\u1103\u1161" aria-hidden="true">#</a> React \uD53C\uC5B4 \uC885\uC18D\uC131\uC740 \uB354 \uC774\uC0C1 \uD544\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4</h3><p>React\uC5D0 \uB300\uD55C \uC560\uB4DC\uC628\uC758 \uD53C\uC5B4 \uC885\uC18D\uC131\uC744 \uC81C\uAC70\uD558\uACE0 \uC124\uCE58 \uD06C\uAE30\uB97C \uC904\uC774\uB824\uBA74 \uB2E4\uC74C\uC744 \uC218\uD589\uD558\uC138\uC694:</p><ul><li>react, react-dom \uADF8\uB9AC\uACE0 \uAE00\uB85C\uBC8C\uD654\uB41C Storybook \uD328\uD0A4\uC9C0\uB97C peerDependencies\uC5D0\uC11C devDependencies\uB85C \uC62E\uAE30\uC138\uC694.</li><li>\uBC88\uB4E4\uC5D0 \uD3EC\uD568\uB418\uC9C0 \uC54A\uB3C4\uB85D tsup \uAD6C\uC131\uC5D0\uC11C externals \uC18D\uC131\uC5D0 \uAE00\uB85C\uBC8C\uD654\uB41C \uD328\uD0A4\uC9C0 \uBAA9\uB85D\uC744 \uCD94\uAC00\uD558\uC138\uC694.</li></ul><p>\uC608\uB97C \uB4E4\uC5B4, Addon Kit\uC5D0 \uC801\uC6A9\uB41C \uC5C5\uB370\uC774\uD2B8\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694. \uC774\uB7EC\uD55C \uBCC0\uACBD \uC0AC\uD56D\uC740 \uC120\uD0DD \uC0AC\uD56D\uC774\uC9C0\uB9CC \uAD8C\uC7A5\uB429\uB2C8\uB2E4.</p><h3 id="storybook-components\u110B\u1174-\u1109\u1161\u110B\u116D\u11BC-\u110C\u116E\u11BC\u1103\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#storybook-components\u110B\u1174-\u1109\u1161\u110B\u116D\u11BC-\u110C\u116E\u11BC\u1103\u1161\u11AB" aria-hidden="true">#</a> @storybook/components\uC758 \uC0AC\uC6A9 \uC911\uB2E8</h3><p>@storybook/components\uC758 Icons \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC774\uC81C @storybook/icons\uB97C \uB300\uCCB4\uD558\uB294 \uC0AC\uC6A9 \uC911\uB2E8 \uBC84\uC804\uC785\uB2C8\uB2E4. \uB610\uD55C, \uB2E4\uC591\uD55C Button \uCEF4\uD3EC\uB10C\uD2B8 \uC18D\uC131\uB3C4 \uC0AC\uC6A9 \uC911\uB2E8\uB418\uC5C8\uC73C\uBA70 \uB300\uCCB4\uD560 \uC218 \uC788\uB294 \uD56D\uBAA9\uC774 \uC81C\uACF5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</p><h3 id="storybook-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA-\u1109\u1161\u11BC\u1110\u1162-api-\u1107\u1167\u11AB\u1100\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#storybook-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA-\u1109\u1161\u11BC\u1110\u1162-api-\u1107\u1167\u11AB\u1100\u1167\u11BC" aria-hidden="true">#</a> Storybook \uB808\uC774\uC544\uC6C3 \uC0C1\uD0DC API \uBCC0\uACBD</h3><p>Storybook UI \uAD6C\uC131\uC744 addons.setConfig({...})\uB85C \uC0AC\uC6A9\uC790 \uC815\uC758\uD558\uB294 \uACBD\uC6B0, \uB808\uC774\uC544\uC6C3 \uC0C1\uD0DC API\uC758 \uBCC0\uACBD \uC0AC\uD56D\uC5D0 \uC720\uC758\uD574\uC57C \uD569\uB2C8\uB2E4.</p><h3 id="\u1109\u1161\u110B\u116D\u11BC\u1103\u116C\u110C\u1175-\u110B\u1161\u11AD\u1102\u1173\u11AB-\u1100\u1175\u1102\u1173\u11BC-\u110C\u1166\u1100\u1165" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u1103\u116C\u110C\u1175-\u110B\u1161\u11AD\u1102\u1173\u11AB-\u1100\u1175\u1102\u1173\u11BC-\u110C\u1166\u1100\u1165" aria-hidden="true">#</a> \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uB294 \uAE30\uB2A5 \uC81C\uAC70</h3><p>7.0\uC5D0\uC11C \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uB294 \uD328\uD0A4\uC9C0 \uBC0F API\uAC00 8.0\uC5D0\uC11C \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uC774\uAD00 \uB178\uD2B8\uB97C \uCC38\uC870\uD558\uC138\uC694. \uD2B9\uD788 addons\uC758 \uACBD\uC6B0, @storybook/addons \uD328\uD0A4\uC9C0\uAC00 \uC81C\uAC70\uB418\uC5B4 @storybook/preview-api \uBC0F @storybook/manager-api\uB85C \uC804\uD658\uD574\uC57C \uD569\uB2C8\uB2E4. \uAC19\uC740 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><h3 id="\u110B\u1170\u11B8\u1111\u1162\u11A8\u110B\u1166\u1109\u1165-babel-loader\u1100\u1161-\u110C\u1166\u1100\u1165\u1103\u116C\u110B\u1165\u11BB\u1109\u1173\u11B8\u1102\u1175\u1103\u1161" tabindex="-1"><a class="header-anchor" href="#\u110B\u1170\u11B8\u1111\u1162\u11A8\u110B\u1166\u1109\u1165-babel-loader\u1100\u1161-\u110C\u1166\u1100\u1165\u1103\u116C\u110B\u1165\u11BB\u1109\u1173\u11B8\u1102\u1175\u1103\u1161" aria-hidden="true">#</a> \uC6F9\uD329\uC5D0\uC11C babel-loader\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4</h3><p>Storybook 8\uC5D0\uC11C \uC6F9\uD3295 \uBE4C\uB354\uC5D0\uC11C babel-loader\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB9CC\uC57D \uC5EC\uB7EC\uBD84\uC758 \uC560\uB4DC\uC628 \uD504\uB9AC\uC14B\uC774 babel() \uBA54\uC18C\uB4DC\uB97C \uC624\uBC84\uB77C\uC774\uB4DC\uD55C\uB2E4\uBA74, \uC5EC\uB7EC\uBD84\uC758 \uC0AC\uC6A9\uC790\uAC00 \uD30C\uC77C\uC744 \uCEF4\uD30C\uC77C\uD558\uAE30 \uC704\uD574 SWC\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uBA74 (\uC774\uAC83\uC740 \uC6F9\uD329 5 \uAE30\uBC18 Storybook \uD504\uB85C\uC81D\uD2B8\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uBCF8 \uC124\uC815\uC785\uB2C8\uB2E4), \uC560\uB4DC\uC628\uC774 \uC791\uB3D9\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC5EC\uB7EC\uBD84\uC758 \uC560\uB4DC\uC628\uC774 Babel\uACFC SWC\uB97C \uBAA8\uB450 \uC9C0\uC6D0\uD558\uB3C4\uB85D \uD558\uB824\uBA74, Unplugin\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC6F9\uD329\uACFC Vite \uBE4C\uB354 \uBAA8\uB450\uC5D0\uC11C \uC791\uB3D9\uD558\uB294 \uC0AC\uC6A9\uC790 \uC815\uC758 \uBC88\uB4E4\uB9C1 \uD50C\uB7EC\uADF8\uC778\uC744 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 Babel (\uB610\uB294 \uC6D0\uD558\uB294 \uB2E4\uB978 \uB3C4\uAD6C)\uAC00 \uC2A4\uD1A0\uB9AC\uC640 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uB85C\uB4DC\uB420 \uB54C \uC2E4\uD589\uB418\uB294 \uC77C\uC744 \uC644\uC804\uD788 \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC77C\uC2DC\uC801\uC778 \uD574\uACB0\uCC45\uC73C\uB85C\uB294, \uC0AC\uC6A9\uC790\uB4E4\uC5D0\uAC8C Babel \uC9C0\uC6D0\uC744 \uC120\uD0DD\uD558\uB3C4\uB85D \uBB38\uC11C\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD568\uC73C\uB85C\uC368, \uC774 \uD504\uB85C\uC81D\uD2B8\uC758 \uC560\uB4DC\uC628\uC774 \uC791\uB3D9\uD558\uB3C4\uB85D \uD560 \uC218 \uC788\uC9C0\uB9CC \uADF8\uC5D0 \uB530\uB978 \uC131\uB2A5 \uC800\uD558\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npx storybook@latest add @storybook/addon-webpack5-compiler-babel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u110B\u1175\u110C\u116E-\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u110C\u116E-\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> \uC774\uC8FC \uC608\uC2DC</h2><p>\uC560\uB4DC\uC628 \uD0B7 \uC800\uC7A5\uC18C\uB294 \uC774\uBBF8 Storybook 8.0\uC744 \uC9C0\uC6D0\uD558\uB3C4\uB85D \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC73C\uBA70, \uC5EC\uB7EC\uBD84\uC740 \uC5EC\uAE30\uC11C \uC774\uC8FC\uB97C \uC704\uD55C \uCC38\uACE0 \uC790\uB8CC\uB85C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uAC00\uC774\uB4DC\uC5D0\uC11C \uC124\uBA85\uB41C \uBCC0\uACBD \uC0AC\uD56D\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC73C\uBA70, type: module \uAD6C\uC131\uC744 \uD1B5\uD55C ESM \uC9C0\uC6D0\uC744 \uD3EC\uD568\uD55C \uC560\uB4DC\uC628 \uC5C5\uB370\uC774\uD2B8\uB97C \uAD8C\uC7A5\uD569\uB2C8\uB2E4. \uADF8\uB807\uAC8C \uD558\uBA74 \uC124\uC815\uC774 \uB2E8\uC21C\uD654\uB418\uACE0 \uC0AC\uC6A9\uC790\uB4E4\uC774 \uCD5C\uC2E0 \uBC84\uC804\uC758 Storybook\uACFC \uD568\uAED8 \uC560\uB4DC\uC628\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uB354 \uC26C\uC6CC\uC9D1\uB2C8\uB2E4. ESM \uC774\uC8FC\uC5D0 \uB530\uB77C \uC9C4\uD589\uD558\uACE0\uC790 \uD55C\uB2E4\uBA74, \uC544\uB798\uC5D0 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uAC04\uB7B5\uD788 \uB098\uC5F4\uD574\uB450\uC5C8\uC2B5\uB2C8\uB2E4.</p><ul><li>\uC758\uC874\uC131 \uAD00\uB9AC, ESM \uC9C0\uC6D0 \uBC0F \uC560\uB4DC\uC628 \uC5D4\uD2B8\uB9AC \uD3EC\uC778\uD2B8 \uC5C5\uB370\uC774\uD2B8\uB97C \uC704\uD55C package.json</li><li>\uBC88\uB4E4\uB9C1 \uBCC0\uACBD\uC744 \uC704\uD55C tsup.config.ts, Storybook\uC758 \uAE00\uB85C\uBC8C\uC744 \uACE0\uB824</li><li>ESM \uC774\uC8FC\uB97C \uC9C0\uC6D0\uD558\uAE30 \uC704\uD55C .storybook/local-preset.js</li></ul><h2 id="\u1105\u1175\u11AF\u1105\u1175\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#\u1105\u1175\u11AF\u1105\u1175\u1109\u1173" aria-hidden="true">#</a> \uB9B4\uB9AC\uC2A4</h2><p>Storybook 8.0\uC744 \uC9C0\uC6D0\uD558\uAE30 \uC704\uD574 \uAD8C\uC7A5\uD558\uB294 \uAC83\uC740 \uC0C8\uB85C\uC6B4 \uC8FC\uC694 \uBC84\uC804\uC758 \uC560\uB4DC\uC628\uC744 \uB9B4\uB9AC\uC2A4\uD558\uACE0 7.x\uB97C \uB9C8\uC774\uB108 \uB610\uB294 \uD328\uCE58 \uBC84\uC804\uC73C\uB85C \uACC4\uC18D \uC9C0\uC6D0\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC2E4\uD5D8\uC801\uC778 \uAE30\uB2A5\uC774\uB098 \uD14C\uC2A4\uD2B8\uB97C \uC704\uD574\uC11C\uB294 \uB2E4\uC74C \uD0DC\uADF8\uB97C \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624. \uC774\uB97C \uD1B5\uD574 \uC548\uC815 \uBC84\uC804\uC744 \uB9B4\uB9AC\uC2A4\uD558\uAE30 \uC804\uC5D0 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC560\uB4DC\uC628\uC744 \uD14C\uC2A4\uD2B8\uD558\uACE0 \uD53C\uB4DC\uBC31\uC744 \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110C\u1175\u110B\u116F\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110C\u1175\u110B\u116F\u11AB" aria-hidden="true">#</a> \uC9C0\uC6D0</h2><p>\uC774 \uAC00\uC774\uB4DC\uB97C \uB530\uB978 \uD6C4\uC5D0\uB3C4 \uC5EC\uC804\uD788 \uC560\uB4DC\uC628\uC5D0 \uBB38\uC81C\uAC00 \uC788\uB294 \uACBD\uC6B0, \uC800\uD76C GitHub \uC800\uC7A5\uC18C\uC5D0\uC11C \uC0C8\uB85C\uC6B4 \uD1A0\uB860\uC744 \uC5F4\uC5B4\uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.</p>`,32),s=[t];function i(d,p){return a(),o("div",null,s)}var m=e(r,[["render",i],["__file","index.html.vue"]]);export{m as default};