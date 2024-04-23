import{_ as o}from"./app.d68f74da.js";import{l as n,m as l,E as a,G as t,p as e,Y as p,K as s}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const c={},i=s(`<p>\uC18C\uAC1C: React\uC640 \uD568\uAED8 \uD558\uB294 \uC5EC\uC815\uC740 \uC815\uB9D0 \uD765\uBBF8\uB85C\uC6B4 \uACBD\uD5D8\uC774\uC9C0\uB9CC, \uAC15\uB825\uD558\uACE0 \uB3D9\uC801\uC778 \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uCD95\uD558\uB824\uBA74 React\uC758 \uD575\uC2EC \uAC1C\uB150\uC744 \uC219\uB2EC\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uC774 \uD3EC\uAD04\uC801\uC778 \uC548\uB0B4\uC11C\uC5D0\uC11C\uB294 useState \uD6C5, onClick \uC774\uBCA4\uD2B8, onChange \uC774\uBCA4\uD2B8 \uC138 \uAC00\uC9C0 \uD575\uC2EC \uAC1C\uB150\uC5D0 \uB300\uD574 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC2E4\uC6A9\uC801\uC778 \uCF54\uB4DC \uC0D8\uD50C\uACFC \uC2E4\uC81C \uC0AC\uB840\uB97C \uD1B5\uD574 \uC774\uB7EC\uD55C \uAE30\uBCF8 \uC694\uC18C\uC5D0 \uB300\uD55C \uACAC\uACE0\uD55C \uC774\uD574\uB97C \uC5BB\uC744 \uC218 \uC788\uC5B4 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC6D0\uD65C\uD558\uAC8C \uB9CC\uB4E4\uACE0 React \uAE30\uC220\uC744 \uD55C \uB2E8\uACC4 \uB192\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><ul><li><p>useState \uD6C5\uC758 \uD798\uC744 \uC774\uD574\uD558\uAE30:</p></li><li><p>useState \uD6C5\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uD074\uB798\uC2A4 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC0C1\uD0DC\uB97C \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></li><li><p>\uC2E4\uC6A9\uC801\uC778 \uC608\uC81C: useState \uD6C5\uC744 \uC0AC\uC6A9\uD558\uC5EC \uCE74\uC6B4\uD130 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uC5EC \uCE74\uC6B4\uD2B8 \uC0C1\uD0DC\uB97C \uCD94\uC801\uD558\uACE0 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uBC29\uBC95.</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),u=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> <span class="token function-variable function">decrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>increment<span class="token punctuation">}</span><span class="token operator">&gt;</span>Increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>decrement<span class="token punctuation">}</span><span class="token operator">&gt;</span>Decrement<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,2),r=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> Counter<span class="token punctuation">;</span>

<span class="token number">2.</span> Handling onClick Events<span class="token operator">:</span>

<span class="token operator">-</span> onClick \uC774\uBCA4\uD2B8\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC0AC\uC6A9\uC790\uAC00 \uBC84\uD2BC\uC774\uB098 \uB9C1\uD06C\uC640 \uAC19\uC740 \uC694\uC18C\uC640 \uC0C1\uD638 \uC791\uC6A9\uD560 \uB54C \uB3D9\uC791\uC774\uB098 \uD568\uC218\uB97C \uD2B8\uB9AC\uAC70\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4<span class="token punctuation">.</span>
<span class="token operator">-</span> \uC2E4\uC81C \uC608\uC2DC<span class="token operator">:</span> \uB77C\uC774\uD2B8 \uBAA8\uB4DC\uC640 \uB2E4\uD06C \uBAA8\uB4DC\uB97C \uC804\uD658\uD558\uB294 \uD1A0\uAE00 \uBC84\uD2BC \uAD6C\uD604\uD558\uAE30<span class="token punctuation">.</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,2),d=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ThemeToggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>theme<span class="token punctuation">,</span> setTheme<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">toggleTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTheme</span><span class="token punctuation">(</span>theme <span class="token operator">===</span> <span class="token string">&quot;light&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;dark&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;light&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">App </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>theme<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>\uD14C\uB9C8<span class="token operator">:</span> <span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>toggleTheme<span class="token punctuation">}</span><span class="token operator">&gt;</span>\uD14C\uB9C8 \uC804\uD658<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ThemeToggle<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,2),k=s(`<ol start="3"><li>onChange \uC774\uBCA4\uD2B8\uC758 \uD798\uC744 \uD65C\uC6A9\uD574\uBCF4\uC138\uC694:</li></ol><ul><li>onChange \uC774\uBCA4\uD2B8\uB294 \uC0AC\uC6A9\uC790 \uC785\uB825\uC744 \uCEA1\uCC98\uD558\uACE0 \uD3FC \uC694\uC18C\uC758 \uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uB3D9\uC791\uC744 \uD2B8\uB9AC\uAC70\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</li><li>\uC2E4\uC81C \uC608\uC2DC: \uC0AC\uC6A9\uC790 \uC785\uB825\uC744 \uAD00\uB9AC\uD558\uB294 \uC81C\uC5B4 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD574 \uB3D9\uC801 \uD3FC\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC785\uB2C8\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> from \u201Creact\u201D<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">DynamicForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> <span class="token punctuation">[</span>inputValue<span class="token punctuation">,</span> setInputValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>\u201C\u201D<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),v=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setInputValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>input
      type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span>
      value<span class="token operator">=</span><span class="token punctuation">{</span>inputValue<span class="token punctuation">}</span>
      onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span>
      placeholder<span class="token operator">=</span><span class="token string">&quot;\uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD558\uC138\uC694...&quot;</span>
    <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\uC785\uB825\uD55C \uB0B4\uC6A9<span class="token operator">:</span> <span class="token punctuation">{</span>inputValue<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> DynamicForm<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uACB0\uB860: \uCD95\uD558\uD569\uB2C8\uB2E4! \uC774\uC81C React\uC758 \uAE30\uCD08\uB97C \uC2B5\uB4DD\uD588\uC2B5\uB2C8\uB2E4. useState \uD6C5\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC0C1\uD0DC\uB97C \uAD00\uB9AC\uD558\uACE0 onClick \uBC0F onChange \uC774\uBCA4\uD2B8\uB97C \uCC98\uB9AC\uD558\uB294 \uBC29\uBC95\uAE4C\uC9C0 \uBC30\uC6E0\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uAC1C\uB150\uC744 \uC2E4\uC804 \uC2DC\uB098\uB9AC\uC624\uC5D0 \uC801\uC6A9\uD568\uC73C\uB85C\uC368 React \uAC1C\uBC1C\uC790\uB85C\uC11C \uC5EC\uC815\uC744 \uC2DC\uC791\uD560 \uAE30\uCD08 \uAE30\uC220\uC744 \uC2B5\uB4DD\uD588\uC2B5\uB2C8\uB2E4. \uACC4\uC18D\uD574\uC11C \uD0D0\uD5D8\uD558\uACE0 \uC2E4\uD5D8\uD558\uBA70 \uBE4C\uB4DC\uD558\uB294 \uACFC\uC815\uC5D0\uC11C React \uC804\uBB38\uAC00\uB85C\uC11C\uC758 \uC5ED\uB7C9\uC774 \uACC4\uC18D \uC131\uC7A5\uD568\uC744 \uD655\uC778\uD560 \uAC83\uC785\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,3),m=s(`<p>\uD589\uBCF5\uD55C \uCF54\uB529\uD558\uC138\uC694!</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function b(g,y){return n(),l("div",null,[i,(n(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(n(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(n(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(n(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(n(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m])}var x=o(c,[["render",b],["__file","index.html.vue"]]);export{x as default};
