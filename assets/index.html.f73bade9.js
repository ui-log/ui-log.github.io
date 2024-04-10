import{_ as i}from"./app.63e06a35.js";import{l as n,m as l,E as t,G as e,p as s,Y as o,K as p,C as a}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const c={},r=p(`<h1 id="nextjs-14-\u1109\u1161\u110B\u1175\u1110\u1173-\u110C\u1165\u11BC\u1107\u1169\u1105\u1173\u11AF-\u1103\u1161\u11B7\u110B\u1173\u11AB-manifest-json-\u110C\u1161\u11A8\u1109\u1165\u11BC-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#nextjs-14-\u1109\u1161\u110B\u1175\u1110\u1173-\u110C\u1165\u11BC\u1107\u1169\u1105\u1173\u11AF-\u1103\u1161\u11B7\u110B\u1173\u11AB-manifest-json-\u110C\u1161\u11A8\u1109\u1165\u11BC-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> Nextjs 14 \uC0AC\uC774\uD2B8 \uC815\uBCF4\uB97C \uB2F4\uC740 manifest.json \uC791\uC131 \uBC29\uBC95</h1><p>\uC6F9 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB97C \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uC571 \uB514\uB809\uD1A0\uB9AC \uB8E8\uD2B8\uC5D0 Web Manifest Specification\uACFC \uC77C\uCE58\uD558\uB294 manifest.(json|webmanifest) \uD30C\uC77C\uC744 \uCD94\uAC00\uD558\uAC70\uB098 \uC0DD\uC131\uD574 \uC8FC\uC138\uC694.</p><h2 id="\u110C\u1165\u11BC\u110C\u1165\u11A8-manifest-\u1111\u1161\u110B\u1175\u11AF" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11BC\u110C\u1165\u11A8-manifest-\u1111\u1161\u110B\u1175\u11AF" aria-hidden="true">#</a> \uC815\uC801 Manifest \uD30C\uC77C</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\uB098\uC758 Next.js \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;short_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next.js \uC5B4\uD50C&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next.js\uB85C \uB9CC\uB4E4\uC5B4\uC9C4 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;start_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=p(`<h2 id="manifest-\u1111\u1161\u110B\u1175\u11AF-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#manifest-\u1111\u1161\u110B\u1175\u11AF-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> Manifest \uD30C\uC77C \uC0DD\uC131\uD558\uAE30</h2><p>Manifest \uAC1D\uCCB4\uB97C \uBC18\uD658\uD558\uB294 manifest.js \uB610\uB294 manifest.ts \uD30C\uC77C\uC744 \uCD94\uAC00\uD574\uC8FC\uC138\uC694.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MetadataRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">manifest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MetadataRoute<span class="token punctuation">.</span>Manifest <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Next.js \uC571&quot;</span><span class="token punctuation">,</span>
    short_name<span class="token operator">:</span> <span class="token string">&quot;Next.js \uC571&quot;</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Next.js \uC571&quot;</span><span class="token punctuation">,</span>
    start_url<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    display<span class="token operator">:</span> <span class="token string">&quot;standalone&quot;</span><span class="token punctuation">,</span>
    background_color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
    theme_color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
    icons<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        src<span class="token operator">:</span> <span class="token string">&quot;/favicon.ico&quot;</span><span class="token punctuation">,</span>
        sizes<span class="token operator">:</span> <span class="token string">&quot;any&quot;</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&quot;image/x-icon&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="manifest-\u1100\u1162\u11A8\u110E\u1166" tabindex="-1"><a class="header-anchor" href="#manifest-\u1100\u1162\u11A8\u110E\u1166" aria-hidden="true">#</a> Manifest \uAC1D\uCCB4</h3><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=a("p",null,[s("manifest \uC624\uBE0C\uC81D\uD2B8\uC5D0\uB294 \uC0C8\uB85C\uC6B4 \uC6F9 \uD45C\uC900\uC5D0 \uB530\uB77C \uC5C5\uB370\uC774\uD2B8 \uB420 \uC218 \uC788\uB294 \uB9CE\uC740 \uC635\uC158 \uBAA9\uB85D\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uD604\uC7AC \uC635\uC158\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uC815\uBCF4\uB294 TypeScript\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 \uCF54\uB4DC \uD3B8\uC9D1\uAE30\uC5D0\uC11C "),a("code",null,"MetadataRoute.Manifest"),s(" \uD0C0\uC785\uC744 \uCC38\uC870\uD558\uAC70\uB098 MDN \uBB38\uC11C\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.")],-1),k=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function m(v,f){return n(),l("div",null,[r,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,k,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var x=i(c,[["render",m],["__file","index.html.vue"]]);export{x as default};
