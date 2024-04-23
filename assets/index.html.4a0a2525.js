import{_ as l}from"./app.d68f74da.js";import{l as a,m as c,E as t,G as e,p as n,Y as p,K as o,C as s}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const i={},u=o('<h1 id="nextjs-14-draft-mode-\u1107\u1161\u11BC\u1107\u1165\u11B8-\u110C\u1165\u11BC\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#nextjs-14-draft-mode-\u1107\u1161\u11BC\u1107\u1165\u11B8-\u110C\u1165\u11BC\u1105\u1175" aria-hidden="true">#</a> Nextjs 14 Draft Mode \uBC29\uBC95 \uC815\uB9AC</h1><p>\uC815\uC801 \uB80C\uB354\uB9C1\uC740 \uD398\uC774\uC9C0\uAC00 \uD5E4\uB4DC\uB9AC\uC2A4 CMS\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC62C \uB54C \uC720\uC6A9\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uD5E4\uB4DC\uB9AC\uC2A4 CMS\uC5D0\uC11C \uCD08\uC548\uC744 \uC791\uC131\uD558\uACE0 \uBC14\uB85C \uD398\uC774\uC9C0\uC5D0\uC11C \uD655\uC778\uD558\uACE0 \uC2F6\uC740 \uACBD\uC6B0\uC5D0 \uC774\uC0C1\uC801\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774\uB7F4 \uB54C Next.js\uAC00 \uC774\uB7EC\uD55C \uD398\uC774\uC9C0\uB97C \uBE4C\uB4DC \uC2DC\uAC04\uC774 \uC544\uB2C8\uB77C \uC694\uCCAD \uC2DC\uAC04\uC5D0 \uB80C\uB354\uB9C1\uD558\uACE0 \uAC8C\uC2DC\uB41C \uCF58\uD150\uCE20\uAC00 \uC544\uB2C8\uB77C \uCD08\uC548 \uCF58\uD150\uCE20\uB97C \uAC00\uC838\uC624\uB3C4\uB85D \uD558\uACE0 \uC2F6\uC744 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uD2B9\uBCC4\uD55C \uACBD\uC6B0\uC5D0\uB9CC Next.js\uAC00 \uB3D9\uC801 \uB80C\uB354\uB9C1\uC73C\uB85C \uC804\uD658\uB420 \uC218 \uC788\uB3C4\uB85D \uD558\uACE0 \uC2F6\uC744 \uAC83\uC785\uB2C8\uB2E4. Next.js\uC5D0\uB294 \uC774 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uB294 Draft Mode\uB77C\uB294 \uAE30\uB2A5\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1103\u1161\u11AB\u1100\u1168-1-\u1105\u1161\u110B\u116E\u1110\u1173-\u1112\u1162\u11AB\u1103\u1173\u11AF\u1105\u1165-\u1109\u1162\u11BC\u1109\u1165\u11BC-\u1106\u1175\u11BE-\u110C\u1165\u11B8\u1100\u1173\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-1-\u1105\u1161\u110B\u116E\u1110\u1173-\u1112\u1162\u11AB\u1103\u1173\u11AF\u1105\u1165-\u1109\u1162\u11BC\u1109\u1165\u11BC-\u1106\u1175\u11BE-\u110C\u1165\u11B8\u1100\u1173\u11AB" aria-hidden="true">#</a> \uB2E8\uACC4 1: \uB77C\uC6B0\uD2B8 \uD578\uB4E4\uB7EC \uC0DD\uC131 \uBC0F \uC811\uADFC</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',4),r=o(`<p>\uBA3C\uC800 Route Handler\uB97C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694. \uC774\uB984\uC740 \uC5B4\uB5A4 \uAC83\uC774\uB4E0 \uB429\uB2C8\uB2E4 - \uC608\uB97C \uB4E4\uC5B4 app/api/draft/route.ts \uADF8\uB7F0 \uB2E4\uC74C next/headers\uC5D0\uC11C draftMode\uB97C \uAC00\uC838\uC640 enable() \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD558\uC138\uC694.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uB4DC\uB798\uD504\uD2B8 \uBAA8\uB4DC\uB97C \uD65C\uC131\uD654\uD558\uB294 route handler</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> draftMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/headers&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">draftMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&quot;\uB4DC\uB798\uD504\uD2B8 \uBAA8\uB4DC\uAC00 \uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uD574\uC11C \uCFE0\uD0A4\uB97C \uC124\uC815\uD558\uC5EC \uB4DC\uB798\uD504\uD2B8 \uBAA8\uB4DC\uB97C \uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uCFE0\uD0A4\uB97C \uD3EC\uD568\uD55C \uD6C4\uC18D \uC694\uCCAD\uC740 \uC815\uC801\uC73C\uB85C \uC0DD\uC131\uB41C \uD398\uC774\uC9C0\uC758 \uB3D9\uC791\uC744 \uBCC0\uACBD\uD558\uB294 \uB4DC\uB798\uD504\uD2B8 \uBAA8\uB4DC\uB97C \uD2B8\uB9AC\uAC70\uD560 \uAC83\uC785\uB2C8\uB2E4 (\uC774\uC5D0 \uB300\uD574 \uB098\uC911\uC5D0 \uC790\uC138\uD788 \uC124\uBA85\uD558\uACA0\uC2B5\uB2C8\uB2E4).</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),d=s("p",null,'\uC218\uB3D9\uC73C\uB85C \uC774\uB97C \uD14C\uC2A4\uD2B8\uD558\uB824\uBA74 /api/draft\uB97C \uBC29\uBB38\uD558\uC5EC \uBE0C\uB77C\uC6B0\uC800\uC758 \uAC1C\uBC1C\uC790 \uB3C4\uAD6C\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694. "Set-Cookie"\uB77C\uB294 \uC751\uB2F5 \uD5E4\uB354\uC5D0 "__prerender_bypass"\uB77C\uB294 \uC774\uB984\uC758 \uCFE0\uD0A4\uAC00 \uC788\uB294 \uAC83\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.',-1),k=s("h3",{id:"\u1112\u1166\u1103\u1173\u11AF\u1105\u1175\u1109\u1173-cms\u110B\u1166\u1109\u1165-\u110B\u1161\u11AB\u110C\u1165\u11AB\u1112\u1161\u1100\u1166-\u110C\u1165\u11B8\u1100\u1173\u11AB\u1112\u1161\u1100\u1175",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1112\u1166\u1103\u1173\u11AF\u1105\u1175\u1109\u1173-cms\u110B\u1166\u1109\u1165-\u110B\u1161\u11AB\u110C\u1165\u11AB\u1112\u1161\u1100\u1166-\u110C\u1165\u11B8\u1100\u1173\u11AB\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),n(" \uD5E4\uB4E4\uB9AC\uC2A4 CMS\uC5D0\uC11C \uC548\uC804\uD558\uAC8C \uC811\uADFC\uD558\uAE30")],-1),v=s("p",null,"\uC2E4\uC81C\uB85C\uB294 \uD5E4\uB4E4\uB9AC\uC2A4 CMS\uC5D0\uC11C \uC774 \uB77C\uC6B0\uD2B8 \uD578\uB4E4\uB7EC\uB97C \uC548\uC804\uD558\uAC8C \uD638\uCD9C\uD558\uACE0 \uC2F6\uC744 \uAC83\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uD558\uB294 \uD5E4\uB4E4\uB9AC\uC2A4 CMS\uC5D0 \uB530\uB77C \uAD6C\uCCB4\uC801\uC778 \uB2E8\uACC4\uB294 \uB2E4\uB97C \uC218 \uC788\uC9C0\uB9CC, \uC5EC\uAE30\uC5D0 \uBA87 \uAC00\uC9C0 \uC77C\uBC18\uC801\uC778 \uB2E8\uACC4\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB2E8\uACC4\uB4E4\uC740 \uC0AC\uC6A9 \uC911\uC778 \uD5E4\uB4E4\uB9AC\uC2A4 CMS\uAC00 \uC0AC\uC6A9\uC790 \uC815\uC758 \uB4DC\uB798\uD504\uD2B8 URL \uC124\uC815\uC744 \uC9C0\uC6D0\uD558\uB294 \uAC83\uC73C\uB85C \uAC00\uC815\uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0\uB3C4 \uC774 \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB4DC\uB798\uD504\uD2B8 URL\uC744 \uBCF4\uD638\uD560 \uC218 \uC788\uC9C0\uB9CC, \uB4DC\uB798\uD504\uD2B8 URL\uC744 \uC218\uB3D9\uC73C\uB85C \uAD6C\uC131\uD558\uACE0 \uC561\uC138\uC2A4\uD574\uC57C \uD560 \uAC83\uC785\uB2C8\uB2E4.",-1),m=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=o(`<p>\uBA3C\uC800, \uC790\uC2E0\uC774 \uC120\uD0DD\uD55C \uD1A0\uD070 \uC0DD\uC131\uAE30\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC2DC\uD06C\uB9BF \uD1A0\uD070 \uBB38\uC790\uC5F4\uC744 \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uC2DC\uD06C\uB9BF\uC740 \uB2F9\uC2E0\uC758 Next.js \uC571\uACFC \uD5E4\uB4DC\uB9AC\uC2A4 CMS\uB9CC\uC774 \uC54C\uAC8C \uB420 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uC2DC\uD06C\uB9BF\uC740 CMS\uC5D0 \uC561\uC138\uC2A4\uD560 \uC218 \uC5C6\uB294 \uC0AC\uB78C\uB4E4\uC774 \uCD08\uC548 URL\uC5D0 \uC561\uC138\uC2A4\uD558\uB294 \uAC83\uC744 \uBC29\uC9C0\uD569\uB2C8\uB2E4. \uB458\uC9F8, \uD5E4\uB4DC\uB9AC\uC2A4 CMS\uAC00 \uC0AC\uC6A9\uC790 \uC815\uC758 \uCD08\uC548 URL\uC744 \uC124\uC815\uD558\uB294 \uAC83\uC744 \uC9C0\uC6D0\uD558\uB294 \uACBD\uC6B0, \uB2E4\uC74C\uC744 \uCD08\uC548 URL\uB85C \uC9C0\uC815\uD558\uC2ED\uC2DC\uC624. \uC774\uB294 Route Handler\uAC00 app/api/draft/route.ts\uC5D0 \uC704\uCE58\uD55C\uB2E4\uACE0 \uAC00\uC815\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">&lt;</span>your<span class="token operator">-</span>site<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>draft<span class="token operator">?</span>secret<span class="token operator">=</span><span class="token operator">&lt;</span>token<span class="token operator">&gt;</span><span class="token operator">&amp;</span>slug<span class="token operator">=</span><span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>&lt;your-site&gt;</code>\uB294 \uBC30\uD3EC \uB3C4\uBA54\uC778\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.</li><li><code>&lt;token&gt;</code>\uC740 \uC0DD\uC131\uD55C \uC2DC\uD06C\uB9BF \uD1A0\uD070\uC73C\uB85C \uB300\uCCB4\uD574\uC57C \uD569\uB2C8\uB2E4.</li><li><code>&lt;path&gt;</code>\uB294 \uBCF4\uACE0 \uC2F6\uC740 \uD398\uC774\uC9C0\uC758 \uACBD\uB85C\uC5EC\uC57C \uD569\uB2C8\uB2E4. /posts/foo\uB97C \uBCF4\uACE0 \uC2F6\uB2E4\uBA74 &amp;slug=/posts/foo\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),g=o(`<p>\uD5E4\uB4E4\uB9AC\uC2A4 CMS\uB97C \uC0AC\uC6A9\uD558\uBA74 \uCD08\uC548 URL\uC5D0 \uBCC0\uC218\uB97C \uD3EC\uD568\uD560 \uC218 \uC788\uC5B4\uC694. \uC774\uB807\uAC8C\uD558\uBA74 <code>&lt;path&gt;</code>\uAC00 CMS \uB370\uC774\uD130\uC5D0 \uB530\uB77C \uB3D9\uC801\uC73C\uB85C \uC124\uC815\uB420 \uC218 \uC788\uC5B4\uC694: &amp;slug=/posts/{entry.fields.slug} \uB9C8\uC9C0\uB9C9\uC73C\uB85C, \uB77C\uC6B0\uD2B8 \uD578\uB4E4\uB7EC\uC5D0\uC11C:</p><ul><li>\uBE44\uBC00 \uD1A0\uD070\uC744 \uD655\uC778\uD558\uACE0 \uC2AC\uB7EC\uADF8 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694 (\uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uC694\uCCAD\uC774 \uC2E4\uD328\uD574\uC57C \uD569\uB2C8\uB2E4).</li><li>draftMode.enable()\uC744 \uD638\uCD9C\uD558\uC5EC \uCFE0\uD0A4\uB97C \uC124\uC815\uD558\uC138\uC694.</li><li>\uADF8\uB7F0 \uB2E4\uC74C \uBE0C\uB77C\uC6B0\uC800\uB97C slug\uB85C \uC9C0\uC815\uB41C \uACBD\uB85C\uB85C \uB9AC\uB514\uB809\uC158\uD558\uC138\uC694.</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uBE44\uBC00 \uBC0F \uC2AC\uB7EC\uADF8 \uC788\uB294 \uB77C\uC6B0\uD2B8 \uD578\uB4E4\uB7EC</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> draftMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/headers&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/navigation&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uCFFC\uB9AC \uBB38\uC790\uC5F4 \uB9E4\uAC1C\uBCC0\uC218 \uAD6C\uBB38 \uBD84\uC11D</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> searchParams <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> secret <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> slug <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;slug&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \uBE44\uBC00 \uBC0F \uB2E4\uC74C \uB9E4\uAC1C\uBCC0\uC218 \uD655\uC778</span>
  <span class="token comment">//\uC774 \uBE44\uBC00 \uC815\uBCF4\uB294 \uC774 \uB77C\uC6B0\uD2B8 \uD578\uB4E4\uB7EC\uC640 CMS\uC5D0\uC11C\uB9CC \uC54C\uB824\uC9C4 \uC815\uBCF4\uC5EC\uC57C \uD569\uB2C8\uB2E4</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>secret <span class="token operator">!==</span> <span class="token string">&quot;MY_SECRET_TOKEN&quot;</span> <span class="token operator">||</span> <span class="token operator">!</span>slug<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&quot;\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uD1A0\uD070&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">401</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Headless CMS\uB97C \uAC00\uC838\uC640 \uC81C\uACF5\uB41C &#39;slug&#39;\uAC00 \uC788\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4</span>
  <span class="token comment">// getPostBySlug\uB294 Headless CMS\uB85C \uD544\uC694\uD55C \uAC00\uC838\uC624\uAE30 \uB85C\uC9C1\uC744 \uAD6C\uD604\uD560 \uAC83\uC785\uB2C8\uB2E4</span>
  <span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getPostBySlug</span><span class="token punctuation">(</span>slug<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// slug\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uCD08\uC548 \uBAA8\uB4DC\uB97C \uD65C\uC131\uD654\uD558\uC9C0 \uC54A\uC74C</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>post<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&quot;\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uC2AC\uB7EC\uADF8&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">401</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \uCFE0\uD0A4\uB97C \uC124\uC815\uD558\uC5EC \uCD08\uC548 \uBAA8\uB4DC \uD65C\uC131\uD654</span>
  <span class="token function">draftMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \uAC00\uC838\uC628 \uAC8C\uC2DC\uBB3C\uC758 \uACBD\uB85C\uB85C \uB9AC\uB514\uB809\uC158</span>
  <span class="token comment">// open redirect \uCDE8\uC57D\uC810\uC73C\uB85C \uC774\uC5B4\uC9C8 \uC218 \uC788\uB294 searchParams.slug\uB85C \uB9AC\uB514\uB809\uC158\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4</span>
  <span class="token function">redirect</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>slug<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),y=s("p",null,"\uC774\uAC83\uC774 \uC131\uACF5\uD558\uBA74, \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC6D0\uD558\uB294 \uACBD\uB85C\uB85C redirect\uB418\uBA70 \uCD08\uC548 \uBAA8\uB4DC \uCFE0\uD0A4\uB85C \uC124\uC815\uB420 \uAC83\uC785\uB2C8\uB2E4.",-1),h=s("h2",{id:"\u1103\u1161\u11AB\u1100\u1168-2-\u1111\u1166\u110B\u1175\u110C\u1175-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1103\u1161\u11AB\u1100\u1168-2-\u1111\u1166\u110B\u1175\u110C\u1175-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173","aria-hidden":"true"},"#"),n(" \uB2E8\uACC4 2: \uD398\uC774\uC9C0 \uC5C5\uB370\uC774\uD2B8")],-1),f=s("p",null,"\uB2E4\uC74C \uB2E8\uACC4\uB294 \uD398\uC774\uC9C0\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uC5EC draftMode().isEnabled\uC758 \uAC12\uC744 \uD655\uC778\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uCFE0\uD0A4\uAC00 \uC124\uC815\uB41C \uD398\uC774\uC9C0\uB97C \uC694\uCCAD\uD558\uBA74 \uB370\uC774\uD130\uAC00 \uBE4C\uB4DC \uC2DC\uAC04\uC774 \uC544\uB2CC \uC694\uCCAD \uC2DC\uAC04\uC5D0 \uAC00\uC838\uC62C \uAC83\uC785\uB2C8\uB2E4.",-1),w=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),_=o(`<p>\uB354\uC6B1\uC774, isEnabled\uC758 \uAC12\uC740 true\uAC00 \uB420 \uAC83\uC785\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uB294 \uD398\uC774\uC9C0</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> draftMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/headers&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> isEnabled <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">draftMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> url <span class="token operator">=</span> isEnabled <span class="token operator">?</span> <span class="token string">&quot;https://draft.example.com&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;https://production.example.com&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> desc <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>desc<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC5EC\uAE30\uAE4C\uC9C0\uC785\uB2C8\uB2E4! \uB9CC\uC57D \uD5E4\uB4E4\uB9AC\uC2A4 CMS\uB098 \uC218\uB3D9\uC73C\uB85C \uC228\uC740 Route Handler\uC5D0 \uC561\uC138\uC2A4\uD55C\uB2E4\uBA74, \uC774\uC81C \uB4DC\uB798\uD504\uD2B8 \uCEE8\uD150\uCE20\uB97C \uBCFC \uC218 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uB610\uD55C, \uB4DC\uB798\uD504\uD2B8\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uACE0 \uBC1C\uD589\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0\uB3C4 \uB4DC\uB798\uD504\uD2B8\uB97C \uBCFC \uC218 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC774\uB97C \uD5E4\uB4E4\uB9AC\uC2A4 CMS\uC758 \uB4DC\uB798\uD504\uD2B8 URL\uB85C \uC124\uC815\uD558\uAC70\uB098 \uC218\uB3D9\uC73C\uB85C \uC561\uC138\uC2A4\uD558\uC5EC \uB4DC\uB798\uD504\uD2B8\uB97C \uBCFC \uC218 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),x=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">&lt;</span>your<span class="token operator">-</span>site<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>draft<span class="token operator">?</span>secret<span class="token operator">=</span><span class="token operator">&lt;</span>token<span class="token operator">&gt;</span><span class="token operator">&amp;</span>slug<span class="token operator">=</span><span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u1103\u1165-\u110C\u1161\u1109\u1166\u1112\u1161\u11AB-\u110C\u1165\u11BC\u1107\u1169" tabindex="-1"><a class="header-anchor" href="#\u1103\u1165-\u110C\u1161\u1109\u1166\u1112\u1161\u11AB-\u110C\u1165\u11BC\u1107\u1169" aria-hidden="true">#</a> \uB354 \uC790\uC138\uD55C \uC815\uBCF4</h2><h3 id="\u1103\u1173\u1105\u1162\u1111\u1173\u1110\u1173-\u1106\u1169\u1103\u1173-\u110F\u116E\u110F\u1175-\u110C\u1175\u110B\u116E\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1173\u1105\u1162\u1111\u1173\u1110\u1173-\u1106\u1169\u1103\u1173-\u110F\u116E\u110F\u1175-\u110C\u1175\u110B\u116E\u1100\u1175" aria-hidden="true">#</a> \uB4DC\uB798\uD504\uD2B8 \uBAA8\uB4DC \uCFE0\uD0A4 \uC9C0\uC6B0\uAE30</h3><p>\uAE30\uBCF8\uC801\uC73C\uB85C, \uBE0C\uB77C\uC6B0\uC800\uAC00 \uB2EB\uD788\uBA74 \uB4DC\uB798\uD504\uD2B8 \uBAA8\uB4DC \uC138\uC158\uC774 \uC885\uB8CC\uB429\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),q=o(`<p>Draft Mode \uCFE0\uD0A4\uB97C \uC218\uB3D9\uC73C\uB85C \uC9C0\uC6B0\uB824\uBA74 draftMode().disable()\uB97C \uD638\uCD9C\uD558\uB294 Route Handler\uB97C \uC0DD\uC131\uD558\uC2ED\uC2DC\uC624:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> draftMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/headers&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">draftMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&quot;Draft mode is disabled&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uADF8\uB7F0 \uB2E4\uC74C /api/disable-draft\uB85C \uC694\uCCAD\uC744 \uBCF4\uB0B4\uC5B4 Route Handler\uB97C \uD638\uCD9C\uD558\uC2ED\uC2DC\uC624. \uB9CC\uC57D next/link\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774 \uB77C\uC6B0\uD2B8\uB97C \uD638\uCD9C\uD558\uB294 \uACBD\uC6B0, \uBBF8\uB9AC \uAC00\uC838\uC624\uAE30(prefetch)\uC5D0\uC11C \uC2E4\uC218\uB85C \uCFE0\uD0A4\uB97C \uC0AD\uC81C\uD558\uB294 \uAC83\uC744 \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 prefetch={false}\uB97C \uC804\uB2EC\uD574\uC57C \uD569\uB2C8\uB2E4.</p><h3 id="\u1100\u1161\u11A8\u1100\u1161\u11A8\u110B\u1174-next-\u1107\u1175\u11AF\u1103\u1173\u1107\u1167\u11AF\u1105\u1169-\u1100\u1169\u110B\u1172\u1112\u1161\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1100\u1161\u11A8\u1100\u1161\u11A8\u110B\u1174-next-\u1107\u1175\u11AF\u1103\u1173\u1107\u1167\u11AF\u1105\u1169-\u1100\u1169\u110B\u1172\u1112\u1161\u11B7" aria-hidden="true">#</a> \uAC01\uAC01\uC758 next \uBE4C\uB4DC\uBCC4\uB85C \uACE0\uC720\uD568</h3><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),M=s("p",null,[n("\uB2E4\uC74C \uBE4C\uB4DC\uB97C \uC2E4\uD589\uD560 \uB54C\uB9C8\uB2E4 \uC0C8\uB85C\uC6B4 \uBC14\uC774\uD328\uC2A4 \uCFE0\uD0A4 \uAC12\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4."),s("br"),n(" \uC774\uB807\uAC8C \uD568\uC73C\uB85C\uC368 \uBC14\uC774\uD328\uC2A4 \uCFE0\uD0A4\uAC00 \uCD94\uCE21\uB418\uC9C0 \uC54A\uB3C4\uB85D \uBCF4\uC7A5\uB429\uB2C8\uB2E4.")],-1),R=s("blockquote",null,[s("p",null,"\uC54C\uC544\uB450\uBA74 \uC88B\uC740 \uC0AC\uD56D: Draft Mode\uB97C \uB85C\uCEEC\uC5D0\uC11C HTTP\uB85C \uD14C\uC2A4\uD2B8\uD558\uB824\uBA74 \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC81C3\uC790 \uCFE0\uD0A4\uC640 \uB85C\uCEEC \uC800\uC7A5\uC18C \uC561\uC138\uC2A4\uB97C \uD5C8\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.")],-1),C=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function S(j,E){return a(),c("div",null,[u,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,k,v,m,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,h,f,w,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),q,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),M,R,C,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var T=l(i,[["render",S],["__file","index.html.vue"]]);export{T as default};
