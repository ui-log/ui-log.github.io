import{_ as l}from"./app.d68f74da.js";import{l as n,m as r,E as t,G as e,p as a,Y as o,C as s,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/UnderstandingwindowpostMessageandwindowparentpostMessageinJavaScript_0.87e100f4.png";const c={},d=s("img",{src:i},null,-1),u=s("p",null,"\uD604\uB300 \uC6F9 \uAC1C\uBC1C\uC5D0\uC11C \uAD50\uCC28 \uCD9C\uCC98 \uD1B5\uC2E0\uC740 \uC11C\uB85C \uB2E4\uB978 \uB3C4\uBA54\uC778\uC758 \uC6F9 \uD398\uC774\uC9C0\uB098 \uD504\uB808\uC784\uC774 \uC548\uC804\uD558\uAC8C \uC0C1\uD638 \uC791\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 \uC911\uC694\uD55C \uCE21\uBA74\uC785\uB2C8\uB2E4. \uC774\uB97C \uC2E4\uD604\uD558\uB294 \uC778\uAE30 \uC788\uB294 \uBA54\uCEE4\uB2C8\uC998 \uC911 \uD558\uB098\uB294 JavaScript\uC758 postMessage API\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uAE00\uC5D0\uC11C\uB294 window.postMessage\uC640 window.parent.postMessage\uC758 \uAC1C\uB150\uC744 \uD0D0\uAD6C\uD558\uBA74\uC11C \uC6F9 \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8 \uB0B4\uC5D0\uC11C \uB2E4\uB978 \uCEE8\uD14D\uC2A4\uD2B8 \uAC04 \uD1B5\uC2E0\uC774 \uC5B4\uB5BB\uAC8C \uAC00\uB2A5\uD574\uC9C0\uB294\uC9C0 \uC0B4\uD3B4\uBCFC \uAC83\uC785\uB2C8\uB2E4.",-1),k=s("h1",{id:"_1-window-postmessage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-window-postmessage","aria-hidden":"true"},"#"),a(" 1. window.postMessage:")],-1),v=s("p",null,"window.postMessage \uBA54\uC11C\uB4DC\uB294 \uC11C\uB85C \uB2E4\uB978 \uCD9C\uCC98(\uB3C4\uBA54\uC778)\uC5D0 \uC18D\uD558\uB294 \uB450 \uCC3D \uB610\uB294 \uD0ED \uAC04 \uD1B5\uC2E0\uC744 \uD65C\uC131\uD654\uD558\uB294 \uC548\uC804\uD55C \uBC29\uBC95\uC785\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uD55C \uCC3D\uC758 \uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uB2E4\uB978 \uCC3D\uC73C\uB85C \uC548\uC804\uD558\uAC8C \uBA54\uC2DC\uC9C0\uB97C \uC804\uB2EC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uC5EC, \uC11C\uB85C \uB2E4\uB978 \uB3C4\uBA54\uC778\uC5D0\uC11C \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uC5D0\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC774\uB294 \uC81C3\uC790 \uC704\uC82F, \uC544\uC774\uD504\uB808\uC784 \uB610\uB294 \uC6F9 \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8 \uB0B4\uC5D0\uC11C \uAD50\uCC28 \uCD9C\uCC98 \uD1B5\uC2E0\uC744 \uD3EC\uD568\uD558\uB294 \uB370 \uD2B9\uD788 \uC720\uC6A9\uD569\uB2C8\uB2E4.",-1),g=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),m=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>otherWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> targetOrigin<span class="token punctuation">,</span> <span class="token punctuation">[</span>transfer<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uB9E4\uAC1C\uBCC0\uC218:</p><ul><li>message: \uB2E4\uB978 \uCC3D\uC73C\uB85C \uC804\uC1A1\uD560 \uB370\uC774\uD130\uC785\uB2C8\uB2E4. \uBB38\uC790\uC5F4, \uAC1D\uCCB4 \uB610\uB294 \uAE30\uD0C0 JSON \uC9C1\uB82C\uD654\uD560 \uC218 \uC788\uB294 \uB370\uC774\uD130\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>targetOrigin: \uB300\uC0C1 \uCC3D\uC758 \uCD9C\uCC98\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. \uBCF4\uC548\uC744 \uAC15\uD654\uD558\uAE30 \uC704\uD574 \uC774 \uB9E4\uAC1C\uBCC0\uC218\uB294 \uB300\uC0C1 \uCC3D\uC758 \uD2B9\uC815 \uCD9C\uCC98\uB85C \uC124\uC815\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4 (\uC608: &quot;https://example.com&quot;). &quot;*&quot;\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBAA8\uB4E0 \uCD9C\uCC98\uC640 \uD1B5\uC2E0\uC744 \uD5C8\uC6A9\uD560 \uC218\uB3C4 \uC788\uC9C0\uB9CC, \uC774 \uBC29\uBC95\uC740 \uBCF4\uC548\uC5D0 \uCDE8\uC57D\uD569\uB2C8\uB2E4.</li><li>transfer (\uC120\uD0DD \uC0AC\uD56D): \uB2E4\uB978 \uCC3D\uC73C\uB85C \uBCF4\uB0B4\uC9C8 \uB54C \uBCF5\uC81C \uB300\uC2E0 \uC804\uB2EC\uD560 Transferable \uAC1D\uCCB4\uB4E4\uC758 \uBC30\uC5F4\uC785\uB2C8\uB2E4 (\uC608: ArrayBuffer, MessagePort). \uC774 \uB9E4\uAC1C\uBCC0\uC218\uB294 \uB300\uB7C9 \uB370\uC774\uD130\uB97C \uCC98\uB9AC\uD560 \uB54C \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uB54C \uC720\uC6A9\uD569\uB2C8\uB2E4.</li></ul><p>\uC608\uC2DC: \uC11C\uB85C \uB2E4\uB978 \uCD9C\uCC98\uC758 \uB450 HTML \uD30C\uC77C\uC744 \uACE0\uB824\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4 (\uC608: https://origin1.com \uBC0F https://origin2.com):</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>origin1<span class="token punctuation">.</span>html<span class="token operator">--</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Origin <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>button onclick<span class="token operator">=</span><span class="token string">&quot;sendMessage()&quot;</span><span class="token operator">&gt;</span>Send Message<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

  <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">function</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> otherWindow <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;https://origin2.com/origin2.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&#39;Hello from Origin 1!&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> targetOrigin <span class="token operator">=</span> <span class="token string">&#39;https://origin2.com&#39;</span><span class="token punctuation">;</span>
      otherWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> targetOrigin<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>origin2<span class="token punctuation">.</span>html<span class="token operator">--</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Origin <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> receiveMessage<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">receiveMessage</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>origin <span class="token operator">===</span> <span class="token string">&#39;https://origin1.com&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Received message: &#39;</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uC608\uC2DC\uC5D0\uC11C origin1.html\uC758 \u201CSend Message\u201D \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74, origin2.html\uC744 \uC5F0 \uB2E4\uC74C \uBA54\uC2DC\uC9C0 \u201CHello from Origin 1!\u201D\uB97C \uC804\uC1A1\uD569\uB2C8\uB2E4. origin2.html \uCC3D\uC740 \uBA54\uC2DC\uC9C0\uB97C \uC218\uC2E0\uD558\uACE0, \uBCF4\uC548\uC744 \uC704\uD574 \uC624\uB9AC\uC9C4\uC774 \u201Chttps://origin1.com\u201D\uACFC \uC77C\uCE58\uD560 \uACBD\uC6B0\uC5D0\uB9CC \uC218\uC2E0\uB41C \uB370\uC774\uD130\uC640 \uD568\uAED8 \uACBD\uACE0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.</p><h1 id="_1-window-parent-postmessage" tabindex="-1"><a class="header-anchor" href="#_1-window-parent-postmessage" aria-hidden="true">#</a> 1. window.parent.postMessage:</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=p(`<p>window.parent.postMessage \uBC29\uBC95\uC740 window.postMessage\uC640 \uC720\uC0AC\uD558\uC9C0\uB9CC \uC784\uBCA0\uB514\uB4DC\uB41C iframe \uB0B4\uC5D0\uC11C \uBD80\uBAA8 \uCC3D\uACFC \uD1B5\uC2E0\uD558\uAE30 \uC704\uD574 \uD2B9\uBCC4\uD788 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>parent<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> targetOrigin<span class="token punctuation">,</span> <span class="token punctuation">[</span>transfer<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uB9E4\uAC1C\uBCC0\uC218:</p><ul><li>message: \uBD80\uBAA8 \uCC3D\uC73C\uB85C \uBCF4\uB0B4\uC9C8 \uB370\uC774\uD130\uC785\uB2C8\uB2E4.</li><li>targetOrigin: \uBD80\uBAA8 \uCC3D\uC758 \uCD9C\uCC98\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.</li><li>transfer (\uC120\uD0DD\uC0AC\uD56D): window.postMessage\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C, \uC774 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC804\uC1A1\uB420 \uB54C \uBCF5\uC81C \uB300\uC2E0 \uB370\uC774\uD130 \uC804\uC1A1\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),w=p(`<p>\uC608\uC2DC: \uBD80\uBAA8.html \uD30C\uC77C\uC774 \uB2E4\uB978 \uCD9C\uCC98\uC758 iframe(\uC790\uC2DD.html)\uB97C \uB0B4\uC7A5\uD558\uB294 \uC2DC\uB098\uB9AC\uC624\uB97C \uACE0\uB824\uD574 \uBD05\uC2DC\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\uBD80\uBAA8<span class="token punctuation">.</span>html<span class="token operator">--</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>\uBD80\uBAA8 \uCC3D<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>iframe src<span class="token operator">=</span><span class="token string">&quot;https://origin2.com/child.html&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\uC790\uC2DD<span class="token punctuation">.</span>html<span class="token operator">--</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>\uC790\uC2DD \uCC3D<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>button onclick<span class="token operator">=</span><span class="token string">&quot;sendMessage()&quot;</span><span class="token operator">&gt;</span>\uBD80\uBAA8\uC5D0\uAC8C \uBA54\uC2DC\uC9C0 \uBCF4\uB0B4\uAE30<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

  <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">function</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&#39;\uC790\uC2DD \uCC3D\uC5D0\uC11C \uC548\uB155\uD558\uC138\uC694!&#39;</span><span class="token punctuation">;</span>
      parent<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token string">&#39;https://origin1.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uC608\uC2DC\uC5D0\uC11C \uC790\uC2DD.html\uC758 &quot;\uBD80\uBAA8\uC5D0\uAC8C \uBA54\uC2DC\uC9C0 \uBCF4\uB0B4\uAE30&quot; \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 &quot;\uC790\uC2DD \uCC3D\uC5D0\uC11C \uC548\uB155\uD558\uC138\uC694!&quot; \uBA54\uC2DC\uC9C0\uB97C \uBD80\uBAA8 \uCC3D(origin1.html)\uC73C\uB85C \uBCF4\uB0C5\uB2C8\uB2E4. \uBD80\uBAA8.html \uCC3D\uC740 \uC774 \uBA54\uC2DC\uC9C0\uB97C \uBC1B\uC544\uC11C \uC801\uC808\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=s("h1",{id:"window-parent-postmessage\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-\u1100\u1162\u11A8\u110E\u1166-\u1104\u1169\u1102\u1173\u11AB-\u1107\u1162\u110B\u1167\u11AF\u1100\u116A-\u1100\u1161\u11C0\u110B\u1173\u11AB-\u1107\u1169\u11A8\u110C\u1161\u11B8\u1112\u1161\u11AB-\u1103\u1166\u110B\u1175\u1110\u1165\u1105\u1173\u11AF-\u1107\u1169\u1102\u1162\u11AF-\u1109\u116E-\u110B\u1175\u11BB\u1102\u1161\u110B\u116D",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#window-parent-postmessage\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-\u1100\u1162\u11A8\u110E\u1166-\u1104\u1169\u1102\u1173\u11AB-\u1107\u1162\u110B\u1167\u11AF\u1100\u116A-\u1100\u1161\u11C0\u110B\u1173\u11AB-\u1107\u1169\u11A8\u110C\u1161\u11B8\u1112\u1161\u11AB-\u1103\u1166\u110B\u1175\u1110\u1165\u1105\u1173\u11AF-\u1107\u1169\u1102\u1162\u11AF-\u1109\u116E-\u110B\u1175\u11BB\u1102\u1161\u110B\u116D","aria-hidden":"true"},"#"),a(" window.parent.postMessage\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1D\uCCB4 \uB610\uB294 \uBC30\uC5F4\uACFC \uAC19\uC740 \uBCF5\uC7A1\uD55C \uB370\uC774\uD130\uB97C \uBCF4\uB0BC \uC218 \uC788\uB098\uC694?")],-1),_=s("p",null,"\uB124, window.parent.postMessage\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1D\uCCB4 \uB610\uB294 \uBC30\uC5F4\uACFC \uAC19\uC740 \uBCF5\uC7A1\uD55C \uB370\uC774\uD130\uB97C \uBCF4\uB0BC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBC29\uBC95\uC740 JSON \uC9C1\uB82C\uD654 \uAC00\uB2A5\uD55C \uB370\uC774\uD130\uB97C \uC9C0\uC6D0\uD558\uBBC0\uB85C JavaScript \uAC1D\uCCB4\uC640 \uBC30\uC5F4\uC744 \uBA54\uC2DC\uC9C0 \uCF58\uD150\uCE20\uB85C \uC804\uB2EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB370\uC774\uD130\uAC00 \uC548\uC804\uD558\uAC8C \uC9C1\uB82C\uD654\uB418\uACE0 \uC5ED\uC9C1\uB82C\uD654\uB418\uC5B4\uC57C \uD558\uBBC0\uB85C iframe\uACFC \uC0C1\uC704 \uCC3D \uAC04\uC5D0 \uB370\uC774\uD130\uAC00 \uC815\uD655\uD788 \uBCC0\uD658\uB420 \uC218 \uC788\uB3C4\uB85D\uD558\uC138\uC694.",-1);function y(M,j){return n(),r("div",null,[d,u,k,v,g,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,_])}var T=l(c,[["render",y],["__file","index.html.vue"]]);export{T as default};
