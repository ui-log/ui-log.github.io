import{_ as l}from"./app.3052dcfb.js";import{l as a,m as i,E as t,G as e,p as n,Y as o,C as s,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/Some-common-web-rendering-methods-you-need-to-know-in-2024_0.eaa54a34.png",d="/assets/Some-common-web-rendering-methods-you-need-to-know-in-2024_1.6767a854.png",r="/assets/Some-common-web-rendering-methods-you-need-to-know-in-2024_2.c8460759.png",u="/assets/Some-common-web-rendering-methods-you-need-to-know-in-2024_3.c32beb7a.png",k="/assets/Some-common-web-rendering-methods-you-need-to-know-in-2024_4.62ed6df7.png",m="/assets/Some-common-web-rendering-methods-you-need-to-know-in-2024_5.72db7e00.png";const _={},h=s("h1",{id:"\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173-\u110E\u1173\u11A8-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173-\u110E\u1173\u11A8-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC","aria-hidden":"true"},"#"),n(" \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uB80C\uB354\uB9C1")],-1),g=s("p",null,"CSR\uC740 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uB80C\uB354\uB9C1(Client Side Rendering)\uC758 \uC57D\uC790\uB85C, \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uD398\uC774\uC9C0\uB97C \uB80C\uB354\uB9C1\uD558\uB294 \uACFC\uC815\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.",-1),b=s("p",null,[s("img",{src:c,alt:"\uC6F9 \uB80C\uB354\uB9C1 \uBC29\uBC95"})],-1),v=s("p",null,"\uBE0C\uB77C\uC6B0\uC800\uB294 \uBA3C\uC800 \uD398\uC774\uC9C0 HTML\uC744 \uC694\uCCAD\uD558\uACE0, \uD398\uC774\uC9C0 \uB0B4\uC758 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBC0F CSS\uC640 \uAC19\uC740 \uC790\uC6D0 \uD30C\uC77C\uC744\uB85C\uB4DC\uD55C \uD6C4, \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uD398\uC774\uC9C0 HTML\uC758 \uACC4\uC0B0 \uBC0F \uB80C\uB354\uB9C1\uC744 \uC644\uB8CC\uD569\uB2C8\uB2E4. TTFB(Time To First Byte)\uB97C \uCD5C\uC18C\uD654\uD560 \uC218 \uC788\uC9C0\uB9CC, \uD074\uB77C\uC774\uC5B8\uD2B8\uC640 \uC11C\uBC84\uAC00 \uBA87 \uBC88 \uC0C1\uD638\uC791\uC6A9\uD560 \uAC83\uC774\uAE30 \uB54C\uBB38\uC5D0 (\uC815\uC801 \uC790\uC6D0 \uAC00\uC838\uC624\uAE30, \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30), js \uB2E4\uC6B4\uB85C\uB4DC \uBC0F \uC2E4\uD589\uC744 \uAE30\uB2E4\uB9B0 \uD6C4 \uC9C4\uD589\uB418\uC5B4\uC57C \uD558\uB294 \uCC28\uB2E8 \uD504\uB85C\uC138\uC2A4 \uB54C\uBB38\uC5D0 \uC0AC\uC6A9\uC790\uB294 \uD398\uC774\uC9C0 \uCF58\uD150\uCE20\uB97C \uBCFC \uC218 \uC788\uAE30 \uC804\uC5D0 \uB80C\uB354\uB9C1\uC774 \uC644\uB8CC\uB418\uAE30\uB97C \uAE30\uB2E4\uB824\uC57C \uD558\uBBC0\uB85C FP, FCP \uC2DC\uAC04\uC774 \uB354 \uC624\uB798 \uAC78\uB9B4 \uAC83\uC785\uB2C8\uB2E4. SPA \uD398\uC774\uC9C0\uC758 \uACBD\uC6B0, \uC0AC\uC804 \uB80C\uB354\uB9C1, \uCF54\uB4DC \uBD84\uD560, \uC9C0\uC5F0 \uB85C\uB529 \uB4F1\uC744 \uD1B5\uD574 \uCD5C\uC801\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),y=s("p",null,"TTFB: Time To First Byte, \uD398\uC774\uC9C0 \uC694\uCCAD\uC744 \uBCF4\uB0B4\uC11C \uC751\uB2F5 \uB370\uC774\uD130\uC758 \uCCAB \uBC88\uC9F8 \uBC14\uC774\uD2B8\uB97C \uBC1B\uB294 \uB370 \uAC78\uB9AC\uB294 \uBC00\uB9AC\uCD08 \uC218\uC785\uB2C8\uB2E4. FP: First Paint \u2014 \uC0AC\uC6A9\uC790\uAC00 \uCF58\uD150\uCE20\uC758 \uD53D\uC140\uC744 \uCC98\uC74C\uC73C\uB85C \uBCFC \uB54C FCP: First Contentful Paint \u2014 \uC0AC\uC6A9\uC790\uAC00 \uCF58\uD150\uCE20\uB97C \uCC98\uC74C\uC73C\uB85C \uBCFC \uB54C",-1),S=s("p",null,"\uADF8\uB7EC\uB098 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uB85C\uC9C1\uC774 \uB354 \uBCF5\uC7A1\uD574\uC9C0\uACE0 \uCD08\uAE30\uD654\uC5D0 \uB354 \uB9CE\uC740 JS\uAC00 \uC2E4\uD589\uB418\uC5B4\uC57C \uD558\uB294 \uACBD\uC6B0, \uCCAB \uD654\uBA74 \uC131\uB2A5\uC774 \uC810\uCC28 \uB290\uB824\uC9C0\uBA70, \uC774\uB85C \uC778\uD574 \uB354 \uB9CE\uC740 \uB80C\uB354\uB9C1 \uD328\uD134\uC744 \uD0D0\uC0C9\uD574\uC57C \uD569\uB2C8\uB2E4.",-1),f=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),w=s("h1",{id:"\u1109\u1165\u1107\u1165-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1109\u1165\u1107\u1165-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC","aria-hidden":"true"},"#"),n(" \uC11C\uBC84 \uB80C\uB354\uB9C1")],-1),T=s("p",null,"\uC11C\uBC84 \uB80C\uB354\uB9C1\uC740 \uD398\uC774\uC9C0\uB97C \uBAA8\uB450 \uC11C\uBC84 \uCE21\uC5D0\uC11C \uB80C\uB354\uB9C1\uD558\uB294 \uACFC\uC815\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. (\uC11C\uBC84 \uCE21 \uB80C\uB354\uB9C1\uACFC\uB294 \uB2E4\uB985\uB2C8\uB2E4.)",-1),R=s("p",null,[s("img",{src:d,alt:"\uC6F9 \uB80C\uB354\uB9C1 \uBC29\uBC95"})],-1),C=s("p",null,"\uC11C\uBC84 \uB80C\uB354\uB9C1\uC758 \uC7A5\uC810\uC740 \uD398\uC774\uC9C0 \uD15C\uD50C\uB9BF, \uB370\uC774\uD130 \uBBF8\uB9AC \uAC00\uC838\uC624\uAE30 \uBC0F \uCC44\uC6B0\uAE30 \uB4F1\uC774 \uC11C\uBC84 \uCE21\uC5D0\uC11C \uCC98\uB9AC\uB418\uC5B4 \uC644\uC131\uB41C HTML \uD398\uC774\uC9C0\uAC00 \uBC18\uD658\uB418\uC5B4 \uBE48 \uD398\uC774\uC9C0 \uB300\uC2E0\uC5D0 \uC81C\uACF5\uB41C\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB85C \uC778\uD574 \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30 \uBC0F \uD15C\uD50C\uB9BF \uB80C\uB354\uB9C1\uC744 \uC704\uD55C \uCD94\uAC00 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uC2DC\uAC04\uC774 \uC5C6\uC5B4\uC9C0\uBA70 FP, FCP \uBC0F TTI \uC2DC\uAC04\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uAC83\uC740 \uD14D\uC2A4\uD2B8\uC640 \uB9C1\uD06C\uB9CC \uC788\uB294 \uD398\uC774\uC9C0\uC758 \uACBD\uD5D8\uC5D0\uC11C \uD070 \uAC1C\uC120\uC744 \uAC00\uC838\uB2E4\uC90D\uB2C8\uB2E4. \uADF8\uB7EC\uB098 TTFB \uC2DC\uAC04\uC740 \uC11C\uBC84 \uCE21\uC5D0\uC11C \uD398\uC774\uC9C0\uB97C \uC0DD\uC131\uD558\uB294 \uB370 \uAC78\uB9AC\uB294 \uC2DC\uAC04\uC73C\uB85C \uC778\uD574 \uC99D\uAC00\uD569\uB2C8\uB2E4. \uC11C\uBC84 \uB80C\uB354\uB9C1\uC758 \uB2E8\uC810\uC740 \uB3D9\uC801 \uD2B9\uC131\uC774 \uB9CE\uC740 \uACC4\uC0B0 \uC624\uBC84\uD5E4\uB4DC \uBE44\uC6A9\uC774 \uC218\uBC18\uB420 \uC218 \uC788\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. React\uC5D0\uC11C renderToString()\uC740 \uB3D9\uAE30\uD654\uB418\uACE0 \uB2E8\uC77C \uC2A4\uB808\uB4DC\uB85C \uB3D9\uC791\uD558\uBBC0\uB85C \uC18D\uB3C4\uAC00 \uB290\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uB3D9\uC77C\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21\uC5D0\uC11C \uD55C \uBC88, \uC11C\uBC84 \uCE21\uC5D0\uC11C \uD55C \uBC88 \uCC98\uB9AC/\uC7AC\uAD6C\uC131\uD558\uB294 \uACFC\uC815\uC740 \uB354 \uB9CE\uC740 \uC791\uC5C5\uC744 \uB3C4\uC785\uD569\uB2C8\uB2E4.",-1),H=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),F=p('<h1 id="\u110C\u1165\u11BC\u110C\u1165\u11A8-\u1109\u1161\u110B\u1175\u1110\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11BC\u110C\u1165\u11A8-\u1109\u1161\u110B\u1175\u1110\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uC815\uC801 \uC0AC\uC774\uD2B8 \uC0DD\uC131</h1><p>\uC815\uC801 \uC0AC\uC774\uD2B8 \uC0DD\uC131, \uB610\uB294 \uC815\uC801 \uB80C\uB354\uB9C1\uC774\uB77C\uACE0\uB3C4 \uBD88\uB9AC\uB294 \uAC83\uC740 \uBE4C\uB4DC \uC2DC\uAC04 \uC774\uC804\uC5D0 \uCEE8\uD150\uCE20 HTML\uC744 \uBBF8\uB9AC \uC0DD\uC131\uD558\uB294 \uB80C\uB354\uB9C1 \uBAA8\uB378\uC785\uB2C8\uB2E4. \uC774 \uB80C\uB354\uB9C1 \uBAA8\uB4DC\uB294 \uBE4C\uB4DC \uC2DC\uAC04\uC5D0 \uBC1C\uC0DD\uD558\uBA70 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 JS\uAC00 \uC81C\uD55C\uC801\uC778 \uACBD\uC6B0 \uBE60\uB978 FP, FCP \uBC0F TTI \uC2DC\uAC04\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC11C\uBC84 \uCE21 \uB80C\uB354\uB9C1\uACFC \uB2EC\uB9AC \uC815\uC801 \uB80C\uB354\uB9C1\uC740 \uC2E4\uC2DC\uAC04 HTML \uC0DD\uC131\uC744 \uD544\uC694\uB85C\uD558\uC9C0 \uC54A\uC73C\uBA70 \uB530\uB77C\uC11C TTFB \uC2DC\uAC04\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uC815\uC801 \uB80C\uB354\uB9C1\uC740 \uBBF8\uB9AC \uB2E4\uB978 URL\uC5D0 \uB300\uD55C \uB2E4\uB978 HTML \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uACE0 CDN \uCE90\uC2F1\uC758 \uB3C4\uC6C0\uC744 \uBC1B\uC544 \uC561\uC138\uC2A4\uB97C \uAC00\uC18D\uD654\uD569\uB2C8\uB2E4.</p><p><img src="'+r+'" alt="Some-common-web-rendering-methods-you-need-to-know-in-2024_2.png"></p><p>\uC0AC\uC6A9\uC790\uAC00 \uD398\uC774\uC9C0\uB97C \uBC29\uBB38\uD560 \uB54C, \uADF8 \uB4A4\uC758 \uC6CC\uD06C\uD50C\uB85C\uC6B0\uB294 \uB300\uB7B5 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><ol><li>\uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C CDN\uC5D0 \uD574\uB2F9 \uD398\uC774\uC9C0\uC758 HTML\uC744 \uC694\uCCAD\uD569\uB2C8\uB2E4.</li><li>CDN\uC5D0 \uCE90\uC2DC\uAC00 \uC788\uB294 \uACBD\uC6B0, \uCE90\uC2DC\uB41C \uCEE8\uD150\uCE20\uAC00 \uC9C1\uC811 \uBC18\uD658\uB429\uB2C8\uB2E4.</li><li>CDN\uC5D0 \uCE90\uC2DC\uB41C \uCEE8\uD150\uCE20\uAC00 \uC5C6\uAC70\uB098 \uCE90\uC2DC\uAC00 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0, CDN\uC740 \uBE44\uC988\uB2C8\uC2A4 \uC11C\uBE44\uC2A4\uC5D0\uC11C \uCEE8\uD150\uCE20\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4. \uBE44\uC988\uB2C8\uC2A4 \uC11C\uBE44\uC2A4\uB294 \uC694\uCCAD\uC744 \uBC1B\uC544 \uC11C\uBC84 \uB80C\uB354\uB9C1\uC744 \uC218\uD589\uD558\uACE0 \uC0C8\uB85C\uC6B4 \uD398\uC774\uC9C0 \uCEE8\uD150\uCE20\uB97C \uC0DD\uC131\uD558\uC5EC CDN\uC5D0 \uBC18\uD658\uD55C \uD6C4 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uACB0\uACFC\uB97C \uBC18\uD658\uD558\uACE0 \uC0C8\uB85C\uC6B4 \uCEE8\uD150\uCE20\uB97C \uB178\uB4DC\uC5D0 \uCE90\uC2F1\uD569\uB2C8\uB2E4.</li><li>\uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 HTML\uC744 \uBC1B\uC544 \uD398\uC774\uC9C0\uC758 \uC804\uCCB4 \uC815\uC801 \uCEE8\uD150\uCE20\uB97C \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4. \uD544\uC694\uD55C \uACBD\uC6B0 \uBE44\uC988\uB2C8\uC2A4 \uC11C\uBC84\uC5D0\uC11C \uAC1C\uC778\uD654 \uB610\uB294 \uC2E4\uC2DC\uAC04 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC640 \uD398\uC774\uC9C0 \uCEE8\uD150\uCE20\uB97C \uB3D9\uC801\uC73C\uB85C \uC644\uC131\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</li></ol><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',6),M=s("h1",{id:"\u1109\u1165\u1107\u1165-\u110E\u1173\u11A8-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1109\u1165\u1107\u1165-\u110E\u1173\u11A8-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC","aria-hidden":"true"},"#"),n(" \uC11C\uBC84 \uCE21 \uB80C\uB354\uB9C1")],-1),L=s("p",null,'\uC11C\uBC84 \uCE21 \uB80C\uB354\uB9C1\uC740 \uC11C\uBC84 \uB80C\uB354\uB9C1\uACFC \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uB80C\uB354\uB9C1\uC758 \uC7A5\uB2E8\uC810\uC744 \uACB0\uD569\uD55C \uAC83\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uC811\uADFC\uD560 \uB54C React SSR\uC740 \uC11C\uBC84\uC5D0\uC11C React \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uBBF8\uB9AC HTML\uB85C \uB80C\uB354\uB9C1\uD558\uC5EC \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0 \uBCF4\uB0B4\uC5B4, \uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uB80C\uB354\uB9C1\uC774 \uC644\uB8CC\uB420 \uB54C\uAE4C\uC9C0 \uAE30\uBCF8 \uC815\uC801 HTML \uCF58\uD150\uCE20\uB97C \uD45C\uC2DC\uD560 \uC218 \uC788\uAC8C \uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD654\uC774\uD2B8 \uC2A4\uD06C\uB9B0\uC744 \uAE30\uB2E4\uB9AC\uB294 \uC2DC\uAC04\uC744 \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uB85C\uB4DC\uB41C \uD6C4, \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uB80C\uB354\uB9C1\uC744 \uC0AC\uC6A9\uD558\uC5EC React \uC774\uBCA4\uD2B8 \uB85C\uC9C1\uC744 \uAE30\uC874 HTML \uAD6C\uC131 \uC694\uC18C\uC5D0 \uBC14\uC778\uB529\uD558\uC5EC \uD398\uC774\uC9C0\uB97C "\uC778\uD130\uB799\uD2F0\uBE0C"\uD558\uAC8C \uB9CC\uB4E4\uACE0, \uD558\uC774\uB4DC\uB808\uC774\uC158\uC774 \uC644\uB8CC\uB41C \uC774\uD6C4\uC5D0\uB294 \uC77C\uBC18\uC801\uC778 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uC804\uD658\uB429\uB2C8\uB2E4.',-1),P=s("p",null,[s("img",{src:u,alt:"\uC774\uBBF8\uC9C0"})],-1),x=s("p",null,"React SSR\uC758 \uD575\uC2EC\uC740 \uC774\uC911\uC131\uC778\uB370, \uC989, \uC11C\uBC84\uC640 \uD074\uB77C\uC774\uC5B8\uD2B8 \uC591\uCABD \uB85C\uC9C1\uC744 \uAD6C\uCD95\uD558\uAE30 \uC704\uD574 \uD558\uB098\uC758 \uCF54\uB4DC \uC138\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC5EC \uCD5C\uB300\uD55C\uC758 \uCF54\uB4DC \uC7AC\uC0AC\uC6A9\uC744 \uB2EC\uC131\uD558\uACE0 \uB450 \uAC1C\uC758 \uCF54\uB4DC \uC138\uD2B8\uB97C \uC720\uC9C0\uD560 \uD544\uC694\uAC00 \uC5C6\uB3C4\uB85D \uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",-1),z=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),D=s("p",null,"\u25CF \uB77C\uC6B0\uD305 \uC774\uC911\uC131: \uC591\uCABD \uBAA8\uB450 \uB3D9\uC77C\uD55C \uB77C\uC6B0\uD305 \uADDC\uCE59 \uC138\uD2B8\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 \uB77C\uC6B0\uD305 \uADDC\uCE59 \uD45C\uB97C \uC815\uC758\uD558\uACE0, \uC11C\uBC84\uB294 \uC694\uCCAD URL\uC744 \uD1B5\uD574 \uACBD\uB85C\uB97C \uB9E4\uCE58\uD558\uC5EC \uB80C\uB354\uB9C1\uD574\uC57C \uD558\uB294 \uAD6C\uC131 \uC694\uC18C\uB97C \uC5BB\uC2B5\uB2C8\uB2E4. \u25CF \uB370\uC774\uD130 \uC774\uC911\uC131: \uC591\uCABD \uBAA8\uB450 \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30 \uBA85\uC138\uB97C \uC815\uC758\uD569\uB2C8\uB2E4. (next.js\uB97C \uC608\uB85C \uB4E4\uBA74) \uB370\uC774\uD130 \uC694\uCCAD\uC740 \uB77C\uC774\uD504\uC0AC\uC774\uD074 \uBA54\uC11C\uB4DC\uAC00 \uC544\uB2CC \uCEF4\uD3EC\uB10C\uD2B8 \uC815\uC801 \uBA54\uC11C\uB4DC getInitialProps\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4. \uD398\uC774\uC9C0\uAC00 \uCD08\uAE30\uD654\uB418\uACE0 \uB85C\uB4DC\uB420 \uB54C, \uC11C\uBC84 \uCE21\uC5D0\uC11C\uB9CC getInitialProps\uB97C \uD638\uCD9C\uD558\uC5EC \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uD544\uC694\uD55C \uB370\uC774\uD130\uB97C \uC0AC\uC804\uB85C\uB4DC\uD55C \uD6C4 \uB370\uC774\uD130\uB97C \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC804\uB2EC\uD569\uB2C8\uB2E4. \uACBD\uB85C \uC804\uD658 \uC2DC \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21\uC5D0\uC11C getInitialProps\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4. \u25CF \uB80C\uB354\uB9C1 \uC774\uC911\uC131: \uB370\uC774\uD130 \uC8FC\uC785/\uD0C8\uC218\uD654\uB97C \uD1B5\uD574 \uC11C\uBC84 \uCE21\uACFC \uBE0C\uB77C\uC6B0\uC800 \uCE21\uC5D0\uC11C \uB80C\uB354\uB9C1\uB41C \uAD6C\uC131 \uC694\uC18C\uB294 \uB3D9\uC77C\uD55C \uD504\uB86D\uC2A4\uC640 DOM \uAD6C\uC870\uB97C \uAC16\uAC8C \uB418\uC5B4, \uAD6C\uC131 \uC694\uC18C\uAC00 \uD55C \uBC88\uB9CC \uB80C\uB354\uB9C1\uB418\uB3C4\uB85D \uBCF4\uC7A5\uD569\uB2C8\uB2E4. \uC11C\uBC84 \uCE21\uC740 \uC0AC\uC804\uB85C\uB4DC\uB41C \uB370\uC774\uD130\uB97C \uBE0C\uB77C\uC6B0\uC800(\uC804\uC5ED \uBCC0\uC218)\uC5D0 \uC8FC\uC785\uD558\uC5EC \uBE0C\uB77C\uC6B0\uC800 \uCE21\uC5D0\uC11C \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uAC8C \uD558\uBA70, \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21\uC740 ReactDOM.hydrate\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB370\uC774\uD130\uB97C \uD574\uB2F9 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC8FC\uC785\uD569\uB2C8\uB2E4.",-1),q=s("p",null,"\uD604\uC7AC SSR\uC740 \uC8FC\uB85C \uB2E4\uC74C \uB450 \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C \uC0AC\uC6A9\uB429\uB2C8\uB2E4: \u25CF SEO \uCD5C\uC801\uD654, SSR\uC740 \uAC80\uC0C9 \uC5D4\uC9C4\uC774 \uC804\uCCB4 \uD398\uC774\uC9C0 \uCF58\uD150\uCE20\uB97C \uD06C\uB864\uB9C1\uD560 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4. \u25CF \uCCAB \uD654\uBA74 \uB80C\uB354\uB9C1 \uC2DC\uAC04 \uCD5C\uC801\uD654, \uC8FC\uB85C \uBAA8\uBC14\uC77C \uBC0F \uC57D\uD55C \uB124\uD2B8\uC6CC\uD06C \uC0C1\uD669\uC5D0\uC11C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",-1),B=s("p",null,"SSR\uC5D0\uB294 \uC544\uB798\uC640 \uAC19\uC740 \uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4: \u25CF \uC11C\uBC84\uB294 \uB9E4\uBC88 \uC2E4\uC2DC\uAC04\uC73C\uB85C HTML\uC744 \uC0DD\uC131\uD574\uC57C \uD558\uBA70, \uBC18\uD658\uD558\uAE30 \uC804\uC5D0 \uBAA8\uB4E0 \uAD6C\uC131 \uC694\uC18C\uC758 HTML\uC744 \uC900\uBE44\uD574\uC57C \uD569\uB2C8\uB2E4. \uAD6C\uC131 \uC694\uC18C\uAC00 \uD544\uC694\uB85C \uD558\uB294 \uB370\uC774\uD130\uAC00 \uC624\uB798 \uAC78\uB9AC\uBA74 \uC804\uCCB4 HTML\uC758 \uC0DD\uC131\uC744 \uCC28\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),N=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),I=s("ul",null,[s("li",null,[s("p",null,"HTML \uACC4\uC0B0 \uC0DD\uC131\uC740 \uC11C\uBC84 \uCE21\uC5D0 \uC704\uCE58\uD558\uBA70, \uC11C\uBC84 \uCE21\uC758 \uBD80\uD558 \uC555\uB825\uC740 \uC0C1\uB300\uC801\uC73C\uB85C \uD06C\uACE0, \uCD94\uAC00 \uAE30\uACC4 \uBE44\uC6A9 \uBC0F \uC6B4\uC601 \uBC0F \uC720\uC9C0 \uBCF4\uC218 \uBE44\uC6A9\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.")]),s("li",null,[s("p",null,"\uC218\uD654 \uD504\uB85C\uC138\uC2A4\uB294 \uC77C\uD68C\uC131(all or nothing)\uC774\uBA70, \uC0AC\uC6A9\uC790\uB294 \uBAA8\uB4E0 \uAD6C\uC131 \uC694\uC18C\uC758 JavaScript\uB97C \uB85C\uB4DC\uD558\uACE0 \uC218\uD654\uAC00 \uC644\uB8CC\uB420 \uB54C\uAE4C\uC9C0 \uC5B4\uB5A4 \uAD6C\uC131 \uC694\uC18C\uC640 \uC0C1\uD638 \uC791\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uAE30\uB2E4\uB824\uC57C \uD569\uB2C8\uB2E4. \uB80C\uB354\uB9C1 \uB85C\uC9C1\uC774 \uBCF5\uC7A1\uD560 \uACBD\uC6B0 \uD398\uC774\uC9C0\uC758 FCP\uC640 TTI \uAC04 (\uC785\uB825 \uC0C1\uC790\uB97C \uB80C\uB354\uB9C1\uD558\uC9C0\uB9CC \uC785\uB825\uD560 \uC218 \uC5C6\uC74C) \uC0C1\uD638 \uC791\uC6A9\uC774 \uC9E7\uC740 \uC2DC\uAC04 \uB3D9\uC548 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")])],-1),j=s("h1",{id:"react18-fizz",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#react18-fizz","aria-hidden":"true"},"#"),n(" React18 Fizz")],-1),A=s("p",null,"React 18\uC758 \uC0C8\uB85C\uC6B4 SSR \uC544\uD0A4\uD14D\uCC98\uC778 React Fizz\uB294 \uC2A4\uD2B8\uB9AC\uBC0D HTML(\uC2A4\uD2B8\uB9AC\uBC0D \uB80C\uB354\uB9C1) \uBC0F \uC120\uD0DD\uC801 \uC218\uD654 \uB450 \uAC00\uC9C0 \uC8FC\uC694 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uBA70, SSR\uC758 \uC55E\uC11C \uC5B8\uAE09\uD55C \uB2E8\uC810\uB3C4 \uD574\uACB0\uD569\uB2C8\uB2E4. React 18\uC740 \uC77C\uC2DC\uC801\uC73C\uB85C lazy\uC640 Suspense API\uC758 \uAE30\uB2A5\uC744 \uD655\uC7A5\uD558\uC5EC \uB450 \uAC00\uC9C0\uB97C \uC11C\uBC84 \uCE21\uC5D0\uC11C \uC9C1\uC811 \uACB0\uD569\uD558\uC5EC \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC11C\uBC84 \uCE21\uC5D0\uC11C\uB294 \uB370\uC774\uD130\uB97C \uC2A4\uD2B8\uB9BC\uC73C\uB85C \uBC18\uD658\uD558\uAE30 \uC704\uD574 renderToString \uB300\uC2E0 renderToPipeableStream\uC744 \uC0AC\uC6A9\uD558\uACE0, \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21\uC5D0\uC11C\uB294 \uC2A4\uD2B8\uB9BC\uC73C\uB85C \uBC18\uD658\uB418\uBA74 \uC989\uC2DC React \uAD6C\uC131 \uC694\uC18C \uC218\uD654\uB97C \uC2DC\uC791\uD558\uAE30 \uC704\uD574 hydrateRoot\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC2A4\uD2B8\uB9AC\uBC0D \uB80C\uB354\uB9C1\uC744 \uC218\uD589\uD569\uB2C8\uB2E4.",-1),E=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),J=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Suspense<span class="token punctuation">,</span> lazy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Comment <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./components/Content&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Homepage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;App&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Header<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Spinner <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Comment<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Comment<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Homepage<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uCC98\uC74C\uC5D0\uB294 \uC900\uBE44\uAC00 \uC548 \uB41C Suspense\uB41C \uCF58\uD150\uCE20 \uCEF4\uD3EC\uB10C\uD2B8\uB9CC \uBCF4\uC5EC\uC9C0\uBA70, \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uC2A4\uD53C\uB108\uB9CC \uBC18\uD658\uB429\uB2C8\uB2E4. \uAC01 Suspended \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uBCF4\uC774\uB294 \uD15C\uD50C\uB9BF \uD50C\uB808\uC774\uC2A4\uD640\uB354\uB85C ID\uC640 \uD568\uAED8 \uC8FC\uC11D\uC744 \uB2EC\uC544\uC11C \uC804\uC1A1\uB41C \uC0C1\uD0DC \uC870\uAC01\uC744 \uAE30\uB85D\uD558\uBA70, \uB098\uC911\uC5D0 \uC720\uD6A8\uD55C \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4. Suspense\uAC00 \uB05D\uB098\uBA74 \uC900\uBE44\uB41C \uCF58\uD150\uCE20 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uD50C\uB808\uC774\uC2A4\uD640\uB354\uB97C \uB300\uCCB4\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uB294 \uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uACC4\uC18D \uC804\uB2EC\uB418\uC5B4 \uBE0C\uB77C\uC6B0\uC800\uAC00 &quot;\uC99D\uBD84 \uB80C\uB354\uB9C1&quot;\uC744 \uAC00\uB2A5\uD558\uAC8C \uD569\uB2C8\uB2E4.</p><p>lazy\uC640 Suspense\uB97C \uC9C0\uC6D0\uD558\uC5EC React SSR\uC774 \uD398\uC774\uC9C0\uC758 \uC774\uBBF8 \uC900\uBE44\uB41C \uBD80\uBD84\uC744 \uAC00\uB2A5\uD55C \uC77C\uCC0D \uCC98\uB9AC\uD560 \uC218 \uC788\uAC8C \uD574 \uC8FC\uB294 \uB610 \uB2E4\uB978 \uAE30\uB2A5\uC740, \uB2E4\uB978 \uBD80\uBD84\uC5D0 \uCC28\uB2E8\uB2F9\uD558\uC9C0 \uC54A\uACE0 \uC774\uBBF8 \uB3D9\uAE30\uC801\uC73C\uB85C \uB85C\uB4DC\uD560 \uD544\uC694\uAC00 \uC5C6\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC120\uD0DD\uC801\uC73C\uB85C lazy\uC640 Suspense\uB85C \uAC10\uC300 \uC218 \uC788\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4 (\uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uB80C\uB354\uB9C1\uACFC \uB3D9\uC77C). React\uC758 \uBB3C\uC904\uAE30\uC758 \uC138\uBD84\uD654\uB294 Suspense\uC758 \uBC94\uC704\uC5D0 \uB530\uB77C \uB2E4\uB974\uBA70, \uAC01 Suspense \uB808\uC774\uC5B4\uB294 \uBB3C\uC904\uAE30\uC758 &quot;\uD2F0\uC5B4&quot;\uC785\uB2C8\uB2E4. \uBAA8\uB4E0 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uBB3C\uC904\uAE30\uB97C \uC218\uD589\uD558\uAC70\uB098 \uC218\uD589\uD558\uC9C0 \uC54A\uB294 \uAC83\uC785\uB2C8\uB2E4.</p><p>\uADF8\uB9AC\uACE0 React\uB294 \uC0AC\uC6A9\uC790 \uC0C1\uD638\uC791\uC6A9 \uD074\uB9AD\uC744 \uC6B0\uC120 \uC21C\uC704 \uD050\uB85C \uC720\uC9C0\uD574 \uD574\uB2F9 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB3C\uC904\uAE30 \uC6B0\uC120 \uCC98\uB9AC\uB97C \uAE30\uB85D\uD558\uBA70, \uBB3C\uC904\uAE30\uAC00 \uC644\uB8CC\uB418\uBA74 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0C1\uD638\uC791\uC6A9\uC5D0 \uC751\uB2F5\uD558\uC5EC \uC774\uBCA4\uD2B8\uB97C \uC7AC\uC0DD\uD569\uB2C8\uB2E4. (\uBA4B\uC788\uC8E0!)</p><img src="`+k+'"><p>\uD398\uC774\uC9C0\uAC00 \uC644\uC804\uD788 \uC218\uD654\uB418\uC9C0 \uC54A\uC558\uC744 \uB54C \uC218\uD654\uAD6C \uC601\uC5ED\uC5D0\uC11C \uBC1C\uC0DD\uD55C \uD074\uB9AD \uC774\uBCA4\uD2B8\uB294 \uBE0C\uB77C\uC6B0\uC800\uAC00 Suspense \uB0B4\uC6A9\uC744 \uC218\uD654\uD558\uB294 \uB3D9\uC548 \uBC1C\uC0DD\uD558\uB294 \uBBF8\uC138\uD55C \uAC04\uACA9\uC5D0\uC11C \uC774\uBCA4\uD2B8\uB97C \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uD074\uB9AD\uC740 \uC989\uC2DC \uCC98\uB9AC\uB418\uBA70 \uBE0C\uB77C\uC6B0\uC800\uB294 \uC800\uB834\uD55C \uC7A5\uCE58\uC5D0\uC11C \uAE34 \uC218\uD654 \uC911\uC5D0 \uB290\uB824\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.```</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',7),O=s("p",null,[s("img",{src:m,alt:"Web Rendering Methods"})],-1),V=s("p",null,'\uC0AC\uC774\uB4DC\uBC14 \uD558\uC774\uB4DC\uB808\uC774\uC158 \uC911\uC5D0 React\uB294 \uCEE8\uD150\uCE20 \uC601\uC5ED\uC5D0\uC11C \uD074\uB9AD\uC774 \uBC1C\uC0DD\uD560 \uB54C \uAE30\uB85D\uD558\uACE0, \uCEE8\uD150\uCE20\uB97C \uB354 \uAE34\uAE09\uD558\uAC8C \uD558\uC774\uB4DC\uB808\uC774\uC158\uD558\uB3C4\uB85D \uC6B0\uC120\uC21C\uC704\uB97C \uC815\uD569\uB2C8\uB2E4. \uCEE8\uD150\uCE20 \uC601\uC5ED\uC774 \uD558\uC774\uB4DC\uB808\uC774\uC158\uB41C \uD6C4\uC5D0, React\uB294 \uAE30\uB85D\uB41C \uD074\uB9AD\uC744 "\uC7AC\uC0DD"\uD558\uACE0 (\uB2E4\uC2DC \uB514\uC2A4\uD328\uCE58\uD558\uC5EC), \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC0C1\uD638\uC791\uC6A9\uC5D0 \uBC18\uC751\uD558\uB3C4\uB85D \uD569\uB2C8\uB2E4. \uADF8 \uB2E4\uC74C\uC5D0, React\uC5D0 \uAE34\uAE09\uD55C \uC791\uC5C5\uC774 \uC5C6\uC5B4\uC84C\uAE30 \uB54C\uBB38\uC5D0, React\uB294 \uB2E4\uC2DC \uC0AC\uC774\uB4DC\uBC14\uB97C \uD558\uC774\uB4DC\uB808\uC774\uC158\uD560 \uAC83\uC785\uB2C8\uB2E4.',-1),U=s("p",null,"\uD558\uC9C0\uB9CC",-1),G=s("p",null,[n("React 18.0\uC5D0\uC11C SSR "),s("code",null,"Suspense"),n("\uAC00 \uC544\uC9C1 \uB370\uC774\uD130 \uC694\uCCAD \uC2DC Suspense\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294\uB2E4\uB294 \uC810\uC744 \uC5B8\uAE09\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uAE30\uB2A5\uC740 18.x\uC5D0\uC11C react-fetch\uC640 Server Component\uC640 \uD568\uAED8 \uCD9C\uC2DC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 \uD604\uC7AC lazy\uC5D0\uC11C \uC911\uB2E8\uC744 \uAC15\uC81C\uD560 \uC218\uBC16\uC5D0 \uC5C6\uB294\uB370, \uC774\uB294 \uC11C\uBC84 \uCE21\uACFC \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uCF54\uB4DC\uC758 \uC774\uC9C8\uC131\uC744 \uC57C\uAE30\uD569\uB2C8\uB2E4. \uC11C\uBC84 \uCE21\uC740 \uC694\uCCAD \uBC0F lazy\uAC00 \uAC10\uC2F8\uC5EC\uC57C \uD558\uC9C0\uB9CC, \uD074\uB77C\uC774\uC5B8\uD2B8\uB294 \uB3D9\uC77C\uD55C \uB798\uD551\uC744 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uCF54\uB4DC \uBD84\uD560 \uD30C\uC77C\uB3C4 fetch \uC774\uD6C4\uC5D0 \uB85C\uB4DC\uB420 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB824\uC57C \uD558\uBA70, \uC774\uB294 \uC131\uB2A5 \uC774\uC288\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C React\uAC00 \uACF5\uC2DD\uC801\uC73C\uB85C react-fetch\uB97C \uCD9C\uC2DC\uD558\uAC70\uB098 \uCEE4\uBBA4\uB2C8\uD2F0\uC5D0\uC11C \uC644\uC804\uD55C \uD504\uB808\uC784\uC6CC\uD06C \uC194\uB8E8\uC158\uC744 \uC81C\uACF5\uD558\uAE30 \uC804\uC5D0, \uB450 \uB2E8\uC5D0\uC11C \uB370\uC774\uD130 \uC774\uB3D9\uC131\uC744 \uBCF4\uC7A5\uD558\uAE30 \uC704\uD574 \uC9C1\uC811 \uB370\uC774\uD130 \uAC80\uC0C9\uC5D0 \uAD00\uD55C SSR \uB85C\uC9C1\uC744 \uC5F0\uAD6C\uD574\uC57C \uD569\uB2C8\uB2E4.")],-1),K=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),W=s("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),n(" \uACB0\uB860")],-1),Y=s("p",null,"\uBCF8 \uAE00\uC5D0\uC11C\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uC0AC\uC6A9\uB418\uB294 \uC5EC\uB7EC \uC6F9 \uB80C\uB354\uB9C1 \uBC29\uBC95\uC744 \uAC04\uB7B5\uD788 \uC18C\uAC1C\uD588\uC2B5\uB2C8\uB2E4. \uAC01\uAC01\uC758 \uC7A5\uB2E8\uC810 \uBC0F \uBE44\uC988\uB2C8\uC2A4 \uD2B9\uC131\uC744 \uC885\uD569\uC801\uC73C\uB85C \uACE0\uB824\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB3C4\uC6C0\uC774 \uB418\uC5C8\uC73C\uBA74 \uC88B\uACA0\uC2B5\uB2C8\uB2E4.",-1);function Q(X,Z){return a(),i("div",null,[h,g,b,v,y,S,f,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,T,R,C,H,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),F,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),M,L,P,x,z,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),D,q,B,N,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),I,j,A,E,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),J,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),O,V,U,G,K,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),W,Y])}var os=l(_,[["render",Q],["__file","index.html.vue"]]);export{os as default};