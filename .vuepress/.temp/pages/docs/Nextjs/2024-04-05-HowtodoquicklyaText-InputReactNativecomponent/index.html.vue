<template><div><p><img src="@source/docs/Nextjs/2024-04-05-HowtodoquicklyaText-InputReactNativecomponent/img/HowtodoquicklyaText-InputReactNativecomponent_0.png" alt="이미지"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtodoquicklyaText-InputReactNativecomponent/img/HowtodoquicklyaText-InputReactNativecomponent_1.png" alt="이미지"></p>
<p>여기 약 3분 동안 이렇게 어떻게 만들 수 있는지에 대한 정보입니다</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtodoquicklyaText-InputReactNativecomponent/img/HowtodoquicklyaText-InputReactNativecomponent_2.png" alt="이미지"></p>
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
<p>가정적으로, 이미 React 앱을 만드는 방법을 알고 계시다고 가정하겠습니다.</p>
<p>여러분께서는 코드만 필요할 거에요. 여기에 설명이 있습니다.</p>
<p>하지만 어쨌든 터미널에 다음을 작성해보실 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>expo<span class="token operator">-</span>app StickerSmash
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
<p>그리고 이것은 엑스포를 사용한 것이야.</p>
<p>그리고 빠른 팁, 웹에서도 사용할 수 있어.</p>
<p>여기 시작과 끝이야:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./css/TextInputWithValidation.css"</span><span class="token punctuation">;</span> <span class="token comment">// 스타일을 입히기 위해 CSS 파일을 가져와요 (제공된 스타일로 이 파일을 만들어주세요)</span>

