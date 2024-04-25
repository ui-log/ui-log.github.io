import{_ as l}from"./app.3052dcfb.js";import{l as n,m as i,E as t,G as e,p as a,Y as o,K as p,C as s}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const c={},r=p(`<h1 id="\u110C\u1165\u11AF\u1103\u1162-\u1100\u1167\u11BC\u1105\u1169-\u110B\u1175\u11B7\u1111\u1169\u1110\u1173-\u1106\u1175\u11BE-\u1106\u1169\u1103\u1172\u11AF-\u1100\u1167\u11BC\u1105\u1169-\u1107\u1167\u11AF\u110E\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11AF\u1103\u1162-\u1100\u1167\u11BC\u1105\u1169-\u110B\u1175\u11B7\u1111\u1169\u1110\u1173-\u1106\u1175\u11BE-\u1106\u1169\u1103\u1172\u11AF-\u1100\u1167\u11BC\u1105\u1169-\u1107\u1167\u11AF\u110E\u1175\u11BC" aria-hidden="true">#</a> \uC808\uB300 \uACBD\uB85C \uC784\uD3EC\uD2B8 \uBC0F \uBAA8\uB4C8 \uACBD\uB85C \uBCC4\uCE6D</h1><p>Next.js\uB294 tsconfig.json \uBC0F jsconfig.json \uD30C\uC77C\uC758 &quot;paths&quot; \uBC0F &quot;baseUrl&quot; \uC635\uC158\uC744 \uB0B4\uC7A5 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC635\uC158\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD504\uB85C\uC81D\uD2B8 \uB514\uB809\uD1A0\uB9AC\uB97C \uC808\uB300 \uACBD\uB85C\uC5D0 \uBCC4\uCE6D\uC73C\uB85C \uC9C0\uC815\uD558\uC5EC \uBAA8\uB4C8\uC744 \uB354 \uC27D\uAC8C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC774\uC804</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../../components/button&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \uC774\uD6C4</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/components/button&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),u=s("blockquote",null,[s("p",null,"\uC88B\uC740 \uC815\uBCF4: create-next-app\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC774\uB7EC\uD55C \uC635\uC158\uC744 \uAD6C\uC131\uD558\uB77C\uB294 \uBA54\uC2DC\uC9C0\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.")],-1),d=s("h2",{id:"\u110C\u1165\u11AF\u1103\u1162-imports",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u110C\u1165\u11AF\u1103\u1162-imports","aria-hidden":"true"},"#"),a(" \uC808\uB300 Imports")],-1),k=s("p",null,"baseUrl \uAD6C\uC131 \uC635\uC158\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD504\uB85C\uC81D\uD2B8\uC758 \uB8E8\uD2B8\uC5D0\uC11C \uC9C1\uC811 \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uAD6C\uC131\uC758 \uC608\uC2DC:",-1),v=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),m=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&quot;components/button&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1106\u1169\u1103\u1172\u11AF-\u1107\u1167\u11AF\u110E\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1106\u1169\u1103\u1172\u11AF-\u1107\u1167\u11AF\u110E\u1175\u11BC" aria-hidden="true">#</a> \uBAA8\uB4C8 \uBCC4\uCE6D</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=p(`<p>baseUrl \uACBD\uB85C\uB97C \uAD6C\uC131\uD558\uB294 \uAC83 \uC678\uC5D0\uB3C4 &quot;paths&quot; \uC635\uC158\uC744 \uC0AC\uC6A9\uD558\uC5EC \uBAA8\uB4C8 \uACBD\uB85C\uB97C &quot;\uBCC4\uCE6D&quot;\uC73C\uB85C \uC124\uC815\uD560 \uC218 \uC788\uC5B4\uC694. \uC544\uB798 \uC124\uC815 \uC608\uC2DC\uC5D0\uC11C\uB294 @/components/*\uB97C components/*\uB85C \uB9E4\uD551\uD558\uB294 \uAD6C\uC131\uC744 \uBCF4\uC5EC\uC918\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;@/components/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;components/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),g=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&quot;@/components/button&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>\uC548\uB155<span class="token punctuation">,</span> \uC138\uC0C1\uC544<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uAC01 &quot;paths&quot;\uB294 baseUrl \uC704\uCE58\uB97C \uAE30\uC900\uC73C\uB85C \uC0C1\uB300\uC801\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// tsconfig.json \uB610\uB294 jsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src/&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;@/styles/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;styles/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;@/components/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;components/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// pages/index.js</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&quot;@/components/button&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@/styles/styles.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Helper <span class="token keyword">from</span> <span class="token string">&quot;utils/helper&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Helper<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>\uC548\uB155<span class="token punctuation">,</span> \uC138\uC0C1\uC544<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Helper<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5);function y(h,q){return n(),i("div",null,[r,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,d,k,v,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var H=l(c,[["render",y],["__file","index.html.vue"]]);export{H as default};
