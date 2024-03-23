<template><div><img src="@source/docs/Tech/2024-03-23-GoodbyeSASSwelcomebacknativeCSS/img/Goodbye-SASS-👋-welcome-back-native-CSS_0.png" />
<p>Sass는 강력한 전처리기로 자리를 잡아 왔습니다. 10년 넘게 프로젝트의 중심 역할을 해 왔는데, 확장 가능하고 안정적인 CSS 패키지를 효과적으로 구성할 수 있도록 도와주었습니다. 오늘날에도 여전히 Sass를 엄청난 강력한 도구로 여기고 있습니다. 그러나 우리가 2024년으로 나아가는 시점에서 CSS가 빠르게 발전했다는 점은 부인할 수 없습니다. Sass만의 독특한 기능들이 현재 CSS에 기본적으로 통합되었습니다. 그 중에서 변수와 가장 최신 기능인 CSS 중첩도 포함됩니다.</p>
<h1 id="변수" tabindex="-1"><a class="header-anchor" href="#변수" aria-hidden="true">#</a> 변수</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">:</span>root <span class="token punctuation">{</span>
  <span class="token operator">--</span>button<span class="token operator">-</span>padding<span class="token operator">:</span> 10px 20px<span class="token punctuation">;</span>
  <span class="token operator">--</span>button<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span> #007bff<span class="token punctuation">;</span>
  <span class="token operator">--</span>button<span class="token operator">-</span>text<span class="token operator">-</span>color<span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token operator">--</span>button<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token operator">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>button <span class="token punctuation">{</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>button<span class="token operator">-</span>padding<span class="token punctuation">)</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>button<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>button<span class="token operator">-</span>text<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>button<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> background<span class="token operator">-</span>color <span class="token number">0</span><span class="token punctuation">.</span>3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>변수를 정의하는 것은 오랫동안 SCSS의 독특한 강점으로 간주되어 왔습니다. 이는 많은 속성을 중앙에서 관리할 수 있게 해주어 CSS에서 오랫동안 그리워했던 기능이었습니다. 그러나 오늘날에는 CSS에서도 Sass와 유사한 방식으로 변수를 정의할 수 있습니다. 그러나 중요한 차이점은 Sass 변수가 전처리기 컨텍스트 내에서만 존재하는 반면 CSS 변수는 브라우저에서 사용할 수 있고 JavaScript를 통해 동적으로 덮어쓸 수 있다는 것입니다.</p>
