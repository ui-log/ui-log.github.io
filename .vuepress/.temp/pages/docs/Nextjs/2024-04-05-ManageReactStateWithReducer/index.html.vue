<template><div><img src="@source/docs/Nextjs/2024-04-05-ManageReactStateWithReducer/img/ManageReactStateWithReducer_0.png" />
<p>리액트에서 상태 관리는 동적 및 대화형 애플리케이션을 구축하는 중요한 측면입니다. 리액트의 내장 useState 훅은 로컬 컴포넌트 상태를 관리하는 데 일반적으로 사용됩니다. 그러나 더 복잡한 상태 로직은 리듀서의 사용으로 이점을 얻을 수 있습니다.</p>
<p>중급 멤버십이 없는 경우, 유료 구독 없이 이 링크를 사용하여 기사에 액세스할 수 있습니다.</p>
<h2 id="리듀서란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#리듀서란-무엇인가요" aria-hidden="true">#</a> 리듀서란 무엇인가요?</h2>
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
<p>리듀서는 애플리케이션의 상태를 결정하는 함수입니다. 현재 상태와 액션을 인수로 받아 새로운 상태를 반환합니다. 이 패턴은 Redux에서 영감을 받았습니다. 개발자들은 React의 useReducer 훅과 함께 자주 사용합니다.</p>
<h2 id="리듀서-사용의-장점" tabindex="-1"><a class="header-anchor" href="#리듀서-사용의-장점" aria-hidden="true">#</a> 리듀서 사용의 장점:</h2>
<ul>
<li>예측 가능한 상태 업데이트: 리듀서는 상태 전이가 명시적이고 예측 가능하도록 보장합니다. 특정 액션을 정의하고 그것이 상태에 어떻게 영향을 주는지를 정의함으로써, 개발자는 상태 변경에 대해 더 명확하게 제어할 수 있습니다.</li>
<li>중앙집중식 로직: 리듀서는 상태 업데이트를 위한 로직을 중앙집중화합니다. 이로써 상태가 다른 액션에 응답하여 어떻게 변경되는지를 이해하고 디버그하기 쉬워집니다.</li>
<li>복잡한 상태에 적합: 상태 로직은 양식, 쇼핑 카트, 또는 다단계 마법사와 같이 더 복잡해질 수 있습니다. 리듀서는 이러한 경우에 대해 더 깨끗하고 확장 가능한 해결책을 제공합니다.</li>
</ul>
<h1 id="구현" tabindex="-1"><a class="header-anchor" href="#구현" aria-hidden="true">#</a> 구현</h1>
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
<h2 id="인터페이스" tabindex="-1"><a class="header-anchor" href="#인터페이스" aria-hidden="true">#</a> 인터페이스</h2>
<p>다음으로 두 개의 인터페이스가 정의됩니다: FormState 및 Action. 이러한 인터페이스는 리듀서에서 사용되는 상태(state)와 액션(actions)의 모양을 설명합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">FormState</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">phoneNumbe</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Action</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    value<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>FormState: 이름, 이메일, 전화번호 및 주소의 모양을 나타내는 상태 객체의 모양을 설명합니다. 모두 string 타입입니다.</li>
<li>Action: 액션 객체의 모양을 설명합니다. 타입 및 선택적 값(value)을 포함합니다. 타입은 액션 유형을 나타내는 문자열입니다. 값은 특정 필드에 대한 새 값의 표현입니다.</li>
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
<h2 id="초기-상태-및-리듀서-함수" tabindex="-1"><a class="header-anchor" href="#초기-상태-및-리듀서-함수" aria-hidden="true">#</a> 초기 상태 및 리듀서 함수</h2>
<p>폼의 초기 상태가 정의되었습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">initialState</span><span class="token operator">:</span> FormState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">phoneNumber</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로, 리듀서 함수가 정의되었습니다. 리듀서는 현재 상태와 액션을 받아들이고, 액션 유형에 기반하여 새로운 상태를 반환합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">state</span><span class="token operator">:</span> FormState<span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> Action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">"reset"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> initialState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token literal-property property">result</span><span class="token operator">:</span> FormState <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state <span class="token punctuation">}</span><span class="token punctuation">;</span>
    result<span class="token punctuation">[</span>action<span class="token punctuation">.</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> action<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>리듀서는 action.type을 확인합니다:</li>
<li>만약 타입이 &quot;reset&quot;이라면 초기 상태(initial state)를 반환하여 효과적으로 폼을 재설정합니다.</li>
<li>그렇지 않으면, 현재 상태(...state)를 복사하여 새 상태(result)를 생성합니다. 그 후 action.type이 가리키는 필드를 새로운 action.value로 업데이트합니다.</li>
</ul>
<h2 id="함수형-컴포넌트-functional-component" tabindex="-1"><a class="header-anchor" href="#함수형-컴포넌트-functional-component" aria-hidden="true">#</a> 함수형 컴포넌트(Functional Component)</h2>
<p>이제, 주요 컴포넌트가 함수형 컴포넌트(FC)로 정의되었습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">Form</span><span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> useReducer<span class="token operator">&lt;</span>Reducer<span class="token operator">&lt;</span>FormState<span class="token punctuation">,</span> Action<span class="token operator">></span><span class="token punctuation">,</span> FormState<span class="token operator">></span><span class="token punctuation">(</span>
        reducer<span class="token punctuation">,</span>
        initialState<span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> initialState
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> email<span class="token punctuation">,</span> phoneNumber<span class="token punctuation">,</span> address <span class="token punctuation">}</span> <span class="token operator">=</span> state<span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> React<span class="token punctuation">.</span>FormEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 기타 작업 처리</span>

        <span class="token comment">// 상태 초기화</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"reset"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ChangeEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> name<span class="token punctuation">,</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>label<span class="token operator">></span>
                    <span class="token literal-property property">이름</span><span class="token operator">:</span>
                    <span class="token operator">&lt;</span>input value<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span> name<span class="token operator">=</span><span class="token string">"name"</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>label<span class="token operator">></span>
                    <span class="token literal-property property">이메일</span><span class="token operator">:</span>
                    <span class="token operator">&lt;</span>input value<span class="token operator">=</span><span class="token punctuation">{</span>email<span class="token punctuation">}</span> name<span class="token operator">=</span><span class="token string">"email"</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>label<span class="token operator">></span>
                    <span class="token literal-property property">전화번호</span><span class="token operator">:</span>
                    <span class="token operator">&lt;</span>input
                        value<span class="token operator">=</span><span class="token punctuation">{</span>phoneNumber<span class="token punctuation">}</span>
                        name<span class="token operator">=</span><span class="token string">"phoneNumber"</span>
                        onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span>
                    <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>label<span class="token operator">></span>
                    <span class="token literal-property property">주소</span><span class="token operator">:</span>
                    <span class="token operator">&lt;</span>input
                        value<span class="token operator">=</span><span class="token punctuation">{</span>address<span class="token punctuation">}</span>
                        name<span class="token operator">=</span><span class="token string">"address"</span>
                        onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span>
                    <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>button<span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="form-컴포넌트-설명" tabindex="-1"><a class="header-anchor" href="#form-컴포넌트-설명" aria-hidden="true">#</a> Form 컴포넌트 설명:</h1>
