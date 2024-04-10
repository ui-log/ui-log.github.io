import{_ as c}from"./app.63e06a35.js";import{l as a,m as i,E as t,G as p,p as s,Y as e,C as n,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var l="/assets/ReactTestingLibraryUnderstandingactandwhentouseit_0.607f1109.png",u="/assets/ReactTestingLibraryUnderstandingactandwhentouseit_1.01e6238d.png";const r={},d=n("p",null,[n("img",{src:l,alt:"React Testing Library"})],-1),k=n("p",null,'\uB9AC\uC561\uD2B8 \uD14C\uC2A4\uD305 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC758 \uC138\uACC4\uC5D0\uC11C act() \uD568\uC218\uB294 \uC885\uC885 \uB2E4\uC18C \uC2E0\uBE44\uB85C\uC6B4 \uC874\uC7AC\uB85C \uB098\uD0C0\uB0A9\uB2C8\uB2E4. "\uD14C\uC2A4\uD2B8 \uB0B4\uBD80\uC758 ComponentName \uC5C5\uB370\uC774\uD2B8\uAC00 act(...)\uB85C \uB798\uD551\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4"\uC640 \uAC19\uC740 \uACBD\uACE0\uB97C \uBCF8 \uC801\uC774 \uC788\uC744 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uAE30\uC0AC\uC5D0\uC11C\uB294 act() \uD568\uC218\uB97C \uD574\uC11D\uD558\uACE0 \uD2B9\uC815 \uD14C\uC2A4\uD2B8 \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C \uC65C \uC911\uC694\uD55C\uC9C0 \uC124\uBA85\uD558\uACA0\uC2B5\uB2C8\uB2E4.',-1),v=n("h1",{id:"act-\u1112\u1161\u11B7\u1109\u116E\u110B\u1174-\u1106\u1169\u11A8\u110C\u1165\u11A8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#act-\u1112\u1161\u11B7\u1109\u116E\u110B\u1174-\u1106\u1169\u11A8\u110C\u1165\u11A8","aria-hidden":"true"},"#"),s(" act() \uD568\uC218\uC758 \uBAA9\uC801")],-1),b=n("p",null,"act()\uC758 \uC8FC\uC694 \uBAA9\uC801\uC740 React \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uAD00\uB828\uB41C \uBAA8\uB4E0 \uC5C5\uB370\uC774\uD2B8(\uC608: \uC0C1\uD0DC \uBCC0\uACBD, \uD6A8\uACFC \uB4F1)\uAC00 \uCC98\uB9AC\uB418\uACE0 \uC801\uC6A9\uB41C \uD6C4 \uD14C\uC2A4\uD2B8\uC5D0\uC11C \uB2E4\uC74C \uC791\uC5C5\uC73C\uB85C \uB118\uC5B4\uAC00\uB3C4\uB85D \uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB294 \uD14C\uC2A4\uD2B8\uAC00 \uC2E4\uC81C \uBE0C\uB77C\uC6B0\uC800 \uD658\uACBD\uC5D0\uC11C React\uAC00 \uC791\uB3D9\uD558\uB294 \uBC29\uC2DD\uC744 \uC2DC\uBBAC\uB808\uC774\uC158\uD558\uB3C4\uB85D \uB3C4\uC640\uC90D\uB2C8\uB2E4.",-1),g=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),m=o('<h1 id="act-\u1112\u1161\u11B7\u1109\u116E\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u1102\u1173\u11AB-\u1100\u1167\u11BC\u110B\u116E" tabindex="-1"><a class="header-anchor" href="#act-\u1112\u1161\u11B7\u1109\u116E\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u1102\u1173\u11AB-\u1100\u1167\u11BC\u110B\u116E" aria-hidden="true">#</a> <code>act()</code> \uD568\uC218\uB97C \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uACBD\uC6B0</h1><p><code>act()</code> \uD568\uC218\uB97C \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uB294 \uC8FC\uB85C \uD14C\uC2A4\uD2B8 \uC911\uC5D0 \uC0AC\uC6A9\uC790 \uC0C1\uD638 \uC791\uC6A9\uC774 \uBC1C\uC0DD\uD558\uC5EC \uAD6C\uC131 \uC694\uC18C\uC5D0\uC11C \uC0C1\uD0DC \uC5C5\uB370\uC774\uD2B8\uB098 \uD6A8\uACFC\uB97C \uC77C\uC73C\uD0A4\uB294 \uACBD\uC6B0\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uAD6C\uC131 \uC694\uC18C \uB0B4\uC758 \uC77C\uBD80 \uC0C1\uD0DC\uB97C \uC218\uC815\uD558\uB294 \uBC84\uD2BC \uD074\uB9AD\uACFC \uAC19\uC740 \uC0C1\uD638 \uC791\uC6A9\uC744 \uD2B8\uB9AC\uAC70\uD558\uB294 \uACBD\uC6B0\uC785\uB2C8\uB2E4.</p><h1 id="act-\u1112\u1161\u11B7\u1109\u116E\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u110B\u1173\u11AB-\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#act-\u1112\u1161\u11B7\u1109\u116E\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u110B\u1173\u11AB-\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> <code>act()</code> \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC740 \uC608\uC2DC</h1><p>\uB2E4\uC74C\uACFC \uAC19\uC740 \uAC04\uB2E8\uD55C \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),h=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Counter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\uC99D\uAC00<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Counter<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uC81C act()\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uD14C\uC2A4\uD2B8 \uCF00\uC774\uC2A4\uB97C \uC791\uC131\uD574\uBD05\uC2DC\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> fireEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@testing-library/react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Counter <span class="token keyword">from</span> <span class="token string">&#39;./Counter&#39;</span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;\uCE74\uC6B4\uD2B8\uB97C \uC99D\uAC00\uC2DC\uD0B5\uB2C8\uB2E4&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> getByText <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Counter <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  fireEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;\uC99D\uAC00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uC608\uC2DC\uC5D0\uC11C\uB294 \uC5B4\uB5A4 \uACBD\uACE0 \uBA54\uC2DC\uC9C0\uB3C4 \uBCF4\uC774\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uBE44\uB3D9\uAE30 \uD638\uCD9C\uACFC \uAC19\uC740 \uBD80\uC791\uC6A9\uC774 \uC788\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uACBD\uC6B0 &quot;not wrapped in act(...)&quot; \uACBD\uACE0\uAC00 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\`\`\`</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=o(`<h1 id="findby\u1105\u1169-\u110B\u1175\u1103\u1169\u11BC" tabindex="-1"><a class="header-anchor" href="#findby\u1105\u1169-\u110B\u1175\u1103\u1169\u11BC" aria-hidden="true">#</a> findBy\uB85C \uC774\uB3D9</h1><p>findBy \uCFFC\uB9AC\uB294 getBy \uCFFC\uB9AC\uC758 \uC288\uD37C\uD788\uC5B4\uB85C \uBC84\uC804 \uAC19\uC740 \uAC83\uC778\uB370 \uBE44\uB3D9\uAE30 \uC791\uC5C5\uC744 \uC704\uD55C \uAC83\uC774\uC5D0\uC694. \uC9C0\uC815\uB41C \uC2DC\uAC04 \uB0B4\uC5D0 \uC694\uC18C\uB97C \uCC3E\uC73C\uBA74 \uD574\uACB0\uB418\uB294 Promise\uB97C \uBC18\uD658\uD558\uACE0 \uD574\uB2F9 \uC694\uC18C\uAC00 \uCC3E\uC544\uC9C0\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uAC70\uBD80\uB3FC\uC694.</p><p>\uBB38\uBC95\uC740 getBy\uC640 \uC720\uC0AC\uD574\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Click Me&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=o('<h1 id="\u110B\u116B-findby\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1100\u1165\u11BA\u110B\u1175-\u1103\u1165-\u1102\u1161\u110B\u1173\u11AB-\u110B\u1175\u110B\u1172" tabindex="-1"><a class="header-anchor" href="#\u110B\u116B-findby\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1100\u1165\u11BA\u110B\u1175-\u1103\u1165-\u1102\u1161\u110B\u1173\u11AB-\u110B\u1175\u110B\u1172" aria-hidden="true">#</a> \uC65C findBy\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uB354 \uB098\uC740 \uC774\uC720</h1><h2 id="act-\u110B\u1161\u11B7\u1109\u1175\u110C\u1165\u11A8\u110B\u1173\u1105\u1169-\u110C\u1165\u11A8\u110B\u116D\u11BC" tabindex="-1"><a class="header-anchor" href="#act-\u110B\u1161\u11B7\u1109\u1175\u110C\u1165\u11A8\u110B\u1173\u1105\u1169-\u110C\u1165\u11A8\u110B\u116D\u11BC" aria-hidden="true">#</a> act() \uC554\uC2DC\uC801\uC73C\uB85C \uC801\uC6A9</h2><p>findBy\uB294 \uCFFC\uB9AC\uB97C \uC790\uB3D9\uC73C\uB85C act()\uB85C \uB798\uD551\uD569\uB2C8\uB2E4. \uC774\uB294 \uD14C\uC2A4\uD2B8\uB97C \uB354 \uAE54\uB054\uD558\uAC8C \uB9CC\uB4E4 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uBE44\uB3D9\uAE30 \uD638\uCD9C\uC744 act()\uB85C \uB798\uD551\uD558\uB294 \uAC83\uC744 \uC78A\uC9C0 \uC54A\uB3C4\uB85D \uBCF4\uC7A5\uD569\uB2C8\uB2E4.</p><h2 id="\u1109\u1171\u110B\u116E\u11AB-\u1107\u1175\u1103\u1169\u11BC\u1100\u1175-\u110E\u1165\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1171\u110B\u116E\u11AB-\u1107\u1175\u1103\u1169\u11BC\u1100\u1175-\u110E\u1165\u1105\u1175" aria-hidden="true">#</a> \uC26C\uC6B4 \uBE44\uB3D9\uAE30 \uCC98\uB9AC</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),w=o(`<p>\uD55C \uC608\uC2DC\uB97C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">AsyncComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/api/data&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>data <span class="token operator">?</span> data<span class="token punctuation">.</span>message <span class="token operator">:</span> <span class="token string">&#39;\uB85C\uB529 \uC911...&#39;</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="act-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#act-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> act() \uC0AC\uC6A9\uD558\uAE30</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> act <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@testing-library/react&#39;</span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;\uB370\uC774\uD130\uB97C \uAC00\uC838\uC640\uC11C \uD45C\uC2DC\uD574\uC57C \uD569\uB2C8\uB2E4&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> getByText <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>AsyncComponent <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">await</span> <span class="token function">act</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;\uC548\uB155&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=o(`<h2 id="findby-\u1109\u1161\u110B\u116D\u11BC" tabindex="-1"><a class="header-anchor" href="#findby-\u1109\u1161\u110B\u116D\u11BC" aria-hidden="true">#</a> findBy \uC0AC\uC6A9</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@testing-library/react&#39;</span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;\uB370\uC774\uD130\uB97C \uAC00\uC838\uC640\uC11C \uD45C\uC2DC\uD574\uC57C \uD569\uB2C8\uB2E4&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> findByText <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>AsyncComponent <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">findByText</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>findBy \uC608\uC81C\uC5D0\uC11C \uCF54\uB4DC\uAC00 \uD6E8\uC52C \uB354 \uAE54\uB054\uD558\uB2E4\uB294 \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. act() \uC608\uC81C\uC640 \uB3D9\uC77C\uD55C \uC791\uC5C5\uC744 \uD558\uC9C0\uB9CC \uB354 \uAC04\uACB0\uD558\uACE0 \uC9C1\uAD00\uC801\uC785\uB2C8\uB2E4.</p><h1 id="\u110B\u1166\u1105\u1165-\u110E\u1165\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1166\u1105\u1165-\u110E\u1165\u1105\u1175" aria-hidden="true">#</a> \uC5D0\uB7EC \uCC98\uB9AC</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),x=n("p",null,"\uB9CC\uC57D findBy\uAC00 \uC9C0\uC815\uB41C \uC2DC\uAC04 \uB0B4\uC5D0 \uC694\uC18C\uB97C \uCC3E\uC9C0 \uBABB\uD558\uBA74 \uC790\uB3D9\uC73C\uB85C \uC624\uB958\uB97C throw\uD558\uBA70, \uC5B4\uB5A4 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uB294\uC9C0 \uC27D\uAC8C \uB514\uBC84\uAE45\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uD14C\uC2A4\uD2B8 \uCF54\uB4DC\uB97C \uC791\uC131\uD560 \uB54C \uC2E4\uC81C \uCF54\uB4DC\uAC00 \uC2E4\uC81C \uD658\uACBD\uC5D0\uC11C \uB3D9\uC791\uD558\uB294 \uBC29\uC2DD\uACFC \uC720\uC0AC\uD558\uB3C4\uB85D \uB9CC\uB4DC\uB294 \uCCA0\uD559\uACFC \uC77C\uCE58\uD569\uB2C8\uB2E4.",-1),B=n("h1",{id:"\u1103\u1161\u1105\u1173\u11AB-\u110B\u1161\u11B7\u1106\u116E\u11A8\u110C\u1165\u11A8-act-\u1112\u1169\u110E\u116E\u11AF",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u1103\u1161\u1105\u1173\u11AB-\u110B\u1161\u11B7\u1106\u116E\u11A8\u110C\u1165\u11A8-act-\u1112\u1169\u110E\u116E\u11AF","aria-hidden":"true"},"#"),s(" \uB2E4\uB978 \uC554\uBB35\uC801 act() \uD638\uCD9C")],-1),j=n("p",null,"findBy\uAC00 act()\uB85C \uCFFC\uB9AC\uB97C \uC554\uBB35\uC801\uC73C\uB85C \uAC10\uC2F8\uB294 \uC720\uC77C\uD55C \uD568\uC218\uAC00 \uC544\uB2D9\uB2C8\uB2E4. \uC774\uB7F0 \uACBD\uC6B0\uC5D0\uB3C4 act()\uAC00 \uBC1C\uC0DD\uD558\uB294 \uB2E4\uB978 \uACBD\uC6B0\uAC00 \uC788\uC2B5\uB2C8\uB2E4.",-1),C=n("p",null,[n("img",{src:u,alt:"\uC774\uBBF8\uC9C0"})],-1),T=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),R=n("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),s(" \uACB0\uB860")],-1),D=n("p",null,"act()\uC740 \uAC15\uB825\uD558\uBA70 \uB354 \uB9CE\uC740 \uC81C\uC5B4 \uC218\uC900\uC744 \uC81C\uACF5\uD558\uC9C0\uB9CC, findBy \uCFFC\uB9AC\uB294 React \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBE44\uB3D9\uAE30 \uC791\uC5C5\uC744 \uD14C\uC2A4\uD2B8\uD558\uB294 \uB354 \uC6B0\uC544\uD558\uACE0 \uB35C \uC7A5\uD669\uD55C \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC554\uC2DC\uC801\uC778 act() \uB798\uD551\uC740 \uD14C\uC2A4\uD2B8\uAC00 \uAE68\uB057\uD558\uACE0 \uC2E0\uB8B0\uD560 \uC218 \uC788\uB3C4\uB85D \uBCF4\uC7A5\uD558\uBA70, \uC885\uC885 findBy\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD14C\uC2A4\uD2B8\uC5D0\uC11C \uBE44\uB3D9\uAE30 \uB3D9\uC791\uC744 \uB2E4\uB8E8\uB294 \uAC83\uC774 \uC120\uD638\uB418\uB294 \uC120\uD0DD\uC9C0\uAC00 \uB429\uB2C8\uB2E4.",-1);function E(S,q){return a(),i("div",null,[d,k,v,b,g,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,B,j,C,T,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),R,D])}var U=c(r,[["render",E],["__file","index.html.vue"]]);export{U as default};
