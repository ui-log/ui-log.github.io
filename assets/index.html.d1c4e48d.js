import{_ as l,o as n,c as i,a as t,w as e,b as s,r as o,d as p,e as a}from"./app.e672c54b.js";const c={},r=p('<h1 id="next-js\u110B\u116A-\u1112\u1161\u11B7\u1101\u1166-playwright-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#next-js\u110B\u116A-\u1112\u1161\u11B7\u1101\u1166-playwright-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> Next.js\uC640 \uD568\uAED8 Playwright \uC124\uC815\uD558\uAE30</h1><p>Playwright\uB294 Chromium, Firefox \uBC0F WebKit\uC744 \uB2E8\uC77C API\uB85C \uC790\uB3D9\uD654\uD560 \uC218 \uC788\uB294 \uD14C\uC2A4\uD305 \uD504\uB808\uC784\uC6CC\uD06C\uC785\uB2C8\uB2E4. Playwright\uB97C \uC0AC\uC6A9\uD558\uBA74 End-to-End(E2E) \uD14C\uC2A4\uD2B8\uB97C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC548\uB0B4\uC11C\uB294 Next.js\uC640 \uD568\uAED8 Playwright\uB97C \uC124\uC815\uD558\uACE0 \uCCAB \uBC88\uC9F8 \uD14C\uC2A4\uD2B8\uB97C \uC791\uC131\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.</p><h2 id="\u1108\u1161\u1105\u1173\u11AB-\u1109\u1175\u110C\u1161\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1108\u1161\u1105\u1173\u11AB-\u1109\u1175\u110C\u1161\u11A8" aria-hidden="true">#</a> \uBE60\uB978 \uC2DC\uC791</h2><p>\uAC00\uC7A5 \uBE60\uB974\uAC8C \uC2DC\uC791\uD558\uB294 \uBC29\uBC95\uC740 with-playwright \uC608\uC81C\uB97C \uC0AC\uC6A9\uD558\uC5EC create-next-app\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 Playwright\uAC00 \uAD6C\uC131\uB41C Next.js \uD504\uB85C\uC81D\uD2B8\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),d=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app@latest <span class="token operator">--</span>example <span class="token keyword">with</span><span class="token operator">-</span>playwright <span class="token keyword">with</span><span class="token operator">-</span>playwright<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u1109\u116E\u1103\u1169\u11BC-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u116E\u1103\u1169\u11BC-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uC218\uB3D9 \uC124\uC815</h2><p>Playwright\uB97C \uC124\uCE58\uD558\uB824\uBA74 \uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm init playwright
# \uB610\uB294
yarn create playwright
# \uB610\uB294
pnpm create playwright
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=p(`<p>\uC774 \uACFC\uC815\uC744 \uD1B5\uD574 Playwright\uB97C \uC124\uC815\uD558\uACE0 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCD94\uAC00\uD558\uAE30 \uC704\uD55C \uC77C\uB828\uC758 \uD504\uB86C\uD504\uD2B8\uB97C \uC9C4\uD589\uD558\uAC8C \uB429\uB2C8\uB2E4. \uC774 \uACFC\uC815\uC5D0\uB294 playwright.config.ts \uD30C\uC77C\uB3C4 \uCD94\uAC00\uB429\uB2C8\uB2E4. Playwright \uC124\uCE58 \uAC00\uC774\uB4DC\uC5D0\uC11C \uB2E8\uACC4\uBCC4 \uC548\uB0B4\uB97C \uCC38\uC870\uD574\uC8FC\uC138\uC694.</p><h2 id="\u110E\u1165\u11BA-\u1107\u1165\u11AB\u110D\u1162-playwright-e2e-\u1110\u1166\u1109\u1173\u1110\u1173-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110E\u1165\u11BA-\u1107\u1165\u11AB\u110D\u1162-playwright-e2e-\u1110\u1166\u1109\u1173\u1110\u1173-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" aria-hidden="true">#</a> \uCCAB \uBC88\uC9F8 Playwright E2E \uD14C\uC2A4\uD2B8 \uB9CC\uB4E4\uAE30</h2><p>\uB450 \uAC1C\uC758 \uC0C8\uB85C\uC6B4 Next.js \uD398\uC774\uC9C0\uB97C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&quot;next/link&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span><span class="token operator">&gt;</span>About<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&quot;next/link&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>About<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uD6C4, \uB124\uBE44\uAC8C\uC774\uC158\uC774 \uC81C\uB300\uB85C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uD14C\uC2A4\uD2B8\uB97C \uCD94\uAC00\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@playwright/test&#39;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;about \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD574\uC57C \uD568&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> page <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uC778\uB371\uC2A4 \uD398\uC774\uC9C0\uC5D0\uC11C \uC2DC\uC791 (baseUrl\uC740 playwright.config.ts\uC5D0\uC11C webServer\uB97C \uD1B5\uD574 \uC124\uC815\uB428)</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:3000/&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// &#39;About&#39;\uC774\uB77C\uB294 \uD14D\uC2A4\uD2B8\uAC00 \uD3EC\uD568\uB41C \uC694\uC18C\uB97C \uCC3E\uC544 \uD074\uB9AD</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token string">&#39;text=About&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// \uC0C8 URL\uC740 &quot;/about&quot;\uC774\uC5B4\uC57C \uD568 (baseUrl\uC744 \uC0AC\uC6A9\uD568)</span>
  <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveURL</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:3000/about&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// \uC0C8 \uD398\uC774\uC9C0\uC5D0 &quot;About&quot;\uC774\uB77C\uB294 h1 \uC694\uC18C\uAC00 \uC788\uC5B4\uC57C \uD568</span>
  <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">locator</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContainText</span><span class="token punctuation">(</span><span class="token string">&#39;About&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\uC54C\uC544\uB450\uBA74 \uC88B\uC740 \uC810: &quot;baseURL&quot;: &quot;http://localhost:3000&quot;\uC744 playwright.config.ts \uAD6C\uC131 \uD30C\uC77C\uC5D0 \uCD94\uAC00\uD558\uBA74 page.goto(&quot;/&quot;) \uB300\uC2E0 page.goto(&quot;http://localhost:3000/&quot;)\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></blockquote><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=a("h3",{id:"playwright-\u1110\u1166\u1109\u1173\u1110\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#playwright-\u1110\u1166\u1109\u1173\u1110\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),s(" Playwright \uD14C\uC2A4\uD2B8 \uC2E4\uD589\uD558\uAE30")],-1),h=a("p",null,"Playwright\uB294 \uC0AC\uC6A9\uC790\uAC00 Chromium, Firefox \uBC0F Webkit \uC138 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD0D0\uC0C9\uD558\uB294 \uAC83\uC744 \uC2DC\uBBAC\uB808\uC774\uD2B8\uD569\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 Next.js \uC11C\uBC84\uAC00 \uC2E4\uD589 \uC911\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC6B4\uC601 \uCF54\uB4DC\uC5D0 \uB300\uD574 \uD14C\uC2A4\uD2B8\uB97C \uC2E4\uD589\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC5B4\uB5BB\uAC8C \uB3D9\uC791\uD560\uC9C0\uB97C \uB354 \uC815\uD655\uD558\uAC8C \uD655\uC778\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4. npm run build \uBC0F npm run start\uB97C \uC2E4\uD589\uD55C \uD6C4 \uB2E4\uB978 \uD130\uBBF8\uB110 \uCC3D\uC5D0\uC11C npx playwright test\uB97C \uC2E4\uD589\uD558\uC5EC Playwright \uD14C\uC2A4\uD2B8\uB97C \uC2E4\uD589\uD558\uC138\uC694.",-1),v=a("blockquote",null,[a("p",null,"\uD301: \uB300\uC2E0, Playwright\uAC00 \uAC1C\uBC1C \uC11C\uBC84\uB97C \uC2DC\uC791\uD558\uACE0 \uC644\uC804\uD788 \uC0AC\uC6A9 \uAC00\uB2A5\uD560 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB9AC\uB3C4\uB85D \uD558\uB294 webServer \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.")],-1),b=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),y=a("h3",{id:"continuous-integration-ci-\u110B\u1166\u1109\u1165-playwright-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#continuous-integration-ci-\u110B\u1166\u1109\u1165-playwright-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),s(" Continuous Integration (CI)\uC5D0\uC11C Playwright \uC2E4\uD589\uD558\uAE30")],-1),m=a("p",null,"\uAE30\uBCF8\uC801\uC73C\uB85C Playwright\uB294 \uD5E4\uB4DC\uB9AC\uC2A4 \uBAA8\uB4DC\uC5D0\uC11C \uD14C\uC2A4\uD2B8\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4. Playwright \uC885\uC18D\uC131\uC744 \uBAA8\uB450 \uC124\uCE58\uD558\uB824\uBA74 npx playwright install-deps\uB97C \uC2E4\uD589\uD558\uC138\uC694. \uC774\uB7EC\uD55C \uB9AC\uC18C\uC2A4\uC5D0\uC11C Playwright\uC640 Continuous Integration\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4:",-1),w=a("ul",null,[a("li",null,"Next.js\uC640 Playwright \uC608\uC81C"),a("li",null,"\uBCF8\uC778\uC758 CI \uC81C\uACF5\uC5C5\uCCB4\uC5D0\uC11C Playwright \uC0AC\uC6A9\uD558\uAE30"),a("li",null,"Playwright Discord")],-1),f=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function x(_,j){return n(),i("div",null,[r,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,h,v,b,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,m,w,f,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var P=l(c,[["render",x],["__file","index.html.vue"]]);export{P as default};