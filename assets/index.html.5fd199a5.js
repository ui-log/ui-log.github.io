import{_ as i,o as a,c as l,a as t,w as e,b as n,r as p,e as s,d as o}from"./app.252b99df.js";const c={},r=o('<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1><p>Next.js\uB294 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uCD95\uD558\uAE30 \uC704\uD55C TypeScript\uB97C \uC6B0\uC120\uC73C\uB85C \uD55C \uAC1C\uBC1C \uD658\uACBD\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><p>\uD544\uC694\uD55C \uD328\uD0A4\uC9C0\uB97C \uC790\uB3D9\uC73C\uB85C \uC124\uCE58\uD558\uACE0 \uC801\uC808\uD55C \uC124\uC815\uC744 \uAD6C\uC131\uD558\uAE30 \uC704\uD55C \uB0B4\uC7A5\uB41C TypeScript \uC9C0\uC6D0\uC774 \uC81C\uACF5\uB429\uB2C8\uB2E4.</p><h2 id="\u1109\u1162-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1109\u1162-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173" aria-hidden="true">#</a> \uC0C8 \uD504\uB85C\uC81D\uD2B8</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),d=s("p",null,"\uD504\uB85C\uC81D\uD2B8\uC5D0 TypeScript\uB97C \uCD94\uAC00\uD558\uB824\uBA74 \uD30C\uC77C\uC744 .ts / .tsx\uB85C \uC774\uB984\uC744 \uBCC0\uACBD\uD558\uC138\uC694. \uADF8\uB7F0 \uB2E4\uC74C next dev \uBC0F next build\uB97C \uC2E4\uD589\uD558\uC5EC \uD544\uC694\uD55C \uC885\uC18D\uC131\uC744 \uC790\uB3D9\uC73C\uB85C \uC124\uCE58\uD558\uACE0 \uAD8C\uC7A5 \uAD6C\uC131 \uC635\uC158\uC73C\uB85C tsconfig.json \uD30C\uC77C\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),u=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),k=o('<p>\uB9CC\uC57D \uC774\uBBF8 jsconfig.json \uD30C\uC77C\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294, \uC774\uC804 jsconfig.json \uD30C\uC77C\uC5D0\uC11C paths \uCEF4\uD30C\uC77C\uB7EC \uC635\uC158\uC744 \uC0C8 tsconfig.json \uD30C\uC77C\uB85C \uBCF5\uC0AC\uD558\uACE0 \uC774\uC804 jsconfig.json \uD30C\uC77C\uC744 \uC0AD\uC81C\uD574\uC8FC\uC138\uC694.</p><h2 id="typescript-\u110E\u116C\u1109\u1169-\u1107\u1165\u110C\u1165\u11AB" tabindex="-1"><a class="header-anchor" href="#typescript-\u110E\u116C\u1109\u1169-\u1107\u1165\u110C\u1165\u11AB" aria-hidden="true">#</a> TypeScript \uCD5C\uC18C \uBC84\uC804</h2><p>\uC801\uC5B4\uB3C4 TypeScript v4.5.2 \uBC84\uC804 \uC774\uC0C1\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uB9E4\uC6B0 \uAD8C\uC7A5\uB429\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 import \uC774\uB984\uC5D0 \uB300\uD55C \uC720\uD615 \uC218\uC815\uC790 \uBC0F \uC131\uB2A5 \uD5A5\uC0C1\uACFC \uAC19\uC740 \uAD6C\uBB38 \uAE30\uB2A5\uC744 \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110C\u1165\u11BC\u110C\u1165\u11A8-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1100\u116A-\u1109\u1165\u1107\u1165-\u1109\u1161\u110B\u1175\u1103\u1173-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11BC\u110C\u1165\u11A8-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1100\u116A-\u1109\u1165\u1107\u1165-\u1109\u1161\u110B\u1175\u1103\u1173-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC" aria-hidden="true">#</a> \uC815\uC801 \uC0DD\uC131\uACFC \uC11C\uBC84 \uC0AC\uC774\uB4DC \uB80C\uB354\uB9C1</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),v=o(`<p>getStaticProps, getStaticPaths, getServerSideProps\uC5D0 \uB300\uD55C \uC815\uBCF4\uB97C \uACF5\uC720\uB4DC\uB9B4\uAC8C\uC694. \uAC01\uAC01 GetStaticProps, GetStaticPaths \uBC0F GetServerSideProps \uC720\uD615\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GetStaticProps<span class="token punctuation">,</span> GetStaticPaths<span class="token punctuation">,</span> GetServerSideProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getStaticProps <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>\uAC00 GetStaticProps\uC744 \uB9CC\uC871\uC2DC\uD0B5\uB2C8\uB2E4

<span class="token keyword">export</span> <span class="token keyword">const</span> getStaticPaths <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>\uAC00 GetStaticPaths\uB97C \uB9CC\uC871\uC2DC\uD0B5\uB2C8\uB2E4

<span class="token keyword">export</span> <span class="token keyword">const</span> getServerSideProps <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>\uAC00 GetServerSideProps\uC744 \uB9CC\uC871\uC2DC\uD0B5\uB2C8\uB2E4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\uC54C\uC544\uB450\uBA74 \uC88B\uC544\uC694: TypeScript 4.9\uC5D0 satisfies\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. TypeScript\uC758 \uCD5C\uC2E0 \uBC84\uC804\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4.</p></blockquote><h2 id="api-routes" tabindex="-1"><a class="header-anchor" href="#api-routes" aria-hidden="true">#</a> API Routes</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=o(`<p>\uB2E4\uC74C\uC740 API \uB77C\uC6B0\uD2B8\uC5D0 \uB0B4\uC7A5\uB41C \uC720\uD615\uC744 \uC0AC\uC6A9\uD558\uB294 \uC608\uC2DC\uC785\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> NextApiResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB610\uD55C \uC751\uB2F5 \uB370\uC774\uD130\uC5D0 \uC720\uD615\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next&quot;</span><span class="token punctuation">;</span>

type Data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> NextApiResponse<span class="token operator">&lt;</span>Data<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=o(`<h2 id="\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-\u110B\u1162\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-\u110B\u1162\u11B8" aria-hidden="true">#</a> \uC0AC\uC6A9\uC790 \uC815\uC758 \uC571</h2><p>\uC0AC\uC6A9\uC790 \uC815\uC758 \uC571\uC774 \uC788\uC73C\uC2E0 \uACBD\uC6B0, \uB0B4\uC7A5\uB41C AppProps \uC720\uD615\uC744 \uC0AC\uC6A9\uD558\uACE0 \uD30C\uC77C \uC774\uB984\uC744 ./pages/_app.tsx\uB85C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> AppProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/app&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span><span class="token operator">:</span> AppProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1100\u1167\u11BC\u1105\u1169-\u1107\u1167\u11AF\u110E\u1175\u11BC-\u1106\u1175\u11BE-baseurl" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11BC\u1105\u1169-\u1107\u1167\u11AF\u110E\u1175\u11BC-\u1106\u1175\u11BE-baseurl" aria-hidden="true">#</a> \uACBD\uB85C \uBCC4\uCE6D \uBC0F baseUrl</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=s("p",null,'Next.js\uB294 tsconfig.json\uC758 "paths" \uBC0F "baseUrl" \uC635\uC158\uC744 \uC790\uB3D9\uC73C\uB85C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.',-1),m=s("p",null,"\uC774 \uAE30\uB2A5\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uB824\uBA74 Module Path aliases documentation\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694.",-1),y=s("h2",{id:"type-checking-next-config-js",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#type-checking-next-config-js","aria-hidden":"true"},"#"),n(" Type checking next.config.js")],-1),f=s("p",null,"next.config.js \uD30C\uC77C\uC740 Babel\uC774\uB098 TypeScript\uC5D0\uC11C \uAD6C\uBB38 \uBD84\uC11D\uB418\uC9C0 \uC54A\uC73C\uBBC0\uB85C JavaScript \uD30C\uC77C\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC544\uB798\uC640 \uAC19\uC774 JSDoc\uC744 \uC0AC\uC6A9\uD558\uC5EC IDE\uC5D0\uC11C \uC77C\uBD80 \uC720\uD615 \uAC80\uC0AC\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:",-1),_=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),x=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// @ts-check</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;next&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span>
 **/</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* config options here */</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> nextConfig<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u110C\u1165\u11B7\u110C\u1175\u11AB\u110C\u1165\u11A8-\u1110\u1161\u110B\u1175\u11B8-\u1112\u116A\u11A8\u110B\u1175\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11B7\u110C\u1175\u11AB\u110C\u1165\u11A8-\u1110\u1161\u110B\u1175\u11B8-\u1112\u116A\u11A8\u110B\u1175\u11AB" aria-hidden="true">#</a> \uC810\uC9C4\uC801 \uD0C0\uC785 \uD655\uC778</h2><p>v10.2.1\uBD80\uD130 Next.js\uB294 tsconfig.json\uC5D0\uC11C \uD65C\uC131\uD654\uB41C \uACBD\uC6B0 \uC99D\uBD84 \uC720\uD615 \uD655\uC778\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD070 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uD0C0\uC785 \uD655\uC778 \uC18D\uB3C4\uB97C \uB192\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="typescript-\u110B\u1169\u1105\u1172-\u1106\u116E\u1109\u1175\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#typescript-\u110B\u1169\u1105\u1172-\u1106\u116E\u1109\u1175\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> TypeScript \uC624\uB958 \uBB34\uC2DC\uD558\uAE30</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),w=s("p",null,[n("Next.js\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0 TypeScript \uC624\uB958\uAC00 \uC788\uC744 \uB54C "),s("code",null,"next build"),n("\uB97C \uD1B5\uD574 \uD504\uB85C\uB355\uC158 \uBE4C\uB4DC\uC5D0 \uC2E4\uD328\uD569\uB2C8\uB2E4.")],-1),j=s("p",null,"\uB9CC\uC57D Next.js\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC624\uB958\uAC00 \uC788\uB354\uB77C\uB3C4 \uD504\uB85C\uB355\uC158 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uB3C4\uB85D \uD558\uB824\uBA74 \uB0B4\uC7A5\uB41C \uD0C0\uC785 \uCCB4\uD06C \uB2E8\uACC4\uB97C \uBE44\uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),q=s("p",null,"\uBE44\uD65C\uC131\uD654\uB41C \uACBD\uC6B0 \uBE4C\uB4DC\uB098 \uBC30\uD3EC \uD504\uB85C\uC138\uC2A4\uC758 \uC77C\uBD80\uB85C \uD0C0\uC785 \uCCB4\uD06C\uB97C \uC2E4\uD589\uD558\uB294\uC9C0 \uD655\uC778\uD558\uC2ED\uC2DC\uC624. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uB9E4\uC6B0 \uC704\uD5D8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),S=s("p",null,[s("code",null,"next.config.js"),n(" \uD30C\uC77C\uC744 \uC5F4\uACE0 typescript \uAD6C\uC131\uC5D0\uC11C "),s("code",null,"ignoreBuildErrors"),n(" \uC635\uC158\uC744 \uD65C\uC131\uD654\uD558\uC138\uC694:")],-1),P=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),N=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">typescript</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// !! \uACBD\uACE0 !!</span>
    <span class="token comment">// \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC720\uD615 \uC624\uB958\uAC00 \uC788\uB354\uB77C\uB3C4 \uC81C\uC791 \uBE4C\uB4DC\uB97C \uC131\uACF5\uC801\uC73C\uB85C \uC644\uB8CC\uD560 \uC218 \uC788\uB3C4\uB85D\uD569\uB2C8\uB2E4.</span>
    <span class="token comment">// !! \uACBD\uACE0 !!</span>
    <span class="token literal-property property">ignoreBuildErrors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-\u110B\u1172\u1112\u1167\u11BC-\u1109\u1165\u11AB\u110B\u1165\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-\u110B\u1172\u1112\u1167\u11BC-\u1109\u1165\u11AB\u110B\u1165\u11AB" aria-hidden="true">#</a> \uC0AC\uC6A9\uC790 \uC815\uC758 \uC720\uD615 \uC120\uC5B8</h2><p>\uC0AC\uC6A9\uC790 \uC815\uC758 \uC720\uD615\uC744 \uC120\uC5B8\uD574\uC57C\uD558\uB294 \uACBD\uC6B0 next-env.d.ts\uB97C \uC218\uC815\uD558\uB824\uB294 \uC720\uD639\uC5D0 \uBE60\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098\uC774 \uD30C\uC77C\uC740 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uBBC0\uB85C \uC218\uD589 \uD55C \uBAA8\uB4E0 \uBCC0\uACBD \uB0B4\uC6A9\uC774 \uB36E\uC5B4 \uC50C\uC6CC \uC9D1\uB2C8\uB2E4. \uB300\uC2E0 \uC0C8 \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5B4\uC57C\uD569\uB2C8\uB2E4. \uC0C8 \uD30C\uC77C\uC744 new-types.d.ts\uB77C\uACE0 \uBD80\uB974\uACE0 tsconfig.json\uC5D0\uC11C \uCC38\uC870\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token comment">//...\uC0DD\uB7B5...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;new-types.d.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;next-env.d.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;.next/types/**/*.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.tsx&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),T=s("h2",{id:"\u1107\u1165\u110C\u1165\u11AB-\u1107\u1167\u11AB\u1100\u1167\u11BC\u1109\u1161\u1112\u1161\u11BC",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1107\u1165\u110C\u1165\u11AB-\u1107\u1167\u11AB\u1100\u1167\u11BC\u1109\u1161\u1112\u1161\u11BC","aria-hidden":"true"},"#"),n(" \uBC84\uC804 \uBCC0\uACBD\uC0AC\uD56D")],-1),A=s("thead",null,[s("tr",null,[s("th",null,"Version"),s("th",null,"Changes")])],-1),C=s("tr",null,[s("td",null,[s("code",null,"v13.2.0")]),s("td",null,"\uC815\uC801\uC73C\uB85C \uD0C0\uC785\uC774 \uC9C0\uC815\uB41C \uB9C1\uD06C\uAC00 \uBCA0\uD0C0 \uBC84\uC804\uC73C\uB85C \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")],-1),R=s("tr",null,[s("td",null,[s("code",null,"v12.0.0")]),s("td",null,[n("\uB354 \uBE60\uB978 \uBE4C\uB4DC\uB97C \uC704\uD574 TypeScript \uBC0F TSX\uB97C \uCEF4\uD30C\uC77C\uD558\uAE30 \uC704\uD574 \uAE30\uBCF8\uC801\uC73C\uB85C "),s("a",{href:"/docs/architecture/nextjs-compiler"},"SWC"),n("\uC774(\uAC00) \uC0AC\uC6A9\uB429\uB2C8\uB2E4.")])],-1),G=s("td",null,[s("code",null,"v10.2.1")],-1),B=s("code",null,"tsconfig.json",-1),D={href:"https://www.typescriptlang.org/tsconfig#incremental",rel:"noopener noreferrer nofollow",target:"_blank"},M={class:"inline-flex"},E={class:"with-icon_icon__MHUeb","data-testid":"geist-icon",fill:"none",height:"24","shape-rendering":"geometricPrecision",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",width:"24",style:{color:"currentColor",width:"14px",height:"14px"}},J=s("path",{d:"M7 17L17 7"},null,-1),V=s("path",{d:"M7 7h10v10"},null,-1),I=[J,V],U=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function L(H,O){return a(),l("div",null,[r,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,u,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,m,y,f,_,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,j,q,S,P,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),N,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),T,s("table",null,[A,s("tbody",null,[C,R,s("tr",null,[G,s("td",null,[B,n("\uC5D0\uC11C \uD65C\uC131 \uC0C1\uD0DC\uC778 \uACBD\uC6B0 "),s("a",D,[n("\uC798\uBABB\uB41C \uD0C0\uC785 \uD655\uC778"),s("span",M,[(a(),l("svg",E,I))])]),n(" \uB300\uC751\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")])])])]),U,(a(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var X=i(c,[["render",L],["__file","index.html.vue"]]);export{X as default};
