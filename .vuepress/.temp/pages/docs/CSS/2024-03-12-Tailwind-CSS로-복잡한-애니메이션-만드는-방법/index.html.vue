<template><div><h1 id="tailwind-css로-복잡한-애니메이션-만드는-방법" tabindex="-1"><a class="header-anchor" href="#tailwind-css로-복잡한-애니메이션-만드는-방법" aria-hidden="true">#</a> Tailwind CSS로 복잡한 애니메이션 만드는 방법</h1>
<p>TailwindCSS를 사용하여 인상적이고 복잡한 애니메이션을 만드는 방법에 대해 살펴보겠습니다. TailwindCSS는 개발자들이 모던하고 반응형이며 시각적으로 매력적인 사용자 인터페이스를 쉽게 구축할 수 있는 매우 인기있는 유틸리티 기반 CSS 프레임워크입니다.</p>
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
<h2 id="tailwindcss-소개" tabindex="-1"><a class="header-anchor" href="#tailwindcss-소개" aria-hidden="true">#</a> TailwindCSS 소개</h2>
<p>복잡한 애니메이션에 들어가기 전에, TailwindCSS를 간단히 소개하겠습니다. TailwindCSS는 HTML 요소에 직접 적용할 수 있는 다양한 유틸리티 클래스를 제공하여 사용자 지정 CSS를 작성하지 않고도 UI 컴포넌트를 구축할 수 있도록 하는 CSS 프레임워크입니다. TailwindCSS의 유연성을 통해 개발자들은 광범위한 디자인 스타일과 애니메이션을 손쉽게 구현할 수 있습니다.</p>
<h2 id="준비물" tabindex="-1"><a class="header-anchor" href="#준비물" aria-hidden="true">#</a> 준비물</h2>
<ul>
<li>TailwindCSS 설정</li>
<li>CSS 및 CSS에서의 애니메이션에 대한 기본적인 이해</li>
</ul>
<h2 id="우리가-만들-것" tabindex="-1"><a class="header-anchor" href="#우리가-만들-것" aria-hidden="true">#</a> 우리가 만들 것</h2>
<p>Tailwind CSS로 아래와 같은 애니메이션을 만들어보겠습니다.</p>
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
<img src="https://miro.medium.com/v2/resize:fit:1200/1*7luPcDVyB3smqaaFIgZ0SA.gif" />
<h2 id="tailwind-css-애니메이션-시작하기" tabindex="-1"><a class="header-anchor" href="#tailwind-css-애니메이션-시작하기" aria-hidden="true">#</a> Tailwind CSS 애니메이션 시작하기</h2>
<p>애니메이션에 들어가기 전에 프로젝트에 Tailwind CSS를 설정했는지 확인하세요.</p>
<p>Tailwind CSS는 HTML 요소에 적용할 수 있는 애니메이션에 대한 제한된 집합의 유틸리티 클래스를 제공합니다. 이를 살펴보겠습니다.</p>
<h2 id="애니메이션-적용하기" tabindex="-1"><a class="header-anchor" href="#애니메이션-적용하기" aria-hidden="true">#</a> 애니메이션 적용하기</h2>
<p>TailwindCSS에는 Spin, Bounce, Ping, Pulse 등 다양한 미리 정의된 애니메이션이 있습니다. 요소에 애니메이션을 적용하려면 원하는 애니메이션 이름 뒤에 animate 클래스를 추가하면 됩니다. 예를 들어, spin 애니메이션을 적용하려면 animate-spin 클래스를 사용할 수 있습니다. 다음은 예시입니다.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>animate-spin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Look Mom! I am spinning!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
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
<p>이것은 페이지가 로드될 때 화면에서 div 요소를 회전시켜 &quot;회전&quot; 애니메이션을 적용합니다.</p>
<h2 id="사용자-정의-애니메이션-정의하기" tabindex="-1"><a class="header-anchor" href="#사용자-정의-애니메이션-정의하기" aria-hidden="true">#</a> 사용자 정의 애니메이션 정의하기</h2>
<p>Tailwind.config.js에서 사용자 정의 애니메이션을 만들거나 기존 애니메이션을 사용자 정의하는 방법을 살펴보겠습니다.</p>
<p>새로운 @keyframes 애니메이션을 추가하려면 테마 구성의 keyframes 섹션을 사용하고 animation 섹션에 애니메이션을 추가하면 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//기존 애니메이션 사용자 정의하기</span>
        <span class="token string-property property">"spin-slow"</span><span class="token operator">:</span> <span class="token string">"spin 3s linear infinite"</span><span class="token punctuation">,</span>

        <span class="token comment">//새로운 애니메이션 추가하기</span>
        <span class="token string-property property">"my-animation"</span><span class="token operator">:</span> <span class="token string">"new-animation 3s linear infinite"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">keyframes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//여기서 새로운 애니메이션을 위한 keyframes를 추가합니다.</span>
        <span class="token string-property property">"new-animation"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">"0%"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">"rotate(0deg)"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string-property property">"100%"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">"rotate(360deg)"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 우리는 이 유틸리티를 사용하여 우리만의 사용자 정의 애니메이션을 만들 수 있습니다. 우리는 먼저 애니메이션의 @keyframes를 추가해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">keyframes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//우리의 fall 애니메이션 keyframes</span>
        <span class="token literal-property property">fall</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">"0%"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">"translate(0%,-150%) skewX(0deg)"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string-property property">"50%"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">"translate(0%,0%) skewX(-10deg)"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string-property property">"100%"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">"translate(0%,150%) skewX(0deg)"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 그런 다음 테마 구성의 애니메이션 섹션에서 이러한 keyframes를 이름으로 참조할 수 있습니다.</span>
        <span class="token literal-property property">fall</span><span class="token operator">:</span> <span class="token string">"fall 3s ease infinite"</span><span class="token punctuation">,</span>
        <span class="token comment">// 애니메이션 단축 CSS 속성 즉</span>
        <span class="token comment">// 애니메이션 이름 | 애니메이션 지속 시간 | 애니메이션 타이밍 함수</span>
        <span class="token comment">// 애니메이션 반복 횟수</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>이렇게 하면 이제 animate-fall 클래스를 적용하여 모든 요소에 우리의 fall 애니메이션을 적용할 수 있습니다.</p>
