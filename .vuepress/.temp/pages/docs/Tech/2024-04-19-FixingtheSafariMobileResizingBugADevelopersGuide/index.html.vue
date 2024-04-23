<template><div><p>Safari 브라우저는 모바일 폰에서 가상 키보드를 활성화할 때 뷰 레이아웃 크기를 조정하지 않습니다. 여기에서 &quot;뷰 레이아웃&quot;과 &quot;시각적 레이아웃&quot; 사이의 차이를 볼 수 있습니다. 결과적으로, 채팅 입력란을 탭하면 헤더를 보려고 할 때 스크롤을 올려야 합니다.</p>
<p>또한, 아래로 스크롤할 때 HTML 문서 페이지에 속하지 않는 영역을 알 수 있을 수도 있습니다.</p>
<h1 id="twitter-접근-방식" tabindex="-1"><a class="header-anchor" href="#twitter-접근-방식" aria-hidden="true">#</a> Twitter 접근 방식</h1>
<p><img src="https://miro.medium.com/v2/resize:fit:436/1*Dj_5lZ32Ok-VuR-h2_maGg.gif" alt="Twitter Approach"></p>
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
<p>트위터는 문제를 검토하고 발생 상황을 식별하는 데 좋은 방법입니다. 가장 간단한 예는 입력이 화면 하단에 있는 채팅입니다. 키보드가 활성화되면 채팅 입력과 헤더가 보이기를 원합니다. 왜냐하면 모든 네이티브 애플리케이션이 그렇게 작동하기 때문이죠.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>main<span class="token operator">></span>
   <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>h1<span class="token operator">></span>Chat<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
   
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"message-history"</span><span class="token operator">></span>
     <span class="token punctuation">{</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"list-item"</span> key<span class="token operator">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span> id<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>
       <span class="token punctuation">{</span>i<span class="token punctuation">}</span> Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing elit<span class="token punctuation">.</span> Donec
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
     <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>    
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"actions"</span><span class="token operator">></span>
     <span class="token operator">&lt;</span>textarea
     autoFocus<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>
     className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">message-input </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">STICKY_INPUT_BUGGED_CLASS_NAME</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
     placeholder<span class="token operator">=</span><span class="token string">"Message"</span>
     <span class="token operator">/</span><span class="token operator">></span>
     <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"btn btn-primary"</span><span class="token operator">></span>Button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
 <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="web-telegram-방식" tabindex="-1"><a class="header-anchor" href="#web-telegram-방식" aria-hidden="true">#</a> Web Telegram 방식</h1>
<p><img src="https://miro.medium.com/v2/resize:fit:436/1*7-qPiF5kXspetxsY40POyA.gif" alt="웹 텔레그램 방식"></p>
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
<p>텔레그램은 이 문제를 다음과 같은 몇 가지 단계로 해결합니다. 먼저 HTML 문서의 스크롤 방지를 위해 고정 위치를 추가합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>html<span class="token punctuation">,</span>
body <span class="token punctuation">{</span>
 <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로, 전역 CSS 변수와 화면 크기 변경 시 트리거되는 JavaScript 코드를 사용하여 보이는 영역의 높이를 수동으로 계산합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">:</span>root <span class="token punctuation">{</span>
 <span class="token operator">--</span>vh<span class="token operator">:</span> 1vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

html<span class="token punctuation">.</span>is<span class="token operator">-</span>safari<span class="token punctuation">,</span>
html<span class="token punctuation">.</span>is<span class="token operator">-</span>safari body <span class="token punctuation">{</span>
 <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>vh<span class="token punctuation">,</span> 1vh<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위 코드는 모바일 웹 브라우저, 특히 Safari에서 발생하는 뷰포트 크기 조정 문제에 대한 해결책을 제공합니다. 먼저 기기가 &quot;스티키 입력&quot; 버그를 가지고 있는지 여부를 식별하고 뷰포트 높이를 이에 맞게 조정합니다. overlayCounter는 활성화된 오버레이를 추적합니다. setVH 함수는 반응형 디자인을 위해 뷰포트 높이를 재계산하고 설정하는 사용자 정의 속성으로 설정합니다. 스티키 입력 버그가 감지되면 toggleResizeMode 함수는 오버레이가 활성화되어 있는지 여부에 따라 올바른 크기 조정 동작을 보장합니다.</p>
<p>크기 문제를 해결했지만 여전히 화면이 가시 영역을 넘어 스크롤될 수 있습니다. 따라서 Telegram은 최종 단계에서 화면 스크롤을 제어합니다. 화면에서 손가락 동작과 터치에 반응하는 <code v-pre>touchmove</code> 및 <code v-pre>touchstart</code> 이벤트 핸들러를 사용합니다. 이는 &quot;scrollable-y&quot; 클래스를 가진 요소의 콘텐츠 스크롤을 관리하기 위해 필요합니다. 이를 통해 페이지의 모든 요소에 대한 스크롤을 차단하지 않고 스크롤을 관리할 수 있습니다.</p>
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
<p>위 코드에는 Safari에서의 &quot;sticky&quot; 입력 문제를 해결하기 위한 핸들러가 포함되어 있습니다. 이는 특정 클래스를 가진 요소에 대해 <code v-pre>focusin</code> 및 <code v-pre>focusout</code> 이벤트를 감지하고 필요한 조정을 수행합니다. 요소 내의 특정 속성을 확인하는 단계는 생략할 수 있으며, 모든 입력 요소가 원치 않는 동작을 보이기 때문입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">onFocusIn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> FocusEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>
  <span class="token operator">!</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>
  <span class="token constant">STICKY_INPUT_BUGGED_CLASS_NAME</span>
  <span class="token punctuation">)</span> <span class="token operator">||</span>
  e<span class="token punctuation">.</span>timeStamp <span class="token operator">-</span> lastFocusOutTimeStamp <span class="token operator">&lt;</span> <span class="token number">50</span>
 <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
 <span class="token function">fixSafariStickyInput</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

 document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"touchmove"</span><span class="token punctuation">,</span> onTouchMove<span class="token punctuation">,</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>
 document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"touchstart"</span><span class="token punctuation">,</span> onTouchStart<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onFocusOut</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> FocusEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">"touchmove"</span><span class="token punctuation">,</span> onTouchMove<span class="token punctuation">,</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 lastFocusOutTimeStamp <span class="token operator">=</span> e<span class="token punctuation">.</span>timeStamp<span class="token punctuation">;</span>
 
 document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">"touchstart"</span><span class="token punctuation">,</span> onTouchStart<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onVisibilityChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>
  document<span class="token punctuation">.</span>activeElement <span class="token operator">&amp;&amp;</span>
  document<span class="token punctuation">.</span>activeElement<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>
   <span class="token constant">STICKY_INPUT_BUGGED_CLASS_NAME</span>
  <span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
  <span class="token punctuation">(</span>document<span class="token punctuation">.</span>activeElement <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">.</span>blur
 <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fixSafariStickyInput</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>activeElement <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="linkedin-접근-방식" tabindex="-1"><a class="header-anchor" href="#linkedin-접근-방식" aria-hidden="true">#</a> LinkedIn 접근 방식</h1>
<img src="https://miro.medium.com/v2/resize:fit:436/1*FQQffPzH2llfblXOEeC2ww.gif" />
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
<p>링크드인의 접근 방식은 훨씬 더 간단합니다. 페이지를 고치는 대신에 사용자가 스크롤할 때 화면의 가시 영역으로 돌아가게 만듭니다. 따라서 강조할 두 가지 단계는 다음과 같습니다: 뷰 레이아웃 크기를 변경하는 단계와 컨텐츠를 다시 가시 화면 영역으로 되돌리는 핸들러를 추가하는 단계입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">handleScrollToTop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 시각적 뷰포트 변화를 처리하기 위한 확인</span>
<span class="token keyword">const</span> visualViewport <span class="token operator">=</span> window<span class="token punctuation">.</span>visualViewport<span class="token punctuation">;</span>
<span class="token keyword">let</span> offset <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>visualViewport<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> viewportWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span>
 <span class="token keyword">let</span> viewportHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span>
 
 visualViewport<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"resize"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> $target <span class="token operator">=</span> event<span class="token punctuation">.</span>target <span class="token keyword">as</span> unknown <span class="token keyword">as</span> HTMLDivElement<span class="token punctuation">;</span>
  <span class="token keyword">const</span> $page <span class="token operator">=</span> pageRef<span class="token punctuation">.</span>current <span class="token keyword">as</span> HTMLDivElement<span class="token punctuation">;</span>
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span>viewportWidth <span class="token operator">!==</span> $target<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   viewportWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span>
   viewportHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span>viewportHeight <span class="token operator">-</span> $target<span class="token punctuation">.</span>height <span class="token operator">></span> <span class="token number">150</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">handleScrollToTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">const</span> adjustment <span class="token operator">=</span> viewportHeight <span class="token operator">-</span> $target<span class="token punctuation">.</span>height <span class="token operator">-</span> offset<span class="token punctuation">;</span>
   $page<span class="token punctuation">.</span>style<span class="token punctuation">.</span>bottom <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>adjustment<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
   viewportHeight <span class="token operator">===</span> $target<span class="token punctuation">.</span>height <span class="token operator">||</span>
   viewportHeight <span class="token operator">-</span> $target<span class="token punctuation">.</span>height <span class="token operator">&lt;=</span> <span class="token number">150</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
   offset <span class="token operator">=</span> viewportHeight <span class="token operator">-</span> $target<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
   $page<span class="token punctuation">.</span>style<span class="token punctuation">.</span>bottom <span class="token operator">=</span> <span class="token string">"0px"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"touchend"</span><span class="token punctuation">,</span> handleScrollToTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="요약" tabindex="-1"><a class="header-anchor" href="#요약" aria-hidden="true">#</a> 요약</h1>
<p>모든 접근 방식을 분석해보면 어느 것도 이상적인 해결책이라고 볼 수 없음을 알 수 있습니다. 트위터의 방식은 나쁜 UI/UX를 초래하지만 개발자들이 더 중요한 기능에 시간을 절약하도록 도와줍니다. 링크드인의 방식은 동적이며 실시간 통신에 많이 의존하지 않는 웹 애플리케이션에 적합하며 사용자가 페이지를 새로 고치기 위해 다시 로드해야 할 수 있기 때문에 텔레그램의 방식처럼 밀어서 새로 고치는 동작을 방지할 수 없습니다.</p>
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
<p>https://github.com/krutilins/fix-safari-scroll-on-focus-in-mobile</p>
<h1 id="자료" tabindex="-1"><a class="header-anchor" href="#자료" aria-hidden="true">#</a> 자료</h1>
<ul>
<li>Chrome on Android에서 발생하는 viewport 크기 조정 동작 변경에 대비하기 - Chrome Developers</li>
<li>키보드와 함께 iOS Safari의 별난 동작</li>
<li>iOS Safari: 키보드가 열리면 원하지 않는 스크롤 발생 및 body 스크롤 비활성화</li>
<li>iOS Safari: 입력 포커스 시 스크롤 방지(또는 제어)</li>
<li>모바일에서 viewport 단위 사용하는 꿀팁 | CSS-Tricks</li>
</ul>
</div></template>
