<template><div><h1 id="next-js에서-html-및-css를-사용하여-슬라이더-만드는-방법" tabindex="-1"><a class="header-anchor" href="#next-js에서-html-및-css를-사용하여-슬라이더-만드는-방법" aria-hidden="true">#</a> Next.js에서 HTML 및 CSS를 사용하여 슬라이더 만드는 방법</h1>
<img src="@source/docs/Nextjs/2024-03-10-Next-js에서-html-css로-슬라이더-만드는-방법/img/Creating-a-Slider-using-Next.js-and-CSS_0.png" />
<p>이 글에서는 React, Next.js 및 CSS를 사용하여 슬라이더를 만드는 과정을 소개합니다.
이 슬라이더는 사용자가 왼쪽 및 오른쪽 탐색 버튼을 사용하여 트렌드 제품 컬렉션을 스크롤할 수 있게 합니다.</p>
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
<h2 id="단계-1-프로젝트-설정하기" tabindex="-1"><a class="header-anchor" href="#단계-1-프로젝트-설정하기" aria-hidden="true">#</a> 단계 1: 프로젝트 설정하기</h2>
<p>먼저, 컴퓨터에 Node.js가 설치되어 있는지 확인하세요.
설치되어 있지 않은 경우 공식 Node.js 웹사이트에서 다운로드할 수 있습니다.</p>
<ul>
<li>다음 명령어를 사용하여 새로운 Next.js 앱을 만듭니다:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="단계-2-트렌드-제품-슬라이더-구축하기" tabindex="-1"><a class="header-anchor" href="#단계-2-트렌드-제품-슬라이더-구축하기" aria-hidden="true">#</a> 단계 2: 트렌드 제품 슬라이더 구축하기</h2>
<p>이제 트렌드 제품 슬라이더를 구축하는 데 필요한 컴포넌트 및 스타일을 생성해 봅시다.</p>
<ul>
<li>프로젝트 디렉토리 내에 components라는 새 디렉토리를 만듭니다.</li>
<li>components 디렉토리 내에 TrendingSlider.js 파일을 생성하고 다음 코드를 추가하세요:</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span> <span class="token comment">// for nextjs 13.4 user</span>
<span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AiOutlineArrowRight<span class="token punctuation">,</span> AiOutlineArrowLeft <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/ai"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./TrendingSlider.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">TrendingSlider</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> filteredItems <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"카메라"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"휴대폰"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">"https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"노트북"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">"https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"헤드폰"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">"https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"키보드"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">"https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"게이밍 마우스"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">slideLeft</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> slider <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"slider"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    slider<span class="token punctuation">.</span>scrollLeft <span class="token operator">=</span> slider<span class="token punctuation">.</span>scrollLeft <span class="token operator">-</span> <span class="token number">235</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">slideRight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> slider <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"slider"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    slider<span class="token punctuation">.</span>scrollLeft <span class="token operator">=</span> slider<span class="token punctuation">.</span>scrollLeft <span class="token operator">+</span> <span class="token number">235</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"trending"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"title-btns"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h3<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"btns"</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>button title<span class="token operator">=</span><span class="token string">"왼쪽으로 스크롤"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>slideLeft<span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>AiOutlineArrowLeft <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
              <span class="token operator">&lt;</span>button title<span class="token operator">=</span><span class="token string">"오른쪽으로 스크롤"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>slideRight<span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>AiOutlineArrowRight <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"row-container"</span> id<span class="token operator">=</span><span class="token string">"slider"</span><span class="token operator">></span>
            <span class="token punctuation">{</span>filteredItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"row-item"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"link"</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"item-header"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>img<span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token string">"product"</span> <span class="token operator">/</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"item-description"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>description<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                    <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"item-price"</span><span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>price<span class="token punctuation">}</span>$<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> TrendingSlider<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>이제 components 디렉토리에 TrendingSlider.css 파일을 만들고 다음 CSS 코드를 추가하세요:</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token function">url</span><span class="token punctuation">(</span>"<span class="token property">https</span><span class="token punctuation">:</span>//fonts.googleapis.com/css2?family=<span class="token property">Blinker</span><span class="token punctuation">:</span>wght<span class="token atrule"><span class="token rule">@200</span><span class="token punctuation">;</span></span></span>400<span class="token punctuation">;</span>600<span class="token punctuation">;</span>700&amp;display=swap"<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> smooth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Blinker"</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 62.5%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* global */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 19px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.row-item</span> <span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 2px solid <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.205<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.15s ease-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.row-item:hover</span> <span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 2px solid <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.trending</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item-header img</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 21rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item-description</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.7rem<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.trending h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2.6rem<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 4.2rem <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.row-container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 2.2rem<span class="token punctuation">;</span>
  <span class="token property">overflow-x</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> smooth<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1rem 0.6rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Chrome, Safari 및 Opera용 스크롤바 숨기기 */</span>
<span class="token selector">.row-container::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>

  <span class="token comment">/* IE, Edge 및 Firefox용 스크롤바 숨기기 */</span>
  <span class="token property">-ms-overflow-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">scrollbar-width</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.title-btns</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btns button</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #373737<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 4rem<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 4rem<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.1s ease-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btns</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 0.4rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btns button:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item-price</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2.2rem<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 1.4rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.link</span> <span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="단계-3-trendingslider-컴포넌트-통합하기" tabindex="-1"><a class="header-anchor" href="#단계-3-trendingslider-컴포넌트-통합하기" aria-hidden="true">#</a> 단계 3: TrendingSlider 컴포넌트 통합하기</h2>
<ul>
<li>프로젝트 디렉토리에 page.js 파일을 생성하고 다음 코드를 추가하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TrendingSlider <span class="token keyword">from</span> <span class="token string">"../components/TrendingSlider"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>TrendingSlider <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-4-어플리케이션-실행하기" tabindex="-1"><a class="header-anchor" href="#단계-4-어플리케이션-실행하기" aria-hidden="true">#</a> 단계 4: 어플리케이션 실행하기</h2>
<p>개발 서버를 시작하려면 터미널에서 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>트렌드 제품 슬라이더가 작동하는 것을 확인하려면 웹 브라우저에서 http://localhost:3000을 접근하세요.</p>
<h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
<p>이 글에서는 React, Next.js 및 CSS를 사용하여 트렌드 제품 슬라이더를 만드는 방법에 대해 배웠습니다. 사용자가 네비게이션 버튼을 사용하여 제품을 탐색할 수 있는 반응형 슬라이더를 만들었습니다. 이러한 종류의 UI 구성 요소는 웹사이트의 사용자 경험을 향상시키고 더 많은 상호 작용성을 부여할 수 있습니다. 프로젝트 요구 사항에 따라 스타일을 더 맞춤화하고 기능을 추가할 수 있습니다.</p>
</div></template>
