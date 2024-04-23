<template><div><p>React 애플리케이션에서 Redux Saga와 함께 Redux Toolkit을 구현하는 방법은 다음과 같습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtoimplementReduxSagawithReactredux-toolkit/img/HowtoimplementReduxSagawithReactredux-toolkit_0.png" alt="이미지"></p>
<p>React 애플리케이션을 개발할 때 특정 기능에 대해 무엇을 사용해야 할지 고민하는 경우가 많습니다. 그러나 &quot;데이터 저장&quot;에 관한 문제가 있을 때는 &quot;Context API&quot; 또는 &quot;Redux&quot;를 선택해야 합니다.</p>
<p>따라서 몇 가지 질문을 스스로에게 해보아야 합니다...</p>
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
<li>API를 사용할 수 있나요?</li>
<li>이 API에서 너무 많은 데이터를 소비하고 있나요?</li>
<li>이 API에 너무 많은 엔티티가 있나요?</li>
</ul>
<p>위 질문에 대답이 &quot;네&quot;이면 &quot;Redux&quot;를 사용하게 됩니다. 그렇지 않으면 &quot;Context API&quot;를 사용하시게 됩니다.</p>
<h1 id="_1-—-개요" tabindex="-1"><a class="header-anchor" href="#_1-—-개요" aria-hidden="true">#</a> 1 — 개요</h1>
<h2 id="a-—-redux란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#a-—-redux란-무엇인가요" aria-hidden="true">#</a> A — Redux란 무엇인가요?</h2>
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
<p>Redux는 주로 React와 함께 사용되는 JavaScript 애플리케이션을 위한 상태 관리 라이브러리입니다. Redux는 예측 가능한 상태 컨테이너를 제공하여 응용 프로그램 상태를 단일 중앙 위치에서 쉽게 관리할 수 있도록 합니다. Redux는 불변성과 단방향 데이터 흐름의 원칙에 기반을 두고 있어 응용 프로그램 상태의 변경 사항을 시간이 지남에 따라 이해하기 쉽게 합니다. Redux를 사용하면 액션을 디스패치하여 상태를 업데이트하고, 이러한 액션은 리듀서라고 불리는 순수 함수에 의해 처리되어 액션 유형 및 페이로드에 기반한 새로운 상태를 반환합니다. Redux는 또한 비동기 작업 및 기타 고급 사용 사례를 처리하기 위한 미들웨어를 제공합니다. 총론적으로 Redux는 복잡한 애플리케이션 상태의 관리를 간소화하고 확장 가능하고 유지보수하기 쉬운 애플리케이션을 구축할 수 있도록 도와줍니다.</p>
<p>그래서... 우리는 Redux Toolkit을 사용하고 있어요.</p>
<h2 id="b—-redux-toolkit이란" tabindex="-1"><a class="header-anchor" href="#b—-redux-toolkit이란" aria-hidden="true">#</a> B— Redux Toolkit이란?</h2>
<p>Redux Toolkit에는 사전 구성된 Redux 스토어가 포함되어 있으며, 필요한 미들웨어 및 리듀서 설정과 DevTools 지원을 포함하고 있습니다. 또한 Redux 슬라이스를 생성하는 강력한 유틸리티 세트를 제공합니다. 슬라이스를 사용하면 리덕스 상태 및 로직의 작은 자기 포함 모듈인 리듀서 함수와 액션 생성자를 더 간결하고 직관적인 구문으로 정의할 수 있습니다. 총론적으로 Redux Toolkit은 리덕스를 사용하는 간소화된 관점 있는 방법을 제공하여 개발자가 더 나은 코드를 더 적은 노력으로 작성하고 유지보수할 수 있도록 도와줍니다.</p>
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
<h2 id="c-—-비동기-작업" tabindex="-1"><a class="header-anchor" href="#c-—-비동기-작업" aria-hidden="true">#</a> C — 비동기 작업</h2>
<p>Redux 상태를 관리하는 것은 간단한 작업이지만, REST API를 소비하는 것은 Redux 구조 내에서 고려해야 합니다.</p>
<p>Redux Toolkit은 비동기 코드를 처리하는 유틸리티 함수 세트를 제공하며, Redux 썩 함수를 정의하는 데 사용하는 createAsyncThunk과 Redux 내에서 정규화된 데이터를 관리하는 데 사용하는 createEntityAdapter이 포함되어 있습니다.</p>
<h2 id="d-—-redux-thunk-대-redux-saga" tabindex="-1"><a class="header-anchor" href="#d-—-redux-thunk-대-redux-saga" aria-hidden="true">#</a> D — Redux Thunk 대 Redux Saga</h2>
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
<p>Redux Thunk와 Redux Saga는 Redux를 위한 미들웨어 라이브러리로, Redux 애플리케이션에서 비동기 논리를 관리하는 접근 방식을 제공합니다.</p>
<ul>
<li>Redux Thunk는 함수 대신 액션 객체를 반환하는 액션 생성자를 작성할 수 있게 해주는 간단한 미들웨어 라이브러리입니다. 이 함수는 API 호출과 같은 비동기 작업을 수행하고 작업이 완료되면 액션을 디스패치할 수 있습니다. 이 함수는 또한 작업 결과에 따라 추가적인 액션을 디스패치할 수 있습니다. 이 접근 방식은 쉽게 배울 수 있으며 대부분의 일반적인 사용 사례에 사용할 수 있습니다. Redux Thunk는 구성이 간단하며 최소한의 구성으로 사용할 수 있습니다.</li>
<li>Redux Saga는 반면에 Redux에서 비동기 작업을 관리하기 위한 강력하고 유연한 미들웨어 라이브러리입니다. 이를 사용하면 &quot;사가&quot;라고 불리는 단계들의 시퀀스로 복잡한 비동기 로직을 정의할 수 있습니다. 사가는 더 복잡한 시나리오인 경합 조건, 재시도 및 취소와 같은 것들을 다루는 데 사용할 수 있습니다. Redux Saga는 제너레이터 함수를 사용하여 사가를 정의하는데, 이를 통해 더 복잡한 로직을 더 읽기 쉽고 직관적으로 표현할 수 있습니다. 그러나 Redux Thunk와 비교해 배우고 효과적으로 사용하는 것이 더 어려울 수 있습니다.</li>
</ul>
<p>종합하면, Redux Thunk는 Redux에서 비동기 작업을 관리하기 위한 더 간단하고 사용하기 쉬운 미들웨어 라이브러리이며, Redux Saga는 더 복잡한 시나리오를 처리하기 위한 강력하고 유연한 접근 방식을 제공합니다. 이 둘 사이의 선택은 대부분 애플리케이션의 복잡성과 처리해야 하는 특정 사용 사례에 달려 있습니다.</p>
<p>이전에 언급했듯이, 이 글에서는 Redux Toolkit과 함께 Redux Saga를 어떻게 구현하는지를 단계별로 보여드릴 것입니다. 사용된 사가 함수들은 간단한 방식으로 설명될 것입니다.</p>
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
<h1 id="_2-—-코딩-시작" tabindex="-1"><a class="header-anchor" href="#_2-—-코딩-시작" aria-hidden="true">#</a> 2 — 코딩 시작</h1>
<h2 id="a-—-react-프로젝트-생성" tabindex="-1"><a class="header-anchor" href="#a-—-react-프로젝트-생성" aria-hidden="true">#</a> A — React 프로젝트 생성</h2>
<p>예를 들어 redux-with-saga라는 React 프로젝트를 생성해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># 자바스크립트 프로젝트
$ npx create<span class="token operator">-</span>react<span class="token operator">-</span>app redux<span class="token operator">-</span><span class="token keyword">with</span><span class="token operator">-</span>saga

