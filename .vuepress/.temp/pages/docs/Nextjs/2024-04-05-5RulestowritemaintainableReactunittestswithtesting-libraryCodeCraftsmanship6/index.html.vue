<template><div><p>단위 테스트는 테스트 피라미드의 기초이자 신뢰할 수 있는 애플리케이션의 기반이 됩니다. React에서는 testing-library 라이브러리가 두드러집니다. 많은 개발자들이 이를 사용하여 테스트를 작성하는 것을 보곤 합니다.</p>
<p>하지만 많은 경우에, 이러한 테스트는 유지보수하기 어렵습니다. 컴포넌트를 변경할 때마다 테스트를 다시 작성해야 하는 문제가 발생하며, 이는 테스트의 목적에 정확히 반대됩니다.</p>
<p>본 문서는 testing-library를 사용할 때 적용해야 할 5가지 규칙에 대해 다루고 있습니다. 이러한 규칙 중 일부는 타입스크립트 호환 보일러플레이트를 활용하여 시간을 절약할 수 있습니다.</p>
<h1 id="aaa-패턴" tabindex="-1"><a class="header-anchor" href="#aaa-패턴" aria-hidden="true">#</a> AAA 패턴</h1>
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
<p>좋은 테스트는 컴포넌트의 기능을 문서화하는 좋은 기회입니다. 설계상 항상 최신 상태여야 합니다. 단위 테스트는 매우 명확해야 하는 테스트로 분할되어야 합니다. 그러니 테스트를 작성할 때 어떤 기능을 테스트하는지 쉽게 이해할 수 있도록 작성해주세요.</p>
<p>AAA 패턴은 개발 커뮤니티 전체에서 표준으로 사용됩니다:</p>
<ul>
<li>Arrange ⚙️: 테스트 환경 설정</li>
<li>Act 🔄: 테스트할 코드 실행</li>
<li>Assert ✅: 결과 확인</li>
</ul>
<p>제 측면에서는 각 테스트를 3 단락으로 나누겠습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"onChange가 트리거되어야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 사전 준비</span>
  <span class="token keyword">const</span> onChange <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">renderTest</span><span class="token punctuation">(</span><span class="token punctuation">{</span> onChange <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 실행</span>
  <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span>dataTestId<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"foo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 단언</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>onChange<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="사용자-이벤트" tabindex="-1"><a class="header-anchor" href="#사용자-이벤트" aria-hidden="true">#</a> 사용자 이벤트</h1>
<p>컴포넌트를 테스트할 때는 콜백 호출, 팝업 표시 여부 등을 테스트하기 위해 사용자 상호작용을 모방하는 것이 일반적입니다.</p>
<p>testing-library를 사용하면 개발자들이 자주 사용하는 선택지는 fireEvent를 사용하는 것입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> fireEvent<span class="token punctuation">,</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@testing-library/react'</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'해당 요소를 클릭해야 합니다'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Component <span class="token operator">...</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>

  fireEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">'...'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그러나 이 해결책은 클릭을 에뮬레이트하기만 하고 클릭을 트리거하지는 않습니다. 사용하는 라이브러리, 수행하는 동작 또는 청취하는 이벤트에 따라 이 fireEvent 함수가 작동하지 않을 수 있습니다. 그럼에도 높은 테스트 커버리지를 유지하기 위해 최종적으로 콜백을 모의(mock)하거나 가장 미친 해킹을 찾아 코드가 관리하기 어려워지고 가독성이 떨어질 수 있습니다.</p>
<p>더 나은 대안은 @testing-library의 다른 라이브러리인 user-event를 사용하는 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@testing-library/react'</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">'@testing-library/user-event'</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'해당 요소를 클릭해야 합니다'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userEvent<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Component <span class="token operator">...</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>

  <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">'...'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="mock된-객체들" tabindex="-1"><a class="header-anchor" href="#mock된-객체들" aria-hidden="true">#</a> Mock된 객체들</h1>
