<template><div><h1 id="자바스크립트로-selenium-iframe에-접근하는-방법" tabindex="-1"><a class="header-anchor" href="#자바스크립트로-selenium-iframe에-접근하는-방법" aria-hidden="true">#</a> 자바스크립트로 selenium iframe에 접근하는 방법</h1>
<div class="custom-container tip"><p class="custom-container-title">💡이 포스팅을 읽으면</p>
<p>자바스크립트를 이용해 selenium을 사용할 때 iframe 내부에 있는 요소에 접근하여 처리할 수 있습니다.</p>
</div>
<p>selenium을 사용하다보면 이렇게 사이트가 iframe으로 이루어진 경우가 종종 발생하는데요.
이럴 때는 findElements 와 같은 함수를 통해서 엘리먼트에 접근하는 것이 안됩니다.</p>
<img src="@source/docs/Selenium/2022-12-22-자바스크립트로-selenium-iframe에-접근하는-방법/img/1.png"  />
<component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>현재 body로 되어있는 기준을 iframe으로 먼저 바꿔 준 후에 findElements를 사용해야
iframe 내부에 있는 요소에 접근할 수 있는데요.</p>
<h2 id="switchto" tabindex="-1"><a class="header-anchor" href="#switchto" aria-hidden="true">#</a> switchTo()</h2>
<p>driver의 <code v-pre>switchTo()</code> 함수를 사용해서 iframe으로 포커스를 스위칭할 수 있는데요.
iframe이 있는지 판단하기 위해서 findElements 함수로 iframe 유무를 판단할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>iframe<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> driver<span class="token punctuation">.</span><span class="token function">findElements</span><span class="token punctuation">(</span>By<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"iframe"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>iframe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> driver<span class="token punctuation">.</span><span class="token function">switchTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// driver를 iframe으로 스위칭</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 하면 이제 iframe 내부에 있는 엘리먼트에 접근할 수 있습니다.</p>
<component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>iframe<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> driver<span class="token punctuation">.</span><span class="token function">findElements</span><span class="token punctuation">(</span>By<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"iframe"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>iframe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> driver<span class="token punctuation">.</span><span class="token function">switchTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// driver를 iframe으로 스위칭</span>

  <span class="token keyword">const</span> iframeElement <span class="token operator">=</span> <span class="token keyword">await</span> driver<span class="token punctuation">.</span><span class="token function">findElements</span><span class="token punctuation">(</span>By<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"iframe 내부 엘리먼트 요소"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defaultcontent" tabindex="-1"><a class="header-anchor" href="#defaultcontent" aria-hidden="true">#</a> defaultContent()</h2>
<p>이제 iframe에서 할 일을 다 끝냈다면 다시 body로 스위칭해야하는데요.
그 때 필요한 것이 <code v-pre>defaultContent()</code> 함수입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>iframe<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> driver<span class="token punctuation">.</span><span class="token function">findElements</span><span class="token punctuation">(</span>By<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"iframe"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>iframe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> driver<span class="token punctuation">.</span><span class="token function">switchTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// driver를 iframe으로 스위칭</span>

  <span class="token keyword">const</span> iframeElement <span class="token operator">=</span> <span class="token keyword">await</span> driver<span class="token punctuation">.</span><span class="token function">findElements</span><span class="token punctuation">(</span>By<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"iframe 내부 엘리먼트 요소"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> driver<span class="token punctuation">.</span><span class="token function">switchTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">defaultContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 돌아가기</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="정리" tabindex="-1"><a class="header-anchor" href="#정리" aria-hidden="true">#</a> 정리</h2>
<ul>
<li>iframe 내부 요소를 탐색하고 싶다면 <code v-pre>.switchTo()</code> 함수로 바꾼 후에 처리</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">await</span> driver<span class="token punctuation">.</span><span class="token function">switchTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// iframe으로 스위칭</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>iframe 내부에서 작업 다 끝내서 다시 body로 돌아오려면 <code v-pre>.switchTo().defaultContent()</code> 로 돌아오기</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">await</span> driver<span class="token punctuation">.</span><span class="token function">switchTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">defaultContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 다시 원래 body로 돌아가기</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
