import{_ as l,o as a,c,a as t,w as e,d as n,b as o,g as p,e as s}from"./app.7f4ddb7a.js";const i={},r=p(`<h1 id="nextjs-14-\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u110E\u116C\u110C\u1165\u11A8\u1112\u116A\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#nextjs-14-\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u110E\u116C\u110C\u1165\u11A8\u1112\u116A\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> Nextjs 14 \uC2A4\uD06C\uB9BD\uD2B8 \uCD5C\uC801\uD654\uD558\uB294 \uBC29\uBC95</h1><h3 id="\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA-\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA-\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173" aria-hidden="true">#</a> \uB808\uC774\uC544\uC6C3 \uC2A4\uD06C\uB9BD\uD2B8</h3><p>\uC5EC\uB7EC \uB8E8\uD2B8\uC5D0 \uB300\uD574 \uC81C3 \uC790 \uC2A4\uD06C\uB9BD\uD2B8\uB97C\uB85C\uB4DC\uD558\uB824\uBA74 next/script\uB97C \uAC00\uC838\uC640 \uB808\uC774\uC544\uC6C3 \uAD6C\uC131 \uC694\uC18C\uC5D0 \uC9C1\uC811 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uD3EC\uD568\uD558\uC2ED\uC2DC\uC624:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">&quot;next/script&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">DashboardLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>section<span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">&quot;https://example.com/script.js&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=p(`<p>\uC138 \uBC88\uC9F8\uC790 \uC2A4\uD06C\uB9BD\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uD3F4\uB354 \uACBD\uB85C (\uC608: dashboard/page.js) \uB610\uB294 \uC911\uCCA9 \uACBD\uB85C (\uC608: dashboard/settings/page.js)\uC5D0 \uC561\uC138\uC2A4\uD560 \uB54C \uAC00\uC838\uC635\uB2C8\uB2E4. Next.js\uB294 \uC0AC\uC6A9\uC790\uAC00 \uB3D9\uC77C\uD55C \uB808\uC774\uC544\uC6C3\uC5D0\uC11C \uC5EC\uB7EC \uACBD\uB85C \uC0AC\uC774\uB97C \uC774\uB3D9\uD558\uB354\uB77C\uB3C4 \uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uD55C \uBC88\uB9CC \uB85C\uB4DC\uB418\uB3C4\uB85D \uBCF4\uC7A5\uD569\uB2C8\uB2E4.</p><h3 id="\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173" aria-hidden="true">#</a> \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC2A4\uD06C\uB9BD\uD2B8</h3><p>\uBAA8\uB4E0 \uACBD\uB85C\uC5D0 \uB300\uD574 \uC11C\uB4DC\uD30C\uD2F0 \uC2A4\uD06C\uB9BD\uD2B8\uB97C\uB85C\uB4DC\uD558\uB824\uBA74 next/script\uB97C \uAC00\uC838\uC640 \uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3\uC5D0 \uC9C1\uC811 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uD3EC\uD568\uD558\uC2ED\uC2DC\uC624:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">&quot;next/script&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">&quot;https://example.com/script.js&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=s("p",null,"\uC774 \uC2A4\uD06C\uB9BD\uD2B8\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBAA8\uB4E0 \uACBD\uB85C\uC5D0 \uC561\uC138\uC2A4\uD560 \uB54C\uB85C\uB4DC\uB418\uACE0 \uC2E4\uD589\uB429\uB2C8\uB2E4. Next.js\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC5EC\uB7EC \uD398\uC774\uC9C0\uB97C \uB118\uB098\uB4E4\uC5B4\uB3C4 \uD574\uB2F9 \uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uD55C \uBC88\uB9CC\uB85C\uB4DC\uB418\uB3C4\uB85D \uBCF4\uC7A5\uD569\uB2C8\uB2E4.",-1),k=s("blockquote",null,[s("p",null,"\uAD8C\uC7A5 \uC0AC\uD56D: \uC131\uB2A5\uC5D0 \uBD88\uD544\uC694\uD55C \uC601\uD5A5\uC744 \uCD5C\uC18C\uD654\uD558\uAE30 \uC704\uD574 \uD2B9\uC815 \uD398\uC774\uC9C0\uB098 \uB808\uC774\uC544\uC6C3\uC5D0\uB9CC \uC11C\uB4DC \uD30C\uD2F0 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uD3EC\uD568\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.")],-1),v=s("h3",{id:"\u110C\u1165\u11AB\u1105\u1163\u11A8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u110C\u1165\u11AB\u1105\u1163\u11A8","aria-hidden":"true"},"#"),n(" \uC804\uB7B5")],-1),g=s("p",null,"Next/script\uC758 \uAE30\uBCF8 \uB3D9\uC791\uC740 \uBAA8\uB4E0 \uD398\uC774\uC9C0\uB098 \uB808\uC774\uC544\uC6C3\uC5D0\uC11C \uC11C\uB4DC \uD30C\uD2F0 \uC2A4\uD06C\uB9BD\uD2B8\uB97C\uB85C\uB4DC\uD560 \uC218 \uC788\uB3C4\uB85D \uD5C8\uC6A9\uD558\uC9C0\uB9CC, \uC804\uB7B5 \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uC5EC\uB85C\uB4DC \uB3D9\uC791\uC744 \uBBF8\uC138 \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:",-1),b=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),m=s("ul",null,[s("li",null,"beforeInteractive: \uBAA8\uB4E0 Next.js \uCF54\uB4DC \uBC0F \uD398\uC774\uC9C0 \uC218\uD654\uAC00 \uBC1C\uC0DD\uD558\uAE30 \uC804\uC5D0 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uB85C\uB4DC\uD569\uB2C8\uB2E4."),s("li",null,"afterInteractive: (\uAE30\uBCF8\uAC12) \uD398\uC774\uC9C0 \uC218\uD654\uAC00 \uC57D\uAC04 \uBC1C\uC0DD\uD55C \uD6C4\uC5D0 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uC870\uAE30\uC5D0\uB85C\uB4DC\uD569\uB2C8\uB2E4."),s("li",null,"lazyOnload: \uBE0C\uB77C\uC6B0\uC800 \uC720\uD734 \uC2DC\uAC04 \uB3D9\uC548\uC5D0 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uB098\uC911\uC5D0 \uB85C\uB4DC\uD569\uB2C8\uB2E4."),s("li",null,"worker: (\uC2E4\uD5D8\uC801) \uC6F9 \uC6CC\uCEE4\uC5D0\uC11C \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uB85C\uB4DC\uD569\uB2C8\uB2E4. \uB354 \uC790\uC138\uD55C \uB0B4\uC6A9 \uBC0F \uAC01 \uC804\uB7B5 \uBC0F \uC0AC\uC6A9 \uC0AC\uB840\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uB824\uBA74 next/script API \uCC38\uC870 \uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.")],-1),h=s("h3",{id:"\u110B\u1170\u11B8-\u110B\u116F\u110F\u1165\u1105\u1169-\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u110B\u1169\u1111\u1173\u1105\u1169\u1103\u1173-\u1109\u1175\u11AF\u1112\u1165\u11B7\u110C\u1165\u11A8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u110B\u1170\u11B8-\u110B\u116F\u110F\u1165\u1105\u1169-\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u110B\u1169\u1111\u1173\u1105\u1169\u1103\u1173-\u1109\u1175\u11AF\u1112\u1165\u11B7\u110C\u1165\u11A8","aria-hidden":"true"},"#"),n(" \uC6F9 \uC6CC\uCEE4\uB85C \uC2A4\uD06C\uB9BD\uD2B8 \uC624\uD504\uB85C\uB4DC (\uC2E4\uD5D8\uC801)")],-1),y=s("blockquote",null,[s("p",null,"\uACBD\uACE0: \uC6CC\uCEE4 \uC804\uB7B5\uC740 \uC544\uC9C1 \uC548\uC815\uD654\uB418\uC9C0 \uC54A\uC558\uC73C\uBA70 \uC571 \uB514\uB809\uD130\uB9AC\uC640 \uC544\uC9C1 \uC791\uB3D9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC8FC\uC758\uD574\uC11C \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624.")],-1),w=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),f=p(`<p>Partytown\uC744 \uC0AC\uC6A9\uD558\uB294 \uC6CC\uCEE4 \uC804\uB7B5\uC740 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uC624\uD504\uB85C\uB4DC\uD558\uACE0 \uC2E4\uD589\uD558\uC5EC \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBA54\uC778 \uC2A4\uB808\uB4DC\uB97C \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8 \uCF54\uB4DC\uC758 \uB098\uBA38\uC9C0\uC5D0 \uC804\uB150\uD568\uC73C\uB85C\uC368 \uC0AC\uC774\uD2B8\uC758 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC804\uB7B5\uC740 \uC544\uC9C1 \uC2E4\uD5D8\uC801\uC774\uBA70 next.config.js\uC5D0\uC11C nextScriptWorkers \uD50C\uB798\uADF8\uAC00 \uD65C\uC131\uD654\uB41C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nextScriptWorkers</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uADF8\uB7F0 \uB2E4\uC74C, next\uB97C \uC2E4\uD589\uD558\uC138\uC694 (\uBCF4\uD1B5 npm run dev \uB610\uB294 yarn dev) \uADF8\uB7EC\uBA74 Next.js\uAC00 \uD544\uC694\uD55C \uD328\uD0A4\uC9C0\uB97C \uC124\uCE58\uD558\uAE30 \uC704\uD55C \uC548\uB0B4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),x=p(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js">npm run dev</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uBA85\uB839\uC5B4\uAC00 \uB098\uC62C \uAC83\uC785\uB2C8\uB2E4: npm install @builder.io/partytown\uC744 \uC2E4\uD589\uD558\uC5EC Partytown\uC744 \uC124\uCE58\uD558\uC138\uC694. \uC124\uC815\uC774 \uC644\uB8CC\uB418\uBA74 strategy=&quot;worker&quot;\uB97C \uC815\uC758\uD558\uBA74 Partytown\uC774 \uC790\uB3D9\uC73C\uB85C \uC571\uC5D0 \uC778\uC2A4\uD134\uC2A4\uD654\uB418\uACE0 \uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uC6F9 \uC6CC\uCEE4\uB85C \uC624\uD504\uB85C\uB4DC\uB429\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">&quot;next/script&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">&quot;https://example.com/script.js&quot;</span> strategy<span class="token operator">=</span><span class="token string">&quot;worker&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),_=p('<p>\uC6F9 \uC6CC\uCEE4\uC5D0 \uC368\uB4DC \uD30C\uD2F0 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uB85C\uB4DC\uD560 \uB54C \uACE0\uB824\uD574\uC57C \uD560 \uC5EC\uB7EC \uAC00\uC9C0 \uD2B8\uB808\uC774\uB4DC\uC624\uD504\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uB354 \uB9CE\uC740 \uC815\uBCF4\uB294 Partytown\uC758 \uD2B8\uB808\uC774\uB4DC\uC624\uD504 \uBB38\uC11C\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.</p><h3 id="\u110B\u1175\u11AB\u1105\u1161\u110B\u1175\u11AB-\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11AB\u1105\u1161\u110B\u1175\u11AB-\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173" aria-hidden="true">#</a> \uC778\uB77C\uC778 \uC2A4\uD06C\uB9BD\uD2B8</h3><p>\uC778\uB77C\uC778 \uC2A4\uD06C\uB9BD\uD2B8, \uC989 \uC678\uBD80 \uD30C\uC77C\uC5D0\uC11C \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC740 \uC2A4\uD06C\uB9BD\uD2B8\uB294 \uC2A4\uD06C\uB9BD\uD2B8 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C\uB3C4 \uC9C0\uC6D0\uB429\uB2C8\uB2E4. \uC911\uAD04\uD638 \uC548\uC5D0 JavaScript\uB97C \uC791\uC131\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Script id<span class="token operator">=</span><span class="token string">&quot;show-banner&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">document.getElementById(&#39;banner&#39;).classList.remove(&#39;hidden&#39;)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),q=p(`<p>\uB610\uB294 dangerouslySetInnerHTML \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uC5EC:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Script
  id<span class="token operator">=</span><span class="token string">&quot;show-banner&quot;</span>
  dangerouslySetInnerHTML<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
    <span class="token literal-property property">__html</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">document.getElementById(&#39;banner&#39;).classList.remove(&#39;hidden&#39;)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\uACBD\uACE0: Next.js\uC5D0\uC11C \uC778\uB77C\uC778 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uCD94\uC801\uD558\uACE0 \uCD5C\uC801\uD654\uD558\uB824\uBA74 id \uC18D\uC131\uC774 \uD560\uB2F9\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.</p></blockquote><h3 id="\u110E\u116E\u1100\u1161-\u110F\u1169\u1103\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110E\u116E\u1100\u1161-\u110F\u1169\u1103\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uCD94\uAC00 \uCF54\uB4DC \uC2E4\uD589\uD558\uAE30</h3><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),j=p(`<p>\uC2A4\uD06C\uB9BD\uD2B8 \uAD6C\uC131 \uC694\uC18C\uC640 \uD568\uAED8 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD2B9\uC815 \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD55C \uD6C4 \uCD94\uAC00 \uCF54\uB4DC\uB97C \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>onLoad: \uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uB85C\uB4DC\uB97C \uC644\uB8CC\uD55C \uD6C4 \uCF54\uB4DC\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4.</li><li>onReady: \uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uB85C\uB4DC\uB97C \uC644\uB8CC\uD558\uACE0 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uB9C8\uC6B4\uD2B8\uB420 \uB54C\uB9C8\uB2E4 \uCF54\uB4DC\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4.</li><li>onError: \uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uB85C\uB4DC\uC5D0 \uC2E4\uD328\uD588\uC744 \uB54C \uCF54\uB4DC\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD578\uB4E4\uB7EC\uB294 next/script\uAC00 \uAC00\uC838\uC640\uC838\uC11C &quot;use client&quot;\uAC00 \uCF54\uB4DC\uC758 \uCCAB \uC904\uB85C \uC815\uC758\uB41C \uD074\uB77C\uC774\uC5B8\uD2B8 \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C\uB9CC \uC791\uB3D9\uD569\uB2C8\uB2E4:</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token string">&#39;use client&#39;</span>

<span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">&#39;next/script&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Script
        src<span class="token operator">=</span><span class="token string">&quot;https://example.com/script.js&quot;</span>
        onLoad<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uB85C\uB4DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),S=p(`<p>\uB2E4\uC74C/script API \uCC38\uC870\uB97C \uCC38\uACE0\uD558\uC5EC \uAC01 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uACE0 \uC608\uC81C\uB97C \uD655\uC778\uD574 \uBCF4\uC138\uC694.</p><h3 id="\u110E\u116E\u1100\u1161-\u1109\u1169\u11A8\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110E\u116E\u1100\u1161-\u1109\u1169\u11A8\u1109\u1165\u11BC" aria-hidden="true">#</a> \uCD94\uAC00 \uC18D\uC131</h3><p>Script \uAD6C\uC131 \uC694\uC18C\uC5D0\uC11C \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uB294 nonce\uB098 \uC0AC\uC6A9\uC790 \uC815\uC758 \uB370\uC774\uD130 \uC18D\uC131\uACFC \uAC19\uC774 <code>&lt;script&gt;</code> \uC694\uC18C\uC5D0 \uD560\uB2F9\uD560 \uC218 \uC788\uB294 \uC5EC\uB7EC DOM \uC18D\uC131\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uCD94\uAC00 \uC18D\uC131\uC744 \uD3EC\uD568\uD558\uBA74 HTML\uC5D0 \uD3EC\uD568\uB41C \uCD5C\uC885 \uCD5C\uC801\uD654\uB41C <code>&lt;script&gt;</code> \uC694\uC18C\uB85C \uC790\uB3D9\uC73C\uB85C \uC804\uB2EC\uB429\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">&quot;next/script&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">&quot;https://example.com/script.js&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;example-script&quot;</span> nonce<span class="token operator">=</span><span class="token string">&quot;XUENAJFW&quot;</span> data<span class="token operator">-</span>test<span class="token operator">=</span><span class="token string">&quot;script&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5);function N(L,I){return a(),c("div",null,[r,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,k,v,g,b,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,h,y,w,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),q,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var B=l(i,[["render",N],["__file","index.html.vue"]]);export{B as default};