<template><div><img src="@source/docs/Nextjs/2024-04-05-AdvancedReactPatternsandOptimizationReusabilityRenderPropsHOCsSuspenseandCodeSplitting/img/AdvancedReactPatternsandOptimizationReusabilityRenderProps-HOCsSuspenseandCodeSplitting_0.png" />
<h1 id="렌더-프롭스와-고차-컴포넌트-hocs" tabindex="-1"><a class="header-anchor" href="#렌더-프롭스와-고차-컴포넌트-hocs" aria-hidden="true">#</a> 렌더 프롭스와 고차 컴포넌트 (HOCs)</h1>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>복잡한 리액트 애플리케이션을 구축하는 것은 종종 코드 재사용성과 관심사 분리에 도전할 수 있습니다. 우리는 다른 컴포넌트 간에 유사한 코드 조각을 작성하는 상황에 직면할 수 있습니다. 이는 코드베이스가 혼잡해지고 변경 사항을 유지하기 어렵게 만들 수 있습니다.</p>
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
<p>여기서는 React에서 코드의 재사용성과 관심사의 분리를 촉진하는 두 가지 강력한 패턴인 Render Props와 Higher-Order Components (HOCs)를 살펴보겠습니다.</p>
<h1 id="render-props" tabindex="-1"><a class="header-anchor" href="#render-props" aria-hidden="true">#</a> Render Props</h1>
<p>Render Props란 무엇인가요?</p>
<p>Render Props는 함수를 prop으로 컴포넌트에 전달하는 것을 의미합니다. 이 함수는 부모 컴포넌트로부터 데이터나 prop을 받아와 해당 데이터를 기반으로 UI를 렌더링하는 역할을 합니다. 본질적으로 부모 컴포넌트는 렌더링 로직을 render prop을 통해 자식 컴포넌트에 위임합니다.</p>
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
<p>Render Props의 장점:</p>
<ul>
<li>유연성: Render Props를 사용하면 UI를 렌더링하는 방법에 대해 최대한 유연하게 조절할 수 있습니다. 자식 컴포넌트는 렌더링 로직을 완전히 제어할 수 있습니다.</li>
<li>조립성: Render Props는 코드 조립을 장려합니다. 여러 Render Props 컴포넌트를 쉽게 결합하여 더 복잡한 UI 요소를 구축할 수 있습니다.</li>
</ul>
<p>예: Render Props로 사용자 지정 Form 컴포넌트</p>
<p>렌더 프롭 함수를 허용하는 사용자 정의 Input 컴포넌트를 상상해보세요. 이 함수는 현재 값과 onChange 핸들러를 props로 받습니다. 자식 컴포넌트는 이를 기반으로 입력 요소 (텍스트, 선택 등)를 사용자 정의할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token comment">// 입력 로직을 위한 별도의 컴포넌트</span>
<span class="token keyword">const</span> <span class="token function-variable function">InputLogic</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> onChange<span class="token punctuation">,</span> onKeyPress <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleKeyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">"Enter"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      onKeyPress<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Enter 키를 눌렀을 때의 옵셔널 콜백</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">"text"</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span>
        onKeyDown<span class="token operator">=</span><span class="token punctuation">{</span>handleKeyDown<span class="token punctuation">}</span>
        placeholder<span class="token operator">=</span><span class="token string">"이름을 입력하세요"</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 렌더 프롭을 사용하는 입력 컴포넌트</span>
<span class="token keyword">const</span> <span class="token function-variable function">Input</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> onChange<span class="token punctuation">,</span> render <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> onChange<span class="token punctuation">,</span> InputLogic <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">WelcomeMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> <span class="token operator">...</span>otherProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  name <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p <span class="token punctuation">{</span><span class="token operator">...</span>otherProps<span class="token punctuation">}</span><span class="token operator">></span>환영합니다<span class="token punctuation">,</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>님<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>nameEntered<span class="token punctuation">,</span> setNameEntered<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleNameChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setName</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleKeyPress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setNameEntered</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleDelete</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setNameEntered</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleEdit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setNameEntered</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">renderInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span>Input
        value<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleNameChange<span class="token punctuation">}</span>
        render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> onChange<span class="token punctuation">,</span> InputLogic <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>InputLogic value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> onKeyPress<span class="token operator">=</span><span class="token punctuation">{</span>handleKeyPress<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">renderWelcomeMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>WelcomeMessage name<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"green"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span> <span class="token comment">// WelcomeMessage에 대한 추가 속성 예시</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>nameEntered <span class="token operator">?</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token function">renderWelcomeMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleDelete<span class="token punctuation">}</span><span class="token operator">></span>삭제<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleEdit<span class="token punctuation">}</span><span class="token operator">></span>편집<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
        <span class="token function">renderInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 MyForm 컴포넌트는 Input 컴포넌트를 렌더 프롭 함수와 함께 사용하여 실제 입력 요소와 해당 동작을 정의합니다.</p>
