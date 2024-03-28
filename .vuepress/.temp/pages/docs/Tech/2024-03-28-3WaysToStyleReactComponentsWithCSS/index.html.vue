<template><div><p><img src="@source/docs/Tech/2024-03-28-3WaysToStyleReactComponentsWithCSS/img/3WaysToStyleReactComponentsWithCSS_0.png" alt="React 컴포넌트에 CSS를 적용하는 3가지 방법"></p>
<p>방금 React Js에서 첫 번째 컴포넌트를 만들었고 이제 스타일을 입히고 싶어하지만, 이전에 일반적인 방법으로 평소처럼 index.html 파일을 스타일링하는 것과는 다른 방법임을 깨달았네요 ☹. 이 기사에서 React Js 컴포넌트를 스타일링하는 3가지 다른 방법을 공유하겠습니다.</p>
<h1 id="외부-css" tabindex="-1"><a class="header-anchor" href="#외부-css" aria-hidden="true">#</a> 외부 CSS</h1>
<p>React 컴포넌트를 스타일링하는 이 방법은 프로젝트 전체에 전역 스타일을 적용하는 데 사용됩니다. 설정 방법은 index.html 파일을 스타일링하는 평소 방법과 상당히 유사합니다. 전역 CSS 파일을 만들어서 그 안에 모든 CSS 스타일을 작성합니다. 그런 다음 index.html 파일의 head 태그 내에서 전통적인 방식을 사용할 겁니다.—</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"./index.css"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>하지만 이를 작동시키기 위해서는 CSS 파일에서 선택자로 사용할 클래스가 컴포넌트에 정의되어 있어야 합니다. 예를 들면 —</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span><span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>header <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span> 
           <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>My React App<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
           <span class="token operator">&lt;</span>ul <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"nav-bar"</span><span class="token operator">></span>
             <span class="token operator">&lt;</span>li<span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
             <span class="token operator">&lt;</span>li<span class="token operator">></span>About<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
             <span class="token operator">&lt;</span>li<span class="token operator">></span>Services<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
           <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>
          <span class="token punctuation">)</span>
         <span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Header<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>header<span class="token punctuation">{</span>
 <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
 <span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token number">444444</span><span class="token punctuation">;</span>
 <span class="token literal-property property">padding</span><span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
 <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
 align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">.</span>title<span class="token punctuation">{</span>font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>25rem<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">.</span>nav<span class="token operator">-</span>bar<span class="token punctuation">{</span> 
 <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
 align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
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
<p>위 방법을 사용하면 모든 CSS 스타일을 하나의 파일에 쉽게 작성할 수 있으며 모든 React 구성 요소에 적용할 수 있습니다. 이 방법은 CSS를 많이 작성하지 않을 작은 프로젝트에 유용합니다. 그러나 많은 구성 요소가 있는 대규모 프로젝트에는 적합하지 않습니다. 왜냐하면 CSS 파일을 유지하는 것이 어렵고 클래스 네이밍으로 시작하고 싶지 않을 겁니다 🤧.</p>
<h1 id="모듈형-css" tabindex="-1"><a class="header-anchor" href="#모듈형-css" aria-hidden="true">#</a> 모듈형 CSS</h1>
<p>이 방법은 구성 요소에 대한 전용 스타일 시트입니다. React 구성 요소를 스타일링하는 가장 일반적인 방법이며 많은 React JS 개발자들이 이 스타일링 방법을 사용합니다. 이 방법은 프로젝트의 각 구성 요소에 대해 별도의 CSS 파일을 생성하는 것을 포함합니다. 위의 헤더 구성 요소를 예로 들면 스타일을 적용하려면 단순히 &quot;Header.module.css&quot;와 같은 CSS 파일을 만들어서 구성 요소 파일 내에서 다음과 같이 스타일을 가져와야 합니다 —</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">"./Header.module.css"</span>
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
<p>그럼 컴포넌트 함수 내 각 구성 요소에 스타일을 적용하려면 클래스 이름을 “styles.className”으로 바꿔야 합니다. 예를 들어</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">"./Button.modules.css"</span>

<span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span><span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>header className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>header<span class="token punctuation">}</span><span class="token operator">></span> 
           <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">></span>My React App<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
           <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>navbar<span class="token punctuation">}</span><span class="token operator">></span>
             <span class="token operator">&lt;</span>li<span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
             <span class="token operator">&lt;</span>li<span class="token operator">></span>About<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
             <span class="token operator">&lt;</span>li<span class="token operator">></span>Services<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
           <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>
          <span class="token punctuation">)</span>
         <span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Header<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 스타일링 방법을 사용하면 해시를 통해 생성된 고유한 클래스 이름으로 인해 네이밍 충돌을 피할 수 있습니다. 이것이 무슨 말인지 알아보려면 브라우저에서 요소를 검사해보세요.</p>
<h1 id="인라인-css" tabindex="-1"><a class="header-anchor" href="#인라인-css" aria-hidden="true">#</a> 인라인 CSS</h1>
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
<p>작은 구성 요소에 최소한의 스타일이 적용된 것으로, &quot;좋아요 👍 버튼&quot;과 같은 것에 사용됩니다. 물론 이 내용으로부터 어떤 것을 얻고 있다면 많은 박수 👏👏를 주시면 고맙겠습니다 😏.</p>
<p>CSS 스타일은 구성 요소 함수 내에 작성되며, &quot;background-color&quot;를 &quot;backgroundColor&quot;로 다시 작성하는 등 다른 구문을 사용합니다. 그리고 값은 문자열로 작성됩니다. 예시</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Button</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">const</span> styles <span class="token operator">=</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">"blue"</span><span class="token punctuation">,</span>
         <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"gray"</span><span class="token punctuation">,</span>
         <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span>
         <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token string">"1rem"</span><span class="token punctuation">,</span>
         <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">"2rem"</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>button style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">}</span><span class="token operator">></span> Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Button<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 방법은 버튼과 같은 작은 구성 요소에 유용합니다. CSS에서의 이름 충돌을 방지하는 데 도움이 됩니다. 그러나 큰 구성 요소에는 이 방법을 사용하는 것이 권장되지 않습니다. 코드 가독성이 저하될 수 있습니다.</p>
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
<p>제목: React Js 컴포넌트를 CSS로 스타일링하는 3가지 방법</p>
<p>본문: 이렇게 React Js 컴포넌트를 CSS로 스타일링할 수 있는 3가지 방법이었습니다. 이런 글 더 보고 싶으시면 좋아요와 팔로우 눌러주세요.</p>
</div></template>
