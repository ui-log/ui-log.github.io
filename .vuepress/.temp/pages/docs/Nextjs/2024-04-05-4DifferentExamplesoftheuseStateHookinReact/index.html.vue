<template><div><img src="@source/docs/Nextjs/2024-04-05-4DifferentExamplesoftheuseStateHookinReact/img/4DifferentExamplesoftheuseStateHookinReact_0.png" />
<p>useState은 React에서 널리 사용되는 훅입니다. React에서 개발하는 거의 모든 컴포넌트는 상태를 포함합니다. 이 포스트에서는 useState 훅의 네 가지 다른 사용 사례를 보여드릴 거에요.</p>
<p>React와 상태에 대한 기본 지식이 있다고 가정합니다. 그렇지 않은 경우 시작하려면 문서를 방문해주세요.</p>
<h1 id="상태-초기화하기" tabindex="-1"><a class="header-anchor" href="#상태-초기화하기" aria-hidden="true">#</a> 상태 초기화하기</h1>
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
<p>앞서 말씀드린 대로, 상태를 초기화하는 방법에 대해 설명해 드리겠습니다. 먼저 useState를 import한 다음, 다음과 같은 방식으로 상태 변수를 선언하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"kunal"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>setName은 상태인 name을 설정하는 데 사용되는 함수입니다. 기본값이 지정되어 있습니다.</p>
<p>상태를 직접 설정하지 말고 항상 함수를 사용해 주세요. 왜 그런지 알고 싶으시면 이 글을 읽어보세요.</p>
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
<p>자, 사용 사례 몇 가지를 살펴봅시다.</p>
<h2 id="_1-조건부-렌더링" tabindex="-1"><a class="header-anchor" href="#_1-조건부-렌더링" aria-hidden="true">#</a> 1. 조건부 렌더링</h2>
<p>어떤 애플리케이션이 사용자를 가지고 있고, 사용자가 관리자인지에 따라 무언가를 표시하고 싶다고 가정해 봅시다. 이런 경우, 조건부 렌더링을 사용할 수 있습니다.</p>
<p>이 예제에서는 모든 사용자가 볼 수 있는 레코드 세트가 있습니다. 그러나 관리자 사용자는 각 레코드를 편집할 수 있는 옵션이 있습니다. 먼저 사용자를 상태로 정의하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">,</span> setUser<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"kunal"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isAdmin</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 레코드를 렌더링하겠습니다. tableData에 표시할 레코드가 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">|</span> id <span class="token operator">|</span> First Name <span class="token operator">|</span> City <span class="token operator">|</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>isAdmin <span class="token operator">&amp;&amp;</span> <span class="token string">'Action'</span> <span class="token punctuation">}</span> <span class="token operator">|</span>
      <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span>
      <span class="token punctuation">{</span>tableData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>id<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>first_name<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>city<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>isAdmin <span class="token operator">&amp;&amp;</span>   <span class="token operator">&lt;</span>button<span class="token operator">></span> Edit <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span> <span class="token punctuation">}</span> <span class="token operator">|</span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 일반 사용자는 처음 세 열만 볼 수 있습니다. 그러나 관리자 사용자는 편집 버튼을 포함한 4번째 열도 볼 수 있습니다.</p>
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
<p>isAdmin 속성이 false인 경우에는 해당 열이 표시되지 않습니다.</p>
<p>또 다른 예를 살펴보겠습니다. 두 개의 테이블이 있고 한 번에 하나만 렌더링하려고 합니다.</p>
<p>어떤 테이블을 표시할지 결정하는 상태 toggleTable이 있습니다. 버튼 클릭으로 테이블 간에 전환할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>toggleTables<span class="token punctuation">,</span> setToggleTables<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>두 개의 테이블은 다른 데이터를 보여주며 조건문을 사용하여 상태 값에 따라 렌더링할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>
                다른 테이블 보기
            <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token punctuation">{</span>
                toggleTables <span class="token operator">?</span>
                    <span class="token operator">|</span> id  <span class="token operator">|</span> 이름   <span class="token operator">|</span> 성     <span class="token operator">|</span> 도시   <span class="token operator">|</span>
                    <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span>
                    <span class="token punctuation">{</span>TableData1<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                        <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>id<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>first_name<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>last_name<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>city<span class="token punctuation">}</span> <span class="token operator">|</span>
                    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">:</span>
                    <span class="token operator">|</span> id  <span class="token operator">|</span> 이름   <span class="token operator">|</span> 도시   <span class="token operator">|</span> Bitcoin 주소 <span class="token operator">|</span> 신용 카드 <span class="token operator">|</span> 카드 종류 <span class="token operator">|</span> 통화 <span class="token operator">|</span>
                    <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">|</span>
                    <span class="token punctuation">{</span>TableData2<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                        <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>id<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>first_name<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>city<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>bitcoin_address<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>credit_card<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>card_type<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>currency<span class="token punctuation">}</span> <span class="token operator">|</span>
                    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 상태를 변경하는 handleClick 함수는 다음과 같습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">setToggleTables</span><span class="token punctuation">(</span><span class="token operator">!</span>toggleTables<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<h2 id="_2-카운터" tabindex="-1"><a class="header-anchor" href="#_2-카운터" aria-hidden="true">#</a> 2. 카운터</h2>
