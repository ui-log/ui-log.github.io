import{_ as p,o as s,c as i,a as e,w as t,b as n,r as l,d as o,e as a}from"./app.252b99df.js";const c={},d=o(`<h1 id="nextjs-14-\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173\u110B\u1166\u1109\u1165-route-\u1103\u1169\u11BC\u110C\u1165\u11A8-params-\u1100\u1161\u110C\u1167\u110B\u1169\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#nextjs-14-\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173\u110B\u1166\u1109\u1165-route-\u1103\u1169\u11BC\u110C\u1165\u11A8-params-\u1100\u1161\u110C\u1167\u110B\u1169\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> Nextjs 14 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C route \uB3D9\uC801 params \uAC00\uC838\uC624\uB294 \uBC29\uBC95</h1><p>useParams\uB294 \uD604\uC7AC URL\uC5D0 \uC758\uD574 \uCC44\uC6CC\uC9C4 route\uC758 \uB3D9\uC801 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC77D\uC744 \uC218 \uC788\uAC8C \uD574\uC8FC\uB294 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCEF4\uD3EC\uB10C\uD2B8 \uD6C4\uD06C\uC785\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token string">&quot;use client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/navigation&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ExampleClientComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useParams</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span> tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> item<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Route -&gt; /shop/[tag]/[item]</span>
  <span class="token comment">// URL -&gt; /shop/shoes/nike-air-max-97</span>
  <span class="token comment">// \`params\` -&gt; { tag: &#39;shoes&#39;, item: &#39;nike-air-max-97&#39; }</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E" aria-hidden="true">#</a> \uB9E4\uAC1C\uBCC0\uC218</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>useParams \uD568\uC218\uB294 \uC5B4\uB5A4 \uB9E4\uAC1C\uBCC0\uC218\uB3C4 \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1107\u1161\u11AB\u1112\u116A\u11AB\u1100\u1161\u11B9" tabindex="-1"><a class="header-anchor" href="#\u1107\u1161\u11AB\u1112\u116A\u11AB\u1100\u1161\u11B9" aria-hidden="true">#</a> \uBC18\uD658\uAC12</h2><p>useParams \uD568\uC218\uB294 \uD604\uC7AC \uB77C\uC6B0\uD2B8\uC758 \uB3D9\uC801 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uCC44\uC6CC\uC9C4 \uAC1D\uCCB4\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),r=o(`<ul><li>\uAC01 \uAC1D\uCCB4\uC758 \uD504\uB85C\uD37C\uD2F0\uB294 \uD65C\uC131 \uB3D9\uC801 \uC138\uADF8\uBA3C\uD2B8\uC785\uB2C8\uB2E4.</li><li>\uD504\uB85C\uD37C\uD2F0\uC758 \uC774\uB984\uC740 \uC138\uADF8\uBA3C\uD2B8\uC758 \uC774\uB984\uC774\uBA70, \uD504\uB85C\uD37C\uD2F0\uC758 \uAC12\uC740 \uC138\uADF8\uBA3C\uD2B8\uAC00 \uCC44\uC6CC\uC9C0\uB294 \uB0B4\uC6A9\uC785\uB2C8\uB2E4.</li><li>\uD504\uB85C\uD37C\uD2F0\uC758 \uAC12\uC740 \uB3D9\uC801 \uC138\uADF8\uBA3C\uD2B8\uC758 \uC720\uD615\uC5D0 \uB530\uB77C \uBB38\uC790\uC5F4 \uB610\uB294 \uBB38\uC790\uC5F4 \uBC30\uC5F4\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uB77C\uC6B0\uD2B8\uC5D0 \uB3D9\uC801 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC5C6\uC73C\uBA74 useParams\uB294 \uBE48 \uAC1D\uCCB4\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.</li><li>\uD398\uC774\uC9C0 \uB77C\uC6B0\uD130\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uACBD\uC6B0, useParams\uB294 \uCD08\uAE30 \uB80C\uB354\uB9C1 \uC2DC null\uC744 \uBC18\uD658\uD558\uACE0 \uB77C\uC6B0\uD130\uAC00 \uC900\uBE44\uB418\uBA74 \uC704\uC758 \uADDC\uCE59\uC744 \uB530\uB77C \uD504\uB85C\uD37C\uD2F0\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.</li></ul><p>\uC608\uC2DC:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>| Route                     | URL         | useParams()            |
|---------------------------|-------------|----------------------- |
| app/shop/page.js          | /shop       | {}                     |
| app/shop/[slug]/page.js    | /shop/1     | { slug: &#39;1&#39; }          |
| app/shop/[tag]/[item]/page.js | /shop/1/2 | { tag: &#39;1&#39;, item: &#39;2&#39; } |
| app/shop/[...slug]/page.js | /shop/1/2   | { slug: [&#39;1&#39;, &#39;2&#39;] }    |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1107\u1165\u110C\u1165\u11AB-\u1100\u1175\u1105\u1169\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1107\u1165\u110C\u1165\u11AB-\u1100\u1175\u1105\u1169\u11A8" aria-hidden="true">#</a> \uBC84\uC804 \uAE30\uB85D</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"Version"),a("th",null,"Changes")])]),a("tbody",null,[a("tr",null,[a("td",null,[a("code",null,"v13.3.0")]),a("td",null,[a("code",null,"useParams"),n(" introduced")])])])],-1),k=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function v(g,h){return s(),i("div",null,[d,(s(),e(l("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(s(),e(l("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(s(),e(l("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,k,(s(),e(l("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var y=p(c,[["render",v],["__file","index.html.vue"]]);export{y as default};