import{_ as p}from"./app.3052dcfb.js";import{l as n,m as i,E as e,G as t,p as a,Y as o,C as s,K as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/5Next-levelCSSTrickstoEnhanceYourWebDesign_0.40053663.png",d="/assets/5Next-levelCSSTrickstoEnhanceYourWebDesign_1.45107cf6.png",r="/assets/5Next-levelCSSTrickstoEnhanceYourWebDesign_2.abc71fa9.png",u="/assets/5Next-levelCSSTrickstoEnhanceYourWebDesign_3.40ebc4b9.png",v="/assets/5Next-levelCSSTrickstoEnhanceYourWebDesign_4.623e5650.png",g="/assets/5Next-levelCSSTrickstoEnhanceYourWebDesign_5.bc0f76f3.png";const b={},m=s("img",{src:c},null,-1),k=s("p",null,"CSS(Cascading Style Sheets)\uC740 \uAC1C\uBC1C\uC790\uB4E4\uC774 \uBA4B\uC9C4 \uC6F9 \uD398\uC774\uC9C0\uB97C \uB514\uC790\uC778\uD560 \uC218 \uC788\uB3C4\uB85D \uD574\uC8FC\uB294 \uAC15\uB825\uD55C \uB3C4\uAD6C\uC785\uB2C8\uB2E4. \uC774 \uAE30\uC0AC\uC5D0\uC11C\uB294 \uC6F9 \uB514\uC790\uC778 \uAE30\uC220\uC744 \uD55C \uB2E8\uACC4 \uB354 \uBC1C\uC804\uC2DC\uD0AC \uC218 \uC788\uB294 5\uAC00\uC9C0 CSS \uD2B8\uB9AD\uC744 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),h=s("h1",{id:"_1-css\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-html-\u1109\u1169\u11A8\u1109\u1165\u11BC-\u1100\u1161\u11B9-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-css\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-html-\u1109\u1169\u11A8\u1109\u1165\u11BC-\u1100\u1161\u11B9-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175","aria-hidden":"true"},"#"),a(" 1. CSS\uB97C \uC0AC\uC6A9\uD558\uC5EC HTML \uC18D\uC131 \uAC12 \uAC00\uC838\uC624\uAE30")],-1),_=s("p",null,"CSS\uC758 attr() \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC2A4\uD0C0\uC77C \uC2DC\uD2B8 \uB0B4\uC5D0\uC11C HTML \uC18D\uC131\uC758 \uAC12\uC744 \uAC80\uC0C9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uC608\uC81C\uC5D0\uC11C \uB098\uB294 attr() \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC ::after \uC758 \uAC00\uC0C1 \uD074\uB798\uC2A4\uC758 span HTML \uC694\uC18C\uC758 \uB370\uC774\uD130-\uAC12 \uC18D\uC131\uC744 \uC774\uC6A9\uD558\uC5EC \uD14D\uC2A4\uD2B8 \uB0B4\uC6A9\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",-1),y=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),S=l(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#counter::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 CSS \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uBA74 JS\uAC00 HTML \uC694\uC18C\uC758 \uD14D\uC2A4\uD2B8 \uB0B4\uC6A9\uC744 \uC9C1\uC811 \uC870\uC791\uD558\uC9C0 \uC54A\uACE0 \uAC12 \uBCC0\uACBD\uC744 \uC27D\uAC8C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uCF54\uB4DC\uB97C \uC2E4\uC81C\uB85C \uD655\uC778\uD558\uB824\uBA74 \uC774 CodePen \uC608\uC2DC\uB97C \uC0B4\uD3B4\uBCF4\uC138\uC694.</p><h1 id="_2-css\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-\u110F\u1173\u1100\u1175-\u110C\u1169\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-css\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-\u110F\u1173\u1100\u1175-\u110C\u1169\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2. CSS\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD06C\uAE30 \uC870\uC815\uD558\uAE30</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=l(`<p>CSS\uC758 resize \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC0AC\uC6A9\uC790\uAC00 \uD14D\uC2A4\uD2B8 \uC601\uC5ED HTML \uC694\uC18C\uC640 \uAC19\uC740 \uD06C\uAE30 \uC870\uC808 \uCEE8\uD2B8\uB864\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC694\uC18C\uC758 \uB108\uBE44\uC640 \uB192\uC774\uB97C \uB3D9\uC801\uC73C\uB85C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC218\uD3C9, \uC218\uC9C1 \uB610\uB294 \uC591\uCABD\uC73C\uB85C \uC870\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.resize</span><span class="token punctuation">{</span>
  <span class="token property">resize</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uBE60\uB978 \uB370\uBAA8\uB97C \uD655\uC778\uD558\uB824\uBA74 \uC544\uB798 CodePen\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694.</p><h1 id="_3-css\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-\u110C\u1173\u11BC\u1100\u1161" tabindex="-1"><a class="header-anchor" href="#_3-css\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-\u110C\u1173\u11BC\u1100\u1161" aria-hidden="true">#</a> 3. CSS\uB97C \uC0AC\uC6A9\uD55C \uC99D\uAC00</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),x=l(`<p>CSS \uCE74\uC6B4\uD130 \uAE30\uB2A5\uC740 \uC22B\uC790 \uAC12\uC744 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uD558\uACE0 \uD45C\uC2DC\uD558\uC5EC \uAC1C\uBC1C\uC790\uAC00 \uBA85\uC2DC\uC801\uC73C\uB85C \uC81C\uACF5\uD574\uC57C \uD558\uB294 \uD544\uC694\uC131\uC744 \uC81C\uAC70\uD569\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 counter-reset, counter-increment \uBC0F counter() \uD568\uC218\uB77C\uB294 3\uAC00\uC9C0 CSS \uC18D\uC131\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.</p><ul><li>counter-reset \u2014 \uC0C8\uB85C\uC6B4 \uCE74\uC6B4\uD130\uB97C \uB9CC\uB4E4\uAC70\uB098 \uD604\uC7AC \uCE74\uC6B4\uD130\uB97C \uC7AC\uC124\uC815\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC73C\uB85C 0\uC73C\uB85C \uD560\uB2F9\uB429\uB2C8\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>counter<span class="token operator">-</span>reset<span class="token operator">:</span> item<span class="token operator">-</span>counter<span class="token punctuation">;</span> <span class="token comment">/* \uBCC0\uC218 \uC774\uB984\uCC98\uB7FC */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uCE74\uC6B4\uD130\uC758 \uC2DC\uC791 \uBC88\uD638\uB97C \uC124\uC815\uD558\uB824\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),w=l('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>counter<span class="token operator">-</span>reset<span class="token operator">:</span> item<span class="token operator">-</span>counter <span class="token number">5</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>counter-increment \u2014 \uD604\uC7AC \uCE74\uC6B4\uD130\uB97C \uC99D\uAC00\uC2DC\uD0B5\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC73C\uB85C 1\uC529 \uC99D\uAC00\uD569\uB2C8\uB2E4.</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>counter<span class="token operator">-</span>increment<span class="token operator">:</span> item<span class="token operator">-</span>counter\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uD604\uC7AC \uCE74\uC6B4\uD130\uB97C \uD2B9\uC815 \uC22B\uC790\uB9CC\uD07C \uC99D\uAC00\uC2DC\uD0A4\uACE0 \uC2F6\uB2E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.```</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),C=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> counter<span class="token operator">-</span>increment<span class="token operator">:</span> item<span class="token operator">-</span>counter <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>counter(): \uD604\uC7AC \uCE74\uC6B4\uD130\uC758 \uAC12\uC744 \uAC80\uC0C9\uD569\uB2C8\uB2E4</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;Item &quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>item<span class="token operator">-</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774 CodePen\uC740 \uC544\uB798 div\uC5D0 \uC790\uB3D9\uC73C\uB85C h1 \uC694\uC18C\uB97C \uCD94\uAC00\uD558\uB294 \uBC29\uBC95\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. CSS\uB294 \uAC01 h1 \uD0DC\uADF8 \uC55E\uC5D0 \uC22B\uC790\uB97C \uC790\uB3D9\uC73C\uB85C \uCD94\uAC00\uD558\uC5EC \uC218\uB3D9\uC73C\uB85C \uAC1C\uBC1C\uC790 \uC785\uB825\uC774\uB098 JS \uC0AC\uC6A9\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uD6E8\uC52C \uAE54\uB054\uD55C \uCF54\uB4DC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),j=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>\uD1A0\uD53C<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt="\uB2E4\uC74C \uC218\uC900 CSS \uAE30\uC220\uB85C \uC6F9 \uB514\uC790\uC778 \uD5A5\uC0C1\uC2DC\uD0A4\uAE30"></p><p>\uC544\uB798 CodePen\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694.</p><h1 id="_4-css\u1106\u1161\u11AB-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-\u110B\u1175\u1106\u1175\u110C\u1175\u110B\u1174-\u1107\u1162\u1100\u1167\u11BC-\u110C\u1166\u1100\u1165\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_4-css\u1106\u1161\u11AB-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-\u110B\u1175\u1106\u1175\u110C\u1175\u110B\u1174-\u1107\u1162\u1100\u1167\u11BC-\u110C\u1166\u1100\u1165\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 4. CSS\uB9CC \uC0AC\uC6A9\uD558\uC5EC \uC774\uBBF8\uC9C0\uC758 \uBC30\uACBD \uC81C\uAC70\uD558\uAE30</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),T=s("p",null,"\uC774\uB97C \uC704\uD574 mix-blend-mode CSS \uC18D\uC131\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uC774\uC6A9\uD558\uC5EC \uC694\uC18C\uC758 \uCF58\uD150\uCE20\uAC00 \uBD80\uBAA8 \uC694\uC18C\uC640 \uBC30\uACBD\uACFC \uC5B4\uB5BB\uAC8C \uD63C\uD569\uB418\uC5B4\uC57C \uD558\uB294\uC9C0 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 img \uC694\uC18C\uC785\uB2C8\uB2E4.",-1),N=s("p",null,"\uC5EC\uAE30\uC11C \uB450 \uAC1C\uC758 \uC774\uBBF8\uC9C0\uB97C \uC0AC\uC6A9\uD588\uC2B5\uB2C8\uB2E4: \uD558\uB098\uB294 \uC0C9\uC774 \uCE60\uD574\uC9C4 \uC774\uBBF8\uC9C0\uC774\uACE0, \uB2E4\uB978 \uD558\uB098\uB294 \uAC80\uC740 \uC0C9\uC778 \uC774\uBBF8\uC9C0\uC774\uBA70, \uB450 \uC774\uBBF8\uC9C0 \uBAA8\uB450 \uD770 \uBC30\uACBD\uC744 \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4. CSS\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uBBF8\uC9C0\uC758 \uBC30\uACBD\uC744 \uC81C\uAC70\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4. \uC5B4\uB5A4 \uC774\uBBF8\uC9C0 \uD3B8\uC9D1 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB3C4 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uACE0\uC694.",-1),q=s("p",null,[s("img",{src:r,alt:"image"})],-1),E=s("p",null,"\uC0C9\uC774 \uCE60\uD574\uC9C4 \uC774\uBBF8\uC9C0\uB85C\uBD80\uD130 \uD770 \uBC30\uACBD\uC744 \uC81C\uAC70\uD558\uB824\uBA74 mix-blend-mode CSS \uC18D\uC131\uC744 multiply \uAC12\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB450 \uB808\uC774\uC5B4\uC758 \uC0C9\uC774 \uAC12\uC744 \uACF1\uD574\uC11C \uD63C\uD569\uB418\uC5B4 \uB354 \uC5B4\uB461\uACE0 \uD63C\uD569\uB41C \uBAA8\uC2B5\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC774\uB294 \uC0C9\uC774 \uCE60\uD574\uC9C4 \uC774\uBBF8\uC9C0\uC5D0\uC11C \uD770 \uBC30\uACBD\uC744 \uC81C\uAC70\uD560 \uB54C \uC720\uC6A9\uD558\uBA70, \uD770 \uBD80\uBD84\uC774 \uD22C\uBA85\uD574\uC838\uC11C \uAE30\uC874 \uBC30\uACBD\uC774 \uB098\uD0C0\uB0A9\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uC774\uBBF8\uC9C0\uAC00 \uC57D\uAC04 \uC5B4\uB450\uC6CC\uC9C0\uB294 \uD6A8\uACFC\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),P=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),D=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>blend<span class="token operator">-</span>multiply<span class="token punctuation">{</span>
  mix<span class="token operator">-</span>blend<span class="token operator">-</span>mode<span class="token operator">:</span>multiply<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD770\uC0C9 \uBC30\uACBD\uC744 \uAC80\uC740 \uC774\uBBF8\uC9C0\uC5D0\uC11C \uC81C\uAC70\uD558\uB824\uBA74 mix-blend-mode CSS \uC18D\uC131\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC12\uC73C\uB85C color-burn\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774 \uC18D\uC131\uC740 \uC694\uC18C\uC758 \uC0C9\uC0C1\uC744 \uBC30\uACBD\uACFC \uD63C\uD569\uD558\uC5EC \uC5B4\uB461\uAC8C \uB9CC\uB4DC\uB294 \uD6A8\uACFC\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4. \uC774 \uBC29\uBC95\uC740 \uC5B4\uB450\uC6B4 \uC601\uC5ED\uC744 \uAC15\uC870\uD558\uC5EC \uD654\uC0C1 \uB610\uB294 \uADF8\uB9BC\uC790 \uBAA8\uC591\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uACBD\uC6B0\uC5D0 \uC0AC\uC6A9\uD558\uAE30\uC5D0 \uC644\uBCBD\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>burn<span class="token operator">-</span>color<span class="token punctuation">{</span>
  mix<span class="token operator">-</span>blend<span class="token operator">-</span>mode<span class="token operator">:</span>color<span class="token operator">-</span>burn<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS\uB97C \uC801\uC6A9\uD55C \uD6C4 \uCD5C\uC885 \uACB0\uACFC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),Y=s("p",null,[s("img",{src:u,alt:"\uC774\uBBF8\uC9C0"})],-1),W=s("p",null,"\uC544\uB798 CodePen\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694.",-1),H=s("h2",{id:"_5-\u1111\u1175\u11AF\u110B\u116D\u1112\u1161\u11AB-\u1100\u1169\u11BA\u110B\u1166\u1106\u1161\u11AB-\u1100\u1173\u1105\u1175\u11B7\u110C\u1161-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_5-\u1111\u1175\u11AF\u110B\u116D\u1112\u1161\u11AB-\u1100\u1169\u11BA\u110B\u1166\u1106\u1161\u11AB-\u1100\u1173\u1105\u1175\u11B7\u110C\u1161-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),a(" 5. \uD544\uC694\uD55C \uACF3\uC5D0\uB9CC \uADF8\uB9BC\uC790 \uCD94\uAC00\uD558\uAE30")],-1),L=s("p",null,"\uC694\uC18C\uC5D0 \uADF8\uB9BC\uC790\uB97C \uCD94\uAC00\uD558\uB824\uBA74 \uC77C\uBC18\uC801\uC73C\uB85C CSS \uC18D\uC131 box-shadow\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774 \uC18D\uC131\uC740 \uC694\uC18C \uC8FC\uBCC0\uC5D0 \uADF8\uB9BC\uC790\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4. \uD22C\uBA85 \uBC30\uACBD\uC744 \uAC00\uC9C4 PNG \uC774\uBBF8\uC9C0\uC5D0 box-shadow \uC18D\uC131\uC744 \uCD94\uAC00\uD558\uBA74 \uC5EC\uC804\uD788 \uC774\uBBF8\uC9C0 \uC8FC\uBCC0\uC5D0 \uC815\uC0AC\uAC01\uD615 \uBAA8\uC591\uC758 \uBC30\uACBD\uC774 \uB098\uD0C0\uB0A9\uB2C8\uB2E4.",-1),M=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),B=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>img <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 250px<span class="token punctuation">;</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span> 15px 15px 15px #<span class="token number">555</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+v+`"><p>\uD558\uC9C0\uB9CC box-shadow \uB300\uC2E0 drop-shadow() CSS \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC filter CSS \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uBA74 PNG\uC758 \uD22C\uBA85 \uBC30\uACBD\uC744 \uD3EC\uD568\uD558\uC9C0 \uC54A\uACE0 \uC2E4\uC81C \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0\uB9CC \uADF8\uB9BC\uC790\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>img <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 250px<span class="token punctuation">;</span>
  <span class="token literal-property property">filter</span><span class="token operator">:</span> drop<span class="token operator">-</span><span class="token function">shadow</span><span class="token punctuation">(</span>15px 15px 15px #<span class="token number">555</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),z=s("p",null,"\uCD5C\uC885 \uACB0\uACFC\uB294 \uC774\uB807\uAC8C \uBCF4\uC785\uB2C8\uB2E4.",-1),G=s("img",{src:g},null,-1),V=s("p",null,"\uC544\uB798 CodePen\uB3C4 \uAF2D \uD655\uC778\uD558\uC9C0 \uC54A\uB3C4\uB85D\uD574\uC694!",-1),J=s("p",null,"\uADF8\uB798\uC11C \uC5EC\uAE30\uC5D0 5\uAC00\uC9C0\uC758 \uCD5C\uC0C1\uC704 CSS \uC694\uB839\uC774 \uC788\uC5B4\uC694. \uAC01 \uC694\uB839\uC740 \uB3C5\uD2B9\uD55C \uD130\uCE58\uB97C \uB354\uD574\uC8FC\uAE30 \uB54C\uBB38\uC5D0, \uC790\uC720\uB86D\uAC8C \uACB0\uD569\uD558\uC5EC \uBA4B\uC9C4 \uC6F9 \uB514\uC790\uC778\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694.",-1),I=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),K=s("p",null,"\uB9CC\uC57D \uC5EC\uB7EC\uBD84\uC774 \uBA4B\uC9C4 \uC6F9 \uB514\uC790\uC778\uC744 \uB9CC\uB4E4\uAE30 \uC704\uD55C \uB354 \uB9CE\uC740 CSS \uC694\uB839\uC744 \uC6D0\uD558\uC2E0\uB2E4\uBA74, \uC774 \uAE30\uC0AC\uC758 \uD6C4\uC18D\uD3B8\uC744 \uB193\uCE58\uC9C0 \uB9C8\uC138\uC694!",-1),A=s("p",null,"\uC990\uAC70\uC6B4 \uCF54\uB529\uD558\uC138\uC694!!!",-1);function F(O,Q){return n(),i("div",null,[m,k,h,_,y,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),C,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),T,N,q,E,P,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),D,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Y,W,H,L,M,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),z,G,V,J,I,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),K,A])}var as=p(b,[["render",F],["__file","index.html.vue"]]);export{as as default};