# 타입스크립트 프로젝트
$ npx create<span class="token operator">-</span>react<span class="token operator">-</span>app redux<span class="token operator">-</span><span class="token keyword">with</span><span class="token operator">-</span>saga <span class="token operator">--</span>template typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="b-—-패키지-추가" tabindex="-1"><a class="header-anchor" href="#b-—-패키지-추가" aria-hidden="true">#</a> B — 패키지 추가</h2>
<p>다음 패키지를 추가하고 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ npm install react<span class="token operator">-</span>redux @reduxjs<span class="token operator">/</span>toolkit redux<span class="token operator">-</span>saga
# 또는
$ yarn add react<span class="token operator">-</span>redux @reduxjs<span class="token operator">/</span>toolkit redux<span class="token operator">-</span>saga
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-—-redux-스토어-구성" tabindex="-1"><a class="header-anchor" href="#c-—-redux-스토어-구성" aria-hidden="true">#</a> C — Redux 스토어 구성</h2>
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
<p>패키지 설치가 완료되면 src/ 폴더 내에 &quot;store&quot; 또는 &quot;redux&quot; 또는 리덕스 구현을 가리키는 다른 이름의 새 폴더를 만듭니다:</p>
<p>&quot;redux&quot; 폴더 안에 index.ts/js 파일을 만들어 리덕스를 구성합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> createSagaMiddleware <span class="token keyword">from</span> <span class="token string">"@redux-saga/core"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> configureStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reduxjs/toolkit"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> sagaMiddleware <span class="token operator">=</span> <span class="token function">createSagaMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">reducer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>sagaMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="설명" tabindex="-1"><a class="header-anchor" href="#설명" aria-hidden="true">#</a> 설명:</h2>
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
<li>createSagaMiddleware — Redux 미들웨어 인스턴스를 생성하고 Sagas를 Redux Store에 연결합니다.</li>
<li>configureStore — @reduxjs/toolkit 패키지에서 제공하는 함수로, 합리적인 기본값과 내장 미들웨어가 포함된 Redux 스토어를 생성하는 과정을 간단화합니다.</li>
</ul>
<p>reducer 키는 단일 글로벌 reducer(object)에 결합된 모든 애플리케이션 reducer를 포함하는 객체입니다. 현재는 아직 reducer가 없기 때문에 빈 개체를 전달합니다.</p>
<p>middleware 키는 리덕스 구성에 사용될 미들웨어 목록을 나타냅니다.</p>
<p>마지막으로 스토어를 내보냅니다.</p>
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
<h2 id="d-—-우리-react-앱-내에서-저장소-구성-사용하기" tabindex="-1"><a class="header-anchor" href="#d-—-우리-react-앱-내에서-저장소-구성-사용하기" aria-hidden="true">#</a> D — 우리 React 앱 내에서 저장소 구성 사용하기</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./redux'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLElement
<span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span>
    <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Provider 컴포넌트는 react-redux 패키지에서 내보낸 React 엘리먼트로, App 컴포넌트를 자식으로 사용하고 store 구성을 store라는 prop으로 가져옵니다.</p>
