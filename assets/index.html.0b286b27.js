import{_ as l}from"./app.3052dcfb.js";import{l as n,m as i,E as e,G as t,p as a,Y as o,C as s,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/How-to-import-CSS-file-in-React-JS-:-A-Comprehensive-Guide_0.81b5db39.png";const d={},r=s("img",{src:c},null,-1),u=s("p",null,"\uC6F9 \uAC1C\uBC1C\uC758 \uB04A\uC784\uC5C6\uB294 \uBCC0\uD654 \uC18D\uC5D0\uC11C \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC758 \uC2A4\uD0C0\uC77C\uB9C1\uC740 \uAE30\uB2A5\uB9CC\uD07C \uC911\uC694\uD569\uB2C8\uB2E4. React\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC1C\uBC1C\uC790\uB4E4\uC5D0\uAC8C\uB294 CSS\uB97C \uD1B5\uD569\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC2DC\uAC01\uC801\uC778 \uB9E4\uB825\uC744 \uB354\uD560 \uC218 \uC788\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uC774 \uAC00\uC774\uB4DC\uB294 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C CSS\uB97C \uC0AC\uC6A9\uD558\uB294 \uC608\uC220\uACFC \uACFC\uD559\uC744 \uD0D0\uAD6C\uD558\uBA70 \uC804\uD1B5\uC801\uC778 \uBC29\uBC95, CSS \uBAA8\uB4C8, CSS-in-JS\uB97C \uC0B4\uD3B4\uBCF4\uACE0 \uCF54\uB4DC \uC608\uC81C\uC640 \uC720\uC775\uD55C \uCC38\uACE0\uC790\uB8CC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774 \uC2A4\uD0C0\uC77C \uAC00\uC774\uB4DC\uB97C \uB530\uB77C\uAC00\uBA74\uC11C CSS\uAC00 React\uC5D0\uC11C \uC5B4\uB5BB\uAC8C \uBC1C\uC804\uD574\uC654\uB294\uC9C0, \uAC1C\uBC1C\uC790\uB4E4\uC774 \uB2E4\uB978 \uC2A4\uD0C0\uC77C\uB9C1 \uC811\uADFC\uBC95\uC744 \uC120\uD638\uD558\uB294 \uC774\uC720\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),k=s("h1",{id:"\u110C\u1165\u11AB\u1110\u1169\u11BC\u110C\u1165\u11A8\u110B\u1175\u11AB-css-\u110C\u1165\u11B8\u1100\u1173\u11AB-\u1107\u1161\u11BC\u1109\u1175\u11A8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u110C\u1165\u11AB\u1110\u1169\u11BC\u110C\u1165\u11A8\u110B\u1175\u11AB-css-\u110C\u1165\u11B8\u1100\u1173\u11AB-\u1107\u1161\u11BC\u1109\u1175\u11A8","aria-hidden":"true"},"#"),a(" \uC804\uD1B5\uC801\uC778 CSS \uC811\uADFC \uBC29\uC2DD")],-1),v=s("p",null,"React \uCEF4\uD3EC\uB10C\uD2B8\uB97C CSS\uB85C \uC2A4\uD0C0\uC77C\uB9C1\uD558\uB294 \uC804\uD1B5\uC801\uC778 \uBC29\uC2DD\uC740 \uC77C\uBC18\uC801\uC778 \uC6F9 \uD398\uC774\uC9C0\uB97C \uC2A4\uD0C0\uC77C\uB9C1\uD558\uB294 \uBC29\uBC95\uACFC \uD06C\uAC8C \uB2E4\uB974\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uAC1C\uBC1C\uC790\uB4E4\uC740 \uBCC4\uB3C4\uC758 .css \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uACE0 import \uBB38\uC744 \uC0AC\uC6A9\uD558\uC5EC React \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uC774\uB97C \uC5F0\uACB0\uD588\uC2B5\uB2C8\uB2E4.",-1),m=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),S=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&quot;./App.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;App&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>header className<span class="token operator">=</span><span class="token string">&quot;App-header&quot;</span><span class="token operator">&gt;</span><span class="token comment">// \uC5EC\uAE30\uC5D0 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC2ED\uC2DC\uC624&lt;/header&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uBC29\uBC95\uC740 \uC9C1\uAD00\uC801\uC774\uC9C0\uB9CC \uC804\uC5ED \uB124\uC784\uC2A4\uD398\uC774\uC2A4\uC640 \uAC19\uC740 \uC81C\uD55C\uC774 \uC788\uC5B4 \uB2E4\uC591\uD55C \uCEF4\uD3EC\uB10C\uD2B8 \uAC04\uC5D0 \uC2A4\uD0C0\uC77C \uCDA9\uB3CC\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB2E8\uC810\uC5D0\uB3C4 \uBD88\uAD6C\uD558\uACE0 CSS\uB294 \uC5EC\uC804\uD788 \uB110\uB9AC \uC0AC\uC6A9\uB418\uB294 \uAC04\uACB0\uD558\uACE0 \uD6A8\uACFC\uC801\uC778 \uBC29\uBC95\uC784\uC744 \uBCF4\uC5EC\uC8FC\uB294 \uAC83\uC774\uB2E4. CSS\uC758 \uC804\uD1B5\uC801\uC778 \uAE30\uC220\uC744 \uC219\uB828\uD558\uAE30 \uC704\uD55C \uC6B0\uC218\uD55C \uC790\uB8CC\uB294 Mozilla\uC758 CSS \uBB38\uC11C\uB97C \uD655\uC778\uD574 \uBCF4\uC138\uC694.</p><h1 id="css-modules\u1105\u1169-\u1106\u1169\u1103\u1172\u11AF\u1112\u116A-\u110E\u1162\u1110\u1162\u11A8\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#css-modules\u1105\u1169-\u1106\u1169\u1103\u1172\u11AF\u1112\u116A-\u110E\u1162\u1110\u1162\u11A8\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> CSS Modules\uB85C \uBAA8\uB4C8\uD654 \uCC44\uD0DD\uD558\uAE30</h1><p>\uC804\uC5ED \uC2A4\uD0C0\uC77C\uB9C1\uC758 \uB2E8\uC810\uC5D0 \uB300\uD56D\uD558\uAE30 \uC704\uD574 React \uCEE4\uBBA4\uB2C8\uD2F0\uB294 CSS Modules\uB97C \uC18C\uAC1C\uD588\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uACE0\uC720\uD55C \uD074\uB798\uC2A4\uC640 \uC560\uB2C8\uBA54\uC774\uC158 \uC774\uB984\uC744 \uC0DD\uC131\uD558\uB294 \uBE4C\uB4DC \uB2E8\uACC4\uB97C \uD1B5\uD574 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC5ED\uD654\uD558\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC758 CSS \uBAA8\uB4C8\uC5D0\uC11C \uC815\uC758\uB41C \uC2A4\uD0C0\uC77C\uC774 \uD574\uB2F9 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uB85C\uCEEC \uC2A4\uCF54\uD504\uB85C \uC81C\uD55C\uB418\uC5B4 \uC788\uC5B4 \uC774\uB984 \uCDA9\uB3CC\uC758 \uC704\uD5D8\uC744 \uC5C6\uC560\uC90D\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&quot;./App.module.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>App<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>header className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>AppHeader<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token comment">// \uC5EC\uAE30\uC5D0 \uB0B4\uC6A9\uC744 \uCD94\uAC00\uD558\uC138\uC694&lt;/header&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS Modules\uC740 \uCEF4\uD3EC\uB10C\uD2B8 \uAE30\uBC18 \uC2A4\uD0C0\uC77C\uB9C1\uC744 \uC704\uD55C \uC911\uC694\uD55C \uB2E8\uACC4\uB85C, React\uC758 \uCCA0\uD559\uACFC \uC77C\uCE58\uD569\uB2C8\uB2E4. CSS Modules\uC758 \uACF5\uC2DD \uBB38\uC11C\uB294 \uC774 \uC811\uADFC \uBC29\uC2DD\uC744 \uCC44\uD0DD\uD558\uB824\uB294 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C \uD48D\uBD80\uD55C \uC815\uBCF4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><h1 id="css-in-js\u110B\u1174-\u1107\u116E\u1109\u1161\u11BC" tabindex="-1"><a class="header-anchor" href="#css-in-js\u110B\u1174-\u1107\u116E\u1109\u1161\u11BC" aria-hidden="true">#</a> CSS-in-JS\uC758 \uBD80\uC0C1</h1><p>CSS-in-JS\uB294 \uD601\uC2E0\uC801\uC778 \uD328\uB7EC\uB2E4\uC784\uC73C\uB85C \uB4F1\uC7A5\uD558\uC5EC, React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC2A4\uD0C0\uC77C\uC744 \uC815\uC758\uD558\uACE0 \uC801\uC6A9\uD558\uB294 \uBC29\uBC95\uC758 \uACBD\uACC4\uB97C \uB113\uD614\uC2B5\uB2C8\uB2E4. JavaScript \uD30C\uC77C \uB0B4\uC5D0\uC11C CSS\uB97C \uC9C1\uC811 \uD1B5\uD569\uD568\uC73C\uB85C\uC368, \uAC1C\uBC1C\uC790\uB294 JavaScript\uC758 \uC804\uCCB4 \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD558\uC5EC \uC0C1\uD0DC\uC640 props\uC5D0 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uBC18\uC751\uD558\uB294 \uB3D9\uC801 \uC2A4\uD0C0\uC77C\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=p(`<p>\uC778\uAE30 \uC788\uB294 CSS-in-JS \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC911 \uD558\uB098\uC778 Styled Components\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4. \uB2E4\uC74C\uC740 \uC0AC\uC6A9 \uBC29\uBC95\uC785\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&quot;styled-components&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Wrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Wrapper<span class="token operator">&gt;</span><span class="token comment">// \uC5EC\uAE30\uC5D0 \uB0B4\uC6A9\uC744 \uCD94\uAC00\uD558\uC138\uC694&lt;/Wrapper&gt;;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS-in-JS\uB294 \uAC15\uB825\uD568\uACFC \uC720\uC5F0\uC131\uC744 \uACB0\uD569\uD558\uC5EC \uC2A4\uD0C0\uC77C\uC744 \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C \uC644\uBCBD\uD558\uAC8C \uCEA1\uC290\uD654\uD560 \uC218 \uC788\uAC8C \uD569\uB2C8\uB2E4. \uC774 \uBC29\uC2DD\uC5D0 \uD765\uBBF8\uB97C \uB290\uB07C\uB294 \uBD84\uB4E4\uC744 \uC704\uD574 Styled Components \uBB38\uC11C\uAC00 \uD6CC\uB96D\uD55C \uC2DC\uC791\uC810\uC774 \uB420 \uAC83\uC785\uB2C8\uB2E4.</p><h1 id="\u110C\u1175\u11AB\u1112\u116A\u110B\u116A-\u1102\u1169\u11AB\u110C\u1162\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110C\u1175\u11AB\u1112\u116A\u110B\u116A-\u1102\u1169\u11AB\u110C\u1162\u11BC" aria-hidden="true">#</a> \uC9C4\uD654\uC640 \uB17C\uC7C1</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=s("p",null,"\uC804\uD1B5\uC801\uC778 CSS\uC5D0\uC11C CSS \uBAA8\uB4C8\uB85C, \uADF8\uB9AC\uACE0 CSS-in-JS\uB85C\uC758 \uC5EC\uC815\uC740 \uC6F9 \uAC1C\uBC1C\uC758 \uBCF4\uB2E4 \uBAA8\uB4C8\uD654\uB418\uACE0 \uCEA1\uC290\uD654\uB41C \uC544\uD0A4\uD14D\uCC98\uB85C\uC758 \uC804\uBC18\uC801\uC778 \uC9C4\uD654\uB97C \uBC18\uC601\uD569\uB2C8\uB2E4. \uAC01 \uC811\uADFC \uBC29\uC2DD\uC5D0\uB294 \uC9C0\uC9C0\uC790\uB4E4\uACFC \uBC18\uB300\uC790\uB4E4\uC774 \uC788\uC73C\uBA70, \uC885\uC885 \uCEE4\uBBA4\uB2C8\uD2F0 \uB0B4\uC5D0\uC11C \uADDC\uBC94\uACFC \uAD6C\uC131 \uC694\uC18C, \uC131\uB2A5, \uADF8\uB9AC\uACE0 \uAC1C\uBC1C\uC790 \uACBD\uD5D8\uC5D0 \uB300\uD55C \uADE0\uD615\uC5D0 \uB300\uD55C \uB354 \uB113\uC740 \uB17C\uC7C1\uC744 \uBC18\uC601\uD569\uB2C8\uB2E4.",-1),_=s("p",null,"\uC804\uD1B5\uC801\uC778 CSS\uC758 \uC9C0\uC9C0\uC790\uB4E4\uC740 \uADF8 \uAC04\uB2E8\uD568\uACFC \uC2A4\uD0C0\uC77C\uB9C1 \uD504\uB85C\uC138\uC2A4\uC5D0 \uB300\uD55C \uC138\uBC00\uD55C \uC81C\uC5B4\uB97C \uAC15\uC870\uD569\uB2C8\uB2E4. CSS \uBAA8\uB4C8\uC758 \uC5F4\uB82C\uD55C \uC9C0\uC9C0\uC790\uB4E4\uC740 \uC2A4\uCF54\uD551\uC758 \uC774\uC810\uACFC \uBD80\uC791\uC6A9\uC758 \uAC10\uC18C\uB97C \uAC15\uC870\uD558\uBA70, CSS-in-JS\uC758 \uC639\uD638\uC790\uB4E4\uC740 \uCEF4\uD3EC\uB10C\uD2B8 \uB85C\uC9C1 \uB0B4\uC5D0\uC11C \uC2A4\uD0C0\uC77C\uC744 \uD6A8\uACFC\uC801\uC73C\uB85C \uD1B5\uD569\uD558\uB294 \uB3D9\uC801\uC131\uACFC \uAC15\uB825\uD568\uC744 \uC8FC\uC7A5\uD569\uB2C8\uB2E4.",-1),y=s("p",null,"#pxCode\uB85C \uC6F9 \uAC1C\uBC1C \uAC00\uC18D\uD654: \uB514\uC790\uC778\uBD80\uD130 \uCF54\uB4DC\uAE4C\uC9C0 \uD55C\uBC88\uC5D0",-1),C=s("p",null,"pxCode\uB85C \uC6F9 \uAC1C\uBC1C \uD504\uB85C\uC138\uC2A4\uC758 \uD480 \uC7A0\uC7AC\uB825\uC744 \uBC1C\uD718\uD558\uC138\uC694. \uB514\uC790\uC778\uBD80\uD130 \uBC30\uD3EC\uAE4C\uC9C0\uC758 \uC5EC\uC815\uC744 \uAC00\uC18D\uD654\uD558\uB294 \uD601\uC2E0\uC801\uC778 \uB3C4\uAD6C pxCode\uB97C \uD1B5\uD574 \uB514\uC790\uC778 \uCD08\uC548\uC744 \uC989\uC2DC \uC0AC\uC6A9 \uAC00\uB2A5\uD55C React \uCEF4\uD3EC\uB10C\uD2B8\uC640 CSS \uBAA8\uB4C8\uB85C \uBCC0\uD658\uD558\uC5EC \uB514\uC790\uC778\uACFC \uAC1C\uBC1C \uC0AC\uC774\uC758 \uAC04\uADF9\uC744 \uC27D\uAC8C \uC5F0\uACB0\uD558\uC138\uC694.",-1),f=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),w=s("p",null,"\uC6F9 \uAC1C\uBC1C\uC758 \uBBF8\uB798\uB97C pxCode\uC640 \uD568\uAED8 \uBC1B\uC544\uB4E4\uC774\uACE0 \uCC3D\uC758\uC801\uC778 \uBE44\uC804\uC744 \uC774\uC804\uBCF4\uB2E4 \uB354 \uBE60\uB974\uAC8C \uD604\uC2E4\uB85C \uAD6C\uD604\uD558\uC138\uC694. \uAC1C\uBC1C\uC790\uC640 \uB514\uC790\uC774\uB108 \uC591\uCABD\uC5D0 \uBAA8\uB450 \uC801\uD569\uD55C pxCode\uB294 \uCD5C\uC2E0 \uC6F9 \uAE30\uC220 \uD6A8\uC728\uC131\uC744 \uD65C\uC6A9\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uAC00 \uB6F0\uC5B4\uB098\uAC8C \uC720\uC9C0\uB420 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4. \uC9C0\uAE08 \uB2F9\uC2E0\uC758 \uB514\uC790\uC778\uC744 \uAE30\uB2A5\uC801\uC778 \uC6F9 \uAD6C\uC131 \uC694\uC18C\uB85C \uBCC0\uD658\uD558\uAE30 \uC2DC\uC791\uD558\uACE0 pxCode\uC758 \uD0C1\uC6D4\uD55C \uC18D\uB3C4\uC640 \uD638\uD658\uC131\uC744 \uACBD\uD5D8\uD574\uBCF4\uC138\uC694.",-1),x=s("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),a(" \uACB0\uB860")],-1),j=s("p",null,"\uC804\uD1B5\uC801\uC778 CSS, CSS \uBAA8\uB4C8, \uADF8\uB9AC\uACE0 React \uAC1C\uBC1C\uC5D0\uC11C\uC758 CSS-in-JS \uC911\uC5D0\uC11C \uC120\uD0DD\uD558\uB294 \uAC83\uC740 \uC885\uC885 \uAC1C\uC778\uC758 \uC120\uD638\uB3C4, \uD504\uB85C\uC81D\uD2B8 \uC694\uAD6C \uC0AC\uD56D \uBC0F \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC758 \uADDC\uBAA8\uC5D0 \uB2EC\uB824 \uC788\uC2B5\uB2C8\uB2E4. \uAC01 \uBC29\uBC95\uC758 \uC7A5\uB2E8\uC810\uC744 \uC774\uD574\uD558\uB294 \uAC83\uC740 \uAC1C\uBC1C\uC790\uB4E4\uC774 \uC790\uC2E0\uC758 \uD544\uC694\uC5D0 \uAC00\uC7A5 \uC798 \uB9DE\uB294 \uACB0\uC815\uC744 \uB0B4\uB9B4 \uC218 \uC788\uB3C4\uB85D \uB3D5\uC2B5\uB2C8\uB2E4.",-1),R=s("p",null,"React\uC5D0\uC11C CSS\uC5D0 \uB300\uD55C \uD0D0\uAD6C\uB294 \uAC01 \uC2A4\uD0C0\uC77C\uB9C1 \uBC29\uBC95\uC758 \uAE30\uC220\uC801 \uCE21\uBA74\uC744 \uAC15\uC870\uD558\uB294 \uAC83\uBFD0\uB9CC \uC544\uB2C8\uB77C, \uC5B4\uB5A4 \uAC83\uC774 \uAC00\uB2A5\uD55C\uC9C0 \uACBD\uACC4\uB97C \uB298\uC5B4\uB193\uB294 \uD504\uB7F0\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790 \uCEE4\uBBA4\uB2C8\uD2F0\uC758 \uB2E4\uCC44\uB85C\uC6B4 \uBAA8\uC2B5\uC744 \uBC18\uC601\uD569\uB2C8\uB2E4. \uC6F9\uC774 \uACC4\uC18D\uD574\uC11C \uBC1C\uC804\uD568\uC5D0 \uB530\uB77C, \uC6B0\uB9AC\uAC00 \uADF8\uAC83\uC744 \uB514\uC790\uC778\uD558\uB294 \uB370 \uC0AC\uC6A9\uD558\uB294 \uB3C4\uAD6C\uC640 \uAE30\uC220\uB3C4 \uD568\uAED8 \uBC1C\uC804\uD560 \uAC83\uC774\uBA70, \uAC1C\uBC1C\uC790\uC640 \uC0AC\uC6A9\uC790 \uBAA8\uB450\uC5D0\uAC8C \uD765\uBBF8\uB85C\uC6B4 \uBBF8\uB798\uB97C \uC57D\uC18D\uD569\uB2C8\uB2E4.",-1);function J(q,A){return n(),i("div",null,[r,u,k,v,m,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,_,y,C,f,(n(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,x,j,R])}var G=l(d,[["render",J],["__file","index.html.vue"]]);export{G as default};
