import{_ as l,o as n,c,a as p,w as t,b as a,r as o,d as e,e as s}from"./app.252b99df.js";const i={},r=e('<h1 id="\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-\u110B\u1162\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-\u110B\u1162\u11B8" aria-hidden="true">#</a> \uC0AC\uC6A9\uC790 \uC815\uC758 \uC571</h1><p>Next.js\uB294 \uD398\uC774\uC9C0\uB97C \uCD08\uAE30\uD654\uD558\uAE30 \uC704\uD574 App \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774\uB97C \uC7AC\uC815\uC758\uD558\uC5EC \uD398\uC774\uC9C0 \uCD08\uAE30\uD654\uB97C \uC81C\uC5B4\uD558\uACE0 \uB2E4\uC74C\uC744 \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>\uD398\uC774\uC9C0 \uBCC0\uACBD \uC0AC\uC774\uC5D0\uC11C \uACF5\uC720 \uB808\uC774\uC544\uC6C3 \uB9CC\uB4E4\uAE30</li><li>\uD398\uC774\uC9C0\uC5D0 \uCD94\uAC00 \uB370\uC774\uD130 \uC8FC\uC785</li><li>\uAE00\uB85C\uBC8C CSS \uCD94\uAC00</li></ul><h2 id="\u1109\u1161\u110B\u116D\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uC0AC\uC6A9\uBC95</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),u=e(`<p>\uAE30\uBCF8 App\uC744 \uC7AC\uC815\uC758\uD558\uB824\uBA74 \uC544\uB798\uC640 \uAC19\uC774 \uD30C\uC77C pages/_app\uC744 \uC0DD\uC131\uD558\uC138\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/app&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span><span class="token operator">:</span> AppProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Component \uD504\uB86D\uC740 \uD65C\uC131 \uD398\uC774\uC9C0\uC774\uBBC0\uB85C \uACBD\uB85C \uAC04\uC5D0 \uC774\uB3D9\uD560 \uB54C\uB9C8\uB2E4 Component\uAC00 \uC0C8 \uD398\uC774\uC9C0\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C Component\uB85C \uC804\uC1A1\uD558\uB294 \uBAA8\uB4E0 \uD504\uB86D\uC740 \uD398\uC774\uC9C0\uC5D0\uC11C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>pageProps\uB294 \uCD08\uAE30 \uD504\uB86D\uC774\uB77C\uB294 \uAC1D\uCCB4\uC774\uBA70, \uC774\uB294 \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30 \uBC29\uBC95 \uC911 \uD558\uB098\uB85C \uD398\uC774\uC9C0\uB97C \uBBF8\uB9AC \uB85C\uB4DC\uD588\uAC70\uB098 \uADF8\uB807\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D4 \uBE48 \uAC1D\uCCB4\uC785\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=s("blockquote",null,[s("p",null,"\uC54C\uC544\uB450\uBA74 \uC88B\uC544\uC694 \uB9CC\uC57D \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC2E4\uD589 \uC911\uC774\uACE0 \uC0AC\uC6A9\uC790 \uC815\uC758 \uC571\uC744 \uCD94\uAC00\uD588\uB2E4\uBA74 \uAC1C\uBC1C \uC11C\uBC84\uB97C \uB2E4\uC2DC \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uC804\uC5D0 pages/_app.js\uAC00 \uC5C6\uC5C8\uB358 \uACBD\uC6B0\uC5D0\uB9CC \uD544\uC694\uD569\uB2C8\uB2E4. \uC571\uC740 getStaticProps \uB610\uB294 getServerSideProps\uC640 \uAC19\uC740 Next.js \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30 \uBC29\uBC95\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")],-1),k=s("h2",{id:"\u110B\u1162\u11B8\u110B\u1166\u1109\u1165-getinitialprops-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u110B\u1162\u11B8\u110B\u1166\u1109\u1165-getinitialprops-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),a(" \uC571\uC5D0\uC11C getInitialProps \uC0AC\uC6A9\uD558\uAE30")],-1),v=s("p",null,"\uC571\uC5D0\uC11C getInitialProps\uB97C \uC0AC\uC6A9\uD558\uBA74 getStaticProps\uAC00 \uC5C6\uB294 \uD398\uC774\uC9C0\uC5D0 \uB300\uD574 \uC790\uB3D9 \uC815\uC801 \uCD5C\uC801\uD654\uAC00 \uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4.",-1),g=s("p",null,"\uC774 \uD328\uD134\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB300\uC2E0 \uD398\uC774\uC9C0\uC640 \uB808\uC774\uC544\uC6C3\uC5D0 \uB300\uD55C \uB370\uC774\uD130\uB97C \uB354 \uC27D\uAC8C \uAC00\uC838\uC62C \uC218 \uC788\uB3C4\uB85D \uD574\uC8FC\uB294 App Router\uB97C \uC810\uC9C4\uC801\uC73C\uB85C \uC801\uC6A9\uD558\uB294 \uAC83\uC744 \uACE0\uB824\uD574\uBCF4\uC138\uC694.",-1),m=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> App<span class="token punctuation">,</span> <span class="token punctuation">{</span> AppContext<span class="token punctuation">,</span> AppInitialProps<span class="token punctuation">,</span> AppProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/app&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">AppOwnProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span> example<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps<span class="token punctuation">,</span> example <span class="token punctuation">}</span><span class="token operator">:</span> AppProps <span class="token operator">&amp;</span> AppOwnProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Data<span class="token operator">:</span> <span class="token punctuation">{</span>example<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

MyApp<span class="token punctuation">.</span>getInitialProps <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>context<span class="token operator">:</span> AppContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>AppOwnProps <span class="token operator">&amp;</span> AppInitialProps<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ctx <span class="token operator">=</span> <span class="token keyword">await</span> App<span class="token punctuation">.</span><span class="token function">getInitialProps</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>ctx<span class="token punctuation">,</span> example<span class="token operator">:</span> <span class="token string">&quot;data&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,2);function y(h,w){return n(),c("div",null,[r,(n(),p(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(n(),p(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,k,v,g,m,(n(),p(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),p(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var f=l(i,[["render",y],["__file","index.html.vue"]]);export{f as default};
