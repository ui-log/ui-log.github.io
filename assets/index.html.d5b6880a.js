import{_ as l}from"./app.a99075bb.js";import{l as s,m as c,E as n,G as t,p as e,Y as o,K as p,C as a}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const i={},r=p(`<h1 id="\u110C\u1165\u11BC\u110C\u1165\u11A8-\u110C\u1161\u1109\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11BC\u110C\u1165\u11A8-\u110C\u1161\u1109\u1161\u11AB" aria-hidden="true">#</a> \uC815\uC801 \uC790\uC0B0</h1><p>Next.js\uB294 \uB8E8\uD2B8 \uB514\uB809\uD1A0\uB9AC\uC5D0\uC788\uB294 public\uC774\uB77C\uB294 \uD3F4\uB354 \uC544\uB798\uC640 \uAC19\uC774 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC740 \uC815\uC801 \uD30C\uC77C\uC744 \uC81C\uACF5 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. public \uB0B4\uBD80\uC758 \uD30C\uC77C\uC740 \uAE30\uBCF8 URL (/)\uC744 \uAE30\uC900\uC73C\uB85C \uCF54\uB4DC\uC5D0\uC11C \uCC38\uC870 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC5B4, public/avatars/me.png \uD30C\uC77C\uC740 /avatars/me.png \uACBD\uB85C\uB97C \uBC29\uBB38\uD558\uC5EC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD574\uB2F9 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD558\uB294 \uCF54\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uBCF4\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">&quot;next/image&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Avatar</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> id<span class="token punctuation">,</span> alt <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Image src<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/avatars/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.png</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token punctuation">{</span>alt<span class="token punctuation">}</span> width<span class="token operator">=</span><span class="token string">&quot;64&quot;</span> height<span class="token operator">=</span><span class="token string">&quot;64&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">AvatarOfMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Avatar id<span class="token operator">=</span><span class="token string">&quot;me&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;\uB0B4 \uCD08\uC0C1\uD654&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=p(`<h2 id="\u110F\u1162\u1109\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110F\u1162\u1109\u1175\u11BC" aria-hidden="true">#</a> \uCE90\uC2F1</h2><p>Next.js\uB294 public \uD3F4\uB354\uC5D0 \uC788\uB294 \uC5D0\uC14B\uC744 \uC548\uC804\uD558\uAC8C \uCE90\uC2DC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC65C\uB0D0\uD558\uBA74 \uADF8\uAC83\uB4E4\uC774 \uBCC0\uACBD\uB420 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC801\uC6A9\uB41C \uAE30\uBCF8 \uCE90\uC2F1 \uD5E4\uB354\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Cache<span class="token operator">-</span>Control<span class="token operator">:</span> <span class="token keyword">public</span><span class="token punctuation">,</span> max<span class="token operator">-</span>age<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u1105\u1169\u1107\u1169\u11BA-\u1111\u1161\u1107\u1175\u110F\u1169\u11AB-\u1100\u1173\u1105\u1175\u1100\u1169-\u1100\u1173-\u110B\u116C\u110B\u1174-\u1100\u1165\u11BA\u1103\u1173\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1105\u1169\u1107\u1169\u11BA-\u1111\u1161\u1107\u1175\u110F\u1169\u11AB-\u1100\u1173\u1105\u1175\u1100\u1169-\u1100\u1173-\u110B\u116C\u110B\u1174-\u1100\u1165\u11BA\u1103\u1173\u11AF" aria-hidden="true">#</a> \uB85C\uBD07, \uD30C\uBE44\uCF58, \uADF8\uB9AC\uACE0 \uADF8 \uC678\uC758 \uAC83\uB4E4</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=a("p",null,"\uD3F4\uB354\uB294 robots.txt, favicon.ico, Google \uC0AC\uC774\uD2B8 \uD655\uC778 \uBC0F \uB2E4\uB978 \uC815\uC801 \uD30C\uC77C(.html \uD3EC\uD568)\uC5D0\uB3C4 \uC720\uC6A9\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 pages/ \uB514\uB809\uD1A0\uB9AC \uB0B4\uC758 \uD30C\uC77C \uC774\uB984\uACFC \uB3D9\uC77C\uD55C \uC815\uC801 \uD30C\uC77C\uC774 \uC788\uC73C\uBA74 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC73C\uB2C8 \uC8FC\uC758\uD574\uC8FC\uC138\uC694. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC5EC\uAE30\uC11C \uD655\uC778\uD558\uC138\uC694.",-1),k=a("blockquote",null,[a("p",null,"\uC54C\uC544 \uB450\uBA74 \uC88B\uC740 \uC0AC\uD56D: \uB514\uB809\uD1A0\uB9AC\uB294 public\uC73C\uB85C \uC9C0\uC815\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC774\uB984\uC744 \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC73C\uBA70, \uC815\uC801 \uC790\uC0B0\uC744 \uC81C\uACF5\uD558\uB294 \uC720\uC77C\uD55C \uB514\uB809\uD1A0\uB9AC\uC785\uB2C8\uB2E4. \uBE4C\uB4DC \uC2DC\uC810\uC5D0 public \uB514\uB809\uD1A0\uB9AC\uC5D0 \uC788\uB294 \uC790\uC0B0\uB9CC Next.js\uAC00 \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC694\uCCAD \uC2DC \uCD94\uAC00\uB41C \uD30C\uC77C\uC740 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC9C0\uC18D\uC801 \uD30C\uC77C \uC800\uC7A5\uC744 \uC704\uD574 Vercel Blob\uACFC \uAC19\uC740 \uD0C0\uC0AC \uC11C\uBE44\uC2A4\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4.")],-1),m=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function g(v,b){return s(),c("div",null,[r,(s(),n(o("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(s(),n(o("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,k,m,(s(),n(o("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var q=l(i,[["render",g],["__file","index.html.vue"]]);export{q as default};