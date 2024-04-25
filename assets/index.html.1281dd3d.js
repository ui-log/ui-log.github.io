import{_ as i}from"./app.3052dcfb.js";import{l as a,m as l,E as e,G as t,p as n,Y as o,C as s,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const c={},r=s("h1",{id:"nextjs-14\u110B\u1166\u1109\u1165-middleware-js\u1105\u1169-\u1106\u1175\u1103\u1173\u11AF\u110B\u1170\u110B\u1165-\u1100\u116A\u11AB\u1105\u1175\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nextjs-14\u110B\u1166\u1109\u1165-middleware-js\u1105\u1169-\u1106\u1175\u1103\u1173\u11AF\u110B\u1170\u110B\u1165-\u1100\u116A\u11AB\u1105\u1175\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8","aria-hidden":"true"},"#"),n(" Nextjs 14\uC5D0\uC11C middleware.js\uB85C \uBBF8\uB4E4\uC6E8\uC5B4 \uAD00\uB9AC\uD558\uB294 \uBC29\uBC95")],-1),d=s("p",null,"\uBBF8\uB4E4\uC6E8\uC5B4.js|ts \uD30C\uC77C\uC740 \uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uC791\uC131\uD558\uACE0 \uC694\uCCAD\uC774 \uC644\uB8CC\uB418\uAE30 \uC804\uC5D0 \uC11C\uBC84\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC2E4\uD589\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uC218\uC2E0\uB41C \uC694\uCCAD\uC744 \uAE30\uBC18\uC73C\uB85C \uC751\uB2F5\uC744 \uC218\uC815\uD558\uC5EC \uB2E4\uC2DC \uC791\uC131\uD558\uAC70\uB098 \uB9AC\uB514\uB809\uC158\uD558\uAC70\uB098 \uC694\uCCAD \uB610\uB294 \uC751\uB2F5 \uD5E4\uB354\uB97C \uC218\uC815\uD558\uAC70\uB098 \uC9C1\uC811 \uC751\uB2F5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),u=s("p",null,"\uBBF8\uB4E4\uC6E8\uC5B4\uB294 \uACBD\uB85C\uAC00 \uB80C\uB354\uB9C1\uB418\uAE30 \uC804\uC5D0 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uC778\uC99D, \uB85C\uAE45 \uB610\uB294 \uB9AC\uB514\uB809\uC158 \uCC98\uB9AC\uC640 \uAC19\uC740 \uC0AC\uC6A9\uC790 \uC815\uC758 \uC11C\uBC84 \uCE21 \uB85C\uC9C1\uC744 \uAD6C\uD604\uD558\uB294 \uB370 \uD2B9\uD788 \uC720\uC6A9\uD569\uB2C8\uB2E4.",-1),k=s("p",null,"\uD504\uB85C\uC81D\uD2B8\uC758 \uB8E8\uD2B8\uC5D0 middleware.ts (\uB610\uB294 .js) \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD558\uC5EC \uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uC815\uC758\uD558\uC138\uC694. \uC608\uB97C \uB4E4\uC5B4, app\uC774\uB098 pages\uC640 \uAC19\uC740 \uC218\uC900\uC774\uAC70\uB098 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0 src \uB0B4\uBD80\uC5D0 \uC704\uCE58\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),h=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),v=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse<span class="token punctuation">,</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/server&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \`await\`\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 \uD568\uC218\uB97C \`async\`\uB85C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">&quot;/home&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  matcher<span class="token operator">:</span> <span class="token string">&quot;/about/:path*&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1102\u1162\u1107\u1169\u1102\u1162\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1102\u1162\u1107\u1169\u1102\u1162\u1100\u1175" aria-hidden="true">#</a> \uB0B4\uBCF4\uB0B4\uAE30</h2><h3 id="\u1106\u1175\u1103\u1173\u11AF\u110B\u1170\u110B\u1165-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#\u1106\u1175\u1103\u1173\u11AF\u110B\u1170\u110B\u1165-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> \uBBF8\uB4E4\uC6E8\uC5B4 \uD568\uC218</h3><p>\uD30C\uC77C\uC740 \uAE30\uBCF8 \uB0B4\uBCF4\uB0B4\uAE30 \uB610\uB294 \uBA85\uBA85\uB41C \uBBF8\uB4E4\uC6E8\uC5B4\uB85C \uB2E8\uC77C \uD568\uC218\uB97C \uB0B4\uBCF4\uB0B4\uC57C \uD569\uB2C8\uB2E4. \uB3D9\uC77C\uD55C \uD30C\uC77C\uC5D0\uC11C \uC5EC\uB7EC \uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294\uB2E4\uB294 \uC810\uC744 \uC720\uC758\uD558\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uAE30\uBCF8 \uB0B4\uBCF4\uB0B4\uAE30 \uC608\uC2DC</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uBBF8\uB4E4\uC6E8\uC5B4 \uB85C\uC9C1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1109\u1165\u11AF\u110C\u1165\u11BC-\u1100\u1162\u11A8\u110E\u1166-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1109\u1161\u1112\u1161\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u110C\u1165\u11BC-\u1100\u1162\u11A8\u110E\u1166-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1109\u1161\u1112\u1161\u11BC" aria-hidden="true">#</a> \uC124\uC815 \uAC1D\uCCB4 (\uC120\uD0DD\uC0AC\uD56D)</h3><p>\uBBF8\uB4E4\uC6E8\uC5B4 \uD568\uC218\uC640 \uD568\uAED8 \uB0B4\uBCF4\uB0BC \uC218 \uC788\uB294 \uC124\uC815 \uAC1D\uCCB4\uC785\uB2C8\uB2E4. \uC774 \uAC1D\uCCB4\uC5D0\uB294 \uBBF8\uB4E4\uC6E8\uC5B4\uAC00 \uC801\uC6A9\uB418\uB294 \uACBD\uB85C\uB97C \uC9C0\uC815\uD558\uB294 \uB9E4\uCC98\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4.</p><h4 id="\u1106\u1162\u110E\u1165" tabindex="-1"><a class="header-anchor" href="#\u1106\u1162\u110E\u1165" aria-hidden="true">#</a> \uB9E4\uCC98</h4><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=p('<p>\uB9E4\uCC98 \uC635\uC158\uC740 \uBBF8\uB4E4\uC6E8\uC5B4\uAC00 \uC2E4\uD589\uB418\uB294 \uD2B9\uC815 \uACBD\uB85C\uB97C \uB300\uC0C1\uC73C\uB85C \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uACBD\uB85C\uB97C \uC9C0\uC815\uD558\uB294 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><ul><li>\uD558\uB098\uC758 \uACBD\uB85C\uC5D0 \uB300\uD574: \uACBD\uB85C\uB97C \uC815\uC758\uD558\uAE30 \uC704\uD574 \uBB38\uC790\uC5F4\uC744 \uC9C1\uC811 \uC0AC\uC6A9\uD558\uC138\uC694. \uC608: <code>/about</code>.</li><li>\uC5EC\uB7EC \uACBD\uB85C\uC5D0 \uB300\uD574: \uC5EC\uB7EC \uACBD\uB85C\uB97C \uB098\uC5F4\uD558\uAE30 \uC704\uD574 \uBC30\uC5F4\uC744 \uC0AC\uC6A9\uD558\uC138\uC694. \uC608: matcher: [<code>/about</code>, <code>/contact</code>]\uB294 /about\uACFC /contact \uB458 \uB2E4\uC5D0 \uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4.</li></ul><p>\uB610\uD55C, \uB9E4\uCC98\uB294 \uC815\uADDC \uD45C\uD604\uC2DD\uC744 \uD1B5\uD574 \uBCF5\uC7A1\uD55C \uACBD\uB85C \uBA85\uC138\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC608: matcher: [<code>/((?!api|_next/static|_next/image|.*\\.png$).*)</code>]\uB294 \uD3EC\uD568\uD560\uC9C0 \uC81C\uC678\uD560\uC9C0\uB97C \uC815\uD655\uD788 \uC81C\uC5B4\uD558\uB294 \uC815\uAD50\uD55C \uACBD\uB85C\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</p><p>\uB9E4\uCC98 \uC635\uC158\uC740 \uB2E4\uC74C \uD0A4\uB97C \uAC00\uC9C4 \uAC1D\uCCB4 \uBC30\uC5F4\uB3C4 \uD5C8\uC6A9\uD569\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),g=p(`<ul><li>\uC18C\uC2A4: \uC694\uCCAD \uACBD\uB85C\uC640 \uC77C\uCE58\uC2DC\uD0A4\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB418\uB294 \uACBD\uB85C \uB610\uB294 \uD328\uD134\uC785\uB2C8\uB2E4. \uC9C1\uC811 \uACBD\uB85C \uC77C\uCE58\uB97C \uC704\uD55C \uBB38\uC790\uC5F4 \uB610\uB294 \uB354 \uBCF5\uC7A1\uD55C \uB9E4\uCE6D\uC744 \uC704\uD55C \uD328\uD134\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>regexp (\uC120\uD0DD \uC0AC\uD56D): \uC18C\uC2A4\uB97C \uAE30\uBC18\uC73C\uB85C \uB9E4\uCE6D\uC744 \uBBF8\uC138 \uC870\uC815\uD558\uB294 \uC815\uADDC \uD45C\uD604\uC2DD \uBB38\uC790\uC5F4\uC785\uB2C8\uB2E4. \uD2B9\uC815 \uACBD\uB85C\uAC00 \uD3EC\uD568\uB418\uAC70\uB098 \uC81C\uC678\uB418\uB294 \uCD94\uAC00 \uC81C\uC5B4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.</li><li>locale (\uC120\uD0DD \uC0AC\uD56D): \uACBD\uB85C \uB9E4\uCE6D\uC5D0\uC11C \uB85C\uCE98 \uAE30\uBC18 \uB77C\uC6B0\uD305\uC744 \uBB34\uC2DC\uD558\uB3C4\uB85D \uC124\uC815\uD558\uB294 \uBD88\uB9AC\uC5B8\uC785\uB2C8\uB2E4.</li><li>has (\uC120\uD0DD \uC0AC\uD56D): \uD5E4\uB354, \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218 \uB610\uB294 \uCFE0\uD0A4\uC640 \uAC19\uC740 \uD2B9\uC815 \uC694\uCCAD \uC694\uC18C\uC758 \uC874\uC7AC\uC5D0 \uB530\uB77C \uC870\uAC74\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.</li><li>missing (\uC120\uD0DD \uC0AC\uD56D): \uD2B9\uC815 \uC694\uCCAD \uC694\uC18C\uAC00 \uC5C6\uB294 \uC870\uAC74\uC5D0 \uC911\uC810\uC744 \uB461\uB2C8\uB2E4. \uB204\uB77D\uB41C \uD5E4\uB354\uB098 \uCFE0\uD0A4\uC640 \uAC19\uC740 \uC694\uC18C\uB97C \uB2E4\uB8F9\uB2C8\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&quot;/api/*&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">regexp</span><span class="token operator">:</span> <span class="token string">&quot;^/api/(.*)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;header&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;Bearer Token&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;query&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;userId&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">missing</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;cookie&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;session&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;active&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E" aria-hidden="true">#</a> \uB9E4\uAC1C\uBCC0\uC218</h2><h3 id="\u110B\u116D\u110E\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110B\u116D\u110E\u1165\u11BC" aria-hidden="true">#</a> \uC694\uCCAD</h3><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=p(`<p>\uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uC815\uC758\uD560 \uB54C, \uAE30\uBCF8 \uB0B4\uBCF4\uB0B4\uAE30 \uD568\uC218\uB294 request\uB77C\uB294 \uB2E8\uC77C \uB9E4\uAC1C\uBCC0\uC218\uB97C \uBC1B\uC2B5\uB2C8\uB2E4. \uC774 \uB9E4\uAC1C\uBCC0\uC218\uB294 NextRequest\uC758 \uC778\uC2A4\uD134\uC2A4\uB85C, \uB4E4\uC5B4\uC624\uB294 HTTP \uC694\uCCAD\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/server&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uC5EC\uAE30\uC5D0 \uBBF8\uB4E4\uC6E8\uC5B4 \uB85C\uC9C1\uC744 \uC791\uC131\uD569\uB2C8\uB2E4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\uC54C\uC544\uB450\uBA74 \uC88B\uC740 \uC810: NextRequest\uB294 Next.js \uBBF8\uB4E4\uC6E8\uC5B4\uC5D0\uC11C \uB4E4\uC5B4\uC624\uB294 HTTP \uC694\uCCAD\uC744 \uB098\uD0C0\uB0B4\uB294 \uD0C0\uC785\uC73C\uB85C, NextResponse\uB294 HTTP \uC751\uB2F5\uC744 \uC870\uC791\uD558\uACE0 \uBC18\uD658\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uB294 \uD074\uB798\uC2A4\uC785\uB2C8\uB2E4.</p></blockquote><h2 id="nextresponse" tabindex="-1"><a class="header-anchor" href="#nextresponse" aria-hidden="true">#</a> NextResponse</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=s("blockquote",null,[s("p",null,"\uBBF8\uB4E4\uC6E8\uC5B4\uB294 Web Response API\uB97C \uD655\uC7A5\uD558\uB294 NextResponse \uAC1D\uCCB4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5B4\uC694. NextResponse \uAC1D\uCCB4\uB97C \uBC18\uD658\uD568\uC73C\uB85C\uC368 \uCFE0\uD0A4\uB97C \uC9C1\uC811 \uC870\uC791\uD558\uACE0, \uD5E4\uB354\uB97C \uC124\uC815\uD558\uACE0, \uB9AC\uB514\uB809\uD2B8\uB97C \uAD6C\uD604\uD558\uBA70, \uACBD\uB85C\uB97C \uC7AC\uC791\uC131\uD560 \uC218 \uC788\uC5B4\uC694.")],-1),f=s("blockquote",null,[s("p",null,"\uCC38\uACE0: \uB9AC\uB514\uB809\uD2B8\uB97C \uC704\uD574 NextResponse.redirect \uB300\uC2E0 Response.redirect\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5B4\uC694.")],-1),w=s("h2",{id:"\u1105\u1165\u11AB\u1110\u1161\u110B\u1175\u11B7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1105\u1165\u11AB\u1110\u1161\u110B\u1175\u11B7","aria-hidden":"true"},"#"),n(" \uB7F0\uD0C0\uC784")],-1),x=s("p",null,"\uBBF8\uB4E4\uC6E8\uC5B4\uB294 Edge \uB7F0\uD0C0\uC784\uB9CC \uC9C0\uC6D0\uD574\uC694. Node.js \uB7F0\uD0C0\uC784\uC740 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC5B4\uC694.",-1),q=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),N=s("h2",{id:"\u1107\u1165\u110C\u1165\u11AB-\u110B\u1175\u1105\u1167\u11A8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1107\u1165\u110C\u1165\u11AB-\u110B\u1175\u1105\u1167\u11A8","aria-hidden":"true"},"#"),n(" \uBC84\uC804 \uC774\uB825")],-1),j=s("thead",null,[s("tr",null,[s("th",null,"\uBC84\uC804"),s("th",null,"\uBCC0\uACBD \uB0B4\uC5ED")])],-1),R=s("tr",null,[s("td",null,[s("code",null,"v13.1.0")]),s("td",null,"\uACE0\uAE09 \uBBF8\uB4E4\uC6E8\uC5B4 \uD50C\uB798\uADF8 \uCD94\uAC00")],-1),T=s("tr",null,[s("td",null,[s("code",null,"v13.0.0")]),s("td",null,"\uBBF8\uB4E4\uC6E8\uC5B4\uAC00 \uC694\uCCAD \uD5E4\uB354, \uC751\uB2F5 \uD5E4\uB354\uB97C \uC218\uC815\uD558\uACE0 \uC751\uB2F5\uC744 \uC804\uC1A1\uD560 \uC218 \uC788\uC74C")],-1),B=s("tr",null,[s("td",null,[s("code",null,"v12.2.0")]),s("td",null,[n("\uBBF8\uB4E4\uC6E8\uC5B4\uAC00 \uC548\uC815\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4. "),s("a",{href:"/docs/messages/middleware-upgrade-guide"},"\uC5C5\uADF8\uB808\uC774\uB4DC \uAC00\uC774\uB4DC"),n(" \uD655\uC778 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.")])],-1),P=s("td",null,[s("code",null,"v12.0.9")],-1),C={href:"https://github.com/vercel/next.js/pull/33410",rel:"noopener noreferrer",target:"_blank"},E={class:"inline-flex"},H={class:"with-icon_icon__MHUeb","data-testid":"geist-icon",fill:"none",height:"24","shape-rendering":"geometricPrecision",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",width:"24",style:{color:"currentColor",width:"14px",height:"14px"}},L=s("path",{d:"M7 17L17 7"},null,-1),M=s("path",{d:"M7 7h10v10"},null,-1),U=[L,M],V=s("tr",null,[s("td",null,[s("code",null,"v12.0.0")]),s("td",null,"\uBBF8\uB4E4\uC6E8\uC5B4 (\uBCA0\uD0C0) \uCD94\uAC00\uB428")],-1),A=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function I(z,D){return a(),l("div",null,[r,d,u,k,h,(a(),e(o("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(a(),e(o("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(a(),e(o("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(a(),e(o("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(a(),e(o("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(a(),e(o("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,f,w,x,q,(a(),e(o("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),N,s("table",null,[j,s("tbody",null,[R,T,B,s("tr",null,[P,s("td",null,[n("Edge \uB7F0\uD0C0\uC784\uC5D0\uC11C \uC808\uB300 URL\uC744 \uAC15\uC81C\uB85C \uC0AC\uC6A9\uD568 ("),s("a",C,[n("PR"),s("span",E,[(a(),l("svg",H,U))])]),n(")")])]),V])]),A,(a(),e(o("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var F=i(c,[["render",I],["__file","index.html.vue"]]);export{F as default};