<p>컴포넌트가 프로퍼티로 객체를 필요로 할 때, 종종 다음과 같은 코드를 볼 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should render hello"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"foo"</span><span class="token punctuation">,</span> <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">"Doe"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>HelloWorld user<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">queryByText</span><span class="token punctuation">(</span><span class="token string">"John Doe"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하지만 User 타입에 새로운 프로퍼티를 추가할 때마다, 초기화된 사용자를 사용하는 모든 테스트를 업데이트해야 해요. 이 타입을 많은 테스트에서 사용할 때, 많은 변경을 필요로 해요.</p>
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
<p>해결책은 기본 사용자를 만들고 필요한 속성을 재정의할 수 있는 모의 함수를 생성하는 것입니다. 그런 다음 사용자가 필요할 때마다 이 함수를 재사용하면 됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should render hello"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">mockUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">"Doe"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>HelloWorld user<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">queryByText</span><span class="token punctuation">(</span><span class="token string">"John Doe"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>테스트에 필요한 속성만 재정의하면 사용자에 추가 속성이 생겨도 이 테스트에 손 대지 않아도 됩니다.</p>
<p>모의 빌더를 만드는 예제는 이곳에서 찾을 수 있습니다.</p>
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
<h1 id="wrapper-builder" tabindex="-1"><a class="header-anchor" href="#wrapper-builder" aria-hidden="true">#</a> Wrapper Builder</h1>
<p>가끔은 컴포넌트가 리덕스, i18n 또는 기타 것들과 같은 일부 컨텍스트에 액세스해야 할 수도 있어요.</p>
<h2 id="mocking-라이브러리-피하기" tabindex="-1"><a class="header-anchor" href="#mocking-라이브러리-피하기" aria-hidden="true">#</a> mocking 라이브러리 피하기</h2>
<p>컴포넌트의 종속성을 모킹하기 위해 jest.mock을 사용하는 개발자들을 종종 보게 됩니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>jest<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">"react-i18next"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">useTranslation</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">t</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">v</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> v<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 방법은 2가지 단점이 있습니다:</p>
<ul>
<li>테스트가 라이브러리 사용을 커버하지 못합니다: 새 버전의 라이브러리가 나오면 코드가 호환되는지 테스트할 수 없어서 위험합니다.</li>
<li>테스트가 유지보수하기 어려워집니다: 컴포넌트 코드를 리팩토링하여 테스트하지 않은 특정 인수를 함수 t로 사용한다면, 테스트의 일부를 다시 작성해야 합니다.</li>
</ul>
<h2 id="래퍼-사용하기" tabindex="-1"><a class="header-anchor" href="#래퍼-사용하기" aria-hidden="true">#</a> 래퍼 사용하기</h2>
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
<p>테스트에서 모듈 전체를 가짜로 만들지 않고도 테스트에 문맥을 추가할 수 있게 해주기 위해 testing-library는 래퍼(wrapper)의 원칙을 소개했습니다.</p>
<p>랩퍼는 예를 들어 Context Provider나 상태가 이미 초기화된 Redux Provider가 될 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">Wrapper</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>PropsWithChildren<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>alreadyInitializedState<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"...을 렌더링해야 합니다."</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Component <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">wrapper</span><span class="token operator">:</span> Wrapper <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>대규모 아키텍처에서는 컴포넌트가 종종 여러 프로바이더에 의존하므로 해당 테스트는 상태, HTTP 호출, 번역, 다른 맥락 등을 위한 여러 래퍼(wrapper)가 필요하며 코드가 복잡해집니다.</p>
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
<p>항상 동일한 Factory 패턴을 사용하는데, 연쇄 메소드를 사용해요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mockWrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">withRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">withTranslation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">withHttpCalls</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">mocks</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token function">mockQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">withState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token function">mockState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'should render ...'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Component <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> wrapper<span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 Factory 패턴은 테스트 및 연쇄 메소드 사이의 중복을 줄이고, 코드를 읽기 쉽게 만들어줘요. 여기에서는 wrapper builder를 만들기 위한 예제를 찾을 수 있어요.</p>
<h1 id="custom-render-함수" tabindex="-1"><a class="header-anchor" href="#custom-render-함수" aria-hidden="true">#</a> Custom Render 함수</h1>
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
<p>testing-library로 테스트하는 경우 코드가 이렇게 보일 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'should ...'</span>'<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Component propA<span class="token operator">=</span><span class="token punctuation">{</span>propA1<span class="token punctuation">}</span> propB<span class="token operator">=</span><span class="token punctuation">{</span>propB1<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'should ...'</span>'<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Component propA<span class="token operator">=</span><span class="token punctuation">{</span>propA2<span class="token punctuation">}</span> propB<span class="token operator">=</span><span class="token punctuation">{</span>propB2<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'should ...'</span>'<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Component propA<span class="token operator">=</span><span class="token punctuation">{</span>propA3<span class="token punctuation">}</span> propB<span class="token operator">=</span><span class="token punctuation">{</span>propB3<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>저는 각 테스트가 명확하기 때문에 코드를 이렇게 작성하는 방식을 좋아해요. 하지만 2가지 단점이 있어요:</p>
<ul>
<li>Component에 의해 사용되는 컴포넌트를 리팩토링하면 이제 컨텍스트가 필요한 경우, 모든 테스트를 업데이트하여 래퍼를 전달해야 합니다.</li>
<li>새로운 선택적이 아닌 속성을 추가하면 모든 테스트를 업데이트해야 합니다.</li>
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
<p>해결책은 재사용할 사용자 정의 렌더 함수를 만드는 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> renderTest <span class="token operator">=</span> <span class="token function">buildRenderTest</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 기본 속성</span>
  <span class="token literal-property property">onChange</span><span class="token operator">:</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"하는 일은 ..."</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> onChange <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">renderTest</span><span class="token punctuation">(</span><span class="token punctuation">{</span> onChange <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"하는 일은 ..."</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">renderTest</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 해결책으로:</p>
<ul>
<li>새로운 속성이 추가되면 기본 속성이 있으므로 renderTest 초기화만 수정하면 됩니다.</li>
<li>함수 buildRenderTest 내에 기본 래퍼가 이미 설정되어 있으므로 새 종속성을 추가할 때 많은 변경을 이미 방지하고 있습니다.</li>
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
<p>이 패턴은 확장 가능한 테스트에 대한 첨단 솔루션입니다. 예를 들어 리덕스 문서에서 테스트를 작성하는 것을 권장합니다.</p>
<p>이 사용자 정의 렌더 함수 빌더의 핵심은 함수 render 의 API 반환을 개선할 수 있다는 점입니다.</p>
<p>예를 들어, 이 기사의 두 번째 섹션에서 사용자 이벤트의 공식 문서를 제안하는 공식 사용자-이벤트 문서의 초기화를 포함할 수 있습니다 :</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should ..."</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> onChange <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">renderTest</span><span class="token punctuation">(</span><span class="token punctuation">{</span> onChange <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>전체 예제에 TypeScript와 호환되는 완벽한 예제를 찾을 수 있어요.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이 5가지 규칙을 따른다면 테스트를 더 쉽게 유지할 수 있어요.</p>
<p>물론 이것으로 테스트 작성과 관련된 모든 어려움을 해결하지는 못해요. testing-library에는 배울 게 더 많아요. 테스트 작성 능력은 testing-library에만 한정되지 않아요. TDD나 테스트 피라미드 같은 다른 최상의 실천법도 추가할 수 있어요.</p>
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
<p>그런데 컴포넌트를 리팩터링할 때 모든 테스트를 동시에 업데이트할 필요가 없어서 더 자신감이 있을 거예요.</p>
<p>이 글이 마음에 드셨나요? 👏🏼</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/0*DOJtuVhHnz8QA0V5.gif" alt="image"></p>
<p>안녕하세요, 저는 프론트엔드 및 UX 엔지니어인 티볼트입니다. UX, 코드 기술, 생산성, 과학 소설에 열정적이며 매월 새로운 글을 게시합니다. 이런 주제에 관심이 있으시면 제 Medium 계정을 팔로우해주세요: https://medium.com/@thibault-friedrich.</p>
</div></template>
