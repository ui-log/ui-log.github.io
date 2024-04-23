<template><div><p><img src="@source/docs/Nextjs/2024-04-05-CreatingaResponsiveNavbarinReactABeginnersGuide/img/CreatingaResponsiveNavbarinReactABeginnersGuide_0.png" alt="이미지"></p>
<p>React 애플리케이션에 반응형 네비바를 추가하려고 하는가요? 그렇다면, 당신은 올바른 곳에 계셔요! 이 블로그에서는 제공된 코드를 사용하여 React에서 반응형 네비바를 구축하는 과정을 안내해 드리겠습니다.</p>
<p>시작하기 전에, 이것이 제 첫 블로그이기 때문에, 이와 같은 블로그를 더 보고 싶다면 댓글로 알려 주시기 바랍니다.</p>
<p>그럼, 바로 시작해 볼까요!</p>
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
<p>스텝 1: React 애플리케이션 설정하기</p>
<p>먼저, 아직 React 애플리케이션을 설정하지 않았다면 설정해야 합니다. create-react-app이나 익숙한 다른 유사한 도구를 사용하여 설정할 수 있습니다.</p>
<p>스텝 2: 네비게이션 바 컴포넌트 생성하기</p>
<p>React에서는 애플리케이션 전반에 걸쳐 사용할 수 있는 재사용 가능한 컴포넌트를 만들 수 있습니다. 네비게이션 바 컴포넌트를 만들기 위해 &quot;src&quot; 디렉토리에 &quot;Navbar.jsx&quot;라는 새 파일을 생성하세요.</p>
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
<p>다음으로 Navbar.jsx 파일에 다음 코드를 추가하겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">'./Navbar.module.css'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Navbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 상태 추가</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isActive<span class="token punctuation">,</span> setIsActive<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// active 클래스 추가</span>
  <span class="token keyword">const</span> <span class="token function-variable function">toggleActiveClass</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setIsActive</span><span class="token punctuation">(</span><span class="token operator">!</span>isActive<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// active 클래스를 제거하는 정리 함수</span>
  <span class="token keyword">const</span> <span class="token function-variable function">removeActive</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setIsActive</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>header className<span class="token operator">=</span><span class="token string">"App-header"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>nav className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>styles<span class="token punctuation">.</span>navbar<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token comment">/* 로고 */</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">'#home'</span> className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>styles<span class="token punctuation">.</span>logo<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>Dev<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
          <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>styles<span class="token punctuation">.</span>navMenu<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>isActive <span class="token operator">?</span> styles<span class="token punctuation">.</span>active <span class="token operator">:</span> <span class="token string">''</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>li onClick<span class="token operator">=</span><span class="token punctuation">{</span>removeActive<span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">'#home'</span> className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>styles<span class="token punctuation">.</span>navLink<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li onClick<span class="token operator">=</span><span class="token punctuation">{</span>removeActive<span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">'#home'</span> className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>styles<span class="token punctuation">.</span>navLink<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>Catalog<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li onClick<span class="token operator">=</span><span class="token punctuation">{</span>removeActive<span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">'#home'</span> className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>styles<span class="token punctuation">.</span>navLink<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>All products<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li onClick<span class="token operator">=</span><span class="token punctuation">{</span>removeActive<span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">'#home'</span> className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>styles<span class="token punctuation">.</span>navLink<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>Contact<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>styles<span class="token punctuation">.</span>hamburger<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>isActive <span class="token operator">?</span> styles<span class="token punctuation">.</span>active <span class="token operator">:</span> <span class="token string">''</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>toggleActiveClass<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>styles<span class="token punctuation">.</span>bar<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>styles<span class="token punctuation">.</span>bar<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>styles<span class="token punctuation">.</span>bar<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Navbar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useState 훅을 사용하여 isActive라는 상태 변수를 만듭니다. 처음에는 false로 설정됩니다. 이 상태 변수는 내비게이션 메뉴 및 햄버거 아이콘을 클릭할 때 active 클래스를 토글하는 데 사용됩니다.</p>
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
<p>toggleActiveClass 함수는 햄버거 아이콘이 클릭될 때 isActive 상태 변수를 토글합니다. removeActive 함수는 네비게이션 링크 중 하나를 클릭했을 때 isActive 상태 변수를 false로 설정합니다.</p>
<p>네비게이션 메뉴는 웹사이트의 각 페이지로 연결된 링크가 있는 순서 없는 목록입니다. 각 링크는 목록 항목 태그로 감싸져 있으며, 클릭할 때마다 removeActive 함수가 호출되어 네비게이션 메뉴와 햄버거 아이콘에서 활성 클래스를 제거합니다.</p>
<p>단계 3: 네비게이션바에 CSS 스타일링 추가하기</p>
<p>네비게이션바를 스타일링하기 위해 Navbar.module.css 라는 CSS 모듈 파일을 생성하고 Navbar.jsx에서 import합니다. 다음과 같이 import styles from ‘./Navbar.module.css’ 코드를 사용하세요. 해당 파일의 코드는 다음과 같습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 기본 스타일 고정 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">*</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  ul <span class="token punctuation">{</span>
    list<span class="token operator">-</span>style<span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  a <span class="token punctuation">{</span>
    text<span class="token operator">-</span>decoration<span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> black<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 18px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">/* 네비게이션 바 */</span>
  <span class="token punctuation">.</span>navbar <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> aliceblue<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px 20px<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 40px<span class="token punctuation">;</span>
    min<span class="token operator">-</span>height<span class="token operator">:</span> 70px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">/* 로고 */</span>
  <span class="token punctuation">.</span>logo <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 30px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> Arial<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">/* ul */</span>
  <span class="token punctuation">.</span>navMenu <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 60px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">/* 미디어 쿼리 */</span>
  
  @media screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 780px</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
    <span class="token comment">/* 햄버거 아이콘 */</span>
    <span class="token punctuation">.</span>hamburger <span class="token punctuation">{</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
      <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token punctuation">.</span>bar <span class="token punctuation">{</span>
          background<span class="token operator">-</span>color<span class="token operator">:</span> #120f0b<span class="token punctuation">;</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
          <span class="token literal-property property">height</span><span class="token operator">:</span> 3px<span class="token punctuation">;</span>
          <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
          <span class="token literal-property property">margin</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
          <span class="token operator">-</span>webkit<span class="token operator">-</span>transition<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>3s ease<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>out<span class="token punctuation">;</span>
          <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>3s ease<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>out<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  
    <span class="token comment">/* 바에 active 클래스 추가 */</span>
    <span class="token punctuation">.</span>hamburger<span class="token punctuation">.</span>active <span class="token punctuation">.</span>bar<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">2</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>hamburger<span class="token punctuation">.</span>active <span class="token punctuation">.</span>bar<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">1</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>hamburger<span class="token punctuation">.</span>active <span class="token punctuation">.</span>bar<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">3</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span><span class="token operator">-</span>8px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token operator">-</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token comment">/* 네비게이션 메뉴 */</span>
    <span class="token punctuation">.</span>navMenu<span class="token punctuation">{</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
      flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
      <span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> 70px<span class="token punctuation">;</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
      text<span class="token operator">-</span>align<span class="token operator">:</span> start<span class="token punctuation">;</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
      <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>7s ease<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>out<span class="token punctuation">;</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> aliceblue<span class="token punctuation">;</span>
      <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token punctuation">.</span>navMenu<span class="token punctuation">.</span>active<span class="token punctuation">{</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token punctuation">.</span>navMenu li <span class="token punctuation">{</span>
      <span class="token literal-property property">margin</span><span class="token operator">:</span> 16px <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드는 웹페이지 내비게이션 바의 기본 스타일을 정의합니다. 처음 몇 줄은 모든 패딩과 여백을 제거하고 박스 모델(box-sizing)을 border-box로 설정하여 요소의 전체 폭과 높이에 테두리와 패딩이 포함되도록 합니다.</p>
<p>그 다음 코드는 네비게이션 바 링크를 포함하는 순서 없는 목록(ul) 요소의 스타일을 정의합니다. 기본 목록 스타일을 제거하고 네비게이션 바의 모든 링크(a)에 대해 텍스트 효과를 제거하고 색상을 검정색으로, 폰트 크기를 18px로 설정합니다.```</p>
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
<p><code v-pre>.navbar</code> 클래스는 네브바 컨테이너의 배경색, 안쪽 여백 및 레이아웃을 정의합니다. 요소들 간의 가로 간격을 40px로 설정하고 <code v-pre>min-height</code> 속성을 70px로 설정하여 수직으로 요소들을 가운데 정렬하는데 flexbox를 사용합니다.</p>
<p><code v-pre>.logo</code> 클래스는 네브바 로고의 글꼴 크기와 글꼴을 설정합니다.</p>
<p><code v-pre>.navMenu</code> 클래스는 네브바 링크의 레이아웃과 간격을 정의합니다. <code v-pre>display</code> 속성을 flex로 설정하고 <code v-pre>justify-content</code> 및 <code v-pre>gap</code> 속성을 사용하여 링크들을 고르게 간격을 띄웁니다.</p>
<p>그런 다음 코드는 작은 화면 크기에 맞게 네브바를 조정하는 미디어 쿼리를 정의합니다. 화면 폭이 780px 미만이면, <code v-pre>.hamburger</code> 클래스는 <code v-pre>display</code>를 <code v-pre>block</code>으로 설정하고 <code v-pre>cursor</code>를 <code v-pre>pointer</code>로 설정하며, <code v-pre>.bar</code> 클래스는 메뉴 아이콘을 나타내는 세 개의 수평 막대에 대한 스타일을 정의합니다. 코드는 활성화된 햄버거 메뉴일 때 막대의 위치와 회전을 설정하기 위해 <code v-pre>nth-child</code> 선택자를 사용합니다.</p>
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
<p><strong>.navMenu</strong> 클래스는 햄버거 메뉴가 활성화될 때 링크들의 레이아웃을 조정하는 데 사용됩니다. <strong>position</strong> 속성을 사용하여 메뉴를 네비게이션 바 아래에 나타나도록 설정하고, <strong>left</strong> 속성을 -100%로 설정하여 숨깁니다. 메뉴가 활성화되면 <strong>left</strong> 속성이 0으로 설정되어 메뉴가 나타납니다. 마지막으로, <strong>.navMenu li</strong> 클래스는 메뉴의 각 링크에 대한 여백을 설정합니다.</p>
<p>아래는 최종 모습입니다:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CreatingaResponsiveNavbarinReactABeginnersGuide/img/CreatingaResponsiveNavbarinReactABeginnersGuide_1.png" alt="이미지 1"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-CreatingaResponsiveNavbarinReactABeginnersGuide/img/CreatingaResponsiveNavbarinReactABeginnersGuide_2.png" alt="이미지 2"></p>
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
<img src="@source/docs/Nextjs/2024-04-05-CreatingaResponsiveNavbarinReactABeginnersGuide/img/CreatingaResponsiveNavbarinReactABeginnersGuide_3.png" />
<p>지금까지입니다! 이 튜토리얼이 React에서 자체 반응형 네비게이션 바를 만드는 데 도움이 되었으면 좋겠네요.</p>
<p>질문, 피드백 또는 제안 사항이 있으면 아래에 댓글을 남겨주세요.</p>
<p>또한, 이 프로젝트의 전체 코드를 확인하고 싶다면 GitHub에서 찾을 수 있습니다.</p>
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
<p>제 LinkedIn이나 Twitter로 연락하셔도 좋아요.</p>
<p>읽어 주셔서 감사합니다! 행복한 코딩 되세요!</p>
</div></template>
