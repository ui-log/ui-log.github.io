<template><div><img src="@source/docs/Nextjs/2024-04-05-TestingSelectComponentswithReactTestingLibrary/img/TestingSelectComponentswithReactTestingLibrary_0.png" />
<p>원문은 https://claritydev.net 에서 원본으로 게시되었습니다.</p>
<p>React에서 Select 구성요소를 테스트하는 것은 사용자 상호작용 모의, 비동기 동작 처리, 구현의 다양성, 중첩된 구성요소의 복잡성 및 접근성 문제 등의 요소로 어려울 수 있습니다. React Testing Library를 사용하면이 프로세스가 단순화되지만 모든 도전 과제를 제거하는 것은 아닙니다.</p>
<p>이 게시물에서는 React Testing Library를 사용하여 Select 구성요소를 테스트하는 데 대한 최고의 관행 중 일부를 살펴볼 것입니다. 먼저 일반 HTML select 위에 래퍼에 대한 테스트를 작성한 다음 인기있는 react-select 라이브러리를 사용하여 구성요소를 테스트합니다. 최종 코드는 GitHub에서 사용할 수 있습니다.</p>
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
<h1 id="설정하기" tabindex="-1"><a class="header-anchor" href="#설정하기" aria-hidden="true">#</a> 설정하기</h1>
<p>테스트를 작성하기 전에 샘플 React 앱을 만들고 react-select 패키지를 설치할 거에요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app test<span class="token operator">-</span>select
npm i react<span class="token operator">-</span>select
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="네이티브-html-select-테스트하기" tabindex="-1"><a class="header-anchor" href="#네이티브-html-select-테스트하기" aria-hidden="true">#</a> 네이티브 HTML select 테스트하기</h1>
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
<p>우리는 기본 HTML select 요소를 감싸는 역할을 하는 컴포넌트를 테스트하기 시작할 것입니다. 이러한 컴포넌트를 가지고 있는 것은 매우 일반적이며, 선택 옵션을 렌더링하는 논리를 추상화합니다.</p>
<p>우리는 모든 코드를 components 폴더 안에 넣을 것입니다. components 폴더 안에 우리의 첫 번째 컴포넌트인 Select.js 파일을 생성하여 시작합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/components/Select.js</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Select</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> options<span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>select <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span>options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>option key<span class="token operator">=</span><span class="token punctuation">{</span>option<span class="token punctuation">.</span>value<span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>option<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token punctuation">{</span>option<span class="token punctuation">.</span>label<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 컴포넌트는 옵션 배열과 추가적인 props를 받습니다. 그런 다음 제공된 옵션을 기반으로 동적으로 생성된 옵션 요소를 가지고 있는 select 요소를 렌더링합니다.</p>
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
<p>구성요소가 준비되었으니, 이제 해당 구성요소에 대한 테스트를 작성할 준비가 되었습니다. 이를 위해 Select.test.js 파일을 만들겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/components/Select.test.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./Select"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> animals <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"dog"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Dog"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"cat"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Cat"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"lion"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Lion"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"tiger"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Tiger"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"elephant"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Elephant"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"giraffe"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Giraffe"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"zebra"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Zebra"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"penguin"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Penguin"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"panda"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Panda"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"koala"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Koala"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"Native select wrapper"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should render with default value selected"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Select options<span class="token operator">=</span><span class="token punctuation">{</span>animals<span class="token punctuation">}</span> defaultValue<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"cat"</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"combobox"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">"cat"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"option"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Cat"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>selected<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 테스트에서는 구성요소가 올바르게 기본값을 표시하고 선택한 값을 변경할 때 업데이트하는지 확인합니다. 여러 개의 속성이 없을 때 select 요소와 일치하는 것으로 자동 부여되는 암묵적인 ARIA 역할인 combobox 역할을 사용하여 select 요소를 일치시킵니다. 또한 Cat 옵션이 선택 속성을 가지는지도 확인합니다.</p>
<p>만약 select 요소를 얻기 위해 getByText 대신 getByRole 쿼리를 사용하는 이유에 궁금해하신다면, 이 문서에서 그런 이유에 대한 상세한 설명과 React Testing Library 테스트 작성을 위한 다른 팁들도 제시하고 있으니 참고하시기 바랍니다: React Testing Library 테스트 개선 방법.</p>
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
<p>다음으로, 값 선택이 올바르게 작동하는지 테스트할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/components/Select.test.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./Select"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> animals <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"dog"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Dog"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"cat"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Cat"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"lion"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Lion"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"tiger"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Tiger"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"elephant"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Elephant"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"giraffe"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Giraffe"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"zebra"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Zebra"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"penguin"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Penguin"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"panda"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Panda"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"koala"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Koala"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">jsx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> userEvent<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">render</span><span class="token punctuation">(</span>jsx<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"Native select wrapper"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should render with default value selected"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Select options<span class="token operator">=</span><span class="token punctuation">{</span>animals<span class="token punctuation">}</span> defaultValue<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"cat"</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"combobox"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">"cat"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"option"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Cat"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>selected<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should select correct value on change"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Select options<span class="token operator">=</span><span class="token punctuation">{</span>animals<span class="token punctuation">}</span> defaultValue<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"cat"</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">selectOptions</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"combobox"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"zebra"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"combobox"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">"zebra"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"option"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Zebra"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>selected<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리는 사용자 상호작용을 시뮬레이션하기 위해 user-event 라이브러리를 사용합니다. 먼저, 테스트를 렌더하고 userEvent 라이브러리를 설정하는 유틸리티 setup 함수를 작성합니다. 그런 다음, 네이티브 select 요소에 잘 작동하는 내장 selectOptions 메서드를 사용하여 옵션을 선택한 후 값이 변경되는지 확인합니다.</p>
<p>만약 React Testing Library를 사용하여 다른 폼 컴포넌트를 테스트하고 싶다면, 이 기사가 도움이 될 수 있을 것입니다: Testing React Hook Form With React Testing Library.</p>
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
<h1 id="react-testing-library를-사용하여-react-select-테스트하기" tabindex="-1"><a class="header-anchor" href="#react-testing-library를-사용하여-react-select-테스트하기" aria-hidden="true">#</a> React Testing Library를 사용하여 react-select 테스트하기</h1>
<p>일반 select 요소의 테스트는 비교적 간단합니다. 그러나 React에서는 그렇지 않습니다. 개발자들은 종종 비동기 옵션 로딩, 사용자 정의 디스플레이 옵션 및 사용자 지정 옵션 생성과 같은 기능이 필요합니다. 이러한 사용 사례를 해결하는 인기있는 라이브러리 중 하나가 react-select입니다. react-select은 다양한 상황을 위한 React Select 컴포넌트를 제공하는 강력한 라이브러리로, 매우 다재다능합니다. 그러나 이러한 Select 컴포넌트를 테스트하는 것은 기본 요소와 다른 사용자 정의 로직으로 인해 도전적일 수 있습니다.</p>
<p>React Testing Library를 사용하여 기본 Select 및 AsyncSelect 컴포넌트를 어떻게 테스트할 수 있는지 알아보겠습니다.</p>
<h2 id="동기-select-테스트하기" tabindex="-1"><a class="header-anchor" href="#동기-select-테스트하기" aria-hidden="true">#</a> 동기 Select 테스트하기</h2>
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
<p>리액트 셀렉트 컴포넌트를 테스트할 때 네이티브 셀렉트와 같은 방식으로 독립적인 컴포넌트로 테스트할 수 있지만, 폼 안에서 테스트하는 것이 더 쉽습니다. 이 접근 방식은 컴포넌트의 쿼리 및 데이터 변경을 단순화합니다.</p>
<p>ReactSelectForm 컴포넌트를 만들어 보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/components/ReactSelectForm.js</span>

<span class="token keyword">import</span> Select <span class="token keyword">from</span> <span class="token string">"react-select"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">ReactSelectForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectProps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> animals <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"dog"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Dog"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"cat"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Cat"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"lion"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Lion"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"tiger"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Tiger"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"elephant"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Elephant"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"giraffe"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Giraffe"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"zebra"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Zebra"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"penguin"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Penguin"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"panda"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Panda"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"koala"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Koala"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"동물 폼"</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"animals"</span><span class="token punctuation">}</span><span class="token operator">></span>동물<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>Select
        name<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"animals"</span><span class="token punctuation">}</span>
        inputId<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"animals"</span><span class="token punctuation">}</span>
        options<span class="token operator">=</span><span class="token punctuation">{</span>animals<span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token operator">...</span>selectProps<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 주의할 점이 몇 가지 있습니다. 먼저, 테스트에서 폼 값을 확인하기 위해 폼에 설명적인 aria-label을 추가했습니다. data-testid를 사용할 수도 있지만, aria-label은 접근성이 좋은 폼의 명칭을 제공합니다. 이렇게 하면 암시적인 ARIA 역할 속성인 form을 가지므로 테스트에서 getByRole(&quot;form&quot;) 쿼리를 사용할 수 있습니다.</p>
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
<p>또 다른 수정 사항은 Select에 레이블을 추가하는 것입니다. react-select은 선택된 값을 기본 수준의 입력 내부에 저장하기 때문에, 우리는 inputId prop을 제공하여 입력과 레이블을 연결할 수 있습니다. 이 prop은 레이블의 htmlFor 속성과 일치해야 합니다. 이를 통해 getByLabelText 쿼리를 사용하여 컴포넌트와 필드의 접근성을 향상할 수 있습니다. 레이블 없이 컴포넌트를 테스트해야 하는 경우, 고립된 상태로 getByText 쿼리를 사용하거나 일치시키기 위해 Select를 div로 랩하고 data-testid를 사용해야 하는 경우가 발생합니다. 마지막으로, Select에 name prop을 추가하여 해당 값이 양식에 저장되도록 합니다. 이제 테스트를 작성할 준비가 되었습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/components/ReactSelectForm.test.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactSelectForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./ReactSelectForm"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">jsx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> userEvent<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">render</span><span class="token punctuation">(</span>jsx<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"ReactSelectForm"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should render with default value selected"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>ReactSelectForm defaultValue<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"cat"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Cat"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">"Cat"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"form"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveFormValues</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">animals</span><span class="token operator">:</span> <span class="token string">"cat"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이전에 하던 것처럼, 기본값이 올바르게 표시되는지 확인하고 폼에 설정되는지 확인하겠습니다.</p>
<p>다음으로, 새로운 값을 선택하는 것이 제대로 작동하는지 테스트해볼 것입니다. 여기서는 selectOptions 도우미가 작동하지 않으므로 조심해야 합니다. 이를 테스트하는 몇 가지 방법이 있고, 가장 일반적인 두 가지 방법을 탐색해보겠습니다.</p>
<p>첫 번째 옵션은 선택하고 싶은 옵션을 수동으로 열어서 클릭하는 것입니다. 사용자가 상호 작용하는 것처럼 select 요소에 초점을 맞추고, 아래 화살표 버튼을 누르는 것을 모의하는 다음 선택하려는 옵션을 클릭하는 것입니다. 또는 Select 컨테이너를 클릭하여 초점을 맞추고 메뉴를 열 수도 있습니다.</p>
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
<p>테스트는 통과하지만 터미널에서 많은 경고 메시지를 볼 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">Warning</span><span class="token operator">:</span> An update to Select inside a test was not wrapped <span class="token keyword">in</span> <span class="token function">act</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">.</span>

When testing<span class="token punctuation">,</span> code that causes React state updates should be wrapped into <span class="token function">act</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token operator">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이는 react-select이 테스트 중 업데이트된 상태를 알리지 않은 경고 메시지입니다. 테스트 중 React 상태 업데이트를 일으키는 코드는 act(...)로 래핑되어야 합니다.</p>
<p>React Testing Library 13 버전 이전에서는 첫 번째 쿼리로 findBy*를 사용하여 이 경고를 해결할 수 있었지만, React 18과의 호환성을 위해 13 버전부터는 더 이상 작동하지 않습니다. 이와 관련된 GitHub 문제가 열려 있습니다.</p>
<p>경고 메시지를 해결하려면 모든 이벤트 호출을 별도의 act 함수로 래핑할 수 있지만, waitFor 유틸리티 도우미를 사용하여 모든 비동기 호출이 해결된 후에 요소를 쿼리할 수 있도록하는 것으로 이 프로세스를 간소화할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/components/ReactSelectForm.test.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> screen<span class="token punctuation">,</span> waitFor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should select correct value on change"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">setup</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ReactSelectForm defaultValue<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"cat"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Cat"</span> <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// await user.click(screen.getByLabelText("Animals"));</span>
    screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token string">"Animals"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">keyboard</span><span class="token punctuation">(</span><span class="token string">"[ArrowDown]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">"Zebra"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"form"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveFormValues</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">animals</span><span class="token operator">:</span> <span class="token string">"zebra"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-select-event-사용법" tabindex="-1"><a class="header-anchor" href="#react-select-event-사용법" aria-hidden="true">#</a> react-select-event 사용법</h2>
<p>지금까지 Select 컴포넌트에서 값을 수동으로 선택했습니다. 좋은 소식은 이 프로세스를 간단하게 만들어주는 react-select-event 라이브러리가 있다는 것입니다.</p>
<p>이 라이브러리를 사용하여 테스트를 업데이트하여 차이점을 확인해봅시다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/components/ReactSelectForm.test.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-select-event"</span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"변경 시 올바른 값 선택해야 함"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>ReactSelectForm defaultValue<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"cat"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Cat"</span> <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">select</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token string">"동물"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"얼룩말"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"form"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveFormValues</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">animals</span><span class="token operator">:</span> <span class="token string">"얼룩말"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 라이브러리는 Select 컴포넌트에서 값 선택에 대한 수동 로직을 추상화합니다. 또한 act() 경고를 방지하기 위해 select 호출을 waitFor로 감싸야 합니다. 추가적으로 더 많은 추상화를 위해 유틸리티 함수를 만들 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">selectOptions</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">input<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">select</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>react-select-event를 사용하는 또 다른 장점은 동일한 API를 사용하여 여러 요소를 선택할 수 있다는 것입니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/components/ReactSelectForm.test.js</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"멀티셀렉트와 함께 작동해야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>ReactSelectForm isMulti <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> <span class="token function">selectOptions</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token string">"Animals"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"Zebra"</span><span class="token punctuation">,</span> <span class="token string">"Lion"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"form"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveFormValues</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">animals</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"zebra"</span><span class="token punctuation">,</span> <span class="token string">"lion"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이로써, 우리는 Select 컴포넌트에 대한 기본적인 테스트를 완료했습니다.</p>
<h2 id="비동기-react-select-테스트" tabindex="-1"><a class="header-anchor" href="#비동기-react-select-테스트" aria-hidden="true">#</a> 비동기 react-select 테스트</h2>
<p>비동기 react-select을 테스트하는 것은 기본 react-select 컴포넌트와는 조금 다릅니다. 이는 요소들을 쿼리하기 전에 선택 옵션이 로드되기를 기다려야 하는 필요 때문입니다.```</p>
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
<p>이 테스트 방법을 보여주기 위해 새로운 ReactAsyncSelectForm 컴포넌트를 만들어보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/components/ReactAsyncSelectForm.js</span>

<span class="token keyword">import</span> Select <span class="token keyword">from</span> <span class="token string">"react-select/async"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">ReactAsyncSelectForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectProps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">loadOptions</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"dog"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Dog"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"cat"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Cat"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"lion"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Lion"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"tiger"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Tiger"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"elephant"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Elephant"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"giraffe"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Giraffe"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"zebra"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Zebra"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"penguin"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Penguin"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"panda"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Panda"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"koala"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Koala"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"animal form"</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"animals"</span><span class="token punctuation">}</span><span class="token operator">></span>Animals<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>Select
        name<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"animals"</span><span class="token punctuation">}</span>
        inputId<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"animals"</span><span class="token punctuation">}</span>
        loadOptions<span class="token operator">=</span><span class="token punctuation">{</span>loadOptions<span class="token punctuation">}</span>
        defaultOptions
        <span class="token punctuation">{</span><span class="token operator">...</span>selectProps<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 주요한 차이점은 react-select의 async Select 버전을 사용하고 옵션을 비동기적으로 로딩하기 위해 Promise를 사용한다는 점입니다. 또한 컴포넌트가 로드될 때 옵션 가져오기를 시작하는 defaultOptions prop을 추가했습니다.</p>
<p>이제 첫 번째 테스트를 추가할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/components/ReactAsyncSelectForm.test.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactAsyncSelectForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./ReactAsyncSelectForm"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">jsx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> userEvent<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">render</span><span class="token punctuation">(</span>jsx<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"ReactAsyncSelectForm"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should render with default value selected"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>ReactAsyncSelectForm defaultValue<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"cat"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Cat"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByText</span><span class="token punctuation">(</span><span class="token string">"Cat"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"form"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveFormValues</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">animals</span><span class="token operator">:</span> <span class="token string">"cat"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>비동기 선택을 사용할 때 가장 큰 차이점은 동기 방식의 메소드(getBy* 등)를 사용할 수 없다는 것입니다. 요소를 쿼리하려면 비동기 옵션이 로드되고 컴포넌트 상태가 이에 맞게 업데이트되기를 기다려야 합니다. 이를 위해 쿼리를 waitFor 함수로 감싸거나 첫 번째 쿼리에 findBy*를 사용할 수 있습니다. 이를 통해 비동기 작업이 완료될 때까지 기다린 후 요소를 정상적으로 쿼리할 수 있습니다.</p>
<p>나머지 테스트는 이미 waitFor 래퍼를 사용하고 있기 때문에 동기 버전과 동일할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen<span class="token punctuation">,</span> waitFor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-select-event"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactAsyncSelectForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./ReactAsyncSelectForm"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">jsx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> userEvent<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">render</span><span class="token punctuation">(</span>jsx<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">selectOptions</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">input<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">select</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"ReactAsyncSelectForm"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should render with default value selected"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>ReactAsyncSelectForm defaultValue<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"cat"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Cat"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByText</span><span class="token punctuation">(</span><span class="token string">"Cat"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"form"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveFormValues</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">animals</span><span class="token operator">:</span> <span class="token string">"cat"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should select correct value on change"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>ReactAsyncSelectForm defaultValue<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"cat"</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Cat"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> <span class="token function">selectOptions</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token string">"Animals"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"Zebra"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"form"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveFormValues</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">animals</span><span class="token operator">:</span> <span class="token string">"zebra"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should work with multi-select"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>ReactAsyncSelectForm inputId<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"animals"</span><span class="token punctuation">}</span> isMulti <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> <span class="token function">selectOptions</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token string">"Animals"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"Zebra"</span><span class="token punctuation">,</span> <span class="token string">"Lion"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"form"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveFormValues</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">animals</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"zebra"</span><span class="token punctuation">,</span> <span class="token string">"lion"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<p>React에서 Select 컴포넌트를 테스트하는 것은 기능, 동작 및 접근성을 보장하기 위한 개발 프로세스의 중요한 부분입니다. React Testing Library를 사용하여, 우리는 다양한 시나리오를 다루고, react-select와 같은 라이브러리에서 제공하는 사용자 정의 Select 컴포넌트 및 네이티브 select 요소의 복잡성을 다룰 수 있는 효과적인 테스트를 작성할 수 있습니다.</p>
<p>이 게시물에서 안내된 단계를 따라가면, 네이티브 select, 동기 및 비동기 react-select 컴포넌트를 효과적으로 테스트하고, 접근성에 대한 최선의 방법을 유지할 수 있을 것입니다.</p>
<h1 id="참고-자료와-리소스" tabindex="-1"><a class="header-anchor" href="#참고-자료와-리소스" aria-hidden="true">#</a> 참고 자료와 리소스</h1>
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
<li>튜토리얼에 대한 코드가 포함된 GitHub</li>
<li>GitHub: waitFor을 getAllBy 쿼리로 사용할 때 findAllBy와 동일하지 않음</li>
<li>MDN: 폼 기술적 요약</li>
<li>MDN: 선택 요소</li>
<li>MDN: 선택 기술적 요약</li>
<li>React Select</li>
<li>React Testing Library</li>
<li>User Event</li>
<li>W3C: 접근 가능한 이름</li>
<li>react-select-event</li>
</ul>
<p>원문은 https://claritydev.net에서 원본을 볼 수 있습니다.</p>
</div></template>
