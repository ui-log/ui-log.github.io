<template><div><h1 id="시작해보죠" tabindex="-1"><a class="header-anchor" href="#시작해보죠" aria-hidden="true">#</a> 시작해보죠!</h1>
<p>우선, 요구 사항을 개요로 작성해볼까요? 제품 팀이 인앱 구독 추가를 요청했다고 상상해보세요. 이미 문제없이 해결되었어요 (아주 간단해요). 이제 할 일은 앱에 페이월을 통합하는 것이죠. 하지만 그것만이 아닙니다; 때로는 특정 기능이 페이월에 의해 제한되지 않고 구독이 필요한 경우가 있는데요.</p>
<p>이 도전 과제를 어떻게 해결할까요? 기초부터 시작해보죠. 우리는 항상 사용자의 구독 상태에 대한 가장 정확한 정보를 가지고 있도록하기 위해 앱이 활성 상태인지 또는 백그라운드에서 실행 중인지 확인해야 합니다. 그래서 이 목적을 위한 후크를 만들어 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppState<span class="token punctuation">,</span> AppStateStatus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>

type Props <span class="token operator">=</span> <span class="token punctuation">{</span>
  onActive<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  onBackground<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useAppState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> Props <span class="token operator">|</span> <span class="token keyword">undefined</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> onActive<span class="token punctuation">,</span> onBackground <span class="token punctuation">}</span> <span class="token operator">=</span> props <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> appState <span class="token operator">=</span> React<span class="token punctuation">.</span>useRef<span class="token operator">&lt;</span>AppStateStatus<span class="token operator">></span><span class="token punctuation">(</span>AppState<span class="token punctuation">.</span>currentState<span class="token punctuation">)</span><span class="token punctuation">;</span>

  React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> subscription <span class="token operator">=</span> AppState<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token parameter">nextAppState</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        appState<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">inactive|background</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
        nextAppState <span class="token operator">===</span> <span class="token string">'active'</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'앱이 화면으로 돌아왔어요!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        onActive<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        appState<span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token string">'active'</span> <span class="token operator">&amp;&amp;</span>
        nextAppState<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">inactive|background</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'앱이 백그라운드로 이동했어요!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        onBackground<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      appState<span class="token punctuation">.</span>current <span class="token operator">=</span> nextAppState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      subscription<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>onActive<span class="token punctuation">,</span> onBackground<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">state</span><span class="token operator">:</span> appState<span class="token punctuation">.</span>current <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 백엔드 팀과 API 엔드포인트를 제공받기 위해 대화해야 합니다. 이 엔드포인트의 주요 목적은 사용자가 활성 구독을 가지고 있는지를 확인하는 것입니다. 이 엔드포인트를 제공해주면 우리는 모든 준비가 된 것이니 계속 진행할 수 있게 될 거에요. (또는 엔드포인트가 배포될 때까지 응답을 가짜로 만들어 사용할 수도 있어요).</p>
