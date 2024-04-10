import{_ as s}from"./app.63e06a35.js";import{l as n,m as a,K as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var o="/assets/Addtotheintegrationcatalog_0.91d2b10f.png";const p={},e=t(`<p>Storybook\uC5D0\uB294 \uC560\uB4DC\uC628\uACFC \uB808\uC2DC\uD53C \uB450 \uAC00\uC9C0 \uC720\uD615\uC758 \uD1B5\uD569\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB4E4\uC740 \uD1B5\uD569 \uCE74\uD0C8\uB85C\uADF8\uC5D0 \uB098\uC5F4\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110B\u1162\u1103\u1173\u110B\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u1103\u1173\u110B\u1169\u11AB" aria-hidden="true">#</a> \uC560\uB4DC\uC628</h2><p>Storybook \uC560\uB4DC\uC628\uC740 npm\uC744 \uD1B5\uD574 \uBC30\uD3EC\uB429\uB2C8\uB2E4. \uCE74\uD0C8\uB85C\uADF8\uB294 package.json\uC5D0\uC11C Storybook\uC5D0 \uD2B9\uD654\uB41C \uBA54\uD0C0\uB370\uC774\uD130\uB97C \uCFFC\uB9AC\uD558\uC5EC npm \uB808\uC9C0\uC2A4\uD2B8\uB9AC\uC5D0\uC11C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4.</p><p>\uB2E4\uC74C \uC694\uAD6C \uC0AC\uD56D\uC744 \uC900\uC218\uD558\uB294 npm \uD328\uD0A4\uC9C0\uB97C \uAC8C\uC2DC\uD558\uC5EC \uC560\uB4DC\uC628\uC744 \uCE74\uD0C8\uB85C\uADF8\uC5D0 \uCD94\uAC00\uD558\uC138\uC694:</p><ul><li>module \uC815\uBCF4\uC640 \uC560\uB4DC\uC628 \uBA54\uD0C0\uB370\uC774\uD130\uAC00 \uD3EC\uD568\uB41C package.json \uD30C\uC77C</li><li>\uC124\uCE58 \uBC0F \uAD6C\uC131 \uC9C0\uCE68\uC774 \uD3EC\uD568\uB41C README.md \uD30C\uC77C</li><li>/dist \uB514\uB809\uD1A0\uB9AC\uC5D0\uB294 \uBCC0\uD658\uB41C ES5 \uCF54\uB4DC\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uB8E8\uD2B8 \uB808\uBCA8\uC5D0 ES5 \uBAA8\uB4C8\uB85C \uC791\uC131\uB41C preset.js \uD30C\uC77C</li></ul><h3 id="\u110B\u1162\u1103\u1173\u110B\u1169\u11AB-\u1106\u1166\u1110\u1161\u1103\u1166\u110B\u1175\u1110\u1165" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u1103\u1173\u110B\u1169\u11AB-\u1106\u1166\u1110\u1161\u1103\u1166\u110B\u1175\u1110\u1165" aria-hidden="true">#</a> \uC560\uB4DC\uC628 \uBA54\uD0C0\uB370\uC774\uD130</h3><p>\uCE74\uD0C8\uB85C\uADF8\uC5D0\uC11C \uC560\uB4DC\uC628\uC744 \uAD6C\uC131\uD558\uB294 \uB370 \uBA54\uD0C0\uB370\uC774\uD130\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. storybook-addons\uB97C \uCCAB \uBC88\uC9F8 \uD0A4\uC6CC\uB4DC\uB85C \uCD94\uAC00\uD55C \uD6C4 \uC560\uB4DC\uC628\uC758 \uCE74\uD14C\uACE0\uB9AC\uB97C \uB530\uB985\uB2C8\uB2E4. \uCD94\uAC00 \uD0A4\uC6CC\uB4DC\uB294 \uAC80\uC0C9 \uBC0F \uD0DC\uADF8\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p><p>\uC560\uB4DC\uC628\uC758 \uC678\uAD00\uC744 \uC0AC\uC6A9\uC790 \uC815\uC758\uD558\uB824\uBA74 \uC544\uB798 \uD544\uB4DC\uB97C \uAC00\uC9C4 storybook \uC18D\uC131\uC744 \uCD94\uAC00\uD558\uC138\uC694.</p><p>\uC544\uB798 \uBAA9\uB85D\uC744 \uCC38\uC870\uD558\uC5EC supportedFrameworks\uC640 unsupportedFrameworks \uD544\uB4DC\uC758 \uAC12\uC744 \uCC44\uC6B8 \uB54C \uC0AC\uC6A9\uD558\uC138\uC694.</p><ul><li>react</li><li>vue</li><li>angular</li><li>web-components</li><li>ember</li><li>html</li><li>svelte</li><li>preact</li><li>react-native</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// package.json</span>

  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;storybook-addon-outline&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CSS\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBAA8\uB4E0 \uC694\uC18C\uB97C \uAC15\uC870\uD558\uC5EC \uB808\uC774\uC544\uC6C3 \uBC30\uCE58 \uBC0F \uC815\uB82C\uC744 \uB3C4\uC640\uC90D\uB2C8\uB2E4&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;repository&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/chromaui/storybook-outline&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;winkerVSbecks&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;storybook-addons&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;debug&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;layout&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;storybook&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Outline&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;unsupportedFrameworks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;supportedFrameworks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;angular&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://yoursite.com/outline-icon.png&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC0C1\uB2E8\uC758 package.json\uC740 \uCE74\uD0C8\uB85C\uADF8\uC5D0 \uC544\uB798\uC640 \uAC19\uC774 \uB098\uD0C0\uB0A9\uB2C8\uB2E4. \uC81C\uD488\uC6A9 package.json\uC758 \uC608\uC81C\uB294 \uC5EC\uAE30\uC5D0\uC11C \uCC38\uC870\uD558\uC138\uC694.</p><img src="`+o+'"><h4 id="\u110E\u116E\u1100\u1161-\u1100\u1175\u1102\u1173\u11BC\u110B\u1175-\u110F\u1161\u1110\u1161\u11AF\u1105\u1169\u1100\u1173\u110B\u1166-\u1111\u116D\u1109\u1175\u1103\u116C\u1102\u1173\u11AB-\u1103\u1166-\u110B\u1165\u11AF\u1106\u1161\u1102\u1161-\u1100\u1165\u11AF\u1105\u1175\u11AF\u1101\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u110E\u116E\u1100\u1161-\u1100\u1175\u1102\u1173\u11BC\u110B\u1175-\u110F\u1161\u1110\u1161\u11AF\u1105\u1169\u1100\u1173\u110B\u1166-\u1111\u116D\u1109\u1175\u1103\u116C\u1102\u1173\u11AB-\u1103\u1166-\u110B\u1165\u11AF\u1106\u1161\u1102\u1161-\u1100\u1165\u11AF\u1105\u1175\u11AF\u1101\u1161\u110B\u116D" aria-hidden="true">#</a> \uCD94\uAC00 \uAE30\uB2A5\uC774 \uCE74\uD0C8\uB85C\uADF8\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB370 \uC5BC\uB9C8\uB098 \uAC78\uB9B4\uAE4C\uC694?</h4><p>\uCD94\uAC00 \uAE30\uB2A5\uC744 \uAC8C\uC2DC\uD558\uBA74 \uCE74\uD0C8\uB85C\uADF8\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uCD94\uAC00 \uAE30\uB2A5\uC744 \uAC8C\uC2DC\uD55C \uD6C4\uC5D0 \uCE74\uD0C8\uB85C\uADF8\uC5D0 \uB098\uD0C0\uB098\uB294 \uB370 \uC2DC\uAC04\uC774 \uAC78\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCD94\uAC00 \uAE30\uB2A5\uC774 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uB098\uD0C0\uB098\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uC774\uC288\uB97C \uC5F4\uC5B4\uC8FC\uC138\uC694.</p><h2 id="\u1105\u1166\u1109\u1175\u1111\u1175" tabindex="-1"><a class="header-anchor" href="#\u1105\u1166\u1109\u1175\u1111\u1175" aria-hidden="true">#</a> \uB808\uC2DC\uD53C</h2><p><strong>\uB808\uC2DC\uD53C</strong>\uB294 \uC560\uB4DC\uC628\uC774 \uC5C6\uB294 \uACBD\uC6B0\uB098 \uD1B5\uD569\uC5D0 \uC218\uB3D9 \uC791\uC5C5\uC774 \uD544\uC694\uD55C \uACBD\uC6B0\uC5D0 Storybook\uC5D0 \uC11C\uB4DC\uD30C\uD2F0 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uD1B5\uD569\uD558\uB294 \uC9C0\uCE68\uC758 \uC9D1\uD569\uC785\uB2C8\uB2E4.</p><h3 id="\u1102\u116E\u1100\u1161-\u1109\u1169\u110B\u1172\u1112\u1161\u1100\u1169-\u110B\u1175\u11BB\u1102\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u1102\u116E\u1100\u1161-\u1109\u1169\u110B\u1172\u1112\u1161\u1100\u1169-\u110B\u1175\u11BB\u1102\u1161\u110B\u116D" aria-hidden="true">#</a> \uB204\uAC00 \uC18C\uC720\uD558\uACE0 \uC788\uB098\uC694?</h3><p>\uB808\uC2DC\uD53C\uB294 Storybook \uD300\uC5D0 \uC758\uD574 \uC791\uC131\uB418\uACE0 \uC720\uC9C0\uBCF4\uC218\uB429\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 \uCEE4\uBBA4\uB2C8\uD2F0 \uC778\uAE30, \uB3C4\uAD6C \uC131\uC219\uB3C4 \uBC0F \uD1B5\uD569\uC758 \uC548\uC815\uC131\uC5D0 \uAE30\uCD08\uD558\uC5EC \uB808\uC2DC\uD53C\uB97C \uC791\uC131\uD569\uB2C8\uB2E4. \uC6B0\uB9AC\uC758 \uBAA9\uD45C\uB294 \uB808\uC2DC\uD53C\uAC00 \uC2DC\uAC04\uC774 \uC9C0\uB0A8\uC5D0\uB3C4 \uACC4\uC18D \uC791\uB3D9\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.</p><p>\uC6D0\uD558\uB294 \uB808\uC2DC\uD53C\uB97C \uCC3E\uC9C0 \uBABB\uD588\uB098\uC694? \uADF8\uAC83\uC774 \uCEE4\uBBA4\uB2C8\uD2F0\uC5D0\uC11C \uC778\uAE30\uAC00 \uC788\uB2E4\uBA74, \uC6B0\uB9AC \uBB38\uC11C\uD300\uC774 \uD558\uB098\uB97C \uC791\uC131\uD560 \uAC83\uC785\uB2C8\uB2E4. \uADF8 \uC0AC\uC774\uC5D0 \uD574\uACB0\uCC45\uC744 \uCC3E\uC544\uBCF4\uC138\uC694 \u2014 \uB2F9\uC2E0\uC774 \uC6D0\uD558\uB294 \uAC83\uACFC \uAC19\uC740 \uC694\uAD6C \uC0AC\uD56D\uC744 \uAC00\uC9C4 \uC0AC\uB78C\uC774 \uC774\uBBF8 \uC788\uC744 \uAC00\uB2A5\uC131\uC774 \uB192\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC790\uC2E0\uC758 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uB808\uC2DC\uD53C\uB97C \uC791\uC131\uD558\uC5EC \uC5F0\uAD6C\uACFC\uC815\uC744 \uAC00\uC18D\uD654\uD558\uB294 \uB370 \uB3C4\uC6C0\uC744 \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="\u1105\u1166\u1109\u1175\u1111\u1175-\u110B\u116D\u110E\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1105\u1166\u1109\u1175\u1111\u1175-\u110B\u116D\u110E\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB808\uC2DC\uD53C \uC694\uCCAD\uD558\uAE30</h3><p>\uB808\uC2DC\uD53C\uB97C \uC694\uCCAD\uD558\uB824\uBA74 GitHub \uC800\uC7A5\uC18C\uC5D0\uC11C \uC0C8\uB85C\uC6B4 \uD1A0\uB860\uC744 \uC5F4\uC5B4\uC8FC\uC138\uC694. \uC694\uCCAD\uC744 \uAC80\uD1A0\uD558\uACE0 \uC778\uAE30\uAC00 \uC788\uC73C\uBA74 \uBC31\uB85C\uADF8\uC5D0 \uCD94\uAC00\uD558\uC5EC \uC6B0\uC120\uC21C\uC704\uB97C \uB9E4\uAE38 \uAC81\uB2C8\uB2E4.</p><p>Storybook \uC560\uB4DC\uC628 \uC0DD\uD0DC\uACC4\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uAE30</p><ul><li>\uB2E4\uB978 \uC885\uB958\uC758 \uC560\uB4DC\uC628\uC744 \uC704\uD55C \uC560\uB4DC\uC628 \uC720\uD615</li><li>\uC560\uB4DC\uC628 \uAC1C\uBC1C\uC758 \uAE30\uCD08\uB97C \uC704\uD55C \uC560\uB4DC\uC628 \uC791\uC131</li><li>\uD504\uB9AC\uC14B \uAC1C\uBC1C\uC744 \uC704\uD55C \uD504\uB9AC\uC14B</li><li>\uC694\uAD6C \uC0AC\uD56D \uBC0F \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uB808\uC2DC\uD53C\uC5D0 \uB300\uD55C \uD1B5\uD569 \uCE74\uD0C8\uB85C\uADF8</li><li>\uC0AC\uC6A9 \uAC00\uB2A5\uD55C API\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uB294 API \uCC38\uC870</li></ul>',24),r=[e];function i(l,u){return n(),a("div",null,r)}var g=s(p,[["render",i],["__file","index.html.vue"]]);export{g as default};
