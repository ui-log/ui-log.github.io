import{_ as i}from"./app.d68f74da.js";import{l as n,m as d,E as t,G as e,p as s,Y as o,C as a,K as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const p={},c=a("p",null,'\uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC744 \uC5F0\uAD6C\uD558\uACE0 \uC788\uB2E4\uBA74, "\uB514\uC790\uC778 \uD1A0\uD070"\uC774\uB77C\uB294 \uC6A9\uC5B4\uB97C \uC811\uD574\uBCF8 \uC801\uC774 \uC788\uC744 \uAC83\uC785\uB2C8\uB2E4. (\uCC98\uC74C \uB4E4\uC5B4\uBCF4\uC558\uB2E4\uBA74 \uAC71\uC815\uD558\uC9C0 \uB9C8\uC138\uC694! \uC5EC\uAE30\uC5D0\uC11C \uC77D\uC5B4\uBCFC \uC218 \uC788\uC5B4\uC694.) \uC2EC\uC9C0\uC5B4 \uC774 \uC6A9\uC5B4\uB97C \uB4E4\uC5B4\uBD24\uB2E4 \uD558\uB354\uB77C\uB3C4, \uADF8\uB4E4\uC774 \uBB34\uC5C7\uC774\uBA70 \uC5B4\uB514\uC5D0\uC11C \uC2DC\uC791\uD574\uC57C \uD558\uB294\uC9C0 \uC815\uB9D0 \uC774\uD574\uD558\uAE30 \uC5B4\uB824\uC6B8 \uC218 \uC788\uC5B4\uC694.',-1),r=a("p",null,"\uB514\uC790\uC778 \uD1A0\uD070\uC740 \uC0C9\uC0C1, \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C, \uAC04\uACA9\uACFC \uAC19\uC740 \uC2A4\uD0C0\uC77C \uC18D\uC131\uC744 \uBBF8\uB9AC \uACB0\uC815\uB41C \uAD6C\uC870\uB85C \uC800\uC7A5\uD558\uB294 \uBC29\uC2DD\uC785\uB2C8\uB2E4. \uB514\uC790\uC778 \uD1A0\uD070\uC740 \uC9C1\uC811\uC801\uC73C\uB85C \uD558\uB4DC \uCF54\uB529\uB41C \uC2A4\uD0C0\uC77C \uB370\uC774\uD130 \uB300\uC2E0\uC73C\uB85C \uB514\uC790\uC774\uB108\uC640 \uAC1C\uBC1C\uC790\uAC00 \uC77C\uAD00\uB41C, \uB9E4\uB825\uC801\uC778 \uB808\uC774\uC544\uC6C3\uC744 \uAD6C\uCD95\uD568\uC73C\uB85C\uC368 \uBE60\uB974\uAC8C \uC7AC\uB514\uC790\uC778\uC744 \uC218\uD589\uD558\uACE0 \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC5D0 \uD14C\uB9C8 \uB808\uC774\uC5B4\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 \uB300\uC548\uC785\uB2C8\uB2E4.",-1),u=a("p",null,"\uB514\uC790\uC778 \uD1A0\uD070\uC744 \uBCC0\uC218\uB85C \uC0DD\uAC01\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBCC0\uC218\uB294 16\uC9C4 \uCF54\uB4DC\uB098 \uD53D\uC140 \uAC12\uACFC \uAC19\uC740 \uAE30\uBCF8 \uC694\uC18C\uB97C \uAC00\uB9AC\uD0A4\uB294 \uAC83\uC774\uC8E0.",-1),_=a("p",null,"\uB0B4 \uC758\uACAC\uC73C\uB85C\uB294, \uB514\uC790\uC778 \uD1A0\uD070\uC740 \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC758 \uC138\uACC4\uB97C \uCC9C\uCC9C\uD788 \uCCB4\uD5D8\uD560 \uC218 \uC788\uB294 \uC88B\uC740 \uBC29\uBC95\uC785\uB2C8\uB2E4. \uC800\uB294 \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC744 5\uAC1C\uC758 \uB808\uC774\uC5B4\uB85C \uC0DD\uAC01\uD569\uB2C8\uB2E4. \uB514\uC790\uC778 \uD1A0\uD070\uC740 \uADF8 \uC2DC\uC2A4\uD15C\uC758 \uAC00\uC7A5 \uC791\uC740 \uAD6C\uC131 \uC694\uC18C\uC785\uB2C8\uB2E4(\uB610\uB294 \uCCAB \uBC88\uC9F8 \uB808\uC774\uC5B4). \uB610\uD55C \uBA40\uD2F0 \uD50C\uB7AB\uD3FC \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC744 \uD574\uC81C\uD558\uB294 \uC5F4\uC1E0 \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4.",-1),h=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),g=a("p",null,"\uBCF4\uD1B5 \uB514\uC790\uC774\uB108\uC640 \uAC1C\uBC1C\uC790\uAC00 \uC571 \uC791\uC5C5\uC744 \uC2DC\uC791\uD560 \uB54C, \uC0C9\uC0C1 \uBC0F \uAE00\uAF34\uACFC \uAC19\uC740 \uC2A4\uD0C0\uC77C \uB370\uC774\uD130\uB97C \uAD6C\uC870\uD654\uD558\uACE0 \uC911\uC559 \uC9D1\uC911\uC2DD\uC73C\uB85C \uC815\uB9AC\uD558\uB294 \uBC29\uBC95\uC744 \uB9CC\uB4E4\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774\uAC83\uC740 \uBA87 \uB144 \uB3D9\uC548\uC740 \uC804\uD600 \uBB38\uC81C\uAC00 \uB418\uC9C0 \uC54A\uC9C0\uB9CC, \uACB0\uAD6D \uD300\uC774 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBB38\uC81C \uC911 \uD558\uB098\uC5D0 \uBD09\uCC29\uD558\uAC8C \uB429\uB2C8\uB2E4:",-1),b=a("ul",null,[a("li",null,"\uB9C8\uCF00\uD305\uBD80\uC11C\uAC00 \uC0AC\uC774\uD2B8\uB97C \uC7AC\uB514\uC790\uC778\uD558\uAE38 \uC6D0\uD558\uC9C0\uB9CC, \uB514\uC790\uC778 \uD30C\uC77C\uACFC \uCF54\uB4DC\uBCA0\uC774\uC2A4 \uC804\uCCB4\uC5D0 \uAC78\uCCD0 \uD558\uB4DC\uCF54\uB529\uB41C \uC0C9\uC0C1\uC740 \uCD94\uC801\uD558\uACE0 \uBCC0\uACBD\uD558\uAE30\uAC00 \uB108\uBB34 \uC5B4\uB835\uC2B5\uB2C8\uB2E4."),a("li",null,"\uD300\uC774 \uB2E4\uD06C \uBAA8\uB4DC\uB97C \uCD94\uAC00\uD558\uAE38 \uC6D0\uD558\uC9C0\uB9CC, \uC911\uC559 \uC9D1\uC911\uC2DD \uC2A4\uD0C0\uC77C \uB370\uC774\uD130\uAC00 \uC5C6\uC5B4\uC11C \uB9E4\uC6B0 \uC5B4\uB835\uB2E4\uB294 \uAC83\uC744 \uAE68\uB2EB\uAC8C \uB429\uB2C8\uB2E4."),a("li",null,"\uD300\uC774 \uAC01\uAC01\uC744 \uCC98\uC74C\uBD80\uD130 \uC644\uC804\uD788 \uBE4C\uB4DC\uD558\uC9C0 \uC54A\uACE0\uB3C4 \uC5EC\uB7EC \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC744 \uC9C0\uC6D0\uD558\uAE30\uB97C \uC6D0\uD569\uB2C8\uB2E4.")],-1),m=a("p",null,"\uADF8\uB798\uC11C \uD55C \uBC88 \uC774\uB7EC\uD55C \uC0C1\uD669\uC5D0 \uCC98\uD558\uAC8C \uB418\uBA74, \uBB34\uC5C7\uC744 \uD574\uC57C \uD560\uAE4C\uC694?",-1),v=a("h1",{id:"_1-\u1103\u1175\u110C\u1161\u110B\u1175\u11AB-\u1110\u1169\u110F\u1173\u11AB\u110B\u1166-\u1110\u116E\u110C\u1161\u1112\u1161\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-\u1103\u1175\u110C\u1161\u110B\u1175\u11AB-\u1110\u1169\u110F\u1173\u11AB\u110B\u1166-\u1110\u116E\u110C\u1161\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),s(" 1. \uB514\uC790\uC778 \uD1A0\uD070\uC5D0 \uD22C\uC790\uD558\uAE30")],-1),k=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),y=l('<p>\uCCAB \uBC88\uC9F8 \uB2E8\uACC4\uB294 \uC704\uC5D0 \uB098\uC5F4\uB41C \uC138 \uAC00\uC9C0 \uC0C1\uD669\uC5D0 \uB300\uC751\uD558\uB294 \uC88B\uC740 \uB3C4\uAD6C\uB85C \uB514\uC790\uC778 \uD1A0\uD070\uC744 \uC778\uC2DD\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uC2DC\uC810\uC5D0\uC11C \uB2F9\uC2E0\uC740 \uB2F9\uC2E0\uC758 \uD300\uC5D0\uAC8C \uC5F0\uAD6C\uD558\uACE0 \uB514\uC790\uC778 \uD1A0\uD070\uC744 \uC2E4\uD589\uD558\uB294 \uB370 \uD22C\uC790\uD560 \uAC83\uC744 \uAD8C\uC7A5\uD574\uC57C \uD569\uB2C8\uB2E4.</p><h2 id="_2-\u1100\u116D\u110B\u1172\u11A8\u1100\u116A-\u1112\u1169\u11BC\u1107\u1169" tabindex="-1"><a class="header-anchor" href="#_2-\u1100\u116D\u110B\u1172\u11A8\u1100\u116A-\u1112\u1169\u11BC\u1107\u1169" aria-hidden="true">#</a> 2. \uAD50\uC721\uACFC \uD64D\uBCF4</h2><p>\uB2F9\uC2E0\uC758 \uB3D9\uB8CC \uC911 \uC77C\uBD80\uAC00 \uB514\uC790\uC778 \uD1A0\uD070\uC5D0 \uB300\uD574 \uB4E4\uC5B4\uBCF8 \uC801\uC774 \uC804\uD600 \uC5C6\uC744 \uAC00\uB2A5\uC131\uC774 \uB192\uC2B5\uB2C8\uB2E4. \uC774\uB4E4\uC5D0\uAC8C \uC774 \uB3C4\uAD6C\uC758 \uAC00\uCE58\uC5D0 \uB300\uD574 \uAD50\uC721\uD558\uACE0 \uC790\uCCB4 \uC5F0\uAD6C\uB97C \uD560 \uAC83\uC744 \uAD8C\uC7A5\uD574\uC57C \uD569\uB2C8\uB2E4. Theme UI\uC758 \uB370\uBAA8\uB97C \uD65C\uC6A9\uD558\uC5EC \uC8FC\uC7A5\uC744 \uB4B7\uBC1B\uCE68\uD558\uAC70\uB098 \uC9C1\uC811 \uD504\uB85C\uD1A0 \uD0C0\uC785\uC744 \uB9CC\uB4E4\uC5B4 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="_3-\u1110\u1169\u110F\u1173\u11AB\u110B\u1173\u11AF-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u11AF-\u1107\u1161\u11BC\u1107\u1165\u11B8-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-\u1110\u1169\u110F\u1173\u11AB\u110B\u1173\u11AF-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u11AF-\u1107\u1161\u11BC\u1107\u1165\u11B8-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3. \uD1A0\uD070\uC744 \uAD6C\uD604\uD560 \uBC29\uBC95 \uC120\uD0DD\uD558\uAE30</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),f=a("p",null,"\uD1A0\uD070\uC744 \uAD6C\uD604\uD558\uB294 \uBC29\uBC95\uC5D0\uB294 \uBA87 \uAC00\uC9C0 \uC635\uC158\uC774 \uC788\uC5B4\uC694. \uB9CE\uC740 \uD300\uC774 \uC790\uCCB4 \uAD6C\uC870\uC640 \uBA85\uBA85 \uCCB4\uACC4\uB97C \uAD6C\uD604\uD558\uB294 \uAC83\uC744 \uC120\uD0DD\uD574\uC694. \uC774 \uBC29\uC2DD\uC744 \uD0DD\uD558\uBA74 \uC678\uBD80 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0 \uC758\uC874\uD558\uC9C0 \uC54A\uC544\uB3C4 \uB418\uC5B4\uC694. \uC911\uC694\uD55C \uC810\uC740 \uD1A0\uD070\uC758 \uC774\uB984\uC774 \uD2B9\uD788 \uC77C\uBC18\uC801\uC73C\uB85C \uC9C0\uC5B4\uC84C\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uAC70\uC608\uC694! Salesforce\uC640 \uAC19\uC740 \uAE30\uC5C5\uC758 \uC608\uC81C\uB97C \uBCF4\uACE0 \uD1A0\uD070\uC744 \uC5B4\uB5BB\uAC8C \uAD6C\uC870\uD654\uD560\uC9C0 \uC544\uC774\uB514\uC5B4\uB97C \uC5BB\uC744 \uC218 \uC788\uC5B4\uC694. \uC774 \uC8FC\uC81C\uC5D0 \uB300\uD574 \uB354 \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uB824\uBA74 \uC5EC\uAE30\uB97C \uD655\uC778\uD558\uC138\uC694.",-1),w=a("p",null,"\uB610\uD55C Theme UI\uC640 \uAC19\uC740 \uC11C\uB4DC\uD30C\uD2F0 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC5B4\uC694. Theme UI\uB97C \uC0AC\uC6A9\uD558\uBA74 \uD14C\uB9C8 \uC0AC\uC591\uC5D0 \uB530\uB77C \uD1A0\uD070\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uACE0, sx \uC18D\uC131 \uBC0F variants \uD0A4\uC640 \uAC19\uC740 \uB3C4\uC6C0\uC774 \uB418\uB294 \uAD6C\uBB38 \uC124\uD0D5\uC774 \uC81C\uACF5\uB3FC\uC694. \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uB9DE\uC9C0 \uC54A\uB354\uB77C\uB3C4 \uD14C\uB9C8 \uC0AC\uC591\uC744 \uC601\uAC10\uC73C\uB85C \uD65C\uC6A9\uD560 \uC218 \uC788\uC5B4\uC694.",-1),x=a("h1",{id:"_4-\u1110\u1169\u110F\u1173\u11AB-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_4-\u1110\u1169\u110F\u1173\u11AB-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),s(" 4. \uD1A0\uD070 \uAD6C\uD604\uD558\uAE30")],-1),j=a("p",null,"\uC774 \uC2DC\uC810\uC5D0\uC11C \uD300\uC758 \uB514\uC790\uC774\uB108\uC640 \uD611\uC758\uD558\uC5EC \uD1A0\uD070\uC758 \uC774\uB984\uACFC \uAD6C\uC870\uB97C \uACB0\uC815\uD558\uACE0, \uAD6C\uC870\uD654\uB41C \uC2A4\uD0C0\uC77C \uB370\uC774\uD130\uB97C \uD3EC\uD568\uD558\uB294 \uAC1D\uCCB4\uB97C \uB9CC\uB4E4\uC5B4\uC57C \uD574\uC694. \uB9C8\uC9C0\uB9C9 \uB2E8\uACC4\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uAD6C\uC131 \uC694\uC18C\uB97C \uC218\uC815\uD558\uC5EC \uD558\uB4DC\uCF54\uB529\uB41C \uAC12\uC774 \uC544\uB2CC \uD1A0\uD070\uC5D0\uC11C \uC77D\uB3C4\uB85D \uC124\uC815\uD558\uB294 \uAC70\uC608\uC694.",-1),q=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),B=l(`<p>\uB9CC\uC57D \uB2F9\uC2E0\uC758 \uD1A0\uD070\uC774 \uC774\uB807\uAC8C \uC0DD\uACBC\uB2E4\uBA74:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> tokens <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">&quot;pink&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB2F9\uC2E0\uC758 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB354 \uC774\uC0C1 \uC774\uB807\uAC8C \uC0DD\uACA8\uBCF4\uC774\uC9C0 \uC54A\uC744 \uAC70\uC608\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> Nav <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span><span class="token string">&quot;nav&quot;</span><span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: pink;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5);function N(T,C){return n(),d("div",null,[c,r,u,_,h,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,b,m,v,k,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,w,x,j,q,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var G=i(p,[["render",N],["__file","index.html.vue"]]);export{G as default};
