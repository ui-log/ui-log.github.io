import{_ as c}from"./app.3052dcfb.js";import{l as s,m as l,E as t,G as e,p as a,Y as o,C as n,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/ReactYouareUsinguseEffectWrongDoThisInstead_0.6a41eb3d.png";const u={},r=n("p",null,[n("img",{src:i,alt:"React hooks"})],-1),d=n("p",null,"\uB9AC\uC561\uD2B8\uB97C \uACF5\uBD80\uD558\uAE30\uB85C \uACB0\uC815\uD588\uB2E4\uBA74, \uD6C5(Hooks)\uC740 \uAC00\uC7A5 \uBA3C\uC800 \uBC30\uC6CC\uC57C \uD558\uB294 \uAC83 \uC911 \uD558\uB098\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uD6C5\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC5D0 \uB300\uD574 \uCC98\uC74C\uC5D0\uB294 \uB2F9\uD669\uC2A4\uB7EC\uC6B8 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uD6C5\uC740 \uB9AC\uC561\uD2B8\uC758 \uD544\uC218 \uC694\uC18C\uB85C, \uCCAB \uBC88\uC9F8 \uBA87 \uBC84\uC804\uC758 \uB9AC\uC561\uD2B8\uC5D0\uC11C \uBC1C\uC0DD\uD55C \uC5EC\uB7EC \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uB9CC\uB4E4\uC5B4\uC84C\uC2B5\uB2C8\uB2E4. \uB9AC\uC561\uD2B8\uB294 \uB80C\uB354\uB9C1\uC774 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB77C\uC774\uD504\uC0AC\uC774\uD074 \uD568\uC218 \uB0B4\uC5D0\uC11C \uBAA8\uB450 \uC218\uD589\uB418\uB358 \uC2DC\uC808\uC774 \uC788\uC5C8\uB294\uB370, \uADF8\uB7F0 \uBB38\uC81C\uB4E4\uC744 \uD574\uACB0\uD558\uACE0\uC790 \uB9CC\uB4E4\uC5B4\uC9C4 \uAC83\uC774\uC8E0.",-1),k=n("p",null,"\uADF8\uB807\uB2E4\uBA74, \uBAA8\uB450\uAC00 \uCC98\uC74C\uC73C\uB85C \uB2E4\uB8E8\uB294 \uCCAB \uBC88\uC9F8 \uD6C5(\uD568\uC218)\uC740 useState()\uC640 useEffect()\uC77C \uAC83\uC785\uB2C8\uB2E4. useState()\uB294 \uC0C1\uD0DC \uAD00\uB9AC\uC640 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB418\uC5B4\uC57C \uD558\uB294 \uC2DC\uC810\uC744 \uC81C\uC5B4\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uBC18\uBA74 useEffect()\uB294 \uC704\uC5D0\uC11C \uC5B8\uAE09\uD55C \uB77C\uC774\uD504\uC0AC\uC774\uD074 \uD568\uC218\uC640 \uC57D\uAC04 \uC720\uC0AC\uD55C \uBC29\uC2DD\uC73C\uB85C \uB3D9\uC791\uD569\uB2C8\uB2E4.",-1),m=n("p",null,"useEffect() \uD6C5\uC740 \uB450 \uAC00\uC9C0 \uCD9C\uB825\uC744 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8\uB294 \uCF5C\uBC31 \uD568\uC218\uC774\uACE0, \uB450 \uBC88\uC9F8\uB294 \uC120\uD0DD\uC801\uC73C\uB85C \uC774 \uD6C5\uC774 \uC5B8\uC81C \uD638\uCD9C\uB418\uC5B4\uC57C \uD558\uB294\uC9C0 \uC815\uC758\uD569\uB2C8\uB2E4.",-1),v=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevProps</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">//prevProps\uB294 \uC120\uD0DD\uC801\uC774\uBA70 \uD2B9\uC815 \uBAA9\uC801\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB77C\uC774\uD504\uC0AC\uC774\uD074 \uD568\uC218\uC640 \uBE44\uAD50\uB420 \uB54C \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD558\uC2ED\uC2DC\uC624.</span>
 <span class="token comment">//\uC0AC\uC6A9\uC790 \uC815\uC758 \uD568\uC218 \uB0B4\uC6A9\u2026.</span>
    \uC0AC\uC6A9\uC790 \uC815\uC758 \uD568\uC218 \uB0B4\uC6A9\u2026

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uD574\uC81C\uB418\uAC70\uB098 \uC885\uC18D\uC131\uC774 \uBCC0\uACBD\uB420 \uB54C \uC2E4\uD589\uD560 \uCF54\uB4DC</span>
      <span class="token comment">// \uBA54\uBAA8\uB9AC \uB204\uCD9C\uACFC \uC608\uAE30\uCE58 \uBABB\uD55C \uB3D9\uC791\uC744 \uD53C\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4.</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\uBC30\uC5F4 \uD615\uD0DC\uC758 \uC885\uC18D\uC131<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB9CE\uC740 \uCD08\uBCF4\uC790\uB4E4\uC774 \uB9CE\uC774 \uD63C\uB3D9\uD558\uB294 \uC8FC\uC758 \uC0AC\uD56D \uC911 \uD558\uB098\uB294 \uB450 \uBC88\uC9F8 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0\uC774\uB2E4. \uC694\uC57D\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4:</p><p>useEffect\uC758 \uC791\uB3D9 \uBC29\uC2DD\uC744 \uB2E4\uC2DC \uC0B4\uD3B4\uBCF4\uC558\uC73C\uB2C8, \uBA54\uBAA8\uC774\uC81C\uC774\uC158\uC774\uB77C\uB294 \uCD5C\uC801\uD654 \uAE30\uC220\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uC57C \uD569\uB2C8\uB2E4. \uBA54\uBAA8\uC774\uC81C\uC774\uC158\uC740 \uBD88\uD544\uC694\uD55C \uB2E4\uC2DC \uB80C\uB354\uB9C1\uC744 \uBC29\uC9C0\uD558\uACE0, useEffect\uC5D0\uC11C \uC885\uC18D\uC131 \uBC30\uC5F4\uC744 \uB2E4\uB8F0 \uB54C \uD2B9\uD788 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC131\uB2A5\uC744 \uD06C\uAC8C \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>useEffect \uD6C5\uC758 \uC8FC\uC694 \uC544\uC774\uB514\uC5B4\uB294 \uC678\uBD80 API\uB098 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC811\uADFC, HTTP \uC694\uCCAD \uC644\uB8CC\uB97C \uAE30\uB2E4\uB9B4 \uB54C\uC640 \uAC19\uC774 \uB370\uC774\uD130 \uC804\uC1A1\uC744 \uB3D9\uAE30\uD654\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC774 \uD6C5\uC744 \uCF54\uB4DC \uB0B4\uC758 \uAC00\uB2A5\uD55C \uBAA8\uB4E0 \uC0C1\uD669\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uACBD\uD5A5\uC774 \uC788\uC5B4\uC11C \uCF54\uB4DC\uAC00 \uD2B9\uD788 Case A\uC640 C*\uC5D0 \uB098\uC5F4\uB41C \uC0C1\uD669\uC5D0\uC11C \uB354\uB7FD\uACE0 \uCF54\uB4DC\uAC00 \uAE38\uC5B4\uC9C0\uBA74\uC11C \uD55C \uAC00\uC9C0\uC758 \uC0C1\uD0DC\uB97C \uBCC0\uACBD\uD558\uBA74 \uD504\uB85C\uC138\uC2A4 \uC911\uC5D0 \uC885\uC18D\uC131 \uBC30\uC5F4\uC758 \uD558\uB098\uB97C \uBCC0\uACBD\uD558\uBA74 \uB8E8\uD504\uB97C \uD2B8\uB9AC\uAC70\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=n("p",null,"\uC774\uB807\uAC8C \uCF54\uB4DC\uB97C \uB108\uBB34 \uBE44\uD6A8\uC728\uC801\uC73C\uB85C \uB9CC\uB4E4 \uC218\uB3C4 \uC788\uC5B4\uC694. useEffect\uB294 \uB9C8\uCE58 \uCF54\uB4DC\uB97C \uC2E4\uD589\uD558\uB2E4\uAC00 \uB2E4\uB978 \uC77C\uC744 \uD55C \uB2E4\uC74C\uC5D0 \uB2E4\uC2DC \uBA54\uC778 \uC2A4\uB808\uB4DC\uB85C \uB3CC\uC544\uC624\uB294 \uAC83\uCC98\uB7FC \uB3D9\uC791\uD558\uAE30 \uB54C\uBB38\uC5D0 \uB354 \uD6A8\uC728\uC801\uC77C \uC218 \uC788\uC5B4\uC694.",-1),f=n("p",null,"\uC88B\uC544\uC694, \uC774\uC81C \uAC00\uB054\uC740 useEffect\uAC00 \uCD5C\uC120\uC758 \uD574\uACB0\uCC45\uC774 \uC544\uB2D0 \uC218 \uC788\uB2E4\uB294 \uAC83\uC744 \uC54C\uC558\uB124\uC694. \uC774\uC81C \uAC01\uAC01\uC758 \uACBD\uC6B0\uB97C \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),_=n("p",null,"\uC774\uC81C \uC6B0\uB9AC\uB294 \uAC01 \uACBD\uC6B0\uC5D0 \uB300\uD574 \uC0C1\uC138\uD788 \uC774\uC57C\uAE30\uD560 \uAC70\uC5D0\uC694:",-1),h=n("p",null,"\uC57D\uC18D\uD55C \uD574\uACB0\uCC45\uC5D0 \uB300\uD574 \uC774\uC81C \uC774\uC57C\uAE30\uD574 \uBCFC\uAC8C\uC694. \uC774 \uB450 \uCEF4\uD3EC\uB10C\uD2B8(\uBD80\uBAA8 \uBC0F \uC790\uC2DD)\uB97C \uACE0\uB824\uD574 \uBD05\uC2DC\uB2E4:",-1),y=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),w=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ParentComponent.js</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ChildComponent <span class="token keyword">from</span> <span class="token string">&#39;./ChildComponent&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ParentComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>message<span class="token punctuation">,</span> setMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;Hello from Parent!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">incrementCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Button clicked </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> times!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>ChildComponent count<span class="token operator">=</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span> message<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span> 
        callbackFunction<span class="token operator">=</span><span class="token punctuation">{</span>incrementCount<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ParentComponent<span class="token punctuation">;</span>


<span class="token comment">// ChildComponent.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ChildComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> count<span class="token punctuation">,</span> message<span class="token punctuation">,</span> callbackFunction <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>Child Component<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Received Count from Parent<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Received Message from Parent<span class="token operator">:</span> <span class="token punctuation">{</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>callbackFunction<span class="token punctuation">}</span><span class="token operator">&gt;</span>Click Me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ChildComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC5EC\uAE30\uC5D0\uC11C \uC5B4\uB5A4 \uC77C\uC774 \uC77C\uC5B4\uB098\uACE0 \uC788\uB294\uC9C0 \uC124\uBA85\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4:</p><p>\uC6B0\uB9AC\uB294 \uCF54\uB4DC\uB97C \uC218\uC815\uD574\uC11C Child Component\uB85C \uCF5C\uBC31 \uD568\uC218\uB97C \uC804\uB2EC\uD558\uB3C4\uB85D \uD558\uC600\uC2B5\uB2C8\uB2E4. \uC774 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC8FC\uBAA9\uD574\uC8FC\uC138\uC694:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),C=n("p",null,"\uC694\uC57D\uD558\uC790\uBA74, \uC5EC\uAE30\uC11C \uC81C\uACF5\uB41C \uD1B5\uCC30\uB825\uC740 \uAC00\uCE58 \uC788\uB294 \uC9C0\uCE68\uC744 \uC81C\uACF5\uD558\uC9C0\uB9CC, \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAC1C\uBC1C\uC740 \uB3D9\uC801\uC778 \uBD84\uC57C\uC784\uC744 \uC778\uC2DD\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD558\uBA70 \uD574\uACB0\uCC45\uC740 \uC77C\uC0C1\uC5D0 \uB9DE\uC9C0 \uC54A\uB294 \uACBD\uC6B0\uAC00 \uC788\uC2B5\uB2C8\uB2E4. useEffect\uB294 React\uC758 \uB9E4\uC6B0 \uC911\uC694\uD55C \uBD80\uBD84\uC774\uC9C0\uB9CC \uB54C\uB85C\uB294 \uCD5C\uC120\uC758 \uD574\uACB0\uCC45\uC774 \uC544\uB2D0 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.",-1),E=n("p",null,"\uC624\uB298\uC740 \uC5EC\uAE30\uAE4C\uC9C0\uC785\uB2C8\uB2E4. \uC77D\uC5B4 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4!",-1),x=n("h1",{id:"stackademic",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#stackademic","aria-hidden":"true"},"#"),a(" Stackademic")],-1),P=n("p",null,"\uC624\uB298\uAE4C\uC9C0 \uC77D\uC5B4 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4. \uB5A0\uB098\uC2DC\uAE30 \uC804\uC5D0:",-1),j=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),S=n("ul",null,[n("li",null,"\uC791\uAC00\uC5D0\uAC8C \uBC15\uC218\uB97C \uBCF4\uB0B4\uACE0 \uD314\uB85C\uC6B0\uD574\uC8FC\uC138\uC694! \u{1F44F}"),n("li",null,"\uD2B8\uC704\uD130(X)\uAC00 \uC544\uB2CC \uB9C1\uD06C\uB4DC\uC778\uACFC \uC720\uD29C\uBE0C\uC5D0\uC11C\uB3C4 \uD314\uB85C\uC6B0\uD574\uC8FC\uC138\uC694."),n("li",null,"\uC804 \uC138\uACC4\uC801\uC73C\uB85C \uBB34\uB8CC \uD504\uB85C\uADF8\uB798\uBC0D \uAD50\uC721\uC758 \uBBFC\uC8FC\uD654\uB97C \uC2E4\uD604\uD558\uB294 Stackademic.com\uC744 \uBC29\uBB38\uD574\uBCF4\uC138\uC694.")],-1);function R(B,M){return s(),l("div",null,[r,d,k,m,v,(s(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(s(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,f,_,h,y,(s(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,(s(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),C,E,x,P,j,(s(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S])}var D=c(u,[["render",R],["__file","index.html.vue"]]);export{D as default};
