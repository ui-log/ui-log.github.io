import{_ as e}from"./app.63e06a35.js";import{l as s,m as c,E as n,G as a,p as t,Y as p,K as o,C as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const i={},r=o(`<p>\uC18C\uAC1C: React\uB294 \uAC04\uACB0\uD568, \uC131\uB2A5, \uADF8\uB9AC\uACE0 \uC720\uC5F0\uC131\uC73C\uB85C \uC778\uD574 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAD6C\uCD95\uD558\uB294 \uB370 \uAC00\uC7A5 \uC778\uAE30 \uC788\uB294 JavaScript \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC911 \uD558\uB098\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uAE00\uC5D0\uC11C\uB294 \uAC1C\uBC1C \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uACE0 \uB354 \uB098\uC740 \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uCD95\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uB294 \uBA87 \uAC00\uC9C0 \uCD5C\uACE0\uC758 React \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.</p><ol><li>React Router: React Router\uB294 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC704\uD55C \uAC15\uB825\uD55C \uB77C\uC6B0\uD305 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC785\uB2C8\uB2E4. \uC774\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB2E8\uC77C \uD398\uC774\uC9C0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uB3D9\uC801\uC778 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uB77C\uC6B0\uD305\uC744 \uC0DD\uC131\uD558\uC5EC \uB2E4\uC591\uD55C \uBDF0\uC640 \uD398\uC774\uC9C0 \uAC04\uC758 \uD0D0\uC0C9\uC744 \uAC00\uB2A5\uCF00 \uD569\uB2C8\uB2E4. React Router\uB294 \uACBD\uB85C\uB97C \uC815\uC758\uD558\uACE0 \uD0D0\uC0C9\uC744 \uCC98\uB9AC\uD558\uAE30 \uC704\uD55C \uC120\uC5B8\uC801 API\uB97C \uC81C\uACF5\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0C1\uD0DC\uC640 URL \uBCC0\uACBD\uC744 \uC27D\uAC8C \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ol><p>\uC608\uC2DC:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./components/Home&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;./components/About&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Switch<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=o(`<ol start="2"><li>Redux: Redux\uB294 JavaScript \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC704\uD55C \uC608\uCE21 \uAC00\uB2A5\uD55C \uC0C1\uD0DC \uCEE8\uD14C\uC774\uB108\uB85C, React\uC640 \uD568\uAED8 \uC0AC\uC6A9\uB418\uC5B4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0C1\uD0DC\uB97C \uAD00\uB9AC\uD558\uB294 \uB370 \uC77C\uBC18\uC801\uC73C\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC804\uCCB4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0C1\uD0DC\uB97C \uBCF4\uC720\uD558\uAE30 \uC704\uD55C \uC911\uC559\uD654\uB41C \uC800\uC7A5\uC18C\uB97C \uC81C\uACF5\uD558\uBA70, \uC0C1\uD0DC\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uACE0 \uC870\uC791\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uB294 \uC561\uC158\uACFC \uB9AC\uB4C0\uC11C\uB97C \uD1B5\uD574 \uC0C1\uD0DC\uB97C \uC608\uCE21 \uAC00\uB2A5\uD55C \uBC29\uC2DD\uC73C\uB85C \uC870\uC791\uD569\uB2C8\uB2E4. Redux\uB294 \uB2E8\uBC29\uD5A5 \uB370\uC774\uD130 \uD750\uB984\uACFC \uAD00\uC2EC\uC0AC\uC758 \uBD84\uB9AC\uB97C \uAC15\uC81C\uD558\uC5EC \uC720\uC9C0 \uBCF4\uC218 \uAC00\uB2A5\uD558\uACE0 \uD655\uC7A5 \uAC00\uB2A5\uD55C React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC791\uC131\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4.</li></ol><p>\uC608\uC2DC:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// actions.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;INCREMENT&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">decrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;DECREMENT&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// reducers.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">counterReducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;INCREMENT&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;DECREMENT&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// store.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> counterReducer <span class="token keyword">from</span> <span class="token string">&#39;./reducers&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>counterReducer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Axios: Axios\uB294 JavaScript \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C AJAX \uC694\uCCAD\uC744 \uB9CC\uB4E4\uAE30 \uC704\uD55C \uC778\uAE30\uC788\uB294 HTTP \uD074\uB77C\uC774\uC5B8\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB85C, React\uB97C \uD3EC\uD568\uD569\uB2C8\uB2E4. HTTP \uC694\uCCAD\uC744 \uBCF4\uB0B4\uACE0 \uC751\uB2F5\uC744 \uCC98\uB9AC\uD558\uAE30 \uC704\uD55C \uC0AC\uC6A9\uD558\uAE30 \uC26C\uC6B4 API\uB97C \uC81C\uACF5\uD558\uBA70, \uC694\uCCAD \uBC0F \uC751\uB2F5 \uC778\uD130\uC149\uD130, \uD504\uB77C\uBBF8\uC2A4 \uAE30\uBC18\uC758 \uBE44\uB3D9\uAE30 \uCC98\uB9AC, \uC790\uB3D9 JSON \uB370\uC774\uD130 \uAD6C\uBB38 \uBD84\uC11D\uACFC \uAC19\uC740 \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. Axios\uB97C \uC0AC\uC6A9\uD558\uBA74 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBC31\uC5D4\uB4DC API\uC640\uC758 \uB370\uC774\uD130 \uD398\uCE6D \uBC0F \uD1B5\uC2E0\uC744 \uB2E8\uC21C\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ol><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=o(`<p>\uC608\uC2DC:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/data&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>React Bootstrap: React Bootstrap\uC740 Bootstrap \uD504\uB808\uC784\uC6CC\uD06C\uB97C React\uB85C \uAC00\uC838\uC624\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB85C, Bootstrap CSS\uB85C \uC2A4\uD0C0\uC77C\uC774 \uC801\uC6A9\uB41C \uC7AC\uC0AC\uC6A9 \uAC00\uB2A5\uD55C React \uCEF4\uD3EC\uB10C\uD2B8 \uC138\uD2B8\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uBC84\uD2BC, \uC591\uC2DD, \uB0B4\uBE44\uAC8C\uC774\uC158 \uBC14 \uBC0F \uBAA8\uB2EC\uACFC \uAC19\uC740 \uC775\uC219\uD55C Bootstrap \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBE60\uB974\uAC8C \uBC18\uC751\uD615 \uBC0F \uBAA8\uBC14\uC77C \uCE5C\uD654\uC801\uC778 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAD6C\uCD95\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. React Bootstrap\uC740 \uB0B4\uC7A5\uB41C \uBC18\uC751 \uD615 \uBC0F \uC811\uADFC\uC131\uC744 \uAC16\uCD98 \uBBF8\uB9AC \uC2A4\uD0C0\uC77C\uC774 \uC801\uC6A9\uB41C \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC81C\uACF5\uD568\uC73C\uB85C\uC368 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C UI \uAC1C\uBC1C\uC744 \uAC04\uC18C\uD654\uD569\uB2C8\uB2E4.</li></ol><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),k=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-bootstrap&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>Click Me<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>Material-UI: Material-UI\uC740 Google\uC758 Material Design \uC6D0\uCE59\uC744 \uAD6C\uD604\uD55C \uC778\uAE30 \uC788\uB294 React UI \uD504\uB808\uC784\uC6CC\uD06C\uC785\uB2C8\uB2E4. Material Design\uC5D0 \uC601\uAC10\uC744 \uBC1B\uC740 \uBC84\uD2BC, \uCE74\uB4DC, \uB300\uD654\uC0C1\uC790 \uBC0F \uC544\uC774\uCF58\uC744 \uBE44\uB86F\uD55C \uB2E4\uC591\uD55C \uC0AC\uC6A9\uC790 \uC815\uC758 \uAC00\uB2A5\uD55C React \uAD6C\uC131 \uC694\uC18C\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. Material-UI\uB294 \uD14C\uB9C8, \uC2A4\uD0C0\uC77C\uB9C1 \uBC0F \uBC18\uC751\uD615 \uB808\uC774\uC544\uC6C3\uC744 \uC9C0\uC6D0\uD558\uBA70 \uD604\uB300\uC801\uC778 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uCD95\uD558\uAE30 \uC704\uD55C \uC77C\uAD00\uB41C \uC2DC\uAC01\uC801\uC73C\uB85C \uB9E4\uB825\uC801\uC778 \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</li></ol><p>\uC608\uC2DC:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@material-ui/core&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">&quot;contained&quot;</span> color<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>Click Me<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=l("p",null,"\uACB0\uB860: \uC774 \uC608\uC2DC\uB4E4\uC740 \uAC01 React \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uC81C\uACF5\uD558\uB294 \uAC83\uC758 \uC77C\uBD80\uC5D0 \uBD88\uACFC\uD568\uC744 \uC798 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uB77C\uC6B0\uD305, \uC0C1\uD0DC \uAD00\uB9AC, HTTP \uC694\uCCAD, UI \uAD6C\uC131 \uC694\uC18C, \uB610\uB294 \uC2A4\uD0C0\uC77C\uB9C1\uC774 \uD544\uC694\uD558\uB354\uB77C\uB3C4, \uAC1C\uBC1C \uD504\uB85C\uC138\uC2A4\uB97C \uAC04\uD3B8\uD654\uD558\uACE0 \uB354 \uC88B\uC740 \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uCD95\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uB294 React \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC640 \uB2E4\uB978 \uAC83\uB4E4\uC744 \uD0D0\uC0C9\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8 \uC694\uAD6C \uC0AC\uD56D\uACFC \uAC1C\uBC1C \uC6CC\uD06C\uD50C\uB85C\uC5D0 \uAC00\uC7A5 \uC801\uD569\uD55C \uB3C4\uAD6C\uB97C \uBC1C\uACAC\uD574\uBCF4\uC138\uC694.",-1);function m(b,g){return s(),c("div",null,[r,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v])}var _=e(i,[["render",m],["__file","index.html.vue"]]);export{_ as default};
