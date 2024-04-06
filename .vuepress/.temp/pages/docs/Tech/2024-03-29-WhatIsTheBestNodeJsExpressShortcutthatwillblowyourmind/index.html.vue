<template><div><img src="@source/docs/Tech/2024-03-29-WhatIsTheBestNodeJsExpressShortcutthatwillblowyourmind/img/WhatIsTheBestNodeJsExpressShortcutthatwillblowyourmind_0.png" />
<p>Node.js와 Express를 사용하여 웹 애플리케이션을 개발하는 것이 산업 표준이 되었습니다. 그런데 여전히 많은 개발자들이 오류 처리 보일러플레이트 코드가 많은 복잡한 코드를 작성해야 합니다. 저는 여러분에게 수백 줄의 보일러플레이트 코드를 줄여주면서도 간단한 해결책을 찾았습니다. Express js 미들웨어를 구현하는 것으로 여러분에게 보여드리겠습니다.</p>
<h2 id="문제점" tabindex="-1"><a class="header-anchor" href="#문제점" aria-hidden="true">#</a> 문제점</h2>
<p>모든 Express 개발자가 직면한 문제는 오류를 효율적으로 처리하는 방법입니다. 저는 수없이 많은 개발자들이 이 구문을 사용하는 것을 보았습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>notFound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'찾을 수 없음'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 HTTP 오류를 처리하는 것은 많은 반복 코드를 유발하고 코드를 덜 읽기 쉽게 만들 수 있습니다. 그럼 어떻게 간단하게 해결할까요?</p>
<h2 id="해결책" tabindex="-1"><a class="header-anchor" href="#해결책" aria-hidden="true">#</a> 해결책</h2>
<p>우선, 오류 처리를 위한 견고한 기반을 마련해야 합니다. 코드는 심플하고 확장 가능한 오류 해결을 제공해야 하며, 잘못 작성된 코드에서 발생하는 처리되지 않은 예외나 널에 대한 호출로 인한 오류도 다룰 수 있어야 합니다. 모든 오류는 프론트엔드에서 쉽게 처리할 수 있도록 동일한 JSON 구조를 가져야 합니다.```</p>
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
<p>이 foundation은 다음과 같이 보일 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ApiError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">status<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> code<span class="token punctuation">,</span> detail</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">super</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>detail <span class="token operator">=</span> detail<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">handle_error</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> status <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> error <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Internal error'</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token comment">// JSON endpoints를 위한 통합된 에러 반환 인터페이스</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>err <span class="token keyword">instanceof</span> <span class="token class-name">ApiError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  status <span class="token operator">=</span> err<span class="token punctuation">.</span>status<span class="token punctuation">;</span>
  error<span class="token punctuation">.</span>error <span class="token operator">=</span> err<span class="token punctuation">.</span>message<span class="token punctuation">;</span>
  error<span class="token punctuation">.</span>code <span class="token operator">=</span> err<span class="token punctuation">.</span>code<span class="token punctuation">;</span>
  error<span class="token punctuation">.</span>detail <span class="token operator">=</span> err<span class="token punctuation">.</span>detail<span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>err <span class="token keyword">instanceof</span> <span class="token class-name">Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  error<span class="token punctuation">.</span>error <span class="token operator">=</span> err<span class="token punctuation">.</span>message<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Logger<span class="token punctuation">.</span><span class="token function">fatal</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">서버의 처리되지 않은 오류, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>res<span class="token punctuation">.</span>req<span class="token punctuation">.</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>res<span class="token punctuation">.</span>req<span class="token punctuation">.</span>originalUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:\n 상태 코드 500, 오류 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>err<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \n </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>err<span class="token operator">?.</span>stack<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 에러 응답을 캐시하지 않음</span>
 res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Cache-Control'</span><span class="token punctuation">,</span> <span class="token string">'no-store'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
 res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드는 위에서 언급한 모든 요구 사항을 충족합니다. 이제 재미있는 부분으로 넘어가서 우리 응용 프로그램의 모든 엔드포인트에 이를 구현해야 합니다.</p>
<p>따라서 우리는 다음과 같이 변경할 수 있습니다:</p>
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
<p>위의 코드를 다음과 같이 번역해 드리겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>notFound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ApiError</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span> <span class="token string">'찾을 수 없음'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>나중에 개발 초기 단계에서도 손쉽게 구현할 수 있도록 익스프레스 HTTP 함수를 위한 미들웨어 래퍼를 생성하겠습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> FallThrough <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'api-fall-through'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">async_json_middleware</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
   <span class="token comment">// JSON 엔드포인트를 위한 몇 가지 기본값</span>
   req<span class="token punctuation">.</span>res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Cache-Control'</span><span class="token punctuation">,</span> <span class="token string">'no-store'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">===</span> FallThrough<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=></span> <span class="token function">handle_error</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token function">handle_error</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token string">'post'</span><span class="token punctuation">,</span> <span class="token string">'put'</span><span class="token punctuation">,</span> <span class="token string">'delete'</span><span class="token punctuation">,</span> <span class="token string">'all'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 express<span class="token punctuation">.</span>application<span class="token punctuation">[</span>m <span class="token operator">+</span> <span class="token string">'_json'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token function">async_json_middleware</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 express 미들웨어는 두 가지 중요한 개선 사항을 제공합니다. 이제 엔드포인트 함수에서 값을 반환할 수 있으며, 이는 http 상태 코드 200과 함께 res.json을 보내는 것과 동일합니다. 그리고 무엇보다 중요한 것은 코드에서 오류를 throw할 수 있습니다. 이로 인해 코드베이스가 크게 간소화되며, res.send 및 return으로 함수 종료하는 필요가 제거됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get_json</span><span class="token punctuation">(</span><span class="token string">'/api/good-morning'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token parameter">req</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ApiError</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token string">'아직 아침이 아닙니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ApiError</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token string">'이미 아침이 지났습니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">'좋은 아침'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
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
</div></template>
