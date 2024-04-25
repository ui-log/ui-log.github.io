import{_ as p}from"./app.3052dcfb.js";import{l as n,m as c,E as a,G as t,p as e,Y as o,K as s}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/1.e2ce4dc1.png",l="/assets/2.5e4e385b.png";const u={},d=s(`<h1 id="react-uncontrolled-input-to-be-controlled-\u110B\u1166\u1105\u1165-\u1112\u1162\u1100\u1167\u11AF-\u1107\u1161\u11BC\u1107\u1165\u11B8-100-\u1103\u116C\u11B7" tabindex="-1"><a class="header-anchor" href="#react-uncontrolled-input-to-be-controlled-\u110B\u1166\u1105\u1165-\u1112\u1162\u1100\u1167\u11AF-\u1107\u1161\u11BC\u1107\u1165\u11B8-100-\u1103\u116C\u11B7" aria-hidden="true">#</a> React &#39;uncontrolled input to be controlled.&#39; \uC5D0\uB7EC \uD574\uACB0 \uBC29\uBC95(100% \uB428)</h1><h2 id="\u110B\u1166\u1105\u1165" tabindex="-1"><a class="header-anchor" href="#\u110B\u1166\u1105\u1165" aria-hidden="true">#</a> \uC5D0\uB7EC</h2><p>React\uB97C \uAC1C\uBC1C\uD558\uB2E4\uBCF4\uBA74 \uC778\uD48B\uC744 \uC0AC\uC6A9\uD560 \uB54C onChange\uC2DC \uC774\uB7F0 \uC5D0\uB7EC\uB97C \uB9CC\uB098\uB294 \uACBD\uC6B0\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Warning: A component is changing an uncontrolled input to be controlled.
This is likely caused by the value changing from undefined to a defined value, which should not happen.
Decide between using a controlled or uncontrolled input element for the lifetime of the component.
More info: https://reactjs.org/link/controlled-components
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),r=s('<img src="'+i+`" width="500"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">useInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>input<span class="token punctuation">,</span> setInput<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setInput</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>input<span class="token punctuation">,</span> onChange<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC800\uB294 \uC704\uC640 \uAC19\uC774 useInput \uD6C5\uC744 \uB9CC\uB4E4\uC5B4 \uC0AC\uC6A9\uC911\uC774\uC5C8\uB294\uB370, \uC704 \uD6C5\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),k=s('<h2 id="\u110B\u116F\u11AB\u110B\u1175\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110B\u116F\u11AB\u110B\u1175\u11AB" aria-hidden="true">#</a> \uC6D0\uC778</h2><p>\uC704 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uB294 \uC6D0\uC778\uC740 \uC5D0\uB7EC \uBA54\uC138\uC9C0\uC5D0 \uB098\uC640\uC788\uB294\uB300\uB85C uncontrolled input\uC774 controlled\uB85C \uBCC0\uACBD\uB418\uC5B4\uC11C \uBC1C\uC0DD\uD55C \uAC83\uC778\uB370\uC694. \uB354 \uC27D\uAC8C \uB9D0\uD558\uC790\uBA74 input\uC758 \uAC12\uC774 undefined \uB418\uC5B4\uC788\uB2E4\uAC00 onChange\uB97C \uD1B5\uD574\uC11C defined \uB41C \uAC12\uC73C\uB85C \uBCC0\uACBD\uB418\uC5B4\uC11C \uBC1C\uC0DD\uD558\uB294 \uC774\uC288\uC785\uB2C8\uB2E4.</p><img src="'+l+'" width="500"><h2 id="\u1112\u1162\u1100\u1167\u11AF-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1112\u1162\u1100\u1167\u11AF-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uD574\uACB0 \uBC29\uBC95</h2><p>\uC704 \uC5D0\uB7EC\uB97C \uD574\uACB0\uD558\uB824\uBA74 \uC544\uB798\uC640 \uAC19\uC774 value\uB97C \uBC1B\uC544\uC11C useState\uC758 \uCD08\uAE30 \uAC12\uC5D0 \uB123\uC5B4\uC8FC\uBA74 \uB429\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',6),v=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">useInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>input<span class="token punctuation">,</span> setInput<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setInput</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>input<span class="token punctuation">,</span> onChange<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uCEE4\uC2A4\uD140 \uD6C5\uC744 \uC0AC\uC6A9\uD558\uB294 \uACF3\uC5D0\uC11C\uB294 \uC544\uB798\uC640 \uAC19\uC774 \uCD08\uAE30\uAC12\uC778 &quot;&quot; \uBE48 \uBB38\uC790\uC5F4\uC744 \uB123\uC5B4\uC8FC\uBA74 \uB429\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>email<span class="token punctuation">,</span> onEmailChange<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useInput</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uD558\uBA74 input\uC5D0\uC11C onChange\uD560 \uB54C \uBC1C\uC0DD\uD558\uB358 &quot;uncontrolled input to be controlled.&quot; \uC5D0\uB7EC\uB97C \uC190 \uC27D\uAC8C \uD574\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>`,4);function m(b,h){return n(),c("div",null,[d,(n(),a(o("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(n(),a(o("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),a(o("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v])}var j=p(u,[["render",m],["__file","index.html.vue"]]);export{j as default};