<ul>
<li>useReducer: 이는 상태 관리에 사용되는 React 훅입니다. reducer 함수, initialState 및 선택적 초기화 함수 (() = initialState)를 입력으로 받습니다. 현재 상태(state) 및 reducer에 액션을 디스패치하는 dispatch 함수를 반환합니다.</li>
<li>const { name, email, phoneNumber, address } = state;: 구조 분해 할당을 사용하여 상태 개체에서 상태 변수를 추출합니다.</li>
<li>handleSubmit: 이 함수는 양식이 제출될 때 호출됩니다. 기본 양식 제출 동작을 방지합니다 (e.preventDefault()). 일반적으로 API 요청을 만드는 등 양식 제출 로직을 처리할 것입니다. 이 경우 &quot;reset&quot; 액션을 디스패치하여 양식을 지웁니다.</li>
<li>onChange: 입력 필드 중 하나가 변경될 때 호출됩니다. 입력 요소에서 이름과 값을 추출합니다. 그런 다음 이름을 유형으로하고 값을 새 값으로 하는 작업을 디스패치합니다. 이렇게 하면 사용자가 양식 필드에 타이핑하는 대로 상태가 동적으로 업데이트됩니다.</li>
<li>return 문 안에서:</li>
<li>form 요소는 handleSubmit에 설정된 onSubmit 이벤트 핸들러를 가지고 있습니다. 양식이 제출될 때 트리거됩니다.</li>
<li>각 입력 요소는 해당 상태 변수 (name, email, phoneNumber, address)와 연결되어 있습니다. onChange 이벤트 핸들러가 onChange으로 설정되어 있습니다. 이렇게하면 입력 값이 변경될 때 onChange 함수가 상태를 해당하는 방식으로 업데이트합니다.</li>
</ul>
<p>전반적으로, 이 Form 컴포넌트는 이름, 이메일, 전화번호 및 주소에 대한 필드가 있는 양식을 생성합니다. 사용자가 양식과 상호 작용하는 동안 useReducer 훅과 reducer 함수를 통해 상태가 업데이트됩니다. React에서 제어된 양식 동작을 제공합니다. 양식이 제출되면 양식 필드가 지워집니다.```</p>
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
<p>여기 또 다른 reduce의 예제가 있어요. 이것은 Form 컴포넌트보다 복잡해요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useReducer<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token comment">// 상태의 형태를 정의해요</span>
<span class="token keyword">interface</span> <span class="token class-name">ShoppingCartState</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> CartItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token literal-property property">formData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// CartItem의 형태를 정의해요</span>
<span class="token keyword">interface</span> <span class="token class-name">CartItem</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">price</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 액션의 형태를 정의해요</span>
<span class="token keyword">interface</span> <span class="token class-name">IAction</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    item<span class="token operator">?</span><span class="token operator">:</span> CartItem<span class="token punctuation">;</span>
    formData<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        price<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 쇼핑 카트의 초기 상태</span>
<span class="token keyword">const</span> <span class="token literal-property property">initialState</span><span class="token operator">:</span> ShoppingCartState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">formData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 상태 변경을 관리하는 리듀서 함수</span>
<span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">state</span><span class="token operator">:</span> ShoppingCartState<span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> IAction</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">"ADD_ITEM"</span><span class="token operator">:</span>
            <span class="token keyword">const</span> <span class="token literal-property property">newItem</span><span class="token operator">:</span> CartItem <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> state<span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> state<span class="token punctuation">.</span>formData<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
                <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>formData<span class="token punctuation">.</span>price<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token operator">...</span>state<span class="token punctuation">,</span>
                <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>items<span class="token punctuation">,</span> newItem<span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">formData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">"REMOVE_ITEM"</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token operator">...</span>state<span class="token punctuation">,</span>
                <span class="token literal-property property">items</span><span class="token operator">:</span> state<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">!==</span> action<span class="token punctuation">.</span>item<span class="token operator">!</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">"RESET"</span><span class="token operator">:</span>
            <span class="token keyword">return</span> initialState<span class="token punctuation">;</span> <span class="token comment">// 초기 상태로 재설정</span>
        <span class="token keyword">case</span> <span class="token string">"UPDATE_FORM_DATA"</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token operator">...</span>state<span class="token punctuation">,</span>
                <span class="token literal-property property">formData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token operator">...</span>state<span class="token punctuation">.</span>formData<span class="token punctuation">,</span>
                    <span class="token operator">...</span>action<span class="token punctuation">.</span>formData<span class="token operator">!</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ShoppingCart의 함수형 컴포넌트</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">ShoppingCart</span><span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleAddItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"ADD_ITEM"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleRemoveItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> CartItem</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"REMOVE_ITEM"</span><span class="token punctuation">,</span> item <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleReset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"RESET"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ChangeEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"UPDATE_FORM_DATA"</span><span class="token punctuation">,</span> <span class="token literal-property property">formData</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> value <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> totalPrice <span class="token operator">=</span> state<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> curr</span><span class="token punctuation">)</span> <span class="token operator">=></span> acc <span class="token operator">+</span> curr<span class="token punctuation">.</span>price<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>h2<span class="token operator">></span>장바구니<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
            <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">handleAddItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>label<span class="token operator">></span>
                    <span class="token literal-property property">Name</span><span class="token operator">:</span>
                    <span class="token operator">&lt;</span>input
                        type<span class="token operator">=</span><span class="token string">"text"</span>
                        name<span class="token operator">=</span><span class="token string">"name"</span>
                        value<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>formData<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
                        onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span>
                        required
                    <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
                <span class="token operator">&lt;</span>label<span class="token operator">></span>
                    <span class="token literal-property property">Price</span><span class="token operator">:</span>
                    <span class="token operator">&lt;</span>input
                        type<span class="token operator">=</span><span class="token string">"number"</span>
                        name<span class="token operator">=</span><span class="token string">"price"</span>
                        value<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>formData<span class="token punctuation">.</span>price<span class="token punctuation">}</span>
                        onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span>
                        step<span class="token operator">=</span><span class="token string">"0.01"</span>
                        min<span class="token operator">=</span><span class="token string">"0"</span>
                        required
                    <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
                <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>상품 추가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleReset<span class="token punctuation">}</span><span class="token operator">></span>장바구니 초기화<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span>ul<span class="token operator">></span>
                <span class="token punctuation">{</span>state<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
                        <span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span> <span class="token operator">-</span> $<span class="token punctuation">{</span>item<span class="token punctuation">.</span>price<span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">" "</span><span class="token punctuation">}</span>
                        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handleRemoveItem</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>삭제<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span>총 가격<span class="token operator">:</span> $<span class="token punctuation">{</span>totalPrice<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>액션 타입을 열거형으로 변환하고 더 많은 제한을 추가함으로써 이 예제를 향상시킬 수 있어요. 하지만 주요 아이디어는 동일해요.</p>
<p>요약하면, 리듀서는 React 응용 프로그램에서 상태를 관리하는 구조적이고 확장 가능한 접근 방식을 제공해요. 개발자들은 명확한 액션을 정의하고 리듀서 함수에서 이를 처리함으로써 유지보수 가능하고 이해하기 쉬운 상태 논리를 만들 수 있어요.</p>
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
<p>쇼핑 카트, 폼 처리 또는 기타 복잡한 상태 요구 사항에 대해서 리듀서를 사용하면 더 예측 가능하고 관리할 수 있는 코드를 작성할 수 있습니다.</p>
<p>프로젝트에서는 애플리케이션 상태 논리가 복잡해지기 시작할 때 상태 관리를 위해 리듀서를 사용하는 것을 고려해보세요. 이들은 상태 변경을 예측 가능하고 조직적으로 처리할 수 있는 강력한 도구를 제공합니다.</p>
<p>👏 읽어 주셔서 감사합니다!</p>
<p>👨‍💼 귀하의 시간에 감사드리며 이 이야기를 유익하게 여기셨기를 바랍니다. 즐겁게 읽으셨다면, 열심히 일한 작가를 칭찬하기 위해 👏 클랩으로 감사를 표현해주세요!</p>
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
<p>📰 기사를 공유하여 지식을 공유해 주세요!</p>
<p>✍ 이야기에 대한 피드백이나 의견을 자유롭게 공유해 주세요. 여러분의 의견은 저의 성장과 더 가치 있는 콘텐츠 제작에 도움이 됩니다.</p>
<p>✌ 연결 유지하기! 🚀 보다 매력적인 기사를 원하신다면 소셜 미디어에서 저를 팔로우해 주세요:</p>
<ul>
<li>Twitter</li>
<li>Instagram</li>
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
<p>🔍 더 알아보기! 📖 코디미스에서 지식의 보물 창고로 빠져들어보세요. 배울 것이 더 많고, 발견하는 여정에서 도와드릴 준비가 되어있습니다.</p>
<h1 id="스택더믹-🎓" tabindex="-1"><a class="header-anchor" href="#스택더믹-🎓" aria-hidden="true">#</a> 스택더믹 🎓</h1>
<p>끝까지 읽어 주셔서 감사합니다. 떠나시기 전에:</p>
<ul>
<li>작가를 칭찬하고 팔로우해 주시면 감사하겠습니다! 👏</li>
<li>팔로우하기: X | 링크드인 | 유튜브 | 디스코드</li>
<li>다른 플랫폼 방문하기: In Plain English | CoFeed | Venture | Cubed</li>
<li>Stackademic.com에서 더 많은 콘텐츠 만나보세요</li>
</ul>
</div></template>
