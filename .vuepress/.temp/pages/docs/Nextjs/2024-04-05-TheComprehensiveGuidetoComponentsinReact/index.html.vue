<template><div><h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개:</h1>
<p>웹사이트를 방문할 때 사용자로서 가장 눈에 띄는 것은 외관과 기능입니다. 그것은 매력적이고 이해하기 쉽고 사용하기 편리해야 합니다. 이 아름다운 사이트들이 어떻게 만들어지는지 궁금했던 적이 있나요? 그렇다면, 그것들은 React와 같은 다양한 프레임워크와 라이브러리를 사용하여 만들어집니다. React는 완전히 컴포넌트로 구성되어 있습니다. 이 블로그 글은 주로 초보자 친화적인 방식으로 컴포넌트가 무엇이며, 왜 필요한지, 그 이점은 무엇인지, 유형은 무엇인지 등을 이해하는 데 초점을 맞춥니다. 그러니 시작해봅시다! 🤩</p>
<p><img src="@source/docs/Nextjs/2024-04-05-TheComprehensiveGuidetoComponentsinReact/img/TheComprehensiveGuidetoComponentsinReact_0.png" alt="The Comprehensive Guide to Components in React"></p>
<h1 id="목차" tabindex="-1"><a class="header-anchor" href="#목차" aria-hidden="true">#</a> 목차:</h1>
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
<h1 id="소개-1" tabindex="-1"><a class="header-anchor" href="#소개-1" aria-hidden="true">#</a> 소개:</h1>
<ul>
<li>컴포넌트란 무엇인가요?</li>
<li>리액트 개발에서 컴포넌트가 왜 중요한가요?</li>
<li>UI를 다른 컴포넌트로 나누는 방법은 무엇인가요?</li>
<li>새로운 컴포넌트를 만드는 시점은 언제인가요?</li>
<li>컴포넌트를 만들 때 유의해야 할 사항은 무엇인가요?</li>
<li>컴포넌트 라이프사이클은 무엇인가요?</li>
<li>컴포넌트의 종류:
<ul>
<li>함수형 컴포넌트</li>
<li>클래스 컴포넌트</li>
<li>순수 컴포넌트</li>
<li>고차 컴포넌트(HOC)</li>
<li>표현형 컴포넌트</li>
</ul>
</li>
<li>컴포넌트 합성이란 무엇인가요?</li>
<li>위에서 언급한 몇 가지 기본 용어:
<ul>
<li>JSX</li>
<li>Props</li>
<li>State</li>
<li>Prop drilling</li>
</ul>
</li>
<li>결론</li>
</ul>
<h1 id="컴포넌트란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#컴포넌트란-무엇인가요" aria-hidden="true">#</a> 컴포넌트란 무엇인가요?</h1>
<p>컴포넌트는 React에서 사용자 인터페이스의 구성 요소입니다. 개발자로서 전체 애플리케이션을 여러 컴포넌트로 나누어 각 컴포넌트마다 헤더, 푸터 등과 같은 특정 기능과 UI를 연결합니다. 이러한 모든 컴포넌트를 모아 하나의 전체 애플리케이션을 구성합니다. 각 컴포넌트는 자체 데이터/내용, 로직, 외관/스타일을 갖습니다. 컴포넌트는 재사용되며 중첩되며 props를 이용해 데이터를 공유할 수 있습니다.</p>
<h1 id="리액트-개발에서-컴포넌트가-왜-중요한가요" tabindex="-1"><a class="header-anchor" href="#리액트-개발에서-컴포넌트가-왜-중요한가요" aria-hidden="true">#</a> 리액트 개발에서 컴포넌트가 왜 중요한가요?</h1>
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
<li>재사용성: 컴포넌트를 사용하면 UI를 작은 조각으로 나눌 수 있어 유지보수가 쉽고 응용 프로그램의 다양한 부분에서 재사용할 수 있어 코드를 중복해서 작성할 필요가 없다.</li>
<li>관심사 분리: 각 컴포넌트는 특정 기능 또는 UI 작업을 처리하며 리스트 렌더링, 사용자 상호 작용 관리, 상태 처리 등을 담당한다. 이는 더 깨끗하고 유지보수하기 쉬운 코드를 촉진한다.</li>
</ul>
<h2 id="어떻게-ui를-다른-컴포넌트로-분할할까요" tabindex="-1"><a class="header-anchor" href="#어떻게-ui를-다른-컴포넌트로-분할할까요" aria-hidden="true">#</a> 어떻게 UI를 다른 컴포넌트로 분할할까요?</h2>
<p>우리는 UI를 해당하는 논리와 컴포넌트의 재사용성에 기반하여 분할합니다. 각 컴포넌트는 특정 책임, 논리, 그리고 재사용성을 가져야 합니다. 컴포넌트는 상태가 없는 컴포넌트(표현만을 위한 것), 상태를 포함하고 재사용이 가능한 상태 컴포넌트, 또는 구조적 컴포넌트(큰 컴포넌트이며 종종 페이지 레이아웃을 담당)일 수 있습니다.</p>
<h2 id="언제-새로운-컴포넌트를-생성해야-할까요" tabindex="-1"><a class="header-anchor" href="#언제-새로운-컴포넌트를-생성해야-할까요" aria-hidden="true">#</a> 언제 새로운 컴포넌트를 생성해야 할까요?</h2>
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
<p>✅ 컴포넌트 내의 콘텐츠가 서로 밀접한 관련이 없을 때는 이를 위해 새로운 컴포넌트를 만드세요.</p>
<p>✅ 코드 일부가 재사용 가능하고 응용 프로그램의 다른 부분에서 재사용하고 싶을 때는 별도의 컴포넌트로 만드세요.</p>
<p>✅ 컴포넌트가 다양한 작업을 수행하고 너무 많은 props 및 상태/효과가 필요할 때는 이를 새로운 컴포넌트로 분리하세요.</p>
<p>✅ 코드가 혼란스럽거나 복잡할 때는 해당 부분을 작은 컴포넌트로 분할하세요.</p>
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
<h1 id="컴포넌트를-만들-때-주의할-점" tabindex="-1"><a class="header-anchor" href="#컴포넌트를-만들-때-주의할-점" aria-hidden="true">#</a> 컴포넌트를 만들 때 주의할 점:</h1>
<p>✔️ 컴포넌트 이름은 항상 &quot;대문자&quot;로 시작해야 합니다.</p>
<p>✔️ 각 컴포넌트는 하나의 JSX 요소만 반환해야 합니다.</p>
<p>✔️ 한 컴포넌트에서 반환할 여러 요소가 있는 경우, div나 React fragment(``,<code v-pre>/</code>)로 감싸야 합니다.</p>
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
<p>✔️ 컴포넌트 정의 내에서 직접적으로 컴포넌트를 호출하는 것을 피해야 합니다. 그렇게 하면 무한 루프가 발생할 수 있습니다.</p>
<h1 id="컴포넌트-라이프사이클이란" tabindex="-1"><a class="header-anchor" href="#컴포넌트-라이프사이클이란" aria-hidden="true">#</a> 컴포넌트 라이프사이클이란?</h1>
<p>컴포넌트는 마운팅 단계, 리렌더링 단계, 언마운팅 단계 등 다양한 단계를 거칩니다.</p>
<p>✅ 마운팅 단계/초기 렌더링 — 컴포넌트가 처음으로 렌더링됩니다. 새로운 상태와 프롭스가 생성됩니다.</p>
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
<p>✅ 다시 렌더링 단계(선택적인 단계) — 상태, 프롭스, 부모 컴포넌트의 다시 렌더링 또는 컨텍스트 변경이 발생할 때 발생합니다.</p>
<p>✅ 언마운팅 단계 — 컴포넌트 인스턴스가 파기되고 제거됩니다. 상태와 프롭스도 삭제됩니다.</p>
<h1 id="컴포넌트-유형" tabindex="-1"><a class="header-anchor" href="#컴포넌트-유형" aria-hidden="true">#</a> 컴포넌트 유형:</h1>
<ul>
<li>함수형 컴포넌트</li>
<li>클래스 컴포넌트</li>
<li>순수 컴포넌트</li>
<li>고차 컴포넌트(HOCs)</li>
<li>프레젠테이션 컴포넌트</li>
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
<h2 id="기능적-컴포넌트" tabindex="-1"><a class="header-anchor" href="#기능적-컴포넌트" aria-hidden="true">#</a> 기능적 컴포넌트:</h2>
<p>기능적 컴포넌트는 리액트에서 컴포넌트를 작성하는 일반적이고 현대적인 방법입니다. 컴포넌트를 만드는 가장 간단한 형태입니다. 자바스크립트 함수를 작성하는 것과 비슷하지만 입력으로 프롭을 받고 출력으로 JSX(JavaScript XML)를 반환하여 컴포넌트의 UI를 표현하는 등의 기능을 추가적으로 제공합니다.</p>
<p>리액트 훅스가 도입되면서 기능적 컴포넌트는 더 많은 기능과 유연성을 얻게 되었으며, 클래스 컴포넌트를 사용하지 않고도 상태(state)와 부수효과(side effects)를 관리할 수 있게 되었습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// app component는 모든 다른 컴포넌트를 중첩할 메인 컴포넌트입니다</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">></span>
           <span class="token operator">&lt;</span>Hello <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>Msg <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">}</span>
 <span class="token comment">// Hello 컴포넌트 만들기</span>