<h1 id="css-중첩" tabindex="-1"><a class="header-anchor" href="#css-중첩" aria-hidden="true">#</a> CSS 중첩</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>blog <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>neutral<span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">.</span>blog<span class="token operator">-</span>item <span class="token punctuation">{</span>
      <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>neutral<span class="token operator">-</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token operator">&amp;</span> span <span class="token punctuation">{</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다른 요소의 스타일 규칙을 정의할 수 있는 능력은 CSS 작성을 획기적으로 단순화합니다. 부모 선택기 내에서 하위 요소나 가상 선택기에 동일한 선택기를 반복 사용하는 대신 중첩을 사용하면 이들을 부모 선택기 내에 그룹화할 수 있습니다. 이 기술은 명확하고 계층적으로 구조화된 효율적인 코드베이스로 이어지게 됩니다.</p>
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
<p>CSS 중첩의 브라우저 지원률이 84% 이상이고 중첩 선택자의 경우 86% 이상이므로 이 기술은 점점 더 접근성이 좋아지고 있습니다.</p>
<h1 id="is-가상-클래스" tabindex="-1"><a class="header-anchor" href="#is-가상-클래스" aria-hidden="true">#</a> :is 가상 클래스</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token parameter">selector1<span class="token punctuation">,</span> selector2<span class="token punctuation">,</span> selector3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 스타일 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:is 가상 클래스는 선택자 개념을 혁신적으로 변화시켜 여러 선택자 목록을 허용하고 이러한 선택자 중 어느 것이든 일치하는 모든 요소에 스타일을 적용합니다. 이로써 DOM에서 요소를 선택하고 스타일링하는 것이 용이해집니다.</p>
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
<p>긴 선택기 목록 대신 :is()를 사용하여 가독성을 향상시키고 긴 선택기를 피할 수 있습니다.</p>
<h1 id="has-가상-클래스" tabindex="-1"><a class="header-anchor" href="#has-가상-클래스" aria-hidden="true">#</a> :has() 가상 클래스</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>hero<span class="token operator">:</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">.</span>hero<span class="token operator">-</span>button</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>accent<span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS 가상 클래스 :has()는 후손에 기반하여 요소를 선택하는 강력한 방법을 제공하여 조건부 스타일을 적용하는 것과 유사합니다.</p>
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
<h1 id="컨테이너-쿼리" tabindex="-1"><a class="header-anchor" href="#컨테이너-쿼리" aria-hidden="true">#</a> 컨테이너 쿼리</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>component <span class="token punctuation">{</span>
  <span class="token operator">--</span>테마<span class="token operator">:</span> dark<span class="token punctuation">;</span>
  container<span class="token operator">-</span>name<span class="token operator">:</span> fancy<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@container fancy <span class="token function">style</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">--</span>테마<span class="token operator">:</span> dark</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>fancy <span class="token punctuation">{</span>
    <span class="token comment">/* 어두운 스타일. */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">container</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 720px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>headline <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 2em<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>컨테이너 쿼리는 CSS3 이후 웹 디자인에서 가장 혁신적인 기술로 평가됩니다. 반응형 디자인의 개념을 확장하여 요소가 컨테이너의 크기에 따라 조정되도록 합니다. 이 기술을 통해 요소의 디자인이 동적으로 변경되어 다양한 상황에 따라 유연하고 적응적인 디자인을 할 수 있습니다.</p>
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
<p>만약 fancy 컨테이너가 변수 — theme: dark를 가지고 있다면 아래 CSS를 추가해주세요.</p>
<h1 id="캐스케이드-레이어스" tabindex="-1"><a class="header-anchor" href="#캐스케이드-레이어스" aria-hidden="true">#</a> 캐스케이드 레이어스</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@layer utilities <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>button <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">.</span>button<span class="token operator">--</span>lg <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>8rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>캐스케이드 레이어스를 사용하면 클래스, 아이디 등을 중첩하지 않고도 높은 특이성을 위해 자체 레이어(레이어)를 할당하여 사용할 수 있습니다. @layer 규칙을 사용하고 레이어드 @imports를 통해 캐스케이드의 자체 레이어를 구축할 수 있습니다. 낮은 우선순위 스타일부터 리셋 및 기본값, 테마, 프레임워크, 디자인 시스템, 컴포넌트, 유틸리티, 오버라이드 스타일까지 커스텀 레이어를 구축할 수 있습니다. 캐스케이드 레이어는 더 많은 제어를 제공합니다.</p>
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
<h1 id="sass의-미래" tabindex="-1"><a class="header-anchor" href="#sass의-미래" aria-hidden="true">#</a> Sass의 미래</h1>
<p>그 말은 Sass가 더 이상 쓸모가 없어졌다는 걸 의미합니까? 전혀 아닙니다. 픽셀을 rem으로 변환하는 믹스인과 함수 등은 여전히 Sass의 대체할 수 없는 장점입니다. 그럼에도 불구하고, 저는 대부분의 프로젝트에서 Sass를 포기하기로 결정했습니다. 대신 Sublime Editor에서 미리 정의된 코드 블록과 패키지를 사용하여 작업 흐름을 크게 개선했습니다.</p>
<h1 id="안녕-sass" tabindex="-1"><a class="header-anchor" href="#안녕-sass" aria-hidden="true">#</a> 안녕 SASS?</h1>
<p>2024년에는 Sass의 혜택인 설치, 사용 및 컴파일 문제가 더 이상 사용하기에 정당화되지 않을 것이라고 확신합니다. 현대 CSS의 확장성과 사용자 친화성 덕분에 추가 도구 없이도 충분히 할 수 있게 되었습니다.</p>
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
<p>저의 Themex 프로젝트는 새로운 CSS 기능을 결합할 때 얼마나 강력한지 보여줍니다: <a href="https://app.themexproject.com" target="_blank" rel="noopener noreferrer">https://app.themexproject.com<ExternalLinkIcon/></a></p>
<p>CSS의 발전으로 인해 작고 큰 프로젝트를 직접적이고 쉽게 구현하는 것을 기대합니다.</p>
<p>안녕 Sass, 고맙습니다!</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1000/1*zE69ta024X0m4DJM4jRXlQ.gif" alt="이미지"></p>
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
<p>원래 2024년 3월 20일에 https://dev.to에서 게시되었습니다.</p>
</div></template>
