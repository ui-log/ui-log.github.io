<template><div><p>React -Ui 라이브러리
Redux -상태 관리 라이브러리
react-redux - React와 Redux를 함께 사용할 수 있게 하는 라이브러리</p>
<p>Redux의 3가지 핵심 개념</p>
<ol>
<li>Store → 애플리케이션의 상태를 보유</li>
<li>Action → 애플리케이션 상태의 변경을 설명</li>
<li>Reducer → 액션에 따라 상태 전환을 수행</li>
</ol>
<p>3가지 원칙:</p>
<ol>
<li>전체 애플리케이션의 상태는 단일 저장소 내 객체 트리에 저장된다.</li>
<li>상태를 변경하는 유일한 방법은 액션을 발행하는 것으로, 일어난 일을 설명하는 객체(앱의 상태를 업데이트하려면 리덕스에 액션 내에서 알려줘야 하며, 상태 객체를 직접 업데이트하는 것은 허용되지 않음).</li>
<li>액션에 의해 변환된 상태 트리를 지정하려면 순수 리듀서를 작성하세요.</li>
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
<p>리듀서 (가게주인)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">BUY_CAKE</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">numOfCakes</span><span class="token operator">:</span> state<span class="token punctuation">.</span>numOfCakes <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>액션 == 애플리케이션이 상태와 상호작용하는 유일한 방법입니다. 앱에서 리덕스 스토어로 일반 자바스크립트 객체를 전달하는 데 사용됩니다.</p>
<p>리듀서 : 상태와 액션을 매개변수로받아 애플리케이션의 다음 상태를 반환하는 함수입니다.</p>
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
<h1 id="리덕스-스토어" tabindex="-1"><a class="header-anchor" href="#리덕스-스토어" aria-hidden="true">#</a> 리덕스 스토어 :</h1>
<ul>
<li>전체 애플리케이션을 위한 하나의 스토어</li>
</ul>
<p><strong>책임</strong>:</p>
<ul>
<li>애플리케이션 상태 보유</li>
<li>getState()를 통해 상태에 액세스 허용</li>
<li>dispatch(액션)을 통해 상태 업데이트 허용</li>
<li>subscribe(리스너)를 통해 리스너 등록</li>
<li>subscribe(리스너)로 반환된 함수를 통해 리스너 등록 해제</li>
</ul>
<p><strong>Action Creator</strong>:</p>
<ul>
<li>객체를 반환하는 함수</li>
</ul>
</div></template>
