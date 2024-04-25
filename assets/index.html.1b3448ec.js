import{_ as c}from"./app.3052dcfb.js";import{l as s,m as l,E as t,G as p,p as a,Y as e,C as n,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/ReactDevelopmentUnleashingtheinPowerofHooks_0.2c3e986c.png";const u={},r=n("p",null,"\uC18C\uAC1C",-1),d=n("p",null,[n("img",{src:i,alt:"React \uAC1C\uBC1C\uC744 \uBC1C\uC804\uC2DC\uD0A4\uB294 \uD6C5\uC758 \uD798"})],-1),k=n("p",null,"React \uAC1C\uBC1C \uC601\uC5ED\uC5D0\uC11C 16.8 \uBC84\uC804\uBD80\uD130 \uB3C4\uC785\uB41C \uD6C5\uC740 \uC911\uC694\uD55C \uC774\uC815\uD45C\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD6C5\uC740 \uAC1C\uBC1C\uC790\uB4E4\uC774 \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C \uC0C1\uD0DC \uBC0F \uB2E4\uB978 React \uAE30\uB2A5\uC744 \uC81C\uC5B4\uD560 \uC218 \uC788\uB294 \uD328\uB7EC\uB2E4\uC784 \uC804\uD658\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774 \uBB38\uC11C\uB294 \uD6C5\uC758 \uC138\uACC4\uC5D0 \uAD00\uD574 \uAE4A\uC774 \uD30C\uD5E4\uCE58\uBA70, React \uAC1C\uBC1C\uC744 \uAC04\uC18C\uD654\uD558\uB294 \uB370 \uADF8\uB4E4\uC758 \uB2A5\uB825\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4.",-1),v=n("p",null,"\uD6C5 \uC774\uD574\uD558\uAE30:",-1),m=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=o(`<p>\uD6C5\uC740 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0C1\uD0DC(state)\uC640 \uC0AC\uC774\uB4DC \uC774\uD399\uD2B8(side effects)\uB97C \uAD00\uB9AC\uD558\uAE30 \uC704\uD55C \uC0C8\uB85C\uC6B4 \uC811\uADFC\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uBA87 \uAC00\uC9C0 \uC8FC\uC694 \uAC1C\uB150\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4:</p><ol><li>useState \uD6C5:</li></ol><ul><li>useState \uD6C5\uC740 \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uB85C\uCEEC \uC0C1\uD0DC\uB97C \uAD00\uB9AC\uD560 \uC218 \uC788\uAC8C \uD574\uC90D\uB2C8\uB2E4.</li><li>\uC774 \uD6C5\uC740 \uC0C1\uD0DC \uAC12\uC744 \uBC18\uD658\uD558\uACE0 \uC774\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uD568\uC218\uB97C \uC81C\uACF5\uD558\uB294\uB370, \uC774\uB294 \uD074\uB798\uC2A4 \uCEF4\uD3EC\uB10C\uD2B8\uC758 this.setState\uC640 \uC720\uC0AC\uD569\uB2C8\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>You clicked <span class="token punctuation">{</span>count<span class="token punctuation">}</span> times<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        Click me
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=o(`<ol start="2"><li>useEffect \uD6C5:</li></ol><ul><li>useEffect \uD6C5\uC740 \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBD80\uC791\uC6A9\uC744 \uC218\uD589\uD560 \uC218 \uC788\uAC8C \uD569\uB2C8\uB2E4.</li><li>\uB80C\uB354\uB9C1 \uD6C4\uC5D0 \uC2E4\uD589\uB418\uBA70, componentDidMount, componentDidUpdate, \uADF8\uB9AC\uACE0 componentWillUnmount\uC640 \uAC19\uC740 \uB77C\uC774\uD504\uC0AC\uC774\uD074 \uBA54\uC11C\uB4DC\uB97C \uB300\uCCB4\uD569\uB2C8\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>seconds<span class="token punctuation">,</span> setSeconds<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setSeconds</span><span class="token punctuation">(</span>seconds <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>seconds<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Seconds<span class="token operator">:</span> <span class="token punctuation">{</span>seconds<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\uCEE4\uC2A4\uD140 \uD6C5:</li></ol><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=o(`<ul><li>\uCEE4\uC2A4\uD140 \uD6C4\uD06C\uB97C \uC0AC\uC6A9\uD558\uBA74 \uAC1C\uBC1C\uC790\uAC00 \uCEF4\uD3EC\uB10C\uD2B8 \uAC04\uC5D0 \uC0C1\uD0DC\uB97C \uC7AC\uC0AC\uC6A9\uD560 \uC218 \uC788\uC5B4\uC694.</li><li>\uC774\uB4E4\uC740 use\uB85C \uC2DC\uC791\uD558\uB294 \uC77C\uBC18\uC801\uC778 JavaScript \uD568\uC218\uB4E4\uC774\uC5D0\uC694.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">useFormInput</span><span class="token punctuation">(</span><span class="token parameter">initialValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    value<span class="token punctuation">,</span>
    <span class="token literal-property property">onChange</span><span class="token operator">:</span> handleChange
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">MyForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token function">useFormInput</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token function">useFormInput</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> <span class="token punctuation">{</span><span class="token operator">...</span>username<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> <span class="token punctuation">{</span><span class="token operator">...</span>password<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1112\u116E\u110F\u1173\u110B\u1174-\u110C\u1161\u11BC\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1112\u116E\u110F\u1173\u110B\u1174-\u110C\u1161\u11BC\u110C\u1165\u11B7" aria-hidden="true">#</a> \uD6C4\uD06C\uC758 \uC7A5\uC810:</h2><ul><li>\uAC04\uC18C\uD654\uB41C \uB85C\uC9C1: \uD6C4\uD06C\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB85C\uC9C1\uC744 \uC7AC\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uD568\uC218\uB85C \uCEA1\uC290\uD654\uD558\uC5EC \uCF54\uB4DC\uB97C \uAE54\uB054\uD558\uACE0 \uAC00\uB3C5\uC131 \uC788\uB294 \uD615\uD0DC\uB85C \uB9CC\uB4E4 \uC218 \uC788\uC5B4\uC694.</li><li>\uD5A5\uC0C1\uB41C \uCF54\uB4DC \uC7AC\uC0AC\uC6A9\uC131: \uCEE4\uC2A4\uD140 \uD6C4\uD06C\uB97C \uD1B5\uD574 \uACE0\uCC28 \uCEF4\uD3EC\uB10C\uD2B8\uB098 \uB80C\uB354 \uD504\uB86D \uC5C6\uC774\uB3C4 \uCEF4\uD3EC\uB10C\uD2B8 \uAC04\uC5D0 \uB85C\uC9C1\uC744 \uACF5\uC720\uD560 \uC218 \uC788\uC5B4\uC694.</li><li>\uD5A5\uC0C1\uB41C \uC131\uB2A5: \uD6C4\uD06C\uB97C \uC0AC\uC6A9\uD558\uBA74 \uBA54\uBAA8\uC774\uC81C\uC774\uC158 \uAE30\uC220\uC744 \uD65C\uC6A9\uD558\uC5EC \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uCD5C\uC801\uD654\uD558\uACE0 \uBD88\uD544\uC694\uD55C \uB2E4\uC2DC \uB80C\uB354\uB9C1\uC744 \uD53C\uD560 \uC218 \uC788\uC5B4\uC694.</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=n("h2",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),a(" \uACB0\uB860:")],-1),h=n("p",null,"\uD6C5\uC2A4\uB294 \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uC0C1\uD0DC\uC640 \uC0AC\uC774\uB4DC \uC774\uD399\uD2B8\uB97C \uAD00\uB9AC\uD558\uB294 \uB354 \uAC04\uB2E8\uD558\uACE0 \uC9C1\uAD00\uC801\uC778 \uBC29\uBC95\uC744 \uC81C\uACF5\uD558\uC5EC React \uAC1C\uBC1C\uC744 \uD601\uC2E0\uD588\uC2B5\uB2C8\uB2E4. \uD6C5\uC2A4\uB97C \uC0AC\uC6A9\uD558\uBA74 \uCF54\uB4DC \uC7AC\uC0AC\uC6A9\uC131\uC774 \uC99D\uAC00\uD558\uACE0 \uCEF4\uD3EC\uB10C\uD2B8 \uCEA1\uC290\uD654\uAC00 \uAC1C\uC120\uB418\uBA70, \uAD81\uADF9\uC801\uC73C\uB85C \uAC1C\uBC1C\uC790 \uACBD\uD5D8\uC774 \uD5A5\uC0C1\uB429\uB2C8\uB2E4.",-1),_=n("p",null,"\uD6C5\uC2A4\uB97C \uD6A8\uACFC\uC801\uC73C\uB85C \uD65C\uC6A9\uD568\uC73C\uB85C\uC368, \uAC1C\uBC1C\uC790\uB4E4\uC740 \uC720\uC9C0\uBCF4\uC218 \uAC00\uB2A5\uD558\uACE0 \uD655\uC7A5 \uAC00\uB2A5\uD55C React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB354 \uC27D\uAC8C \uAD6C\uCD95\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1);function w(S,x){return s(),l("div",null,[r,d,k,v,m,(s(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(s(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(s(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(s(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,h,_])}var q=c(u,[["render",w],["__file","index.html.vue"]]);export{q as default};
