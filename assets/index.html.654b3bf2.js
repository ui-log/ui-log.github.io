import{_ as p}from"./app.3052dcfb.js";import{l as a,m as l,E as t,G as s,p as i,Y as r,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var d="/assets/Fundamentals_0.3c8dcdd3.png",o="/assets/Fundamentals_1.95347b6b.png",n="/assets/Fundamentals_2.bed13a3e.png",c="/assets/Fundamentals_3.6e5660aa.png",h="/assets/Fundamentals_4.b11d6b6f.png",u="/assets/Fundamentals_5.474b4ded.png",m="/assets/Fundamentals_6.3a5bdd5e.png";const _={},b=e('<h1 id="nextjs-approuter-\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1100\u1175\u110E\u1169-\u110C\u1165\u11BC\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#nextjs-approuter-\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1100\u1175\u110E\u1169-\u110C\u1165\u11BC\u1105\u1175" aria-hidden="true">#</a> Nextjs AppRouter \uB77C\uC6B0\uD305 \uAE30\uCD08 \uC815\uB9AC</h1><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1}\uC774 \uD3EC\uC2A4\uD305\uC744 \uC77D\uC73C\uBA74</p></div><h1 id="\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1100\u1175\u1107\u1169\u11AB-\u1109\u1161\u1112\u1161\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1100\u1175\u1107\u1169\u11AB-\u1109\u1161\u1112\u1161\u11BC" aria-hidden="true">#</a> \uB77C\uC6B0\uD305 \uAE30\uBCF8 \uC0AC\uD56D</h1><blockquote><p>\uACC4\uC18D\uD558\uAE30 \uC804\uC5D0 \uB77C\uC6B0\uD305 \uAE30\uBCF8 \uC0AC\uD56D\uC744 \uC774\uD574\uD558\uBA74 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4.</p></blockquote><p>\uBAA8\uB4E0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBF08\uB300\uB294 \uB77C\uC6B0\uD305\uC785\uB2C8\uB2E4. \uC774 \uD398\uC774\uC9C0\uC5D0\uC11C\uB294 \uC6F9\uC758 \uB77C\uC6B0\uD305\uC5D0 \uB300\uD55C \uAE30\uBCF8 \uAC1C\uB150\uACFC Next.js\uC5D0\uC11C \uB77C\uC6B0\uD305\uC744 \uCC98\uB9AC\uD558\uB294 \uBC29\uBC95\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4.</p><h2 id="\u110B\u116D\u11BC\u110B\u1165" tabindex="-1"><a class="header-anchor" href="#\u110B\u116D\u11BC\u110B\u1165" aria-hidden="true">#</a> \uC6A9\uC5B4</h2><p>\uBA3C\uC800, \uBB38\uC11C \uC804\uBC18\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uC774 \uC6A9\uC5B4\uB97C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC04\uB2E8\uD55C \uCC38\uACE0 \uC0AC\uD56D\uC785\uB2C8\uB2E4:</p><p><img src="'+d+'" alt="\uC6A9\uC5B4"></p><ul><li>Tree: \uACC4\uCE35 \uAD6C\uC870\uB97C \uC2DC\uAC01\uD654\uD558\uAE30 \uC704\uD55C \uAD00\uC2B5\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uBD80\uBAA8 \uBC0F \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC788\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uD2B8\uB9AC, \uD3F4\uB354 \uAD6C\uC870 \uB4F1\uC774 \uC788\uC2B5\uB2C8\uB2E4.</li><li>Subtree: \uC0C8\uB85C\uC6B4 \uB8E8\uD2B8(\uCCAB \uBC88\uC9F8)\uC5D0\uC11C \uC2DC\uC791\uD558\uC5EC \uC78E(\uB9C8\uC9C0\uB9C9)\uC5D0 \uB3C4\uB2EC\uD558\uB294 \uD2B8\uB9AC\uC758 \uC77C\uBD80\uC785\uB2C8\uB2E4.</li><li>Root: \uD2B8\uB9AC \uB610\uB294 \uC11C\uBE0C\uD2B8\uB9AC\uC758 \uCCAB \uBC88\uC9F8 \uB178\uB4DC, \uC608\uB97C \uB4E4\uC5B4 \uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3\uC785\uB2C8\uB2E4.</li><li>Leaf: \uC790\uC2DD\uC774 \uC5C6\uB294 \uC11C\uBE0C\uD2B8\uB9AC\uC758 \uB178\uB4DC, \uC608\uB97C \uB4E4\uC5B4 URL \uACBD\uB85C\uC758 \uB9C8\uC9C0\uB9C9 \uC138\uADF8\uBA3C\uD2B8\uC785\uB2C8\uB2E4.</li></ul><p><img src="'+o+'" alt="\uC6A9\uC5B4"></p><ul><li>URL Segment: \uC2AC\uB798\uC2DC\uB85C \uAD6C\uBD84\uB41C URL \uACBD\uB85C\uC758 \uC77C\uBD80\uC785\uB2C8\uB2E4.</li><li>URL Path: \uB3C4\uBA54\uC778 \uC774\uD6C4\uC5D0 \uC624\uB294 URL\uC758 \uC77C\uBD80\uC785\uB2C8\uB2E4 (\uC138\uADF8\uBA3C\uD2B8\uB85C \uAD6C\uC131\uB428).</li></ul><h2 id="\u110B\u1162\u11B8-\u1105\u1161\u110B\u116E\u1110\u1165" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u11B8-\u1105\u1161\u110B\u116E\u1110\u1165" aria-hidden="true">#</a> \uC571 \uB77C\uC6B0\uD130</h2><p>\uBC84\uC804 13\uC5D0\uC11C Next.js\uB294 \uC0C8\uB85C\uC6B4 React Server Components\uB97C \uAE30\uBC18\uC73C\uB85C \uD55C App Router\uB97C \uB3C4\uC785\uD588\uC2B5\uB2C8\uB2E4. \uC774 \uB77C\uC6B0\uD130\uB294 \uACF5\uC720\uB41C \uB808\uC774\uC544\uC6C3, \uC911\uCCA9 \uB77C\uC6B0\uD305, \uB85C\uB529 \uC0C1\uD0DC, \uC624\uB958 \uCC98\uB9AC \uB4F1\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.</p><p>App Router\uB294 \uC0C8\uB85C\uC6B4 app \uB514\uB809\uD130\uB9AC\uC5D0\uC11C \uC791\uB3D9\uD569\uB2C8\uB2E4. app \uB514\uB809\uD130\uB9AC\uB294 \uC810\uC9C4\uC801\uC778 \uCC44\uD0DD\uC744 \uD5C8\uC6A9\uD558\uAE30 \uC704\uD574 pages \uB514\uB809\uD130\uB9AC\uC640 \uD568\uAED8 \uC791\uB3D9\uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD568\uC73C\uB85C\uC368 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC77C\uBD80 \uB77C\uC6B0\uD2B8\uB97C \uC0C8\uB85C\uC6B4 \uB3D9\uC791\uC73C\uB85C \uC804\uD658\uD558\uBA74\uC11C \uB2E4\uB978 \uB77C\uC6B0\uD2B8\uB97C \uC774\uC804 \uB3D9\uC791\uC744 \uC704\uD574 pages \uB514\uB809\uD130\uB9AC\uC5D0 \uC720\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 pages \uB514\uB809\uD130\uB9AC\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 Pages Router \uBB38\uC11C\uB3C4 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.</p><blockquote><p>\uCC38\uACE0: App Router\uAC00 Pages Router\uBCF4\uB2E4 \uC6B0\uC120\uD569\uB2C8\uB2E4. \uB514\uB809\uD130\uB9AC \uAC04 \uB77C\uC6B0\uD2B8\uB294 \uB3D9\uC77C\uD55C URL \uACBD\uB85C\uB85C \uD574\uC11D\uB418\uC5B4 \uCDA9\uB3CC\uC744 \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 \uBE4C\uB4DC \uC2DC\uAC04 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.</p></blockquote><p><img src="'+n+'" alt="App \uB77C\uC6B0\uD130"></p><p>\uAE30\uBCF8\uC801\uC73C\uB85C app \uB0B4\uBD80\uC758 \uCEF4\uD3EC\uB10C\uD2B8\uB294 React Server Components\uC785\uB2C8\uB2E4. \uC774\uAC83\uC740 \uC131\uB2A5 \uCD5C\uC801\uD654\uC774\uBA70 \uC27D\uAC8C \uCC44\uD0DD\uD560 \uC218 \uC788\uC73C\uBA70 Client Components\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',18),g=e('<blockquote><p>\uAD8C\uC7A5 \uC0AC\uD56D: Server Components\uC5D0 \uB300\uD574 \uCC98\uC74C\uC774\uB77C\uBA74 Server \uD398\uC774\uC9C0\uB97C \uD655\uC778\uD558\uC138\uC694.</p></blockquote><h2 id="\u1111\u1169\u11AF\u1103\u1165-\u1106\u1175\u11BE-\u1111\u1161\u110B\u1175\u11AF\u110B\u1174-\u110B\u1167\u11A8\u1112\u1161\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1111\u1169\u11AF\u1103\u1165-\u1106\u1175\u11BE-\u1111\u1161\u110B\u1175\u11AF\u110B\u1174-\u110B\u1167\u11A8\u1112\u1161\u11AF" aria-hidden="true">#</a> \uD3F4\uB354 \uBC0F \uD30C\uC77C\uC758 \uC5ED\uD560</h2><p>Next.js\uB294 \uD30C\uC77C \uC2DC\uC2A4\uD15C \uAE30\uBC18\uC758 \uB77C\uC6B0\uD130\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4:</p><ul><li>\uD3F4\uB354\uB294 \uACBD\uB85C\uB97C \uC815\uC758\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uACBD\uB85C\uB294 \uB8E8\uD2B8 \uD3F4\uB354\uBD80\uD130 \uB9C8\uC9C0\uB9C9 \uC78E \uD3F4\uB354\uC5D0 \uD3EC\uD568\uB41C page.js \uD30C\uC77C\uAE4C\uC9C0\uC758 \uD30C\uC77C \uC2DC\uC2A4\uD15C \uACC4\uCE35 \uAD6C\uC870\uB97C \uB530\uB985\uB2C8\uB2E4. \uB77C\uC6B0\uD2B8 \uC815\uC758 \uCC38\uC870.</li><li>\uD30C\uC77C\uC740 \uACBD\uB85C \uC138\uADF8\uBA3C\uD2B8\uC5D0 \uD45C\uC2DC\uB418\uB294 UI\uB97C \uC0DD\uC131\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uD2B9\uBCC4\uD55C \uD30C\uC77C \uCC38\uC870.</li></ul><h2 id="\u1105\u1161\u110B\u116E\u1110\u1173-\u1109\u1166\u1100\u1173\u1106\u1165\u11AB\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1105\u1161\u110B\u116E\u1110\u1173-\u1109\u1166\u1100\u1173\u1106\u1165\u11AB\u1110\u1173" aria-hidden="true">#</a> \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8</h2><p>\uB77C\uC6B0\uD2B8\uC758 \uAC01 \uD3F4\uB354\uB294 \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4. \uAC01 \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8\uB294 URL \uACBD\uB85C\uC5D0\uC11C \uD574\uB2F9 \uC138\uADF8\uBA3C\uD2B8\uC5D0 \uB300\uC751\uB429\uB2C8\uB2E4.</p><p><img src="'+c+'" alt="\uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8"></p><h2 id="\u110C\u116E\u11BC\u110E\u1165\u11B8-\u1105\u1161\u110B\u116E\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u110C\u116E\u11BC\u110E\u1165\u11B8-\u1105\u1161\u110B\u116E\u1110\u1173" aria-hidden="true">#</a> \uC911\uCCA9 \uB77C\uC6B0\uD2B8</h2><p>\uC911\uCCA9 \uB77C\uC6B0\uD2B8\uB97C \uC0DD\uC131\uD558\uB824\uBA74 \uC11C\uB85C \uC911\uCCA9\uB41C \uD3F4\uB354\uB97C \uC911\uCCA9\uD558\uBA74 \uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC0C8\uB85C\uC6B4 /dashboard/settings \uB77C\uC6B0\uD2B8\uB97C \uB9CC\uB4E4\uB824\uBA74 app \uB514\uB809\uD130\uB9AC\uC5D0 \uB450 \uAC1C\uC758 \uC0C8 \uD3F4\uB354\uB97C \uC911\uCCA9\uD558\uBA74 \uB429\uB2C8\uB2E4.</p><p>/dashboard/settings \uB77C\uC6B0\uD2B8\uB294 \uC138 \uAC1C\uC758 \uC138\uADF8\uBA3C\uD2B8\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4:</p><ul><li>/ (\uB8E8\uD2B8 \uC138\uADF8\uBA3C\uD2B8)</li><li>dashboard (\uC138\uADF8\uBA3C\uD2B8)</li><li>settings (\uC78E \uC138\uADF8\uBA3C\uD2B8)</li></ul><h2 id="\u1111\u1161\u110B\u1175\u11AF-\u1100\u1172\u110E\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1111\u1161\u110B\u1175\u11AF-\u1100\u1172\u110E\u1175\u11A8" aria-hidden="true">#</a> \uD30C\uC77C \uADDC\uCE59</h2><p>Next.js\uB294 \uC911\uCCA9\uB41C \uB77C\uC6B0\uD2B8\uC758 \uD2B9\uC815 \uB3D9\uC791\uC744 \uC704\uD574 \uD2B9\uBCC4\uD55C \uD30C\uC77C \uC138\uD2B8\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4:</p><blockquote><p>\uCC38\uACE0: \uD2B9\uBCC4\uD55C \uD30C\uC77C\uC5D0\uB294 .js, .jsx \uB610\uB294 .tsx \uD30C\uC77C \uD655\uC7A5\uC790\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></blockquote><h2 id="\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1100\u1168\u110E\u1173\u11BC-\u1100\u116E\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1100\u1168\u110E\u1173\u11BC-\u1100\u116E\u110C\u1169" aria-hidden="true">#</a> \uCEF4\uD3EC\uB10C\uD2B8 \uACC4\uCE35 \uAD6C\uC870</h2><p>\uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8\uC758 \uD2B9\uBCC4\uD55C \uD30C\uC77C\uC5D0 \uC815\uC758\uB41C React \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uD2B9\uC815 \uACC4\uCE35 \uAD6C\uC870\uB85C \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4:</p><ul><li>layout.js</li><li>template.js</li><li>error.js (React \uC624\uB958 \uACBD\uACC4)</li><li>loading.js (React suspense \uACBD\uACC4)</li><li>not-found.js (React \uC624\uB958 \uACBD\uACC4)</li><li>page.js \uB610\uB294 \uC911\uCCA9\uB41C layout.js</li></ul><p><img src="'+h+'" alt="\uCEF4\uD3EC\uB10C\uD2B8 \uACC4\uCE35 \uAD6C\uC870"></p><p>\uC911\uCCA9\uB41C \uB77C\uC6B0\uD2B8\uC5D0\uC11C \uC138\uADF8\uBA3C\uD2B8\uC758 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uD574\uB2F9 \uBD80\uBAA8 \uC138\uADF8\uBA3C</p><p>\uD2B8\uC758 \uCEF4\uD3EC\uB10C\uD2B8 \uC548\uC5D0 \uC911\uCCA9\uB429\uB2C8\uB2E4.</p><p><img src="'+u+'" alt="\uC911\uCCA9\uB41C \uB77C\uC6B0\uD2B8"></p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',22),f=e('<h2 id="\u1100\u1169\u11BC\u110C\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1169\u11BC\u110C\u1169\u11AB" aria-hidden="true">#</a> \uACF5\uC874</h2><p>\uD2B9\uBCC4\uD55C \uD30C\uC77C \uC678\uC5D0\uB3C4 \uC790\uC2E0\uC758 \uD30C\uC77C(\uC608: \uCEF4\uD3EC\uB10C\uD2B8, \uC2A4\uD0C0\uC77C, \uD14C\uC2A4\uD2B8 \uB4F1)\uC744 app \uB514\uB809\uD130\uB9AC\uC758 \uD3F4\uB354 \uB0B4\uC5D0 \uACF5\uC874\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uD3F4\uB354\uAC00 \uACBD\uB85C\uB97C \uC815\uC758\uD558\uACE0, \uD398\uC774\uC9C0.js \uB610\uB294 \uB77C\uC6B0\uD2B8.js\uC5D0\uC11C \uBC18\uD658\uB41C \uB0B4\uC6A9\uB9CC \uACF5\uAC1C\uC801\uC73C\uB85C \uC8FC\uC18C \uC9C0\uC815 \uAC00\uB2A5\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.</p><p><img src="'+m+'" alt="\uACF5\uC874"></p><p>\uD504\uB85C\uC81D\uD2B8 \uAD6C\uC131 \uBC0F \uACF5\uC874\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uC138\uC694.</p><h2 id="\u1100\u1169\u1100\u1173\u11B8-\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1111\u1162\u1110\u1165\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1169\u1100\u1173\u11B8-\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1111\u1162\u1110\u1165\u11AB" aria-hidden="true">#</a> \uACE0\uAE09 \uB77C\uC6B0\uD305 \uD328\uD134</h2><p>App Router\uB294 \uB354 \uACE0\uAE09 \uB77C\uC6B0\uD305 \uD328\uD134\uC744 \uAD6C\uD604\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uB294 \uADDC\uCE59 \uC138\uD2B8\uB3C4 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD328\uD134\uC5D0\uB294 \uB2E4\uC74C\uC774 \uD3EC\uD568\uB429\uB2C8\uB2E4:</p><ul><li>\uBCD1\uB82C \uB77C\uC6B0\uD2B8: \uB3D9\uC2DC\uC5D0 \uB450 \uAC1C \uC774\uC0C1\uC758 \uD398\uC774\uC9C0\uB97C \uB3D9\uC77C\uD55C \uBCF4\uAE30\uC5D0 \uD45C\uC2DC\uD560 \uC218 \uC788\uAC8C \uD569\uB2C8\uB2E4. \uAC01\uAC01 \uB3C5\uB9BD\uC801\uC73C\uB85C \uD0D0\uC0C9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uCCB4 \uD558\uC704 \uD0D0\uC0C9\uC774 \uC788\uB294 \uBD84\uD560 \uBCF4\uAE30\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608: \uB300\uC2DC\uBCF4\uB4DC.</li><li>\uB77C\uC6B0\uD2B8 \uAC00\uB85C\uCC44\uAE30: \uB77C\uC6B0\uD2B8\uB97C \uAC00\uB85C\uCC44\uACE0 \uB2E4\uB978 \uB77C\uC6B0\uD2B8\uC758 \uB9E5\uB77D\uC5D0\uC11C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD604\uC7AC \uD398\uC774\uC9C0\uC758 \uB9E5\uB77D\uC744 \uC720\uC9C0\uD574\uC57C \uD558\uB294 \uACBD\uC6B0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608: \uD558\uB098\uC758 \uC791\uC5C5\uC744 \uD3B8\uC9D1\uD558\uB294 \uB3D9\uC548 \uBAA8\uB4E0 \uC791\uC5C5 \uBCF4\uAE30 \uBCF4\uAE30 \uB610\uB294 \uD53C\uB4DC\uC5D0\uC11C \uC0AC\uC9C4 \uD655\uB300\uD558\uAE30.</li></ul><p>\uC774\uB7EC\uD55C \uD328\uD134\uC740 \uB354 \uD48D\uBD80\uD558\uACE0 \uBCF5\uC7A1\uD55C UI\uB97C \uAD6C\uCD95\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uBA70, \uACFC\uAC70\uC5D0\uB294 \uC791\uC740 \uD300 \uBC0F \uAC1C\uBCC4 \uAC1C\uBC1C\uC790\uAC00 \uAD6C\uD604\uD558\uAE30\uAC00 \uBCF5\uC7A1\uD588\uB358 \uAE30\uB2A5\uC744 \uB354 democrazing\uD569\uB2C8\uB2E4.</p>',8);function x(R,j){return a(),l("div",null,[b,(a(),t(r("script"),null,{default:s(()=>[i(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(a(),t(r("script"),null,{default:s(()=>[i(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f])}var w=p(_,[["render",x],["__file","index.html.vue"]]);export{w as default};
