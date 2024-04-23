<template><div><p><img src="@source/docs/Tech/2024-04-19-Full-pagethemetoggleanimationwithViewTransitionsAPI/img/Full-pagethemetoggleanimationwithViewTransitionsAPI_0.png" alt="Full-pagethemetoggleanimationwithViewTransitionsAPI_0.png"></p>
<h1 id="블로그의-비디오-버전" tabindex="-1"><a class="header-anchor" href="#블로그의-비디오-버전" aria-hidden="true">#</a> 블로그의 비디오 버전</h1>
<p>텔레그램 앱은 다크 모드 토글에 매우 흥미로운 애니메이션이 있습니다. 다크 테마가 스위치에서 나와 앱의 나머지 부분을 덮는 애니메이션입니다. 이 작업이 하부에서 어떻게 작동하는지, 웹에서 어떻게 복제할 수 있는지 항상 궁금해했습니다. 브라우저에 올라오는 View Transitions API 덕분에 이제 이것이 웹에서 가능해졌다는 것을 기쁘게 생각합니다.</p>
<p>본 게시물에서는 View Transitions API를 사용하여 다크 테마 토글 스위치에 다음과 같은 애니메이션을 구현하는 방법을 살펴볼 것입니다. 이를 React 프로젝트에서 수행할 것이지만, View Transitions API는 브라우저에서 기본적으로 작동하기 때문에 순수 JavaScript나 사용자의 선택에 따라 다른 프레임워크/라이브러리를 사용할 수 있습니다.</p>
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
<h1 id="뷰-전환-api는-어떻게-작동합니까" tabindex="-1"><a class="header-anchor" href="#뷰-전환-api는-어떻게-작동합니까" aria-hidden="true">#</a> 뷰 전환 API는 어떻게 작동합니까?</h1>
<p>여기서 구축 중인 상호작용은 뷰 전환 API가 내부적으로 어떻게 작동하는지 살펴보면 이해하기 쉬울 것입니다:</p>
<ul>
<li>API가 접근되어 뷰 전환을 시작하면 브라우저가 페이지의 현재 상태를 스크린샷으로 캡처합니다. 이를 &quot;이전&quot; 페이지 상태라고 합니다.</li>
<li>그런 다음 API는 페이지를 다음 상태로 업데이트하는 코드를 실행합니다. 이전 페이지 상태에서 애니메이션을 적용해야 하는 다음 상태로 업데이트합니다.</li>
<li>이제 브라우저가 다음 상태를 준비했으므로 해당 상태를 또 다른 스크린샷으로 캡처합니다. 이를 &quot;새로운&quot; 페이지 상태라고 합니다. 이 시점에서 사용자는 여전히 &quot;이전&quot; 페이지 상태를 보고 있으며 이 &quot;새로운&quot; 상태로의 모든 업데이트는 메모리에서만 발생했지만 아직 디스플레이에 렌더링되지 않았습니다.</li>
<li>페이지의 &quot;이전&quot; 및 &quot;새로운&quot; 스크린샷이 브라우저에 ::view-transition-old 및 ::view-transition-new 가상 요소로 로드됩니다.</li>
<li>마지막으로, 이 두 개의 가상 요소 간에 CSS 애니메이션이 실행되어 ::view-transition-new 가상 요소가 표시됩니다.</li>
<li>애니메이션이 종료되면 이러한 가상 요소가 제거되고 브라우저는 이미로드된 &quot;새로운&quot; 페이지 상태(3단계에서)를 화면에 렌더링하기 시작합니다.</li>
</ul>
<p>위 단계를 설명하는 인터랙티브 데모를 확인해보세요.</p>
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
<h1 id="리액트에서-애니메이션-구현하기" tabindex="-1"><a class="header-anchor" href="#리액트에서-애니메이션-구현하기" aria-hidden="true">#</a> 리액트에서 애니메이션 구현하기</h1>
<p>다음 코드는 다크 테마 토글 스위치의 기본 구현입니다. 이 코드는 React 상태 변수에 스위치의 상태를 저장하고 스위치의 상태에 따라 <code v-pre>html</code> 요소에 dark 클래스를 토글하는 관련 효과를 가지고 있습니다. 토글 스위치 구성 요소는 간단히 Radix UI를 사용하여 구현되었지만 사용자가 가지고 있는 컴포넌트 라이브러리/사용자 정의 스위치 컴포넌트를 사용해도 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Switch <span class="token keyword">from</span> <span class="token string">'./Switch'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IconMoon<span class="token punctuation">,</span> IconSun <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Icons'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isDarkMode<span class="token punctuation">,</span> setIsDarkMode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">toggleDarkMode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">isDarkMode</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setIsDarkMode</span><span class="token punctuation">(</span>isDarkMode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 애니메이션 코드를 여기에 추가</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isDarkMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'dark'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'dark'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isDarkMode<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"h-screen w-screen flex items-center justify-center bg-white dark:bg-gray-950"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Switch<span class="token punctuation">.</span>Root checked<span class="token operator">=</span><span class="token punctuation">{</span>isDarkMode<span class="token punctuation">}</span> onCheckedChange<span class="token operator">=</span><span class="token punctuation">{</span>toggleDarkMode<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Switch<span class="token punctuation">.</span>Thumb<span class="token operator">></span>
          <span class="token punctuation">{</span>isDarkMode <span class="token operator">?</span> <span class="token operator">&lt;</span>IconMoon <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">:</span> <span class="token operator">&lt;</span>IconSun <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token punctuation">.</span>Thumb<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token punctuation">.</span>Root<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>뷰 트랜지션 API를 사용하려면 document.startViewTransition() 함수를 호출하고 페이지가 다음 상태로 업데이트되는 방식을 정의하는 콜백을 전달해야 합니다(View Transitions API 동작 단계 2).</p>
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
<p>우리의 초기 직관은 간단히 setIsDarkMode 호출을 이 콜백 함수 안으로 옮기는 것입니다. 결국, 이것이 페이지를 어두운 테마로 업데이트하는 것을 트리거하는 것입니다. 이것은 올바른 방향이지만, 우리의 이해에 작은 결함이 있습니다. React는 상태 업데이트 후 즉시 DOM을 업데이트하지 않습니다. DOM 업데이트는 비동기적으로 발생할 수 있으며 setState 호출 이후에도 발생할 수 있습니다. 따라서 setIsDarkMode(isDarkMode) 호출 후에는 callback 함수인 doucment.startViewTransition()가 끝날 때 DOM이 새 상태 (예: 이 예제에서는 어두운 테마 상태)에 있는 것이 보장되지 않습니다.</p>
<p>이것은 문제입니다. startViewTransition()은 애니메이션을 수행할 수 있도록 페이지의 새 상태가 필요합니다. 그렇다면 이 문제를 어떻게 해결할 수 있을까요?</p>
<p><img src="@source/docs/Tech/2024-04-19-Full-pagethemetoggleanimationwithViewTransitionsAPI/img/Full-pagethemetoggleanimationwithViewTransitionsAPI_1.png" alt="이미지"></p>
</div></template>
