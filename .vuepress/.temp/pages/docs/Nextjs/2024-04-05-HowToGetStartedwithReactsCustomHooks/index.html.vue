<template><div><p><code v-pre>&lt;img src=&quot;./img/HowToGetStartedwithReactsCustomHooks_0.png&quot; /&gt;</code></p>
<p>리액트를 배우는 것은 꽤 어렵고 수 많은 튜토리얼, 책 등이 필요할 수 있습니다. 걱정하지 마세요. 리액트에 대해 모든 것을 알 필요는 없습니다. 시작하고 빌드하기 위해 리액트에 대한 모든 것을 알 필요가 없습니다. 리액트 지식의 끝점까지 진행할 때, 이전보다 더 많은 것을 알게 되는 길을 따라 읽어 보세요.</p>
<h1 id="리액트-훅이란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#리액트-훅이란-무엇인가요" aria-hidden="true">#</a> 리액트 훅이란 무엇인가요?</h1>
<p>리액트 훅은 함수형 컴포넌트에서 리액트의 기능에 '훅'을 걸 수 있게 해주는 특별한 함수입니다. 이는 React 16.8에서 소개되었는데, 이를 통해 사용자들이 클래스를 작성하지 않고도 리액트 기능을 사용할 수 있게 되었습니다. 리액트 훅은 클래스 컴포넌트의 객체 지향 표준과는 대조적으로 더 함수형 프로그래밍 스타일을 대표합니다.</p>
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
<p>Hooks를 사용하기 전에, 몇 가지 이러한 훅이 무엇을 할 수 있는지 그리고 예시와 함께 이해해 보겠습니다.</p>
<h1 id="_1-usestate" tabindex="-1"><a class="header-anchor" href="#_1-usestate" aria-hidden="true">#</a> 1. useState</h1>
<p>Hooks를 사용하기 전에, 상태(state)는 클래스 컴포넌트에서만 사용할 수 있었습니다. useState를 사용하면 함수형 컴포넌트에 상태를 추가할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>위의 예제에서 'initialState'는 상태 변수의 초기값을 선언합니다. 'state'는 현재 상태를 나타내며, 'setState'는 상태를 업데이트하는 함수입니다. 각 구성 요소의 목적을 더 잘 이해할 수 있도록 이 내용을 참고해주세요.</p>
<p>useState의 몇 가지 기능적 사용 사례는 다음과 같습니다:</p>
<ul>
<li>조건부 렌더링: 사용자 상호 작용/입력에 따라 구성 요소를 표시/숨김하는 UI 상태 관리</li>
<li>폼 처리: 폼 입력 값 및 제출 상태를 추적하며, 예를 들어, 폼 제출이 상태 변경을 일으켜 UI에 반영되도록 하는 예시</li>
<li>애니메이션 상태: 버튼 클릭 시 텍스트 조각을 사라지게 하거나 나타나도록 하는 UI 애니메이션 및 전이 상태 관리. 버튼은 토글 가시성 상태를 활용합니다.</li>
<li>로컬 구성 요소 상태: 입력 값, 토글, 카운터 및 이 목록의 다른 기능과 같은 로컬 상태 제어. 예를 들어, 간단한 켜기/끄기 버튼의 경우, useState는 토글이 켜져 있는지 꺼져 있는지 추적합니다.</li>
</ul>
<p>다음으로 넘어갑시다.</p>
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
<h1 id="_2-useeffect" tabindex="-1"><a class="header-anchor" href="#_2-useeffect" aria-hidden="true">#</a> 2. useEffect</h1>
<p>‘useEffect’의 목적은 함수형 컴포넌트에서 부수 효과를 관리하는 것입니다. 부수 효과란 현재 컴포넌트 외부의 컴포넌트에 영향을 미치는 동작을 의미하며 렌더링 과정 중에 수행되어서는 안 됩니다. 예를 들어, 구독 관리, 데이터 가져오기 또는 DOM 직접 조작과 같은 기능들이 여기에 속합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">DataFetchingComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 가져온 데이터를 저장할 상태를 초기화</span>
   <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     <span class="token comment">// 데이터 가져오는 비동기 함수</span>
     <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
       <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">const</span> jsonData <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// 가져온 데이터로 상태 업데이트</span>
         <span class="token function">setData</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">// 네트워크 문제와 같은 에러 처리</span>
         console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"데이터를 가져오는 중 오류 발생: "</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">// 선택적으로 에러가 발생했음을 나타내는 상태 설정</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">}</span><span class="token punctuation">;</span>
     <span class="token comment">// fetchData 함수 호출</span>
     <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">// []는 초기 렌더링 후 한 번만 실행됨을 의미</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// 데이터를 사용하는 UI 컴포넌트 렌더링</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 예시에서, useEffect는 컴포넌트가 마운트된 후에 코드를 실행하는 데 사용됩니다. ‘fetchData’는 API에서 데이터를 가져 오는 비동기 함수이며, ‘[]’를 포함하여 컴포넌트가 처음 렌더링된 후 한 번만 실행되도록 보장했습니다. 이는 클래스 컴포넌트의 ‘componentDidMount’ 라이프사이클 메서드의 동작을 모방합니다.</p>
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
<p><code v-pre>useEffect</code>를 사용하는 시기:</p>
<ul>
<li>데이터 가져오기: 컴포넌트가 마운트되거나 특정 조건이 변경될 때 API에서 데이터를 로드하기 위해 사용합니다.</li>
<li>구독 설정 또는 이벤트 리스너 설정: 예를 들어 창 크기 조정 이벤트 또는 WebSocket 연결을 수신하는 경우.</li>
<li>수동 DOM 조작: React의 선언적 업데이트 외부에서 DOM과 직접 상호 작용해야 할 때 사용합니다.</li>
<li>정리 작업: 컴포넌트가 마운트 해제되거나 종속성 변경으로 다시 렌더링되기 전에 옵저버 또는 이벤트 리스너 구독 해제 또는 타이머/인터벌 제거에 사용됩니다.</li>
<li>정리 함수: 효과를 정리하는 함수를 반환하여 이벤트 리스너를 제거하고 메모리 누수를 방지하는 데 유용합니다.</li>
</ul>
<p>다음으로 넘어갑시다.</p>
<h1 id="_3-usecontext" tabindex="-1"><a class="header-anchor" href="#_3-usecontext" aria-hidden="true">#</a> 3. useContext</h1>
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
<p><code v-pre>useContext</code> 훅은 컴포넌트 트리 전반에 걸친 간소화된 데이터 흐름을 제공합니다. 이는 각 수준에서 수동으로 prop을 전달할 필요를 제거하여 공통 데이터를 전역적으로 공유하기에 이상적입니다. <code v-pre>useContext</code>는 컴포넌트 간 통신, 가독성, 재사용성 및 정기적인 유지보수를 향상시킵니다.</p>
<p><code v-pre>useContext</code>의 구문:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>MyContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>MyContext</code>: <code v-pre>React.createContext()</code>로 생성한 컨텍스트 객체입니다.</li>
<li><code v-pre>value</code>: <code v-pre>MyContext</code>에 대한 현재 컨텍스트 값입니다. 이 값은 트리 내에서 호출된 컴포넌트 위에 있는 가장 가까운 <code v-pre>MyContext.Provider</code>에서 가져옵니다.</li>
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
<p><code v-pre>useContext</code>의 혜택 및 사용법:</p>
<ul>
<li>중첩된 프롭 손쉽게 처리: 이전에 언급된 '프롭 드릴링'을 피하는 데 이상적입니다. 이를 통해 컴포넌트 계층 구조를 간소화하고 유지 관리를 강화하며 오류 발생 가능성을 줄일 뿐만 아니라 React 애플리케이션을 상당히 확장 가능하게 만듭니다.</li>
<li>공유 데이터 관리: 서로 다른 컴포넌트가 공통 애플리케이션 데이터(프로필, 설정, 환경 설정)에 액세스해야 할 때 가장 적합합니다.</li>
<li>전역 상태 관리: <code v-pre>useContext</code>는 애플리케이션 내 부분에 걸쳐 간편함, 중앙 집중식 상태 논리 및 컴포넌트 간에 훌륭한 구성을 제공합니다.</li>
<li>주의사항: <code v-pre>useContext</code>는 다양한 기능과 혜택이 있지만 컨텍스트를 지나치게 사용하면 구성 요소의 재사용성을 복잡하게 할 수 있습니다. 이는 문제 해결이 어려울 수 있으므로 항상 상황에 가장 적합한 접근 방식인지 고려하세요.</li>
</ul>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>React 커스텀 훅은 프로젝트를 더 관리하기 쉽고 단순하며 재사용 가능하며, 무엇보다 가독성을 향상시킵니다. 더 청결하고 조직적인 코드를 작성하는 데 도움이 되며, 실제로 깊게 이해하면 상당히 유용합니다. 그러니 더 깊이 이해한 후에 도전해보고 React 기술을 키워보세요!</p>
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
<li>안현경</li>
</ul>
<h1 id="친절하게-쉽게-이해하는-곳-🚀" tabindex="-1"><a class="header-anchor" href="#친절하게-쉽게-이해하는-곳-🚀" aria-hidden="true">#</a> 친절하게 쉽게 이해하는 곳 🚀</h1>
<p>In Plain English 커뮤니티에 참여해 주셔서 감사합니다! 떠나시기 전에:</p>
<ul>
<li>필자를 박수로 응원하고 팔로우해 주세요 ️👏</li>
<li>팔로우하기: X | LinkedIn | YouTube | Discord | Newsletter</li>
<li>다른 플랫폼 방문하기: Stackademic | CoFeed | Venture | Cubed</li>
<li>PlainEnglish.io에서 더 많은 콘텐츠 확인하기</li>
</ul>
</div></template>
