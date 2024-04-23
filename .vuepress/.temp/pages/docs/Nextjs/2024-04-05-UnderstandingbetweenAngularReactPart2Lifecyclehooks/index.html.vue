<template><div><img src="@source/docs/Nextjs/2024-04-05-UnderstandingbetweenAngularReactPart2Lifecyclehooks/img/UnderstandingbetweenAngular-ReactPart2Lifecyclehooks_0.png" />
<h2 id="앵귤러-리액트-이해-파트-2-라이프사이클-훅" tabindex="-1"><a class="header-anchor" href="#앵귤러-리액트-이해-파트-2-라이프사이클-훅" aria-hidden="true">#</a> 앵귤러 &amp; 리액트 이해 / 파트 2: 라이프사이클 훅</h2>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>라이프사이클 훅은 컴포넌트를 생성부터 소멸까지의 전 과정에서 작업할 수 있도록 해줍니다.</p>
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
<p>일부 로직을 수행하는 데 도움을 주는 것입니다. 컴포넌트의 특정 단계에서 로직을 수행하거나 업데이트, 로깅, 정리 등을 처리할 수 있습니다. 이들을 이용하면 코드가 더 간결하고 명확해지며 읽기 쉬워집니다. 훅은 보통 컴포넌트 코드의 시작 부분에 선언되기 때문에 컴포넌트가 어떤 로직을 수행하는지 즉시 확인할 수 있습니다.</p>
<h1 id="ngoninit-및-ngondestroy-훅의-구현" tabindex="-1"><a class="header-anchor" href="#ngoninit-및-ngondestroy-훅의-구현" aria-hidden="true">#</a> ngOnInit 및 ngOnDestroy 훅의 구현</h1>
<h2 id="초기-작업" tabindex="-1"><a class="header-anchor" href="#초기-작업" aria-hidden="true">#</a> 초기 작업</h2>
<p>시간이 지남에 따라 업데이트되는 &quot;스마트 컴포넌트&quot;의 예제를 살펴봅시다. 이러한 업데이트는 매 초 외부 스토어에서 발생합니다.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-UnderstandingbetweenAngularReactPart2Lifecyclehooks/img/UnderstandingbetweenAngular-ReactPart2Lifecyclehooks_1.png" alt="Understanding Between Angular and React Part 2 Lifecycle Hooks"></p>
<p>컴포넌트가 존재하는 한, 새 값으로 업데이트를 받기 위해 스토어에 연결되며, 컴포넌트가 소멸될 때는 스토어와의 연결이 끊깁니다.</p>
<p>RxJs Observable은 외부 스토어(store$)로 사용됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">store$</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
    <span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> v <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="angular-구현" tabindex="-1"><a class="header-anchor" href="#angular-구현" aria-hidden="true">#</a> Angular 구현</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'ng-lifecycle-hooks-init-destroy'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">standalone</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;p>Store의 값: { value() || '값 없음' }&lt;/p></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">changeDetection</span><span class="token operator">:</span> ChangeDetectionStrategy<span class="token punctuation">.</span>OnPush<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">InitDestroyComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span><span class="token punctuation">,</span> OnDestroy <span class="token punctuation">{</span>
  <span class="token keyword">public</span> value <span class="token operator">=</span> signal<span class="token operator">&lt;</span>number <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token literal-property property">sub</span><span class="token operator">:</span> Subscription <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subscription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> sub <span class="token operator">=</span> <span class="token function">store$</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>sub<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">ngOnDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하나씩 살펴보겠습니다:</p>
<ul>
<li>value — 스토어 이벤트에서 값을 템플릿으로 출력할 반응형 변수 (Signal)</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>공개 값 <span class="token operator">=</span> signal<span class="token operator">&lt;</span>number <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>ngOnInit는 Angular 훅으로, 컴포넌트가 준비되고 입력 및 출력의 속성 바인딩이 완료된 후 호출됩니다. 이 훅에서는 저장소에 구독을 수행하고 값에 새로운 값을 설정합니다.</li>
</ul>
<p>구독 자체는 클래스 속성 sub에 저장되며, 이 구독을 추적하고 관리하기 위해 Subscription 인스턴스에 전달됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">public</span> <span class="token literal-property property">sub</span><span class="token operator">:</span> Subscription <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subscription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> sub <span class="token operator">=</span> <span class="token function">store$</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
   <span class="token keyword">this</span><span class="token punctuation">.</span>sub<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ul>