<p>우리의 fall 애니메이션을 사용할 준비가 되었습니다.</p>
<img src="https://miro.medium.com/v2/resize:fit:1200/1*h2VZc5HtFSj1UBd1gp6_kg.gif" />
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
<p>이제 우리의 애니메이션을 해체해 보겠습니다.</p>
<ul>
<li>&quot;Develop&quot;라는 단어가 위에서 내려와 하단으로 외부로 확장됩니다.</li>
<li>&quot;Develop&quot;가 나간 후에 &quot;Design&quot;이</li>
</ul>
<p>중앙으로 우아하게 내려가며, 동기화를 보장하기 위해 애니메이션 주기의 절반(이 경우 1.5초)의 지연을 가집니다.</p>
<ul>
<li>&quot;Develop&quot;와 &quot;Design&quot;의 각 글자는 파도 모양으로 내려가며, 각 글자의 하강 사이에 100ms 또는 150ms의 지연이 있어 매력적인 시각적 효과를 만듭니다.</li>
</ul>
<p>하지만 이를 어떻게 할까요? tailwind.config.js에는 하나의 애니메이션만 정의할 수 있고 애니메이션 지연을 적용할 수 있는 유틸리티 클래스가 없습니다.</p>
<p>이를 수행하는 방법이 두 가지 있습니다.</p>
<ol>
<li>임의의 값 사용하기
테마에 포함시키기에 맞지 않는 일회용 애니메이션 값을 사용해야 하는 경우, 임의의 값 사용하기 위해 대괄호를 사용하여 어떤 임의의 값을 사용하여 property를 생성할 수 있습니다.</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>animate-[fall_3s_ease_100ms_infinite]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 100ms 지연 추가 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>animate-[fall_3s_ease_1s_infinite]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 1초 지연 추가 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>TailwindCSS 플러그인
플러그인을 사용하면 Tailwind가 CSS 대신 JavaScript를 사용하여 사용자의 스타일시트에 새로운 스타일을 주입할 수 있습니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">plugin</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> matchUtilities<span class="token punctuation">,</span> theme <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

      <span class="token comment">//Tailwind에 사용할 css 속성 추가</span>
      <span class="token function">matchUtilities</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">'animation-delay'</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token string-property property">'animation-delay'</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 animation-delay-[time] 클래스를 사용하여 애니메이션이 시작되기 전에 지연을 도입할 수 있습니다.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>animate-delay animation-delay-[1000ms]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 1000ms 지연 추가 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 하면 이제 우리의 완전한 애니메이션을 만들 수 있습니다.</p>
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
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">TypographyAnimation</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> firstWord <span class="token operator">=</span> <span class="token string">"develop"</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> secondWord <span class="token operator">=</span> <span class="token string">"design"</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">renderWordAnimation</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">word</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">startingDelay</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> word<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">letter<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">animate-fall animation-delay-[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>startingDelay <span class="token operator">+</span> index <span class="token operator">*</span> <span class="token number">50</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms] translate-y-[-150%]</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>letter<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative inline-flex ml-2 overflow-hidden p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex flex-row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">renderWordAnimation</span><span class="token punctuation">(</span>firstWord<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>absolute top-0 bottom-0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex flex-row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">renderWordAnimation</span><span class="token punctuation">(</span>secondWord<span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
