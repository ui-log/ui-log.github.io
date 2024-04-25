import{_ as o}from"./app.3052dcfb.js";import{l as n,m as c,E as s,G as a,p as t,Y as e,K as p,C as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/TutorialTestDrivenDevelopmentTDDforaCalculatorAppinReactJavaScript_0.b733f101.png",r="/assets/TutorialTestDrivenDevelopmentTDDforaCalculatorAppinReactJavaScript_1.2e1a51c4.png";const u={},d=p('<p><img src="'+i+'" alt="Tutorial Test Driven Development TDD for a Calculator App in React JavaScript"></p><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><ul><li>JavaScript \uAE30\uBCF8 \uC774\uD574</li><li>React \uAC1C\uB150\uC5D0 \uC775\uC219\uD568</li></ul><h2 id="tools-used" tabindex="-1"><a class="header-anchor" href="#tools-used" aria-hidden="true">#</a> Tools Used</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),k=p(`<ul><li>React</li><li>Jest (\uD14C\uC2A4\uD2B8\uC6A9)</li><li>React Testing Library</li></ul><h1 id="\u1103\u1161\u11AB\u1100\u1168-1-react-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-1-react-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB2E8\uACC4 1: React \uD504\uB85C\uC81D\uD2B8 \uC124\uC815\uD558\uAE30</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app my<span class="token operator">-</span>tdd<span class="token operator">-</span>app
cd my<span class="token operator">-</span>tdd<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev @testing<span class="token operator">-</span>library<span class="token operator">/</span>react @testing<span class="token operator">-</span>library<span class="token operator">/</span>jest<span class="token operator">-</span>dom jest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=p(`<h1 id="\u1103\u1161\u11AB\u1100\u1168-2-\u110E\u1165\u11BA-\u1107\u1165\u11AB\u110D\u1162-\u1110\u1166\u1109\u1173\u1110\u1173-\u110C\u1161\u11A8\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-2-\u110E\u1165\u11BA-\u1107\u1165\u11AB\u110D\u1162-\u1110\u1166\u1109\u1173\u1110\u1173-\u110C\u1161\u11A8\u1109\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 2: \uCCAB \uBC88\uC9F8 \uD14C\uC2A4\uD2B8 \uC791\uC131</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>touch src<span class="token operator">/</span>Calculator<span class="token punctuation">.</span>test<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/Calculator.test.js</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen<span class="token punctuation">,</span> fireEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@testing-library/react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Calculator <span class="token keyword">from</span> <span class="token string">&#39;./Calculator&#39;</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;1 + 2\uB97C \uB354\uD55C \uACB0\uACFC\uAC00 3\uC774 \uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Calculator <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> number1Input <span class="token operator">=</span> screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token string">&#39;Number 1:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> number2Input <span class="token operator">=</span> screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token string">&#39;Number 2:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> addButton <span class="token operator">=</span> screen<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;Add&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  fireEvent<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span>number1Input<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  fireEvent<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span>number2Input<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  fireEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>addButton<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> result <span class="token operator">=</span> screen<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveTextContent</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1103\u1161\u11AB\u1100\u1168-3-\u1100\u1168\u1109\u1161\u11AB\u1100\u1175-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-3-\u1100\u1168\u1109\u1161\u11AB\u1100\u1175-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 3: \uACC4\uC0B0\uAE30 \uCEF4\uD3EC\uB10C\uD2B8 \uC0DD\uC131</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/Calculator.js</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Calculator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>number1<span class="token punctuation">,</span> setNumber1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>number2<span class="token punctuation">,</span> setNumber2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>result<span class="token punctuation">,</span> setResult<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleAdd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>number1<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>number2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setResult</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>number1<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setNumber1</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
        aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">&quot;Number 1:&quot;</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>number2<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setNumber2</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
        aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">&quot;Number 2:&quot;</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleAdd<span class="token punctuation">}</span><span class="token operator">&gt;</span>\uB354\uD558\uAE30<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p data<span class="token operator">-</span>testid<span class="token operator">=</span><span class="token string">&quot;result&quot;</span><span class="token operator">&gt;</span>\uACB0\uACFC<span class="token operator">:</span> <span class="token punctuation">{</span>result<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Calculator<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1103\u1161\u11AB\u1100\u1168-4-\u1110\u1166\u1109\u1173\u1110\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-4-\u1110\u1166\u1109\u1173\u1110\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 4: \uD14C\uC2A4\uD2B8 \uC2E4\uD589</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),b=p('<img src="'+r+'"><h1 id="\u1103\u1161\u11AB\u1100\u1168-5-\u1105\u1175\u1111\u1162\u11A8\u1110\u1165\u1105\u1175\u11BC-\u1106\u1175\u11BE-\u1107\u1161\u11AB\u1107\u1169\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-5-\u1105\u1175\u1111\u1162\u11A8\u1110\u1165\u1105\u1175\u11BC-\u1106\u1175\u11BE-\u1107\u1161\u11AB\u1107\u1169\u11A8" aria-hidden="true">#</a> \uB2E8\uACC4 5: \uB9AC\uD329\uD130\uB9C1 \uBC0F \uBC18\uBCF5</h1><ul><li>\uD544\uC694\uC5D0 \uB530\uB77C \uCF54\uB4DC\uB97C \uB9AC\uD329\uD130\uB9C1\uD569\uB2C8\uB2E4.</li><li>\uCD94\uAC00 \uAE30\uB2A5\uC774\uB098 \uACBD\uACC4 \uCF00\uC774\uC2A4\uC5D0 \uB300\uD55C \uB354 \uB9CE\uC740 \uD14C\uC2A4\uD2B8\uB97C \uC791\uC131\uD569\uB2C8\uB2E4.</li><li>\uACC4\uC0B0\uAE30 \uC571\uC774 \uC644\uC131\uB420 \uB54C\uAE4C\uC9C0 \uD14C\uC2A4\uD2B8 \uC791\uC131, \uCF54\uB4DC \uAD6C\uD604, \uB9AC\uD329\uD130\uB9C1 \uD504\uB85C\uC138\uC2A4\uB97C \uBC18\uBCF5\uD569\uB2C8\uB2E4.</li></ul><h1 id="\u1100\u1167\u11AF\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1105\u1169\u11AB" aria-hidden="true">#</a> \uACB0\uB860</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),g=l("p",null,"\uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC5D0\uC11C\uB294 React JavaScript\uC5D0\uC11C \uAC04\uB2E8\uD55C \uACC4\uC0B0\uAE30 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uCD95\uD568\uC73C\uB85C\uC368 Test Driven Development (TDD)\uB97C \uC801\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uBC30\uC6E0\uC5B4\uC694. \uD14C\uC2A4\uD2B8\uB97C \uBA3C\uC800 \uC791\uC131\uD568\uC73C\uB85C\uC368 \uCF54\uB4DC\uAC00 \uC6D0\uD558\uB294 \uC694\uAD6C\uC0AC\uD56D\uC744 \uCDA9\uC871\uD558\uACE0 \uCCA0\uC800\uD788 \uD14C\uC2A4\uD2B8\uB418\uC5C8\uC74C\uC744 \uBCF4\uC7A5\uD560 \uC218 \uC788\uC5B4\uC694. \uC9C0\uC18D\uC801\uC73C\uB85C \uD14C\uC2A4\uD2B8\uB97C \uC791\uC131\uD558\uACE0 \uCF54\uB4DC\uB97C \uAD6C\uD604\uD558\uBA70 \uB9AC\uD329\uD1A0\uB9C1\uD558\uC5EC \uACAC\uACE0\uD558\uACE0 \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9CC\uB4E4\uC5B4 \uB098\uAC00\uC138\uC694.",-1);function h(f,y){return n(),c("div",null,[d,(n(),s(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),s(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(n(),s(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(n(),s(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),s(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g])}var D=o(u,[["render",h],["__file","index.html.vue"]]);export{D as default};
