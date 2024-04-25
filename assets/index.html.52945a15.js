import{_ as l}from"./app.3052dcfb.js";import{l as n,m as c,E as e,G as t,p as a,Y as p,C as s,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/Mastering-React-Component-Styling_0.45e935a7.png";const r={},d=s("p",null,[s("img",{src:i,alt:"React \uAD6C\uC131 \uC694\uC18C \uC2A4\uD0C0\uC77C\uB9C1 \uB9C8\uC2A4\uD130\uD558\uAE30"})],-1),u=s("p",null,"React \uAD6C\uC131 \uC694\uC18C \uC2A4\uD0C0\uC77C\uB9C1\uC740 \uB2E8\uC21C\uD788 \uAE54\uB054\uD558\uAC8C \uB9CC\uB4DC\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C, \uC0AC\uC6A9\uC790\uAC00 \uACC4\uC18D\uD574\uC11C \uB3CC\uC544\uC624\uB294 \uB9E4\uB825\uC801\uC778 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uB9CC\uB4DC\uB294 \uB370 \uAD00\uD55C \uAC83\uC785\uB2C8\uB2E4. \uC624\uB298\uC740 React \uAD6C\uC131 \uC694\uC18C\uB97C \uC2A4\uD0C0\uC77C\uB9C1\uD558\uB294 \uB2E4\uC12F \uAC00\uC9C0 \uAC15\uB825\uD55C \uAE30\uC220\uC744 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC608\uC2DC\uC640 \uC790\uC138\uD55C \uC124\uBA85\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC5B4\uC694. \uACBD\uD5D8\uC774 \uD48D\uBD80\uD55C \uC804\uBB38\uAC00\uB4E0 \uCD08\uBCF4\uB4E0, \uBAA8\uB450\uC5D0\uAC8C \uC2A4\uD0C0\uC77C\uB9C1 \uC2E4\uB825\uC744 \uB192\uC77C \uC218 \uC788\uB294 \uB0B4\uC6A9\uC774 \uC900\uBE44\uB418\uC5B4 \uC788\uC5B4\uC694.",-1),k=s("h2",{id:"_1-\u110B\u1175\u11AB\u1105\u1161\u110B\u1175\u11AB-css-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u110C\u1175\u11A8\u110C\u1165\u11B8-\u1110\u1169\u11BC\u1112\u1161\u11B8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-\u110B\u1175\u11AB\u1105\u1161\u110B\u1175\u11AB-css-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u110C\u1175\u11A8\u110C\u1165\u11B8-\u1110\u1169\u11BC\u1112\u1161\u11B8","aria-hidden":"true"},"#"),a(" 1. \uC778\uB77C\uC778 CSS: \uC2A4\uD0C0\uC77C \uC9C1\uC811 \uD1B5\uD569")],-1),v=s("p",null,"\uC778\uB77C\uC778 CSS\uB294 \uAC00\uC7A5 \uCD94\uCC9C\uB418\uC9C0 \uC54A\uB294 \uBC29\uBC95\uC740 \uC544\uB2C8\uC9C0\uB9CC, React \uAD6C\uC131 \uC694\uC18C \uB0B4\uC5D0\uC11C \uC2A4\uD0C0\uC77C\uC744 \uC27D\uAC8C \uC801\uC6A9\uD560 \uC218 \uC788\uB294 \uD3B8\uB9AC\uD55C \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC2A4\uD0C0\uC77C \uAC1D\uCCB4\uB97C \uAD6C\uC131 \uC694\uC18C \uC694\uC18C\uC5D0 \uC9C1\uC811 \uC804\uB2EC\uD568\uC73C\uB85C\uC368 \uBE60\uB974\uACE0 \uD0C0\uAC9F\uD305\uB41C \uC2A4\uD0C0\uC77C\uB9C1\uC744 \uB2EC\uC131\uD560 \uC218 \uC788\uC5B4\uC694.",-1),m=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=o(`<p>\uC608\uC2DC:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> styles <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;lightblue&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">&#39;10px&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token string">&#39;5px&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">}</span><span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span> World<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-\u110B\u1175\u11AF\u1107\u1161\u11AB-css-\u110C\u1165\u11AB\u1110\u1169\u11BC\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u1109\u1175\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#_2-\u110B\u1175\u11AF\u1107\u1161\u11AB-css-\u110C\u1165\u11AB\u1110\u1169\u11BC\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u1109\u1175\u1110\u1173" aria-hidden="true">#</a> 2. \uC77C\uBC18 CSS: \uC804\uD1B5\uC801\uC778 \uC2A4\uD0C0\uC77C \uC2DC\uD2B8</h1><p>React \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC2A4\uD0C0\uC77C\uB9C1\uD560 \uB54C \uAC00\uB054\uC740 \uC61B \uBC29\uC2DD\uC774 \uCD5C\uC120\uC758 \uBC29\uBC95\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. CSS \uD30C\uC77C\uC744 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uAC00\uC838\uC640\uC11C \uC0AC\uC6A9\uD558\uBA74 \uB9C8\uD06C\uC5C5\uACFC \uC2A4\uD0C0\uC77C \uC0AC\uC774\uC5D0 \uBA85\uD655\uD55C \uAD6C\uBD84\uC744 \uC720\uC9C0\uD558\uC5EC \uC870\uC9C1 \uBC0F \uC7AC\uC0AC\uC6A9\uC131\uC744 \uB192\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=o(`<p>\uC608\uC2DC:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* styles.css */</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> lightblue<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./styles.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>\uC548\uB155<span class="token punctuation">,</span> \uC138\uC0C1\uC544<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-css-in-js-\u1103\u1169\u11BC\u110C\u1165\u11A8\u110B\u1173\u1105\u1169-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u110B\u1175-\u110C\u1165\u11A8\u110B\u116D\u11BC\u1103\u116C\u11AB-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#_3-css-in-js-\u1103\u1169\u11BC\u110C\u1165\u11A8\u110B\u1173\u1105\u1169-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u110B\u1175-\u110C\u1165\u11A8\u110B\u116D\u11BC\u1103\u116C\u11AB-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173" aria-hidden="true">#</a> 3. CSS in JS: \uB3D9\uC801\uC73C\uB85C \uC2A4\uD0C0\uC77C\uC774 \uC801\uC6A9\uB41C \uCEF4\uD3EC\uB10C\uD2B8</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=o(`<p>CSS in JS \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC778 Styled Components\uC640 \uAC19\uC740 \uACBD\uC6B0, React \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD558\uB294 \uAC15\uB825\uD55C \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uCEF4\uD3EC\uB10C\uD2B8 \uC815\uC758 \uB0B4\uC5D0\uC11C \uC2A4\uD0C0\uC77C\uC744 \uCEA1\uC290\uD654\uD568\uC73C\uB85C\uC368, \uC2A4\uCF54\uD504\uB41C \uC2A4\uD0C0\uC77C\uC744 \uBCF4\uC7A5\uD558\uACE0 \uB3D9\uC801\uC774\uACE0 \uBC18\uC751\uC801\uC778 \uB514\uC790\uC778\uC744 \uAD6C\uC131\uD558\uB294 \uB370 \uB354 \uB9CE\uC740 \uC720\uC5F0\uC131\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><p>\uC608\uC2DC (styled-components):</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&#39;styled-components&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> StyledDiv <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  background-color: lightblue;
  padding: 10px;
  border-radius: 5px;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>StyledDiv<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span> World<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>StyledDiv<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-css-\u1106\u1169\u1103\u1172\u11AF-\u1109\u1173\u110F\u1169\u1111\u1173\u1103\u116C\u11AB-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF" tabindex="-1"><a class="header-anchor" href="#_4-css-\u1106\u1169\u1103\u1172\u11AF-\u1109\u1173\u110F\u1169\u1111\u1173\u1103\u116C\u11AB-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF" aria-hidden="true">#</a> 4. CSS \uBAA8\uB4C8: \uC2A4\uCF54\uD504\uB41C \uC2A4\uD0C0\uC77C</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=o(`<p>CSS \uBAA8\uB4C8\uC740 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC2A4\uCF54\uD504 \uC2A4\uD0C0\uC77C\uB9C1\uC5D0 \uB300\uD55C \uD574\uACB0\uCC45\uC744 \uC81C\uACF5\uD558\uBA70 \uC2A4\uD0C0\uC77C \uCDA9\uB3CC\uC744 \uBC29\uC9C0\uD558\uACE0 \uBAA8\uB4C8\uD654\uB97C \uCD09\uC9C4\uD569\uB2C8\uB2E4. \uAC01 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uACE0\uC720\uD55C \uD074\uB798\uC2A4 \uC774\uB984\uC744 \uC0DD\uC131\uD558\uC5EC CSS \uBAA8\uB4C8\uC740 \uCEA1\uC290\uD654\uC640 \uC720\uC9C0 \uBCF4\uC218\uC131\uC744 \uBCF4\uC7A5\uD569\uB2C8\uB2E4.</p><p>\uC608\uC2DC:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* styles.module.css */</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> lightblue<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&#39;./styles.module.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">&gt;</span>\uC548\uB155<span class="token punctuation">,</span> \uC138\uACC4<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=o(`<h1 id="_5-\u1111\u1173\u1105\u1175\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1165-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u1105\u1175\u11BC-\u1100\u1161\u11BC\u1112\u116A\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_5-\u1111\u1173\u1105\u1175\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1165-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u1105\u1175\u11BC-\u1100\u1161\u11BC\u1112\u116A\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 5. \uD504\uB9AC\uD504\uB85C\uC138\uC11C: \uC2A4\uD0C0\uC77C\uB9C1 \uAC15\uD654\uD558\uAE30</h1><p>Sass \uBC0F Less\uC640 \uAC19\uC740 \uD504\uB9AC\uD504\uB85C\uC138\uC11C\uB294 \uBCC0\uC218, \uBBF9\uC2A4\uC778 \uBC0F \uC911\uCCA9\uACFC \uAC19\uC740 \uAE30\uB2A5\uC744 \uB3C4\uC785\uD558\uC5EC CSS \uAE30\uB2A5\uC744 \uD655\uC7A5\uD569\uB2C8\uB2E4. React \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD504\uB9AC\uD504\uB85C\uC138\uC11C\uB97C \uD1B5\uD569\uD558\uBA74 \uB354 \uAE54\uB054\uD558\uACE0 \uC720\uC9C0\uBCF4\uC218\uAC00 \uC26C\uC6B4 \uC2A4\uD0C0\uC77C\uC2DC\uD2B8\uB97C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><ul><li>Sass \uBC0F SCSS: Sass \uBC0F SCSS\uB97C \uC0AC\uC6A9\uD558\uC5EC CSS\uB97C \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uC138\uC694. \uC774\uB7EC\uD55C \uAC15\uB825\uD55C CSS \uD504\uB9AC\uD504\uB85C\uC138\uC11C\uB294 \uBCC0\uC218, \uBBF9\uC2A4\uC778, \uC911\uCCA9\uACFC \uAC19\uC740 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uC5EC React \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uB354 \uAE54\uB054\uD558\uACE0 \uC720\uC9C0\uBCF4\uC218\uAC00 \uC27D\uB3C4\uB85D \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uC2DC:</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* styles.scss */</span>
$primary<span class="token operator">-</span>color<span class="token operator">:</span> lightblue<span class="token punctuation">;</span>

<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> $primary<span class="token operator">-</span>color<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./styles.scss&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>\uC548\uB155<span class="token punctuation">,</span> \uC138\uC0C1\uC544<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Less(Less \uC2A4\uD0C0\uC77C\uC2DC\uD2B8): Less\uB294 \uC804\uD1B5\uC801\uC778 CSS\uC640 \uBE44\uAD50\uD558\uC5EC \uB354 \uAC04\uACB0\uD55C \uAD6C\uBB38\uC744 \uC81C\uACF5\uD558\uB294 CSS \uC804\uCC98\uB9AC\uAE30\uC785\uB2C8\uB2E4. Less\uB97C \uC0AC\uC6A9\uD558\uBA74 \uBCC0\uC218\uC640 \uBBF9\uC2A4\uC778\uACFC \uAC19\uC740 \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD558\uBA74\uC11C \uB354 \uAE54\uB054\uD558\uACE0 \uAC04\uACB0\uD55C \uC2A4\uD0C0\uC77C\uC2DC\uD2B8\uB97C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* styles.less */</span>
@primary<span class="token operator">-</span>color<span class="token operator">:</span> lightblue<span class="token punctuation">;</span>

<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> @primary<span class="token operator">-</span>color<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./styles.less&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>\uC548\uB155<span class="token punctuation">,</span> \uC138\uC0C1\uC544<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),w=s("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),a(" \uACB0\uB860:")],-1),S=s("p",null,"\uC774 \uB2E4\uC12F \uAC00\uC9C0 \uC2A4\uD0C0\uC77C\uB9C1 \uAE30\uC220\uC744 \uB2F9\uC2E0\uC758 \uB3C4\uAD6C\uC0C1\uC790\uC5D0 \uB2F4\uC544\uB450\uBA74 React\uB97C \uC0AC\uC6A9\uD574 \uBA4B\uC9C4 UI\uB97C \uB9CC\uB4E4 \uC900\uBE44\uAC00 \uB41C \uAC83\uC774\uC8E0. \uC778\uB77C\uC778 \uC2A4\uD0C0\uC77C, \uC678\uBD80 CSS \uD30C\uC77C, CSS in JS, \uB610\uB294 CSS \uBAA8\uB4C8 \uC911 \uC5B4\uB290 \uAC83\uC744 \uC120\uD638\uD558\uB4E0, \uB2F9\uC2E0\uC758 \uC694\uAD6C \uC0AC\uD56D\uACFC \uCDE8\uD5A5\uC5D0 \uB9DE\uB294 \uBC29\uBC95\uC774 \uC788\uC744 \uAC70\uC5D0\uC694. \uADF8\uB7EC\uB2C8 \uC55E\uC73C\uB85C \uB098\uC544\uAC00 \uC2E4\uD5D8\uD558\uACE0 \uCC3D\uC758\uB825\uC744 \uBC1C\uD718\uD558\uC138\uC694. \uC5EC\uB7EC\uBD84\uC758 \uAD00\uAC1D\uB4E4\uC774 \uADF8\uAC83\uC5D0 \uAC10\uC0AC\uD560 \uAC70\uC5D0\uC694!",-1),x=s("p",null,"\uC774 \uBD84\uC57C\uB294 \uB04A\uC784\uC5C6\uC774 \uBC1C\uC804\uD55C\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC778\uC2DD\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uAC01 \uBC29\uBC95\uC744 \uD0D0\uAD6C\uD558\uACE0 \uAC01 \uC904\uC758 \uCF54\uB4DC\uB97C \uC4F8 \uB54C\uB9C8\uB2E4 \uC0C8\uB85C\uC6B4 \uBCF5\uC7A1\uC131\uACFC \uAC00\uB2A5\uC131\uC744 \uBC1C\uACAC\uD558\uAC8C \uB429\uB2C8\uB2E4. \uC800\uB294 \uC774 \uAE00 \uC4F0\uAE30 \uC5EC\uC815\uC744 \uC2DC\uC791\uD558\uBA74\uC11C \uB3D9\uC2DC\uC5D0 \uD559\uC2B5 \uACFC\uC815\uC5D0 \uB3CC\uC785\uD558\uBA70 React\uC5D0 \uB300\uD55C \uC774\uD574\uB97C \uB354\uC6B1 \uC138\uB828\uB418\uAC8C \uB2E4\uB4EC\uC5B4 \uB098\uAC00\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uD568\uAED8\uD574\uC11C \uC6B0\uB9AC\uB294 \uACC4\uC18D\uD574\uC11C \uC9C0\uC2DD\uC744 \uD0D0\uC0C9\uD558\uACE0 \uD655\uC7A5\uD558\uBA70, \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC758 \uB3D9\uC801 \uC131\uACA9\uC744 \uBC1B\uC544\uB4E4\uC77C \uAC83\uC785\uB2C8\uB2E4.",-1),j=s("p",null,"\uB3C5\uD574\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4! \uC990\uAC81\uAC8C \uCF54\uB529\uD558\uC138\uC694! \u{1F680} \uC990\uAC81\uAC8C \uACF5\uBD80\uD558\uACE0, \uC5B8\uC81C\uB098 \uCF54\uB529\uC744 \uACC4\uC18D\uD558\uC138\uC694. Medium \uBC0F Linkedin\uC5D0\uC11C \uC800\uB97C \uD314\uB85C\uC6B0\uD558\uC138\uC694.",-1),C=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),R=s("p",null,"\u{1F44F} \uC88B\uC544\uC694, \uACF5\uC720\uD558\uAE30, \uB313\uAE00 \uB0A8\uAE30\uAE30: \uAD81\uAE08\uD55C \uC810\uC774\uB098 \uD53C\uB4DC\uBC31\uC774 \uC788\uC73C\uBA74 \uC544\uB798 \uB313\uAE00\uB85C \uC54C\uB824\uC8FC\uC138\uC694 \u{1F447}",-1);function M(N,q){return n(),c("div",null,[d,u,k,v,m,(n(),e(p("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),e(p("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(n(),e(p("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(n(),e(p("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(n(),e(p("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,(n(),e(p("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(n(),e(p("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,S,x,j,C,(n(),e(p("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),R])}var H=l(r,[["render",M],["__file","index.html.vue"]]);export{H as default};