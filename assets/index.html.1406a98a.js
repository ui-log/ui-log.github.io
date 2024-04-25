import{_ as p}from"./app.3052dcfb.js";import{l as n,m as i,E as e,G as t,p as a,Y as o,C as s,K as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var r="/assets/ScreamingArchitectureandReducingbundlesizeofreact-apps_0.7ec8cb81.png",c="/assets/ScreamingArchitectureandReducingbundlesizeofreact-apps_1.d16cbb2e.png",d="/assets/ScreamingArchitectureandReducingbundlesizeofreact-apps_2.10694984.png",u="/assets/ScreamingArchitectureandReducingbundlesizeofreact-apps_3.1bb7e0fa.png";const m={},v=s("img",{src:r},null,-1),b=s("p",null,"\uAE30\uC874 \uC6F9 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC0C8\uB85C\uC6B4 \uD504\uB860\uD2B8\uC5D4\uB4DC \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD1B5\uD569\uD558\uAE30 \uC704\uD55C \uC804\uB7B5\uC744 \uB9C8\uB828\uD558\uB294 \uAC83\uC774 \uC81C \uC8FC\uC5B4\uC9C4 \uC77C\uC774\uC5C8\uC5B4\uC694. \uAE30\uC874 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC774\uBBF8 \uC0C1\uB2F9\uD788 \uD06C\uACE0 \uAC70\uB300\uD588\uAE30 \uB54C\uBB38\uC5D0 \uB9C8\uC774\uD06C\uB85C \uD504\uB860\uD2B8\uC5D4\uB4DC \uC811\uADFC \uBC29\uC2DD\uC744 \uC81C\uC548\uD588\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uC800\uD76C\uAC00 \uC6D0\uD558\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC640 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC0AC\uC6A9\uD558\uACE0, \uD300\uC758 \uC758\uACAC\uACFC \uACB0\uC815\uC5D0 \uB530\uB77C \uAD6C\uC870\uB97C \uC870\uC815\uD560 \uC218 \uC788\uC744 \uAC70\uC608\uC694.",-1),_=s("h2",{id:"\u1112\u116A\u1105\u1167\u1112\u1161\u11AB-\u110B\u1161\u110F\u1175\u1110\u1166\u11A8\u110E\u1165\u1105\u1169\u110B\u1174-\u1106\u1161\u11AB\u1102\u1161\u11B7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1112\u116A\u1105\u1167\u1112\u1161\u11AB-\u110B\u1161\u110F\u1175\u1110\u1166\u11A8\u110E\u1165\u1105\u1169\u110B\u1174-\u1106\u1161\u11AB\u1102\u1161\u11B7","aria-hidden":"true"},"#"),a(" \uD654\uB824\uD55C \uC544\uD0A4\uD14D\uCC98\uB85C\uC758 \uB9CC\uB0A8")],-1),g=s("p",null,"\uC5BC\uB9C8 \uC804 \uC628\uD074 \uBC25\uC774 \uC81C\uC2DC\uD55C '\uD654\uB824\uD55C \uC544\uD0A4\uD14D\uCC98(Screaming Architecture)' \uAC1C\uB150\uC744 \uBC1C\uACAC\uD588\uC5B4\uC694. \uC774\uB294 \uC77C\uBC18 \uB9AC\uC561\uD2B8 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uC57D\uAC04 \uB2E4\uB974\uBA70, \uBAA8\uB4E0 \uAE30\uB2A5\uC774 \uAC01\uAC01\uC758 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uBD84\uB9AC\uB418\uC5B4 src \uD558\uC704\uC758 components \uB514\uB809\uD1A0\uB9AC\uC5D0 \uBC30\uCE58\uB41C\uB2E4\uB294 \uC544\uC774\uB514\uC5B4\uC5D0 \uAE30\uBC18\uD574\uC694. \uD558\uC9C0\uB9CC \uC800\uD76C\uB294 \uBAA8\uB4E0 \uAE30\uB2A5\uC744 \uAE30\uB2A5\uBCC4\uB85C \uB098\uB204\uACE0 \uD2B9\uC815 \uAE30\uB2A5\uC5D0\uC11C \uB2E4\uB978 \uAE30\uB2A5\uACFC \uC0C1\uD638 \uC791\uC6A9\uD574\uC57C \uD558\uB294 \uB2E8\uC77C \uB610\uB294 \uB2E4\uC911\uC758 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB0B4\uBCF4\uB0B4\uB294 \uBC29\uC2DD\uC73C\uB85C \uBCC0\uACBD\uD558\uAE30\uB85C \uD588\uC5B4\uC694. \uC774\uB807\uAC8C \uD558\uBA74 \uCD94\uC0C1\uD654\uB418\uACE0 \uBD84\uB9AC\uB41C \uC0C1\uD0DC\uB85C \uC720\uC9C0\uD560 \uC218 \uC788\uC5B4\uC694. \uB530\uB77C\uC11C \uAC01 \uAE30\uB2A5\uC740 \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD6C\uC870\uB97C \uAC00\uC9C8 \uAC83\uC774\uC5D0\uC694 :-",-1),h=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),k=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>src<span class="token operator">/</span>features<span class="token operator">/</span>awesome<span class="token operator">-</span>feature
<span class="token operator">|</span>
<span class="token operator">+</span> <span class="token operator">-</span> api # \uC8FC\uB85C graphql \uBCC0\uC774 \uBC0F \uCFFC\uB9AC\uB97C \uD3EC\uD568\uD55C \uB0B4\uBCF4\uB0B8 <span class="token constant">API</span> \uC694\uCCAD \uC120\uC5B8
<span class="token operator">|</span>
<span class="token operator">+</span> <span class="token operator">-</span> components # \uD2B9\uC815 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uAD6C\uC131 \uC694\uC18C
<span class="token operator">|</span>
<span class="token operator">+</span> <span class="token operator">-</span> hooks # \uD2B9\uC815 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uD6C5
<span class="token operator">|</span>
<span class="token operator">+</span> <span class="token operator">-</span> routes # \uD2B9\uC815 \uAE30\uB2A5 \uD398\uC774\uC9C0\uC6A9 \uB77C\uC6B0\uD2B8 \uAD6C\uC131 \uC694\uC18C
<span class="token operator">|</span>
<span class="token operator">+</span> <span class="token operator">-</span> stores # \uD2B9\uC815 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC0C1\uD0DC \uC800\uC7A5\uC18C
<span class="token operator">|</span>
<span class="token operator">+</span> <span class="token operator">-</span> types # <span class="token constant">TS</span> \uD2B9\uC815 \uAE30\uB2A5 \uB3C4\uBA54\uC778\uC744 \uC704\uD55C TypeScript \uD0C0\uC785
<span class="token operator">|</span>
<span class="token operator">+</span> <span class="token operator">-</span> utils # \uD2B9\uC815 \uAE30\uB2A5\uC744 \uC704\uD55C \uC720\uD2F8\uB9AC\uD2F0 \uD568\uC218
<span class="token operator">|</span>
<span class="token operator">+</span> <span class="token operator">-</span> index<span class="token punctuation">.</span>ts # \uD574\uB2F9 \uAE30\uB2A5\uC758 \uC9C4\uC785\uC810\uC73C\uB85C<span class="token punctuation">,</span> \uC8FC\uC5B4\uC9C4 \uAE30\uB2A5\uC758 \uACF5\uC6A9 <span class="token constant">API</span>\uB85C \uC791\uB3D9\uD574\uC57C \uD558\uBA70 \uAE30\uB2A5 \uC678\uBD80\uC5D0\uC11C \uC0AC\uC6A9\uD574\uC57C \uD560 \uBAA8\uB4E0 \uAC83\uC744 \uB0B4\uBCF4\uB0C5\uB2C8\uB2E4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB610\uD55C \uC774 \uB9AC\uD3EC\uC9C0\uD1A0\uB9AC\uB97C \uBC1C\uACAC\uD588\uB294\uB370, \uC774\uAC83\uC740 \uAD6C\uD604\uB41C \uAC1C\uB150\uC744 \uD655\uC778\uD558\uB294 \uC544\uC8FC \uC88B\uC740 \uC2DC\uC791\uC810\uC774\uC5C8\uC2B5\uB2C8\uB2E4.</p><h1 id="\u1106\u1165\u11AF\u1105\u1175-\u110B\u1175\u11BB\u1102\u1173\u11AB-\u110C\u1175\u1111\u1167\u11BC\u1109\u1165\u11AB\u110B\u1166\u1109\u1165-\u1107\u1165\u11AB\u1100\u1162\u1100\u1161-\u110E\u1175\u1102\u1173\u11AB-\u110C\u116E\u11BC\u110B\u1175\u11B8\u1102\u1175\u1103\u1161" tabindex="-1"><a class="header-anchor" href="#\u1106\u1165\u11AF\u1105\u1175-\u110B\u1175\u11BB\u1102\u1173\u11AB-\u110C\u1175\u1111\u1167\u11BC\u1109\u1165\u11AB\u110B\u1166\u1109\u1165-\u1107\u1165\u11AB\u1100\u1162\u1100\u1161-\u110E\u1175\u1102\u1173\u11AB-\u110C\u116E\u11BC\u110B\u1175\u11B8\u1102\u1175\u1103\u1161" aria-hidden="true">#</a> \uBA40\uB9AC \uC788\uB294 \uC9C0\uD3C9\uC120\uC5D0\uC11C \uBC88\uAC1C\uAC00 \uCE58\uB294 \uC911\uC785\uB2C8\uB2E4. :-</h1><p>\uAC1C\uBC1C \uCD08\uAE30\uC5D0 \uBAA8\uB4E0 \uAC83\uC774 \uC21C\uC870\uB86D\uACE0 \uBE68\uB790\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uAE30\uB2A5\uC774 \uACC4\uC18D \uC131\uC7A5\uD568\uC5D0 \uB530\uB77C \uAE30\uB2A5\uC744 \uCD94\uAC00\uD560\uC218\uB85D \uCD08\uAE30 \uB85C\uB4DC \uC2DC\uAC04\uACFC \uBC88\uB4E4 \uD06C\uAE30\uB3C4 \uC99D\uAC00\uD55C\uB2E4\uB294 \uAC83\uC744 \uC54C\uAC8C \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uD300 \uB0B4\uC5D0\uC11C \uACC4\uC18D \uB17C\uC758\uB418\uACE0 \uB2E4\uB978 \uC774\uD574\uAD00\uACC4\uC790\uB3C4 \uBA87 \uBC88 \uC774 \uBB38\uC81C\uC5D0 \uB300\uD574 \uC811\uC218\uD588\uC2B5\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 \uC774\uAC83\uC774 \uD604\uC7AC \uC8FC\uC694 \uBB38\uC81C\uB294 \uC544\uB2C8\uC9C0\uB9CC \uACC4\uC18D \uAE30\uB2A5\uC744 \uCD94\uAC00\uD560 \uACBD\uC6B0 \uB300\uD615 \uBB38\uC81C\uB85C \uBC14\uB014 \uAC83\uC774\uB77C\uB294 \uAC83\uC744 \uC54C\uACE0 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=s("h1",{id:"\u1110\u1175\u11B7-\u1106\u1169\u110B\u1167\u1105\u1161",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1110\u1175\u11B7-\u1106\u1169\u110B\u1167\u1105\u1161","aria-hidden":"true"},"#"),a(" \uD300 \uBAA8\uC5EC\uB77C! :-")],-1),f=s("p",null,"\uC6B0\uB9AC\uC758 \uCD08\uAE30 \uAC1C\uBC1C\uC744 \uB9C8\uCE58\uACE0 \uB098\uC11C, \uC6B0\uB9AC\uB294 \uC774 \uBB38\uC81C\uB97C \uC0B4\uD3B4\uBCF4\uACE0 \uD574\uACB0\uD558\uB824\uACE0 \uACB0\uC2EC\uD588\uC2B5\uB2C8\uB2E4.",-1),w=s("p",null,"\uADF8\uB798\uC11C \uC6B0\uB9AC\uAC00 \uC2DC\uB3C4\uD55C \uB9E4\uC6B0 \uCCAB \uBC88\uC9F8 \uB2E8\uACC4\uB294, \uC774 \uBB38\uC81C\uC5D0 \uB300\uD574 react \uBB38\uC11C\uB97C \uBC29\uBB38\uD558\uC5EC \uADF8\uB4E4\uC774 \uC81C\uC548\uD558\uB294 \uAC83\uC744 \uC774\uD574\uD558\uB294 \uAC83\uC774\uC5C8\uC2B5\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 \uBA87 \uAC00\uC9C0 \uC81C\uC548\uC744 \uBC1C\uACAC\uD588\uC2B5\uB2C8\uB2E4: -",-1),x=s("ul",null,[s("li",null,'"source-map-explorer"\uC744 \uC0AC\uC6A9\uD558\uACE0 \uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC5EC \uBC88\uB4E4 \uD06C\uAE30\uAC00 \uC99D\uAC00\uD558\uB294 \uBB38\uC81C\uC758 \uC6D0\uC778\uC744 \uD30C\uC545\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC774\uD574\uD588\uC2B5\uB2C8\uB2E4. \u201Canalyze\u201D: \u201Csource-map-explorer \u2018build/static/js/*.js\u2019\u201D \uC774\uB97C \uD1B5\uD574 \uC6B0\uB9AC\uB294 \uC6B0\uB9AC\uC758 \uC571\uC774 \uD558\uB098\uC758 JS \uD30C\uC77C\uB85C \uBC88\uB4E4\uB9C1\uB418\uACE0 \uC788\uC74C\uC744 \uC54C \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 \uB3D9\uC77C\uD55C \uAC83\uC744 \uBD84\uD560\uD574\uC57C \uD588\uC2B5\uB2C8\uB2E4.'),s("li",null,"\uADF8\uB7EC\uB098 CRA\uC5D0\uC11C \uC571\uC744 \uC2DC\uC791\uD588\uACE0 npm eject\uB97C \uC218\uD589\uD558\uC9C0 \uC54A\uC558\uAE30 \uB54C\uBB38\uC5D0 \uC6F9\uD329 \uAD6C\uC131\uC774 \uC6B0\uB9AC\uC5D0\uAC8C \uC228\uACA8\uC84C\uC2B5\uB2C8\uB2E4. \uC6B0\uB9AC \uC790\uCCB4 \uAD6C\uC131\uC744 \uC81C\uACF5\uD558\uAE30 \uC704\uD574 webpack \uC704\uC5D0 \uB798\uD37C \uC5ED\uD560\uC744 \uD558\uB294 Craco\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uC5C8\uC2B5\uB2C8\uB2E4."),s("li",null,"\uADF8 \uB2E4\uC74C\uC73C\uB85C, react \uBB38\uC11C\uC5D0\uC11C \uC81C\uC548\uD558\uB294 \uB450 \uAC00\uC9C0 \uCF54\uB4DC \uBD84\uD560 \uAE30\uC220\uC744 \uC0AC\uC6A9\uD588\uC2B5\uB2C8\uB2E4.")],-1),q=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),A=s("p",null,"i. \uB77C\uC6B0\uD2B8 \uBD84\uD560: \uCD08\uAE30\uC5D0 \uC571\uC744 \uC704\uD574 \uB450 \uAC00\uC9C0 \uB77C\uC6B0\uD2B8\uB97C \uC815\uC758\uD588\uC2B5\uB2C8\uB2E4. /courses\uB294 Courses \uBAA9\uB85D \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD558\uACE0, /courses/{courseId}\uB294 \uAC15\uC758 \uC138\uBD80 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC774\uC81C \uB450 \uAC00\uC9C0 \uB2E4\uB978 \uB77C\uC6B0\uD2B8\uB97C \uC18C\uAC1C\uD588\uC2B5\uB2C8\uB2E4. /course/create-course\uB294 \uCF54\uC2A4 \uC0DD\uC131 \uC591\uC2DD \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD558\uACE0, /course/edit-course/:courseId\uB294 \uB3D9\uC77C\uD55C \uCF54\uC2A4 \uC0DD\uC131 \uC591\uC2DD \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD558\uC9C0\uB9CC \uCF54\uC2A4\uB97C \uD3B8\uC9D1\uD560 \uB54C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",-1),S=s("p",null,"ii. \uB3D9\uC801 import\uB85C \uBD84\uD560: \uBAA8\uB2EC, \uD31D\uC624\uBC84\uC640 \uAC19\uC740 \uAD6C\uC131 \uC694\uC18C\uB4E4\uC744 \uC9C0\uC5F0 \uB85C\uB529\uD558\uB294 \uBC29\uBC95\uC744 \uB3C4\uC785\uD588\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uD398\uC774\uC9C0 \uB85C\uB4DC \uCD08\uAE30\uC5D0 \uD544\uC694\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",-1),j=s("p",null,"\uC5F4\uB9E4\uB97C \uB9FA\uB294 \uC870\uCE58: \uB450 \uAC00\uC9C0 \uCF54\uB4DC \uBD84\uD560 \uAE30\uBC95\uC744 \uC218\uD589\uD55C \uD6C4\uC5D0 BundleAnalyzerPlugin\uC744 \uC2E4\uD589\uD558\uC5EC \uBCF4\uACE0\uC11C\uB97C \uBC1B\uC558\uC2B5\uB2C8\uB2E4. \uC9C0\uC5F0 \uB85C\uB529\uC744 \uCD94\uAC00\uD568\uC73C\uB85C\uC368 \uD574\uB2F9 \uAD6C\uC131 \uC694\uC18C\uC758 \uBC88\uB4E4 \uD06C\uAE30\uB97C \uC904\uC600\uB2E4\uB294 \uACB0\uACFC\uAC00 \uB098\uC654\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uC774\uBBF8\uC9C0 \uB450 \uC7A5\uC744 \uCC38\uACE0\uD558\uC138\uC694,",-1),R=s("p",null,[s("img",{src:c,alt:"\uC774\uBBF8\uC9C0"})],-1),z=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),E=s("p",null,[s("img",{src:d,alt:"Screaming Architecture and Reducing Bundle Size of React Apps"})],-1),B=s("ul",null,[s("li",null,"\uB2E4\uC74C\uC73C\uB85C, \uC6B0\uB9AC\uB294 \uC704 \uC774\uBBF8\uC9C0\uC5D0\uC11C \uC27D\uAC8C \uD655\uC778\uD560 \uC218 \uC788\uB294 \uB300\uB85C lodash\uC640 \uCEF4\uD3EC\uB10C\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC(\uC544\uC774\uCF58 \uBC0F \uCF54\uC5B4)\uAC00 \uBC88\uB4E4 \uD06C\uAE30\uC758 \uB300\uBD80\uBD84\uC744 \uCC28\uC9C0\uD558\uACE0 \uC788\uB2E4\uB294 \uAC83\uC744 \uC54C\uC558\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC804\uCCB4\uB97C import \uD560 \uB54C \uBC1C\uC0DD\uD558\uB294 \uD604\uC0C1\uC778\uB370, \uC2F1\uAE00 \uD568\uC218/\uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD560 \uB54C\uC5D0\uB3C4 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC804\uCCB4\uB97C import\uD558\uACE0 \uC788\uB294 \uAC83\uC785\uB2C8\uB2E4."),s("li",null,"\uC608\uB97C \uB4E4\uC5B4 \u2014 import { isEmpty } from \u2018lodash\u2019 \uB610\uB294 import { Heading } from @compnent-library"),s("li",null,'\uC774\uB97C \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 lodash\uC5D0\uC11C \uD2B9\uC815 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C import\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uC2DC\uB85C import isEmpty from \u2018lodash/isEmpty\u2019. \uC774 \uAD6C\uBB38\uC740 lodash \uB77C\uC774\uBE0C\uB7EC\uB9AC \uB0B4\uC758 isEmpty \uBAA8\uB4C8\uC5D0\uC11C isEmpty \uD568\uC218\uB97C \uC9C1\uC811 import\uD569\uB2C8\uB2E4. \uC774 \uC811\uADFC \uBC29\uC2DD\uC744 "named export"\uB77C\uACE0 \uD558\uBA70, \uC9C0\uC815\uB41C \uACBD\uB85C\uC5D0\uC11C \uD2B9\uC815 \uD568\uC218\uB97C \uC9C1\uC811 import\uD569\uB2C8\uB2E4.'),s("li",null,"\uC774\uB97C \uC801\uC6A9\uD55C \uD6C4, \uC571 \uBC88\uB4E4\uB9C1\uC5D0\uC11C \uB354 \uB9CE\uC740 \uAC1C\uC120\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uC774\uBBF8\uC9C0\uB97C \uCC38\uC870\uD574\uC8FC\uC138\uC694.")],-1),C=s("p",null,[s("img",{src:u,alt:"Screaming Architecture and Reducing Bundle Size of React Apps"})],-1),I=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),N=l(`<p>\uC55E\uC73C\uB85C \uAC1C\uBC1C\uC790\uB4E4\uC774 \uC774\uB97C \uB530\uB974\uB3C4\uB85D \uAC15\uC81C\uD558\uAE30 \uC704\uD574 eslint \uAD6C\uC131\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;custom/no-named-imports-from-lodash&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lodash&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;allowedNamedImports&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;isEmpty&quot;</span><span class="token punctuation">,</span> <span class="token comment">/* \uD544\uC694\uD55C \uACBD\uC6B0 \uB2E4\uB978 \uD5C8\uC6A9\uB41C \uC774\uB984 \uC788\uB294 \uAC00\uC838\uC624\uAE30\uB97C \uC5EC\uAE30\uC5D0 \uCD94\uAC00\uD558\uC138\uC694 */</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB7EC\uD55C \uBA87 \uAC00\uC9C0 \uC791\uC740 \uB2E8\uACC4\uB97C \uC218\uD589\uD568\uC73C\uB85C\uC368 \uBC88\uB4E4 \uD06C\uAE30\uC5D0 \uC601\uD5A5\uC744 \uC904 \uC218 \uC788\uC5C8\uC73C\uBA70, \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uCD08\uAE30 \uB85C\uB4DC \uC2DC\uAC04\uC744 \uC0C1\uB2F9\uD788 \uAC1C\uC120\uD560 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.</p>`,3);function P(T,V){return n(),i("div",null,[v,b,_,g,h,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,f,w,x,q,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),A,S,j,R,z,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),E,B,C,I,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),N])}var F=p(m,[["render",P],["__file","index.html.vue"]]);export{F as default};