<span class="token keyword">const</span> TextInputWithValidation <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  label<span class="token punctuation">,</span>
  placeholder<span class="token punctuation">,</span>
  maxLength<span class="token punctuation">,</span>
  onValueChange<span class="token punctuation">,</span>
  type <span class="token operator">=</span> <span class="token string">"text"</span><span class="token punctuation">,</span> <span class="token comment">// 기본값이 "text"인 타입 속성을 추가했어</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isInputEmpty<span class="token punctuation">,</span> setIsInputEmpty<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isValidEmail<span class="token punctuation">,</span> setIsValidEmail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 이메일 유효성을 추적하는 상태를 추가했어</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleTextChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newText</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setText</span><span class="token punctuation">(</span>newText<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 입력이 비어 있는지 확인해요</span>
    <span class="token function">setIsInputEmpty</span><span class="token punctuation">(</span>newText<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 입력 타입이 "email"인 경우 이메일 유효성을 확인해요</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">"email"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setIsValidEmail</span><span class="token punctuation">(</span>newText<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">"@"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "@" 기호 유무를 간단히 확인해요</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 제공된 경우 onValueChange 콜백을 호출해요</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>onValueChange<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">onValueChange</span><span class="token punctuation">(</span>newText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>label className<span class="token operator">=</span><span class="token string">"label"</span><span class="token operator">></span><span class="token punctuation">{</span>label<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span> <span class="token comment">// 입력 타입 설정</span>
          value<span class="token operator">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handleTextChange</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
          placeholder<span class="token operator">=</span><span class="token punctuation">{</span>placeholder<span class="token punctuation">}</span>
          onBlur<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setIsInputEmpty</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">textInput </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
            isInputEmpty <span class="token operator">||</span> <span class="token operator">!</span>isValidEmail <span class="token operator">?</span> <span class="token string">"errorInput"</span> <span class="token operator">:</span> <span class="token string">""</span>
          <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span> <span class="token comment">// 유효하지 않은 이메일을 위해 오류 클래스 추가</span>
          maxLength<span class="token operator">=</span><span class="token punctuation">{</span>maxLength<span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 빈 입력에 대한 오류 메시지 표시 */</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span>isInputEmpty <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"errorText"</span><span class="token operator">></span>이 입력란은 필수입니다<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token comment">/* 유효하지 않은 이메일에 대한 오류 메시지 표시 */</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token operator">!</span>isValidEmail <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"errorText"</span><span class="token operator">></span>유효한 이메일 주소를 입력해주세요<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>
          <span class="token punctuation">{</span>text<span class="token punctuation">.</span>length<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>maxLength<span class="token punctuation">}</span> 글자
        <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TextInputWithValidation<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>여기 CSS 코드입니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.label</span> <span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.textInput</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> gray<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token comment">/* 별 아이콘을 위한 공간 추가 */</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.errorInput</span> <span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token comment">/* 오류를 나타내는 테두리 색상 적용 */</span>
<span class="token punctuation">}</span>

<span class="token selector">.errorText</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>잊지 마세요. 언제든지 구성 요소에 더 나은 이름을 선택할 수 있어요.</p>
<p>그리고 제 개인적으로는 컬러링과 꾸미기 부분을 처리하기 위해 JavaScript 객체인 styles를 사용하는 것을 선호해요. 하지만, 초심자와 숙련자 모두에게 CSS를 사용하는 것도 좋습니다.</p>
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
<p>이제 한 조각씩 움직이겠습니다,</p>
<p>그리고 명확하게 하기 위해 우리는 새로운 input 태그를 만드는 중이에요!</p>
<p>그래서 우리만의 속성도 만들 거예요</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./css/TextInputWithValidation.css"</span><span class="token punctuation">;</span> <span class="token comment">// 스타일링을 위해 CSS 파일을 가져오세요 (제공된 스타일로 이 파일을 생성하세요)</span>

<span class="token keyword">const</span> TextInputWithValidation <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  label<span class="token punctuation">,</span>
  placeholder<span class="token punctuation">,</span>
  maxLength<span class="token punctuation">,</span>
  onValueChange<span class="token punctuation">,</span>
  type <span class="token operator">=</span> <span class="token string">"text"</span><span class="token punctuation">,</span> <span class="token comment">// 기본값이 "text"인 type 속성을 추가했어요</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>수입 후, 기능 컴포넌트를 만들 것입니다. 시작하기 위해 다음을 작성하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> TextInputWithValidation <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이렇게 해서 기능 컴포넌트를 작성했습니다. 이제 JSX 요소로 사용할 수 있습니다.</p>
<p>파라미터 또는 프로퍼티는 다음과 같습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>라벨<span class="token punctuation">,</span>
  플레이스홀더<span class="token punctuation">,</span>
  최대길이<span class="token punctuation">,</span>
  값 변경 시<span class="token punctuation">,</span>
  타입 <span class="token operator">=</span> <span class="token string">"텍스트"</span><span class="token punctuation">,</span> <span class="token comment">// 기본값이 "텍스트"인 타입 속성 추가</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 타입 값은 이메일 여부를 결정하기 위한 것입니다. 나중에 숫자를 추가할 수도 있어요!</p>
<p>지금은 &quot;텍스트&quot;로 기본 설정돼 있어요.</p>
<p>표시할 라벨과 이 플레이스홀더야.</p>
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
<img src="@source/docs/Nextjs/2024-04-05-HowtodoquicklyaText-InputReactNativecomponent/img/HowtodoquicklyaText-InputReactNativecomponent_3.png" />
<p>원하는 경우 maxLength를 제거하거나 사용자에게 표시하지 않을 수 있지만, 대규모로 확장할 경우 필요할 수 있습니다.</p>
<hr>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>isInputEmpty<span class="token punctuation">,</span> setIsInputEmpty<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>isValidEmail<span class="token punctuation">,</span> setIsValidEmail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 이메일 유효성을 추적하는 상태 추가</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>여기서는 useState를 사용하고 있어요. React에서 중요한 개념 중 하나에요.</p>
<p>React에서 state는 컴포넌트에 특정한 데이터를 나타내는 내장 기능입니다. 이는 시간이 지남에 따라 변경될 수 있는 값을 보유하는 JavaScript 객체이며, 컴포넌트의 렌더링 및 동작에 영향을 줄 수 있어요. 예를 들어, 카운터</p>
<p>useState는 React에서 함수형 컴포넌트에서 상태를 관리할 수 있게 하는 내장 훅이에요. 상태는 React 컴포넌트에서 시간이 지남에 따라 변경될 수 있는 데이터를 나타내며, useState는 상태 변수를 선언하고 업데이트하는 방법을 제공해요.</p>
<p>이것은 초심자들을 위한 자세한 설명이었어요.</p>
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
<p>위에 있는 것은 속성들을 동적으로 설정하는 작업을 다루는 것입니다.</p>
<p>우리는 입력이 비어 있는지 확인합니다.</p>
<p>그리고 만약 타입이 &quot;email&quot;인 경우 체크하고 조치를 취합니다.</p>
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
<p>아래의 표 형식을 마크다운 형식으로 변경합니다.</p>
<table>
<thead>
<tr>
<th>함수명</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>isValidEmail()</td>
<td>이메일 형식이 올바른지 확인합니다.</td>
</tr>
<tr>
<td>setIsValidEmail()</td>
<td>이메일 형식이 올바르면 'true'를 반환합니다.</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>onValueChange<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">onValueChange</span><span class="token punctuation">(</span>newText<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p>사용자가 입력한 값으로 업데이트하도록 하고,</p>
<p>기능 컴포넌트를 반환할 때, 매우 일반적인 HTML을 작성할 수 있습니다.</p>
<p>예를 들어, 컨테이너 <code v-pre>div</code></p>
<p>이런 식으로요</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>label className<span class="token operator">=</span><span class="token string">"label"</span><span class="token operator">></span><span class="token punctuation">{</span>label<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span> <span class="token comment">// 입력 유형 설정</span>
          value<span class="token operator">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handleTextChange</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
          placeholder<span class="token operator">=</span><span class="token punctuation">{</span>placeholder<span class="token punctuation">}</span>
          onBlur<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setIsInputEmpty</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">textInput </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
            isInputEmpty <span class="token operator">||</span> <span class="token operator">!</span>isValidEmail <span class="token operator">?</span> <span class="token string">"errorInput"</span> <span class="token operator">:</span> <span class="token string">""</span>
          <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span> <span class="token comment">// 잘못된 이메일에 대한 오류 클래스 추가</span>
          maxLength<span class="token operator">=</span><span class="token punctuation">{</span>maxLength<span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 링크에서 입력 attributes에 대해 읽을 수 있습니다.</p>
<p>이것은 backticks ()로 표시된 템플릿 리터럴입니다. 템플릿 리터럴 내부에서는 <code v-pre>${}</code>를 사용하여 식을 삽입합니다. 이 경우에는 조건식의 결과가 삽입되었습니다.</p>
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
<p>테이블 태그를 마크다운 형식으로 변경해주세요.</p>
<p>textInput: 요소에 대한 기본 CSS 클래스 이름입니다.
${isInputEmpty || !isValidEmail ? “errorInput” : “”}: 이는 조건식입니다. 조건에 따라, isInputEmpty가 true거나 isValidEmail이 false인 경우 &quot;errorInput&quot; 문자열이 클래스 목록에 추가됩니다. 그렇지 않으면 빈 문자열이 추가됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> TextInputWithValidation<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 다른 클래스가 사용할 수 있도록 내보내세요.</p>
<p>CSS 부분은 그냥 복사하여 붙여넣으면 상관없습니다.</p>
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
<p>다음과 같이 올바르게 가져오는 것을 잊지 마세요\</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"./css/TextInputWithValidation.css"</span><span class="token punctuation">;</span> <span class="token comment">// 스타일링을 위해 CSS 파일을 가져옵니다 (제공된 스타일을 사용하여 이 파일을 생성하세요)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>썸업과 박수를 보내요!</p>
</div></template>
