import{_ as r}from"./app.63e06a35.js";import{l as n,m as l,E as e,G as o,p as a,Y as t,C as s,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/StylingcheckboxwithTailwind_0.8009f4cc.png",i="/assets/StylingcheckboxwithTailwind_2.c77c1907.png",d="/assets/StylingcheckboxwithTailwind_3.854d8ab0.png",u="/assets/StylingcheckboxwithTailwind_4.a4d4d787.png",k="/assets/StylingcheckboxwithTailwind_5.558d624f.png",b="/assets/StylingcheckboxwithTailwind_6.97a1bb48.png",v="/assets/StylingcheckboxwithTailwind_7.5cd9db88.png",g="/assets/StylingcheckboxwithTailwind_8.e8754f2c.png";const m={},h=s("h2",{id:"react-checkbox-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u1105\u1175\u11BC",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#react-checkbox-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u1105\u1175\u11BC","aria-hidden":"true"},"#"),a(" React Checkbox \uCEF4\uD3EC\uB10C\uD2B8 \uC2A4\uD0C0\uC77C\uB9C1")],-1),_=s("p",null,[s("img",{src:c,alt:"\uC774\uBBF8\uC9C0"})],-1),y=s("p",null,"\uC774\uBC88\uC5D0\uB294 \uC21C\uC218\uD55C \uD504\uB860\uD2B8\uC5D4\uB4DC \uC791\uC5C5\uC778 \uCCB4\uD06C\uBC15\uC2A4 \uC2A4\uD0C0\uC77C\uB9C1\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uCCB4\uD06C\uBC15\uC2A4 \uC694\uC18C\uC5D0\uC11C\uB294 \uC77C\uBD80 \uC2A4\uD0C0\uC77C\uB9C1(\uC608: \uD14C\uB450\uB9AC)\uC744 \uBCC0\uACBD\uD560 \uC218 \uC5C6\uACE0 \uC804\uCCB4 \uCCB4\uD06C\uBC15\uC2A4\uB97C \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC2A4\uD0C0\uC77C\uB9C1\uD574\uC57C \uD569\uB2C8\uB2E4. \uAE30\uBCF8 \uC2A4\uD0C0\uC77C\uB9C1\uC744 \uC9C0\uC6CC\uC57C \uD558\uBA70, \uD55C \uB2E8\uACC4\uC529 \uB9CC\uB4E4\uC5B4\uB098\uAC00\uC57C \uD569\uB2C8\uB2E4.",-1),q=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),w=s("p",null,"\uC5EC\uAE30 Tailwind\uB85C \uC2A4\uD0C0\uC77C\uC774 \uC801\uC6A9\uB41C React \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC788\uC2B5\uB2C8\uB2E4:",-1),f=s("h2",{id:"\u1103\u1161\u11AB\u1100\u1168\u1107\u1167\u11AF\u1105\u1169-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u110B\u1173\u11AF-\u1106\u1161\u11AB\u1103\u1173\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1103\u1161\u11AB\u1100\u1168\u1107\u1167\u11AF\u1105\u1169-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u110B\u1173\u11AF-\u1106\u1161\u11AB\u1103\u1173\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8","aria-hidden":"true"},"#"),a(" \uB2E8\uACC4\uBCC4\uB85C \uC2A4\uD0C0\uC77C\uC744 \uB9CC\uB4DC\uB294 \uBC29\uBC95.")],-1),x=s("p",null,"\uC5EC\uAE30 \uC788\uB124\uC694? \uADF8\uB7EC\uBA74 \uB354 \uB9CE\uC740 \uAC83\uC744 \uC54C\uACE0 \uC2F6\uC740 \uAC83 \uAC19\uAD70\uC694 \u2014 \uBA4B\uC9C0\uB124\uC694. \uC2A4\uD0C0\uC77C\uB9C1 \uD504\uB85C\uC138\uC2A4 \uC911\uC5D0 \uB9C8\uC8FC\uCE60 \uC218 \uC788\uB294 \uBAA8\uB4E0 \uBB38\uC81C\uC810\uC744 \uB2E4\uB8E8\uB824\uACE0 \uB178\uB825\uD560\uAC8C\uC694.",-1),j=s("p",null,"HTML \uCCB4\uD06C\uBC15\uC2A4(\uBCF4\uB2E4 \uC815\uD655\uD788\uB294 input \uD0DC\uADF8)\uC758 \uBAA8\uC591\uC740 \uBE0C\uB77C\uC6B0\uC800\uC640 \uC6B4\uC601 \uCCB4\uC81C\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4. \uC774\uAC83\uC740 (\uC81C \uC2DC\uC2A4\uD15C\uACFC \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C) \uAE30\uBCF8 \uCCB4\uD06C\uBC15\uC2A4\uC640 \uBA87 \uAC00\uC9C0 \uC2A4\uD0C0\uC77C\uC774 \uC801\uC6A9\uB41C \uCCB4\uD06C\uBC15\uC2A4\uC758 \uBE44\uAD50\uC785\uB2C8\uB2E4:",-1),S=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),N=p('<img src="'+i+`"><p>\uC6F9\uD398\uC774\uC9C0\uC758 \uCCB4\uD06C\uBC15\uC2A4\uB97C \uC77C\uAD00\uB418\uAC8C \uB9CC\uB4E4\uAE30 \uC704\uD574\uC11C\uB294 \uAE30\uBCF8 \uC2A4\uD0C0\uC77C\uC744 \uC81C\uAC70\uD558\uACE0 \uC0C8\uB85C\uC6B4 \uC2A4\uD0C0\uC77C\uB85C \uB300\uCCB4\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p>\uAE30\uBCF8 \uCCB4\uD06C\uBC15\uC2A4 \uCF54\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;checkbox&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;some_id&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">&quot;some_id&quot;</span><span class="token operator">&gt;</span>This is the checkbox label<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),T=p(`<h2 id="\u1100\u1175\u1107\u1169\u11AB-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u110C\u1166\u1100\u1165" tabindex="-1"><a class="header-anchor" href="#\u1100\u1175\u1107\u1169\u11AB-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u110C\u1166\u1100\u1165" aria-hidden="true">#</a> \uAE30\uBCF8 \uC2A4\uD0C0\uC77C \uC81C\uAC70</h2><p>\uAE30\uBCF8 \uC2A4\uD0C0\uC77C\uC744 \uC81C\uAC70\uD558\uB824\uBA74 appearance-none \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;checkbox&quot;</span> className<span class="token operator">=</span><span class="token string">&quot;appearance-none&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uD574\uB2F9 \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD55C \uD6C4\uC5D0\uB294 \uCCB4\uD06C\uBC15\uC2A4\uAC00 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4. \uC774\uC81C \uB514\uC790\uC778\uD560 \uCC28\uB840\uC785\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),V=p(`<h2 id="\u1100\u1175\u1107\u1169\u11AB-\u110B\u1175\u11B8\u1105\u1167\u11A8-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u1109\u1161\u11BC\u110C\u1161-\u1100\u116E\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1100\u1175\u1107\u1169\u11AB-\u110B\u1175\u11B8\u1105\u1167\u11A8-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u1109\u1161\u11BC\u110C\u1161-\u1100\u116E\u1109\u1165\u11BC" aria-hidden="true">#</a> \uAE30\uBCF8 \uC785\uB825 \uC2A4\uD0C0\uC77C(\uC0C1\uC790) \uAD6C\uC131</h2><p>\uC0C1\uC790\uC758 \uAE30\uBCF8 \uB108\uBE44\uC640 \uB192\uC774, \uD14C\uB450\uB9AC, \uBC30\uACBD \uBC0F \uC77C\uBD80 \uD14C\uB450\uB9AC \uBC18\uACBD\uC744 \uCD94\uAC00\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;checkbox&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;some_id&quot;</span> className<span class="token operator">=</span>&quot;
  appearance<span class="token operator">-</span>none w<span class="token operator">-</span><span class="token number">4</span> h<span class="token operator">-</span><span class="token number">4</span> border<span class="token operator">-</span><span class="token number">2</span> border<span class="token operator">-</span>blue<span class="token operator">-</span><span class="token number">500</span> rounded<span class="token operator">-</span>sm bg<span class="token operator">-</span>white&quot;
<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+d+'"><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),G=p(`<h2 id="\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA-\u1109\u116E\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA-\u1109\u116E\u110C\u1165\u11BC" aria-hidden="true">#</a> \uB808\uC774\uC544\uC6C3 \uC218\uC815</h2><p>\uB77C\uBCA8\uC774 \uC0C1\uC790\uC5D0 \uB108\uBB34 \uAC00\uAE5D\uACE0 \uC0C1\uC790\uAC00 \uB108\uBB34 \uB192\uAC8C \uBC30\uCE58\uB418\uC5B4\uC788\uC5B4\uC694. \uBA87 \uAC00\uC9C0 flex \uC124\uC815\uC73C\uB85C \uD574\uACB0\uD560 \uC218 \uC788\uC5B4\uC694. \uC5EC\uAE30 \uC0C1\uC790\uC640 \uB77C\uBCA8 \uC0AC\uC774\uC5D0 8px \uAC04\uACA9\uC744 \uAC00\uC9C4 flex \uD589\uC774 \uC788\uC5B4\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;flex gap-2&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;checkbox&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;some_id&quot;</span> className<span class="token operator">=</span>&quot;
    appearance<span class="token operator">-</span>none w<span class="token operator">-</span><span class="token number">4</span> h<span class="token operator">-</span><span class="token number">4</span> border<span class="token operator">-</span><span class="token number">2</span> border<span class="token operator">-</span>blue<span class="token operator">-</span><span class="token number">500</span> rounded<span class="token operator">-</span>sm bg<span class="token operator">-</span>white
    mt<span class="token operator">-</span><span class="token number">1</span>&quot;
  <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">&quot;some_id&quot;</span><span class="token operator">&gt;</span>\uC774\uAC83\uC740 \uCCB4\uD06C\uBC15\uC2A4 \uB77C\uBCA8 \uC785\uB2C8\uB2E4<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC0C1\uC790\uC5D0\uB294 4px\uC758 \uC0C1\uB2E8 \uC5EC\uBC31\uB3C4 \uC788\uC5B4\uC694. \uC774 \uC815\uB82C\uC740 \uC0AC\uC6A9\uB41C \uAE00\uAF34 \uBC0F \uADF8 \uD06C\uAE30 (\uB610\uD55C \uC904 \uB192\uC774)\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC838\uC694. \uC6D0\uD558\uB294 \uACB0\uACFC\uB97C \uC5BB\uC73C\uB824\uBA74 \uC774\uB7EC\uD55C \uC694\uC18C\uB4E4\uC744 \uC870\uC815\uD574\uC57C \uD574\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),B=s("img",{src:u},null,-1),C=s("img",{src:k},null,-1),F=s("p",null,"\uCC38\uACE0: \uD55C \uC904 \uB808\uC774\uBE14\uC758 \uACBD\uC6B0\uC5D0\uB294 flex \uD56D\uBAA9 \uC815\uB82C\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC9C0\uB9CC, \uB808\uC774\uBE14\uC774 \uB450 \uC904 \uC774\uC0C1\uC778 \uACBD\uC6B0(\uB610\uB294 \uC77C\uBD80 \uD654\uBA74 \uD06C\uAE30\uC5D0\uC11C \uC904\uBC14\uAFC8\uC774 \uAC00\uB2A5\uD55C \uACBD\uC6B0) \uB2E4\uC74C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4:",-1),E=s("img",{src:b},null,-1),R=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),D=s("p",null,"\uC694\uC18C\uB97C \uB9CE\uC740 \uD14D\uC2A4\uD2B8\uC640 \uC904 \uBC14\uAFC8\uC744 \uACE0\uB824\uD558\uC5EC \uD14C\uC2A4\uD2B8\uD558\uB294 \uAC83\uC744 \uAE30\uC5B5\uD558\uC138\uC694 \u{1F609}",-1),H=s("h2",{id:"\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA-\u1103\u1161\u1109\u1175-\u1100\u1169\u110E\u1175\u1100\u1175",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA-\u1103\u1161\u1109\u1175-\u1100\u1169\u110E\u1175\u1100\u1175","aria-hidden":"true"},"#"),a(" \uB808\uC774\uC544\uC6C3 \uB2E4\uC2DC \uACE0\uCE58\uAE30")],-1),K=s("p",null,"flex \uC694\uC18C\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C shrink \uAC12\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uACBD\uC6B0\uC5D0 \uB530\uB77C \uC0C1\uC790\uAC00 \uCDA9\uBD84\uD55C \uACF5\uAC04\uC774 \uC5C6\uC73C\uBA74 \uCD95\uC18C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uBC29\uC9C0\uD558\uB824\uBA74 shrink-0 \uD074\uB798\uC2A4\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.",-1),L=s("p",null,[s("img",{src:v,alt:"\uC774\uBBF8\uC9C0"})],-1),M=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),Y=p(`<h2 id="\u110E\u1166\u110F\u1173-\u1109\u1161\u11BC\u1110\u1162-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110E\u1166\u110F\u1173-\u1109\u1161\u11BC\u1110\u1162-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uCCB4\uD06C \uC0C1\uD0DC \uCD94\uAC00\uD558\uAE30</h2><p>\uCCB4\uD06C\uBC15\uC2A4\uAC00 \uC120\uD0DD\uB418\uBA74 \uC0C1\uC790\uC758 \uBC30\uACBD\uC774 \uD30C\uB780\uC0C9\uC774 \uB418\uACE0 SVG \uC544\uC774\uCF58\uC774 \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. \uC120\uD0DD\uB41C \uC0C1\uD0DC\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD574 \uD074\uB798\uC2A4\uC758 \uC811\uB450\uC5B4\uB85C checked \uC218\uC815\uC790\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;flex gap-2&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;checkbox&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;some_id&quot;</span> className<span class="token operator">=</span>&quot;
    appearance<span class="token operator">-</span>none w<span class="token operator">-</span><span class="token number">4</span> h<span class="token operator">-</span><span class="token number">4</span> border<span class="token operator">-</span><span class="token number">2</span> border<span class="token operator">-</span>blue<span class="token operator">-</span><span class="token number">500</span> rounded<span class="token operator">-</span>sm bg<span class="token operator">-</span>white
    mt<span class="token operator">-</span><span class="token number">1</span> shrink<span class="token operator">-</span><span class="token number">0</span>
    <span class="token literal-property property">checked</span><span class="token operator">:</span>bg<span class="token operator">-</span>blue<span class="token operator">-</span><span class="token number">800</span> <span class="token literal-property property">checked</span><span class="token operator">:</span>border<span class="token operator">-</span><span class="token number">0</span>&quot;
  <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">&quot;some_id&quot;</span><span class="token operator">&gt;</span>\uC774\uAC83\uC740 \uCCB4\uD06C\uBC15\uC2A4 \uB77C\uBCA8\uC785\uB2C8\uB2E4<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SVG \uC544\uC774\uCF58\uC740 \uC0C1\uC790\uC5D0 \uB80C\uB354\uB9C1\uB418\uC5B4\uC57C \uD558\uBBC0\uB85C \uC0C1\uB300 \uBC0F \uC808\uB300 \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. SVG\uC758 \uD06C\uAE30\uB294 \uC785\uB825 \uC0C1\uC790\uC640 \uB3D9\uC77C\uD558\uAC8C \uC124\uC815\uB418\uBA70(\uC0C1\uB2E8 \uC5EC\uBC31 \uD3EC\uD568)\uC785\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),z=p(`<p>\uC544\uC774\uCF58\uC774 \uD45C\uC2DC\uB418\uC5B4\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uCCB4\uD06C\uBC15\uC2A4\uAC00 \uC120\uD0DD\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC2A4\uD0C0\uC77C\uC744 \uC5F0\uACB0\uD558\uB824\uBA74 input \uC694\uC18C\uC5D0 \uB3D9\uB8CC Tailwind \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uADF8\uB7F0 \uB2E4\uC74C SVG\uC5D0\uC11C\uB294 \uCCB4\uD06C\uBC15\uC2A4\uAC00 \uC120\uD0DD\uB41C \uACBD\uC6B0\uC5D0\uB9CC \uC801\uD569\uD55C \uD074\uB798\uC2A4\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4. SVG\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uC228\uACA8\uC838 \uC788\uC73C\uBA70 input \uD0DC\uADF8\uAC00 \uC120\uD0DD\uB41C \uACBD\uC6B0\uC5D0\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4 \u2014 hidden peer-checked:block \uD074\uB798\uC2A4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;flex gap-2&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;checkbox&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;some_id&quot;</span> className<span class="token operator">=</span>&quot;
    relative peer shrink<span class="token operator">-</span><span class="token number">0</span>
    appearance<span class="token operator">-</span>none w<span class="token operator">-</span><span class="token number">4</span> h<span class="token operator">-</span><span class="token number">4</span> border<span class="token operator">-</span><span class="token number">2</span> border<span class="token operator">-</span>blue<span class="token operator">-</span><span class="token number">500</span> rounded<span class="token operator">-</span>sm bg<span class="token operator">-</span>white
    mt<span class="token operator">-</span><span class="token number">1</span>
    <span class="token literal-property property">checked</span><span class="token operator">:</span>bg<span class="token operator">-</span>blue<span class="token operator">-</span><span class="token number">800</span> <span class="token literal-property property">checked</span><span class="token operator">:</span>border<span class="token operator">-</span><span class="token number">0</span>&quot;
  <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">&quot;some_id&quot;</span><span class="token operator">&gt;</span>\uC774\uAC83\uC740 \uCCB4\uD06C\uBC15\uC2A4 \uB808\uC774\uBE14\uC785\uB2C8\uB2E4<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>svg
    className<span class="token operator">=</span>&quot;
      absolute 
      w<span class="token operator">-</span><span class="token number">4</span> h<span class="token operator">-</span><span class="token number">4</span> mt<span class="token operator">-</span><span class="token number">1</span>
      hidden peer<span class="token operator">-</span>checked<span class="token operator">:</span>block&quot;
    xmlns<span class="token operator">=</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span>
    viewBox<span class="token operator">=</span><span class="token string">&quot;0 0 24 24&quot;</span>
    fill<span class="token operator">=</span><span class="token string">&quot;none&quot;</span>
    stroke<span class="token operator">=</span><span class="token string">&quot;currentColor&quot;</span>
    stroke<span class="token operator">-</span>width<span class="token operator">=</span><span class="token string">&quot;4&quot;</span>
    stroke<span class="token operator">-</span>linecap<span class="token operator">=</span><span class="token string">&quot;round&quot;</span>
    stroke<span class="token operator">-</span>linejoin<span class="token operator">=</span><span class="token string">&quot;round&quot;</span>
  <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>polyline points<span class="token operator">=</span><span class="token string">&quot;20 6 9 17 4 12&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>polyline<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+g+'"><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),A=s("h2",{id:"\u110F\u1173\u11AF\u1105\u1175\u11A8-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1109\u116E\u110C\u1165\u11BC\u1112\u1161\u1100\u1175",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u110F\u1173\u11AF\u1105\u1175\u11A8-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1109\u116E\u110C\u1165\u11BC\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),a(" \uD074\uB9AD \uC774\uBCA4\uD2B8 \uC218\uC815\uD558\uAE30")],-1),I=s("p",null,"\uD604\uC7AC \uAD6C\uD604\uC740 \uB77C\uBCA8\uC744 \uD074\uB9AD\uD588\uC744 \uB54C \uC0C1\uC790\uC758 \uC120\uD0DD \uC0C1\uD0DC\uB97C \uBCC0\uACBD\uD558\uC9C0\uB9CC, \uC0C1\uC790\uB97C \uD074\uB9AD\uD588\uC744 \uB54C\uB294 \uC544\uBB34 \uBCC0\uD654\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",-1),J=s("p",null,"\uC5EC\uAE30\uC11C \uBB38\uC81C\uB294 SVG\uAC00 \uC785\uB825 \uC0C1\uC790 \uC704\uC5D0 \uB80C\uB354\uB9C1\uB418\uC5B4 \uD074\uB9AD \uC774\uBCA4\uD2B8\uAC00 \uB9C9\uD600\uC11C \uBC1C\uC0DD\uD569\uB2C8\uB2E4. \uC774\uBCA4\uD2B8\uAC00 \uC785\uB825 \uC694\uC18C\uB85C \uC804\uB2EC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",-1),O=s("p",null,"\uD574\uACB0\uD558\uB824\uBA74 SVG \uD074\uB798\uC2A4 \uBAA9\uB85D\uC5D0 pointer-events-none \uD074\uB798\uC2A4\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.",-1),P=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),Q=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>svg
  className<span class="token operator">=</span>&quot;
    absolute 
    w<span class="token operator">-</span><span class="token number">4</span> h<span class="token operator">-</span><span class="token number">4</span> mt<span class="token operator">-</span><span class="token number">1</span>
    hidden peer<span class="token operator">-</span>checked<span class="token operator">:</span>block
    pointer<span class="token operator">-</span>events<span class="token operator">-</span>none&quot;
  xmlns<span class="token operator">=</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span>
  viewBox<span class="token operator">=</span><span class="token string">&quot;0 0 24 24&quot;</span>
  fill<span class="token operator">=</span><span class="token string">&quot;none&quot;</span>
  stroke<span class="token operator">=</span><span class="token string">&quot;currentColor&quot;</span>
  stroke<span class="token operator">-</span>width<span class="token operator">=</span><span class="token string">&quot;4&quot;</span>
  stroke<span class="token operator">-</span>linecap<span class="token operator">=</span><span class="token string">&quot;round&quot;</span>
  stroke<span class="token operator">-</span>linejoin<span class="token operator">=</span><span class="token string">&quot;round&quot;</span>
<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>polyline points<span class="token operator">=</span><span class="token string">&quot;20 6 9 17 4 12&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>polyline<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u110E\u1169\u110C\u1165\u11B7-\u1106\u1175\u11BE-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC-\u1109\u1161\u11BC\u1110\u1162-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110E\u1169\u110C\u1165\u11B7-\u1106\u1175\u11BE-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC-\u1109\u1161\u11BC\u1110\u1162-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uCD08\uC810 \uBC0F \uBE44\uD65C\uC131 \uC0C1\uD0DC \uCD94\uAC00\uD558\uAE30</h2><p>\uD14C\uC77C\uC708\uB4DC\uC5D0\uB294 \uD2B9\uC815 \uC0C1\uD0DC\uB97C \uC2A4\uD0C0\uC77C\uB9C1\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uB2E4\uB978 \uAC00\uC0C1 \uD074\uB798\uC2A4\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0 \uCD08\uC810 \uBC0F \uBE44\uD65C\uC131 \uC0C1\uD0DC\uB97C \uC2A4\uD0C0\uC77C\uB9C1\uD558\uB294 \uC608\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uC5B5\uD574\uC57C \uD560 \uC911\uC694\uD55C \uC810 \uC911 \uD558\uB098\uB294 outline-none \uD074\uB798\uC2A4\uC785\uB2C8\uB2E4. \uC77C\uBD80 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uD574\uB2F9 \uC678\uACFD\uC120\uC744 \uC27D\uAC8C \uB193\uCE58\uAE30 \uB54C\uBB38\uC5D0 \uC774 \uC124\uC815\uC774 \uD574\uC81C\uB418\uC9C0 \uC54A\uC73C\uBA74 \uB54C\uB54C\uB85C \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC774\uC0C1\uD574 \uBCF4\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;checkbox&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;some_id&quot;</span> className<span class="token operator">=</span>&quot;
  relative peer shrink<span class="token operator">-</span><span class="token number">0</span>
  appearance<span class="token operator">-</span>none w<span class="token operator">-</span><span class="token number">4</span> h<span class="token operator">-</span><span class="token number">4</span> border<span class="token operator">-</span><span class="token number">2</span> border<span class="token operator">-</span>blue<span class="token operator">-</span><span class="token number">500</span> rounded<span class="token operator">-</span>sm bg<span class="token operator">-</span>white
  mt<span class="token operator">-</span><span class="token number">1</span>
  <span class="token literal-property property">checked</span><span class="token operator">:</span>bg<span class="token operator">-</span>blue<span class="token operator">-</span><span class="token number">800</span> <span class="token literal-property property">checked</span><span class="token operator">:</span>border<span class="token operator">-</span><span class="token number">0</span>
  <span class="token literal-property property">focus</span><span class="token operator">:</span>outline<span class="token operator">-</span>none focus<span class="token operator">:</span>ring<span class="token operator">-</span>offset<span class="token operator">-</span><span class="token number">0</span> <span class="token literal-property property">focus</span><span class="token operator">:</span>ring<span class="token operator">-</span><span class="token number">2</span> <span class="token literal-property property">focus</span><span class="token operator">:</span>ring<span class="token operator">-</span>blue<span class="token operator">-</span><span class="token number">100</span>
  <span class="token literal-property property">disabled</span><span class="token operator">:</span>border<span class="token operator">-</span>steel<span class="token operator">-</span><span class="token number">400</span> <span class="token literal-property property">disabled</span><span class="token operator">:</span>bg<span class="token operator">-</span>steel<span class="token operator">-</span><span class="token number">400</span>
&quot;
<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),U=s("h2",{id:"\u1107\u1169\u1102\u1165\u1109\u1173-\u1112\u1161\u1110\u1173-\u1106\u1169\u110B\u1163\u11BC-\u110E\u1166\u110F\u1173\u1107\u1161\u11A8\u1109\u1173",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1107\u1169\u1102\u1165\u1109\u1173-\u1112\u1161\u1110\u1173-\u1106\u1169\u110B\u1163\u11BC-\u110E\u1166\u110F\u1173\u1107\u1161\u11A8\u1109\u1173","aria-hidden":"true"},"#"),a(" \uBCF4\uB108\uC2A4: \uD558\uD2B8 \uBAA8\uC591 \uCCB4\uD06C\uBC15\uC2A4")],-1),W=s("p",null,"\uC9C0\uAE08\uAE4C\uC9C0 \uC624\uC168\uB098\uC694? \uADF8\uB807\uB2E4\uBA74 \uCCB4\uD06C\uBC15\uC2A4\uB97C \uC2A4\uD0C0\uC77C\uB9C1\uD55C \uAC83\uC774 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC5EC\uAE30 \uD558\uD2B8 \uBAA8\uC591 \uCCB4\uD06C\uBC15\uC2A4\uC758 \uB610 \uB2E4\uB978 \uC608\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uCD94\uAC00\uC801\uC778 \uC0C1\uC790\uB97C \uC0DD\uC131\uD558\uC9C0 \uC54A\uACE0, \uCCB4\uD06C\uBC15\uC2A4 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uCC44\uC6CC\uC9C0\uAC70\uB098 \uBE44\uC6CC\uC9C0\uB294 SVG \uC544\uC774\uCF58\uB9CC \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",-1),X=s("p",null,"\uC774\uC0C1\uC785\uB2C8\uB2E4 - \uC774\uC81C \uD0E4\uC708\uB4DC \uD074\uB798\uC2A4\uB85C \uCCB4\uD06C\uBC15\uC2A4\uB97C \uC2A4\uD0C0\uC77C\uB9C1\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uAC8C \uB418\uC5C8\uC2B5\uB2C8\uB2E4.",-1),Z=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),$=s("p",null,"\uB2E4\uB978 \uC774\uC57C\uAE30\uB3C4 \uD655\uC778\uD574\uBCF4\uC138\uC694:",-1),ss=s("ul",null,[s("li",null,"Tailwind\uB85C \uB77C\uB514\uC624 \uBC84\uD2BC \uC2A4\uD0C0\uC77C\uB9C1\uD558\uAE30")],-1);function as(ns,es){return n(),l("div",null,[h,_,y,q,(n(),e(t("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,f,x,j,S,(n(),e(t("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),N,(n(),e(t("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),T,(n(),e(t("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),V,(n(),e(t("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),G,(n(),e(t("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,C,F,E,R,(n(),e(t("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),D,H,K,L,M,(n(),e(t("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Y,(n(),e(t("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),z,(n(),e(t("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),A,I,J,O,P,(n(),e(t("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Q,(n(),e(t("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),U,W,X,Z,(n(),e(t("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),$,ss])}var is=r(m,[["render",as],["__file","index.html.vue"]]);export{is as default};