<p>useAppState 훅을 추가했기 때문에 사용자 구독 상태를 확인할 수 있는 아래와 같은 것을 만들 수 있어요. 한번 살펴보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFocusEffect<span class="token punctuation">,</span> useNavigation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> storage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@lib/storage'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAppState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@hooks/useAppState'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useSubscription</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>subscribed<span class="token punctuation">,</span> setSubscribed<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useAppState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">onActive</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 사용자가 구독 중인지 확인합니다.</span>
      <span class="token comment">// 몇 밀리초가 소요되는 API 호출일 수 있습니다.</span>
      <span class="token comment">// 모든 앱이 열릴 때마다 확인을 피하기 위해 시간을 추가할 수 있어요.</span>
      <span class="token comment">// 예를 들어, 앱이 30분 이내에 열린 경우 이전 상태를 가져오도록 시간을 설정하고 API를 호출하지 않을 수 있어요.</span>
      <span class="token keyword">const</span> isSubscribed <span class="token operator">=</span> storage<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">'subscribed'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setSubscribed</span><span class="token punctuation">(</span>isSubscribed <span class="token operator">===</span> <span class="token string">'true'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      storage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'subscribed'</span><span class="token punctuation">,</span> <span class="token string">'true'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> subscribed <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>사용자가 활성 구독을 가지고 있는지 확인할 때, 그 정보를 빠르게 액세스하기 위해 저장하고 API 과부하를 피하는 것이 유용할 수 있어요. 저는 예제에서 MMKV를 사용하고 있는데요, AsyncStorage보다 훨씬 빠릅니다.</p>
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
<p>좋아요, 이제 앱 상태, API 호출 또는 캐시된 데이터를 통해 구독 상태를 확인하는 방법을 결정했으니, 고차 컴포넌트(HOC)를 사용하여 지불 벽을 만드는 방법을 살펴보겠습니다. 아래 예시를 확인해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">withPaywall</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">Component</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>any<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> navigation <span class="token operator">=</span> <span class="token function">useNavigation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> subscribed <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSubscription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useFocusEffect</span><span class="token punctuation">(</span>
    React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>subscribed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Paywall을 닫은 후 사용자가 홈으로 돌아가도록 확인</span>
        navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'Paywall'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>subscribed<span class="token punctuation">,</span> navigation<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>subscribed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useEffect 대신 useFocusEffect를 사용하는 이유가 뭔지 궁금하신가요? 간단합니다. useEffect는 열 때마다 트리거를 보장하지 않지만, useFocusEffect는 함수가 항상 호출되어 일관된 동작을 보장합니다.</p>
<p>HOC가 무엇이며 어떻게 사용되는지 잘 모르겠다면, 아래 예시를 살펴보세요. 그러면 이해하실 거예요.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Text<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> withPaywall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@hooks/useSubscription'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> MyScreen <span class="token operator">=</span> <span class="token function">withPaywall</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View<span class="token operator">></span>
      <span class="token operator">&lt;</span>Text<span class="token operator">></span>MyScreen<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>엄청 간단하죠? 이제 사용자가 구독이 필요한 화면으로 이동할 때마다 우리는 사용자를 페이월 화면으로 보냅니다. 또한 사용자가 페이월 화면을 닫지 못하도록 하고, 닫으면 홈 화면으로 리디렉트되어 페이월 뒤의 화면에 액세스할 수 없도록 해야 합니다.</p>
<p>우리의 초기 요구 사항을 기억하세요? 사용자가 활성 구독이 없는 경우 일부 구성 요소에 액세스 제한을 두어야 합니다. 이 목적을 위해 비슷한 접근 방식을 채용하겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFocusEffect<span class="token punctuation">,</span> useNavigation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> storage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@lib/storage'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAppState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@hooks/useAppState'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">withSubscription</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">Component</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>any<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> subscribed <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSubscription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>subscribed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>View<span class="token operator">></span>
        <span class="token operator">&lt;</span>Text<span class="token operator">></span>Subscription based<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>우리는 마찬가지로 거의 같은 방식으로 사용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> withSubscription <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@hooks/useSubscription'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token function">withSubscription</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Text<span class="token operator">></span>MyScreen<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyScreen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View<span class="token operator">></span>
      <span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>당신이 생각하는 것을 알아요. 왜 단순한 컴포넌트 래퍼 대신 HOC를 사용해야 하는 거죠? 알겠어요, 당신의 방법대로 가볼게요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFocusEffect<span class="token punctuation">,</span> useNavigation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> storage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@lib/storage'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAppState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@hooks/useAppState'</span><span class="token punctuation">;</span>

type WithSubscriptionProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">WithSubscription</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> WithSubscriptionProps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> children <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> subscribed <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSubscription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>subscribed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'relative'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>View
          style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'absolute'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0, 0, 0, 0.2)'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Text<span class="token operator">></span>Subscription based<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
        <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>행복하신가요? 그렇다면 공유하고 댓글을 남겨 주세요!</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> WithSubscription <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@hooks/useSubscription'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyScreen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View<span class="token operator">></span>
      <span class="token operator">&lt;</span>WithSubscription<span class="token operator">></span>
        <span class="token operator">&lt;</span>Text<span class="token operator">></span>MyScreen<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>WithSubscription<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>더 많은 React, Next.js, React Native 콘텐츠를 기대해 주세요. 곧 Golang도 소개할 예정이에요. (솔직히 말하면, Node.js에 조금 지쳐 있어요.)</p>
<img src="@source/docs/Nextjs/2024-04-05-ReactNativesubscriptiontipsandtricks/img/ReactNativesubscriptiontipsandtricks_0.png" />
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
<p>👋</p>
</div></template>