<span class="token keyword">function</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello World <span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token comment">// Msg 컴포넌트 만들기</span>
<span class="token keyword">function</span> <span class="token function">Msg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>컴포넌트에 대해 배웠습니다<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token comment">//출력:</span>
Hello World<span class="token operator">!</span>
컴포넌트에 대해 배웠습니다
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="클래스-컴포넌트" tabindex="-1"><a class="header-anchor" href="#클래스-컴포넌트" aria-hidden="true">#</a> 클래스 컴포넌트:</h2>
<p>클래스 컴포넌트는 React를 확장한 ES6 클래스입니다. Component. 그들은 JSX를 반환하는 render() 메서드를 가지고 있습니다. 함수형 컴포넌트와 비교하여 더 복잡한 구문을 가지고 있으며, 전통적으로 상태 및 라이프사이클 메서드를 관리하는 데 사용됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello<span class="token punctuation">,</span> World<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="순수-퓨어-컴포넌트" tabindex="-1"><a class="header-anchor" href="#순수-퓨어-컴포넌트" aria-hidden="true">#</a> 순수(퓨어) 컴포넌트:</h2>
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
<p>순수 컴포넌트는 리액트에서의 성능 최적화 방법 중 하나에요. 클래스 컴포넌트와 유사하지만 shouldComponentUpdate()을 자동으로 구현하여 얕은 속성 및 상태 비교로 다시 렌더링이 필요한지 확인해 불필요한 다시 렌더링을 방지합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyPureComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>안녕<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="고차-컴포넌트-hoc" tabindex="-1"><a class="header-anchor" href="#고차-컴포넌트-hoc" aria-hidden="true">#</a> 고차 컴포넌트(HOC):</h2>
<p>고차 컴포넌트는 컴포넌트를 입력으로 받아 새로운 향상된 프로퍼티를 추가한 새로운 컴포넌트를 반환하는 함수입니다. 일반적인 기능을 여러 컴포넌트에서 추상화하기 위해 공통 기능을 별도의 컴포넌트로 분리하고 여러 컴포넌트에 적용하여 코드 재사용성을 높입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token comment">// 컴포넌트에 카운터 기능을 추가하는 고차 컴포넌트(Higher-Order Component, HOC) 함수를 정의해봤어요</span>
<span class="token keyword">const</span> <span class="token function-variable function">counterFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">WrappedComponent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

