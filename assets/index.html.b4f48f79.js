import{_ as e}from"./app.3052dcfb.js";import{l as o,m as i,K as r}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const a={},t=r(`<p>Storybook 8\uB294 \uC131\uB2A5, \uD638\uD658\uC131 \uBC0F \uC548\uC815\uC131\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294 \uB370 \uCD08\uC810\uC744 \uB9DE\uCD94\uACE0 \uC788\uC5B4\uC694. \uC8FC\uC694 \uAE30\uB2A5\uC740 \uB2E4\uC74C\uACFC \uAC19\uC544\uC694:</p><ul><li>\u{1FA7B} \uC0C8\uB85C\uC6B4 \uBE44\uC8FC\uC5BC \uD14C\uC2A4\uD2B8 \uC6CC\uD06C\uD50C\uB85C\uC6B0\uC778 Visual Tests \uC560\uB4DC\uC628\uC744 \uD1B5\uD55C \uBE44\uC8FC\uC5BC \uD14C\uC2A4\uD305</li><li>\u{1F4A8} 2\uBC30\uC5D0\uC11C 4\uBC30 \uB354 \uBE60\uB978 \uD14C\uC2A4\uD2B8 \uBE4C\uB4DC, 25-50% \uB354 \uBE60\uB978 React \uB3C5\uC820, \uC6F9\uD329 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB300\uD55C SWC \uC9C0\uC6D0</li><li>\u{1F9E9} \uD5A5\uC0C1\uB41C \uD504\uB808\uC784\uC6CC\uD06C \uC9C0\uC6D0: \uB17C-\uB9AC\uC561\uD2B8 \uB80C\uB354\uB7EC\uB97C \uC0AC\uC6A9\uD560 \uB54C \uB354 \uC774\uC0C1 \uB9AC\uC561\uD2B8\uB97C \uD53C\uC5B4 \uC758\uC874\uC131\uC73C\uB85C \uC124\uCE58\uD560 \uD544\uC694\uAC00 \uC5C6\uC74C</li><li>\u{1F39B}\uFE0F React \uBC0F Vue \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uCEE8\uD2B8\uB864 \uC0DD\uC131 \uAC15\uD654</li><li>\u26A1\uFE0F \uAC1C\uC120\uB41C Vite \uC544\uD0A4\uD14D\uCC98, Vitest \uD14C\uC2A4\uD305 \uBC0F Vite 5 \uC9C0\uC6D0</li><li>\u{1F310} React \uC11C\uBC84 \uCEF4\uD3EC\uB10C\uD2B8 (RSC) \uC9C0\uC6D0: \uC6B0\uB9AC\uC758 \uC2E4\uD5D8\uC801\uC778 \uC194\uB8E8\uC158\uC740 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uBE44\uB3D9\uAE30 RSC\uB97C \uB80C\uB354\uB9C1\uD558\uACE0 \uB178\uB4DC \uCF54\uB4DC\uB97C \uBAA8\uC758\uD558\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD568</li><li>\u2728 \uC0C8\uB86D\uAC8C \uAC31\uC2E0\uB41C \uB370\uC2A4\uD06C\uD1B1 UI \uBC0F \uBAA8\uBC14\uC77C UX</li><li>\u2795 \uADF8 \uBC16\uC5D0\uB3C4 \uB9CE\uC740 \uAE30\uB2A5\uB4E4\uC774 \uC788\uC5B4\uC694</li></ul><p>\uC774 \uC548\uB0B4\uC11C\uB294 Storybook 6.x\uC5D0\uC11C 8.0\uC73C\uB85C \uC131\uACF5\uC801\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uAE30 \uC704\uD55C \uB3C4\uC6C0\uC744 \uC81C\uACF5\uD558\uB294 \uAC83\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4!</p><h2 id="\u110C\u116E\u110B\u116D-\u1107\u1167\u11AB\u1100\u1167\u11BC-\u1109\u1161\u1112\u1161\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110C\u116E\u110B\u116D-\u1107\u1167\u11AB\u1100\u1167\u11BC-\u1109\u1161\u1112\u1161\u11BC" aria-hidden="true">#</a> \uC8FC\uC694 \uBCC0\uACBD \uC0AC\uD56D</h2><p>\uC774 \uC548\uB0B4\uC758 \uB098\uBA38\uC9C0 \uBD80\uBD84\uC740 \uC131\uACF5\uC801\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB420 \uAC83\uC785\uB2C8\uB2E4. \uC790\uB3D9\uC73C\uB85C \uD558\uAC70\uB098 \uC218\uB3D9\uC73C\uB85C \uD558\uB358 \uC120\uD0DD, \uB450 \uAC00\uC9C0 \uBC29\uBC95 \uC911\uC5D0\uC11C \uC120\uD0DD\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uBA3C\uC800, Storybook 7\uACFC Storybook 8\uC5D0\uC11C \uB9CE\uC740 \uC911\uC694\uD55C \uBCC0\uACBD \uC0AC\uD56D\uC744 \uB204\uC801\uD588\uC2B5\uB2C8\uB2E4. \uB354 \uB098\uC544\uAC00\uAE30 \uC804\uC5D0 \uC54C\uC544\uB450\uC5B4\uC57C \uD560 \uAC00\uC7A5 \uC911\uC694\uD55C \uBCC0\uACBD \uC0AC\uD56D\uB4E4\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><ul><li>framework field\uB294 \uC774\uC81C \uD544\uC218 \uC0AC\uD56D\uC785\uB2C8\uB2E4.</li><li>Start \uBC0F build CLI \uBC14\uC774\uB108\uB9AC\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</li><li>storiesOf API\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</li><li>*.stories.mdx \uD615\uC2DD\uC774 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</li><li>\uB80C\uB354\uB9C1 \uC911\uC5D0 \uB354 \uC774\uC0C1 \uC554\uBB35\uC801 \uC561\uC158(\uC608: play \uD568\uC218 \uB0B4\uC5D0\uC11C argTypesRegex\uC758 \uC554\uC2DC\uC801 \uC561\uC158)\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</li><li>\uCEF4\uD3EC\uB10C\uD2B8 \uBD84\uC11D\uC744 \uC704\uD55C \uAE30\uBCF8 \uB3C4\uAD6C\uB294 \uC774\uC81C react-docgen(react-docgen-typescript \uB300\uC2E0)\uC785\uB2C8\uB2E4.</li><li>Storyshots\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</li><li>Storybook 7\uC5D0\uC11C \uB3C4\uC785\uB41C Addons API\uAC00 \uC774\uC81C \uD544\uC218 \uC694\uAC74\uC73C\uB85C \uC694\uAD6C\uB429\uB2C8\uB2E4.</li><li>\uC0DD\uD0DC\uACC4 \uC5C5\uB370\uC774\uD2B8 Webpack4 \uC9C0\uC6D0\uC774 \uC911\uB2E8\uB418\uC5C8\uC2B5\uB2C8\uB2E4. IE11 \uC9C0\uC6D0\uC774 \uC911\uB2E8\uB418\uC5C8\uC2B5\uB2C8\uB2E4. Node 18+\uAC00 \uC774\uC81C \uD544\uC694\uB85C \uB429\uB2C8\uB2E4. Next.js 13.5+\uAC00 \uC774\uC81C \uD544\uC694\uB85C \uB429\uB2C8\uB2E4. Vue 3+\uAC00 \uC774\uC81C \uD544\uC694\uB85C \uB429\uB2C8\uB2E4. Angular 15+\uAC00 \uC774\uC81C \uD544\uC694\uB85C \uB429\uB2C8\uB2E4. Svelte 4+\uAC00 \uC774\uC81C \uD544\uC694\uB85C \uB429\uB2C8\uB2E4. Yarn 1\uC740 \uB354 \uC774\uC0C1 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</li></ul><p>\uD504\uB85C\uC81D\uD2B8\uC5D0 \uC774\uB7EC\uD55C \uBCC0\uACBD \uC0AC\uD56D \uC911 \uC5B4\uB290 \uAC83\uC774 \uD574\uB2F9\uB418\uB294 \uACBD\uC6B0, \uACC4\uC18D\uD558\uAE30 \uC804\uC5D0 \uC5F0\uACB0\uB41C \uC774\uC8FC \uACF5\uC9C0 \uC0AC\uD56D\uC744 \uC77D\uC5B4\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.</p><p>\uC774\uB7EC\uD55C \uC0C8\uB85C\uC6B4 \uC694\uAD6C \uC0AC\uD56D\uC774\uB098 \uBCC0\uACBD \uC0AC\uD56D \uC911 \uC5B4\uB5A4 \uAC83\uC774 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC7A5\uC560\uBB3C\uC774 \uB420 \uACBD\uC6B0, Storybook 7\uB85C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uB294 \uC694\uAD6C \uC0AC\uD56D\uC744 \uCC38\uC870\uD558\uC2DC\uAE30\uB97C \uAD8C\uC7A5\uB4DC\uB9BD\uB2C8\uB2E4.</p><p>Storybook 6\uC5D0\uC11C 7, \uADF8\uB9AC\uACE0 Storybook 7\uC5D0\uC11C 8\uB85C \uC774\uC8FC\uD558\uAE30 \uC804\uC5D0 \uC804\uCCB4 \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uB178\uD2B8\uB97C \uC77D\uC5B4\uBCF4\uC2DC\uAE30\uB97C \uAD8C\uC7A5\uB4DC\uB9BD\uB2C8\uB2E4. \uB610\uB294 \uC544\uB798 \uC9C0\uC2DC \uC0AC\uD56D\uC744 \uB530\uB97C \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC6B0\uB9AC\uAC00 \uBAA8\uB4E0 \uAC83\uC744 \uD574\uACB0\uD574 \uB4DC\uB9B4\uAC8C\uC694!</p><h2 id="\u110C\u1161\u1103\u1169\u11BC-\u110B\u1165\u11B8\u1100\u1173\u1105\u1166\u110B\u1175\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1103\u1169\u11BC-\u110B\u1165\u11B8\u1100\u1173\u1105\u1166\u110B\u1175\u1103\u1173" aria-hidden="true">#</a> \uC790\uB3D9 \uC5C5\uADF8\uB808\uC774\uB4DC</h2><p>Storybook\uC744 \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uB824\uBA74:</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npx storybook@latest upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uB2E4\uC74C\uC744 \uC218\uD589\uD560 \uAC83\uC785\uB2C8\uB2E4:</p><ul><li>\uD604\uC7AC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD574\uB2F9\uD558\uB294 \uD328\uCE58\uAC00 \uC5C6\uC74C\uC744 \uD655\uC778\uD569\uB2C8\uB2E4. \uB9CC\uC57D \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD55C\uB2E4\uBA74 \uACC4\uC18D\uD558\uAE30 \uC804\uC5D0 \uC774\uB97C \uD574\uACB0\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC9C0\uCE68\uC744 \uBC1B\uAC8C \uB420 \uAC83\uC785\uB2C8\uB2E4.</li><li>Storybook \uC758\uC874\uC131\uC744 \uCD5C\uC2E0 \uBC84\uC804\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD569\uB2C8\uB2E4.</li><li>\uC790\uB3D9 \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uBAA8\uC74C\uC744 \uC2E4\uD589\uD558\uC5EC \uB2E4\uC74C\uC744 \uC218\uD589\uD569\uB2C8\uB2E4: \uC77C\uBC18\uC801\uC778 \uC5C5\uADF8\uB808\uC774\uB4DC \uC791\uC5C5\uC744 \uD655\uC778\uD569\uB2C8\uB2E4. \uB354 \uB9CE\uC740 \uC815\uBCF4\uAC00 \uD3EC\uD568\uB41C \uB9C1\uD06C\uB85C \uD544\uC694\uD55C \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4. \uC2B9\uC778\uC744 \uC694\uCCAD\uD55C \uD6C4 \uADC0\uD558\uB97C \uB300\uC2E0\uD558\uC5EC \uC791\uC5C5\uC744 \uC218\uD589\uD569\uB2C8\uB2E4.</li><li>\uC77C\uBC18\uC801\uC778 \uC5C5\uADF8\uB808\uC774\uB4DC \uC791\uC5C5\uC744 \uD655\uC778\uD569\uB2C8\uB2E4.</li><li>\uB354 \uB9CE\uC740 \uC815\uBCF4\uAC00 \uD3EC\uD568\uB41C \uB9C1\uD06C\uB85C \uD544\uC694\uD55C \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4.</li><li>\uC2B9\uC778\uC744 \uC694\uCCAD\uD55C \uD6C4 \uADC0\uD558\uB97C \uB300\uC2E0\uD558\uC5EC \uC791\uC5C5\uC744 \uC218\uD589\uD569\uB2C8\uB2E4.</li></ul><h3 id="\u110B\u1175\u11AF\u1107\u1161\u11AB\u110C\u1165\u11A8\u110B\u1175\u11AB-\u110B\u1165\u11B8\u1100\u1173\u1105\u1166\u110B\u1175\u1103\u1173-\u1106\u116E\u11AB\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11AF\u1107\u1161\u11AB\u110C\u1165\u11A8\u110B\u1175\u11AB-\u110B\u1165\u11B8\u1100\u1173\u1105\u1166\u110B\u1175\u1103\u1173-\u1106\u116E\u11AB\u110C\u1166" aria-hidden="true">#</a> \uC77C\uBC18\uC801\uC778 \uC5C5\uADF8\uB808\uC774\uB4DC \uBB38\uC81C</h3><p>\uC790\uB3D9\uC73C\uB85C \uD504\uB85C\uC81D\uD2B8\uB97C \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uAE30 \uC704\uD574 \uCD5C\uC120\uC744 \uB2E4\uD558\uACA0\uC9C0\uB9CC, \uC5C5\uADF8\uB808\uC774\uB4DC \uACFC\uC815\uC5D0\uC11C \uB9C8\uC8FC\uCE60 \uC218 \uC788\uB294 \uB450 \uAC00\uC9C0 \uBB38\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4:</p><h4 id="storystorev7-false\u110B\u116A-storiesof" tabindex="-1"><a class="header-anchor" href="#storystorev7-false\u110B\u116A-storiesof" aria-hidden="true">#</a> storyStoreV7: false\uC640 storiesOf</h4><p>.storybook/main.js\uC5D0\uC11C storyStoreV7: false\uB77C\uB294 \uC124\uC815\uC774 \uC788\uB2E4\uBA74 Storybook 8\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uAE30 \uC804\uC5D0 \uC774 \uC124\uC815\uC744 \uC81C\uAC70\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p>StoriesOf API\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0(Storybook 7\uC5D0\uC11C storyStoreV7: false\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4), \uC2A4\uD1A0\uB9AC\uB97C CSF\uB85C \uC774\uC804\uD558\uAC70\uB098 \uC0C8 \uC778\uB371\uC11C API\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC2A4\uD1A0\uB9AC\uB97C \uB3D9\uC801\uC73C\uB85C \uACC4\uC18D \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.</p><h4 id="mdx-1\u110B\u1166\u1109\u1165-mdx-3\u110B\u1173\u1105\u1169" tabindex="-1"><a class="header-anchor" href="#mdx-1\u110B\u1166\u1109\u1165-mdx-3\u110B\u1173\u1105\u1169" aria-hidden="true">#</a> MDX 1\uC5D0\uC11C MDX 3\uC73C\uB85C</h4><p>Storybook 8\uC5D0\uC11C\uB294 MDX 3\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uB9CC\uC57D MDX 1(Storybook 6\uC5D0\uC11C \uC0AC\uC6A9)\uC5D0\uC11C \uC628 \uAC83\uC774\uB77C\uBA74, MDX 2\uC5D0\uC11C \uC911\uB300\uD558\uAC8C \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uB294 \uB370 \uC131\uACF5\uC801\uC73C\uB85C \uB3C4\uC6C0\uC774 \uB420 \uC218 \uC788\uB294 \uC548\uB0B4\uB97C \uCC38\uC870\uD574\uC8FC\uC138\uC694.</p><h3 id="vite-config-js-\u1111\u1161\u110B\u1175\u11AF\u110B\u1175-\u1102\u116E\u1105\u1161\u11A8\u1103\u116C\u110B\u1165\u11BB\u1109\u1173\u11B8\u1102\u1175\u1103\u1161" tabindex="-1"><a class="header-anchor" href="#vite-config-js-\u1111\u1161\u110B\u1175\u11AF\u110B\u1175-\u1102\u116E\u1105\u1161\u11A8\u1103\u116C\u110B\u1165\u11BB\u1109\u1173\u11B8\u1102\u1175\u1103\u1161" aria-hidden="true">#</a> vite.config.js \uD30C\uC77C\uC774 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4</h3><p>\uB9CC\uC57D Vite\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB2E4\uBA74, Storybook\uACFC \uD568\uAED8 \uCD5C\uC2E0 \uBC84\uC804\uC758 Vite\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8\uC5D0 vite.config.js \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5B4\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C, \uD504\uB808\uC784\uC6CC\uD06C\uC6A9 Vite \uD50C\uB7EC\uADF8\uC778\uC744 \uC124\uCE58\uD558\uACE0 \uAD6C\uC131\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uC815\uBCF4\uB294 \uC804\uCCB4 \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uB178\uD2B8\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF" aria-hidden="true">#</a> \uBB38\uC81C \uD574\uACB0</h2><p>\uC790\uB3D9 \uC5C5\uADF8\uB808\uC774\uB4DC\uB97C \uD1B5\uD574 Storybook\uC744 \uC791\uB3D9 \uAC00\uB2A5\uD55C \uC0C1\uD0DC\uB85C \uB9CC\uB4E4 \uC218 \uC788\uC744 \uAC70\uC608\uC694. \uC5C5\uADF8\uB808\uC774\uB4DC \uD6C4\uC5D0 Storybook\uC744 \uC2E4\uD589\uD558\uB294 \uC911\uC5D0 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD574\uBCF4\uC138\uC694:</p><ul><li>\uC77C\uBC18\uC801\uC778 \uBB38\uC81C(\uC911\uBCF5 \uC758\uC874\uC131, \uD638\uD658\uB418\uC9C0 \uC54A\uB294 \uC560\uB4DC\uC628, \uBD88\uC77C\uCE58\uD558\uB294 \uBC84\uC804 \uB4F1)\uB97C \uD655\uC778\uD558\uACE0 \uD574\uACB0 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC81C\uC548\uC744 \uBCF4\uAE30 \uC704\uD574 doctor \uBA85\uB839\uC744 \uC2E4\uD589\uD574\uBCF4\uC138\uC694.</li><li>\uAC1C\uBC1C \uBA85\uB839\uC5B4\uB85C storybook\uC744 \uC2E4\uD589 \uC911\uC774\uB77C\uBA74, \uB300\uC2E0 build \uBA85\uB839\uC5B4\uB97C \uC0AC\uC6A9\uD574\uBCF4\uC138\uC694. \uB54C\uB85C\uB294 \uAC1C\uBC1C \uC5D0\uB7EC\uBCF4\uB2E4 \uBE4C\uB4DC \uC5D0\uB7EC\uAC00 \uB354 \uBA85\uD655\uD560 \uC218 \uC788\uC5B4\uC694!</li><li>Storybook 8\uC758 \uC8FC\uC694 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uD3EC\uD568\uD558\uB294 \uC804\uCCB4 \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uB178\uD2B8\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694. \uC5C5\uADF8\uB808\uC774\uB4DC\uD560 \uB54C \uC774\uBBF8 \uB300\uBD80\uBD84\uC758 \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC790\uB3D9\uC73C\uB85C \uCC98\uB9AC\uB418\uC9C0\uB9CC, \uADF8\uB807\uC9C0 \uC54A\uC740 \uBA87 \uAC00\uC9C0\uB3C4 \uC788\uC5B4\uC694. \uC800\uD76C\uAC00 \uC778\uC9C0\uD558\uC9C0 \uBABB\uD558\uACE0 \uC788\uB294 \uCF54\uB108 \uCF00\uC774\uC2A4\uB97C \uACBD\uD5D8\uC911\uC77C \uC218\uB3C4 \uC788\uC5B4\uC694.</li><li>GitHub\uC758 Storybook \uC774\uC288\uB97C \uAC80\uC0C9\uD574\uBCF4\uC138\uC694. \uBB38\uC81C\uB97C \uACAA\uACE0 \uC788\uB2E4\uBA74, \uB2E4\uB978 \uC0AC\uB78C\uB4E4\uB3C4 \uADF8\uB7F4 \uD655\uB960\uC774 \uB192\uC544\uC694. \uADF8\uB7F4 \uACBD\uC6B0 \uC774\uC288\uC5D0 \uCD94\uCC9C\uC744 \uD45C\uC2DC\uD558\uACE0, \uB313\uAE00\uC5D0 \uAE30\uC220\uB41C \uD574\uACB0\uCC45\uC744 \uC2DC\uB3C4\uD574\uBCF4\uACE0 \uC720\uC6A9\uD55C \uC815\uBCF4\uAC00 \uC788\uB2E4\uBA74 \uB2E4\uC2DC \uB313\uAE00\uB85C \uB2EC\uC544\uC8FC\uC138\uC694.</li><li>\uAE30\uC874 \uC774\uC288\uAC00 \uC5C6\uB2E4\uBA74, \uC7AC\uD604 \uC0AC\uB840\uB97C \uCCA8\uBD80\uD558\uC5EC \uC774\uC288\uB97C \uC81C\uAE30\uD574\uC8FC\uC138\uC694. \uC5C5\uADF8\uB808\uC774\uB4DC\uB97C \uC9C4\uD589\uD568\uC5D0 \uB530\uB77C Storybook 8 \uC774\uC288\uC5D0 \uC6B0\uB9AC\uAC00 \uC9D1\uC911\uD560 \uAC83\uC774\uB2C8 \uC548\uC2EC\uD558\uC138\uC694.</li></ul><p>\uB9CC\uC57D \uC2A4\uC2A4\uB85C \uB514\uBC84\uAE45\uC744 \uC120\uD638\uD55C\uB2E4\uBA74, \uBB38\uC81C\uB97C \uC881\uD788\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uB294 \uBA87 \uAC00\uC9C0 \uC720\uC6A9\uD55C \uC791\uC5C5\uC774 \uC788\uC5B4\uC694:</p><ul><li>@storybook npm \uB124\uC784\uC2A4\uD398\uC774\uC2A4\uC5D0 \uC18D\uD558\uC9C0 \uC54A\uB294 \uBAA8\uB4E0 \uC560\uB4DC\uC628\uC744 \uC81C\uAC70\uD574\uBCF4\uC138\uC694 (storybook \uD328\uD0A4\uC9C0\uB294 \uC81C\uAC70\uD558\uC9C0 \uC54A\uC558\uB294\uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694). 7.x\uC640 \uC798 \uC791\uB3D9\uD588\uB358 \uCEE4\uBBA4\uB2C8\uD2F0 \uC560\uB4DC\uC628\uC774 8.0\uACFC \uD638\uD658\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uD574\uB2F9 \uC5EC\uBD80\uB97C \uD655\uC778\uD558\uB294 \uAC00\uC7A5 \uBE60\uB978 \uBC29\uBC95\uC774\uC5D0\uC694. Storybook 8\uC640 \uD638\uD658\uB418\uB3C4\uB85D \uC5C5\uADF8\uB808\uC774\uB4DC\uD574\uC57C \uD558\uB294 \uC560\uB4DC\uC628\uC744 \uBC1C\uACAC\uD558\uBA74 \uD574\uB2F9 \uC560\uB4DC\uC628 \uB9AC\uD3EC\uC9C0\uD1A0\uB9AC\uC5D0 \uC774\uC288\uB97C \uC62C\uB9AC\uAC70\uB098, \uB354 \uC88B\uC740 \uBC29\uBC95\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uB97C \uC704\uD55C \uD480 \uB9AC\uD018\uC2A4\uD2B8\uB97C \uC62C\uB824\uC8FC\uC138\uC694!</li><li>\uB2E4\uB978 \uB514\uBC84\uAE45 \uAE30\uC220\uB85C\uB294 Storybook\uC758 \uC774\uC804 \uD504\uB9AC\uB9B4\uB9AC\uC2A4 \uBC84\uC804\uC73C\uB85C \uC774\uC804 \uBC84\uC804\uC73C\uB85C \uB098\uB220\uAC00\uBA70 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD55C \uBC84\uC804\uC744 \uCC3E\uC544\uB0B4\uB294 \uAC83\uC774 \uC788\uC5B4\uC694. \uC608\uB97C \uB4E4\uC5B4, \uD604\uC7AC Storybook\uC758 \uD504\uB9AC\uB9B4\uB9AC\uC2A4 \uBC84\uC804\uC774 8.0.0-beta.56\uB77C\uACE0 \uAC00\uC815\uD55C\uB2E4\uBA74, package.json\uC5D0\uC11C \uBC84\uC804\uC744 8.0.0-alpha.0\uC73C\uB85C \uC124\uC815\uD558\uACE0 \uB2E4\uC2DC \uC124\uCE58\uD558\uC5EC \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC694(\uC774\uB54C alpha.0\uC740 \uAC70\uC758 7.6.x\uC640 \uB3D9\uC77C\uD560 \uAC70\uC5D0\uC694). \uC791\uB3D9\uD55C\uB2E4\uBA74, 8.0.0-beta.0, \uADF8 \uB2E4\uC74C 8.0.0-beta.28 \uB4F1\uC73C\uB85C \uC2DC\uB3C4\uD574\uBCFC \uC218 \uC788\uC5B4\uC694. \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD55C \uBC84\uC804\uC744 \uCC3E\uC558\uB2E4\uBA74, \uD574\uB2F9 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC0B4\uD3B4\uBCF4\uACE0 \uBB38\uC81C\uAC00 \uB41C \uBD80\uBD84\uC744 \uCC3E\uC558\uB2E4\uBA74, Storybook \uBAA8\uB178\uB808\uD3EC\uC9C0\uD1A0\uB9AC\uC5D0 \uC774\uC288\uB098 \uD480 \uB9AC\uD018\uC2A4\uD2B8\uB97C \uC81C\uCD9C\uD574\uC8FC\uC138\uC694. \uBE60\uB974\uAC8C \uCC98\uB9AC\uD558\uB3C4\uB85D \uCD5C\uC120\uC744 \uB2E4\uD560\uAC8C\uC694.</li></ul><h2 id="\u1109\u1165\u11AB\u1110\u1162\u11A8\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1106\u1161\u110B\u1175\u1100\u1173\u1105\u1166\u110B\u1175\u1109\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AB\u1110\u1162\u11A8\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1106\u1161\u110B\u1175\u1100\u1173\u1105\u1166\u110B\u1175\u1109\u1167\u11AB" aria-hidden="true">#</a> \uC120\uD0DD\uC801\uC778 \uB9C8\uC774\uADF8\uB808\uC774\uC158</h2><p>\uC790\uB3D9 \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uBC0F \uC218\uB3D9 \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uC678\uC5D0\uB3C4 \uACE0\uB824\uD574\uC57C \uD560 \uC120\uD0DD\uC801\uC778 \uB9C8\uC774\uADF8\uB808\uC774\uC158\uC774 \uC788\uC2B5\uB2C8\uB2E4. Storybook 7 \uBC0F 8\uC5D0\uC11C\uB294 \uC0AC\uC804 \uACBD\uACE0\uB97C \uD45C\uC2DC\uD55C \uAE30\uB2A5 \uB610\uB294 \uBBF8\uB798\uC5D0 \uB354 \uC0DD\uC0B0\uC801\uC77C \uC218 \uC788\uB294 \uCD5C\uC120\uC758 \uC0AC\uB840\uB4E4\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="csf-2\u110B\u1166\u1109\u1165-csf-3\u110B\u1173\u1105\u1169" tabindex="-1"><a class="header-anchor" href="#csf-2\u110B\u1166\u1109\u1165-csf-3\u110B\u1173\u1105\u1169" aria-hidden="true">#</a> CSF 2\uC5D0\uC11C CSF 3\uC73C\uB85C</h3><p>CSF 2\uC5D0\uC11C CSF 3\uC73C\uB85C \uC774\uC57C\uAE30\uB97C \uBCC0\uD658\uD558\uB294 \uAC83\uC5D0\uB294 \uB9CE\uC740 \uC774\uC720\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 \uCF54\uB4DC \uBCC0\uACBD\uC744 \uC790\uB3D9\uC73C\uB85C \uC218\uD589\uD574\uC8FC\uB294 \uCF54\uB4DC\uBAA8\uB4DC\uB97C \uC81C\uACF5\uD558\uBBC0\uB85C(\uD30C\uC77C\uC5D0 \uB9DE\uAC8C glob\uC744 \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD569\uB2C8\uB2E4):</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code># CSF 2\uC5D0\uC11C CSF 3\uB85C \uBCC0\uD658\uD558\uAE30
npx storybook@latest migrate csf-2-to-3 --glob=&quot;**/*.stories.tsx&quot; --parser=tsx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,33),l=[t];function s(d,n){return o(),i("div",null,l)}var y=e(a,[["render",s],["__file","index.html.vue"]]);export{y as default};