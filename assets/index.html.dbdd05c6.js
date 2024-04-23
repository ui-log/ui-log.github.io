import{_ as p}from"./app.d68f74da.js";import{l as n,m as c,E as a,G as s,p as t,Y as e,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const l={},i=o(`<h1 id="nextjs-\u110B\u1166\u1109\u1165-\u1110\u1173\u11A8\u110C\u1165\u11BC-\u1111\u1166\u110B\u1175\u110C\u1175-\u110F\u1162\u1109\u1175\u11BC\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8-unstable-nostore" tabindex="-1"><a class="header-anchor" href="#nextjs-\u110B\u1166\u1109\u1165-\u1110\u1173\u11A8\u110C\u1165\u11BC-\u1111\u1166\u110B\u1175\u110C\u1175-\u110F\u1162\u1109\u1175\u11BC\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8-unstable-nostore" aria-hidden="true">#</a> Nextjs \uC5D0\uC11C \uD2B9\uC815 \uD398\uC774\uC9C0 \uCE90\uC2F1\uD558\uC9C0 \uC54A\uB294 \uBC29\uBC95(unstable_noStore)</h1><p>unstable_noStore \uB294 \uC815\uC801 \uB80C\uB354\uB9C1\uC744 \uAC70\uBD80\uD558\uACE0 \uD2B9\uC815 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uCE90\uC2DC\uB418\uC9C0 \uC54A\uC544\uC57C \uD568\uC744 \uC120\uC5B8\uC801\uC73C\uB85C \uB098\uD0C0\uB0B4\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> unstable_noStore <span class="token keyword">as</span> noStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/cache&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">noStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\uC720\uC758\uD560 \uC810: unstable_noStore \uB294 fetch\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 cache: <code>no-store</code> \uC640 \uB3D9\uC77C\uD569\uB2C8\uB2E4. unstable_noStore \uB294 export const dynamic = <code>force-dynamic</code> \uBCF4\uB2E4 \uC138\uBC00\uD558\uBA70 \uCEF4\uD3EC\uB10C\uD2B8\uBCC4\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC120\uD638\uB429\uB2C8\uB2E4.</p></blockquote><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=o(`<ul><li>unstable_cache \uB0B4\uBD80\uC5D0\uC11C unstable_noStore\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 \uC815\uC801 \uC0DD\uC131\uC744 \uC120\uD0DD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB300\uC2E0, \uACB0\uACFC\uB97C \uCE90\uC2DC\uD560\uC9C0 \uC5EC\uBD80\uB97C \uACB0\uC815\uD558\uB294 \uB370 \uCE90\uC2DC \uAD6C\uC131\uC744 \uB530\uB97C \uAC83\uC785\uB2C8\uB2E4.</li></ul><h2 id="\u1109\u1161\u110B\u116D\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uC0AC\uC6A9\uBC95</h2><p>fetch\uC5D0 \uCD94\uAC00 \uC635\uC158\uC744 \uC804\uB2EC\uD558\uB294 \uAC83\uC744 \uC120\uD638\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0(\uC608: cache: <code>no-store</code> \uB610\uB294 next: { revalidate: 0 }\uC640 \uAC19\uC740), \uC774\uB7EC\uD55C \uBAA8\uB4E0 \uACBD\uC6B0\uC758 \uB300\uCCB4\uB85C noStore()\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> unstable_noStore <span class="token keyword">as</span> noStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/cache&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">noStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),r=o('<h2 id="\u1107\u1165\u110C\u1165\u11AB-\u1102\u1162\u110B\u1167\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1107\u1165\u110C\u1165\u11AB-\u1102\u1162\u110B\u1167\u11A8" aria-hidden="true">#</a> \uBC84\uC804 \uB0B4\uC5ED</h2><table><thead><tr><th>\uBC84\uC804</th><th>\uBCC0\uACBD \uC0AC\uD56D</th></tr></thead><tbody><tr><td><code>v14.0.0</code></td><td><code>unstable_noStore</code>\uC774 \uB3C4\uC785\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</td></tr></tbody></table><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',3);function u(k,b){return n(),c("div",null,[i,(n(),a(e("script"),null,{default:s(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(n(),a(e("script"),null,{default:s(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(n(),a(e("script"),null,{default:s(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var _=p(l,[["render",u],["__file","index.html.vue"]]);export{_ as default};
