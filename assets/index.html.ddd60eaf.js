import{_ as l}from"./app.3052dcfb.js";import{l as s,m as d,E as t,G as e,p as n,Y as o,K as p,C as a}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/layout.js_0.1a8889c4.png";const i={},r=p(`<h1 id="nextjs-14-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA-\u1100\u1169\u11BC\u110B\u1172\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-layout-js-\u110C\u1165\u11BC\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#nextjs-14-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA-\u1100\u1169\u11BC\u110B\u1172\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-layout-js-\u110C\u1165\u11BC\u1105\u1175" aria-hidden="true">#</a> Nextjs 14 - \uB808\uC774\uC544\uC6C3 \uACF5\uC720\uB97C \uC704\uD55C layout.js \uC815\uB9AC</h1><p>\uB808\uC774\uC544\uC6C3\uC740 \uACBD\uB85C \uAC04\uC5D0 \uACF5\uC720\uB418\uB294 UI\uC785\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">DashboardLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>section<span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3\uC740 \uB8E8\uD2B8 \uC571 \uB514\uB809\uD130\uB9AC\uC5D0\uC11C \uAC00\uC7A5 \uC0C1\uC704\uC5D0 \uC788\uB294 \uB808\uC774\uC544\uC6C3\uC785\uB2C8\uB2E4. \uC774\uAC83\uC740 <code>html</code> \uBC0F <code>body</code> \uD0DC\uADF8 \uBC0F \uC804\uC5ED\uC801\uC73C\uB85C \uACF5\uC720\uB418\uB294 \uB2E4\uB978 UI\uB97C \uC815\uC758\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1111\u1173\u1105\u1169\u11B8\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#\u1111\u1173\u1105\u1169\u11B8\u1109\u1173" aria-hidden="true">#</a> \uD504\uB86D\uC2A4</h2><h3 id="children-\u1111\u1175\u11AF\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#children-\u1111\u1175\u11AF\u1109\u116E" aria-hidden="true">#</a> children (\uD544\uC218)</h3><p>\uB808\uC774\uC544\uC6C3 \uCEF4\uD3EC\uB10C\uD2B8\uB294 children \uD504\uB86D\uC744 \uBC1B\uC544\uB4E4\uC774\uACE0 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. \uB80C\uB354\uB9C1 \uC911\uC5D0 children\uC740 \uB808\uC774\uC544\uC6C3\uC774 \uAC10\uC2F8\uB294 \uACBD\uB85C \uC138\uADF8\uBA3C\uD2B8\uB85C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4. \uC774\uB4E4\uC740 \uC8FC\uB85C \uC790\uC2DD \uB808\uC774\uC544\uC6C3 (\uC788\uB294 \uACBD\uC6B0) \uB610\uB294 \uD398\uC774\uC9C0\uC758 \uCEF4\uD3EC\uB10C\uD2B8\uC77C \uAC83\uC785\uB2C8\uB2E4\uB9CC, \uD574\uB2F9 \uC2DC\uC5D0\uB294 \uB85C\uB529 \uB610\uB294 \uC624\uB958\uC640 \uAC19\uC740 \uB2E4\uB978 \uD2B9\uBCC4\uD55C \uD30C\uC77C\uC778 \uACBD\uC6B0\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=p('<h3 id="params-optional" tabindex="-1"><a class="header-anchor" href="#params-optional" aria-hidden="true">#</a> params (optional)</h3><p>\uB8E8\uD2B8 \uC138\uADF8\uBA3C\uD2B8\uC5D0\uC11C \uB808\uC774\uC544\uC6C3\uAE4C\uC9C0\uC758 \uB3D9\uC801 \uACBD\uB85C \uB9E4\uAC1C\uBCC0\uC218 \uAC1D\uCCB4\uC785\uB2C8\uB2E4.</p><table><thead><tr><th>\uC608\uC2DC</th><th>URL</th><th><code>params</code></th></tr></thead><tbody><tr><td><code>app/dashboard/[team]/layout.js</code></td><td><code>/dashboard/1</code></td><td><code>{ team: &#39;1&#39; }</code></td></tr><tr><td><code>app/shop/[tag]/[item]/layout.js</code></td><td><code>/shop/1/2</code></td><td><code>{ tag: &#39;1&#39;, item: &#39;2&#39; }</code></td></tr><tr><td><code>app/blog/[...slug]/layout.js</code></td><td><code>/blog/1/2</code></td><td><code>{ slug: [&#39;1&#39;, &#39;2&#39;] }</code></td></tr></tbody></table><p>\uC608\uC2DC:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),k=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ShopLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  children<span class="token punctuation">,</span>
  params<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    item<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// URL -&gt; /shop/shoes/nike-air-max-97</span>
  <span class="token comment">// \`params\` -&gt; { tag: &#39;shoes&#39;, item: &#39;nike-air-max-97&#39; }</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>section<span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u110B\u1172\u110B\u116D\u11BC\u1112\u1161\u11AB-\u110C\u1165\u11BC\u1107\u1169" tabindex="-1"><a class="header-anchor" href="#\u110B\u1172\u110B\u116D\u11BC\u1112\u1161\u11AB-\u110C\u1165\u11BC\u1107\u1169" aria-hidden="true">#</a> \uC720\uC6A9\uD55C \uC815\uBCF4</h2><h3 id="\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA\u110B\u1175-searchparams\u1105\u1173\u11AF-\u1107\u1161\u11AE\u110C\u1175-\u110B\u1161\u11AD\u1109\u1173\u11B8\u1102\u1175\u1103\u1161" tabindex="-1"><a class="header-anchor" href="#\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA\u110B\u1175-searchparams\u1105\u1173\u11AF-\u1107\u1161\u11AE\u110C\u1175-\u110B\u1161\u11AD\u1109\u1173\u11B8\u1102\u1175\u1103\u1161" aria-hidden="true">#</a> \uB808\uC774\uC544\uC6C3\uC774 searchParams\uB97C \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4</h3><p>\uD398\uC774\uC9C0\uC640 \uB2EC\uB9AC \uB808\uC774\uC544\uC6C3 \uCEF4\uD3EC\uB10C\uD2B8\uB294 searchParams prop\uC744 \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uACF5\uC720 \uB808\uC774\uC544\uC6C3\uC774 \uD0D0\uC0C9 \uC911\uC5D0 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB418\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uD0D0\uC0C9 \uC0AC\uC774\uC5D0 \uAC31\uC2E0\uB418\uC9C0 \uC54A\uC740 searchParams\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.\`\`\`</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=a("p",null,"\uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uB0B4\uBE44\uAC8C\uC774\uC158\uC744 \uC0AC\uC6A9\uD560 \uB54C Next.js\uB294 \uB450 \uACBD\uB85C \uAC04\uC5D0 \uACF5\uD1B5 \uB808\uC774\uC544\uC6C3 \uC544\uB798\uC758 \uD398\uC774\uC9C0 \uBD80\uBD84\uB9CC \uC790\uB3D9\uC73C\uB85C \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4.",-1),m=a("p",null,"\uC608\uB97C \uB4E4\uC5B4, \uB2E4\uC74C \uB514\uB809\uD1A0\uB9AC \uAD6C\uC870\uC5D0\uC11C dashboard/layout.tsx\uB294 /dashboard/settings\uC640 /dashboard/analytics \uBAA8\uB450\uC5D0 \uB300\uD55C \uACF5\uD1B5 \uB808\uC774\uC544\uC6C3\uC785\uB2C8\uB2E4:",-1),g=a("p",null,[a("img",{src:c,alt:"\uC774\uBBF8\uC9C0"})],-1),y=a("p",null,"/dashboard/settings\uC5D0\uC11C /dashboard/analytics\uB85C \uC774\uB3D9\uD560 \uB54C, /dashboard/analytics\uC758 page.tsx\uB294 \uC11C\uBC84\uC5D0\uC11C \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB418\uC9C0\uB9CC, \uB450 \uACBD\uB85C \uC0AC\uC774\uC5D0\uC11C \uACF5\uC720\uB418\uB294 \uB300\uC2DC\uBCF4\uB4DC/layout.tsx\uB294 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",-1),v=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),_=a("p",null,"\uC774 \uC131\uB2A5 \uCD5C\uC801\uD654\uB97C \uD1B5\uD574 \uB808\uC774\uC544\uC6C3\uC744 \uACF5\uC720\uD558\uB294 \uD398\uC774\uC9C0 \uAC04\uC758 \uD0D0\uC0C9\uC774 \uBE68\uB77C\uC9C0\uBA70, \uD398\uC774\uC9C0\uC758 \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30\uC640 \uB80C\uB354\uB9C1\uB9CC \uC2E4\uD589\uB418\uBBC0\uB85C \uC790\uCCB4 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uB294 \uACF5\uC720 \uB808\uC774\uC544\uC6C3\uC744 \uD3EC\uD568\uD560 \uC218 \uC788\uB294 \uC804\uCCB4 \uACBD\uB85C \uB300\uC2E0\uC785\uB2C8\uB2E4.",-1),f=a("p",null,"\uB300\uC2DC\uBCF4\uB4DC/layout.tsx\uAC00 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB418\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uB808\uC774\uC544\uC6C3 \uC11C\uBC84 \uCEF4\uD3EC\uB10C\uD2B8\uC758 searchParams \uC18D\uC131\uC740 \uD0D0\uC0C9 \uD6C4\uC5D0 \uB0A1\uC544\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),w=a("ul",null,[a("li",null,"\uB300\uC2E0 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C Page searchParams \uC18D\uC131\uC774\uB098 \uCD5C\uC2E0 searchParams\uC73C\uB85C \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB418\uB294 useSearchParams \uD6C5\uC744 \uC0AC\uC6A9\uD558\uC138\uC694.")],-1),x=a("h3",{id:"\u1105\u116E\u1110\u1173-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1105\u116E\u1110\u1173-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA","aria-hidden":"true"},"#"),n(" \uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3")],-1),j=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),P=p('<ul><li>\uC571 \uB514\uB809\uD1A0\uB9AC\uC5D0\uB294 \uB8E8\uD2B8 \uC571/layout.js \uD30C\uC77C\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.</li><li>\uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3\uC740 <code>html</code> \uBC0F <code>body</code> \uD0DC\uADF8\uB97C \uC815\uC758\uD574\uC57C \uD569\uB2C8\uB2E4. \uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3\uC5D0\uB294 \uC218\uB3D9\uC73C\uB85C <code>head</code> \uD0DC\uADF8\uB97C \uCD94\uAC00\uD574\uC11C\uB294 \uC548 \uB429\uB2C8\uB2E4. \uB300\uC2E0 Metadata API\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. Metadata API\uB294 <code>head</code> \uC694\uC18C\uC758 \uC2A4\uD2B8\uB9AC\uBC0D \uBC0F \uC911\uBCF5 \uCC98\uB9AC\uC640 \uAC19\uC740 \uACE0\uAE09 \uC694\uAD6C \uC0AC\uD56D\uC744 \uC790\uB3D9\uC73C\uB85C \uCC98\uB9AC\uD569\uB2C8\uB2E4.</li><li>\uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3\uC5D0\uB294 \uC218\uB3D9\uC73C\uB85C <code>head</code> \uD0DC\uADF8\uB97C \uCD94\uAC00\uD574\uC11C\uB294 \uC548 \uB429\uB2C8\uB2E4. \uB300\uC2E0 Metadata API\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. Metadata API\uB294 <code>head</code> \uC694\uC18C\uC758 \uC2A4\uD2B8\uB9AC\uBC0D \uBC0F \uC911\uBCF5 \uCC98\uB9AC\uC640 \uAC19\uC740 \uACE0\uAE09 \uC694\uAD6C \uC0AC\uD56D\uC744 \uC790\uB3D9\uC73C\uB85C \uCC98\uB9AC\uD569\uB2C8\uB2E4.</li><li>\uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3\uC744 \uC5EC\uB7EC \uAC1C \uC0DD\uC131\uD558\uAE30 \uC704\uD574 route \uADF8\uB8F9\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uB7EC \uAC1C\uC758 \uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3 \uAC04\uC744 \uC774\uB3D9\uD558\uBA74 \uC804\uCCB4 \uD398\uC774\uC9C0 \uC0C8\uB85C \uACE0\uCE68\uC774 \uBC1C\uC0DD\uD569\uB2C8\uB2E4(\uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uD0D0\uC0C9\uACFC\uB294 \uB2EC\uB9AC). \uC608\uB97C \uB4E4\uC5B4, app/(shop)/layout.js\uB97C \uC0AC\uC6A9\uD558\uB294 /cart\uC5D0\uC11C app/(marketing)/layout.js\uB97C \uC0AC\uC6A9\uD558\uB294 /blog\uB85C \uC774\uB3D9\uD558\uB294 \uACBD\uC6B0 \uC804\uCCB4 \uD398\uC774\uC9C0 \uC0C8\uB85C \uACE0\uCE68\uC774 \uBC1C\uC0DD\uD569\uB2C8\uB2E4. \uC774\uB294 \uC5EC\uB7EC \uAC1C\uC758 \uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3\uC5D0\uB9CC \uD574\uB2F9\uB429\uB2C8\uB2E4.</li><li>\uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3\uC744 \uC5EC\uB7EC \uAC1C \uC0DD\uC131\uD558\uAE30 \uC704\uD574 route \uADF8\uB8F9\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uB7EC \uAC1C\uC758 \uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3 \uAC04\uC744 \uC774\uB3D9\uD558\uBA74 \uC804\uCCB4 \uD398\uC774\uC9C0 \uC0C8\uB85C \uACE0\uCE68\uC774 \uBC1C\uC0DD\uD569\uB2C8\uB2E4(\uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uD0D0\uC0C9\uACFC\uB294 \uB2EC\uB9AC). \uC608\uB97C \uB4E4\uC5B4, app/(shop)/layout.js\uB97C \uC0AC\uC6A9\uD558\uB294 /cart\uC5D0\uC11C app/(marketing)/layout.js\uB97C \uC0AC\uC6A9\uD558\uB294 /blog\uB85C \uC774\uB3D9\uD558\uB294 \uACBD\uC6B0 \uC804\uCCB4 \uD398\uC774\uC9C0 \uC0C8\uB85C \uACE0\uCE68\uC774 \uBC1C\uC0DD\uD569\uB2C8\uB2E4. \uC774\uB294 \uC5EC\uB7EC \uAC1C\uC758 \uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3\uC5D0\uB9CC \uD574\uB2F9\uB429\uB2C8\uB2E4.</li></ul><h2 id="\u1107\u1165\u110C\u1165\u11AB-\u110B\u1175\u1105\u1167\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1107\u1165\u110C\u1165\u11AB-\u110B\u1175\u1105\u1167\u11A8" aria-hidden="true">#</a> \uBC84\uC804 \uC774\uB825</h2><table><thead><tr><th>Version</th><th>Changes</th></tr></thead><tbody><tr><td><code>v13.0.0</code></td><td><code>layout</code>\uAC00 \uB3C4\uC785\uB428.</td></tr></tbody></table><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',4);function R(N,I){return s(),d("div",null,[r,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,m,g,y,v,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,f,w,x,j,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),P,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var V=l(i,[["render",R],["__file","index.html.vue"]]);export{V as default};