<li>ngOnDestroy은 컴포넌트가 파괴될 때 호출되는 Angular 후크입니다.</li>
</ul>
<p>store$는 컴포넌트 바깥에 있고 항상 값들을 생성하기 때문에, 컴포넌트가 파괴될 때 store$에서 구독을 취소해야 합니다. 이를 하지 않으면 구독이 파괴된 후에도 여전히 존재하여 메모리 누수가 발생할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">public</span> <span class="token function">ngOnDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>sub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-구현" tabindex="-1"><a class="header-anchor" href="#react-구현" aria-hidden="true">#</a> React 구현</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">InitDestroyHooks</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> sub <span class="token operator">=</span> <span class="token function">store$</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
       <span class="token function">setValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>

   <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> sub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

 <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span> 스토어 값<span class="token operator">:</span> <span class="token punctuation">{</span>value <span class="token operator">||</span> <span class="token string">'값 없음'</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하나씩 살펴보겠습니다:</p>
<ul>
<li>Angular 컴포넌트와 비슷하게 템플릿에서 사용되는 value 변수가 있으며 자체 업데이트 함수가 있습니다. useState 훅을 사용합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ul>
<li>Angular 후크인 ngOnInit을 대체하려면(컴포넌트가 생성될 때 호출되는 후크로 렌더링 전에 호출됨) React 후크 useLayoutEffect를 빈 의존성 배열과 함께 사용하는 것이 좋은 선택입니다.</li>
</ul>
<p>빈 의존성 배열을 사용하면 후크가 컴포넌트가 마운트될 때 한 번만 호출된다고 React에 알릴 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token function">store$</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Angular 후크인 ngOnDestroy(컴포넌트를 파괴할 때 호출되는 후크)를 대체하려면 React 후크 useLayoutEffect에서 unsubscribe를 호출할 소멸자 함수를 반환하면 됩니다.</li>
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
<p>이 기능은 종속성이 변경될 때마다 호출될 것입니다. 그러나 종속성이 없기 때문에 이 기능은 컴포넌트가 마운트 해제될 때 한 번만 호출될 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> sub <span class="token operator">=</span> <span class="token function">store$</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span> <span class="token comment">//logic );</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> sub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="ngonchanges-훅의-구현" tabindex="-1"><a class="header-anchor" href="#ngonchanges-훅의-구현" aria-hidden="true">#</a> ngOnChanges 훅의 구현</h1>
<h2 id="초기-작업-1" tabindex="-1"><a class="header-anchor" href="#초기-작업-1" aria-hidden="true">#</a> 초기 작업</h2>
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
<p>저희가 서버에 입력 매개변수를 통해 요청을 보내고 결과를 표시하는 컴포넌트가 필요하다고 가정해 봅시다. 또한 매개변수가 변경될 수 있고 현재 요청을 취소해야 한다는 점도 고려해야 합니다.</p>
<img src="@source/docs/Nextjs/2024-04-05-UnderstandingbetweenAngularReactPart2Lifecyclehooks/img/UnderstandingbetweenAngular-ReactPart2Lifecyclehooks_2.png" />
<h2 id="angular-구현-1" tabindex="-1"><a class="header-anchor" href="#angular-구현-1" aria-hidden="true">#</a> Angular 구현</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'ng-lifecycle-hooks-change'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>Fetch result: &lt;pre>{ fetchResult() | json }&lt;/pre>&lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">changeDetection</span><span class="token operator">:</span> ChangeDetectionStrategy<span class="token punctuation">.</span>OnPush<span class="token punctuation">,</span>
  <span class="token literal-property property">standalone</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>JsonPipe<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ChangeComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnChanges</span> <span class="token punctuation">{</span>
  @<span class="token function">Input</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> id<span class="token operator">!</span><span class="token operator">:</span> number<span class="token punctuation">;</span>

  <span class="token keyword">private</span> idSubject$ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token operator">&lt;</span>number<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">private</span> fetchResult$ <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>idSubject$
   <span class="token punctuation">.</span><span class="token function">asObservable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">switchMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch$</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> fetchResult <span class="token operator">=</span> <span class="token function">toSignal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fetchResult$<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token function">ngOnChanges</span><span class="token punctuation">(</span>changes<span class="token operator">:</span> SimpleChanges<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">'id'</span> <span class="token keyword">in</span> changes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>idSubject$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fetch$</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>unknown<span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> ajax
    <span class="token punctuation">.</span>get<span class="token operator">&lt;</span>unknown<span class="token operator">></span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://jsonplaceholder.typicode.com/todos/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
      <span class="token function">take</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token operator">=></span> r<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>하나씩 처리해보겠습니다:</p>
<ul>
<li>입력 데이터에 응답하기 위해 부모 구성 요소와 상호 작용할 수 있는 @Input() 데코레이터를 사용하는 id 매개변수가 필요합니다. 데이터와 즉시 상호 작용하려면 required:true 플래그를 설정합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Input</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> 
id<span class="token operator">!</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>ngOnChanges는 Angular 후크로, 속성이 초기에 바운드될 때 첫 번째로 호출되며, 값 또는 참조에 의해 입력이 변경될 때(객체 및 배열의 경우) 추가로 호출됩니다. 입력이 변경되는 시점에 Angular는 변경된 입력 속성이 포함된 SimpleChanges 객체를 전달합니다.</li>
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
<p>이 경우에는 id 값이 변경되고 idSubject$ 스트림으로 전달되었는지 확인해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">private</span> idSubject$ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token operator">&lt;</span>number<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token function">ngOnChanges</span><span class="token punctuation">(</span>changes<span class="token operator">:</span> SimpleChanges<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">'id'</span> <span class="token keyword">in</span> changes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>idSubject$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>fetchResult$는 idSubject$로부터 상속된 스트림으로, 자체적으로 &quot;fetch 스트림&quot;을 생성합니다.</li>
</ul>
<p>switchMap 연산자는 id가 변경될 때 현재 요청을 취소하는 데 사용됩니다. 현재 내부 구독을 취소하고 fetch$로 새 구독을 생성합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>개인 fetchResult$ <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>idSubject$
 <span class="token punctuation">.</span><span class="token function">asObservable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">switchMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fetch$</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>fetch$ — API로 Ajax 요청을 실행하기 위한 RxJs 함수</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fetch$</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>unknown<span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> ajax
    <span class="token punctuation">.</span>get<span class="token operator">&lt;</span>unknown<span class="token operator">></span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://jsonplaceholder.typicode.com/todos/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
      <span class="token function">take</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token operator">=></span> r<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>fetchResult — 쿼리 결과를 템플릿에 출력하는 반응형 변수이며, 컴포넌트가 toSignal에 의해 파괴될 때 자동으로 구독이 취소됩니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>공개 fetchResult <span class="token operator">=</span> <span class="token function">toSignal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fetchResult$<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="react-구현-1" tabindex="-1"><a class="header-anchor" href="#react-구현-1" aria-hidden="true">#</a> React 구현</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">OnChangeProps</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">OnChange</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>OnChangeProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> id <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>fetchResult<span class="token punctuation">,</span> setFetchResult<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> abortController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
            <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://jsonplaceholder.typicode.com/todos/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">signal</span><span class="token operator">:</span> abortController<span class="token punctuation">.</span>signal <span class="token punctuation">}</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">setFetchResult</span><span class="token punctuation">(</span><span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'AbortError'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> abortController<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        Fetch result<span class="token operator">:</span> <span class="token operator">&lt;</span>pre<span class="token operator">></span><span class="token punctuation">{</span>fetchResult<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>pre<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Props 및 useState는 이전에 다루었으므로 남은 로직을 해석하는 것만 남았습니다:</p>
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
<ul>
<li>Angular의 ngOnChanges를 대체하고 입력 매개변수의 변화에 반응하는 후크를 변경하려면 React 후크 useLayoutEffect를 선언하고, 감시해야 할 필수 매개변수를 나열하면 됩니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 여기에 로직 작성</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>React에는 흐름 제어를 위한 RxJs 연산자가 없지만 (RxJs를 사용할 수 있음), 모든 Ajax 요청은 기본 Promise에 작동하기 때문에 요청을 취소하려면 React에서 AboutController를 사용할 수 있습니다.</li>
</ul>
<p>각 id 입력 매개변수에서 후크가 다시 시작될 때마다, EffectCallback에는 cleanup 함수() =<code v-pre> abortController.abort()</code>가 호출되며, 새 요청을 취소하기 위해 signal signal: abortController.signal을 생성합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> abortController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">signal</span><span class="token operator">:</span> abortController<span class="token punctuation">.</span>signal <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// …</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> abortController<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>useLayoutEffect</code>은 동기 함수만 <code v-pre>EffectCallback</code>으로 허용하기 때문에, 후크 안의 비동기 부분은 별도의 비동기 함수에서 실행하는 것이 좋습니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// async logic</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>요청 실행 과정을 마칩니다. <code v-pre>AbortController</code>가 요청을 오류로 취소하므로, 요청 실행 로직을 <code v-pre>try/catch</code>로 감싸서 요청 오류의 원인을 제대로 식별하는 것이 좋은 관행으로 여겨집니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://jsonplaceholder.typicode.com/todos/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">signal</span><span class="token operator">:</span> abortController<span class="token punctuation">.</span>signal <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setFetchResult</span><span class="token punctuation">(</span><span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'AbortError'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="ngafterviewinit-훅-구현" tabindex="-1"><a class="header-anchor" href="#ngafterviewinit-훅-구현" aria-hidden="true">#</a> ngAfterViewInit 훅 구현</h1>
<h2 id="초기-작업-2" tabindex="-1"><a class="header-anchor" href="#초기-작업-2" aria-hidden="true">#</a> 초기 작업</h2>
<p>자식 엘리먼트들 중 일부 <code v-pre>input/</code>에 autofocus를 설정하고, 프로그래밍 방식으로도 포커스를 제공할 수 있는 컴포넌트를 만들고자 한다고 상상해보세요</p>
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
<p>이 구현의 특이점은 입력 필드의 하위 요소가 다른 구성 요소에 속해 있고 이 구성 요소는 포커스 속성을 사용하지 않고도 작동해야 한다는 것입니다. 왜냐하면 포커스가 필요하지 않은 애플리케이션의 다른 부분에서 이용되기 때문입니다.</p>
<p>결과적으로 부모 구성 요소에서 자식 구성요소인 입력 요소에 포커스를 조절해야 하는 두 가지 상황이 있습니다:</p>
<ul>
<li>구성 요소를 렌더링할 때</li>
<li>일부 이벤트(버튼)로 입력 필드에 수동으로 포커스를 맞출 때</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-UnderstandingbetweenAngularReactPart2Lifecyclehooks/img/UnderstandingbetweenAngular-ReactPart2Lifecyclehooks_3.png" alt="이미지"></p>
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
<h2 id="angular-구현-2" tabindex="-1"><a class="header-anchor" href="#angular-구현-2" aria-hidden="true">#</a> Angular 구현</h2>
<ul>
<li>자식 컴포넌트</li>
</ul>
<p>우선, 인풋 필드를 가진 자식 컴포넌트를 구현하고 코드에서 해당 필드에 액세스할 수 있도록 합시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'ng-after-view-init-child'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">standalone</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;div style="padding: 4px 8px; border: 1px solid #acacac">
      &lt;label for="child-input">자식 입력 &lt;/label>
      &lt;input #inputRef type="text" id="child-input">
    &lt;/div>
  </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AfterViewInitChildComponent</span> <span class="token punctuation">{</span>
  @<span class="token function">ViewChild</span><span class="token punctuation">(</span><span class="token string">'inputRef'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">read</span><span class="token operator">:</span> ElementRef<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token literal-property property">inputRef</span><span class="token operator">:</span> ElementRef<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token operator">?.</span>nativeElement<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>한 가지씩 짚어 보겠습니다:</p>
<ul>
<li>Angular에서 @ViewChild 데코레이터는 적절한 셀렉터를 전달하여 컴포넌트 템플릿 내의 HTML 요소, 컴포넌트 또는 디렉티브에 액세스하는 데 사용됩니다.</li>
</ul>
<p>이 경우 inputRef 셀렉터를 사용합니다. read: ElementRef<code v-pre>HTMLInputElement</code> 설정은 Angular이 수신한 참조를 지정된 인터페이스로 캐스팅할 수 있도록 추가로 사용됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">ViewChild</span><span class="token punctuation">(</span><span class="token string">'inputRef'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">read</span><span class="token operator">:</span> ElementRef<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">private</span> <span class="token literal-property property">inputRef</span><span class="token operator">:</span> ElementRef<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
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
<ul>
<li>ViewChild 데코레이터에서 지정된 템플릿 변수 #inputRef에 해당하는 식별자를 네이티브 엘리먼트에 추가해야 합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input #inputRef type<span class="token operator">=</span><span class="token string">"text"</span> id<span class="token operator">=</span><span class="token string">"child-input"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>컴포넌트의 캡슐화를 존중하기 위해 컴포넌트로부터 요소 참조 자체가 아닌 초점을 맞추는 메서드만 제공될 것입니다.</li>
</ul>
<p>Angular 컴포넌트는 모두 클래스이므로, 이는 쉽게 private 및 public 접근 한정자로 강제할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">private</span> <span class="token literal-property property">inputRef</span><span class="token operator">:</span> ElementRef<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token operator">?.</span>nativeElement<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>부모 컴포넌트</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'ng-after-view-init-parent'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">standalone</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;div>
      &lt;span>Parent component &lt;/span>
      &lt;button (click)="onClick()" style="margin: 4px 0">manual focus&lt;/button>
    &lt;/div>
    
    &lt;ng-after-view-init-child #childRef>&lt;/ng-after-view-init-child>
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>AfterViewInitChildComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AfterViewInitParentComponent</span> <span class="token keyword">implements</span> <span class="token class-name">AfterViewInit</span> <span class="token punctuation">{</span>
  @<span class="token function">ViewChild</span><span class="token punctuation">(</span><span class="token string">'childRef'</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token literal-property property">childRef</span><span class="token operator">:</span> AfterViewInitChildComponent <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token function">ngAfterViewInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">focusChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">focusChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function">focusChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>childRef<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하나씩 짚어볼까요:</p>
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
<ul>
<li>컴포넌트에 대한 참조를 얻으려면 템플릿 변수 대신 &quot;컴포넌트 클래스&quot;를 전달하여 익숙한 @ViewChild 데코레이터를 사용하면 됩니다.</li>
</ul>
<p>앵귤러는 자동으로 어떤 유형의 요소인지 파악하고 AfterViewInitChildComponent 유형으로 캐스팅합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">ViewChild</span><span class="token punctuation">(</span>AfterViewInitChildComponent<span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token literal-property property">childRef</span><span class="token operator">:</span> AfterViewInitChildComponent <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>부모 컴포넌트가 자식 컴포넌트에 포커스를 맞추려면 초기 렌더링이 모두 완료되기를 기다리고 템플릿에서 컴포넌트에 대한 참조를 얻어야 합니다. ngAfterViewInit 훅이 이를 도와줄 수 있습니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">public</span> <span class="token function">ngAfterViewInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">focusChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token function">focusChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>childRef<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>button/</code>를 통한 수동 포커스용 핸들러 함수</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 템플릿</span>
<span class="token operator">&lt;</span><span class="token function">button</span> <span class="token punctuation">(</span>click<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">"onClick()"</span> style<span class="token operator">=</span><span class="token string">"margin: 4px 0"</span><span class="token operator">></span>수동 포커스<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token comment">// 클래스</span>
<span class="token keyword">public</span> <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">focusChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-구현-2" tabindex="-1"><a class="header-anchor" href="#react-구현-2" aria-hidden="true">#</a> React 구현</h2>
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
<p>리액트에서 대부분의 컴포넌트는 함수로 개발되므로 클래스나 접근 한정자 같은 개념들은 고려되지 않습니다. 또한 템플릿 변수의 개념도 없습니다.</p>
<ul>
<li>자식 컴포넌트</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">interface</span> <span class="token class-name">ChildHandle</span> <span class="token punctuation">{</span>
  <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ChildComponent <span class="token operator">=</span> forwardRef<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChildHandle</span></span><span class="token punctuation">></span></span><span class="token plain-text">((_, ref) => </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> inputRef <span class="token operator">=</span> useRef<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">HTMLInputElement</span></span><span class="token punctuation">></span></span><span class="token plain-text">(null);

  useImperativeHandle(ref, () => (</span><span class="token punctuation">{</span>
      <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        inputRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">), []);

  return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">'4px 8px'</span><span class="token punctuation">,</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">'1px solid #acacac'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">htmlFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child-input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Child input</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child-input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
  );
});
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>한 가지씩 살펴보겠습니다:</p>
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
<ul>
<li>Angular 컴포넌트와 같이 React에서도 템플릿의 요소에 대한 inputRef 참조를 얻어야 합니다. React는 이러한 경우를 위해 초기 값이 null인 React 훅 useRef를 사용합니다. React는 바인딩 방법으로 예약된 요소 속성 ref를 제공합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> inputRef <span class="token operator">=</span> useRef<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// …</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
   <span class="token operator">&lt;</span>input ref<span class="token operator">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>input<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>컴포넌트 함수가 있기 때문에, 이 함수 내부의 메서드들은 캡슐화되어 다른 부모 컴포넌트에서 접근할 수 없습니다.</li>
</ul>
<p>이 함수 내부의 메서드에 &quot;접근&quot;할 수 있도록 만들기 위해 React 훅 useImperativeHandle을 사용해야 합니다. 이것은 외부에서 컴포넌트를 다루기 위한 공개 메서드를 제공하는 곳입니다. 이 훅은 부모 컴포넌트로부터 ref 참조를 현재 컴포넌트의 메서드와 바인딩합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">useImperativeHandle</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
     inputRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Ref 참조는 매개변수가 아니라 별도로 예약된 변수이지만, 일반 React 컴포넌트에서 사용할 수 없습니다.</li>
</ul>
<p>컴포넌트가 ref를 받아들이려면 이 매개변수를 상호 작용할 수 있도록 제공해주는 forwardRef HoC 함수로 래핑해야 합니다. ref를 타입으로 선언하려면 ChildHandle 인터페이스를 만들었습니다. 이 인터페이스는 컴포넌트에서 해당 참조로 반환될 올바른 메소드가 있는 객체를 선언합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">ChildHandle</span> <span class="token punctuation">{</span>
  <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ChildComponent <span class="token operator">=</span> forwardRef<span class="token operator">&lt;</span>ChildHandle<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//…</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ul>
<li>Parent component</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">ParentComponent</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> childRef <span class="token operator">=</span> useRef<span class="token operator">&lt;</span>ChildHandle<span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">focusChild</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    childRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">focusChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">focusChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>Parent component <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'4px 0'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
          수동 포커스
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

      <span class="token operator">&lt;</span>ChildComponent ref<span class="token operator">=</span><span class="token punctuation">{</span>childRef<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ChildComponent<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하나씩 알아보겠습니다:</p>
<ul>
<li>HTML 요소에 대한 참조를 얻는 것과 유사하게, forwardRef 덕분에 useRef 훅을 통해 자식 컴포넌트에 대한 참조를 얻을 수 있고, ref={childRef}를 통해 상속함</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> childRef <span class="token operator">=</span> useRef<span class="token operator">&lt;</span>ChildHandle<span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token comment">// …</span>
  <span class="token operator">&lt;</span>ChildComponent ref<span class="token operator">=</span><span class="token punctuation">{</span>childRef<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ChildComponent<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Angular 후크 ngAfterViewInit을 대체하기 위해 (이 후크는 컴포넌트를 렌더링한 후 호출되며 엘리먼트에 엑세스할 수 있게 함), React 후크인 useEffect를 사용할 것입니다.</li>
</ul>
<p>useLayoutEffect와 유사하게, 컴포넌트가 마운트될 때 후크가 한 번만 작동하도록 하고 싶어 빈 의존성 배열을 전달했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">focusChild</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  childRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">focusChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ul>
<li><code v-pre>button/</code>을 통한 수동 포커스 처리를 위한 핸들러 함수</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">focusChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token comment">// template</span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'4px 0'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
      manual focus
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="놓친-훅" tabindex="-1"><a class="header-anchor" href="#놓친-훅" aria-hidden="true">#</a> 놓친 훅</h1>
<p>일부 Angular 훅을 놓친 것 같아요. React 컴포넌트에서 이를 적응하는 예제도 제공할게요:</p>
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
<h2 id="ngdocheck" tabindex="-1"><a class="header-anchor" href="#ngdocheck" aria-hidden="true">#</a> ngDoCheck</h2>
<p>이 훅은 각 변경 확인 주기 뒤에 호출됩니다. 만약 그 이유가 있다면 그 자체 변경 확인을 위해 사용됩니다. 이것은 Angular 앱에서 거의 사용되지 않는 &quot;비용이 많이든&quot; 훅입니다. 다른 팀을 위해 도구를 개발하고 있지 않다면 사용하지 않는 것이 좋습니다.</p>
<p>React에서의 대안은 HoC-function memo입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MemoizedComponent <span class="token operator">=</span> <span class="token function">memo</span><span class="token punctuation">(</span>YourComponent<span class="token punctuation">,</span> comparePropsFn<span class="token operator">?</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p><code v-pre>useLayoutEffect</code>를 사용하여 EffectCallback 함수 만들기</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 로직</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ngafterviewchecked" tabindex="-1"><a class="header-anchor" href="#ngafterviewchecked" aria-hidden="true">#</a> ngAfterViewChecked</h2>
<p>이 훅은 컴포넌트가 렌더링될 때마다 호출됩니다. 템플릿에서 동적 요소에 대한 참조를 추적하기 위해 필요합니다.</p>
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
<p>리액트에서 대체재는 useRef 엔티티로 구성된 의존성 배열을 전달하는 useEffect입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> dynamicRef <span class="token operator">=</span> useRef<span class="token operator">&lt;</span>unknown<span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// AfterViewCheckedFn</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>dynamicRef<span class="token punctuation">.</span>current<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ngaftercontentinit-및-ngaftercontentchecked" tabindex="-1"><a class="header-anchor" href="#ngaftercontentinit-및-ngaftercontentchecked" aria-hidden="true">#</a> ngAfterContentInit 및 ngAfterContentChecked</h2>
<p>프로젝트된 콘텐츠와 함께 작업하는 후크입니다. 현대적인 개발에서는 이를 사용할 필요가 없을 겁니다.</p>
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
<p>Angular에서는 ContentChild 또는 ContentChildren 데코레이터만 사용하면 템플릿에서 요소를 재사용하기 위해 프로젝트된 요소에 액세스할 수 있습니다.</p>
<p>React에서는 프로젝트된 요소에 미리 접근이 가능하며 입력 프롭(children)을 통해 전달됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">SomeComponent</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>PropsWithChildren<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>children<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token comment">// 템플릿</span>
    <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
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
<p>이 기사의 범위는 여러 가지 Angular 훅 및 그것들을 React 훅으로 대체하는 방법을 다루고 있습니다. 구체적으로는 다음과 같습니다:</p>
<ul>
<li>ngOnInit - 빈 종속성 배열을 사용하여 <code v-pre>useLayoutEffect</code></li>
<li>ngOnDestroy - 소멸자 반환으로 <code v-pre>useLayoutEffect</code></li>
<li>ngOnChanges - 입력 프로퍼티의 종속성 배열을 사용하여 <code v-pre>useLayoutEffect</code></li>
<li>ngDoCheck - 어떤 종속성도 없이 <code v-pre>useLayoutEffect</code></li>
<li>ngAfterViewInit - 빈 종속성 배열을 사용하여 <code v-pre>useEffect</code></li>
<li>ngAfterViewChecked - ref 변수의 종속성 배열을 사용하여 <code v-pre>useEffect</code></li>
</ul>
<p>Angular는 우리에게 말합니다 — &quot;각 라이프사이클 이벤트에 적절한 훅을 사용해야 합니다.&quot;</p>
<p>React는 우리에게 말합니다 — &quot;컴포넌트에서 동기적 및 비동기적으로 로직을 실행하는 방법을 제공해주지만, 언제 실행할지는 당신이 선택해야 합니다.&quot;</p>
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
<p>한편, 리액트는 모든 경우를 다룰 수 있는 최소한의 도구상자를 갖추고 있어 선호되는 모습을 보입니다. 그러나, 이 &quot;유연성&quot;을 어떻게 활용해야 하는지 모른다면 오류를 일으킬 수도 있습니다.</p>
<h1 id="챕터" tabindex="-1"><a class="header-anchor" href="#챕터" aria-hidden="true">#</a> 챕터</h1>
<h2 id="다음" tabindex="-1"><a class="header-anchor" href="#다음" aria-hidden="true">#</a> 다음</h2>
<p>미정: 앵귤러와 리액트 사이의 이해. 제3부: 서비스 및 프로바이더</p>
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
<h2 id="독서-목록" tabindex="-1"><a class="header-anchor" href="#독서-목록" aria-hidden="true">#</a> 독서 목록</h2>
<h1 id="저장소" tabindex="-1"><a class="header-anchor" href="#저장소" aria-hidden="true">#</a> 저장소</h1>
</div></template>