<span class="token comment">// HOC 컴포넌트인 WithCounter를 만들었어요</span>
  <span class="token keyword">const</span> <span class="token function-variable function">WithCounter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 카운터 증가를 처리하는 함수에요</span>
    <span class="token keyword">const</span> <span class="token function-variable function">incrementCounter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token operator">&lt;</span>WrappedComponent count<span class="token operator">=</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span> incrementCounter<span class="token operator">=</span><span class="token punctuation">{</span>incrementCounter<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// HOC 컴포넌트를 반환해요</span>
  <span class="token keyword">return</span> WithCounter<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 카운터를 표시하고 클릭 시 증가시키는 간단한 컴포넌트를 정의해봤어요</span>
<span class="token keyword">const</span> <span class="token function-variable function">CounterComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> count<span class="token punctuation">,</span> incrementCounter <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>Counter<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>incrementCounter<span class="token punctuation">}</span><span class="token operator">></span>Increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// 동일한 HOC를 사용하는 다른 컴포넌트에요</span>
<span class="token keyword">const</span> <span class="token function-variable function">AnotherCounter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> count<span class="token punctuation">,</span> incrementCounter <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>Another Counter<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>incrementCounter<span class="token punctuation">}</span><span class="token operator">></span>Increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// CounterComponent에 HOC를 적용해요</span>
<span class="token keyword">const</span> CounterWithCounter <span class="token operator">=</span> <span class="token function">withCounter</span><span class="token punctuation">(</span>CounterComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// AnotherCounter에 HOC를 적용해요</span>
<span class="token keyword">const</span> AnotherCounterWithCounter <span class="token operator">=</span> <span class="token function">withCounter</span><span class="token punctuation">(</span>AnotherCounter<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 사용 예시에요</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>CounterWithCounter <span class="token operator">/</span><span class="token operator">></span>
      
      <span class="token operator">&lt;</span>AnotherCounterWithCounter <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>여기서는 두 카운터 컴포넌트에서 카운트를 증가시키는 일반 기능을 추출하여 공통 HOC 컴포넌트를 만들고 이를 사용해 카운터 컴포넌트를 감쌌어요.</li>
</ul>
<h2 id="프레젠테이션-컴포넌트" tabindex="-1"><a class="header-anchor" href="#프레젠테이션-컴포넌트" aria-hidden="true">#</a> 프레젠테이션 컴포넌트:</h2>
<p>이러한 컴포넌트들은 주로 외관에 초점을 맞춥니다. props를 통해 데이터를 받아 UI 요소를 렌더링합니다. 일반적으로 상태가 없는 함수형 컴포넌트입니다. 예시: 버튼, 카드, 헤더.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>header<span class="token operator">></span>React Components<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="컴포넌트-합성이란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#컴포넌트-합성이란-무엇인가요" aria-hidden="true">#</a> 컴포넌트 합성이란 무엇인가요?</h1>
<p>컴포넌트 합성은 서로 다른 컴포넌트를 결합하여 children props를 사용하여 재사용 가능하고 동적인 컴포넌트로 만드는 방법입니다. children prop은 컴포넌트가 자식 컴포넌트를 렌더링할 수 있도록 하는 특별한 prop입니다. 이를 통해 컴포넌트를 동적이고 다용도로 만들 수 있습니다.</p>
<ul>
<li>컴포넌트 합성은 종종 다른 컴포넌트를 props로 전달하여 동적 렌더링과 사용자 정의를 가능하게 합니다.</li>
<li>컴포넌트 합성은 여러 개의 컴포넌트 층을 통과해야 하는 &quot;prop drilling&quot; 문제를 피하는 데 도움이 됩니다.</li>
<li>각 레이어를 통해 props를 수동으로 전달하는 대신 children prop을 사용하여 필요한 컴포넌트에 직접 props를 전달할 수 있습니다.</li>
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
<h1 id="위에서-언급한-몇-가지-기본-용어" tabindex="-1"><a class="header-anchor" href="#위에서-언급한-몇-가지-기본-용어" aria-hidden="true">#</a> 위에서 언급한 몇 가지 기본 용어:</h1>
<h2 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx" aria-hidden="true">#</a> JSX:</h2>
<p>JSX는 Javascript XML의 약자입니다. 이는 CSS, Javascript 코드 및 리액트 요소인 상태(state)와 속성(props)을 HTML 안에서 결합할 수 있게 해주는 Javascript의 확장기능입니다. 컴포넌트가 어떻게 보이고 작동해야 하는지 설명하기 위한 선언적인 구문입니다.</p>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props:</h2>
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
<p>프롭스는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법입니다. 이는 함수에 인수를 전달하는 것과 유사합니다. 문자열, 배열, 객체, 함수 및 심지어 다른 리액트 컴포넌트를 포함해 모든 것을 프롭스로 전달할 수 있습니다. 이는 컴포넌트를 사용자 정의하는데 필수적인 도구입니다.</p>
<h2 id="상태-state" tabindex="-1"><a class="header-anchor" href="#상태-state" aria-hidden="true">#</a> 상태(State):</h2>
<p>상태(State)는 컴포넌트 내에서 데이터를 저장하고 관리하는 데 사용되는 특별한 자바스크립트 객체입니다. 상태는 컴포넌트의 라이프사이클 동안 변경될 수 있는 현재 값을 나타냅니다. 상태의 업데이트는 컴포넌트를 다시 렌더링하여 UI를 동기화 상태로 유지합니다.</p>
<h2 id="프롭-드릴링-prop-drilling" tabindex="-1"><a class="header-anchor" href="#프롭-드릴링-prop-drilling" aria-hidden="true">#</a> 프롭 드릴링(Prop drilling):</h2>
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
<p>프롭 프로퍼게이션이란 부모에서 깊게 중첩된 자식 컴포넌트로 프롭을 전달하는 것을 의미합니다. 비록 이러한 컴포넌트들이 해당 프롭을 사용하지 않더라도, 필요한 컴포넌트에 도달할 때까지 단순히 프롭을 전달하는 것입니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론:</h1>
<p>요약하면, React 컴포넌트는 웹사이트를 멋지고 쉽게 만들어주는 퍼즐 조각들과 같습니다. 웹사이트를 작은 부분으로 나누어 개발자들은 이러한 조각들을 반복해서 사용할 수 있습니다. 웹사이트를 이해하기 쉽고 원활하게 작동할 수 있게 만드는 것이 중요합니다. 컴포넌트 구성, JSX, 프롭, 상태와 같은 개념을 이해하는 것이 효과적인 개발에 중요합니다. 이러한 기본 개념을 이해하면 개발자들은 탁월한 React 애플리케이션을 구축하여 우수한 사용자 경험을 제공할 수 있습니다. 행복한 학습되세요! 🤩</p>
</div></template>