<h1 id="고차-컴포넌트-hoc" tabindex="-1"><a class="header-anchor" href="#고차-컴포넌트-hoc" aria-hidden="true">#</a> 고차 컴포넌트 (HOC)</h1>
<p>HOC는 무엇인가요?```</p>
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
<p>고차 컴포넌트(Higher-Order Components, HOCs)는 컴포넌트를 가져와서 새로운 컴포넌트를 반환하는 함수입니다. 새 컴포넌트는 원래 컴포넌트의 기능을 상속받고 추가적인 기능을 추가할 수도 있습니다. HOCs는 컴포넌트를 감싸서 공통 로직이나 동작을 삽입하는 방법입니다.</p>
<p>HOCs의 장단점:</p>
<ul>
<li>장점: 공통 로직을 별도의 HOC에 캡슐화하여 코드 재사용성을 촉진합니다.</li>
<li>단점: 사용에 조심하지 않으면 복잡한 컴포넌트 계층 구조와 잠재적인 네이밍 충돌을 일으킬 수 있습니다.</li>
</ul>
<p>예시: 인증을 위한 withAuth HOC</p>
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
<p>withAuth HOC를 만들어서 래핑된 컴포넌트를 렌더링하기 전에 사용자 인증을 확인하는 방법을 알아보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">withAuth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">WrappedComponent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isAuthenticated <span class="token operator">=</span> <span class="token function">useAuthHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 가정한 인증 훅 사용</span>

  <span class="token keyword">return</span> isAuthenticated <span class="token operator">?</span> <span class="token operator">&lt;</span>WrappedComponent <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">:</span> <span class="token operator">&lt;</span>Redirect to<span class="token operator">=</span><span class="token string">"/login"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 사용 예시</span>
<span class="token keyword">const</span> <span class="token function-variable function">MyProtectedPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>보호된 페이지에 오신 것을 환영합니다<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> AuthProtectedPage <span class="token operator">=</span> <span class="token function">withAuth</span><span class="token punctuation">(</span>MyProtectedPage<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 withAuth HOC는 컴포넌트(MyProtectedPage)를 가져와 인증을 확인한 후 원본 컴포넌트를 렌더링하기 전 새로운 컴포넌트를 반환합니다.</p>
<h1 id="비교-렌더-프롭스-vs-hocs" tabindex="-1"><a class="header-anchor" href="#비교-렌더-프롭스-vs-hocs" aria-hidden="true">#</a> 비교: 렌더 프롭스 vs HOCs</h1>
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
<p>Both render props and HOCs promote code reusability. Here’s a breakdown of their key differences:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-AdvancedReactPatternsandOptimizationReusabilityRenderPropsHOCsSuspenseandCodeSplitting/img/AdvancedReactPatternsandOptimizationReusabilityRenderProps-HOCsSuspenseandCodeSplitting_1.png" alt="Render Props vs HOCs"></p>
<p>Choosing the Right Approach:</p>
<ul>
<li>Use render props when you need fine-grained control over the UI rendering within the child component.</li>
<li>Use HOCs when you want to inject common logic or behavior without modifying the wrapped component’s UI structure too much.</li>
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
<p>선택은 종종 특정 사용 사례와 UI 렌더링에 대한 희망하는 제어 수준에 따라 달라집니다.</p>
<h2 id="여기는-주방-비유를-사용한-요약입니다" tabindex="-1"><a class="header-anchor" href="#여기는-주방-비유를-사용한-요약입니다" aria-hidden="true">#</a> 여기는 주방 비유를 사용한 요약입니다</h2>
<p>주방을 짓고 있는 상상을 해보세요.</p>
<ul>
<li>기본 React 패턴은 개별 재료(속성)를 사용하고 간단한 레시피(컴포넌트 조합)를 따라 작은 요리를 만드는 것과 같습니다. 이것은 기본 식사(소규모 프로젝트)에 적합합니다.</li>
<li>그러나 대규모 축제(복잡한 애플리케이션)를 위해서는 그것이 엉망이 됩니다! 동일한 재료(데이터)를 많은 요리사(컴포넌트)에게 전달해야 할 수도 있습니다. 이는 프롭스 드릴링이며 이는 레시피(코드)를 이해하고 업데이트하기 어렵게 만듭니다.</li>
<li>고급 React 패턴은 고급 조리 기술과 같습니다. 이것들은 대규모 식사를 위한 더 나은 주방(애플리케이션) 구축을 도와줍니다.</li>
<li>렌더 프롭스: 쉐프(컴포넌트)가 다른 쉐프에게 요리 일부를 준비하는 방법에 대한 특별한 지시(함수)를 제공하는 것과 같습니다. 이렇게 하면 쉐프들이 혼란스럽지 않고 지시사항(코드)을 공유할 수 있습니다. 이것은 요리(컴포넌트) 사이에서 복잡한 레시피(로직 또는 데이터)를 공유하는 데 좋습니다.</li>
<li>고차 컴포넌트(HOC): 어떤 요리(컴포넌트)에 추가적인 맛(기능)을 주기 위해 어떤 특별 제조 스파이스 믹스(HOC)를 추가할 수 있는 것을 상상해보세요. 이러한 스파이스 믹스는 여러 요리에서 재사용할 수 있습니다. 이것은 많은 요리(컴포넌트)에 소금(보안)이나 미리 채취된 야채(데이터 가져오기)와 같은 공통 기능을 추가하는 데 좋습니다.</li>
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
<h2 id="올바른-패턴을-선택하는-것은-요리에-따라-다릅니다" tabindex="-1"><a class="header-anchor" href="#올바른-패턴을-선택하는-것은-요리에-따라-다릅니다" aria-hidden="true">#</a> 올바른 패턴을 선택하는 것은 요리에 따라 다릅니다:</h2>
<ul>
<li>Render Props: 복잡한 레시피나 재료를 공유합니다.</li>
<li>HOCs: 여러 요리에 일반적인 맛을 더합니다.</li>
</ul>
<p>이러한 기술을 이해함으로써, 당신은 대마스터 셰프(React 개발자)가 되어 놀라운 잔치(애플리케이션)를 만들 수 있습니다!</p>
<p>The Context API and useContext in React</p>
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
<p>리액트 애플리케이션이 성장함에 따라 전역 상태를 효과적으로 관리하는 것이 중요해집니다. 이 글은 프롭 드릴링 없이 컴포넌트 간 데이터를 공유하는 강력한 도구인 Context API를 탐구합니다.</p>
<p>더 자세히 알아보려면 Context API에 대한 제 포괄적인 가이드를 확인해보세요:</p>
<h1 id="에러-바운더리와-서스펜스" tabindex="-1"><a class="header-anchor" href="#에러-바운더리와-서스펜스" aria-hidden="true">#</a> 에러 바운더리와 서스펜스.</h1>
<h2 id="리액트에서의-에러-처리" tabindex="-1"><a class="header-anchor" href="#리액트에서의-에러-처리" aria-hidden="true">#</a> 리액트에서의 에러 처리</h2>
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
<p>전통적으로 React 오류 처리는 componentDidMount와 같은 라이프사이클 메서드를 사용합니다. 기능적으로는 괜찮지만, 이 접근 방식은 예기치 못한 충돌로 인해 사용자 경험에 방해가 될 수 있습니다.</p>
<h2 id="오류-경계-우아한-저하" tabindex="-1"><a class="header-anchor" href="#오류-경계-우아한-저하" aria-hidden="true">#</a> 오류 경계: 우아한 저하</h2>
<p>오류 경계(Error Boundaries)는 자신의 하위 트리(모든 하위 컴포넌트 포함)에서 발생한 JavaScript 오류를 잡는 React 컴포넌트입니다. 오류가 발생하면 Error Boundary가 전체 애플리케이션을 크래시시키지 않고 대신 예비 UI를 렌더링하여 더 우아한 사용자 경험을 제공합니다.</p>
<h2 id="오류-경계-작동-방식-설명-기능성" tabindex="-1"><a class="header-anchor" href="#오류-경계-작동-방식-설명-기능성" aria-hidden="true">#</a> 오류 경계 작동 방식 설명: 기능성:</h2>
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
<li>에러 처리하기: 에러 바운더리는 componentDidCatch 라이프사이클 메서드를 구현합니다. 이 메서드는 에러 바운더리 하위에서 오류가 발생할 때 트리거되며, 이를 통해 에러 바운더리가 오류를 처리하고 대체 UI를 표시하여 오류가 상위 트리로 전파되어 전체 애플리케이션이 충돌하는 것을 방지할 수 있습니다.</li>
<li>대체 UI: componentDidCatch 내에서 에러 바운더리는 오류 정보에 액세스하여 선택적으로 대체 UI(예: 오류 메시지 또는 로딩 인디케이터)를 렌더링할 수 있습니다. 일반 콘텐츠 대신에 표시할 수 있습니다.</li>
</ul>
<p>React 컴포넌트에 에러 바운더리를 구현하려면 componentDidCatch 메서드를 가진 클래스 컴포넌트를 정의해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ErrorBoundary</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>hasError<span class="token punctuation">,</span> setHasError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>errorInfo<span class="token punctuation">,</span> setErrorInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleError</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> errorInfo</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setHasError</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setErrorInfo</span><span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 에러를 에러 보고 서비스에 기록</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 컴포넌트 마운트 시에 한 번만 에러 핸들러를 추가</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> handleError<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 컴포넌트 언마운트 시에 이벤트 리스너 정리</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> handleError<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    hasError <span class="token operator">?</span> <span class="token punctuation">(</span>
      <span class="token comment">// 대체 UI 렌더링</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>문제가 발생했습니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>details<span class="token operator">></span>
          <span class="token punctuation">{</span>error <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>error<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>
          <span class="token punctuation">{</span>errorInfo <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>errorInfo<span class="token punctuation">.</span>componentStack<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>details<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
      children
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ErrorBoundary<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>최상의 실천법:</p>
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
<li>전략적 배치: 에러 경계를 컴포넌트 계층 구조의 상위 수준에 배치하여 애플리케이션의 큰 부분에서 발생하는 오류를 잡을 수 있습니다.</li>
<li>경계 특정성: Error Boundary 내에서 특정 기능 또는 섹션에 초점을 맞추어 보다 세부적인 오류 처리를 할 수 있습니다.</li>
</ul>
<p>예시: API에서 데이터를 가져오는 컴포넌트를 상상해보세요. 네트워크 문제가 발생할 경우를 대비하여 해당 컴포넌트를 Error Boundary로 감쌀 수 있어서 대체 메시지를 표시할 수 있습니다.</p>
<h1 id="suspense-비동기-콘텐츠-및-코드-분할" tabindex="-1"><a class="header-anchor" href="#suspense-비동기-콘텐츠-및-코드-분할" aria-hidden="true">#</a> Suspense: 비동기 콘텐츠 및 코드 분할</h1>
<p>React 애플리케이션은 종종 데이터를 가져오거나 외부 컴포넌트를 비동기적으로로드하는 작업을 포함합니다. 이는 일부 UI가 데이터를 렌더링하기 전에 기다려야 하는 상황을 야기할 수 있어서 지연이 발생합니다. Suspense는 비동기 작업을 처리하고 콘텐츠를로드하는 동안 대체 UI를 표시하는 방법을 도입함으로써 이 문제에 대처합니다.</p>
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
<p>Suspense는 무엇인가요?</p>
<p>Suspense는 컴포넌트가 비동기 데이터가 완료될 때까지 기다리고 있다는 것을 나타내는 매커니즘입니다. Suspense 컴포넌트와 fallback 속성을 사용합니다.</p>
<h2 id="리액트-애플리케이션에서-suspense의-장점-논의" tabindex="-1"><a class="header-anchor" href="#리액트-애플리케이션에서-suspense의-장점-논의" aria-hidden="true">#</a> 리액트 애플리케이션에서 Suspense의 장점 논의:</h2>
<ul>
<li>선언적 데이터 가져오기: Suspense를 사용하면 개발자들은 컴포넌트 트리 내에서 데이터 종속성을 직접 선언할 수 있어 코드를 더 읽기 쉽고 유지보수하기 쉽게 만듭니다.</li>
<li>간편화된 오류 처리: Suspense는 컴포넌트가 오류 경계를 지정하고 로딩 및 오류 상태를 선언적으로 처리할 수 있도록 하여 오류 처리를 간편화합니다.</li>
<li>향상된 사용자 경험: Suspense를 사용하면 로딩, 오류 및 데이터 준비 상태간의 부드러운 전환을 가능하게 하여 전반적인 사용자 경험을 향상시킵니다.</li>
<li>코드 분할: Suspense는 코드 분할 기술과 함께 사용하여 응용 프로그램의 일부를 필요에 따라 로드하는데 활용될 수 있어 초기 로드 시간을 최적화합니다.</li>
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
<p>작동 방식:</p>
<ul>
<li>비동기 작업: 컴포넌트는 데이터를 가져오거나 외부 컴포넌트를 로드하기 위해 프로미스나 비동기 함수를 활용할 수 있습니다.</li>
<li>Suspense 컴포넌트: 비동기 작업을 Suspense 컴포넌트로 감쌉니다.</li>
<li>대체 UI: Suspense 컴포넌트에 대체(prop)를 제공합니다. 이는 비동기 작업이 완료될 때까지 표시되는 UI를 정의합니다.</li>
</ul>
<p>데이터 가져오기에 Suspense를 사용하는 방법을 보여주는 구현 예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token comment">// 훅을 사용하는 ErrorBoundary 컴포넌트</span>
<span class="token keyword">const</span> <span class="token function-variable function">ErrorBoundary</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>hasError<span class="token punctuation">,</span> setHasError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleError</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setHasError</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 디버깅을 위해 에러를 기록</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> handleError<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> handleError<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    hasError <span class="token operator">?</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>문제가 발생했습니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>에러<span class="token operator">:</span> <span class="token punctuation">{</span>error<span class="token operator">?.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
      children
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 에러 처리가 포함된 데이터 가져오기 함수</span>
<span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/users/1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">사용자 데이터 가져오기 실패: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>response<span class="token punctuation">.</span>statusText<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> error<span class="token punctuation">;</span> <span class="token comment">// Suspense가 잡을 에러를 다시 던집니다</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 데이터 가져오기에 Suspense를 사용하는 컴포넌트</span>
<span class="token keyword">const</span> <span class="token function-variable function">UserData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userData <span class="token operator">=</span> <span class="token function">useSuspense</span><span class="token punctuation">(</span><span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>사용자 데이터<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>이름<span class="token operator">:</span> <span class="token punctuation">{</span>userData<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>나이<span class="token operator">:</span> <span class="token punctuation">{</span>userData<span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>사용자 데이터 가져오기 에러<span class="token operator">:</span> <span class="token punctuation">{</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Suspense 및 Error Boundary 사용 예시</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>ErrorBoundary<span class="token operator">></span>
        <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>UserData <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ErrorBoundary<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 예제에서 fetchData 함수는 사용자 데이터를 비동기적으로 가져오는 것을 모방합니다. UserData 컴포넌트는 데이터를 가져오는 동안 렌더링을 일시 정지하기 위해 useSuspense 훅을 사용합니다. Suspense 컴포넌트는 로딩 대체 UI를 지정하는 데 사용되며, ErrorBoundary 컴포넌트가 추가되어 데이터 가져오기 중에 발생할 수있는 오류를 처리합니다.</p>
<p>React.lazy 및 Suspense를 사용한 동적 가져오기를 보여주는 간단한 React 애플리케이션</p>
<ol>
<li>SpecialIngredients.jsx (Pantry):</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">RecipeDetails</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// RecipeDetails 컴포넌트를 위한 코드</span>
  <span class="token comment">// ... (레시피에 관한 상세 정보를 표시)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> LazyRecipeDetails <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./RecipeDetails'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<ol start="2">
<li>RecipeList.jsx (메인 주방 공간):</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LazyRecipeDetails <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./SpecialIngredients'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">RecipeList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedRecipe<span class="token punctuation">,</span> setSelectedRecipe<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> recipes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'초콜릿 칩 쿠키'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'라자냐'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'타이 커리'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleRecipeClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">recipeId</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setSelectedRecipe</span><span class="token punctuation">(</span>recipes<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">recipe</span><span class="token punctuation">)</span> <span class="token operator">=></span> recipe<span class="token punctuation">.</span>id <span class="token operator">===</span> recipeId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>우리의 맛있는 요리 레시피<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token punctuation">{</span>recipes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">recipe</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>recipe<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handleRecipeClick</span><span class="token punctuation">(</span>recipe<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token punctuation">{</span>recipe<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>selectedRecipe <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>레시피 정보 가져오는 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>LazyRecipeDetails recipe<span class="token operator">=</span><span class="token punctuation">{</span>selectedRecipe<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> RecipeList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>App.jsx (주요 애플리케이션):</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> RecipeList <span class="token keyword">from</span> <span class="token string">'./RecipeList'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>RecipeList <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
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
<p>설명:</p>
<ul>
<li>SpecialIngredients.jsx 파일에는 React.lazy를 사용하여 RecipeDetails 컴포넌트를 보관합니다.</li>
<li>RecipeList.jsx 파일에는 레시피 목록을 관리하고 레시피를 선택할 수 있는 기능이 있으며, Suspense를 사용하여 팬트리(pantry)에서 LazyRecipeDetails를 조건부로 렌더링합니다.</li>
<li>App.jsx 파일은 애플리케이션의 진입점으로서 RecipeList 컴포넌트를 렌더링합니다.</li>
</ul>
<h2 id="리액트-애플리케이션에서-코드-분할하기" tabindex="-1"><a class="header-anchor" href="#리액트-애플리케이션에서-코드-분할하기" aria-hidden="true">#</a> 리액트 애플리케이션에서 코드 분할하기:</h2>
<ul>
<li>LargeComponent.jsx (분할할 대규모 컴포넌트):</li>
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
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">LargeComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 어떤 복잡한 로직 또는 데이터 가져오는 것을 모방합니다</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'대규모 컴포넌트 로드됨'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">이것은 대규모 컴포넌트입니다</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">복잡한 로직 또는 데이터를 포함합니다.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> LargeComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>App.jsx (메인 애플리케이션):</li>
</ol>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> Suspense<span class="token punctuation">,</span> lazy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> LazyLargeComponent <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./LargeComponent'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 동적 import</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLargeComponent<span class="token punctuation">,</span> setShowLargeComponent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleShowLargeComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setShowLargeComponent</span><span class="token punctuation">(</span><span class="token operator">!</span>showLargeComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleShowLargeComponent<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>showLargeComponent <span class="token operator">?</span> <span class="token string">'대규모 컴포넌트 숨기기'</span> <span class="token operator">:</span> <span class="token string">'대규모 컴포넌트 보이기'</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>showLargeComponent <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LazyLargeComponent</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>설명:</p>
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
<li>LargeComponent.jsx는 느리게 로드될 수 있는 큰 컴포넌트입니다.</li>
<li>App.jsx는 React의 lazy를 사용하여 LargeComponent를 필요할 때만 동적으로 불러옵니다.</li>
<li>showLargeComponent 상태 변수는 lazy로드된 컴포넌트를 렌더링할지 여부를 제어합니다.</li>
<li>버튼을 클릭하면 handleShowLargeComponent이 상태를 토글하고, 조건부로 Suspense로 감싼 LazyLargeComponent를 렌더링합니다.</li>
<li>Suspense는 큰 컴포넌트를 비동기적으로 가져올 때 &quot;로딩 중...&quot;과 같은 대체 UI를 제공합니다.</li>
</ul>
<p>장점:</p>
<ul>
<li>초기 로드 시간 개선: 사용자가 주 앱 콘텐츠를 빠르게 볼 수 있습니다.</li>
<li>번들 크기 감소: 초기 번들에 큰 컴포넌트가 포함되지 않습니다.</li>
<li>메모리 관리 개선: 큰 컴포넌트는 필요할 때만 로드됩니다.</li>
</ul>
<p>기억하세요:</p>
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
<li>빌드 도구(Webpack 등)를 구성하여 코드 분할을 효과적으로 처리해야 합니다.</li>
<li>더 고급 코드 분할 시나리오를 위해 react-loadable과 같은 라이브러리를 고려해 보세요.</li>
</ul>
<h2 id="렌더-프롭-render-props-과-고차-함수-컴포넌트-hocs-에-대한-주요-포인트" tabindex="-1"><a class="header-anchor" href="#렌더-프롭-render-props-과-고차-함수-컴포넌트-hocs-에-대한-주요-포인트" aria-hidden="true">#</a> 렌더 프롭(Render Props)과 고차 함수 컴포넌트(HOCs)에 대한 주요 포인트:</h2>
<ol>
<li>
<p><strong>패턴 소개</strong>: React 개발은 종종 코드 재사용성과 관심사 분리에 관한 도전을 포함합니다. 렌더 프롭과 고차 함수 컴포넌트는 이러한 도전에 대한 해결책을 제공합니다.</p>
</li>
<li>
<p><strong>렌더 프롭 정의</strong>: 렌더 프롭은 함수를 prop으로 컴포넌트에 전달하여 유연한 UI 렌더링과 코드 구성을 가능하게 합니다.</p>
</li>
</ol>
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
<ol start="3">
<li>
<p><strong>Render Props의 장점</strong>: Render Props는 유연성과 합성을 제공하여 컴포넌트가 렌더링 로직을 제어하고 코드 재사용을 촉진할 수 있습니다.</p>
</li>
<li>
<p><strong>커스텀 폼 컴포넌트 예제</strong>: 제공된 예시는 Render Props를 사용하여 커스텀 폼 컴포넌트를 만드는 방법을 보여줍니다. 이는 그 유연성과 합성성을 강조합니다.</p>
</li>
<li>
<p><strong>하이어오더 컴포넌트 정의</strong>: 하이어오더 컴포넌트(HOCs)는 컴포넌트를 가져와 새로운 컴포넌트를 반환하는 함수로, 일반적인 로직이나 동작을 캡슐화할 수 있습니다.</p>
</li>
<li>
<p><strong>HOCs의 장단점</strong>: HOCs는 코드 재사용을 촉진하지만, 사용이 적절하지 않으면 복잡한 컴포넌트 계층 구조와 네이밍 충돌을 일으킬 수 있습니다.</p>
</li>
</ol>
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
<ol start="7">
<li>
<p><strong>인증 예제</strong>: HOC(고차 컴포넌트)를 사용한 인증 예제는 마치 인증과 같은 일반적인 기능이 컴포넌트에 주입되는 방식을 보여줍니다.</p>
</li>
<li>
<p><strong>Render Props와 HOCs 비교</strong>: 두 패턴 모두 코드 재사용성을 촉진하지만, 사용할 패턴은 UI 렌더링 및 로직 주입에 대한 희망하는 수준에 따라 다릅니다.</p>
</li>
<li>
<p><strong>주방 개념을 활용한 비유</strong>: 주방 개념을 활용한 비유는 레시피를 공유하는 Render Props와 요리에 공통적인 맛을 더하는 HOC을 설명합니다.</p>
</li>
<li>
<p><strong>적절한 접근 방식 선택</strong>: Render Props와 HOCs 중 어떤 것을 선택할지는 특정 사용 사례와 UI 렌더링 및 로직 주입에 대한 희망하는 수준에 달렸습니다.</p>
</li>
</ol>
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
<p>이러한 고급 React 패턴 및 최적화 기술을 통해 함께하는 여정에 참여해 주셔서 감사합니다! 🚀</p>
<h1 id="스택데믹-🎓" tabindex="-1"><a class="header-anchor" href="#스택데믹-🎓" aria-hidden="true">#</a> 스택데믹 🎓</h1>
<p>끝까지 읽어 주셔서 감사합니다. 가기 전에:</p>
<ul>
<li>박수를 치시고 작가를 팔로우해 주시면 감사하겠습니다! 👏</li>
<li>저희를 팔로우해 주세요 X | LinkedIn | YouTube | Discord</li>
<li>다른 플랫폼에서도 만나보세요: In Plain English | CoFeed | Venture | Cubed</li>
<li>Stackademic.com에서 더 많은 콘텐츠를 확인해 보세요</li>
</ul>
</div></template>
