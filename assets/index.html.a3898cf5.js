import{_ as i}from"./app.63e06a35.js";import{l as n,m as l,E as e,G as t,p as a,Y as o,C as s,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/Howtoquicklycheckifafront-endprojecthasacache_0.5e8c0d6f.png";const r={},d=s("p",null,"\uCEE8\uD14C\uC774\uB108\uD654 \uC2DC\uB300\uC5D0\uB294 \uD398\uC774\uC9C0\uC5D0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD560 \uB54C \uC0C8\uB85C\uC6B4 \uBC84\uC804\uC774 \uC774\uBBF8 \uC218\uC815\uB418\uC5C8\uC744 \uAC00\uB2A5\uC131\uC774 \uB192\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBB38\uC81C \uD574\uACB0\uC744 \uC704\uD574 \uACE0\uAD70\uBD84\uD22C\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",-1),u=s("p",null,"\uC65C \uD56D\uC0C1 \uCD5C\uC2E0 \uBC84\uC804\uC774 \uC544\uB2CC\uAC00\uC694? \uD55C \uAC00\uC9C0 \uC774\uC720\uB294 \uCE90\uC2F1\uC77C \uC218 \uC788\uACE0, \uB2E4\uB978 \uC774\uC720\uB85C \uC6B4\uC601\uD300 \uAD6C\uC131\uC6D0\uC774 \uBC84\uC804\uC744 \uC6D0\uB798\uB300\uB85C \uB864\uBC31\uD588\uC744 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD55C \uBC84\uC804\uC744 \uC5B4\uB5BB\uAC8C \uD655\uC778\uD560 \uC218 \uC788\uC744\uAE4C\uC694? \uC774\uB97C \uD655\uC778\uD558\uB824\uBA74 \uD398\uC774\uC9C0\uC5D0 \uBC84\uC804 \uBC88\uD638\uB97C \uC0BD\uC785\uD574\uC57C \uD569\uB2C8\uB2E4.",-1),v=s("p",null,"\uC77C\uBC18\uC801\uC73C\uB85C \uC774 \uB2E8\uACC4\uB294 \uBE4C\uB4DC\uB97C \uD328\uD0A4\uC9D5\uD560 \uB54C package.json\uC5D0 \uC788\uB294 \uBC84\uC804 \uD544\uB4DC\uB97C html\uC5D0 \uC0BD\uC785\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4 (\uB530\uB77C\uC11C \uAC01 \uB9B4\uB9AC\uC2A4\uB9C8\uB2E4 \uD574\uB2F9 \uBC84\uC804\uC744 \uC218\uC815\uD574\uC57C \uD558\uBA70, \uC774\uB294 npm version \uBA85\uB839\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD558\uB294 \uAC8C \uC88B\uC2B5\uB2C8\uB2E4). \uC800\uB294 head\uC5D0 meta\uB97C \uCD94\uAC00\uD558\uB294 \uAC83\uC744 \uC120\uD638\uD558\uC9C0\uB9CC, \uBB3C\uB860 \uD654\uBA74\uC5D0 \uCD9C\uB825\uD574\uB3C4 \uB429\uB2C8\uB2E4.",-1),k=s("h1",{id:"vite",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vite","aria-hidden":"true"},"#"),a(" vite")],-1),m=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),g=p(`<p>vite \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 vite-plugin-html-template \uD50C\uB7EC\uADF8\uC778\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5B4\uC694. vite.config.ts \uD30C\uC77C\uC5D0 \uB2E4\uC74C \uCF54\uB4DC\uB97C \uCD94\uAC00\uD574\uC8FC\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> htmlTemplate <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-html-template&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> version <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./package.json&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token function">htmlTemplate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        version
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD558\uC9C0\uB9CC \uAD6D\uC81C\uD654\uB41C \uB2E8\uC5B4\uAC00 \uB108\uBB34 \uB9CE\uC73C\uBA74 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC5B4\uC694. \uC790\uC6D0 \uD30C\uC77C\uC774 \uB108\uBB34 \uCEE4\uC9C0\uBA74 \uD398\uC774\uC9C0\uC5D0 \uC811\uC18D\uD560 \uB54C\uB9C8\uB2E4 \uBAA8\uB4E0 \uC5B8\uC5B4 \uC790\uC6D0\uC744 \uB85C\uB4DC\uD574\uC57C \uD558\uBA70, \uD398\uC774\uC9C0\uC5D0\uC11C \uD544\uC694\uD55C \uC5B8\uC5B4\uAC00 \uD55C \uAC00\uC9C0 \uBFD0\uC774\uB77C\uBA74 \uB2E4\uB978 \uC5B8\uC5B4\uC758 \uC790\uC6D0\uC740 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC544 \uC6F9\uC0AC\uC774\uD2B8 \uCCAB \uD654\uBA74\uC758 \uB85C\uB529 \uC18D\uB3C4\uC5D0 \uC601\uD5A5\uC744 \uC904 \uC218 \uC788\uC5B4\uC694.</p><p>json \uD30C\uC77C\uC744 \uCC38\uC870\uD558\uAE30 \uB54C\uBB38\uC5D0 \uAE30\uBCF8 tsconfig.config.json \uD30C\uC77C\uC744 \uC218\uC815\uD574\uC57C \uD574\uC694. package.json\uC744 \uD3EC\uD568\uD558\uB3C4\uB85D &quot;include&quot;\uC5D0 \uCD94\uAC00\uD574\uC8FC\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>xxx<span class="token punctuation">,</span> <span class="token string">&quot;package.json&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,6),b=p(`<p><code>index.html</code> \uD30C\uC77C\uC744 <code>public</code> \uB514\uB809\uD1A0\uB9AC\uB85C \uC774\uB3D9\uD558\uACE0 <code>head</code>\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBB38\uC7A5\uC744 \uCD94\uAC00\uD574\uC8FC\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>meta version<span class="token operator">=</span><span class="token string">&quot;&lt;%- version %&gt;&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">...</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uD558\uBA74 \uD398\uC774\uC9C0\uC5D0\uC11C \uBC84\uC804 \uBC88\uD638\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><img src="`+c+'">',4);function h(_,f){return n(),l("div",null,[d,u,v,k,m,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b])}var C=i(r,[["render",h],["__file","index.html.vue"]]);export{C as default};
