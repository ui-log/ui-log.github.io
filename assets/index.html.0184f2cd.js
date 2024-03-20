import{_ as o,o as a,c as l,a as t,w as n,b as p,r as e,d as s}from"./app.e672c54b.js";const c={},d=s('<h1 id="nextjs-14-\u1103\u1169\u11BC\u110C\u1165\u11A8-\u1105\u1161\u110B\u116E\u1110\u1173-dynamic-route-\u1109\u1161\u110B\u116D\u11BC-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#nextjs-14-\u1103\u1169\u11BC\u110C\u1165\u11A8-\u1105\u1161\u110B\u116E\u1110\u1173-dynamic-route-\u1109\u1161\u110B\u116D\u11BC-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> Nextjs 14 \uB3D9\uC801 \uB77C\uC6B0\uD2B8(Dynamic Route) \uC0AC\uC6A9 \uBC29\uBC95</h1><h1 id="\u1103\u1169\u11BC\u110C\u1165\u11A8-\u1105\u1161\u110B\u116E\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1103\u1169\u11BC\u110C\u1165\u11A8-\u1105\u1161\u110B\u116E\u1110\u1173" aria-hidden="true">#</a> \uB3D9\uC801 \uB77C\uC6B0\uD2B8</h1><p>\uC815\uD655\uD55C \uC138\uADF8\uBA3C\uD2B8 \uC774\uB984\uC744 \uBBF8\uB9AC \uC54C \uC218 \uC5C6\uACE0 \uB3D9\uC801 \uB370\uC774\uD130\uC5D0\uC11C \uB77C\uC6B0\uD2B8\uB97C \uC0DD\uC131\uD558\uB824\uBA74 \uC694\uCCAD \uC2DC\uAC04\uC5D0 \uCC44\uC6CC\uC9C0\uB294 \uB3D9\uC801 \uC138\uADF8\uBA3C\uD2B8\uB098 \uBE4C\uB4DC \uC2DC\uAC04\uC5D0 \uC0AC\uC804 \uB80C\uB354\uB9C1\uB418\uB294 \uB3D9\uC801 \uC138\uADF8\uBA3C\uD2B8\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1100\u1172\u110E\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1100\u1172\u110E\u1175\u11A8" aria-hidden="true">#</a> \uADDC\uCE59</h2><p>\uD3F4\uB354 \uC774\uB984\uC744 \uB300\uAD04\uD638\uB85C \uAC10\uC2F8\uBA74 \uB3D9\uC801 \uC138\uADF8\uBA3C\uD2B8\uB97C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4: [\uD3F4\uB354\uC774\uB984]. \uC608\uB97C \uB4E4\uC5B4, [id] \uB610\uB294 [slug]\uC785\uB2C8\uB2E4.</p><p>\uB3D9\uC801 \uC138\uADF8\uBA3C\uD2B8\uB294 \uB808\uC774\uC544\uC6C3(layout), \uD398\uC774\uC9C0(page), \uB77C\uC6B0\uD2B8(route), generateMetadata \uD568\uC218\uC758 params \uC18D\uC131\uC73C\uB85C \uC804\uB2EC\uB429\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',7),r=s(`<h2 id="\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> \uC608\uC2DC</h2><p>\uC608\uB97C \uB4E4\uC5B4, \uBE14\uB85C\uADF8\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB77C\uC6B0\uD2B8\uB97C \uD3EC\uD568\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4: app/blog/[slug]/page.js \uC5EC\uAE30\uC11C [slug]\uB294 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uC758 \uB3D9\uC801 \uC138\uADF8\uBA3C\uD2B8\uC785\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> slug<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\uB0B4 \uAE00<span class="token operator">:</span> <span class="token punctuation">{</span>params<span class="token punctuation">.</span>slug<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\uB77C\uC6B0\uD2B8</th><th>\uC608\uC2DC URL</th><th>params</th></tr></thead><tbody><tr><td>app/blog/[slug]/page.js</td><td>/blog/a</td><td>{ slug: &#39;a&#39; }</td></tr><tr><td>app/blog/[slug]/page.js</td><td>/blog/b</td><td>{ slug: &#39;b&#39; }</td></tr><tr><td>app/blog/[slug]/page.js</td><td>/blog/c</td><td>{ slug: &#39;c&#39; }</td></tr></tbody></table><p>\uC138\uADF8\uBA3C\uD2B8\uC758 params\uB97C \uC0DD\uC131\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uB824\uBA74 generateStaticParams() \uD398\uC774\uC9C0\uB97C \uCC38\uC870\uD558\uC138\uC694.</p><blockquote><p>\uCC38\uACE0: \uB3D9\uC801 \uC138\uADF8\uBA3C\uD2B8\uB294 \uD398\uC774\uC9C0 \uB514\uB809\uD130\uB9AC\uC758 \uB3D9\uC801 \uB77C\uC6B0\uD2B8\uC640 \uB3D9\uC77C\uD569\uB2C8\uB2E4.</p></blockquote><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,7),i=s(`<h2 id="\u110C\u1165\u11BC\u110C\u1165\u11A8-params-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11BC\u110C\u1165\u11A8-params-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uC815\uC801 params \uC0DD\uC131</h2><p>generateStaticParams \uD568\uC218\uB294 \uB3D9\uC801 \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uC5EC \uC694\uCCAD \uC2DC\uAC04\uC774 \uC544\uB2CC \uBE4C\uB4DC \uC2DC\uAC04\uC5D0 \uC815\uC801\uC73C\uB85C \uB77C\uC6B0\uD2B8\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateStaticParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;https://.../posts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    slug<span class="token operator">:</span> post<span class="token punctuation">.</span>slug<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>generateStaticParams \uD568\uC218\uC758 \uC8FC\uC694 \uC7A5\uC810\uC740 \uB370\uC774\uD130\uB97C \uC2A4\uB9C8\uD2B8\uD558\uAC8C \uAC80\uC0C9\uD560 \uC218 \uC788\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. generateStaticParams \uD568\uC218 \uB0B4\uC5D0\uC11C fetch \uC694\uCCAD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uCF58\uD150\uCE20\uB97C \uAC00\uC838\uC624\uBA74 \uC694\uCCAD\uC740 \uC790\uB3D9\uC73C\uB85C \uBA54\uBAA8\uC774\uC81C\uC774\uC158\uB429\uB2C8\uB2E4. \uC774\uB294 \uB3D9\uC77C\uD55C \uC778\uC218\uB97C \uAC00\uC9C4 \uC5EC\uB7EC generateStaticParams, \uB808\uC774\uC544\uC6C3(layout), \uD398\uC774\uC9C0(page)\uC5D0\uC11C\uC758 fetch \uC694\uCCAD\uC740 \uD55C \uBC88\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uBBC0\uB85C \uBE4C\uB4DC \uC2DC\uAC04\uC774 \uAC10\uC18C\uD569\uB2C8\uB2E4.</p><p>\uD398\uC774\uC9C0 \uB514\uB809\uD130\uB9AC\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uB294 \uACBD\uC6B0 \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uAC00\uC774\uB4DC\uB97C \uCC38\uC870\uD558\uC138\uC694.</p><p>\uB354 \uB9CE\uC740 \uC815\uBCF4\uC640 \uACE0\uAE09 \uC0AC\uC6A9 \uC0AC\uB840\uC5D0 \uB300\uD55C generateStaticParams \uC11C\uBC84 \uD568\uC218 \uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,7),u=s('<h2 id="catch-all-\u1109\u1166\u1100\u1173\u1106\u1165\u11AB\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#catch-all-\u1109\u1166\u1100\u1173\u1106\u1165\u11AB\u1110\u1173" aria-hidden="true">#</a> Catch-all \uC138\uADF8\uBA3C\uD2B8</h2><p>\uB3D9\uC801 \uC138\uADF8\uBA3C\uD2B8\uB294 \uB300\uAD04\uD638 \uC548\uC5D0 \uB9C8\uCE68\uD45C\uB97C \uCD94\uAC00\uD558\uC5EC \uC774\uD6C4 \uBAA8\uB4E0 \uC138\uADF8\uBA3C\uD2B8\uB97C \uCE90\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4: [...\uD3F4\uB354\uC774\uB984].</p><p>\uC608\uB97C \uB4E4\uC5B4, app/shop/[...slug]/page.js\uB294 /shop/clothes\uC640 \uC77C\uCE58\uD558\uC9C0\uB9CC /shop/clothes/tops, /shop/clothes/tops/t-shirts \uB4F1\uB3C4 \uC77C\uCE58\uD569\uB2C8\uB2E4.</p><table><thead><tr><th>\uB77C\uC6B0\uD2B8</th><th>\uC608\uC2DC URL</th><th>params</th></tr></thead><tbody><tr><td>app/shop/[...slug]/page.js</td><td>/shop/a</td><td>{ slug: [&#39;a&#39;] }</td></tr><tr><td>app/shop/[...slug]/page.js</td><td>/shop/a/b</td><td>{ slug: [&#39;a&#39;, &#39;b&#39;] }</td></tr><tr><td>app/shop/[...slug]/page.js</td><td>/shop/a/b/c</td><td>{ slug: [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;] }</td></tr></tbody></table><h2 id="\u1109\u1165\u11AB\u1110\u1162\u11A8\u110C\u1165\u11A8-catch-all-\u1109\u1166\u1100\u1173\u1106\u1165\u11AB\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AB\u1110\u1162\u11A8\u110C\u1165\u11A8-catch-all-\u1109\u1166\u1100\u1173\u1106\u1165\u11AB\u1110\u1173" aria-hidden="true">#</a> \uC120\uD0DD\uC801 Catch-all \uC138\uADF8\uBA3C\uD2B8</h2><p>Catch-all \uC138\uADF8\uBA3C\uD2B8\uB294 \uC774\uC911 \uB300\uAD04\uD638\uC5D0 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uD3EC\uD568\uD558\uC5EC \uC120\uD0DD\uC801\uC73C\uB85C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4: [[...\uD3F4\uB354\uC774\uB984]].</p><p>\uC608\uB97C \uB4E4\uC5B4, app/shop/[[...slug]]/page.js\uB294 /shop \uBFD0\uB9CC \uC544\uB2C8\uB77C /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-shirts\uC640\uB3C4 \uC77C\uCE58\uD569\uB2C8\uB2E4.</p><p>Catch-all\uACFC \uC120\uD0DD\uC801 catch-all \uC138\uADF8\uBA3C\uD2B8\uC758 \uCC28\uC774\uC810\uC740 \uC120\uD0DD\uC801\uC73C\uB85C \uB77C\uC6B0\uD2B8\uC5D0 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC5B4\uB3C4 (/shop\uC758 \uACBD\uC6B0) \uD574\uB2F9 \uB77C\uC6B0\uD2B8\uB3C4 \uC77C\uCE58\uB41C\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4.</p><table><thead><tr><th>\uB77C\uC6B0\uD2B8</th><th>\uC608\uC2DC URL</th><th>params</th></tr></thead><tbody><tr><td>app/shop/[[...slug]]/page.js</td><td>/shop</td><td>{}</td></tr><tr><td>app/shop/[[...slug]]/page.js</td><td>/shop/a</td><td>{ slug: [&#39;a&#39;] }</td></tr><tr><td>app/shop/[[...slug]]/page.js</td><td>/shop/a/b</td><td>{ slug: [&#39;a&#39;, &#39;b&#39;] }</td></tr><tr><td>app/shop/[[...slug]]/page.js</td><td>/shop/a/b/c</td><td>{ slug: [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;] }</td></tr></tbody></table><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',10),h=s(`<h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h2><p>TypeScript\uB97C \uC0AC\uC6A9\uD560 \uB54C, \uAD6C\uC131\uB41C \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8\uC5D0 \uB9DE\uAC8C params\uC5D0 \uB300\uD55C \uD0C0\uC785\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> slug<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>\uB0B4 \uD398\uC774\uC9C0<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\uB77C\uC6B0\uD2B8</th><th>params \uD0C0\uC785 \uC815\uC758</th></tr></thead><tbody><tr><td>app/blog/[slug]/page.js</td><td>{ slug: string }</td></tr><tr><td>app/shop/[...slug]/page.js</td><td>{ slug: string[] }</td></tr><tr><td>app/shop/[[...slug]]/page.js</td><td>{ slug?: string[] }</td></tr><tr><td>app/[categoryId]/[itemId]/page.js</td><td>{ categoryId: string, itemId: string }</td></tr></tbody></table><blockquote><p>\uCC38\uACE0: \uC774\uB7EC\uD55C \uC791\uC5C5\uC740 \uD5A5\uD6C4 TypeScript \uD50C\uB7EC\uADF8\uC778\uC5D0\uC11C \uC790\uB3D9\uC73C\uB85C \uC218\uD589\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></blockquote>`,5);function g(k,b){return a(),l("div",null,[d,(a(),t(e("script"),null,{default:n(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(a(),t(e("script"),null,{default:n(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),i,(a(),t(e("script"),null,{default:n(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(a(),t(e("script"),null,{default:n(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h])}var y=o(c,[["render",g],["__file","index.html.vue"]]);export{y as default};