import{_ as l}from"./app.3052dcfb.js";import{l as n,m as i,E as a,G as t,p as s,Y as p,K as o,C as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const c={},r=o('<h1 id="\u1110\u1165\u1107\u1169-\u1109\u1175\u11AF\u1112\u1165\u11B7-\u110C\u116E\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1110\u1165\u1107\u1169-\u1109\u1175\u11AF\u1112\u1165\u11B7-\u110C\u116E\u11BC" aria-hidden="true">#</a> \uD130\uBCF4 (\uC2E4\uD5D8 \uC911)</h1><p>\uD130\uBCF4\uD329\uC740 \uB2E4\uC591\uD55C \uD30C\uC77C\uC744 \uBCC0\uD658\uD558\uACE0 \uBAA8\uB4C8 \uD574\uACB0 \uBC29\uBC95\uC744 \uBCC0\uACBD\uD558\uAE30 \uC704\uD574 \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><blockquote><p>\uCC38\uACE0 \uC0AC\uD56D: \uC774\uB7EC\uD55C \uAE30\uB2A5\uC740 \uC2E4\uD5D8 \uC911\uC774\uBA70 \uB2E4\uC74C --turbo\uB85C\uB9CC \uC791\uB3D9\uD569\uB2C8\uB2E4. Next.js\uC6A9 \uD130\uBCF4\uD329\uC5D0\uB294 \uB0B4\uC7A5\uB41C \uAE30\uB2A5\uC744 \uC704\uD55C \uB85C\uB354\uB098 \uB85C\uB354 \uAD6C\uC131\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD130\uBCF4\uD329\uC740 CSS \uBC0F \uD604\uB300\uC801\uC778 JavaScript\uB97C \uCEF4\uD30C\uC77C\uD558\uB294 \uAE30\uB2A5\uC744 \uB0B4\uC7A5\uD558\uACE0 \uC788\uC73C\uBBC0\uB85C @babel/preset-env\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 css-loader, postcss-loader \uB610\uB294 babel-loader\uAC00 \uD544\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></blockquote><h2 id="\u110B\u1170\u11B8\u1111\u1162\u11A8-\u1105\u1169\u1103\u1165" tabindex="-1"><a class="header-anchor" href="#\u110B\u1170\u11B8\u1111\u1162\u11A8-\u1105\u1169\u1103\u1165" aria-hidden="true">#</a> \uC6F9\uD329 \uB85C\uB354</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),u=o(`<p>\uB9CC\uC57D \uB0B4\uC7A5\uB418\uC5B4 \uC788\uB294 \uAC83 \uC774\uC0C1\uC758 \uB85C\uB354 \uC9C0\uC6D0\uC774 \uD544\uC694\uD558\uB2E4\uBA74, \uB9CE\uC740 \uC6F9\uD329 \uB85C\uB354\uB4E4\uC774 \uC774\uBBF8 Turbopack\uACFC \uD638\uD658\uB41C\uB2E4. \uD604\uC7AC \uBA87 \uAC00\uC9C0 \uC81C\uD55C\uC0AC\uD56D\uC774 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>\uC6F9\uD329 \uB85C\uB354 API\uC758 \uD575\uC2EC \uD558\uC704 \uC9D1\uD569\uB9CC \uAD6C\uD604\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uD604\uC7AC\uB294 \uC77C\uBD80 \uC778\uAE30 \uC788\uB294 \uB85C\uB354\uB97C \uB2E4\uB8F0 \uC218 \uC788\uC744 \uB9CC\uD07C \uCDA9\uBD84\uD55C \uC9C0\uC6D0\uC774 \uC788\uC73C\uBA70, \uC55E\uC73C\uB85C API \uC9C0\uC6D0\uC744 \uD655\uB300\uD560 \uAC83\uC785\uB2C8\uB2E4.</li><li>JavaScript \uCF54\uB4DC\uB97C \uBC18\uD658\uD558\uB294 \uB85C\uB354\uB9CC \uC9C0\uC6D0\uB429\uB2C8\uB2E4. \uC2A4\uD0C0\uC77C\uC2DC\uD2B8\uB098 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC740 \uD30C\uC77C\uC744 \uBCC0\uD658\uD558\uB294 \uB85C\uB354\uB294 \uD604\uC7AC \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</li><li>webpack \uB85C\uB354\uC5D0 \uC804\uB2EC\uB418\uB294 \uC635\uC158\uC740 \uC77C\uBC18 JavaScript \uAE30\uBCF8\uD615, \uAC1D\uCCB4, \uBC30\uC5F4\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 require()\uB41C \uD50C\uB7EC\uADF8\uC778 \uBAA8\uB4C8\uC744 \uC635\uC158 \uAC12\uC73C\uB85C \uC804\uB2EC\uD558\uB294 \uAC83\uC740 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.</li></ul><p>\uB85C\uB354\uB97C \uAD6C\uC131\uD558\uB824\uBA74, \uC124\uCE58\uD55C \uB85C\uB354\uC758 \uC774\uB984\uACFC next.config.js\uC5D0 \uB85C\uB354\uC758 \uD30C\uC77C \uD655\uC7A5\uC790\uB97C \uB85C\uB354 \uBAA9\uB85D\uC5D0 \uB9E4\uD551\uD558\uC5EC \uC635\uC158\uC744 \uCD94\uAC00\uD558\uC2ED\uC2DC\uC624:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">turbo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \uC635\uC158 \uD615\uC2DD</span>
        <span class="token string-property property">&quot;*.md&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;@mdx-js/loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;md&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \uC635\uC158\uC774 \uC5C6\uB294 \uD615\uC2DD</span>
        <span class="token string-property property">&quot;*.mdx&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@mdx-js/loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=o(`<p>\uC704\uC758 \uAD6C\uC131\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC571\uC5D0\uC11C \uBCC0\uD658\uB41C \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> MyDoc <span class="token keyword">from</span> <span class="token string">&quot;./my-doc.mdx&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>MyDoc <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\uC54C\uC544\uB450\uBA74 \uC88B\uC740 \uC0AC\uD56D: Next.js \uBC84\uC804 13.4.4 \uC774\uC804\uC5D0\uB294 experimental.turbo.rules\uAC00 experimental.turbo.loaders\uB85C \uC774\uB984\uC774 \uC9C0\uC5B4\uC84C\uC73C\uBA70 *.mdx \uB300\uC2E0 .mdx\uC640 \uAC19\uC740 \uD30C\uC77C \uD655\uC7A5\uC790\uB9CC \uD5C8\uC6A9\uD588\uC2B5\uB2C8\uB2E4.</p></blockquote><h3 id="\u110C\u1175\u110B\u116F\u11AB\u1103\u116C\u1102\u1173\u11AB-\u1105\u1169\u1103\u1165" tabindex="-1"><a class="header-anchor" href="#\u110C\u1175\u110B\u116F\u11AB\u1103\u116C\u1102\u1173\u11AB-\u1105\u1169\u1103\u1165" aria-hidden="true">#</a> \uC9C0\uC6D0\uB418\uB294 \uB85C\uB354</h3><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=o('<p>\uB2E4\uC74C \uB80C\uB354\uB7EC\uB4E4\uC740 Turbopack\uC758 \uC6F9\uD329 \uB85C\uB354 \uAD6C\uD604\uACFC \uD568\uAED8 \uC791\uB3D9\uD558\uB294 \uAC83\uC73C\uB85C \uD655\uC778\uB418\uC5C8\uC2B5\uB2C8\uB2E4:</p><ul><li>babel-loader</li><li>@mdx-js/loader</li><li>@svgr/webpack</li><li>svg-inline-loader</li><li>yaml-loader</li><li>string-replace-loader</li><li>raw-loader</li></ul><h3 id="\u110F\u1165\u1109\u1173\u1110\u1165\u11B7-\u1105\u1169\u1103\u1165" tabindex="-1"><a class="header-anchor" href="#\u110F\u1165\u1109\u1173\u1110\u1165\u11B7-\u1105\u1169\u1103\u1165" aria-hidden="true">#</a> \uCEE4\uC2A4\uD140 \uB85C\uB354</h3><p>\uC678\uBD80 \uD328\uD0A4\uC9C0\uB97C \uAC00\uC838\uC640\uC11C \uB85C\uB354 \uC635\uC158\uC73C\uB85C \uC804\uB2EC\uD574\uC57C \uD558\uB294 \uACBD\uC6B0, \uC6F9\uD329 \uB85C\uB354\uB97C \uC790\uCCB4\uC801\uC73C\uB85C \uB798\uD551\uD558\uC5EC \uD574\uB2F9 \uC635\uC158\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uC784\uC2DC\uC801\uC778 \uD574\uACB0\uCC45\uC774\uBA70 \uD5A5\uD6C4\uC5D0\uB294 \uD544\uC694\uD558\uC9C0 \uC54A\uC744 \uAC83\uC785\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),v=o(`<p>\uC774 \uB85C\uB354\uB294 @mdx-js/loader\uB97C \uAC10\uC2F8\uACE0 rehypePrism rehype \uD50C\uB7EC\uADF8\uC778\uC744 \uAD6C\uC131\uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mdxLoader <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@mdx-js/loader&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> rehypePrism <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@mapbox/rehype-prism&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> prevGetOptions <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getOptions</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">prevGetOptions</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rehypePlugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>rehypePrism<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">mdxLoader</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uADF8\uB7F0 \uB2E4\uC74C, Next.js\uB97C \uAD6C\uC131\uD558\uC5EC \uB798\uD37C \uB85C\uB354\uB97C \uB85C\uB4DC\uD558\uB3C4\uB85D \uC124\uC815\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">turbo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;*.mdx&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./my-mdx-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=o(`<h2 id="\u1107\u1167\u11AF\u110E\u1175\u11BC-\u1112\u1162\u1100\u1167\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1107\u1167\u11AF\u110E\u1175\u11BC-\u1112\u1162\u1100\u1167\u11AF" aria-hidden="true">#</a> \uBCC4\uCE6D \uD574\uACB0</h2><p>Turbopack\uC744 \uD1B5\uD574 \uBAA8\uB4C8 \uD574\uACB0\uC744 \uC218\uC815\uD560 \uC218 \uC788\uB294 next.config.js\uB97C \uD1B5\uD574 <code>resolve.alias</code> \uAD6C\uC131\uACFC \uC720\uC0AC\uD55C \uBC29\uC2DD\uC73C\uB85C \uBCC4\uCE6D\uC744 \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uBCC4\uCE6D\uC744 \uC124\uC815\uD558\uB824\uBA74, imported patterns\uC744 next.config.js\uC5D0\uC11C \uC0C8 \uBAA9\uC801\uC9C0\uB85C \uB9E4\uD551\uD558\uC2ED\uC2DC\uC624:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">turbo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">resolveAlias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">underscore</span><span class="token operator">:</span> <span class="token string">&quot;lodash&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mocha</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token string">&quot;mocha/browser-entry.js&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=e("p",null,[s("\uC774 \uBA85\uB839\uC5B4\uB294 Underscore \uD328\uD0A4\uC9C0\uB97C Lodash \uD328\uD0A4\uC9C0\uB85C \uAC00\uC838\uC624\uB294 \uBCC4\uCE6D(alias)\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. \uB2E4\uC2DC \uB9D0\uD558\uBA74, "),e("code",null,"underscore"),s("\uC5D0\uC11C Underscore\uB97C \uAC00\uC838\uC624\uB294 \uB300\uC2E0 Lodash \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC62C \uAC81\uB2C8\uB2E4.")],-1),y=e("p",null,"Turbopack\uC740 \uB610\uD55C Node.js\uC758 \uC870\uAC74\uBD80 \uC775\uC2A4\uD3EC\uD2B8\uC640 \uC720\uC0AC\uD55C \uBC29\uC2DD\uC73C\uB85C \uC774 \uD544\uB4DC\uB97C \uD1B5\uD574 \uC870\uAC74\uBD80 \uBCC4\uCE6D\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uD604\uC7AC\uB294 \uBE0C\uB77C\uC6B0\uC800 \uC870\uAC74\uB9CC \uC9C0\uC6D0\uB429\uB2C8\uB2E4. \uC704\uC758 \uC608\uC5D0\uC11C Turbopack\uC774 \uBE0C\uB77C\uC6B0\uC800 \uD658\uACBD\uC744 \uB300\uC0C1\uC73C\uB85C \uD560 \uB54C mocha \uBAA8\uB4C8\uC758 \uAC00\uC838\uC634\uC744 mocha/browser-entry.js\uB85C \uBCC4\uCE6D \uC9C0\uC815\uD560 \uAC81\uB2C8\uB2E4.",-1),g=e("h2",{id:"\u1112\u116A\u11A8\u110C\u1161\u11BC\u110C\u1161-\u1112\u1162\u1109\u1165\u11A8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u1112\u116A\u11A8\u110C\u1161\u11BC\u110C\u1161-\u1112\u1162\u1109\u1165\u11A8","aria-hidden":"true"},"#"),s(" \uD655\uC7A5\uC790 \uD574\uC11D")],-1),h=e("p",null,"next.config.js\uB97C \uD1B5\uD574 Turbopack\uC744 \uD655\uC7A5\uC790 \uD574\uC11D\uC744 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD558\uC5EC \uBAA8\uB4C8\uC744 \uD574\uC11D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 webpack\uC758 resolve.extensions \uAD6C\uC131\uACFC \uC720\uC0AC\uD569\uB2C8\uB2E4.",-1),f=e("p",null,[e("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),x=o(`<p>\uB2E4\uC74C\uACFC \uAC19\uC774 next.config.js \uD30C\uC77C\uC758 resolveExtensions \uD544\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC resolve \uD655\uC7A5\uC790(extension)\uB97C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">turbo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">resolveExtensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.mdx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.tsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.mjs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.json&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uAC83\uC740 \uC81C\uACF5\uB41C \uBAA9\uB85D\uC73C\uB85C \uAE30\uC874\uC758 resolve \uD655\uC7A5\uC790(extension)\uB97C \uB36E\uC5B4\uC501\uB2C8\uB2E4. \uAE30\uBCF8 \uD655\uC7A5\uC790\uB4E4\uB3C4 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694.</p><p>Webpack\uC5D0\uC11C \uC571\uC744 Turbopack\uC73C\uB85C \uC774\uAD00\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC815\uBCF4 \uBC0F \uC9C0\uCE68\uC740 webpack \uD638\uD658\uC131\uC5D0 \uB300\uD55C Turbopack \uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5);function w(q,_){return n(),i("div",null,[r,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,y,g,h,f,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(n(),a(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var B=l(c,[["render",w],["__file","index.html.vue"]]);export{B as default};