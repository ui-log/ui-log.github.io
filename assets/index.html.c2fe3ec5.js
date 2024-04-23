import{_ as e}from"./app.d68f74da.js";import{l as a,m as r,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const t={},i=o('<p>Storybook \uD504\uB808\uC784\uC6CC\uD06C\uB294 \uB178\uB4DC \uD328\uD0A4\uC9C0\uB85C, \uAE30\uBCF8 \uC9C0\uC6D0\uC744 \uC81C\uACF5\uD558\uC5EC \uBA54\uD0C0\uD504\uB808\uC784\uC6CC\uD06C(Next.js, NuxtJS, SvelteKit) \uB610\uB294 \uBE4C\uB354(Webpack, Vite)\uC640 \uB80C\uB354\uB7EC(React, Angular, Vue 3, \uC6F9 \uCEF4\uD3EC\uB10C\uD2B8 \uB4F1)\uC758 \uC870\uD569\uC5D0\uC11C \uC791\uB3D9\uD560 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4.</p><p>\uBA54\uD0C0\uD504\uB808\uC784\uC6CC\uD06C\uC758 \uACBD\uC6B0, Storybook \uD504\uB808\uC784\uC6CC\uD06C\uB294 \uB610\uD55C Storybook\uC774 \uBA54\uD0C0\uD504\uB808\uC784\uC6CC\uD06C\uB85C \uC0DD\uC131\uB41C \uC571\uACFC \uC720\uC0AC\uD558\uAC8C \uB3D9\uC791\uD558\uB3C4\uB85D \uD544\uC694\uD55C \uCD94\uAC00 \uAD6C\uC131\uC744 \uB2E4\uB8F9\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, @storybook/nextjs\uB294 Next.js \uC571\uC758 \uB2E4\uC591\uD55C \uAE30\uB2A5\uC744 Storybook \uB0B4\uC5D0\uC11C \uC7AC\uD604\uD558\uAC70\uB098 \uBAA8\uBC29\uD569\uB2C8\uB2E4.</p><p>\uCC38\uACE0\uB85C, \uC804\uCCB4 \uC18C\uC2A4 \uCF54\uB4DC\uC640 \uBB38\uC11C\uB97C \uD3EC\uD568\uD55C \uBAA8\uB4E0 \uACF5\uC2DD Storybook \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1111\u1173\u1105\u1166\u110B\u1175\u11B7\u110B\u116F\u110F\u1173-\u1106\u1161\u11AB\u1103\u1173\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1111\u1173\u1105\u1166\u110B\u1175\u11B7\u110B\u116F\u110F\u1173-\u1106\u1161\u11AB\u1103\u1173\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uD504\uB808\uC784\uC6CC\uD06C \uB9CC\uB4DC\uB294 \uBC29\uBC95</h2><h3 id="_1-\u1111\u1162\u110F\u1175\u110C\u1175-\u110B\u1175\u1105\u1173\u11B7-\u1100\u1167\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_1-\u1111\u1162\u110F\u1175\u110C\u1175-\u110B\u1175\u1105\u1173\u11B7-\u1100\u1167\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 1. \uD328\uD0A4\uC9C0 \uC774\uB984 \uACB0\uC815\uD558\uAE30</h3><p>\uC774\uB984\uC740 storybook-framework-\uB85C \uC2DC\uC791\uD558\uC5EC \uD504\uB808\uC784\uC6CC\uD06C\uAC00 \uC9C0\uC6D0\uD558\uB294 \uB0B4\uC6A9\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, SvelteKit\uC744 \uB300\uC0C1\uC73C\uB85C \uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uC774\uB984\uC740 storybook-framework-svelte-kit\uC774\uACE0, Vite\uC640 \uD568\uAED8 Stencil\uC744 \uB300\uC0C1\uC73C\uB85C \uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uC774\uB984\uC740 storybook-framework-stencil-vite\uC785\uB2C8\uB2E4. \uBA54\uD0C0\uD504\uB808\uC784\uC6CC\uD06C\uB97C \uB300\uC0C1\uC73C\uB85C \uD558\uC9C0 \uC54A\uC744 \uB54C\uC758 \uB124\uC774\uBC0D \uADDC\uCE59\uC740 storybook-framework-<code>renderer</code>-<code>builder</code>\uC785\uB2C8\uB2E4.</p><h3 id="_2-\u1111\u1173\u1105\u1166\u110B\u1175\u11B7\u110B\u116F\u110F\u1173\u1100\u1161-\u1112\u1162\u110B\u1163-\u1112\u1161\u11AF-\u110B\u1175\u11AF-\u1100\u1169\u1105\u1167\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-\u1111\u1173\u1105\u1166\u110B\u1175\u11B7\u110B\u116F\u110F\u1173\u1100\u1161-\u1112\u1162\u110B\u1163-\u1112\u1161\u11AF-\u110B\u1175\u11AF-\u1100\u1169\u1105\u1167\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2. \uD504\uB808\uC784\uC6CC\uD06C\uAC00 \uD574\uC57C \uD560 \uC77C \uACE0\uB824\uD558\uAE30</h3><p>\uBAA9\uD45C\uB294 Storybook\uC774 \uB300\uC0C1\uC73C\uB85C \uD558\uB294 \uBA54\uD0C0\uD504\uB808\uC784\uC6CC\uD06C \uB610\uB294 \uBE4C\uB354-\uB80C\uB354\uB7EC \uC870\uD569\uACFC \uAC00\uB2A5\uD55C \uC720\uC0AC\uD558\uAC8C &#39;\uC989\uC2DC \uC0AC\uC6A9 \uAC00\uB2A5&#39;\uD558\uAC8C \uB3D9\uC791\uD558\uB3C4\uB85D \uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.</p><p>\uBA54\uD0C0\uD504\uB808\uC784\uC6CC\uD06C\uC758 \uACBD\uC6B0, \uC774\uB294 \uBA54\uD0C0\uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uBE4C\uB354\uB098 \uBC14\uBCA8 \uAD6C\uC131\uC744 \uC7AC\uD604\uD558\uB824\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uAC00\uB2A5\uD55C \uD55C \uAE30\uC874 \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC131\uC744 \uC874\uC911\uD558\uBA70 \uC774\uB97C \uC218\uD589\uD574 \uBCF4\uC544\uC57C \uD569\uB2C8\uB2E4.</p><p>\uADC0\uD558\uC758 \uD504\uB808\uC784\uC6CC\uD06C\uAC00 \uC9C0\uC6D0\uD558\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB098 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB294 \uB2E4\uC591\uD55C \uC8FC\uC694 \uBC84\uC804\uC744 \uAC00\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD504\uB808\uC784\uC6CC\uD06C\uAC00 \uC9C0\uC6D0\uD560 \uAC01 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBC84\uC804\uC744 \uACE0\uB824\uD574 \uBCF4\uC138\uC694. \uC774\uB7EC\uD55C \uB2E4\uB978 \uBC84\uC804 \uB0B4\uC758 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uACE0\uB824\uD558\uAC70\uB098 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uAC01 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBC84\uC804\uC744 \uC9C0\uC6D0\uD558\uAE30 \uC704\uD574 \uB2E4\uB978 \uBC84\uC804/\uD328\uD0A4\uC9C0\uB85C \uBD84\uD560\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC720\uC9C0\uBCF4\uC218 \uC18D\uB3C4\uB97C \uB192\uC774\uAE30 \uC704\uD574, \uADC0\uD558\uC758 \uD504\uB808\uC784\uC6CC\uD06C\uAC00 \uC9C0\uC6D0\uD558\uB294 \uB2E4\uC591\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBC84\uC804\uC5D0 \uB300\uD55C \uD1B5\uD569 \uD14C\uC2A4\uD2B8\uB97C \uCD94\uAC00\uD558\uB294 \uAC83\uC744 \uACE0\uB824\uD574 \uC8FC\uC138\uC694.</p><h3 id="_3-\u1106\u116E\u11AB\u1109\u1165-\u110C\u1161\u11A8\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#_3-\u1106\u116E\u11AB\u1109\u1165-\u110C\u1161\u11A8\u1109\u1165\u11BC" aria-hidden="true">#</a> 3. \uBB38\uC11C \uC791\uC131</h3><p>\uCF54\uB4DC\uB97C \uC791\uC131\uD558\uAE30 \uC804\uC5D0, \uC124\uCE58 \uC9C0\uCE68\uACFC \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uAE30\uB2A5 \uBAA9\uB85D\uC774 \uD3EC\uD568\uB41C \uC720\uC6A9\uD55C README\uB97C \uC791\uC131\uD574 \uBCF4\uC138\uC694. @storybook/nextjs\uC758 README\uB97C \uCC38\uACE0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBB38\uC11C\uB97C \uBA3C\uC800 \uC791\uC131\uD568\uC73C\uB85C\uC368 \uB2E4\uB978 \uC791\uC5C5\uC744 \uC548\uB0B4\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4.</p><h3 id="_4-\u110C\u1161\u110E\u1166-\u1111\u1173\u1105\u1166\u110B\u1175\u11B7\u110B\u116F\u110F\u1173-\u110C\u1161\u11A8\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_4-\u110C\u1161\u110E\u1166-\u1111\u1173\u1105\u1166\u110B\u1175\u11B7\u110B\u116F\u110F\u1173-\u110C\u1161\u11A8\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 4. \uC790\uCCB4 \uD504\uB808\uC784\uC6CC\uD06C \uC791\uC131\uD558\uAE30</h3><p>\uD504\uB808\uC784\uC6CC\uD06C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBD80\uBD84\uC744 \uD3EC\uD568\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><h4 id="package-json-\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#package-json-\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> package.json (\uC608\uC2DC)</h4><p>\uD504\uB808\uC784\uC6CC\uD06C\uB294 \uB178\uB4DC \uD328\uD0A4\uC9C0\uC774\uAE30 \uB54C\uBB38\uC5D0 package.json \uD30C\uC77C\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uB2E4\uC74C\uC740 \uC2DC\uC791\uC744 \uC704\uD574 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD15C\uD50C\uB9BF\uC785\uB2C8\uB2E4:</p><h4 id="preset-js-\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#preset-js-\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> preset.js (\uC608\uC2DC)</h4><p>\uD504\uB9AC\uC14B API\uB294 Storybook \uCF54\uC5B4\uB97C \uAD6C\uC131\uD560 \uC218 \uC788\uB294 \uACF3\uC785\uB2C8\uB2E4 (\uC5B4\uB5A4 \uBE4C\uB354\uC640 \uB80C\uB354\uB7EC\uAC00 \uB2F9\uC2E0\uC758 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294\uC9C0), \uBE4C\uB354 (webpackFinal \uB610\uB294 viteFinal export\uB97C \uD1B5\uD574), babel (babel export\uB97C \uD1B5\uD574), \uD544\uC694\uD55C \uC560\uB4DC\uC628 \uBC0F \uB2F9\uC2E0\uC758 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB300\uD55C \uAC00\uB2A5\uD55C \uC635\uC158\uB4E4\uC744 \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h4 id="preview-js-\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#preview-js-\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> preview.js (\uC608\uC2DC)</h4><p>(\uC120\uD0DD \uC0AC\uD56D) \uD504\uB9AC\uBDF0 API\uB294 \uC2A4\uD1A0\uB9AC\uB4E4\uC758 \uB80C\uB354\uB9C1\uC744 \uAD6C\uC131\uD560 \uC218 \uC788\uB294 \uACF3\uC785\uB2C8\uB2E4. \uC804\uC5ED \uC7A5\uC2DD\uC790\uB098 \uD504\uB808\uC784\uC6CC\uD06C\uAC00 \uC608\uC0C1\uB300\uB85C \uC791\uB3D9\uD558\uAE30 \uC704\uD574 \uD544\uC694\uD55C \uB7F0\uD0C0\uC784 \uC124\uC815\uC744 \uCD08\uAE30\uD654\uD558\uB294 \uAC83\uACFC \uAC19\uC740 \uC791\uC5C5\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9CC\uC57D \uB2F9\uC2E0\uC758 \uD504\uB808\uC784\uC6CC\uD06C\uAC00 \uC774 \uD30C\uC77C\uC744 \uD544\uC694\uB85C \uD55C\uB2E4\uBA74, preset.js\uC5D0\uC11C previewAnnotations\uB97C \uAD6C\uC131\uD574\uC57C \uD568\uC744 \uC8FC\uC758\uD574\uC57C \uD569\uB2C8\uB2E4.</p><h4 id="types-ts-\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#types-ts-\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> types.ts (\uC608\uC2DC)</h4><p>\uB9CC\uC57D TypeScript\uB85C \uB2F9\uC2E0\uC758 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uAC1C\uBC1C \uC911\uC774\uB77C\uBA74 (\uAD8C\uC7A5), \uB2F9\uC2E0\uC758 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC635\uC158\uC744 \uBC18\uC601\uD55C StorybookConfig \uD0C0\uC785\uC744 export\uD574\uC57C \uD569\uB2C8\uB2E4.</p><h3 id="_5-\u1103\u1161\u11BC\u1109\u1175\u11AB\u110B\u1174-\u1111\u1173\u1105\u1166\u110B\u1175\u11B7\u110B\u116F\u110F\u1173\u1105\u1173\u11AF-\u1110\u1166\u1109\u1173\u1110\u1173\u1112\u1162\u1107\u1169\u1109\u1166\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#_5-\u1103\u1161\u11BC\u1109\u1175\u11AB\u110B\u1174-\u1111\u1173\u1105\u1166\u110B\u1175\u11B7\u110B\u116F\u110F\u1173\u1105\u1173\u11AF-\u1110\u1166\u1109\u1173\u1110\u1173\u1112\u1162\u1107\u1169\u1109\u1166\u110B\u116D" aria-hidden="true">#</a> 5. \uB2F9\uC2E0\uC758 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uD14C\uC2A4\uD2B8\uD574\uBCF4\uC138\uC694</h3><p>\uAC00\uB2A5\uD55C \uD55C \uB2F9\uC2E0\uC758 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uAC00\uAE4C\uC6B4 \uC124\uC815\uC73C\uB85C Storybook\uC774 \uC124\uC815\uB41C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uD14C\uC2A4\uD2B8\uD574\uBCF4\uC138\uC694. \uC608\uB97C \uB4E4\uC5B4, React\uC640 Webpack5\uB97C \uC0AC\uC6A9\uD558\uB294 @storybook/nextjs\uC758 \uACBD\uC6B0, @storybook/react \uBC0F @storybook/builder-webpack5\uB97C \uC0AC\uC6A9\uD558\uB294 \uD504\uB85C\uC81D\uD2B8\uB97C \uC2DC\uC791\uC810\uC73C\uB85C \uC0BC\uC73C\uC138\uC694. README\uC5D0\uC11C\uC758 \uC124\uCE58 \uC9C0\uCE68\uC744 \uB530\uB974\uACE0 \uBAA8\uB4E0 \uAC83\uC774 \uC608\uC0C1\uB300\uB85C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694. \uC9C0\uC6D0\uD558\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC758 \uB2E4\uC591\uD55C \uBC84\uC804, \uC124\uC815 \uBC0F \uC635\uC158\uC744 \uD14C\uC2A4\uD2B8\uD558\uB294 \uAC83\uC744 \uC78A\uC9C0 \uB9C8\uC138\uC694.</p><h3 id="_6-\u110B\u1161\u11AF\u1105\u1167\u110C\u116E\u1109\u1166\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#_6-\u110B\u1161\u11AF\u1105\u1167\u110C\u116E\u1109\u1166\u110B\u116D" aria-hidden="true">#</a> 6. \uC54C\uB824\uC8FC\uC138\uC694!</h3><p>\uD504\uB808\uC784\uC6CC\uD06C\uAC00 \uC644\uC804\uD788 \uD14C\uC2A4\uD2B8\uB418\uACE0 \uB9B4\uB9AC\uC2A4\uB418\uBA74, #showcase Discord \uCC44\uB110\uC5D0\uC11C \uBC1C\uD45C\uD558\uAC70\uB098 @storybookjs\uB97C \uBA58\uC158\uD558\uC5EC \uD2B8\uC717\uC73C\uB85C \uACF5\uC720\uD574\uC8FC\uC138\uC694. \uC798 \uB9CC\uB4E4\uC5B4\uC9C4 \uCEE4\uBBA4\uB2C8\uD2F0 \uD504\uB808\uC784\uC6CC\uD06C\uAC00 \uCD5C\uC885\uC801\uC73C\uB85C Storybook \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB85C \uC774\uB3D9\uD558\uC5EC &quot;\uACF5\uC2DD\uC801\uC73C\uB85C&quot; \uC9C0\uC6D0\uB418\uAE30\uB97C \uD76C\uB9DD\uD569\uB2C8\uB2E4.</p><p>Storybook\uC5D0 \uAE30\uC5EC\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uC138\uC694.</p><ul><li>\uAE30\uB2A5 \uC694\uCCAD \uC791\uC131\uC744 \uC704\uD55C RFC \uD504\uB85C\uC138\uC2A4</li><li>\uAE30\uB2A5 \uBC0F \uBC84\uADF8 \uC218\uC815\uC744 \uC704\uD55C \uCF54\uB4DC</li><li>\uC0C8\uB85C\uC6B4 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uC2DC\uC791\uD558\uB294 \uBC29\uBC95</li><li>\uBB38\uC11C \uAC1C\uC120, \uC624\uD0C0 \uC218\uC815 \uBC0F \uBA85\uB8CC\uD654\uB97C \uC704\uD55C \uBB38\uC11C</li><li>\uC0C8\uB85C\uC6B4 \uCF54\uB4DC \uC2A4\uB2C8\uD3AB \uBC0F \uC608\uC81C\uC5D0 \uB300\uD55C \uC608\uC81C</li></ul>',28),s=[i];function d(h,p){return a(),r("div",null,s)}var u=e(t,[["render",d],["__file","index.html.vue"]]);export{u as default};
