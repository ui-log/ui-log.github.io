import{_ as o,o as n,c,a,w as s,d as t,b as p,g as e}from"./app.7f4ddb7a.js";const i={},l=e('<h1 id="nextjs-14\u110B\u1166\u1109\u1165-generatesitemaps\u1105\u1169-\u1109\u1161\u110B\u1175\u1110\u1173\u1106\u1162\u11B8-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#nextjs-14\u110B\u1166\u1109\u1165-generatesitemaps\u1105\u1169-\u1109\u1161\u110B\u1175\u1110\u1173\u1106\u1162\u11B8-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> Nextjs 14\uC5D0\uC11C generateSitemaps\uB85C \uC0AC\uC774\uD2B8\uB9F5 \uC0DD\uC131\uD558\uAE30</h1><p>generateSitemaps \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB300\uD55C \uC5EC\uB7EC \uC0AC\uC774\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1107\u1161\u11AB\u1112\u116A\u11AB\u1100\u1161\u11B9" tabindex="-1"><a class="header-anchor" href="#\u1107\u1161\u11AB\u1112\u116A\u11AB\u1100\u1161\u11B9" aria-hidden="true">#</a> \uBC18\uD658\uAC12</h2><p>generateSitemaps \uD568\uC218\uB294 id \uC18D\uC131\uC744 \uAC00\uC9C4 \uAC1D\uCCB4 \uBC30\uC5F4\uC744 \uBC18\uD658\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),u=e('<h2 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h2><p>\uD504\uB85C\uB355\uC158 \uD658\uACBD\uC5D0\uC11C \uC0DD\uC131\uB41C \uC0AC\uC774\uD2B8\uB9F5\uC740 /.../sitemap/[id].xml\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, /product/sitemap/1.xml.</p><p>\uAC1C\uBC1C \uD658\uACBD\uC5D0\uC11C \uC0DD\uC131\uB41C \uC0AC\uC774\uD2B8\uB9F5\uC740 /.../sitemap.xml/[id]\uC5D0\uC11C \uD655\uC778 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, /product/sitemap.xml/1. \uC774 \uCC28\uC774\uB294 \uC784\uC2DC\uC801\uC774\uBA70, \uD504\uB85C\uB355\uC158 \uD615\uC2DD\uC744 \uB530\uB97C \uAC83\uC785\uB2C8\uB2E4.</p><h2 id="\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> \uC608\uC2DC</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),r=e(`<p>\uC608\uB97C \uB4E4\uC5B4, generateSitemaps\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0AC\uC774\uD2B8\uB9F5\uC744 \uBD84\uD560\uD558\uB824\uBA74 sitemap id\uB97C \uD3EC\uD568\uD55C \uAC1D\uCCB4 \uBC30\uC5F4\uC744 \uBC18\uD658\uD558\uC138\uC694. \uADF8\uB7F0 \uB2E4\uC74C \uD574\uB2F9 id\uB97C \uC0AC\uC6A9\uD558\uC5EC \uACE0\uC720\uD55C \uC0AC\uC774\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD558\uC138\uC694.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">BASE_URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/app/lib/constants&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateSitemaps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uCD1D \uC81C\uD488 \uC218\uB97C \uAC00\uC838\uC640 \uD544\uC694\uD55C \uC0AC\uC774\uD2B8\uB9F5 \uC218\uB97C \uACC4\uC0B0\uD569\uB2C8\uB2E4</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sitemap</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>MetadataRoute<span class="token punctuation">.</span>Sitemap<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Google\uC758 \uC81C\uD55C\uC740 \uC0AC\uC774\uD2B8\uB9F5 \uB2F9 50,000\uAC1C\uC758 URL\uC785\uB2C8\uB2E4</span>
  <span class="token keyword">const</span> start <span class="token operator">=</span> id <span class="token operator">*</span> <span class="token number">50000</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> end <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token number">50000</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> products <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getProducts</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">SELECT id, date FROM products WHERE id BETWEEN </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> AND </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>end<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> products<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">BASE_URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/product/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>product<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    lastModified<span class="token operator">:</span> product<span class="token punctuation">.</span>date<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,3);function d(k,m){return n(),c("div",null,[l,(n(),a(p("script"),null,{default:s(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(n(),a(p("script"),null,{default:s(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(n(),a(p("script"),null,{default:s(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var v=o(i,[["render",d],["__file","index.html.vue"]]);export{v as default};