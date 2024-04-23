import{_ as o}from"./app.d68f74da.js";import{l as a,m as i,E as t,G as e,p as n,Y as p,K as l,C as s}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/Building-Responsive-Design-Using-Viewport-CSS-Units_0.330f23a3.png",d="/assets/Building-Responsive-Design-Using-Viewport-CSS-Units_1.536c265b.png",u="/assets/Building-Responsive-Design-Using-Viewport-CSS-Units_2.9f6873be.png",r="/assets/Building-Responsive-Design-Using-Viewport-CSS-Units_3.43adc10f.png",v="/assets/Building-Responsive-Design-Using-Viewport-CSS-Units_4.25673e0b.png",k="/assets/Building-Responsive-Design-Using-Viewport-CSS-Units_5.9bd821b0.png";const g={},b=l('<img src="'+c+'"><h1 id="\u1109\u1169\u1100\u1162" tabindex="-1"><a class="header-anchor" href="#\u1109\u1169\u1100\u1162" aria-hidden="true">#</a> \uC18C\uAC1C</h1><p>\uB808\uC2A4\uD3F0\uC2DC\uBE0C \uB514\uC790\uC778\uC740 \uD654\uBA74 \uD06C\uAE30\uC5D0 \uAD00\uACC4\uC5C6\uC774 \uC6F9 \uCF58\uD150\uCE20\uAC00 \uC798 \uBCF4\uC774\uACE0 \uC791\uB3D9\uD558\uB294 \uAC83\uC744 \uBCF4\uC7A5\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB514\uC790\uC778\uC740 \uD604\uB300 \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBC18\uB4DC\uC2DC \uD544\uC694\uD55C \uC694\uC18C\uC785\uB2C8\uB2E4. \uB808\uC2A4\uD3F0\uC2DC\uBE0C \uB514\uC790\uC778\uC744 \uAD6C\uD604\uD558\uB294 \uB2E4\uC591\uD55C \uB3C4\uAD6C \uC911 \uD558\uB098\uB294 \uBDF0\uD3EC\uD2B8 \uB2E8\uC704\uC778 vw, vh, vmin, vmax, vi, vb, s, l, d \uBC0F \uADF8\uB4E4\uC758 \uC870\uD569 \uB4F1\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uCD1D 24\uAC1C\uC758 \uBDF0\uD3EC\uD2B8 \uB2E8\uC704\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uB2E8\uC704\uB97C \uC5B4\uB5BB\uAC8C \uC0AC\uC6A9\uD558\uACE0 \uC5B8\uC81C \uC0AC\uC6A9\uD574\uC11C \uC801\uC751\uD615 \uB514\uC790\uC778\uC744 \uB9CC\uB4E4 \uC218 \uC788\uB294\uC9C0 \uC124\uBA85\uD569\uB2C8\uB2E4.</p><h1 id="css\u110B\u1166\u1109\u1165-\u1107\u1172\u1111\u1169\u1110\u1173-\u1103\u1161\u11AB\u110B\u1171\u1105\u1161\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161" tabindex="-1"><a class="header-anchor" href="#css\u110B\u1166\u1109\u1165-\u1107\u1172\u1111\u1169\u1110\u1173-\u1103\u1161\u11AB\u110B\u1171\u1105\u1161\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161" aria-hidden="true">#</a> CSS\uC5D0\uC11C \uBDF0\uD3EC\uD2B8 \uB2E8\uC704\uB780 \uBB34\uC5C7\uC778\uAC00?</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),m=s("p",null,"CSS\uC5D0\uC11C \uBDF0\uD3EC\uD2B8 \uB2E8\uC704\uB294 \uCF58\uD150\uCE20\uB97C \uB80C\uB354\uB9C1\uD558\uAE30 \uC704\uD574 \uC6F9 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uD654\uBA74 \uD06C\uAE30\uC758 \uBC31\uBD84\uC728\uC785\uB2C8\uB2E4. \uBDF0\uD3EC\uD2B8\uB294 \uD654\uBA74 \uD06C\uAE30\uC5D0 \uAD00\uACC4\uC5C6\uC774 \uC694\uC18C, \uAE00\uAF34 \uBC0F \uAC04\uACA9\uC758 \uD06C\uAE30\uB97C \uC720\uB3D9\uC801\uC73C\uB85C \uC870\uC815\uD560 \uC218 \uC788\uB294 \uBC29\uC2DD\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",-1),h=s("p",null,"\uAC00\uC7A5 \uC77C\uBC18\uC801\uC778 \uBDF0\uD3EC\uD2B8 \uB2E8\uC704\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4: vw\uC640 vh:",-1),y=s("ul",null,[s("li",null,"vw(\uBDF0\uD3EC\uD2B8 \uB108\uBE44)\uB294 \uBDF0\uD3EC\uD2B8 \uB108\uBE44\uC758 1%\uC640 \uAC19\uC2B5\uB2C8\uB2E4."),s("li",null,"vh(\uBDF0\uD3EC\uD2B8 \uB192\uC774)\uB294 \uBDF0\uD3EC\uD2B8 \uB192\uC774\uC758 1%\uC640 \uAC19\uC2B5\uB2C8\uB2E4.")],-1),_=s("p",null,"\uD53D\uC140\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD5E4\uB354 \uC694\uC18C\uB97C \uC0DD\uC131\uD560 \uB54C, \uB2E4\uC591\uD55C \uD654\uBA74 \uD06C\uAE30\uC5D0\uC11C \uC77C\uC815\uD55C \uB192\uC774\uB97C \uAC16\uC2B5\uB2C8\uB2E4:",-1),w=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),f=l(`<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD5E4\uB354\uB97C \uB354 \uBC18\uC751\uD615\uC73C\uB85C \uB9CC\uB4E4\uC5B4 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uB3D9\uC801 \uB192\uC774\uB97C 10vh\uB85C \uC9C0\uC815\uD558\uC5EC \uD654\uBA74 \uD06C\uAE30\uC5D0 \uB530\uB77C \uD5E4\uB354\uAC00 \uD654\uBA74 \uD06C\uAE30\uC758 10%\uB97C \uCC28\uC9C0\uD558\uAC8C \uB429\uB2C8\uB2E4:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">header</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 10vh<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #9089fc<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 80vh<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 10vh<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> bisque<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>\uD5E4\uB354 \uC5EC\uAE30\uC5D0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>\uCF58\uD150\uCE20 \uC5EC\uAE30\uC5D0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+d+'">',4),x=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),S=s("p",null,"\uC7A0\uAE50\uB9CC\uC694! CSS\uC5D0\uB294 \uD37C\uC13C\uD2B8(%) \uB2E8\uC704\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uC608\uC81C\uC5D0\uC11C\uB294 \uD5E4\uB354\uAC00 \uD654\uBA74\uC758 \uAC00\uB85C \uAE38\uC774\uB97C \uCC44\uC6B0\uB3C4\uB85D \uB9CC\uB4ED\uB2C8\uB2E4. \uC774\uAC83\uC774 vw\uC640 vh\uC640 \uC5B4\uB5BB\uAC8C \uB2E4\uB978\uAC00\uC694? \uD37C\uC13C\uD2B8 \uB2E8\uC704\uB294 \uBD80\uBAA8 \uC694\uC18C\uC758 \uD06C\uAE30\uB97C \uAE30\uC900\uC73C\uB85C \uD558\uC9C0\uB9CC \uBDF0\uD3EC\uD2B8 \uB2E8\uC704\uB294 \uD56D\uC0C1 \uAE30\uAE30\uC758 \uD654\uBA74 \uD06C\uAE30\uB97C \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4.",-1),U=s("h1",{id:"vw-vh-\u1107\u1172\u1111\u1169\u1110\u1173-\u1103\u1161\u11AB\u110B\u1171-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vw-vh-\u1107\u1172\u1111\u1169\u1110\u1173-\u1103\u1161\u11AB\u110B\u1171-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),n(" vw, vh \uBDF0\uD3EC\uD2B8 \uB2E8\uC704 \uC0AC\uC6A9\uD558\uAE30")],-1),C=s("p",null,"vw\uC640 vh\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBC18\uC751\uD615 \uB514\uC790\uC778\uC744 \uB9CC\uB4DC\uB294 \uBA87 \uAC00\uC9C0 \uC608\uC81C\uB97C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4:",-1),R=s("p",null,"\uBC30\uACBD \uC774\uBBF8\uC9C0\uAC00 \uC788\uB294 \uC804\uCCB4 \uD654\uBA74 \uC139\uC158\uC744 \uB9CC\uB4E4\uC5B4, \uBDF0\uD3EC\uD2B8\uC758 \uB192\uC774\uC640 \uB108\uBE44\uC5D0 \uB9DE\uAC8C \uC870\uC815\uD569\uB2C8\uB2E4:",-1),V=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),B=l(`<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;\uBC30\uACBD\uC774\uBBF8\uC9C0.png&quot;</span><span class="token punctuation">)</span></span> no-repeat center center<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uBDF0\uD3EC\uD2B8 \uD06C\uAE30\uC5D0 \uC0C1\uB300\uC801\uC778 \uC694\uC18C \uAC04\uC758 \uACF5\uAC04\uC744 \uC870\uC815\uD558\uC5EC \uBCF4\uB2E4 \uC801\uC751\uC801\uC778 \uB808\uC774\uC544\uC6C3\uC744 \uB9CC\uB4DC\uC138\uC694:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5vh 5vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.section</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 2vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC7A5\uCE58\uBCC4\uB85C \uD14D\uC2A4\uD2B8\uAC00 \uBE44\uC728\uC744 \uC720\uC9C0\uD558\uAE30 \uC704\uD574 \uBDF0\uD3EC\uD2B8 \uB2E8\uC704\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAE00\uAF34 \uD06C\uAE30\uB97C \uC870\uC815\uD558\uB294 \uAC83\uC774 \uC720\uD639\uC2A4\uB7EC\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\`\`\`</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),L=l(`<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD558\uC9C0\uB9CC \uAE00\uAF34 \uD06C\uAE30\uC5D0 \uB300\uD574 vw\uB9CC \uC0AC\uC6A9\uD558\uB294 \uAC83\uC740 \uB9E4\uC6B0 \uC791\uC740 \uD654\uBA74\uC774\uB098 \uB9E4\uC6B0 \uD070 \uD654\uBA74\uC5D0\uC11C \uAE00\uAF34 \uD06C\uAE30\uAC00 \uC9C0\uB098\uCE58\uAC8C \uC791\uAC70\uB098 \uD06C\uAC8C \uBCF4\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC778 \uAD00\uD589\uC740 \uBDF0\uD3EC\uD2B8 \uB2E8\uC704\uC640 clamp() \uD568\uC218\uB97C \uACB0\uD569\uD558\uC5EC \uCD5C\uC18C \uBC0F \uCD5C\uB300 \uAE00\uAF34 \uD06C\uAE30\uB97C \uC124\uC815\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">clamp</span><span class="token punctuation">(</span>16px<span class="token punctuation">,</span> 2vw<span class="token punctuation">,</span> 24px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>clamp() \uD568\uC218\uB294 body \uC694\uC18C\uC758 \uAE00\uAF34 \uD06C\uAE30\uB97C \uB3D9\uC801\uC73C\uB85C \uC870\uC815\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uBA70 \uC138 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC804\uB2EC\uB429\uB2C8\uB2E4:\`\`\`</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),j=l('<ul><li>\uCD5C\uC18C\uAC12: 16px \u2014 \uC774\uAC83\uC740 \uD3F0\uD2B8\uC758 \uAC00\uC7A5 \uC791\uC740 \uD06C\uAE30\uC785\uB2C8\uB2E4. \uBDF0\uD3EC\uD2B8\uAC00 \uC5BC\uB9C8\uB098 \uC791\uC544\uC9C0\uB4E0, \uD3F0\uD2B8 \uD06C\uAE30\uB294 16\uD53D\uC140 \uC544\uB798\uB85C \uB0B4\uB824\uAC00\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</li><li>\uAE30\uBCF8\uAC12: 2vw \u2014 \uC774 \uAC12\uC740 \uBDF0\uD3EC\uD2B8 \uB108\uBE44\uC5D0 \uB530\uB77C \uB3D9\uC801\uC73C\uB85C \uC131\uC7A5\uD558\uACE0 \uCD95\uC18C\uB418\uB3C4\uB85D \uD569\uB2C8\uB2E4. 2vw\uB294 \uBDF0\uD3EC\uD2B8 \uB108\uBE44\uC758 2%\uB97C \uC758\uBBF8\uD558\uBA70, \uD654\uBA74 \uB108\uBE44\uC5D0 \uBC18\uC751\uD558\uC5EC \uD3F0\uD2B8 \uD06C\uAE30\uB97C \uC870\uC815\uD569\uB2C8\uB2E4.</li><li>\uCD5C\uB300\uAC12: 24px \u2014 \uC774\uAC83\uC740 \uD3F0\uD2B8\uC758 \uAC00\uC7A5 \uD070 \uD06C\uAE30\uC785\uB2C8\uB2E4. \uBDF0\uD3EC\uD2B8 \uB108\uBE44\uAC00 \uB9E4\uC6B0 \uB113\uC5B4\uC9C0\uB354\uB77C\uB3C4, \uD3F0\uD2B8 \uD06C\uAE30\uAC00 24\uD53D\uC140\uC744 \uCD08\uACFC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</li></ul><h1 id="vmin-vmax-\u1107\u1172\u1111\u1169\u1110\u1173-\u1103\u1161\u11AB\u110B\u1171-\u1109\u1161\u110B\u116D\u11BC" tabindex="-1"><a class="header-anchor" href="#vmin-vmax-\u1107\u1172\u1111\u1169\u1110\u1173-\u1103\u1161\u11AB\u110B\u1171-\u1109\u1161\u110B\u116D\u11BC" aria-hidden="true">#</a> vmin, vmax \uBDF0\uD3EC\uD2B8 \uB2E8\uC704 \uC0AC\uC6A9</h1><p>vmin\uACFC vmax\uB294 \uAC01\uAC01 \uBDF0\uD3EC\uD2B8\uC758 \uAC00\uC7A5 \uC791\uC740 \uCC28\uC6D0\uACFC \uAC00\uC7A5 \uD070 \uCC28\uC6D0\uC744 \uB098\uD0C0\uB0B4\uB294 \uBDF0\uD3EC\uD2B8 \uB2E8\uC704\uC785\uB2C8\uB2E4.</p><ul><li>vmin: 1vmin\uC740 \uBDF0\uD3EC\uD2B8\uC758 \uC791\uC740 \uCC28\uC6D0, \uC989 \uB108\uBE44 \uB610\uB294 \uB192\uC774\uC758 1%\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4. \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uACF5\uAC04 \uC911\uC5D0\uC11C \uAC00\uC7A5 \uC791\uC740 \uACF5\uAC04\uC5D0 \uAE30\uBC18\uD55C \uBC18\uC751\uD615 \uC694\uC18C\uB97C \uB9CC\uB4DC\uB294 \uB370 \uB9E4\uC6B0 \uC720\uC6A9\uD569\uB2C8\uB2E4.</li><li>vmax: 1vmax\uB294 \uBDF0\uD3EC\uD2B8\uC758 \uD070 \uCC28\uC6D0\uC758 1%\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4. \uD070 \uBDF0\uD3EC\uD2B8\uC5D0\uC11C \uC801\uADF9\uC801\uC73C\uB85C \uC870\uC808\uB418\uC5B4\uC57C \uD558\uC9C0\uB9CC \uC791\uC740 \uBDF0\uD3EC\uD2B8\uC5D0\uC11C\uB294 \uC81C\uD55C\uB418\uC5B4\uC57C \uD558\uB294 \uB514\uC790\uC778\uC5D0 \uC720\uC6A9\uD569\uB2C8\uB2E4.</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),q=l(`<p>vmin\uACFC vmax\uB294 \uD654\uBA74\uC758 \uC791\uC740 \uAC12\uC5D0 \uB530\uB77C \uC804\uCCB4 \uB108\uBE44 \uB610\uB294 \uB192\uC774\uB97C \uCC44\uC6B0\uB294 \uCF58\uD150\uCE20\uB97C \uB9CC\uB4DC\uB294 \uB370 \uC0AC\uC6A9\uB420 \uC218 \uC788\uC5B4\uC694.</p><p>\uB2E4\uC74C CSS\uB294 \uAC00\uC7A5 \uC791\uC740 \uBDF0\uD3EC\uD2B8 \uCC28\uC6D0\uACFC \uB3D9\uC77C\uD55C \uD06C\uAE30\uC758 \uC815\uC0AC\uAC01\uD615 \uD328\uB110\uC744 \uB9CC\uB4E4\uC5B4\uB0C5\uB2C8\uB2E4:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
    main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vmin<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vmin<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #ffa33d<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;/style&gt;

