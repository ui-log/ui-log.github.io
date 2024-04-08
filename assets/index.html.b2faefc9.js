import{_ as d}from"./app.a99075bb.js";import{l as e,m as i,E as s,G as o,p as t,Y as l,K as n,C as a}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/What-to-Expect-from-React-19_0.dcfaf257.png";const r={},p=n('<p><img src="'+c+'" alt="\uC774\uBBF8\uC9C0"></p><h1 id="\u1109\u1162\u1105\u1169\u110B\u116E\u11AB-\u1100\u1175\u1102\u1173\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1162\u1105\u1169\u110B\u116E\u11AB-\u1100\u1175\u1102\u1173\u11BC" aria-hidden="true">#</a> \uC0C8\uB85C\uC6B4 \uAE30\uB2A5</h1><ul><li>React \uCEF4\uD30C\uC77C\uB7EC: React \uCF54\uB4DC\uB97C \uC77C\uBC18 JavaScript\uB85C \uBCC0\uD658\uD558\uC5EC \uC131\uB2A5\uC744 \uB450 \uBC30\uB85C \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uC561\uC158: \uC6F9 \uD398\uC774\uC9C0 \uB0B4 \uB370\uC774\uD130 \uBC0F \uC0C1\uD638\uC791\uC6A9 \uCC98\uB9AC\uB97C \uAC04\uC18C\uD654\uD569\uB2C8\uB2E4.</li><li>\uC11C\uBC84 \uCEF4\uD3EC\uB10C\uD2B8: \uC11C\uBC84\uC5D0\uC11C \uB80C\uB354\uB9C1\uD558\uC5EC \uD398\uC774\uC9C0 \uB85C\uB4DC \uC18D\uB3C4\uB97C \uB192\uC774\uACE0 SEO\uB97C \uAC1C\uC120\uD569\uB2C8\uB2E4.</li><li>\uC790\uC0B0 \uB85C\uB529: \uC790\uC0B0\uC744 \uBC31\uADF8\uB77C\uC6B4\uB4DC\uB85C \uB85C\uB4DC\uD558\uC5EC \uD398\uC774\uC9C0 \uC804\uD658\uC774 \uB354 \uBD80\uB4DC\uB7FD\uAC8C \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4.</li><li>\uBB38\uC11C \uBA54\uD0C0\uB370\uC774\uD130: \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC27D\uAC8C SEO\uB97C \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uC6F9 \uCEF4\uD3EC\uB10C\uD2B8: \uC720\uC5F0\uD55C \uAC1C\uBC1C\uC744 \uC704\uD574 \uD5A5\uC0C1\uB41C \uD638\uD658\uC131\uC774 \uC81C\uACF5\uB429\uB2C8\uB2E4.</li><li>\uD5A5\uC0C1\uB41C \uD6C4\uD06C: \uCEF4\uD3EC\uB10C\uD2B8 \uB77C\uC774\uD504\uC0AC\uC774\uD074 \uBC0F \uC0C1\uD0DC\uB97C \uB354\uC6B1 \uC138\uBC00\uD558\uAC8C \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><h2 id="react-\u110F\u1165\u11B7\u1111\u1161\u110B\u1175\u11AF\u1105\u1165" tabindex="-1"><a class="header-anchor" href="#react-\u110F\u1165\u11B7\u1111\u1161\u110B\u1175\u11AF\u1105\u1165" aria-hidden="true">#</a> React \uCEF4\uD30C\uC77C\uB7EC</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),u=a("p",null,"\uC6D0\uB798 \uC5F0\uAD6C \uD504\uB85C\uC81D\uD2B8\uB85C \uC2DC\uC791\uB41C React \uCEF4\uD30C\uC77C\uB7EC\uB294 Instagram.com\uC5D0\uC11C \uC81C\uC791\uC758 \uC911\uC694\uD55C \uAD6C\uC131 \uC694\uC18C\uB85C \uBC1C\uC804\uD588\uC2B5\uB2C8\uB2E4. \uC774 \uD601\uC2E0\uC801\uC778 \uB3C4\uAD6C\uB294 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uACFC\uB3C4\uD55C \uB2E4\uC2DC \uB80C\uB354\uB9C1 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uBA70, \uAC1C\uBC1C\uC790\uB4E4\uC5D0\uAC8C \uC77C\uBC18\uC801\uC73C\uB85C \uACE0\uD1B5\uC2A4\uB7EC\uC6B4 \uC810\uC744 \uB2E4\uB8F9\uB2C8\uB2E4. \uAE30\uC874\uC758 \uBA54\uBAA8\uC774\uC81C\uC774\uC158 \uAE30\uC220\uC778 useMemo\uC640 useCallback\uACFC \uAC19\uC740 \uC218\uB3D9 \uAE30\uBC95\uC740 \uD6A8\uACFC\uC801\uC774\uC9C0\uB9CC \uBC88\uAC70\uB86D\uACE0 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),h=a("p",null,"React \uCEF4\uD30C\uC77C\uB7EC\uB294 \uB2E4\uB978 \uC811\uADFC \uBC29\uC2DD\uC744 \uCDE8\uD558\uC5EC, React\uC758 \uD575\uC2EC\uC801\uC778 \uBA54\uD0C0 \uBAA8\uB378\uC744 \uD574\uCE58\uC9C0 \uC54A\uC73C\uBA74\uC11C \uCF54\uB4DC\uB97C \uC790\uB3D9\uC73C\uB85C \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4. JavaScript\uC640 React \uADDC\uCE59\uC744 \uC774\uD574\uD574 \uD6A8\uC728\uC801\uC778 \uCF54\uB4DC \uB9AC\uB77C\uC774\uD305\uC744 \uC548\uC804\uD558\uAC8C \uC218\uD589\uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uB80C\uB354\uB9C1 \uC131\uB2A5\uC744 \uD06C\uAC8C \uD5A5\uC0C1\uC2DC\uCF1C \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC6D0\uD65C\uD558\uAC8C \uB9CC\uB4E4\uC5B4\uC90D\uB2C8\uB2E4, \uD2B9\uD788 \uC790\uC8FC \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB418\uB294 \uBCF5\uC7A1\uD55C \uB370\uC774\uD130 \uC2DC\uAC01\uD654 \uAD6C\uC131 \uC694\uC18C\uC5D0\uC11C \uD6A8\uACFC\uB97C \uBC1C\uD718\uD569\uB2C8\uB2E4. \uCEF4\uD30C\uC77C\uB7EC\uB97C \uC624\uD508 \uC18C\uC2A4\uB85C \uACF5\uAC1C\uD558\uACE0 Meta\uC5D0\uC11C \uC0AC\uC6A9\uC744 \uD655\uB300\uD558\uB294 \uACC4\uD68D\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uAC1C\uBC1C\uC790\uB4E4\uC740 Strict Mode\uC640 React\uC758 ESLint \uD50C\uB7EC\uADF8\uC778\uACFC \uAC19\uC740 \uB3C4\uAD6C\uB85C \uCF54\uB4DC \uD488\uC9C8\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uBA70, \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC758 \uC2E0\uB8B0\uC131\uACFC \uD655\uC7A5\uC131\uC744 \uBCF4\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),_=a("ul",null,[a("li",null,"useMemo, useCallback, memo")],-1),g=a("p",null,"React \uCEF4\uD30C\uC77C\uB7EC\uAC00 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uBA85\uC2DC\uC801\uC778 \uBA54\uBAA8\uC774\uC81C\uC774\uC158 \uD6C4\uD06C\uB098 \uACE0\uCC28 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uD544\uC694\uC5C6\uC5B4\uC84C\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uCEF4\uD30C\uC77C\uB7EC\uAC00 \uD544\uC694\uD55C \uB300\uB85C \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uAC12\uC744 \uC790\uB3D9\uC73C\uB85C \uCD5C\uC801\uD654\uD558\uACE0 \uBA54\uBAA8\uC774\uC81C\uC774\uC158\uD558\uC5EC \uAC1C\uBC1C \uD504\uB85C\uC138\uC2A4\uB97C \uAC04\uC18C\uD654\uD569\uB2C8\uB2E4.",-1),b=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),m=a("ul",null,[a("li",null,"useContext")],-1),f=a("p",null,"\uB9AC\uC561\uD2B8 \uCEF4\uD30C\uC77C\uB7EC\uB294 useContext \uD6C5\uC758 \uB300\uCCB4\uB85C \uC791\uB3D9\uD558\uB294 \uAC04\uC18C\uD654\uB41C use(Context) \uD6C5\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4. \uC774 \uC0C8\uB85C\uC6B4 \uD6C5\uC740 \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C \uCEE8\uD14D\uC2A4\uD2B8 \uAC12\uC744 \uC18C\uBE44\uD558\uB294 \uBC29\uBC95\uC744 \uAC04\uC18C\uD654\uD558\uBA70, \uCEF4\uD30C\uC77C\uB7EC\uC758 \uBAA9\uD45C\uC778 \uBCF4\uC77C\uB7EC\uD50C\uB808\uC774\uD2B8 \uCF54\uB4DC\uB97C \uCD5C\uC18C\uD654\uD558\uB294 \uAC83\uACFC \uC77C\uCE58\uD569\uB2C8\uB2E4.",-1),y=a("ul",null,[a("li",null,"React.lazy")],-1),k=a("p",null,"React.lazy\uC5D0\uC11C \uB5A0\uB098, React Suspense Compiler(RSC)\uB294 \uBE44\uB3D9\uAE30 \uCEF4\uD3EC\uB10C\uD2B8 \uB85C\uB529\uC744 \uC704\uD574 promise-as-child \uAD6C\uBB38\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774 \uD1B5\uD569\uC740 promise-as-child \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uCEA1\uC290\uD654\uD568\uC73C\uB85C\uC368 \uC6D0\uD65C\uD55C \uB85C\uB529 \uACBD\uD5D8\uC744 \uBCF4\uC7A5\uD569\uB2C8\uB2E4.",-1),v=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),w=n('<ul><li>forwardRef</li></ul><p>\uB9AC\uC561\uD2B8 \uCEF4\uD30C\uC77C\uB7EC \uC811\uADFC \uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD558\uBA74 &#39;ref&#39; \uC18D\uC131\uC774 \uD45C\uC900 \uD504\uB86D\uC73C\uB85C \uBCC0\uD658\uB418\uC5B4 \uCEF4\uD3EC\uB10C\uD2B8 \uACC4\uCE35 \uAD6C\uC870\uB97C \uD1B5\uD574 \uC6D0\uD65C\uD558\uAC8C \uC804\uD30C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uAC04\uC18C\uD654\uB294 ref \uC0AC\uC6A9\uC744 \uB2E8\uC21C\uD654\uC2DC\uD0A4\uBA70, \uB098\uBA38\uC9C0 \uD504\uB86D\uACFC \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uCC98\uB9AC\uB418\uC5B4 forwardRef \uB798\uD37C\uAC00 \uD544\uC694 \uC5C6\uC5B4\uC9D1\uB2C8\uB2E4.</p><ul><li><code>Context.Provider</code> to</li></ul><p>\uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uAD6C\uC131 \uC694\uC18C\uB97C <code>Context.Provider</code> \uB0B4\uC5D0 \uCEA1\uC290\uD654\uD558\uB294 \uC77C\uBC18\uC801\uC778 \uBC29\uBC95\uC740 \uB354 \uC9C1\uAD00\uC801\uC774\uACE0 \uAC04\uACB0\uD55C \uAD6C\uBB38\uC778 <code>Context</code>\uB85C \uB300\uCCB4\uB418\uBA70, \uCEF4\uD3EC\uB10C\uD2B8 \uD2B8\uB9AC\uC5D0 \uC9C1\uC811 \uD1B5\uD569\uB429\uB2C8\uB2E4. \uC774 \uAC04\uC18C\uD654\uB294 \uCEE8\uD14D\uC2A4\uD2B8\uC758 \uC0AC\uC6A9\uC131\uC744 \uD5A5\uC0C1\uC2DC\uCF1C \uB354 \uC9C1\uAD00\uC801\uC774\uACE0 \uAC04\uACB0\uD55C \uC811\uADFC \uBC29\uC2DD\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),R=a("ul",null,[a("li",null,"promise \uBC1C\uC0DD\uC2DC\uD0A4\uAE30")],-1),x=a("p",null,"React \uCEF4\uD30C\uC77C\uB7EC \uBC29\uC2DD\uC5D0\uC11C\uB294 promise\uB97C \uC0AC\uC6A9\uD55C \uC624\uB958 \uCC98\uB9AC\uAC00 \uAC04\uC18C\uD654\uB429\uB2C8\uB2E4. \uAC1C\uBC1C\uC790\uB4E4\uC740 \uC9C1\uC811 promise\uB97C throw\uD558\uB294 \uB300\uC2E0 use(promise) hook\uC744 \uD65C\uC6A9\uD558\uC5EC \uBE44\uB3D9\uAE30 \uC791\uC5C5 \uBC0F \uC624\uB958\uB97C \uBCF4\uB2E4 \uAD6C\uC870\uD654\uB41C \uBC29\uC2DD\uC73C\uB85C \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uBE44\uB3D9\uAE30 \uC791\uC5C5\uACFC \uAD00\uB828 \uC624\uB958\uB97C \uBCF4\uB2E4 \uC870\uC808\uB41C \uBC29\uC2DD\uC73C\uB85C \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),S=a("h2",{id:"\u1103\u1169\u11BC\u110C\u1161\u11A8",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1103\u1169\u11BC\u110C\u1161\u11A8","aria-hidden":"true"},"#"),t(" \uB3D9\uC791")],-1),C=a("p",null,[t("React \uB3D9\uC791\uC740 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C \uC11C\uBC84\uB85C \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC870\uC0AC\uC758 \uC77C\uD658\uC73C\uB85C \uAC1C\uBC1C\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uBA74 \uAC1C\uBC1C\uC790\uB4E4\uC740 "),a("code",null,"form/"),t("\uACFC \uAC19\uC740 DOM \uC694\uC18C\uC5D0 \uD568\uC218\uB97C \uD560\uB2F9\uD558\uC5EC \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBCC0\uC774\uC640 \uAC19\uC740 \uC791\uC5C5\uC744 \uC6D0\uD65C\uD558\uAC8C \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")],-1),E=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),O=n(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token punctuation">{</span>search<span class="token punctuation">}</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>input name<span class="token operator">=</span><span class="token string">&quot;query&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token operator">&gt;</span>Search<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React\uC758 action \uD568\uC218\uB294 \uD074\uB77C\uC774\uC5B8\uD2B8 \uB610\uB294 \uC11C\uBC84 \uCE21 \uC815\uC758\uC5D0\uC11C \uC720\uC5F0\uC131\uC744 \uC81C\uACF5\uD558\uC5EC \uB3D9\uAE30\uC801 \uB610\uB294 \uBE44\uB3D9\uAE30\uC801\uC73C\uB85C \uC791\uB3D9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. React\uB294 useFormStatus \uBC0F useFormState\uC640 \uAC19\uC740 \uD6C5\uC744 \uC81C\uACF5\uD558\uC5EC \uD3FC \uC791\uC5C5 \uC0C1\uD0DC \uBC0F \uC751\uB2F5\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB3C4\uB85D \uB370\uC774\uD130 \uC81C\uCD9C \uB77C\uC774\uD504\uC0AC\uC774\uD074\uC744 \uAD00\uB9AC\uD569\uB2C8\uB2E4.</p><p>\uAE30\uBCF8\uC801\uC73C\uB85C \uC804\uD658 \uB0B4\uC5D0\uC11C \uC561\uC158\uC744 \uC81C\uCD9C\uD558\uC5EC \uCC98\uB9AC \uC911\uC5D0 \uD398\uC774\uC9C0 \uC0C1\uD638 \uC791\uC6A9\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC561\uC158\uC740 async/await\uC744 \uC9C0\uC6D0\uD558\uC5EC \uC5C5\uB370\uC774\uD2B8 \uC911\uC5D0 \uB300\uAE30 \uC911\uC778 UI \uD45C\uC2DC\uB97C \uAC00\uB2A5\uD558\uAC8C \uD569\uB2C8\uB2E4.</p><p>useOptimistic\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC784\uC2DC \uC5C5\uB370\uC774\uD2B8\uAC00 \uCD5C\uC885 \uC0C1\uD0DC \uCEE4\uBC0B \uC2DC \uC790\uB3D9\uC73C\uB85C \uBCF5\uC6D0\uB429\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uB099\uAD00\uC801\uC778 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uC0C1\uD0DC \uC124\uC815\uC774 \uAC00\uB2A5\uD558\uBA70 \uD544\uC694\uD560 \uACBD\uC6B0 \uC11C\uBC84 \uB370\uC774\uD130\uB85C \uB418\uB3CC\uC544\uAC08 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),M=n('<p>\uB77C\uC774\uBE0C\uB7EC\uB9AC \uC791\uC131\uC790\uB294 \uC77C\uAD00\uB41C React \uACBD\uD5D8\uC744 \uC704\uD574 \uC0AC\uC6A9\uC790 \uC815\uC758 \uC561\uC158 props\uB97C \uD1B5\uD569\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. React\uC758 \uCCA0\uD559\uC740 \uD50C\uB7AB\uD3FC \uAC04\uC758 \uAE30\uB2A5 \uD638\uD658\uC131\uC744 \uBCF4\uC7A5\uD558\uBA70, \uC571 \uC774\uC804\uC744 \uAC04\uC18C\uD654\uD569\uB2C8\uB2E4.</p><h2 id="\u1109\u1165\u1107\u1165-\u1100\u116E\u1109\u1165\u11BC-\u110B\u116D\u1109\u1169" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u1107\u1165-\u1100\u116E\u1109\u1165\u11BC-\u110B\u116D\u1109\u1169" aria-hidden="true">#</a> \uC11C\uBC84 \uAD6C\uC131 \uC694\uC18C</h2><p>React 19\uC758 \uC2E4\uD5D8\uC801\uC778 \uAE30\uB2A5\uC778 \uC11C\uBC84 \uAD6C\uC131 \uC694\uC18C\uB294 React \uAD6C\uC131 \uC694\uC18C\uC758 \uC11C\uBC84 \uCE21 \uB80C\uB354\uB9C1\uC744 \uAC00\uB2A5\uD558\uAC8C \uD569\uB2C8\uB2E4. \uC774\uB294 \uCD08\uAE30 \uD398\uC774\uC9C0 \uB85C\uB4DC\uAC00 \uBE68\uB77C\uC9C0\uACE0 SEO\uAC00 \uD5A5\uC0C1\uB418\uC5B4 \uAC80\uC0C9 \uC5D4\uC9C4\uC774 \uCF58\uD150\uCE20\uB97C \uC27D\uAC8C \uC0C9\uC778\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110C\u1161\u1109\u1161\u11AB-\u1105\u1169\u1103\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1109\u1161\u11AB-\u1105\u1169\u1103\u1175\u11BC" aria-hidden="true">#</a> \uC790\uC0B0 \uB85C\uB529</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),q=n('<p>React 19\uB97C \uC774\uC6A9\uD558\uBA74 \uC0AC\uC9C4 \uBC0F \uAE30\uD0C0 \uD30C\uC77C\uC744 \uBE60\uB974\uAC8C \uC900\uBE44\uD560 \uC218 \uC788\uC5B4\uC694. \uD604\uC7AC \uD398\uC774\uC9C0\uB97C \uBCF4\uACE0 \uC788\uB294 \uB3D9\uC548 \uBC31\uADF8\uB77C\uC6B4\uB4DC\uC5D0\uC11C \uC774\uBBF8 \uB85C\uB529\uC744 \uC2DC\uC791\uD574\uC11C \uC0C8\uB85C\uC6B4 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD560 \uB54C \uAE30\uB2E4\uB9B4 \uC2DC\uAC04\uC774 \uC904\uC5B4\uB4E4\uC5B4\uC694.</p><h2 id="\u1106\u116E\u11AB\u1109\u1165-\u1106\u1166\u1110\u1161\u1103\u1166\u110B\u1175\u1110\u1165" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u1109\u1165-\u1106\u1166\u1110\u1161\u1103\u1166\u110B\u1175\u1110\u1165" aria-hidden="true">#</a> \uBB38\uC11C \uBA54\uD0C0\uB370\uC774\uD130</h2><p>\uC0C8\uB85C\uC6B4 <code>DocumentHead</code> \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB3C4\uC785\uD558\uC5EC \uD398\uC774\uC9C0\uC5D0 \uC81C\uBAA9\uACFC \uBA54\uD0C0 \uD0DC\uADF8\uB97C \uCD94\uAC00\uD558\uB294 \uC791\uC5C5\uC774 \uAC04\uB2E8\uD574\uC84C\uC5B4\uC694. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uBA74 SEO\uB97C \uCD5C\uC801\uD654\uD558\uACE0 \uC0AC\uC774\uD2B8 \uC804\uCCB4\uC5D0\uC11C \uBE0C\uB79C\uB4DC \uC77C\uAD00\uC131\uC744 \uC720\uC9C0\uD560 \uC218 \uC788\uC5B4\uC694. \uC774\uC81C \uC5EC\uB7EC \uD398\uC774\uC9C0\uC5D0 \uC911\uBCF5 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uD544\uC694\uAC00 \uC5C6\uC5B4\uC694.</p><h2 id="\u110B\u1170\u11B8-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u110B\u1170\u11B8-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173" aria-hidden="true">#</a> \uC6F9 \uCEF4\uD3EC\uB10C\uD2B8</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),D=n('<p>React 19\uC740 \uC6F9 \uAD6C\uC131 \uC694\uC18C\uC640\uC758 \uD638\uD658\uC131\uC744 \uD06C\uAC8C \uD5A5\uC0C1\uC2DC\uCF30\uC5B4\uC694. \uC774\uAC83\uC740 React \uD504\uB85C\uC81D\uD2B8 \uB0B4\uC5D0\uC11C \uC6F9 \uAD6C\uC131 \uC694\uC18C\uB97C \uB9E4\uB044\uB7FD\uAC8C \uD1B5\uD569\uD560 \uC218 \uC788\uB294 \uAE38\uC744 \uC5F4\uC5B4 \uC8FC\uACE0, \uAC1C\uBC1C \uC720\uC5F0\uC131\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uBA70 \uBCC4\uB3C4\uC758 \uC6F9 \uAD6C\uC131 \uC694\uC18C \uBC0F React \uC804\uC6A9 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC904\uC77C \uC218\uB3C4 \uC788\uC744 \uAC70\uC608\uC694.</p><h2 id="\u1112\u1163\u11BC\u1109\u1161\u11BC\u1103\u116C\u11AB-hooks" tabindex="-1"><a class="header-anchor" href="#\u1112\u1163\u11BC\u1109\u1161\u11BC\u1103\u116C\u11AB-hooks" aria-hidden="true">#</a> \uD5A5\uC0C1\uB41C Hooks</h2><p>Hooks\uB294 \uC774\uC81C \uC774\uC804\uBCF4\uB2E4 \uB354 \uC88B\uC544\uC84C\uC5B4\uC694. \uCF54\uB4DC\uAC00 \uC2E4\uD589\uB418\uACE0 \uC5C5\uB370\uC774\uD2B8\uB418\uB294 \uC2DC\uC810\uC744 \uB354\uC6B1 \uC798 \uC81C\uC5B4\uD560 \uC218 \uC788\uC5B4\uC694. \uC774\uB97C \uD1B5\uD574 \uC6F9\uC0AC\uC774\uD2B8\uAC00 \uC6D0\uD560\uD558\uAC8C \uC791\uB3D9\uD558\uACE0 \uCF54\uB4DC \uC791\uC131\uC774 \uC870\uAE08 \uB354 \uC26C\uC6CC\uC84C\uC5B4\uC694.</p><h1 id="react-canary\u110B\u1174-\u1109\u1162\u1105\u1169\u110B\u116E\u11AB-\u1100\u1175\u1102\u1173\u11BC" tabindex="-1"><a class="header-anchor" href="#react-canary\u110B\u1174-\u1109\u1162\u1105\u1169\u110B\u116E\u11AB-\u1100\u1175\u1102\u1173\u11BC" aria-hidden="true">#</a> React Canary\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),B=a("p",null,"\uB9AC\uC561\uD2B8 \uCE74\uB098\uB9AC\uB294 \uACF5\uC2DD \uB9B4\uB9AC\uC2A4 \uC774\uC804\uC5D0 \uC548\uC815\uC801\uC778 \uAE30\uB2A5\uC744 \uAC1C\uBCC4\uC801\uC73C\uB85C \uC18C\uAC1C\uD569\uB2C8\uB2E4. \uC774 \uC0C8\uB85C\uC6B4 \uC811\uADFC \uBC29\uC2DD\uC740 \uCEE4\uBBA4\uB2C8\uD2F0 \uC785\uB825\uC744 \uBC1B\uC544 \uACF5\uAC1C\uC801\uC73C\uB85C \uAE30\uB2A5\uC744 \uAD6C\uCD95\uD568\uC73C\uB85C\uC368 \uC0AC\uC6A9\uC790\uB4E4\uC774 \uC644\uB8CC \uD6C4\uAC00 \uC544\uB2CC \uC644\uACB0 \uB2E8\uACC4\uC5D0\uC11C \uADF8\uB4E4\uC5D0 \uB300\uD574 \uBC30\uC6B8 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4. \uB9AC\uC561\uD2B8 \uCE74\uB098\uB9AC\uC5D0\uB294 \uB9AC\uC561\uD2B8 \uC11C\uBC84 \uCEF4\uD3EC\uB10C\uD2B8, \uC790\uC0B0 \uB85C\uB529, \uBB38\uC11C \uBA54\uD0C0\uB370\uC774\uD130 \uBC0F \uC561\uC158\uACFC \uAC19\uC740 \uC8FC\uBAA9\uD560 \uB9CC\uD55C \uAE30\uB2A5\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC73C\uBA70, react.dev\uC5D0\uC11C \uBB38\uC11C\uD654\uB41C \uB0B4\uC6A9\uB3C4 \uD568\uAED8 \uC81C\uACF5\uB429\uB2C8\uB2E4.",-1),F=a("ul",null,[a("li",null,'\uC9C0\uC2DC\uBB38: "use client" \uBC0F "use server" \uC9C0\uC2DC\uBB38\uC740 \uC7AC\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC704\uD55C \uD074\uB77C\uC774\uC5B8\uD2B8 \uBC0F \uC11C\uBC84 \uD658\uACBD \uC0AC\uC774\uC758 \uBD84\uD560 \uC9C0\uC810\uC744 \uC815\uC758\uD558\uB294 \uC804\uCCB4 \uC2A4\uD0DD \uB9AC\uC561\uD2B8 \uD504\uB808\uC784\uC6CC\uD06C \uAD6C\uCD95\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.'),a("li",null,"\uBB38\uC11C \uBA54\uD0C0\uB370\uC774\uD130: \uC774\uC81C \uD398\uC774\uC9C0\uC5D0 \uC81C\uBAA9 \uBC0F \uBA54\uD0C0 \uD0DC\uADF8\uC640 \uAC19\uC740 \uC694\uC18C\uB97C \uAC04\uD3B8\uD558\uAC8C \uCD94\uAC00\uD560 \uC218 \uC788\uB294 \uC0C8\uB85C\uC6B4 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 SEO\uB97C \uAC1C\uC120\uD558\uACE0 \uAC19\uC740 \uCF54\uB4DC\uB97C \uBC18\uBCF5\uD558\uC9C0 \uC54A\uACE0\uB3C4 \uC6F9\uC0AC\uC774\uD2B8 \uC804\uBC18\uC5D0 \uAC78\uCCD0 \uBE0C\uB79C\uB4DC\uAC00 \uC62C\uBC14\uB974\uAC8C \uD45C\uC2DC\uB418\uB3C4\uB85D \uB3C4\uC640\uC90D\uB2C8\uB2E4."),a("li",null,"\uC790\uC0B0 \uB85C\uB529: \uB9AC\uC561\uD2B8 19\uB294 \uC0AC\uC9C4 \uBC0F \uAE30\uD0C0 \uD30C\uC77C\uC744 \uBE60\uB974\uAC8C \uC900\uBE44\uD558\uB294 \uC77C\uC744 \uC27D\uAC8C \uB9CC\uB4E4\uC5B4\uC90D\uB2C8\uB2E4. \uC0AC\uB78C\uB4E4\uC774 \uD604\uC7AC \uD398\uC774\uC9C0\uB97C \uBCF4\uB294 \uB3D9\uC548 \uBC30\uACBD\uC5D0\uC11C \uD30C\uC77C\uC744 \uB85C\uB529\uD558\uAE30 \uC2DC\uC791\uD569\uB2C8\uB2E4. \uC774\uB294 \uC0C8\uB85C\uC6B4 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD560 \uB54C \uB300\uAE30 \uC2DC\uAC04\uC774 \uC904\uC5B4\uB4E0\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."),a("li",null,"\uC561\uC158: \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C \uC11C\uBC84\uB85C \uB370\uC774\uD130 \uC804\uC1A1\uC744 \uAD00\uB9AC\uD558\uAE30 \uC704\uD55C \uC561\uC158 \uCD94\uAC00\uC640 \uD568\uAED8 useFormStatus \uBC0F useFormState\uC640 \uAC19\uC740 \uD6C5\uB4E4, \uADF8\uB9AC\uACE0 useOptimistic\uC744 \uC0AC\uC6A9\uD55C \uB099\uAD00\uC801 UI \uC5C5\uB370\uC774\uD2B8\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.")],-1),I=a("p",null,"\uC774\uB7EC\uD55C \uAE30\uB2A5\uB4E4\uC740 \uC11C\uB85C \uC758\uC874 \uAD00\uACC4\uAC00 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC548\uC815\uC801\uC778 \uCC44\uB110\uC5D0\uC11C \uAC1C\uBCC4\uC801\uC73C\uB85C \uB9B4\uB9AC\uC2A4\uD558\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. \uB9AC\uC561\uD2B8 \uCE74\uB098\uB9AC\uB294 \uC77C\uAD00\uB41C \uAC1C\uBC1C \uBC0F \uC548\uC815\uC801\uC778 API\uC758 \uC810\uC9C4\uC801 \uB9B4\uB9AC\uC2A4\uB97C \uC6A9\uC774\uD558\uAC8C \uD569\uB2C8\uB2E4. \uD604\uC7AC \uB9AC\uC561\uD2B8 \uCE74\uB098\uB9AC\uC5D0 \uD3EC\uD568\uB41C \uAE30\uB2A5 \uC138\uD2B8\uAC00 \uB9B4\uB9AC\uC2A4 \uC900\uBE44\uB97C \uB9C8\uCCE4\uC73C\uBA70, \uC774 \uC811\uADFC \uBC29\uC2DD\uC744 \uD1B5\uD574 \uAC1C\uBC1C\uC790\uB4E4\uC774 \uC81C\uD488 \uC0AC\uC6A9\uC5D0 \uD544\uC694\uD55C \uBAA8\uB4E0 \uAC83\uC744 \uAC16\uCD94\uACE0 \uC788\uC74C\uC774 \uBCF4\uC7A5\uB429\uB2C8\uB2E4.",-1),j=a("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),t(" \uACB0\uB860")],-1),A=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),H=a("p",null,"\uC694\uC57D\uD558\uC790\uBA74, React 19\uB294 React \uC0DD\uD0DC\uACC4\uC5D0\uC11C \uC911\uC694\uD55C \uBC1C\uC804\uC744 \uC774\uB8E8\uC5C8\uC73C\uBA70, \uC5EC\uB7EC \uAC00\uC9C0 \uC8FC\uBAA9\uD560 \uB9CC\uD55C \uAE30\uB2A5\uACFC \uAC1C\uC120 \uC0AC\uD56D\uC744 \uC18C\uAC1C\uD588\uC2B5\uB2C8\uB2E4. \uD2B9\uD788, React \uCEF4\uD30C\uC77C\uB7EC\uB294 \uC8FC\uBAA9\uD560 \uB9CC\uD55C \uCD94\uAC00 \uC694\uC18C\uB85C, useMemo \uBC0F useCallback\uACFC \uC720\uC0AC\uD55C \uC790\uB3D9 \uC0DD\uC131\uC744 \uD1B5\uD574 \uB2E4\uC2DC \uB80C\uB354\uB9C1 \uD6A8\uC728\uC744 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4. \uAC8C\uB2E4\uAC00 Action \uBC0F useOptimistic\uC740 \uAC01\uAC01 \uB370\uC774\uD130 \uC81C\uCD9C \uBC0F \uB099\uAD00\uC801 \uC0C1\uD0DC \uC5C5\uB370\uC774\uD2B8\uB97C \uAD00\uB9AC\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4. \uC774\uC5D0 \uB354\uD574 Directives, Document Metadata \uBC0F Asset Loading\uC740 \uAC1C\uBC1C\uC790\uB4E4\uC5D0\uAC8C \uD5A5\uC0C1\uB41C \uC81C\uC5B4\uC640 \uC720\uC5F0\uC131\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uCD1D\uAD04\uD574\uC11C, React 19\uB294 React\uB97C \uB354 \uD6A8\uC728\uC801\uC774\uACE0 \uACAC\uACE0\uD558\uBA70 \uAC1C\uBC1C\uC790 \uCE5C\uD654\uC801\uC73C\uB85C \uB9CC\uB4DC\uB294 \uD070 \uBC1C\uC804\uC744 \uC0C1\uC9D5\uD569\uB2C8\uB2E4.",-1);function N(P,V){return e(),i("div",null,[p,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,h,_,g,b,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,f,y,k,v,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),R,x,S,C,E,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),O,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),M,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),q,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),D,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,F,I,j,A,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),H])}var T=d(r,[["render",N],["__file","index.html.vue"]]);export{T as default};