<p>상태는 카운터를 구현하는 데도 사용할 수 있어요. 이를 구현하려면 이전 상태를 추적해야 해요. 먼저, 초기값이 0인 상태로 count를 만들어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그런 다음, 동일한 작업을 렌더링하고 onClick 핸들러와 함께 증가 및 감소 버튼 두 개를 만들어주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>h2<span class="token operator">></span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
<span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token function">setCounter</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token operator">></span> Decrement <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token function">setCounter</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token operator">></span> Increment <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>핸들러 함수를 구현해 보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">setCounter</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>카운터를 증가 또는 감소시킬 양을 제어하는 입력 필드도 추가해 보겠습니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>label<span class="token operator">></span> 값을 입력하여 증가시킬 값 입력 <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"number"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span> 제출하기 <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>핸들러 함수를 구현하세요. 사용자가 제공한 값에 따라 상태 값을 설정하는 동일한 setCounter 함수를 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setCounter</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>양식을 제출할 때 event.preventDefault()를 사용하세요. 자세한 내용은 <a href="%EB%A7%81%ED%81%AC">여기</a>에서 확인하세요.</p>
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
<h2 id="_3-form-handling" tabindex="-1"><a class="header-anchor" href="#_3-form-handling" aria-hidden="true">#</a> 3. Form Handling</h2>
<p>폼 처리는 useState 훅의 매우 중요한 사용 사례입니다. 이것은 여러분이 어디서나 만날 수 있는 기능입니다.</p>
<p>다음 필드를 가지는 기본 폼을 만들어 보겠습니다. 각 필드를 필수 필드로 만들어 주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>input placeholder<span class="token operator">=</span><span class="token string">'이름을 입력하세요'</span>
               onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token function">setName</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
               value<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span> required<span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">'email'</span> placeholder<span class="token operator">=</span><span class="token string">'이메일을 입력하세요'</span> value<span class="token operator">=</span><span class="token punctuation">{</span>email<span class="token punctuation">}</span>
                 onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token function">setEmail</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span> required<span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">'password'</span> placeholder<span class="token operator">=</span><span class="token string">'비밀번호를 입력하세요'</span> value<span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span>
                 onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token function">setPassword</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span> required<span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>label<span class="token operator">></span>성별<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span>select onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token function">setGender</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>gender<span class="token punctuation">}</span>
                required<span class="token operator">></span>
            <span class="token operator">&lt;</span>option<span class="token operator">></span>남성<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
            <span class="token operator">&lt;</span>option<span class="token operator">></span>여성<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
        <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">></span>

        <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">'submit'</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>동일한 상태 변수를 정의하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>email<span class="token punctuation">,</span> setEmail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>password<span class="token punctuation">,</span> setPassword<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>gender<span class="token punctuation">,</span> setGender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 상태 변수들은 폼 필드의 값들을 담고 있습니다. 사용자 입력과 함께 이를 업데이트하고 싶습니다. 이는 입력 요소의 onChange 속성을 사용하여 수행됩니다.</p>
