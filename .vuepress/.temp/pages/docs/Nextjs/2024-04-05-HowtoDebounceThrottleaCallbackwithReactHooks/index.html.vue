<template><div><img src="@source/docs/Nextjs/2024-04-05-HowtoDebounceThrottleaCallbackwithReactHooks/img/HowtoDebounceThrottleaCallbackwithReactHooks_0.png" />
<p>이전 글에서 우리는 텍스트 입력을 위한 현재 값과 디바운스 값 둘 다 제공하는 후크를 만드는 방법을 살펴보았어요. 이번에는 컴포넌트가 받는 입력 콜백을 디바운스하거나 스로틀할 거에요.</p>
<p>간단한 검색 입력을 관리하고 콜백을 받는 컴포넌트를 만들어 보겠습니다.</p>
<h1 id="input-컴포넌트-만들기" tabindex="-1"><a class="header-anchor" href="#input-컴포넌트-만들기" aria-hidden="true">#</a> Input 컴포넌트 만들기</h1>
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
<p>리액트에서 입력을 처리하는 표준 방식은 입력 값이 변경될 때 해당 state 변수도 변경하는 것입니다.</p>
<p>우리의 경우 이 상태 변수는 value라고 부르겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>우리는 상태 변수를 검색 입력란과 연결하기 위해 해당 값과 onChange 속성을 설정합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">DebouncedInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newValue <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"search"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> DebouncedInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="콜백" tabindex="-1"><a class="header-anchor" href="#콜백" aria-hidden="true">#</a> 콜백</h1>
<p>이제 도전 과제로 돌아가서 컴포넌트 매개변수에 콜백을 추가해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">DebouncedInput</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onInput <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
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
<p>처음에 컴포넌트는 사용자가 입력할 때 제공된 콜백을 호출합니다. 기본적으로는 onChange 핸들러 내에서 호출하는 것을 의미합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">DebouncedInput</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onInput <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newValue <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onInput</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"search"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> DebouncedInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>사용자가 무언가를 입력할 때마다 onInput 콜백이 새 값과 함께 호출됩니다. 이게 좋은데, 때로는 네트워크 호출을 하고 사용자가 새 키를 누를 때마다 API를 호출하는 것이 아니라 타이핑을 멈추었을 때 호출하고 싶을 수도 있습니다.</p>
<h1 id="디바운스된-콜백" tabindex="-1"><a class="header-anchor" href="#디바운스된-콜백" aria-hidden="true">#</a> 디바운스된 콜백</h1>
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
<p>이미 도전에 대처하는 데 도움이 되는 유틸리티 함수가 라이브러리에 있음을 아시겠지만, 그런 함수를 다시 작성할 필요는 없습니다. 우리는 React 컴포넌트와 통합하기만 하면 됩니다.</p>
<p>debounce 함수는 함수와 주어진 밀리초 단위의 시간을 가져와 새로운 함수를 반환합니다. 반환된 함수를 여러 번 호출하면 주어진 밀리초 단위의 시간이 지난 후에 원래 함수를 호출합니다.</p>
<p>따라서 우리가 할 일은 콜백의 debounced 버전을 만드는 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> onInputDebounced <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>onInput<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
<p>하지만 React 함수 컴포넌트가 작동하는 방식 때문에 이 방법은 작동하지 않을 것입니다. 값 상태 변수가 변경될 때마다 함수 컴포넌트가 다시 렌더링되고 새로운 디바운스된 콜백이 생성됩니다.</p>
<p>입력 콜백이 변경될 때만 변경되는 디바운스된 콜백이 필요합니다. 이를 해결하기 위해 useCallback 훅을 사용할 수 있습니다.</p>
<p>useCallback 훅은 콜백과 의존성 목록을 가져와서 기억된 콜백을 반환합니다. 의존성이 변경될 때만 반환 콜백이 변경됩니다. 각 컴포넌트 재렌더링 시 useCallback이 호출되더라도 해당 케이스에서는 동일한 디바운스 함수가 반환됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> onInputDebounced <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
      <span class="token function">debounce</span><span class="token punctuation">(</span>onInput<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>onInput<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>해야 할 일은 이것이 전부에요. 이제 onChange 핸들러에서, 컴포넌트 매개변수에 제공된 핸들러 대신 디바운스된 콜백을 호출해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> debounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lodash"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">DebouncedInput</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onInput <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> onInputDebounced <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
      <span class="token function">debounce</span><span class="token punctuation">(</span>onInput<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token punctuation">[</span>onInput<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newValue <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onInputDebounced</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"search"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> DebouncedInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="디바운스된-콜백-사용하기" tabindex="-1"><a class="header-anchor" href="#디바운스된-콜백-사용하기" aria-hidden="true">#</a> 디바운스된 콜백 사용하기</h1>
<p>아래는 이전 DebouncedInput 컴포넌트를 사용하는 예시입니다. 사용자가 입력을 멈출 때까지 기다린 후 검색 콜백이 호출됨을 주목해주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> DebouncedInput <span class="token keyword">from</span> <span class="token string">"./DebouncedInput"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">search</span><span class="token operator">:</span> text <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span>DebouncedInput onInput<span class="token operator">=</span><span class="token punctuation">{</span>search<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="쓰로틀링된-콜백" tabindex="-1"><a class="header-anchor" href="#쓰로틀링된-콜백" aria-hidden="true">#</a> 쓰로틀링된 콜백</h1>
<p>비슷하게, throttle 유틸리티 함수를 사용하여 주어진 콜백을 쓰로틀링할 수 있습니다.</p>
<p>throttle은 함수와 밀리초 단위의 시간을 인자로 사용하며, 새로운 함수를 반환합니다. 반환된 함수는 여러 번 호출되어도 지정된 밀리초 단위로 원본 함수를 최대 한 번만 호출합니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> throttle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lodash"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">ThrottledInput</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onInput <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> onInputThrottled <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
      <span class="token function">throttle</span><span class="token punctuation">(</span>onInput<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token punctuation">[</span>onInput<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newValue <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onInputThrottled</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"search"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> ThrottledInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그것으로 끝입니다. 여기에 전체 코드가 있습니다.</p>
<p>읽어 주셔서 감사합니다!</p>
</div></template>