<p>이 아이디어는 저장소가 응용 프로그램 내의 모든 컴포넌트에서 접근 가능하게 하는 것입니다. 하지만... 만약 Provider 엘리먼트를 App 컴포넌트 내부로 옮긴다면 어떻게 될까요? 이 경우, 모든 컴포넌트가 redux 저장소를 사용할 수 있지만 App 컴포넌트는 제외됩니다. 왜냐하면 Provider 컴포넌트의 &quot;children&quot; 중 하나로 간주되지 않기 때문입니다. 이렇게 간단한 문제입니다...</p>
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
<h2 id="e-—-루트-리듀서-생성" tabindex="-1"><a class="header-anchor" href="#e-—-루트-리듀서-생성" aria-hidden="true">#</a> E — 루트 리듀서 생성</h2>
<p>보통 Redux 스토어 설정을 끝냈지만... 우리는 더 많은 리듀서를 추가할수록 redux/index.ts/js 파일이 점점 커지는 것을 원치 않을 거예요. 그래서... redux/root-reducer.ts/js라는 별도의 파일을 생성하려고 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> userReducer <span class="token keyword">from</span> <span class="token string">"./users/slice"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type StateType <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 여기에 리듀서 유형을 작성하세요</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rootReducers <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 여기에 리듀서들을 작성하세요</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> rootReducers<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>모든 애플리케이션 리듀서를 하나로 결합한 객체인 루트 리듀서를 포함한 별도의 파일을 생성하는 것은 더 깔끔하고 명확하게 유지하는 가장 좋은 방법으로 여겨집니다.</p>
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
<p>StateType은 전역 상태의 타입을 나타내는 Typescript 타입입니다.</p>
<p>이제 index.ts/js 파일로 돌아가서 구성에서 reducer 키에 root reducer를 전달해줍니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> createSagaMiddleware <span class="token keyword">from</span> <span class="token string">"@redux-saga/core"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> configureStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reduxjs/toolkit"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rootReducers <span class="token keyword">from</span> <span class="token string">"./root-reducers"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> sagaMiddleware <span class="token operator">=</span> <span class="token function">createSagaMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 아래 줄을 업데이트하세요</span>
  <span class="token literal-property property">reducer</span><span class="token operator">:</span> rootReducers<span class="token punctuation">,</span>
  <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>sagaMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="f-—-슬라이스-만들기" tabindex="-1"><a class="header-anchor" href="#f-—-슬라이스-만들기" aria-hidden="true">#</a> F — 슬라이스 만들기</h2>
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
<p>REST API의 사용자 엔드포인트를 사용한다고 가정해 봅시다. 이를 위해 항상 코드를 깔끔하게 유지하고 싶어서 3개의 파일을 생성합니다.</p>
<ul>
<li>types.ts/js</li>
<li>slice.ts/js</li>
<li>sagas.ts/js</li>
</ul>
<h2 id="types-file" tabindex="-1"><a class="header-anchor" href="#types-file" aria-hidden="true">#</a> types file</h2>
<p>프로젝트 전반에 걸쳐 사용자 엔터티에 사용할 수 있는 모든 유형을 정의합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 사용자 유형 정의</span>
<span class="token keyword">export</span> type UserType <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">lastname</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">active</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">createdAt</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
  <span class="token literal-property property">updatedAt</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 단일 ID를 사용하여 사용자 상태를 가져오는 서브 상태를 나타내는 이 유형</span>
