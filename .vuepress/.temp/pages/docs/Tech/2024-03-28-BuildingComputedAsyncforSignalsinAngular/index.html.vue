<template><div><h2 id="angular에서-signals와-rxjs를-사용하여-비동기-작업-처리하기" tabindex="-1"><a class="header-anchor" href="#angular에서-signals와-rxjs를-사용하여-비동기-작업-처리하기" aria-hidden="true">#</a> Angular에서 Signals와 Rxjs를 사용하여 비동기 작업 처리하기</h2>
<img src="@source/docs/Tech/2024-03-28-BuildingComputedAsyncforSignalsinAngular/img/BuildingComputedAsyncforSignalsinAngular_0.png" />
<h2 id="약간의-역사" tabindex="-1"><a class="header-anchor" href="#약간의-역사" aria-hidden="true">#</a> 약간의 역사</h2>
<p>Angular에서 비동기 작업 처리는 항상 Observables의 역할이었습니다. Observables은 비동기 작업을 처리하는 좋은 방법입니다. 그러나 Angular에서 Signals가 도입되면서 모든 사람들이 모든 것에 Signals를 사용하려고 합니다. 하지만 Signals는 비동기 작업을 처리하기 위해 고안된 것이 아닙니다. Signals는 값을 처리하는 데 있어서 이벤트가 아닙니다. 그렇다면 Signals를 사용하여 비동기 작업을 어떻게 처리할까요? 함께 알아봅시다.</p>
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
<h2 id="동기부여" tabindex="-1"><a class="header-anchor" href="#동기부여" aria-hidden="true">#</a> 동기부여</h2>
<p>API 호출에 대한 간단한 예제를 사용하겠습니다. API를 호출하고 데이터를 표시하는 컴포넌트가 있다고 가정해 봅시다. API 호출을 하기 위해 <code v-pre>HttpClient</code>를 사용할 것입니다. <code v-pre>HttpClient</code>는 우리가 구독하고 데이터를 얻을 수 있는 <code v-pre>Observable</code>을 반환합니다. Signals를 사용하여 이를 어떻게 처리할 수 있는지 보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserComponent</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> imagesService <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>ImagesService<span class="token punctuation">)</span><span class="token punctuation">;</span>

  user <span class="token operator">=</span> input<span class="token punctuation">.</span>required<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  favoriteImages <span class="token operator">=</span> signal<span class="token operator">&lt;</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>imagesService<span class="token punctuation">.</span><span class="token function">getImages</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>favoriteImages<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">images</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>favoriteImages<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>images<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드를 보시다시피, 내장된 반응성을 사용하기 위해 신호 입력도 사용하고 있습니다.</p>
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
<p>하지만, 우리는 구독 취소 부분을 다루지 않습니다. 따라서 수동으로 그 부분을 처리해야 합니다. effect 함수에는 매번 실행될 때 호출되는 콜백 함수가 포함되어 있습니다. 이를 사용하여 구독을 취소할 수 있습니다.</p>
<p>다음은 이를 수행하는 방법입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserComponent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// onCleanup은 효과가 실행될 때마다 호출되는 콜백 함수입니다</span>
    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">onCleanup</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
      <span class="token keyword">const</span> sub <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>imagesService<span class="token punctuation">.</span><span class="token function">getImages</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>favoriteImages<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">images</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>favoriteImages<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>images<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">onCleanup</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> sub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 구독 취소</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>요약하면, 위의 코드에서 무슨 일이 일어나는지에 대해요.</p>
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
<li><code v-pre>user</code> 입력이 변경될 때마다 실행될 효과를 등록합니다.</li>
<li>효과는 기본적으로 적어도 한 번 실행되므로 초기 API 호출을 수행합니다.</li>
<li><code v-pre>user</code> 입력이 변경될 때마다 효과가 다시 실행됩니다.</li>
<li>효과가 다시 실행될 때마다 onCleanup 함수가 전달된 콜백 함수를 호출합니다.</li>
<li>우리의 콜백 함수는 이전 구독을 해지합니다. (따라서 RxJS의 'switchMap' 연산자처럼 동작합니다)</li>
<li>API 호출이 완료되면 <code v-pre>favoriteImages</code> 신호의 값이 설정됩니다.</li>
</ul>
<h2 id="문제" tabindex="-1"><a class="header-anchor" href="#문제" aria-hidden="true">#</a> 문제</h2>
<p>위 예시에서 시도하고 있는 것은 사용자 <code v-pre>favoriteImages</code> ID에 기반한 파생 상태를 갖는 것입니다. 그래서 효과를 사용하는 것이 이 작업을 하는 간단한 방법이 아닐 수 있습니다. 또는 우리가 구독을 해지하는 것을 잊어버릴 수 있습니다.</p>
<p>다른 해결책으로 <code v-pre>toObservable</code> 도우미 함수를 사용하는 것이 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserComponent</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> imagesService <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>ImagesService<span class="token punctuation">)</span><span class="token punctuation">;</span>

  user <span class="token operator">=</span> input<span class="token punctuation">.</span>required<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  favoriteImages <span class="token operator">=</span> <span class="token function">toSignal</span><span class="token punctuation">(</span><span class="token function">toObservable</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
    <span class="token function">switchMap</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>imagesService<span class="token punctuation">.</span><span class="token function">getImages</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>favoriteImages<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">initialValue</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 방법은 더 나은 해결책이지만 완벽하지는 않아요. 다른 입력 항목을 추가해야 하는 경우에는 어떻게 해야 할까요? API 호출에 포함해야 한다면 <code v-pre>combineLatest</code> 연산자를 사용해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserComponent</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> imagesService <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>ImagesService<span class="token punctuation">)</span><span class="token punctuation">;</span>

  user <span class="token operator">=</span> input<span class="token punctuation">.</span>required<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  otherInput <span class="token operator">=</span> input<span class="token punctuation">.</span>required<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  favoriteImages <span class="token operator">=</span> <span class="token function">toSignal</span><span class="token punctuation">(</span><span class="token function">combineLatest</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token function">toObservable</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">toObservable</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>otherInput<span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
    <span class="token function">switchMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>user<span class="token punctuation">,</span> otherInput<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>imagesService<span class="token punctuation">.</span><span class="token function">getImages</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>favoriteImages<span class="token punctuation">,</span> otherInput<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">initialValue</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 되면 코드가 빠르게 복잡해지죠! 점점 더 많은 rxjs 연산자가 포함되면서 <code v-pre>toObservable</code>와 <code v-pre>toSignal</code>을 모든 곳에 사용해야 해요.</p>
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
<p>할 수 있어요!</p>
<h1 id="computedasync-빌드하기" tabindex="-1"><a class="header-anchor" href="#computedasync-빌드하기" aria-hidden="true">#</a> ComputedAsync 빌드하기</h1>
<p>우리는 <code v-pre>computedAsync</code> 함수가 <code v-pre>computed</code> 함수처럼 동작하되 비동기 작업을 처리해야 한다는 것을 원합니다. 기본적으로 비동기 작업의 값을 가진 신호를 반환해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>favoriteImages <span class="token operator">=</span> <span class="token function">computedAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> 
  <span class="token keyword">this</span><span class="token punctuation">.</span>imagesService<span class="token punctuation">.</span><span class="token function">getImages</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>favoriteImages<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>우리는 observable(또는 promise)을 반환하고, <code v-pre>computedAsync</code> 함수가 해당 구독 및 구독 해지를 처리하도록 하고 싶어요.</p>
<h2 id="콜백-함수-처리" tabindex="-1"><a class="header-anchor" href="#콜백-함수-처리" aria-hidden="true">#</a> 콜백 함수 처리</h2>
<p>개발자가 observable이나 promise를 전달하거나 일반 값만 전달할 수 있도록 하고 싶어요. 따라서 모든 경우를 처리해야 해요.</p>
<p>다음은 가능한 경우들입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>유형 ComputationResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">=</span> Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">|</span> Observable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>콜백 함수를 받아들이고 Signal을 반환하고 싶습니다. 따라서, <code v-pre>ComputationResult&lt;T&gt;</code>를 반환할 콜백 함수를 받아들일 필요가 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> computedAsync<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>
    <span class="token function-variable function">computation</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ComputationResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Signal<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="현재-값과-결과-처리하기" tabindex="-1"><a class="header-anchor" href="#현재-값과-결과-처리하기" aria-hidden="true">#</a> 현재 값과 결과 처리하기</h2>
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
<p>현재 값 처리와 계산 결과 반환을 해야 합니다. 현재 값 처리에는 <code v-pre>WritableSignal</code>을 사용하고, 계산 결과를 반환하기 위해 계산된 시그널을 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> computedAsync<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>
    <span class="token function-variable function">computation</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ComputationResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Signal<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> sourceValue <span class="token operator">=</span> signal<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">sourceValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="계산-처리하기" tabindex="-1"><a class="header-anchor" href="#계산-처리하기" aria-hidden="true">#</a> 계산 처리하기</h2>
<p>계산에는 시그널이 포함되므로 시그널 변경을 감시하는 유일한 방법인 <code v-pre>effect</code>를 사용해 계산을 처리해야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isObservable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'rxjs'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> computedAsync<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>
    <span class="token function-variable function">computation</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ComputationResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Signal<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> sourceValue <span class="token operator">=</span> signal<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">computation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 계산 결과를 저장</span>

    <span class="token comment">// 값이 observable이거나 promise 또는 일반 값인 경우 처리</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObservable</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPromise</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO: observable 및 promise 처리</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO: 일반 값 처리</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">sourceValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 값이 promise인지 확인하는 도우미 함수</span>
<span class="token keyword">function</span> isPromise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>value<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> value is Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> value <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value<span class="token punctuation">.</span>then <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그러나 <code v-pre>effect</code>는 <code v-pre>DestroyRef</code> 토큰에 의존하므로 주입 컨텍스트에 있어야 하거나 주입기를 전달해야 합니다. 이 부분을 처리해보겠습니다.</p>
<h2 id="주입-컨텍스트-처리" tabindex="-1"><a class="header-anchor" href="#주입-컨텍스트-처리" aria-hidden="true">#</a> 주입 컨텍스트 처리</h2>
<p><code v-pre>ngxtension</code> 라이브러리에 포함된 Chau Tran이 만든 <code v-pre>assertInjector</code> 도우미 함수를 사용하겠습니다.</p>
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
<p><code v-pre>assertInjector</code> 함수는 인젝터가 제공되었는지 확인하고, 제공되지 않았다면 오류를 발생시킵니다. 세 번째 인수에는 인젝션 컨텍스트에서 호출될 콜백 함수를 전달할 수 있습니다.</p>
<p><code v-pre>ComputedAsyncOptions</code> 인터페이스를 만들어봅시다. 이 인터페이스는 인젝터와 동일한 함수를 포함하는 <code v-pre>computed</code> 함수와 동일한 함수를 포함할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">ComputedAsyncOptions</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token keyword">extends</span> <span class="token class-name">CreateComputedOptions</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
  injector<span class="token operator">?</span><span class="token operator">:</span> Injector<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 <code v-pre>assertInjector</code> 함수를 사용할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> computedAsync<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>
    <span class="token function-variable function">computation</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ComputationResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">,</span>
    options<span class="token operator">?</span><span class="token operator">:</span> ComputedAsyncOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Signal<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">assertInjector</span><span class="token punctuation">(</span>computedAsync<span class="token punctuation">,</span> options<span class="token operator">?.</span>injector<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기서는 effect 및 inject 함수를 안전하게 사용할 수 있습니다. 왜냐하면 주입 컨텍스트 안에 있기 때문입니다.</span>
     <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* ...  */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">injector</span><span class="token operator">:</span> options<span class="token operator">?.</span>injector <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="구독-처리" tabindex="-1"><a class="header-anchor" href="#구독-처리" aria-hidden="true">#</a> 구독 처리</h2>
<p>현재 값 처리를 위해 <code v-pre>sourceValue</code> 시그널이 있는 것처럼, 구독 처리를 위해 <code v-pre>sourceEvent$</code> 옵저버블이 필요합니다. 구독을 처리하기 위해 <code v-pre>Subject</code>를 사용할 것입니다.</p>
<p><code v-pre>sourceEvent$</code>의 값은 promise 또는 observable이어야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> sourceEvent$ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token operator">&lt;</span>Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">|</span> Observable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>sourceEvent$</code>를 구독하고 <code v-pre>sourceValue</code> 신호의 값을 설정합시다.</p>
<p>또한 우리는 observable을 펼쳐야하기 때문에 조심해야 합니다. 왜냐하면 우리는 <code v-pre>sourceEvent$</code>에 observable 또는 promise를 전달할 것이기 때문입니다.</p>
<p>그래서 observable을 펼치기 위해 <code v-pre>switchMap</code> 연산자를 사용하겠습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> sourceResult <span class="token operator">=</span> sourceEvent$
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">switchMap</span><span class="token punctuation">(</span><span class="token parameter">s$</span> <span class="token operator">=></span> s$<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// source$가 값을 방출할 때 sourceValue 시그널의 값을 설정합니다</span>
        <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> sourceValue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// 참고: 오류는 사용자에 의해 처리되어야 합니다 (catchError 또는 .catch()를 사용함)</span>
            sourceValue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>switchMap(s$ =&gt; s$)</code>를 <code v-pre>switchAll()</code> 연산자로 대체할 수 있습니다.</p>
<p>Petrus Nguyễn Thái Học와 Lucas Garcia에게 그것을 지적해 줘서 감사합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> sourceResult <span class="token operator">=</span> sourceEvent$
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">switchAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h2 id="구독-정리하기" tabindex="-1"><a class="header-anchor" href="#구독-정리하기" aria-hidden="true">#</a> 구독 정리하기</h2>
<p>우리는 <code v-pre>sourceEvent$</code> observable을 구독했기 때문에 구독을 해제해야 합니다. 이를 처리하기 위해 <code v-pre>DestroyRef</code> 토큰을 사용할 수 있습니다. <code v-pre>DestroyRef</code>는 <code v-pre>onDestroy</code> 메서드를 가지고 있어서, 우리가 구성요소가 파괴될 때 해당 콜백 함수를 호출하게 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> computedAsync<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>
    <span class="token function-variable function">computation</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ComputationResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">,</span>
    options<span class="token operator">?</span><span class="token operator">:</span> ComputedAsyncOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Signal<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">assertInjector</span><span class="token punctuation">(</span>computedAsync<span class="token punctuation">,</span> options<span class="token operator">?.</span>injector<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> destroyRef <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>DestroyRef<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> sourceEvent$ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token operator">&lt;</span>Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">|</span> Observable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> sourceResult <span class="token operator">=</span> source$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    destroyRef<span class="token punctuation">.</span><span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      sourceResultSubcription<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기까지입니다! 값 얻기 위해 구독하고, 구성요소가 파괴될 때 구독을 해제합니다.</p>
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
<h2 id="계산된-observable-또는-promise-다루기" tabindex="-1"><a class="header-anchor" href="#계산된-observable-또는-promise-다루기" aria-hidden="true">#</a> 계산된 Observable 또는 Promise 다루기</h2>
<p>현재 <code v-pre>computedAsync</code> 함수는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> computedAsync<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>
    <span class="token function-variable function">computation</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ComputationResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">,</span>
    options<span class="token operator">?</span><span class="token operator">:</span> ComputedAsyncOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Signal<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">assertInjector</span><span class="token punctuation">(</span>computedAsync<span class="token punctuation">,</span> options<span class="token operator">?.</span>injector<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> destroyRef <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>DestroyRef<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> sourceValue <span class="token operator">=</span> signal<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> sourceEvent$ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token operator">&lt;</span>Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">|</span> Observable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">computation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 연산 결과 저장</span>

        <span class="token comment">// 결과가 Observable이거나 Promise 또는 일반 값이면 처리</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObservable</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPromise</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// TODO: Observable 및 Promise 처리</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// TODO: 일반 값 처리</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> sourceResult <span class="token operator">=</span> sourceEvent$
        <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">switchAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> sourceValue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> sourceValue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    destroyRef<span class="token punctuation">.</span><span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      sourceResultSubcription<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">sourceValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드의 TODO를 처리해봅시다.</p>
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
<p>먼저 일반 값 케이스를 처리해 봅시다. <code v-pre>sourceValue</code> 시그널의 값을 설정하면 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">computation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 계산 결과를 저장합니다.</span>

  <span class="token comment">// 결과가 observable이거나 promise이거나 일반 값인 경우를 처리합니다.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObservable</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPromise</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO: observable 및 promise 처리</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      sourceValue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 오류를 발생시킬 것입니다. 왜냐하면 효과 내에서 시그널의 값을 설정하기 전에, 효과를 위해 먼저 활성화해야하기 때문입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">allowSignalWrites</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 시그널 쓰기 허용</span>
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
<p>하지만, 이 문제를 해결할 또 다른 방법이 있습니다. 우리는 <code v-pre>untracked</code> 함수를 사용하여 시그널의 값을 설정할 수 있습니다. 여기서 효과를 활성화하지 않고 값만 설정하는 거죠 (이는 사실상 위의 코드와 동일한 작업을 합니다). 이 속임수에 대해 더 읽어보세요.</p>
<p>이렇게 사용해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">untracked</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> sourceValue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Observable 및 promise 케이스를 처리해 봅시다. 시그널에서 값 설정과 마찬가지로, 우리는 <code v-pre>sourceEvent$</code> observable로 <code v-pre>next</code>를 해주어야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">효과</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">계산</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 계산 결과를 저장합니다.</span>

    <span class="token comment">// 값이 observable이거나 promise 또는 일반 값인 경우 결과를 처리합니다.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObservable</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPromise</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sourceEvent$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">untracked</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> sourceValue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그냥 이대로 두면 몇 가지 문제가 발생할 수 있어요. 어떤 문제가 발생하는지 예시를 살펴보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserComponent</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> imagesService <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>ImagesService<span class="token punctuation">)</span><span class="token punctuation">;</span>
  user <span class="token operator">=</span> input<span class="token punctuation">.</span>required<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  someValue <span class="token operator">=</span> signal<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  favoriteImages <span class="token operator">=</span> <span class="token function">computedAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>imagesService<span class="token punctuation">.</span><span class="token function">getImages</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>favoriteImages<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
       <span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>someValue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'some value'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p><code v-pre>someValue</code> 시그널은 계산 내부에서 설정될 것이지만, 우리의 계산은 이펙트 내에 있습니다. 다시 말해, 우리는 이펙트 내부에서 시그널의 값을 설정하고 있습니다. 이것은 에러를 발생시킬 것입니다. 그래서 <code v-pre>sourceEvent$.next()</code>를 추적하지 않아도 되게끔 해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">computation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 계산 결과 저장</span>

    <span class="token comment">// 값이 옵저버블이거나 프로미스이거나 일반 값인 경우 결과 처리</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObservable</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPromise</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">untracked</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> sourceEvent$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">untracked</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> sourceValue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 우리의 <code v-pre>computedAsync</code> 함수가 완성되었어요 🎉!</p>
<h2 id="초기-값" tabindex="-1"><a class="header-anchor" href="#초기-값" aria-hidden="true">#</a> 초기 값</h2>
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
<p>기본적으로 <code v-pre>sourceValue</code> 시그널의 초기 값은 <code v-pre>undefined</code>입니다. 그러나 <code v-pre>computedAsync</code> 함수에 초기 값 전달할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>인터페이스 ComputedAsyncOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span>은 CreateComputedOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span>을 확장하며 다음 기본값이 있습니다<span class="token punctuation">.</span>
 initialValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
 injector<span class="token operator">?</span><span class="token operator">:</span> Injector<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> computedAsync<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>
    <span class="token function-variable function">computation</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ComputationResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">,</span>
    options<span class="token operator">?</span><span class="token operator">:</span> ComputedAsyncOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Signal<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">assertInjector</span><span class="token punctuation">(</span>computedAsync<span class="token punctuation">,</span> options<span class="token operator">?.</span>injector<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">const</span> sourceValue <span class="token operator">=</span> signal<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span><span class="token punctuation">(</span>options<span class="token operator">?.</span>initialValue <span class="token operator">??</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 <code v-pre>computedAsync</code> 함수에 초기 값을 전달할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserComponent</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> imagesService <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>ImagesService<span class="token punctuation">)</span><span class="token punctuation">;</span>
  user <span class="token operator">=</span> input<span class="token punctuation">.</span>required<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  favoriteImages <span class="token operator">=</span> <span class="token function">computedAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>imagesService<span class="token punctuation">.</span><span class="token function">getImages</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>favoriteImages<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">initialValue</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h2 id="레이스-조건-처리하기-동작" tabindex="-1"><a class="header-anchor" href="#레이스-조건-처리하기-동작" aria-hidden="true">#</a> 레이스 조건 처리하기 (동작)</h2>
<p>현재는 구독을 처리하기 위해 <code v-pre>switchAll</code> 연산자만 사용하고 있어 이전 호출을 취소합니다. 그러나 개발자들은 다른 동작을 원할 수 있고, 이를 위해 <code v-pre>computedAsync</code> 함수에 <code v-pre>behavior</code> 옵션을 추가할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>type ComputedAsyncBehavior <span class="token operator">=</span> <span class="token string">'switch'</span> <span class="token operator">|</span> <span class="token string">'merge'</span> <span class="token operator">|</span> <span class="token string">'concat'</span> <span class="token operator">|</span> <span class="token string">'exhaust'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">ComputedAsyncOptions</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token keyword">extends</span> <span class="token class-name">CreateComputedOptions</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
 initialValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
 injector<span class="token operator">?</span><span class="token operator">:</span> Injector<span class="token punctuation">;</span>
 behavior<span class="token operator">?</span><span class="token operator">:</span> ComputedAsyncBehavior<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>behavior</code> 옵션을 사용하여 구독을 처리할 수 있습니다.</p>
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
<p><code v-pre>behavior</code> 옵션에 따라 연산자를 처리할 <code v-pre>createFlattenObservable</code> 함수를 만들어 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> createFlattenObservable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>
 <span class="token literal-property property">source</span><span class="token operator">:</span> Subject<span class="token operator">&lt;</span>Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">|</span> Observable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span><span class="token punctuation">,</span>
 <span class="token literal-property property">behavior</span><span class="token operator">:</span> ComputedAsyncBehavior<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> <span class="token constant">KEY_OPERATOR_MAP</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">merge</span><span class="token operator">:</span> mergeAll<span class="token punctuation">,</span>
  <span class="token literal-property property">concat</span><span class="token operator">:</span> concatAll<span class="token punctuation">,</span>
  <span class="token literal-property property">exhaust</span><span class="token operator">:</span> exhaustAll<span class="token punctuation">,</span>
  <span class="token keyword">switch</span><span class="token operator">:</span> switchAll<span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token constant">KEY_OPERATOR_MAP</span><span class="token punctuation">[</span>behavior<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 <code v-pre>createFlattenObservable</code> 함수를 사용하여 구독을 처리할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">source$</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token function">createFlattenObservable</span><span class="token punctuation">(</span>
    sourceEvent$<span class="token punctuation">,</span>
    options<span class="token operator">?.</span>behavior <span class="token operator">??</span> <span class="token string">'switch'</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>기본적으로 <code v-pre>switch</code> 동작을 사용하지만 다른 동작을 전달할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserComponent</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> imagesService <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>ImagesService<span class="token punctuation">)</span><span class="token punctuation">;</span>
  user <span class="token operator">=</span> input<span class="token punctuation">.</span>required<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  favoriteImages <span class="token operator">=</span> <span class="token function">computedAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>imagesService<span class="token punctuation">.</span><span class="token function">getImages</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>favoriteImages<span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span> <span class="token literal-property property">initialValue</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">'merge'</span> <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rxjs 연산자도 Promise를 지원하므로 <code v-pre>sourceEvent$</code>에 Promise를 전달할 수 있고, 옵저버블을 다루는 방식과 마찬가지로 처리할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserComponent</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> imagesService <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>ImagesService<span class="token punctuation">)</span><span class="token punctuation">;</span>
  user <span class="token operator">=</span> input<span class="token punctuation">.</span>required<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  favoriteImages <span class="token operator">=</span> <span class="token function">computedAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> 
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://localhost/api/images/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>favoriteImages<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span> <span class="token literal-property property">initialValue</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">'merge'</span> <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h2 id="계산에서-이전-값을-어떻게-사용할까요" tabindex="-1"><a class="header-anchor" href="#계산에서-이전-값을-어떻게-사용할까요" aria-hidden="true">#</a> 계산에서 이전 값을 어떻게 사용할까요?</h2>
<p>효과 내부에서는 <code v-pre>sourceValue</code> 신호에서 현재 값을 가져올 수 있습니다. 그러나 효과 내에서 신호를 읽으면 의존성으로 등록됩니다. 따라서 먼저 추적을 해제한 다음 <code v-pre>computation</code> 함수로 전달할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> currentSourceValue <span class="token operator">=</span> <span class="token function">untracked</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">sourceValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">computation</span><span class="token punctuation">(</span>currentSourceValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 계산 결과 저장</span>
    <span class="token comment">// ...  </span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게하면 계산에서 이전 값을 사용할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserComponent</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> imagesService <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>ImagesService<span class="token punctuation">)</span><span class="token punctuation">;</span>
  user <span class="token operator">=</span> input<span class="token punctuation">.</span>required<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  favoriteImages <span class="token operator">=</span> <span class="token function">computedAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">previousFavoriteImages</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>previousFavoriteImages<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* do something */</span> <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>imagesService<span class="token punctuation">.</span><span class="token function">getImages</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>favoriteImages<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> <span class="token literal-property property">initialValue</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">'merge'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="ngxtension에서-computedasync-사용하기" tabindex="-1"><a class="header-anchor" href="#ngxtension에서-computedasync-사용하기" aria-hidden="true">#</a> ngxtension에서 computedAsync 사용하기</h1>
<p><code v-pre>computedAsync</code> 함수는 <code v-pre>ngxtension</code> 라이브러리에서 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install ngxtension
# 또는
yarn add ngxtension
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
<p>그럼, 'ngxtension' 라이브러리에서 해당 모듈을 가져와서 사용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computedAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ngxtension/computed-async'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그리고 이렇게 사용할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserComponent</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> imagesService <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>ImagesService<span class="token punctuation">)</span><span class="token punctuation">;</span>
  user <span class="token operator">=</span> input<span class="token punctuation">.</span>required<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  favoriteImages <span class="token operator">=</span> <span class="token function">computedAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>imagesService<span class="token punctuation">.</span><span class="token function">getImages</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>favoriteImages<span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span> <span class="token literal-property property">initialValue</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
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
</div></template>