&lt;body&gt;
    &lt;main&gt;&lt;/main&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC2A4\uD06C\uB9B0 \uD06C\uAE30\uAC00 360x740\uC778 \uBAA8\uBC14\uC77C \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C \uC774 \uD328\uB110\uC740 \uC804\uCCB4 \uB108\uBE44\uB97C \uAC00\uC9C0\uACE0 \uB192\uC774=360px\uAC00 \uB420 \uAC70\uC608\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),D=l('<img src="'+u+'"><p>\uAC00\uB85C \uBAA8\uB4DC\uC5D0\uC11C \uD328\uB110\uC740 \uC804\uCCB4 \uB192\uC774\uB97C \uCC28\uC9C0\uD558\uACE0 \uB108\uBE44\uB294 360px\uAC00 \uB429\uB2C8\uB2E4.</p><img src="'+r+'"><h1 id="vi-vb-viewport-\u1103\u1161\u11AB\u110B\u1171-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#vi-vb-viewport-\u1103\u1161\u11AB\u110B\u1171-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> vi, vb Viewport \uB2E8\uC704 \uC0AC\uC6A9\uD558\uAE30</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),z=l(`<p>\uBAA8\uBC14\uC77C \uD3F0\uC744 \uC218\uC9C1 \uBAA8\uB4DC\uB85C \uC954\uB2E4\uACE0 \uC0C1\uC0C1\uD574\uBD10\uC694. \uADF8\uB9AC\uACE0 \uD654\uBA74\uC744 \uC218\uD3C9 \uBAA8\uB4DC\uB85C \uC804\uD658\uD558\uBA74, \uD654\uBA74 \uC774\uBBF8\uC9C0\uAC00 \uD68C\uC804\uB418\uBA74\uC11C \uD3F0\uC774 \uC218\uD3C9 \uBAA8\uB4DC\uB85C \uBCC0\uD574\uC694.</p><ul><li>vi: Viewport inline \uC758 \uC904\uC784\uB9D0\uC774\uC5D0\uC694. 1vi\uB294 \uC218\uD3C9 \uC4F0\uAE30 \uBAA8\uB4DC\uC5D0\uC11C \uBDF0\uD3EC\uD2B8 \uB108\uBE44\uC758 1%\uB97C \uC758\uBBF8\uD558\uACE0, \uC218\uC9C1 \uC4F0\uAE30 \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uBDF0\uD3EC\uD2B8 \uB192\uC774\uC758 1%\uB97C \uC758\uBBF8\uD574\uC694.</li><li>vb: Viewport block \uC758 \uC904\uC784\uB9D0\uC774\uC5D0\uC694. 1vb\uB294 \uC218\uD3C9 \uC4F0\uAE30 \uBAA8\uB4DC\uC5D0\uC11C \uBDF0\uD3EC\uD2B8 \uB192\uC774\uC758 1%\uB97C, \uC218\uC9C1 \uC4F0\uAE30 \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uBDF0\uD3EC\uD2B8 \uB108\uBE44\uC758 1%\uB97C \uC758\uBBF8\uD574\uC694.</li></ul><p>\uC218\uD3C9 \uBC0F \uC218\uC9C1 \uBAA8\uB4DC\uC5D0\uC11C \uC801\uC751\uD615 \uB514\uC790\uC778\uC744 \uC815\uC758\uD558\uB294 \uB450 \uAC00\uC9C0 CSS \uD074\uB798\uC2A4\uB97C \uB9CC\uB4E4 \uC218 \uC788\uC5B4\uC694. \uC218\uD3C9(\uAC00\uB85C) \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uC218\uD3C9\uC73C\uB85C \uD655\uB300\uB418\uBA70, \uD654\uBA74\uC774 \uB354 \uB113\uC5B4\uC9C0\uBA74 \uBE14\uB85D\uB3C4 \uB113\uC5B4\uC838\uC694. \uC218\uC9C1 \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uC218\uC9C1\uC73C\uB85C \uD655\uB300\uB418\uBA70, \uD654\uBA74\uC774 \uB354 \uB192\uC544\uC9C0\uBA74 \uBE14\uB85D\uB3C4 \uB354 \uB192\uC544\uC838\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>container<span class="token operator">-</span>horizontal <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 50vi<span class="token punctuation">;</span> <span class="token comment">/* 50vw \uC640 \uAC19\uC544\uC694 */</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 50vi<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> beige<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>container<span class="token operator">-</span>vertical <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 50vb<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 50vb<span class="token punctuation">;</span> <span class="token comment">/* 50vh \uC640 \uAC19\uC544\uC694 */</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> darkseagreen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container-horizontal&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container-vertical&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),N=s("p",null,"\uC5EC\uAE30\uC11C \uC218\uD3C9 \uCEE8\uD14C\uC774\uB108\uB294 \uD654\uBA74 \uB108\uBE44\uC758 50% \uD06C\uAE30\uB85C \uD56D\uC0C1 \uC815\uC0AC\uAC01\uD615\uC774\uACE0, \uD654\uBA74\uC774 \uC218\uD3C9 \uB610\uB294 \uC218\uC9C1 \uBAA8\uB4DC\uC778\uC9C0\uC5D0 \uB530\uB77C \uB192\uC774\uAC00 \uB2EC\uB77C\uC9D1\uB2C8\uB2E4.",-1),E=s("p",null,[s("img",{src:v,alt:"\uC218\uD3C9 \uCEE8\uD14C\uC774\uB108"})],-1),G=s("p",null,"\uC218\uC9C1 \uCEE8\uD14C\uC774\uB108\uB294 \uD654\uBA74 \uB192\uC774\uC758 50% \uD06C\uAE30\uB85C \uD56D\uC0C1 \uC815\uC0AC\uAC01\uD615\uC774\uACE0, \uD654\uBA74\uC774 \uC218\uD3C9 \uB610\uB294 \uC218\uC9C1 \uBAA8\uB4DC\uC778\uC9C0\uC5D0 \uB530\uB77C \uB108\uBE44\uAC00 \uB2EC\uB77C\uC9D1\uB2C8\uB2E4.",-1),K=s("p",null,[s("img",{src:k,alt:"\uC218\uC9C1 \uCEE8\uD14C\uC774\uB108"})],-1),M=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),T=s("h1",{id:"s-l-d-viewport-modifiers-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#s-l-d-viewport-modifiers-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),n(" s, l, d Viewport Modifiers \uC0AC\uC6A9\uD558\uAE30")],-1),Y=s("p",null,"\uC9C0\uAE08\uAE4C\uC9C0 6\uAC1C\uC758 viewport CSS \uB2E8\uC704\uB97C \uBC30\uC6E0\uC2B5\uB2C8\uB2E4. \uBDF0\uD3EC\uD2B8 \uB2E8\uC704\uB294 \uC815\uC801\uC778 \uBDF0\uD3EC\uD2B8 \uD06C\uAE30\uC5D0\uB9CC \uC791\uB3D9\uD558\uBA70, \uBDF0\uD3EC\uD2B8 \uD06C\uAE30\uAC00 \uBCC0\uD558\uB294 \uACBD\uC6B0\uC5D0 \uB300\uC751\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774\uC640 \uAC19\uC740 \uC0AC\uC6A9 \uC0AC\uB840\uC758 \uC644\uBCBD\uD55C \uC608\uB294 \uB2E4\uC2DC \uD55C \uBC88 \uD734\uB300\uC804\uD654\uC785\uB2C8\uB2E4. \uBAA8\uBC14\uC77C \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uD398\uC774\uC9C0\uB97C \uC2A4\uD06C\uB864\uD560 \uB54C URL \uBC14\uAC00 \uC0AC\uB77C\uC9C0\uB294 \uAC83\uC744 \uC8FC\uBAA9\uD55C \uC801\uC774 \uC788\uB098\uC694? \uD398\uC774\uC9C0\uB97C \uC544\uB798\uB85C \uC2A4\uD06C\uB864\uD560 \uB54C URL \uBC14\uAC00 \uC0AC\uB77C\uC9C0\uACE0, \uB2E4\uC2DC \uC704\uB85C \uC2A4\uD06C\uB864\uD558\uBA74 \uB098\uD0C0\uB0A9\uB2C8\uB2E4. URL \uBC14\uC758 \uC720\uBB34\uC5D0 \uB530\uB77C \uBDF0\uD3EC\uD2B8 \uD06C\uAE30\uAC00 \uBCC0\uACBD\uB418\uBA70, \uB54C\uB85C\uB294 \uC694\uC18C\uC758 \uD06C\uAE30\uB97C \uC57D\uAC04 \uC870\uC815\uD574\uC57C \uD560 \uD544\uC694\uAC00 \uC788\uC2B5\uB2C8\uB2E4.",-1),A=s("p",null,"\uC5EC\uAE30\uC11C s, l \uBC0F d \uBDF0\uD3EC\uD2B8 \uC218\uC815\uC790\uAC00 \uAD6C\uCD9C\uD569\uB2C8\uB2E4.",-1),F=s("ul",null,[s("li",null,"s: \uC774\uAC83\uC740 \uC791\uC740 \uBDF0\uD3EC\uD2B8 \uC218\uC815\uC790\uC785\uB2C8\uB2E4. URL \uBC14\uAC00 \uD45C\uC2DC\uB420 \uB54C \uBDF0\uD3EC\uD2B8\uC758 \uD06C\uAE30\uC785\uB2C8\uB2E4."),s("li",null,"l: \uC774\uAC83\uC740 \uD070 \uBDF0\uD3EC\uD2B8 \uC218\uC815\uC790\uC785\uB2C8\uB2E4. URL \uBC14\uAC00 \uC228\uACA8\uC9C4 \uC0C1\uD0DC\uC758 \uBDF0\uD3EC\uD2B8 \uD06C\uAE30\uC785\uB2C8\uB2E4."),s("li",null,"d: \uC774\uAC83\uC740 \uB3D9\uC801 \uBDF0\uD3EC\uD2B8 \uC218\uC815\uC790\uC785\uB2C8\uB2E4. URL \uBC14\uC758 \uD45C\uC2DC \uC5EC\uBD80\uC5D0 \uB530\uB77C \uBCC0\uD558\uB294 \uD604\uC7AC \uBDF0\uD3EC\uD2B8\uC758 \uD06C\uAE30\uC785\uB2C8\uB2E4.")],-1),H=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),I=l(`<p>\uAE30\uC874 viewport CSS \uB2E8\uC704\uC5D0 \uC774 \uC218\uC815 \uC0AC\uD56D\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC5B4\uC694:</p><p>s, l \uBC0F d \uC218\uC815\uC790\uB97C \uC870\uD569\uD558\uC5EC \uCD1D 24\uAC1C\uC758 viewport CSS \uB2E8\uC704\uB97C \uC5BB\uC744 \uC218 \uC788\uC5B4\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>container<span class="token operator">-</span>small <span class="token punctuation">{</span>
    <span class="token comment">/* URL \uBC14\uAC00 \uD45C\uC2DC\uB420 \uB54C \uD654\uBA74 \uB192\uC774\uC758 100vh\uC640 \uB3D9\uC77C\uD568 */</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100svh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>container<span class="token operator">-</span>large <span class="token punctuation">{</span>
    <span class="token comment">/* URL \uBC14\uAC00 \uC228\uACA8\uC9C4 \uC0C1\uD0DC\uC5D0\uC11C \uD654\uBA74 \uB192\uC774\uC758 100vh\uC640 \uB3D9\uC77C\uD568 */</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100lvh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>container<span class="token operator">-</span>dynamic <span class="token punctuation">{</span>
    <span class="token comment">/* URL \uBC14 \uD45C\uC2DC \uC5EC\uBD80\uC640 \uC0C1\uAD00\uC5C6\uC774 \uD654\uBA74 \uB192\uC774\uC758 100vh\uC640 \uB3D9\uC77C\uD568 */</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100dvh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u110B\u116D\u110B\u1163\u11A8" tabindex="-1"><a class="header-anchor" href="#\u110B\u116D\u110B\u1163\u11A8" aria-hidden="true">#</a> \uC694\uC57D</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),J=s("p",null,"\uBDF0\uD3EC\uD2B8 CSS \uB2E8\uC704\uB294 \uBC18\uC751\uD615 \uB514\uC790\uC778\uC744 \uAC1C\uBC1C\uD558\uB294 \uB370 \uD0C1\uC6D4\uD55C \uB3C4\uAD6C\uC785\uB2C8\uB2E4. \uB808\uC774\uC544\uC6C3, \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C \uBC0F \uAC04\uACA9\uC758 \uC720\uB3D9\uC801\uC778 \uD655\uB300/\uCD95\uC18C\uB97C \uD5C8\uC6A9\uD558\uC5EC \uC6F9 \uCF58\uD150\uCE20\uAC00 \uC5B4\uB290 \uD654\uBA74 \uD06C\uAE30\uC5D0\uC11C\uB4E0 \uC798 \uBCF4\uC774\uACE0 \uC798 \uC791\uB3D9\uD558\uB3C4\uB85D \uBCF4\uC7A5\uD569\uB2C8\uB2E4.",-1),O=s("p",null,"vw, vh, vmin \uBC0F vmax\uC640 \uAC19\uC740 \uBDF0\uD3EC\uD2B8 \uB2E8\uC704\uAC00 \uAC00\uC7A5 \uC77C\uBC18\uC801\uC73C\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB9E4\uC6B0 \uC791\uACE0 \uB9E4\uC6B0 \uD070 \uD654\uBA74 \uD06C\uAE30\uC5D0\uC11C \uC694\uC18C\uC758 \uCD5C\uC18C \uBC0F \uCD5C\uB300 \uD06C\uAE30\uB97C \uC81C\uD55C\uD558\uB294 clamp() \uD568\uC218 \uC0AC\uC6A9\uC744 \uACE0\uB824\uD574\uBCF4\uC138\uC694.",-1),P=s("p",null,"vi, vb\uC640 \uBDF0\uD3EC\uD2B8 \uC218\uC815\uC790 s, l, d\uC640 \uAC19\uC740 \uBDF0\uD3EC\uD2B8 \uB2E8\uC704\uB294 \uD2B9\uC815\uD55C \uC0AC\uC6A9 \uC0AC\uB840\uC5D0 \uC0AC\uC6A9\uB418\uC9C0\uB9CC \uC6F9 \uAC1C\uBC1C\uC790\uC758 \uB3C4\uAD6C\uC0C1\uC790\uC5D0 \uD6CC\uB96D\uD55C \uCD94\uAC00 \uC694\uC18C\uC785\uB2C8\uB2E4.",-1),Q=s("p",null,"\uC774 \uBE14\uB85C\uADF8 \uAE00\uC774 \uC720\uC775\uD558\uAC8C \uC0AC\uC6A9\uB418\uAE30\uB97C \uBC14\uB77C\uBA70. \uC990\uAC70\uC6B4 \uCF54\uB529\uD558\uC138\uC694!",-1),W=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function X(Z,$){return a(),i("div",null,[b,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,h,y,_,w,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,n(" ``` "),x,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S,U,C,R,V,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),L,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),q,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),D,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),z,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),N,E,G,K,M,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),T,Y,A,F,H,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),I,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),J,O,P,Q,W,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var ls=o(g,[["render",X],["__file","index.html.vue"]]);export{ls as default};
