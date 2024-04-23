import{_ as s}from"./app.d68f74da.js";import{l as n,m as a,K as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const e={},p=t(`<h1 id="nextjs-14-css-modules-\u1109\u1161\u110B\u116D\u11BC-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#nextjs-14-css-modules-\u1109\u1161\u110B\u116D\u11BC-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> Nextjs 14 CSS Modules \uC0AC\uC6A9 \uBC29\uBC95</h1><h1 id="css-\u1106\u1169\u1103\u1172\u11AF" tabindex="-1"><a class="header-anchor" href="#css-\u1106\u1169\u1103\u1172\u11AF" aria-hidden="true">#</a> CSS \uBAA8\uB4C8</h1><p>Next.js\uC5D0\uB294 .module.css \uD655\uC7A5\uC790\uB97C \uC0AC\uC6A9\uD558\uC5EC CSS \uBAA8\uB4C8\uC744 \uB0B4\uC7A5 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.</p><p>CSS \uBAA8\uB4C8\uC740 \uC790\uB3D9\uC73C\uB85C \uACE0\uC720\uD55C \uD074\uB798\uC2A4 \uC774\uB984\uC744 \uC0DD\uC131\uD558\uC5EC CSS\uB97C \uC9C0\uC5ED\uC801\uC73C\uB85C \uC2A4\uCF54\uD504\uD654\uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uC11C\uB85C \uB2E4\uB978 \uD30C\uC77C\uC5D0\uC11C \uB3D9\uC77C\uD55C \uD074\uB798\uC2A4 \uC774\uB984\uC744 \uC0AC\uC6A9\uD558\uB354\uB77C\uB3C4 \uCDA9\uB3CC\uC5D0 \uB300\uD574 \uAC71\uC815\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774 \uB3D9\uC791\uC740 CSS \uBAA8\uB4C8\uC744 \uAD6C\uC131 \uC694\uC18C \uC218\uC900\uC758 CSS\uB97C \uD3EC\uD568\uD558\uAE30\uC5D0 \uC774\uC0C1\uC801\uC778 \uBC29\uBC95\uC73C\uB85C \uB9CC\uB4ED\uB2C8\uB2E4.</p><h2 id="\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> \uC608\uC2DC</h2><p>CSS \uBAA8\uB4C8\uC740 \uC571 \uB514\uB809\uD1A0\uB9AC \uB0B4\uC758 \uBAA8\uB4E0 \uD30C\uC77C\uC5D0 \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&quot;./styles.module.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">DashboardLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>dashboard<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.dashboard</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS \uBAA8\uB4C8\uC740 \uC120\uD0DD\uC801 \uAE30\uB2A5\uC774\uBA70 .module.css \uD655\uC7A5\uC790\uB97C \uAC00\uC9C4 \uD30C\uC77C\uC5D0 \uB300\uD574\uC11C\uB9CC \uD65C\uC131\uD654\uB429\uB2C8\uB2E4. \uC77C\uBC18 <link> \uC2A4\uD0C0\uC77C \uC2DC\uD2B8\uC640 \uC804\uC5ED CSS \uD30C\uC77C\uC740 \uC5EC\uC804\uD788 \uC9C0\uC6D0\uB429\uB2C8\uB2E4.</p><p>\uC0DD\uC0B0 \uD658\uACBD\uC5D0\uC11C\uB294 \uBAA8\uB4E0 CSS \uBAA8\uB4C8 \uD30C\uC77C\uC774 \uC790\uB3D9\uC73C\uB85C \uC5EC\uB7EC \uAC1C\uC758 \uC555\uCD95\uB418\uACE0 \uCF54\uB4DC\uAC00 \uBD84\uD560\uB41C .css \uD30C\uC77C\uB85C \uC5F0\uACB0\uB429\uB2C8\uB2E4. \uC774 .css \uD30C\uC77C\uC740 \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC5D0\uC11C \uD56B \uC2E4\uD589 \uACBD\uB85C\uB97C \uB098\uD0C0\uB0B4\uBA70 \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC774 \uD398\uC778\uD2B8\uB418\uB294 \uB370 \uD544\uC694\uD55C \uCD5C\uC18C\uD55C\uC758 CSS\uB9CC \uB85C\uB4DC\uB418\uB3C4\uB85D \uBCF4\uC7A5\uD569\uB2C8\uB2E4.</p><h2 id="\u110C\u1165\u11AB\u110B\u1167\u11A8-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11AB\u110B\u1167\u11A8-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF" aria-hidden="true">#</a> \uC804\uC5ED \uC2A4\uD0C0\uC77C</h2><p>\uC804\uC5ED \uC2A4\uD0C0\uC77C\uC740 \uC571 \uB514\uB809\uD1A0\uB9AC \uB0B4\uC758 \uB808\uC774\uC544\uC6C3, \uD398\uC774\uC9C0 \uB610\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><blockquote><p>\uC54C\uC544\uB450\uBA74 \uC88B\uC740 \uC810: \uC774\uAC83\uC740 \uD398\uC774\uC9C0 \uB514\uB809\uD1A0\uB9AC\uC640 \uB2E4\uB974\uBA70 \uC804\uC5ED \uC2A4\uD0C0\uC77C\uC740 _app.js \uD30C\uC77C \uB0B4\uC5D0\uC11C\uB9CC \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></blockquote><p>\uC608\uB97C \uB4E4\uC5B4, app/global.css\uB77C\uB294 \uC2A4\uD0C0\uC77C \uC2DC\uD2B8\uAC00 \uC788\uB2E4\uACE0 \uAC00\uC815\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px 20px 60px<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 680px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB8E8\uD2B8 \uB808\uC774\uC544\uC6C3(app/layout.js) \uB0B4\uC5D0\uC11C global.css \uC2A4\uD0C0\uC77C \uC2DC\uD2B8\uB97C \uAC00\uC838\uC640\uC11C \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC758 \uBAA8\uB4E0 \uACBD\uB85C\uC5D0 \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC774 \uC2A4\uD0C0\uC77C\uC740 \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC758 \uBAA8\uB4E0 \uACBD\uB85C\uC5D0 \uC801\uC6A9\uB429\uB2C8\uB2E4</span>
<span class="token keyword">import</span> <span class="token string">&quot;./global.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u110B\u116C\u1107\u116E-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u1109\u1175\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u110B\u116C\u1107\u116E-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u1109\u1175\u1110\u1173" aria-hidden="true">#</a> \uC678\uBD80 \uC2A4\uD0C0\uC77C\uC2DC\uD2B8</h2><p>\uC678\uBD80 \uD328\uD0A4\uC9C0\uC5D0\uC11C \uBC1C\uD589\uD55C \uC2A4\uD0C0\uC77C\uC2DC\uD2B8\uB294 \uC571 \uB514\uB809\uD1A0\uB9AC \uB0B4\uC758 \uBAA8\uB4E0 \uACF3, \uC989 \uB3D9\uC77C\uD55C \uC704\uCE58\uC5D0 \uC788\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uAC19\uC740 \uACF3\uC5D0\uC11C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">&quot;bootstrap/dist/css/bootstrap.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>body className<span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\uC54C\uC544\uB450\uBA74 \uC88B\uC740 \uC810: \uC678\uBD80 \uC2A4\uD0C0\uC77C\uC2DC\uD2B8\uB294 npm \uD328\uD0A4\uC9C0\uC5D0\uC11C \uC9C1\uC811 \uAC00\uC838\uC624\uAC70\uB098 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uC640 \uD568\uAED8 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC5EC \uB3D9\uC77C\uD55C \uC704\uCE58\uC5D0 \uB46C\uC57C \uD569\uB2C8\uB2E4. <link rel="stylesheet">\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</p></blockquote><h2 id="\u110E\u116E\u1100\u1161-\u1100\u1175\u1102\u1173\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110E\u116E\u1100\u1161-\u1100\u1175\u1102\u1173\u11BC" aria-hidden="true">#</a> \uCD94\uAC00 \uAE30\uB2A5</h2><p>Next.js\uC5D0\uB294 \uC2A4\uD0C0\uC77C \uCD94\uAC00 \uC791\uC131 \uACBD\uD5D8\uC744 \uAC1C\uC120\uD558\uB294 \uCD94\uAC00 \uAE30\uB2A5\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>next dev\uB85C \uB85C\uCEEC\uB85C \uC2E4\uD589\uD560 \uB54C \uB85C\uCEEC \uC2A4\uD0C0\uC77C\uC2DC\uD2B8(\uC804\uC5ED \uB610\uB294 CSS \uBAA8\uB4C8)\uC740 Fast Refresh\uB97C \uD65C\uC6A9\uD558\uC5EC \uD3B8\uC9D1\uC774 \uC800\uC7A5\uB420 \uB54C \uC989\uC2DC \uBCC0\uACBD \uC0AC\uD56D\uC744 \uBC18\uC601\uD569\uB2C8\uB2E4.</li><li>next build\uB85C \uD504\uB85C\uB355\uC158\uC6A9\uC73C\uB85C \uBE4C\uB4DC\uD560 \uB54C CSS \uD30C\uC77C\uC740 \uC2A4\uD0C0\uC77C\uC744 \uAC80\uC0C9\uD558\uB294 \uB370 \uD544\uC694\uD55C \uB124\uD2B8\uC6CC\uD06C \uC694\uCCAD\uC758 \uC218\uB97C \uC904\uC774\uAE30 \uC704\uD574 \uB354 \uC801\uC740 \uC218\uC758 \uC555\uCD95\uB41C .css \uD30C\uC77C\uB85C \uBC88\uB4E4\uB429\uB2C8\uB2E4.</li><li>JavaScript\uB97C \uBE44\uD65C\uC131\uD654\uD558\uBA74 \uD504\uB85C\uB355\uC158 \uBE4C\uB4DC(next start)\uC5D0\uC11C\uB3C4 \uC2A4\uD0C0\uC77C\uC774 \uB85C\uB4DC\uB429\uB2C8\uB2E4. \uADF8\uB7EC\uB098 Fast Refresh\uB97C \uD65C\uC131\uD654\uD558\uB824\uBA74 \uC5EC\uC804\uD788 JavaScript\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.</li></ul>`,24),o=[p];function c(l,i){return n(),a("div",null,o)}var b=s(e,[["render",c],["__file","index.html.vue"]]);export{b as default};