<span class="token keyword">export</span> type IUserState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> UserType <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token literal-property property">isLoading</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">errors</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 사용자 전역 상태</span>
<span class="token keyword">export</span> type UsersStateType <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> IUserState<span class="token punctuation">,</span>
  <span class="token comment">// 나중에 다음과 같은 다른 서브 상태를 추가할 수 있습니다:</span>
  <span class="token comment">// list,</span>
  <span class="token comment">// create,</span>
  <span class="token comment">// update,</span>
  <span class="token comment">// remove</span>
<span class="token punctuation">}</span>

<span class="token comment">// (1)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">USERS</span> <span class="token operator">=</span> <span class="token string">"users"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> type <span class="token constant">USERS</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> <span class="token constant">USERS</span><span class="token punctuation">;</span> <span class="token comment">// TypeScript 라인</span>

<span class="token comment">// (2)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">GET_USER_BY_ID</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">USERS</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/getUserAction</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">export</span> type <span class="token constant">GET_USER_BY_ID</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> <span class="token constant">GET_USER_BY_ID</span><span class="token punctuation">;</span> <span class="token comment">// TypeScript 라인</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(1) — 'users' 텍스트를 취하는 USERS 상수를 만들고, 상수 USERS와 동일한 이름을 가진 유형을 만들어 해당 유형을 const USERS의 유형으로 지정합니다. 이를 통해 TypeScript에게 말하는 것입니다. 유형이 USERS로 지정된 모든 것은 &quot;users&quot; 값을만 수락해야 합니다. &quot;users2&quot;와 같이 &quot;users&quot;를 잘못 입력하면 TypeScript가 변수가 값으로 &quot;users&quot;만 허용한다는 오류를 보여줄 것입니다.</p>
<p>이 기법을 사용하면 프로젝트가 커지면 코딩이 더 안전해질 것이며 &quot;usres&quot;와 같이 &quot;users&quot;를 잘못 입력할 수도 있습니다. 그래서 TypeScript가 경고를 표시해줄 것입니다.</p>
<p>(2)도 마찬가지입니다 — GET_USER_BY_ID```</p>
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
<h2 id="슬라이스-파일" tabindex="-1"><a class="header-anchor" href="#슬라이스-파일" aria-hidden="true">#</a> 슬라이스 파일</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createSlice<span class="token punctuation">,</span> PayloadAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reduxjs/toolkit"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">USERS</span><span class="token punctuation">,</span> UsersStateType<span class="token punctuation">,</span> UserType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./types"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">usersInitialState</span><span class="token operator">:</span> UsersStateType <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLoading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> usersSlice <span class="token operator">=</span> <span class="token function">createSlice</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">USERS</span><span class="token punctuation">,</span>
  <span class="token literal-property property">initialState</span><span class="token operator">:</span> usersInitialState<span class="token punctuation">,</span>
  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 이 액션은 사가 미들웨어를 트리거하고
       로더를 true로 설정하고 오류 메시지를 재설정합니다.
    */</span>
    <span class="token function-variable function">getUserAction</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">state</span><span class="token operator">:</span> UsersStateType<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> id <span class="token punctuation">}</span><span class="token operator">:</span> PayloadAction<span class="token operator">&lt;</span>string<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>isLoading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>errors <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getUserSuccessAction</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">state</span><span class="token operator">:</span> UsersStateType<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> user <span class="token punctuation">}</span><span class="token operator">:</span> PayloadAction<span class="token operator">&lt;</span>UserType<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>isLoading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>data <span class="token operator">=</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getUserErrorAction</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">state</span><span class="token operator">:</span> UsersStateType<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> error <span class="token punctuation">}</span><span class="token operator">:</span> PayloadAction<span class="token operator">&lt;</span>string<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>isLoading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>errors <span class="token operator">=</span> error<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* getUserSuccessAction 및 getUserErrorAction은 사가 내부에서 사용됩니다.
   React 컴포넌트에서는 getUserAction만 사용됩니다.
*/</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  getUserAction<span class="token punctuation">,</span>
  getUserSuccessAction<span class="token punctuation">,</span>
  getUserErrorAction
<span class="token punctuation">}</span> <span class="token operator">=</span> usersSlice<span class="token punctuation">.</span>actions<span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> usersSlice<span class="token punctuation">.</span>reducer<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>사용자 리듀서를 내보낸 후에는 루트 리듀서 파일에 추가하고 상태 유형을 업데이트해야합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> userReducer <span class="token keyword">from</span> <span class="token string">"./users/slice"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UsersStateType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./users/types"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> usersReducer <span class="token keyword">from</span> <span class="token string">"./users/slice"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type StateType <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">users</span><span class="token operator">:</span> UsersStateType<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rootReducers <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">users</span><span class="token operator">:</span> usersReducer<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> rootReducers<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="사가-파일" tabindex="-1"><a class="header-anchor" href="#사가-파일" aria-hidden="true">#</a> 사가 파일</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PayloadAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reduxjs/toolkit"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AxiosResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> put<span class="token punctuation">,</span> takeLatest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"redux-saga/effects"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserType<span class="token punctuation">,</span> <span class="token constant">GET_USER_BY_ID</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./types"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUserErrorAction<span class="token punctuation">,</span> getUserSuccessAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./slice"</span><span class="token punctuation">;</span>

<span class="token comment">// 제너레이터 함수</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">getUserSaga</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> id <span class="token punctuation">}</span><span class="token operator">:</span> PayloadAction<span class="token operator">&lt;</span>string<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// axios 호출을 함수로 내보낼 수도 있습니다.</span>
    <span class="token keyword">const</span> <span class="token literal-property property">response</span><span class="token operator">:</span> AxiosResponse<span class="token operator">&lt;</span>UserType<span class="token operator">></span> <span class="token operator">=</span> <span class="token keyword">yield</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">your-server-url:port/api/users/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token function">getUserSuccessAction</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token function">getUserErrorAction</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 제너레이터 함수</span>
<span class="token keyword">export</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">watchGetUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token function">takeLatest</span><span class="token punctuation">(</span><span class="token constant">GET_USER_BY_ID</span><span class="token punctuation">,</span> getUserSaga<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="제너레이터-함수란" tabindex="-1"><a class="header-anchor" href="#제너레이터-함수란" aria-hidden="true">#</a> 제너레이터 함수란?</h2>
<p>JavaScript에서 제너레이터 함수는 실행 중에 일시 중지되고 재개될 수 있는 특별한 종류의 함수입니다. 제너레이터 함수가 호출되면 이터레이터 객체가 반환되며, 이를 사용하여 함수의 실행을 제어할 수 있습니다.</p>
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
<p>제너레이터 함수는 일반 함수 구문과 구분되는 function* 구문을 사용하여 정의됩니다. 제너레이터 함수 내에서는 실행을 일시 중지하고 호출자에게 값을 반환하기 위해 yield 키워드가 사용됩니다. 제너레이터 함수가 다시 실행되면 중단한 곳부터 실행을 계속합니다.</p>
<p>다음은 간단한 제너레이터 함수의 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">myGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">myGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 2, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 3, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: undefined, done: true }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>자세한 내용은 여기에서 제너레이터 함수에 대해 더 읽어보세요.</p>
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
<p>yield — yield 키워드는 Redux Saga의 기본 요소로, Saga가 사용하는 제너레이터 함수가 디스패치된 액션에 대한 응답으로 실행을 일시 중지하고 다시 시작할 수 있도록 허용합니다. 제너레이터 함수가 yield 문을 만나면, 얻어진 값을 검색하는 데 사용할 수 있는 이터레이터를 반환합니다. 그러면 값은 Saga 미들웨어의 다른 부분에서 처리될 수 있습니다.</p>
<p>Redux Saga에서는 yield가 자주 다른 함수와 함께 사용됩니다. 예를 들어, call, put, select 등의 함수와 함께 사용됩니다. 예를 들어, call 함수는 비동기 함수를 호출하고 그 결과를 반환하는 데 사용됩니다.</p>
<p>put — put 함수는 액션을 Redux 스토어로 디스패치하는 데 사용됩니다.</p>
<p>takeLatest — Redux에서 takeLatest는 redux-saga 미들웨어에서 제공하는 함수로, 비동기 액션을 더욱 제어할 수 있는 방법을 제공합니다. Redux 스토어에 액션이 디스패치되면 takeLatest는 이전 진행 중인 작업을 취소하고 가장 최근 것만 실행합니다.</p>
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
<p>takeLatest를 사용하려면 특정 액션을 청취하는 다른 제너레이터 함수를 정의해야 합니다.</p>
<p>위의 코드에서 watchGetUser는 GET_USER_BY_ID 액션을 청취하는 제너레이터 함수입니다. 이 액션이 디스패치되면 getUserSaga 제너레이터 함수가 호출됩니다. getUserSaga는 API를 호출하고 API 호출이 성공 또는 실패할 때 put 효과를 사용하여 getUserSuccessAction 또는 getUserErrorAction 액션을 디스패치합니다.</p>
<p>takeLatest를 사용하는 장점은 이전 요청이 아직 진행 중이더라도 최신 요청만 처리된다는 것입니다. 이는 경합 조건을 피하고 응용 프로그램 상태가 항상 최신 데이터와 동기화되도록 하는 데 도움이 됩니다.</p>
<p>이제 watchGetUser 제너레이터 함수를 리덕스 프로세스에 추가할 수 있습니다. 따라서 ... 루트 리듀서 파일과 동일한 수준에 root-sagas.ts/js라는 새 파일을 만듭니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> all<span class="token punctuation">,</span> fork <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"redux-saga/effects"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchGetUser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./users/sagas"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">rootSaga</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token function">fork</span><span class="token punctuation">(</span>watchGetUser<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// Other forks</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> rootSaga<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rootSaga를 내보낸 후에는 리덕스 구성 파일에 추가해야 합니다. 따라서 index.ts/js 파일에서:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> createSagaMiddleware <span class="token keyword">from</span> <span class="token string">"@redux-saga/core"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> configureStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reduxjs/toolkit"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rootReducers <span class="token keyword">from</span> <span class="token string">"./root-reducers"</span><span class="token punctuation">;</span>
<span class="token comment">// 추가된 import</span>
<span class="token keyword">import</span> rootSaga <span class="token keyword">from</span> <span class="token string">"./root-sagas"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> sagaMiddleware <span class="token operator">=</span> <span class="token function">createSagaMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">reducer</span><span class="token operator">:</span> rootReducers<span class="token punctuation">,</span>
  <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>sagaMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 추가된 줄</span>
sagaMiddleware<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>rootSaga<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index 파일에서 수정된 내용을 기준으로 root-sagas 파일까지 되돌아가보겠습니다:</p>
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
<p>모든 / fork — Redux Saga에서 fork 및 all 함수는 동시에 발생하는 사가들을 생성하고 관리하는 데 사용됩니다.</p>
<p>fork는 부모 Saga와 동시에 실행되는 새로운 하위 Saga를 만드는 데 사용됩니다.</p>
<p>all 함수는 여러 개의 사가를 병렬로 실행하고 그 중 모두 완료되기를 기다린 후 부모 Saga의 실행을 계속합니다.</p>
<p>다른 사가가 있다면:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> all<span class="token punctuation">,</span> fork <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"redux-saga/effects"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchGetUser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./users/sagas"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">rootSaga</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token function">fork</span><span class="token punctuation">(</span>watchGetUser<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 아래에 감시자가 있는 경우</span>
    <span class="token comment">// fork(watchGetUsersList),</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> rootSaga<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>watchGetUser와 watchGetUsersList는 두 개의 사가이며, all을 사용하여 시작됩니다. all 함수는 두 사가가 완료될 때까지 부모 사가인 rootSaga의 실행을 계속합니다.</p>
<p>fork와 all을 사용함으로써 Redux Saga에서 동시에 작업하는 사가를 생성하고 관리할 수 있습니다. 이를 통해 여러 작업을 병렬로 실행하여 애플리케이션을 더 반응적이고 효율적으로 만들 수 있습니다.</p>
<p>run — Redux Saga에서 run 함수는 미들웨어를 시작하고 루트 사가를 실행하는 데 사용됩니다. run 함수는 루트 사가 함수인 하나의 인수를 사용합니다. 미들웨어 인스턴스의 run 함수에 루트 사가 함수를 전달하여 사가를 시작하고 발송된 액션에 대해 청취할 수 있게 합니다.</p>
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
<p>Middleware를 run 함수를 사용하여 시작하면 루트 Saga가 실행되고 그 안에 있는 제너레이터 함수가 시작됩니다. 그런 다음 미들웨어는 전달된 액션을 수신하고 해당 Saga 제너레이터 함수에게 yield 키워드를 사용하여 전달합니다.</p>
<p>만일 전달된 액션이 Saga에서 정의된 패턴과 일치하면, 미들웨어는 Saga를 yield 문에서 일시 중단하고 Saga 내의 코드를 실행합니다. Saga가 실행을 완료하면, 미들웨어는 제너레이터 함수를 재개하고 남은 전달된 액션을 계속 처리합니다.</p>
<h2 id="g-—-react-컴포넌트에서-redux-액션-사용" tabindex="-1"><a class="header-anchor" href="#g-—-react-컴포넌트에서-redux-액션-사용" aria-hidden="true">#</a> G — React 컴포넌트에서 Redux 액션 사용</h2>
<p>Redux 구성과 사가 미들웨어, 타입, 슬라이스 및 사가 파일을 생성한 후, 이제 상태를 사용하고 트리거 액션을 디스패치하는 시간입니다.</p>
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
<p>프로필 페이지를 나타내는 컴포넌트를 가지고 있다고 가정해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useDispatch<span class="token punctuation">,</span> useSelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-redux"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUserAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../redux/users/slice"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StateType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../redux/root-reducer"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">ProfilePage</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> isLoading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">state</span><span class="token operator">:</span> StateType</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">getUserAction</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>
        isLoading
        <span class="token operator">?</span>
        <span class="token punctuation">(</span><span class="token operator">&lt;</span>span<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">)</span>
        <span class="token operator">:</span>
        data
          <span class="token operator">?</span>
          <span class="token punctuation">(</span><span class="token operator">&lt;</span>div<span class="token operator">></span>안녕<span class="token punctuation">,</span> 나는 <span class="token punctuation">{</span>data<span class="token punctuation">.</span>name<span class="token punctuation">}</span>이야<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">)</span>
          <span class="token operator">:</span>
          <span class="token punctuation">(</span><span class="token operator">&lt;</span>span<span class="token operator">></span>사용자를 찾을 수 없어요<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useSelector — useSelector은 react-redux 라이브러리에서 제공하는 React 훅으로, 컴포넌트가 Redux 스토어에서 데이터를 읽을 수 있게 해줍니다. 이 함수는 컴포넌트가 관심 있는 스토어 부분을 반환하는 함수를 인수로 받습니다.</p>
<p>스토어가 변경될 때, useSelector은 선택된 데이터의 이전 값과 새 값을 비교하고, 두 값이 다르면 컴포넌트를 다시 렌더링합니다. 이를 통해 컴포넌트를 수동으로 구독하거나 컴포넌트에서 상태를 관리할 필요 없이 스토어와 동기화된 상태를 유지할 수 있습니다.</p>
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
<p>useSelector을 사용해서는 저장소에서 데이터를 읽어야 하며 동작을 디스패치하거나 저장소를 직접 수정해서는 안 됩니다.</p>
<p>useDispatch — Redux에서 useDispatch는 react-redux 라이브러리에서 제공하는 React 훅으로, 컴포넌트가 Redux 저장소에 동작을 디스패치할 수 있게 해줍니다. 컴포넌트 내에서 저장소에 변경을 일으킬 수 있는 방법을 제공합니다. Redux 저장소에서 제공하는 dispatch 함수에 대한 참조를 얻는 데 사용됩니다. 그러면 컴포넌트는 저장소를 변경하는 작업을 일으키기 위해 액션 객체와 함께 dispatch를 호출할 수 있습니다.</p>
<p>useDispatch는 동작을 디스패치하는 데만 사용해야 하며 저장소에서 데이터를 읽는 데는 사용해서는 안 됩니다.</p>
<p>useDispatch와 useSelector를 함께 사용하는 것은 Redux 애플리케이션에서 흔한 패턴입니다. 이를 통해 컴포넌트가 저장소에서 데이터를 읽고 동작을 디스패치하여 수정할 수 있게 됩니다.</p>
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
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>과거에는 Redux 라이브러리를 사용하여 데이터를 저장했었습니다. 하지만 redux-toolkit을 사용하면 예전보다 더 쉽고 더 간단한 코드로 작성할 수 있습니다. Redux 구조를 만드는 여러 방법이 있으니, 예를 들어 대용량 파일을 방지하기 위해 작은 슬라이스로 분할하는 등 여러 방법을 찾아보세요.</p>
<p>이 글을 읽어주셔서 즐거우셨기를 바라며, “간단하고 설명된 컨셉”으로 가득 차 있기를 바라겠습니다. 아직 이해하기 어려운 부분이 있거나 더 명확하지 않은 부분이 있다면 댓글 부분에 알려주시거나 제안 사항이 있으시다면 언제든지 알려주세요.</p>
<p>행복한 코딩 되세요!</p>
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
<p>참고 자료:</p>
<ul>
<li>https://create-react-app.dev/docs/</li>
<li>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*</li>
<li>https://reactrouter.com/en/main/hooks/use-params</li>
<li>https://redux-saga.js.org/docs/api/</li>
<li>https://redux-toolkit.js.org/</li>
</ul>
</div></template>
