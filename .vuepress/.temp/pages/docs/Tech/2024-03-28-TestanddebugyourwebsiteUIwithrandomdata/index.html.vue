<template><div><p>저희 개발자들 모두(적어도 일 년 경력이 있는 개발자들)가 이런 경험을 했을 겁니다. 개발 중에 프로그램이 완벽하게 작동하는 것을 보았는데, 운영 환경에 배포하면 문제가 발생하는 경우가 많습니다. 사용자 버그 신고가 많아지거나, 특정 상황에서 발생하는 버그로 상사가 불평하는 경우도 있습니다. 그 문구가 10단어만 있는 게 아니라 200단어와 같이 긴 문구일 때는 어떻게 할까요? 사용자가 공백 없이 아주 긴 단어를 입력했을 때는 어떻게 할까요? 데이터 배열에 개발 당시 서버에서 항상 제공될 것으로 상상했던 특정 유형의 데이터가 포함되어 있지 않을 때는 어떻게 할까요?</p>
<p><img src="@source/docs/Tech/2024-03-28-TestanddebugyourwebsiteUIwithrandomdata/img/TestanddebugyourwebsiteUIwithrandomdata_0.png" alt="랜덤 데이터로 웹 사이트 UI를 테스트하고 디버깅해 보세요"></p>
<p>저는 이런 문제를 자주 마주합니다. 그렇다면 솔루션은 뭘까요? 있을까요?</p>
<p>음, 있을 수도 없을 수도 있습니다! 예를 들어 수학적 접근 방식의 논리 버그와 같은 버그는 코드 수백 줄을 살펴보지 않고는 수정할 수 없지만, 이 글이 다루는 내용은 아닙니다. 단위 테스트, 통합 테스트, 그리고 End-to-End 테스트를 작성하여 일부 다른 종류의 버그와 장애를 수정할 수 있지만, 그러한 시간이 부족한 경우는 어떻게 할까요? 다양한 시나리오에서 어플리케이션이 어떻게 보이는지 확인하고 싶다면 어떻게 해야 할까요? 이 문제로 고민 중이시라면(특히 프론트엔드 개발자라면) 이 글이 도움이 될 것입니다! 😉</p>
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
<img src="@source/docs/Tech/2024-03-28-TestanddebugyourwebsiteUIwithrandomdata/img/TestanddebugyourwebsiteUIwithrandomdata_1.png" />
<p>우선, 우리의 무작위 데이터를 생성하는 몇 가지 함수가 있어야 합니다.</p>
<p>가장 필요한 무작위 데이터의 경우는 다음과 같습니다:</p>
<ul>
<li>텍스트</li>
<li>숫자</li>
<li>날짜</li>
<li>불리언</li>
<li>이미지</li>
</ul>
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
<p>텍스트부터 시작해볼게요. 우선, 무작위 텍스트를 만들기 위한 문자열이 필요합니다.</p>
<p>저는 Lorem ipsum 텍스트의 한 문단을 사용했어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>textArray <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token string">'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '</span> <span class="token operator">+</span>
  <span class="token string">'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris '</span> <span class="token operator">+</span>
  <span class="token string">'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit '</span> <span class="token operator">+</span>
  <span class="token string">'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in '</span> <span class="token operator">+</span>
  <span class="token string">'culpa qui officia deserunt mollit anim id est laborum.'</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 이 배열의 랜덤 범위를 선택하여 다양한 길이의 텍스트를 만들어봅시다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>textArray<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>
  <span class="token number">0</span><span class="token punctuation">,</span>
  Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>textArray<span class="token punctuation">.</span>length <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>좋아요, 하지만 여전히 문제가 있어요. 템플릿에서 생성된 모든 텍스트들이 &quot;Lorem ipsum dolor sit amet...&quot;으로 시작하기 때문에 모두 같아 보여요. 그래서 그것도 섞어야 해요. 아래 함수가 해결할 거예요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">shuffle</span><span class="token punctuation">(</span>array<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentIndex <span class="token operator">=</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">let</span> randomIndex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentIndex <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      randomIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> currentIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentIndex<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">[</span>array<span class="token punctuation">[</span>currentIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        array<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span><span class="token punctuation">,</span>
        array<span class="token punctuation">[</span>currentIndex<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> array<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 섞인 랜덤 길이의 텍스트로 접근할 거예요:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getRandomText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>textArray<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>textArray<span class="token punctuation">.</span>length <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
     <span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>대박이죠? 좀 더 활용해 볼까요? 최소-최대 또는 고정 단어 수를 추가하는 건 어떨까요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getRandomText</span><span class="token punctuation">(</span>length<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> min<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span> max<span class="token operator">?</span><span class="token operator">:</span> number <span class="token punctuation">}</span> <span class="token operator">|</span> number<span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">let</span> textArray <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>randomTextArr<span class="token punctuation">;</span>
  <span class="token keyword">const</span> minLength <span class="token operator">=</span> <span class="token keyword">typeof</span> length <span class="token operator">===</span> <span class="token string">'number'</span> <span class="token operator">?</span> length <span class="token operator">:</span> length<span class="token operator">?.</span>min <span class="token operator">??</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> maxLength <span class="token operator">=</span>
    <span class="token keyword">typeof</span> length <span class="token operator">===</span> <span class="token string">'number'</span> <span class="token operator">?</span> length <span class="token operator">:</span> length<span class="token operator">?.</span>max <span class="token operator">??</span> textArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>maxLength <span class="token operator">></span> textArray<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    textArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>textArray<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>randomTextArr<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span>textArray<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span>maxLength <span class="token operator">??</span> textArray<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>minLength <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
          <span class="token punctuation">(</span>minLength <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>멋지죠. 이제 여기처럼 사용할 수 있습니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRandomText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRandomText</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRandomText</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRandomText</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>텍스트 길이를 결정하는 논리는 랜덤 숫자를 생성하는 논리와 동일합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getRandomNumber</span><span class="token punctuation">(</span>config<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> min<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span> max<span class="token operator">?</span><span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">(</span>config<span class="token operator">?.</span>max <span class="token operator">??</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>config<span class="token operator">?.</span>min <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span>
      Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
      <span class="token punctuation">(</span>config<span class="token operator">?.</span>min <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>좋아요. 이제 날짜를 살펴볼까요?</p>
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
<p>랜덤한 날짜를 생성하려면 시작 날짜와 종료 날짜가 필요합니다. 저는 이렇게 했어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getRandomDate</span><span class="token punctuation">(</span>
    <span class="token literal-property property">start</span><span class="token operator">:</span> Date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'1970-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">end</span><span class="token operator">:</span> Date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Date <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>
    start<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>end<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>좋아요. 부울값에 대해서는 이렇게 간단하게 코드를 작성했어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getRandomBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">.5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>랜덤 이미지를 얻기 위해 Picsum Photos를 사용합니다. 이 함수는 지정된 너비와 높이로 Picum Photos에서 이미지를 다운로드할 수 있는 URL을 제공합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getRandomImageUrl</span><span class="token punctuation">(</span>
  config<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> number<span class="token punctuation">;</span> height<span class="token operator">:</span> number <span class="token punctuation">}</span> <span class="token operator">|</span> number<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">const</span> width <span class="token operator">=</span> <span class="token keyword">typeof</span> config <span class="token operator">===</span> <span class="token string">'number'</span> <span class="token operator">?</span> config <span class="token operator">:</span> config<span class="token operator">?.</span>width <span class="token operator">??</span> <span class="token number">200</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token keyword">typeof</span> config <span class="token operator">===</span> <span class="token string">'number'</span> <span class="token operator">?</span> config <span class="token operator">:</span> config<span class="token operator">?.</span>height <span class="token operator">??</span> <span class="token number">200</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://picsum.photos/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?workAround=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>workAround 매개변수를 사용하는 이유는 동일한 URL을 사용하여 Picsum Photos에 이미지를 요청할 때 동일한 이미지가 로드되는 것을 방지하는 것입니다. workAround를 사용하면 요청마다 고유한 이미지를 받을 수 있습니다.</p>
<p>이 접근 방법을 더 간편하게 사용하기 위해 해당 NPM 패키지를 만들었습니다. 아래 명령을 사용하여 프로젝트에 설치할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @skybluedev<span class="token operator">/</span>random<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 메소드들은 다음과 같이 접근할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> random <span class="token keyword">from</span> <span class="token string">'@skybluedev/random.js'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> randomText <span class="token operator">=</span> random<span class="token punctuation">.</span>string<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> randomNumber <span class="token operator">=</span> random<span class="token punctuation">.</span>number<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> randomBoolean <span class="token operator">=</span> random<span class="token punctuation">.</span>boolean<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> randomDate <span class="token operator">=</span> random<span class="token punctuation">.</span>date<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2023-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> randomImage <span class="token operator">=</span> random<span class="token punctuation">.</span>image<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>저는 이 라이브러리를 사용하여 제 Github의 해당 주소에서 방문할 수 있는 샘플 채팅 프로젝트에서 사용했습니다.</p>
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
<p><img src="@source/docs/Tech/2024-03-28-TestanddebugyourwebsiteUIwithrandomdata/img/TestanddebugyourwebsiteUIwithrandomdata_2.png" alt="테이블"></p>
</div></template>
