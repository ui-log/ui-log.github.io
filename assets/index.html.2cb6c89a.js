import{_ as c,o as a,c as l,a as t,w as e,d as s,b as o,e as n,g as p}from"./app.7f4ddb7a.js";const i={},r=n("h1",{id:"nextjs-14\u110B\u1166\u1109\u1165-\u1103\u1166\u110B\u1175\u1110\u1165-fetch-\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nextjs-14\u110B\u1166\u1109\u1165-\u1103\u1166\u110B\u1175\u1110\u1165-fetch-\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8","aria-hidden":"true"},"#"),s(" Nextjs 14\uC5D0\uC11C \uB370\uC774\uD130 fetch \uD558\uB294 \uBC29\uBC95")],-1),d=n("p",null,"Next.js\uB294 \uB124\uC774\uD2F0\uBE0C Web fetch() API\uB97C \uD655\uC7A5\uD558\uC5EC \uC11C\uBC84\uC758 \uAC01 \uC694\uCCAD\uC774 \uC790\uCCB4 \uC9C0\uC18D\uC801 \uCE90\uC2F1 \uC758\uBBF8\uB860\uC744 \uC124\uC815\uD560 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4.",-1),u=n("p",null,"\uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C cache \uC635\uC158\uC740 fetch \uC694\uCCAD\uC774 \uBE0C\uB77C\uC6B0\uC800\uC758 HTTP \uCE90\uC2DC\uC640 \uC0C1\uD638 \uC791\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4. \uC774 \uD655\uC7A5 \uAE30\uB2A5\uC744 \uD1B5\uD574 cache\uB294 \uC11C\uBC84 \uCE21 fetch \uC694\uCCAD\uC774 \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uC9C0\uC18D\uC801\uC778 HTTP \uCE90\uC2DC\uC640 \uC0C1\uD638 \uC791\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",-1),k=n("p",null,"\uC11C\uBC84 \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C async \uBC0F await\uC744 \uC0AC\uC6A9\uD558\uC5EC fetch\uB97C \uC9C1\uC811 \uD638\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),h=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),g=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uC218\uB3D9\uC73C\uB85C \uBB34\uD6A8\uD654\uB418\uAE30 \uC804\uAE4C\uC9C0 \uC774 \uC694\uCCAD\uC740 \uCE90\uC2DC\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</span>
  <span class="token comment">// \`getStaticProps\`\uC640 \uC720\uC0AC\uD569\uB2C8\uB2E4.</span>
  <span class="token comment">// \`force-cache\`\uB294 \uAE30\uBCF8\uAC12\uC774\uBA70 \uC0DD\uB7B5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</span>
  <span class="token keyword">const</span> staticData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> cache<span class="token operator">:</span> <span class="token string">&quot;force-cache&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \uB9E4 \uC694\uCCAD\uB9C8\uB2E4 \uC0C8\uB85C\uACE0\uCE68\uD574\uC57C \uD558\uB294 \uC694\uCCAD\uC785\uB2C8\uB2E4.</span>
  <span class="token comment">// \`getServerSideProps\`\uC640 \uC720\uC0AC\uD569\uB2C8\uB2E4.</span>
  <span class="token keyword">const</span> dynamicData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> cache<span class="token operator">:</span> <span class="token string">&quot;no-store&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \uC218\uBA85\uC774 10\uCD08\uC778 \uCE90\uC2DC\uB85C \uC800\uC7A5\uB418\uC5B4\uC57C \uD558\uB294 \uC694\uCCAD\uC785\uB2C8\uB2E4.</span>
  <span class="token comment">// \`getStaticProps\`\uC640 \`revalidate\` \uC635\uC158\uACFC \uC720\uC0AC\uD569\uB2C8\uB2E4.</span>
  <span class="token keyword">const</span> revalidatedData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    next<span class="token operator">:</span> <span class="token punctuation">{</span> revalidate<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fetch-url-options" tabindex="-1"><a class="header-anchor" href="#fetch-url-options" aria-hidden="true">#</a> fetch(url, options)</h2><p>Next.js\uB294 Web fetch() API\uB97C \uD655\uC7A5\uD558\uBBC0\uB85C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uB124\uC774\uD2F0\uBE0C \uC635\uC158\uC744 \uBAA8\uB450 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="options-cache" tabindex="-1"><a class="header-anchor" href="#options-cache" aria-hidden="true">#</a> options.cache</h3><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=p('<p>Next.js \uB370\uC774\uD130 \uCE90\uC2DC\uC640 \uC0C1\uD638 \uC791\uC6A9\uD558\uB294 \uC694\uCCAD\uC744 \uAD6C\uC131\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">&quot;force-cache&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;no-store&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>force-cache (\uAE30\uBCF8 \uC124\uC815) - Next.js\uB294 \uB370\uC774\uD130 \uCE90\uC2DC\uC5D0\uC11C \uC77C\uCE58\uD558\uB294 \uC694\uCCAD\uC744 \uCC3E\uC2B5\uB2C8\uB2E4. \uC77C\uCE58\uD558\uACE0 \uC0C8\uB85C\uC6B4 \uACBD\uC6B0, \uCE90\uC2DC\uC5D0\uC11C \uBC18\uD658\uB429\uB2C8\uB2E4. \uC77C\uCE58\uD558\uC9C0 \uC54A\uAC70\uB098 \uC624\uB798\uB41C \uACBD\uC6B0, Next.js\uB294 \uB9AC\uC18C\uC2A4\uB97C \uC6D0\uACA9 \uC11C\uBC84\uC5D0\uC11C \uAC00\uC838\uC640 \uB2E4\uC6B4\uB85C\uB4DC\uB41C \uB9AC\uC18C\uC2A4\uB85C \uCE90\uC2DC\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.</li><li>\uC77C\uCE58\uD558\uACE0 \uC0C8\uB85C\uC6B4 \uACBD\uC6B0, \uCE90\uC2DC\uC5D0\uC11C \uBC18\uD658\uB429\uB2C8\uB2E4.</li><li>\uC77C\uCE58\uD558\uC9C0 \uC54A\uAC70\uB098 \uC624\uB798\uB41C \uACBD\uC6B0, Next.js\uB294 \uB9AC\uC18C\uC2A4\uB97C \uC6D0\uACA9 \uC11C\uBC84\uC5D0\uC11C \uAC00\uC838\uC640 \uB2E4\uC6B4\uB85C\uB4DC\uB41C \uB9AC\uC18C\uC2A4\uB85C \uCE90\uC2DC\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.</li><li>no-store - Next.js\uB294 \uCE90\uC2DC\uB97C \uD655\uC778\uD558\uC9C0 \uC54A\uACE0 \uBAA8\uB4E0 \uC694\uCCAD\uB9C8\uB2E4 \uC6D0\uACA9 \uC11C\uBC84\uC5D0\uC11C \uB9AC\uC18C\uC2A4\uB97C \uAC00\uC838\uC624\uBA70, \uB2E4\uC6B4\uB85C\uB4DC\uB41C \uB9AC\uC18C\uC2A4\uB85C \uCE90\uC2DC\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</li></ul><blockquote><p>\uC54C\uC544\uB450\uBA74 \uC88B\uC740 \uC0AC\uC2E4: \uCE90\uC2DC \uC635\uC158\uC744 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC73C\uBA74 Next.js\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C force-cache\uB85C \uC124\uC815\uB429\uB2C8\uB2E4. cookies()\uC640 \uAC19\uC740 \uB3D9\uC801 \uD568\uC218\uB97C \uC0AC\uC6A9\uD55C \uACBD\uC6B0\uC5D0\uB294 no-store\uB85C \uC124\uC815\uB429\uB2C8\uB2E4. no-cache \uC635\uC158\uC740 Next.js\uC5D0\uC11C no-store\uC640 \uB3D9\uC77C\uD558\uAC8C \uC791\uB3D9\uD569\uB2C8\uB2E4.</p></blockquote><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),m=p('<h3 id="options-next-revalidate" tabindex="-1"><a class="header-anchor" href="#options-next-revalidate" aria-hidden="true">#</a> options.next.revalidate</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">revalidate</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token operator">|</span> <span class="token number">0</span> <span class="token operator">|</span> number <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uB9AC\uC18C\uC2A4\uC758 \uCE90\uC2DC \uC9C0\uC18D \uC2DC\uAC04(\uCD08)\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.</p><ul><li>false - \uB9AC\uC18C\uC2A4\uB97C \uBB34\uAE30\uD55C \uCE90\uC2F1\uD569\uB2C8\uB2E4. revalidate: Infinity \uC640 \uC758\uBBF8\uC801\uC73C\uB85C \uAC19\uC2B5\uB2C8\uB2E4. HTTP \uCE90\uC2DC\uB294 \uC624\uB798\uB41C \uB9AC\uC18C\uC2A4\uB97C \uC2DC\uAC04\uC774 \uC9C0\uB0A8\uC5D0 \uB530\uB77C \uC81C\uAC70\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>0 - \uB9AC\uC18C\uC2A4\uAC00 \uCE90\uC2F1\uB418\uC9C0 \uC54A\uB3C4\uB85D \uBC29\uC9C0\uD569\uB2C8\uB2E4.</li><li>number - (\uCD08) \uB9AC\uC18C\uC2A4\uAC00 \uCD5C\uB300 n \uCD08 \uB3D9\uC548 \uCE90\uC2DC \uC9C0\uC18D \uC2DC\uAC04\uC774 \uC788\uC5B4\uC57C \uD568\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),b=p('<blockquote><p>\uC798 \uC54C\uC544\uB450\uC138\uC694: \uAC1C\uBCC4 fetch() \uC694\uCCAD\uC774 \uACBD\uB85C\uC758 \uAE30\uBCF8 \uC7AC\uC720\uD6A8\uD654\uBCF4\uB2E4 \uB0AE\uC740 \uC7AC\uC720\uD6A8\uD654 \uC22B\uC790\uB97C \uC124\uC815\uD558\uBA74 \uC804\uCCB4 \uACBD\uB85C \uC7AC\uC720\uD6A8\uD654 \uAC04\uACA9\uC774 \uC904\uC5B4\uB4ED\uB2C8\uB2E4. \uB3D9\uC77C\uD55C \uACBD\uB85C\uC5D0\uC11C \uB3D9\uC77C\uD55C URL\uC744 \uC0AC\uC6A9\uD558\uB294 \uB450 \uAC1C\uC758 fetch \uC694\uCCAD\uC774 \uB2E4\uB978 \uC7AC\uC720\uD6A8\uD654 \uAC12\uC73C\uB85C \uC124\uC815\uB418\uC5B4 \uC788\uC744 \uACBD\uC6B0, \uB0AE\uC740 \uAC12\uC774 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uD3B8\uC758\uC0C1, revalidate\uAC00 \uC22B\uC790\uB85C \uC124\uC815\uB41C \uACBD\uC6B0 cache \uC635\uC158\uC744 \uC124\uC815\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. 0\uC740 cache: <code>no-store</code>\uB97C \uC758\uBBF8\uD558\uACE0 \uC591\uC218 \uAC12\uC740 cache: <code>force-cache</code>\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4. { revalidate: 0, cache: <code>force-cache</code> } \uB098 { revalidate: 10, cache: <code>no-store</code> }\uC640 \uAC19\uC774 \uCDA9\uB3CC\uD558\uB294 \uC635\uC158\uC774 \uC788\uB294 \uACBD\uC6B0 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.</p></blockquote><h3 id="options-next-tags" tabindex="-1"><a class="header-anchor" href="#options-next-tags" aria-hidden="true">#</a> options.next.tags</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">tags</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;collection&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uB9AC\uC18C\uC2A4\uC758 \uCE90\uC2DC \uD0DC\uADF8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C revalidateTag\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD544\uC694\uD560 \uB54C \uB370\uC774\uD130\uB97C \uB2E4\uC2DC \uC720\uD6A8\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC815\uC758 \uD0DC\uADF8\uC758 \uCD5C\uB300 \uAE38\uC774\uB294 256\uC790\uC774\uBA70 \uCD5C\uB300 \uD0DC\uADF8 \uD56D\uBAA9 \uC218\uB294 64\uC785\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),f=p('<h2 id="\u1107\u1165\u110C\u1165\u11AB-\u1112\u1175\u1109\u1173\u1110\u1169\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#\u1107\u1165\u110C\u1165\u11AB-\u1112\u1175\u1109\u1173\u1110\u1169\u1105\u1175" aria-hidden="true">#</a> \uBC84\uC804 \uD788\uC2A4\uD1A0\uB9AC</h2><table><thead><tr><th>\uBC84\uC804</th><th>\uBCC0\uACBD \uB0B4\uC6A9</th></tr></thead><tbody><tr><td><code>v13.0.0</code></td><td><code>fetch</code>\uAC00 \uB3C4\uC785\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</td></tr></tbody></table><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',3);function y(x,_){return a(),l("div",null,[r,d,u,k,h,(a(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(a(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(a(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(a(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(a(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(a(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var j=c(i,[["render",y],["__file","index.html.vue"]]);export{j as default};