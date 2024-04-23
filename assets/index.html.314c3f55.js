import{_ as c}from"./app.d68f74da.js";import{j as i,l as a,m as u,E as t,G as e,p as s,Y as p,C as n,z as r,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const d={},k=n("h1",{id:"\u110C\u1173\u11BC\u1107\u116E\u11AB-\u110C\u1165\u11BC\u110C\u1165\u11A8-\u110C\u1162\u1109\u1162\u11BC\u1109\u1165\u11BC-isr",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u110C\u1173\u11BC\u1107\u116E\u11AB-\u110C\u1165\u11BC\u110C\u1165\u11A8-\u110C\u1162\u1109\u1162\u11BC\u1109\u1165\u11BC-isr","aria-hidden":"true"},"#"),s(" \uC99D\uBD84 \uC815\uC801 \uC7AC\uC0DD\uC131 (ISR)")],-1),v=n("p",null,"Next.js\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC0AC\uC774\uD2B8\uB97C \uBE4C\uB4DC\uD55C \uD6C4\uC5D0 \uC815\uC801 \uD398\uC774\uC9C0\uB97C \uB9CC\uB4E4\uAC70\uB098 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC99D\uBD84 \uC815\uC801 \uC7AC\uC0DD\uC131 (ISR)\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC804\uCCB4 \uC0AC\uC774\uD2B8\uB97C \uB2E4\uC2DC \uBE4C\uB4DC\uD560 \uD544\uC694 \uC5C6\uC774 \uD398\uC774\uC9C0\uBCC4\uB85C \uC815\uC801 \uC0DD\uC131\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ISR\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC815\uC801\uC758 \uC774\uC810\uC744 \uC720\uC9C0\uD558\uBA74\uC11C \uC218\uBC31\uB9CC \uAC1C\uC758 \uD398\uC774\uC9C0\uB85C \uD655\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),m=n("blockquote",null,[n("p",null,"\uC54C\uC544 \uB450\uBA74 \uC88B\uC740 \uC0AC\uD56D: Edge \uB7F0\uD0C0\uC784\uC740 \uD604\uC7AC ISR\uACFC \uD638\uD658\uB418\uC9C0 \uC54A\uC9C0\uB9CC cache-control \uD5E4\uB354\uB97C \uC218\uB3D9\uC73C\uB85C \uC124\uC815\uD558\uC5EC stale-while-revalidate\uB97C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")],-1),b=n("p",null,"ISR\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 getStaticProps\uC5D0 revalidate \uC18D\uC131\uC744 \uCD94\uAC00\uD558\uC138\uC694:",-1),h=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),g=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Blog</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> posts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \uC774 \uD568\uC218\uB294 \uC11C\uBC84 \uCE21 \uBE4C\uB4DC \uC2DC\uAC04\uC5D0 \uD638\uCD9C\uB429\uB2C8\uB2E4.</span>
<span class="token comment">// \uC7AC\uC720\uD6A8\uD654\uAC00 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uACE0 \uC0C8 \uC694\uCCAD\uC774 \uB4E4\uC5B4\uC624\uBA74</span>
<span class="token comment">// \uC11C\uBC84\uB9AC\uC2A4 \uD568\uC218\uC5D0\uC11C \uB2E4\uC2DC \uD638\uCD9C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;https://.../posts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      posts<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// Next.js\uB294 \uD398\uC774\uC9C0\uB97C \uB2E4\uC2DC \uC0DD\uC131\uD558\uB824\uACE0 \uC2DC\uB3C4\uD569\uB2C8\uB2E4:</span>
    <span class="token comment">// - \uC694\uCCAD\uC774 \uB4E4\uC5B4\uC62C \uB54C</span>
    <span class="token comment">// - \uCD5C\uB300 10\uCD08\uB9C8\uB2E4 \uD55C \uBC88</span>
    <span class="token literal-property property">revalidate</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// \uCD08 \uB2E8\uC704</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \uC774 \uD568\uC218\uB294 \uC11C\uBC84 \uCE21 \uBE4C\uB4DC \uC2DC\uAC04\uC5D0 \uD638\uCD9C\uB429\uB2C8\uB2E4.</span>
<span class="token comment">// \uACBD\uB85C\uAC00 \uC0DD\uC131\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uC11C\uBC84\uB9AC\uC2A4 \uD568\uC218\uC5D0\uC11C \uB2E4\uC2DC \uD638\uCD9C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticPaths</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;https://.../posts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \uD3EC\uC2A4\uD2B8\uC5D0 \uAE30\uBC18\uD558\uC5EC \uC0AC\uC804 \uB80C\uB354\uB9C1\uD558\uB824\uB294 \uACBD\uB85C \uAC00\uC838\uC624\uAE30</span>
  <span class="token keyword">const</span> paths <span class="token operator">=</span> posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> post<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \uBE4C\uB4DC \uC2DC\uAC04\uC5D0 \uC774\uB7EC\uD55C \uACBD\uB85C\uB9CC \uC0AC\uC804 \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4.</span>
  <span class="token comment">// \uACBD\uB85C\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 { fallback: &#39;blocking&#39; }\uC740 \uD398\uC774\uC9C0\uB97C \uC11C\uBC84\uC5D0\uC11C \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4.</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> paths<span class="token punctuation">,</span> <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token string">&quot;blocking&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Blog<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC0AC\uC804 \uB80C\uB354\uB9C1\uB41C \uBE4C\uB4DC \uC2DC\uAC04\uC5D0 \uD398\uC774\uC9C0\uC5D0 \uC694\uCCAD\uC774 \uB4E4\uC5B4\uC624\uBA74 \uCD08\uAE30\uB85C \uCE90\uC2DC\uB41C \uD398\uC774\uC9C0\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p><ul><li>\uCD08\uAE30 \uC694\uCCAD \uD6C4 10\uCD08 \uC774\uC804\uC758 \uBAA8\uB4E0 \uD398\uC774\uC9C0 \uC694\uCCAD\uC740 \uCE90\uC2DC\uB418\uC5B4 \uBE60\uB985\uB2C8\uB2E4.</li><li>10\uCD08\uAC00 \uACBD\uACFC\uD55C \uD6C4, \uB2E4\uC74C \uC694\uCCAD\uC740 \uC5EC\uC804\uD788 \uCE90\uC2DC\uB41C(\uB9CC\uB8CC\uB41C) \uD398\uC774\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.</li><li>Next.js\uB294 \uBC30\uACBD\uC5D0\uC11C \uD398\uC774\uC9C0\uB97C \uB2E4\uC2DC \uC0DD\uC131\uD569\uB2C8\uB2E4.</li><li>\uD398\uC774\uC9C0\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uC0DD\uC131\uB418\uBA74 Next.js\uB294 \uCE90\uC2DC\uB97C \uBB34\uD6A8\uD654\uD558\uACE0 \uC5C5\uB370\uC774\uD2B8\uB41C \uD398\uC774\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uBC30\uACBD\uC5D0\uC11C \uC0DD\uC131\uC774 \uC2E4\uD328\uD558\uBA74 \uC774\uC804 \uD398\uC774\uC9C0\uAC00 \uBCC0\uACBD\uB418\uC9C0 \uC54A\uC740 \uCC44\uB85C \uC720\uC9C0\uB429\uB2C8\uB2E4.</li></ul><p>\uC0DD\uC131\uB418\uC9C0 \uC54A\uC740 \uACBD\uB85C\uC5D0 \uC694\uCCAD\uC774 \uB4E4\uC5B4\uC624\uBA74 Next.js\uB294 \uCD08\uAE30 \uC694\uCCAD \uC2DC\uC5D0 \uD398\uC774\uC9C0\uB97C \uC11C\uBC84\uC5D0\uC11C \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4. \uC774\uD6C4 \uC694\uCCAD\uC740 \uCE90\uC2DC\uC5D0\uC11C \uC815\uC801 \uD30C\uC77C\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. Vercel\uC5D0\uC11C ISR\uC740 \uC804\uC5ED\uC801\uC73C\uB85C \uCE90\uC2DC\uB97C \uC720\uC9C0\uD558\uACE0 \uB864\uBC31\uC744 \uCC98\uB9AC\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=n("blockquote",null,[n("p",null,"\uC88B\uC740 \uC815\uBCF4: \uC0C1\uC704 \uB370\uC774\uD130 \uC81C\uACF5 \uC5C5\uCCB4\uAC00 \uCE90\uC2F1\uC744 \uAE30\uBCF8\uC801\uC73C\uB85C \uD65C\uC131\uD654\uD588\uB294\uC9C0 \uD655\uC778\uD574 \uBCF4\uC138\uC694. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 (\uC608: useCdn: false\uCC98\uB7FC) \uBE44\uD65C\uC131\uD654\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uC7AC\uD655\uC778\uC774 ISR \uCE90\uC2DC\uB97C \uC5C5\uB370\uC774\uD2B8\uD560 \uC0C8\uB85C\uC6B4 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uC9C0 \uBABB\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uCE90\uC2F1\uC740 Cache-Control \uD5E4\uB354\uB97C \uBC18\uD658\uD558\uB294 \uACBD\uC6B0 \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0 \uB300\uD574 CDN(\uC694\uCCAD\uB41C \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0 \uB300\uD574)\uC5D0\uC11C \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")],-1),w=n("h2",{id:"\u110B\u116D\u110E\u1165\u11BC\u1109\u1175-\u110C\u1162\u1112\u116A\u11A8\u110B\u1175\u11AB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u110B\u116D\u110E\u1165\u11BC\u1109\u1175-\u110C\u1162\u1112\u116A\u11A8\u110B\u1175\u11AB","aria-hidden":"true"},"#"),s(" \uC694\uCCAD\uC2DC \uC7AC\uD655\uC778")],-1),_=n("p",null,"\uC7AC\uD655\uC778 \uC2DC\uAC04\uC744 60\uC73C\uB85C \uC124\uC815\uD558\uBA74 \uBAA8\uB4E0 \uBC29\uBB38\uC790\uAC00 \uC0AC\uC774\uD2B8\uC758 \uC0DD\uC131\uB41C \uB3D9\uC77C\uD55C \uBC84\uC804\uC744 1\uBD84 \uB3D9\uC548 \uBCF4\uAC8C \uB429\uB2C8\uB2E4. \uCE90\uC2DC\uB97C \uBB34\uD6A8\uD654\uD558\uB294 \uC720\uC77C\uD55C \uBC29\uBC95\uC740 1\uBD84\uC774 \uC9C0\uB09C \uD6C4 \uD574\uB2F9 \uD398\uC774\uC9C0\uB97C \uBC29\uBB38\uD55C \uC0AC\uB78C\uC785\uB2C8\uB2E4.",-1),f=n("p",null,"v12.2.0 \uC774\uC0C1\uBD80\uD130 Next.js\uB294 \uD2B9\uC815 \uD398\uC774\uC9C0\uC5D0 \uB300\uD55C Next.js \uCE90\uC2DC\uB97C \uC218\uB3D9\uC73C\uB85C \uC0AD\uC81C\uD558\uAE30 \uC704\uD574 On-Demand Incremental Static Regeneration\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC774\uB85C\uC368 \uC0AC\uC774\uD2B8\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uACFC\uC815\uC774 \uB354\uC6B1 \uC26C\uC6CC\uC9D1\uB2C8\uB2E4.",-1),x=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),j=n("ul",null,[n("li",null,"\uD5E4\uB4E4\uB9AC\uC2A4 CMS\uC5D0\uC11C \uCF58\uD150\uCE20\uB97C \uC0DD\uC131 \uB610\uB294 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4."),n("li",null,"\uC804\uC790 \uC0C1\uAC70\uB798 \uBA54\uD0C0\uB370\uC774\uD130 \uBCC0\uACBD (\uAC00\uACA9, \uC124\uBA85, \uCE74\uD14C\uACE0\uB9AC, \uB9AC\uBDF0 \uB4F1).")],-1),S=n("p",null,"getStaticProps \uB0B4\uBD80\uC5D0\uC11C \uD544\uC694\uD55C \uACBD\uC6B0 \uC628\uB514\uB9E8\uB4DC \uC7AC\uC720\uD6A8\uD654\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 revalidate\uB97C \uBA85\uC2DC\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. revalidate\uAC00 \uC0DD\uB7B5\uB41C \uACBD\uC6B0 Next.js\uB294 \uAE30\uBCF8\uAC12\uC73C\uB85C false(\uC7AC\uAC80\uC99D \uC5C6\uC74C)\uC744 \uC0AC\uC6A9\uD558\uACE0, revalidate()\uAC00 \uD638\uCD9C\uB420 \uB54C\uC5D0\uB9CC \uD398\uC774\uC9C0\uB97C \uD544\uC694\uD560 \uB54C \uC7AC\uAC80\uC99D\uD569\uB2C8\uB2E4.",-1),q=n("blockquote",null,[n("p",null,[s("\uC54C\uC544\uB450\uBA74 \uC88B\uC740 \uC810: \uBBF8\uB4E4\uC6E8\uC5B4\uB294 \uC628\uB514\uB9E8\uB4DC ISR \uC694\uCCAD\uC5D0 \uB300\uD574 \uC2E4\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB300\uC2E0 revalidate()\uB97C \uD638\uCD9C\uD558\uC5EC \uC7AC\uAC80\uC99D\uC744 \uC6D0\uD558\uB294 \uC815\uD655\uD55C \uACBD\uB85C\uB85C \uC774\uB3D9\uD558\uC2ED\uC2DC\uC624. \uC608\uB97C \uB4E4\uC5B4 pages/blog/[slug].js\uC640 /post-1\uC5D0\uC11C/blog/post-1\uB85C \uB9AC\uB514\uB809\uC158\uC744 \uD558\uB294 \uACBD\uC6B0, res.revalidate("),n("code",null,"/blog/post-1"),s(")\uB97C \uD638\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.")])],-1),N=n("h3",{id:"\u110B\u1169\u11AB\u1103\u1175\u1106\u1162\u11AB\u1103\u1173-\u110C\u1162\u110B\u1172\u1112\u116D\u1112\u116A-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u110B\u1169\u11AB\u1103\u1175\u1106\u1162\u11AB\u1103\u1173-\u110C\u1162\u110B\u1172\u1112\u116D\u1112\u116A-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),s(" \uC628\uB514\uB9E8\uB4DC \uC7AC\uC720\uD6A8\uD654 \uC0AC\uC6A9\uD558\uAE30")],-1),I=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),R=o(`<p>\uBA3C\uC800, Next.js \uC571\uB9CC\uC774 \uC54C \uC218 \uC788\uB294 \uBE44\uBC00 \uD1A0\uD070\uC744 \uC0DD\uC131\uD558\uC138\uC694. \uC774 \uBE44\uBC00 \uD1A0\uD070\uC740 \uC7AC\uC720\uD6A8\uD654 API \uB77C\uC6B0\uD2B8\uC5D0 \uB300\uD55C \uBB34\uB2E8 \uC561\uC138\uC2A4\uB97C \uBC29\uC9C0\uD558\uB294 \uB370 \uC0AC\uC6A9\uB420 \uAC83\uC785\uB2C8\uB2E4. \uB2E4\uC74C URL \uAD6C\uC870\uB85C \uB77C\uC6B0\uD2B8\uC5D0 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4 (\uC218\uB3D9 \uB610\uB294 \uC6F9\uD6C5\uC744 \uC0AC\uC6A9\uD558\uC5EC):</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">&lt;</span>your<span class="token operator">-</span>site<span class="token punctuation">.</span>com<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>revalidate<span class="token operator">?</span>secret<span class="token operator">=</span><span class="token operator">&lt;</span>token<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uADF8 \uB2E4\uC74C, \uC571 \uD658\uACBD \uBCC0\uC218\uB85C \uBE44\uBC00\uC744 \uCD94\uAC00\uD558\uC138\uC694. \uB9C8\uC9C0\uB9C9\uC73C\uB85C, \uC7AC\uC720\uD6A8\uD654 API \uB77C\uC6B0\uD2B8\uB97C \uB9CC\uB4DC\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uC694\uCCAD\uC774 \uC720\uD6A8\uD55C\uC9C0 \uD655\uC778\uD558\uAE30 \uC704\uD574 \uBE44\uBC00\uC744 \uD655\uC778\uD569\uB2C8\uB2E4.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>secret <span class="token operator">!==</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MY_SECRET_TOKEN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\uC798\uBABB\uB41C \uD1A0\uD070&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// \uC774 \uBD80\uBD84\uC740 \uC7AC\uC720\uD6A8\uD654\uD560 \uC2E4\uC81C \uACBD\uB85C\uC5EC\uC57C \uD569\uB2C8\uB2E4.</span>
    <span class="token comment">// \uC608: &quot;/blog/[slug]&quot; \uB300\uC2E0 this should be &quot;/blog/post-1&quot;</span>
    <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">revalidate</span><span class="token punctuation">(</span><span class="token string">&quot;/path-to-revalidate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">revalidated</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \uC624\uB958\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0, Next.js\uB294 \uACC4\uC18D\uD574\uC11C</span>
    <span class="token comment">// \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC131\uACF5\uC801\uC73C\uB85C \uC0DD\uC131\uB41C \uD398\uC774\uC9C0\uB97C \uD45C\uC2DC\uD560 \uAC83\uC785\uB2C8\uB2E4.</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;\uC7AC\uC720\uD6A8\uD654 \uC624\uB958&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),C=o(`<p>\uC6B0\uB9AC\uC758 \uB370\uBAA8\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694. \uC2E4\uC2DC\uAC04 \uC7AC\uC720\uD6A8\uD654\uAC00 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD558\uACE0 \uD53C\uB4DC\uBC31\uC744 \uC81C\uACF5\uD574 \uC8FC\uC138\uC694.</p><h3 id="\u1100\u1162\u1107\u1161\u11AF-\u110C\u116E\u11BC\u110B\u1166-on-demand-isr-\u1110\u1166\u1109\u1173\u1110\u1173\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u1107\u1161\u11AF-\u110C\u116E\u11BC\u110B\u1166-on-demand-isr-\u1110\u1166\u1109\u1173\u1110\u1173\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uAC1C\uBC1C \uC911\uC5D0 On-Demand ISR \uD14C\uC2A4\uD2B8\uD558\uAE30</h3><p>\uB85C\uCEEC\uC5D0\uC11C next dev\uB85C \uC2E4\uD589\uD560 \uB54C getStaticProps\uAC00 \uBAA8\uB4E0 \uC694\uCCAD\uC5D0 \uB300\uD574 \uD638\uCD9C\uB429\uB2C8\uB2E4. \uC2E4\uC2DC\uAC04 \uC7AC\uC720\uD6A8\uD654 \uAD6C\uC131\uC774 \uC62C\uBC14\uB978\uC9C0 \uD655\uC778\uD558\uB824\uBA74 \uC81C\uD488 \uBE4C\uB4DC\uB97C \uC0DD\uC131\uD558\uACE0 \uC81C\uD488 \uC11C\uBC84\uB97C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$ next build
$ next start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),P=o(`<p>\uADF8\uB7FC, \uC815\uC801 \uD398\uC774\uC9C0\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uC7AC\uAC80\uC99D\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110B\u1169\u1105\u1172-\u110E\u1165\u1105\u1175-\u1106\u1175\u11BE-\u110C\u1162\u110B\u1172\u1112\u116D\u1112\u116A" tabindex="-1"><a class="header-anchor" href="#\u110B\u1169\u1105\u1172-\u110E\u1165\u1105\u1175-\u1106\u1175\u11BE-\u110C\u1162\u110B\u1172\u1112\u116D\u1112\u116A" aria-hidden="true">#</a> \uC624\uB958 \uCC98\uB9AC \uBC0F \uC7AC\uC720\uD6A8\uD654</h2><p>getStaticProps \uB0B4\uBD80\uC5D0\uC11C \uBC31\uADF8\uB77C\uC6B4\uB4DC \uC7AC\uC0DD\uC131\uC744 \uCC98\uB9AC\uD560 \uB54C \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uAC70\uB098 \uC218\uB3D9\uC73C\uB85C \uC624\uB958\uB97C throw\uD558\uB294 \uACBD\uC6B0, \uCD5C\uADFC\uC5D0 \uC131\uACF5\uC801\uC73C\uB85C \uC0DD\uC131\uB41C \uD398\uC774\uC9C0\uAC00 \uACC4\uC18D \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uB2E4\uC74C \uC694\uCCAD\uC5D0\uC11C Next.js\uB294 getStaticProps\uB97C \uB2E4\uC2DC \uD638\uCD9C\uD558\uB824\uACE0 \uD560 \uAC83\uC785\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uB9CC\uC57D \uC774 \uC694\uCCAD\uC774 \uCC98\uB9AC\uB418\uC9C0 \uC54A\uB294 \uC624\uB958\uB97C throw\uD558\uBA74, Next.js\uB294</span>
  <span class="token comment">// \uD604\uC7AC \uD45C\uC2DC\uB41C \uD398\uC774\uC9C0\uB97C \uBB34\uD6A8\uD654\uD558\uC9C0 \uC54A\uACE0,</span>
  <span class="token comment">// \uB2E4\uC74C \uC694\uCCAD\uC5D0\uC11C getStaticProps\uB97C \uB2E4\uC2DC \uC2DC\uB3C4\uD560 \uAC83\uC785\uB2C8\uB2E4.</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;https://.../posts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \uC11C\uBC84 \uC624\uB958\uAC00 \uC788\uB294 \uACBD\uC6B0 \uCE90\uC2DC\uAC00 \uC5C5\uB370\uC774\uD2B8\uB418\uC9C0 \uC54A\uB3C4\uB85D</span>
    <span class="token comment">// \uBC18\uD658\uD558\uB294 \uB300\uC2E0 \uC624\uB958\uB97C throw\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</span>
    <span class="token comment">// \uB2E4\uC74C \uC131\uACF5\uC801\uC778 \uC694\uCCAD\uAE4C\uC9C0.</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\uAC8C\uC2DC\uBB3C\uC744 \uBD88\uB7EC\uC624\uB294 \uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uC0C1\uD0DC \uCF54\uB4DC: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>res<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \uC694\uCCAD\uC774 \uC131\uACF5\uD588\uC744 \uACBD\uC6B0 \uAC8C\uC2DC\uBB3C\uC744 \uBC18\uD658\uD558\uACE0,</span>
  <span class="token comment">// 10\uCD08\uB9C8\uB2E4 \uC7AC\uAC80\uC99D\uD569\uB2C8\uB2E4.</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      posts<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">revalidate</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),E=o('<h2 id="\u110C\u1161\u110E\u1166-\u1112\u1169\u1109\u1173\u1110\u1175\u11BC-isr" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u110E\u1166-\u1112\u1169\u1109\u1173\u1110\u1175\u11BC-isr" aria-hidden="true">#</a> \uC790\uCCB4 \uD638\uC2A4\uD305 ISR</h2><p>\uC790\uCCB4 \uD638\uC2A4\uD305\uB41C Next.js \uC0AC\uC774\uD2B8\uC5D0\uC11C\uB294 next start\uB97C \uC0AC\uC6A9\uD560 \uB54C \uC99D\uBD84 \uC815\uC801 \uC7AC\uC0DD\uC131(ISR)\uC774 \uAE30\uBCF8\uC801\uC73C\uB85C \uC791\uB3D9\uD569\uB2C8\uB2E4.</p><p>\uC790\uCCB4 \uD638\uC2A4\uD305 Next.js\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uAE30.</p><h2 id="\u1107\u1165\u110C\u1165\u11AB-\u1100\u1175\u1105\u1169\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1107\u1165\u110C\u1165\u11AB-\u1100\u1175\u1105\u1169\u11A8" aria-hidden="true">#</a> \uBC84\uC804 \uAE30\uB85D</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),B=n("thead",null,[n("tr",null,[n("th",null,"Version"),n("th",null,"Changes")])],-1),D=n("tr",null,[n("td",null,[n("code",null,"v14.1.0")]),n("td",null,[s("Custom "),n("code",null,"cacheHandler"),s(" is stable.")])],-1),V=n("tr",null,[n("td",null,[n("code",null,"v12.2.0")]),n("td",null,"On-Demand ISR is stable")],-1),O=n("tr",null,[n("td",null,[n("code",null,"v12.1.0")]),n("td",null,"On-Demand ISR added (beta).")],-1),L=n("td",null,[n("code",null,"v12.0.0")],-1),T={href:"https://nextjs.org/blog/next-12#bot-aware-isr-fallback",target:"_blank",rel:"noopener noreferrer"},$=n("tr",null,[n("td",null,[n("code",null,"v9.5.0")]),n("td",null,"Base Path added.")],-1),A=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function K(M,Y){const l=i("ExternalLinkIcon");return a(),u("div",null,[k,v,m,b,h,(a(),t(p("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(a(),t(p("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,w,_,f,x,(a(),t(p("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,S,q,N,I,(a(),t(p("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),R,(a(),t(p("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),C,(a(),t(p("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),P,(a(),t(p("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),E,(a(),t(p("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),n("table",null,[B,n("tbody",null,[D,V,O,n("tr",null,[L,n("td",null,[n("a",T,[s("Bot-aware ISR fallback"),r(l)]),s(" added.")])]),$])]),A,(a(),t(p("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var Q=c(d,[["render",K],["__file","index.html.vue"]]);export{Q as default};
