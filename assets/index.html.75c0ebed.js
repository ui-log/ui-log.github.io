import{_ as o}from"./app.3052dcfb.js";import{l as n,m as c,E as s,G as a,p as e,Y as t,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const i={},l=p('<h1 id="nextjs-14-\u1109\u1161\u110B\u1175\u1110\u1173-\u1107\u1169\u110B\u1161\u11AB-\u110C\u1165\u11BC\u110E\u1162\u11A8-\u110C\u1165\u11BC\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#nextjs-14-\u1109\u1161\u110B\u1175\u1110\u1173-\u1107\u1169\u110B\u1161\u11AB-\u110C\u1165\u11BC\u110E\u1162\u11A8-\u110C\u1165\u11BC\u1105\u1175" aria-hidden="true">#</a> Nextjs 14 \uC0AC\uC774\uD2B8 \uBCF4\uC548 \uC815\uCC45 \uC815\uB9AC</h1><p>\uCEE8\uD150\uCE20 \uBCF4\uC548 \uC815\uCC45(CSP)\uC740 \uB2E4\uC591\uD55C \uBCF4\uC548 \uC704\uD611\uC73C\uB85C\uBD80\uD130 Next.js \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uBCF4\uD638\uD558\uB294 \uB370 \uC911\uC694\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uD06C\uB85C\uC2A4\uC0AC\uC774\uD2B8 \uC2A4\uD06C\uB9BD\uD305(XSS), \uD074\uB9AD\uC7AC\uD0B9, \uADF8\uB9AC\uACE0 \uB2E4\uB978 \uCF54\uB4DC \uC0BD\uC785 \uACF5\uACA9\uC5D0 \uB300\uBE44\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. CSP\uB97C \uC0AC\uC6A9\uD558\uBA74 \uAC1C\uBC1C\uC790\uB294 \uC5B4\uB5A4 \uC6D0\uCC9C\uC774 \uCF58\uD150\uCE20 \uC18C\uC2A4, \uC2A4\uD06C\uB9BD\uD2B8, \uC2A4\uD0C0\uC77C\uC2DC\uD2B8, \uC774\uBBF8\uC9C0, \uAE00\uAF34, \uAC1D\uCCB4, \uBBF8\uB514\uC5B4(\uC624\uB514\uC624, \uBE44\uB514\uC624), \uC544\uC774\uD504\uB808\uC784 \uB4F1\uC5D0 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C\uC9C0\uB97C \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1102\u1161\u11AB\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#\u1102\u1161\u11AB\u1109\u1173" aria-hidden="true">#</a> \uB09C\uC2A4</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',4),u=p('<p>\uD55C\uBC88\uB9CC \uC0AC\uC6A9\uD560 \uACE0\uC720\uD55C \uBB34\uC791\uC704 \uBB38\uC790\uC5F4\uC778 nonce\uB294 CSP\uC640 \uD568\uAED8 \uC0AC\uC6A9\uB418\uC5B4 \uD2B9\uC815 \uC778\uB77C\uC778 \uC2A4\uD06C\uB9BD\uD2B8\uB098 \uC2A4\uD0C0\uC77C\uC774 \uC5C4\uACA9\uD55C CSP \uC9C0\uC2DC\uBB38\uC744 \uC6B0\uD68C\uD558\uACE0 \uC2E4\uD589\uB418\uB3C4\uB85D \uD5C8\uC6A9\uD558\uB294 \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4.</p><h3 id="\u110B\u116B-nonce\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u1102\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u110B\u116B-nonce\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u1102\u1161\u110B\u116D" aria-hidden="true">#</a> \uC65C nonce\uB97C \uC0AC\uC6A9\uD574\uC57C \uD558\uB098\uC694?</h3><p>CSP\uB294 \uC545\uC131 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uCC28\uB2E8\uD558\uAE30 \uC704\uD574 \uC124\uACC4\uB418\uC5C8\uC9C0\uB9CC, \uC778\uB77C\uC778 \uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uD544\uC694\uD55C \uD569\uBC95\uC801\uC778 \uC2DC\uB098\uB9AC\uC624\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7F0 \uACBD\uC6B0\uC5D0 nonce\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC62C\uBC14\uB978 nonce\uB97C \uAC00\uC9C0\uACE0 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uC774\uB7EC\uD55C \uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uC2E4\uD589\uB420 \uC218 \uC788\uB3C4\uB85D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="\u1106\u1175\u1103\u1173\u11AF\u110B\u1170\u110B\u1165\u1105\u1169-nonce-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1106\u1175\u1103\u1173\u11AF\u110B\u1170\u110B\u1165\u1105\u1169-nonce-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uBBF8\uB4E4\uC6E8\uC5B4\uB85C nonce \uCD94\uAC00\uD558\uAE30</h3><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),r=p(`<p>\uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uC0AC\uC6A9\uD558\uBA74 \uD398\uC774\uC9C0\uAC00 \uB80C\uB354\uB9C1\uB418\uAE30 \uC804\uC5D0 \uD5E4\uB354\uB97C \uCD94\uAC00\uD558\uACE0 \uB09C\uC2A4\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD398\uC774\uC9C0\uB97C \uBCFC \uB54C\uB9C8\uB2E4 \uC0C8\uB85C\uC6B4 \uB09C\uC2A4\uB97C \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB09C\uC2A4\uB97C \uCD94\uAC00\uD558\uB824\uBA74 \uB3D9\uC801 \uB80C\uB354\uB9C1\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextRequest<span class="token punctuation">,</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/server&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nonce <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>crypto<span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&quot;base64&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> cspHeader <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    default-src &#39;self&#39;;
    script-src &#39;self&#39; &#39;nonce-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nonce<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39; &#39;strict-dynamic&#39;;
    style-src &#39;self&#39; &#39;nonce-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nonce<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;;
    img-src &#39;self&#39; blob: data:;
    font-src &#39;self&#39;;
    object-src &#39;none&#39;;
    base-uri &#39;self&#39;;
    form-action &#39;self&#39;;
    frame-ancestors &#39;none&#39;;
    block-all-mixed-content;
    upgrade-insecure-requests;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token comment">// \uC0C8 \uC904 \uBB38\uC790 \uBC0F \uACF5\uBC31 \uC81C\uAC70</span>
  <span class="token keyword">const</span> contentSecurityPolicyHeaderValue <span class="token operator">=</span> cspHeader<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s{2,}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> requestHeaders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
  requestHeaders<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;x-nonce&quot;</span><span class="token punctuation">,</span> nonce<span class="token punctuation">)</span><span class="token punctuation">;</span>

  requestHeaders<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Security-Policy&quot;</span><span class="token punctuation">,</span> contentSecurityPolicyHeaderValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    request<span class="token operator">:</span> <span class="token punctuation">{</span>
      headers<span class="token operator">:</span> requestHeaders<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Security-Policy&quot;</span><span class="token punctuation">,</span> contentSecurityPolicyHeaderValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,3),d=p(`<p>\uAE30\uBCF8\uC801\uC73C\uB85C \uBBF8\uB4E4\uC6E8\uC5B4\uB294 \uBAA8\uB4E0 \uC694\uCCAD\uC5D0\uC11C \uC2E4\uD589\uB429\uB2C8\uB2E4. Matcher\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD2B9\uC815 \uACBD\uB85C\uC5D0\uC11C\uB9CC \uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uC2E4\uD589\uD558\uB3C4\uB85D \uD544\uD130\uB9C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. next/link\uC758 \uD504\uB9AC\uD328\uCE58 \uBC0F CSP \uD5E4\uB354\uAC00 \uD544\uC694\uC5C6\uB294 \uC815\uC801 \uC5D0\uC14B\uACFC \uC77C\uCE58\uD558\uC9C0 \uC54A\uB3C4\uB85D \uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  matcher<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
     * API(routes)\uC640 \uAC19\uC740 \uC2DC\uC791 \uACBD\uB85C\uB97C \uAC00\uC9C4 \uBAA8\uB4E0 \uC694\uCCAD \uACBD\uB85C\uB97C \uC77C\uCE58\uC2DC\uD0B5\uB2C8\uB2E4:
     * - api (API routes)
     * - _next/static (\uC815\uC801 \uD30C\uC77C)
     * - _next/image (\uC774\uBBF8\uC9C0 \uCD5C\uC801\uD654 \uD30C\uC77C)
     * - favicon.ico (\uD30C\uBE44\uCF58 \uD30C\uC77C)
     */</span>
    <span class="token punctuation">{</span>
      source<span class="token operator">:</span> <span class="token string">&quot;/((?!api|_next/static|_next/image|favicon.ico).*)&quot;</span><span class="token punctuation">,</span>
      missing<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;header&quot;</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">&quot;next-router-prefetch&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;header&quot;</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">&quot;purpose&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;prefetch&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1102\u1169\u11AB\u1109\u1173-nonce-\u110B\u1175\u11B0\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1102\u1169\u11AB\u1109\u1173-nonce-\u110B\u1175\u11B0\u1100\u1175" aria-hidden="true">#</a> \uB17C\uC2A4(Nonce) \uC77D\uAE30</h3><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),k=p(`<p>\uC774\uC81C \uD5E4\uB354\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC11C\uBC84 \uAD6C\uC131 \uC694\uC18C\uC5D0\uC11C \uB17C\uC2A4\uB97C \uC77D\uC5B4\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> headers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/headers&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">&quot;next/script&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nonce <span class="token operator">=</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;x-nonce&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">&quot;https://www.googletagmanager.com/gtag/js&quot;</span> strategy<span class="token operator">=</span><span class="token string">&quot;afterInteractive&quot;</span> nonce<span class="token operator">=</span><span class="token punctuation">{</span>nonce<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1102\u1169\u11AB\u1109\u1173\u1100\u1161-\u110B\u1165\u11B9\u1102\u1173\u11AB-\u1100\u1167\u11BC\u110B\u116E" tabindex="-1"><a class="header-anchor" href="#\u1102\u1169\u11AB\u1109\u1173\u1100\u1161-\u110B\u1165\u11B9\u1102\u1173\u11AB-\u1100\u1167\u11BC\u110B\u116E" aria-hidden="true">#</a> \uB17C\uC2A4\uAC00 \uC5C6\uB294 \uACBD\uC6B0</h2><p>\uB17C\uC2A4\uAC00 \uD544\uC694\uD558\uC9C0 \uC54A\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uACBD\uC6B0, next.config.js \uD30C\uC77C\uC5D0\uC11C CSP \uD5E4\uB354\uB97C \uC9C1\uC811 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> cspHeader <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    default-src &#39;self&#39;;
    script-src &#39;self&#39; &#39;unsafe-eval&#39; &#39;unsafe-inline&#39;;
    style-src &#39;self&#39; &#39;unsafe-inline&#39;;
    img-src &#39;self&#39; blob: data:;
    font-src &#39;self&#39;;
    object-src &#39;none&#39;;
    base-uri &#39;self&#39;;
    form-action &#39;self&#39;;
    frame-ancestors &#39;none&#39;;
    block-all-mixed-content;
    upgrade-insecure-requests;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&quot;/(.*)&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;Content-Security-Policy&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> cspHeader<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\n</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1107\u1165\u110C\u1165\u11AB-\u1112\u1175\u1109\u1173\u1110\u1169\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#\u1107\u1165\u110C\u1165\u11AB-\u1112\u1175\u1109\u1173\u1110\u1169\u1105\u1175" aria-hidden="true">#</a> \uBC84\uC804 \uD788\uC2A4\uD1A0\uB9AC</h2><p>Next.js\uC758 v13.4.20+ \uBC84\uC804\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB17C\uC2A4\uB97C \uC62C\uBC14\uB974\uAC8C \uCC98\uB9AC\uD558\uACE0 \uC801\uC6A9\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4);function m(b,g){return n(),c("div",null,[l,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var _=o(i,[["render",m],["__file","index.html.vue"]]);export{_ as default};
