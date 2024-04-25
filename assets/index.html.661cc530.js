import{_ as i}from"./app.3052dcfb.js";import{l as n,m as p,E as e,G as t,p as a,Y as o,C as s,K as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var d="/assets/OptimizingImageHandlinginNextjswiththeImageComponent_0.7ec24866.png";const c={},r=s("p",null,[s("img",{src:d,alt:"OptimizingImageHandlinginNextjswiththeImageComponent_0"})],-1),u=s("p",null,[a("\uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC1C\uBC1C\uD560 \uB54C \uC774\uBBF8\uC9C0\uB97C \uD6A8\uC728\uC801\uC73C\uB85C \uAD00\uB9AC\uD558\uB294 \uAC83\uC774 \uC131\uB2A5\uACFC \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC5D0 \uC911\uC694\uD569\uB2C8\uB2E4. Next.js\uB294 "),s("code",null,"Image"),a(" \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD1B5\uD574 \uC774 \uD504\uB85C\uC138\uC2A4\uB97C \uAC04\uC18C\uD654\uD560 \uC218 \uC788\uB294 \uAC15\uB825\uD55C \uC194\uB8E8\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC804\uD1B5\uC801\uC778 HTML "),s("code",null,"img"),a(" \uD0DC\uADF8\uC758 \uAE30\uB2A5\uC744 \uD655\uC7A5\uD558\uACE0 \uC5EC\uB7EC \uAC00\uC9C0 \uCD5C\uC801\uD654\uC640 \uAC1C\uC120 \uC0AC\uD56D\uC744 \uB3C4\uC785\uD569\uB2C8\uB2E4.")],-1),k=s("h1",{id:"\u110B\u1175\u1106\u1175\u110C\u1175-\u110E\u116C\u110C\u1165\u11A8\u1112\u116A\u110B\u1174-\u1111\u1175\u11AF\u110B\u116D\u1109\u1165\u11BC",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u110B\u1175\u1106\u1175\u110C\u1175-\u110E\u116C\u110C\u1165\u11A8\u1112\u116A\u110B\u1174-\u1111\u1175\u11AF\u110B\u116D\u1109\u1165\u11BC","aria-hidden":"true"},"#"),a(" \uC774\uBBF8\uC9C0 \uCD5C\uC801\uD654\uC758 \uD544\uC694\uC131")],-1),m=s("p",null,"\uC804\uD615\uC801\uC778 Next.js \uD658\uACBD\uC5D0\uC11C \uC774\uBBF8\uC9C0\uC640 \uAC19\uC740 \uC815\uC801 \uC790\uC0B0\uC740 \uCD5C\uC0C1\uC704 /public \uB514\uB809\uD1A0\uB9AC\uC5D0 \uC800\uC7A5\uB418\uC5B4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC804\uBC18\uC5D0 \uAC78\uCCD0 \uC27D\uAC8C \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD45C\uC900 HTML\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD3EC\uD568\uB429\uB2C8\uB2E4:",-1),g=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=l('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;/kitty.png&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;A cute kitten sitting on a desk&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uC774\uBBF8\uC9C0\uB97C \uAD00\uB9AC\uD558\uB294 \uAC83\uC740 \uC218\uB3D9\uC73C\uB85C \uB2E4\uC74C\uC744 \uD574\uC57C \uD569\uB2C8\uB2E4:</p><ul><li>\uC774\uBBF8\uC9C0\uB97C \uB2E4\uC591\uD55C \uD654\uBA74 \uD06C\uAE30\uC5D0 \uB9DE\uCD94\uAE30</li><li>\uB2E4\uB978 \uAE30\uAE30\uC5D0 \uB300\uD55C \uC774\uBBF8\uC9C0 \uD06C\uAE30 \uC815\uC758</li><li>\uC774\uBBF8\uC9C0 \uB85C\uB4DC \uC911 \uCEE8\uD150\uCE20 \uC774\uB3D9 \uBC29\uC9C0</li><li>\uBDF0\uD3EC\uD2B8\uC5D0 \uBC14\uB85C \uBCF4\uC774\uC9C0 \uC54A\uB294 \uC774\uBBF8\uC9C0\uC5D0 \uB300\uD574 \uB808\uC774\uC9C0 \uB85C\uB529 \uAD6C\uD604</li></ul><p>\uC774\uBBF8\uC9C0 \uCD5C\uC801\uD654 \uACE0\uB824\uB294 \uC6F9 \uAC1C\uBC1C\uC758 \uC911\uC694\uD55C \uCE21\uBA74\uC774\uBBC0\uB85C \uC774\uB7EC\uD55C \uD504\uB85C\uC138\uC2A4\uB97C \uC790\uB3D9\uD654\uD558\uB294 \uAC83\uC774 \uD6A8\uC728\uC131\uACFC \uC131\uB2A5\uC744 \uD06C\uAC8C \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.```</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),v=l('<h1 id="\u1112\u1163\u11BC\u1109\u1161\u11BC\u1103\u116C\u11AB-image-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1112\u1163\u11BC\u1109\u1161\u11BC\u1103\u116C\u11AB-image-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173" aria-hidden="true">#</a> \uD5A5\uC0C1\uB41C <code>&lt;Image&gt;</code> \uCEF4\uD3EC\uB10C\uD2B8</h1><p>Next.js\uC758 <code>Image</code> \uBAA8\uB4C8\uC740 <code>img</code>\uB97C \uB300\uCCB4\uD558\uB294 \uAC83\uBFD0\uB9CC \uC544\uB2C8\uB77C \uC790\uB3D9 \uC774\uBBF8\uC9C0 \uCC98\uB9AC\uB97C \uC81C\uACF5\uD558\uB294 \uAC1C\uC120 \uC0AC\uD56D\uC785\uB2C8\uB2E4. \uC774\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uAE30\uB2A5\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4:</p><ul><li>\uC774\uBBF8\uC9C0 \uB85C\uB529\uC2DC \uB808\uC774\uC544\uC6C3\uC744 \uC790\uB3D9\uC73C\uB85C \uC548\uC815\uD654\uD558\uC5EC \uCF58\uD150\uCE20 \uC774\uB3D9\uC744 \uBC29\uC9C0\uD569\uB2C8\uB2E4.</li><li>\uC774\uBBF8\uC9C0 \uD06C\uAE30\uB97C \uBDF0\uC5B4 \uB514\uBC14\uC774\uC2A4\uC5D0 \uB9DE\uAC8C \uC870\uC815\uD558\uC5EC \uBD88\uD544\uC694\uD55C \uB370\uC774\uD130 \uC804\uC1A1\uC744 \uC904\uC785\uB2C8\uB2E4.</li><li>\uC774\uBBF8\uC9C0\uB97C \uD544\uC694\uD55C \uC2DC\uC810\uC5D0\uB9CC \uB85C\uB4DC\uD558\uB3C4\uB85D \uD558\uB294 \uAE30\uBCF8\uC801\uC778 \uB808\uC774\uC9C0 \uB85C\uB529\uC744 \uC81C\uACF5\uD558\uC5EC \uBDF0\uD3EC\uD2B8\uC5D0\uC11C\uB9CC \uC774\uBBF8\uC9C0\uAC00 \uD45C\uC2DC\uB420 \uB54C\uC5D0\uB9CC \uB85C\uB4DC\uD569\uB2C8\uB2E4.</li><li>\uBE0C\uB77C\uC6B0\uC800\uAC00 \uD574\uB2F9 \uD615\uC2DD\uC744 \uC9C0\uC6D0\uD560 \uB54C WebP \uBC0F AVIF \uAC19\uC740 \uACE0\uAE09 \uD615\uC2DD\uC758 \uC774\uBBF8\uC9C0\uB97C \uC81C\uACF5\uD558\uC5EC \uB85C\uB529 \uC2DC\uAC04\uACFC \uB300\uC5ED\uD3ED \uC0AC\uC6A9\uC744 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4.</li></ul><h1 id="image-\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u110B\u1175\u1106\u1175\u110C\u1175-\u1100\u116E\u1112\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#image-\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u110B\u1175\u1106\u1175\u110C\u1175-\u1100\u116E\u1112\u1167\u11AB" aria-hidden="true">#</a> <code>&lt;Image&gt;</code>\uB97C \uC0AC\uC6A9\uD55C \uBC18\uC751\uD615 \uC774\uBBF8\uC9C0 \uAD6C\uD604</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),h=l(`<p>\uC774\uBBF8\uC9C0 \uBAA8\uB4C8\uC744 \uD6A8\uACFC\uC801\uC73C\uB85C \uBC30\uD3EC\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBD05\uC2DC\uB2E4. \uB370\uC2A4\uD06C\uD1B1 \uBC0F \uBAA8\uBC14\uC77C \uD654\uBA74\uC744 \uC704\uD55C \uAD6C\uBCC4\uB41C \uC774\uBBF8\uC9C0(kitty-desktop.png \uBC0F kitty-mobile.png)\uAC00 \uC788\uB2E4\uACE0 \uAC00\uC815\uD558\uACE0 \uB2E4\uC74C\uACFC \uAC19\uC774 \uAD6C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">&#39;next/image&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ResponsiveKittyImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;flex flex-col items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12&quot;</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/* \uB370\uC2A4\uD06C\uD1B1 \uD654\uBA74\uC6A9 \uC774\uBBF8\uC9C0 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Image
        src<span class="token operator">=</span><span class="token string">&quot;/kitty-desktop.png&quot;</span>
        width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">}</span>
        height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">750</span><span class="token punctuation">}</span>
        className<span class="token operator">=</span><span class="token string">&quot;hidden md:block&quot;</span>
        alt<span class="token operator">=</span><span class="token string">&quot;\uB370\uC2A4\uD06C\uD1B1 \uD658\uACBD\uC5D0\uC11C \uB180\uB7EC\uC6B4 \uC0C8\uB07C \uACE0\uC591\uC774&quot;</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/* \uBAA8\uBC14\uC77C \uD654\uBA74\uC6A9 \uC774\uBBF8\uC9C0 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Image
        src<span class="token operator">=</span><span class="token string">&quot;/kitty-mobile.png&quot;</span>
        width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">520</span><span class="token punctuation">}</span>
        height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">550</span><span class="token punctuation">}</span>
        className<span class="token operator">=</span><span class="token string">&quot;block md:hidden&quot;</span>
        alt<span class="token operator">=</span><span class="token string">&quot;\uBAA8\uBC14\uC77C \uD654\uBA74\uC5D0\uC11C \uBCF8 \uB180\uB7EC\uC6B4 \uC0C8\uB07C \uACE0\uC591\uC774&quot;</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next.js \uD504\uB85C\uC81D\uD2B8\uC758 Page \uAD6C\uC131 \uC694\uC18C\uB294 Next.js\uC758 \uB0B4\uC7A5 \uC774\uBBF8\uC9C0 \uCD5C\uC801\uD654 \uB3C4\uAD6C\uC778 <code>Image</code> \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBC18\uC751\uD615 \uC774\uBBF8\uC9C0 \uB80C\uB354\uB9C1 \uC804\uB7B5\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uC774 \uC811\uADFC \uBC29\uC2DD\uC740 \uBDF0\uC5B4\uC758 \uAE30\uAE30 \uC720\uD615(\uB370\uC2A4\uD06C\uD1B1 \uB610\uB294 \uBAA8\uBC14\uC77C)\uC5D0 \uB530\uB77C \uC62C\uBC14\uB978 \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB418\uB3C4\uB85D \uBCF4\uC7A5\uD558\uC5EC \uC131\uB2A5\uACFC \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4. \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uBC0F \uC65C \uD6A8\uACFC\uC801\uC778\uC9C0 \uC0B4\uD3B4\uBD05\uC2DC\uB2E4:</p><h2 id="\u110B\u1175\u1106\u1175\u110C\u1175-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC-\u1107\u1161\u11BC\u1109\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u1106\u1175\u110C\u1175-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC-\u1107\u1161\u11BC\u1109\u1175\u11A8" aria-hidden="true">#</a> \uC774\uBBF8\uC9C0 \uB80C\uB354\uB9C1 \uBC29\uC2DD</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=l('<p>\uD398\uC774\uC9C0 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uB294 \uD654\uBA74 \uD06C\uAE30\uC5D0 \uB530\uB77C \uD45C\uC2DC\uB418\uB3C4\uB85D \uC124\uC815\uB41C \uB450 \uAC1C\uC758 <code>Image</code> \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li><p>\uB370\uC2A4\uD06C\uD1B1 \uC774\uBBF8\uC9C0 (/kitty-desktop.png):</p></li><li><p>\uC774 \uC774\uBBF8\uC9C0\uB294 className=&quot;hidden md:block&quot;\uC73C\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 CSS \uD074\uB798\uC2A4 \uC124\uC815\uC740 Tailwind CSS\uB77C\uB294 \uC720\uD2F8\uB9AC\uD2F0 \uC6B0\uC120 CSS \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uD65C\uC6A9\uD569\uB2C8\uB2E4. hidden \uD074\uB798\uC2A4\uB294 \uC694\uC18C\uB97C \uAE30\uBCF8\uC801\uC73C\uB85C \uC228\uAE30\uACE0, md:block\uC740 \uC911\uAC04 \uD06C\uAE30 \uC774\uC0C1\uC758 \uD654\uBA74(\uC77C\uBC18\uC801\uC73C\uB85C 768\uD53D\uC140\uBCF4\uB2E4 \uB113\uC740 \uD0DC\uBE14\uB9BF \uBC0F \uB370\uC2A4\uD06C\uD1B1 \uD654\uBA74)\uC5D0\uC11C \uBE14\uB85D \uC694\uC18C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p></li><li><p>\uC774\uBBF8\uC9C0\uC758 \uD06C\uAE30\uB294 \uBA85\uC2DC\uC801\uC73C\uB85C width={1000} \uBC0F height={750}\uB85C \uC124\uC815\uB418\uC5B4 \uC788\uC73C\uBA70, \uC774\uBBF8\uC9C0\uAC00\uB85C\uB4DC\uB418\uB294 \uB3D9\uC548 Next.js\uAC00 \uD398\uC774\uC9C0\uC5D0\uC11C \uACF5\uAC04\uC744 \uC608\uC57D\uD558\uC5EC \uB808\uC774\uC544\uC6C3 \uC774\uB3D9\uC744 \uBC29\uC9C0\uD569\uB2C8\uB2E4.</p></li></ul><ol start="2"><li>\uBAA8\uBC14\uC77C \uC774\uBBF8\uC9C0 (/kitty-mobile.png):</li></ol><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',4),_=l('<ul><li>\uC774 \uC774\uBBF8\uC9C0\uB294 className=&quot;block md:hidden&quot;\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC791\uC740 \uD654\uBA74\uC5D0\uB294 \uBCF4\uC774\uBA70(block), \uC911\uAC04 \uB610\uB294 \uD070 \uD654\uBA74\uC5D0\uC11C\uB294 \uC228\uACA8\uC9D1\uB2C8\uB2E4(md:hidden). \uC774\uB294 \uBAA8\uBC14\uC77C \uAE30\uAE30\uB97C \uC704\uD55C \uAE30\uBCF8 \uC120\uD0DD \uC0AC\uD56D\uC785\uB2C8\uB2E4.</li><li>\uB354 \uC791\uC740 \uD654\uBA74\uC5D0 \uC801\uD569\uD558\uB3C4\uB85D \uB108\uBE44={520}\uC640 \uB192\uC774={550}\uC758 \uACE0\uC720\uD55C \uD06C\uAE30 \uC124\uC815\uC774 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><h1 id="\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u110F\u1169\u11AB\u1110\u1166\u11AB\u110E\u1173-\u110C\u1165\u11AB\u1103\u1161\u11AF\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7\u110B\u1175-\u110C\u1161\u11BC\u110E\u1175-\u110B\u1172\u1112\u1167\u11BC\u110B\u1173\u11AF-\u110B\u1175\u11AB\u1109\u1175\u11A8\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u110F\u1169\u11AB\u1110\u1166\u11AB\u110E\u1173-\u110C\u1165\u11AB\u1103\u1161\u11AF\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7\u110B\u1175-\u110C\u1161\u11BC\u110E\u1175-\u110B\u1172\u1112\u1167\u11BC\u110B\u1173\u11AF-\u110B\u1175\u11AB\u1109\u1175\u11A8\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uBC18\uC751\uD615 \uCF58\uD150\uCE20 \uC804\uB2EC\uC744 \uC704\uD55C \uC2DC\uC2A4\uD15C\uC774 \uC7A5\uCE58 \uC720\uD615\uC744 \uC778\uC2DD\uD558\uB294 \uBC29\uBC95</h1><p>\uC2DC\uC2A4\uD15C\uC774 \uC5B4\uB5BB\uAC8C \uC7A5\uCE58 \uC720\uD615\uC744 \uC778\uC2DD\uD558\uACE0 CSS \uBBF8\uB514\uC5B4 \uCFFC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC5B4\uB5A4 \uC774\uBBF8\uC9C0\uB97C \uB80C\uB354\uB9C1\uD560\uC9C0 \uACB0\uC815\uD558\uB294\uC9C0, Tailwind CSS\uAC00 \uD544\uC694\uD55C\uC9C0 \uC5EC\uBD80 \uB610\uB294 \uB2E4\uB978 CSS \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294\uC9C0\uC5D0 \uB300\uD574 \uB354 \uC790\uC138\uD788 \uC54C\uC544\uBD05\uC2DC\uB2E4.</p><h1 id="css-\u1106\u1175\u1103\u1175\u110B\u1165-\u110F\u116F\u1105\u1175\u1105\u1173\u11AF-\u1110\u1169\u11BC\u1112\u1161\u11AB-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7\u110B\u1174-\u110C\u1161\u11BC\u110E\u1175-\u110B\u1172\u1112\u1167\u11BC-\u110B\u1175\u11AB\u1109\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#css-\u1106\u1175\u1103\u1175\u110B\u1165-\u110F\u116F\u1105\u1175\u1105\u1173\u11AF-\u1110\u1169\u11BC\u1112\u1161\u11AB-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7\u110B\u1174-\u110C\u1161\u11BC\u110E\u1175-\u110B\u1172\u1112\u1167\u11BC-\u110B\u1175\u11AB\u1109\u1175\u11A8" aria-hidden="true">#</a> CSS \uBBF8\uB514\uC5B4 \uCFFC\uB9AC\uB97C \uD1B5\uD55C \uC2DC\uC2A4\uD15C\uC758 \uC7A5\uCE58 \uC720\uD615 \uC778\uC2DD</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),w=s("p",null,"CSS \uBBF8\uB514\uC5B4 \uCFFC\uB9AC: \uBBF8\uB514\uC5B4 \uCFFC\uB9AC\uB294 \uCF58\uD150\uCE20\uB97C \uB2E4\uC591\uD55C \uD654\uBA74 \uD06C\uAE30, \uBC29\uD5A5 \uBC0F \uD574\uC0C1\uB3C4\uC5D0 \uB9DE\uAC8C \uB9DE\uCD94\uB294 \uB370 \uC0AC\uC6A9\uB418\uB294 \uAE30\uBCF8\uC801\uC778 CSS \uAE30\uB2A5\uC785\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC73C\uB85C \uAE30\uAE30\uB098 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uD2B9\uC131\uC5D0 \uB530\uB77C \uC870\uAC74\uBD80\uB85C CSS \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4.",-1),S=s("p",null,"\uBBF8\uB514\uC5B4 \uCFFC\uB9AC\uC758 \uC791\uB3D9 \uBC29\uC2DD: \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C md:block \uBC0F md:hidden \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uBBF8\uC9C0\uC758 \uAC00\uC2DC\uC131\uC744 \uD654\uBA74 \uB108\uBE44\uC5D0 \uB530\uB77C \uC81C\uC5B4\uD569\uB2C8\uB2E4. \uB2E4\uC74C\uC740 \uC791\uB3D9 \uBC29\uC2DD\uC785\uB2C8\uB2E4:",-1),f=s("ul",null,[s("li",null,'md:block\uC740 "\uC911\uAC04 \uC7A5\uCE58 \uB108\uBE44\uC5D0\uC11C\uBD80\uD130 display: block;\uB97C \uC801\uC6A9\uD55C\uB2E4"\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C 768\uD53D\uC140 \uC774\uC0C1\uC758 \uD654\uBA74 \uB108\uBE44\uB97C \uB300\uC0C1\uC73C\uB85C \uD558\uBA70, \uD0DC\uBE14\uB9BF \uBC0F \uB370\uC2A4\uD06C\uD1B1\uACFC \uC8FC\uB85C \uAD00\uB828\uB429\uB2C8\uB2E4.'),s("li",null,'md:hidden\uC740 "\uC911\uAC04 \uC7A5\uCE58 \uB108\uBE44\uC5D0\uC11C\uBD80\uD130 display: none;\uB97C \uC801\uC6A9\uD55C\uB2E4"\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70, \uC774\uB85C\uC368 \uD574\uB2F9 \uD070 \uD654\uBA74\uC5D0\uC11C\uB294 \uD574\uB2F9 \uC694\uC18C\uAC00 \uBCF4\uC774\uC9C0 \uC54A\uACE0 \uC791\uC740 \uD654\uBA74\uC5D0\uC11C\uB294 \uBCF4\uC774\uAC8C \uB429\uB2C8\uB2E4.')],-1),x=s("p",null,"\uC774\uBBF8\uC9C0 \uB80C\uB354\uB9C1\uC5D0\uC11C \uBBF8\uB514\uC5B4 \uCFFC\uB9AC\uC758 \uC5ED\uD560: \uBE0C\uB77C\uC6B0\uC800\uB294 \uC774\uB7EC\uD55C \uBBF8\uB514\uC5B4 \uCFFC\uB9AC\uB97C \uD3C9\uAC00\uD558\uC5EC \uAD00\uB828\uB41C CSS \uADDC\uCE59\uC744 \uB80C\uB354\uB9C1\uD560\uC9C0 \uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4. \uBBF8\uB514\uC5B4 \uCFFC\uB9AC\uAC00 \uC124\uC815\uD55C \uC870\uAC74\uACFC \uC77C\uCE58\uD558\uB294 \uACBD\uC6B0(\uC608: md:block\uC5D0\uC11C 768\uD53D\uC140 \uC774\uC0C1\uC758 \uBDF0\uD3EC\uD2B8), \uD574\uB2F9\uD558\uB294 CSS \uADDC\uCE59\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4. \uC774 \uBE0C\uB77C\uC6B0\uC800\uB97C \uD1B5\uD55C CSS\uC758 \uC9C1\uC811 \uC870\uC791\uC740 JavaScript\uAC00 \uD544\uC694 \uC5C6\uC5B4 \uB9E4\uC6B0 \uD6A8\uC728\uC801\uC774\uACE0 \uBE60\uB985\uB2C8\uB2E4.",-1),q=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),C=s("h1",{id:"tailwind-css\u1102\u1161-\u1103\u1161\u1105\u1173\u11AB-css-\u1105\u1161\u110B\u1175\u1107\u1173\u1105\u1165\u1105\u1175-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tailwind-css\u1102\u1161-\u1103\u1161\u1105\u1173\u11AB-css-\u1105\u1161\u110B\u1175\u1107\u1173\u1105\u1165\u1105\u1175-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),a(" Tailwind CSS\uB098 \uB2E4\uB978 CSS \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC0AC\uC6A9\uD558\uAE30")],-1),j=s("p",null,"Tailwind CSS: Tailwind CSS\uB294 \uC27D\uAC8C \uC801\uC6A9\uD558\uACE0 \uACB0\uD569\uD560 \uC218 \uC788\uB294 \uC720\uD2F8\uB9AC\uD2F0 \uD074\uB798\uC2A4\uB97C \uD65C\uC6A9\uD558\uC5EC \uBC18\uC751\uD615 \uB514\uC790\uC778\uC744 \uAC04\uB2E8\uD558\uAC8C \uB9CC\uB4ED\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC720\uD2F8\uB9AC\uD2F0 \uD074\uB798\uC2A4(md:block \uBC0F md:hidden \uB4F1)\uB294 Tailwind\uC758 \uBBF8\uB9AC \uC815\uC758\uB41C \uBE0C\uB808\uC774\uD06C\uD3EC\uC778\uD2B8(sm, md, lg, xl \uB4F1)\uB97C \uD65C\uC6A9\uD558\uB294 \uBC18\uC751\uD615 \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC758 \uC77C\uBD80\uC785\uB2C8\uB2E4.",-1),I=s("p",null,[a("Tailwind CSS\uAC00 \uD544\uC218\uC77C\uAE4C\uC694? \uC544\uB2C8\uC694, Tailwind CSS\uB294 Next.js\uC758 "),s("code",null,"Image"),a(" \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uAC70\uB098 \uBC18\uC751\uD615 \uB514\uC790\uC778\uC744 \uAD6C\uD604\uD558\uB294 \uB370 \uD544\uC218\uC801\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. Tailwind\uB294 \uC720\uD2F8\uB9AC\uD2F0 \uC911\uC2EC \uC811\uADFC \uBC29\uC2DD\uC744 \uD1B5\uD574 \uD3B8\uB9AC\uD558\uACE0 \uD6A8\uC728\uC801\uC778 \uBC29\uBC95\uC73C\uB85C \uBC18\uC751\uD615 \uB3D9\uC791\uC744 \uAD00\uB9AC\uD558\uB294 \uB3C4\uAD6C \uC911 \uD558\uB098\uC77C \uBFD0\uC785\uB2C8\uB2E4. Tailwind\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uAC83\uC744 \uC120\uD638\uD55C\uB2E4\uBA74 \uC77C\uBC18 CSS\uB85C \uB3D9\uC77C\uD55C \uACB0\uACFC\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")],-1),N=s("p",null,"\uB2E4\uB978 CSS \uB77C\uC774\uBE0C\uB7EC\uB9AC \uB610\uB294 \uC21C\uC218 CSS \uC0AC\uC6A9\uD558\uAE30: \uD654\uBA74 \uD06C\uAE30\uC5D0 \uB530\uB77C \uC694\uC18C\uC758 \uAC00\uC2DC\uC131\uC744 \uAD00\uB9AC\uD558\uAE30 \uC704\uD574 CSS \uD504\uB808\uC784\uC6CC\uD06C \uB610\uB294 \uC21C\uC218 CSS\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC544\uB798\uC640 \uAC19\uC774 \uAC04\uB2E8\uD55C CSS\uB85C \uC720\uC0AC\uD55C \uAE30\uB2A5\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:",-1),T=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),H=l(`<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Tailwind\uC758 md:block \uBC0F md:hidden\uC5D0 \uB300\uD55C \uC77C\uBC18 CSS \uB4F1\uAC00\uBB3C */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.desktop-image</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span> <span class="token comment">/* \uC911\uAC04 \uD06C\uAE30 \uD654\uBA74 \uC774\uC0C1\uC5D0\uC11C \uD45C\uC2DC */</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.mobile-image</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/* \uC911\uAC04 \uD06C\uAE30 \uD654\uBA74 \uC774\uC0C1\uC5D0\uC11C \uC228\uAE40 */</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 767px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.desktop-image</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/* \uC791\uC740 \uD654\uBA74\uC5D0\uC11C \uC228\uAE40 */</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.mobile-image</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span> <span class="token comment">/* \uC791\uC740 \uD654\uBA74\uC5D0\uC11C \uD45C\uC2DC */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTML with Plain CSS Classes:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;/kitty-desktop.png&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;desktop-image&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;\uB370\uC2A4\uD06C\uD0D1 \uBC84\uC804&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;/kitty-mobile.png&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;mobile-image&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;\uBAA8\uBC14\uC77C \uBC84\uC804&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1100\u1167\u11AF\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1105\u1169\u11AB" aria-hidden="true">#</a> \uACB0\uB860</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),B=s("p",null,[a("Next.js\uC758 "),s("code",null,"Image"),a(" \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uD604\uB300 \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uCC98\uB9AC\uB97C \uD06C\uAC8C \uAC04\uC18C\uD654\uD569\uB2C8\uB2E4. \uD575\uC2EC \uCD5C\uC801\uD654 \uD504\uB85C\uC138\uC2A4\uB97C \uC790\uB3D9\uD654\uD558\uC5EC \uAC1C\uBC1C\uC790\uB4E4\uC774 \uC131\uB2A5\uC744 \uC870\uC815\uD558\uB294 \uB300\uC2E0 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uC744 \uAC1C\uBC1C\uD558\uB294 \uB370 \uB354 \uC9D1\uC911\uD560 \uC218 \uC788\uB3C4\uB85D \uB3D5\uC2B5\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 Next.js\uAC00 \uBE60\uB974\uACE0 \uD6A8\uC728\uC801\uC778 \uC6F9 \uC194\uB8E8\uC158\uC744 \uC81C\uC791\uD558\uB294 \uB370 \uD5CC\uC2E0\uD55C \uAC83\uC744 \uC785\uC99D\uD569\uB2C8\uB2E4. \uC774 \uAC15\uB825\uD55C \uB3C4\uAD6C\uB97C \uD65C\uC6A9\uD568\uC73C\uB85C\uC368, \uAC1C\uBC1C\uC790\uB4E4\uC740 \uC791\uC5C5 \uD750\uB984\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294\uB370 \uADF8\uCE58\uC9C0 \uC54A\uACE0 \uC624\uB298\uB0A0\uC758 \uBE60\uB974\uAC8C \uBCC0\uD654\uD558\uB294 \uC628\uB77C\uC778 \uD658\uACBD\uC758 \uC694\uAD6C \uC0AC\uD56D\uC744 \uCDA9\uC871\uC2DC\uD0A4\uBA70 \uC804\uBC18\uC801\uC778 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4.")],-1),L=s("p",null,"\u{1F310} LinkedIn\uC5D0\uC11C Gabriela Iriart\uC640 \uC5F0\uACB0\uD558\uACE0 GitHub\uC5D0\uC11C \uB0B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uD314\uB85C\uC6B0\uD558\uC138\uC694: gabrielagi",-1);function V(G,M){return n(),p("div",null,[r,u,k,m,g,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,S,f,x,q,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),C,j,I,N,T,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),H,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,L])}var D=i(c,[["render",V],["__file","index.html.vue"]]);export{D as default};