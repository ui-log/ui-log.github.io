<template><div><h2 id="부트스트랩-테일윈드-파운데이션-불마-uikit-—-2024년-최고의-css-프레임워크를-살펴보세요" tabindex="-1"><a class="header-anchor" href="#부트스트랩-테일윈드-파운데이션-불마-uikit-—-2024년-최고의-css-프레임워크를-살펴보세요" aria-hidden="true">#</a> 부트스트랩, 테일윈드, 파운데이션, 불마, UIKit — 2024년 최고의 CSS 프레임워크를 살펴보세요.</h2>
<p>프로젝트에 적합한 CSS 프레임워크를 선택하는 것이 중요합니다. 이는 새로운 UI 구성 요소를 만드는 데 필요한 전반적인 노력에 대한 톤을 설정합니다. 그리고 현재 중요한 것은 새로운 기능을 더 빨리 출시하여 고객을 만족시키는 것입니다.</p>
<p>그러니 2024년에 시도해 볼 최고의 CSS 프레임워크를 살펴보겠습니다.</p>
<h1 id="_1-부트스트랩" tabindex="-1"><a class="header-anchor" href="#_1-부트스트랩" aria-hidden="true">#</a> 1. 부트스트랩</h1>
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
<p>부스트랩은 모바일 우선 CSS 프레임워크로, 멋지고 반응형 웹 인터페이스를 만들 수 있게 해줍니다.</p>
<p>이는 강력한 그리드 시스템을 포함하고 있어서 개발자들이 다양한 화면 크기에 맞게 적응 가능한 레이아웃을 만들 수 있도록 도와줍니다. 게다가 내비게이션 바, 카드 및 모달과 같은 사용 준비가 완료된 구성 요소도 제공하여 개발을 더 빠르게 할 수 있습니다.</p>
<p>여기 부스트랩의 독특한 특징들이 있습니다.</p>
<ul>
<li>반응형 그리드 시스템.</li>
<li>다양한 미리 제작된 구성 요소 (내비게이션 바, 카드, 모달).</li>
<li>빠른 스타일링을 위한 유틸리티 클래스.</li>
<li>기능을 향상시키기 위한 JavaScript 플러그인.</li>
<li>활발한 커뮤니티와 폐쇄적인 문서화.</li>
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
<p>개발자들은 직접적인 프레임워크 지원을 제공하기 위해 Bootstrap 주위에 래퍼(wrapper)를 만들었습니다. 예를 들어, React에 Bootstrap을 통합하려고 한다면, 쉽게 다음과 같은 방법으로 라이브러리인 React Bootstrap을 설치하고 프로젝트에서 활용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> ButtonGroup <span class="token keyword">from</span> <span class="token string">'react-bootstrap/ButtonGroup'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Dropdown <span class="token keyword">from</span> <span class="token string">'react-bootstrap/Dropdown'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DropdownButton <span class="token keyword">from</span> <span class="token string">'react-bootstrap/DropdownButton'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./bootstrap.css'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"button"</span><span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'Primary'</span><span class="token punctuation">,</span> <span class="token string">'success'</span><span class="token punctuation">,</span> <span class="token string">'danger'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">variant</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>DropdownButton
          <span class="token keyword">as</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonGroup<span class="token punctuation">}</span>
          key<span class="token operator">=</span><span class="token punctuation">{</span>variant<span class="token punctuation">}</span>
          id<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">dropdown-variants-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>variant<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
          variant<span class="token operator">=</span><span class="token punctuation">{</span>variant<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          title<span class="token operator">=</span><span class="token punctuation">{</span>variant<span class="token punctuation">}</span>
        <span class="token operator">></span>
          <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Item eventKey<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span>Action<span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Item<span class="token operator">></span>
          <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Item eventKey<span class="token operator">=</span><span class="token string">"2"</span><span class="token operator">></span>Another action<span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Item<span class="token operator">></span>
          <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Item eventKey<span class="token operator">=</span><span class="token string">"3"</span> active<span class="token operator">></span>
            Active Item
          <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Item<span class="token operator">></span>
          <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Divider <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Item eventKey<span class="token operator">=</span><span class="token string">"4"</span><span class="token operator">></span>Separated link<span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Item<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>DropdownButton<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown<span class="token operator">></span>
        <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Toggle variant<span class="token operator">=</span><span class="token string">"success"</span> id<span class="token operator">=</span><span class="token string">"dropdown-basic"</span><span class="token operator">></span>
          Dropdown Button
        <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Toggle<span class="token operator">></span>
        <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Menu<span class="token operator">></span>
          <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Item href<span class="token operator">=</span><span class="token string">"#/action-1"</span><span class="token operator">></span>Action<span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Item<span class="token operator">></span>
          <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Item href<span class="token operator">=</span><span class="token string">"#/action-2"</span><span class="token operator">></span>Another action<span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Item<span class="token operator">></span>
          <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Item href<span class="token operator">=</span><span class="token string">"#/action-3"</span><span class="token operator">></span>Something <span class="token keyword">else</span><span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Item<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Menu<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-tailwind-css" tabindex="-1"><a class="header-anchor" href="#_2-tailwind-css" aria-hidden="true">#</a> 2. Tailwind CSS</h2>
<p>Tailwind CSS는 사용 우선적인 유틸리티 기반의 CSS 프레임워크로, 사용자 정의 디자인을 만들기 위한 낮은 수준의 유틸리티 클래스 세트를 제공합니다.</p>
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
<p>전통적인 CSS 프레임워크와는 달리 미리 스타일이 적용된 구성 요소를 제공하는 것이 아닌, Tailwind는 유틸리티 클래스를 제공하여 고유한 디자인을 만들 수 있도록 중점을 두고 있어요. 매우 사용자 정의 가능하고 확장 가능하도록 설계되어 있어 개발자들에게 무한한 유연성을 제공해요.</p>
<p>다음은 Tailwind CSS의 독특한 기능 몇 가지에요:</p>
<ul>
<li>스타일링을 위한 유틸리티 중심 방식.</li>
<li>설정 파일을 통해 매우 사용자 정의 가능.</li>
<li>미리 구축된 컴포넌트 없음; 유틸리티 클래스로 스타일 생성.</li>
<li>미디어 쿼리를 사용한 반응형 디자인.</li>
<li>제품 빌드 최적화를 위한 PurgеCSS 통합.</li>
<li>JIT (Just-In-Time) 모드로 신속한 개발.</li>
</ul>
<p>Tailwind 통합은 보다 직관적이지 않아요. 먼저 Tailwind 컴파일러를 설정해야 해요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'tailwindcss'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/**/*.{html,js}"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그러면 사전 정의된 Tailwind를 사용하여 CSS 클래스를 작성할 수 있게 됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Tailwind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">ContactTextArea</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
    row<span class="token punctuation">,</span>
    placeholder<span class="token punctuation">,</span>
    name<span class="token punctuation">,</span>
    defaultValue<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">row</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"mb-6"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>textarea
            rows<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">}</span>
            placeholder<span class="token operator">=</span><span class="token punctuation">{</span>placeholder<span class="token punctuation">}</span>
            name<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span>
            className<span class="token operator">=</span><span class="token string">"w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"</span>
            defaultValue<span class="token operator">=</span><span class="token punctuation">{</span>defaultValue<span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">ContactInputBox</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
    type<span class="token punctuation">,</span>
    placeholder<span class="token punctuation">,</span>
    name<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"mb-6"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span>
            placeholder<span class="token operator">=</span><span class="token punctuation">{</span>placeholder<span class="token punctuation">}</span>
            name<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span>
            className<span class="token operator">=</span><span class="token string">"w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"</span>
          <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-full px-4 lg:w-1/2 xl:w-5/12"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>form<span class="token operator">></span>
            <span class="token operator">&lt;</span>ContactInputBox type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"name"</span> placeholder<span class="token operator">=</span><span class="token string">"Your Name"</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>ContactInputBox type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"email"</span> placeholder<span class="token operator">=</span><span class="token string">"Your Email"</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>ContactInputBox type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"phone"</span> placeholder<span class="token operator">=</span><span class="token string">"Your Phone"</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>ContactTextArea row<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token string">"Your Message"</span> name<span class="token operator">=</span><span class="token string">"details"</span> defaultValue<span class="token operator">=</span><span class="token string">""</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span> className<span class="token operator">=</span><span class="token string">"w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"</span><span class="token operator">></span>
                Send Message
              <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-foundation" tabindex="-1"><a class="header-anchor" href="#_3-foundation" aria-hidden="true">#</a> 3. Foundation</h1>
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
<p>Foundation은 모든 장치에서 작동하는 멋진 반응형 웹사이트, 앱 및 이메일을 만드는 것을 간단하게 해주는 오픈 소스 반응형 프론트엔드 프레임워크입니다.</p>
<p>Foundation은 사용자가 쉽게 제품에 통합할 수 있는 견고하고 유연한 반응형 그리드, 모달, 타이포그래피, 내비게이션 컴포넌트 및 폼 요소를 포함하고 있습니다. 또한 Foundation은 모듈식이기 때문에 필요에 따라 적게든 많이든 사용할 수 있습니다.</p>
<p>다음은 Foundation의 독특한 기능 몇 가지입니다:</p>
<ul>
<li>유연성을 갖춘 반응형 그리드 시스템.</li>
<li>쉬운 사용을 위한 모듈식 아키텍처.</li>
<li>스타일링을 위한 Sass 전처리기.</li>
<li>내장된 컴포넌트 및 반응형 내비게이션.</li>
<li>Flexbox 및 블록 그리드 지원.</li>
<li>접근성 기능.</li>
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
<p>프로젝트에 Foundation을 통합하는 방법은 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> MenuItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-foundation'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Foundation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Menu style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token string">'34px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>MenuItem<span class="token operator">></span>
        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>홈<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>MenuItem<span class="token operator">></span>
      <span class="token operator">&lt;</span>MenuItem<span class="token operator">></span>
        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>블로그<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>MenuItem<span class="token operator">></span>
      <span class="token operator">&lt;</span>MenuItem<span class="token operator">></span>
        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>소개<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>MenuItem<span class="token operator">></span>
      <span class="token operator">&lt;</span>MenuItem<span class="token operator">></span>
        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>문의<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>MenuItem<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Menu<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-bulma" tabindex="-1"><a class="header-anchor" href="#_4-bulma" aria-hidden="true">#</a> 4. Bulma</h1>
<p>Bulma는 단순함, 반응형 및 맞춤 설정 옵션으로 눈에 띄는 가벼운 CSS 프레임워크입니다.</p>
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
<p>다른 UI 프레임워크와는 다르게 Bulma는 Flexbox에 기반을 두고 있어요. Flexbox는 페이지 요소의 너비를 컨테이너의 너비에 따라 조정하는 CSS 레이아웃 모델이에요. 이로 인해 그리드를 만드는 것과 같은 작업들이 매우 쉬워지며 프레임워크가 가벼운 특성을 유지할 수 있어요.</p>
<p>여기 Bulma의 주요 기능 몇 가지가 있어요:</p>
<ul>
<li>Flexbox를 기반으로 한 현대적인 CSS 프레임워크.</li>
<li>사용하기 쉽고 직관적인 구문.</li>
<li>JavaScript에 의존하지 않음.</li>
<li>내장된 수정자를 사용한 반응형 디자인.</li>
<li>네비게이션 바, 모달, 탭과 같은 컴포넌트.</li>
<li>Sass로 확장 가능함.</li>
</ul>
<p>프로젝트에 Bulma를 통합하는 방법은 다음과 같아요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'bulma/css/bulma.min.css'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Bulma</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>nav className<span class="token operator">=</span><span class="token string">"pagination"</span> role<span class="token operator">=</span><span class="token string">"navigation"</span> aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"pagination"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span> className<span class="token operator">=</span><span class="token string">"pagination-previous"</span><span class="token operator">></span>
          이전
        <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span> className<span class="token operator">=</span><span class="token string">"pagination-next"</span><span class="token operator">></span>
          다음 페이지
        <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token string">"pagination-list"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span> className<span class="token operator">=</span><span class="token string">"pagination-link"</span> aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"페이지 1로 이동"</span><span class="token operator">></span>
              <span class="token number">1</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"pagination-ellipsis"</span><span class="token operator">></span><span class="token operator">&amp;</span>hellip<span class="token punctuation">;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span> className<span class="token operator">=</span><span class="token string">"pagination-link"</span> aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"페이지 45로 이동"</span><span class="token operator">></span>
              <span class="token number">45</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>a
              href<span class="token operator">=</span><span class="token string">"/"</span>
              className<span class="token operator">=</span><span class="token string">"pagination-link is-current"</span>
              aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"페이지 46"</span>
              aria<span class="token operator">-</span>current<span class="token operator">=</span><span class="token string">"page"</span>
              <span class="token operator">></span>
              <span class="token number">46</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span> className<span class="token operator">=</span><span class="token string">"pagination-link"</span> aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"페이지 47로 이동"</span><span class="token operator">></span>
              <span class="token number">47</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"pagination-ellipsis"</span><span class="token operator">></span><span class="token operator">&amp;</span>hellip<span class="token punctuation">;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span> className<span class="token operator">=</span><span class="token string">"pagination-link"</span> aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"페이지 86로 이동"</span><span class="token operator">></span>
              <span class="token number">86</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-uikit" tabindex="-1"><a class="header-anchor" href="#_5-uikit" aria-hidden="true">#</a> 5. UIKit</h1>
<p>UIKit은 웹 애플리케이션을 위한 사용자 인터페이스(UI)를 구축하는 오픈 소스 프레임워크입니다.</p>
<p>이 프레임워크는 구조와 디자인 철학에서 다른 UI 프레임워크와는 다릅니다. 기존의 전통적인 BEM 방법론을 따르는 다른 프레임워크와 달리 UIkit은 구성 요소 중심의 구조를 사용합니다. 이는 구성 요소의 유연성과 재사용성을 가능하게 하며, 복잡한 사용자 인터페이스를 구축하는 데 필요한 코드량을 상당히 줄일 수 있습니다.</p>
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
<p>UIKit의 주요 기능 중 일부는 다음과 같습니다:</p>
<ul>
<li>모듈식이면서 가벼운 프레임워크.</li>
<li>반응형 그리드 시스템.</li>
<li>미리 디자인된 구성 요소(내비게이션 바, 슬라이더, 모달).</li>
<li>플렉스박스 기반 레이아웃.</li>
<li>애니메이션 및 전환 효과.</li>
<li>사용자 정의 및 테마화 가능.</li>
</ul>
<p>UIKit를 프로젝트에 통합하는 방법은 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'uikit/dist/css/uikit.min.css'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Uikit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"uk-flex uk-flex-center uk-margin-top"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>button
        type<span class="token operator">=</span><span class="token string">"button"</span>
        className<span class="token operator">=</span><span class="token string">"uk-button uk-button-default uk-margin-left"</span>
        onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Cancel clicked!'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        Cancel
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="마무리" tabindex="-1"><a class="header-anchor" href="#마무리" aria-hidden="true">#</a> 마무리</h1>
<p>여기서 설명한 것 외에도 많은 CSS 프레임워크가 있습니다. 하지만, 올바른 것을 선택하는 것이 중요합니다.</p>
<p>이렇게 함으로써, 프로젝트에 적합한 CSS 프레임워크를 선택할 수 있습니다!</p>
<p>이 글에서 다룬 코드를 둘러보고 싶다면, 내 Bit Scope를 확인해보세요.</p>
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
<p>이 글이 도움이 되었기를 바랍니다.</p>
<p>읽어 주셔서 감사합니다.</p>
<h1 id="자세히-알아보기" tabindex="-1"><a class="header-anchor" href="#자세히-알아보기" aria-hidden="true">#</a> 자세히 알아보기</h1>
</div></template>
