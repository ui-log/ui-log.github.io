import{_ as p,o as s,c as i,a as n,w as a,b as t,r as e,d as o}from"./app.252b99df.js";const c={},l=o('<h1 id="instrumentation" tabindex="-1"><a class="header-anchor" href="#instrumentation" aria-hidden="true">#</a> Instrumentation</h1><p>Instrumentation(\uACC4\uCE21)\uC740 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBAA8\uB2C8\uD130\uB9C1 \uBC0F \uB85C\uAE45 \uB3C4\uAD6C\uB97C \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC5D0 \uD1B5\uD569\uD558\uB294 \uACFC\uC815\uC785\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC758 \uC131\uB2A5 \uBC0F \uB3D9\uC791\uC744 \uCD94\uC801\uD558\uACE0, \uD504\uB85C\uB355\uC158 \uD658\uACBD\uC5D0\uC11C \uBB38\uC81C\uB97C \uB514\uBC84\uAE45\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1100\u1172\u110E\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1100\u1172\u110E\u1175\u11A8" aria-hidden="true">#</a> \uADDC\uCE59</h2><p>\uACC4\uCE21\uC744 \uC124\uC815\uD558\uB824\uBA74 \uD504\uB85C\uC81D\uD2B8\uC758 \uB8E8\uD2B8 \uB514\uB809\uD1A0\uB9AC\uC5D0 instrumentation.ts|js \uD30C\uC77C\uC744 \uB9CC\uB4DC\uC138\uC694 (\uC0AC\uC6A9 \uC911\uC778 \uACBD\uC6B0 src \uD3F4\uB354 \uB0B4\uBD80\uC5D0 \uC704\uCE58).</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),d=o(`<p>\uADF8\uB7FC, \uD30C\uC77C\uC5D0 \uB4F1\uB85D \uD568\uC218\uB97C \uB0B4\uBCF4\uB0B4\uC138\uC694. \uC774 \uD568\uC218\uB294 \uC0C8\uB85C\uC6B4 Next.js \uC11C\uBC84 \uC778\uC2A4\uD134\uC2A4\uAC00 \uCD08\uAE30\uD654\uB420 \uB54C \uD55C \uBC88 \uD638\uCD9C\uB429\uB2C8\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC5B4, OpenTelemetry\uC640 @vercel/otel\uC744 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> registerOTel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vercel/otel&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">registerOTel</span><span class="token punctuation">(</span><span class="token string">&quot;next-app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC804\uCCB4 \uAD6C\uD604 \uC0AC\uB840\uB97C \uBCF4\uB824\uBA74 OpenTelemetry \uC608\uC81C\uB97C \uCC38\uC870\uD558\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=o('<blockquote><p>\uC88B\uC544 \uC54C\uC544\uB450\uC138\uC694 \uC774 \uAE30\uB2A5\uC740 \uC2E4\uD5D8\uC801\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uD558\uB824\uBA74 experimental.instrumentationHook = true;\uB97C next.config.js \uD30C\uC77C\uC5D0\uC11C \uBA85\uC2DC\uC801\uC73C\uB85C \uC815\uC758\uD574\uC57C \uD569\uB2C8\uB2E4. \uACC4\uCE21 \uD30C\uC77C\uC740 \uD504\uB85C\uC81D\uD2B8\uC758 \uB8E8\uD2B8\uC5D0 \uC788\uC5B4\uC57C \uD558\uBA70 \uC571\uC774\uB098 \uD398\uC774\uC9C0 \uB514\uB809\uD1A0\uB9AC \uC548\uC5D0 \uC788\uC73C\uBA74 \uC548 \uB429\uB2C8\uB2E4. src \uD3F4\uB354\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 \uD30C\uC77C\uC744 src \uD3F4\uB354 \uC548\uC5D0 \uD398\uC774\uC9C0(pages) \uBC0F \uC571(app)\uACFC \uD568\uAED8 \uBC30\uCE58\uD558\uC2ED\uC2DC\uC624. pageExtensions \uAD6C\uC131 \uC635\uC158\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC811\uBBF8\uC0AC\uB97C \uCD94\uAC00\uD558\uB294 \uACBD\uC6B0 \uACC4\uCE21 \uD30C\uC77C \uC774\uB984\uB3C4 \uC77C\uCE58\uD558\uB3C4\uB85D \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD569\uB2C8\uB2E4.</p></blockquote><h2 id="\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> \uC608\uC2DC</h2><h3 id="\u1107\u116E\u110C\u1161\u11A8\u110B\u116D\u11BC\u110B\u1175-\u110B\u1175\u11BB\u1102\u1173\u11AB-\u1111\u1161\u110B\u1175\u11AF-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1107\u116E\u110C\u1161\u11A8\u110B\u116D\u11BC\u110B\u1175-\u110B\u1175\u11BB\u1102\u1173\u11AB-\u1111\u1161\u110B\u1175\u11AF-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" aria-hidden="true">#</a> \uBD80\uC791\uC6A9\uC774 \uC788\uB294 \uD30C\uC77C \uAC00\uC838\uC624\uAE30</h3><p>\uAC00\uB054\uC740 \uCF54\uB4DC\uC5D0\uC11C \uD30C\uC77C\uC744 \uAC00\uC838\uC624\uB294 \uAC83\uC774 \uC720\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uBD80\uC791\uC6A9 \uB54C\uBB38\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC804\uC5ED \uBCC0\uC218 \uC9D1\uD569\uC744 \uC815\uC758\uD558\uB294 \uD30C\uC77C\uC744 \uAC00\uC838\uC62C \uC218 \uC788\uC9C0\uB9CC \uCF54\uB4DC\uC5D0\uC11C \uD574\uB2F9 \uAC00\uC838\uC628 \uD30C\uC77C\uC744 \uBA85\uC2DC\uC801\uC73C\uB85C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC744 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uD328\uD0A4\uC9C0\uC5D0\uC11C \uC120\uC5B8\uD55C \uC804\uC5ED \uBCC0\uC218\uC5D0 \uC5EC\uC804\uD788 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),r=o(`<p>JavaScript import \uAD6C\uBB38\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD30C\uC77C\uC744 \uBD88\uB7EC\uC624\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4. \uC544\uB798 \uC608\uC81C\uB294 register \uD568\uC218 \uB0B4\uC5D0\uC11C import\uB97C \uAE30\uBCF8\uC801\uC73C\uB85C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;package-with-side-effect&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\uC54C\uC544\uB450\uBA74 \uC88B\uC740 \uC0AC\uD56D: \uD30C\uC77C\uC744 \uD30C\uC77C \uC0C1\uB2E8\uC774 \uC544\uB2CC register \uD568\uC218 \uB0B4\uC5D0\uC11C \uBD88\uB7EC\uC624\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uCF54\uB4DC \uB0B4\uC758 \uBAA8\uB4E0 \uBD80\uC218 \uD6A8\uACFC\uB97C \uD55C \uACF3\uC5D0\uC11C \uD568\uAED8 \uC815\uB82C\uD560 \uC218 \uC788\uACE0, \uD30C\uC77C \uC0C1\uB2E8\uC5D0\uC11C \uC804\uC5ED\uC801\uC73C\uB85C \uBD88\uB7EC\uC624\uB294 \uAC83\uC73C\uB85C \uC778\uD55C \uC758\uB3C4\uD558\uC9C0 \uC54A\uC740 \uBD80\uC791\uC6A9\uC744 \uD53C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></blockquote><h3 id="\u1105\u1165\u11AB\u1110\u1161\u110B\u1175\u11B7\u1107\u1167\u11AF-\u110F\u1169\u1103\u1173-\u1107\u116E\u11AF\u1105\u1165\u110B\u1169\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1105\u1165\u11AB\u1110\u1161\u110B\u1175\u11B7\u1107\u1167\u11AF-\u110F\u1169\u1103\u1173-\u1107\u116E\u11AF\u1105\u1165\u110B\u1169\u1100\u1175" aria-hidden="true">#</a> \uB7F0\uD0C0\uC784\uBCC4 \uCF54\uB4DC \uBD88\uB7EC\uC624\uAE30</h3><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=o(`<p>Next.js\uB294 \uBAA8\uB4E0 \uD658\uACBD\uC5D0\uC11C register\uB97C \uD638\uCD9C\uD558\uBBC0\uB85C \uD2B9\uC815 \uB7F0\uD0C0\uC784(\uC608: Edge \uB610\uB294 Node.js)\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uCF54\uB4DC\uB97C \uC870\uAC74\uBD80\uB85C \uAC00\uC838\uC624\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uD604\uC7AC \uD658\uACBD\uC744 \uD655\uC778\uD558\uB824\uBA74 NEXT_RUNTIME \uD658\uACBD \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_RUNTIME</span> <span class="token operator">===</span> <span class="token string">&quot;nodejs&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./instrumentation-node&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_RUNTIME</span> <span class="token operator">===</span> <span class="token string">&quot;edge&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./instrumentation-edge&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,3);function g(v,b){return s(),i("div",null,[l,(s(),n(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(s(),n(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(s(),n(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(s(),n(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(s(),n(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var y=p(c,[["render",g],["__file","index.html.vue"]]);export{y as default};