<p>실시간 응용 프로그램에서는 폼 제출이 일정 시간이 걸릴 수 있습니다. 사용자에게 폼이 제출되고 있다는 것을 알리는 것이 중요합니다. 또 다른 상태 변수를 사용하여 그것을 수행할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>isSubmitting<span class="token punctuation">,</span> setIsSubmitting<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>제출 버튼을 클릭하면 즉시 isSubmitting을 true로 설정한 다음 제출 후에 false로 설정하십시오. 그 사이에 사용자에게 메시지를 표시하세요. 여기에서는 양식 제출을 지연시키는 것이 없기 때문에 메시지를 볼 수 없습니다.</p>
<p>이 동작을 모의로 실행해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setIsSubmitting</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setIsSubmitting</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"양식이 제출되었습니다!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 폼 제출 전에 몇 초를 기다리기 위해 setTimeout을 사용하세요. 제출 버튼 바로 아래에 메시지를 표시하세요.</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    isSubmitting <span class="token operator">&amp;&amp;</span> <span class="token string">"제출 중..."</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-할-일-목록" tabindex="-1"><a class="header-anchor" href="#_4-할-일-목록" aria-hidden="true">#</a> 4. 할 일 목록</h2>
<p>useState 훅의 가장 간단한 사용 사례 중 하나는 간단한 할 일 목록입니다. 추가, 업데이트 및 삭제 기능을 구현하는 방법을 보여드리겠습니다.</p>
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
<p>먼저 작업을 추가할 수 있는 입력 필드와 버튼이 필요해요. 사용자의 입력 내용은 상태로 유지해줘요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>taskInput<span class="token punctuation">,</span> setTaskInput<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">'text'</span> placeholder<span class="token operator">=</span><span class="token string">"할 일을 입력해주세요"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>taskInput<span class="token punctuation">}</span>
                    onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token function">setTaskInput</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span> <span class="token operator">></span>항목 추가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한, 전체 할 일 목록을 유지할 상태가 필요해요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>todoList<span class="token punctuation">,</span> setTodoList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제, Add 버튼의 handleClick 함수를 구현하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newTodo <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">task</span><span class="token operator">:</span> taskInput<span class="token punctuation">,</span>
    <span class="token literal-property property">updateFlag</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">setTodoList</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>todoList<span class="token punctuation">,</span> newTodo<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setTaskInput</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>현재 타임스탬프를 id로 하는 새로운 할 일 객체를 생성하세요. updateFlag 필드는 현재 항목이 업데이트되고 있는지를 나타냅니다. 이제, 업데이트 및 삭제 옵션을 포함한 리스트를 표시하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>ul<span class="token operator">></span>
  <span class="token punctuation">{</span>todoList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token punctuation">{</span>todo<span class="token punctuation">.</span>task<span class="token punctuation">}</span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token function">handleUpdate</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>수정<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token function">handleDelete</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>삭제<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>handleDelete에 대해 id를 기반으로 상태 배열에서 요소를 제거하기 위해 filter 메서드를 사용합니다 (고유해야 합니다).</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">handleDelete</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTodoList</span><span class="token punctuation">(</span>todoList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>요소를 업데이트하려면 사용자가 업데이트된 값을 입력할 수 있는 입력 필드가 필요합니다. 따라서 updateFlag를 사용하여 항목을 표시 및 업데이트 간 전환합니다. 목록의 각 항목에 대해 다음을 수행합니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>updateFlag <span class="token operator">==</span> <span class="token boolean">true</span>
    <span class="token operator">?</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">'text'</span> defaultValue<span class="token operator">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>task<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token function">setUpdateTaskInput</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">:</span> todo<span class="token punctuation">.</span>task
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 업데이트된 입력 값이 저장되는 또 다른 상태 변수를 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>updateTaskInput<span class="token punctuation">,</span> setUpdateTaskInput<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>만약 updateFlag가 true인 경우, 항목은 새 값 입력을 위한 폼이 표시됩니다.</p>
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
<p>이제 handleUpdate 함수를 구현해보세요. 이 함수는 할 일의 id를 매개변수로 받습니다. 만약 업데이트된 값이 비어있다면 함수를 종료합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">handleUpdate</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>updateTaskInput <span class="token operator">==</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
          <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 업데이트는 객체의 개별 필드를 변경하는 것을 의미합니다. 먼저 id를 사용하여 목록에서 요소를 가져오고 해당 요소를 필터링하여 새 목록을 만듭니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> todo <span class="token operator">=</span> todoList<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> updatedList <span class="token operator">=</span> todoList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제, updateFlag가 false인 경우 입력 필드를 표시하도록 true로 설정하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">.</span>updateFlag <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  updatedList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token literal-property property">updateFlag</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setTodoList</span><span class="token punctuation">(</span>updatedList<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 새 값을 입력한 후 사용자가 다시 업데이트 버튼을 클릭합니다. 동일한 함수에서 작업 이름을 업데이트하지만 반대 조건에서 동작합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>updatedList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token literal-property property">task</span><span class="token operator">:</span> updateTaskInput<span class="token punctuation">,</span> <span class="token literal-property property">updateFlag</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTodoList</span><span class="token punctuation">(</span>updatedList<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setUpdateTaskInput</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>내 Git 저장소에서 코드를 찾을 수 있어요.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이 글에서는 useState 훅을 사용하는 다양한 예제를 보여드렸어요. React 프로젝트에서 자주 만나는 처음 세 가지 사용 사례를 경험할 거예요.</p>
<p>네 번째는 상태 업데이트를 다양한 시나리오에서 처리하는 매우 일반적인 예제에요. 뭔가 틀린 부분이 있으면 알려주세요.</p>
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
<p>만약 내용을 이해하지 못하거나 설명이 만족스럽지 않다고 느끼신다면 아래에 의견을 남겨주세요. 새로운 아이디어는 언제나 환영입니다! 이 게시물이 마음에 들었다면 손뼉을 몇 번 치세요. 매주 업데이트되는 콘텐츠를 위해 구독하고 팔로우해주세요. 무엇이든 토론하고 싶다면 LinkedIn을 통해 메시지를 보내주세요. 그동안 안녕히 계세요!</p>
<h1 id="코딩-실력-향상" tabindex="-1"><a class="header-anchor" href="#코딩-실력-향상" aria-hidden="true">#</a> 코딩 실력 향상</h1>
<p>우리 커뮤니티의 일원이 되어주셔서 감사합니다! 떠나시기 전에:</p>
<ul>
<li>👏 이 글에 박수를 치고 글쓴이를 팔로우해주세요 👉</li>
<li>📰 &quot;코딩 실력 향상&quot; 게시물에서 더 많은 콘텐츠를 보세요</li>
<li>🔔 팔로우하기: Twitter | LinkedIn | 뉴스레터</li>
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
<p>🚀👉 레벨 업 탤런트 컬렉티브에 가입하여 멋진 직업을 찾아보세요!</p>
</div></template>
