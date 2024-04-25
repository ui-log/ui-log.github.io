import{_ as o}from"./app.3052dcfb.js";import{l as s,m as c,E as n,G as a,p as t,Y as p,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const i={},l=e(`<h1 id="getstaticpaths" tabindex="-1"><a class="header-anchor" href="#getstaticpaths" aria-hidden="true">#</a> getStaticPaths</h1><p>\uB9CC\uC57D \uD398\uC774\uC9C0\uAC00 \uB3D9\uC801 \uB77C\uC6B0\uD2B8\uB97C \uAC00\uC9C0\uACE0 \uC788\uACE0 getStaticProps\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uBA74, \uC815\uC801\uC73C\uB85C \uC0DD\uC131\uB420 \uACBD\uB85C \uBAA9\uB85D\uC744 \uC815\uC758\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p>\uB3D9\uC801 \uB77C\uC6B0\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uD398\uC774\uC9C0\uC5D0\uC11C getStaticPaths(\uC815\uC801 \uC0AC\uC774\uD2B8 \uC0DD\uC131)\uB77C\uB294 \uD568\uC218\uB97C \uB0B4\uBCF4\uB0BC \uB54C, Next.js\uB294 getStaticPaths\uC5D0\uC11C \uC9C0\uC815\uB41C \uBAA8\uB4E0 \uACBD\uB85C\uB97C \uC815\uC801\uC73C\uB85C \uD504\uB9AC \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> InferGetStaticPropsType<span class="token punctuation">,</span> GetStaticProps<span class="token punctuation">,</span> GetStaticPaths <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Repo</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  stargazers_count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getStaticPaths <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    paths<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        params<span class="token operator">:</span> <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;next.js&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \uC544\uB798 &quot;paths&quot; \uC139\uC158 \uCC38\uC870</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    fallback<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false \uB610\uB294 &quot;blocking&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> satisfies GetStaticPaths<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getStaticProps <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;https://api.github.com/repos/vercel/next.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> repo <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> props<span class="token operator">:</span> <span class="token punctuation">{</span> repo <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> satisfies GetStaticProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  repo<span class="token operator">:</span> Repo<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span> repo <span class="token punctuation">}</span><span class="token operator">:</span> InferGetStaticPropsType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> getStaticProps<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> repo<span class="token punctuation">.</span>stargazers_count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=e('<p>getStaticPaths API \uCC38\uC870\uC5D0\uC11C\uB294 getStaticPaths\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uBAA8\uB4E0 \uB9E4\uAC1C\uBCC0\uC218\uC640 \uD504\uB86D\uC5D0 \uB300\uD574 \uB2E4\uB8F9\uB2C8\uB2E4.</p><h2 id="getstaticpaths\u1105\u1173\u11AF-\u110B\u1165\u11AB\u110C\u1166-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u1102\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#getstaticpaths\u1105\u1173\u11AF-\u110B\u1165\u11AB\u110C\u1166-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u1102\u1161\u110B\u116D" aria-hidden="true">#</a> getStaticPaths\uB97C \uC5B8\uC81C \uC0AC\uC6A9\uD574\uC57C \uD558\uB098\uC694?</h2><p>getStaticPaths\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uACBD\uC6B0\uC5D0 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4:</p><ul><li>\uB3D9\uC801 \uACBD\uB85C\uB97C \uC0AC\uC6A9\uD558\uB294 \uD398\uC774\uC9C0\uB97C \uC815\uC801\uC73C\uB85C \uBBF8\uB9AC \uB80C\uB354\uB9C1\uD558\uB294 \uACBD\uC6B0</li><li>\uB370\uC774\uD130\uAC00 headless CMS\uC5D0\uC11C \uC624\uB294 \uACBD\uC6B0</li><li>\uB370\uC774\uD130\uAC00 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C \uC624\uB294 \uACBD\uC6B0</li><li>\uB370\uC774\uD130\uAC00 \uD30C\uC77C \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC624\uB294 \uACBD\uC6B0</li><li>\uB370\uC774\uD130\uAC00 \uACF5\uAC1C \uCE90\uC2DC\uB420 \uC218 \uC788\uB294 \uACBD\uC6B0 (\uC0AC\uC6A9\uC790\uBCC4\uC774 \uC544\uB2CC)</li><li>\uD398\uC774\uC9C0\uAC00 \uC0AC\uC804 \uB80C\uB354\uB9C1\uB418\uC5B4\uC57C \uD558\uBA70 (SEO\uB97C \uC704\uD574) \uB9E4\uC6B0 \uBE68\uB77C\uC57C \uD558\uB294 \uACBD\uC6B0 \u2014 getStaticProps\uB294 HTML \uBC0F JSON \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uBA70, \uC774 \uB450 \uD30C\uC77C\uC740 \uC131\uB2A5\uC744 \uC704\uD574 CDN\uC5D0 \uC758\uD574 \uCE90\uC2DC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),r=e('<h2 id="getstaticpaths\u1100\u1161-\u110B\u1165\u11AB\u110C\u1166-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1103\u116C\u1102\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#getstaticpaths\u1100\u1161-\u110B\u1165\u11AB\u110C\u1166-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1103\u116C\u1102\u1161\u110B\u116D" aria-hidden="true">#</a> getStaticPaths\uAC00 \uC5B8\uC81C \uC2E4\uD589\uB418\uB098\uC694?</h2><p>getStaticPaths\uB294 \uD504\uB85C\uB355\uC158 \uBE4C\uB4DC \uC911\uC5D0\uB9CC \uC2E4\uD589\uB418\uBA70, \uB7F0\uD0C0\uC784 \uC911\uC5D0\uB294 \uD638\uCD9C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. getStaticPaths \uB0B4\uC5D0\uC11C \uC791\uC131\uB41C \uCF54\uB4DC\uAC00 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uBC88\uB4E4\uC5D0\uC11C \uC81C\uAC70\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD560 \uC218 \uC788\uB294 \uB3C4\uAD6C\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="getstaticprops\u1100\u1161-getstaticpaths\u110B\u116A-\u110B\u1165\u1104\u1165\u11C2\u1100\u1166-\u110C\u1161\u11A8\u1103\u1169\u11BC\u1112\u1161\u1102\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#getstaticprops\u1100\u1161-getstaticpaths\u110B\u116A-\u110B\u1165\u1104\u1165\u11C2\u1100\u1166-\u110C\u1161\u11A8\u1103\u1169\u11BC\u1112\u1161\u1102\u1161\u110B\u116D" aria-hidden="true">#</a> getStaticProps\uAC00 getStaticPaths\uC640 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB098\uC694?</h3><ul><li>getStaticProps\uB294 \uBE4C\uB4DC \uC911 \uBC18\uD658\uB41C \uBAA8\uB4E0 \uACBD\uB85C\uC5D0 \uB300\uD574 \uB2E4\uC74C \uBE4C\uB4DC \uC911\uC5D0 \uC2E4\uD589\uB429\uB2C8\uB2E4.</li><li>fallback: true\uB97C \uC0AC\uC6A9\uD560 \uB54C getStaticProps\uB294 \uBC31\uADF8\uB77C\uC6B4\uB4DC\uC5D0\uC11C \uC2E4\uD589\uB429\uB2C8\uB2E4.</li><li>fallback: blocking\uC744 \uC0AC\uC6A9\uD560 \uB54C getStaticProps\uB294 \uCD08\uAE30 \uB80C\uB354\uB9C1 \uC804\uC5D0 \uD638\uCD9C\uB429\uB2C8\uB2E4.</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),d=e('<h2 id="getstaticpaths\u1105\u1173\u11AF-\u110B\u1165\u1103\u1175\u110B\u1166-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u1102\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#getstaticpaths\u1105\u1173\u11AF-\u110B\u1165\u1103\u1175\u110B\u1166-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u1102\u1161\u110B\u116D" aria-hidden="true">#</a> getStaticPaths\uB97C \uC5B4\uB514\uC5D0 \uC0AC\uC6A9\uD574\uC57C \uD558\uB098\uC694?</h2><ul><li>getStaticPaths\uB294 getStaticProps\uC640 \uD568\uAED8 \uC0AC\uC6A9\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</li><li>getServerSideProps\uC640 getStaticPaths\uB97C \uD568\uAED8 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</li><li>getStaticProps\uB3C4 \uC0AC\uC6A9\uD558\uB294 \uB3D9\uC801 \uACBD\uB85C\uC5D0\uC11C getStaticPaths\uB97C \uB0B4\uBCF4\uB0BC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uD398\uC774\uC9C0 \uD30C\uC77C\uC774 \uC544\uB2CC \uD30C\uC77C(\uC608: \uCEF4\uD3EC\uB10C\uD2B8 \uD3F4\uB354)\uC5D0\uC11C getStaticPaths\uB97C \uB0B4\uBCF4\uB0BC \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</li><li>getStaticPaths\uB97C \uD398\uC774\uC9C0 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC18D\uC131\uC73C\uB85C \uB0B4\uBCF4\uB0B4\uC9C0 \uB9D0\uACE0 \uB3C5\uB9BD\uB41C \uD568\uC218\uB85C \uB0B4\uBCF4\uB0B4\uC57C \uD569\uB2C8\uB2E4.</li></ul><h2 id="\u1100\u1162\u1107\u1161\u11AF-\u1112\u116A\u11AB\u1100\u1167\u11BC\u110B\u1166\u1109\u1165-\u1106\u1169\u1103\u1173\u11AB-\u110B\u116D\u110E\u1165\u11BC\u110B\u1166-\u1103\u1162\u1112\u1162-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1103\u116C\u11B8\u1102\u1175\u1103\u1161" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u1107\u1161\u11AF-\u1112\u116A\u11AB\u1100\u1167\u11BC\u110B\u1166\u1109\u1165-\u1106\u1169\u1103\u1173\u11AB-\u110B\u116D\u110E\u1165\u11BC\u110B\u1166-\u1103\u1162\u1112\u1162-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1103\u116C\u11B8\u1102\u1175\u1103\u1161" aria-hidden="true">#</a> \uAC1C\uBC1C \uD658\uACBD\uC5D0\uC11C \uBAA8\uB4E0 \uC694\uCCAD\uC5D0 \uB300\uD574 \uC2E4\uD589\uB429\uB2C8\uB2E4</h2><p>\uAC1C\uBC1C \uD658\uACBD\uC5D0\uC11C (next dev), getStaticPaths\uB294 \uBAA8\uB4E0 \uC694\uCCAD \uC2DC\uB9C8\uB2E4 \uD638\uCD9C\uB429\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),k=e(`<h2 id="\u1111\u1175\u11AF\u110B\u116D\u1112\u1161\u11AB-\u1104\u1162-\u1100\u1167\u11BC\u1105\u1169-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1111\u1175\u11AF\u110B\u116D\u1112\u1161\u11AB-\u1104\u1162-\u1100\u1167\u11BC\u1105\u1169-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uD544\uC694\uD55C \uB54C \uACBD\uB85C \uC0DD\uC131\uD558\uAE30</h2><p>getStaticPaths\uB97C \uC0AC\uC6A9\uD558\uBA74 \uBE4C\uB4DC \uC911\uC5D0 \uD544\uC694\uD55C \uB300\uC2E0 \uD3F4\uBC31\uC73C\uB85C \uC0DD\uC131\uD560 \uD398\uC774\uC9C0\uB97C \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBE4C\uB4DC \uC911\uC5D0 \uB354 \uB9CE\uC740 \uD398\uC774\uC9C0\uB97C \uC0DD\uC131\uD558\uBA74 \uB290\uB9B0 \uBE4C\uB4DC\uB97C \uC720\uBC1C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>paths\uC5D0 \uBE48 \uBC30\uC5F4\uC744 \uBC18\uD658\uD558\uC5EC \uBAA8\uB4E0 \uD398\uC774\uC9C0\uB97C \uD544\uC694\uD55C \uB54C\uC5D0\uB9CC \uC0DD\uC131\uD558\uB3C4\uB85D \uC5F0\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD2B9\uD788 Next.js \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC5EC\uB7EC \uD658\uACBD\uC5D0 \uBC30\uD3EC\uD560 \uB54C \uC720\uC6A9\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uBBF8\uB9AC\uBCF4\uAE30\uC6A9\uC73C\uB85C \uBAA8\uB4E0 \uD398\uC774\uC9C0\uB97C \uD544\uC694\uD560 \uB54C\uC5D0\uB9CC \uC0DD\uC131\uD558\uC5EC \uBE4C\uB4DC\uB97C \uAC00\uC18D\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uC81C\uD488\uC6A9 \uBE4C\uB4DC\uB294 \uC81C\uC678). \uC774 \uBC29\uBC95\uC740 \uC218\uBC31 \uAC1C \uB610\uB294 \uC218\uCC9C \uAC1C\uC758 \uC815\uC801 \uD398\uC774\uC9C0\uAC00 \uC788\uB294 \uC0AC\uC774\uD2B8\uC5D0 \uC720\uC6A9\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticPaths</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uC774 \uAC12\uC774 true\uBA74 (\uBBF8\uB9AC\uBCF4\uAE30 \uD658\uACBD\uC5D0\uC11C) \uC815\uC801 \uD398\uC774\uC9C0\uB97C \uBBF8\uB9AC \uB80C\uB354\uB9C1\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4</span>
  <span class="token comment">// (\uBE60\uB978 \uBE4C\uB4DC, \uD558\uC9C0\uB9CC \uCD08\uAE30 \uD398\uC774\uC9C0 \uB85C\uB4DC\uAC00 \uB290\uB9BD\uB2C8\uB2E4)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">SKIP_BUILD_STATIC_GENERATION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token string">&quot;blocking&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \uD3EC\uC2A4\uD2B8\uB97C \uAC00\uC838 \uC624\uAE30 \uC704\uD574 \uC678\uBD80 API \uC5D4\uB4DC\uD3EC\uC778\uD2B8 \uD638\uCD9C</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;https://.../posts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \uD3EC\uC2A4\uD2B8\uB97C \uAE30\uBC18\uC73C\uB85C \uBBF8\uB9AC \uB80C\uB354\uB9C1\uD558\uB824\uB294 \uACBD\uB85C \uAC00\uC838 \uC624\uAE30</span>
  <span class="token comment">// \uC81C\uD488 \uD658\uACBD\uC5D0\uC11C\uB294 \uBAA8\uB4E0 \uD398\uC774\uC9C0 \uBBF8\uB9AC \uB80C\uB354\uB9C1</span>
  <span class="token comment">// (\uB290\uB9B0 \uBE4C\uB4DC, \uD558\uC9C0\uB9CC \uCD08\uAE30 \uD398\uC774\uC9C0 \uB85C\uB4DC\uAC00 \uBE60\uB985\uB2C8\uB2E4)</span>
  <span class="token keyword">const</span> paths <span class="token operator">=</span> posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> post<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// { fallback: false }\uB294 \uAE30\uD0C0 \uACBD\uB85C\uB97C 404\uB85C \uCC98\uB9AC\uD574\uC57C \uD568\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> paths<span class="token punctuation">,</span> <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5);function v(m,h){return s(),c("div",null,[l,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var P=o(i,[["render",v],["__file","index.html.vue"]]);export{P as default};
